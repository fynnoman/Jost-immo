import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata = { title: "AGB" };

export default function AgbPage() {
  return (
    <>
      <PageHero
        kicker="Rechtliches"
        title="Allgemeine Geschäftsbedingungen."
        subtitle="Für die Nutzung unserer Dienstleistungen."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2400&q=80"
        height="55vh"
      />
      <section className="relative bg-white py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="text-[15.5px] leading-relaxed text-ink">
              Die vollständigen AGB stellen wir Ihnen auf Anfrage gerne zur
              Verfügung. Bitte kontaktieren Sie uns unter
              immobilien-jost@gmx.de.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
