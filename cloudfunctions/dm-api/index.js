const cloud = require("@cloudbase/node-sdk");
const crypto = require("crypto");

const app = cloud.init({ env: cloud.SYMBOL_CURRENT_ENV });
const db = app.database();
const _ = db.command;

const CONVERSATIONS = "dm_conversations";
const MESSAGES = "dm_messages";
const ANALYTICS_STATS = "site_analytics_stats";
const ANALYTICS_VISITORS = "site_analytics_visitors";

const MAX_CONTENT_LENGTH = 2000;
const MAX_NICKNAME_LENGTH = 30;

const MESSAGE_RATE_LIMIT_WINDOW = 60 * 1000;
const MESSAGE_RATE_LIMIT_MAX = 10;
const ADMIN_AUTH_WINDOW = 10 * 60 * 1000;
const ADMIN_AUTH_MAX = 5;
const PERMIT_AUTH_WINDOW = 10 * 60 * 1000;
const PERMIT_AUTH_MAX = 8;
const ANALYTICS_TRACK_WINDOW = 60 * 60 * 1000;
const ANALYTICS_TRACK_MAX_PER_VISITOR = 120;
const ANALYTICS_TRACK_MAX_PER_IP = 300;

const VISITOR_TOKEN_TTL_MS = 30 * 24 * 60 * 60 * 1000;
const ADMIN_TOKEN_TTL_MS = 12 * 60 * 60 * 1000;
const PERMIT_TOKEN_TTL_MS = 8 * 60 * 60 * 1000;
const TOKEN_VERSION = 1;

const rateLimitMap = new Map();

