import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";
import { CONTACT } from "@/lib/nav";

export const metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Immobilien-Jost in Saarbrücken. Persönlich, diskret und schnell.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        kicker="Kontakt"
        title="Sprechen Sie mit uns."
        subtitle="Persönlich, diskret und schnell. Schreiben Sie uns – oder rufen Sie direkt an."
        image="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="relative bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <div className="kicker">Direktkontakt</div>
            <SplitReveal
              text="Ihr Anliegen. Persönlich beantwortet."
              className="mt-6 font-display text-4xl leading-[1.05] text-ink md:text-5xl"
            />
            <div className="hairline-gold mt-10 max-w-24" />

            <Reveal delay={0.1}>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <InfoBlock title="Büro">
                  <div>{CONTACT.name}</div>
                  <div>Inh. {CONTACT.owner}</div>
                  <div>{CONTACT.street}</div>
                  <div>{CONTACT.city}</div>
                </InfoBlock>
                <InfoBlock title="Telefon">
                  <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                    {CONTACT.phone}
                  </a>
                  <div className="text-muted">Büro · {CONTACT.phoneAlt}</div>
                  <div className="text-muted">Fax · {CONTACT.fax}</div>
                </InfoBlock>
                <InfoBlock title="E-Mail">
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-gold">
                    {CONTACT.email}
                  </a>
                  <div className="text-muted">{CONTACT.emailAlt}</div>
                </InfoBlock>
                <InfoBlock title="Öffnungszeiten">
                  <div>{CONTACT.hoursMon}</div>
                  <div>{CONTACT.hoursDi}</div>
                  <div>{CONTACT.hoursWe}</div>
                </InfoBlock>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="btn-gold">
                  Jetzt anrufen
                </a>
                <Link href="/service/immobilienbewertung" className="btn-outline">
                  Bewertung anfragen
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-14 overflow-hidden rounded-2xl border border-line">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=6.985%2C49.220%2C7.030%2C49.245&layer=mapnik&marker=49.2325%2C7.0068"
                  loading="lazy"
                  className="h-[320px] w-full"
                  title="Karte Saarbrücken"
                />
              </div>
            </Reveal>
          </div>

          <div>
            <div className="kicker">Nachricht senden</div>
            <SplitReveal
              text="Schreiben Sie uns."
              className="mt-6 font-display text-4xl leading-[1.05] text-ink md:text-5xl"
            />
            <Reveal delay={0.15}>
              <div className="mt-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="kicker">{title}</div>
      <div className="mt-3 space-y-0.5 text-[14px] text-ink">{children}</div>
    </div>
  );
}
