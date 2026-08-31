import { useEffect, useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { useActiveSection } from "@/lib/lang-hooks";
import { sectionIds } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t, lang, setLang } = useLang();
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "sectors", label: t.nav.sectors },
    { id: "watch", label: t.nav.watch },
    { id: "stats", label: t.nav.stats },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto w-[min(1180px,94%)]">
        <nav
          aria-label="Main"
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5",
            scrolled ? "glass shadow-[0_10px_40px_-24px_rgba(0,0,0,0.9)]" : "border border-transparent",
          )}
        >
          <a href="#home" className="group flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-[image:var(--gradient-accent)] text-primary-foreground">
              <ShieldCheck className="size-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              SEQ<span className="text-gradient">ASO</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={active === l.id ? "true" : undefined}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                    active === l.id && "text-foreground",
                  )}
                >
                  {l.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-[image:var(--gradient-accent)] transition-transform duration-300",
                      active === l.id && "scale-x-100",
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div
              role="group"
              aria-label="Language"
              className="flex items-center rounded-full border border-border bg-secondary/40 p-0.5 text-xs font-semibold"
            >
              {(["fr", "en"] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={cn(
                    "rounded-full px-2.5 py-1 uppercase transition-colors",
                    lang === l
                      ? "bg-[image:var(--gradient-accent)] text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {l}
                </button>
              ))}
            </div>

            <a
              href="#contact"
              className="hidden rounded-full bg-[image:var(--gradient-accent)] px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-12px_var(--primary)] transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              {t.nav.cta}
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Menu"
              className="grid size-9 place-items-center rounded-lg border border-border text-foreground lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <ul className="glass mt-2 space-y-1 rounded-2xl p-3 lg:hidden">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-secondary/60",
                    active === l.id ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
