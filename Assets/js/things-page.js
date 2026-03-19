(function () {
    'use strict';

    var API_BASE = 'https://homepage-1gthisc4771d43ac.service.tcloudbase.com/dm-api';
    var PERMIT_STORAGE_KEY = 'things_access_token';

    function getToken() {
        return sessionStorage.getItem(PERMIT_STORAGE_KEY) || '';
    }

    function setToken(token) {
        if (token) {
            sessionStorage.setItem(PERMIT_STORAGE_KEY, token);
        } else {
            sessionStorage.removeItem(PERMIT_STORAGE_KEY);
        }
    }

    function escapeHtml(value) {
        var div = document.createElement('div');
        div.textContent = value == null ? '' : String(value);
        return div.innerHTML;
    }

    function setStatus(message) {
        var note = document.getElementById('things-status');
        if (note) {
            note.textContent = message;
        }
    }

    function setListLoading() {
        var list = document.getElementById('things-list');
        if (list) {
            list.innerHTML = '<div class="things-link things-link--state">内容加载中...</div>';
        }
    }

    function renderItems(items) {
        var list = document.getElementById('things-list');
        if (!list) return;

        list.innerHTML = '';

        if (!Array.isArray(items) || items.length === 0) {
            list.innerHTML = '<div class="things-link things-link--state">暂未配置可访问内容。</div>';
            return;
        }

        items.forEach(function (item) {
            var anchor = document.createElement('a');
            anchor.className = 'things-link';
            anchor.href = item.url;
            anchor.target = '_blank';
            anchor.rel = 'noopener noreferrer';
            anchor.innerHTML =
                '<span class="things-link-name">' + escapeHtml(item.name) + '</span>' +
                '<span class="things-link-arrow">→</span>';
            list.appendChild(anchor);
        });
    }

    function requestPermit(code) {
        return fetch(API_BASE + '/permit/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ code: code })
        }).then(function (res) {
            return res.json().catch(function () {
                return {};
            }).then(function (data) {
                if (!res.ok) {
                    return {
                        ok: false,
                        errorMessage: res.status === 429
                            ? '尝试次数过多，请稍后再试。'
                            : '许可代码错误，请重试。'
                    };
                }

                return {
                    ok: true,
                    payload: data
                };
            });
        }).catch(function () {
            return {
                ok: false,
                errorMessage: '网络错误，请稍后再试。'
            };
        });
    }

    function promptForPermitCode() {
        if (!window.PermitCodeModal || !window.PermitCodeModal.openPermitCodeModal) {
            window.location.replace('index.html#things');
            return;
        }

        window.PermitCodeModal.openPermitCodeModal({
            contextLabel: 'Digital & Experience',
            title: '许可代码',
            description: '输入许可代码后继续访问数字与体验。',
            placeholder: '请输入许可代码',
            errorMessage: '验证失败，请重试。',
            validate: requestPermit,
            onSuccess: function (_, payload) {
                if (payload && payload.token) {
                    setToken(payload.token);
                    loadContent();
                }
            },
            onCancel: function () {
                window.location.replace('index.html#things');
            }
        });
    }

    function fetchContent() {
        return fetch(API_BASE + '/permit/content', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + getToken()
            }
        }).then(function (res) {
            return res.json().catch(function () {
                return {};
            }).then(function (data) {
                if (res.status === 401) {
                    setToken('');
                    throw { status: 401, message: 'unauthorized' };
                }
                if (!res.ok) {
                    throw { status: res.status, message: data.error || 'load_failed' };
                }
                return data;
            });
        });
    }

    function loadContent() {
        if (!getToken()) {
            setStatus('请输入许可代码后查看内容。');
            promptForPermitCode();
            return;
        }

        setStatus('已验证许可代码，正在加载内容...');
        setListLoading();

        fetchContent()
            .then(function (data) {
                renderItems(data.items);
                setStatus('已通过许可代码验证，以下为内容入口。');
            })
            .catch(function (err) {
                if (err && err.status === 401) {
                    setStatus('许可已过期，请重新验证。');
                    promptForPermitCode();
                    return;
                }

                renderItems([]);
                setStatus('内容暂时不可用，请稍后再试。');
            });
    }

    document.addEventListener('DOMContentLoaded', loadContent);
})();
