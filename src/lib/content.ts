export type Lang = "fr" | "en";

export const content = {
  fr: {
    meta: {
      title: "SEQASO — Ingénierie logicielle, QA & solutions digitales",
      description:
        "SEQASO accompagne les entreprises dans l'ingénierie logicielle, l'assurance qualité, l'automatisation des tests, la cybersécurité et la transformation digitale.",
    },
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      sectors: "Secteurs",
      watch: "Veille tech",
      stats: "Chiffres",
      contact: "Contact",
      cta: "Nous contacter",
    },
    hero: {
      badge: "Ingénierie & qualité logicielle",
      title1: "Concevons des systèmes",
      title2: "fiables, sûrs et durables",
      subtitle:
        "SEQASO conçoit, teste et sécurise vos plateformes critiques. Une équipe d'experts au service de la performance de vos produits numériques.",
      ctaPrimary: "Démarrer un projet",
      ctaSecondary: "Découvrir nos services",
      badges: ["ISO 25010 aligné", "+120 projets livrés", "Équipes certifiées ISTQB", "Support 24/7"],
    },
    about: {
      kicker: "À propos",
      title: "Un partenaire d'ingénierie, pas un simple prestataire",
      body: "Depuis notre création, nous aidons les organisations à transformer des exigences complexes en logiciels robustes. Nos équipes pluridisciplinaires interviennent de l'architecture à la mise en production, avec une exigence constante de qualité mesurable.",
      body2:
        "Nous croyons à la transparence, à l'industrialisation des pratiques et au transfert de compétences vers vos équipes internes.",
      pillars: [
        { title: "Excellence", desc: "Des standards d'ingénierie élevés, mesurés et documentés." },
        { title: "Fiabilité", desc: "Des livraisons prévisibles et des systèmes résilients." },
        { title: "Sécurité", desc: "La protection des données intégrée dès la conception." },
        { title: "Innovation", desc: "Une veille active pour anticiper vos usages de demain." },
      ],
    },
    services: {
      kicker: "Nos services",
      title: "Trois expertises complémentaires",
      subtitle: "Un accompagnement de bout en bout, du cadrage au run.",
      items: [
        {
          title: "Développement sur mesure",
          desc: "Applications web, mobiles et back-ends conçus pour évoluer avec votre activité.",
        },
        {
          title: "Assurance qualité",
          desc: "Stratégie de test, plans de recette et pilotage qualité sur l'ensemble du cycle.",
        },
        {
          title: "Automatisation des tests",
          desc: "Frameworks d'automatisation, tests d'API, E2E et intégration continue.",
        },
      ],
    },
    sectors: {
      kicker: "Secteurs",
      title: "Une expertise sectorielle éprouvée",
      subtitle: "Nous comprenons vos contraintes métier et réglementaires.",
      items: [
        { title: "Banque & Assurance", desc: "Conformité, traçabilité et systèmes transactionnels critiques." },
        { title: "Santé", desc: "Interopérabilité, confidentialité des données et logiciels réglementés." },
        { title: "Télécoms", desc: "Plateformes à forte volumétrie et supervision temps réel." },
        { title: "Industrie", desc: "Systèmes embarqués, IoT et pilotage de la production." },
        { title: "Secteur public", desc: "Accessibilité, souveraineté et services numériques citoyens." },
        { title: "Retail & E-commerce", desc: "Parcours d'achat performants et pics de charge maîtrisés." },
      ],
    },
    watch: {
      kicker: "Veille technologique",
      title: "Ce que nous observons aujourd'hui",
      subtitle: "Nos convictions sur les tendances qui redéfinissent l'ingénierie.",
      items: [
        {
          tag: "Intelligence artificielle",
          title: "L'IA générative dans le cycle de test",
          desc: "Génération de cas de test, détection d'anomalies et priorisation des campagnes : l'IA accélère la qualité sans remplacer le jugement humain.",
        },
        {
          tag: "Sécurité",
          title: "Le DevSecOps comme standard",
          desc: "La sécurité se déplace vers la gauche du cycle : analyse statique, gestion des dépendances et contrôles automatisés à chaque commit.",
        },
        {
          tag: "Architecture",
          title: "Plateformes internes et sobriété",
          desc: "Les plateformes internes standardisent l'expérience développeur, tout en réduisant l'empreinte des infrastructures cloud.",
        },
      ],
    },
    stats: {
      kicker: "En chiffres",
      title: "Des résultats mesurables",
      items: [
        { value: 120, suffix: "+", label: "Projets livrés" },
        { value: 45, suffix: "", label: "Experts en interne" },
        { value: 98, suffix: "%", label: "Clients satisfaits" },
        { value: 12, suffix: "", label: "Années d'expérience" },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Parlons de votre projet",
      subtitle: "Réponse sous 24 heures ouvrées.",
      infoTitle: "Coordonnées",
      address: "12 rue de l'Innovation, 75011 Paris, France",
      hours: "Lundi — Vendredi, 9h00 à 18h00",
      form: {
        name: "Nom complet",
        email: "Adresse e-mail",
        company: "Entreprise",
        subject: "Sujet",
        message: "Votre message",
        submit: "Envoyer le message",
        success: "Merci ! Votre message a bien été envoyé.",
        namePh: "Marie Dupont",
        emailPh: "marie@entreprise.com",
        companyPh: "Nom de votre entreprise",
        subjectPh: "Objet de votre demande",
        messagePh: "Décrivez brièvement votre besoin…",
      },
    },
    footer: {
      tagline: "Ingénierie logicielle, qualité et sécurité pour les systèmes critiques.",
      nav: "Navigation",
      contact: "Contact",
      rights: "Tous droits réservés.",
      legal: "Mentions légales",
      privacy: "Politique de confidentialité",
    },
  },
  en: {
    meta: {
      title: "SEQASO — Software engineering, QA & digital solutions",
      description:
        "SEQASO helps companies with software engineering, quality assurance, test automation, cybersecurity and digital transformation.",
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      sectors: "Sectors",
      watch: "Tech watch",
      stats: "Numbers",
      contact: "Contact",
      cta: "Get in touch",
    },
    hero: {
      badge: "Software engineering & quality",
      title1: "Let's build systems that are",
      title2: "reliable, secure and lasting",
      subtitle:
        "SEQASO designs, tests and secures your critical platforms. A team of experts dedicated to the performance of your digital products.",
      ctaPrimary: "Start a project",
      ctaSecondary: "Explore our services",
      badges: ["ISO 25010 aligned", "120+ projects delivered", "ISTQB certified teams", "24/7 support"],
    },
    about: {
      kicker: "About",
      title: "An engineering partner, not just a vendor",
      body: "Since day one, we have helped organisations turn complex requirements into robust software. Our cross-functional teams work from architecture to production, with a constant demand for measurable quality.",
      body2:
        "We believe in transparency, industrialised practices and transferring skills back to your internal teams.",
      pillars: [
        { title: "Excellence", desc: "High engineering standards, measured and documented." },
        { title: "Reliability", desc: "Predictable delivery and resilient systems." },
        { title: "Security", desc: "Data protection built in from the very first design." },
        { title: "Innovation", desc: "Active tech watch to anticipate tomorrow's needs." },
      ],
    },
    services: {
      kicker: "Our services",
      title: "Three complementary expertises",
      subtitle: "End-to-end support, from framing to run.",
      items: [
        {
          title: "Custom development",
          desc: "Web, mobile and back-end applications designed to scale with your business.",
        },
        {
          title: "Quality assurance",
          desc: "Test strategy, acceptance plans and quality governance across the whole lifecycle.",
        },
        {
          title: "Test automation",
          desc: "Automation frameworks, API and E2E testing, continuous integration.",
        },
      ],
    },
    sectors: {
      kicker: "Sectors",
      title: "Proven industry expertise",
      subtitle: "We understand your business and regulatory constraints.",
      items: [
        { title: "Banking & Insurance", desc: "Compliance, traceability and critical transactional systems." },
        { title: "Healthcare", desc: "Interoperability, data privacy and regulated software." },
        { title: "Telecom", desc: "High-volume platforms and real-time monitoring." },
        { title: "Industry", desc: "Embedded systems, IoT and production control." },
        { title: "Public sector", desc: "Accessibility, sovereignty and citizen digital services." },
        { title: "Retail & E-commerce", desc: "High-performing journeys and controlled traffic peaks." },
      ],
    },
    watch: {
      kicker: "Tech watch",
      title: "What we are watching today",
      subtitle: "Our take on the trends reshaping engineering.",
      items: [
        {
          tag: "Artificial intelligence",
          title: "Generative AI in the testing cycle",
          desc: "Test case generation, anomaly detection and campaign prioritisation: AI accelerates quality without replacing human judgement.",
        },
        {
          tag: "Security",
          title: "DevSecOps as the standard",
          desc: "Security shifts left: static analysis, dependency management and automated checks on every commit.",
        },
        {
          tag: "Architecture",
          title: "Internal platforms and frugality",
          desc: "Internal platforms standardise developer experience while reducing the footprint of cloud infrastructure.",
        },
      ],
    },
    stats: {
      kicker: "By the numbers",
      title: "Measurable results",
      items: [
        { value: 120, suffix: "+", label: "Projects delivered" },
        { value: 45, suffix: "", label: "In-house experts" },
        { value: 98, suffix: "%", label: "Satisfied clients" },
        { value: 15, suffix: "", label: "Years of experience" },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Let's talk about your project",
      subtitle: "We reply within 24 business hours.",
      infoTitle: "Details",
      address: "12 rue de l'Innovation, 75011 Paris, France",
      hours: "Monday — Friday, 9:00 am to 6:00 pm",
      form: {
        name: "Full name",
        email: "Email address",
        company: "Company",
        subject: "Subject",
        message: "Your message",
        submit: "Send message",
        success: "Thank you! Your message has been sent.",
        namePh: "Mary Smith",
        emailPh: "mary@company.com",
        companyPh: "Your company name",
        subjectPh: "What is it about?",
        messagePh: "Briefly describe your need…",
      },
    },
    footer: {
      tagline: "Software engineering, quality and security for critical systems.",
      nav: "Navigation",
      contact: "Contact",
      rights: "All rights reserved.",
      legal: "Legal notice",
      privacy: "Privacy policy",
    },
  },
} as const;

export const contactDetails = {
  email: "contact@seqaso.com",
  phone: "+33 1 84 80 00 12",
};

export const sectionIds = [
  "home",
  "about",
  "services",
  "sectors",
  "watch",
  "stats",
  "contact",
] as const;
