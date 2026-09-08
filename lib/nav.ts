export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; hint?: string }[];
};

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Über uns",
    href: "/ueber-uns",
    children: [
      { label: "Unser Anspruch", href: "/ueber-uns#anspruch", hint: "Werte & Arbeitsweise" },
      { label: "Das Team", href: "/ueber-uns#team", hint: "Andreas Jost & Thomas Lesch" },
      { label: "Der Inhaber", href: "/ueber-uns#inhaber", hint: "20+ Jahre Erfahrung" },
    ],
  },
  {
    label: "Service",
    href: "/service",
    children: [
      { label: "Verkauf", href: "/service/verkauf", hint: "Häuser, Wohnungen, Grundstücke" },
      { label: "Finanzierung", href: "/service/finanzierung", hint: "Baufinanzierung & Beratung" },
      { label: "Vermietung", href: "/service/vermietung", hint: "Wohn- und Gewerbeobjekte" },
      { label: "Immobiliensuche", href: "/service/immobiliensuche", hint: "Suchauftrag" },
      { label: "Homestaging", href: "/service/homestaging", hint: "Präsentation vor Verkauf" },
      { label: "Energieausweis", href: "/service/energieausweis", hint: "Pflicht & Erstellung" },
      { label: "Immobilienbewertung", href: "/service/immobilienbewertung", hint: "Kostenfrei · unverbindlich" },
    ],
  },
  { label: "Objekte", href: "/objekte" },
  {
    label: "Ratgeber",
    href: "/ratgeber",
    children: [
      { label: "Für Verkäufer", href: "/ratgeber/verkaeufer" },
      { label: "Für Käufer", href: "/ratgeber/kaeufer" },
      { label: "Für Vermieter", href: "/ratgeber/vermieter" },
      { label: "Häufige Fragen", href: "/ratgeber/faq" },
      { label: "Definition Immobilie", href: "/ratgeber/definition" },
    ],
  },
  { label: "Jobangebote", href: "/jobangebote" },
  { label: "Kontakt", href: "/kontakt" },
];

export const REGIONS = [
  { name: "Saarbrücken", href: "/regionen/saarbruecken" },
  { name: "Sankt Wendel", href: "/regionen/sankt-wendel" },
  { name: "Saarlouis", href: "/regionen/saarlouis" },
  { name: "Neunkirchen", href: "/regionen/neunkirchen" },
  { name: "Saarpfalz-Kreis", href: "/regionen/saarpfalz-kreis" },
  { name: "Merzig-Wadern", href: "/regionen/merzig-wadern" },
];

export const CONTACT = {
  name: "Immobilien-Jost",
  owner: "Andreas Jost",
  street: "Matzenberg 88",
  city: "66115 Saarbrücken",
  phone: "0152 3874 3864",
  phoneAlt: "0681 7618672",
  fax: "0681 7618673",
  email: "immobilien-jost@gmx.de",
  emailAlt: "info-jost@gmx.de",
  hoursMon: "Mo · 10.00 – 20.00 Uhr",
  hoursDi: "Di – Fr · 10.00 – 18.00 Uhr",
  hoursWe: "Wochenende · nach Absprache",
};
