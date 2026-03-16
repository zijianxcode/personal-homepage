/**
 * DM Admin Panel
 * Admin-only page for viewing and replying to private messages.
 */
(function () {
  "use strict";

  const API_BASE =
    "https://homepage-1gthisc4771d43ac.service.tcloudbase.com/dm-api";
  const URL_SECRET_KEY = "banana2026dm";
  const REFRESH_INTERVAL = 15000;

  const LS_HIDDEN_CONVS = "dm_admin_hidden_convs";
  let adminToken = "";
  let conversations = [];
  let activeConvId = null;
  let chatMessages = [];
  let refreshTimer = null;

  function getHiddenConvs() {
    try {
      return JSON.parse(localStorage.getItem(LS_HIDDEN_CONVS) || "[]");
    } catch {
      return [];
    }
  }

  function hideConv(convId) {
    const hidden = getHiddenConvs();
    if (!hidden.includes(convId)) {
      hidden.push(convId);
      localStorage.setItem(LS_HIDDEN_CONVS, JSON.stringify(hidden));
    }
  }

  function checkUrlKey() {
    const params = new URLSearchParams(window.location.search);
    return params.get("key") === URL_SECRET_KEY;
  }

  function formatTime(ts) {
    const d = new Date(ts);
    const pad = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  function relativeTime(ts) {
    const diff = Date.now() - ts;
    const min = Math.floor(diff / 60000);
    if (min < 1) return "just now";
    if (min < 60) return `${min}m ago`;
    const hr = Math.floor(min / 60);
    if (hr < 24) return `${hr}h ago`;
    const day = Math.floor(hr / 24);
    return `${day}d ago`;
  }

  async function api(path, options = {}) {
    const url = API_BASE + path;
    const res = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "x-admin-token": adminToken,
        ...(options.headers || {}),
      },
    });
    return res.json();
  }

  // --- Auth ---

  function initAuth() {
    if (!checkUrlKey()) {
      document.body.innerHTML =
        '<div style="display:flex;align-items:center;justify-content:center;height:100vh;color:rgba(255,255,255,0.15);font-family:Inter,sans-serif;font-size:13px;">404</div>';
      return;
    }

    const authScreen = document.getElementById("auth-screen");
    const form = authScreen.querySelector("form");
    const input = authScreen.querySelector(".auth-input");
    const errEl = authScreen.querySelector(".auth-error");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const pwd = input.value.trim();
      if (!pwd) return;

      errEl.textContent = "";
      adminToken = pwd;

      try {
        const result = await api("/admin/auth", { method: "POST" });
        if (result.ok) {
          authScreen.style.display = "none";
          document.getElementById("admin-layout").classList.add("visible");
          loadConversations();
          startAutoRefresh();
        } else {
          errEl.textContent = "Password incorrect";
          adminToken = "";
        }
      } catch {
        errEl.textContent = "Connection error";
        adminToken = "";
      }
    });
  }

  // --- Conversations ---

  async function loadConversations() {
    try {
      const result = await api("/admin/conversations");
      if (result.conversations) {
        conversations = result.conversations;
        renderConversations();
      }
    } catch (err) {
      console.error("Load conversations error:", err);
    }
  }

  function renderConversations() {
    const list = document.getElementById("conv-list");
    const hidden = getHiddenConvs();
    const visible = conversations.filter((c) => !hidden.includes(c.id));

    if (visible.length === 0) {
      list.innerHTML = '<div class="conv-empty">No conversations yet</div>';
      return;
    }

    list.innerHTML = visible
      .map(
        (c) => `
      <div class="conv-item ${c.id === activeConvId ? "active" : ""}" data-id="${c.id}">
        <div class="conv-info">
          <div class="conv-name">${escapeHtml(c.nickname)}</div>
          <div class="conv-time">${relativeTime(c.lastMessageAt)}</div>
        </div>
        ${c.unreadByAdmin > 0 ? `<div class="conv-badge">${c.unreadByAdmin}</div>` : ""}
        <button class="conv-delete" data-id="${c.id}" title="Hide conversation">
          <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>`
      )
      .join("");

    list.querySelectorAll(".conv-item").forEach((el) => {
      el.addEventListener("click", (e) => {
        if (e.target.closest(".conv-delete")) return;
        selectConversation(el.dataset.id);
      });
    });

    list.querySelectorAll(".conv-delete").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const convId = btn.dataset.id;
        hideConv(convId);
        if (activeConvId === convId) {
          activeConvId = null;
          const area = document.getElementById("chat-area");
          area.innerHTML = '<div class="chat-placeholder">Select a conversation</div>';
        }
        renderConversations();
      });
    });
  }

  async function selectConversation(convId) {
    activeConvId = convId;
    renderConversations();
    await loadMessages(convId);
    renderChatArea();
  }

  // --- Messages ---

  async function loadMessages(convId) {
    try {
      const result = await api(
        `/admin/messages?conversationId=${encodeURIComponent(convId)}`
      );
      if (result.messages) {
        chatMessages = result.messages;
        const conv = conversations.find((c) => c.id === convId);
        if (conv) conv.unreadByAdmin = 0;
        renderConversations();
      }
    } catch (err) {
      console.error("Load messages error:", err);
    }
  }

  function renderChatArea() {
    const area = document.getElementById("chat-area");
    const conv = conversations.find((c) => c.id === activeConvId);

    if (!conv) {
      area.innerHTML = '<div class="chat-placeholder">Select a conversation</div>';
      return;
    }

    area.innerHTML = `
      <div class="chat-header">
        <span class="chat-header-name">${escapeHtml(conv.nickname)}</span>
        <span class="chat-header-hint">${formatTime(conv.createdAt)}</span>
      </div>
      <div class="chat-messages" id="chat-messages"></div>
      <div class="chat-reply">
        <textarea class="chat-reply-input" rows="1" placeholder="Reply..." maxlength="2000"></textarea>
        <button class="chat-reply-btn" disabled>
          <svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </div>
    `;

    const msgContainer = area.querySelector("#chat-messages");
    msgContainer.innerHTML = chatMessages
      .map(
        (m) => `
        <div class="chat-msg chat-msg--${m.sender}">
          <div>${escapeHtml(m.content)}</div>
          <div class="chat-msg-time">${formatTime(m.createdAt)}</div>
        </div>`
      )
      .join("");
    msgContainer.scrollTop = msgContainer.scrollHeight;

    const input = area.querySelector(".chat-reply-input");
    const btn = area.querySelector(".chat-reply-btn");

    input.addEventListener("input", () => {
      btn.disabled = !input.value.trim();
      input.style.height = "auto";
      input.style.height = Math.min(input.scrollHeight, 100) + "px";
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendReply();
      }
    });

    btn.addEventListener("click", sendReply);
  }

  async function sendReply() {
    const input = document.querySelector(".chat-reply-input");
    const btn = document.querySelector(".chat-reply-btn");
    if (!input || !input.value.trim() || !activeConvId) return;

    const content = input.value.trim();
    btn.disabled = true;
    input.disabled = true;

    try {
      const result = await api("/admin/reply", {
        method: "POST",
        body: JSON.stringify({
          conversationId: activeConvId,
          content,
        }),
      });

      if (result.ok) {
        input.value = "";
        input.style.height = "auto";
        await loadMessages(activeConvId);
        renderChatArea();
      }
    } catch (err) {
      console.error("Reply error:", err);
    } finally {
      if (input) input.disabled = false;
    }
  }

  // --- Auto refresh ---

  function startAutoRefresh() {
    refreshTimer = setInterval(() => {
      loadConversations();
      if (activeConvId) {
        loadMessages(activeConvId).then(() => {
          const msgContainer = document.getElementById("chat-messages");
          if (msgContainer) {
            const msgs = chatMessages
              .map(
                (m) => `
                <div class="chat-msg chat-msg--${m.sender}">
                  <div>${escapeHtml(m.content)}</div>
                  <div class="chat-msg-time">${formatTime(m.createdAt)}</div>
                </div>`
              )
              .join("");
            msgContainer.innerHTML = msgs;
            msgContainer.scrollTop = msgContainer.scrollHeight;
          }
        });
      }
    }, REFRESH_INTERVAL);
  }

  // --- Utils ---

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  // --- Init ---

  document.addEventListener("DOMContentLoaded", () => {
    initAuth();

    const refreshBtn = document.querySelector(".sidebar-refresh");
    if (refreshBtn) {
      refreshBtn.addEventListener("click", loadConversations);
    }
  });
})();
