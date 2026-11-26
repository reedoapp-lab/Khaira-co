import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/lib/services";
import { engagementModels, faqs } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";
import { ServiceIcon } from "@/components/icons";
import { Faq } from "@/components/faq";
import { CtaSection } from "@/components/cta-section";
import { ArtPanel, SignalField } from "@/components/artwork";
import { BotCore } from "@/components/bot-artwork";

export const metadata: Metadata = {
  title: "Services | Lead Generation, CRM Automation & AI for Consulting Firms",
  description:
    "Six connected services for consulting firms: ICP lead generation, CRM and sales automation, AI agents, conversion websites, growth strategy and custom applications. Built on HubSpot, Pipedrive, n8n, OpenAI and Next.js.",
  keywords: [
    "lead generation for consulting firms",
    "CRM automation for professional services",
    "AI agents for consulting firms",
    "HubSpot automation agency",
    "Pipedrive automation",
    "n8n workflow automation",
    "conversion website design for consultants",
  ],
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Growth services built around how your firm{" "}
            <span className="text-brand">actually wins work.</span>
          </>
        }
        description="Six connected capabilities. Each removes a bottleneck between interest and revenue, built on tools your team can use."
        actions={
          <>
            <CtaLink href="/contact" size="lg">
              Book a Free Consultation
            </CtaLink>
            <CtaLink
              href="/solutions#enquiry-to-meeting"
              variant="secondary"
              size="lg"
            >
              Explore the System
            </CtaLink>
          </>
        }
      >
        <nav
          aria-label="Services on this page"
          className="mt-7 flex flex-wrap gap-1.5"
        >
          {services.map((service) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="rounded-full border border-line bg-white/70 px-3 py-1.5 text-[11px] font-medium text-muted transition-colors hover:border-brand/30 hover:text-ink"
            >
              {service.shortTitle}
            </a>
          ))}
        </nav>
      </PageHero>

      <section aria-labelledby="capabilities-art-title" className="bg-white">
        <div className="container-x py-3 md:py-4">
          <ArtPanel
            art={<SignalField />}
            label="Connected capabilities"
            scrim="both"
            className="min-h-[15rem] md:min-h-[17rem]"
          >
            <div className="flex h-full flex-col justify-between gap-5 p-5 pt-11 md:p-7 md:pt-7">
              <div className="max-w-xl">
                <h2
                  id="capabilities-art-title"
                  className="display text-[clamp(1.6rem,2.9vw,2.3rem)] text-white"
                >
                  Six capabilities.{" "}
                  <span className="text-gradient-cosmic">
                    One connected growth engine.
                  </span>
                </h2>
                <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-white/60">
                  Start with the bottleneck that is costing you the most.
                  Connect the rest when you are ready.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <span
                    key={service.slug}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[10px] font-medium text-white/80 backdrop-blur"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-soft" />
                    {service.shortTitle}
                  </span>
                ))}
              </div>
            </div>
          </ArtPanel>
          <p className="mt-2.5 text-center text-[9px] leading-relaxed text-faint">
            Tool stacks shown are typical examples. We recommend the smallest
            stack that solves the problem.
          </p>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`border-b border-line ${
            index % 2 === 0 ? "bg-white" : "bg-surface"
          }`}
        >
          <div className="container-x py-10 md:py-14">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <SectionLabel index={service.index}>
                    {service.kicker}
                  </SectionLabel>
                  <div className="mt-4 flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-wash text-brand">
                      <ServiceIcon
                        icon={service.icon}
                        className="h-5 w-5"
                      />
                    </span>
                    <h2 className="font-display text-2xl font-semibold leading-[1.08] tracking-[-0.04em] text-ink md:text-3xl">
                      {service.title}
                    </h2>
                  </div>

                  <div className="mt-5 rounded-xl border border-line bg-white p-3.5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-faint">
                      Best for
                    </p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                      {service.bestFor}
                    </p>
                  </div>

                  <div className="mt-4">
                    <CtaLink
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      size="sm"
                      className="group hover:bg-brand-wash/30 group-hover:border-brand/30 transition-colors duration-300"
                    >
                      Discuss this service
                    </CtaLink>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <Reveal>
                  <p className="max-w-xl text-lg leading-snug tracking-[-0.015em] text-ink">
                    {service.lead}
                  </p>
                </Reveal>
                <p className="mt-3.5 max-w-xl text-[13px] leading-relaxed text-muted">
                  {service.description}
                </p>

                <div className="mt-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-faint">
                    Typical stack
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {service.stack.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-line bg-white px-2.5 py-1 text-[10px] font-medium text-muted"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-7">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-faint">
                    What&apos;s included
                  </p>
                  <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
                    {service.deliverables.map((deliverable, deliverableIndex) => (
                      <div
                        key={deliverable}
                        className="flex items-start gap-2.5 rounded-lg border border-line bg-white p-3"
                      >
                        <span className="text-[9px] font-medium tabular-nums text-brand">
                          {String(deliverableIndex + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[13px] leading-relaxed text-muted">
                          {deliverable}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-brand/15 bg-brand-wash/60 p-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-brand">
                    What this changes
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {service.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2 text-[13px] leading-relaxed text-muted"
                      >
                        <Check
                          aria-hidden
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                          strokeWidth={2}
                        />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                {service.slug === "ai-integration" && (
                  <Reveal delay={0.06}>
                    <div className="mt-5">
                      <ArtPanel
                        art={<BotCore />}
                        label="Agent core"
                        className="aspect-[16/9]"
                      />
                      <p className="mt-2.5 text-[11px] leading-relaxed text-faint">
                        Governed agents over your CRM, inbox, calendar and
                        knowledge base. Your team approves what matters.
                      </p>
                    </div>
                  </Reveal>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel index="07">Engagements</SectionLabel>
              <h2 className="display mt-5 text-[clamp(1.9rem,3.6vw,3rem)]">
                Ways to work together.
              </h2>
            </div>
            <p className="max-w-xs text-[13px] leading-relaxed text-muted">
              An audit, a defined build or an ongoing partnership. We recommend
              the smallest useful engagement.
            </p>
          </div>

          <div className="mt-7 grid gap-2.5 lg:grid-cols-3">
            {engagementModels.map((model, index) => (
              <Reveal
                key={model.name}
                className="h-full"
                delay={index * 0.05}
              >
                <div className="flex h-full flex-col rounded-xl border border-line bg-white p-4">
                  <span className="text-[9px] font-medium tabular-nums text-faint">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2.5 font-display text-xl font-semibold tracking-[-0.03em] text-ink">
                    {model.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">
                    {model.description}
                  </p>
                  <p className="mt-3 text-[11px] leading-relaxed text-muted">
                    <span className="font-medium text-ink">Best for: </span>
                    {model.bestFor}
                  </p>
                  <ul className="mt-4 space-y-1.5 border-t border-line pt-3">
                    {model.includes.map((item) => (
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
                  <div className="mt-auto pt-5">
                    <CtaLink
                      href="/contact"
                      variant="link"
                      size="sm"
                    >
                      Request a proposal
                    </CtaLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-line bg-surface">
        <div className="container-x grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="08">FAQ</SectionLabel>
            <h2 className="display mt-5 text-[clamp(1.9rem,3.4vw,2.8rem)]">
              Questions, answered.
            </h2>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-muted">
              Still unsure which service fits? A short conversation usually
              settles it.
            </p>
            <div className="mt-6">
              <CtaLink href="/contact" variant="link">
                Ask us directly
              </CtaLink>
            </div>
          </div>
          <div className="lg:col-span-8">
            <Faq items={faqs.slice(0, 6)} />
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Not sure where to start?"
        title="Start with a conversation."
        description="Tell us where you are and where you want to be. We will map the shortest honest route."
        primaryLabel="Book a Free Consultation"
        primaryHref="/contact"
        secondaryLabel="See our solutions"
        secondaryHref="/solutions"
      />

      <div className="container-x pb-12">
        <div className="flex flex-wrap items-center gap-3 border-t border-line pt-5 text-[11px] text-faint">
          <span>Related reading</span>
          <Link
            href="/solutions#enquiry-to-meeting"
            className="link-underline text-muted hover:text-ink"
          >
            The Enquiry-to-Meeting System
            <ArrowUpRight className="h-3 w-3" strokeWidth={1.6} />
          </Link>
        </div>
      </div>
    </>
  );
}
