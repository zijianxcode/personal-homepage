const fs = require('fs');
const path = require('path');
const https = require('https');

const root = __dirname.replace(/[/\\]scripts$/, '');
const configPath = path.join(__dirname, 'site-endpoints.json');
const statusPath = path.join(root, 'emergency', 'status.json');

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const localAcademy = fs.readFileSync(path.join(root, 'academy', 'index.html'), 'utf8');
const cssMatch = localAcademy.match(/site\.css\?v=[^"']+/);
const expectedCss = cssMatch ? cssMatch[0] : null;

const probe = (url, timeoutMs = 15000, redirectCount = 0) =>
  new Promise((resolve) => {
    const started = Date.now();
    const req = https.get(url, (res) => {
      if (
        res.statusCode >= 300 &&
        res.statusCode < 400 &&
        res.headers.location &&
        redirectCount < 5
      ) {
        const nextUrl = res.headers.location.startsWith('http')
          ? res.headers.location
          : new URL(res.headers.location, url).href;
        probe(nextUrl, timeoutMs, redirectCount + 1).then(resolve);
        return;
      }

      let body = '';
      res.on('data', (chunk) => {
        body += chunk.toString('utf8');
      });
      res.on('end', () => {
        const ok =
          res.statusCode === 200 &&
          /<title>\s*研究所\s*<\/title>/i.test(body) &&
          (!expectedCss || body.includes(expectedCss));
        resolve({
          ok,
          statusCode: res.statusCode,
          latencyMs: Date.now() - started,
          url,
        });
      });
    });
    req.on('error', (error) => {
      resolve({
        ok: false,
        statusCode: 0,
        latencyMs: Date.now() - started,
        url,
        error: error.message,
      });
    });
    req.setTimeout(timeoutMs, () => {
      req.destroy(new Error(`timeout after ${timeoutMs}ms`));
    });
  });

const academyIndexUrl = (baseUrl) =>
  baseUrl.endsWith('/') ? `${baseUrl}index.html` : `${baseUrl}/index.html`;

(async () => {
  const checkedAt = new Date().toISOString();
  const tiers = [];

  for (const [key, tier] of Object.entries(config)) {
    const target = academyIndexUrl(tier.academyUrl);
    const result = await probe(target);
    tiers.push({
      key,
      label: tier.label,
      role: tier.role,
      academyUrl: tier.academyUrl,
      siteUrl: tier.siteUrl,
      note: tier.note || '',
      ok: result.ok,
      statusCode: result.statusCode,
      latencyMs: result.latencyMs,
      error: result.error || '',
      checkedUrl: target,
    });
    const status = result.ok ? 'OK' : 'FAIL';
    const detail = result.error || `HTTP ${result.statusCode}`;
    console.log(`[${status}] ${tier.label}: ${target} (${result.latencyMs}ms${result.ok ? '' : `, ${detail}`})`);
  }

  const primary = tiers.find((tier) => tier.key === 'primary');
  const fallback = tiers.find((tier) => tier.ok && tier.key !== 'primary');
  const report = {
    checkedAt,
    primaryOk: Boolean(primary && primary.ok),
    recommendedFallback: fallback
      ? {
          key: fallback.key,
          label: fallback.label,
          academyUrl: fallback.academyUrl,
          siteUrl: fallback.siteUrl,
        }
      : null,
    tiers,
  };

  fs.mkdirSync(path.dirname(statusPath), { recursive: true });
  fs.writeFileSync(statusPath, `${JSON.stringify(report, null, 2)}\n`);

  if (primary && primary.ok) {
    console.log('Primary site healthy.');
    process.exit(0);
  }

  if (fallback) {
    console.warn(`Primary unavailable. Use backup: ${fallback.academyUrl}`);
    process.exit(2);
  }

  console.error('All endpoints failed.');
  process.exit(1);
})().catch((error) => {
  console.error(`Health check failed: ${error.message}`);
  process.exit(1);
});
