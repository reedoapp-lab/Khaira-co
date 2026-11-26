/* ------------------------------------------------
   Technical bot artwork. Drawn in code so it stays
   sharp, lightweight and on-brand at every size.
------------------------------------------------ */

function rand(seed: number) {
  const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return value - Math.floor(value);
}

const swarmStars = Array.from({ length: 44 }, (_, index) => ({
  x: Number((rand(index + 11) * 1200).toFixed(1)),
  y: Number((rand(index + 91) * 620).toFixed(1)),
  r: Number((0.5 + rand(index + 171) * 1.2).toFixed(2)),
  o: Number((0.12 + rand(index + 251) * 0.4).toFixed(2)),
  delay: Number((rand(index + 331) * 7).toFixed(2)),
}));

const coreStars = Array.from({ length: 36 }, (_, index) => ({
  x: Number((rand(index + 21) * 1000).toFixed(1)),
  y: Number((rand(index + 101) * 620).toFixed(1)),
  r: Number((0.5 + rand(index + 181) * 1.1).toFixed(2)),
  o: Number((0.12 + rand(index + 261) * 0.38).toFixed(2)),
  delay: Number((rand(index + 341) * 7).toFixed(2)),
}));

const coreTicks = Array.from({ length: 48 }, (_, index) => {
  const angle = (index / 48) * Math.PI * 2;
  const inner = index % 4 === 0 ? 222 : 230;
  return {
    x1: Number((500 + Math.cos(angle) * inner).toFixed(2)),
    y1: Number((305 + Math.sin(angle) * inner).toFixed(2)),
    x2: Number((500 + Math.cos(angle) * 238).toFixed(2)),
    y2: Number((305 + Math.sin(angle) * 238).toFixed(2)),
    strong: index % 4 === 0,
  };
});

const swarmTicks = Array.from({ length: 36 }, (_, index) => {
  const angle = (index / 36) * Math.PI * 2;
  return {
    x1: Number((600 + Math.cos(angle) * 238).toFixed(2)),
    y1: Number((310 + Math.sin(angle) * 238).toFixed(2)),
    x2: Number((600 + Math.cos(angle) * 250).toFixed(2)),
    y2: Number((310 + Math.sin(angle) * 250).toFixed(2)),
    strong: index % 3 === 0,
  };
});

type BotHeadProps = {
  accent?: string;
  dim?: boolean;
};

function BotHead({ accent = "#7ee8c0", dim = false }: BotHeadProps) {
  return (
    <g opacity={dim ? 0.72 : 1}>
      {/* soft body glow */}
      <ellipse cx="0" cy="4" rx="86" ry="82" fill="url(#bot-aura)" />

      {/* antenna */}
      <line
        x1="0"
        y1="-78"
        x2="0"
        y2="-112"
        stroke="#2a6b50"
        strokeWidth="2"
      />
      <circle
        cx="0"
        cy="-116"
        r="7"
        fill={accent}
        opacity="0.28"
        className="art-pulse-node"
      />
      <circle cx="0" cy="-116" r="3.2" fill={accent} />

      {/* side ears */}
      <rect
        x="-82"
        y="-34"
        width="16"
        height="46"
        rx="7"
        fill="#071b12"
        stroke="#2a6b50"
        strokeWidth="1.2"
      />
      <rect
        x="66"
        y="-34"
        width="16"
        height="46"
        rx="7"
        fill="#071b12"
        stroke="#2a6b50"
        strokeWidth="1.2"
      />
      <line x1="-76" y1="-20" x2="-76" y2="2" stroke="#3b8f6a" strokeWidth="1" />
      <line x1="76" y1="-20" x2="76" y2="2" stroke="#3b8f6a" strokeWidth="1" />

      {/* head shell */}
      <rect
        x="-66"
        y="-58"
        width="132"
        height="114"
        rx="30"
        fill="url(#bot-shell)"
        stroke="#3b8f6a"
        strokeWidth="1.4"
      />
      <path
        d="M-46 -50 Q0 -63 46 -50"
        fill="none"
        stroke="#9af3cf"
        strokeOpacity="0.45"
        strokeWidth="1.4"
      />

      {/* visor */}
      <rect
        x="-49"
        y="-34"
        width="98"
        height="46"
        rx="18"
        fill="url(#bot-visor)"
        stroke="#1f5c42"
        strokeWidth="1.2"
      />

      {/* eyes */}
      <g className="bot-blink">
        <circle cx="-20" cy="-11" r="8" fill={accent} opacity="0.2" />
        <circle cx="20" cy="-11" r="8" fill={accent} opacity="0.2" />
        <circle cx="-20" cy="-11" r="5.4" fill={accent} />
        <circle cx="20" cy="-11" r="5.4" fill={accent} />
        <circle cx="-20" cy="-11" r="2" fill="#f2fff9" />
        <circle cx="20" cy="-11" r="2" fill="#f2fff9" />
      </g>

      {/* lower face detail */}
      <rect x="-18" y="24" width="36" height="3" rx="1.5" fill="#22c78e" opacity="0.55" />
      <circle cx="45" cy="29" r="2.6" fill={accent} className="art-twinkle" />
      <circle cx="-45" cy="29" r="1.8" fill="#3b8f6a" opacity="0.8" />

      {/* neck + shoulder plate */}
      <rect
        x="-30"
        y="56"
        width="60"
        height="12"
        rx="6"
        fill="#071b12"
        stroke="#2a6b50"
        strokeWidth="1.1"
      />
      <rect x="-14" y="60" width="28" height="2.6" rx="1.3" fill="#22c78e" opacity="0.65" />
    </g>
  );
}

