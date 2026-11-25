import { SectionLabel } from "@/components/section-label";
import { NebulaBackdrop, OrbitHalo } from "@/components/artwork";
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
      <NebulaBackdrop variant="light" />
      <div aria-hidden className="grid-soft absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-44 top-1/2 hidden w-[34rem] -translate-y-1/2 opacity-90 lg:block"
      >
        <OrbitHalo />
      </div>

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
