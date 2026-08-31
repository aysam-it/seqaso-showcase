import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { useLang } from "@/lib/lang-context";

export function Contact() {
  const { t } = useLang();
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    window.setTimeout(() => {
      setSending(false);
      toast.success(t.contact.form.success);
      form.reset();
    }, 700);
  };

  const field =
    "w-full rounded-xl border border-input bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/40";

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="orb size-[28rem] -left-24 bottom-0 bg-primary/15" aria-hidden="true" />
      <div className="relative mx-auto w-[min(1180px,92%)]">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal inline-block rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-semibold tracking-widest text-primary uppercase">
            {t.contact.kicker}
          </span>
          <h2 className="reveal mt-4 text-3xl font-bold sm:text-4xl [transition-delay:60ms]">
            {t.contact.title}
          </h2>
          <p className="reveal mt-3 text-muted-foreground [transition-delay:120ms]">
            {t.contact.subtitle}
          </p>
        </div>

        <form onSubmit={onSubmit} className="reveal mx-auto mt-10 max-w-2xl glass rounded-3xl p-6 sm:p-8 [transition-delay:120ms]">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                {t.contact.form.name}
              </label>
              <input id="name" name="name" required placeholder={t.contact.form.namePh} className={field} />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                {t.contact.form.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t.contact.form.emailPh}
                className={field}
              />
            </div>
            <div>
              <label htmlFor="company" className="mb-1.5 block text-sm font-medium">
                {t.contact.form.company}
              </label>
              <input id="company" name="company" placeholder={t.contact.form.companyPh} className={field} />
            </div>
            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
                {t.contact.form.subject}
              </label>
              <input id="subject" name="subject" placeholder={t.contact.form.subjectPh} className={field} />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
              {t.contact.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder={t.contact.form.messagePh}
              className={field}
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_14px_40px_-16px_var(--primary)] transition-transform hover:scale-[1.02] disabled:opacity-70"
          >
            <Send className="size-4" aria-hidden="true" />
            {t.contact.form.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
