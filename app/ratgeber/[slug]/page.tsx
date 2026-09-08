import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Accordion from "@/components/Accordion";
import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";
import { RATGEBER, getRatgeber } from "@/lib/ratgeber";

export function generateStaticParams() {
  return RATGEBER.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = getRatgeber(slug);
  if (!r) return { title: "Ratgeber" };
  return { title: r.label, description: r.lead };
}

export default async function RatgeberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getRatgeber(slug);
  if (!doc) return notFound();

  return (
    <>
      <PageHero
        kicker={doc.kicker}
        title={doc.headline}
        subtitle={doc.lead}
        image={doc.image}
      />

      <section className="relative bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 lg:grid-cols-[0.9fr_1.6fr] lg:px-10">
          <aside className="lg:sticky lg:top-32 lg:h-fit">
            <div className="kicker">Weitere Ratgeber</div>
            <ul className="mt-6 space-y-3">
              {RATGEBER.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/ratgeber/${r.slug}`}
                    className={`flex items-center justify-between rounded-xl border px-4 py-3 text-[13.5px] transition-all ${
                      r.slug === doc.slug
                        ? "border-gold bg-gold/10 text-ink"
                        : "border-line text-muted hover:border-gold/50 hover:text-ink"
                    }`}
                  >
                    {r.label}
                    <span className="text-gold">
                      <svg width="12" height="12" viewBox="0 0 12 12">
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
                </li>
              ))}
            </ul>
          </aside>

          <div>
            <SplitReveal
              text={doc.headline}
              className="font-display text-4xl leading-[1.05] text-ink md:text-5xl"
            />
            <div className="hairline-gold mt-8 max-w-24" />
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-2xl text-[15.5px] leading-relaxed text-muted">
                {doc.lead}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-12">
                <Accordion items={doc.items} />
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-14 rounded-2xl bg-smoke p-8">
                <div className="kicker">Persönliche Beratung</div>
                <h3 className="mt-4 font-display text-3xl text-ink">
                  Ihre Frage ist nicht dabei?
                </h3>
                <p className="mt-3 max-w-lg text-[14.5px] text-muted">
                  Sprechen Sie uns direkt an – wir nehmen uns Zeit für Ihre
                  Situation und beantworten Ihre Fragen persönlich.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/kontakt" className="btn-gold">
                    Nachricht senden
                  </Link>
                  <a href="tel:015238743864" className="btn-outline">
                    0152 3874 3864
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
