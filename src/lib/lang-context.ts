import { createContext, useContext } from "react";
import { content, type Lang } from "./content";

export type LangCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof content)["fr"];
};

export const LangContext = createContext<LangCtx | null>(null);

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
