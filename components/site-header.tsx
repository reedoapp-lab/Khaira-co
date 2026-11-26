"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";
import { Logo } from "@/components/logo";
import { CtaLink } from "@/components/cta-link";

const featuredServices = services.slice(0, 3);

export default function SiteHeader() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (desktop.matches) setOpen(false);
    };

    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const menu = menuRef.current;
    const focusables = menu
      ? Array.from(
          menu.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
          ),
        )
      : [];
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 60);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || focusables.length === 0) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line/80 bg-white/85 backdrop-blur-xl">
        <div className="container-x grid h-[72px] grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
          <Logo priority />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 justify-self-center lg:flex"
          >
            {site.nav.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-200",
                    active ? "text-ink" : "text-muted hover:text-ink",
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="primary-nav-active"
                      className="absolute inset-x-3.5 -bottom-[1px] h-[2px] rounded-full bg-brand"
                      transition={{ duration: 0.4, ease: EASE }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center justify-end gap-2">
            <div className="hidden sm:block">
              <CtaLink href="/contact" size="sm" withArrow={false}>
                Book a Consultation
              </CtaLink>
            </div>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-haspopup="dialog"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2.5 text-muted transition-colors hover:border-brand/30 hover:text-ink lg:hidden"
            >
              <Menu className="h-4 w-4" strokeWidth={1.6} />
              <span className="text-[12px] font-medium">Menu</span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed inset-0 z-[80] flex flex-col bg-white lg:hidden"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-mist via-mist/60 to-transparent"
            />
            <div
              aria-hidden
              className="ambient-blob -right-20 top-10 h-64 w-64 bg-brand/15"
            />

            <div className="container-x relative flex h-[72px] shrink-0 items-center justify-between border-b border-line">
              <Logo onClick={() => setOpen(false)} />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => {
                  setOpen(false);
                  menuButtonRef.current?.focus();
                }}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-muted transition-colors hover:border-brand/30 hover:text-ink"
              >
                <X className="h-4 w-4" strokeWidth={1.6} />
              </button>
            </div>

            <div
              data-lenis-prevent
              className="container-x relative flex-1 overflow-y-auto py-8"
            >
              <nav aria-label="Mobile">
                <ul className="space-y-1">
                  {site.nav.map((link, index) => {
                    const active = isActive(link.href);
                    return (
                      <motion.li
                        key={link.href}
                        initial={
                          reduceMotion ? false : { opacity: 0, y: 14 }
                        }
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: reduceMotion ? 0 : 0.04 + index * 0.04,
                          ease: EASE,
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "group flex items-baseline justify-between gap-4 border-b border-line/80 py-3.5",
                            active ? "text-brand" : "text-ink",
                          )}
                        >
                          <span className="flex items-baseline gap-4">
                            <span className="text-[10px] font-medium tabular-nums text-faint">
                              0{index + 1}
                            </span>
                            <span className="font-display text-[clamp(1.9rem,8vw,2.6rem)] font-medium tracking-[-0.04em]">
                              {link.label}
                            </span>
                          </span>
                          <ArrowUpRight
                            aria-hidden
                            className="h-5 w-5 shrink-0 text-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                            strokeWidth={1.4}
                          />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              <div className="mt-10">
                <p className="eyebrow">Popular services</p>
                <ul className="mt-4 space-y-3">
                  {featuredServices.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services#${service.slug}`}
                        onClick={() => setOpen(false)}
                        className="link-underline text-sm text-muted hover:text-ink"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <CtaLink
                  href="/contact"
                  size="lg"
                  className="w-full"
                  withArrow
                >
                  Book a Free Consultation
                </CtaLink>
              </div>

              <div className="mt-10 border-t border-line pt-6 pb-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-faint">
                  Contact
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {site.contact.email}
                  </a>
                  <a
                    href={`mailto:${site.contact.infoEmail}`}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {site.contact.infoEmail}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
