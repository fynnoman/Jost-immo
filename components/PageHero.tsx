"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PlaceholderMark from "@/components/PlaceholderMark";

type Props = {
  kicker?: string;
  title: string;
  subtitle?: string;
  image: string;
  height?: string;
};

export default function PageHero({
  kicker,
  title,
  subtitle,
  image,
  height = "80vh",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.14]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-ink" style={{ height }}>
      <motion.div
        style={{ y, scale, willChange: "transform" }}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/80" />
        <PlaceholderMark size="xl" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-20 lg:px-10 lg:pb-28"
      >
        {kicker && (
          <div className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-gold">
            <span className="h-px w-8 bg-gold" />
            {kicker}
          </div>
        )}
        <h1 className="max-w-[1050px] font-display text-4xl leading-[1.02] text-white md:text-7xl lg:text-[92px]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/85 md:text-[17px]">
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
}
