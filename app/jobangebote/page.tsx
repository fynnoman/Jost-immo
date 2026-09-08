import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";
import GlassCard from "@/components/GlassCard";
import ScaleToBackground from "@/components/ScaleToBackground";

export const metadata = {
  title: "Jobangebote",
  description:
    "Immobilienmakler, Immobilienberater und Kundenbetreuer auf selbstständiger Basis gesucht. Kein Franchise, hohe Provisionsanteile, kein Eigenkapital nötig.",
};

const PROFILES = [
  {
    t: "Sie arbeiten in einem Gemeinschaftsbüro?",
    d: "Und möchten Ihren eigenen Provisionsanteil erhöhen? Bei uns behalten Sie deutlich mehr.",
  },
  {
    t: "Sie sind Quereinsteiger?",
    d: "Mit entsprechenden Voraussetzungen und Verkaufstalent starten Sie bei uns strukturiert durch.",
  },
  {
    t: "Sie suchen Anschluss an ein Profi-Team?",
    d: "Ein Team mit Erfahrung, klarer Struktur und dem Fokus auf saarländische Marktkenntnis.",
  },
  {
    t: "Sie wollen kein hohes Startkapital?",
    d: "Kein Eigenkapital. Ausstattung, Portale und rechtliche Basis bekommen Sie von uns.",
  },
];

const BENEFITS = [
  ["Höchste Provisionsanteile", "Sie verdienen an Ihrem Erfolg mit – transparent und fair."],
  ["Kein Eigenkapital", "Sie starten ohne Investment und mit klarer Kostenstruktur."],
  ["Portale inklusive", "Wir schalten Ihre Objekte auf ImmoScout24, Immowelt, Immonet u. v. m."],
  ["Komplette Ausstattung", "E-Mail-Account, Visitenkarten, Auto-Magnete, Verkaufsschilder."],
  ["Formulare & Recht", "Alle Formulare und rechtlichen Hinweise erhalten Sie von uns."],
  ["Ausbildung & Support", "Wir bilden Sie aus und stehen Ihnen jederzeit zur Seite."],
];

export default function JobangebotePage() {
  return (
    <>
      <PageHero
        kicker="Jobangebote"
        title="Als Immobilienmakler bei uns durchstarten."
        subtitle="Wir suchen Kolleginnen und Kollegen auf selbstständiger Basis für den Aufbau eines neuen Vertriebsgebietes im Saarland – gerne auch Quereinsteiger."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Intro */}
      <section className="relative bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="kicker">Wir suchen</div>
              <SplitReveal
                text="Immobilienberater · Immobilienmakler · Kundenbetreuer."
                className="mt-6 font-display text-4xl leading-[1.05] text-ink md:text-5xl"
              />
              <div className="hairline-gold mt-10 max-w-24" />
              <Reveal delay={0.1}>
                <p className="mt-8 max-w-lg text-[15.5px] leading-relaxed text-muted">
                  Auf selbstständiger Basis. Zum Aufbau eines neuen
                  Vertriebsgebietes. Makler, Selbstständige, Handelsvertreter –
                  gerne auch Quereinsteiger mit den passenden Voraussetzungen.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link href="/kontakt" className="btn-gold">
                    Persönliches Gespräch anfragen
                  </Link>
                  <a href="tel:015238743864" className="btn-outline">
                    0152 3874 3864
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {PROFILES.map((p, i) => (
                <Reveal key={p.t} delay={i * 0.06} y={20}>
                  <GlassCard className="h-full !p-6">
                    <div className="kicker">Passt zu Ihnen?</div>
                    <div className="mt-4 font-display text-xl leading-tight text-ink">
                      {p.t}
                    </div>
                    <p className="mt-3 text-[13.5px] text-muted">{p.d}</p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative bg-smoke py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="kicker">Was Sie bekommen</div>
              <SplitReveal
                text="Ein perfektes Setup. Ohne hohe Kosten."
                className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] text-ink md:text-5xl"
              />
            </div>
            <div className="text-[13px] uppercase tracking-[0.22em] text-gold">
              Wir sind kein Franchise
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {BENEFITS.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.05} y={18}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-white p-7">
                  <div className="flex items-center justify-between">
                    <div className="kicker">{`0${i + 1}`}</div>
                    <span className="h-2 w-2 rounded-full bg-gold" />
                  </div>
                  <div className="font-display text-2xl text-ink">{t}</div>
                  <p className="text-[13.5px] text-muted">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ScaleToBackground
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80"
        alt="Team im Büro"
        kicker="Ihr Erfolg ist unser Antrieb"
        title="Wir freuen uns auf Sie."
        body="Melden Sie sich für ein persönliches Gespräch. Wir versprechen höchste Provisionsanteile, ein starkes Team und einen professionellen Rahmen – ohne Konzernstrukturen."
        overlayContent={
          <div className="flex flex-wrap gap-3">
            <Link href="/kontakt" className="btn-gold">
              Bewerbungsgespräch anfragen
            </Link>
            <a href="mailto:immobilien-jost@gmx.de" className="btn-ghost-dark">
              immobilien-jost@gmx.de
            </a>
          </div>
        }
      />
    </>
  );
}
