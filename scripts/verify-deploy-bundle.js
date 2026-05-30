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
