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
    default: "Khaira.co | The Growth System for Consulting Firms",
    template: "%s | Khaira.co",
  },
  description: site.description,
  keywords: [
    "growth system for consulting firms",
    "B2B lead generation for consultants",
    "CRM automation for professional services",
    "AI agents for consulting firms",
    "sales automation for consulting firms",
    "lead conversion systems",
    "enquiry to meeting system",
    "HubSpot automation agency",
    "Pipedrive automation",
    "n8n workflow automation",
    "AI workflow agency",
    "conversion website for consultants",
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
    title: "Khaira.co | The Growth System for Consulting Firms",
    description:
      "Capture more qualified enquiries, automate follow-up with AI, and turn interest into booked meetings. Built on HubSpot, Pipedrive, n8n, OpenAI and Next.js.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khaira.co | The Growth System for Consulting Firms",
    description:
      "Capture more qualified enquiries, automate follow-up with AI, and turn interest into booked meetings. Built for consulting and professional service firms.",
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
        "B2B lead generation for consulting firms",
        "CRM automation",
        "Sales automation",
        "HubSpot automation",
        "Pipedrive automation",
        "n8n workflow automation",
        "AI agent integration",
        "OpenAI integration",
        "Anthropic Claude integration",
        "Conversion-focused web development",
        "Next.js development",
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
        "HubSpot and Pipedrive automation",
        "n8n workflow automation",
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
