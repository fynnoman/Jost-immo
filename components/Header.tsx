"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV } from "@/lib/nav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-24 bg-gradient-to-b from-black/25 to-transparent mask-b opacity-70" />

      <header
        className={`sticky top-0 z-50 w-full transition-[padding,backdrop-filter,background,box-shadow] duration-300 ease-emil ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1400px] items-center justify-between gap-6 rounded-full px-4 md:px-6 transition-all duration-300 ease-emil ${
            scrolled
              ? "border border-white/60 bg-white/70 shadow-header backdrop-saturate-150 backdrop-blur-xl"
              : "border border-transparent bg-white/40 backdrop-blur-md"
          }`}
          style={{ width: "calc(100% - 2rem)" }}
        >
          <Link
            href="/"
            className="flex items-center gap-3 py-2"
            aria-label="Immobilien-Jost Startseite"
            onClick={() => setOpenMenu(null)}
          >
            <div className="relative h-10 w-14">
              <Image
                src="/images/logo.jpeg"
                alt="Immobilien-Jost"
                fill
                priority
                sizes="56px"
                className="object-contain"
              />
            </div>
            <span className="hidden font-display text-[19px] leading-none text-ink md:inline">
              Immobilien<span className="text-gold">·</span>Jost
            </span>
          </Link>

          <nav
            className="relative hidden items-center gap-1 lg:flex"
            onMouseLeave={() => setOpenMenu(null)}
          >
            {NAV.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.children ? item.label : null)}
              >
                <Link
                  href={item.href}
                  className="relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium tracking-[0.05em] text-ink/85 transition-colors hover:text-ink"
                >
                  {item.label}
                  {item.children && (
                    <svg width="10" height="10" viewBox="0 0 10 10" className="opacity-60">
                      <path
                        d="M2 3.5l3 3 3-3"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </Link>

                <AnimatePresence>
                  {item.children && openMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                      className="absolute left-1/2 top-full z-50 mt-3 w-[340px] -translate-x-1/2"
                      style={{ transformOrigin: "top center" }}
                    >
                      <div className="glass overflow-hidden rounded-2xl p-2">
                        <div className="px-3 pb-2 pt-3">
                          <span className="kicker">{item.label}</span>
                        </div>
                        <div className="hairline-gold my-1" />
                        <ul className="p-1">
                          {item.children.map((c) => (
                            <li key={c.href}>
                              <Link
                                href={c.href}
                                className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-black/[0.04]"
                                onClick={() => setOpenMenu(null)}
                              >
                                <span className="mt-2 inline-block h-1 w-1 rounded-full bg-gold transition-all group-hover:w-3" />
                                <span className="flex flex-col">
                                  <span className="text-[13.5px] font-medium text-ink">
                                    {c.label}
                                  </span>
                                  {c.hint && (
                                    <span className="text-[11.5px] text-muted">{c.hint}</span>
                                  )}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/kontakt" className="hidden sm:inline-flex btn-gold text-[12px]">
              Termin anfragen
            </Link>
            <button
              type="button"
              aria-label="Menü öffnen"
              aria-expanded={mobileOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 backdrop-blur lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 top-0 h-[1.5px] w-full bg-ink transition-transform duration-300 ${
                    mobileOpen ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-ink transition-opacity duration-200 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] w-full bg-ink transition-transform duration-300 ${
                    mobileOpen ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-x-0 top-0 pt-24 glass-dark"
              style={{ height: "100dvh" }}
            >
              <div className="mx-auto max-w-xl px-6 py-6 text-white">
                <ul className="divide-y divide-white/10">
                  {NAV.map((item) => (
                    <li key={item.href} className="py-3">
                      <Link
                        href={item.href}
                        className="font-display text-3xl text-white/95"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5">
                          {item.children.map((c) => (
                            <li key={c.href}>
                              <Link
                                href={c.href}
                                className="text-[13px] text-white/70"
                                onClick={() => setMobileOpen(false)}
                              >
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link
                    href="/kontakt"
                    className="btn-gold"
                    onClick={() => setMobileOpen(false)}
                  >
                    Termin anfragen
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
