import { useEffect, useState, type ReactNode } from "react";
import { content, type Lang } from "./content";
import { LangContext } from "./lang-context";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const stored = window.localStorage.getItem("seqaso-lang");
    if (stored === "en" || stored === "fr") setLang(stored);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("seqaso-lang", lang);
    document.documentElement.lang = lang;
    const meta = content[lang].meta;
    document.title = meta.title;
    const set = (sel: string, attr: string, val: string) => {
      let el = document.querySelector<HTMLMetaElement>(sel);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr.startsWith("og:") ? "property" : "name", attr);
        document.head.appendChild(el);
      }
      el.setAttribute("content", val);
    };
    set('meta[name="description"]', "description", meta.description);
    set('meta[property="og:title"]', "og:title", meta.title);
    set('meta[property="og:description"]', "og:description", meta.description);
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: content[lang] as (typeof content)["fr"] }}>
      {children}
    </LangContext.Provider>
  );
}
