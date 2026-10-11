const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

// Follow the actual HTML entry and its worker, rather than checking unused files
// left over from another build. This catches the October 2026 release rollback.
test('published Effecter retains the first-upload loading fixes', () => {
  const root = path.resolve(__dirname, '..');
  const html = fs.readFileSync(path.join(root, 'projects/effecter/index.html'), 'utf8');
  const entry = html.match(/<script\b[^>]*type="module"[^>]*src="([^"]+)"/)[1];
  const code = fs.readFileSync(path.join(root, entry.split('?')[0]), 'utf8');
  assert.ok(code.includes('"warmup"'), 'AI must start loading before the first upload');
  assert.ok(code.includes('Downloading AI'), 'loading must distinguish download from inference');
  assert.ok(code.includes('RETRY'), 'a failed first load must be retryable without another image');
  const worker = code.match(/"([^"\n]*\/segment\.worker-[^"\n]+\.js)"/)[1];
  const workerCode = fs.readFileSync(path.join(root, worker), 'utf8');
  for (const feature of ['shader-f16', 'model_fp16.onnx', '.parts/', 'effecter-ai-assets-v1']) {
    assert.ok(workerCode.includes(feature), `AI worker is missing ${feature}`);
  }
});
