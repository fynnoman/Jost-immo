export type Region = {
  slug: string;
  name: string;
  headline: string;
  lead: string;
  image: string;
  facts: { k: string; v: string }[];
  notes: string[];
};

export const REGION_MAP: Record<string, Region> = {
  saarbruecken: {
    slug: "saarbruecken",
    name: "Saarbrücken",
    headline: "Immobilien in Saarbrücken. Landeshauptstadt, Herzstück, Marktzentrum.",
    lead:
      "Als Landeshauptstadt, größte Stadt und einziges Oberzentrum des Saarlands ist Saarbrücken der wichtigste Immobilienmarkt der Region. Innerstädtische Eigentumswohnungen, klassische Stadthäuser, Villen in St. Arnual und Alt-Saarbrücken – wir kennen die Preisstruktur jeder Lage.",
    image:
      "https://images.unsplash.com/photo-1568827999250-3f6afff96e66?auto=format&fit=crop&w=2400&q=80",
    facts: [
      { k: "Einwohner", v: "ca. 180.000" },
      { k: "Landkreis", v: "Regionalverband Saarbrücken" },
      { k: "Typische Segmente", v: "ETW · MFH · Stadthäuser · Gewerbe" },
      { k: "Highlights", v: "Ludwigskirche · Saarbrücker Schloss · Staden" },
    ],
    notes: [
      "Deutlich differenzierte Preisstruktur zwischen Zentrum und Umlandstadtteilen.",
      "Hohe Nachfrage nach kleinen ETW im Zentrum und ruhigen Reihenhäusern in den Randlagen.",
    ],
  },
  "sankt-wendel": {
    slug: "sankt-wendel",
    name: "Sankt Wendel",
    headline: "Immobilien in Sankt Wendel. Natur, Ruhe und der Petersberg.",
    lead:
      "Der Landkreis Sankt Wendel steht für eine hohe Lebensqualität, viel Natur und stabile Preise. Ein- und Zweifamilienhäuser sowie Grundstücke sind hier besonders gefragt.",
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=2400&q=80",
    facts: [
      { k: "Landkreis", v: "St. Wendel" },
      { k: "Typische Segmente", v: "EFH · DHH · Grundstücke · Ferienobjekte" },
      { k: "Highlights", v: "Petersberg · Bostalsee · Kernstadt St. Wendel" },
    ],
    notes: [
      "Stabile, wertkonservative Preisentwicklung.",
      "Hohe Nachfrage nach Baugrundstücken im nördlichen Landkreis.",
    ],
  },
  saarlouis: {
    slug: "saarlouis",
    name: "Saarlouis",
    headline: "Immobilien in Saarlouis. Barockstadt mit lebendigem Markt.",
    lead:
      "Saarlouis vereint historischen Stadtkern mit einem lebendigen Immobilienmarkt. Nachgefragt sind sanierte Altbauten in der Innenstadt und Einfamilienhäuser in den Vororten.",
    image:
      "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=2400&q=80",
    facts: [
      { k: "Landkreis", v: "Saarlouis" },
      { k: "Typische Segmente", v: "Altbauwohnungen · EFH · Doppelhaushälften" },
      { k: "Highlights", v: "Deutscher Platz · Vauban-Festung · Innenstadt" },
    ],
    notes: [
      "Belebter Innenstadtmarkt mit sanierten Altbauten.",
      "Attraktive Vororte für Familien.",
    ],
  },
  neunkirchen: {
    slug: "neunkirchen",
    name: "Neunkirchen",
    headline: "Immobilien in Neunkirchen. Zwischen Tradition und Aufbruch.",
    lead:
      "Neunkirchen bietet ein breites Spektrum – von Bestandsimmobilien mit Sanierungspotenzial bis zu modernen Neubauten. Attraktive Einstiegspreise, gute Anbindung.",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2400&q=80",
    facts: [
      { k: "Landkreis", v: "Neunkirchen" },
      { k: "Typische Segmente", v: "EFH · ETW · Sanierungsobjekte" },
      { k: "Highlights", v: "Stummsche Reithalle · Kohlhof" },
    ],
    notes: [
      "Attraktive Einstiegspreise im saarländischen Vergleich.",
      "Nachfrage nach Sanierungsobjekten mit Potenzial.",
    ],
  },
  "saarpfalz-kreis": {
    slug: "saarpfalz-kreis",
    name: "Saarpfalz-Kreis",
    headline: "Immobilien im Saarpfalz-Kreis. Wohnen mit Weitblick.",
    lead:
      "Der Saarpfalz-Kreis punktet mit Blieskastel, Homburg und dem Bliesgau. Attraktive Wohnlagen, Universitätsstandort und starke Nachfrage nach hochwertigen Häusern und Wohnungen.",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=2400&q=80",
    facts: [
      { k: "Landkreis", v: "Saarpfalz-Kreis" },
      { k: "Typische Segmente", v: "EFH · ETW · Anlageobjekte (Homburg)" },
      { k: "Highlights", v: "Homburg · Blieskastel · Biosphäre Bliesgau" },
    ],
    notes: [
      "Universitätsstandort Homburg treibt Nachfrage nach ETW.",
      "Bliesgau als Premiumlage für Familien.",
    ],
  },
  "merzig-wadern": {
    slug: "merzig-wadern",
    name: "Merzig-Wadern",
    headline: "Immobilien in Merzig-Wadern. Zwischen Saarschleife und Grenze.",
    lead:
      "Der Landkreis Merzig-Wadern lebt von Landschaft und Grenznähe zu Luxemburg. Attraktive Grundstücke, Ferienimmobilien und Häuser für pendelnde Wochenkommunen sind hier stark nachgefragt.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2400&q=80",
    facts: [
      { k: "Landkreis", v: "Merzig-Wadern" },
      { k: "Typische Segmente", v: "EFH · Grundstücke · Ferienobjekte" },
      { k: "Highlights", v: "Saarschleife · Cloef · Grenznähe Luxemburg" },
    ],
    notes: [
      "Steigende Preise durch Luxemburg-Nähe.",
      "Ferienobjekte an der Saarschleife besonders gefragt.",
    ],
  },
};

export const REGION_SLUGS = Object.keys(REGION_MAP);
