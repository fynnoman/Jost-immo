"use client";

import { motion } from "framer-motion";

type Props = {
  items: string[];
  speed?: number;
  className?: string;
};

export default function Marquee({ items, speed = 45, className = "" }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-14 whitespace-nowrap will-change-transform"
        animate={{ transform: ["translateX(0%)", "translateX(-50%)"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center gap-4">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="font-display text-2xl text-ink/70 md:text-3xl">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
