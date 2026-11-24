"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export type FaqItem = {
  question: string;
  answer: string;
};

export function Faq({
  items,
  className,
}: {
  items: FaqItem[];
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();
  const baseId = useId();

  return (
    <div className={cn("border-t border-line", className)}>
      {items.map((item, index) => {
        const isOpen = open === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.question} className="border-b border-line">
            <button
              type="button"
              id={buttonId}
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="group flex w-full items-center justify-between gap-6 py-5 text-left md:py-6"
            >
              <span className="flex items-baseline gap-4">
                <span className="text-[11px] font-medium tabular-nums text-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "text-[15px] font-medium tracking-[-0.01em] transition-colors duration-300 md:text-base",
                    isOpen ? "text-brand" : "text-ink group-hover:text-brand",
                  )}
                >
                  {item.question}
                </span>
              </span>
              <span
                className={cn(
                  "grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300",
                  isOpen
                    ? "rotate-45 border-brand/30 bg-brand-wash text-brand"
                    : "border-line text-muted group-hover:border-brand/30 group-hover:text-brand",
                )}
              >
                <Plus className="h-3.5 w-3.5" strokeWidth={1.6} />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.38, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 pl-8 pr-4 text-sm leading-relaxed text-muted">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
