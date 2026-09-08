"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PlaceholderMark from "@/components/PlaceholderMark";

export default function HeroHome() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.16]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100vh] w-full overflow-hidden bg-ink">
      <motion.div
        style={{ y: imgY, scale: imgScale, willChange: "transform" }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
          alt="Villa im Saarland"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.55)_75%)]" />
        <PlaceholderMark size="xl" />
      </motion.div>

      <motion.div
        style={{ y: titleY, opacity }}
        className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-[1400px] px-6 pb-20 pt-32 lg:px-10 lg:pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="mb-6 flex items-center gap-4"
        >
          <div className="relative h-12 w-16 rounded-lg bg-white/95 p-1 ring-1 ring-white/25">
            <Image
              src="/images/logo.jpeg"
              alt="Logo"
              fill
              sizes="64px"
              className="object-contain p-1"
            />
          </div>
          <div className="text-[11px] uppercase tracking-[0.32em] text-gold">
            Immobilien seit über zwei Jahrzehnten
          </div>
        </motion.div>

        <div className="max-w-[1050px]">
          {"Ihr Immobilienpartner für das Saarland und die Welt."
            .split(" ")
            .map((w, i, arr) => (
              <span key={i} className="inline">
                <span className="inline-block overflow-hidden align-bottom leading-[1]">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 1.1,
                      ease: [0.23, 1, 0.32, 1],
                      delay: 0.15 + i * 0.05,
                    }}
                    className="inline-block font-display text-[40px] leading-[1] text-white md:text-[68px] lg:text-[84px]"
                  >
                    {w}
                  </motion.span>
                </span>
                {i < arr.length - 1 && (
                  <span className="font-display text-[40px] leading-[1] text-white md:text-[68px] lg:text-[84px]">
                    {" "}
                  </span>
                )}
              </span>
            ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.9 }}
          className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/85 md:text-[17px]"
        >
          Inhabergeführt aus Saarbrücken. Verkauf, Vermietung, Finanzierung und
          Bewertung von Wohn-, Gewerbe- und Anlageimmobilien. Diskret, persönlich,
          mit Netzwerk in ganz Deutschland.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 1.05 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Link href="/service/immobilienbewertung" className="btn-gold">
            Immobilie kostenfrei bewerten
          </Link>
          <Link href="/kontakt" className="btn-ghost-dark">
            Termin vereinbaren
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 1.5 }}
        className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex justify-center"
      >
        <div className="flex flex-col items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/70">
          <span>Scrollen</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="block h-6 w-px bg-white/70"
          />
        </div>
      </motion.div>
    </section>
  );
}
