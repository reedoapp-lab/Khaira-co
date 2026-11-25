"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * A soft emerald glow and ring that follow the pointer.
 * - Only mounts on fine-pointer devices.
 * - Uses a rAF loop with easing for the glow trail.
 * - Motion still tracks the pointer for reduced-motion users, but without lag.
 */
export function CursorEffect({ className }: { className?: string }) {
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let glowX = targetX;
    let glowY = targetY;
    let frame = 0;
    let visible = false;

    const show = () => {
      if (visible) return;
      visible = true;
      glowX = targetX;
      glowY = targetY;
      if (glowRef.current) glowRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    const hide = () => {
      visible = false;
      if (glowRef.current) glowRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const render = () => {
      frame = 0;
      const ease = reduce ? 1 : 0.14;
      glowX += (targetX - glowX) * ease;
      glowY += (targetY - glowY) * ease;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }

      if (
        !reduce &&
        (Math.abs(targetX - glowX) > 0.4 || Math.abs(targetY - glowY) > 0.4)
      ) {
        frame = requestAnimationFrame(render);
      }
    };

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      show();
      if (!frame) frame = requestAnimationFrame(render);
    };

    const onDown = () => ringRef.current?.classList.add("is-down");
    const onUp = () => ringRef.current?.classList.remove("is-down");
    const onLeave = () => hide();

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden
      className={cn(
        "cursor-layer pointer-events-none fixed inset-0 z-[60] overflow-hidden",
        className,
      )}
    >
      <div ref={glowRef} className="cursor-glow" />
      <div ref={ringRef} className="cursor-ring">
        <span className="cursor-ring-scale" />
      </div>
    </div>
  );
}
