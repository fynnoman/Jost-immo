import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";
import GlassCard from "@/components/GlassCard";
import ScaleToBackground from "@/components/ScaleToBackground";
import type { Service } from "@/lib/services";

export default function ServiceTemplate({ service }: { service: Service }) {
  return (
    <>
      <PageHero
        kicker={service.kicker}
        title={service.headline}
        subtitle={service.lead}
        image={service.image}
      />

      {/* Value bullets */}
      <section className="relative bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="kicker">Was Sie erwartet</div>
              <SplitReveal
                text={service.headline}
                className="mt-6 font-display text-4xl leading-[1.05] text-ink md:text-5xl"
              />
              <div className="hairline-gold mt-10 max-w-24" />
              <Reveal delay={0.15}>
                <p className="mt-8 max-w-lg text-[15.5px] leading-relaxed text-muted">
                  {service.lead}
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link href="/kontakt" className="btn-gold">
                    Anfragen
                  </Link>
                  <Link href="/service" className="btn-outline">
                    Alle Leistungen
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {service.bullets.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.06} y={20}>
                  <GlassCard className="h-full !p-7">
                    <div className="flex items-center justify-between">
                      <div className="kicker">{`0${i + 1}`}</div>
                      <span className="h-2 w-2 rounded-full bg-gold" />
                    </div>
                    <div className="mt-4 font-display text-2xl text-ink">{b.title}</div>
                    <p className="mt-2 text-[13.5px] text-muted">{b.body}</p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative bg-smoke py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="kicker">Ablauf</div>
              <SplitReveal
                text="Vier Schritte. Klar. Persönlich."
                className="mt-6 font-display text-4xl leading-[1.05] text-ink md:text-5xl"
              />
            </div>
          </div>

          <ol className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {service.process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.06} y={20}>
                <li className="relative flex h-full flex-col gap-4 rounded-2xl border border-line bg-white p-7 shadow-soft">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-3xl text-gold">{p.step}</span>
                    <span className="h-px flex-1 bg-line" />
                  </div>
                  <div className="font-display text-2xl text-ink">{p.title}</div>
                  <p className="text-[13.5px] leading-relaxed text-muted">{p.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Scale-to-background reassurance */}
      <ScaleToBackground
        src={service.image}
        alt={service.headline}
        kicker="Immobilien-Jost"
        title={service.ctaTitle}
        body={service.ctaBody}
        overlayContent={
          <div className="flex flex-wrap gap-3">
            <Link href="/kontakt" className="btn-gold">
              Termin vereinbaren
            </Link>
            <a href="tel:015238743864" className="btn-ghost-dark">
              0152 3874 3864
            </a>
          </div>
        }
      />
    </>
  );
}
