const fs = require('fs');
const path = require('path');

const root = __dirname;
const fail = (message) => {
  console.error(`Site integrity check failed: ${message}`);
  process.exit(1);
};

const read = (relativePath) => {
  const filePath = path.join(root, relativePath);
  if (!fs.existsSync(filePath)) {
    fail(`Missing required file: ${relativePath}`);
  }
  return fs.readFileSync(filePath, 'utf8');
};

const rootIndex = read('index.html');
const academyIndex = read(path.join('academy', 'index.html'));

if (!/<title>\s*aspera ad astra\s*<\/title>/i.test(rootIndex)) {
  fail('repo-root index.html is not the personal homepage title "aspera ad astra".');
}

if (/<title>\s*研究所\s*<\/title>/i.test(rootIndex) || /site\.css\?v=20260429/.test(rootIndex)) {
  fail('repo-root index.html appears to contain academy homepage content.');
}

if (!/<title>\s*研究所\s*<\/title>/i.test(academyIndex)) {
  fail('academy/index.html is not the academy homepage title "研究所".');
}

const academyDir = path.join(root, 'academy');
const forbiddenRootCopies = fs
  .readdirSync(academyDir)
  .filter((name) => name.endsWith('.html') && name !== 'index.html')
  .filter((name) => fs.existsSync(path.join(root, name)));

if (forbiddenRootCopies.length > 0) {
  fail(`academy pages were copied to repo root: ${forbiddenRootCopies.join(', ')}`);
}

console.log('Site integrity checks passed');
