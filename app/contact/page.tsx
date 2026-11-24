import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Globe2,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { contactSteps, faqs } from "@/lib/content";
import { site } from "@/lib/site";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { ContactForm } from "@/components/contact-form";
import { CtaLink } from "@/components/cta-link";
import { Faq } from "@/components/faq";
import { LinkedInIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Tell Khaira.co about your business challenge. Book a free 30-minute consultation about lead generation, CRM automation, AI workflows or conversion systems.",
  alternates: { canonical: "/contact" },
};

type ContactPageProps = {
  searchParams: Promise<{ service?: string | string[] }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const requestedService = Array.isArray(params.service)
    ? params.service[0]
    : params.service;

  return (
    <>
      <PageHero
        eyebrow="Book a consultation"
        title={
          <>
            Let&apos;s find where your growth is{" "}
            <span className="text-brand">leaking.</span>
          </>
        }
        description="Tell us a little about your business and the challenge you are trying to solve. We will reply within one business day with a clear next step."
      >
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted">
          <span className="inline-flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-brand" strokeWidth={1.7} />
            30-minute working conversation
          </span>
          <span className="inline-flex items-center gap-2">
            <ShieldCheck
              className="h-3.5 w-3.5 text-brand"
              strokeWidth={1.7}
            />
            No obligation. No pitch deck.
          </span>
          <span className="inline-flex items-center gap-2">
            <Globe2 className="h-3.5 w-3.5 text-brand" strokeWidth={1.7} />
            UK & Europe
          </span>
        </div>
      </PageHero>

      <section
        id="enquiry-form"
        className="border-b border-line bg-surface section-pad"
      >
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-[1.5rem] border border-line bg-white p-5 shadow-[0_24px_70px_-40px_rgba(4,33,22,0.25)] md:p-8">
              <SectionLabel index="01">Enquiry form</SectionLabel>
              <h2 className="display mt-5 text-[clamp(1.8rem,3.4vw,2.6rem)]">
                Tell us about the business.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                The more context you can share, the more useful the first
                conversation will be. We read every enquiry ourselves.
              </p>
              <div className="mt-7">
                <ContactForm defaultService={requestedService} />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="space-y-3 lg:sticky lg:top-28">
              <div className="rounded-2xl border border-line bg-white p-5 md:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
                  What happens next
                </p>
                <ol className="mt-4 space-y-4">
                  {contactSteps.map((step) => (
                    <li key={step.index} className="flex gap-3">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-wash text-[10px] font-semibold text-brand">
                        {step.index}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-ink">
                          {step.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-muted">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl border border-line bg-white p-5 md:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
                  Contact details
                </p>
                <div className="mt-4 space-y-4 text-sm">
                  <div>
                    <p className="flex items-center gap-1.5 text-[11px] text-faint">
                      <Mail className="h-3 w-3" strokeWidth={1.7} />
                      Email
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <a
                        href={`mailto:${site.contact.email}`}
                        className="text-muted transition-colors hover:text-ink"
                      >
                        {site.contact.email}
                      </a>
                      <span className="rounded-full border border-line bg-surface px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-faint">
                        To confirm
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-[11px] text-faint">LinkedIn</p>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <a
                        href={site.contact.linkedin}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 text-muted transition-colors hover:text-ink"
                      >
                        <LinkedInIcon className="h-3.5 w-3.5" />
                        Company page
                      </a>
                      <span className="rounded-full border border-line bg-surface px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-faint">
                        To confirm
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-[11px] text-faint">Based in</p>
                    <p className="mt-1 text-muted">{site.location}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-brand/15 bg-brand-wash/70 p-5">
                <p className="text-sm font-medium text-ink">
                  Prefer to explore first?
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Read how the Enquiry-to-Meeting System works before you get in
                  touch.
                </p>
                <div className="mt-3">
                  <CtaLink
                    href="/solutions#enquiry-to-meeting"
                    variant="link"
                    size="sm"
                  >
                    Explore the system
                  </CtaLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="02">Before you write</SectionLabel>
            <h2 className="display mt-6 text-[clamp(2.2rem,4.2vw,3.4rem)]">
              Good to know.
            </h2>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              A few answers that may save you a question — or make the first
              conversation more useful.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink href="/services" variant="link" size="sm">
                Browse services
              </CtaLink>
              <Link
                href="/how-we-work"
                className="link-underline text-[13px] text-muted hover:text-ink"
              >
                How we work
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.6} />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-8">
            <Faq items={faqs.slice(0, 5)} />
          </div>
        </div>
      </section>
    </>
  );
}
