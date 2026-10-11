const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');

// These are the verified, unchanged RMBG weights and ONNX runtime used by the
// current worker. Large files are ignored by Git, so check the deployment copy.
const assets = [
  ['models/briaai/RMBG-1.4/onnx/model.onnx', 176153355, '8cafcf770b06757c4eaced21b1a88e57fd2b66de01b8045f35f01535ba742e0f'],
  ['models/briaai/RMBG-1.4/onnx/model_fp16.onnx', 88217533, '9fdfdb41866d872e0acf4a010c35c1a8547bf0eebe0d1544406bbf1c824cb59d'],
  ['runtime/ort-wasm-simd-threaded.jsep.wasm', 21596019, 'c46655e8a94afc45338d4cb2b840475f88e5012d524509916e505079c00bfa39'],
];
function verifyEffecterAssets(bundleRoot) {
  const root = path.join(bundleRoot, 'projects/effecter');
  const chunkSize = 4 * 1024 * 1024;
  for (const [relative, size, checksum] of assets) {
    const file = path.join(root, relative);
    if (!fs.existsSync(file) || fs.statSync(file).size !== size) {
      throw new Error(`Missing or incomplete Effecter AI asset: ${relative}`);
    }
    const hash = createHash('sha256');
    for (let start = 0; start < size; start += chunkSize) {
      const part = `${file}.parts/${String(start / chunkSize).padStart(4, '0')}.bin`;
      if (!fs.existsSync(part) || fs.statSync(part).size !== Math.min(chunkSize, size - start)) {
        throw new Error(`Missing or incomplete Effecter AI part: ${part}`);
      }
      hash.update(fs.readFileSync(part));
    }
    if (hash.digest('hex') !== checksum) throw new Error(`Corrupt Effecter AI parts: ${relative}`);
  }
}
module.exports = { verifyEffecterAssets };
