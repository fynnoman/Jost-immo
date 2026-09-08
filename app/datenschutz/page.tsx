import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Datenschutz" };

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        kicker="Rechtliches"
        title="Datenschutz."
        subtitle="Informationen zur Verarbeitung personenbezogener Daten."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80"
        height="55vh"
      />

      <section className="relative bg-white py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="text-[15.5px] leading-relaxed text-ink">
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
              behandeln Ihre personenbezogenen Daten vertraulich und entsprechend
              der gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerklärung.
            </p>
            <p className="mt-6 text-[14.5px] leading-relaxed text-muted">
              Die Nutzung unserer Website ist in der Regel ohne Angabe
              personenbezogener Daten möglich. Soweit auf unseren Seiten
              personenbezogene Daten (beispielsweise Name, Anschrift oder
              E-Mail-Adressen) erhoben werden, erfolgt dies stets auf freiwilliger
              Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an
              Dritte weitergegeben.
            </p>
            <p className="mt-6 text-[14.5px] leading-relaxed text-muted">
              Für die vollständige Datenschutzerklärung inklusive Ihrer Rechte
              nach DSGVO kontaktieren Sie uns bitte direkt unter
              immobilien-jost@gmx.de.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
