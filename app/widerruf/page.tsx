import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Widerrufsrecht" };

export default function WiderrufPage() {
  return (
    <>
      <PageHero
        kicker="Rechtliches"
        title="Widerrufsrecht."
        subtitle="Ihre Rechte als Verbraucher."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80"
        height="55vh"
      />
      <section className="relative bg-white py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="text-[15.5px] leading-relaxed text-ink">
              Verbrauchern steht ein gesetzliches Widerrufsrecht zu. Die
              Widerrufsfrist beträgt vierzehn Tage ab Vertragsschluss. Um Ihr
              Widerrufsrecht auszuüben, informieren Sie uns bitte schriftlich per
              E-Mail an immobilien-jost@gmx.de oder per Post an: Immobilien-Jost,
              Matzenberg 88, 66115 Saarbrücken.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
