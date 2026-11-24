import type { ReactNode } from "react";
import { CtaLink } from "@/components/cta-link";
import { SectionLabel } from "@/components/section-label";
import { cn } from "@/lib/utils";

type CtaSectionProps = {
  eyebrow?: string;
  title: ReactNode;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  note?: string;
  className?: string;
};

export function CtaSection({
  eyebrow = "Next step",
  title,
  description,
  primaryLabel = "Book a Free Consultation",
  primaryHref = "/contact",
  secondaryLabel = "Tell Us About Your Business",
  secondaryHref = "/contact#enquiry-form",
  note = "No obligation. A 30-minute working conversation.",
  className,
}: CtaSectionProps) {
  return (
    <section className={cn("container-x pb-20 pt-4 md:pb-28", className)}>
      <div className="relative overflow-hidden rounded-[2rem] bg-dark px-6 py-16 text-white md:px-12 md:py-20 lg:px-16">
        <div
          aria-hidden
          className="grid-dark pointer-events-none absolute inset-0 opacity-80"
        />
        <div
          aria-hidden
          className="ambient-blob -right-20 -top-24 h-[26rem] w-[26rem] bg-brand/30"
        />
        <div
          aria-hidden
          className="ambient-blob -bottom-32 left-1/4 h-[20rem] w-[20rem] bg-brand-soft/10"
        />

        <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel tone="dark">{eyebrow}</SectionLabel>
            <h2 className="display mt-6 max-w-2xl text-[clamp(2.2rem,5vw,4rem)] text-white">
              {title}
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-white/65 md:text-base">
              {description}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <CtaLink href={primaryHref} variant="inverse" size="lg">
                {primaryLabel}
              </CtaLink>
              {secondaryLabel && secondaryHref && (
                <CtaLink
                  href={secondaryHref}
                  variant="outline-inverse"
                  size="lg"
                >
                  {secondaryLabel}
                </CtaLink>
              )}
            </div>
            <p className="mt-5 text-[11px] leading-relaxed text-white/40">
              {note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
