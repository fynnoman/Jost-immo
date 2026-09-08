"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PlaceholderMark from "@/components/PlaceholderMark";

type Props = {
  src: string;
  alt: string;
  kicker?: string;
  title: string;
  body?: string;
  overlayContent?: React.ReactNode;
  heightVh?: number;
};

/**
 * A tall wrapper (2× viewport). While it scrolls,
 * a card in the middle scales up until it fills the viewport
 * and turns into the background for the overlaid caption.
 */
export default function ScaleToBackground({
  src,
  alt,
  kicker,
  title,
  body,
  overlayContent,
  heightVh = 220,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.05, 0.55], [0.78, 1]);
  const radius = useTransform(scrollYProgress, [0.05, 0.55], [28, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0.4, 0.65], [0, 0.65]);
  const captionOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
  const captionY = useTransform(scrollYProgress, [0.55, 0.85], [40, 0]);

  return (
    <section
      ref={ref}
      className="relative"
      style={{ height: `${heightVh}vh` }}
      aria-label={title}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div
          style={{ scale, borderRadius: radius }}
          className="absolute inset-4 md:inset-8 origin-center overflow-hidden shadow-card"
        >
          <Image src={src} alt={alt} fill priority sizes="100vw" className="object-cover" />
          <PlaceholderMark size="xl" />
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent"
          />
        </motion.div>

        <motion.div
          style={{ opacity: captionOpacity, y: captionY }}
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 mx-auto max-w-[1200px] px-6 pb-20 md:pb-28 lg:px-10"
        >
          {kicker && (
            <div className="mb-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-8 bg-gold" />
              {kicker}
            </div>
          )}
          <h2 className="font-display text-4xl leading-[1.05] text-white md:text-6xl lg:text-7xl">
            {title}
          </h2>
          {body && (
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/85 md:text-[17px]">
              {body}
            </p>
          )}
          {overlayContent && <div className="pointer-events-auto mt-8">{overlayContent}</div>}
        </motion.div>
      </div>
    </section>
  );
}
