const mongoose = require('mongoose');

const HEX_24_REGEX = /^[a-fA-F0-9]{24}$/;

/**
 * Checks whether a value is a valid 24-character MongoDB ObjectId (rejecting 'null', 'undefined', '').
 */
function isValidObjectId(val) {
  if (val === null || val === undefined) return false;
  if (val instanceof mongoose.Types.ObjectId) return true;
  const s = String(val).trim();
  if (!s || s.toLowerCase() === 'null' || s.toLowerCase() === 'undefined') return false;
  return HEX_24_REGEX.test(s) && mongoose.Types.ObjectId.isValid(s);
}

/**
 * Safely converts a value to a mongoose.Types.ObjectId, or returns null if invalid.
 */
function toSafeObjectId(val) {
  if (!isValidObjectId(val)) return null;
  if (val instanceof mongoose.Types.ObjectId) return val;
  return new mongoose.Types.ObjectId(String(val).trim());
}

/**
 * Sanitizes a raw comma-separated string or array of IDs.
 * Strips empty strings, 'null', and 'undefined'.
 * Returns:
 *   - rawStrings: valid non-null string tokens
 *   - objectIds: strictly valid mongoose.Types.ObjectId instances (safe for _id: { $in: ... })
 *   - allIds: rawStrings + objectIds (safe for Mixed / String reference fields)
 */
function parseSafeIdList(raw) {
  if (!raw) return { rawStrings: [], objectIds: [], allIds: [] };
  const items = Array.isArray(raw) ? raw : String(raw).split(',');
  const rawStrings = [];
  const objectIds = [];
  const seenStr = new Set();

  for (const item of items) {
    if (item === null || item === undefined) continue;
    const s = String(item).trim();
    if (!s || s.toLowerCase() === 'null' || s.toLowerCase() === 'undefined') continue;
    if (!seenStr.has(s)) {
      seenStr.add(s);
      rawStrings.push(s);
      const oid = toSafeObjectId(s);
      if (oid) objectIds.push(oid);
    }
  }

  return {
    rawStrings,
    objectIds,
    allIds: [...rawStrings, ...objectIds]
  };
}

/**
 * Sanitizes a single string parameter (rejecting 'null', 'undefined', '').
 */
function cleanParamString(val) {
  if (val === null || val === undefined) return '';
  const s = String(val).trim();
  if (!s || s.toLowerCase() === 'null' || s.toLowerCase() === 'undefined') return '';
  return s;
}

module.exports = {
  isValidObjectId,
  toSafeObjectId,
  parseSafeIdList,
  cleanParamString
};
