import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";
import GlassCard from "@/components/GlassCard";
import ScaleToBackground from "@/components/ScaleToBackground";
import { REGION_MAP, REGION_SLUGS } from "@/lib/regions";

export function generateStaticParams() {
  return REGION_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = REGION_MAP[slug];
  if (!r) return { title: "Region" };
  return { title: r.name, description: r.lead };
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = REGION_MAP[slug];
  if (!r) return notFound();

  const others = Object.values(REGION_MAP).filter((x) => x.slug !== r.slug);

  return (
    <>
      <PageHero
        kicker="Region"
        title={r.headline}
        subtitle={r.lead}
        image={r.image}
      />

      <section className="relative bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <div className="kicker">Marktprofil</div>
            <SplitReveal
              text={`Immobilienmarkt ${r.name}.`}
              className="mt-6 font-display text-4xl leading-[1.05] text-ink md:text-5xl"
            />
            <div className="hairline-gold mt-10 max-w-24" />
            <Reveal delay={0.1}>
              <ul className="mt-8 divide-y divide-line">
                {r.facts.map((f) => (
                  <li
                    key={f.k}
                    className="grid grid-cols-[140px_1fr] gap-6 py-4 text-[14px]"
                  >
                    <span className="kicker">{f.k}</span>
                    <span className="text-ink">{f.v}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/service/immobilienbewertung" className="btn-gold">
                  Bewertung für {r.name}
                </Link>
                <Link href="/kontakt" className="btn-outline">
                  Termin anfragen
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {r.notes.map((n, i) => (
              <Reveal key={i} delay={i * 0.06} y={20}>
                <GlassCard className="h-full !p-6">
                  <div className="kicker">Beobachtung {`0${i + 1}`}</div>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-ink">{n}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ScaleToBackground
        src={r.image}
        alt={r.name}
        kicker={`Immobilie in ${r.name}?`}
        title={`Wir kennen den Markt in ${r.name} genau.`}
        body="Kostenfreie Wertermittlung, diskrete Vermarktung, seriöse Marktkenntnis für Ihre Region."
        overlayContent={
          <div className="flex flex-wrap gap-3">
            <Link href="/kontakt" className="btn-gold">
              Beratung anfragen
            </Link>
            <a href="tel:015238743864" className="btn-ghost-dark">
              0152 3874 3864
            </a>
          </div>
        }
      />

      <section className="relative bg-white py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <div className="kicker">Weitere Landkreise</div>
              <SplitReveal
                text="Das Saarland auf einen Blick."
                className="mt-6 font-display text-3xl leading-[1.05] text-ink md:text-4xl"
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-5">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/regionen/${o.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-line bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-soft"
              >
                <span className="font-display text-xl text-ink">{o.name}</span>
                <span className="text-gold opacity-0 transition-opacity group-hover:opacity-100">
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
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
