const rateLimit = require('express-rate-limit');

/**
 * Resolves the client's real IP address behind Cloudflare Orange Cloud and Railway proxies.
 */
const getClientIp = (req) => {
  return (
    req.headers['cf-connecting-ip'] ||
    (req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'].split(',')[0].trim() : null) ||
    req.ip ||
    '127.0.0.1'
  );
};

/**
 * Strict login rate limiter:
 * - 15 minute sliding window.
 * - Max 10 failed login attempts per client IP.
 * - skipSuccessfulRequests: true ensures legitimate user logins are never locked out.
 */
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  skipSuccessfulRequests: true,
  keyGenerator: (req) => getClientIp(req),
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: {
    message: 'Too many login attempts from this IP. Please try again after 15 minutes.'
  },
  validate: {
    xForwardedForHeader: false,
    trustProxy: false
  }
});

/**
 * Rate limiter for password reset requests:
 * - 15 minute sliding window.
 * - Max 5 reset requests per client IP to prevent mailbox spam and abuse.
 */
const passwordResetLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  keyGenerator: (req) => getClientIp(req),
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: {
    message: 'Too many password reset requests from this IP. Please try again after 15 minutes.'
  },
  validate: {
    xForwardedForHeader: false,
    trustProxy: false
  }
});

module.exports = {
  loginLimiter,
  passwordResetLimiter,
  getClientIp
};
