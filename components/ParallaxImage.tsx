"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import PlaceholderMark from "@/components/PlaceholderMark";

type Props = {
  src: string;
  alt: string;
  className?: string;
  strength?: number;
  priority?: boolean;
};

export default function ParallaxImage({
  src,
  alt,
  className = "",
  strength = 120,
  priority,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const raw = useTransform(scrollYProgress, [0, 1], [-strength, strength]);
  const y = useSpring(raw, { stiffness: 90, damping: 22, mass: 0.6 });

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ willChange: "transform" }}
    >
      <motion.div
        style={{ y, willChange: "transform" }}
        className="absolute inset-x-0 -top-[15%] h-[130%]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          priority={priority}
          className="object-cover"
        />
      </motion.div>
      <PlaceholderMark size="xl" />
    </div>
  );
}
