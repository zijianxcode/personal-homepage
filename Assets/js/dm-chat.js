/**
 * DM Chat — Full-screen Matrix-themed page.
 */
(function () {
  "use strict";

  const API_BASE =
    "https://homepage-1gthisc4771d43ac.service.tcloudbase.com/dm-api";
  const POLL_INTERVAL = 10000;
  const LS_VISITOR_ID = "dm_visitor_id";
  const LS_NICKNAME = "dm_nickname";

  let pageOpen = false;
  let pollTimer = null;
  let messages = [];
  let sending = false;
  let rainAnim = null;

  function uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0;
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
  }

  function getVisitorId() {
    let id = localStorage.getItem(LS_VISITOR_ID);
    if (!id) {
      id = uuid();
      localStorage.setItem(LS_VISITOR_ID, id);
    }
    return id;
  }

  function getNickname() {
    return localStorage.getItem(LS_NICKNAME) || "";
  }

  function setNickname(name) {
    localStorage.setItem(LS_NICKNAME, name);
  }

  function formatTime(ts) {
    const d = new Date(ts);
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(d.getMonth() + 1)}/${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  async function api(path, options = {}) {
    const url = API_BASE + path;
    const res = await fetch(url, {
      ...options,
      headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    });
    return res.json();
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
    let frame = 0;

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, w, h);

      ctx.font = fontSize + "px 'Share Tech Mono', monospace";

      for (let i = 0; i < columns; i++) {
        ticks[i]++;
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
      pollMessages();
    }
  }

  // ===================== Nickname =====================

  function renderNicknameScreen(container) {
    const lang = document.body.getAttribute("data-lang") || "en";
    const label =
      lang === "cn"
        ? "// 起个代号，方便识别你的身份"
        : "// Pick a handle to identify yourself";
    const placeholder = lang === "cn" ? "输入代号_" : "enter_handle_";
    const btnText = lang === "cn" ? "确认" : "ENTER";

    container.innerHTML = `
      <div class="dm-nickname-screen">
        <span class="dm-nickname-label">${label}</span>
        <form class="dm-nickname-row">
          <input class="dm-nickname-input" type="text" placeholder="${placeholder}" maxlength="30" autocomplete="off" spellcheck="false" />
          <button class="dm-nickname-submit" type="submit" disabled>${btnText}</button>
        </form>
      </div>
    `;

    const input = container.querySelector(".dm-nickname-input");
    const btn = container.querySelector(".dm-nickname-submit");

    input.addEventListener("input", () => {
      btn.disabled = !input.value.trim();
    });

    container.querySelector(".dm-nickname-row").addEventListener("submit", (e) => {
      e.preventDefault();
      const name = input.value.trim();
      if (!name) return;
      setNickname(name);
      renderPageBody();
    });

    requestAnimationFrame(() => input.focus());
  }

  // ===================== Chat =====================

  function renderChat(container) {
    const lang = document.body.getAttribute("data-lang") || "en";
    const placeholder =
      lang === "cn"
        ? "提出你的问题，没有问题也ok，聊聊天也行。"
        : "Ask a question, or just say hi — anything goes.";

    container.innerHTML = `
      <div class="dm-messages"></div>
      <div class="dm-input-area">
        <textarea class="dm-input" rows="1" placeholder="${placeholder}" maxlength="2000" spellcheck="false"></textarea>
        <button class="dm-send-btn" aria-label="Send" disabled>
          <svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </div>
    `;

    const input = container.querySelector(".dm-input");
    const sendBtn = container.querySelector(".dm-send-btn");

    input.addEventListener("input", () => {
      sendBtn.disabled = !input.value.trim();
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
    renderMessages();

    requestAnimationFrame(() => input.focus());
  }

  function renderMessages() {
    const container = document.querySelector(".dm-messages");
    if (!container) return;

    if (messages.length === 0) {
      const lang = document.body.getAttribute("data-lang") || "en";
      const hint =
        lang === "cn"
          ? "> 等待输入..."
          : "> awaiting input...";
      container.innerHTML = `<div class="dm-empty-hint">${hint}</div>`;
      return;
    }

    container.innerHTML = messages
      .map(
        (m) => `
        <div class="dm-msg dm-msg--${m.sender}">
          <div class="dm-msg-text">${m.content}</div>
          <div class="dm-msg-time">${formatTime(m.createdAt)}</div>
        </div>`
      )
      .join("");

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
          visitorId: getVisitorId(),
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
    try {
      const visitorId = getVisitorId();
      const result = await api(`/poll?visitorId=${encodeURIComponent(visitorId)}`);

      if (result.messages) {
        messages = result.messages;
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
    } catch (err) {
      console.error("DM poll error:", err);
    }
  }

  function startPolling() {
    stopPolling();
    pollTimer = setInterval(() => {
      if (pageOpen && getNickname()) pollMessages();
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

    if (getNickname()) pollMessages();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
