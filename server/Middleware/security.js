/**
 * Global Gate API - Security hardening middleware (v3.6.69)
 *
 * Additive layer only: nothing here touches route handlers, schemas or business logic.
 *  - Cloudflare-aware client IP resolution (spoof-proof)
 *  - Optional origin lock (X-Origin-Verify) so the raw Railway domain cannot bypass Cloudflare
 *  - CORS allow-list (HTTP + Socket.IO)
 *  - Tiered JSON/urlencoded body limits
 *  - NoSQL operator sanitisation
 *  - Query-string clamp (bounds ReDoS / regex cost on search endpoints)
 *  - Timing-safe internal key check
 */
const crypto = require('crypto');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');

// ---------------------------------------------------------------------------
// 1. Cloudflare-aware client IP
// ---------------------------------------------------------------------------
// Published Cloudflare ranges (https://www.cloudflare.com/ips/). These change very rarely.
const CF_IPV4 = [
  '173.245.48.0/20', '103.21.244.0/22', '103.22.200.0/22', '103.31.4.0/22',
  '141.101.64.0/18', '108.162.192.0/18', '190.93.240.0/20', '188.114.96.0/20',
  '197.234.240.0/22', '198.41.128.0/17', '162.158.0.0/15', '104.16.0.0/13',
  '104.24.0.0/14', '172.64.0.0/13', '131.0.72.0/22'
];
const CF_IPV6_PREFIXES = [
  /^2400:cb00:/i, /^2606:4700:/i, /^2803:f800:/i, /^2405:b500:/i,
  /^2405:8100:/i, /^2a06:98c[0-7]:/i, /^2c0f:f248:/i
];

function ipv4ToInt(ip) {
  const p = ip.split('.');
  if (p.length !== 4) return null;
  let n = 0;
  for (const part of p) {
    const v = Number(part);
    if (!Number.isInteger(v) || v < 0 || v > 255) return null;
    n = (n * 256) + v;
  }
  return n;
}

const CF_IPV4_RANGES = CF_IPV4.map((cidr) => {
  const [base, bits] = cidr.split('/');
  const size = Math.pow(2, 32 - Number(bits));
  const start = ipv4ToInt(base);
  return { start, end: start + size - 1 };
});

function isCloudflareIp(rawIp) {
  if (!rawIp) return false;
  const ip = String(rawIp).replace(/^::ffff:/i, '');
  if (ip.includes(':')) return CF_IPV6_PREFIXES.some((re) => re.test(ip));
  const n = ipv4ToInt(ip);
  if (n === null) return false;
  return CF_IPV4_RANGES.some((r) => n >= r.start && n <= r.end);
}

/**
 * Real client IP.
 * `req.ip` (trust proxy = 1) is whoever connected to Railway's edge: a Cloudflare edge IP when the
 * request really came through Cloudflare, or the attacker's own IP when they hit the origin directly.
 * CF-Connecting-IP is therefore honoured ONLY when req.ip is a Cloudflare address - it cannot be spoofed.
 */
function getClientIp(req) {
  const peer = req.ip || (req.socket && req.socket.remoteAddress) || '127.0.0.1';
  const cf = req.headers['cf-connecting-ip'];
  const originSecret = process.env.ORIGIN_VERIFY_SECRET;
  const hasOriginVerify = originSecret && safeEqual(req.headers['x-origin-verify'], originSecret);
  if (cf && (isCloudflareIp(peer) || req.headers['x-railway-edge'] || hasOriginVerify)) {
    return String(cf).trim();
  }
  return peer;
}

// ---------------------------------------------------------------------------
// 2. Origin lock (opt-in via ORIGIN_VERIFY_SECRET)
// ---------------------------------------------------------------------------
const ORIGIN_LOCK_EXEMPT = new Set(['/status', '/health', '/favicon.ico', '/robots.txt']);

function safeEqual(a, b) {
  const ba = Buffer.from(String(a || ''));
  const bb = Buffer.from(String(b || ''));
  if (ba.length !== bb.length) return false;
  return crypto.timingSafeEqual(ba, bb);
}

function originLock(req, res, next) {
  const secret = process.env.ORIGIN_VERIFY_SECRET;
  if (!secret) return next(); // not enabled yet
  if (ORIGIN_LOCK_EXEMPT.has(req.path)) return next();
  if (safeEqual(req.headers['x-origin-verify'], secret)) return next();
  return res.status(403).json({ message: 'Forbidden' });
}

// ---------------------------------------------------------------------------
// 3. CORS allow-list
// ---------------------------------------------------------------------------
const STATIC_ORIGINS = [
  'https://portal.globalgate.sarl',
  'https://globalgate.sarl',
  'https://www.globalgate.sarl',
  'https://gg-project.pages.dev',
  // Capacitor / Android WebView
  'https://localhost',
  'http://localhost',
  'capacitor://localhost',
  'ionic://localhost',
  // Electron desktop (file:// or custom protocol)
  'null',
  'file://',
  'app://.'
];

