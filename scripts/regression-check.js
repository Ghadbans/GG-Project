#!/usr/bin/env node
/**
 * scripts/regression-check.js (v3.7.3)
 *
 * Automated Cross-Module Regression & Data-Safety Verification Suite.
 * Verifies:
 *   1. ObjectId & Query Sanitization Utilities (objectIdUtils.js)
 *   2. Static Data-Safety Invariants (no startup DB mutations in server/index.js, no hardcoded CCTV fallback)
 *   3. Null-ID Resilience across relation endpoints (?invoiceIds=null&purchaseIds=null&projectId=null never 500)
 *   4. Cross-Module Endpoint Health (200 OK + valid JSON shape + HQ branch scoping)
 *
 * Usage:
 *   node scripts/regression-check.js [--target=http://127.0.0.1:18082] [--auto-start]
 */

const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');
const url = require('url');

const args = process.argv.slice(2);
const targetArg = args.find(a => a.startsWith('--target='));
const targetBase = targetArg ? targetArg.split('=')[1] : (process.env.TEST_TARGET || 'http://127.0.0.1:18082');
const autoStart = args.includes('--auto-start');
const parsedTarget = url.parse(targetBase);

let passed = 0;
let failed = 0;

function assert(condition, label, details = '') {
  if (condition) {
    console.log(`  \x1b[32m[PASS]\x1b[0m ${label}`);
    passed++;
  } else {
    console.error(`  \x1b[31m[FAIL]\x1b[0m ${label}${details ? ' -> ' + details : ''}`);
    failed++;
  }
}

function request(options, data = null) {
  return new Promise((resolve, reject) => {
    const isHttps = parsedTarget.protocol === 'https:';
    const client = isHttps ? https : http;
    const reqOpts = {
      protocol: parsedTarget.protocol,
      hostname: parsedTarget.hostname,
      port: parsedTarget.port || (isHttps ? 443 : 80),
      path: options.path || '/',
      method: options.method || 'GET',
      headers: { ...options.headers }
    };
    if (data && !reqOpts.headers['Content-Length']) {
      reqOpts.headers['Content-Length'] = Buffer.byteLength(data);
    }
    const req = client.request(reqOpts, (res) => {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', chunk => { body += chunk; });
      res.on('end', () => resolve({ statusCode: res.statusCode, headers: res.headers, body }));
    });
    req.on('error', reject);
    req.setTimeout(15000, () => req.destroy(new Error('Request timed out after 15s')));
    if (data) req.write(data);
    req.end();
  });
}

async function pingTarget() {
  try {
    const res = await request({ path: '/status', method: 'GET' });
    return res.statusCode === 200;
  } catch (_) {
    return false;
  }
}

async function ensureServerRunning() {
  if (await pingTarget()) {
    console.log(`\x1b[32m[INFO] Connected to existing server at ${targetBase}\x1b[0m\n`);
    return;
  }
  if (!autoStart) {
    throw new Error(`Target server ${targetBase} is unreachable. Pass --auto-start or start the server first.`);
  }
  console.log(`[INFO] Starting in-process test server on port ${parsedTarget.port || 18082}...`);
  process.env.PORT = parsedTarget.port || 18082;
  process.env.NODE_ENV = 'test';
  process.env.ADMIN_SETUP_KEY = 'test-admin-secret-key-12345';
  require('../server/index.js');

  let online = false;
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 300));
    online = await pingTarget();
    if (online) break;
  }
  if (!online) {
    throw new Error('Failed to start in-process test server within timeout.');
  }
  console.log(`\x1b[32m[INFO] In-process test server ready.\x1b[0m\n`);
}

