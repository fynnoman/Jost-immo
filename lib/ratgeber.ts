export type RatgeberDoc = {
  slug: string;
  label: string;
  kicker: string;
  headline: string;
  lead: string;
  image: string;
  items: { q: string; a: string }[];
};

export const RATGEBER: RatgeberDoc[] = [
  {
    slug: "verkaeufer",
    label: "Für Verkäufer",
    kicker: "Ratgeber · Immobilie verkaufen",
    headline: "Wichtige Hinweise für den Verkauf.",
    lead:
      "Vom Preisfindungsprozess über Unterlagen bis zum Notartermin – die wichtigsten Punkte für Eigentümer, die ihre Immobilie verkaufen möchten.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80",
    items: [
      {
        q: "Wie ermittle ich den richtigen Verkaufspreis?",
        a: "Der Verkaufspreis hängt von Vergleichs-, Sach- und Ertragswert sowie der aktuellen Marktlage ab. Ein zu hoher Preis vertreibt Interessenten, ein zu niedriger verschenkt Vermögen. Eine seriöse Wertermittlung ist die Grundlage.",
      },
      {
        q: "Welche Unterlagen brauche ich?",
        a: "Grundbuchauszug, Flurkarte, Grundriss, Wohnflächenberechnung, Baubeschreibung, Energieausweis, Nebenkostenaufstellung, ggf. Teilungserklärung und Protokolle der Eigentümerversammlungen.",
      },
      {
        q: "Was ist ein Bieterverfahren?",
        a: "Beim Bieterverfahren erhalten Interessenten eine begrenzte Zeit, um ein verbindliches Angebot abzugeben. Bei gefragten Objekten kann dies den bestmöglichen Preis erzielen.",
      },
      {
        q: "Wie lange dauert ein Verkauf?",
        a: "Von der Beauftragung bis zur Übergabe rechnen Sie realistisch mit 3–6 Monaten. Der Notartermin selbst dauert 30–60 Minuten, die Auszahlung erfolgt danach über den Notaranderkonto- oder Direktweg.",
      },
      {
        q: "Wer zahlt die Maklerprovision?",
        a: "Seit dem 23.12.2020 gilt bei Wohnimmobilien in der Regel das Bestellerprinzip: Käufer und Verkäufer teilen sich die Provision zu gleichen Teilen.",
      },
    ],
  },
  {
    slug: "kaeufer",
    label: "Für Käufer",
    kicker: "Ratgeber · Immobilie kaufen",
    headline: "Hinweise für Käufer von Häusern und Wohnungen.",
    lead:
      "Finanzierung, Nebenkosten, Baugutachten, Notar – die wichtigsten Punkte für einen sauberen und ruhigen Kaufprozess.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80",
    items: [
      {
        q: "Wie viel Eigenkapital brauche ich?",
        a: "Empfehlung: mindestens Kaufnebenkosten (Grunderwerbsteuer, Notar, Grundbuch, Maklerprovision) plus 10–20 % des Kaufpreises. Je mehr Eigenkapital, desto besser die Zinskondition.",
      },
      {
        q: "Welche Kaufnebenkosten fallen an?",
        a: "Grunderwerbsteuer (im Saarland 6,5 %), Notar- und Grundbuchkosten (ca. 1,5–2 %), Maklerprovision (im Saarland üblich hälftig geteilt). Summe: ca. 10–12 % des Kaufpreises.",
      },
      {
        q: "Was prüft ein Baugutachten?",
        a: "Zustand von Dach, Fassade, Fenstern, Haustechnik, Feuchtigkeit, statische Auffälligkeiten. Sinnvoll insbesondere bei Bestandsimmobilien vor Vertragsabschluss.",
      },
      {
        q: "Wie läuft der Notartermin ab?",
        a: "Der Notar liest den Kaufvertrag vor, erklärt einzelne Passagen, beantwortet Fragen. Danach unterschreiben beide Parteien. Kaufpreiszahlung erfolgt nach Auflassungsvormerkung, in der Regel binnen 4–8 Wochen.",
      },
      {
        q: "Wann kann ich einziehen?",
        a: "Meist nach Kaufpreiszahlung und Übergabetermin. Übergabe wird per Protokoll dokumentiert, Zählerstände werden abgelesen, Schlüssel werden übergeben.",
      },
    ],
  },
  {
    slug: "vermieter",
    label: "Für Vermieter",
    kicker: "Ratgeber · Immobilie vermieten",
    headline: "Hinweise für Vermieter von Wohnungen und Häusern.",
    lead:
      "Mieterauswahl, Bonität, Mietvertrag und Übergabe – so vermieten Sie sicher und mit dem richtigen Mieter.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2400&q=80",
    items: [
      {
        q: "Wie wähle ich einen guten Mieter aus?",
        a: "Vollständige Selbstauskunft, Einkommensnachweise (idealerweise 3 Monate), SCHUFA-Auskunft, Nachweis über vorherige Mietzahlungen. Persönliches Gespräch nicht unterschätzen.",
      },
      {
        q: "Wie hoch darf die Kaution sein?",
        a: "Maximal 3 Nettokaltmieten. Der Mieter kann in bis zu 3 Monatsraten zahlen. Sie muss verzinslich und getrennt vom Vermögen des Vermieters angelegt werden.",
      },
      {
        q: "Wie hoch darf die Miete sein?",
        a: "Orientierung: örtlicher Mietspiegel. In Gebieten mit Mietpreisbremse darf die Neuvertragsmiete höchstens 10 % über der ortsüblichen Vergleichsmiete liegen.",
      },
      {
        q: "Was gehört ins Übergabeprotokoll?",
        a: "Zählerstände (Strom, Gas, Wasser), Schlüsselanzahl, Zustand der Räume, Schäden, Ausstattung. Beide Parteien unterschreiben – rechtssicher.",
      },
      {
        q: "Was gilt bei der Nebenkostenabrechnung?",
        a: "Abrechnung muss innerhalb von 12 Monaten nach Ende der Abrechnungsperiode erstellt und übermittelt werden. Sonst verfällt der Nachforderungsanspruch.",
      },
    ],
  },
  {
    slug: "faq",
    label: "Häufige Fragen",
    kicker: "FAQ · Rund um Immobilien",
    headline: "Antworten auf die meistgestellten Fragen.",
    lead:
      "Egal ob Sie kaufen, verkaufen, vermieten oder mieten – hier finden Sie kompakte Antworten auf typische Fragen rund um Immobilien.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2400&q=80",
    items: [
      {
        q: "Ist eine Immobilienbewertung wirklich kostenfrei?",
        a: "Ja. Wir erstellen eine seriöse, marktgerechte Wertermittlung ohne Kosten und ohne Verpflichtung. Erst wenn Sie uns mit dem Verkauf beauftragen, verdienen wir – im Erfolgsfall über die Provision.",
      },
      {
        q: "Sind Sie ein Franchise?",
        a: "Nein. Immobilien-Jost ist ein inhabergeführtes Maklerunternehmen mit Sitz in Saarbrücken. Keine Kette, keine Gebietsvorgaben, kein Konzern.",
      },
      {
        q: "In welchen Regionen sind Sie aktiv?",
        a: "Schwerpunkt Saarland: Saarbrücken, Sankt Wendel, Saarlouis, Neunkirchen, Saarpfalz-Kreis, Merzig-Wadern. Über Partner deutschlandweit vermittelnd tätig.",
      },
      {
        q: "Was ist ein Energieausweis?",
        a: "Der Energieausweis dokumentiert die energetische Qualität eines Gebäudes. Bei Verkauf und Neuvermietung Pflicht (GEG). Zwei Varianten: Verbrauchs- und Bedarfsausweis.",
      },
      {
        q: "Vermitteln Sie auch Finanzierungen?",
        a: "Ja. Als eingetragener Immobiliardarlehensvermittler nach § 34i GewO arbeiten wir mit mehreren Banken zusammen und rechnen Ihnen die optimale Finanzierung durch.",
      },
    ],
  },
  {
    slug: "definition",
    label: "Definition Immobilie",
    kicker: "Wissen",
    headline: "Was ist eigentlich eine Immobilie?",
    lead:
      "Der Begriff Immobilie beschreibt ein Grundstück, ein grundstücksgleiches Recht oder ein Bauwerk – rechtlich unbewegliches Sachgut.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=2400&q=80",
    items: [
      {
        q: "Woher kommt der Begriff?",
        a: "Aus dem Lateinischen: im-mobilis = unbeweglich. In der Rechts- und Wirtschaftssprache wird eine Immobilie auch unbewegliches Sachgut oder Liegenschaft genannt.",
      },
      {
        q: "Welche Arten von Immobilien gibt es?",
        a: "Grob unterschieden werden Wohnimmobilien (Häuser, Wohnungen), Gewerbeimmobilien (Büros, Läden, Praxen, Hallen), Sonderimmobilien (Hotels, Pflegeheime) und Grundstücke.",
      },
      {
        q: "Was ist ein grundstücksgleiches Recht?",
        a: "Rechte, die einem Grundstück rechtlich gleichgestellt sind – z. B. Erbbaurecht oder Wohnungseigentum. Sie können wie ein Grundstück belastet und übertragen werden.",
      },
    ],
  },
];

export function getRatgeber(slug: string) {
  return RATGEBER.find((r) => r.slug === slug);
}
