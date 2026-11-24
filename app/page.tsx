import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";
import { services } from "@/lib/services";
import { CursorEffect } from "@/components/cursor-effect";
import {
  differentiators,
  industries,
  problems,
  processSteps,
} from "@/lib/content";
import { systemStages } from "@/lib/solutions";
import { SectionLabel } from "@/components/section-label";
import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";
import { HeroDashboard } from "@/components/hero-dashboard";
import { LeadDemo } from "@/components/lead-demo";
import { CtaSection } from "@/components/cta-section";
import { Starfield } from "@/components/cosmic";
import {
  DifferentiatorIcon,
  ProblemIcon,
  ServiceIcon,
  StageIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "B2B Growth & Automation for Consulting Firms",
  description:
    "Khaira.co helps consulting firms and professional service businesses capture more enquiries, automate follow-up and build smarter systems for sustainable growth.",
  alternates: { canonical: "/" },
};

const capabilities = [
  { label: "Lead Generation", icon: "target" as const },
  { label: "Sales Automation", icon: "workflow" as const },
  { label: "Conversion Systems", icon: "monitor" as const },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="hero-title"
        className="relative overflow-hidden bg-mist pt-5 pb-14 md:pt-8 md:pb-20"
      >
        {/* Starfield background — subtle animated dots */}
        <Starfield tone="dark" className="cosmic-surface absolute inset-0 pointer-events-none" />
        {/* Orbit accent */}
        <div
          aria-hidden
          className="orbit-accent -inset-4 rounded-2xl border-brand/10 animate-orbit opacity-60"
        />
        {/* Cursor-inspired particle trail */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div
            aria-hidden
            className="fixed inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, rgba(10, 122, 86, 0.5) 0, transparent 50%), radial-gradient(circle at 80% 70%, rgba(10, 122, 86, 0.3) 0, transparent 50%), radial-gradient(circle at 60% 20%, rgba(10, 122, 86, 0.4) 0, transparent 50%)",
            }}
          />
        </div>

        <div
          aria-hidden
          className="ambient-blob -left-32 top-0 h-[30rem] w-[30rem] bg-brand/20 animate-drift"
        />
        <div
          aria-hidden
          className="ambient-blob -right-24 top-1/4 h-[34rem] w-[34rem] bg-brand-soft/25"
        />
        <div
          aria-hidden
          className="ambient-blob bottom-0 left-1/3 h-[20rem] w-[20rem] bg-white/80"
        />
        <div aria-hidden className="grid-soft absolute inset-0 opacity-60" />

        <div className="container-x relative z-10">
          <div className="rounded-[2rem] border border-white/80 bg-white/75 p-2 shadow-[0_40px_120px_-50px_rgba(4,33,22,0.45)] backdrop-blur-xl md:p-3">
            <div className="rounded-[1.55rem] bg-white p-6 md:p-10 lg:p-12">
              <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-6">
                  <div className="flex items-center gap-3">
                    <span aria-hidden className="h-px w-8 bg-brand/40" />
                    <p className="eyebrow">
                      Digital growth × intelligent automation
                    </p>
                  </div>

                  <h1
                    id="hero-title"
                    className="display mt-6 max-w-xl text-[clamp(2.7rem,5.2vw,4.6rem)]"
                  >
                    Turn more opportunities into{" "}
                    <span className="text-gradient-brand">revenue.</span>
                  </h1>

                  <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
                    We help ambitious consulting firms and professional service
                    businesses capture more enquiries, automate follow-ups and
                    build smarter systems for sustainable growth.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <CtaLink href="/contact" size="lg">
                      Book a Free Consultation
                    </CtaLink>
                    <CtaLink
                      href="/services"
                      variant="secondary"
                      size="lg"
                    >
                      Explore Our Services
                    </CtaLink>
                  </div>

                  <p className="mt-4 text-[11px] text-faint">
                    30-minute consultation · No obligation
                  </p>

                  <div className="mt-8 grid gap-3 border-t border-line pt-5 sm:grid-cols-3">
                    {capabilities.map((capability) => (
                      <div
                        key={capability.label}
                        className="flex items-center gap-2.5"
                      >
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-wash text-brand">
                          <ServiceIcon
                            icon={capability.icon}
                            className="h-3.5 w-3.5"
                          />
                        </span>
                        <span className="text-[12px] font-medium text-ink">
                          {capability.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <HeroDashboard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning strip */}
      <section className="border-b border-line bg-white">
        <div className="container-x flex flex-col gap-3 py-5 md:flex-row md:items-center md:justify-between">
          <p className="text-xs leading-relaxed text-muted">
            We build systems that turn business opportunities into measurable
            growth.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-faint">
            <span>Lead generation</span>
            <span aria-hidden>·</span>
            <span>CRM automation</span>
            <span aria-hidden>·</span>
            <span>AI workflows</span>
            <span aria-hidden>·</span>
            <span>Conversion websites</span>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section aria-labelledby="problem-title" className="section-pad bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel index="01">The growth gap</SectionLabel>
            <h2
              id="problem-title"
              className="display mt-6 text-[clamp(2.2rem,4.4vw,3.7rem)]"
            >
              Your business doesn&apos;t need more complexity. It needs{" "}
              <span className="text-brand">better systems.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              Most firms don&apos;t have a lead problem. They have a
              follow-through problem. Enquiries arrive through different
              channels, get handled inconsistently, and quietly go cold.
            </p>
            <div className="mt-8">
              <CtaLink
                href="/solutions#enquiry-to-meeting"
                variant="link"
              >
                See how the system works
              </CtaLink>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-3">
              {problems.map((problem) => (
                <Reveal key={problem.title}>
                  <div className="group rounded-2xl border border-line bg-white p-5 transition-colors duration-300 hover:border-brand/20 hover:bg-surface/60 md:p-6">
                    <div className="flex gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-wash text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                        <ProblemIcon
                          icon={problem.icon}
                          className="h-5 w-5"
                        />
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-[11px] font-medium tabular-nums text-faint">
                            {problem.index}
                          </span>
                          <h3 className="font-display text-lg font-semibold tracking-[-0.025em] text-ink">
                            {problem.title}
                          </h3>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {problem.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.08}>
              <div className="mt-3 rounded-2xl border border-brand/15 bg-brand-wash/70 p-5 md:p-6">
                <p className="flex items-start gap-3 text-sm leading-relaxed text-ink">
                  <Sparkles
                    aria-hidden
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                    strokeWidth={1.7}
                  />
                  Khaira connects these into one visible system — so every
                  enquiry has an owner, a next step and a measurable outcome.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        aria-labelledby="services-title"
        className="section-pad bg-surface"
      >
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel index="02">Capabilities</SectionLabel>
              <h2
                id="services-title"
                className="display mt-6 max-w-2xl text-[clamp(2.2rem,4.4vw,3.7rem)]"
              >
                Everything your business needs to grow smarter.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Six capabilities that work together. Start with the piece that is
              holding you back, or connect the whole growth engine.
            </p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal
                key={service.slug}
                className="h-full"
                delay={(index % 3) * 0.05}
              >
                <article className="card-lift group relative flex h-full flex-col rounded-2xl border border-line bg-white p-5 focus-within:border-brand/30 md:p-6">
                  <div className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-wash text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                      <ServiceIcon
                        icon={service.icon}
                        className="h-5 w-5"
                      />
                    </span>
                    <span className="text-[11px] font-medium tabular-nums text-faint">
                      {service.index}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.03em] text-ink">
                    <Link
                      href={`/services#${service.slug}`}
                      className="after:absolute after:inset-0 after:rounded-2xl focus:outline-none"
                    >
                      {service.title}
                    </Link>
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.short}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-line pt-4">
                    {service.deliverables.slice(0, 3).map((deliverable) => (
                      <li
                        key={deliverable}
                        className="flex items-start gap-2 text-xs leading-relaxed text-muted"
                      >
                        <Check
                          aria-hidden
                          className="mt-0.5 h-3 w-3 shrink-0 text-brand"
                          strokeWidth={2}
                        />
                        {deliverable}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-xs font-medium text-brand">
                    Learn more
                    <ArrowUpRight
                      aria-hidden
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.7}
                    />
                  </span>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-8">
            <CtaLink href="/services" variant="link">
              View all services
            </CtaLink>
          </div>
        </div>
      </section>

      {/* Flagship solution */}
      <section
        id="flagship"
        aria-labelledby="flagship-title"
        className="relative overflow-hidden bg-mist section-pad"
      >
        <div
          aria-hidden
          className="ambient-blob -left-24 top-10 h-[26rem] w-[26rem] bg-brand/15"
        />
        <div
          aria-hidden
          className="ambient-blob -right-24 bottom-0 h-[30rem] w-[30rem] bg-brand-soft/20"
        />
        <div aria-hidden className="grid-soft absolute inset-0 opacity-50" />

        <div className="container-x relative z-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionLabel index="03">Our signature solution</SectionLabel>
              <h2
                id="flagship-title"
                className="display mt-6 max-w-3xl text-[clamp(2.2rem,4.6vw,3.9rem)]"
              >
                From first enquiry to booked meeting.{" "}
                <span className="text-brand">Automatically.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm leading-relaxed text-muted md:text-base">
                The Khaira Enquiry-to-Meeting System captures, organises and
                follows up with every lead — so your team can focus on the
                conversation, not the admin.
              </p>
              <div className="mt-5">
                <CtaLink href="/solutions#enquiry-to-meeting">
                  Explore the System
                </CtaLink>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
            {systemStages.map((stage, index) => (
              <Reveal key={stage.id} delay={index * 0.04}>
                <div className="relative h-full rounded-2xl border border-white/80 bg-white/80 p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-wash text-brand">
                      <StageIcon icon={stage.icon} className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-medium tabular-nums text-faint">
                      {stage.index}
                    </span>
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-ink">
                    {stage.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">
                    {stage.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <LeadDemo />
          </div>
          <p className="mt-4 text-center text-[10px] leading-relaxed text-faint">
            Built on the tools you already use — your CRM, inbox and calendar.
            Example data shown.
          </p>
        </div>
      </section>

      {/* Process */}
      <section
        aria-labelledby="process-title"
        className="section-pad bg-white"
      >
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel index="04">How we work</SectionLabel>
              <h2
                id="process-title"
                className="display mt-6 text-[clamp(2.2rem,4.4vw,3.7rem)]"
              >
                Simple process.{" "}
                <span className="text-brand">Smarter execution.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              A clear, senior-led process that moves from understanding to
              implementation without a six-month discovery phase.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((step, index) => (
              <Reveal key={step.index} delay={index * 0.05}>
                <div className="relative h-full border-t border-line pt-6">
                  <span
                    aria-hidden
                    className="absolute -top-[3px] left-0 h-1.5 w-1.5 rounded-full bg-brand"
                  />
                  <span className="text-[11px] font-medium tabular-nums text-faint">
                    {step.index}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.03em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.summary}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {step.activities.slice(0, 3).map((activity) => (
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
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <CtaLink href="/how-we-work" variant="link">
              See the full process
            </CtaLink>
          </div>
        </div>
      </section>

      {/* Why Khaira */}
      <section
        aria-labelledby="why-title"
        className="section-pad bg-surface"
      >
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel index="05">Why Khaira.co</SectionLabel>
            <h2
              id="why-title"
              className="display mt-6 text-[clamp(2.2rem,4.4vw,3.6rem)]"
            >
              Technology is only valuable when it solves a real business
              problem.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted md:text-base">
              We are not interested in automation for its own sake. Every
              workflow we build should make the business clearer, faster or
              more consistent.
            </p>
            <div className="mt-8 rounded-2xl border border-line bg-white p-5 md:p-6">
              <p className="text-sm leading-relaxed text-ink">
                If a system doesn&apos;t save time, improve conversion or give
                you a clearer view of the business, we don&apos;t build it.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {differentiators.map((item, index) => (
              <Reveal
                key={item.title}
                className="h-full"
                delay={(index % 2) * 0.06}
              >
                <div className="group h-full rounded-2xl border border-line bg-white p-5 transition-colors duration-300 hover:border-brand/20 md:p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-wash text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <DifferentiatorIcon
                      icon={item.icon}
                      className="h-4.5 w-4.5"
                    />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-[-0.025em] text-ink">
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

      {/* Industries */}
      <section
        aria-labelledby="industries-title"
        className="section-pad bg-white"
      >
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="06">Industries</SectionLabel>
            <h2
              id="industries-title"
              className="display mt-6 text-[clamp(2.2rem,4.2vw,3.5rem)]"
            >
              Built for businesses that sell expertise.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted md:text-base">
              We work with firms where trust, responsiveness and follow-through
              win the work.
            </p>
            <div className="mt-8 rounded-2xl border border-line bg-surface p-5">
              <p className="text-sm font-medium text-ink">
                Not sure if you fit?
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                We work best with firms that already have a proven offer and
                some inbound demand.
              </p>
              <div className="mt-4">
                <CtaLink href="/contact" variant="link" size="sm">
                  Book a consultation
                </CtaLink>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-line">
              {industries.map((industry, index) => (
                <Link
                  key={industry.title}
                  href="/contact"
                  aria-label={`Discuss growth systems for ${industry.title}`}
                  className="group flex items-center justify-between gap-6 border-b border-line py-5 transition-colors duration-300 hover:bg-surface/60 md:py-6"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-[11px] font-medium tabular-nums text-faint">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-ink transition-colors duration-300 group-hover:text-brand md:text-2xl">
                        {industry.title}
                      </h3>
                      <p className="mt-1 max-w-lg text-sm leading-relaxed text-muted">
                        {industry.body}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    aria-hidden
                    className="h-4 w-4 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                    strokeWidth={1.6}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CursorEffect size={30} followFactor={0.15} />

      <CtaSection
        eyebrow="Next step"
        title="Ready to build a smarter growth engine?"
        description="Let's identify where your business is losing opportunities and build a system that helps you convert more of them."
        primaryLabel="Book Your Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Tell Us About Your Business"
        secondaryHref="/contact#enquiry-form"
      />
    </>
  );
}
