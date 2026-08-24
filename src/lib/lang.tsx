import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { content, type Lang } from "./content";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (typeof content)["fr"] };

const LangContext = createContext<Ctx | null>(null);

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

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}

/** Adds `is-visible` to elements with the `reveal` class when scrolled into view. */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/** Tracks which section is currently in view. */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 140;
      let current = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);
  return active;
}
