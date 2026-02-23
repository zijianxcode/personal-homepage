(function () {
    'use strict';

    var PARTICLE_CONFIG = {
        DENSITY: 12000,
        CONNECTION_DISTANCE: 150,
        MAX_CONNECTIONS: 3,
        MOUSE_RADIUS: 180,
        SPEED: 0.3,
        MOBILE_BREAKPOINT: 768
    };

    var isPageVisible = true;
    var mouse = { x: -9999, y: -9999 };

    // ==========================================
    // Particle Network Background
    // ==========================================

    function ParticleBackground(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.canvas = document.createElement('canvas');
        this.container.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.animId = null;
        this.dpr = Math.min(window.devicePixelRatio || 1, 2);

        this.resize();
        this.createParticles();
        this.bindEvents();
        this.animate();
    }

    ParticleBackground.prototype.resize = function () {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width * this.dpr;
        this.canvas.height = this.height * this.dpr;
        this.canvas.style.width = this.width + 'px';
        this.canvas.style.height = this.height + 'px';
        this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    };

    ParticleBackground.prototype.createParticles = function () {
        var isMobile = this.width < PARTICLE_CONFIG.MOBILE_BREAKPOINT;
        var area = this.width * this.height;
        var density = isMobile ? PARTICLE_CONFIG.DENSITY * 2 : PARTICLE_CONFIG.DENSITY;
        var count = Math.floor(area / density);

        this.particles = [];
        for (var i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                vx: (Math.random() - 0.5) * PARTICLE_CONFIG.SPEED,
                vy: (Math.random() - 0.5) * PARTICLE_CONFIG.SPEED,
                radius: Math.random() * 1.5 + 0.5
            });
        }
    };

    ParticleBackground.prototype.bindEvents = function () {
        var self = this;

        window.addEventListener('resize', function () {
            self.resize();
            self.createParticles();
        });

        window.addEventListener('mousemove', function (e) {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        window.addEventListener('mouseleave', function () {
            mouse.x = -9999;
            mouse.y = -9999;
        });
    };

    ParticleBackground.prototype.animate = function () {
        var self = this;

        if (!isPageVisible) {
            this.animId = requestAnimationFrame(function () { self.animate(); });
            return;
        }

        this.ctx.clearRect(0, 0, this.width, this.height);

        var particleColor = 'rgba(255, 255, 255, 0.25)';
        var lineColor = 'rgba(255, 255, 255, 0.06)';

        for (var i = 0; i < this.particles.length; i++) {
            var p = this.particles[i];

            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > this.width) p.vx *= -1;
            if (p.y < 0 || p.y > this.height) p.vy *= -1;

            var dx = mouse.x - p.x;
            var dy = mouse.y - p.y;
            var dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < PARTICLE_CONFIG.MOUSE_RADIUS) {
                var force = (PARTICLE_CONFIG.MOUSE_RADIUS - dist) / PARTICLE_CONFIG.MOUSE_RADIUS;
                p.x -= dx * force * 0.02;
                p.y -= dy * force * 0.02;
            }

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = particleColor;
            this.ctx.fill();

            var connections = 0;
            for (var j = i + 1; j < this.particles.length && connections < PARTICLE_CONFIG.MAX_CONNECTIONS; j++) {
                var p2 = this.particles[j];
                var cx = p.x - p2.x;
                var cy = p.y - p2.y;
                var cdist = Math.sqrt(cx * cx + cy * cy);

                if (cdist < PARTICLE_CONFIG.CONNECTION_DISTANCE) {
                    var opacity = 1 - cdist / PARTICLE_CONFIG.CONNECTION_DISTANCE;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = lineColor;
                    this.ctx.globalAlpha = opacity;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                    this.ctx.globalAlpha = 1;
                    connections++;
                }
            }
        }

        this.animId = requestAnimationFrame(function () { self.animate(); });
    };

    // ==========================================
    // Tabs
    // ==========================================

    function initTabs() {
        var navLinks = document.querySelectorAll('[data-tab]');
        var panels = document.querySelectorAll('.tab-panel');

        function switchTab(tabId) {
            panels.forEach(function (panel) {
                panel.classList.remove('active');
            });

            navLinks.forEach(function (link) {
                link.classList.remove('active');
            });

            var target = document.getElementById(tabId);
            if (target) {
                target.classList.add('active');
            }

            navLinks.forEach(function (link) {
                if (link.dataset.tab === tabId) {
                    link.classList.add('active');
                }
            });
        }

        navLinks.forEach(function (link) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                var tab = this.dataset.tab;
                switchTab(tab);
                history.pushState(null, '', '#' + tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        var hash = window.location.hash.slice(1);
        if (hash && document.getElementById(hash)) {
            switchTab(hash);
        }

        window.addEventListener('popstate', function () {
            var h = window.location.hash.slice(1);
            switchTab(h || 'work');
        });
    }

    // ==========================================
    // Language Toggle
    // ==========================================

    function initLang() {
        var langBtns = document.querySelectorAll('.lang-btn');
        var saved = localStorage.getItem('lang') || 'en';

        function setLang(lang) {
            document.body.setAttribute('data-lang', lang);
            localStorage.setItem('lang', lang);
            langBtns.forEach(function (btn) {
                btn.classList.toggle('active', btn.dataset.lang === lang);
            });
        }

        setLang(saved);

        langBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                setLang(this.dataset.lang);
            });
        });
    }

    // ==========================================
    // Page Visibility
    // ==========================================

    function initVisibility() {
        document.addEventListener('visibilitychange', function () {
            isPageVisible = !document.hidden;
        });
    }

    // ==========================================
    // Init
    // ==========================================

    document.addEventListener('DOMContentLoaded', function () {
        try {
            initVisibility();
            initTabs();
            initLang();
            new ParticleBackground('canvas-container');
        } catch (err) {
            console.error('Init error:', err);
        }
    });
})();
