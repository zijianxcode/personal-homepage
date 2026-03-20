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

function normalizeText(entry) {
    return `${entry.date || ''} ${entry.title || ''} ${entry.content || ''} ${entry.source_dir || ''} ${entry.file_name || ''} ${entry.session_label || ''}`.toLowerCase();
}

(function initDetailPage() {
    const url = new URL(window.location.href);
    const navRoot = document.getElementById('navList');
    const articleRoot = document.getElementById('content');
    const articleTitle = document.getElementById('articleTitle');
    const articleIntro = document.getElementById('articleIntro');
    const articleMeta = document.getElementById('articleMeta');
    const filterInput = document.getElementById('filterInput');
    const filterTabs = document.getElementById('filterTabs');
    const resultCount = document.getElementById('resultCount');
    const latestMeta = document.getElementById('latestMeta');
    const totalMeta = document.getElementById('totalMeta');
    const currentMeta = document.getElementById('currentMeta');
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');

    if (!Array.isArray(entries) || !entries.length) {
        if (latestMeta) latestMeta.textContent = '暂无记录';
        if (totalMeta) totalMeta.textContent = '0 条记录';
        if (currentMeta) currentMeta.textContent = '当前 0/0';
        if (navRoot) navRoot.innerHTML = '<li class="empty-state">还没有可展示的记录，等你开始打星后这里会自动出现。</li>';
        if (articleTitle) articleTitle.textContent = pageConfig && pageConfig.title ? pageConfig.title : '暂无记录';
        if (articleIntro) articleIntro.textContent = pageConfig && pageConfig.subtitle ? pageConfig.subtitle : '暂时还没有内容。';
        if (articleRoot) articleRoot.innerHTML = '<div class="empty-state">当前页面还没有生成任何记录。</div>';
        return;
    }

    const FILTERS = [
        { id: 'all', label: '全部' },
        { id: 'weekly', label: '周会讨论' },
        { id: 'review', label: '评审会' }
    ];

    const state = {
        activeIndex: 0,
        query: '',
        filter: 'all'
    };
    const requestedFilter = url.searchParams.get('filter');
    if (requestedFilter && FILTERS.some((filter) => filter.id === requestedFilter)) {
        state.filter = requestedFilter;
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
            const matchesQuery = !state.query || entry.searchText.includes(state.query);
            return matchesFilter && matchesQuery;
        }).length;
    }

    function visibleEntries() {
        return entries
            .map((entry, index) => ({ entry, index }))
            .filter(({ entry }) => {
                const matchesFilter = !filterEnabled || state.filter === 'all' ? true : entry.session_type === state.filter;
                const matchesQuery = !state.query || entry.searchText.includes(state.query);
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
        articleIntro.textContent = '可以切换回全部标签，或者换一个更短的关键词继续找。';
        articleMeta.innerHTML = '';
        articleRoot.innerHTML = '<div class="empty-state">当前筛选条件下没有可展示的内容。</div>';
        if (currentMeta) currentMeta.textContent = '当前 0/0';
    }

    function renderArticle(index) {
        const entry = entries[index];
        const list = visibleEntries();
        if (!entry || !list.some((item) => item.index === index)) {
            renderEmptyArticle();
            return;
        }

        articleRoot.innerHTML = DOMPurify.sanitize(marked.parse(entry.content, { breaks: false, gfm: true }));
        articleTitle.textContent = entry.title;
        articleIntro.textContent = entry.excerpt || `${pageConfig.subtitle} · 当前阅读的是第 ${index + 1} 条归档记录。`;

        const chips = [
            `<span class="meta-chip">${escapeHtml(formatDateLabel(entry.date))}</span>`,
            entry.session_label ? `<span class="meta-chip">${escapeHtml(entry.session_label)}</span>` : '',
            entry.source_dir ? `<span class="meta-chip">${escapeHtml(entry.source_dir)}</span>` : '',
            entry.file_name ? `<span class="meta-chip">${escapeHtml(entry.file_name)}</span>` : ''
        ].filter(Boolean);

        articleMeta.innerHTML = chips.join('');

        if (currentMeta) {
            currentMeta.textContent = `当前 ${index + 1}/${entries.length}`;
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
        filterInput.addEventListener('input', (event) => {
            state.query = event.target.value.trim().toLowerCase();
            const visible = visibleEntries();
            if (visible.length && !visible.some(({ index }) => index === state.activeIndex)) {
                state.activeIndex = visible[0].index;
            }
            renderFilterTabs();
            renderNav();
            renderArticle(state.activeIndex);
        });
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            document.body.classList.add('nav-open');
        });
    }

    if (closeMenu) {
        closeMenu.addEventListener('click', closeSidebar);
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
