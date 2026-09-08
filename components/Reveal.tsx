"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  as?: "div" | "span" | "h1" | "h2" | "h3" | "p";
  delay?: number;
  y?: number;
  className?: string;
};

export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 24,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const MotionTag = motion[as] as any;
  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
