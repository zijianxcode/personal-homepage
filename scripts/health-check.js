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

const fetchBody = (url, timeoutMs = 15000, redirectCount = 0) =>
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
        fetchBody(nextUrl, timeoutMs, redirectCount + 1).then(resolve);
        return;
      }

      let body = '';
      res.on('data', (chunk) => {
        body += chunk.toString('utf8');
      });
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          latencyMs: Date.now() - started,
          url,
          body,
        });
      });
    });
    req.on('error', (error) => {
      resolve({
        statusCode: 0,
        latencyMs: Date.now() - started,
        url,
        body: '',
        error: error.message,
      });
    });
    req.setTimeout(timeoutMs, () => {
      req.destroy(new Error(`timeout after ${timeoutMs}ms`));
    });
  });

const probeHomepage = async (baseUrl) => {
  const url = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const result = await fetchBody(url);
  const ok =
    result.statusCode === 200 &&
    /<title>\s*aspera ad astra\s*<\/title>/i.test(result.body) &&
    !/<title>\s*研究所\s*<\/title>/i.test(result.body);
  return { ...result, ok };
};

const probeAcademy = async (baseUrl) => {
  const url = baseUrl.endsWith('/') ? `${baseUrl}index.html` : `${baseUrl}/index.html`;
  const result = await fetchBody(url);
  const ok =
    result.statusCode === 200 &&
    /<title>\s*研究所\s*<\/title>/i.test(result.body) &&
    (!expectedCss || result.body.includes(expectedCss));
  return { ...result, ok };
};

(async () => {
  const checkedAt = new Date().toISOString();
  const tiers = [];

  for (const [key, tier] of Object.entries(config)) {
    const home = await probeHomepage(tier.siteUrl);
    const academy = await probeAcademy(tier.academyUrl);
    const ok = home.ok && academy.ok;

    tiers.push({
      key,
      label: tier.label,
      role: tier.role,
      siteUrl: tier.siteUrl,
      academyUrl: tier.academyUrl,
      note: tier.note || '',
      ok,
      homepageOk: home.ok,
      academyOk: academy.ok,
      homepageStatusCode: home.statusCode,
      academyStatusCode: academy.statusCode,
      latencyMs: home.latencyMs + academy.latencyMs,
      error: [home.error, academy.error].filter(Boolean).join('; '),
    });

    const homeStatus = home.ok ? 'OK' : 'FAIL';
    const academyStatus = academy.ok ? 'OK' : 'FAIL';
    console.log(
      `[${homeStatus}] ${tier.label} 个人主页: ${tier.siteUrl} (${home.latencyMs}ms` +
        (home.ok ? ')' : `, HTTP ${home.statusCode})`)
    );
    console.log(
      `[${academyStatus}] ${tier.label} academy: ${tier.academyUrl} (${academy.latencyMs}ms` +
        (academy.ok ? ')' : `, HTTP ${academy.statusCode})`)
    );
  }

  const primary = tiers.find((tier) => tier.key === 'primary');
  const fallback = tiers.find((tier) => tier.ok && tier.key !== 'primary');
  const report = {
    checkedAt,
    primaryOk: Boolean(primary && primary.ok),
    primaryHomepageOk: Boolean(primary && primary.homepageOk),
    primaryAcademyOk: Boolean(primary && primary.academyOk),
    recommendedFallback: fallback
      ? {
          key: fallback.key,
          label: fallback.label,
          siteUrl: fallback.siteUrl,
          academyUrl: fallback.academyUrl,
        }
      : null,
    tiers,
  };

  fs.mkdirSync(path.dirname(statusPath), { recursive: true });
  fs.writeFileSync(statusPath, `${JSON.stringify(report, null, 2)}\n`);

  if (primary && !primary.homepageOk) {
    console.error('CRITICAL: production homepage is not serving "aspera ad astra".');
    process.exit(3);
  }

  if (primary && primary.ok) {
    console.log('Primary homepage + academy healthy.');
    process.exit(0);
  }

  if (fallback) {
    console.warn(`Primary degraded. Use backup: ${fallback.siteUrl}`);
    process.exit(2);
  }

  console.error('All endpoints failed.');
  process.exit(1);
})().catch((error) => {
  console.error(`Health check failed: ${error.message}`);
  process.exit(1);
});
