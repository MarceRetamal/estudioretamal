import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Estudio Jurídico | Excelencia Legal desde 1999",
  description: "Estudio jurídico especializado con más de 25 años de experiencia. Ofrecemos asesoramiento legal integral en derecho civil, comercial, laboral, penal y tributario. Consulta inicial gratuita.",
  keywords: ["estudio jurídico", "abogados", "derecho civil", "derecho comercial", "derecho laboral", "asesoramiento legal", "abogado Buenos Aires", "bufete de abogados", "consulta legal gratuita", "abogado penalista", "derecho de familia", "sucesiones", "contratos"],
  authors: [{ name: "Estudio Jurídico" }],
  creator: "Estudio Jurídico",
  publisher: "Estudio Jurídico",
  category: "Legal Services",
  classification: "Professional Services",
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: "Estudio Jurídico | Excelencia Legal desde 1999",
    description: "Estudio jurídico especializado con más de 25 años de experiencia. Asesoramiento legal integral y representación experta. Consulta inicial gratuita.",
    url: "https://estudiojuridico.com",
    siteName: "Estudio Jurídico",
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Estudio Jurídico - Excelencia Legal desde 1999",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio Jurídico | Excelencia Legal desde 1999",
    description: "Estudio jurídico especializado con más de 25 años de experiencia. Asesoramiento legal integral y representación experta. Consulta inicial gratuita.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://estudiojuridico.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0B1B2B" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#0B1B2B" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Accessibility meta tags */}
        <meta name="accessibility" content="WCAG 2.1 AA" />
        <meta name="handheldFriendly" content="true" />
        <meta name="mobileOptimized" content="width" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body
        className={`${inter.variable} ${libreBaskerville.variable} antialiased bg-background text-foreground font-sans`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {/* Skip to main content for accessibility */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-law-accent text-law-primary px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-law-accent"
          >
            Saltar al contenido principal
          </a>
          
          {/* Main content */}
          <main id="main-content">
            {children}
          </main>
          
          <Toaster />
        </ThemeProvider>
        
        {/* Enhanced structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Estudio Jurídico",
              "description": "Estudio jurídico especializado con más de 25 años de experiencia en derecho civil, comercial, laboral y penal",
              "url": "https://estudiojuridico.com",
              "telephone": "+54 11 5555-0100",
              "email": "contacto@estudiojuridico.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Corrientes 1234",
                "addressLocality": "Buenos Aires",
                "addressRegion": "CABA",
                "postalCode": "1043",
                "addressCountry": "AR"
              },
              "openingHours": [
                "Mo-Fr 09:00-18:00"
              ],
              "priceRange": "$$",
              "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
              "languagesSpoken": ["Spanish", "English"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicios Legales",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Derecho Civil",
                      "description": "Asesoramiento en materia civil"
                    },
                    "price": "0",
                    "priceCurrency": "ARS",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Derecho Comercial",
                      "description": "Asesoramiento empresarial y contractual"
                    },
                    "price": "0",
                    "priceCurrency": "ARS",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Derecho Laboral",
                      "description": "Representación en conflictos laborales"
                    },
                    "price": "0",
                    "priceCurrency": "ARS",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Derecho Penal",
                      "description": "Defensa penal y asesoramiento"
                    },
                    "price": "0", 
                    "priceCurrency": "ARS",
                    "availability": "https://schema.org/InStock"
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Carlos M."
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Excelente servicio profesional, resolvieron mi caso rápidamente."
                },
                {
                  "@type": "Review", 
                  "author": {
                    "@type": "Person",
                    "name": "María L."
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "El mejor estudio jurídico, muy recomendados."
                }
              ],
              "sameAs": [
                "https://www.facebook.com/estudiojuridico",
                "https://www.linkedin.com/company/estudiojuridico",
                "https://twitter.com/estudiojuridico",
                "https://wa.me/5491155550100"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+54 11 5555-0100",
                "contactType": "customer service",
                "availableLanguage": ["Spanish", "English"],
                "hoursAvailable": "Mo-Fr 09:00-18:00"
              }
            })
          }}
        />
        
        {/* Breadcrumb structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Inicio",
                  "item": "https://estudiojuridico.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Servicios",
                  "item": "https://estudiojuridico.com#areas"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Contacto",
                  "item": "https://estudiojuridico.com#contacto"
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
