const rateLimit = require('express-rate-limit');
const { ipKeyGenerator } = require('express-rate-limit');
const { getClientIp } = require('./security');

/**
 * Rate limit key = real client IP (Cloudflare-aware and spoof-proof, see security.js).
 * IPv6 addresses are collapsed to their /64 so one host cannot rotate addresses to dodge limits.
 */
const keyGenerator = (req) => {
  const ip = getClientIp(req);
  return typeof ipKeyGenerator === 'function' ? ipKeyGenerator(ip) : ip;
};

const makeLimiter = ({ windowMs, max, message, skip, skipSuccessfulRequests = false }) =>
  rateLimit({
    windowMs,
    max,
    skip,
    skipSuccessfulRequests,
    keyGenerator,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    message: { message },
    validate: { xForwardedForHeader: false, trustProxy: false, keyGeneratorIpFallback: false }
  });

const MIN15 = 15 * 60 * 1000;

/** Strict login limiter: 10 FAILED attempts / 15 min / IP (successful logins never count). */
const loginLimiter = makeLimiter({
  windowMs: MIN15,
  max: 10,
  skipSuccessfulRequests: true,
  message: 'Too many login attempts from this IP. Please try again after 15 minutes.'
});

/** Password reset / OTP style endpoints: 5 / 15 min / IP. */
const passwordResetLimiter = makeLimiter({
  windowMs: MIN15,
  max: 5,
  message: 'Too many password reset requests from this IP. Please try again after 15 minutes.'
});

const PUBLIC_PATHS = new Set(['/status', '/health', '/', '/favicon.ico', '/robots.txt']);
const isSafeMethod = (req) => req.method === 'OPTIONS' || req.method === 'HEAD';

/**
 * Global baseline for /endpoint, /api, /auth.
 * Generous on purpose: an office NAT can put many users behind one IP and each dashboard fires ~10 calls.
 */
const globalLimiter = makeLimiter({
  windowMs: MIN15,
  max: 2000,
  skip: (req) => isSafeMethod(req) || PUBLIC_PATHS.has(req.path),
  message: 'Too many requests from this IP. Please slow down and try again shortly.'
});

/** Resource-heavy writes (flyer/marketing agent, WhatsApp agent): 60 write requests / 15 min / IP. */
const heavyLimiter = makeLimiter({
  windowMs: MIN15,
  max: 60,
  skip: (req) => req.method === 'GET' || isSafeMethod(req),
  message: 'Too many resource-intensive requests. Please wait a few minutes and try again.'
});

/** AI draft generation (external paid API): 20 / 15 min / IP. */
const aiLimiter = makeLimiter({
  windowMs: MIN15,
  max: 20,
  skip: (req) => isSafeMethod(req),
  message: 'Too many AI requests. Please wait a few minutes and try again.'
});

/** Attachment uploads (memory-buffered multipart): 120 / 15 min / IP. */
const uploadLimiter = makeLimiter({
  windowMs: MIN15,
  max: 120,
  skip: (req) => req.method !== 'POST',
  message: 'Too many uploads from this IP. Please wait a few minutes and try again.'
});

/** Installer downloads (~100 MB each): 30 / hour / IP. */
const downloadLimiter = makeLimiter({
  windowMs: 60 * 60 * 1000,
  max: 30,
  skip: (req) => isSafeMethod(req),
  message: 'Too many download requests from this IP. Please try again later.'
});

module.exports = {
  loginLimiter,
  passwordResetLimiter,
  globalLimiter,
  heavyLimiter,
  aiLimiter,
  uploadLimiter,
  downloadLimiter,
  getClientIp
};
