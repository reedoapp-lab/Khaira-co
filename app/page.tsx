import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";
import { services } from "@/lib/services";
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
import {
  ArtPanel,
  NebulaBackdrop,
  OrbitDiagram,
  SignalField,
} from "@/components/artwork";
import { BotSwarm } from "@/components/bot-artwork";
import {
  DifferentiatorIcon,
  ProblemIcon,
  ServiceIcon,
  StageIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "The Growth System for Consulting Firms",
  description:
    "Khaira.co is the growth system for consulting firms. Capture more qualified enquiries, automate follow-up with AI, and turn interest into booked meetings. Built on HubSpot, Pipedrive, n8n, OpenAI and Next.js.",
  keywords: [
    "growth system for consulting firms",
    "B2B lead generation for consultants",
    "CRM automation for professional services",
    "AI agents for consulting firms",
    "enquiry to meeting system",
    "HubSpot automation agency",
    "n8n workflow automation",
    "conversion website for consultants",
  ],
  alternates: { canonical: "/" },
};

const capabilities = [
  { label: "Lead Generation", icon: "target" as const },
  { label: "CRM & Follow-up", icon: "workflow" as const },
  { label: "AI Agents", icon: "sparkles" as const },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="hero-title"
        className="relative overflow-hidden bg-mist pt-4 pb-10 md:pt-6 md:pb-14"
      >
        {/* Luminous emerald nebula artwork */}
        <NebulaBackdrop variant="dark" />
        <div aria-hidden className="grid-soft absolute inset-0 opacity-25" />

        <div className="container-x relative z-10">
          <div className="rounded-[1.5rem] border border-white/80 bg-white/75 p-1.5 shadow-[0_40px_120px_-50px_rgba(4,33,22,0.45)] backdrop-blur-xl md:p-2">
            <div className="rounded-[1.25rem] bg-white p-5 md:p-7 lg:p-8">
              <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-8">
                <div className="min-w-0 lg:col-span-6">
                  <div className="flex items-center gap-3">
                    <span aria-hidden className="h-px w-8 bg-brand/40" />
                    <p className="eyebrow">
                      For consulting and professional service firms
                    </p>
                  </div>

                  <h1
                    id="hero-title"
                    className="display mt-5 max-w-xl text-[clamp(2.2rem,4.3vw,3.6rem)]"
                  >
                    The only growth system your firm needs to{" "}
                    <span className="text-gradient-brand">
                      turn interest into revenue.
                    </span>
                  </h1>

                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted md:text-base">
                    Website, CRM, inbox and calendar in one AI-assisted flow.
                    Capture every enquiry, reply in minutes, book more meetings.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-2.5">
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

                  <p className="mt-3 text-[10px] text-faint">
                    30 minutes. No pitch deck. No obligation.
                  </p>

                  <div className="mt-6 grid gap-2 border-t border-line pt-4 sm:grid-cols-3">
                    {capabilities.map((capability) => (
                      <div
                        key={capability.label}
                        className="flex items-center gap-2.5"
                      >
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-wash text-brand">
                          <ServiceIcon
                            icon={capability.icon}
                            className="h-3 w-3"
                          />
                        </span>
                        <span className="text-[11px] font-medium text-ink">
                          {capability.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 text-[9px] font-medium uppercase tracking-[0.14em] text-faint">
                    Typical stack: HubSpot · Pipedrive · Salesforce · n8n ·
                    OpenAI · Next.js
                  </p>
                </div>

                <div className="min-w-0 lg:col-span-6">
                  <HeroDashboard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning strip */}
      <section className="border-b border-line bg-white">
        <div className="container-x flex flex-col gap-2 py-4 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] leading-relaxed text-muted">
            One growth system for interest to booked meetings. No tool pile.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-faint">
            <span>Lead generation</span>
            <span aria-hidden>·</span>
            <span>CRM automation</span>
            <span aria-hidden>·</span>
            <span>AI agents</span>
            <span aria-hidden>·</span>
            <span>Conversion websites</span>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section aria-labelledby="problem-title" className="section-pad bg-white">
        <div className="container-x grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel index="01">The growth gap</SectionLabel>
            <h2
              id="problem-title"
              className="display mt-5 text-[clamp(1.9rem,3.6vw,3rem)]"
            >
              You don&apos;t have a lead problem. You have a{" "}
              <span className="text-brand">follow-through problem.</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Enquiries sit in inboxes. Referrals wait days. Proposals go cold.
              Not a lead problem, a follow-through problem.
            </p>
            <div className="mt-6">
              <CtaLink
                href="/solutions#enquiry-to-meeting"
                variant="link"
              >
                See the system that fixes it
              </CtaLink>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-3">
              {problems.map((problem) => (
                <Reveal key={problem.title}>
                  <div className="group rounded-xl border border-line bg-white p-4 transition-colors duration-300 hover:border-brand/20 hover:bg-surface/60">
                    <div className="flex gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-wash text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
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
                          <h3 className="font-display text-base font-semibold tracking-[-0.025em] text-ink">
                            {problem.title}
                          </h3>
                        </div>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                          {problem.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.08}>
              <div className="mt-2.5 rounded-xl border border-brand/15 bg-brand-wash/70 p-4">
                <p className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink">
                  <Sparkles
                    aria-hidden
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                    strokeWidth={1.7}
                  />
                  One visible system: every enquiry has an owner, a next step
                  and a measurable outcome. Website, CRM, inbox and calendar.
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
                className="display mt-5 max-w-xl text-[clamp(1.9rem,3.6vw,3rem)]"
              >
                Six capabilities. One growth system.{" "}
                <span className="text-brand">
                  Built to outperform the patchwork.
                </span>
              </h2>
            </div>
            <p className="max-w-xs text-[13px] leading-relaxed text-muted">
              Each service removes a bottleneck. Together they connect your
              stack into one path from interest to revenue.
            </p>
          </div>

          <div className="mt-7 grid gap-2.5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal
                key={service.slug}
                className="h-full"
                delay={(index % 3) * 0.05}
              >
                <article className="card-lift group relative flex h-full flex-col rounded-xl border border-line bg-white p-4 focus-within:border-brand/30">
                  <div className="flex items-start justify-between">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-wash text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                      <ServiceIcon
                        icon={service.icon}
                        className="h-5 w-5"
                      />
                    </span>
                    <span className="text-[11px] font-medium tabular-nums text-faint">
                      {service.index}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.03em] text-ink">
                    <Link
                      href={`/services#${service.slug}`}
                      className="after:absolute after:inset-0 after:rounded-2xl focus:outline-none"
                    >
                      {service.title}
                    </Link>
                  </h3>

                  <p className="mt-2 text-[13px] leading-relaxed text-muted">
                    {service.short}
                  </p>

                  <ul className="mt-4 space-y-1.5 border-t border-line pt-3">
                    {service.deliverables.slice(0, 3).map((deliverable) => (
                      <li
                        key={deliverable}
                        className="flex items-start gap-2 text-[11px] leading-relaxed text-muted"
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

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.stack.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-line bg-surface px-2 py-0.5 text-[9px] font-medium text-muted"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <span className="mt-auto inline-flex items-center gap-1 pt-5 text-[11px] font-medium text-brand">
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

          <div className="mt-6">
            <CtaLink href="/services" variant="link">
              View all services
            </CtaLink>
          </div>
        </div>
      </section>

      {/* Signal artwork band */}
      <section aria-labelledby="signal-title" className="bg-white">
        <div className="container-x py-3 md:py-4">
          <ArtPanel
            art={<SignalField />}
            label="Signal, not noise"
            scrim="both"
            className="min-h-[18rem] md:min-h-[20rem]"
          >
            <div className="flex h-full flex-col justify-between gap-6 p-5 pt-11 md:p-7 md:pt-7">
              <div className="max-w-xl">
                <h2
                  id="signal-title"
                  className="display text-[clamp(1.6rem,3.2vw,2.5rem)] text-white"
                >
                  Every enquiry leaves a trail.{" "}
                  <span className="text-gradient-cosmic">
                    We make it visible.
                  </span>
                </h2>
                <p className="mt-2.5 max-w-sm text-[13px] leading-relaxed text-white/60">
                  Capture, qualify, follow up, book. One visible system.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {["Capture", "Qualify", "Follow up", "Book", "Report"].map(
                  (step) => (
                    <span
                      key={step}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[10px] font-medium text-white/80 backdrop-blur"
                    >
                      <span className="h-1 w-1 rounded-full bg-brand-soft" />
                      {step}
                    </span>
                  ),
                )}
                <CtaLink
                  href="/solutions#enquiry-to-meeting"
                  variant="outline-inverse"
                  size="sm"
                  className="ml-auto"
                >
                  Explore the system
                </CtaLink>
              </div>
            </div>
          </ArtPanel>
        </div>
      </section>

      {/* AI agents */}
      <section aria-labelledby="agents-title" className="section-pad bg-surface">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionLabel index="03">Intelligent automation</SectionLabel>
            <h2
              id="agents-title"
              className="display mt-5 text-[clamp(1.9rem,3.6vw,3rem)]"
            >
              Green bots.{" "}
              <span className="text-brand">Human judgement.</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Agents that qualify, route, draft and follow up in the tools you
              use. OpenAI or Claude for reasoning, n8n or Make for orchestration,
              retrieval over your documents. Logged actions. Human approval.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Agents score fit and route each enquiry to the right owner.",
                "Drafts and summaries come from your own context.",
                "Approval points keep your team accountable.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[13px] leading-relaxed text-muted"
                >
                  <Check
                    aria-hidden
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                    strokeWidth={2}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <CtaLink href="/services#ai-integration">
                See AI Integration
              </CtaLink>
              <CtaLink href="/contact" variant="link">
                Talk about your workflow
              </CtaLink>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ArtPanel
              art={<BotSwarm />}
              label="Agent mesh"
              className="aspect-[16/9]"
            >
              <div className="hidden h-full flex-col justify-end p-4 sm:flex">
                <div className="flex flex-wrap gap-2">
                  {["Qualify", "Route", "Draft", "Follow up", "Book"].map(
                    (step) => (
                      <span
                        key={step}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[10px] font-medium text-white/80 backdrop-blur"
                      >
                        <span className="h-1 w-1 rounded-full bg-brand-soft" />
                        {step}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </ArtPanel>
            <p className="mt-2.5 text-[9px] leading-relaxed text-faint">
              Conceptual agent mesh. Your CRM, inbox, calendar and knowledge
              base, with human approval.
            </p>
          </div>
        </div>
      </section>

      {/* Flagship solution */}
      <section
        id="flagship"
        aria-labelledby="flagship-title"
        className="relative overflow-hidden bg-mist section-pad"
      >
        <NebulaBackdrop variant="light" />
        <div aria-hidden className="grid-soft absolute inset-0 opacity-40" />

        <div className="container-x relative z-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionLabel index="04">Our signature solution</SectionLabel>
              <h2
                id="flagship-title"
                className="display mt-5 max-w-2xl text-[clamp(1.9rem,3.8vw,3.1rem)]"
              >
                From first enquiry to booked meeting.{" "}
                <span className="text-brand">Automatically.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[13px] leading-relaxed text-muted">
                Capture, organise and follow up with every lead. Runs on your
                CRM, inbox and calendar, with AI where it earns its place.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {[
                  "HubSpot / Pipedrive",
                  "n8n / Make",
                  "Gmail / Outlook",
                  "Calendly",
                  "Slack",
                  "OpenAI",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-line bg-white px-2.5 py-1 text-[9px] font-medium text-muted"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                <CtaLink href="/solutions#enquiry-to-meeting">
                  Explore the System
                </CtaLink>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <ArtPanel
                art={<OrbitDiagram />}
                label="The system"
                className="aspect-[4/3]"
              >
                <div className="hidden h-full flex-col justify-end p-5 sm:flex md:p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-soft">
                    One visible path
                  </p>
                  <p className="mt-2 max-w-[16rem] font-display text-lg font-medium leading-snug text-white">
                    Capture, qualify, follow up, book, report.
                  </p>
                </div>
              </ArtPanel>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:col-span-7">
              {systemStages.map((stage, index) => (
                <Reveal
                  key={stage.id}
                  delay={index * 0.04}
                  className={
                    index === systemStages.length - 1 ? "sm:col-span-2" : ""
                  }
                >
                  <div className="h-full rounded-xl border border-white/80 bg-white/80 p-3.5 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-wash text-brand">
                        <StageIcon icon={stage.icon} className="h-4 w-4" />
                      </span>
                      <span className="text-[10px] font-medium tabular-nums text-faint">
                        {stage.index}
                      </span>
                    </div>
                    <h3 className="mt-3 text-[13px] font-semibold text-ink">
                      {stage.title}
                    </h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-muted">
                      {stage.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <LeadDemo />
          </div>
          <p className="mt-3 text-center text-[9px] leading-relaxed text-faint">
            Built on the tools you already use. Your CRM, inbox and calendar.
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
              <SectionLabel index="05">How we work</SectionLabel>
              <h2
                id="process-title"
                className="display mt-5 text-[clamp(1.9rem,3.6vw,3rem)]"
              >
                Four stages. One working system.{" "}
                <span className="text-brand">No six-month discovery.</span>
              </h2>
            </div>
            <p className="max-w-xs text-[13px] leading-relaxed text-muted">
              Scoped around a commercial problem. Build the smallest useful
              system, measure the result, show you the work.
            </p>
          </div>

          <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {processSteps.map((step, index) => (
              <Reveal key={step.index} delay={index * 0.05}>
                <div className="relative h-full border-t border-line pt-5">
                  <span
                    aria-hidden
                    className="absolute -top-[3px] left-0 h-1.5 w-1.5 rounded-full bg-brand"
                  />
                  <span className="text-[11px] font-medium tabular-nums text-faint">
                    {step.index}
                  </span>
                  <h3 className="mt-2.5 font-display text-lg font-semibold tracking-[-0.03em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                    {step.summary}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {step.activities.slice(0, 3).map((activity) => (
                      <li
                        key={activity}
                        className="flex items-start gap-2 text-[11px] leading-relaxed text-muted"
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

          <div className="mt-8">
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
        <div className="container-x grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel index="06">Why Khaira.co</SectionLabel>
            <h2
              id="why-title"
              className="display mt-5 text-[clamp(1.9rem,3.6vw,3rem)]"
            >
              Most agencies sell activity. We build the system that{" "}
              <span className="text-brand">produces the outcome.</span>
            </h2>
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-muted">
              No automation for its own sake. Every workflow should save time,
              improve conversion or give you a clearer pipeline.
            </p>
            <div className="mt-6 rounded-xl border border-line bg-white p-4">
              <p className="text-[13px] leading-relaxed text-ink">
                Fewer handoffs. Faster replies. More booked conversations.
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
                <div className="group h-full rounded-xl border border-line bg-white p-4 transition-colors duration-300 hover:border-brand/20">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-wash text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <DifferentiatorIcon
                      icon={item.icon}
                      className="h-4.5 w-4.5"
                    />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold tracking-[-0.025em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
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
        <div className="container-x grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="07">Industries</SectionLabel>
            <h2
              id="industries-title"
              className="display mt-5 text-[clamp(1.9rem,3.4vw,2.8rem)]"
            >
              Built for businesses that sell expertise.
            </h2>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-muted">
              Consulting, advisory, IT, recruitment and professional service
              firms where responsiveness wins work.
            </p>
            <div className="mt-6 rounded-xl border border-line bg-surface p-4">
              <p className="text-sm font-medium text-ink">
                Not sure if you fit?
              </p>
              <p className="mt-1.5 text-[11px] leading-relaxed text-muted">
                Best for firms with a proven offer and inbound demand.
              </p>
              <div className="mt-3">
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
                  className="group flex items-center justify-between gap-4 border-b border-line py-4 transition-colors duration-300 hover:bg-surface/60"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-[11px] font-medium tabular-nums text-faint">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-[-0.03em] text-ink transition-colors duration-300 group-hover:text-brand">
                        {industry.title}
                      </h3>
                      <p className="mt-0.5 max-w-md text-[13px] leading-relaxed text-muted">
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

      <CtaSection
        eyebrow="Next step"
        title="Ready to stop losing good enquiries?"
        description="Bring us the bottleneck. In 30 minutes we map your enquiry flow and the smallest system to fix it."
        primaryLabel="Book Your Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Tell Us About Your Business"
        secondaryHref="/contact#enquiry-form"
      />
    </>
  );
}
