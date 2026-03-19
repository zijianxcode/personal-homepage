/**
 * DM Chat — Full-screen Matrix-themed page.
 */
(function () {
  "use strict";

  const API_BASE =
    "https://homepage-1gthisc4771d43ac.service.tcloudbase.com/dm-api";
  const POLL_INTERVAL = 10000;
  const LS_VISITOR_TOKEN = "dm_visitor_token";
  const LS_NICKNAME = "dm_nickname";

  let pageOpen = false;
  let pollTimer = null;
  let messages = [];
  let lastMsgCount = 0;
  let sending = false;
  let rainAnim = null;

  function getVisitorToken() {
    return localStorage.getItem(LS_VISITOR_TOKEN) || "";
  }

  function setVisitorToken(token) {
    if (token) {
      localStorage.setItem(LS_VISITOR_TOKEN, token);
    } else {
      localStorage.removeItem(LS_VISITOR_TOKEN);
    }
  }

  async function ensureVisitorSession(forceRefresh) {
    const cached = !forceRefresh ? getVisitorToken() : "";
    if (cached) return cached;

    const res = await fetch(`${API_BASE}/visitor/session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    let data = {};
    try {
      data = await res.json();
    } catch {
      data = {};
    }

    if (!res.ok || !data.token) {
      throw new Error(data.error || "Unable to create visitor session");
    }

    setVisitorToken(data.token);
    return data.token;
  }

  function getNickname() {
    return localStorage.getItem(LS_NICKNAME) || "";
  }

  function setNickname(name) {
    localStorage.setItem(LS_NICKNAME, name);
  }

  function escapeHtml(value) {
    const div = document.createElement("div");
    div.textContent = value == null ? "" : String(value);
    return div.innerHTML;
  }

  function formatTime(ts) {
    const d = new Date(ts);
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(d.getMonth() + 1)}/${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  async function api(path, options = {}) {
    const headers = {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    };

    if (!options.skipVisitorAuth) {
      const token = await ensureVisitorSession(options.forceVisitorRefresh);
      headers.Authorization = `Bearer ${token}`;
    }

    const res = await fetch(API_BASE + path, {
      ...options,
      headers,
    });

    let data = {};
    try {
      data = await res.json();
    } catch {
      data = {};
    }

    if (res.status === 401 && !options.skipVisitorAuth && !options._retried) {
      setVisitorToken("");
      return api(path, { ...options, _retried: true, forceVisitorRefresh: true });
    }

    if (!res.ok) {
      const err = new Error(data.error || `Request failed (${res.status})`);
      err.status = res.status;
      throw err;
    }

    return data;
  }

  // ===================== Matrix Rain =====================

  const MATRIX_CHARS =
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン" +
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";

  function createMatrixRain(canvas) {
    const ctx = canvas.getContext("2d");
    let w, h, columns, drops, speeds, ticks, intervals;
    const fontSize = 14;

    function resize() {
      w = canvas.width = canvas.parentElement.clientWidth;
      h = canvas.height = canvas.parentElement.clientHeight;
      columns = Math.floor(w / fontSize);
      drops = new Array(columns).fill(0).map(() => Math.random() * -100);
      speeds = new Array(columns).fill(0).map(() => 0.85 + Math.random() * 0.55);
      ticks = new Array(columns).fill(0);
      intervals = new Array(columns).fill(0).map(() => Math.floor(1 + Math.random() * 3));
    }

    resize();
    window.addEventListener("resize", resize);

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, w, h);
      ctx.font = fontSize + "px 'Share Tech Mono', monospace";

      for (let i = 0; i < columns; i++) {
        ticks[i] += 1;
        if (ticks[i] < intervals[i]) continue;
        ticks[i] = 0;

        const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        const brightness = 0.15 + Math.random() * 0.35;

        ctx.fillStyle = `rgba(0, 255, 65, ${brightness})`;
        ctx.fillText(char, x, y);

        if (y > h && Math.random() > 0.975) {
          drops[i] = 0;
          intervals[i] = Math.floor(1 + Math.random() * 3);
          speeds[i] = 0.85 + Math.random() * 0.55;
        }

        drops[i] += speeds[i];
      }

      rainAnim = requestAnimationFrame(draw);
    }

    draw();

    return function stop() {
      cancelAnimationFrame(rainAnim);
      window.removeEventListener("resize", resize);
      rainAnim = null;
    };
  }

  // ===================== Page DOM =====================

  let pageEl = null;
  let stopRain = null;

  function createPage() {
    pageEl = document.createElement("div");
    pageEl.className = "dm-page";
    pageEl.innerHTML = `
      <canvas class="dm-matrix-canvas"></canvas>
      <div class="dm-page-header">
        <button class="dm-back-btn" aria-label="Back">
          <svg viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        </button>
        <span class="dm-page-title">Private Message</span>
      </div>
      <div class="dm-page-body"></div>
    `;
    document.body.appendChild(pageEl);
    pageEl.querySelector(".dm-back-btn").addEventListener("click", closePage);
  }

  function openPage() {
    if (!pageEl) createPage();
    pageOpen = true;
    pageEl.classList.add("open");
    document.body.style.overflow = "hidden";

    const canvas = pageEl.querySelector(".dm-matrix-canvas");
    if (canvas && !stopRain) {
      stopRain = createMatrixRain(canvas);
    }

    renderPageBody();
    startPolling();
  }

  function closePage() {
    pageOpen = false;
    if (pageEl) pageEl.classList.remove("open");
    document.body.style.overflow = "";
    stopPolling();

    if (stopRain) {
      stopRain();
      stopRain = null;
    }
  }

  function renderPageBody() {
    const body = pageEl.querySelector(".dm-page-body");
    if (!body) return;

    if (!getNickname()) {
      renderNicknameScreen(body);
    } else {
      renderChat(body);
      pollMessages().catch((err) => {
        console.error("Initial DM poll error:", err);
      });
    }
  }

  // ===================== Nickname =====================

  function renderNicknameScreen(container) {
    const lang = document.body.getAttribute("data-lang") || "en";
    const label =
      lang === "cn"
        ? "// 输入你的秘密代号"
        : "// Enter your secret handle";
    const placeholder = lang === "cn" ? "秘密代号_" : "secret_handle_";
    const btnText = lang === "cn" ? "确认" : "ENTER";

    const errorHint =
      lang === "cn"
        ? "该代号已经无法使用，请换一个"
        : "This handle is taken, try another one";

    container.innerHTML = `
      <div class="dm-nickname-screen">
        <span class="dm-nickname-label">${label}</span>
        <form class="dm-nickname-row">
          <input class="dm-nickname-input" type="text" placeholder="${placeholder}" maxlength="30" autocomplete="off" spellcheck="false" />
          <button class="dm-nickname-submit" type="submit" disabled>${btnText}</button>
        </form>
        <span class="dm-nickname-error"></span>
      </div>
    `;

    const input = container.querySelector(".dm-nickname-input");
    const btn = container.querySelector(".dm-nickname-submit");
    const errorEl = container.querySelector(".dm-nickname-error");

    input.addEventListener("input", () => {
      btn.disabled = !input.value.trim();
      if (errorEl.textContent) errorEl.textContent = "";
    });

    container.querySelector(".dm-nickname-row").addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = input.value.trim();
      if (!name) return;

      btn.disabled = true;
      input.disabled = true;
      errorEl.textContent = "";

      try {
        const result = await api("/check-nickname", {
          method: "POST",
          body: JSON.stringify({ nickname: name }),
        });

        if (result.taken) {
          errorEl.textContent = errorHint;
          input.disabled = false;
          btn.disabled = false;
          input.focus();
          return;
        }

        setNickname(name);
        renderPageBody();
      } catch {
        errorEl.textContent = lang === "cn" ? "网络错误，请重试" : "Network error, try again";
        input.disabled = false;
        btn.disabled = false;
      }
    });

    requestAnimationFrame(() => input.focus());
  }

  // ===================== Chat =====================

  function renderChat(container) {
    const lang = document.body.getAttribute("data-lang") || "en";
    const placeholder =
      lang === "cn"
        ? "> 输入内容，按 Enter 发送..."
        : "> type your message, press Enter...";
    const title = getNickname();

    container.innerHTML = `
      <div class="dm-chat">
        <div class="dm-chat-meta">
          <span class="dm-chat-handle">${escapeHtml(title)}</span>
        </div>
        <div class="dm-messages"></div>
        <div class="dm-input-row">
          <textarea class="dm-input" rows="1" maxlength="2000" placeholder="${placeholder}" spellcheck="false"></textarea>
          <button class="dm-send-btn" aria-label="Send" disabled>
            <svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </div>
      </div>
    `;

    const input = container.querySelector(".dm-input");
    const sendBtn = container.querySelector(".dm-send-btn");

    input.addEventListener("input", () => {
      sendBtn.disabled = !input.value.trim() || sending;
      input.style.height = "auto";
      input.style.height = Math.min(input.scrollHeight, 120) + "px";
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    sendBtn.addEventListener("click", sendMessage);
    renderMessages(true);

    requestAnimationFrame(() => input.focus());
  }

  function renderMessages(forceFullRender) {
    const container = document.querySelector(".dm-messages");
    if (!container) return;

    if (messages.length === 0) {
      if (lastMsgCount === 0 && !forceFullRender) return;
      const lang = document.body.getAttribute("data-lang") || "en";
      const hint =
        lang === "cn"
          ? "> 等待输入..."
          : "> awaiting input...";
      container.innerHTML = `<div class="dm-empty-hint">${hint}</div>`;
      lastMsgCount = 0;
      return;
    }

    if (!forceFullRender && messages.length === lastMsgCount) return;

    if (forceFullRender || lastMsgCount === 0) {
      container.innerHTML = messages
        .map(
          (m) => `
          <div class="dm-msg dm-msg--${m.sender}">
            <div class="dm-msg-text">${escapeHtml(m.content)}</div>
            <div class="dm-msg-time">${formatTime(m.createdAt)}</div>
          </div>`
        )
        .join("");
    } else {
      const hint = container.querySelector(".dm-empty-hint");
      if (hint) hint.remove();
      const newMsgs = messages.slice(lastMsgCount);
      for (const m of newMsgs) {
        const div = document.createElement("div");
        div.className = `dm-msg dm-msg--${m.sender}`;
        div.innerHTML = `<div class="dm-msg-text">${escapeHtml(m.content)}</div><div class="dm-msg-time">${formatTime(m.createdAt)}</div>`;
        container.appendChild(div);
      }
    }

    lastMsgCount = messages.length;
    container.scrollTop = container.scrollHeight;
  }

  async function sendMessage() {
    if (sending) return;
    const input = document.querySelector(".dm-input");
    const btn = document.querySelector(".dm-send-btn");
    if (!input || !input.value.trim()) return;

    const content = input.value.trim();
    sending = true;
    btn.disabled = true;
    input.disabled = true;

    try {
      const result = await api("/send", {
        method: "POST",
        body: JSON.stringify({
          nickname: getNickname(),
          content,
        }),
      });

      if (result.ok) {
        input.value = "";
        input.style.height = "auto";
        await pollMessages();
      }
    } catch (err) {
      console.error("DM send error:", err);
    } finally {
      sending = false;
      if (input) input.disabled = false;
      if (btn) btn.disabled = false;
      if (input) input.focus();
    }
  }

  async function pollMessages() {
    const result = await api("/poll");

    messages = Array.isArray(result.messages) ? result.messages : [];
    if (pageOpen) renderMessages();

    const badge = document.querySelector(".dm-nav-badge");
    if (badge) {
      if (!pageOpen && result.conversation && result.conversation.unreadByVisitor > 0) {
        badge.classList.add("visible");
      } else {
        badge.classList.remove("visible");
      }
    }
  }

  function startPolling() {
    stopPolling();
    pollTimer = setInterval(() => {
      if (pageOpen && getNickname()) {
        pollMessages().catch((err) => {
          console.error("DM poll error:", err);
        });
      }
    }, POLL_INTERVAL);
  }

  function stopPolling() {
    if (pollTimer) {
      clearInterval(pollTimer);
      pollTimer = null;
    }
  }

  // ===================== Init =====================

  function init() {
    localStorage.removeItem("dm_visitor_id");

    const navBtn = document.getElementById("dm-nav-btn");
    if (!navBtn) return;

    const badge = document.createElement("span");
    badge.className = "dm-nav-badge";
    navBtn.appendChild(badge);

    const icon = navBtn.querySelector(".dm-nav-icon");
    if (icon) icon.classList.add("nudge");

    navBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openPage();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && pageOpen) closePage();
    });

    if (getNickname()) {
      pollMessages().catch((err) => {
        console.error("Initial DM poll error:", err);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
