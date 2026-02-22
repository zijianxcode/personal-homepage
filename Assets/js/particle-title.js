/**
 * ParticleTitle - Renders text as animated particles using opentype.js
 * Supports pulse (breathing) and slice (split/reform) effects.
 */

class ParticleTitle {
    static #globalFont = null;

    static loadGlobalFont(url) {
        return new Promise((resolve, reject) => {
            if (this.#globalFont) return resolve(this.#globalFont);
            if (typeof opentype === 'undefined') {
                return reject(new Error('opentype.js is not loaded.'));
            }
            opentype.load(url, (err, font) => {
                if (err) reject(err);
                else {
                    this.#globalFont = font;
                    resolve(font);
                }
            });
        });
    }

    constructor(config) {
        this.config = Object.assign({
            elementId: null,
            containerId: null,
            text: 'TEXT',
            effect: 'pulse',
            colorDark: '#ffffff',
            colorLight: '#111111',
            baseSize: 2.4,
            baseDensity: 4,
            enableResistance: true,
        }, config);

        this.canvas = document.getElementById(this.config.elementId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.slices = [];
        this.mouse = { x: -9999, y: -9999, isActive: false };
        this.animId = null;
        this.time = 0;
        this.isVisible = false;
        this.dpr = Math.min(window.devicePixelRatio || 1, 2);

        this.init();
    }

    init() {
        this.setupCanvas();
        this.generateParticles();
        this.bindEvents();
        this.setupVisibilityObserver();
        this.animate();
    }

    setupCanvas() {
        const container = document.getElementById(this.config.containerId);
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const w = rect.width;
        const h = this.calculateHeight(w);

        this.canvas.width = w * this.dpr;
        this.canvas.height = h * this.dpr;
        this.canvas.style.width = w + 'px';
        this.canvas.style.height = h + 'px';
        this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);

        this.width = w;
        this.height = h;
    }

    calculateHeight(width) {
        const fontSize = width * 0.12;
        return Math.max(fontSize * 1.2, 60);
    }

    generateParticles() {
        const font = ParticleTitle.#globalFont;
        if (!font) return;

        this.particles = [];

        const fontSize = this.width * 0.12;
        const path = font.getPath(this.config.text, 0, fontSize * 0.85, fontSize);
        const bbox = path.getBoundingBox();
        const textWidth = bbox.x2 - bbox.x1;
        const offsetX = (this.width - textWidth) / 2 - bbox.x1;
        const offsetY = (this.height - (bbox.y2 - bbox.y1)) / 2 - bbox.y1;

        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = this.width;
        tempCanvas.height = this.height;
        const tempCtx = tempCanvas.getContext('2d');

        const pathShifted = font.getPath(this.config.text, offsetX, fontSize * 0.85 + offsetY - (bbox.y2 - bbox.y1) * 0.05, fontSize);
        pathShifted.fill = '#000';
        pathShifted.draw(tempCtx);

        const imageData = tempCtx.getImageData(0, 0, this.width, this.height);
        const density = Math.max(2, Math.round(this.config.baseDensity * (this.width < 768 ? 1.5 : 1)));

        for (let y = 0; y < this.height; y += density) {
            for (let x = 0; x < this.width; x += density) {
                const idx = (y * this.width + x) * 4;
                if (imageData.data[idx + 3] > 128) {
                    const particle = {
                        x: x,
                        y: y,
                        originX: x,
                        originY: y,
                        size: this.config.baseSize * (0.5 + Math.random() * 0.5),
                        baseSize: this.config.baseSize * (0.5 + Math.random() * 0.5),
                        vx: 0,
                        vy: 0,
                        phase: Math.random() * Math.PI * 2,
                        speed: 0.02 + Math.random() * 0.02,
                        isStubborn: this.config.enableResistance && Math.random() < 0.1,
                    };
                    this.particles.push(particle);
                }
            }
        }

        if (this.config.effect === 'slice') {
            this.buildSlices();
        }
    }

    buildSlices() {
        const sliceCount = 5 + Math.floor(Math.random() * 4);
        this.slices = [];

        for (let i = 0; i < sliceCount; i++) {
            this.slices.push({
                yStart: (i / sliceCount) * this.height,
                yEnd: ((i + 1) / sliceCount) * this.height,
                offsetX: 0,
                offsetY: 0,
                targetOffsetX: 0,
                targetOffsetY: 0,
                phase: Math.random() * Math.PI * 2,
                speed: 0.005 + Math.random() * 0.01,
            });
        }
    }

    bindEvents() {
        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
            this.mouse.isActive = true;
        });

