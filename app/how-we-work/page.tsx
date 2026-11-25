import type { Metadata } from "next";
import { Check } from "lucide-react";
import {
  engagementModels,
  faqs,
  processSteps,
  whatToExpect,
} from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";
import { Faq } from "@/components/faq";
import { CtaSection } from "@/components/cta-section";
import { ArtPanel, OrbitDiagram } from "@/components/artwork";

export const metadata: Metadata = {
  title: "How We Work — A Clear Growth Systems Process",
  description:
    "A clear, senior-led process for building growth systems: discover, strategise, build and optimise. See how Khaira.co turns a commercial problem into a working system.",
  alternates: { canonical: "/how-we-work" },
};

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title={
          <>
            Simple process.{" "}
            <span className="text-brand">Smarter execution.</span>
          </>
        }
        description="A clear, senior-led process that moves from understanding to implementation without a six-month discovery phase."
        actions={
          <>
            <CtaLink href="/contact" size="lg">
              Book a Free Consultation
            </CtaLink>
            <CtaLink href="/services" variant="secondary" size="lg">
              Explore Services
            </CtaLink>
          </>
        }
      />

      <section className="section-pad bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionLabel index="01">The process</SectionLabel>
              <h2 className="display mt-6 text-[clamp(2.2rem,4.2vw,3.4rem)]">
                Four stages. No unnecessary layers.
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted md:text-base">
                Every engagement is structured around a clear commercial
                problem. We define the outcome, build the smallest useful
                system, and measure whether it worked.
              </p>
              <div className="mt-7">
                <CtaLink href="/contact" variant="link">
                  Start with a conversation
                </CtaLink>
              </div>

              <div className="mt-8 hidden lg:block">
                <ArtPanel
                  art={<OrbitDiagram compact />}
                  label="The process"
                  className="aspect-square"
                >
                  <div className="flex h-full flex-col justify-end p-4">
                    <p className="text-[11px] leading-relaxed text-white/60">
                      Discover → strategise → build → optimise.
                    </p>
                  </div>
                </ArtPanel>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="border-l border-line pl-6 md:pl-8">
              {processSteps.map((step, index) => (
                <Reveal key={step.index} delay={index * 0.04}>
                  <div className="relative pb-12 last:pb-0">
                    <span
                      aria-hidden
                      className="absolute -left-[1.9rem] top-1.5 grid h-3 w-3 place-items-center rounded-full border-2 border-white bg-brand md:-left-[2.4rem]"
                    />
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-[11px] font-medium tabular-nums text-brand">
                        {step.index}
                      </span>
                      <h3 className="font-display text-2xl font-semibold tracking-[-0.035em] text-ink md:text-3xl">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-base font-medium text-ink">
                      {step.summary}
                    </p>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                      {step.body}
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border border-line bg-surface/60 p-4">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-faint">
                          Activities
                        </p>
                        <ul className="mt-2.5 space-y-2">
                          {step.activities.map((activity) => (
                            <li
                              key={activity}
                              className="flex items-start gap-2 text-xs leading-relaxed text-muted"
                            >
                              <span
                                aria-hidden
                                className="mt-[0.42rem] h-1 w-1 shrink-0 rounded-full bg-brand/50"
                              />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-xl border border-brand/15 bg-brand-wash/60 p-4">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-brand">
                          Output
                        </p>
                        <p className="mt-2.5 text-sm leading-relaxed text-ink">
                          {step.output}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel index="02">What to expect</SectionLabel>
              <h2 className="display mt-6 text-[clamp(2.2rem,4.4vw,3.6rem)]">
                Senior involvement. Clear scope. Visible progress.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              The way we work is part of the value. You should always know what
              is being built, why it matters and what happens next.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {whatToExpect.map((item, index) => (
              <Reveal
                key={item.title}
                className="h-full"
                delay={index * 0.04}
              >
                <div className="h-full rounded-2xl border border-line bg-white p-5 md:p-6">
                  <span className="text-[10px] font-medium tabular-nums text-faint">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold tracking-[-0.025em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel index="03">Engagement models</SectionLabel>
              <h2 className="display mt-6 text-[clamp(2.2rem,4.4vw,3.6rem)]">
                Choose the smallest useful engagement.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              We will recommend a focused audit, a defined build or an ongoing
              partnership based on the problem — not on a fixed package.
            </p>
          </div>

          <div className="mt-10 grid gap-3 lg:grid-cols-3">
            {engagementModels.map((model, index) => (
              <Reveal
                key={model.name}
                className="h-full"
                delay={index * 0.05}
              >
                <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 md:p-6">
                  <span className="text-[10px] font-medium tabular-nums text-faint">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-ink">
                    {model.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {model.description}
                  </p>
                  <p className="mt-4 text-xs leading-relaxed text-muted">
                    <span className="font-medium text-ink">Best for — </span>
                    {model.bestFor}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-line pt-4">
                    {model.includes.map((item) => (
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
                  <div className="mt-auto pt-6">
                    <CtaLink href="/contact" variant="link" size="sm">
                      Discuss your situation
                    </CtaLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-line bg-surface">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="04">FAQ</SectionLabel>
            <h2 className="display mt-6 text-[clamp(2.2rem,4.2vw,3.4rem)]">
              Good to know.
            </h2>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              The things most people ask before the first conversation.
            </p>
            <div className="mt-6">
              <CtaLink href="/contact" variant="link">
                Ask us directly
              </CtaLink>
            </div>
          </div>
          <div className="lg:col-span-8">
            <Faq items={faqs.slice(0, 5)} />
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Ready to start?"
        title="Bring us the problem. We will map the system."
        description="A 30-minute working conversation is enough to understand whether we can help — and what the most useful first step would be."
        primaryLabel="Book Your Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Explore solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
