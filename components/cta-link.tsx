import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant =
  | "primary"
  | "secondary"
  | "ghost"
  | "inverse"
  | "outline-inverse"
  | "luminous"
  | "link";
type Size = "sm" | "md" | "lg";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
  external?: boolean;
  ariaLabel?: string;
};

const sizes: Record<Size, string> = {
  sm: "gap-1.5 px-3 py-1.5 text-[11px]",
  md: "gap-1.5 px-4 py-2 text-[12px]",
  lg: "gap-2 px-5 py-2.5 text-[13px]",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-[0_14px_34px_-16px_rgba(10,122,86,0.8)] hover:bg-brand-deep hover:shadow-[0_18px_40px_-16px_rgba(10,122,86,0.9)]",
  secondary:
    "border border-line bg-white text-ink hover:border-brand/30 hover:bg-brand-wash",
  ghost: "text-ink hover:text-brand",
  inverse: "bg-white text-ink hover:bg-brand-wash",
  "outline-inverse":
    "border border-white/20 bg-white/[0.03] text-white hover:border-white/40 hover:bg-white/[0.08]",
  luminous:
    "bg-brand-bright text-dark shadow-[0_16px_44px_-16px_rgba(34,199,142,0.7)] hover:bg-brand-soft hover:shadow-[0_20px_50px_-16px_rgba(34,199,142,0.8)]",
  link: "text-brand hover:text-brand-deep",
};

export function CtaLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  withArrow = true,
  external = false,
  ariaLabel,
}: CtaLinkProps) {
  const isLink = variant === "link";

  const classes = cn(
    "group inline-flex items-center justify-center font-medium transition-all duration-300",
    isLink ? "gap-1 p-0 text-xs" : "rounded-full",
    !isLink && sizes[size],
    variants[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight
          aria-hidden
          className={cn(
            "shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
            size === "sm" || isLink ? "h-3.5 w-3.5" : "h-4 w-4",
          )}
          strokeWidth={1.7}
        />
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={classes}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  // Same-page anchors are handled by the browser/Lenis; a plain anchor avoids
  // Next.js treating the hash as a route change.
  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
