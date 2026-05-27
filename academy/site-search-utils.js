/**
 * Shared search text normalization used by both site-index.js and site-detail.js.
 */
function compactText(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
}

function normalizeSearchText(value) {
    return compactText(value)
        .toLowerCase()
        .replace(/["'`\u201c\u201d\u2018\u2019]/g, ' ')
        .replace(/[-\u2013\u2014_:\uff1a/.,!?()[\]{}]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}
