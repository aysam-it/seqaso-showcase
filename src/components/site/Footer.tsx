import { Linkedin, Mail, Phone, ShieldCheck, Twitter } from "lucide-react";
import { useLang } from "@/lib/lang";
import { contactDetails } from "@/lib/content";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  const links = [
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "sectors", label: t.nav.sectors },
    { id: "watch", label: t.nav.watch },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <footer className="relative border-t border-border py-14">
      <div className="mx-auto grid w-[min(1180px,92%)] gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-[image:var(--gradient-accent)] text-primary-foreground">
              <ShieldCheck className="size-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-bold">
              SEQ<span className="text-gradient">ASO</span>
            </span>
          </a>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">{t.footer.tagline}</p>
          <div className="mt-5 flex gap-2">
            {[Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#contact"
                aria-label={i === 0 ? "LinkedIn" : "X"}
                className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-sm font-semibold">{t.footer.nav}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="text-muted-foreground transition-colors hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold">{t.footer.contact}</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-primary" aria-hidden="true" />
              <a href={`mailto:${contactDetails.email}`} className="hover:text-primary">
                {contactDetails.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-primary" aria-hidden="true" />
              {contactDetails.phone}
            </li>
            <li>{t.contact.address}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-[min(1180px,92%)] flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
        <p>© {year} SEQASO. {t.footer.rights}</p>
        <div className="flex gap-5">
          <a href="#home" className="hover:text-primary">{t.footer.legal}</a>
          <a href="#home" className="hover:text-primary">{t.footer.privacy}</a>
        </div>
      </div>
    </footer>
  );
}