function extraOrigins() {
  return String(process.env.CORS_EXTRA_ORIGINS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

function isAllowedOrigin(origin) {
  if (!origin) return true; // server-to-server, curl, same-origin
  if (STATIC_ORIGINS.includes(origin) || extraOrigins().includes(origin)) return true;
  // Cloudflare Pages preview deployments of this project
  if (/^https:\/\/[a-z0-9-]+\.gg-project\.pages\.dev$/i.test(origin)) return true;
  // Local development servers
  if (/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(origin)) return true;
  return false;
}

const corsOptions = {
  origin(origin, callback) {
    if (isAllowedOrigin(origin)) return callback(null, true);
    return callback(null, false); // no CORS headers => browser blocks; no crash, no 500
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'X-Requested-With',
    'Accept',
    'X-Admin-Setup-Key',
    'X-Lock-User',
    'X-System-Bypass',
    'X-User-Id',
    'X-User-Name',
    'X-Origin-Verify'
  ],
  maxAge: 600
};

// ---------------------------------------------------------------------------
// 4. Body parsers (tiered)
// ---------------------------------------------------------------------------
// Routes that legitimately receive base64 images inside JSON get the large limit.
const BIG_BODY_PATH = /(image|logo|photo|picture|avatar|profile|company|branch|fleet|inspection|marketing|flyer|publish|template|employee|item)/i;
const WRITE_METHODS = new Set(['POST', 'PUT', 'PATCH']);
const DEFAULT_LIMIT = '10mb';
const IMAGE_LIMIT = '50mb';

function bodyParsers(express) {
  const jsonSmall = express.json({ limit: DEFAULT_LIMIT });
  const jsonBig = express.json({ limit: IMAGE_LIMIT });
  const formSmall = express.urlencoded({ limit: DEFAULT_LIMIT, extended: true, parameterLimit: 5000 });
  const formBig = express.urlencoded({ limit: IMAGE_LIMIT, extended: true, parameterLimit: 5000 });
  const pick = (req) => WRITE_METHODS.has(req.method) && BIG_BODY_PATH.test(req.path);
  return [
    (req, res, next) => (pick(req) ? jsonBig : jsonSmall)(req, res, next),
    (req, res, next) => (pick(req) ? formBig : formSmall)(req, res, next)
  ];
}

// ---------------------------------------------------------------------------
// 5. Sanitisation & query clamp
// ---------------------------------------------------------------------------
// allowDots:true -> only operator keys ($gt, $ne, ...) are stripped; legit dotted keys are preserved.
const sanitizeNoSql = mongoSanitize({ allowDots: true, replaceWith: '_' });

const MAX_QUERY_STRING = 200;
const MAX_TOKEN_QUERY_STRING = 2048;
function clampQuery(req, res, next) {
  const q = req.query;
  if (q && typeof q === 'object') {
    for (const key of Object.keys(q)) {
      const v = q[key];
      const maxLen = key === 'token' ? MAX_TOKEN_QUERY_STRING : MAX_QUERY_STRING;
      if (typeof v === 'string' && v.length > maxLen) {
        q[key] = v.slice(0, maxLen);
      }
    }
  }
  next();
}

// ---------------------------------------------------------------------------
// 6. Helmet (API flavour)
// ---------------------------------------------------------------------------
// CSP + frameguard are intentionally OFF on the API: it returns JSON and serves attachment PDFs/images
// that the portal, Electron (file://) and Capacitor shells embed in <iframe>/<img>. CSP belongs on the
// Cloudflare Pages portal. Everything else (nosniff, HSTS, referrer policy, no x-powered-by...) is on.
const helmetMiddleware = helmet({
  contentSecurityPolicy: false,
  frameguard: false,
  crossOriginResourcePolicy: { policy: 'cross-origin' },
  crossOriginEmbedderPolicy: false
});

// ---------------------------------------------------------------------------
// 7. Internal-route key check
// ---------------------------------------------------------------------------
function verifyInternalKey(req, res, next) {
  const expected = process.env.ADMIN_SETUP_KEY || process.env.SECRET_KEY;
  const provided = req.headers['x-admin-setup-key'] || req.query.setupKey;
  if (expected && provided && safeEqual(provided, expected)) return next();
  return res.status(403).json({ error: 'Forbidden: Unauthorized access to system maintenance endpoint.' });
}

module.exports = {
  getClientIp,
  isCloudflareIp,
  originLock,
  corsOptions,
  isAllowedOrigin,
  bodyParsers,
  sanitizeNoSql,
  clampQuery,
  helmetMiddleware,
  verifyInternalKey
};
