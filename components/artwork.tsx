import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { systemStages } from "@/lib/solutions";

/* ————————————————————————————————————————————————
   Deterministic helpers so artwork renders identically
   on the server and the client (no hydration drift).
———————————————————————————————————————————————— */

function rand(seed: number) {
  const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return value - Math.floor(value);
}

const nebulaStars = Array.from({ length: 120 }, (_, index) => ({
  x: Number((rand(index + 1) * 1600).toFixed(1)),
  y: Number((rand(index + 137) * 900).toFixed(1)),
  r: Number((0.45 + rand(index + 271) * 1.5).toFixed(2)),
  o: Number((0.22 + rand(index + 389) * 0.62).toFixed(2)),
  delay: Number((rand(index + 503) * 8).toFixed(2)),
  duration: Number((5 + rand(index + 617) * 7).toFixed(2)),
}));

const brightStars = [
  { x: 236, y: 188, r: 2.8, delay: 0.4 },
  { x: 1290, y: 132, r: 2.3, delay: 1.8 },
  { x: 1082, y: 642, r: 3, delay: 3.1 },
  { x: 486, y: 742, r: 2.2, delay: 2.2 },
  { x: 884, y: 322, r: 2, delay: 0.9 },
  { x: 1420, y: 512, r: 1.8, delay: 4.2 },
  { x: 648, y: 96, r: 1.6, delay: 5.1 },
  { x: 120, y: 520, r: 1.7, delay: 2.7 },
];

const orbitNodes = systemStages.map((stage, index) => {
  const angle = ((-90 + index * 72) * Math.PI) / 180;
  const radius = 34.5;
  return {
    stage,
    left: Number((50 + Math.cos(angle) * radius).toFixed(2)),
    top: Number((50 + Math.sin(angle) * radius).toFixed(2)),
  };
});

const signalPoints: Array<[number, number]> = [
  [0, 470],
  [100, 448],
  [200, 462],
  [300, 400],
  [400, 424],
  [500, 352],
  [600, 372],
  [700, 300],
  [800, 318],
  [900, 232],
  [1000, 252],
  [1100, 170],
  [1200, 196],
];

const signalLine = signalPoints
  .map(([x, y], index) => `${index === 0 ? "M" : "L"} ${x} ${y}`)
  .join(" ");

const signalArea = `${signalLine} L 1200 600 L 0 600 Z`;

function contourPath(baseY: number, amplitude: number, phase: number) {
  const points: string[] = [];
  for (let x = -40; x <= 1240; x += 40) {
    const y =
      baseY +
      Math.sin(x / 92 + phase) * amplitude +
      Math.sin(x / 37 + phase * 1.7) * amplitude * 0.34;
    points.push(`${x},${y.toFixed(1)}`);
  }
  return `M ${points.join(" L ")}`;
}

const contourPaths = Array.from({ length: 15 }, (_, index) =>
  contourPath(74 + index * 34, 16 + (index % 4) * 8, index * 0.55),
);

const constellationNodes = [
  { x: 120, y: 300, r: 4 },
  { x: 250, y: 168, r: 6 },
  { x: 338, y: 322, r: 3.4 },
  { x: 430, y: 118, r: 4.4 },
  { x: 520, y: 258, r: 7 },
  { x: 612, y: 148, r: 3.4 },
  { x: 692, y: 330, r: 5 },
  { x: 298, y: 462, r: 4 },
  { x: 520, y: 470, r: 3.4 },
  { x: 662, y: 500, r: 4.4 },
  { x: 176, y: 118, r: 3 },
  { x: 742, y: 222, r: 3 },
];

const constellationEdges: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [2, 4],
  [1, 7],
  [7, 8],
  [8, 9],
  [4, 8],
  [0, 7],
  [6, 9],
  [10, 1],
  [11, 6],
  [0, 2],
];

/* ————————————————————————————————————————————————
   Nebula backdrop — used behind the homepage hero,
   every page hero and the closing CTA.
———————————————————————————————————————————————— */

