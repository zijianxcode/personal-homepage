function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

function extractHeading(content) {
    const match = content.match(/^#\s+(.+)$/m);
    return match ? match[1].trim() : '未命名记录';
}

function formatDateLabel(value) {
    if (!value) return '未标注时间';
    if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/.test(value)) return value;
    return value.replace('T', ' ');
}

function normalizeSearchText(value) {
    return String(value || '')
        .toLowerCase()
        .replace(/["'`“”‘’]/g, ' ')
        .replace(/[-–—_:：/.,!?()[\]{}]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function normalizeText(entry) {
    return normalizeSearchText(`${entry.date || ''} ${entry.title || ''} ${entry.content || ''} ${entry.source_dir || ''} ${entry.file_name || ''} ${entry.session_label || ''}`);
}

function normalizeHeadingText(value) {
    return String(value || '')
        .toLowerCase()
        .replace(/[^\p{L}\p{N}]+/gu, '')
        .trim();
}

function cleanSectionLabel(value) {
    return String(value || '')
        .replace(/^\s*(?:第\s*)?(?:\d+|[一二三四五六七八九十]+)\s*[.、．:：]\s*/, '')
        .trim();
}

function obsidianNoteName(value) {
    return String(value || '未命名论文')
        .replace(/[\\/:*?"<>|#^[\]]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 90) || '未命名论文';
}

function buildObsidianMarkdown(entry) {
    const lines = [
        `# ${entry.title}`,
        '',
        '## 论文信息',
        `- 收集时间：${formatDateLabel(entry.date)}`,
        `- 来源目录：${entry.source_dir || '未标注'}`,
        `- 来源文件：${entry.file_name || '未标注'}`
    ];

    if (entry.original_url) {
        lines.push(`- 原文链接：${entry.original_url}`);
    }

    lines.push('', '## 阅读总结', '', entry.content || '');
    return lines.join('\n').trim();
}

function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    }

    return new Promise((resolve, reject) => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy') ? resolve() : reject(new Error('copy failed'));
        } catch (error) {
            reject(error);
        } finally {
            textarea.remove();
        }
    });
}

function buildObsidianUri(entry) {
    const obsidian = pageConfig && pageConfig.obsidian ? pageConfig.obsidian : {};
    const params = new URLSearchParams();
    const vault = String(obsidian.vault || '').trim();
    const folder = String(obsidian.folder || '').trim().replace(/^\/+|\/+$/g, '');
    const noteName = obsidianNoteName(entry.title);

    if (vault) {
        params.set('vault', vault);
    }
    if (folder) {
        params.set('file', `${folder}/${noteName}`);
    } else {
        params.set('name', noteName);
    }
    params.set('clipboard', 'true');
    return `obsidian://new?${params.toString()}`;
}

(function initDetailPage() {
    const url = new URL(window.location.href);
    const navRoot = document.getElementById('navList');
    const articleRoot = document.getElementById('content');
    const articleTitle = document.getElementById('articleTitle');
    const originalLink = document.getElementById('originalLink');
    const obsidianButton = document.getElementById('obsidianButton');
    const obsidianStatus = document.getElementById('obsidianStatus');
    const readerTools = document.getElementById('readerTools');
    const readerToc = document.getElementById('readerToc');
    const readerToolsCount = document.getElementById('readerToolsCount');
    const filterInput = document.getElementById('filterInput');
    const filterTabs = document.getElementById('filterTabs');
    const resultCount = document.getElementById('resultCount');
    const latestMeta = document.getElementById('latestMeta');
    const totalMeta = document.getElementById('totalMeta');
    const currentMeta = document.getElementById('currentMeta');
    const menuToggle = document.getElementById('menuToggle');

    if (!Array.isArray(entries) || !entries.length) {
        if (latestMeta) latestMeta.textContent = '暂无记录';
        if (totalMeta) totalMeta.textContent = '0 条记录';
        if (currentMeta) currentMeta.textContent = '当前 0/0';
        if (navRoot) navRoot.innerHTML = '<li class="empty-state">还没有可展示的记录，等你开始打星后这里会自动出现。</li>';
        if (articleTitle) articleTitle.textContent = pageConfig && pageConfig.title ? pageConfig.title : '暂无记录';
        if (articleRoot) articleRoot.innerHTML = '<div class="empty-state">当前页面还没有生成任何记录。</div>';
        return;
    }

    const FILTERS = [
        { id: 'all', label: '全部' },
        { id: 'weekly', label: '周会讨论' },
        { id: 'review', label: '评审会' }
    ];
    let headingObserver = null;

    const state = {
        activeIndex: 0,
        query: '',
        filter: 'all'
    };
    const requestedFilter = url.searchParams.get('filter');
    const requestedSearch = normalizeSearchText(url.searchParams.get('search') || '');
    if (requestedFilter && FILTERS.some((filter) => filter.id === requestedFilter)) {
        state.filter = requestedFilter;
    }
    if (requestedSearch) {
        state.query = requestedSearch;
    }

    entries.forEach((entry, index) => {
        entry.title = entry.title || extractHeading(entry.content);
        entry.searchText = normalizeText(entry);
        entry.hash = `entry-${index}`;
    });

    const availableFilters = FILTERS.filter((filter) => filter.id === 'all' || entries.some((entry) => entry.session_type === filter.id));
    const filterEnabled = availableFilters.filter((filter) => filter.id !== 'all').length > 1;
    if (!availableFilters.some((filter) => filter.id === state.filter)) {
        state.filter = 'all';
    }

    if (latestMeta) latestMeta.textContent = `最新记录 ${formatDateLabel(entries[0].date)}`;
    if (totalMeta) totalMeta.textContent = `${entries.length} 条记录`;

    function syncRoute() {
        const nextUrl = new URL(window.location.href);
        if (state.filter && state.filter !== 'all' && availableFilters.some((filter) => filter.id === state.filter)) {
            nextUrl.searchParams.set('filter', state.filter);
        } else {
            nextUrl.searchParams.delete('filter');
        }
        if (state.query) {
            nextUrl.searchParams.set('search', filterInput ? filterInput.value.trim() : state.query);
        } else {
            nextUrl.searchParams.delete('search');
        }
        if (entries[state.activeIndex]) {
            nextUrl.hash = entries[state.activeIndex].hash;
        } else {
            nextUrl.hash = '';
        }
        history.replaceState(null, '', `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`);
    }

    function countForFilter(filterId) {
        return entries.filter((entry) => {
            const matchesFilter = filterId === 'all' ? true : entry.session_type === filterId;
            const matchesQuery = !state.query || state.query.split(' ').every((token) => entry.searchText.includes(token));
            return matchesFilter && matchesQuery;
        }).length;
    }

    function visibleEntries() {
        return entries
            .map((entry, index) => ({ entry, index }))
            .filter(({ entry }) => {
                const matchesFilter = !filterEnabled || state.filter === 'all' ? true : entry.session_type === state.filter;
                const matchesQuery = !state.query || state.query.split(' ').every((token) => entry.searchText.includes(token));
                return matchesFilter && matchesQuery;
            });
    }

    function renderFilterTabs() {
        if (!filterTabs) return;
        if (!filterEnabled) {
            filterTabs.innerHTML = '';
            filterTabs.hidden = true;
            return;
        }

        filterTabs.hidden = false;
        filterTabs.innerHTML = availableFilters.map((filter) => `
            <button class="filter-tab ${filter.id === state.filter ? 'active' : ''}" type="button" data-filter="${filter.id}">
                <span>${escapeHtml(filter.label)}</span>
                <strong>${countForFilter(filter.id)}</strong>
            </button>
        `).join('');

        filterTabs.querySelectorAll('.filter-tab').forEach((node) => {
            node.addEventListener('click', () => {
                state.filter = node.dataset.filter || 'all';
                const visible = visibleEntries();
                if (visible.length && !visible.some(({ index }) => index === state.activeIndex)) {
                    state.activeIndex = visible[0].index;
                }
                renderFilterTabs();
                renderNav();
                renderArticle(state.activeIndex);
                syncRoute();
            });
        });
    }

    function renderNav() {
        const list = visibleEntries();
        navRoot.innerHTML = list.length ? list.map(({ entry, index }) => `
            <li>
                <div class="nav-item ${index === state.activeIndex ? 'active' : ''}" data-index="${index}">
                    <div class="nav-meta-row">
                        <span class="nav-date">${escapeHtml(formatDateLabel(entry.date))}</span>
                        ${entry.session_label ? `<span class="nav-badge">${escapeHtml(entry.session_label)}</span>` : ''}
                    </div>
                    <span class="nav-title">${escapeHtml(entry.title)}</span>
                </div>
            </li>
        `).join('') : '<li class="empty-state">没有找到匹配的记录，试试切换 tab 或输入更短的关键词。</li>';

        if (resultCount) {
            const suffix = filterEnabled && state.filter !== 'all' ? ` · ${availableFilters.find((item) => item.id === state.filter).label}` : '';
            resultCount.textContent = state.query || (filterEnabled && state.filter !== 'all') ? `匹配 ${list.length} 条${suffix}` : `共 ${entries.length} 条`;
        }

        navRoot.querySelectorAll('.nav-item').forEach((node) => {
            node.addEventListener('click', () => {
                const index = Number(node.dataset.index);
                setActive(index, true);
                closeSidebar();
            });
        });
    }

    function renderEmptyArticle() {
        articleTitle.textContent = '没有匹配的记录';
        articleRoot.innerHTML = '<div class="empty-state">当前筛选条件下没有可展示的内容。</div>';
        if (readerTools) readerTools.hidden = true;
        if (originalLink) originalLink.hidden = true;
        if (obsidianButton) obsidianButton.disabled = true;
        if (obsidianStatus) obsidianStatus.textContent = '';
        if (currentMeta) currentMeta.textContent = '当前 0/0';
    }

    function removeDuplicateLeadHeading(entry) {
        const firstHeading = articleRoot.querySelector('h1');
        if (!firstHeading) return;

        const headingText = normalizeHeadingText(firstHeading.textContent);
        const titleText = normalizeHeadingText(entry.title);
        const pageTitleText = normalizeHeadingText(pageConfig && pageConfig.title);
        const fileNameText = normalizeHeadingText(entry.file_name || '');

        if (headingText && (headingText === titleText || headingText === pageTitleText || headingText === fileNameText)) {
            firstHeading.remove();
        }
    }

    function renderReaderTools() {
        if (!readerTools || !readerToc) return;
        if (headingObserver) {
            headingObserver.disconnect();
            headingObserver = null;
        }

        const headings = Array.from(articleRoot.querySelectorAll('h2, h3')).slice(0, 12);
        if (!headings.length) {
            readerTools.hidden = true;
            readerToc.innerHTML = '';
            if (readerToolsCount) readerToolsCount.textContent = '';
            return;
        }

        headings.forEach((heading, index) => {
            heading.id = heading.id || `section-${state.activeIndex}-${index}`;
        });

        readerTools.hidden = false;
        if (readerToolsCount) {
            readerToolsCount.textContent = `${headings.length} 段`;
        }
        readerToc.innerHTML = headings.map((heading, index) => `
            <button class="reader-toc-link reader-toc-${heading.tagName.toLowerCase()}" type="button" data-target="${escapeHtml(heading.id)}">
                <span>${String(index + 1).padStart(2, '0')}</span>
                <strong>${escapeHtml(cleanSectionLabel(heading.textContent) || heading.textContent.trim())}</strong>
            </button>
        `).join('');

        readerToc.querySelectorAll('.reader-toc-link').forEach((node) => {
            node.addEventListener('click', () => {
                const target = document.getElementById(node.dataset.target);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        const tocLinks = Array.from(readerToc.querySelectorAll('.reader-toc-link'));
        const setActiveLink = (id) => {
            tocLinks.forEach((node) => {
                node.classList.toggle('active', node.dataset.target === id);
            });
        };
        setActiveLink(headings[0].id);

        const updateActiveHeading = () => {
            const markerY = Math.max(96, window.innerHeight * 0.2);
            const current = headings.reduce((active, heading) => {
                const top = heading.getBoundingClientRect().top;
                return top <= markerY ? heading : active;
            }, headings[0]);
            setActiveLink(current.id);
        };
        updateActiveHeading();

        let ticking = false;
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                updateActiveHeading();
                ticking = false;
            });
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        headingObserver = {
            disconnect() {
                window.removeEventListener('scroll', onScroll);
            }
        };
    }

    function renderArticle(index) {
        const entry = entries[index];
        const list = visibleEntries();
        if (!entry || !list.some((item) => item.index === index)) {
            renderEmptyArticle();
            return;
        }

        articleRoot.innerHTML = DOMPurify.sanitize(marked.parse(entry.content, { breaks: false, gfm: true }));
        removeDuplicateLeadHeading(entry);
        renderReaderTools();
        articleTitle.textContent = entry.title;
        if (originalLink) {
            var safeUrl = entry.original_url && /^https?:\/\//i.test(entry.original_url) ? entry.original_url : '';
            originalLink.hidden = !safeUrl;
            originalLink.href = safeUrl || '#';
            originalLink.textContent = entry.original_label ? `打开${entry.original_label}` : '原文链接';
        }
        if (obsidianButton) {
            obsidianButton.disabled = false;
        }
        if (obsidianStatus) {
            obsidianStatus.textContent = '';
        }

        if (currentMeta) {
            var posInList = list.findIndex(function (v) { return v.index === index; });
            currentMeta.textContent = `当前 ${posInList + 1}/${list.length}`;
        }

        document.title = `${pageConfig.title} - ${entry.title}`;
        syncRoute();
    }

    function setActive(index, updateHash) {
        state.activeIndex = index;
        renderNav();
        renderArticle(index);
        if (updateHash) {
            syncRoute();
        }
    }

    function closeSidebar() {
        document.body.classList.remove('nav-open');
    }

    function openFromHash() {
        const hash = window.location.hash.replace('#', '');
        if (!hash) return false;
        const matchIndex = entries.findIndex((entry) => entry.hash === hash);
        if (matchIndex >= 0) {
            state.activeIndex = matchIndex;
            return true;
        }
        return false;
    }

    if (filterInput) {
        if (state.query) {
            filterInput.value = url.searchParams.get('search') || '';
        }
        var composing = false;
        var debounceTimer = null;
        filterInput.addEventListener('compositionstart', function () { composing = true; });
        filterInput.addEventListener('compositionend', function () {
            composing = false;
            handleFilterInput();
        });
        function handleFilterInput() {
            state.query = normalizeSearchText(filterInput.value);
            var visible = visibleEntries();
            if (visible.length && !visible.some(function (v) { return v.index === state.activeIndex; })) {
                state.activeIndex = visible[0].index;
            }
            renderFilterTabs();
            renderNav();
            renderArticle(state.activeIndex);
        }
        filterInput.addEventListener('input', function () {
            if (composing) return;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(handleFilterInput, 150);
        });
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            document.body.classList.add('nav-open');
        });
    }

    if (obsidianButton) {
        obsidianButton.addEventListener('click', async () => {
            const entry = entries[state.activeIndex];
            if (!entry) return;

            obsidianButton.disabled = true;
            if (obsidianStatus) obsidianStatus.textContent = '正在复制...';
            try {
                await copyText(buildObsidianMarkdown(entry));
                if (obsidianStatus) obsidianStatus.textContent = '已复制，正在打开 Obsidian';
                window.location.href = buildObsidianUri(entry);
                window.setTimeout(() => {
                    obsidianButton.disabled = false;
                    if (obsidianStatus) obsidianStatus.textContent = '已发送到 Obsidian';
                }, 900);
            } catch (error) {
                obsidianButton.disabled = false;
                if (obsidianStatus) obsidianStatus.textContent = '复制失败，请检查浏览器剪贴板权限';
            }
        });
    }

    var overlay = document.getElementById('navOverlay');
    if (overlay) {
        overlay.addEventListener('click', closeSidebar);
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeSidebar();
        }
    });

    navRoot.setAttribute('role', 'listbox');
    navRoot.setAttribute('aria-label', '记录导航列表');

    window.addEventListener('hashchange', () => {
        if (openFromHash()) {
            setActive(state.activeIndex, false);
        }
    });

    openFromHash();
    renderFilterTabs();
    renderNav();
    renderArticle(state.activeIndex);
})();
