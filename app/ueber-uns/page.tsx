import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";
import GlassCard from "@/components/GlassCard";
import ScaleToBackground from "@/components/ScaleToBackground";
import PlaceholderMark from "@/components/PlaceholderMark";

export const metadata = {
  title: "Über uns",
  description:
    "Immobilien-Jost, inhabergeführt von Andreas Jost in Saarbrücken. Werte, Arbeitsweise und Team.",
};

const VALUES = [
  {
    t: "Persönlich",
    d: "Ein Ansprechpartner vom ersten Gespräch bis nach der Übergabe. Kein Call-Center, kein Franchise.",
  },
  {
    t: "Diskret",
    d: "Sensible Themen wie Trennung, Todesfall oder Nachlass begleiten wir mit der nötigen Ruhe und Verschwiegenheit.",
  },
  {
    t: "Marktkonform",
    d: "Wertermittlung nach etablierten Verfahren, aktuelle Marktkenntnis für jeden saarländischen Landkreis.",
  },
  {
    t: "Vernetzt",
    d: "Über Partner deutschlandweit vermarktbar – Wohn-, Gewerbe- und Anlageimmobilien.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        kicker="Über uns"
        title="Ein Immobilienmakler mit Haltung."
        subtitle="Inhabergeführt, im Saarland verwurzelt, deutschlandweit vernetzt. Bei Immobilien-Jost steht der Mensch im Vordergrund – jeder Auftrag beginnt mit Zuhören."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Anspruch */}
      <section id="anspruch" className="relative bg-white py-24 md:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-10">
          <div>
            <div className="kicker">Unser Anspruch</div>
            <SplitReveal
              text="Vertrauen ist die erste Währung im Immobiliengeschäft."
              className="mt-6 font-display text-4xl leading-[1.05] text-ink md:text-6xl"
            />
            <div className="hairline-gold mt-10 max-w-24" />
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-lg text-[15.5px] leading-relaxed text-muted">
                Die Vermittlung von Immobilien ist ein vertrauensvoller,
                persönlicher Vorgang. Uns ist wichtig, dass Sie sich gut aufgehoben
                fühlen. Auf unsere fachliche Kompetenz und unsere Marktkenntnisse
                können Sie sich verlassen. Genauso wichtig sind uns in der
                Zusammenarbeit Wertschätzung, Respekt und Ehrlichkeit.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-muted">
                Unser Anspruch ist ein umfassender Service, der Sie in jeder
                Phase der Immobilienvermittlung begleitet – vom Auftrag über den
                Notartermin bis hin zu Übergabe und darüber hinaus.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.06} y={20}>
                <GlassCard className="h-full !p-7">
                  <div className="flex items-center justify-between">
                    <div className="kicker">{`0${i + 1}`}</div>
                    <span className="h-2 w-2 rounded-full bg-gold" />
                  </div>
                  <div className="mt-4 font-display text-2xl text-ink">{v.t}</div>
                  <p className="mt-2 text-[13.5px] text-muted">{v.d}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Werte / Zitat */}
      <ScaleToBackground
        src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2400&q=80"
        alt="Elegantes Wohnzimmer"
        kicker="Unsere Werte"
        title="Eine Immobilie ist ein Zuhause."
        body="Für uns ist ein Immobilienbesitzer mehr als ein Kunde. Kauf und Verkauf einer Immobilie sind bedeutende, emotionale Entscheidungen, die man häufig nur einmal im Leben trifft. Wir nehmen die Bedürfnisse unserer Auftraggeber ernst und begleiten Sie auf dem Weg zur besten Lösung."
      />

      {/* Inhaber */}
      <section id="inhaber" className="relative bg-white py-24 md:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div className="relative">
            <Reveal y={40}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1600&q=80"
                  alt="Andreas Jost"
                  fill
                  sizes="(min-width:1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <PlaceholderMark size="lg" />
              </div>
            </Reveal>
            <Reveal delay={0.2} y={40}>
              <div className="absolute -bottom-10 -right-4 hidden max-w-xs lg:block">
                <GlassCard variant="gold" className="!p-6">
                  <div className="kicker">Zitat</div>
                  <p className="mt-3 font-display text-2xl leading-tight text-ink">
                    „Ihr Erfolg ist unser Antrieb.“
                  </p>
                </GlassCard>
              </div>
            </Reveal>
          </div>

          <div>
            <div className="kicker">Der Inhaber</div>
            <SplitReveal
              text="Andreas Jost. Über 20 Jahre Immobilien im Saarland."
              className="mt-6 font-display text-4xl leading-[1.05] text-ink md:text-5xl"
            />
            <Reveal delay={0.1}>
              <p className="mt-8 text-[15.5px] leading-relaxed text-muted">
                Als Inhaber steht Andreas Jost persönlich für jeden Auftrag ein.
                Zugelassen als Immobilienmakler nach § 34c GewO und als
                Immobiliardarlehensvermittler nach § 34i GewO. Aufsichtsbehörde:
                Ordnungsamt Saarbrücken. Kammer: IHK Saarland.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-8 divide-y divide-line">
                {[
                  ["Zulassung", "§ 34c · § 34i GewO"],
                  ["Kammer", "IHK Saarland"],
                  ["Sitz", "Matzenberg 88 · 66115 Saarbrücken"],
                  ["Netzwerk", "Bundesweite Vermarktung über Partner"],
                ].map(([k, v]) => (
                  <li key={k} className="grid grid-cols-[130px_1fr] gap-6 py-4 text-[14px]">
                    <span className="kicker">{k}</span>
                    <span className="text-ink">{v}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="relative bg-smoke py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="kicker">Das Team</div>
              <SplitReveal
                text="Zwei Namen. Ein gemeinsamer Anspruch."
                className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] text-ink md:text-6xl"
              />
            </div>
            <Link href="/jobangebote" className="btn-outline">
              Team verstärken
            </Link>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {[
              {
                name: "Andreas Jost",
                role: "Inhaber · Immobilienmakler · Baufinanzierer",
                bio: "Gründer von Immobilien-Jost. Über 20 Jahre Erfahrung in Vermittlung, Bewertung und Finanzierung. Kammersitz Saarbrücken.",
                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1400&q=80",
              },
              {
                name: "Thomas Lesch",
                role: "Immobilienberater · Kundenbetreuung",
                bio: "Erfahrener Berater rund um Verkauf, Vermietung und Objektauswahl. Ihr direkter Ansprechpartner für viele Termine vor Ort.",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1400&q=80",
              },
            ].map((m, i) => (
              <Reveal key={m.name} delay={i * 0.1} y={40}>
                <article className="group overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-shadow hover:shadow-card">
                  <div className="relative aspect-[5/4] w-full overflow-hidden">
                    <Image
                      src={m.img}
                      alt={m.name}
                      fill
                      sizes="(min-width:768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-emil group-hover:scale-[1.03]"
                    />
                    <PlaceholderMark size="lg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                    <div className="absolute left-6 top-6 rounded-full bg-white/80 px-3 py-1 text-[10.5px] uppercase tracking-[0.22em] text-ink backdrop-blur">
                      {m.role.split(" · ")[0]}
                    </div>
                  </div>
                  <div className="p-7">
                    <div className="font-display text-3xl text-ink">{m.name}</div>
                    <div className="mt-1 text-[12.5px] uppercase tracking-[0.16em] text-gold">
                      {m.role}
                    </div>
                    <p className="mt-4 text-[14.5px] leading-relaxed text-muted">{m.bio}</p>
                    <div className="mt-6 flex gap-3">
                      <Link href="/kontakt" className="btn-outline">
                        Termin
                      </Link>
                      <a href="tel:015238743864" className="btn-outline">
                        0152 3874 3864
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiting teaser */}
      <section className="relative bg-white py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-ink text-white shadow-card">
            <div className="pointer-events-none absolute inset-0 opacity-25">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80"
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
              />
              <PlaceholderMark size="xl" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-ink via-ink/80 to-ink/50" />
            <div className="relative grid gap-8 p-10 md:grid-cols-[1.2fr_1fr] md:p-16">
              <div>
                <div className="kicker">Sie wollen in einem starken Team arbeiten?</div>
                <h3 className="mt-5 max-w-lg font-display text-4xl leading-[1.05] md:text-5xl">
                  Immobilienberater · Immobilienmakler auf selbstständiger Basis.
                </h3>
                <p className="mt-6 max-w-xl text-white/75">
                  Höchste Provisionsanteile, kein Eigenkapital, komplette
                  Ausstattung – wir suchen Verstärkung für den Aufbau eines neuen
                  Vertriebsgebietes. Auch als Quereinsteiger.
                </p>
                <div className="mt-8">
                  <Link href="/jobangebote" className="btn-gold">
                    Zum Jobangebot
                  </Link>
                </div>
              </div>
              <ul className="grid gap-3 text-[14px] text-white/85">
                {[
                  "Selbstständig – Sie bestimmen Ihren Erfolg.",
                  "Wir schalten auf ImmoScout24, Immowelt, Immonet.",
                  "E-Mail-Account, Visitenkarten, Verkaufsschilder inklusive.",
                  "Wir sind kein Franchise. Kein Eigenkapital nötig.",
                ].map((b) => (
                  <li key={b} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-gradient-to-b from-gold-300 to-gold-600" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
