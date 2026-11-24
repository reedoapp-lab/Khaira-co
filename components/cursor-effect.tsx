"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";

type CursorEffectProps = {
  className?: string;
  size?: number;
  followFactor?: number;
  color?: string;
  opacity?: number;
};

export function CursorEffect({
  className,
  size = 30,
  followFactor = 0.15,
  color = "var(--color-brand)",
  opacity = 0.4,
}: CursorEffectProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setPosition({
        x: e.clientX - size / 2,
        y: e.clientY - size / 2,
      });
    };

    document.addEventListener("mousemove", handler);

    // Set initial position via CSS variable
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--cursor-orb-position",
        `${position.x}px ${position.y}px`
      );
    }

    return () => {
      document.removeEventListener("mousemove", handler);
    };
  }, [followFactor, size]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={cn(
        "fixed pointer-events-none",
        "transform-gpu",
        "overflow-hidden",
        "z-50",
        className,
      )}
    >
      <div
        ref={orbRef}
        aria-hidden
        className="cursor-orb absolute w-full h-full rounded-full border-2 border-brand/40 bg-brand/10 transition-all duration-500 ease-out shadow-[0_0_30px_rgba(10,122,86,0.5)]"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          opacity,
        }}
      />
    </div>
  );
}