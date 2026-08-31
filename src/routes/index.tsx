import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { LangProvider } from "@/lib/lang";
import { useReveal } from "@/lib/lang-hooks";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About, Sectors, Services, Stats, TechWatch } from "@/components/site/Sections";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "SEQASO — Ingénierie logicielle, QA & solutions digitales";
const description =
  "SEQASO accompagne les entreprises dans l'ingénierie logicielle, l'assurance qualité, l'automatisation des tests, la cybersécurité et la transformation digitale.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "SEQASO",
          description,
          email: "contact@seqaso.com",
          telephone: "+33 1 84 80 00 12",
          address: {
            "@type": "PostalAddress",
            streetAddress: "12 rue de l'Innovation",
            postalCode: "75011",
            addressLocality: "Paris",
            addressCountry: "FR",
          },
        }),
      },
    ],
  }),
});

function Page() {
  useReveal();
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Sectors />
        <TechWatch />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

function Index() {
  return (
    <LangProvider>
      <Page />
    </LangProvider>
  );
}
