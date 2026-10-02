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

export default {
  safeNumber,
  formatUSD,
  formatFC,
  formatDualCurrency,
  formatCustomerName,
  formatSupplierName,
  formatEmployeeName
};
