import { useEffect, useRef, useState } from "react";
import {
  Award,
  Bot,
  Brain,
  Building2,
  Cloud,
  Code2,
  Cpu,
  Database,
  Factory,
  HeartPulse,
  Landmark,
  Lightbulb,
  Lock,
  Radio,
  ShieldCheck,
  ShoppingCart,
  TestTube2,
  Workflow,
} from "lucide-react";
import { useLang } from "@/lib/lang";

function SectionHeader({
  kicker,
  title,
  subtitle,
  center = true,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="reveal inline-block rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-semibold tracking-widest text-primary uppercase">
        {kicker}
      </span>
      <h2 className="reveal mt-4 text-3xl font-bold sm:text-4xl [transition-delay:60ms]">{title}</h2>
      {subtitle && (
        <p className="reveal mt-3 text-muted-foreground [transition-delay:120ms]">{subtitle}</p>
      )}
    </div>
  );
}

export function About() {
  const { t } = useLang();
  const pillarIcons = [Award, ShieldCheck, Lock, Lightbulb];

  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto w-[min(1180px,92%)]">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader kicker={t.about.kicker} title={t.about.title} />
          <p className="reveal mt-6 text-muted-foreground [transition-delay:140ms]">{t.about.body}</p>
          <p className="reveal mt-4 text-muted-foreground [transition-delay:180ms]">{t.about.body2}</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 text-left">
            {t.about.pillars.map((p, i) => {
              const Icon = pillarIcons[i] ?? Award;
              return (
                <div
                  key={p.title}
                  className="reveal card-glow rounded-2xl border border-border bg-card/50 p-5"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <Icon className="size-5 text-primary" aria-hidden="true" />
                  <h3 className="mt-3 font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const { t } = useLang();
  const icons = [Code2, TestTube2, Bot, ShieldCheck, Cloud, Database];

  return (
    <section id="services" className="relative scroll-mt-24 py-16 sm:py-20">
      <div className="orb size-[26rem] top-20 left-1/2 -translate-x-1/2 bg-primary/12" aria-hidden="true" />
      <div className="relative mx-auto w-[min(1180px,92%)]">
        <SectionHeader kicker={t.services.kicker} title={t.services.title} subtitle={t.services.subtitle} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => {
            const Icon = icons[i] ?? Code2;
            return (
              <article
                key={s.title}
                className="reveal card-glow group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6"
                style={{ transitionDelay: `${(i % 3) * 90}ms` }}
              >
                <div className="absolute inset-x-0 -top-px h-px bg-[image:var(--gradient-accent)] opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="grid size-12 place-items-center rounded-xl border border-border bg-secondary/40 text-primary transition-colors group-hover:bg-[image:var(--gradient-accent)] group-hover:text-primary-foreground">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Sectors() {
  const { t } = useLang();
  const icons = [Landmark, HeartPulse, Radio, Factory, Building2, ShoppingCart];

  return (
    <section id="sectors" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto w-[min(1180px,92%)]">
        <SectionHeader kicker={t.sectors.kicker} title={t.sectors.title} subtitle={t.sectors.subtitle} />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.sectors.items.map((s, i) => {
            const Icon = icons[i] ?? Code2;
            return (
              <div
                key={s.title}
                className="reveal card-glow flex gap-4 rounded-2xl border border-border bg-secondary/20 p-5"
                style={{ transitionDelay: `${(i % 3) * 90}ms` }}
              >
                <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-accent)] text-primary-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function TechWatch() {
  const { t } = useLang();
  const icons = [Brain, Lock, Cpu];

  return (
    <section id="watch" className="relative scroll-mt-24 py-16 sm:py-20">
      <div className="orb size-[24rem] -right-20 top-10 bg-violet/18" aria-hidden="true" />
      <div className="relative mx-auto w-[min(1180px,92%)]">
        <SectionHeader kicker={t.watch.kicker} title={t.watch.title} subtitle={t.watch.subtitle} />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {t.watch.items.map((w, i) => {
            const Icon = icons[i] ?? Code2;
            return (
              <article
                key={w.title}
                className="reveal card-glow flex flex-col rounded-3xl border border-border bg-card/50 p-7"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium text-primary">
                  <Icon className="size-3.5" aria-hidden="true" />
                  {w.tag}
                </span>
                <h3 className="mt-5 text-xl font-semibold">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        io.disconnect();
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="text-gradient text-4xl font-bold sm:text-5xl">
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  const { t } = useLang();
  return (
    <section id="stats" className="relative scroll-mt-24 py-12 sm:py-16">
      <div className="mx-auto w-[min(1180px,92%)]">
        <div className="glass reveal rounded-3xl px-6 py-12 sm:px-12">
          <div className="mx-auto max-w-xl text-center">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              {t.stats.kicker}
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t.stats.title}</h2>
          </div>
          <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.stats.items.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <Counter value={s.value} suffix={s.suffix} />
                  <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
