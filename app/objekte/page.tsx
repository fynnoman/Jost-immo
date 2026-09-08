import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";
import GlassCard from "@/components/GlassCard";
import PlaceholderMark from "@/components/PlaceholderMark";

export const metadata = {
  title: "Objekte",
  description:
    "Aktuelle Immobilienangebote von Immobilien-Jost. Wohn-, Gewerbe- und Anlageobjekte sowie Baugrundstücke im Saarland.",
};

const CATEGORIES = [
  {
    t: "Wohnimmobilien",
    d: "Häuser und Wohnungen zum Kauf oder zur Miete – im Saarland und darüber hinaus.",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=80",
  },
  {
    t: "Gewerbeimmobilien",
    d: "Büros, Praxis- und Handelsflächen, Anlageimmobilien mit Bestandsmietern.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80",
  },
  {
    t: "Baugrundstücke",
    d: "Bauplätze und Grundstücke für Ihr Neubauprojekt im Saarland.",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=80",
  },
];

const TEASER = [
  { region: "Saarbrücken", type: "Eigentumswohnung", spec: "3 Zi · 82 m² · Balkon" },
  { region: "Saarlouis", type: "Einfamilienhaus", spec: "5 Zi · 158 m² · Garten" },
  { region: "Neunkirchen", type: "Doppelhaushälfte", spec: "4 Zi · 124 m² · Garage" },
  { region: "Merzig-Wadern", type: "Baugrundstück", spec: "612 m² · voll erschlossen" },
  { region: "Saarpfalz-Kreis", type: "Anlageimmobilie", spec: "6 WE · Rendite ca. 4,1 %" },
  { region: "Sankt Wendel", type: "Gewerbeeinheit", spec: "220 m² · Ladenlokal · Frequenzlage" },
];

export default function ObjektePage() {
  return (
    <>
      <PageHero
        kicker="Objekte"
        title="Ausgewählte Immobilien. Persönlich betreut."
        subtitle="Unsere aktuellen Angebote finden Sie tagesaktuell auf ImmoScout24, Immowelt und Immonet. Sprechen Sie uns direkt an – viele Objekte vermitteln wir auch off-market."
        image="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Portal CTA */}
      <section className="relative bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="kicker">Live-Angebote</div>
              <SplitReveal
                text="Alle aktuellen Objekte auf einen Blick."
                className="mt-6 font-display text-4xl leading-[1.05] text-ink md:text-5xl"
              />
              <div className="hairline-gold mt-10 max-w-24" />
              <Reveal delay={0.15}>
                <p className="mt-8 max-w-lg text-[15.5px] leading-relaxed text-muted">
                  Unsere aktuellen Angebote werden laufend auf den großen Portalen
                  gepflegt. Für viele Objekte lohnt sich ein direkter Anruf – wir
                  vermarkten regelmäßig Immobilien noch bevor sie öffentlich
                  ausgeschrieben sind.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href="https://www.immowelt.de"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gold"
                  >
                    Objekte auf Immowelt
                  </a>
                  <Link href="/kontakt" className="btn-outline">
                    Off-market anfragen
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CATEGORIES.map((c, i) => (
                <Reveal key={c.t} delay={i * 0.06} y={20}>
                  <div className="group relative overflow-hidden rounded-2xl">
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={c.img}
                        alt={c.t}
                        fill
                        sizes="(min-width:1024px) 20vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-emil group-hover:scale-[1.04]"
                      />
                      <PlaceholderMark size="md" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
                      <div className="absolute inset-x-4 bottom-4 text-white">
                        <div className="text-[10.5px] uppercase tracking-[0.22em] text-gold">
                          {`0${i + 1}`}
                        </div>
                        <div className="mt-1 font-display text-2xl leading-tight">{c.t}</div>
                        <div className="mt-1.5 text-[12.5px] text-white/80">{c.d}</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teaser list */}
      <section className="relative bg-smoke py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="kicker">Auszug · Nur ein Ausschnitt</div>
              <SplitReveal
                text="Aktuell in Vermarktung."
                className="mt-6 font-display text-4xl leading-[1.05] text-ink md:text-5xl"
              />
            </div>
            <p className="max-w-md text-[13.5px] text-muted">
              Die dargestellten Objekte sind exemplarisch. Bitte kontaktieren
              Sie uns für den vollständigen Bestand und aktuelle Verfügbarkeiten.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {TEASER.map((t, i) => (
              <Reveal key={i} delay={i * 0.04} y={16}>
                <GlassCard className="flex h-full flex-col gap-4 !p-6">
                  <div className="flex items-center justify-between">
                    <div className="kicker">{t.region}</div>
                    <span className="rounded-full border border-gold/50 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.22em] text-gold">
                      In Vermarktung
                    </span>
                  </div>
                  <div className="font-display text-2xl text-ink">{t.type}</div>
                  <div className="text-[13.5px] text-muted">{t.spec}</div>
                  <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
                    <Link href="/kontakt" className="text-[12.5px] font-medium uppercase tracking-[0.18em] text-ink">
                      Anfragen
                    </Link>
                    <span className="text-gold">
                      <svg width="14" height="14" viewBox="0 0 12 12">
                        <path
                          d="M2 6h8m0 0L7 3m3 3L7 9"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
