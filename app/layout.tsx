import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import SmoothScroll from "@/components/smooth-scroll";
import ScrollProgress from "@/components/scroll-progress";
import { CursorEffect } from "@/components/cursor-effect";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Khaira.co — B2B Growth & Automation Agency",
    template: "%s | Khaira.co",
  },
  description:
    "Khaira.co helps consulting firms and professional service businesses generate more qualified enquiries, automate follow-up and convert more opportunities into revenue.",
  keywords: [
    "B2B lead generation agency",
    "CRM automation services",
    "business process automation",
    "AI automation agency",
    "sales automation for consulting firms",
    "lead conversion systems",
    "growth agency for consultants",
    "enquiry to meeting system",
  ],
  authors: [{ name: "Khaira.co", url: site.url }],
  creator: "Khaira.co",
  publisher: "Khaira.co",
  category: "Business",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: "Khaira.co",
    title: "Khaira.co — B2B Growth & Automation Agency",
    description:
      "We build systems that turn business opportunities into measurable growth. Lead generation, CRM automation, AI workflows and conversion-focused websites for consulting firms.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khaira.co — B2B Growth & Automation Agency",
    description:
      "We build systems that turn business opportunities into measurable growth. For consulting firms and professional service businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a7a56",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      description: site.description,
      areaServed: ["United Kingdom", "Europe"],
      knowsAbout: [
        "B2B lead generation",
        "CRM automation",
        "Sales automation",
        "AI workflow integration",
        "Conversion-focused web development",
        "Digital growth strategy",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en-GB",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#service`,
      name: site.name,
      url: site.url,
      description: site.description,
      areaServed: ["United Kingdom", "Europe"],
      serviceType: [
        "B2B lead generation",
        "CRM and sales automation",
        "AI integration",
        "Conversion-focused websites",
        "Digital growth strategy",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${manrope.variable}`}>
      <body className="bg-bg font-sans text-ink antialiased">
        <span id="top" aria-hidden="true" />
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        <ScrollProgress />
        <CursorEffect />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="relative">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
