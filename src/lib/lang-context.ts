import { createContext, useContext } from "react";
import { content, type Lang } from "./content";

export type LangCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof content)["fr"];
};

const fallback: LangCtx = {
  lang: "fr",
  setLang: () => {},
  t: content.fr,
};

export const LangContext = createContext<LangCtx>(fallback);

export function useLang() {
  return useContext(LangContext);
}

