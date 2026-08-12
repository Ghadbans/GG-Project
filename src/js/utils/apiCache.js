/**
 * apiCache.js — Smart TTL-based API cache for axios.get calls
 *
 * Why: Every page navigation re-downloads items, customers, employees, etc.
 * from Railway even when the data hasn't changed. This module caches
 * responses in memory so repeated calls return instantly.
 *
 * TTL settings (seconds):
 *   - "static" data  (items, customers, employees): 5 minutes
 *   - "dynamic" data (invoices, estimations):       30 seconds
 *   - "live" data    (notifications, attendance):   0 (no cache)
 */

import axios from 'axios';

// In-memory cache store: { url -> { data, expiresAt } }
const cache = new Map();

// TTL configuration (in milliseconds)
const TTL = {
  // Data that rarely changes — cache for 5 minutes
  STATIC: 5 * 60 * 1000,
  // Data that changes often — cache for 30 seconds
  DYNAMIC: 30 * 1000,
  // No cache (always fresh)
  NONE: 0,
};

/**
 * URL patterns and their TTL settings.
 * Matched from left to right — first match wins.
 */
const TTL_RULES = [
  // Static data — changes only when user manually updates
  { pattern: /\/item($|\?)/, ttl: TTL.STATIC },
  { pattern: /\/itemCode/, ttl: TTL.STATIC },
  { pattern: /\/customer($|\?)/, ttl: TTL.STATIC },
  { pattern: /\/employee($|\?)/, ttl: TTL.STATIC },
  { pattern: /\/rate($|\?)/, ttl: TTL.STATIC },
  { pattern: /\/supplier/, ttl: TTL.STATIC },
  { pattern: /\/grantAccess/, ttl: TTL.STATIC },

  // Dynamic data — fetch fresh every 30 seconds
  { pattern: /\/invoice($|\?)/, ttl: TTL.DYNAMIC },
  { pattern: /\/estimation($|\?)/, ttl: TTL.DYNAMIC },
  { pattern: /\/purchase($|\?)/, ttl: TTL.DYNAMIC },
  { pattern: /\/projects($|\?)/, ttl: TTL.DYNAMIC },
  { pattern: /\/maintenance($|\?)/, ttl: TTL.DYNAMIC },
  { pattern: /\/payment($|\?)/, ttl: TTL.DYNAMIC },
  { pattern: /\/pos($|\?)/, ttl: TTL.DYNAMIC },
  { pattern: /\/expense($|\?)/, ttl: TTL.DYNAMIC },
  { pattern: /\/payRoll($|\?)/, ttl: TTL.DYNAMIC },
  { pattern: /\/itemPurchase($|\?)/, ttl: TTL.DYNAMIC },

  // Live data — always fetch fresh
  { pattern: /\/notification/, ttl: TTL.NONE },
  { pattern: /\/employeeattendance/, ttl: TTL.NONE },
  { pattern: /\/comment/, ttl: TTL.NONE },
];

/**
 * Get the TTL for a given URL
 */
function getTTL(url) {
  for (const rule of TTL_RULES) {
    if (rule.pattern.test(url)) {
      return rule.ttl;
    }
  }
  // Default: 30 second cache for unrecognized endpoints
  return TTL.DYNAMIC;
}

/**
 * Cached axios.get — use this instead of axios.get for GET requests
 *
 * Usage:
 *   import { cachedGet } from '../utils/apiCache';
 *   const res = await cachedGet(`${ENDPOINT_URL}/item`);
 *   // Same response shape as axios.get
 */
export async function cachedGet(url, config = {}) {
  const ttl = getTTL(url);

  // If TTL = 0, skip cache entirely
  if (ttl === 0) {
    return axios.get(url, config);
  }

  const now = Date.now();
  const cached = cache.get(url);

  // Return cached response if still valid
  if (cached && now < cached.expiresAt) {
    return cached.data;
  }

  // Fetch fresh data
  const response = await axios.get(url, config);

  // Store in cache
  cache.set(url, {
    data: response,
    expiresAt: now + ttl,
  });

  return response;
}

/**
 * Force-invalidate cache for a specific URL or pattern.
 * Call this after a POST/PUT/DELETE to ensure the next GET is fresh.
 *
 * Usage:
 *   import { invalidateCache } from '../utils/apiCache';
 *   await axios.post(...);  // create new item
 *   invalidateCache('/item'); // clear cached item list
 */
export function invalidateCache(urlOrPattern) {
  if (typeof urlOrPattern === 'string') {
    // Invalidate all entries whose URL contains this string
    for (const key of cache.keys()) {
      if (key.includes(urlOrPattern)) {
        cache.delete(key);
      }
    }
  } else if (urlOrPattern instanceof RegExp) {
    for (const key of cache.keys()) {
      if (urlOrPattern.test(key)) {
        cache.delete(key);
      }
    }
  }
}

/**
 * Clear the entire cache (e.g., on logout)
 */
export function clearAllCache() {
  cache.clear();
}

/**
 * Get cache stats for debugging
 */
export function getCacheStats() {
  const now = Date.now();
  const entries = [];
  for (const [url, entry] of cache.entries()) {
    entries.push({
      url,
      valid: now < entry.expiresAt,
      expiresIn: Math.max(0, Math.round((entry.expiresAt - now) / 1000)) + 's',
    });
  }
  return entries;
}
