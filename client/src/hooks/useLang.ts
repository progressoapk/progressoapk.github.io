import { useEffect, useState } from "react";
import { LANG_STORAGE_KEY, translations, type Lang, type Translations } from "@/lib/translations";

export function useLang(): [Lang, (lang: Lang) => void, Translations] {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "pt";
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    return stored === "en" || stored === "pt" ? stored : "pt";
  });

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-PT" : "en";
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      /* ignore storage errors (e.g. private browsing) */
    }
  }, [lang]);

  return [lang, setLang, translations[lang]];
}

export function usePageMeta(title: string, description: string, ogLocale: string) {
  useEffect(() => {
    document.title = title;
    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:locale"]', "content", ogLocale);
  }, [title, description, ogLocale]);
}
