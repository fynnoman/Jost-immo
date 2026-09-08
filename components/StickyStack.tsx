"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PlaceholderMark from "@/components/PlaceholderMark";

export type StackCard = {
  kicker: string;
  title: string;
  body: string;
  image: string;
  href?: string;
};

/**
 * Stacked sticky cards. Each card is a full section that pins,
 * next one slides over it. Great for the "Service pillars" flow.
 */
export default function StickyStack({ cards }: { cards: StackCard[] }) {
  return (
    <div className="relative">
      {cards.map((card, i) => (
        <StackItem key={card.title} card={card} index={i} total={cards.length} />
      ))}
    </div>
  );
}

function StackItem({
  card,
  index,
  total,
}: {
  card: StackCard;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0.5, 0.85], [1, 0.55]);
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={ref}
      className="sticky h-[92vh] w-full px-4 md:px-8"
      style={{ top: `${80 + index * 14}px` }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="relative mx-auto flex h-full max-w-[1400px] items-stretch overflow-hidden rounded-3xl bg-white shadow-card"
      >
        <div className="grid w-full grid-cols-1 lg:grid-cols-[1.15fr_1fr]">
          <div className="relative min-h-[40vh] overflow-hidden lg:min-h-full">
            <Image
              src={card.image}
              alt={card.title}
              fill
              sizes="(min-width:1024px) 55vw, 100vw"
              className="object-cover"
            />
            <PlaceholderMark size="lg" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
            <div className="absolute left-6 top-6 rounded-full bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink backdrop-blur">
              0{index + 1} / 0{total}
            </div>
          </div>

          <motion.div
            style={{ y }}
            className="flex flex-col justify-center gap-6 bg-white px-8 py-14 lg:px-14"
          >
            <div className="kicker">{card.kicker}</div>
            <h3 className="font-display text-4xl leading-[1.05] text-ink md:text-5xl">
              {card.title}
            </h3>
            <p className="max-w-lg text-[15.5px] leading-relaxed text-muted">{card.body}</p>
            {card.href && (
              <div>
                <a href={card.href} className="btn-outline">
                  Mehr erfahren
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M2 6h8m0 0L7 3m3 3L7 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
