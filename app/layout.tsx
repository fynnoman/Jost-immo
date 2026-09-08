import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Immobilien-Jost · Ihr Immobilienmakler im Saarland",
    template: "%s · Immobilien-Jost",
  },
  description:
    "Immobilien-Jost aus Saarbrücken. Verkauf, Vermietung und Baufinanzierung im Saarland und darüber hinaus. Inhabergeführt von Andreas Jost mit über 20 Jahren Erfahrung.",
  metadataBase: new URL("https://www.immobilien-jost.de"),
  openGraph: {
    title: "Immobilien-Jost · Ihr Immobilienmakler im Saarland",
    description:
      "Verkauf, Vermietung, Finanzierung und Bewertung von Immobilien im Saarland. Persönlich. Diskret. Kompetent.",
    type: "website",
    locale: "de_DE",
    url: "https://www.immobilien-jost.de",
    siteName: "Immobilien-Jost",
  },
  icons: {
    icon: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${sans.variable} ${serif.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
