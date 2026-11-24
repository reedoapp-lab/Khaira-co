"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      touchMultiplier: 1.35,
      smoothWheel: true,
      anchors: false,
    });

    lenisRef.current = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const onAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey) return;

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      let element: Element | null = null;
      try {
        element = document.querySelector(hash);
      } catch {
        return;
      }
      if (!element) return;

      event.preventDefault();
      // Lenis already honours the global scroll-padding-top, so no extra
      // offset is needed here.
      lenis.scrollTo(element as HTMLElement, {
        offset: 0,
        duration: 1.15,
      });
      window.history.pushState(null, "", hash);
    };

    const onHashChange = () => {
      const hash = window.location.hash;
      if (!hash || hash === "#") return;

      let element: Element | null = null;
      try {
        element = document.querySelector(hash);
      } catch {
        return;
      }
      if (element) {
        lenis.scrollTo(element as HTMLElement, { offset: 0 });
      }
    };

    document.addEventListener("click", onAnchorClick);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      window.removeEventListener("hashchange", onHashChange);
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    const hash = window.location.hash;

    const scrollToDestination = () => {
      if (hash && hash !== "#") {
        let element: Element | null = null;
        try {
          element = document.querySelector(hash);
        } catch {
          element = null;
        }

        if (element) {
          if (lenis) {
            lenis.scrollTo(element as HTMLElement, {
              offset: 0,
              immediate: true,
            });
          } else {
            const top =
              element.getBoundingClientRect().top + window.scrollY - 88;
            window.scrollTo({ top, behavior: "auto" });
          }
          return;
        }
      }

      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    };

    // Allow the new route to render before measuring the target.
    const timer = window.setTimeout(scrollToDestination, 80);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
