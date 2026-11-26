import type { Metadata } from "next";
import { Check, Globe2, ShieldCheck } from "lucide-react";
import { industries, principles } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { ArtPanel, ConstellationMap } from "@/components/artwork";
import { BotGlyph } from "@/components/icons";

export const metadata: Metadata = {
  title: "About | The Growth Partner for Consulting Firms",
  description:
    "Khaira.co is the growth and automation partner for consulting firms. We connect strategy, CRM, AI and execution to turn more enquiries into booked meetings.",
  alternates: { canonical: "/about" },
};

const idealFit = [
  "2 to 50 people, based in the UK or Europe",
  "A proven offer and some existing inbound demand",
  "Enquiries arriving through more than one channel",
  "A CRM or follow-up process that has become inconsistent",
  "A team that wants to improve conversion before increasing spend",
];

const notFor = [
  "Businesses looking for guaranteed lead volumes",
  "Teams wanting automation without changing a process",
  "Projects with no access to a decision-maker",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Khaira.co"
        title={
          <>
            We build the growth system behind firms that{" "}
            <span className="text-brand">sell expertise.</span>
          </>
        }
        description="Growth and automation partner for consulting, advisory, IT and professional service firms. Strategy, CRM, AI and execution, accountable for the outcome."
        actions={
          <>
            <CtaLink href="/contact" size="lg">
              Book a Free Consultation
            </CtaLink>
            <CtaLink href="/how-we-work" variant="secondary" size="lg">
              How We Work
            </CtaLink>
          </>
        }
      />

      <section className="section-pad bg-white">
        <div className="container-x grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel index="01">Why we exist</SectionLabel>
            <h2 className="display mt-5 text-[clamp(1.9rem,3.6vw,3rem)]">
              Most growth problems are not marketing problems. They are{" "}
              <span className="text-brand">system problems.</span>
            </h2>

            <div className="mt-6">
              <ArtPanel
                art={<ConstellationMap />}
                label="Strategy × systems × execution"
                className="aspect-[4/3]"
              >
                <div className="flex h-full flex-col justify-end p-5">
                  <p className="text-xs leading-relaxed text-white/70">
                    One commercial outcome, connected across strategy, systems
                    and execution.
                  </p>
                </div>
              </ArtPanel>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="max-w-xl text-sm leading-relaxed text-muted">
              A strong offer and healthy referrals still lose work when the
              path from enquiry to conversation is fragmented.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
              Enquiries arrive in different places. Follow-up depends on who is
              free. The CRM does not reflect reality. Demand exists, but the
              next step is invisible.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
              Khaira.co fixes that path. We define the opportunity, design the
              system, build it and measure the change. We use your existing
              tools and add technology only when it earns its place.
            </p>

            <div className="mt-6 rounded-xl border border-line bg-surface p-4">
              <p className="text-[13px] leading-relaxed text-ink">
                &ldquo;We build the growth system that turns interest into
                booked meetings.&rdquo;
              </p>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-faint">
                The Khaira.co positioning
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel index="02">What we believe</SectionLabel>
              <h2 className="display mt-5 text-[clamp(1.9rem,3.6vw,3rem)]">
                Four principles that shape the work.
              </h2>
            </div>
            <p className="max-w-xs text-[13px] leading-relaxed text-muted">
              Filters for what we build and what we leave out.
            </p>
          </div>

          <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <Reveal
                key={principle.title}
                className="h-full"
                delay={(index % 2) * 0.05}
              >
                <div className="h-full rounded-xl border border-line bg-white p-4">
                  <span className="text-[9px] font-medium tabular-nums text-faint">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2.5 font-display text-lg font-semibold tracking-[-0.03em] text-ink">
                    {principle.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                    {principle.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-x grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="03">Who we help</SectionLabel>
            <h2 className="display mt-5 text-[clamp(1.9rem,3.4vw,2.8rem)]">
              A good fit matters.
            </h2>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-muted">
              Most useful to firms with a proven offer and a growth process
              that has outgrown its setup.
            </p>
          </div>

          <div className="grid gap-2.5 lg:col-span-8 sm:grid-cols-2">
            <div className="rounded-xl border border-line bg-white p-4">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                  <Check className="h-4 w-4" strokeWidth={2} />
                </span>
                <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-ink">
                  Typically a good fit
                </h3>
              </div>
              <ul className="mt-3 space-y-2">
                {idealFit.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[13px] leading-relaxed text-muted"
                  >
                    <Check
                      aria-hidden
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand"
                      strokeWidth={2}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-line bg-surface p-4">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-muted">
                  <ShieldCheck className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-ink">
                  Probably not a fit
                </h3>
              </div>
              <ul className="mt-3 space-y-2">
                {notFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[13px] leading-relaxed text-muted"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.42rem] h-1 w-1 shrink-0 rounded-full bg-faint"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-brand/15 bg-brand-wash/60 p-4 md:col-span-2">
              <div className="flex items-start gap-3">
                <BotGlyph className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-ink">
                    How we think about AI
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                    AI should make the business clearer, not more complicated.
                    OpenAI and Claude for research, triage, drafting and
                    summaries, with retrieval over your documents and human
                    judgement where it matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-x grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="04">Sectors</SectionLabel>
            <h2 className="display mt-5 text-[clamp(1.9rem,3.4vw,2.8rem)]">
              Built for expertise-led businesses.
            </h2>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-muted">
              Consulting, advisory, IT, recruitment and professional service
              firms where responsiveness wins work.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="grid gap-2 sm:grid-cols-2">
              {industries.map((industry) => (
                <div
                  key={industry.title}
                  className="rounded-lg border border-line bg-white p-3.5"
                >
                  <h3 className="text-sm font-semibold text-ink">
                    {industry.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {industry.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-xl border border-line bg-white p-4">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-wash text-brand">
                <Globe2 className="h-4 w-4" strokeWidth={1.7} />
              </span>
              <div>
                <p className="text-sm font-medium text-ink">
                  Based in the UK and Europe
                </p>
                <p className="mt-1 text-[13px] leading-relaxed text-muted">
                  Clients across both regions, remotely and in person where it
                  adds value. Time zones agreed before work begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Next step"
        title="A working conversation, not a pitch."
        description="Tell us what is happening. We will tell you honestly whether we can help, what we would look at first, and the next step."
        primaryLabel="Book Your Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Explore our solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
