export const site = {
  name: "Khaira.co",
  shortName: "Khaira",
  tagline: "B2B growth & intelligent automation",
  description:
    "Khaira.co helps consulting firms and professional service businesses capture more enquiries, automate follow-up and build smarter systems for sustainable growth.",
  url: "https://khaira-co.eu",
  positioning:
    "We build systems that turn business opportunities into measurable growth.",
  location: "United Kingdom & Europe",
  // PLACEHOLDER — confirm these details with the client before launch.
  contact: {
    email: "hello@khaira-co.eu",
    emailVerified: false,
    linkedin: "https://www.linkedin.com/company/khaira-co",
    linkedinVerified: false,
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Solutions", href: "/solutions" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "About", href: "/about" },
  ],
  footerNav: [
    { label: "Services", href: "/services" },
    { label: "Solutions", href: "/solutions" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legalNav: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
} as const;

export const enquiryInterests = [
  "Enquiry-to-Meeting System",
  "Lead Generation & ICP Targeting",
  "CRM & Sales Automation",
  "AI Integration & Intelligent Workflows",
  "Conversion-Focused Websites",
  "Digital Growth Strategy",
  "Custom Business Applications",
  "Not sure yet",
] as const;

export type EnquiryInterest = (typeof enquiryInterests)[number];
