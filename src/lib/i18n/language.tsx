"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Lang } from "./translations";
import { translations } from "./translations";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
  defaultLang = "pt"
}: {
  children: React.ReactNode;
  defaultLang?: Lang;
}) {
  const [lang, setLang] = useState<Lang>(defaultLang);

  useEffect(() => {
    const stored = window.localStorage.getItem("language");
    if (stored === "pt" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("language", lang);
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((prev) => (prev === "pt" ? "en" : "pt"))
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage deve ser usado dentro de <LanguageProvider>.");
  }
  return ctx;
}

export function useT() {
  const { lang } = useLanguage();
  return useMemo(() => translations[lang], [lang]);
}

