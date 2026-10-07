const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const JavaScriptObfuscator = require('javascript-obfuscator');
const { minify } = require('terser');
const { parse } = require('parse5');

// The showcase is the source of truth. New local projects receive the same
// production binding automatically, without maintaining a second project list.
const projectPages = [];
walk(parse(fs.readFileSync(path.join(__dirname, '..', 'visual-coding.html'), 'utf8')), node => {
  if (node.tagName !== 'a') return;
  const attrs = Object.fromEntries(node.attrs.map(a => [a.name, a.value]));
  if (!attrs.class?.split(/\s+/).includes('vc-card') || !attrs.href) return;
  const url = new URL(attrs.href, 'https://bananabox.plus/visual-coding.html');
  if (url.origin !== 'https://bananabox.plus') return;
  const relative = url.pathname.slice(1) + (url.pathname.endsWith('/') ? 'index.html' : '');
  if (!relative.endsWith('.html')) throw new Error('Project needs an HTML entry: ' + relative);
  if (!projectPages.includes(relative)) projectPages.push(relative);
});
const pages = ['visual-coding.html', ...projectPages];
const guard = `(() => {
  const host = globalThis.location.hostname;
  if (['bananabox.plus', 'www.bananabox.plus', 'zijianxcode.github.io'].includes(host)) return;
  if (typeof document !== 'undefined') {
    globalThis.location.replace('https://bananabox.plus' + globalThis.location.pathname + globalThis.location.search + globalThis.location.hash);
  }
  throw new Error('Please use the original site.');
})();`;
const digest = text => crypto.createHash('sha256').update(text).digest('hex').slice(0, 12);

