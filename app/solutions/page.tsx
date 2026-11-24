import type { Metadata } from "next";
import { ArrowRight, Check, Sparkles } from "lucide-react";
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
import { CursorEffect } from "@/components/cursor-effect";
import { SolutionIcon, StageIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Solutions — The Enquiry-to-Meeting System",
  description:
    "Explore Khaira.co's connected growth solutions: the Enquiry-to-Meeting System, lead generation engine, CRM and follow-up automation, and practical AI operations.",
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
        description="We design the flow between your website, CRM, inbox and calendar — so every enquiry has a clear next step."
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

      <CursorEffect size={40} followFactor={0.15} />

      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel index="01">Solution areas</SectionLabel>
              <h2 className="display mt-6 max-w-2xl text-[clamp(2.2rem,4.4vw,3.7rem)]">
                Start with the constraint. Build the system around it.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Each solution can stand alone, but they are designed to connect.
              The goal is one visible journey from first enquiry to booked
              conversation.
            </p>
          </div>

          <div className="mt-10 grid gap-3 lg:grid-cols-12">
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
                      ? "flex h-full flex-col rounded-2xl border border-brand/20 bg-brand-wash/50 p-5 md:p-7"
                      : "flex h-full flex-col rounded-2xl border border-line bg-white p-5 md:p-6"
                  }
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={
                        solution.flagship
                          ? "grid h-11 w-11 place-items-center rounded-xl bg-brand text-white"
                          : "grid h-11 w-11 place-items-center rounded-xl bg-brand-wash text-brand"
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

                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.035em] text-ink md:text-[1.7rem]">
                    {solution.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {solution.short}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
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

                  <ul className="mt-5 space-y-2 border-t border-line/80 pt-4">
                    {solution.includes.slice(0, 4).map((item) => (
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

                  <div className="mt-auto pt-5">
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
        <div
          aria-hidden
          className="ambient-blob -right-24 top-0 h-[30rem] w-[30rem] bg-brand/15"
        />
        <div
          aria-hidden
          className="ambient-blob -left-24 bottom-0 h-[26rem] w-[26rem] bg-brand-soft/20"
        />
        <div aria-hidden className="grid-soft absolute inset-0 opacity-50" />

        <div className="container-x relative z-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionLabel index="02">The flagship system</SectionLabel>
              <h2
                id="system-title"
                className="display mt-6 max-w-3xl text-[clamp(2.2rem,4.6vw,3.9rem)]"
              >
                From first enquiry to booked meeting.{" "}
                <span className="text-brand">Automatically.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm leading-relaxed text-muted md:text-base">
                A connected workflow that captures, organises and follows up
                with every lead — then shows you what happened. Built on the
                tools you already use.
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

          <div id="system-demo" className="mt-10">
            <LeadDemo />
          </div>

          <div className="mt-12 grid gap-3 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/80 bg-white/80 p-5 backdrop-blur-sm md:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
                  The workflow
                </p>
                <div className="mt-4 space-y-2.5">
                  {systemStages.map((stage, index) => (
                    <Reveal key={stage.id} delay={index * 0.03}>
                      <div className="grid gap-3 rounded-xl border border-line bg-white p-3.5 sm:grid-cols-[auto_1fr] sm:items-start">
                        <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-wash text-brand">
                          <StageIcon icon={stage.icon} className="h-4 w-4" />
                        </span>
                        <div>
                          <div className="flex flex-wrap items-center gap-2.5">
                            <span className="text-[9px] font-medium tabular-nums text-faint">
                              {stage.index}
                            </span>
                            <h3 className="text-sm font-semibold text-ink">
                              {stage.title}
                            </h3>
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-muted">
                            {stage.description}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-muted">
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
              <div className="rounded-2xl border border-white/80 bg-white/80 p-5 backdrop-blur-sm md:p-6">
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

              <div className="rounded-2xl border border-brand/15 bg-brand-wash/80 p-5 md:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
                  Who it&apos;s for
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink">
                  Consulting and professional service firms with inbound demand
                  and a follow-up process that depends on memory or individual
                  heroics.
                </p>
                <p className="mt-3 text-xs leading-relaxed text-muted">
                  Best fit: 2–50 people, an established offer, and a desire to
                  improve conversion before increasing acquisition spend.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-3 rounded-2xl border border-white/80 bg-white/80 p-5 backdrop-blur-sm md:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
              What changes
            </p>
            <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {systemOutcomes.map((outcome) => (
                <p
                  key={outcome}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
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

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CtaLink
              href="/contact?service=Enquiry-to-Meeting%20System"
              size="lg"
            >
              Discuss the Enquiry-to-Meeting System
            </CtaLink>
            <p className="text-xs text-faint">
              No obligation. A 30-minute working conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="03">How it fits together</SectionLabel>
            <h2 className="display mt-6 text-[clamp(2.2rem,4.2vw,3.4rem)]">
              One journey. Five visible steps.
            </h2>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              The system is designed around the way a real opportunity moves
              through your business — not around a software vendor&apos;s
              template.
            </p>
            <div className="mt-6">
              <CtaLink href="/how-we-work" variant="link">
                See how we implement it
              </CtaLink>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative border-l border-line pl-6 md:pl-8">
              {systemStages.map((stage, index) => (
                <Reveal key={stage.id} delay={index * 0.04}>
                  <div className="relative pb-8 last:pb-0">
                    <span
                      aria-hidden
                      className="absolute -left-[1.9rem] top-1 grid h-3 w-3 place-items-center rounded-full border-2 border-white bg-brand md:-left-[2.4rem]"
                    />
                    <p className="text-[10px] font-medium tabular-nums text-faint">
                      {stage.index}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold tracking-[-0.03em] text-ink">
                      {stage.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {stage.description}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
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
        description="Book a free consultation and we will map the current flow from first enquiry to booked meeting — and identify the most useful place to start."
        primaryLabel="Book Your Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Explore our services"
        secondaryHref="/services"
      />
    </>
  );
}
