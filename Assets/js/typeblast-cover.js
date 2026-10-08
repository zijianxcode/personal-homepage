// Reuse the supplied PNG for every tile; no canvas, image edits, or animation loop.
(function () {
    'use strict';
    var cover = document.querySelector('[data-pixel-cover]');
    if (!cover) return;
    var image = cover.querySelector('img');
    var motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    var visible = false;

    function update() {
        cover.classList.toggle('pixel-cover-running', visible && !document.hidden && !motion.matches);
    }

    function prepare() {
        if (!image.naturalWidth || cover.dataset.pixelReady) return;
        cover.dataset.pixelReady = 'true';
        var layer = document.createElement('div');
        layer.className = 'pixel-key-layer';
        layer.setAttribute('aria-hidden', 'true');
        for (var row = 0; row < 4; row++) {
            for (var col = 0; col < 4; col++) {
                var tile = document.createElement('span');
                tile.className = 'pixel-key-tile';
                tile.style.left = (10 + 20 * col) + '%';
                tile.style.top = (10 + 20 * row) + '%';
                var key = document.createElement('span');
                key.className = 'pixel-key';
                key.style.backgroundImage = 'url("' + image.src + '")';
                key.style.backgroundPosition = (12.5 + 25 * col) + '% ' + (12.5 + 25 * row) + '%';
                key.style.setProperty('--pixel-delay', (-((row * 4 + col) * 0.37)) + 's');
                tile.appendChild(key);
                layer.appendChild(tile);
            }
        }
        cover.appendChild(layer);
        if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function (entries) {
                visible = entries[0].isIntersecting;
                update();
            }, { threshold: 0.1 });
            observer.observe(cover);
        } else {
            visible = true;
            update();
        }
    }
    document.addEventListener('visibilitychange', update);
    motion.addEventListener('change', update);
    image.addEventListener('load', prepare, { once: true });
    if (image.complete) prepare();
})();
