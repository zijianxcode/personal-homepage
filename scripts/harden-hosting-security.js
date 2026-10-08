// Applies only transport and response-header settings; leaves CORS/cache/origin unchanged.
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const domains = ['bananabox.plus', 'www.bananabox.plus'];
const backupPath = path.resolve(__dirname, '../output/security/hosting-before.json');
const securityHeaders = {
  'Strict-Transport-Security': 'max-age=86400',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
};

function api(action, body) {
  const stdout = execFileSync('tcb', ['api', 'cdn', action, '--api-version', '2018-06-06', '--body', JSON.stringify(body), '--json'], {
    encoding: 'utf8', env: { ...process.env, CI: '1' }, stdio: ['ignore', 'pipe', 'pipe'],
  });
  const response = JSON.parse(stdout.slice(stdout.indexOf('{')));
  if (response.error) throw new Error(response.error.code || 'CDN API failed');
  return response.data;
}

function harden(config) {
  const headerRules = (config.RspHeader?.HeaderRules || []).filter((rule) =>
    !Object.keys(securityHeaders).some((name) => name.toLowerCase() === rule.HeaderName.toLowerCase()));
  return {
    ForceRedirect: { Switch: 'on', RedirectType: 'https', RedirectStatusCode: 302 },
    RspHeader: { ...config.RspHeader, Switch: 'on', HeaderRules: [
      ...headerRules,
      ...Object.entries(securityHeaders).map(([HeaderName, value]) => ({ HeaderName, HeaderValue: [value] })),
    ] },
  };
}

function main() {
  const mode = process.argv[2] || '--dry-run';
  if (!['--dry-run', '--apply', '--rollback'].includes(mode)) throw new Error('Use --dry-run, --apply or --rollback');
  if (mode === '--rollback') {
    for (const item of JSON.parse(fs.readFileSync(backupPath, 'utf8')).domains) {
      const restore = { ...item, DomainConfig: { ...item.DomainConfig,
        ForceRedirect: Object.fromEntries(Object.entries(item.DomainConfig.ForceRedirect || { Switch: 'off' })
          .filter(([, value]) => value != null)),
      } };
      api('TcbModifyAttribute', restore);
      console.log(`Restored transport/header settings: ${item.Domain}`);
    }
    return;
  }
  const current = api('TcbCheckResource', { Domains: domains }).Domains;
  if (current.length !== domains.length) throw new Error('Missing hosting domain');
  const planned = current.map((item) => {
    if (item.DomainConfig?.Https?.Switch !== 'on') throw new Error(`HTTPS is unavailable: ${item.Domain}`);
    return { Domain: item.Domain, DomainId: item.DomainId, DomainConfig: harden(item.DomainConfig) };
  });
  console.log(JSON.stringify({ mode, domains, redirect: 'HTTP → HTTPS (302)', headers: securityHeaders }));
  if (mode === '--dry-run') return;
  fs.mkdirSync(path.dirname(backupPath), { recursive: true, mode: 0o700 });
  if (!fs.existsSync(backupPath)) {
    fs.writeFileSync(backupPath, JSON.stringify({ domains: current.map((item) => ({
      Domain: item.Domain, DomainId: item.DomainId,
      DomainConfig: { ForceRedirect: item.DomainConfig.ForceRedirect, RspHeader: item.DomainConfig.RspHeader },
    })) }, null, 2), { mode: 0o600 });
  }
  for (const item of planned) {
    api('TcbModifyAttribute', item);
    console.log(`Applied transport/header settings: ${item.Domain}`);
  }
}

module.exports = { harden };
if (require.main === module) main();