function sanitize(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getSessionSecret() {
  return process.env.APP_SESSION_SECRET || process.env.ADMIN_PASSWORD || "";
}

function getAllowedOrigins() {
  const raw = process.env.ALLOWED_ORIGINS || "";
  return raw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function getOrigin(event) {
  const headers = event.headers || {};
  return headers.origin || headers.Origin || "";
}

function buildCorsHeaders(event) {
  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Authorization, Content-Type",
  };

  const allowedOrigins = getAllowedOrigins();
  if (allowedOrigins.length === 0) {
    headers["Access-Control-Allow-Origin"] = "*";
    return headers;
  }

  const origin = getOrigin(event);
  if (origin && allowedOrigins.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers.Vary = "Origin";
    return headers;
  }

  if (!origin && allowedOrigins.length === 1) {
    headers["Access-Control-Allow-Origin"] = allowedOrigins[0];
    headers.Vary = "Origin";
  }

  return headers;
}

function jsonResponse(event, body, statusCode = 200) {
  return {
    statusCode,
    headers: buildCorsHeaders(event),
    body: JSON.stringify(body),
  };
}

function getClientIp(event) {
  const headers = event.headers || {};
  const forwardedFor = headers["x-forwarded-for"] || headers["X-Forwarded-For"] || "";
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const requestContext = event.requestContext || {};
  return requestContext.sourceIp || requestContext.sourceIpV4 || "unknown";
}

function getRateLimitState(key) {
  const now = Date.now();
  const record = rateLimitMap.get(key);
  if (!record || now - record.windowStart > record.windowMs) {
    return null;
  }
  return record;
}

function checkRateLimit(key, windowMs, max) {
  const now = Date.now();
  const record = getRateLimitState(key);

  if (!record) {
    rateLimitMap.set(key, { windowStart: now, count: 1, windowMs });
    return { allowed: true, retryAfterMs: 0 };
  }

  if (record.count >= max) {
    return {
      allowed: false,
      retryAfterMs: Math.max(0, record.windowStart + windowMs - now),
    };
  }

  record.count += 1;
  return { allowed: true, retryAfterMs: 0 };
}

function hashText(value) {
  return crypto.createHash("sha256").update(String(value || ""), "utf8").digest();
}

function safeEqualText(a, b) {
  return crypto.timingSafeEqual(hashText(a), hashText(b));
}

function base64urlEncode(value) {
  return Buffer.from(value).toString("base64url");
}

function base64urlDecode(value) {
  return Buffer.from(value, "base64url").toString("utf8");
}

function signToken(payload) {
  const secret = getSessionSecret();
  if (!secret) {
    throw new Error("Missing APP_SESSION_SECRET or ADMIN_PASSWORD");
  }

  const encodedPayload = base64urlEncode(JSON.stringify(payload));
  const signature = crypto
    .createHmac("sha256", secret)
    .update(encodedPayload)
    .digest("base64url");

  return `${encodedPayload}.${signature}`;
}

function verifyToken(token, expectedType) {
  if (!token || typeof token !== "string") return null;

  const secret = getSessionSecret();
  if (!secret) return null;

  const parts = token.split(".");
  if (parts.length !== 2) return null;

  const [encodedPayload, providedSignature] = parts;
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(encodedPayload)
    .digest("base64url");

  if (!safeEqualText(providedSignature, expectedSignature)) {
    return null;
  }

  try {
    const payload = JSON.parse(base64urlDecode(encodedPayload));
    if (!payload || payload.v !== TOKEN_VERSION) return null;
    if (expectedType && payload.type !== expectedType) return null;
    if (typeof payload.exp !== "number" || payload.exp <= Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

function createToken(type, extraPayload, ttlMs) {
  const now = Date.now();
  return signToken({
    ...extraPayload,
    type,
    iat: now,
    exp: now + ttlMs,
    v: TOKEN_VERSION,
  });
}

function getBearerToken(event) {
  const headers = event.headers || {};
  const authorization = headers.authorization || headers.Authorization || "";
  const match = authorization.match(/^Bearer\s+(.+)$/i);
  return match ? match[1].trim() : "";
}

function getVisitorSession(event) {
  return verifyToken(getBearerToken(event), "visitor");
}

function getAdminSession(event) {
  return verifyToken(getBearerToken(event), "admin");
}

function getPermitSession(event) {
  return verifyToken(getBearerToken(event), "permit");
}

function parseBody(event) {
  if (!event.body) return {};

  try {
    const raw = event.isBase64Encoded
      ? Buffer.from(event.body, "base64").toString("utf8")
      : event.body;
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function getQuery(event) {
  return event.queryStringParameters || {};
}

function normalizeNickname(nickname) {
  const safeName = sanitize(String(nickname || "").trim().slice(0, MAX_NICKNAME_LENGTH));
  return safeName || "Anonymous";
}

function normalizeContent(content) {
  const trimmed = typeof content === "string" ? content.trim() : "";
  if (!trimmed) return "";
  if (trimmed.length > MAX_CONTENT_LENGTH) return null;
  return sanitize(trimmed);
}

function parseThingsItems() {
  const raw = process.env.THINGS_CONTENT_JSON;
  if (!raw) return [];

  try {
    let source = raw;
    if (raw.startsWith("base64:")) {
      source = Buffer.from(raw.slice("base64:".length), "base64").toString("utf8");
    }

    let parsed = JSON.parse(source);
    if (typeof parsed === "string") {
      parsed = JSON.parse(parsed);
    }
    if (!Array.isArray(parsed)) return [];

    return parsed
      .map((item) => ({
        name: String(item && item.name ? item.name : "").trim(),
        url: String(item && item.url ? item.url : "").trim(),
      }))
      .filter((item) => item.name && /^https:\/\//i.test(item.url));
  } catch {
    return [];
  }
}

function normalizeAnalyticsVisitorId(visitorId) {
  const value = String(visitorId || "").trim();
  if (!value || value.length > 128) return "";
  return value.replace(/[^A-Za-z0-9_-]/g, "");
}

function normalizePagePath(pagePath) {
  const value = String(pagePath || "/").trim();
  if (!value) return "/";
  return value.slice(0, 256);
}

async function getAnalyticsStatsDoc(siteKey) {
  const result = await db
    .collection(ANALYTICS_STATS)
    .where({ siteKey })
    .limit(1)
    .get();

  return result.data[0] || null;
}

async function handleAnalyticsTrack(event) {
  const body = parseBody(event);
  const visitorId = normalizeAnalyticsVisitorId(body.visitorId);
  const pagePath = normalizePagePath(body.pagePath);
  const siteKey = String(body.siteKey || "personal-homepage").trim() || "personal-homepage";

  if (!visitorId) {
    return jsonResponse(event, { error: "visitorId is required" }, 400);
  }

  const visitorGate = checkRateLimit(
    `analytics-visitor:${siteKey}:${visitorId}`,
    ANALYTICS_TRACK_WINDOW,
    ANALYTICS_TRACK_MAX_PER_VISITOR
  );
  const ipGate = checkRateLimit(
    `analytics-ip:${siteKey}:${getClientIp(event)}`,
    ANALYTICS_TRACK_WINDOW,
    ANALYTICS_TRACK_MAX_PER_IP
  );

  if (!visitorGate.allowed || !ipGate.allowed) {
    return jsonResponse(event, { error: "Rate limit exceeded" }, 429);
  }

  const visitorHash = crypto
    .createHash("sha256")
    .update(`${siteKey}:${visitorId}`, "utf8")
    .digest("hex");
  const now = Date.now();

  const existingVisitor = await db
    .collection(ANALYTICS_VISITORS)
    .where({ siteKey, visitorHash })
    .limit(1)
    .get();

  const isNewVisitor = existingVisitor.data.length === 0;

  if (isNewVisitor) {
    await db.collection(ANALYTICS_VISITORS).add({
      siteKey,
      visitorHash,
      firstSeenAt: now,
      lastSeenAt: now,
      lastPath: pagePath,
    });
  } else {
    await db.collection(ANALYTICS_VISITORS).doc(existingVisitor.data[0]._id).update({
      lastSeenAt: now,
      lastPath: pagePath,
    });
  }

  const currentStats = await getAnalyticsStatsDoc(siteKey);
  let uv;
  let pv;

  if (!currentStats) {
    uv = 1;
    pv = 1;
    await db.collection(ANALYTICS_STATS).add({
      siteKey,
      uv,
      pv,
      createdAt: now,
      updatedAt: now,
    });
  } else {
    uv = Number(currentStats.uv || 0) + (isNewVisitor ? 1 : 0);
    pv = Number(currentStats.pv || 0) + 1;
    await db.collection(ANALYTICS_STATS).doc(currentStats._id).update({
      uv,
      pv,
      updatedAt: now,
    });
  }

  return jsonResponse(event, {
    ok: true,
    siteKey,
    uv,
    pv,
    isNewVisitor,
  });
}

async function handleVisitorSession(event) {
  const token = createToken(
    "visitor",
    { visitorId: crypto.randomUUID() },
    VISITOR_TOKEN_TTL_MS
  );

  return jsonResponse(event, { ok: true, token });
}

async function handleCheckNickname(event) {
  const visitor = getVisitorSession(event);
  if (!visitor) {
    return jsonResponse(event, { error: "Unauthorized" }, 401);
  }

  const body = parseBody(event);
  const nickname = String(body.nickname || "").trim();

  if (!nickname) {
    return jsonResponse(event, { error: "nickname is required" }, 400);
  }

  const safeName = sanitize(nickname.slice(0, MAX_NICKNAME_LENGTH));
  const existing = await db
    .collection(CONVERSATIONS)
    .where({ nickname: safeName, visitorId: _.neq(visitor.visitorId) })
    .limit(1)
    .get();

  return jsonResponse(event, {
    ok: true,
    taken: existing.data.length > 0,
  });
}

async function handleSend(event) {
  const visitor = getVisitorSession(event);
  if (!visitor) {
    return jsonResponse(event, { error: "Unauthorized" }, 401);
  }

  const body = parseBody(event);
  const safeContent = normalizeContent(body.content);
  if (safeContent === null) {
    return jsonResponse(event, { error: "Content too long" }, 400);
  }
  if (!safeContent) {
    return jsonResponse(event, { error: "content is required" }, 400);
  }

  const visitorRate = checkRateLimit(
    `send:${visitor.visitorId}`,
    MESSAGE_RATE_LIMIT_WINDOW,
    MESSAGE_RATE_LIMIT_MAX
  );
  const ipRate = checkRateLimit(
    `send-ip:${getClientIp(event)}`,
    MESSAGE_RATE_LIMIT_WINDOW,
    MESSAGE_RATE_LIMIT_MAX * 2
  );

  if (!visitorRate.allowed || !ipRate.allowed) {
    return jsonResponse(event, { error: "Rate limit exceeded" }, 429);
  }

  const safeName = normalizeNickname(body.nickname);
  const now = Date.now();

  const convResult = await db
    .collection(CONVERSATIONS)
    .where({ visitorId: visitor.visitorId })
    .limit(1)
    .get();

  let conversationId;

  if (convResult.data.length === 0) {
    const addResult = await db.collection(CONVERSATIONS).add({
      visitorId: visitor.visitorId,
      nickname: safeName,
      createdAt: now,
      lastMessageAt: now,
      unreadByAdmin: 1,
      unreadByVisitor: 0,
    });
    conversationId = addResult.id;
  } else {
    conversationId = convResult.data[0]._id;
    await db.collection(CONVERSATIONS).doc(conversationId).update({
      lastMessageAt: now,
      unreadByAdmin: _.inc(1),
      nickname: safeName,
    });
  }

  await db.collection(MESSAGES).add({
    conversationId,
    sender: "visitor",
    content: safeContent,
    createdAt: now,
  });

  return jsonResponse(event, { ok: true, conversationId });
}

async function handlePoll(event) {
  const visitor = getVisitorSession(event);
  if (!visitor) {
    return jsonResponse(event, { error: "Unauthorized" }, 401);
  }

  const convResult = await db
    .collection(CONVERSATIONS)
    .where({ visitorId: visitor.visitorId })
    .limit(1)
    .get();

  if (convResult.data.length === 0) {
    return jsonResponse(event, { conversation: null, messages: [] });
  }

  const conv = convResult.data[0];

  if (conv.unreadByVisitor > 0) {
    await db.collection(CONVERSATIONS).doc(conv._id).update({
      unreadByVisitor: 0,
    });
  }

  const msgResult = await db
    .collection(MESSAGES)
    .where({ conversationId: conv._id })
    .orderBy("createdAt", "asc")
    .limit(200)
    .get();

  return jsonResponse(event, {
    conversation: {
      id: conv._id,
      nickname: conv.nickname,
      unreadByVisitor: conv.unreadByVisitor,
    },
    messages: msgResult.data.map((message) => ({
      id: message._id,
      sender: message.sender,
      content: message.content,
      createdAt: message.createdAt,
    })),
  });
}

async function handleAdminAuth(event) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    return jsonResponse(event, { error: "ADMIN_PASSWORD is not configured" }, 503);
  }

  const gate = checkRateLimit(
    `admin-auth:${getClientIp(event)}`,
    ADMIN_AUTH_WINDOW,
    ADMIN_AUTH_MAX
  );
  if (!gate.allowed) {
    return jsonResponse(event, { error: "Too many attempts" }, 429);
  }

  const body = parseBody(event);
  const password = String(body.password || "");
  if (!password) {
    return jsonResponse(event, { error: "password is required" }, 400);
  }

  if (!safeEqualText(password, adminPassword)) {
    await delay(800);
    return jsonResponse(event, { error: "Unauthorized" }, 401);
  }

  const token = createToken("admin", {}, ADMIN_TOKEN_TTL_MS);
  return jsonResponse(event, { ok: true, token, expiresInMs: ADMIN_TOKEN_TTL_MS });
}

async function handleAdminConversations(event) {
  const admin = getAdminSession(event);
  if (!admin) {
    return jsonResponse(event, { error: "Unauthorized" }, 401);
  }

  const result = await db
    .collection(CONVERSATIONS)
    .orderBy("lastMessageAt", "desc")
    .limit(100)
    .get();

  return jsonResponse(event, {
    conversations: result.data.map((conversation) => ({
      id: conversation._id,
      nickname: conversation.nickname,
      lastMessageAt: conversation.lastMessageAt,
      unreadByAdmin: conversation.unreadByAdmin,
      createdAt: conversation.createdAt,
    })),
  });
}

async function handleAdminMessages(event) {
  const admin = getAdminSession(event);
  if (!admin) {
    return jsonResponse(event, { error: "Unauthorized" }, 401);
  }

  const { conversationId } = getQuery(event);
  if (!conversationId) {
    return jsonResponse(event, { error: "conversationId is required" }, 400);
  }

  await db.collection(CONVERSATIONS).doc(conversationId).update({
    unreadByAdmin: 0,
  });

  const result = await db
    .collection(MESSAGES)
    .where({ conversationId })
    .orderBy("createdAt", "asc")
    .limit(200)
    .get();

  return jsonResponse(event, {
    messages: result.data.map((message) => ({
      id: message._id,
      sender: message.sender,
      content: message.content,
      createdAt: message.createdAt,
    })),
  });
}

async function handleAdminReply(event) {
  const admin = getAdminSession(event);
  if (!admin) {
    return jsonResponse(event, { error: "Unauthorized" }, 401);
  }

  const body = parseBody(event);
  const conversationId = String(body.conversationId || "").trim();
  const safeContent = normalizeContent(body.content);

  if (safeContent === null) {
    return jsonResponse(event, { error: "Content too long" }, 400);
  }
  if (!conversationId || !safeContent) {
    return jsonResponse(event, { error: "conversationId and content are required" }, 400);
  }

  const now = Date.now();

  await db.collection(MESSAGES).add({
    conversationId,
    sender: "admin",
    content: safeContent,
    createdAt: now,
  });

  await db.collection(CONVERSATIONS).doc(conversationId).update({
    lastMessageAt: now,
    unreadByVisitor: _.inc(1),
  });

  return jsonResponse(event, { ok: true });
}

async function handlePermitAuth(event) {
  const permitCode = process.env.THINGS_PERMIT_CODE;
  if (!permitCode) {
    return jsonResponse(event, { error: "THINGS_PERMIT_CODE is not configured" }, 503);
  }

  const gate = checkRateLimit(
    `permit-auth:${getClientIp(event)}`,
    PERMIT_AUTH_WINDOW,
    PERMIT_AUTH_MAX
  );
  if (!gate.allowed) {
    return jsonResponse(event, { error: "Too many attempts" }, 429);
  }

  const body = parseBody(event);
  const code = String(body.code || "").trim();
  if (!code) {
    return jsonResponse(event, { error: "code is required" }, 400);
  }

  if (!safeEqualText(code, permitCode)) {
    await delay(500);
    return jsonResponse(event, { error: "Unauthorized" }, 401);
  }

  const token = createToken("permit", { resource: "things" }, PERMIT_TOKEN_TTL_MS);
  return jsonResponse(event, { ok: true, token, expiresInMs: PERMIT_TOKEN_TTL_MS });
}

async function handlePermitContent(event) {
  const permit = getPermitSession(event);
  if (!permit || permit.resource !== "things") {
    return jsonResponse(event, { error: "Unauthorized" }, 401);
  }

  const items = parseThingsItems();
  if (items.length === 0) {
    return jsonResponse(event, { error: "No protected content configured" }, 503);
  }

  return jsonResponse(event, { ok: true, items });
}

exports.main = async (event) => {
  const method = event.httpMethod || "GET";
  const path = event.path || "";

  if (method === "OPTIONS") {
    return jsonResponse(event, { ok: true });
  }

  const routes = {
    "POST /analytics/track": handleAnalyticsTrack,
    "POST /visitor/session": handleVisitorSession,
    "POST /check-nickname": handleCheckNickname,
    "POST /send": handleSend,
    "GET /poll": handlePoll,
    "POST /admin/auth": handleAdminAuth,
    "GET /admin/conversations": handleAdminConversations,
    "GET /admin/messages": handleAdminMessages,
    "POST /admin/reply": handleAdminReply,
    "POST /permit/auth": handlePermitAuth,
    "GET /permit/content": handlePermitContent,
  };

  const routeKey = `${method} ${path}`;
  const handler = routes[routeKey];

  if (!handler) {
    return jsonResponse(event, { error: "Not found" }, 404);
  }

  try {
    return await handler(event);
  } catch (error) {
    console.error("Handler error:", error);
    return jsonResponse(event, { error: "Internal server error" }, 500);
  }
};
