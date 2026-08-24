import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useLang } from "@/lib/lang";

export function Hero() {
  const { t } = useLang();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_50%_35%,black,transparent_72%)]" />
      <div
        className="orb size-[38rem] -top-40 -left-32 bg-primary/25"
        aria-hidden="true"
      />
      <div
        className="orb size-[32rem] top-24 -right-24 bg-violet/25 [animation-delay:-6s]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-[min(1180px,92%)]">
        <div className="mx-auto max-w-3xl text-center">
          <span className="reveal glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
            {t.hero.badge}
          </span>

          <h1 className="reveal mt-6 text-4xl leading-[1.08] font-bold sm:text-6xl lg:text-7xl [transition-delay:80ms]">
            {t.hero.title1}
            <br />
            <span className="text-gradient">{t.hero.title2}</span>
          </h1>

          <p className="reveal mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg [transition-delay:160ms]">
            {t.hero.subtitle}
          </p>

          <div className="reveal mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row [transition-delay:240ms]">
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_14px_40px_-16px_var(--primary)] transition-transform hover:scale-[1.03] sm:w-auto"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#services"
              className="inline-flex w-full items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary/60 sm:w-auto"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <ul className="reveal mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-muted-foreground sm:text-sm [transition-delay:320ms]">
            {t.hero.badges.map((b) => (
              <li key={b} className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