type BotAgentProps = {
  x: number;
  y: number;
  scale?: number;
  label?: string;
  dim?: boolean;
  delay?: number;
};

function BotAgent({ x, y, scale = 1, label, dim, delay = 0 }: BotAgentProps) {
  return (
    <g>
      <g transform={`translate(${x} ${y}) scale(${scale})`}>
        <g className="bot-float" style={{ animationDelay: `${delay}s` }}>
          <BotHead dim={dim} />
        </g>
      </g>
      {label && (
        <text
          x={x}
          y={y + 94 * scale}
          textAnchor="middle"
          fill="#9af3cf"
          fillOpacity="0.62"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
          fontSize="11"
          letterSpacing="2.4"
        >
          {label}
        </text>
      )}
    </g>
  );
}

function HudCorner({
  x,
  y,
  rotate = 0,
}: {
  x: number;
  y: number;
  rotate?: number;
}) {
  return (
    <path
      d="M0 22 V0 H22"
      transform={`translate(${x} ${y}) rotate(${rotate})`}
      fill="none"
      stroke="#3b8f6a"
      strokeOpacity="0.55"
      strokeWidth="1.2"
    />
  );
}

/* ------------------------------------------------
   BotSwarm - a connected mesh of working agents.
------------------------------------------------ */

export function BotSwarm({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 620"
      className={className}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="bs-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#04140d" />
          <stop offset="52%" stopColor="#061d13" />
          <stop offset="100%" stopColor="#03100a" />
        </linearGradient>
        <radialGradient id="bs-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22c78e" stopOpacity="0.22" />
          <stop offset="55%" stopColor="#0a7a56" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#04140d" stopOpacity="0" />
        </radialGradient>
        <pattern
          id="bs-grid"
          width="44"
          height="44"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M44 0H0V44"
            fill="none"
            stroke="#22c78e"
            strokeOpacity="0.06"
            strokeWidth="1"
          />
        </pattern>
        <linearGradient id="bot-shell" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#123d2b" />
          <stop offset="48%" stopColor="#0b2a1d" />
          <stop offset="100%" stopColor="#071b12" />
        </linearGradient>
        <linearGradient id="bot-visor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#020c08" />
          <stop offset="100%" stopColor="#041710" />
        </linearGradient>
        <radialGradient id="bot-aura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22c78e" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#22c78e" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bs-scan" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22c78e" stopOpacity="0" />
          <stop offset="50%" stopColor="#7ee8c0" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#22c78e" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="1200" height="620" fill="url(#bs-bg)" />
      <rect width="1200" height="620" fill="url(#bs-grid)" />
      <ellipse cx="600" cy="310" rx="420" ry="300" fill="url(#bs-glow)" />

      {swarmStars.map((star, index) => (
        <circle
          key={`swarm-star-${index}`}
          cx={star.x}
          cy={star.y}
          r={star.r}
          fill="#9af3cf"
          opacity={star.o}
          className="art-twinkle"
          style={{
            animationDelay: `${star.delay}s`,
            animationDuration: `${5 + (index % 5)}s`,
          }}
        />
      ))}

      {/* orbit system behind the core agent */}
      <g opacity="0.55">
        <g className="art-spin-slow">
          <circle
            cx="600"
            cy="310"
            r="236"
            fill="none"
            stroke="#2a6b50"
            strokeWidth="1"
            strokeDasharray="2 9"
          />
          <circle
            cx="600"
            cy="310"
            r="282"
            fill="none"
            stroke="#22c78e"
            strokeOpacity="0.22"
            strokeWidth="1"
            strokeDasharray="1 14"
          />
        </g>
        {swarmTicks.map((tick, index) => (
          <line
            key={`swarm-tick-${index}`}
            x1={tick.x1}
            y1={tick.y1}
            x2={tick.x2}
            y2={tick.y2}
            stroke="#3b8f6a"
            strokeOpacity={tick.strong ? 0.55 : 0.24}
            strokeWidth={tick.strong ? 1.4 : 0.8}
          />
        ))}
      </g>

      {/* data routes */}
      <g
        fill="none"
        stroke="#22c78e"
        strokeOpacity="0.28"
        strokeWidth="1.2"
        strokeDasharray="5 10"
        className="bot-data"
      >
        <path d="M600 300 C500 270 350 225 240 200" />
        <path d="M600 300 C700 260 850 215 960 185" />
        <path d="M600 300 C500 360 370 415 280 440" />
        <path d="M600 300 C700 360 850 415 940 445" />
      </g>

      {[
        { x: 430, y: 243, delay: "0s" },
        { x: 782, y: 228, delay: "1.2s" },
        { x: 448, y: 368, delay: "2.1s" },
        { x: 774, y: 372, delay: "0.6s" },
      ].map((packet, index) => (
        <g key={`swarm-packet-${index}`}>
          <circle
            cx={packet.x}
            cy={packet.y}
            r="9"
            fill="#22c78e"
            opacity="0.12"
            className="art-pulse-node"
            style={{ animationDelay: packet.delay }}
          />
          <circle cx={packet.x} cy={packet.y} r="2.4" fill="#9af3cf" />
        </g>
      ))}

      <BotAgent x={240} y={200} scale={0.86} label="QUALIFY" dim delay={0.4} />
      <BotAgent x={960} y={185} scale={0.9} label="ROUTE" dim delay={1.1} />
      <BotAgent x={280} y={440} scale={0.8} label="FOLLOW UP" dim delay={0.8} />
      <BotAgent x={940} y={445} scale={0.82} label="BOOK" dim delay={1.6} />

      <BotAgent x={600} y={300} scale={1.75} label="AGENT MESH CORE" delay={0} />

      {/* HUD framing */}
      <HudCorner x={24} y={24} />
      <HudCorner x={1176} y={24} rotate={90} />
      <HudCorner x={1176} y={596} rotate={180} />
      <HudCorner x={24} y={596} rotate={270} />

      <g
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fill="#9af3cf"
        letterSpacing="2.2"
      >
        <text x="42" y="40" fontSize="12" fillOpacity="0.62">
          KHAIRA // AGENT MESH
        </text>
        <text x="1158" y="40" fontSize="12" fillOpacity="0.5" textAnchor="end">
          05 AGENTS ONLINE
        </text>
        <text x="42" y="590" fontSize="10" fillOpacity="0.36">
          HUMAN-APPROVED AUTOMATION
        </text>
        <text x="1158" y="590" fontSize="10" fillOpacity="0.36" textAnchor="end">
          STATUS: ACTIVE
        </text>
      </g>

      <circle cx="30" cy="56" r="2.4" fill="#22c78e" className="art-pulse-node" />
      <circle cx="1170" cy="56" r="2.4" fill="#22c78e" className="art-pulse-node" style={{ animationDelay: "1.4s" }} />

      <rect
        x="0"
        y="0"
        width="1200"
        height="2"
        fill="url(#bs-scan)"
        className="bot-scan"
      />
    </svg>
  );
}

