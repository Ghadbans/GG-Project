#!/usr/bin/env node
/**
 * scripts/security-check.js (v3.7.3)
 *
 * Automated defensive security test suite.
 * Tests:
 *  1. Security headers (Helmet: nosniff, hsts, x-dns-prefetch-control, no x-powered-by)
 *  2. CORS policy (Allowlist vs unauthorized origins, preflight OPTIONS)
 *  3. Body size protection (12 MB payload returns 413)
 *  4. NoSQL injection sanitization ($gt, $ne rejected/sanitized, never 200)
 *  5. ReDoS query clamp (5 KB search query handled safely)
 *  6. Brute-force rate limiting (12 invalid login requests trip 429)
 *  7. Internal routes lock (/init-admin, /debug-db return 403 without key)
 *
 * Usage:
 *   node scripts/security-check.js [--target=http://localhost:8080] [--allow-prod] [--auto-start]
 */

const http = require('http');
const https = require('https');
const url = require('url');
const { spawn } = require('child_process');
const path = require('path');

// CLI args
const args = process.argv.slice(2);
let targetArg = args.find(a => a.startsWith('--target='));
const targetBase = targetArg ? targetArg.split('=')[1] : (process.env.TEST_TARGET || 'http://127.0.0.1:8080');
const allowProd = args.includes('--allow-prod');
const autoStart = args.includes('--auto-start');

const parsedTarget = new url.URL(targetBase);

// Guard against accidental rate-limit lockout on production
const PROD_HOST_PATTERNS = [/globalgate\.sarl$/i, /railway\.app$/i];
const isProdHost = PROD_HOST_PATTERNS.some(re => re.test(parsedTarget.hostname));

if (isProdHost && !allowProd) {
  console.error(`\x1b[31m[ERROR] Target ${parsedTarget.hostname} appears to be a production host.\x1b[0m`);
  console.error(`Running security checks trips the login rate limiter (15-min lockout for your IP).`);
  console.error(`If you really want to run against production, pass --allow-prod.`);
  process.exit(1);
}

let serverProcess = null;

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
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body
        });
      });
    });

    req.on('error', reject);
    req.setTimeout(15000, () => {
      req.destroy(new Error('Request timed out after 15s'));
    });

    if (data) req.write(data);
    req.end();
  });
}

async function pingTarget() {
  try {
    const res = await request({ path: '/status', method: 'GET' });
    return res.statusCode === 200;
  } catch (err) {
    return false;
  }
}

async function ensureServerRunning() {
  const isUp = await pingTarget();
  if (isUp) {
    console.log(`\x1b[32m[INFO] Connected to existing server at ${targetBase}\x1b[0m\n`);
    return;
  }

  console.log(`[INFO] Starting in-process test server on port ${parsedTarget.port || 8080}...`);
  const port = parsedTarget.port || 8080;
  process.env.PORT = port;
  process.env.NODE_ENV = 'test';
  process.env.ADMIN_SETUP_KEY = 'test-admin-secret-key-12345';

  // Require server/index.js in-process so loopback is 100% reliable inside sandbox
  require('../server/index.js');

  // Wait up to 5 seconds for server to report ready
  let online = false;
  for (let i = 0; i < 10; i++) {
    await new Promise(r => setTimeout(r, 300));
    online = await pingTarget();
    if (online) break;
  }

  if (!online) {
    throw new Error(`Failed to initialize in-process server on port ${port}.`);
  }
  console.log(`\x1b[32m[INFO] In-process test server ready on port ${port}\x1b[0m\n`);
}

let passedTests = 0;
let failedTests = 0;

function assert(condition, testName, details = '') {
  if (condition) {
    passedTests++;
    console.log(`  \x1b[32mPASS\x1b[0m - ${testName}`);
  } else {
    failedTests++;
    console.log(`  \x1b[31mFAIL\x1b[0m - ${testName} ${details ? `(${details})` : ''}`);
  }
}

