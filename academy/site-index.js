function compactText(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
}

function normalizeForSearch(value) {
    return compactText(value)
        .toLowerCase()
        .replace(/["'`“”‘’]/g, ' ')
        .replace(/[-–—_:：/.,!?()[\]{}]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

(function initHomeSearch() {
    var input = document.getElementById('homeSearchInput');
    var form = document.getElementById('homeSearchForm');
    var chips = Array.from(document.querySelectorAll('.home-search-chip'));
    var params = new URL(window.location.href).searchParams;
    var initialQuery = compactText(params.get('q') || '');
    var isComposing = false;

    if (!input || !Array.isArray(window.homeSearchIndex)) {
        return;
    }

    var items = window.homeSearchIndex.map(function (item, index) {
        return Object.assign({}, item, {
            index: index,
            searchText: normalizeForSearch([
                item.title,
                item.excerpt,
                item.label,
                item.date,
                item.keywords
            ].join(' '))
        });
    });

    function scoreFor(item, query) {
        var title = compactText(item.title).toLowerCase();
        var excerpt = compactText(item.excerpt).toLowerCase();
        var label = compactText(item.label).toLowerCase();
        var score = 0;

        if (title === query) score += 140;
        if (title.startsWith(query)) score += 80;
        if (title.includes(query)) score += 48;
        if (label.includes(query)) score += 24;
        if (excerpt.includes(query)) score += 14;
        if (item.searchText.includes(query)) score += 8;
        score += Math.max(0, 40 - item.index);

        return score;
    }

    function findResults(query) {
        var normalized = normalizeForSearch(query);
        if (!normalized) {
            return [];
        }
        var tokens = normalized.split(' ').filter(Boolean);

        return items
            .filter(function (item) {
                return item.searchText.includes(normalized) || tokens.every(function (token) {
                    return item.searchText.includes(token);
                });
            })
            .map(function (item) {
                return Object.assign({}, item, { score: scoreFor(item, normalized) });
            })
            .sort(function (a, b) {
                if (b.score !== a.score) return b.score - a.score;
                return String(b.date).localeCompare(String(a.date));
            })
            .slice(0, 8);
    }

    function applyQuery(nextQuery) {
        input.value = nextQuery;
        var url = new URL(window.location.href);
        if (compactText(nextQuery)) {
            url.searchParams.set('q', nextQuery);
        } else {
            url.searchParams.delete('q');
        }
        history.replaceState(null, '', url.pathname + url.search + url.hash);
        return findResults(nextQuery);
    }

    function submitSearch(rawQuery) {
        var query = compactText(rawQuery);
        if (!query) return;
        window.location.href = 'archive.html?search=' + encodeURIComponent(query);
    }

    var debounceTimer = null;
    input.addEventListener('input', function () {
        if (isComposing) return;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(function () {
            applyQuery(input.value);
        }, 150);
    });

    input.addEventListener('compositionstart', function () {
        isComposing = true;
    });

    input.addEventListener('compositionend', function () {
        isComposing = false;
        clearTimeout(debounceTimer);
        applyQuery(input.value);
    });

    input.addEventListener('keydown', function (event) {
        if (event.key !== 'Enter') return;
        if (event.isComposing || isComposing) return;
        event.preventDefault();
        submitSearch(input.value);
    });

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            submitSearch(input.value);
        });
    }

    chips.forEach(function (chip) {
        chip.addEventListener('click', function () {
            var query = chip.getAttribute('data-query') || '';
            applyQuery(query);
            input.focus();
            input.setSelectionRange(input.value.length, input.value.length);
        });
    });

    applyQuery(initialQuery);
})();
