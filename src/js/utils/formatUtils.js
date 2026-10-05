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
    if (trimmed.length < 50 || trimmed === 'undefined' || trimmed === 'null') return null;
    if (trimmed.startsWith('data:')) return trimmed;
    return `data:${ct};base64,${trimmed}`;
  }

  let bytes = null;
  if (Array.isArray(raw)) {
    bytes = new Uint8Array(raw);
  } else if (raw.data && (Array.isArray(raw.data) || raw.data instanceof Uint8Array)) {
    bytes = new Uint8Array(raw.data);
  } else if (raw instanceof Uint8Array) {
    bytes = raw;
  }

  if (!bytes || bytes.length === 0) return null;

  let text = '';
  try {
    if (typeof TextDecoder !== 'undefined') {
      text = new TextDecoder('utf-8').decode(bytes);
    } else {
      let binary = '';
      const len = Math.min(bytes.byteLength, 1000);
      for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      text = binary;
    }
  } catch (e) {
    text = '';
  }

  if (text.startsWith('data:')) {
    return text.trim();
  }
  if (text.startsWith('iVBOR') || text.startsWith('/9j/') || text.startsWith('R0lGOD') || text.startsWith('UklGR')) {
    return `data:${ct};base64,${text.trim()}`;
  }

  // Check if true raw binary (PNG / JPEG magic bytes or general binary)
  try {
    let binary = '';
    const len = bytes.byteLength;
    const chunkSize = 8192;
    for (let i = 0; i < len; i += chunkSize) {
      binary += String.fromCharCode.apply(null, bytes.subarray(i, Math.min(i + chunkSize, len)));
    }
    const b64 = typeof window !== 'undefined' && window.btoa ? window.btoa(binary) : (typeof Buffer !== 'undefined' ? Buffer.from(bytes).toString('base64') : '');
    return b64 ? `data:${ct};base64,${b64}` : null;
  } catch (err) {
    return null;
  }
};

export default {
  safeNumber,
  formatUSD,
  formatFC,
  formatDualCurrency,
  formatCustomerName,
  formatSupplierName,
  formatEmployeeName,
  normalizeImageDataUrl
};
