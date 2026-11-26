import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import {
  solutions,
  systemIncludes,
  systemOutcomes,
  systemStages,
} from "@/lib/solutions";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";
import { LeadDemo } from "@/components/lead-demo";
import { CtaSection } from "@/components/cta-section";
import {
  ArtPanel,
  ConstellationMap,
  NebulaBackdrop,
} from "@/components/artwork";
import { SolutionIcon, StageIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Solutions | The Enquiry-to-Meeting System for Consulting Firms",
  description:
    "Explore Khaira.co's connected growth solutions: the Enquiry-to-Meeting System, lead generation engine, CRM and follow-up automation, and practical AI operations. Built on HubSpot, Pipedrive, n8n and OpenAI.",
  keywords: [
    "enquiry to meeting system",
    "lead generation engine for consulting firms",
    "CRM follow-up automation",
    "AI operations layer",
    "HubSpot and Pipedrive automation",
    "n8n lead routing",
    "consulting firm growth system",
  ],
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            One connected system. Fewer{" "}
            <span className="text-brand">missed opportunities.</span>
          </>
        }
        description="Website, CRM, inbox and calendar in one flow. Every enquiry gets an owner and a next step. No black boxes, no handoffs."
        actions={
          <>
            <CtaLink href="/contact" size="lg">
              Book a Free Consultation
            </CtaLink>
            <CtaLink
              href="#enquiry-to-meeting"
              variant="secondary"
              size="lg"
            >
              Explore the Flagship
            </CtaLink>
          </>
        }
      />

      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel index="01">Solution areas</SectionLabel>
              <h2 className="display mt-5 max-w-xl text-[clamp(1.9rem,3.6vw,3rem)]">
                Start with the constraint. Build the system around it.
              </h2>
            </div>
            <p className="max-w-xs text-[13px] leading-relaxed text-muted">
              Each solution stands alone, but connects to the others. One
              visible journey, built on your existing tools.
            </p>
          </div>

          <div className="mt-7 grid gap-2.5 lg:grid-cols-12">
            {solutions.map((solution, index) => (
              <Reveal
                key={solution.slug}
                className={
                  solution.flagship
                    ? "lg:col-span-7"
                    : index === 1
                      ? "lg:col-span-5"
                      : "lg:col-span-6"
                }
                delay={index * 0.04}
              >
                <article
                  className={
                    solution.flagship
                      ? "flex h-full flex-col rounded-xl border border-brand/20 bg-brand-wash/50 p-4 md:p-5"
                      : "flex h-full flex-col rounded-xl border border-line bg-white p-4"
                  }
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={
                        solution.flagship
                          ? "grid h-9 w-9 place-items-center rounded-lg bg-brand text-white"
                          : "grid h-9 w-9 place-items-center rounded-lg bg-brand-wash text-brand"
                      }
                    >
                      <SolutionIcon
                        icon={solution.icon}
                        className="h-5 w-5"
                      />
                    </span>
                    {solution.flagship && (
                      <span className="rounded-full border border-brand/20 bg-white px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-brand">
                        Signature
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.035em] text-ink">
                    {solution.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                    {solution.short}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">
                    {solution.description}
                  </p>

                  {solution.flagship && (
                    <div className="mt-5 flex flex-wrap items-center gap-1.5">
                      {systemStages.map((stage, stageIndex) => (
                        <div
                          key={stage.id}
                          className="flex items-center gap-1.5"
                        >
                          <span className="rounded-full border border-brand/15 bg-white px-2 py-1 text-[9px] font-medium text-brand">
                            {stage.title}
                          </span>
                          {stageIndex < systemStages.length - 1 && (
                            <ArrowRight
                              aria-hidden
                              className="h-3 w-3 text-brand/35"
                              strokeWidth={1.8}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  <ul className="mt-4 space-y-1.5 border-t border-line/80 pt-3">
                    {solution.includes.slice(0, 4).map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[11px] leading-relaxed text-muted"
                      >
                        <Check
                          aria-hidden
                          className="mt-0.5 h-3 w-3 shrink-0 text-brand"
                          strokeWidth={2}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-4">
                    <CtaLink
                      href={
                        solution.flagship
                          ? "#enquiry-to-meeting"
                          : `/contact?service=${encodeURIComponent(solution.title)}`
                      }
                      variant="link"
                      size="sm"
                    >
                      {solution.flagship
                        ? "Explore the system"
                        : "Discuss this solution"}
                    </CtaLink>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="enquiry-to-meeting"
        aria-labelledby="system-title"
        className="relative overflow-hidden border-y border-line bg-mist section-pad"
      >
        <NebulaBackdrop variant="light" />
        <div aria-hidden className="grid-soft absolute inset-0 opacity-40" />

        <div className="container-x relative z-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionLabel index="02">The flagship system</SectionLabel>
              <h2
                id="system-title"
                className="display mt-5 max-w-2xl text-[clamp(1.9rem,3.8vw,3.1rem)]"
              >
                From first enquiry to booked meeting.{" "}
                <span className="text-brand">Automatically.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[13px] leading-relaxed text-muted">
                One workflow that captures, organises and follows up with every
                lead. HubSpot or Pipedrive, n8n or Make, Calendly and Slack.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <CtaLink
                  href="/contact?service=Enquiry-to-Meeting%20System"
                  size="md"
                >
                  Discuss the system
                </CtaLink>
                <CtaLink href="#system-demo" variant="secondary" size="md">
                  See the demo
                </CtaLink>
              </div>
            </div>
          </div>

          <div id="system-demo" className="mt-8">
            <LeadDemo />
          </div>

          <div className="mt-9 grid gap-2.5 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="rounded-xl border border-white/80 bg-white/80 p-4 backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
                  The workflow
                </p>
                <div className="mt-4 space-y-2.5">
                  {systemStages.map((stage, index) => (
                    <Reveal key={stage.id} delay={index * 0.03}>
                      <div className="grid gap-2.5 rounded-lg border border-line bg-white p-3 sm:grid-cols-[auto_1fr] sm:items-start">
                        <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-wash text-brand">
                          <StageIcon icon={stage.icon} className="h-4 w-4" />
                        </span>
                        <div>
                          <div className="flex flex-wrap items-center gap-2.5">
                            <span className="text-[9px] font-medium tabular-nums text-faint">
                              {stage.index}
                            </span>
                            <h3 className="text-[13px] font-semibold text-ink">
                              {stage.title}
                            </h3>
                          </div>
                          <p className="mt-0.5 text-[11px] leading-relaxed text-muted">
                            {stage.description}
                          </p>
                          <p className="mt-0.5 text-[11px] leading-relaxed text-muted">
                            {stage.detail}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3 lg:col-span-5">
              <div className="rounded-xl border border-white/80 bg-white/80 p-4 backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
                  What&apos;s included
                </p>
                <ul className="mt-3 space-y-2">
                  {systemIncludes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs leading-relaxed text-muted"
                    >
                      <Check
                        aria-hidden
                        className="mt-0.5 h-3 w-3 shrink-0 text-brand"
                        strokeWidth={2}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-brand/15 bg-brand-wash/80 p-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-brand">
                  Who it&apos;s for
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink">
                  Firms with inbound demand and follow-up that depends on
                  memory or heroics.
                </p>
                <p className="mt-2 text-[11px] leading-relaxed text-muted">
                  Best fit: 2 to 50 people, an established offer, and a desire
                  to improve conversion before increasing spend.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-white/80 bg-white/80 p-4 backdrop-blur-sm">
            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-brand">
              What changes
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {systemOutcomes.map((outcome) => (
                <p
                  key={outcome}
                  className="flex items-start gap-2 text-[13px] leading-relaxed text-muted"
                >
                  <Check
                    aria-hidden
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                    strokeWidth={2}
                  />
                  {outcome}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-2.5">
            <CtaLink
              href="/contact?service=Enquiry-to-Meeting%20System"
              size="lg"
            >
              Discuss the Enquiry-to-Meeting System
            </CtaLink>
            <p className="text-[11px] text-faint">
              No obligation. 30 minutes, working conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-x grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="03">How it fits together</SectionLabel>
            <h2 className="display mt-5 text-[clamp(1.9rem,3.4vw,2.8rem)]">
              One journey. Five visible steps.
            </h2>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-muted">
              Built around how a real opportunity moves through your business,
              not a software template.
            </p>
            <div className="mt-6">
              <CtaLink href="/how-we-work" variant="link">
                See how we implement it
              </CtaLink>
            </div>

            <div className="mt-6">
              <ArtPanel
                art={<ConstellationMap />}
                label="Connected by design"
                className="aspect-[4/3]"
              >
                <div className="flex h-full flex-col justify-end p-5">
                  <p className="text-xs leading-relaxed text-white/70">
                    One system. Five visible steps. No orphaned enquiries.
                  </p>
                </div>
              </ArtPanel>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative border-l border-line pl-6 md:pl-8">
              {systemStages.map((stage, index) => (
                <Reveal key={stage.id} delay={index * 0.04}>
                  <div className="relative pb-6 last:pb-0">
                    <span
                      aria-hidden
                      className="absolute -left-[1.9rem] top-1 grid h-3 w-3 place-items-center rounded-full border-2 border-white bg-brand md:-left-[2.4rem]"
                    />
                    <p className="text-[10px] font-medium tabular-nums text-faint">
                      {stage.index}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-semibold tracking-[-0.03em] text-ink">
                      {stage.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted">
                      {stage.description}
                    </p>
                    <p className="mt-1 text-[11px] leading-relaxed text-muted">
                      {stage.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Next step"
        title="See where your enquiry journey breaks."
        description="Book a free consultation. We map your flow from first enquiry to booked meeting and identify where to start."
        primaryLabel="Book Your Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Explore our services"
        secondaryHref="/services"
      />
    </>
  );
}
