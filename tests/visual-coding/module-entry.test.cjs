const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

test('protected Effecter entry and lazy chunk imports resolve to the same module URL', () => {
  const bundle = path.resolve(__dirname, '../..', process.env.VC_BUNDLE || '.cloudbase-deploy');
  const html = fs.readFileSync(path.join(bundle, 'projects/effecter/index.html'), 'utf8');
  const src = html.match(/<script\b[^>]*type="module"[^>]*src="([^"]+)"/)[1];
  const entry = new URL(src, 'https://bananabox.plus/projects/effecter/');
  const assets = path.join(bundle, 'projects/effecter/assets');
  const rainName = fs.readdirSync(assets).find(name => /^RainCanvas-.*\.js$/.test(name));
  const rain = fs.readFileSync(path.join(assets, rainName), 'utf8');
  const dependency = rain.match(/from\s*"(\.\/index-[^"]+\.js)"/)[1];
  const importedEntry = new URL(dependency, new URL(rainName, entry));
  assert.equal(entry.href, importedEntry.href, 'a query on only the HTML entry remounts React when RAIN is preloaded');
});
