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
    // TextScramble — 三阶段：等待期 / 乱码期 / 完成
    // HTML-aware：保留内部 HTML 标签，仅对文本节点乱码
    // ==========================================

    var SCRAMBLE_CHARS = '!<>-_\\/[]{}—=+*^?#';
    var SCRAMBLE_REFRESH_PROB = 0.28;
    var SCRAMBLE_COLORS = ['#ff3333', '#00ff41', '#4d9fff', '#ffe600', '#ff8800', '#ff44cc', '#00e5ff'];
    var SCRAMBLE_COLOR_PROB = 0.38;

    function TextScramble(el, options) {
        if (!el) return;
        this.el = el;
        this.options = options || {};
        this.chars = [];
        this._segments = [];
        this.frame = 0;
        this.rafId = null;
        this.done = false;
        this._init();
    }

    // 将 innerHTML 解析为 text / tag 两类 segment，仅 text 参与乱码
    TextScramble.prototype._init = function () {
        var html = this.el.innerHTML;
        var waitMax = this.options.waitMax != null ? this.options.waitMax : 40;
        var scrambleDuration = this.options.scrambleDuration != null ? this.options.scrambleDuration : 25;
        var tagRegex = /<[^>]+>/g;
        var lastIdx = 0;
        var match;
        this.chars = [];
        this._segments = [];

        while ((match = tagRegex.exec(html)) !== null) {
            if (match.index > lastIdx) {
                this._pushTextSeg(html.slice(lastIdx, match.index), waitMax, scrambleDuration);
            }
            this._segments.push({ type: 'tag', content: match[0] });
            lastIdx = tagRegex.lastIndex;
        }
        if (lastIdx < html.length) {
            this._pushTextSeg(html.slice(lastIdx), waitMax, scrambleDuration);
        }
    };

    TextScramble.prototype._pushTextSeg = function (text, waitMax, scrambleDuration) {
        var charStart = this.chars.length;
        for (var i = 0; i < text.length; i++) {
            var s = Math.floor(Math.random() * (waitMax + 1));
            this.chars.push({ target: text[i], start: s, end: s + scrambleDuration, display: '', color: null });
        }
        this._segments.push({ type: 'text', charStart: charStart, charCount: text.length });
    };

    TextScramble.prototype._randomChar = function () {
        return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
    };

    // 乱码字符可能含 < > &，渲染时转义避免破坏 DOM
    TextScramble.prototype._esc = function (ch) {
        if (ch === '<') return '&lt;';
        if (ch === '>') return '&gt;';
        if (ch === '&') return '&amp;';
        return ch;
    };

    TextScramble.prototype._render = function () {
        var html = '';
        for (var s = 0; s < this._segments.length; s++) {
            var seg = this._segments[s];
            if (seg.type === 'tag') {
                html += seg.content;
            } else {
                for (var i = seg.charStart; i < seg.charStart + seg.charCount; i++) {
                    var c = this.chars[i];
                    var ch = this._esc(c.display);
                    if (c.color) {
                        html += '<span style="color:' + c.color + ';font-style:normal">' + ch + '</span>';
                    } else {
                        html += ch;
                    }
                }
            }
        }
        this.el.innerHTML = html;
    };

    TextScramble.prototype._tick = function () {
        var self = this;

        // 每隔一帧才推进逻辑，实现 50% 降速
        this._skipToggle = !this._skipToggle;
        if (this._skipToggle) {
            this.rafId = requestAnimationFrame(function () { self._tick(); });
            return;
        }

        this.frame++;
        var anyActive = false;

        for (var i = 0; i < this.chars.length; i++) {
            var c = this.chars[i];
            if (this.frame < c.start) {
                c.display = '';
                c.color = null;
            } else if (this.frame >= c.end) {
                c.display = c.target;
                c.color = null;
            } else {
                anyActive = true;
                if (c.display === '' || Math.random() < SCRAMBLE_REFRESH_PROB) {
                    c.display = this._randomChar();
                    // 随机决定是否赋予科技感颜色
                    c.color = Math.random() < SCRAMBLE_COLOR_PROB
                        ? SCRAMBLE_COLORS[Math.floor(Math.random() * SCRAMBLE_COLORS.length)]
                        : null;
                }
            }
        }

        this._render();

        if (anyActive || this.frame < this._maxEnd()) {
            this.rafId = requestAnimationFrame(function () { self._tick(); });
        } else {
            this.done = true;
        }
    };

    TextScramble.prototype._maxEnd = function () {
        var max = 0;
        for (var i = 0; i < this.chars.length; i++) {
            if (this.chars[i].end > max) max = this.chars[i].end;
        }
        return max;
    };

    TextScramble.prototype.start = function () {
        var self = this;
        if (this.rafId) cancelAnimationFrame(this.rafId);
        this.frame = 0;
        this.done = false;
        this._skipToggle = false;
        var waitMax = this.options.waitMax != null ? this.options.waitMax : 40;
        var scrambleDuration = this.options.scrambleDuration != null ? this.options.scrambleDuration : 25;
        for (var i = 0; i < this.chars.length; i++) {
            var c = this.chars[i];
            c.start = Math.floor(Math.random() * (waitMax + 1));
            c.end = c.start + scrambleDuration;
            c.display = '';
            c.color = null;
        }
        this._render();
        this.rafId = requestAnimationFrame(function () { self._tick(); });
    };

    TextScramble.prototype.destroy = function () {
        if (this.rafId) {
            cancelAnimationFrame(this.rafId);
            this.rafId = null;
        }
    };

    // ==========================================
    // Visual Coding — 字符级颗粒化扰动与自愈
    // 静(正常) → 动(hover 散开) → 回(离开弹性归位)
    // ==========================================

    function initVisualCodingEffect() {
        var item = document.querySelector('.work-item--vc');
        if (!item) return;

        var typeEls = item.querySelectorAll('.work-type');

        // 将每个字符包裹为独立 span（保留空格宽度）
        typeEls.forEach(function (el) {
            var chars = el.textContent.split('');
            el.innerHTML = chars.map(function (ch) {
                if (ch === ' ') {
                    return '<span class="char-unit" style="width:0.28em;"> </span>';
                }
                return '<span class="char-unit">' + ch + '</span>';
            }).join('');
        });

        item.addEventListener('mouseenter', function () {
            typeEls.forEach(function (el) {
                var spans = el.querySelectorAll('.char-unit');
                var n = spans.length;
                spans.forEach(function (span, i) {
                    var delay = i * 22;
                    var tx = (Math.random() - 0.5) * 18;
                    var ty = (Math.random() - 0.5) * 28;
                    var rot = (Math.random() - 0.5) * 22;
                    var color = SCRAMBLE_COLORS[Math.floor(Math.random() * SCRAMBLE_COLORS.length)];
                    span.style.transitionDelay = delay + 'ms';
                    span.style.transform = 'translate(' + tx + 'px, ' + ty + 'px) rotate(' + rot + 'deg)';
                    span.style.color = color;
                    span.style.opacity = '0.85';
                });
            });
        });

        item.addEventListener('mouseleave', function () {
            typeEls.forEach(function (el) {
                var spans = el.querySelectorAll('.char-unit');
                var n = spans.length;
                spans.forEach(function (span, i) {
                    // 反向交错归位，最后散开的最先回来
                    var delay = (n - 1 - i) * 18;
                    span.style.transitionDelay = delay + 'ms';
                    span.style.transform = '';
                    span.style.color = '';
                    span.style.opacity = '';
                });
            });
        });
    }

    function initResearchFlowEffect() {
        var els = document.querySelectorAll('.research-flow');
        if (!els.length) return;

        els.forEach(function (el) {
            if (el.dataset.motionReady === '1') return;
            var chars = el.textContent.split('');
            var center = (chars.length - 1) / 2;
            el.innerHTML = chars.map(function (ch, i) {
                var shift = i - center;
                if (ch === ' ') {
                    return '<span class="research-char research-char--space" style="--char-index:' + i + '; --char-shift:' + shift + '; width:0.28em;"></span>';
                }
                return '<span class="research-char" style="--char-index:' + i + '; --char-shift:' + shift + ';">' + ch + '</span>';
            }).join('');
            el.dataset.motionReady = '1';
        });
    }

    function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }

    function lerp(a, b, t) {
        return a + (b - a) * t;
    }

    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    function initResearchParticleEffect() {
        var item = document.querySelector('.work-item--research');
        if (!item) return;

        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        if (window.matchMedia && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            return;
        }

        if (item.dataset.particleReady === '1') return;
        item.dataset.particleReady = '1';

        var canvas = document.createElement('canvas');
        canvas.className = 'research-particle-canvas';
        canvas.setAttribute('aria-hidden', 'true');
        item.insertBefore(canvas, item.firstChild);

        var ctx = canvas.getContext('2d');
        var sampleCanvas = document.createElement('canvas');
        var sampleCtx = sampleCanvas.getContext('2d');
        var particles = [];
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        var active = false;
        var progress = 0;
        var rafId = null;
        var itemRect = null;
        var activeFlow = null;
        var centerX = 0;
        var centerY = 0;

        function getVisibleFlow() {
            var flows = item.querySelectorAll('.research-flow');
            for (var i = 0; i < flows.length; i++) {
                if (window.getComputedStyle(flows[i]).display !== 'none') {
                    return flows[i];
                }
            }
            return null;
        }

        function resizeCanvas() {
            itemRect = item.getBoundingClientRect();
            if (!itemRect.width || !itemRect.height) return;

            canvas.width = Math.max(1, Math.round(itemRect.width * dpr));
            canvas.height = Math.max(1, Math.round(itemRect.height * dpr));
            canvas.style.width = itemRect.width + 'px';
            canvas.style.height = itemRect.height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.clearRect(0, 0, itemRect.width, itemRect.height);
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.globalCompositeOperation = 'screen';
        }

        function sampleTextPoints(flow) {
            var rect = flow.getBoundingClientRect();
            if (!rect.width || !rect.height) return [];

            var style = window.getComputedStyle(flow);
            var scale = Math.min(3, Math.max(2, dpr));
            var cssWidth = Math.max(1, Math.ceil(rect.width));
            var cssHeight = Math.max(1, Math.ceil(rect.height));
            var offsetX = rect.left - itemRect.left;
            var offsetY = rect.top - itemRect.top;

            sampleCanvas.width = Math.max(1, Math.round(cssWidth * scale));
            sampleCanvas.height = Math.max(1, Math.round(cssHeight * scale));
            sampleCtx.setTransform(scale, 0, 0, scale, 0, 0);
            sampleCtx.clearRect(0, 0, cssWidth, cssHeight);
            sampleCtx.fillStyle = '#fff';
            sampleCtx.textBaseline = 'middle';
            sampleCtx.textAlign = 'left';
            sampleCtx.font = style.fontWeight + ' ' + style.fontSize + ' ' + style.fontFamily;

            var text = flow.textContent.replace(/\s+/g, '');
            var metrics = sampleCtx.measureText(text);
            var textX = Math.max(0, (cssWidth - metrics.width) / 2);
            var textY = cssHeight / 2 + parseFloat(style.fontSize) * 0.06;
            sampleCtx.fillText(text, textX, textY);

            var imageData = sampleCtx.getImageData(0, 0, sampleCanvas.width, sampleCanvas.height).data;
            var points = [];
            var step = scale >= 3 ? 5 : 4;

            for (var y = 0; y < sampleCanvas.height; y += step) {
                for (var x = 0; x < sampleCanvas.width; x += step) {
                    var alpha = imageData[(y * sampleCanvas.width + x) * 4 + 3];
                    if (alpha > 32 && Math.random() > 0.35) {
                        points.push({
                            x: offsetX + x / scale,
                            y: offsetY + y / scale
                        });
                    }
                }
            }

            return points;
        }

        function buildParticles(flow) {
            if (!flow || !itemRect) return;

            centerX = itemRect.width * 0.5;
            centerY = itemRect.height * 0.5;

            var points = sampleTextPoints(flow);
            if (!points.length) {
                var fallbackText = flow.getBoundingClientRect();
                points.push({
                    x: (fallbackText.left - itemRect.left) + fallbackText.width * 0.5,
                    y: (fallbackText.top - itemRect.top) + fallbackText.height * 0.5
                });
            }

            var desired = window.innerWidth < 768 ? 130 : 210;
            var count = Math.min(desired, points.length);
            var orbitRadius = Math.max(itemRect.width, itemRect.height) * 0.52;
            particles = [];

            for (var i = 0; i < count; i++) {
                var target = points[Math.floor(i * points.length / count)];
                var angle = (Math.PI * 2 * i / count) + Math.random() * 0.45;
                var radius = orbitRadius * (0.86 + Math.random() * 0.32);
                var x = centerX + Math.cos(angle) * radius;
                var y = centerY + Math.sin(angle * 1.24) * radius * 0.54;

                particles.push({
                    x: x,
                    y: y,
                    px: x,
                    py: y,
                    vx: 0,
                    vy: 0,
                    tx: target.x,
                    ty: target.y,
                    ringPhase: angle,
                    ringRadius: radius,
                    ringSpeed: 0.006 + Math.random() * 0.011,
                    ringStretch: 0.46 + Math.random() * 0.34,
                    width: 0.45 + Math.random() * 0.7,
                    wobble: Math.random() * Math.PI * 2,
                    energy: Math.random() * 0.3
                });
            }
        }

        function drawConnections() {
            var maxDistance = 34 + progress * 30;
            for (var i = 0; i < particles.length; i++) {
                var p = particles[i];
                var links = 0;

                for (var j = i + 1; j < particles.length && links < 2; j++) {
                    var p2 = particles[j];
                    var dx = p.x - p2.x;
                    var dy = p.y - p2.y;
                    var dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDistance) {
                        var alpha = (1 - dist / maxDistance) * (0.08 + progress * 0.16);
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = 'rgba(210, 236, 255, ' + alpha.toFixed(3) + ')';
                        ctx.lineWidth = 0.7;
                        ctx.stroke();
                        links++;
                    }
                }
            }
        }

        function drawParticles() {
            if (!itemRect) return;

            ctx.clearRect(0, 0, itemRect.width, itemRect.height);
            ctx.globalCompositeOperation = 'screen';

            var glow = 0.5 + Math.sin(Date.now() * 0.003) * 0.5;

            for (var i = 0; i < particles.length; i++) {
                var p = particles[i];
                p.px = p.x;
                p.py = p.y;

                if (progress > 0.02) {
                    var dx = p.tx - p.x;
                    var dy = p.ty - p.y;
                    var dist = Math.sqrt(dx * dx + dy * dy) || 1;
                    var force = 0.014 + progress * 0.03;
                    var swirl = (0.0015 + progress * 0.004) / dist;

                    p.vx += dx * force;
                    p.vy += dy * force;
                    p.vx += -dy * swirl;
                    p.vy += dx * swirl;
                    p.vx *= 0.84;
                    p.vy *= 0.84;
                    p.x += p.vx;
                    p.y += p.vy;
                    p.energy = clamp(p.energy + 0.06, 0, 1);
                } else {
                    p.ringPhase += p.ringSpeed;
                    var ringX = centerX + Math.cos(p.ringPhase + p.wobble) * p.ringRadius;
                    var ringY = centerY + Math.sin(p.ringPhase * 1.34 + p.wobble) * p.ringRadius * p.ringStretch;
                    p.vx += (ringX - p.x) * 0.02;
                    p.vy += (ringY - p.y) * 0.02;
                    p.vx *= 0.9;
                    p.vy *= 0.9;
                    p.x += p.vx;
                    p.y += p.vy;
                    p.energy = clamp(p.energy - 0.045, 0, 1);
                }

                var trailAlpha = 0.16 + progress * 0.32 + p.energy * 0.16;
                ctx.beginPath();
                ctx.moveTo(p.px, p.py);
                ctx.lineTo(p.x, p.y);
                ctx.strokeStyle = 'rgba(222, 244, 255, ' + trailAlpha.toFixed(3) + ')';
                ctx.lineWidth = p.width + 0.25;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(p.x, p.y, 0.65 + p.width * 0.45, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, ' + (0.18 + progress * 0.24 + glow * 0.05).toFixed(3) + ')';
                ctx.fill();
            }

            drawConnections();
        }

        function tick() {
            if (!itemRect) {
                rafId = null;
                return;
            }

            progress = lerp(progress, active ? 1 : 0, active ? 0.09 : 0.06);
            drawParticles();

            var done = !active && progress < 0.01;
            if (done) {
                ctx.clearRect(0, 0, itemRect.width, itemRect.height);
                rafId = null;
                return;
            }

            rafId = requestAnimationFrame(tick);
        }

        function start(flow) {
            if (!flow) return;
            activeFlow = flow;
            active = true;
            item.classList.add('is-particle-active');
            resizeCanvas();
            buildParticles(flow);
            if (!rafId) {
                tick();
            }
        }

        function stop(flow) {
            if (flow && activeFlow && flow !== activeFlow) return;
            activeFlow = null;
            active = false;
            item.classList.remove('is-particle-active');
            if (!rafId) {
                tick();
            }
        }

        function onResize() {
            resizeCanvas();
            buildParticles(activeFlow || getVisibleFlow());
        }

        resizeCanvas();
        buildParticles(getVisibleFlow());

        var flows = item.querySelectorAll('.research-flow');
        flows.forEach(function (flow) {
            flow.addEventListener('pointerenter', function () {
                start(flow);
            });
            flow.addEventListener('pointerleave', function () {
                stop(flow);
            });
            flow.addEventListener('mouseenter', function () {
                start(flow);
            });
            flow.addEventListener('mouseleave', function () {
                stop(flow);
            });
        });

        item.addEventListener('focusin', function () {
            start(getVisibleFlow());
        });
        item.addEventListener('focusout', function () {
            stop();
        });
        window.addEventListener('resize', onResize);
    }

    function initSciGhostEffect() {
        var item = document.querySelector('.work-item--sci');
        if (!item) return;

        var lineEls = item.querySelectorAll('.work-name, .work-type');
        var charEls = [];
        var rafId = null;
        var active = false;
        var t = 0;

        lineEls.forEach(function (el) {
            if (el.dataset.ghostReady === '1') return;
            var chars = el.textContent.split('');
            el.innerHTML = '<span class="sci-ghost-line">' + chars.map(function (ch, i) {
                if (ch === ' ') {
                    return '<span class="sci-char sci-char--space" data-char=" " style="--char-index:' + i + '; width:0.28em;"></span>';
                }
                return '<span class="sci-char" data-char="' + ch + '" style="--char-index:' + i + ';">' +
                    '<span class="sci-char-core">' + ch + '</span>' +
                    '<span class="sci-frag-layer" aria-hidden="true">' +
                        '<i class="sci-frag" style="--fx:-0.04em; --fy:0.10em; --tx:-0.08em; --ty:-0.04em; --fd:' + ((i * 17) % 90) + 'ms; --fs:1.55px;"></i>' +
                        '<i class="sci-frag" style="--fx:0.70em; --fy:0.06em; --tx:0.08em; --ty:-0.05em; --fd:' + ((i * 23) % 110) + 'ms; --fs:1.45px;"></i>' +
                        '<i class="sci-frag" style="--fx:0.30em; --fy:0.72em; --tx:0.05em; --ty:0.08em; --fd:' + ((i * 31) % 130) + 'ms; --fs:1.35px;"></i>' +
                    '</span>' +
                '</span>';
            }).join('') + '</span>';
            el.dataset.ghostReady = '1';
        });

        charEls = Array.prototype.slice.call(item.querySelectorAll('.sci-char'));

        function resetChars() {
            charEls.forEach(function (span, i) {
                span.style.transitionDelay = (charEls.length - i) * 7 + 'ms';
                span.style.transform = '';
                span.style.removeProperty('--ghost-x');
                span.style.removeProperty('--ghost-y');
                span.style.opacity = '';
            });
        }

        function tick() {
            if (!active) return;
            t += 0.12;
            charEls.forEach(function (span, i) {
                var jitterX = Math.sin(t * 2.4 + i * 0.52) * 1.2 + (Math.random() - 0.5) * 0.8;
                var jitterY = Math.cos(t * 2.1 + i * 0.44) * 0.9 + (Math.random() - 0.5) * 0.6;
                var rotate = Math.sin(t * 1.8 + i * 0.31) * 1.2;
                span.style.transitionDelay = '0ms';
                span.style.transform = 'translate(' + jitterX.toFixed(2) + 'px, ' + jitterY.toFixed(2) + 'px) rotate(' + rotate.toFixed(2) + 'deg)';
                span.style.setProperty('--ghost-x', jitterX.toFixed(2) + 'px');
                span.style.setProperty('--ghost-y', jitterY.toFixed(2) + 'px');
                span.style.opacity = '0.98';
            });
            rafId = requestAnimationFrame(tick);
        }

        item.addEventListener('mouseenter', function () {
            if (active) return;
            active = true;
            item.classList.add('is-ghosting');
            tick();
        });

        item.addEventListener('mouseleave', function () {
            active = false;
            item.classList.remove('is-ghosting');
            if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
            resetChars();
        });
    }

    // ==========================================
    // Info 分区滚动触发 TextScramble
    // 仅在元素进入视口时播放，且每个元素只播放一次
    // 语言切换时：display:none 的元素不触发，切换后进入视口再触发
    // ==========================================

    function initInfoSectionScramble() {
        if (!('IntersectionObserver' in window)) return;

        var selectors = [
            '#info .info-section .section-label',
            '#info .exp-item .exp-name',
            '#info .exp-item .exp-role',
            '#info .exp-item .exp-date',
            '#info .projects-group-title',
            '#info .projects-list li',
            '#info .edu-item .edu-school',
            '#info .edu-item .edu-degree',
            '#info .edu-item .edu-date'
        ].join(', ');

        var els = document.querySelectorAll(selectors);

        // 预先创建实例（此时记录原始内容，但不播放）
        els.forEach(function (el) {
            el._scramble = new TextScramble(el, { waitMax: 30, scrambleDuration: 20 });
        });

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                var el = entry.target;
                if (el.dataset.scrambleDone) return;
                el.dataset.scrambleDone = '1';
                observer.unobserve(el);
                if (el._scramble) el._scramble.start();
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -10px 0px'
        });

        els.forEach(function (el) {
            observer.observe(el);
        });
    }

    // ==========================================
    // Tabs
    // ==========================================

    var textScrambleInstance = null;

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

            if (tabId === 'info' && textScrambleInstance) {
                textScrambleInstance.start();
            }
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
    // Things Entry Password
    // ==========================================

    function initThingsEntryPassword() {
        var entry = document.getElementById('things-permit-entry');
        if (!entry) return;
        var apiBase = 'https://homepage-1gthisc4771d43ac.service.tcloudbase.com/dm-api';
        var permitStorageKey = 'things_access_token';

        entry.addEventListener('click', function (e) {
            e.preventDefault();
            if (window.PermitCodeModal && window.PermitCodeModal.openPermitCodeModal) {
                window.PermitCodeModal.openPermitCodeModal({
                    contextLabel: 'Digital & Experience',
                    title: '许可代码',
                    description: '输入许可代码后继续访问数字与体验。',
                    placeholder: '代码为本节课的开课日期',
                    errorMessage: '验证失败，请重试。',
                    validate: function (value) {
                        return fetch(apiBase + '/permit/auth', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ code: value })
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
                    },
                    onSuccess: function (_, payload) {
                        if (payload && payload.token) {
                            sessionStorage.setItem(permitStorageKey, payload.token);
                        }
                        window.location.href = entry.getAttribute('href');
                    }
                });
            }
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
            initThingsEntryPassword();
            new ParticleBackground('canvas-container');

            var displayNameEl = document.querySelector('#info .display-name');
            if (displayNameEl) {
                textScrambleInstance = new TextScramble(displayNameEl, {
                    waitMax: 40,
                    scrambleDuration: 25
                });
                var hash = (window.location.hash || '').slice(1);
                if (hash === 'info') {
                    textScrambleInstance.start();
                }
            }

            initVisualCodingEffect();
            initResearchFlowEffect();
            initResearchParticleEffect();
            initSciGhostEffect();
            initInfoSectionScramble();
        } catch (err) {
            console.error('Init error:', err);
        }
    });
})();
