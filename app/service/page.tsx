import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";
import PlaceholderMark from "@/components/PlaceholderMark";
import { SERVICES } from "@/lib/services";

export const metadata = {
  title: "Service",
  description:
    "Alle Leistungen von Immobilien-Jost auf einen Blick: Verkauf, Vermietung, Finanzierung, Immobiliensuche, Homestaging, Energieausweis, Bewertung.",
};

export default function ServiceIndex() {
  return (
    <>
      <PageHero
        kicker="Unser Service"
        title="Alles rund um Ihre Immobilie. Aus einer Hand."
        subtitle="Sieben Leistungsbereiche, ein Ansprechpartner. Vom ersten Gespräch bis zur Schlüsselübergabe."
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="relative bg-white py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14">
            <div className="kicker">Leistungen</div>
            <SplitReveal
              text="Sieben Bereiche. Ein Anspruch."
              className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] text-ink md:text-6xl"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05} y={24}>
                <Link
                  href={`/service/${s.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all duration-500 ease-emil hover:-translate-y-1 hover:border-gold/60 hover:shadow-card"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.label}
                      fill
                      sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-emil group-hover:scale-[1.04]"
                    />
                    <PlaceholderMark size="md" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full bg-white/80 px-3 py-1 text-[10.5px] uppercase tracking-[0.22em] text-ink backdrop-blur">
                      {`0${i + 1}`}
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="text-[10.5px] uppercase tracking-[0.22em] text-gold">
                        {s.kicker}
                      </div>
                      <div className="mt-1 font-display text-3xl leading-tight text-white">
                        {s.label}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-5 p-7">
                    <p className="text-[14px] leading-relaxed text-muted">{s.lead}</p>
                    <span className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.15em] text-ink">
                      Details
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
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
