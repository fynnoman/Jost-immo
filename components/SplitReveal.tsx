"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  text: string;
  className?: string;
  delayBase?: number;
};

export default function SplitReveal({ text, className = "", delayBase = 0 }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const words = text.split(/\s+/);

  return (
    <h2 ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline">
          <span className="inline-block overflow-hidden align-bottom leading-[inherit]">
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: "110%" }}
              animate={inView ? { y: "0%" } : { y: "110%" }}
              transition={{
                duration: 0.9,
                ease: [0.23, 1, 0.32, 1],
                delay: delayBase + i * 0.04,
              }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </h2>
  );
}
