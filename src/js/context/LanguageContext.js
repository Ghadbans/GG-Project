import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import { translations, SUPPORTED_LANGUAGES } from '../locales';
import { ENDPOINT_URL } from '../apiConfig';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem('gg_language');
      if (saved && translations[saved]) {
        return saved;
      }
    } catch (e) {
      // localStorage may fail in restricted iframes
    }
    return 'en';
  });

  // Apply text direction for RTL languages like Arabic if needed
  useEffect(() => {
    try {
      const langConfig = SUPPORTED_LANGUAGES.find(l => l.code === lang);
      const isRTL = langConfig?.dir === 'rtl';
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;
    } catch (e) {
      console.warn('Failed to set document direction:', e);
    }
  }, [lang]);

  const setLanguage = useCallback(async (newLang) => {
    if (!translations[newLang]) {
      console.warn(`Unsupported language requested: ${newLang}`);
      return;
    }
    setLangState(newLang);
    try {
      localStorage.setItem('gg_language', newLang);
    } catch (e) {}

    // Persist to user profile in backend if logged in
    try {
      const userId = localStorage.getItem('user');
      const employeeName = localStorage.getItem('currentUserName');
      if (userId || employeeName) {
        await axios.put(`${ENDPOINT_URL}/update-user-language`, {
          userId: userId || undefined,
          employeeName: employeeName || undefined,
          language: newLang
        });
      }
    } catch (err) {
      // Non-blocking: language preference is already persisted in localStorage
      console.warn('Failed to sync language to backend user profile:', err?.message);
    }
  }, []);

  /**
   * Translate a dotted key path.
   * e.g. t('common.save', 'Save')
   * If translation not found, falls back to English, then to provided fallback string, then key itself.
   */
  const t = useCallback((path, fallback = '', params = null) => {
    if (!path) return fallback || '';

    const getNested = (obj, keyPath) => {
      if (!obj || typeof obj !== 'object') return null;
      const keys = keyPath.split('.');
      let current = obj;
      for (const k of keys) {
        if (current && typeof current === 'object' && k in current) {
          current = current[k];
        } else {
          return null;
        }
      }
      return typeof current === 'string' ? current : null;
    };

    // 1. Look up in active language
    let text = getNested(translations[lang], path);

    // 2. Fall back to English
    if (!text && lang !== 'en') {
      text = getNested(translations['en'], path);
    }

    // 3. Fall back to provided fallback or path
    if (!text) {
      text = fallback || path;
    }

    // Replace params if supplied (e.g. {count: 5} replaces "{count}")
    if (params && typeof params === 'object') {
      Object.keys(params).forEach((paramKey) => {
        text = text.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), params[paramKey]);
      });
    }

    return text;
  }, [lang]);

  const currentLangInfo = useMemo(() => {
    return SUPPORTED_LANGUAGES.find(l => l.code === lang) || SUPPORTED_LANGUAGES[0];
  }, [lang]);

  const contextValue = useMemo(() => ({
    lang,
    setLanguage,
    t,
    currentLangInfo,
    supportedLanguages: SUPPORTED_LANGUAGES
  }), [lang, setLanguage, t, currentLangInfo]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    // Fail-safe fallback if hook is called outside provider
    return {
      lang: 'en',
      setLanguage: () => {},
      t: (path, fallback = '') => fallback || path,
      currentLangInfo: SUPPORTED_LANGUAGES[0],
      supportedLanguages: SUPPORTED_LANGUAGES
    };
  }
  return context;
};

export default LanguageContext;
