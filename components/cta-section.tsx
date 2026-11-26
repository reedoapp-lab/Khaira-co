import type { ReactNode } from "react";
import { CtaLink } from "@/components/cta-link";
import { SectionLabel } from "@/components/section-label";
import { NebulaBackdrop } from "@/components/artwork";
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
  note = "No obligation. 30 minutes, working conversation.",
  className,
}: CtaSectionProps) {
  return (
    <section className={cn("container-x pb-12 pt-2 md:pb-16", className)}>
      <div className="relative overflow-hidden rounded-[1.5rem] bg-dark px-5 py-11 text-white md:px-9 md:py-14 lg:px-12">
        <NebulaBackdrop variant="dark" className="opacity-95" />
        <div
          aria-hidden
          className="grid-dark pointer-events-none absolute inset-0 opacity-50"
        />

        <div className="relative grid gap-7 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel tone="dark">{eyebrow}</SectionLabel>
            <h2 className="display mt-5 max-w-xl text-[clamp(1.8rem,3.9vw,3.1rem)] text-white">
              {title}
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[13px] leading-relaxed text-white/65 md:text-sm">
              {description}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
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
            <p className="mt-4 text-[10px] leading-relaxed text-white/40">
              {note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
