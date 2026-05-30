const fs = require('fs');
const path = require('path');
const https = require('https');

const root = __dirname.replace(/[/\\]scripts$/, '');
const fail = (message) => {
  console.error(`Production verify failed: ${message}`);
  process.exit(1);
};

const fetchText = (url) =>
  new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          fetchText(res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).href)
            .then(resolve)
            .catch(reject);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`${url} returned HTTP ${res.statusCode}`));
          return;
        }
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
      })
      .on('error', reject);
  });

const localAcademy = fs.readFileSync(path.join(root, 'academy', 'index.html'), 'utf8');
const localHome = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const cssMatch = localAcademy.match(/site\.css\?v=[^"']+/);
if (!cssMatch) {
  fail('Local academy/index.html is missing site.css version query.');
}
if (!/<title>\s*aspera ad astra\s*<\/title>/i.test(localHome)) {
  fail('Local repo-root index.html is not the personal homepage.');
}
const expectedCss = cssMatch[0];

const memberMatch = localAcademy.match(/成员记录\s*(\d+)/);
const expectedMembers = memberMatch ? memberMatch[1] : null;

const cloudbaseBase =
  process.env.CLOUDBASE_ACADEMY_URL ||
  'https://homepage-1gthisc4771d43ac-1256690240.tcloudbaseapp.com/academy/';
const publicBase = process.env.PUBLIC_ACADEMY_URL || 'https://bananabox.plus/academy/';
const cloudbaseHome = process.env.CLOUDBASE_HOME_URL || 'https://homepage-1gthisc4771d43ac-1256690240.tcloudbaseapp.com/';
const publicHome = process.env.PUBLIC_HOME_URL || 'https://bananabox.plus/';

const verifyHomepage = async (label, baseUrl) => {
  const url = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const html = await fetchText(url);
  if (!/<title>\s*aspera ad astra\s*<\/title>/i.test(html)) {
    fail(`${label} homepage title is not "aspera ad astra" (${url}).`);
  }
  if (/<title>\s*研究所\s*<\/title>/i.test(html)) {
    fail(`${label} homepage appears to be serving academy content (${url}).`);
  }
  console.log(`${label} homepage OK: ${url}`);
};

const verifyUrl = async (label, baseUrl) => {
  const url = baseUrl.endsWith('/') ? `${baseUrl}index.html` : `${baseUrl}/index.html`;
  const html = await fetchText(url);
  if (!/<title>\s*研究所\s*<\/title>/i.test(html)) {
    fail(`${label} academy title is not "研究所" (${url}).`);
  }
  if (!html.includes(expectedCss)) {
    fail(`${label} academy is missing expected asset marker ${expectedCss} (${url}).`);
  }
  if (expectedMembers) {
    const remoteMembers = html.match(/成员记录\s*(\d+)/);
    if (!remoteMembers) {
      fail(`${label} academy is missing member count marker (${url}).`);
    }
    if (Number(remoteMembers[1]) < Number(expectedMembers)) {
      fail(
        `${label} academy member count ${remoteMembers[1]} is behind local ${expectedMembers} (${url}).`
      );
    }
  }
  console.log(`${label} OK: ${url}`);
};

(async () => {
  await verifyHomepage('CloudBase', cloudbaseHome);
  try {
    await verifyHomepage('Public', publicHome);
  } catch (error) {
    console.warn(`Public homepage check skipped or failed: ${error.message}`);
  }

  await verifyUrl('CloudBase', cloudbaseBase);
  try {
    await verifyUrl('Public', publicBase);
  } catch (error) {
    console.warn(`Public URL check skipped or failed: ${error.message}`);
    console.warn('CloudBase is the deployment source of truth until bananabox.plus DNS is migrated.');
  }
  console.log('Production verification passed.');
})().catch((error) => fail(error.message));