        this.canvas.addEventListener('mouseleave', () => {
            this.mouse.isActive = false;
            this.mouse.x = -9999;
            this.mouse.y = -9999;
        });

        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.setupCanvas();
                this.generateParticles();
            }, 200);
        });
    }

    setupVisibilityObserver() {
        const observer = new IntersectionObserver(
            (entries) => {
                this.isVisible = entries[0].isIntersecting;
            },
            { threshold: 0 }
        );
        observer.observe(this.canvas);
    }

    getColor() {
        const theme = document.body.getAttribute('data-theme');
        return theme === 'light' ? this.config.colorLight : this.config.colorDark;
    }

    animate() {
        if (this.isVisible) {
            this.time += 0.016;
            this.ctx.clearRect(0, 0, this.width, this.height);

            if (this.config.effect === 'pulse') {
                this.renderPulse();
            } else if (this.config.effect === 'slice') {
                this.renderSlice();
            }
        }

        this.animId = requestAnimationFrame(() => this.animate());
    }

    renderPulse() {
        const color = this.getColor();
        const mouseRadius = 80;

        for (const p of this.particles) {
            const breathe = Math.sin(this.time * 2 + p.phase) * 0.3;
            let targetSize = p.baseSize + breathe;

            if (this.mouse.isActive) {
                const dx = this.mouse.x - p.x;
                const dy = this.mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < mouseRadius) {
                    const force = (mouseRadius - dist) / mouseRadius;
                    if (!p.isStubborn) {
                        p.vx -= dx * force * 0.03;
                        p.vy -= dy * force * 0.03;
                    }
                    targetSize += force * 2;
                }
            }

            p.vx *= 0.92;
            p.vy *= 0.92;

            const springForce = p.isStubborn ? 0.15 : 0.06;
            p.vx += (p.originX - p.x) * springForce;
            p.vy += (p.originY - p.y) * springForce;

            p.x += p.vx;
            p.y += p.vy;
            p.size += (targetSize - p.size) * 0.1;

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, Math.max(0.5, p.size), 0, Math.PI * 2);
            this.ctx.fillStyle = color;
            this.ctx.fill();
        }
    }

    renderSlice() {
        const color = this.getColor();

        for (const slice of this.slices) {
            slice.targetOffsetX = Math.sin(this.time * 3 + slice.phase) * 8;
            slice.targetOffsetY = Math.cos(this.time * 2 + slice.phase) * 3;
            slice.offsetX += (slice.targetOffsetX - slice.offsetX) * 0.05;
            slice.offsetY += (slice.targetOffsetY - slice.offsetY) * 0.05;
        }

        if (this.mouse.isActive) {
            for (const slice of this.slices) {
                const sliceCenterY = (slice.yStart + slice.yEnd) / 2;
                const dy = this.mouse.y - sliceCenterY;
                const dist = Math.abs(dy);
                if (dist < 60) {
                    const force = (60 - dist) / 60;
                    const direction = this.mouse.x > this.width / 2 ? 1 : -1;
                    slice.targetOffsetX += direction * force * 30;
                }
            }
        }

        for (const p of this.particles) {
            let sliceOffset = { x: 0, y: 0 };
            for (const slice of this.slices) {
                if (p.originY >= slice.yStart && p.originY < slice.yEnd) {
                    sliceOffset.x = slice.offsetX;
                    sliceOffset.y = slice.offsetY;
                    break;
                }
            }

            const breathe = Math.sin(this.time * 1.5 + p.phase) * 0.2;

            this.ctx.beginPath();
            this.ctx.arc(
                p.originX + sliceOffset.x,
                p.originY + sliceOffset.y,
                Math.max(0.5, p.baseSize + breathe),
                0,
                Math.PI * 2
            );
            this.ctx.fillStyle = color;
            this.ctx.fill();
        }
    }

    destroy() {
        if (this.animId) cancelAnimationFrame(this.animId);
    }
}
