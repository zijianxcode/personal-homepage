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

    var mouse = { x: -9999, y: -9999 };
    var isPageVisible = true;

    // ==========================================
    // Particle Background (same as main page)
    // ==========================================

    function ParticleBackground(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.canvas = document.createElement('canvas');
        this.container.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.animId = null;
        this.resizeFrame = null;
        this.frameCount = 0;
        this.isCoarsePointer = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
        this.dpr = 1;

        this.resize();
        this.createParticles();
        this.bindEvents();
        this.animate();
    }

    ParticleBackground.prototype.resize = function () {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.isMobile = this.width < PARTICLE_CONFIG.MOBILE_BREAKPOINT;
        this.dpr = Math.min(window.devicePixelRatio || 1, this.isMobile ? 1.5 : 2);
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
            if (self.resizeFrame) return;
            self.resizeFrame = requestAnimationFrame(function () {
                self.resizeFrame = null;
                self.resize();
                self.createParticles();
            });
        });
        if (!this.isCoarsePointer) {
            window.addEventListener('mousemove', function (e) {
                mouse.x = e.clientX;
                mouse.y = e.clientY;
            });
            window.addEventListener('mouseleave', function () {
                mouse.x = -9999;
                mouse.y = -9999;
            });
        }
    };

    ParticleBackground.prototype.animate = function () {
        var self = this;
        if (!isPageVisible) {
            this.animId = window.setTimeout(function () { self.animate(); }, 250);
            return;
        }

        this.frameCount++;
        if (this.isMobile && this.frameCount % 2 !== 0) {
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
    // Footer Year
    // ==========================================

    function initFooter() {
        var el = document.getElementById('copyright');
        if (el) el.textContent = 'zijian © ' + new Date().getFullYear();
    }

    // ==========================================
    // Experimental card hover warp
    // ==========================================

    function initExperimentalCardWarp() {
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        var notes = Array.prototype.slice.call(document.querySelectorAll('.exp-card-note'));
        if (!notes.length) return;

        notes.forEach(function (note) {
            prepareWarpGlyphs(note);
            bindWarpEvents(note);
        });
    }

    function prepareWarpGlyphs(note) {
        if (!note || note.dataset.warpReady === 'true') return;

        var text = note.textContent || '';
        var isChinese = note.classList.contains('lang-cn');
        note.dataset.warpText = text;
        note.setAttribute('aria-label', text.trim());
        note.textContent = '';

        var fragment = document.createDocumentFragment();
        if (isChinese) {
            for (var i = 0; i < text.length; i++) {
                var char = text.charAt(i);
                var glyph = document.createElement('span');
                glyph.className = 'exp-card-glyph' + (char === ' ' ? ' exp-card-glyph--space' : '');
                glyph.setAttribute('aria-hidden', 'true');
                glyph.textContent = char === ' ' ? '\u00A0' : char;
                fragment.appendChild(glyph);
            }
        } else {
            var tokens = text.split(/(\s+)/);
            for (var t = 0; t < tokens.length; t++) {
                var token = tokens[t];
                if (!token) continue;

                if (/^\s+$/.test(token)) {
                    fragment.appendChild(document.createTextNode(token));
                    continue;
                }

                var word = document.createElement('span');
                word.className = 'exp-card-word';
                word.setAttribute('aria-hidden', 'true');

                for (var j = 0; j < token.length; j++) {
                    var wordGlyph = document.createElement('span');
                    wordGlyph.className = 'exp-card-glyph';
                    wordGlyph.setAttribute('aria-hidden', 'true');
                    wordGlyph.textContent = token.charAt(j);
                    word.appendChild(wordGlyph);
                }

                fragment.appendChild(word);
            }
        }

        note.appendChild(fragment);
        note.dataset.warpReady = 'true';
    }

    function bindWarpEvents(note) {
        var frame = 0;
        var pointerX = 0;
        var pointerY = 0;

        function queueUpdate(clientX, clientY) {
            pointerX = clientX;
            pointerY = clientY;

            if (frame) return;
            frame = requestAnimationFrame(function () {
                frame = 0;
                updateWarp(note, pointerX, pointerY);
            });
        }

        note.addEventListener('mouseenter', function (event) {
            queueUpdate(event.clientX, event.clientY);
        });

        note.addEventListener('mousemove', function (event) {
            queueUpdate(event.clientX, event.clientY);
        });

        note.addEventListener('mouseleave', function () {
            if (frame) {
                cancelAnimationFrame(frame);
                frame = 0;
            }
            resetWarp(note);
        });
    }

    function updateWarp(note, clientX, clientY) {
        if (!note) return;

        var rect = note.getBoundingClientRect();
        var noteWidth = Math.max(rect.width, 1);
        var noteHeight = Math.max(rect.height, 1);
        var relX = (clientX - rect.left) / noteWidth;
        var relY = (clientY - rect.top) / noteHeight;
        var clampedX = Math.max(0, Math.min(1, relX));
        var clampedY = Math.max(0, Math.min(1, relY));
        var glyphs = note.querySelectorAll('.exp-card-glyph');
        var radius = Math.min(180, Math.max(96, noteWidth * 0.42));

        note.style.setProperty('--hole-x', (clampedX * 100).toFixed(2) + '%');
        note.style.setProperty('--hole-y', (clampedY * 100).toFixed(2) + '%');
        note.style.setProperty('--hole-opacity', '0.88');

        for (var i = 0; i < glyphs.length; i++) {
            var glyph = glyphs[i];
            if (glyph.classList.contains('exp-card-glyph--space')) continue;

            var glyphRect = glyph.getBoundingClientRect();
            var centerX = glyphRect.left + glyphRect.width / 2;
            var centerY = glyphRect.top + glyphRect.height / 2;
            var dx = clientX - centerX;
            var dy = clientY - centerY;
            var distance = Math.sqrt(dx * dx + dy * dy);
            var falloff = Math.max(0, 1 - distance / radius);
            var force = Math.pow(falloff, 2.35);
            var moveX = dx * force * 0.16;
            var moveY = dy * force * 0.22;
            var scale = 1 - force * 0.24;
            var blur = force * 1.6;
            var opacity = 1 - force * 0.14;
            var rotate = dx * force * 0.03;

            glyph.style.setProperty('--glyph-x', moveX.toFixed(2) + 'px');
            glyph.style.setProperty('--glyph-y', moveY.toFixed(2) + 'px');
            glyph.style.setProperty('--glyph-scale', scale.toFixed(3));
            glyph.style.setProperty('--glyph-blur', blur.toFixed(2) + 'px');
            glyph.style.setProperty('--glyph-opacity', opacity.toFixed(3));
            glyph.style.setProperty('--glyph-rotate', rotate.toFixed(2) + 'deg');
        }
    }

    function resetWarp(note) {
        if (!note) return;

        note.style.setProperty('--hole-opacity', '0');
        note.style.setProperty('--hole-scale', '0.78');
        note.style.setProperty('--hole-rotate', '0deg');

        var glyphs = note.querySelectorAll('.exp-card-glyph');
        for (var i = 0; i < glyphs.length; i++) {
            glyphs[i].style.removeProperty('--glyph-x');
            glyphs[i].style.removeProperty('--glyph-y');
            glyphs[i].style.removeProperty('--glyph-scale');
            glyphs[i].style.removeProperty('--glyph-blur');
            glyphs[i].style.removeProperty('--glyph-opacity');
            glyphs[i].style.removeProperty('--glyph-rotate');
        }
    }

    // ==========================================
    // Init
    // ==========================================

    document.addEventListener('visibilitychange', function () {
        isPageVisible = !document.hidden;
    });

    document.addEventListener('DOMContentLoaded', function () {
        try {
            initLang();
            initFooter();
            new ParticleBackground('canvas-container');
            initExperimentalCardWarp();
        } catch (err) {
            console.error('vc-page init error:', err);
        }
    });
})();
