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
  description: "Estudio jurídico especializado con más de 25 años de experiencia. Ofrecemos asesoramiento legal integral en derecho civil, comercial, laboral, penal y tributario.",
  keywords: ["estudio jurídico", "abogados", "derecho civil", "derecho comercial", "derecho laboral", "asesoramiento legal", "abogado Buenos Aires", "bufete de abogados"],
  authors: [{ name: "Estudio Jurídico" }],
  openGraph: {
    title: "Estudio Jurídico | Excelencia Legal desde 1999",
    description: "Estudio jurídico especializado con más de 25 años de experiencia. Asesoramiento legal integral y representación experta.",
    url: "https://estudiojuridico.com",
    siteName: "Estudio Jurídico",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio Jurídico | Excelencia Legal desde 1999",
    description: "Estudio jurídico especializado con más de 25 años de experiencia. Asesoramiento legal integral y representación experta.",
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
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Estudio Jurídico",
              "description": "Estudio jurídico especializado con más de 25 años de experiencia",
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
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "$$",
              "sameAs": [
                "https://www.facebook.com/estudiojuridico",
                "https://www.linkedin.com/company/estudiojuridico",
                "https://twitter.com/estudiojuridico"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
