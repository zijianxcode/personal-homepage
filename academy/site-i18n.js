(function () {
    const STORAGE_KEY = 'jujutsu-sci-lang';
    const DEFAULT_LANG = 'zh';
    const supported = new Set(['zh', 'en']);
    const originalTexts = new WeakMap();
    const originalAttrs = new WeakMap();
    let currentLang = supported.has(localStorage.getItem(STORAGE_KEY)) ? localStorage.getItem(STORAGE_KEY) : DEFAULT_LANG;
    let isApplying = false;
    let scheduled = false;

    const exact = {
        '研究所': 'Research Institute',
        '无量空处': 'Unlimited Void',
        '最新更新': 'Latest',
        '研究方向': 'Directions',
        '高星论文': 'High-Score Papers',
        '成员进展': 'Members',
        '全部归档': 'Archive',
        '返回首页': 'Back Home',
        '论文资讯': 'Paper Feed',
        '查看论文排行榜': 'View Ranking',
        '进入高星论文': 'High-Score Papers',
        'Research Dashboard': 'Research Dashboard',
        '本主页以追踪前沿论文、沉淀研究主题、记录成员能力进化为核心，构建一个持续更新的学术协作场。我们希望把阅读、总结、讨论与写作连接成清晰可浏览的知识流，让每一次学习都能被积累、被连接、被推进。': 'This workspace tracks frontier papers, develops research themes, and records member progress as a continuously updated academic collaboration system. Reading, summarizing, discussion, and writing stay connected as a browsable knowledge flow.',
        'Snapshot': 'Snapshot',
        '当前学术概览': 'Current Overview',
        '数据来自源目录实时扫描，按时间倒序组织。首页优先展示更适合学术浏览的内容层级。': 'Data is scanned from the source directory and ordered by time. The homepage prioritizes layers that fit academic browsing.',
        '总记录': 'Total Records',
        '研究包': 'Packages',
        '成员记录': 'Member Notes',
        '研究主题': 'Topics',
        '最新时间': 'Latest Time',
        'Quick Access': 'Quick Access',
        '核心学术入口': 'Core Academic Entry',
        '按你的实际使用路径组织：先看资讯，再找灵感，最后沉淀成可追踪的研究方向。': 'Organized around the actual workflow: scan updates, find inspiration, then turn it into trackable research directions.',
        '论文资讯': 'Paper Feed',
        '先快速扫最近收集了什么。': 'Quickly scan what was collected recently.',
        '精选论文': 'Selected Papers',
        '看五条榜单和高星库，决定先读哪篇。': 'Use Gojo ranking and the high-score library to decide what to read first.',
        '把主题、问题和热点合在一起找方向。': 'Combine topics, questions, and trends to find directions.',
        '成员判断': 'Member Judgment',
        '只在需要追溯判断来源时进入。': 'Use this only when you need to trace judgment sources.',
        'Today Desk': 'Today Desk',
        '今日研究工作台': 'Today Research Desk',
        '先读榜首': 'Read the Top Paper',
        '补齐判断': 'Complete Ratings',
        '追热点': 'Track Trends',
        '精读': 'Deep Read',
        '趋势': 'Trend',
        'Gojo Ranking': 'Gojo Ranking',
        '近 3 天论文排行榜': '3-Day Paper Ranking',
        '只显示前五篇。评分决定优先级，未评分论文排在后面等待判断。': 'Only the top five are shown. Ratings decide priority; unrated papers stay after rated ones.',
        'Research Radar': 'Research Radar',
        '研究方向雷达': 'Research Radar',
        'Trend Filters': 'Trend Filters',
        '热点筛选': 'Hot Filters',
        'Idea Lenses': 'Idea Lenses',
        '按问题找灵感': 'Find Ideas by Question',
        'Topic Tracks': 'Topic Tracks',
        '按主题找积累': 'Build by Topic',
        'Members': 'Members',
        '研究角色': 'Research Roles',
        '首页已收敛为学术视图。周会、升级迭代等内容仍保留在': 'The homepage is focused on academic browsing. Meeting notes, iterations, and other records remain in',
        '中': '中',
        'EN': 'EN',
        '返回总览': 'Back to Overview',
        '← 返回总览': '← Back to Overview',
        'Source Driven': 'Source Driven',
        '最新记录': 'Latest Record',
        '筛选日期、标题或关键词': 'Filter date, title, or keyword',
        '共 0 条': '0 records',
        '目录': 'Menu',
        '首页': 'Home',
        '段落导航': 'Section Navigation',
        '正文快速定位': 'Quick section navigation',
        '载入中...': 'Loading...',
        '原文链接': 'Original Link',
        '复制到 Obsidian': 'Copy to Obsidian',
        '全部': 'All',
        '周会讨论': 'Meeting Notes',
        '评审会': 'Review',
        '暂无记录': 'No Records',
        '没有匹配的记录': 'No Matching Records',
        '当前筛选条件下没有可展示的内容。': 'No content is available under the current filters.',
        '还没有可展示的记录，等你开始打星后这里会自动出现。': 'No records yet. Items will appear here after ratings are added.',
        '当前页面还没有生成任何记录。': 'This page has no generated records yet.',
        '没有找到匹配的记录，试试切换 tab 或输入更短的关键词。': 'No matching records. Try another tab or a shorter keyword.',
        '正在复制...': 'Copying...',
        '已复制，正在打开 Obsidian': 'Copied. Opening Obsidian...',
        '已发送到 Obsidian': 'Sent to Obsidian',
        '复制失败，请检查浏览器剪贴板权限': 'Copy failed. Check browser clipboard permissions.',
        '记录导航列表': 'Record navigation list',
        '全部记录': 'All Records',
        '论文总结': 'Paper Notes',
        '升级迭代': 'Iterations',
        '高星论文': 'High-Score Papers',
        '候选': 'Candidates',
        '已评分': 'Rated',
        '最新': 'Latest',
        '前 10': 'Top 10',
        '前 20': 'Top 20',
        '排行榜统计': 'Ranking stats',
        '排行榜显示数量': 'Ranking size',
        '阅读': 'Read',
        '待五条老师评定': 'Awaiting Gojo Rating',
        '未评分': 'Unrated',
        '下一步：等待五条老师评定': 'Next: wait for Gojo rating',
        '下一步：优先精读，提炼可迁移研究问题': 'Next: read deeply and extract transferable research questions',
        '下一步：加入候选池，观察是否能连接现有课题': 'Next: add to the candidate pool and check links to current topics',
        '下一步：暂存归档，保留为背景材料': 'Next: archive as background material',
        '前沿判断与优先级': 'Frontier judgment and priority',
        '跨域线索追踪': 'Cross-domain signal tracking',
        '批判视角与问题意识': 'Critical perspective and problem awareness',
        '方法论与写作沉淀': 'Methodology and writing synthesis',
        '进入': 'Open'
    };

    const patterns = [
        [/^研究包\s+(\d+)$/, 'Research Packages $1'],
        [/^成员记录\s+(\d+)$/, 'Member Notes $1'],
        [/^研究主题\s+(\d+)$/, 'Research Topics $1'],
        [/^查看全部\s+(\d+)\s+条归档$/, 'View all $1 archived records'],
        [/^(\d+)\s+条记录$/, '$1 records'],
        [/^共\s+(\d+)\s+条$/, '$1 records'],
        [/^匹配\s+(\d+)\s+条(?:\s+·\s+(.+))?$/, 'Matched $1 records$2'],
        [/^当前\s+(\d+)\/(\d+)$/, 'Current $1/$2'],
        [/^当前\s+0\/0$/, 'Current 0/0'],
        [/^最新记录\s+(.+)$/, 'Latest record $1'],
        [/^(\d+)\s+段$/, '$1 sections'],
        [/^打开(.+)$/, 'Open $1'],
        [/^五条老师评定\s+(.+)$/, 'Gojo rating $1'],
        [/^待五条老师评定\s+·\s+未评分$/, 'Awaiting Gojo Rating · Unrated'],
        [/^综合评分\s+(.+)$/, 'Overall score $1'],
        [/^当前最高优先级\s+(.+)，先从排行榜第一篇进入。$/, 'Current top priority: $1. Start from the first ranked paper.'],
        [/^近\s+3\s+天已有\s+(\d+)\s+篇完成评分，其余先留在候选池。$/, '$1 papers from the last 3 days are rated; keep the rest in the candidate pool.'],
        [/^最近更活跃的线索是\s+(.+)，适合继续往下钻。$/, 'The most active recent signal is $1. It is worth drilling into.'],
        [/^近\s+14\s+天\s+(\d+)\s+·\s+\+(\d+)$/, 'Last 14 days $1 · +$2'],
        [/^当前最活跃方向：(.+)\s+·\s+(\d+)\s+条$/, 'Most active direction: $1 · $2 records'],
        [/^来自源目录的\s+(\d+)\s+条能力进化记录，按时间倒序排列。$/, '$1 role-progress records from the source directory, ordered newest first.'],
        [/^源目录中的全部 Markdown 记录，按时间倒序自动汇总。 共\s+(\d+)\s+条。$/, 'All Markdown records from the source directory, ordered newest first. $1 records.'],
        [/^源目录中的论文总结，按时间倒序自动汇总。 共\s+(\d+)\s+条。$/, 'Paper notes from the source directory, ordered newest first. $1 records.'],
        [/^汇总各角色打星过的论文，按综合星级和角色数排序。 当前共\s+(\d+)\s+篇。$/, 'Papers rated by roles, sorted by score and role coverage. $1 papers.'],
        [/^源目录中的升级迭代记录，按时间倒序自动汇总。 共\s+(\d+)\s+条。$/, 'Iteration records from the source directory, ordered newest first. $1 records.'],
        [/^源目录中的周会讨论记录，按时间倒序自动汇总。 共\s+(\d+)\s+条。$/, 'Meeting notes from the source directory, ordered newest first. $1 records.'],
        [/^基于源目录中论文总结自动汇总的\s+AI\s+相关记录。 共\s+(\d+)\s+条。$/, 'AI records generated from paper notes. $1 records.'],
        [/^基于关键词自动归类的(.+)研究。 共\s+(\d+)\s+条。$/, 'Keyword-classified $1 research records. $2 records.']
    ];

    const attrTranslations = {
        '搜索论文、成员、主题或讨论关键词': 'Search papers, members, topics, or meeting keywords',
        '首页搜索': 'Homepage search',
        '提交搜索': 'Submit search',
        '记录类型筛选': 'Record type filters',
        '正文快速定位': 'Quick section navigation',
        '排行榜统计': 'Ranking stats',
        '排行榜显示数量': 'Ranking size',
        '研究所 logo': 'Research Institute logo'
    };

    const skipSelector = [
        'script',
        'style',
        'noscript',
        'textarea',
        '.markdown-body',
        '.article-title',
        '.nav-title',
        '.research-package-title',
        '.obsidian-status',
        '[data-no-i18n]'
    ].join(',');

    function translateText(text) {
        const trimmed = text.trim();
        if (!trimmed) return text;
        let translated = exact[trimmed];
        if (!translated) {
            for (const pattern of patterns) {
                if (pattern[0].test(trimmed)) {
                    translated = trimmed.replace(pattern[0], pattern[1]);
                    break;
                }
            }
        }
        if (!translated) return text;
        return text.replace(trimmed, translated);
    }

    function shouldSkip(node) {
        const parent = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
        return !parent || parent.closest(skipSelector);
    }

    function applyTextNode(node) {
        if (shouldSkip(node)) return;
        if (!originalTexts.has(node)) originalTexts.set(node, node.nodeValue);
        const original = originalTexts.get(node);
        node.nodeValue = currentLang === 'en' ? translateText(original) : original;
    }

    function applyAttributes(element) {
        if (element.closest(skipSelector)) return;
        ['placeholder', 'aria-label', 'title', 'alt'].forEach((attr) => {
            if (!element.hasAttribute(attr)) return;
            let store = originalAttrs.get(element);
            if (!store) {
                store = {};
                originalAttrs.set(element, store);
            }
            if (!Object.prototype.hasOwnProperty.call(store, attr)) {
                store[attr] = element.getAttribute(attr);
            }
            const original = store[attr] || '';
            element.setAttribute(attr, currentLang === 'en' ? (attrTranslations[original] || translateText(original)) : original);
        });
    }

    function walk(root) {
        if (!root || shouldSkip(root)) return;
        if (root.nodeType === Node.TEXT_NODE) {
            applyTextNode(root);
            return;
        }
        if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;
        if (root.nodeType === Node.ELEMENT_NODE) applyAttributes(root);
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, {
            acceptNode(node) {
                return shouldSkip(node) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
            }
        });
        let node = walker.currentNode;
        while (node) {
            if (node.nodeType === Node.TEXT_NODE) {
                applyTextNode(node);
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                applyAttributes(node);
            }
            node = walker.nextNode();
        }
    }

    function updateControls() {
        document.documentElement.lang = currentLang === 'en' ? 'en' : 'zh-CN';
        document.body.dataset.lang = currentLang;
        document.querySelectorAll('[data-lang-option]').forEach((button) => {
            const active = button.dataset.langOption === currentLang;
            button.classList.toggle('is-active', active);
            button.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
    }

    function applyLanguage() {
        if (isApplying) return;
        isApplying = true;
        walk(document.body);
        updateControls();
        isApplying = false;
    }

    function scheduleApply() {
        if (scheduled || isApplying) return;
        scheduled = true;
        window.requestAnimationFrame(() => {
            scheduled = false;
            applyLanguage();
        });
    }

    document.addEventListener('click', (event) => {
        const button = event.target.closest('[data-lang-option]');
        if (!button) return;
        const nextLang = button.dataset.langOption;
        if (!supported.has(nextLang)) return;
        currentLang = nextLang;
        localStorage.setItem(STORAGE_KEY, currentLang);
        applyLanguage();
    });

    const observer = new MutationObserver((mutations) => {
        if (isApplying) return;
        mutations.forEach((mutation) => {
            if (mutation.type === 'characterData') {
                const original = originalTexts.get(mutation.target);
                if (!original) return;
                const expected = currentLang === 'en' ? translateText(original) : original;
                if (mutation.target.nodeValue !== expected) {
                    originalTexts.delete(mutation.target);
                }
            }
        });
        scheduleApply();
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            applyLanguage();
            observer.observe(document.body, { childList: true, subtree: true, characterData: true });
        });
    } else {
        applyLanguage();
        observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    }
})();
