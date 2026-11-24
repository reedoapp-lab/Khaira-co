import { SectionLabel } from "@/components/section-label";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-line bg-mist",
        className,
      )}
    >
      <div
        aria-hidden
        className="ambient-blob -left-32 top-0 h-[24rem] w-[24rem] bg-brand/15"
      />
      <div
        aria-hidden
        className="ambient-blob -right-24 top-10 h-[22rem] w-[22rem] bg-brand-soft/20"
      />
      <div aria-hidden className="grid-soft absolute inset-0 opacity-70" />

      <div className="container-x relative z-10 py-16 md:py-24">
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1 className="display mt-6 max-w-4xl text-[clamp(2.7rem,6vw,5rem)]">
          {title}
        </h1>
        <div className="mt-7 grid gap-8 md:grid-cols-12 md:items-end">
          <p className="max-w-2xl text-base leading-relaxed text-muted md:col-span-7 md:text-lg">
            {description}
          </p>
          {actions && (
            <div className="flex flex-wrap items-center gap-3 md:col-span-5 md:justify-end">
              {actions}
            </div>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
