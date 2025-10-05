import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title:
    "Cobro judicial ético en La Plata | TEA, alimentos, honorarios – Estudio Retamal",
  description:
    "Abogado en La Plata. Cobro judicial ético y rápido: cobertura TEA, ejecuciones de alimentos, ejecución de honorarios y carteras B2B. Diagnóstico sin costo.",
  keywords: [
    "La Plata",
    "abogado",
    "cobro judicial",
    "TEA",
    "honorarios",
    "cobertura TEA",
    "recupero legal",
  ],
  openGraph: {
    title: "Cobro judicial ético en La Plata",
    description: "Medidas reales en días, sin hostigamiento.",
    url: "https://estudioretamal.vercel.app/",
    siteName: "Estudio Retamal",
    images: [
      { url: "/og-retamal.jpg", width: 1200, height: 630 },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cobro judicial ético en La Plata",
    description: "Medidas reales en días, sin hostigamiento.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased bg-neutral-50 text-neutral-900">
        {children}
      </body>
    </html>
  );
}
