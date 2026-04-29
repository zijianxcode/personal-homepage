(function () {
    'use strict';

    var API_BASE = (window.APP_CONFIG && window.APP_CONFIG.apiBase) || 'https://homepage-1gthisc4771d43ac.service.tcloudbase.com/dm-api';
    var VISITOR_STORAGE_KEY = 'site_analytics_visitor_id';
    var SITE_KEY = 'personal-homepage';
    var COUNT_ELEMENT_ID = 'busuanzi_value_site_uv';
    var FALLBACK_DELAY_MS = 3000;

    function canUseStorage() {
        try {
            localStorage.setItem('__analytics_test__', '1');
            localStorage.removeItem('__analytics_test__');
            return true;
        } catch {
            return false;
        }
    }

    function fallbackVisitorId() {
        return 'v_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
    }

    function getVisitorId() {
        if (!canUseStorage()) {
            return fallbackVisitorId();
        }

        var existing = localStorage.getItem(VISITOR_STORAGE_KEY);
        if (existing) return existing;

        var created = (window.crypto && typeof window.crypto.randomUUID === 'function')
            ? window.crypto.randomUUID()
            : fallbackVisitorId();
        localStorage.setItem(VISITOR_STORAGE_KEY, created);
        return created;
    }

    function updateShadowValue(count) {
        var el = document.getElementById(COUNT_ELEMENT_ID);
        if (!el || typeof count !== 'number' || !isFinite(count)) return;

        el.dataset.selfHostedUv = String(count);
        window.__selfHostedAnalytics = {
            siteUv: count,
            updatedAt: Date.now()
        };
    }

    function applyFallbackCount(count) {
        var el = document.getElementById(COUNT_ELEMENT_ID);
        if (!el || typeof count !== 'number' || !isFinite(count)) return;

        var current = (el.textContent || '').trim();
        if (!current || current === '-' || current === '0') {
            el.textContent = String(count);
            el.dataset.analyticsSource = 'cloudbase-fallback';
        }
    }

    function trackVisit() {
        return fetch(API_BASE + '/analytics/track', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                siteKey: SITE_KEY,
                visitorId: getVisitorId(),
                pagePath: window.location.pathname
            })
        }).then(function (res) {
            return res.json().catch(function () {
                return {};
            }).then(function (data) {
                if (!res.ok) {
                    throw new Error(data.error || 'analytics_failed');
                }
                return data;
            });
        });
    }

    function init() {
        trackVisit()
            .then(function (data) {
                if (typeof data.uv === 'number') {
                    updateShadowValue(data.uv);
                    window.setTimeout(function () {
                        applyFallbackCount(data.uv);
                    }, FALLBACK_DELAY_MS);
                }
            })
            .catch(function (err) {
                console.warn('Self-hosted analytics unavailable:', err);
            });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
