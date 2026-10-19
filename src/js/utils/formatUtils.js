/**
 * Global Gate Enterprise Defensive Formatting & Extraction Utility
 * Provides null-safe numerical and entity formatting across Desktop, Web, and Mobile.
 */

export const safeNumber = (val, fallback = 0) => {
  if (val === null || val === undefined || val === '') return fallback;
  const num = typeof val === 'number' ? val : parseFloat(String(val).replace(/,/g, ''));
  return isNaN(num) ? fallback : num;
};

export const formatUSD = (val, decimals = 2) => {
  const num = safeNumber(val);
  return '$ ' + num.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatFC = (val, decimals = 2) => {
  const num = safeNumber(val);
  return 'FC ' + num.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatDualCurrency = (fcVal, usdVal, rate = 1) => {
  const fc = safeNumber(fcVal);
  const usd = safeNumber(usdVal);
  const r = safeNumber(rate, 1);
  if (fc > 0 && usd > 0) {
    return `${formatFC(fc)} & ${formatUSD(usd)}`;
  } else if (fc > 0) {
    return `${formatFC(fc)} (${formatUSD(fc / r)})`;
  } else if (usd > 0) {
    return `${formatUSD(usd)} (${formatFC(usd * r)})`;
  }
  return '$ 0.00';
};

export const formatCustomerName = (c) => {
  if (!c) return '';
  if (typeof c === 'string') return c.trim().toUpperCase();
  const name = c.Customer || c.customerName || c.companyName || c.customerFullName || c.name || '';
  return String(name).trim().toUpperCase();
};

export const formatSupplierName = (s) => {
  if (!s) return '';
  if (typeof s === 'string') return s.trim().toUpperCase();
  const name = s.supplierName || s.storeName || s.StoreName || s.name || '';
  return String(name).trim().toUpperCase();
};

export const formatEmployeeName = (e) => {
  if (!e) return '';
  if (typeof e === 'string') return e.trim().toUpperCase();
  const name = e.employeeName || e.name || e.person || '';
  return String(name).trim().toUpperCase();
};

export const normalizeImageDataUrl = (raw, contentType) => {
  if (!raw) return null;
  const ct = contentType || 'image/jpeg';
  if (typeof raw === 'string') {
    const trimmed = raw.trim();
    if (trimmed.length < 10 || trimmed === 'undefined' || trimmed === 'null') return null;
    if (trimmed.startsWith('data:')) return trimmed;
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed;
    return `data:${ct};base64,${trimmed}`;
  }

  let bytes = null;
  if (Array.isArray(raw)) {
    bytes = new Uint8Array(raw);
  } else if (raw.data && (Array.isArray(raw.data) || raw.data instanceof Uint8Array)) {
    bytes = new Uint8Array(raw.data);
  } else if (raw instanceof Uint8Array) {
    bytes = raw;
  } else if (raw.buffer && raw.buffer instanceof ArrayBuffer) {
    bytes = new Uint8Array(raw.buffer);
  }

  if (!bytes || bytes.length === 0) return null;

  // Auto-detect MIME type from magic bytes if possible
  let detectedType = ct;
  if (bytes.length >= 4) {
    if (bytes[0] === 0xFF && bytes[1] === 0xD8 && bytes[2] === 0xFF) {
      detectedType = 'image/jpeg';
    } else if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4E && bytes[3] === 0x47) {
      detectedType = 'image/png';
    } else if (bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46) {
      detectedType = 'image/gif';
    } else if (bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46) {
      detectedType = 'image/webp';
    }
  }

  // Quick ASCII header check (avoid full UTF-8 decoding on large binary buffers)
  let asciiHead = '';
  const headLen = Math.min(bytes.length, 32);
  for (let i = 0; i < headLen; i++) {
    asciiHead += String.fromCharCode(bytes[i]);
  }

  if (asciiHead.startsWith('data:')) {
    try {
      const fullStr = new TextDecoder('utf-8').decode(bytes);
      return fullStr.trim();
    } catch (e) {}
  } else if (
    asciiHead.startsWith('iVBOR') ||
    asciiHead.startsWith('/9j/') ||
    asciiHead.startsWith('R0lGOD') ||
    asciiHead.startsWith('UklGR')
  ) {
    try {
      const fullStr = new TextDecoder('utf-8').decode(bytes);
      return `data:${detectedType};base64,${fullStr.trim()}`;
    } catch (e) {}
  }

  // Robust, stack-safe binary to base64 conversion (1024 chunk size works on all Android WebViews)
  try {
    let binary = '';
    const len = bytes.byteLength || bytes.length;
    const chunkSize = 1024;
    for (let i = 0; i < len; i += chunkSize) {
      const sub = bytes.subarray ? bytes.subarray(i, Math.min(i + chunkSize, len)) : bytes.slice(i, Math.min(i + chunkSize, len));
      binary += String.fromCharCode.apply(null, sub);
    }
    const b64 = typeof window !== 'undefined' && window.btoa ? window.btoa(binary) : (typeof Buffer !== 'undefined' ? Buffer.from(bytes).toString('base64') : '');
    return b64 ? `data:${detectedType};base64,${b64}` : null;
  } catch (err) {
    console.error('Error converting image binary:', err);
    return null;
  }
};

/**
 * Defensive Purchase Reason / Project / Description formatter
 * Handles all permutations of projectName (string, object with name/projectName/_id, empty object {}, null, undefined)
 * and falls back cleanly to description and reason so item purchase reasons never disappear.
 */
export const formatPurchaseReasonDisplay = (purchase, projects = []) => {
  if (!purchase) return '';
  const proj = purchase.projectName;
  let projName = typeof proj === 'object' && proj !== null
    ? (proj.projectName || proj.name || '')
    : (proj || '');

  if (!projName && proj && typeof proj === 'object' && proj._id && Array.isArray(projects) && projects.length > 0) {
    const foundProj = projects.find(p => p._id === proj._id);
    if (foundProj) {
      const pNum = foundProj.projectNumber !== undefined ? `P-${String(foundProj.projectNumber).padStart(6, '0')}` : '';
      const client = foundProj.customerName?.customerName || '';
      const pTitle = foundProj.projectName || '';
      projName = pNum ? (client ? `${pNum} / ${client} - ${pTitle}` : `${pNum} / ${pTitle}`) : pTitle;
    }
  }

  if (projName && String(projName).trim() !== '') {
    return String(projName).trim();
  }
  if (purchase.description && String(purchase.description).trim() !== '') {
    return String(purchase.description).trim();
  }
  if (purchase.reason && String(purchase.reason).trim() !== '') {
    return String(purchase.reason).trim();
  }
  return '';
};

export const getPurchaseReasonDisplay = formatPurchaseReasonDisplay;

/**
 * Universal Defensive String Coercion
 * Safely converts any value (strings, numbers, null, undefined, or nested objects) into a renderable React string.
 */
export const safeString = (val, fallback = '') => {
  if (val === null || val === undefined) return fallback;
  if (typeof val === 'string') return val;
  if (typeof val === 'number' || typeof val === 'boolean') return String(val);
  if (typeof val === 'object') {
    return val.projectName || val.name || val.Customer || val.customerName || val.employeeName || val.storeName || fallback;
  }
  return String(val);
};

export default {
  safeNumber,
  formatUSD,
  formatFC,
  formatDualCurrency,
  formatCustomerName,
  formatSupplierName,
  formatEmployeeName,
  normalizeImageDataUrl,
  formatPurchaseReasonDisplay,
  getPurchaseReasonDisplay,
  safeString
};

