import { cn } from "@/lib/utils";

type SectionLabelProps = {
  index?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
};

export function SectionLabel({
  index,
  children,
  className,
  tone = "light",
}: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {index && (
        <span
          className={cn(
            "text-[10px] font-semibold tabular-nums",
            tone === "dark" ? "text-brand-soft" : "text-brand",
          )}
        >
          {index}
        </span>
      )}
      <span
        aria-hidden
        className={cn(
          "h-px w-6",
          tone === "dark" ? "bg-white/25" : "bg-brand/30",
        )}
      />
      <span
        className={cn(
          "eyebrow",
          tone === "dark" && "text-brand-soft",
        )}
      >
        {children}
      </span>
    </div>
  );
}
