import { useState, useEffect } from 'react';

/**
 * Checks if the current environment is running as a Mobile Application.
 * Mobile layout is strictly isolated to:
 * - Native Capacitor runtime (Android / iOS native app)
 * - Real mobile handheld devices (smartphones/tablets via user-agent)
 * - Explicit URL query parameter override for mobile testing/preview (?mobile=true)
 * 
 * Desktop Application (.exe / Electron) and Webversion on desktop/laptops will
 * NEVER switch to mobile layout when resizing or minimizing windows.
 */
export const isNativeMobile = () => {
  if (typeof window === 'undefined') return false;

  // 1. Electron Desktop App check (.exe) - ALWAYS desktop layout
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.includes('Electron')) {
    return false;
  }

  // 2. Explicit query parameter override for testing/debugging in browser
  if (typeof window.location !== 'undefined' && window.location.search && window.location.search.includes('mobile=true')) {
    return true;
  }

  // 3. Capacitor native runtime (iOS / Android App)
  if (typeof window.Capacitor !== 'undefined' && typeof window.Capacitor.isNativePlatform === 'function') {
    if (window.Capacitor.isNativePlatform()) {
      return true;
    }
  }

  // 4. Mobile handheld devices (Smartphones / Tablets only)
  if (typeof navigator !== 'undefined' && navigator.userAgent) {
    const isMobileDevice = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobileDevice) {
      return true;
    }
  }

  // On desktop browsers and Electron, always return false
  return false;
};

export const isMobile = isNativeMobile;

/**
 * Reactive React hook to detect mobile environment dynamically.
 */
export const useIsMobile = () => {
  const [mobile, setMobile] = useState(() => isNativeMobile());

  useEffect(() => {
    const handleResize = () => {
      setMobile(isNativeMobile());
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return mobile;
};

export default isNativeMobile;
