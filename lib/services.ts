export type Service = {
  slug: string;
  label: string;
  kicker: string;
  headline: string;
  lead: string;
  image: string;
  bullets: { title: string; body: string }[];
  process: { step: string; title: string; body: string }[];
  ctaTitle: string;
  ctaBody: string;
};

export const SERVICES: Service[] = [
  {
    slug: "verkauf",
    label: "Verkauf",
    kicker: "Verkauf im Saarland",
    headline: "Ihre Immobilie zum besten Preis verkaufen.",
    lead:
      "Wir vermarkten Ihre Immobilie diskret, professionell und mit einer klaren Preisstrategie – auf Wunsch auch im Bieterverfahren.",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2400&q=80",
    bullets: [
      {
        title: "Marktgerechte Wertermittlung",
        body: "Vergleichswert, Sachwert, Ertragswert – kombiniert mit lokaler Marktkenntnis.",
      },
      {
        title: "Hochwertige Präsentation",
        body: "Exposé, professionelle Fotografie, virtuelle Rundgänge und Grundrissoptimierung.",
      },
      {
        title: "Bieterverfahren",
        body: "Für hochwertige Objekte oder gefragte Lagen – transparent und rechtssicher.",
      },
      {
        title: "Käuferauswahl",
        body: "Bonitätsprüfung, Finanzierungsbestätigung, Terminorganisation.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Erstgespräch & Wertermittlung",
        body: "Wir besichtigen Ihre Immobilie und erstellen eine marktgerechte Bewertung – kostenfrei und unverbindlich.",
      },
      {
        step: "02",
        title: "Vermarktungsstrategie",
        body: "Zielgruppen, Preisstrategie, Kanäle. Wir schalten auf ImmoScout24, Immowelt, Immonet und in unser eigenes Netzwerk.",
      },
      {
        step: "03",
        title: "Besichtigungen & Verhandlung",
        body: "Wir führen Interessenten, prüfen Bonität und verhandeln in Ihrem Sinne – bis zum optimalen Ergebnis.",
      },
      {
        step: "04",
        title: "Notartermin & Übergabe",
        body: "Kaufvertrag, Notar, Übergabeprotokoll. Wir begleiten bis zum letzten Schlüssel.",
      },
    ],
    ctaTitle: "Verkaufen mit Rückenwind.",
    ctaBody: "Fordern Sie Ihre kostenfreie Bewertung an oder vereinbaren Sie ein Erstgespräch.",
  },
  {
    slug: "vermietung",
    label: "Vermietung",
    kicker: "Vermietung",
    headline: "Ihr Objekt. Der richtige Mieter.",
    lead:
      "Vom Exposé bis zur Schlüsselübergabe: Wir vermieten Wohnungen, Häuser und Gewerbeobjekte an sorgfältig ausgewählte Mieter.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2400&q=80",
    bullets: [
      { title: "Mieterauswahl", body: "Bonitätsprüfung, Selbstauskunft, Referenzen." },
      { title: "Mietpreisanalyse", body: "Marktgerechter Mietzins auf Basis realer Vergleichsdaten." },
      { title: "Exposé & Fotografie", body: "Präsentation, die den echten Wert Ihrer Immobilie zeigt." },
      { title: "Vertrag & Übergabe", body: "Rechtssicherer Mietvertrag, Übergabeprotokoll, Nebenkosten." },
    ],
    process: [
      { step: "01", title: "Besichtigung & Analyse", body: "Zustand, Marktumfeld, Zielgruppe." },
      { step: "02", title: "Vermarktung", body: "Portale, Netzwerk, direkte Anfragen aus Vormerkliste." },
      { step: "03", title: "Interessenten-Prüfung", body: "Bonität, Selbstauskunft, persönliche Auswahl." },
      { step: "04", title: "Vertrag & Übergabe", body: "Vertrag, Kaution, Übergabeprotokoll, Schlüssel." },
    ],
    ctaTitle: "Vermieten Sie mit Ruhe.",
    ctaBody: "Wir übernehmen den Prozess von A bis Z – und wählen Ihren Mieter mit Sorgfalt aus.",
  },
  {
    slug: "finanzierung",
    label: "Finanzierung",
    kicker: "Baufinanzierung",
    headline: "Finanzierung, die zu Ihrer Immobilie passt.",
    lead:
      "Als eingetragener Immobiliardarlehensvermittler nach § 34i GewO vermitteln wir Baufinanzierungen ausgewählter Banken – neutral, unabhängig, transparent.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=2400&q=80",
    bullets: [
      {
        title: "Bankenauswahl",
        body: "Deutsche Bank, Commerzbank, ING, HypoVereinsbank, Santander, DSL Bank, Deutsche Bausparkasse Badenia.",
      },
      { title: "Zins- und Tilgungsvergleich", body: "Individuelle Modellrechnung mit Sollzinsbindung, Tilgung und Sondertilgungsrechten." },
      { title: "Fördermittel", body: "KfW-Darlehen und regionale Programme – wir prüfen die Kombination." },
      { title: "Anschlussfinanzierung", body: "Forward-Darlehen, Umschuldung, Prolongation." },
    ],
    process: [
      { step: "01", title: "Bedarfsanalyse", body: "Kaufpreis, Eigenkapital, Nebenkosten, monatliche Belastung." },
      { step: "02", title: "Angebotsvergleich", body: "Neutraler Vergleich zwischen den in Frage kommenden Banken." },
      { step: "03", title: "Antrag & Prüfung", body: "Unterlagen, Bankprüfung, Zusage." },
      { step: "04", title: "Auszahlung", body: "Koordination mit Notar und Bank bis zur Auszahlung." },
    ],
    ctaTitle: "Was ist realistisch für Sie?",
    ctaBody:
      "Wir rechnen Ihre Finanzierung ehrlich durch – ohne Verpflichtung. Vereinbaren Sie ein persönliches Gespräch.",
  },
  {
    slug: "immobiliensuche",
    label: "Immobiliensuche",
    kicker: "Suchauftrag",
    headline: "Wir suchen. Sie besichtigen die passende.",
    lead:
      "Sagen Sie uns, wonach Sie suchen. Wir gleichen mit unserem Bestand und unserem Netzwerk ab und melden uns, sobald etwas Passendes verfügbar ist.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=2400&q=80",
    bullets: [
      { title: "Ihr Anforderungsprofil", body: "Lage, Fläche, Zimmer, Budget, Zeithorizont." },
      { title: "Vormerkliste", body: "Sie erhalten Angebote vor der öffentlichen Vermarktung." },
      { title: "Off-Market Objekte", body: "Zugang zu Objekten, die nie öffentlich inseriert werden." },
      { title: "Persönliche Vorauswahl", body: "Sie besichtigen nur, was wirklich zu Ihnen passt." },
    ],
    process: [
      { step: "01", title: "Profilgespräch", body: "Wir hören zu und definieren Ihr Suchprofil." },
      { step: "02", title: "Match & Vorauswahl", body: "Wir gleichen mit unseren Beständen und dem Netzwerk ab." },
      { step: "03", title: "Besichtigung", body: "Sie sehen nur, was wirklich passt." },
      { step: "04", title: "Abwicklung", body: "Vertrag, Finanzierung, Notar – auf Wunsch aus einer Hand." },
    ],
    ctaTitle: "Sagen Sie uns, wonach Sie suchen.",
    ctaBody: "Wir nehmen Ihr Profil in die Vormerkliste auf – und melden uns, wenn wir das Passende finden.",
  },
  {
    slug: "homestaging",
    label: "Homestaging",
    kicker: "Präsentation",
    headline: "Der erste Eindruck entscheidet.",
    lead:
      "Homestaging bereitet Ihre Immobilie optisch für den Verkauf vor. Ein aufgeräumter, hell inszenierter Raum wirkt sofort größer, wertiger und schneller verkäuflich.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2400&q=80",
    bullets: [
      { title: "Raumanalyse", body: "Wir prüfen jeden Raum auf Licht, Farbe, Flow und Volumen." },
      { title: "Möblierung", body: "Neutrale, hochwertige Möblierung – bei Bedarf auf Zeit." },
      { title: "Lichtkonzept", body: "Warmes Licht, richtige Farbtemperatur, kein billiger Look." },
      { title: "Fotografie", body: "Professionelle Bilder, die Ihre Präsentation vervollständigen." },
    ],
    process: [
      { step: "01", title: "Vor-Ort-Termin", body: "Analyse und Konzept für Ihr Objekt." },
      { step: "02", title: "Vorschlag & Budget", body: "Transparent, abgestimmt auf Zielgruppe und Verkaufsziel." },
      { step: "03", title: "Umsetzung", body: "Möbel, Licht, Deko – schnell und diskret." },
      { step: "04", title: "Fotos & Vermarktung", body: "Professionelle Bilder für Exposé und Portale." },
    ],
    ctaTitle: "Machen Sie den Unterschied.",
    ctaBody: "Ein Homestaging-Termin lohnt sich fast immer – vor allem bei hochwertigen Objekten.",
  },
  {
    slug: "energieausweis",
    label: "Energieausweis",
    kicker: "Pflicht & Erstellung",
    headline: "Energieausweis – korrekt, rechtssicher, schnell.",
    lead:
      "Bei Verkauf oder Neuvermietung ist der Energieausweis Pflicht. Wir übernehmen die Erstellung – Verbrauchsausweis oder Bedarfsausweis, je nach Anforderung.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2400&q=80",
    bullets: [
      { title: "Verbrauchsausweis", body: "Auf Basis Ihrer realen Energieverbräuche der letzten Jahre." },
      { title: "Bedarfsausweis", body: "Auf Basis technischer Gebäudedaten – Pflicht bei älteren Wohngebäuden." },
      { title: "GEG-konform", body: "Erstellt nach aktuellem Gebäudeenergiegesetz." },
      { title: "Digital & schnell", body: "Unterlagen digital, Ausweis per PDF." },
    ],
    process: [
      { step: "01", title: "Datenaufnahme", body: "Wir sammeln die relevanten Unterlagen und Verbräuche." },
      { step: "02", title: "Berechnung", body: "Rechtssichere Berechnung durch qualifizierte Aussteller." },
      { step: "03", title: "Ausstellung", body: "Ausweis mit Registriernummer, GEG-konform." },
      { step: "04", title: "Vermarktung", body: "Ausweis-Daten direkt für Exposé und Portale." },
    ],
    ctaTitle: "Sie brauchen einen Energieausweis?",
    ctaBody: "Wir helfen Ihnen gerne bei der Erstellung – schnell, transparent, GEG-konform.",
  },
  {
    slug: "immobilienbewertung",
    label: "Immobilienbewertung",
    kicker: "Kostenfrei · unverbindlich",
    headline: "Was Ihre Immobilie wirklich wert ist.",
    lead:
      "Wir erstellen für Sie eine marktgerechte Wertermittlung, die alle relevanten Faktoren berücksichtigt – als solide Grundlage für den besten Verkaufspreis.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2400&q=80",
    bullets: [
      { title: "Vergleichswert", body: "Reale Verkaufspreise vergleichbarer Objekte in der Region." },
      { title: "Sachwert", body: "Baukosten, Alter, Zustand, Ausstattung, Grundstückswert." },
      { title: "Ertragswert", body: "Für vermietete Objekte – Rendite, Mieteinnahmen, Bewirtschaftung." },
      { title: "Marktanpassung", body: "Regionaler Marktfaktor, Nachfrage, aktuelle Zinssituation." },
    ],
    process: [
      { step: "01", title: "Termin", body: "Wir besichtigen Ihre Immobilie – vor Ort oder online." },
      { step: "02", title: "Analyse", body: "Vergleichs-, Sach- oder Ertragswert – je nach Objekt." },
      { step: "03", title: "Präsentation", body: "Sie erhalten eine nachvollziehbare, marktgerechte Bewertung." },
      { step: "04", title: "Empfehlung", body: "Auf Wunsch übernehmen wir Vermarktung und Verkauf." },
    ],
    ctaTitle: "Ihre Bewertung. Kostenfrei.",
    ctaBody: "Nehmen Sie Kontakt auf – wir erstellen eine seriöse, unverbindliche Wertermittlung.",
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
