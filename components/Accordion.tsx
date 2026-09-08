"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export type AccordionItem = { q: string; a: string };

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-line rounded-2xl border border-line bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q}>
            <button
              type="button"
              className="flex w-full items-start justify-between gap-6 px-6 py-6 text-left transition-colors hover:bg-black/[0.02] md:px-8"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="flex items-start gap-5">
                <span className="mt-1 font-display text-xl text-gold">{`0${i + 1}`}</span>
                <span className="font-display text-xl leading-tight text-ink md:text-2xl">
                  {item.q}
                </span>
              </span>
              <span
                className={`mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ease-emil ${
                  isOpen ? "border-gold bg-gold text-ink" : "border-line text-ink"
                }`}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  style={{
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 240ms cubic-bezier(0.23,1,0.32,1)",
                  }}
                >
                  <path
                    d="M6 1v10M1 6h10"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.23, 1, 0.32, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-7 pl-[70px] pr-16 text-[14.5px] leading-relaxed text-muted md:px-8 md:pl-[80px] md:pr-24">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
