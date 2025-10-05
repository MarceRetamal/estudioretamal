import "./globals.css";
import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.estudioretamal.com.ar"),
  title: {
    default: "Estudio Retamal | Servicios Legales en La Plata",
    template: "%s | Estudio Retamal",
  },
  description:
    "Abogados en La Plata. Familia, laboral, usuarios y consumidores. Atención rápida por WhatsApp. Primera consulta orientativa.",
  keywords: [
    "abogado La Plata", "estudio jurídico La Plata",
    "familia", "laboral", "consumidor",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.estudioretamal.com.ar",
    siteName: "Estudio Retamal",
    title: "Servicios Legales en La Plata",
    description:
      "Protegemos tus derechos con respuestas rápidas y efectivas.",
  },
  twitter: { card: "summary_large_image" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD LegalService (ajusta dirección si hace falta)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Estudio Retamal",
    image: "https://www.estudioretamal.com.ar/og.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "La Plata",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    areaServed: "La Plata y alrededores",
    telephone: "+54 9 11 2582-6179",
    email: "consultas@estudioretamal.com.ar",
    url: "https://www.estudioretamal.com.ar",
    sameAs: [
      "https://g.page/", // tu Google Business Profile si lo tenés
      "https://instagram.com/marce_rtm",
    ],
  };

  return (
    <html lang="es" className={`${inter.variable} ${cinzel.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
