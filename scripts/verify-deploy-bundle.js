const fs = require('fs');
const path = require('path');

const root = __dirname.replace(/[/\\]scripts$/, '');
const bundleRoot = path.join(root, '.cloudbase-deploy');
const fail = (message) => {
  console.error(`Deploy bundle verify failed: ${message}`);
  process.exit(1);
};

if (!fs.existsSync(bundleRoot)) {
  fail('Missing .cloudbase-deploy/. Run npm run build:cloudbase first.');
}

const read = (relativePath) => {
  const filePath = path.join(bundleRoot, relativePath);
  if (!fs.existsSync(filePath)) {
    fail(`Missing deploy file: ${relativePath}`);
  }
  return fs.readFileSync(filePath, 'utf8');
};

const home = read('index.html');
const academy = read(path.join('academy', 'index.html'));

if (!/<title>\s*aspera ad astra\s*<\/title>/i.test(home)) {
  fail('Deploy bundle root index.html is not the personal homepage.');
}

if (/<title>\s*研究所\s*<\/title>/i.test(home)) {
  fail('Deploy bundle root index.html contains academy content.');
}

if (!/<title>\s*研究所\s*<\/title>/i.test(academy)) {
  fail('Deploy bundle academy/index.html is not the academy homepage.');
}

console.log('Deploy bundle structure OK: / → aspera ad astra, /academy/ → 研究所');

for (const page of fs.readdirSync(bundleRoot).filter((name) => /^things-.*\.html$/.test(name))) {
  const html = read(page);
  if (!/data-things-resource="[a-z0-9-]+"/.test(html) || !html.includes('Assets/js/things-page.js')) {
    fail(`Missing server-side permit access: ${page}`);
  }
  if (/\b(?:PERMIT_CODE|contentItems)\s*=/.test(html)) fail(`Embedded permit secrets/content: ${page}`);
}
console.log('Protected course pages use server-side permit access');

const { projectPages } = require('./protect-visual-coding');
const protection = JSON.parse(read('vc-protection.json'));
for (const page of ['visual-coding.html', ...projectPages]) {
  if (!read(page).includes(`data-vc-protection="${protection.version}"`)) {
    fail(`Missing Visual Coding protection: ${page}`);
  }
}
for (const script of protection.scripts) {
  const hash = require('node:crypto').createHash('sha256').update(read(script)).digest('hex');
  if (hash !== protection.scriptHashes[script]) fail(`Changed protected script: ${script}`);
  if (fs.existsSync(path.join(bundleRoot, script + '.map'))) fail(`Public source map: ${script}`);
}
console.log(`Visual Coding protection OK: ${protection.pages.length} pages, ${protection.scripts.length} scripts`);