export function NebulaBackdrop({
  variant = "dark",
  className,
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const dark = variant === "dark";
  const id = `nb-${variant}`;

  return (
    <svg
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className,
      )}
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          {dark ? (
            <>
              <stop offset="0%" stopColor="#03110a" />
              <stop offset="48%" stopColor="#072a1c" />
              <stop offset="100%" stopColor="#04150e" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#f7fdfa" />
              <stop offset="46%" stopColor="#e4f6ec" />
              <stop offset="100%" stopColor="#eef9f3" />
            </>
          )}
        </linearGradient>

        <radialGradient id={`${id}-emerald`} cx="50%" cy="50%" r="50%">
          <stop
            offset="0%"
            stopColor={dark ? "#22c78e" : "#7ee8c0"}
            stopOpacity={dark ? 0.5 : 0.55}
          />
          <stop
            offset="52%"
            stopColor={dark ? "#0a7a56" : "#bdf0d9"}
            stopOpacity={dark ? 0.24 : 0.32}
          />
          <stop offset="100%" stopColor="#0a7a56" stopOpacity="0" />
        </radialGradient>

        <radialGradient id={`${id}-mint`} cx="50%" cy="50%" r="50%">
          <stop
            offset="0%"
            stopColor={dark ? "#7ee8c0" : "#d8f7e8"}
            stopOpacity={dark ? 0.34 : 0.7}
          />
          <stop
            offset="55%"
            stopColor={dark ? "#22c78e" : "#9deecb"}
            stopOpacity={dark ? 0.16 : 0.28}
          />
          <stop offset="100%" stopColor="#22c78e" stopOpacity="0" />
        </radialGradient>

        <radialGradient id={`${id}-teal`} cx="50%" cy="50%" r="50%">
          <stop
            offset="0%"
            stopColor={dark ? "#0a7a56" : "#c8f0dc"}
            stopOpacity={dark ? 0.34 : 0.5}
          />
          <stop
            offset="60%"
            stopColor={dark ? "#065c40" : "#e0f6ea"}
            stopOpacity={dark ? 0.18 : 0.3}
          />
          <stop offset="100%" stopColor="#065c40" stopOpacity="0" />
        </radialGradient>

        <linearGradient id={`${id}-aurora`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22c78e" stopOpacity="0" />
          <stop offset="28%" stopColor="#7ee8c0" stopOpacity={dark ? 0.55 : 0.4} />
          <stop offset="62%" stopColor="#0a7a56" stopOpacity={dark ? 0.4 : 0.28} />
          <stop offset="100%" stopColor="#22c78e" stopOpacity="0" />
        </linearGradient>

        <linearGradient id={`${id}-aurora-2`} x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="#0a7a56" stopOpacity="0" />
          <stop offset="42%" stopColor="#22c78e" stopOpacity={dark ? 0.32 : 0.24} />
          <stop offset="100%" stopColor="#7ee8c0" stopOpacity="0" />
        </linearGradient>

        <linearGradient id={`${id}-comet`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#7ee8c0" stopOpacity="0" />
          <stop offset="55%" stopColor="#7ee8c0" stopOpacity={dark ? 0.5 : 0.35} />
          <stop offset="100%" stopColor="#eafff5" stopOpacity="0" />
        </linearGradient>

        <radialGradient id={`${id}-vignette`} cx="50%" cy="42%" r="78%">
          <stop offset="54%" stopColor="#000000" stopOpacity="0" />
          <stop
            offset="100%"
            stopColor={dark ? "#000000" : "#c7e8d7"}
            stopOpacity={dark ? 0.5 : 0.4}
          />
        </radialGradient>

        <filter
          id={`${id}-glow`}
          x="-140%"
          y="-140%"
          width="380%"
          height="380%"
        >
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="1600" height="900" fill={`url(#${id}-bg)`} />

      {/* Nebula clouds */}
      <g opacity={dark ? 0.95 : 0.85}>
        <ellipse
          cx="330"
          cy="240"
          rx="580"
          ry="370"
          fill={`url(#${id}-emerald)`}
          className="art-drift"
        />
        <ellipse
          cx="1290"
          cy="170"
          rx="470"
          ry="310"
          fill={`url(#${id}-mint)`}
          className="art-drift-slow"
        />
        <ellipse
          cx="820"
          cy="830"
          rx="740"
          ry="310"
          fill={`url(#${id}-teal)`}
        />
      </g>

      {/* Aurora ribbons */}
      <g
        opacity={dark ? 0.62 : 0.5}
        className="art-drift-slow"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path
          d="M-120 630 C 250 520, 480 710, 820 600 S 1380 430, 1730 540"
          stroke={`url(#${id}-aurora)`}
          strokeWidth="96"
          fill="none"
        />
        <path
          d="M-140 300 C 230 210, 520 370, 860 280 S 1400 130, 1730 220"
          stroke={`url(#${id}-aurora-2)`}
          strokeWidth="58"
          fill="none"
        />
      </g>

      {/* Orbital arcs */}
      <g
        fill="none"
        stroke={dark ? "#7ee8c0" : "#0a7a56"}
        opacity={dark ? 0.22 : 0.15}
      >
        <ellipse
          cx="800"
          cy="450"
          rx="630"
          ry="255"
          strokeWidth="1"
          strokeDasharray="2 11"
          className="art-spin-slower"
        />
        <ellipse
          cx="800"
          cy="450"
          rx="490"
          ry="196"
          strokeWidth="1"
        />
        <ellipse
          cx="800"
          cy="450"
          rx="352"
          ry="140"
          strokeWidth="1"
          strokeDasharray="1 9"
          className="art-spin-reverse"
        />
      </g>

      {/* Comet trail */}
      <path
        d="M170 720 C 470 540, 780 390, 1210 232"
        fill="none"
        stroke={`url(#${id}-comet)`}
        strokeWidth={dark ? 2 : 1.4}
        strokeLinecap="round"
        strokeDasharray="10 16"
        className="art-dash"
      />

      {/* Stars */}
      <g fill={dark ? "#eafff5" : "#0a7a56"}>
        {nebulaStars.map((star, index) => (
          <circle
            key={index}
            cx={star.x}
            cy={star.y}
            r={star.r}
            opacity={dark ? star.o : star.o * 0.42}
            className="art-twinkle"
            style={{
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </g>

      <g
        fill={dark ? "#d8fff0" : "#22c78e"}
        filter={`url(#${id}-glow)`}
      >
        {brightStars.map((star, index) => (
          <circle
            key={index}
            cx={star.x}
            cy={star.y}
            r={star.r}
            opacity={dark ? 0.9 : 0.6}
            className="art-twinkle"
            style={{
              animationDelay: `${star.delay}s`,
              animationDuration: `${6 + index}s`,
            }}
          />
        ))}
      </g>

      <rect width="1600" height="900" fill={`url(#${id}-vignette)`} />
    </svg>
  );
}

/* ————————————————————————————————————————————————
   Orbital halo — decorative ring system for page heroes
———————————————————————————————————————————————— */

export function OrbitHalo({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 600"
      fill="none"
      className={cn("h-full w-full", className)}
    >
      <defs>
        <linearGradient id="oh-arc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22c78e" stopOpacity="0" />
          <stop offset="50%" stopColor="#22c78e" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#7ee8c0" stopOpacity="0" />
        </linearGradient>
        <filter id="oh-glow" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx="300" cy="300" r="286" stroke="rgba(10,122,86,0.12)" />
      <circle
        cx="300"
        cy="300"
        r="236"
        stroke="rgba(10,122,86,0.16)"
        strokeDasharray="2 11"
        className="art-spin-slower"
      />
      <circle
        cx="300"
        cy="300"
        r="236"
        stroke="url(#oh-arc)"
        strokeWidth="1.6"
        strokeDasharray="140 1340"
        strokeLinecap="round"
        className="art-spin-slow"
      />
      <circle cx="300" cy="300" r="178" stroke="rgba(10,122,86,0.1)" />
      <circle
        cx="300"
        cy="300"
        r="124"
        stroke="rgba(34,199,142,0.2)"
        strokeDasharray="1 8"
        className="art-spin-reverse"
      />
      <circle cx="300" cy="300" r="66" stroke="rgba(10,122,86,0.08)" />

      <circle
        cx="300"
        cy="64"
        r="4.5"
        fill="#22c78e"
        filter="url(#oh-glow)"
        className="art-pulse-node"
      />
      <circle cx="536" cy="300" r="3" fill="#7ee8c0" className="art-twinkle" />
      <circle cx="300" cy="536" r="2.6" fill="#0a7a56" className="art-twinkle" />
      <circle cx="132" cy="168" r="2.2" fill="#22c78e" className="art-twinkle" />
    </svg>
  );
}

/* ————————————————————————————————————————————————
   Orbit diagram — the Enquiry-to-Meeting system
———————————————————————————————————————————————— */

export function OrbitDiagram({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[30rem]",
        className,
      )}
    >
      <svg
        viewBox="0 0 600 600"
        fill="none"
        aria-hidden
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <radialGradient id="od-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22c78e" stopOpacity="0.45" />
            <stop offset="58%" stopColor="#0a7a56" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#04110b" stopOpacity="0.9" />
          </radialGradient>
          <linearGradient id="od-arc" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22c78e" stopOpacity="0" />
            <stop offset="50%" stopColor="#7ee8c0" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#22c78e" stopOpacity="0" />
          </linearGradient>
          <filter id="od-glow" x="-140%" y="-140%" width="380%" height="380%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* tick ring */}
        {Array.from({ length: 72 }).map((_, index) => {
          const angle = (index * 5 * Math.PI) / 180;
          const outer = index % 6 === 0 ? 282 : 277;
          return (
            <line
              key={index}
              x1={300 + Math.cos(angle) * 272}
              y1={300 + Math.sin(angle) * 272}
              x2={300 + Math.cos(angle) * outer}
              y2={300 + Math.sin(angle) * outer}
              stroke="rgba(126,232,192,0.3)"
              strokeWidth={index % 6 === 0 ? 1.2 : 0.6}
            />
          );
        })}

        <circle cx="300" cy="300" r="286" stroke="rgba(126,232,192,0.12)" />
        <circle
          cx="300"
          cy="300"
          r="232"
          stroke="rgba(126,232,192,0.24)"
          strokeDasharray="3 12"
          className="art-spin-slower"
        />
        <circle cx="300" cy="300" r="180" stroke="rgba(126,232,192,0.14)" />
        <circle
          cx="300"
          cy="300"
          r="128"
          stroke="rgba(126,232,192,0.2)"
          strokeDasharray="2 9"
          className="art-spin-reverse"
        />
        <circle cx="300" cy="300" r="76" stroke="rgba(126,232,192,0.12)" />
        <circle
          cx="300"
          cy="300"
          r="232"
          stroke="url(#od-arc)"
          strokeWidth="2"
          strokeDasharray="170 1290"
          strokeLinecap="round"
          className="art-spin-slow"
        />

        {orbitNodes.map((node, index) => {
          const angle = ((-90 + index * 72) * Math.PI) / 180;
          const cx = 300 + Math.cos(angle) * 232;
          const cy = 300 + Math.sin(angle) * 232;
          return (
            <g key={node.stage.id}>
              <circle
                cx={cx}
                cy={cy}
                r="12"
                fill="#22c78e"
                opacity="0.14"
                className="art-pulse-node"
                style={{ animationDelay: `${index * 0.7}s` }}
              />
              <circle
                cx={cx}
                cy={cy}
                r="5.5"
                fill="#22c78e"
                filter="url(#od-glow)"
              />
              <circle cx={cx} cy={cy} r="2" fill="#eafff5" />
            </g>
          );
        })}

        <circle
          cx="300"
          cy="300"
          r="60"
          fill="url(#od-core)"
          stroke="rgba(126,232,192,0.35)"
        />
        <circle
          cx="300"
          cy="300"
          r="4"
          fill="#eafff5"
          filter="url(#od-glow)"
        />
      </svg>

      {!compact &&
        orbitNodes.map((node) => (
          <span
            key={node.stage.id}
            className="absolute z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/15 bg-dark/80 px-2.5 py-1 text-[9px] font-medium text-white/90 backdrop-blur sm:flex"
            style={{ left: `${node.left}%`, top: `${node.top}%` }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-soft shadow-[0_0_10px_rgba(126,232,192,0.9)]" />
            {node.stage.title}
          </span>
        ))}

      <div className="pointer-events-none absolute left-1/2 top-1/2 w-32 -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-brand-soft">
          One system
        </p>
        <p className="mt-1 font-display text-[12px] font-medium leading-tight text-white">
          Enquiry to meeting
        </p>
      </div>
    </div>
  );
}

/* ————————————————————————————————————————————————
   Signal field — abstract growth / data artwork
———————————————————————————————————————————————— */

export function SignalField({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      className={cn("h-full w-full", className)}
    >
      <defs>
        <linearGradient id="sf-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#03110a" />
          <stop offset="55%" stopColor="#07271a" />
          <stop offset="100%" stopColor="#04150e" />
        </linearGradient>
        <linearGradient id="sf-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22c78e" stopOpacity="0.34" />
          <stop offset="60%" stopColor="#0a7a56" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#0a7a56" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="sf-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0a7a56" stopOpacity="0.2" />
          <stop offset="45%" stopColor="#22c78e" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#7ee8c0" />
        </linearGradient>
        <linearGradient id="sf-beam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7ee8c0" stopOpacity="0" />
          <stop offset="45%" stopColor="#7ee8c0" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#22c78e" stopOpacity="0" />
        </linearGradient>
        <filter id="sf-glow" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="1200" height="600" fill="url(#sf-bg)" />

      {/* vertical grid */}
      <g stroke="rgba(126,232,192,0.08)">
        {Array.from({ length: 13 }).map((_, index) => (
          <line
            key={index}
            x1={index * 100}
            y1="0"
            x2={index * 100}
            y2="600"
          />
        ))}
      </g>

      {/* contour lines */}
      <g
        fill="none"
        stroke="#22c78e"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {contourPaths.map((path, index) => (
          <path
            key={index}
            d={path}
            strokeWidth={index % 5 === 0 ? 1.2 : 0.7}
            opacity={0.08 + (index % 5) * 0.035}
            className={index % 5 === 0 ? "art-dash" : undefined}
            strokeDasharray={index % 5 === 0 ? "4 18" : undefined}
          />
        ))}
      </g>

      {/* glowing beam */}
      <rect
        x="884"
        y="40"
        width="26"
        height="520"
        fill="url(#sf-beam)"
        className="art-beam"
      />

      {/* signal area */}
      <path d={signalArea} fill="url(#sf-area)" />
      <path
        d={signalLine}
        fill="none"
        stroke="url(#sf-line)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* data points */}
      {signalPoints.map(([x, y], index) => (
        <g key={index}>
          <circle
            cx={x}
            cy={y}
            r="9"
            fill="#22c78e"
            opacity="0.12"
            className="art-pulse-node"
            style={{ animationDelay: `${index * 0.35}s` }}
          />
          <circle
            cx={x}
            cy={y}
            r="3"
            fill="#d8fff0"
            filter="url(#sf-glow)"
          />
        </g>
      ))}

      {/* floating particles */}
      <g fill="#7ee8c0">
        {Array.from({ length: 26 }).map((_, index) => (
          <circle
            key={index}
            cx={Number((rand(index + 11) * 1200).toFixed(1))}
            cy={Number((rand(index + 211) * 600).toFixed(1))}
            r={Number((0.6 + rand(index + 311) * 1.4).toFixed(2))}
            opacity={Number((0.15 + rand(index + 411) * 0.4).toFixed(2))}
            className="art-twinkle"
            style={{
              animationDelay: `${(rand(index + 511) * 7).toFixed(2)}s`,
              animationDuration: `${(5 + rand(index + 611) * 6).toFixed(2)}s`,
            }}
          />
        ))}
      </g>
    </svg>
  );
}

/* ————————————————————————————————————————————————
   Constellation map — connected systems artwork
———————————————————————————————————————————————— */

export function ConstellationMap({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 800 560"
      preserveAspectRatio="xMidYMid slice"
      className={cn("h-full w-full", className)}
    >
      <defs>
        <linearGradient id="cm-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#03110a" />
          <stop offset="55%" stopColor="#07271a" />
          <stop offset="100%" stopColor="#04150e" />
        </linearGradient>
        <radialGradient id="cm-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22c78e" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#22c78e" stopOpacity="0" />
        </radialGradient>
        <filter id="cm-blur" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="800" height="560" fill="url(#cm-bg)" />
      <ellipse cx="400" cy="280" rx="300" ry="190" fill="url(#cm-glow)" opacity="0.35" />

      {/* faint orbit arcs */}
      <g fill="none" stroke="rgba(126,232,192,0.14)">
        <ellipse
          cx="400"
          cy="280"
          rx="330"
          ry="220"
          strokeDasharray="2 12"
          className="art-spin-slower"
        />
        <ellipse cx="400" cy="280" rx="250" ry="160" />
      </g>

      {/* constellation edges */}
      <g stroke="rgba(126,232,192,0.32)" strokeWidth="1">
        {constellationEdges.map(([from, to], index) => (
          <line
            key={index}
            x1={constellationNodes[from].x}
            y1={constellationNodes[from].y}
            x2={constellationNodes[to].x}
            y2={constellationNodes[to].y}
            strokeDasharray={index % 4 === 0 ? "4 8" : undefined}
          />
        ))}
      </g>

      {/* nodes */}
      {constellationNodes.map((node, index) => (
        <g key={index}>
          <circle
            cx={node.x}
            cy={node.y}
            r={node.r * 2.4}
            fill="#22c78e"
            opacity="0.12"
            className="art-pulse-node"
            style={{ animationDelay: `${index * 0.45}s` }}
          />
          <circle
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill="#d8fff0"
            filter="url(#cm-blur)"
          />
        </g>
      ))}

      {/* background stars */}
      <g fill="#7ee8c0">
        {Array.from({ length: 42 }).map((_, index) => (
          <circle
            key={index}
            cx={Number((rand(index + 21) * 800).toFixed(1))}
            cy={Number((rand(index + 321) * 560).toFixed(1))}
            r={Number((0.4 + rand(index + 421) * 1.1).toFixed(2))}
            opacity={Number((0.12 + rand(index + 521) * 0.36).toFixed(2))}
            className="art-twinkle"
            style={{
              animationDelay: `${(rand(index + 621) * 7).toFixed(2)}s`,
              animationDuration: `${(5 + rand(index + 721) * 6).toFixed(2)}s`,
            }}
          />
        ))}
      </g>
    </svg>
  );
}

/* ————————————————————————————————————————————————
   Framed artwork panel
———————————————————————————————————————————————— */

export function ArtPanel({
  art,
  label,
  caption,
  className,
  children,
  scrim = "bottom",
}: {
  art: ReactNode;
  label?: string;
  caption?: string;
  className?: string;
  children?: ReactNode;
  scrim?: "bottom" | "both" | "none";
}) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-2xl border border-brand/20 bg-dark shadow-[0_30px_80px_-44px_rgba(4,33,22,0.65)]",
        className,
      )}
    >
      <div aria-hidden className="absolute inset-0">
        {art}
      </div>
      {scrim !== "none" && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/10 to-transparent"
        />
      )}
      {scrim === "both" && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-dark/75 via-dark/15 to-transparent"
        />
      )}
      {label && (
        <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-brand-soft backdrop-blur">
          <span className="h-1 w-1 rounded-full bg-brand-bright" />
          {label}
        </span>
      )}
      <div className="relative z-10 h-full">{children}</div>
      {caption && (
        <p className="absolute bottom-4 right-4 z-10 text-[9px] uppercase tracking-[0.16em] text-white/35">
          {caption}
        </p>
      )}
    </div>
  );
}
