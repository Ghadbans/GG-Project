/**
 * Utility to detect if running on native mobile (Capacitor iOS/Android)
 * or in explicit mobile testing mode via ?mobile=true.
 * 
 * Returns false on Desktop Electron and standard desktop web browsers,
 * ensuring desktop resizing never accidentally switches to mobile view.
 */
export const isNativeMobile = () => {
  if (typeof window === 'undefined') return false;
  if (window.location && window.location.search && window.location.search.includes('mobile=true')) {
    return true;
  }
  if (typeof window.Capacitor !== 'undefined' && typeof window.Capacitor.isNativePlatform === 'function') {
    return window.Capacitor.isNativePlatform();
  }
  return false;
};

export default isNativeMobile;