async function runTests() {
  console.log('==========================================================');
  console.log(' GLOBAL GATE - REGRESSION & DATA-SAFETY SUITE (v3.7.3)');
  console.log('==========================================================\n');

  // 1. Unit Tests: ObjectId Sanitization
  console.log('[Group 1: ObjectId & Query Sanitization Utilities]');
  const { isValidObjectId, toSafeObjectId, parseSafeIdList, cleanParamString } = require('../server/utils/objectIdUtils');
  assert(isValidObjectId('null') === false, 'isValidObjectId rejects literal "null"');
  assert(isValidObjectId('undefined') === false, 'isValidObjectId rejects literal "undefined"');
  assert(isValidObjectId('') === false, 'isValidObjectId rejects empty string');
  assert(isValidObjectId('507f1f77bcf86cd799439011') === true, 'isValidObjectId accepts valid 24-hex ObjectId');
  assert(toSafeObjectId('null') === null, 'toSafeObjectId returns null for "null"');
  const parsed = parseSafeIdList('null, undefined, , 507f1f77bcf86cd799439011, PUR-000160');
  assert(parsed.objectIds.length === 1, `parseSafeIdList isolates 1 valid ObjectId (got ${parsed.objectIds.length})`);
  assert(!parsed.rawStrings.includes('null') && !parsed.rawStrings.includes('undefined'), 'parseSafeIdList strips "null" and "undefined"');
  assert(cleanParamString('null') === '' && cleanParamString('undefined') === '', 'cleanParamString strips "null" and "undefined"');

  // 2. Static Data-Safety Invariants
  console.log('\n[Group 2: Static Data-Safety Invariants]');
  const serverIndexSrc = fs.readFileSync(path.join(__dirname, '..', 'server', 'index.js'), 'utf8');
  const bootSection = serverIndexSrc.split('setImmediate(async () => {')[1]?.split('const collectionsToClean')[0] || '';
  assert(!/\.update(?:Many|One)\s*\(/.test(bootSection), 'server/index.js boot hook contains ZERO updateMany/updateOne mutations');
  const invoiceViewSrc = fs.readFileSync(path.join(__dirname, '..', 'src', 'js', 'AdminView1', 'InvoiceViewAdmin.js'), 'utf8');
  assert(!invoiceViewSrc.includes('CCTV & POS INSTALLATION'), 'InvoiceViewAdmin.js contains ZERO hardcoded CCTV & POS INSTALLATION fallback');
  const projectViewSrc = fs.readFileSync(path.join(__dirname, '..', 'src', 'js', 'AdminView1', 'PageView', 'ProjectView', 'ProjectViewInformation.js'), 'utf8');
  assert(projectViewSrc.includes('isCleanId'), 'ProjectViewInformation.js sanitizes null/undefined query params via isCleanId');

  // 3. Boot / Connect Server & Obtain Valid Auth Token
  await ensureServerRunning();
  const mongoose = require('../server/node_modules/mongoose');
  const jwt = require('../server/node_modules/jsonwebtoken');
  const { getJwtSecret } = require('../server/Middleware/auth');

  // Wait briefly for mongoose connection if connecting locally
  for (let i = 0; i < 15 && mongoose.connection.readyState !== 1; i++) {
    await new Promise(r => setTimeout(r, 250));
  }

  let authToken = null;
  if (mongoose.connection.readyState === 1) {
    const User = require('../server/model/employeeUserSchema');
    let userDoc = await User.findOne({}).lean();
    if (!userDoc) {
      // Seed ephemeral test user only if local test DB has zero users
      const created = await User.create({
        employeeName: 'REGRESSION_TEST_USER',
        password: 'TestPassword123!',
        role: 'CEO'
      });
      userDoc = created.toObject();
    }
    authToken = jwt.sign(
      { userId: String(userDoc._id), employeeName: userDoc.employeeName || 'GG', role: userDoc.role || 'CEO' },
      getJwtSecret(),
      { expiresIn: '1h' }
    );
  } else {
    console.log('  \x1b[33m[WARN]\x1b[0m Local MongoDB not connected; skipping live HTTP endpoint checks.');
    console.log(`\nSUMMARY: ${passed} PASSED, ${failed} FAILED`);
    process.exit(failed > 0 ? 1 : 0);
  }

  const authHeaders = { Authorization: `Bearer ${authToken}` };

  // 4. Null-ID Resilience Tests (Issue 1 regression check)
  console.log('\n[Group 3: Null-ID Resilience (No 500 CastError)]');
  const nullIdRoutes = [
    '/endpoint/invoice?summary=true&projectId=null&purchaseIds=null&invoiceIds=null&purchaseNames=null&branchId=HQ',
    '/endpoint/purchase?summary=true&projectId=null&branchId=HQ',
    '/endpoint/expense?summary=true&projectId=null&maintenanceId=null&branchId=HQ',
    '/endpoint/deliveryNote?referenceId=null&branchId=HQ'
  ];
  for (const r of nullIdRoutes) {
    const res = await request({ path: r, method: 'GET', headers: authHeaders });
    let json = null;
    try { json = JSON.parse(res.body); } catch (_) {}
    assert(res.statusCode === 200 && json && Array.isArray(json.data), `Null-ID safe 200 OK on ${r.split('?')[0]} (got ${res.statusCode})`);
  }

  // 5. Cross-Module Endpoint Health & Shape Verification
  console.log('\n[Group 4: Cross-Module Endpoint Health & Shape (HQ Branch)]');
  const moduleChecks = [
    { name: 'Projects', path: '/endpoint/project-Information?page=1&limit=10&branchId=HQ', key: 'itemI' },
    { name: 'Purchases', path: '/endpoint/purchase-Information?page=1&limit=10&branchId=HQ', key: 'itemI' },
    { name: 'Invoices', path: '/endpoint/invoice-Information?page=1&limit=10&branchId=HQ', key: 'itemI' },
    { name: 'Quotations', path: '/endpoint/estimation-Information?page=1&limit=10&branchId=HQ', key: 'itemI' },
    { name: 'Maintenance', path: '/endpoint/maintenance-Information?page=1&limit=10&branchId=HQ', key: 'itemI' },
    { name: 'Maintenance Orders', path: '/endpoint/technician-maintenance-Information?page=1&limit=10&isOffice=true&branchId=HQ', key: 'itemI' },
    { name: 'Customers', path: '/endpoint/customer-Information?page=1&limit=10&branchId=HQ', key: 'itemI' },
    { name: 'Suppliers', path: '/endpoint/Supplier-Information?page=1&limit=10&branchId=HQ', key: 'itemI' },
    { name: 'Items', path: '/endpoint/item-Information?page=1&limit=10&branchId=HQ', key: 'itemI' },
    { name: 'Expenses', path: '/endpoint/expense-Information?page=1&limit=10&branchId=HQ', key: 'itemI' },
    { name: 'Purchase Orders', path: '/endpoint/purchaseOrder-Information?page=1&limit=10&branchId=HQ', key: 'itemI' },
    { name: 'POS Invoices', path: '/endpoint/pos?summary=true&branchId=HQ', key: 'data' },
    { name: 'Payroll', path: '/endpoint/payRoll-Information?page=1&limit=10&branchId=HQ', key: 'itemI' },
    { name: 'Fleet', path: '/endpoint/fleet?page=1&limit=10&branchId=HQ', key: 'data' },
    { name: 'Block Factory', path: '/endpoint/block-production?branchId=HQ', key: 'data' },
    { name: 'Delivery Notes', path: '/endpoint/deliveryNote-Information?page=1&limit=10&branchId=HQ', key: 'itemI' },
  ];

  for (const chk of moduleChecks) {
    const res = await request({ path: chk.path, method: 'GET', headers: authHeaders });
    let json = null;
    try { json = JSON.parse(res.body); } catch (_) {}
    const hasArray = Boolean(json && (Array.isArray(json[chk.key]) || Array.isArray(json.data) || Array.isArray(json.itemI)));
    assert(res.statusCode === 200 && hasArray, `${chk.name}: 200 OK & valid array shape (got ${res.statusCode})`);
  }

  console.log('\n==========================================================');
  console.log(`SUMMARY: ${passed} PASSED, ${failed} FAILED`);
  console.log('==========================================================\n');

  process.exit(failed > 0 ? 1 : 0);
}

runTests().catch((err) => {
  console.error('\x1b[31mFatal regression check error:\x1b[0m', err);
  process.exit(1);
});
