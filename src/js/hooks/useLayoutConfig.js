import { useState, useEffect, useCallback } from 'react';
import defaultConfig from '../config/layout-config.json';

const STORAGE_KEY = 'gg-layout-config';

/**
 * useLayoutConfig
 * Manages the global layout CSS variable configuration.
 * Merges layout-config.json defaults with any user overrides persisted in localStorage.
 * Exposes config, setConfigVar, resetConfig.
 */
function useLayoutConfig() {
  const [config, setConfig] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return { ...defaultConfig, ...JSON.parse(stored) };
      }
    } catch (e) {
      // Corrupt localStorage — fall back to defaults silently
    }
    return { ...defaultConfig };
  });

  // Apply all CSS variables to :root whenever config changes
  useEffect(() => {
    Object.entries(config).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, [config]);

  // Update a single CSS variable and persist
  const setConfigVar = useCallback((key, value) => {
    setConfig(prev => {
      const next = { ...prev, [key]: value };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (e) {}
      return next;
    });
  }, []);

  // Reset all variables to factory defaults
  const resetConfig = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    setConfig({ ...defaultConfig });
  }, []);

  return { config, setConfigVar, resetConfig };
}

export default useLayoutConfig;
