import { useState, useEffect } from 'react';

/**
 * Checks if the current environment is running on a mobile viewport or native platform.
 * Supports:
 * - Native Capacitor runtime (Android / iOS)
 * - Explicit query parameter for browser testing (?mobile=true)
 * - Viewport width (< 900px)
 * - Mobile user-agent strings
 */
export const isNativeMobile = () => {
  if (typeof window === 'undefined') return false;

  // 1. Explicit query parameter override for testing
  if (window.location && window.location.search && window.location.search.includes('mobile=true')) {
    return true;
  }

  // 2. Capacitor native runtime
  if (typeof window.Capacitor !== 'undefined' && typeof window.Capacitor.isNativePlatform === 'function') {
    if (window.Capacitor.isNativePlatform()) {
      return true;
    }
  }

  // 3. User agent mobile check
  if (typeof navigator !== 'undefined' && navigator.userAgent) {
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobileUA) {
      return true;
    }
  }

  // 4. Viewport width check (Responsive mobile breakpoint)
  if (typeof window.innerWidth === 'number' && window.innerWidth < 900) {
    return true;
  }

  return false;
};

export const isMobile = isNativeMobile;

/**
 * Reactive React hook to detect mobile viewport changes dynamically.
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
