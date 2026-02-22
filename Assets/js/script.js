/**
 * Personal Portfolio - Main Script
 * Particle background, theme/lang toggle, scroll reveal, career timer
 */

(function () {
    'use strict';

    const CONFIG = {
        PARTICLE_DENSITY: 12000,
        CONNECTION_DISTANCE: 150,
        MAX_CONNECTIONS: 3,
        MOUSE_RADIUS: 180,
        PARTICLE_SPEED: 0.3,
        REVEAL_THRESHOLD: 0.15,
        MOBILE_BREAKPOINT: 768,
    };

    const CELESTIAL_TITLES = [
        { cn: '星尘编织者', en: 'Stardust Weaver' },
        { cn: '星云领航员', en: 'Nebula Navigator' },
        { cn: '宇宙造梦师', en: 'Cosmic Dreamer' },
        { cn: '轨道建筑师', en: 'Orbit Architect' },
        { cn: '月图测绘师', en: 'Lunar Cartographer' },
        { cn: '星座编码师', en: 'Constellation Coder' },
        { cn: '极光策展人', en: 'Aurora Curator' },
        { cn: '银河园丁', en: 'Galaxy Gardener' },
        { cn: '黑洞探险家', en: 'Black Hole Explorer' },
        { cn: '彗星追逐者', en: 'Comet Chaser' },
        { cn: '引力雕塑师', en: 'Gravity Sculptor' },
        { cn: '虚空漫步者', en: 'Void Walker' },
        { cn: '脉冲星钢琴师', en: 'Pulsar Pianist' },
        { cn: '太阳风牧者', en: 'Solar Wind Shepherd' },
        { cn: '星图绘制者', en: 'Star Chart Cartographer' },
    ];

    const State = {
        isPageVisible: true,
        backgroundInstance: null,
        mouse: { x: -9999, y: -9999 },
    };

    // ==========================================
    // Particle Network Background
    // ==========================================

    class ParticleBackground {
        constructor(containerId) {
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

        resize() {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.canvas.width = this.width * this.dpr;
            this.canvas.height = this.height * this.dpr;
            this.canvas.style.width = this.width + 'px';
            this.canvas.style.height = this.height + 'px';
            this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
        }

        createParticles() {
            const isMobile = this.width < CONFIG.MOBILE_BREAKPOINT;
            const area = this.width * this.height;
            const density = isMobile ? CONFIG.PARTICLE_DENSITY * 2 : CONFIG.PARTICLE_DENSITY;
            const count = Math.floor(area / density);

            this.particles = [];
            for (let i = 0; i < count; i++) {
                this.particles.push({
                    x: Math.random() * this.width,
                    y: Math.random() * this.height,
                    vx: (Math.random() - 0.5) * CONFIG.PARTICLE_SPEED,
                    vy: (Math.random() - 0.5) * CONFIG.PARTICLE_SPEED,
                    radius: Math.random() * 1.5 + 0.5,
                });
            }
        }

        bindEvents() {
            window.addEventListener('resize', () => {
                this.resize();
                this.createParticles();
            });

            window.addEventListener('mousemove', (e) => {
                State.mouse.x = e.clientX;
                State.mouse.y = e.clientY;
            });

            window.addEventListener('mouseleave', () => {
                State.mouse.x = -9999;
                State.mouse.y = -9999;
            });
        }

        animate() {
            if (!State.isPageVisible) {
                this.animId = requestAnimationFrame(() => this.animate());
                return;
            }

            this.ctx.clearRect(0, 0, this.width, this.height);

            const style = getComputedStyle(document.body);
            const particleColor = style.getPropertyValue('--particle-color').trim();
            const lineColor = style.getPropertyValue('--particle-line').trim();

            for (let i = 0; i < this.particles.length; i++) {
                const p = this.particles[i];

                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > this.width) p.vx *= -1;
                if (p.y < 0 || p.y > this.height) p.vy *= -1;

                const dx = State.mouse.x - p.x;
                const dy = State.mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < CONFIG.MOUSE_RADIUS) {
                    const force = (CONFIG.MOUSE_RADIUS - dist) / CONFIG.MOUSE_RADIUS;
                    p.x -= dx * force * 0.02;
                    p.y -= dy * force * 0.02;
                }

                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                this.ctx.fillStyle = particleColor;
                this.ctx.fill();

                let connections = 0;
                for (let j = i + 1; j < this.particles.length && connections < CONFIG.MAX_CONNECTIONS; j++) {
                    const p2 = this.particles[j];
                    const cx = p.x - p2.x;
                    const cy = p.y - p2.y;
                    const cdist = Math.sqrt(cx * cx + cy * cy);

                    if (cdist < CONFIG.CONNECTION_DISTANCE) {
                        const opacity = 1 - cdist / CONFIG.CONNECTION_DISTANCE;
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

            this.animId = requestAnimationFrame(() => this.animate());
        }

        destroy() {
            if (this.animId) cancelAnimationFrame(this.animId);
            if (this.canvas && this.canvas.parentNode) {
                this.canvas.parentNode.removeChild(this.canvas);
            }
        }
    }

    // ==========================================
    // Theme Toggle
    // ==========================================

    function initThemeToggle() {
        const btn = document.getElementById('theme-toggle');
        if (!btn) return;

        const saved = localStorage.getItem('theme');
        if (saved) {
            document.body.setAttribute('data-theme', saved);
            btn.textContent = saved === 'dark' ? 'Light Mode' : 'Dark Mode';
        }

        btn.addEventListener('click', () => {
            const current = document.body.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.body.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            btn.textContent = next === 'dark' ? 'Light Mode' : 'Dark Mode';
        });
    }

    // ==========================================
    // Language Toggle
    // ==========================================

    function initLangToggle() {
        const saved = localStorage.getItem('lang');
        if (saved) {
            document.body.setAttribute('data-lang', saved);
            updateLangButtons(saved);
        }
    }

    window.setLang = function (lang) {
        document.body.setAttribute('data-lang', lang);
        localStorage.setItem('lang', lang);
        updateLangButtons(lang);
    };

    function updateLangButtons(lang) {
        document.querySelectorAll('.lang-btn').forEach((btn) => {
            btn.classList.toggle('active', btn.textContent.trim().toLowerCase() === lang);
        });
    }

    // ==========================================
    // Scroll Reveal
    // ==========================================

    function initReveal() {
        const opts = {
            root: null,
            rootMargin: '0px 0px 80px 0px',
            threshold: 0.01
        };
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            },
            opts
        );

        const revealEls = document.querySelectorAll('.reveal');
        revealEls.forEach((el) => observer.observe(el));

        // 使用双重 rAF 确保布局完成后再显示初始可见元素
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                revealEls.forEach((el) => {
                    const rect = el.getBoundingClientRect();
                    if (rect.top < window.innerHeight + 100) el.classList.add('revealed');
                });
            });
        });
        // 备用：100ms 后再次检查，防止极端情况
        setTimeout(() => {
            revealEls.forEach((el) => {
                if (el.classList.contains('revealed')) return;
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight + 100) el.classList.add('revealed');
            });
        }, 100);
        // 兜底：500ms 后强制显示首屏所有 .reveal 元素，确保内容可见
        setTimeout(() => {
            revealEls.forEach((el) => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight + 200) el.classList.add('revealed');
            });
        }, 500);
    }

    // ==========================================
    // Career Timer
    // ==========================================

    function initCareerTimer() {
        const yearEl = document.querySelector('.timer-year');
        const monthEl = document.querySelector('.timer-month');
        const dayEl = document.querySelector('.timer-day');
        const timeEl = document.querySelector('.timer-time');
        const msEl = document.querySelector('.timer-ms');
        if (!yearEl || !monthEl || !dayEl || !timeEl || !msEl) return;

        function update() {
            const now = new Date();

            const year = String(now.getFullYear()).slice(-2);
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const ms = String(now.getMilliseconds()).padStart(3, '0');

            yearEl.textContent = year + 'Y';
            monthEl.textContent = month + 'M';
            dayEl.textContent = day + 'D';
            timeEl.textContent = hours + minutes + seconds;
            msEl.textContent = ms;

            requestAnimationFrame(update);
        }

        update();
    }

    // ==========================================
    // Stat Counter Animation
    // ==========================================

    function initStatCounters() {
        const projectsEl = document.getElementById('stat-projects');
        const projectCount = document.querySelectorAll('.project-list li').length;

        function animateCount(el, target, duration) {
            if (!el) return;
            const start = performance.now();
            function step(timestamp) {
                const progress = Math.min((timestamp - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.round(target * eased);
                if (progress < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
        }

        setTimeout(() => animateCount(projectsEl, projectCount, 2000), 500);
    }

    function initCelestialTitle() {
        const cnEl = document.getElementById('subtitle-cn');
        const enEl = document.getElementById('subtitle-en');
        if (!cnEl || !enEl) return;
        const t = CELESTIAL_TITLES[Math.floor(Math.random() * CELESTIAL_TITLES.length)];
        cnEl.textContent = t.cn;
        enEl.textContent = t.en;
    }

    // ==========================================
    // Page Visibility
    // ==========================================

    function initVisibility() {
        document.addEventListener('visibilitychange', () => {
            State.isPageVisible = !document.hidden;
        });
    }

    // ==========================================
    // Init
    // ==========================================

    document.addEventListener('DOMContentLoaded', () => {
        try {
            initVisibility();
            initThemeToggle();
            initLangToggle();
            initReveal();
            initCareerTimer();
            initStatCounters();
            initCelestialTitle();
            State.backgroundInstance = new ParticleBackground('canvas-container');
        } catch (err) {
            console.error('Portfolio init error:', err);
        }
    });
})();
