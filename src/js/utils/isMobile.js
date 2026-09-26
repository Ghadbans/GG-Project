import { useState, useEffect } from 'react';

/**
 * Checks if the current environment is running inside the standalone Capacitor Mobile App.
 * 
 * STRICT ARCHITECTURE RULE:
 * 1. Desktop Application (.exe / Electron): ALWAYS returns false (Desktop layout).
 * 2. Web Application (ANY web browser on PC, Mac, Laptop, iPhone, Android phone, iPad, Tablet, etc.):
 *    ALWAYS returns false (Desktop layout).
 * 3. Capacitor Native Mobile App ONLY: Returns true ONLY when running inside the native
 *    Capacitor runtime wrapper (window.Capacitor.isNativePlatform() === true).
 * 4. Development / Debugging override: Explicit query parameter (?mobile=true) for testing only.
 */
export const isNativeMobile = () => {
  if (typeof window === 'undefined') return false;

  // 1. Electron Desktop App check (.exe) - ALWAYS desktop layout
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.includes('Electron')) {
    return false;
  }

  // 2. Explicit query parameter override for testing/debugging in browser (?mobile=true)
  if (typeof window.location !== 'undefined' && window.location.search && window.location.search.includes('mobile=true')) {
    return true;
  }

  // 3. Capacitor native runtime (iOS / Android Native App ONLY)
  if (typeof window.Capacitor !== 'undefined' && typeof window.Capacitor.isNativePlatform === 'function') {
    try {
      if (window.Capacitor.isNativePlatform()) {
        return true;
      }
    } catch (e) {
      return false;
    }
  }

  // All web browsers (Mobile Chrome, Safari on iPhone, Android browser, PC, laptop, tablets)
  // MUST ALWAYS render the standard, complete Desktop theme and layout.
  return false;
};

export const isMobile = isNativeMobile;

/**
 * Reactive React hook to detect mobile environment dynamically.
 */
export const useIsMobile = () => {
  const [mobile, setMobile] = useState(() => isNativeMobile());

  useEffect(() => {
    const handleCheck = () => {
      setMobile(isNativeMobile());
    };

    window.addEventListener('resize', handleCheck);
    window.addEventListener('orientationchange', handleCheck);

    return () => {
      window.removeEventListener('resize', handleCheck);
      window.removeEventListener('orientationchange', handleCheck);
    };
  }, []);

  return mobile;
};

export default isNativeMobile;

