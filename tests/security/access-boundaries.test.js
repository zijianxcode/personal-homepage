'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '../../cloudfunctions/dm-api/index.js'), 'utf8');
const secret = 'test-fixture-only-not-a-production-secret';

function fixture() {
  const reads = [];
  const db = { command: {}, collection(name) {
    return { where(query) {
      reads.push({ name, query });
      return { limit() { return { async get() { return { data: [] }; } }; } };
    } };
  } };
  const exports = {};
  vm.runInNewContext(source, {
    exports, Buffer, setTimeout,
    console: { error() {} },
    process: { env: {
      APP_SESSION_SECRET: secret,
      ALLOWED_ORIGINS: 'https://bananabox.plus',
      PERMIT_RESOURCES_JSON: JSON.stringify({ 'hci-prototyping': {
        code: 'fixture-code', items: [{ name: 'Fixture', url: 'https://example.com/fixture' }],
      } }),
    } },
    require(name) {
      if (name === 'crypto') return crypto;
      if (name === '@cloudbase/node-sdk') return { init: () => ({ database: () => db }) };
      throw new Error('Unexpected dependency');
    },
  });
  return { main: exports.main, reads };
}

function token(payload) {
  const body = Buffer.from(JSON.stringify({ v: 1, exp: Date.now() + 60000, ...payload })).toString('base64url');
  return body + '.' + crypto.createHmac('sha256', secret).update(body).digest('base64url');
}

test('unauthenticated private routes reject requests before querying the database', async () => {
  const f = fixture();
  for (const [method, route] of [
    ['GET', '/poll'], ['POST', '/send'], ['POST', '/check-nickname'],
    ['GET', '/admin/conversations'], ['GET', '/admin/messages'], ['POST', '/admin/reply'],
    ['GET', '/permit/content'],
  ]) {
    const response = await f.main({ httpMethod: method, path: route, body: '{}' });
    assert.equal(response.statusCode, 401, `${method} ${route}`);
  }
  assert.equal(f.reads.length, 0);
});

test('visitor polling uses the signed identity and rejects tampering and role confusion', async () => {
  const f = fixture();
  const visitor = token({ type: 'visitor', visitorId: 'signed-owner' });
  const response = await f.main({ path: '/poll', headers: { Authorization: 'Bearer ' + visitor },
    queryStringParameters: { visitorId: 'someone-else' } });
  assert.equal(response.statusCode, 200);
  assert.equal(f.reads[0].query.visitorId, 'signed-owner');
  const privateRoutes = ['/poll', '/admin/conversations'];
  for (const route of privateRoutes) {
    const invalid = await f.main({ path: route, headers: { Authorization: 'Bearer ' + visitor + 'tampered' } });
    assert.equal(invalid.statusCode, 401);
  }
  const admin = await f.main({ path: '/admin/conversations', headers: { Authorization: 'Bearer ' + visitor } });
  assert.equal(admin.statusCode, 401);
});

test('permit content requires an unexpired token for the requested resource', async () => {
  const f = fixture();
  for (const payload of [
    { type: 'permit', resource: 'other-resource' },
    { type: 'permit', resource: 'hci-prototyping', exp: Date.now() - 1 },
    { type: 'visitor', resource: 'hci-prototyping' },
  ]) {
    const r = await f.main({ path: '/permit/content', queryStringParameters: { resource: 'hci-prototyping' },
      headers: { Authorization: 'Bearer ' + token(payload) } });
    assert.equal(r.statusCode, 401);
  }
  const r = await f.main({ path: '/permit/content', queryStringParameters: { resource: 'hci-prototyping' },
    headers: { Authorization: 'Bearer ' + token({ type: 'permit', resource: 'hci-prototyping' }) } });
  assert.equal(r.statusCode, 200);
  assert.equal(JSON.parse(r.body).items.length, 1);
});

test('CORS grants only the configured exact origin', async () => {
  const f = fixture();
  for (const origin of ['https://bananabox.plus.attacker.invalid', 'https://attacker.invalid', 'null']) {
    const r = await f.main({ httpMethod: 'OPTIONS', headers: { origin } });
    assert.equal(r.headers['Access-Control-Allow-Origin'], undefined);
  }
  const r = await f.main({ httpMethod: 'OPTIONS', headers: { origin: 'https://bananabox.plus' } });
  assert.equal(r.headers['Access-Control-Allow-Origin'], 'https://bananabox.plus');
});