async function protectJavaScript(source, name, module = false) {
  // Retain bundled framework and scheduling code byte-for-byte.
  if (module) return await protectJavaScript('', name + ':guard') + '\n' + source;
  const result = await minify(guard + '\n' + source, {
    module, compress: false, mangle: true,
    format: { comments: /^!|@license|@preserve|copyright/i, inline_script: true },
  });
  const licenses = (result.code.match(/\/\*[\s\S]*?\*\//g) || []).filter(comment => /^\/\*!|@license|@preserve|copyright/i.test(comment));
  const code = JavaScriptObfuscator.obfuscate(result.code, {
    target: 'browser-no-eval', compact: true, sourceMap: false,
    renameGlobals: false, renameProperties: false,
    controlFlowFlattening: false, deadCodeInjection: false,
    debugProtection: false, disableConsoleOutput: false, selfDefending: false,
    stringArray: false, simplify: true,
    identifierNamesGenerator: 'mangled-shuffled',
    identifiersPrefix: 'vc' + digest(name), seed: 20261007,
  }).getObfuscatedCode();
  return licenses.join('\n') + (licenses.length ? '\n' : '') + code;
}

function walk(node, visitor) {
  visitor(node);
  for (const child of node.childNodes || []) walk(child, visitor);
}

async function protectBundle(bundleRoot) {
  const root = path.resolve(__dirname, '..');
  const target = path.resolve(bundleRoot);
  if (![path.join(root, 'dist'), path.join(root, '.cloudbase-deploy')].includes(target)) {
    throw new Error('Protection may only modify dist/ or .cloudbase-deploy/.');
  }
  // Never transform an already transformed tree; rebuild it from the source.
  for (const name of pages) {
    if (!fs.existsSync(path.join(target, name))) throw new Error('Missing project page: ' + name);
    if (fs.readFileSync(path.join(target, name), 'utf8').includes('data-vc-protection')) {
      throw new Error('Bundle already protected. Rebuild from source.');
    }
  }

  const externalScripts = new Set(
    fs.readdirSync(path.join(target, 'vibe-fiber')).filter(name => name.endsWith('.js')).map(name => 'vibe-fiber/' + name)
  );
  for (const name of projectPages) {
    const html = fs.readFileSync(path.join(target, name), 'utf8');
    walk(parse(html), node => {
      if (node.tagName !== 'script') return;
      if (!node.attrs.some(a => a.name === 'type' && a.value === 'module')) return;
      const src = node.attrs.find(a => a.name === 'src')?.value;
      if (!src) return;
      const resolved = src.startsWith('/') ? src.slice(1) : path.posix.join(path.posix.dirname(name), src);
      externalScripts.add(resolved.split('?')[0]);
    });
  }
  const version = digest(fs.readFileSync(__filename, 'utf8') + [...externalScripts].sort().map(name => fs.readFileSync(path.join(target, name), 'utf8')).join('') + pages.map(name => fs.readFileSync(path.join(target, name), 'utf8')).join(''));
  const report = { version, pages, scripts: [], scriptHashes: {}, inlineScripts: 0, originalBytes: 0, protectedBytes: 0 };
  for (const name of externalScripts) {
    const file = path.join(target, name);
    let source = fs.readFileSync(file, 'utf8');
    report.originalBytes += Buffer.byteLength(source);
    // Bust the worker cache as well as HTML script caches. Keep original paths
    // protected too, so cached HTML cannot fetch an unprotected legacy copy.
    if (name.startsWith('vibe-fiber/')) {
      source = source.replace(/(['"])(pattern\.worker\.js|pattern-algorithms\.js)\1/g, (_all, quote, src) => quote + src + '?vc=' + version + quote);
    }
    const code = await protectJavaScript(source, name, !name.startsWith('vibe-fiber/'));
    fs.writeFileSync(file, code);
    report.protectedBytes += Buffer.byteLength(code);
    report.scripts.push(name);
    report.scriptHashes[name] = crypto.createHash('sha256').update(code).digest('hex');
    const map = file + '.map';
    if (fs.existsSync(map)) fs.unlinkSync(map);
  }

  const headGuard = await protectJavaScript('', 'page-guard');
  for (const name of pages) {
    let html = fs.readFileSync(path.join(target, name), 'utf8');
    const edits = [];
    walk(parse(html, { sourceCodeLocationInfo: true }), node => {
      if (node.tagName !== 'script') return;
      const attrs = Object.fromEntries(node.attrs.map(a => [a.name, a.value]));
      const loc = node.sourceCodeLocation;
      if (!loc?.endTag) throw new Error('Unclosed script: ' + name);
      if (attrs.src) {
        const relative = attrs.src.startsWith('/') ? attrs.src.slice(1) : path.posix.join(path.posix.dirname(name), attrs.src);
        if (externalScripts.has(relative.split('?')[0])) {
          const url = new URL(attrs.src, 'https://bananabox.plus/' + name);
          url.searchParams.set('vc', version);
          const src = attrs.src.split('?')[0] + url.search + url.hash;
          const attr = loc.attrs.src;
          edits.push({ start: attr.startOffset, end: attr.endOffset, code: 'src="' + src.replace(/&/g, '&amp;') + '"' });
        }
      } else if (!attrs.type || ['text/javascript', 'application/javascript', 'module'].includes(attrs.type)) {
        const source = html.slice(loc.startTag.endOffset, loc.endTag.startOffset);
        if (source.trim()) edits.push({ start: loc.startTag.endOffset, end: loc.endTag.startOffset, source, module: attrs.type === 'module' });
      }
    });
    for (const edit of edits.sort((a, b) => b.start - a.start)) {
      if (edit.source) {
        report.originalBytes += Buffer.byteLength(edit.source);
        edit.code = await protectJavaScript(edit.source, name + ':' + edit.start, edit.module);
        report.protectedBytes += Buffer.byteLength(edit.code);
        report.inlineScripts++;
      }
      html = html.slice(0, edit.start) + edit.code + html.slice(edit.end);
    }
    if (!/<head(?:\s[^>]*)?>/i.test(html)) throw new Error('Missing head: ' + name);
    html = html.replace(/<head(?:\s[^>]*)?>/i, match => match + '\n<script data-vc-protection="' + version + '">' + headGuard + '</script>');
    fs.writeFileSync(path.join(target, name), html);
  }
  fs.writeFileSync(path.join(target, 'vc-protection.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(`Visual Coding protection: ${pages.length} pages, ${report.scripts.length} scripts, ${report.inlineScripts} inline scripts; ${report.originalBytes} → ${report.protectedBytes} bytes (${version}).`);
  return report;
}

module.exports = { protectJavaScript, protectBundle, projectPages };
if (require.main === module) protectBundle(process.argv[2]).catch(error => { console.error(error); process.exitCode = 1; });
