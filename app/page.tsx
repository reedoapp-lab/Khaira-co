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
        className="relative overflow-hidden bg-mist pt-5 pb-14 md:pt-8 md:pb-20"
      >
        {/* Luminous emerald nebula artwork */}
        <NebulaBackdrop variant="dark" />
        <div aria-hidden className="grid-soft absolute inset-0 opacity-25" />

        <div className="container-x relative z-10">
          <div className="rounded-[2rem] border border-white/80 bg-white/75 p-2 shadow-[0_40px_120px_-50px_rgba(4,33,22,0.45)] backdrop-blur-xl md:p-3">
            <div className="rounded-[1.55rem] bg-white p-6 md:p-10 lg:p-12">
              <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
                <div className="min-w-0 lg:col-span-6">
                  <div className="flex items-center gap-3">
                    <span aria-hidden className="h-px w-8 bg-brand/40" />
                    <p className="eyebrow">
                      Built for consulting, advisory and professional service firms
                    </p>
                  </div>

                  <h1
                    id="hero-title"
                    className="display mt-6 max-w-xl text-[clamp(2.7rem,5.2vw,4.6rem)]"
                  >
                    The only growth system your firm needs to{" "}
                    <span className="text-gradient-brand">
                      turn interest into revenue.
                    </span>
                  </h1>

                  <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
                    We connect your website, CRM, inbox and calendar into one
                    AI-assisted flow that captures every enquiry, replies in
                    minutes, and books more qualified meetings. Built for firms
                    that sell expertise.
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
                    30-minute working conversation. No pitch deck. No obligation.
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

                  <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.14em] text-faint">
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
        <div className="container-x flex flex-col gap-3 py-5 md:flex-row md:items-center md:justify-between">
          <p className="text-xs leading-relaxed text-muted">
            We build the growth system that turns interest into booked
            meetings, not another pile of disconnected tools.
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
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel index="01">The growth gap</SectionLabel>
            <h2
              id="problem-title"
              className="display mt-6 text-[clamp(2.2rem,4.4vw,3.7rem)]"
            >
              You don&apos;t have a lead problem. You have a{" "}
              <span className="text-brand">follow-through problem.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              Most firms don&apos;t lose work because the market is quiet. They
              lose it because an enquiry sits in an inbox, a referral gets a
              reply three days later, and a proposal goes cold while everyone
              assumes someone else is handling it.
            </p>
            <div className="mt-8">
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
                  Khaira connects these into one visible system, so every
                  enquiry has an owner, a next step and a measurable outcome.
                  Website, CRM, inbox, calendar and reporting, working as one.
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
                Six capabilities. One growth system.{" "}
                <span className="text-brand">
                  Built to outperform the patchwork.
                </span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Every service removes a specific bottleneck. Together they
              connect your website, CRM, inbox, calendar and reporting into one
              visible path from interest to revenue.
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

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {service.stack.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-line bg-surface px-2 py-0.5 text-[9px] font-medium text-muted"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

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

      {/* Signal artwork band */}
      <section aria-labelledby="signal-title" className="bg-white">
        <div className="container-x py-4 md:py-6">
          <ArtPanel
            art={<SignalField />}
            label="Signal, not noise"
            scrim="both"
            className="min-h-[24rem] md:min-h-[27rem]"
          >
            <div className="flex h-full flex-col justify-between gap-10 p-6 pt-16 md:p-10 md:pt-10">
              <div className="max-w-xl">
                <h2
                  id="signal-title"
                  className="display text-[clamp(1.9rem,4vw,3.2rem)] text-white"
                >
                  Every enquiry leaves a trail.{" "}
                  <span className="text-gradient-cosmic">
                    We make it visible.
                  </span>
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60 md:text-base">
                  Capture, qualification, follow-up and booking, connected in
                  one system you can see, measure and improve.
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
              className="display mt-6 text-[clamp(2.2rem,4.4vw,3.6rem)]"
            >
              Green bots.{" "}
              <span className="text-brand">Human judgement.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              We build AI agents that qualify, route, draft and follow up
              inside the tools your team already uses. That means OpenAI or
              Claude for reasoning, n8n or Make for orchestration, and retrieval
              over your own documents. Every action is logged. Every decision
              that carries risk stays with a person.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Agents read the enquiry, score the fit and route it to the right owner.",
                "Drafts, summaries and next-step suggestions are generated from your own context.",
                "Approval points are built in, so your team stays accountable for the outcome.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
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
            <div className="mt-8 flex flex-wrap items-center gap-3">
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
              className="aspect-[16/10]"
            >
              <div className="hidden h-full flex-col justify-end p-5 sm:flex md:p-6">
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
            <p className="mt-3 text-[10px] leading-relaxed text-faint">
              Conceptual agent mesh. Built on your CRM, inbox, calendar and
              knowledge base, with human approval where it matters.
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
                className="display mt-6 max-w-3xl text-[clamp(2.2rem,4.6vw,3.9rem)]"
              >
                From first enquiry to booked meeting.{" "}
                <span className="text-brand">Automatically.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm leading-relaxed text-muted md:text-base">
                The Khaira Enquiry-to-Meeting System captures, organises and
                follows up with every lead, so your team can focus on the
                conversation, not the admin. It runs on your CRM, inbox and
                calendar, with AI where it earns its place.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
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

          <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <ArtPanel
                art={<OrbitDiagram />}
                label="The system"
                className="aspect-square"
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

            <div className="grid gap-2.5 sm:grid-cols-2 lg:col-span-7">
              {systemStages.map((stage, index) => (
                <Reveal
                  key={stage.id}
                  delay={index * 0.04}
                  className={
                    index === systemStages.length - 1 ? "sm:col-span-2" : ""
                  }
                >
                  <div className="h-full rounded-2xl border border-white/80 bg-white/80 p-4 backdrop-blur-sm">
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
          </div>

          <div className="mt-10">
            <LeadDemo />
          </div>
          <p className="mt-4 text-center text-[10px] leading-relaxed text-faint">
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
                className="display mt-6 text-[clamp(2.2rem,4.4vw,3.7rem)]"
              >
                Four stages. One working system.{" "}
                <span className="text-brand">No six-month discovery.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Every engagement is scoped around a commercial problem. We define
              the outcome, build the smallest useful system, and measure whether
              it worked. You see the work as it happens.
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
            <SectionLabel index="06">Why Khaira.co</SectionLabel>
            <h2
              id="why-title"
              className="display mt-6 text-[clamp(2.2rem,4.4vw,3.6rem)]"
            >
              Most agencies sell activity. We build the system that{" "}
              <span className="text-brand">produces the outcome.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted md:text-base">
              We are not interested in automation for its own sake. Every
              workflow should make the business clearer, faster or more
              consistent. If it does not save time, improve conversion or give
              you a better view of the pipeline, we do not build it.
            </p>
            <div className="mt-8 rounded-2xl border border-line bg-white p-5 md:p-6">
              <p className="text-sm leading-relaxed text-ink">
                The measure is simple: fewer manual handoffs, faster response,
                more booked conversations.
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
            <SectionLabel index="07">Industries</SectionLabel>
            <h2
              id="industries-title"
              className="display mt-6 text-[clamp(2.2rem,4.2vw,3.5rem)]"
            >
              Built for businesses that sell expertise.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted md:text-base">
              We work with consulting, advisory, IT, recruitment and
              professional service firms where trust, responsiveness and
              follow-through win the work.
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

      <CtaSection
        eyebrow="Next step"
        title="Ready to stop losing good enquiries?"
        description="Bring us the bottleneck. In 30 minutes, we will map how your enquiries move today and show you the smallest useful system to fix it."
        primaryLabel="Book Your Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Tell Us About Your Business"
        secondaryHref="/contact#enquiry-form"
      />
    </>
  );
}