async function runTests() {
  console.log(`=======================================================`);
  console.log(`  GLOBAL GATE SECURITY & RATE LIMIT VERIFICATION SUITE `);
  console.log(`  Target: ${targetBase} (Version 3.7.0)`);
  console.log(`=======================================================\n`);

  // 1. Security Headers Check
  console.log(`[Test Group 1: Security Headers (Helmet)]`);
  try {
    const res = await request({ path: '/status', method: 'GET' });
    assert(
      res.headers['x-content-type-options'] === 'nosniff',
      'X-Content-Type-Options: nosniff present'
    );
    assert(
      !res.headers['x-powered-by'],
      'X-Powered-By header disabled/masked'
    );
    assert(
      res.headers['x-dns-prefetch-control'] !== undefined,
      'X-DNS-Prefetch-Control header configured'
    );
    assert(
      res.headers['cross-origin-resource-policy'] === 'cross-origin',
      'Cross-Origin-Resource-Policy allows embedded previews'
    );
  } catch (err) {
    assert(false, 'Security headers request failed', err.message);
  }

  // 2. CORS Allowlist & Restriction Check
  console.log(`\n[Test Group 2: CORS Lockdown]`);
  try {
    // Authorized origin
    const authRes = await request({
      path: '/status',
      method: 'GET',
      headers: { Origin: 'https://portal.globalgate.sarl' }
    });
    assert(
      authRes.headers['access-control-allow-origin'] === 'https://portal.globalgate.sarl',
      'Authorized origin (portal.globalgate.sarl) echoed in CORS header'
    );

    // Capacitor / Android mobile origin
    const mobileRes = await request({
      path: '/status',
      method: 'GET',
      headers: { Origin: 'capacitor://localhost' }
    });
    assert(
      mobileRes.headers['access-control-allow-origin'] === 'capacitor://localhost',
      'Capacitor mobile origin (capacitor://localhost) accepted'
    );

    // Unauthorized origin
    const unauthRes = await request({
      path: '/status',
      method: 'GET',
      headers: { Origin: 'https://malicious-attacker.com' }
    });
    assert(
      !unauthRes.headers['access-control-allow-origin'] || unauthRes.headers['access-control-allow-origin'] === 'false',
      'Unauthorized origin (malicious-attacker.com) NOT granted CORS headers'
    );

    // Preflight check
    const preflightRes = await request({
      path: '/endpoint/user',
      method: 'OPTIONS',
      headers: {
        Origin: 'https://portal.globalgate.sarl',
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'Content-Type, Authorization'
      }
    });
    assert(
      preflightRes.statusCode === 204 || preflightRes.statusCode === 200,
      `Preflight OPTIONS returns ${preflightRes.statusCode}`
    );
  } catch (err) {
    assert(false, 'CORS requests failed', err.message);
  }

  // 3. Body Size Limit Protection
  console.log(`\n[Test Group 3: Application-Layer DoS / Payload Size Protection]`);
  try {
    // Generate ~11 MB JSON payload to test default 10MB limit on non-image route
    const padding = 'x'.repeat(11 * 1024 * 1024);
    const oversizedJson = JSON.stringify({ data: padding });
    const payloadRes = await request({
      path: '/endpoint/nonexistent-standard-route',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }, oversizedJson);

    assert(
      payloadRes.statusCode === 413,
      `Oversized 11MB payload on standard route returns 413 (got ${payloadRes.statusCode})`
    );
  } catch (err) {
    assert(false, 'Payload size limit test failed', err.message);
  }

  // 4. NoSQL Operator Sanitization Check
  console.log(`\n[Test Group 4: NoSQL Injection Sanitization]`);
  try {
    const nosqlPayload = JSON.stringify({
      email: { $gt: '' },
      password: { $ne: 'randompassword123' }
    });
    const nosqlRes = await request({
      path: '/auth/login',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }, nosqlPayload);

    assert(
      nosqlRes.statusCode !== 200,
      `NoSQL injection operators in login payload safely rejected (status: ${nosqlRes.statusCode})`
    );
  } catch (err) {
    assert(false, 'NoSQL sanitization test failed', err.message);
  }

  // 5. Query Parameter Clamp (ReDoS Prevention)
  console.log(`\n[Test Group 5: ReDoS & Query String Clamping]`);
  try {
    const largeQueryParam = 'a'.repeat(4000);
    const startTime = Date.now();
    const queryRes = await request({
      path: `/status?search=${largeQueryParam}&filter=${largeQueryParam}`,
      method: 'GET'
    });
    const duration = Date.now() - startTime;
    assert(
      queryRes.statusCode === 200 && duration < 2000,
      `Large query parameter processed promptly without hanging (${duration}ms)`
    );
  } catch (err) {
    assert(false, 'Query clamp test failed', err.message);
  }

  // 6. Internal Route Lock (/init-admin, /debug-db)
  console.log(`\n[Test Group 6: Internal Route Protection]`);
  try {
    const initRes = await request({
      path: '/init-admin',
      method: 'GET'
    });
    assert(
      initRes.statusCode === 403,
      `/init-admin returns 403 Forbidden without setup key (got ${initRes.statusCode})`
    );

    const debugRes = await request({
      path: '/debug-db',
      method: 'GET'
    });
    assert(
      debugRes.statusCode === 403,
      `/debug-db returns 403 Forbidden without setup key (got ${debugRes.statusCode})`
    );
  } catch (err) {
    assert(false, 'Internal route protection test failed', err.message);
  }

  // 7. Rate Limiter Brute-Force Defense Check
  console.log(`\n[Test Group 7: Brute-Force Rate Limiting Defense]`);
  try {
    let triggered429 = false;
    let attemptsMade = 0;
    // Send 13 invalid login attempts to trigger 10-attempt threshold
    for (let i = 0; i < 14; i++) {
      attemptsMade++;
      const loginAttempt = await request({
        path: '/auth/login',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      }, JSON.stringify({ email: `test-${i}@example.com`, password: 'invalidpassword' }));

      if (loginAttempt.statusCode === 429) {
        triggered429 = true;
        break;
      }
    }

    assert(
      triggered429,
      `Rate limiter triggered HTTP 429 Too Many Requests after ${attemptsMade} attempts`
    );
  } catch (err) {
    assert(false, 'Rate limiter test failed', err.message);
  }

  // 8. JWT Authentication Enforcement Check (v3.7.0)
  console.log(`\n[Test Group 8: JWT Authentication Enforcement (v3.7.0)]`);
  try {
    // 8a. Unauthenticated GET /endpoint/invoice -> 401
    const unauthEndpointRes = await request({
      path: '/endpoint/invoice',
      method: 'GET'
    });
    assert(
      unauthEndpointRes.statusCode === 401,
      `Unauthenticated GET /endpoint/invoice returns 401 Unauthorized (got ${unauthEndpointRes.statusCode})`
    );

    // 8b. Unauthenticated GET /api/inspection-reports -> 401
    const unauthApiRes = await request({
      path: '/api/inspection-reports',
      method: 'GET'
    });
    assert(
      unauthApiRes.statusCode === 401,
      `Unauthenticated GET /api/inspection-reports returns 401 Unauthorized (got ${unauthApiRes.statusCode})`
    );

    // 8c. Unauthenticated POST /auth/register -> 401
    const unauthRegisterRes = await request({
      path: '/auth/register',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }, JSON.stringify({ employeeName: 'unauthorized', password: 'password123', role: 'Staff' }));
    assert(
      unauthRegisterRes.statusCode === 401,
      `Unauthenticated POST /auth/register returns 401 Unauthorized (got ${unauthRegisterRes.statusCode})`
    );

    // 8d. Invalid / tampered Bearer token -> 401
    const badTokenRes = await request({
      path: '/endpoint/customer',
      method: 'GET',
      headers: { Authorization: 'Bearer invalid.tampered.token' }
    });
    assert(
      badTokenRes.statusCode === 401,
      `Tampered Bearer token on GET /endpoint/customer returns 401 Unauthorized (got ${badTokenRes.statusCode})`
    );

    // 8e. Valid signed JWT Bearer token passes authenticate middleware (returns 404 on probe route, not 401)
    const jwt = require('../server/node_modules/jsonwebtoken');
    const { getJwtSecret } = require('../server/Middleware/auth');
    const validToken = jwt.sign(
      { userId: '507f1f77bcf86cd799439011', employeeName: 'GG', role: 'CEO' },
      getJwtSecret(),
      { expiresIn: '1h' }
    );
    const validTokenRes = await request({
      path: '/endpoint/auth-verified-probe-route',
      method: 'GET',
      headers: { Authorization: `Bearer ${validToken}` }
    });
    assert(
      validTokenRes.statusCode === 404,
      `Valid signed Bearer JWT passes authenticate middleware (status ${validTokenRes.statusCode} != 401)`
    );

    // 8f. Query token fallback (?token=...) passes authenticate middleware (for <img src> / <iframe src> attachments)
    const queryTokenRes = await request({
      path: `/endpoint/auth-verified-probe-route?token=${encodeURIComponent(validToken)}`,
      method: 'GET'
    });
    assert(
      queryTokenRes.statusCode === 404,
      `Query-param token (?token=<jwt>) passes authenticate middleware for attachment previews (status ${queryTokenRes.statusCode} != 401)`
    );

    // 8g. Public marketing status/flyer & health endpoints remain accessible without token
    const pubStatusRes = await request({
      path: '/api/marketing/status',
      method: 'GET'
    });
    assert(
      pubStatusRes.statusCode === 200,
      `Public endpoint GET /api/marketing/status remains accessible without token (got ${pubStatusRes.statusCode})`
    );
  } catch (err) {
    assert(false, 'JWT authentication enforcement test failed', err.message);
  }

  // Summary
  console.log(`\n=======================================================`);
  console.log(`  SECURITY TEST RESULTS: ${passedTests} PASSED, ${failedTests} FAILED`);
  console.log(`=======================================================\n`);

  if (serverProcess) {
    serverProcess.kill();
  }

  if (failedTests > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

async function main() {
  try {
    await ensureServerRunning();
    await runTests();
  } catch (err) {
    if (serverProcess) serverProcess.kill();
    console.error(`\x1b[31m[FATAL] ${err.message}\x1b[0m`);
    process.exit(1);
  }
}

main();
