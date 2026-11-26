import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaLink } from "@/components/cta-link";
import { SectionLabel } from "@/components/section-label";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for could not be found.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-mist py-24">
      <div
        aria-hidden
        className="ambient-blob -left-24 top-0 h-[28rem] w-[28rem] bg-brand/15"
      />
      <div
        aria-hidden
        className="ambient-blob -right-24 bottom-0 h-[30rem] w-[30rem] bg-brand-soft/20"
      />
      <div aria-hidden className="grid-soft absolute inset-0 opacity-60" />

      <div className="container-x relative z-10">
        <div className="max-w-2xl rounded-[1.75rem] border border-white/80 bg-white/80 p-8 shadow-[0_30px_90px_-50px_rgba(4,33,22,0.4)] backdrop-blur-xl md:p-12">
          <SectionLabel>Error 404</SectionLabel>
          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-faint">
            This page could not be found
          </p>
          <h1 className="display mt-3 text-[clamp(2.8rem,7vw,5.2rem)]">
            A wrong <span className="text-brand">turn.</span>
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted md:text-base">
            The page you were looking for has moved, or never existed. The
            useful parts of the site are still here.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CtaLink href="/" size="lg">
              Back to home
            </CtaLink>
            <CtaLink href="/services" variant="secondary" size="lg">
              Explore services
            </CtaLink>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-6 text-xs text-muted">
            <Link
              href="/solutions#enquiry-to-meeting"
              className="link-underline hover:text-ink"
            >
              The Enquiry-to-Meeting System
              <ArrowUpRight className="h-3 w-3" strokeWidth={1.6} />
            </Link>
            <Link href="/contact" className="link-underline hover:text-ink">
              Book a consultation
              <ArrowUpRight className="h-3 w-3" strokeWidth={1.6} />
            </Link>
            <a
              href={`mailto:${site.contact.email}`}
              className="link-underline hover:text-ink"
            >
              {site.contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
