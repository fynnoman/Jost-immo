import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";

export const metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Informationen der Immobilien-Jost, Inh. Andreas Jost.",
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        kicker="Gesetzliche Informationen"
        title="Impressum."
        subtitle="Angaben gemäß § 5 TMG."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2400&q=80"
        height="60vh"
      />

      <section className="relative bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <div className="kicker">Immobilien-Jost</div>
            <SplitReveal
              text="Inhabergeführt · IHK · Kammersitz Saarbrücken."
              className="mt-6 font-display text-3xl leading-[1.1] text-ink md:text-4xl"
            />
            <div className="hairline-gold mt-8 max-w-24" />
            <p className="mt-8 text-[14px] leading-relaxed text-muted">
              Bitte beachten Sie ergänzend unsere Datenschutzerklärung. Für
              rechtliche Rückfragen erreichen Sie uns direkt unter den unten
              angegebenen Kontaktdaten.
            </p>
          </div>

          <div>
            <Reveal>
              <Block title="Anbieter">
                <p>
                  <strong>Firma:</strong> Immobilien-Jost
                </p>
                <p>
                  <strong>Inhaber:</strong> Andreas Jost
                </p>
                <p>
                  <strong>Büroanschrift:</strong> Matzenberg 88, 66115 Saarbrücken
                </p>
                <p>
                  <strong>Telefon:</strong> 0681 7618672 · <strong>Mobil:</strong> 0152 3874 3864
                </p>
                <p>
                  <strong>Fax:</strong> 0681 7618673
                </p>
                <p>
                  <strong>E-Mail:</strong> info-jost@gmx.de · immobilien-jost@gmx.de
                </p>
                <p>
                  <strong>Homepage:</strong> www.immobilien-jost.de
                </p>
                <p>
                  <strong>Steuernummer:</strong> 040/23618058
                </p>
                <p>
                  <strong>Verband:</strong> IHK
                </p>
                <p>
                  <strong>Gewerbeamt:</strong> Saarbrücken
                </p>
              </Block>
            </Reveal>

            <Reveal delay={0.1}>
              <Block title="Erlaubnis nach § 34c GewO">
                <p>
                  Gewerbeerlaubnis gemäß § 34c GewO, erteilt durch die
                  Landeshauptstadt Saarbrücken, Großherzog-Friedrich-Straße 111,
                  66111 Saarbrücken.
                </p>
                <p>
                  <strong>Aufsichtsbehörde:</strong> Ordnungsamt Saarbrücken,
                  Großherzog-Friedrich-Straße 111, 66111 Saarbrücken.
                </p>
              </Block>
            </Reveal>

            <Reveal delay={0.15}>
              <Block title="Erlaubnis nach § 34i GewO · Immobiliardarlehensvermittlung">
                <p>
                  Im Immobiliarverbraucherdarlehensbereich vermittelnd tätig als
                  Immobiliardarlehensvermittler gemäß § 34i Abs. 1 GewO für:
                </p>
                <p>
                  Deutsche Bank AG, Deutsche Bausparkasse Badenia AG, Commerzbank AG,
                  DSL Bank, HypoVereinsbank, Santander Bank, ING.
                </p>
                <p>
                  <strong>Aufsichtsbehörde:</strong> Ordnungsamt Saarbrücken,
                  Großherzog-Friedrich-Straße 111, 66121 Saarbrücken.
                </p>
              </Block>
            </Reveal>

            <Reveal delay={0.2}>
              <Block title="Erlaubnis nach § 34f GewO">
                <p>
                  <strong>Aufsichtsbehörde:</strong> Ordnungsamt Saarbrücken,
                  Großherzog-Friedrich-Straße 111, 66121 Saarbrücken.
                </p>
              </Block>
            </Reveal>

            <Reveal delay={0.25}>
              <Block title="Verbraucherinformationen · Online-Streitbeilegung">
                <p>
                  Die Europäische Kommission stellt eine Plattform zur
                  Online-Streitbeilegung (OS) bereit:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-gold"
                  >
                    ec.europa.eu/consumers/odr
                  </a>
                  .
                </p>
                <p>
                  Immobilien-Jost und deren Makler sind einverstanden und bereit,
                  an einem außergerichtlichen Streitbeilegungsverfahren vor einer
                  Verbraucherstreitbeilegungsstelle teilzunehmen (§ 36 Abs. 1 Nr. 1
                  VSBG). Weitere Informationen: Ombudsmann Immobilien.
                </p>
              </Block>
            </Reveal>

            <Reveal delay={0.3}>
              <Block title="Bildquellen">
                <p>Pixabay, Unsplash und eigene Aufnahmen.</p>
              </Block>
            </Reveal>

            <Reveal delay={0.35}>
              <Block title="Haftungsausschluss">
                <p>
                  Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt.
                  Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                  kann keine Gewähr übernommen werden. Als Diensteanbieter sind
                  wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
                  nach den allgemeinen Gesetzen verantwortlich.
                </p>
              </Block>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-12 border-l-2 border-gold/60 pl-6 first:mt-0">
      <div className="kicker">{title}</div>
      <div className="mt-4 space-y-3 text-[14.5px] leading-relaxed text-ink [&_p]:text-ink [&_strong]:font-semibold">
        {children}
      </div>
    </div>
  );
}