/* ------------------------------------------------
   BotCore - one agent, fully governed.
------------------------------------------------ */

function CorePanel({
  x,
  y,
  title,
  rows,
}: {
  x: number;
  y: number;
  title: string;
  rows: string[];
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect
        width="206"
        height="150"
        rx="12"
        fill="#04140d"
        fillOpacity="0.78"
        stroke="#2a6b50"
        strokeOpacity="0.7"
      />
      <path d="M0 12 H206" stroke="#2a6b50" strokeOpacity="0.35" />
      <text
        x="16"
        y="28"
        fill="#9af3cf"
        fillOpacity="0.62"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize="8"
        letterSpacing="2.2"
      >
        {title}
      </text>
      {rows.map((row, index) => (
        <g key={row}>
          <circle cx="18" cy={52 + index * 24} r="2.2" fill="#22c78e" opacity="0.8" />
          <text
            x="28"
            y={55 + index * 24}
            fill="#d7f8e8"
            fillOpacity="0.64"
            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            fontSize="9"
            letterSpacing="0.7"
          >
            {row}
          </text>
        </g>
      ))}
    </g>
  );
}

export function BotCore({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1000 620"
      className={className}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="bc-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#04140d" />
          <stop offset="55%" stopColor="#071f15" />
          <stop offset="100%" stopColor="#03100a" />
        </linearGradient>
        <radialGradient id="bc-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22c78e" stopOpacity="0.25" />
          <stop offset="52%" stopColor="#0a7a56" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#04140d" stopOpacity="0" />
        </radialGradient>
        <pattern
          id="bc-grid"
          width="44"
          height="44"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M44 0H0V44"
            fill="none"
            stroke="#22c78e"
            strokeOpacity="0.06"
            strokeWidth="1"
          />
        </pattern>
        <linearGradient id="bot-shell" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#123d2b" />
          <stop offset="48%" stopColor="#0b2a1d" />
          <stop offset="100%" stopColor="#071b12" />
        </linearGradient>
        <linearGradient id="bot-visor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#020c08" />
          <stop offset="100%" stopColor="#041710" />
        </linearGradient>
        <radialGradient id="bot-aura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22c78e" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#22c78e" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bc-scan" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22c78e" stopOpacity="0" />
          <stop offset="50%" stopColor="#7ee8c0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#22c78e" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="1000" height="620" fill="url(#bc-bg)" />
      <rect width="1000" height="620" fill="url(#bc-grid)" />
      <ellipse cx="500" cy="305" rx="360" ry="280" fill="url(#bc-glow)" />

      {coreStars.map((star, index) => (
        <circle
          key={`core-star-${index}`}
          cx={star.x}
          cy={star.y}
          r={star.r}
          fill="#9af3cf"
          opacity={star.o}
          className="art-twinkle"
          style={{
            animationDelay: `${star.delay}s`,
            animationDuration: `${5 + (index % 5)}s`,
          }}
        />
      ))}

      {/* rings */}
      <g opacity="0.65">
        <g className="art-spin-slow">
          <circle
            cx="500"
            cy="305"
            r="206"
            fill="none"
            stroke="#2a6b50"
            strokeWidth="1"
            strokeDasharray="2 10"
          />
          <circle
            cx="500"
            cy="305"
            r="262"
            fill="none"
            stroke="#22c78e"
            strokeOpacity="0.2"
            strokeWidth="1"
            strokeDasharray="1 16"
          />
        </g>
        {coreTicks.map((tick, index) => (
          <line
            key={`core-tick-${index}`}
            x1={tick.x1}
            y1={tick.y1}
            x2={tick.x2}
            y2={tick.y2}
            stroke="#3b8f6a"
            strokeOpacity={tick.strong ? 0.6 : 0.26}
            strokeWidth={tick.strong ? 1.4 : 0.8}
          />
        ))}
      </g>

      {/* side nodes */}
      <BotAgent x={190} y={132} scale={0.42} label="RESEARCH" dim delay={0.8} />
      <BotAgent x={812} y={500} scale={0.4} label="DRAFT" dim delay={1.5} />

      {/* circuit traces */}
      <g
        fill="none"
        stroke="#22c78e"
        strokeOpacity="0.26"
        strokeWidth="1.1"
        strokeDasharray="5 10"
        className="bot-data"
      >
        <path d="M500 305 C420 280 330 240 260 225" />
        <path d="M500 305 C580 280 670 240 740 225" />
        <path d="M500 305 C420 350 330 400 270 430" />
        <path d="M500 305 C580 350 670 400 730 430" />
      </g>

      <CorePanel
        x={44}
        y={204}
        title="CONTEXT"
        rows={["CRM / INBOX / CALENDAR", "DOCS / NOTES / CALLS", "SOURCE + HISTORY"]}
      />
      <CorePanel
        x={750}
        y={204}
        title="GUARDRAILS"
        rows={["HUMAN APPROVAL: ON", "AUDIT LOG: ON", "DATA SCOPE: CLIENT"]}
      />

      <BotAgent x={500} y={305} scale={1.45} label="HUMAN-IN-THE-LOOP BY DESIGN" delay={0} />

      {/* HUD framing */}
      <HudCorner x={24} y={24} />
      <HudCorner x={976} y={24} rotate={90} />
      <HudCorner x={976} y={596} rotate={180} />
      <HudCorner x={24} y={596} rotate={270} />

      <g
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fill="#9af3cf"
        letterSpacing="2.2"
      >
        <text x="42" y="40" fontSize="9" fillOpacity="0.62">
          KHAIRA // AGENT CORE
        </text>
        <text x="958" y="40" fontSize="9" fillOpacity="0.5" textAnchor="end">
          STATUS: ACTIVE
        </text>
        <text x="42" y="590" fontSize="8" fillOpacity="0.36">
          CONTEXT-AWARE / GOVERNED
        </text>
        <text x="958" y="590" fontSize="8" fillOpacity="0.36" textAnchor="end">
          HUMAN REVIEW: ON
        </text>
      </g>

      <circle cx="30" cy="56" r="2.4" fill="#22c78e" className="art-pulse-node" />
      <circle cx="970" cy="56" r="2.4" fill="#22c78e" className="art-pulse-node" style={{ animationDelay: "1.4s" }} />

      <rect
        x="0"
        y="0"
        width="1000"
        height="2"
        fill="url(#bc-scan)"
        className="bot-scan"
      />
    </svg>
  );
}
