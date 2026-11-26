export const site = {
  name: "Khaira.co",
  shortName: "Khaira",
  tagline: "The growth system for consulting firms",
  description:
    "Khaira.co builds the growth system for consulting firms: AI-assisted enquiry capture, CRM automation, follow-up and booking. Turn more interest into booked meetings.",
  url: "https://khairaco.space",
  positioning:
    "We build the growth system that turns interest into booked meetings.",
  location: "United Kingdom & Europe",
  contact: {
    email: "grow@khairaco.space",
    infoEmail: "info@khairaco.space",
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
