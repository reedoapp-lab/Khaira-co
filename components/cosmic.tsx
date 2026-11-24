import { cn } from "@/lib/utils";
import { systemStages } from "@/lib/solutions";
import { StageIcon } from "@/components/icons";

type Tone = "dark" | "light";

export function Starfield({
  tone = "dark",
  className,
}: {
  tone?: Tone;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0",
        tone === "dark" ? "starfield" : "starfield-soft",
        className,
      )}
    />
  );
}

export function OrbitField({
  tone = "dark",
  className,
}: {
  tone?: Tone;
  className?: string;
}) {
  const line = tone === "dark" ? "border-brand-soft/15" : "border-brand/10";
  const dot = tone === "dark" ? "bg-brand-soft" : "bg-brand/40";

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute aspect-square rounded-full",
        className,
      )}
    >
      <div className={cn("absolute inset-0 rounded-full border", line)} />
      <div
        className={cn(
          "absolute inset-[11%] rounded-full border border-dashed",
          line,
          "animate-orbit",
        )}
      >
        <span
          className={cn(
            "absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_18px_rgba(126,232,192,0.75)]",
            dot,
          )}
        />
      </div>
      <div className={cn("absolute inset-[26%] rounded-full border", line)} />
      <div
        className={cn(
          "absolute inset-[40%] rounded-full border border-dashed",
          line,
          "animate-orbit-reverse",
        )}
      >
        <span
          className={cn(
            "absolute bottom-0 right-0 h-1 w-1 translate-x-1/2 translate-y-1/2 rounded-full",
            dot,
          )}
        />
      </div>
    </div>
  );
}

const orbitPositions = [
  "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
  "right-0 top-[30%] translate-x-1/2 -translate-y-1/2",
  "right-[8%] bottom-[8%] translate-x-1/2 translate-y-1/2",
  "left-[8%] bottom-[8%] -translate-x-1/2 translate-y-1/2",
  "left-0 top-[30%] -translate-x-1/2 -translate-y-1/2",
];

export function SystemOrbit({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[18rem]",
        className,
      )}
    >
      <div className="absolute inset-0 rounded-full border border-line" />
      <div className="animate-orbit absolute inset-[10%] rounded-full border border-dashed border-brand/15">
        <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand shadow-[0_0_14px_rgba(10,122,86,0.5)]" />
      </div>
      <div className="absolute inset-[26%] rounded-full border border-line/80" />
      <div className="absolute inset-[31%] grid place-items-center rounded-full bg-dark px-3 text-center shadow-[0_18px_40px_-18px_rgba(4,17,11,0.7)]">
        <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-brand-soft">
          One system
        </span>
        <span className="mt-0.5 font-display text-[11px] font-medium leading-tight text-white">
          Enquiry to meeting
        </span>
        <span className="mt-1 inline-flex items-center gap-1 text-[7px] text-white/45">
          <span className="h-1 w-1 rounded-full bg-brand-bright" />
          visible path
        </span>
      </div>

      {systemStages.map((stage, index) => (
        <div
          key={stage.id}
          className={cn(
            "absolute flex items-center gap-1.5 rounded-full border border-line bg-white px-2 py-1 shadow-[0_8px_24px_-16px_rgba(4,33,22,0.5)]",
            orbitPositions[index],
          )}
        >
          <span className="grid h-4 w-4 place-items-center rounded-full bg-brand-wash text-brand">
            <StageIcon icon={stage.icon} className="h-2.5 w-2.5" />
          </span>
          <span className="text-[8px] font-medium text-ink">{stage.title}</span>
        </div>
      ))}
    </div>
  );
}
