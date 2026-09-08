import Link from "next/link";
import Image from "next/image";
import { CONTACT, REGIONS } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />

      <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-10 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-20 rounded-lg bg-white/95 p-1.5 ring-1 ring-white/15">
                <Image
                  src="/images/logo.jpeg"
                  alt="Immobilien-Jost"
                  fill
                  sizes="80px"
                  className="object-contain p-1"
                />
              </div>
              <div className="font-display text-2xl">
                Immobilien<span className="text-gold">·</span>Jost
              </div>
            </div>
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-white/70">
              Ihr inhabergeführter Immobilienmakler im Saarland. Verkauf, Vermietung
              und Baufinanzierung mit Diskretion, Erfahrung und persönlichem Anspruch.
            </p>

            <div className="mt-8 space-y-1.5 text-[13.5px] text-white/80">
              <div className="font-medium text-white">{CONTACT.name}</div>
              <div>Inh. {CONTACT.owner}</div>
              <div>{CONTACT.street}</div>
              <div>{CONTACT.city}</div>
            </div>

            <div className="mt-6 space-y-1 text-[13.5px] text-white/80">
              <div>
                Tel · <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-gold">{CONTACT.phone}</a>
              </div>
              <div>
                Mail · <a href={`mailto:${CONTACT.email}`} className="hover:text-gold">{CONTACT.email}</a>
              </div>
            </div>
          </div>

          <FooterCol title="Service">
            <FooterLink href="/service/verkauf">Verkauf</FooterLink>
            <FooterLink href="/service/finanzierung">Finanzierung</FooterLink>
            <FooterLink href="/service/vermietung">Vermietung</FooterLink>
            <FooterLink href="/service/immobiliensuche">Immobiliensuche</FooterLink>
            <FooterLink href="/service/homestaging">Homestaging</FooterLink>
            <FooterLink href="/service/energieausweis">Energieausweis</FooterLink>
            <FooterLink href="/service/immobilienbewertung">Immobilienbewertung</FooterLink>
          </FooterCol>

          <FooterCol title="Ratgeber">
            <FooterLink href="/ratgeber/verkaeufer">Für Verkäufer</FooterLink>
            <FooterLink href="/ratgeber/kaeufer">Für Käufer</FooterLink>
            <FooterLink href="/ratgeber/vermieter">Für Vermieter</FooterLink>
            <FooterLink href="/ratgeber/faq">Häufige Fragen</FooterLink>
            <FooterLink href="/ratgeber/definition">Definition Immobilie</FooterLink>
            <FooterLink href="/jobangebote">Jobangebote</FooterLink>
          </FooterCol>

          <FooterCol title="Das Saarland">
            {REGIONS.map((r) => (
              <FooterLink key={r.href} href={r.href}>
                {r.name}
              </FooterLink>
            ))}
          </FooterCol>
        </div>

        <div className="mt-14 grid gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-3">
          <div>
            <div className="kicker !text-gold/90">Öffnungszeiten</div>
            <div className="mt-3 space-y-1 text-[13.5px] text-white/80">
              <div>{CONTACT.hoursMon}</div>
              <div>{CONTACT.hoursDi}</div>
              <div>{CONTACT.hoursWe}</div>
            </div>
          </div>
          <div>
            <div className="kicker !text-gold/90">Direkt</div>
            <div className="mt-3 space-y-1 text-[13.5px] text-white/80">
              <div>Büro · {CONTACT.phoneAlt}</div>
              <div>Fax · {CONTACT.fax}</div>
              <div>{CONTACT.emailAlt}</div>
            </div>
          </div>
          <div>
            <div className="kicker !text-gold/90">Erlaubnis</div>
            <div className="mt-3 space-y-1 text-[13.5px] text-white/80">
              <div>§ 34c GewO · Immobilienmakler</div>
              <div>§ 34i GewO · Baufinanzierer</div>
              <div>IHK Saarbrücken</div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-[12px] text-white/50 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Immobilien-Jost · Alle Rechte vorbehalten.</div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/impressum" className="hover:text-white">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white">Datenschutz</Link>
            <Link href="/agb" className="hover:text-white">AGB</Link>
            <Link href="/widerruf" className="hover:text-white">Widerrufsrecht</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="kicker !text-gold/90">{title}</div>
      <ul className="mt-4 space-y-2">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-[13.5px] text-white/70 transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  );
}
