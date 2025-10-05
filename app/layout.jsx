export const metadata = {
  title: "Estudio Retamal — Soluciones Legales de Urgencia",
  description: "Cobro Judicial Ético y soluciones de urgencia en La Plata. Medidas concretas en días, sin hostigamiento.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased bg-neutral-50 text-neutral-900">
        {children}
      </body>
    </html>
  );
}
