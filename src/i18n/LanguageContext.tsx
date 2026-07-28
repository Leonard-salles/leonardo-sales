import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Language, Translation } from './types';
import { pt } from './pt';
import { en } from './en';
import { ScrollTrigger } from '../animations/gsapConfig';

const dictionaries: Record<Language, Translation> = { pt, en };

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'lang';

function getInitialLanguage(): Language {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'pt' || stored === 'en') return stored;
  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language === 'pt' ? 'pt-br' : 'en';
    // PT/EN copy lengths differ, which shifts section heights after translated
    // text re-renders — refresh ScrollTrigger positions once the DOM settles.
    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(raf);
  }, [language]);

  const setLanguage = (next: Language) => setLanguageState(next);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: dictionaries[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
