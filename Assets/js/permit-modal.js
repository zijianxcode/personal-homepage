(function () {
    'use strict';

    function escapeAttr(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;');
    }

    function createModalHtml(options) {
        var contextLabel = escapeHtml(options.contextLabel || 'Digital & Experience');
        var title = escapeHtml(options.title || '许可代码');
        var description = escapeHtml(options.description || '输入许可代码后继续访问。');
        var submitLabel = escapeHtml(options.submitLabel || '进入');
        var cancelLabel = escapeHtml(options.cancelLabel || '取消');
        var placeholder = escapeAttr(options.placeholder || '请输入许可代码');

        return '' +
            '<div class="permit-modal-overlay" data-permit-overlay>' +
                '<div class="permit-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="permit-modal-title">' +
                    '<button class="permit-modal-close" type="button" aria-label="关闭">×</button>' +
                    '<div class="permit-modal-meta">' +
                        '<span class="permit-modal-index">01</span>' +
                    '</div>' +
                    '<h2 class="permit-modal-title" id="permit-modal-title">' + title + '</h2>' +
                    '<p class="permit-modal-desc">' + description + '</p>' +
                    '<form class="permit-modal-form">' +
                        '<label class="permit-modal-field">' +
                            '<span class="permit-modal-field-label">Permit Code</span>' +
                            '<input class="permit-modal-input" type="password" inputmode="numeric" autocomplete="off" placeholder="' + placeholder + '" />' +
                        '</label>' +
                        '<p class="permit-modal-error" aria-live="polite"></p>' +
                        '<div class="permit-modal-actions">' +
                            '<button class="permit-modal-btn permit-modal-btn--ghost" type="button" data-permit-cancel>' + cancelLabel + '</button>' +
                            '<button class="permit-modal-btn permit-modal-btn--primary" type="submit">' + submitLabel + '</button>' +
                        '</div>' +
                    '</form>' +
                '</div>' +
            '</div>';
    }

    function openPermitCodeModal(options) {
        options = options || {};

        var wrapper = document.createElement('div');
        wrapper.innerHTML = createModalHtml(options);
        var overlay = wrapper.firstChild;
        var dialog = overlay.querySelector('.permit-modal-dialog');
        var closeBtn = overlay.querySelector('.permit-modal-close');
        var cancelBtn = overlay.querySelector('[data-permit-cancel]');
        var form = overlay.querySelector('.permit-modal-form');
        var input = overlay.querySelector('.permit-modal-input');
        var errorEl = overlay.querySelector('.permit-modal-error');
        var submitBtn = overlay.querySelector('.permit-modal-btn--primary');
        var closed = false;
        var pending = false;

        function cleanup() {
            if (closed) return;
            closed = true;
            document.body.classList.remove('permit-modal-open');
            document.removeEventListener('keydown', onKeydown);
            overlay.remove();
        }

        function cancel() {
            cleanup();
            if (typeof options.onCancel === 'function') {
                options.onCancel();
            }
        }

        function showError(message) {
            errorEl.textContent = message || '许可代码错误，请重试。';
            dialog.classList.add('is-error');
            input.focus();
            input.select();
        }

        function clearError() {
            errorEl.textContent = '';
            dialog.classList.remove('is-error');
        }

        function setPendingState(isPending) {
            pending = !!isPending;
            input.disabled = pending;
            closeBtn.disabled = pending;
            cancelBtn.disabled = pending;
            submitBtn.disabled = pending;
        }

        function onKeydown(event) {
            if (pending) return;
            if (event.key === 'Escape') {
                event.preventDefault();
                cancel();
            }
        }

        closeBtn.addEventListener('click', cancel);
        cancelBtn.addEventListener('click', cancel);
        overlay.addEventListener('click', function (event) {
            if (pending) return;
            if (event.target === overlay) {
                cancel();
            }
        });
        input.addEventListener('input', clearError);
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            if (pending) return;
            var value = input.value.trim();
            var validationResult = typeof options.validate === 'function' ? options.validate(value) : !!value;

            setPendingState(true);
            Promise.resolve(validationResult)
                .then(function (result) {
                    var normalized = typeof result === 'object' && result !== null ? result : { ok: !!result };
                    if (!normalized.ok) {
                        showError(normalized.errorMessage || options.errorMessage);
                        setPendingState(false);
                        return;
                    }

                    cleanup();
                    if (typeof options.onSuccess === 'function') {
                        options.onSuccess(value, normalized.payload);
                    }
                })
                .catch(function () {
                    showError(options.errorMessage);
                    setPendingState(false);
                });
        });

        document.addEventListener('keydown', onKeydown);
        document.body.classList.add('permit-modal-open');
        document.body.appendChild(overlay);
        requestAnimationFrame(function () {
            input.focus();
        });
    }

    window.PermitCodeModal = {
        openPermitCodeModal: openPermitCodeModal
    };
})();
