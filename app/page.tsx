import Link from "next/link";
import Image from "next/image";
import HeroHome from "@/components/HeroHome";
import Marquee from "@/components/Marquee";
import StickyStack, { type StackCard } from "@/components/StickyStack";
import ScaleToBackground from "@/components/ScaleToBackground";
import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";
import GlassCard from "@/components/GlassCard";
import ParallaxImage from "@/components/ParallaxImage";
import PlaceholderMark from "@/components/PlaceholderMark";
import { REGIONS } from "@/lib/nav";

const SERVICES: StackCard[] = [
  {
    kicker: "Verkauf",
    title: "Ihr bester Verkaufspreis. Diskret vermarktet.",
    body: "Vom Exposé über professionelle Fotografie bis zum Bieterverfahren – wir vermarkten Ihre Immobilie zielgerichtet und diskret. Ergebnisorientiert und mit Blick auf den echten Markt im Saarland.",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=80",
    href: "/service/verkauf",
  },
  {
    kicker: "Finanzierung",
    title: "Baufinanzierung, die für Sie rechnet.",
    body: "Als eingetragener Immobiliardarlehensvermittler nach §34i GewO arbeiten wir u. a. mit Deutscher Bank, Commerzbank, ING, HypoVereinsbank, Santander, DSL Bank und Deutscher Bausparkasse Badenia.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1800&q=80",
    href: "/service/finanzierung",
  },
  {
    kicker: "Vermietung",
    title: "Vermietung mit dem richtigen Mieter.",
    body: "Wir bringen Ihre Wohnung, Ihr Haus oder Ihr Gewerbeobjekt an einen Mieter, der zu Ihnen und Ihrer Immobilie passt. Von der Bonitätsprüfung bis zur Übergabe alles aus einer Hand.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=80",
    href: "/service/vermietung",
  },
  {
    kicker: "Bewertung",
    title: "Was Ihre Immobilie heute wirklich wert ist.",
    body: "Wir erstellen im ersten Schritt eine marktgerechte Wertermittlung, die alle relevanten Faktoren berücksichtigt – als solide Grundlage für den besten Verkaufspreis Ihrer Immobilie.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=80",
    href: "/service/immobilienbewertung",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroHome />

      <section className="relative bg-white py-8 md:py-12">
        <Marquee
          items={[
            "Kauf",
            "Verkauf",
            "Vermietung",
            "Finanzierung",
            "Bewertung",
            "Homestaging",
            "Energieausweis",
            "Beratung",
          ]}
        />
      </section>

      {/* Intro band */}
      <section className="relative bg-white py-24 md:py-36 lg:py-44">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-10">
          <div>
            <div className="kicker">Herzlich willkommen</div>
            <SplitReveal
              text="Für uns ist eine Immobilie mehr als vier Wände."
              className="mt-6 font-display text-4xl leading-[1.05] text-ink md:text-6xl"
            />
            <div className="hairline-gold mt-10 max-w-24" />
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-lg text-[15.5px] leading-relaxed text-muted">
                Jedes Haus erzählt seine eigene Geschichte. Bestimmt durch die
                Menschen, die es gebaut und darin gewohnt haben. Und es hat seine
                eigene Zukunft – gefüllt mit dem Leben seiner Bewohner. Eine
                Immobilie ist ein Zuhause. Für uns zählt der Mensch.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/ueber-uns" className="btn-outline">
                  Über uns
                </Link>
                <Link href="/kontakt" className="btn-gold">
                  Persönlich kennenlernen
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <Reveal y={40}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
                  alt="Wohnraum mit Panoramafenster"
                  fill
                  sizes="(min-width:1024px) 45vw, 100vw"
                  className="object-cover"
                />
                <PlaceholderMark size="lg" />
              </div>
            </Reveal>
            <Reveal delay={0.25} y={40}>
              <div className="absolute -bottom-10 -left-8 hidden max-w-xs lg:block">
                <GlassCard variant="gold" className="!p-6">
                  <div className="kicker">Andreas Jost</div>
                  <p className="mt-3 font-display text-2xl leading-tight text-ink">
                    „Ehrlichkeit, Wertschätzung und Respekt – das ist unser
                    Anspruch an jeden Auftrag.“
                  </p>
                </GlassCard>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Sticky service stack */}
      <section id="services" className="relative bg-smoke pt-24 md:pt-36">
        <div className="mx-auto mb-16 max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="kicker">Unsere Leistungen</div>
              <SplitReveal
                text="Ein Partner. Alle Fragen rund um Ihre Immobilie."
                className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] text-ink md:text-6xl"
              />
            </div>
            <Link href="/service" className="btn-outline">
              Alle Leistungen ansehen
              <Arrow />
            </Link>
          </div>
        </div>

        <StickyStack cards={SERVICES} />

        <div className="h-40" />
      </section>

      {/* Scale-to-background: Saarland */}
      <ScaleToBackground
        src="https://images.unsplash.com/photo-1568827999250-3f6afff96e66?auto=format&fit=crop&w=2400&q=80"
        alt="Saarschleife"
        kicker="Zuhause im Saarland"
        title="Wir kennen jede Ecke. Und den Wert, der darin steckt."
        body="Saarbrücken, Sankt Wendel, Saarlouis, Neunkirchen, Saarpfalz-Kreis, Merzig-Wadern. Wir bewerten und vermarkten Ihre Immobilie mit echter regionaler Marktkenntnis – und mit einem Netzwerk, das weit über das Saarland hinausreicht."
        overlayContent={
          <div className="flex flex-wrap gap-2">
            {REGIONS.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[12px] uppercase tracking-[0.15em] text-white backdrop-blur transition-colors hover:border-gold/70 hover:bg-white/15"
              >
                {r.name}
              </Link>
            ))}
          </div>
        }
      />

      {/* Valuation CTA */}
      <section className="relative bg-white py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-ink text-white shadow-card">
            <div className="pointer-events-none absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
                alt=""
                fill
                sizes="100vw"
                className="object-cover opacity-25"
              />
              <PlaceholderMark size="xl" />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink via-ink/85 to-ink/60" />
            </div>
            <div className="relative grid gap-10 p-8 md:grid-cols-2 md:p-14 lg:p-20">
              <div>
                <div className="kicker">Kostenfrei · unverbindlich</div>
                <h3 className="mt-6 max-w-lg font-display text-4xl leading-[1.05] md:text-5xl">
                  Ihre marktgerechte Immobilienbewertung.
                </h3>
                <p className="mt-6 max-w-lg text-white/75">
                  Wir bewerten Haus, Wohnung oder Grundstück – auf Wunsch mit
                  Bieterverfahren zum bestmöglichen Preis. Ohne Verpflichtung,
                  ohne Kosten. Nur seriöse Marktkenntnis.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/service/immobilienbewertung" className="btn-gold">
                    Bewertung anfragen
                  </Link>
                  <Link href="/kontakt" className="btn-ghost-dark">
                    Rückruf vereinbaren
                  </Link>
                </div>
              </div>
              <ul className="grid gap-4 md:mt-4">
                {[
                  ["Marktkonforme Wertermittlung", "Vergleichs-, Sach- und Ertragswertfaktoren."],
                  ["Bieterverfahren möglich", "Für den bestmöglichen Verkaufspreis."],
                  ["Persönliche Ansprache", "Ein Ansprechpartner – vom Auftrag bis zur Übergabe."],
                  ["Kein Franchise", "Inhabergeführt · IHK · Kammersitz Saarbrücken."],
                ].map(([t, d]) => (
                  <li
                    key={t}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                  >
                    <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-gradient-to-b from-gold-300 to-gold-600" />
                    <div>
                      <div className="text-[15px] font-medium">{t}</div>
                      <div className="text-[13.5px] text-white/70">{d}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ratgeber teaser */}
      <section className="relative bg-smoke py-24 md:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <div className="kicker">Wissen für Ihre Entscheidung</div>
            <SplitReveal
              text="Ratgeber rund um Kauf, Verkauf und Vermietung."
              className="mt-6 max-w-md font-display text-4xl leading-[1.05] text-ink md:text-5xl"
            />
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
              Antworten auf die meistgestellten Fragen von Eigentümern, Mietern,
              Vermietern und Käufern – kompakt aufbereitet und rechtlich fundiert.
            </p>
            <Link href="/ratgeber" className="btn-outline mt-8">
              Zum Ratgeber
              <Arrow />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                t: "Für Verkäufer",
                d: "Wertermittlung, Unterlagen, Preisstrategie, Bieterverfahren.",
                href: "/ratgeber/verkaeufer",
              },
              {
                t: "Für Käufer",
                d: "Finanzierung, Nebenkosten, Baugutachten, Notartermin.",
                href: "/ratgeber/kaeufer",
              },
              {
                t: "Für Vermieter",
                d: "Mieterauswahl, Bonität, Mietvertrag, Übergabe.",
                href: "/ratgeber/vermieter",
              },
              {
                t: "Häufige Fragen",
                d: "Kompakte Antworten auf typische Immobilienfragen.",
                href: "/ratgeber/faq",
              },
            ].map((r, i) => (
              <Reveal key={r.t} delay={i * 0.05} y={20}>
                <Link
                  href={r.href}
                  className="group block h-full rounded-2xl border border-line bg-white p-6 transition-all duration-300 ease-emil hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-card"
                >
                  <div className="flex items-center justify-between">
                    <div className="kicker">{`0${i + 1}`}</div>
                    <span className="text-gold opacity-0 transition-opacity group-hover:opacity-100">
                      <Arrow />
                    </span>
                  </div>
                  <div className="mt-4 font-display text-2xl text-ink">{r.t}</div>
                  <p className="mt-2 text-[13.5px] text-muted">{r.d}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax portrait section */}
      <section className="relative">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1600566753086-00f18fe6ba99?auto=format&fit=crop&w=2400&q=80"
          alt="Modernes Wohnhaus"
          className="h-[90vh] w-full"
          strength={140}
        />
        <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/75 via-ink/25 to-transparent">
          <div className="mx-auto grid w-full max-w-[1400px] items-end gap-10 px-6 pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-24">
            <div className="max-w-2xl text-white">
              <div className="kicker !text-gold">Ein starkes Team</div>
              <h3 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
                Über 20 Jahre Erfahrung. In allen Fragen rund um Ihre Immobilie.
              </h3>
              <p className="mt-6 max-w-xl text-white/85">
                „Mit über 20 Jahren Erfahrung in der Immobilien- und
                Baufinanzierungsbranche sind mein Team und ich in der Lage, Sie
                in allen Belangen rund um Ihre Immobilie bestens zu unterstützen.“
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/ueber-uns#team" className="btn-gold">
                  Das Team kennenlernen
                </Link>
                <Link href="/jobangebote" className="btn-ghost-dark">
                  Jobangebote
                </Link>
              </div>
            </div>
            <div className="pointer-events-auto ml-auto grid w-full max-w-md grid-cols-2 gap-3">
              {[
                { n: "Andreas Jost", r: "Inhaber" },
                { n: "Thomas Lesch", r: "Immobilienberater" },
              ].map((m) => (
                <div
                  key={m.n}
                  className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-card backdrop-blur"
                >
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={
                        m.n === "Andreas Jost"
                          ? "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80"
                          : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80"
                      }
                      alt={m.n}
                      fill
                      sizes="(min-width:1024px) 220px, 40vw"
                      className="object-cover"
                    />
                    <PlaceholderMark size="md" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-4">
                      <div className="text-[11px] uppercase tracking-[0.2em] text-gold">
                        {m.r}
                      </div>
                      <div className="mt-0.5 font-display text-lg leading-tight text-white">
                        {m.n}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative bg-white py-24 md:py-36">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <div className="kicker">Sprechen Sie mit uns</div>
            <SplitReveal
              text="Wir freuen uns auf ein persönliches Gespräch."
              className="mt-6 font-display text-4xl leading-[1.05] text-ink md:text-6xl"
            />
            <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-muted">
              Ob Erstberatung, Bewertung oder konkreter Verkaufsauftrag – wir
              nehmen uns Zeit, hören zu und begleiten Sie zur besten Lösung.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/kontakt" className="btn-gold">
                Nachricht senden
              </Link>
              <a href="tel:015238743864" className="btn-outline">
                0152 3874 3864
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-line bg-smoke p-8 md:p-10">
              <div className="grid gap-6 md:grid-cols-2">
                <InfoBlock title="Büro" value={["Matzenberg 88", "66115 Saarbrücken"]} />
                <InfoBlock title="Direkt" value={["Tel · 0152 3874 3864", "immobilien-jost@gmx.de"]} />
                <InfoBlock title="Mo" value={["10.00 – 20.00 Uhr"]} />
                <InfoBlock title="Di – Fr" value={["10.00 – 18.00 Uhr"]} />
                <InfoBlock title="Wochenende" value={["nach Absprache"]} />
                <InfoBlock title="Erlaubnis" value={["§ 34c · § 34i GewO", "IHK Saarbrücken"]} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoBlock({ title, value }: { title: string; value: string[] }) {
  return (
    <div>
      <div className="kicker">{title}</div>
      <div className="mt-2 space-y-0.5 text-[14px] text-ink">
        {value.map((v) => (
          <div key={v}>{v}</div>
        ))}
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
      <path
        d="M2 6h8m0 0L7 3m3 3L7 9"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
