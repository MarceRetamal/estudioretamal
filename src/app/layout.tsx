import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  title: {
    default: "Estudio Retamal | Abogados",
    template: "%s | Estudio Retamal",
  },
  description: "Soluciones legales claras y efectivas en La Plata: familia, laboral y defensa del consumidor.",
  keywords: ["abogados", "La Plata", "familia", "laboral", "consumidor", "estudio jurídico"],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Estudio Retamal",
    title: "Estudio Retamal | Abogados",
    description: "Soluciones legales claras y efectivas en La Plata.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio Retamal | Abogados",
    description: "Soluciones legales claras y efectivas en La Plata.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ldOrg = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Estudio Retamal",
    "image": (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com") + "/og.png",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "La Plata",
      "addressRegion": "Buenos Aires",
      "addressCountry": "AR"
    },
    "areaServed": ["La Plata", "Buenos Aires"],
    "telephone": process.env.NEXT_PUBLIC_PHONE || "+54 9 11 0000-0000",
    "priceRange": "$$",
    "sameAs": [
      process.env.NEXT_PUBLIC_INSTAGRAM || "",
      process.env.NEXT_PUBLIC_FACEBOOK || ""
    ]
  };

  return (
    <html lang="es">
      <body>
        <header className="site">
          <div className="container" style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <a href="/" style={{display: "flex", alignItems: "center", gap: ".6rem"}}>
              <span style={{width: 10, height: 10, borderRadius: 999, background: "var(--brand)", display: "inline-block"}} />
              <strong>Estudio Retamal</strong>
            </a>
            <nav>
              <a href="/areas">Áreas</a>
              <a href="/equipo">Equipo</a>
              <a href="/casos">Casos</a>
              <a href="/recursos">Recursos</a>
              <a className="btn" href="/contacto">Contacto</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="container muted" style={{borderTop: "1px solid var(--border)", paddingTop: "1.5rem"}}>
          © {new Date().getFullYear()} Estudio Retamal. Todos los derechos reservados.
        </footer>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldOrg) }}
        />
      </body>
    </html>
  );
}
