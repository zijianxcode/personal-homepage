const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');

// Exercise generated code, including the obfuscator, rather than a second implementation.
test('published scripts stop copied sites while preserving official hosts and classic globals', async () => {
  const { protectJavaScript } = require('../../scripts/protect-visual-coding');
  const code = await protectJavaScript('var shared=7; globalThis.ran=shared;', 'fixture.js');
  for (const hostname of ['bananabox.plus', 'www.bananabox.plus', 'zijianxcode.github.io']) {
    const context = { location: { hostname }, document: {} };
    vm.runInNewContext(code, context);
    assert.equal(context.ran, 7);
    assert.equal(context.shared, 7);
  }
  for (const hostname of ['copy.example', 'bananabox.plus.evil.example', 'localhost', '127.0.0.1', '']) {
    let destination;
    const context = { document: {}, location: { hostname, pathname: '/vibe-fiber/', search: '?x=1', hash: '#a', replace(url) { destination = url; } } };
    assert.throws(() => vm.runInNewContext(code, context), /original site/);
    assert.equal(context.ran, undefined);
    assert.equal(destination, 'https://bananabox.plus/vibe-fiber/?x=1#a');
  }
  const worker = { location: { hostname: 'copy.example' } };
  assert.throws(() => vm.runInNewContext(code, worker), /original site/);
  assert.equal(worker.ran, undefined);
});

test('separately transformed classic scripts retain shared names without helper collisions', async () => {
  const { protectJavaScript } = require('../../scripts/protect-visual-coding');
  const a = await protectJavaScript('class Renderer { value(){ return "ok"; } }', 'renderer.js');
  const b = await protectJavaScript('globalThis.result=new Renderer().value();', 'app.js');
  const context = vm.createContext({ location: { hostname: 'bananabox.plus' } });
  vm.runInContext(a, context);
  vm.runInContext(b, context);
  assert.equal(context.result, 'ok');
});

test('third-party license notices survive transformation', async () => {
  const { protectJavaScript } = require('../../scripts/protect-visual-coding');
  const code = await protectJavaScript('/** @license Example MIT Copyright Author */ globalThis.ran=true;', 'licensed.js');
  assert.match(code, /@license Example MIT Copyright Author/);
});

test('existing module bundles retain their exact code after the domain guard', async () => {
  const { protectJavaScript } = require('../../scripts/protect-visual-coding');
  const source = 'import { value } from "./chunk.js"; export const answer=value;';
  const code = await protectJavaScript(source, 'module.js', true);
  assert.ok(code.endsWith(source));
});
