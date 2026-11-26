"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import type { MotionValue } from "motion/react";
import { cn } from "@/lib/utils";

const center = { x: 320, y: 240 };

function point(radius: number, angle: number) {
  const radians = (angle * Math.PI) / 180;
  return {
    x: center.x + Math.cos(radians) * radius,
    y: center.y + Math.sin(radians) * radius,
  };
}

const outerNode = point(214, -90);
const middleNode = point(157, 18);
const innerNode = point(104, 142);

export function ScrollOrbits({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const outer = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const middle = useTransform(scrollYProgress, [0, 1], [0, -205]);
  const inner = useTransform(scrollYProgress, [0, 1], [0, 275]);
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.8]);

  const rotateStyle = (value: MotionValue<number>) => ({
    rotate: reduceMotion ? 0 : value,
    transformOrigin: `${center.x}px ${center.y}px`,
    transformBox: "view-box" as const,
  });

  return (
    <div aria-hidden className={cn("absolute inset-0", className)}>
      <svg
        viewBox="0 0 640 480"
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full"
        fill="none"
      >
        <defs>
          <radialGradient id="scroll-orbits-bg" cx="50%" cy="48%" r="72%">
            <stop offset="0%" stopColor="#0b3927" />
            <stop offset="58%" stopColor="#062016" />
            <stop offset="100%" stopColor="#04110b" />
          </radialGradient>
          <linearGradient id="scroll-orbits-arc" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22c78e" stopOpacity="0" />
            <stop offset="45%" stopColor="#c9f7e6" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#22c78e" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="scroll-orbits-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22c78e" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#0a7a56" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#04110b" stopOpacity="0.9" />
          </radialGradient>
          <filter id="scroll-orbits-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="640" height="480" fill="url(#scroll-orbits-bg)" />

        <g stroke="#7ee8c0" strokeOpacity="0.08" strokeWidth="0.6">
          {Array.from({ length: 9 }, (_, index) => (
            <path key={`v-${index}`} d={`M${index * 80} 0V480`} />
          ))}
          {Array.from({ length: 7 }, (_, index) => (
            <path key={`h-${index}`} d={`M0 ${index * 80}H640`} />
          ))}
        </g>

        <g stroke="#7ee8c0" strokeOpacity="0.2" strokeWidth="0.8">
          {Array.from({ length: 64 }, (_, index) => {
            const angle = (index * 360) / 64;
            const from = point(232, angle);
            const to = point(index % 8 === 0 ? 244 : 238, angle);
            return (
              <line
                key={index}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                strokeOpacity={index % 8 === 0 ? 0.38 : 0.16}
              />
            );
          })}
        </g>

        <circle
          cx={center.x}
          cy={center.y}
          r="214"
          stroke="#7ee8c0"
          strokeOpacity="0.16"
        />
        <circle
          cx={center.x}
          cy={center.y}
          r="157"
          stroke="#7ee8c0"
          strokeOpacity="0.12"
        />
        <circle
          cx={center.x}
          cy={center.y}
          r="104"
          stroke="#7ee8c0"
          strokeOpacity="0.14"
        />

        <motion.g style={rotateStyle(outer)}>
          <circle
            cx={center.x}
            cy={center.y}
            r="214"
            stroke="url(#scroll-orbits-arc)"
            strokeWidth="2.2"
            strokeDasharray="180 1164"
            strokeLinecap="round"
          />
          <circle
            cx={outerNode.x}
            cy={outerNode.y}
            r="13"
            fill="#22c78e"
            fillOpacity="0.18"
          />
          <circle
            cx={outerNode.x}
            cy={outerNode.y}
            r="5.5"
            fill="#7ee8c0"
            filter="url(#scroll-orbits-glow)"
          />
          <circle cx={outerNode.x} cy={outerNode.y} r="2" fill="#eafff5" />
        </motion.g>

        <motion.g style={rotateStyle(middle)}>
          <circle
            cx={center.x}
            cy={center.y}
            r="157"
            stroke="#7ee8c0"
            strokeOpacity="0.68"
            strokeWidth="1.4"
            strokeDasharray="4 13"
          />
          <circle
            cx={middleNode.x}
            cy={middleNode.y}
            r="11"
            fill="#0a7a56"
            fillOpacity="0.22"
          />
          <circle
            cx={middleNode.x}
            cy={middleNode.y}
            r="4.8"
            fill="#22c78e"
            filter="url(#scroll-orbits-glow)"
          />
          <circle cx={middleNode.x} cy={middleNode.y} r="1.8" fill="#eafff5" />
        </motion.g>

        <motion.g style={rotateStyle(inner)}>
          <circle
            cx={center.x}
            cy={center.y}
            r="104"
            stroke="url(#scroll-orbits-arc)"
            strokeWidth="1.8"
            strokeDasharray="96 557"
            strokeLinecap="round"
          />
          <circle
            cx={innerNode.x}
            cy={innerNode.y}
            r="10"
            fill="#22c78e"
            fillOpacity="0.2"
          />
          <circle
            cx={innerNode.x}
            cy={innerNode.y}
            r="4.2"
            fill="#c9f7e6"
            filter="url(#scroll-orbits-glow)"
          />
        </motion.g>

        <motion.g style={{ opacity: reduceMotion ? 0.9 : glow }}>
          <circle
            cx={center.x}
            cy={center.y}
            r="58"
            fill="url(#scroll-orbits-core)"
            stroke="#7ee8c0"
            strokeOpacity="0.36"
          />
          <circle
            cx={center.x}
            cy={center.y}
            r="34"
            stroke="#7ee8c0"
            strokeOpacity="0.2"
            strokeDasharray="2 7"
          />
          <circle
            cx={center.x}
            cy={center.y}
            r="5"
            fill="#eafff5"
            filter="url(#scroll-orbits-glow)"
          />
        </motion.g>
      </svg>
    </div>
  );
}
