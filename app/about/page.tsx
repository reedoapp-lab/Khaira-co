import type { Metadata } from "next";
import { Check, Globe2, ShieldCheck, Sparkles } from "lucide-react";
import { industries, principles } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "About — A B2B Growth & Automation Agency",
  description:
    "Khaira.co is a B2B growth and automation agency for consulting firms and professional service businesses. We connect strategy, technology and execution.",
  alternates: { canonical: "/about" },
};

const idealFit = [
  "2–50 people, based in the UK or Europe",
  "A proven offer and some existing inbound demand",
  "Enquiries arriving through more than one channel",
  "Follow-up that depends on memory or individual effort",
  "A desire to improve conversion before increasing spend",
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
            We build the systems behind{" "}
            <span className="text-brand">sustainable growth.</span>
          </>
        }
        description="Khaira.co is a B2B growth and automation agency for consulting firms and professional service businesses. We connect strategy, technology and execution."
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
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel index="01">Why we exist</SectionLabel>
            <h2 className="display mt-6 text-[clamp(2.2rem,4.4vw,3.6rem)]">
              Most growth problems are not marketing problems. They are{" "}
              <span className="text-brand">system problems.</span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              A firm can have a strong offer, a credible team and a healthy flow
              of referrals — and still lose opportunities because the path from
              first enquiry to booked conversation is fragmented.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              Enquiries arrive in different places. Follow-up depends on who is
              available. The CRM does not reflect what is actually happening.
              Marketing creates demand, but the business cannot see what happens
              next.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              We built Khaira.co to fix that path. Our work sits between
              commercial strategy and implementation: we define the
              opportunity, design the system, build it, and measure what
              changes.
            </p>

            <div className="mt-8 rounded-2xl border border-line bg-surface p-5 md:p-6">
              <p className="text-sm leading-relaxed text-ink">
                &ldquo;We build systems that turn business opportunities into
                measurable growth.&rdquo;
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
              <h2 className="display mt-6 text-[clamp(2.2rem,4.4vw,3.6rem)]">
                Four principles that shape the work.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              These are not values on a wall. They are the filters we use when
              deciding what to build and what to leave out.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <Reveal
                key={principle.title}
                className="h-full"
                delay={(index % 2) * 0.05}
              >
                <div className="h-full rounded-2xl border border-line bg-white p-5 md:p-6">
                  <span className="text-[10px] font-medium tabular-nums text-faint">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.03em] text-ink">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {principle.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="03">Who we help</SectionLabel>
            <h2 className="display mt-6 text-[clamp(2.2rem,4.2vw,3.4rem)]">
              A good fit matters.
            </h2>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              We are most useful to firms with a proven offer and a growth
              process that has outgrown its original setup.
            </p>
          </div>

          <div className="grid gap-3 lg:col-span-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-white p-5 md:p-6">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                  <Check className="h-4 w-4" strokeWidth={2} />
                </span>
                <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-ink">
                  Typically a good fit
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {idealFit.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted"
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

            <div className="rounded-2xl border border-line bg-surface p-5 md:p-6">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-muted">
                  <ShieldCheck className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-ink">
                  Probably not a fit
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {notFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted"
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

            <div className="rounded-2xl border border-brand/15 bg-brand-wash/60 p-5 md:col-span-2 md:p-6">
              <div className="flex items-start gap-3">
                <Sparkles
                  aria-hidden
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                  strokeWidth={1.7}
                />
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-ink">
                    How we think about AI
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    AI should make the business clearer, not more complicated.
                    We use it where it removes genuine friction — research,
                    triage, drafting, summarising, repetitive communication —
                    and keep human judgement in the decisions that matter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="04">Sectors</SectionLabel>
            <h2 className="display mt-6 text-[clamp(2.2rem,4.2vw,3.4rem)]">
              Built for expertise-led businesses.
            </h2>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              We work with firms where trust, responsiveness and follow-through
              win the work.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="grid gap-2 sm:grid-cols-2">
              {industries.map((industry) => (
                <div
                  key={industry.title}
                  className="rounded-xl border border-line bg-white p-4"
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

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-line bg-white p-5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-wash text-brand">
                <Globe2 className="h-4 w-4" strokeWidth={1.7} />
              </span>
              <div>
                <p className="text-sm font-medium text-ink">
                  Based in the UK and Europe
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  We work with clients across both regions, remotely and in
                  person where it adds value. Time zones and communication
                  preferences are agreed before work begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Next step"
        title="A working conversation, not a pitch."
        description="Tell us what is happening in the business. We will tell you honestly whether we can help, what we would look at first, and what a sensible next step would be."
        primaryLabel="Book Your Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Explore our solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
