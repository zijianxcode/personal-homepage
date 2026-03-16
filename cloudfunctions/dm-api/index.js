const cloud = require("@cloudbase/node-sdk");

const app = cloud.init({ env: cloud.SYMBOL_CURRENT_ENV });
const db = app.database();
const _ = db.command;

const CONVERSATIONS = "dm_conversations";
const MESSAGES = "dm_messages";

const MAX_CONTENT_LENGTH = 2000;
const MAX_NICKNAME_LENGTH = 30;
const RATE_LIMIT_WINDOW = 60 * 1000;
const RATE_LIMIT_MAX = 10;

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

function cors(body, statusCode = 200) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, x-admin-token",
    },
    body: JSON.stringify(body),
  };
}

function checkRateLimit(visitorId) {
  const now = Date.now();
  const record = rateLimitMap.get(visitorId);
  if (!record || now - record.windowStart > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(visitorId, { windowStart: now, count: 1 });
    return true;
  }
  if (record.count >= RATE_LIMIT_MAX) return false;
  record.count++;
  return true;
}

function verifyAdmin(event) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) return false;
  const token =
    (event.headers && (event.headers["x-admin-token"] || event.headers["X-Admin-Token"])) || "";
  return token === adminPassword;
}

function parseBody(event) {
  if (!event.body) return {};
  try {
    const raw = event.isBase64Encoded
      ? Buffer.from(event.body, "base64").toString()
      : event.body;
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function getQuery(event) {
  return event.queryStringParameters || {};
}

async function handleSend(event) {
  const body = parseBody(event);
  const { visitorId, nickname, content } = body;

  if (!visitorId || !content) {
    return cors({ error: "visitorId and content are required" }, 400);
  }
  if (content.length > MAX_CONTENT_LENGTH) {
    return cors({ error: "Content too long" }, 400);
  }
  if (!checkRateLimit(visitorId)) {
    return cors({ error: "Rate limit exceeded" }, 429);
  }

  const safeName = sanitize((nickname || "Anonymous").slice(0, MAX_NICKNAME_LENGTH));
  const safeContent = sanitize(content);
  const now = Date.now();

  let convResult = await db.collection(CONVERSATIONS).where({ visitorId }).get();
  let conversationId;

  if (convResult.data.length === 0) {
    const addResult = await db.collection(CONVERSATIONS).add({
      visitorId,
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

  return cors({ ok: true, conversationId });
}

async function handlePoll(event) {
  const { visitorId } = getQuery(event);
  if (!visitorId) {
    return cors({ error: "visitorId is required" }, 400);
  }

  const convResult = await db.collection(CONVERSATIONS).where({ visitorId }).get();
  if (convResult.data.length === 0) {
    return cors({ conversation: null, messages: [] });
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

  return cors({
    conversation: {
      id: conv._id,
      nickname: conv.nickname,
      unreadByVisitor: conv.unreadByVisitor,
    },
    messages: msgResult.data.map((m) => ({
      id: m._id,
      sender: m.sender,
      content: m.content,
      createdAt: m.createdAt,
    })),
  });
}

async function handleAdminAuth(event) {
  if (!verifyAdmin(event)) {
    return cors({ error: "Unauthorized" }, 401);
  }
  return cors({ ok: true });
}

async function handleAdminConversations(event) {
  if (!verifyAdmin(event)) {
    return cors({ error: "Unauthorized" }, 401);
  }

  const result = await db
    .collection(CONVERSATIONS)
    .orderBy("lastMessageAt", "desc")
    .limit(100)
    .get();

  return cors({
    conversations: result.data.map((c) => ({
      id: c._id,
      nickname: c.nickname,
      lastMessageAt: c.lastMessageAt,
      unreadByAdmin: c.unreadByAdmin,
      createdAt: c.createdAt,
    })),
  });
}

async function handleAdminMessages(event) {
  if (!verifyAdmin(event)) {
    return cors({ error: "Unauthorized" }, 401);
  }

  const { conversationId } = getQuery(event);
  if (!conversationId) {
    return cors({ error: "conversationId is required" }, 400);
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

  return cors({
    messages: result.data.map((m) => ({
      id: m._id,
      sender: m.sender,
      content: m.content,
      createdAt: m.createdAt,
    })),
  });
}

async function handleAdminReply(event) {
  if (!verifyAdmin(event)) {
    return cors({ error: "Unauthorized" }, 401);
  }

  const body = parseBody(event);
  const { conversationId, content } = body;

  if (!conversationId || !content) {
    return cors({ error: "conversationId and content are required" }, 400);
  }
  if (content.length > MAX_CONTENT_LENGTH) {
    return cors({ error: "Content too long" }, 400);
  }

  const safeContent = sanitize(content);
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

  return cors({ ok: true });
}

exports.main = async (event) => {
  const method = event.httpMethod || "GET";
  const path = event.path || "";

  if (method === "OPTIONS") {
    return cors({ ok: true });
  }

  const routes = {
    "POST /send": handleSend,
    "GET /poll": handlePoll,
    "POST /admin/auth": handleAdminAuth,
    "GET /admin/conversations": handleAdminConversations,
    "GET /admin/messages": handleAdminMessages,
    "POST /admin/reply": handleAdminReply,
  };

  const routeKey = `${method} ${path}`;
  const handler = routes[routeKey];

  if (handler) {
    try {
      return await handler(event);
    } catch (err) {
      console.error("Handler error:", err);
      return cors({ error: "Internal server error" }, 500);
    }
  }

  return cors({ error: "Not found" }, 404);
};
