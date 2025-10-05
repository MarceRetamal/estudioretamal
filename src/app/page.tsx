import ContactForm from '@/components/ContactForm';
import { CheckCircle, ShieldCheck, Timer } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Navbar */}
      <header className="w-full sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-neutral-900" />
            <span className="font-semibold tracking-tight">Estudio Retamal</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicios" className="hover:text-blue-700 transition-colors">Servicios</a>
            <a href="#metodo" className="hover:text-blue-700 transition-colors">Cómo trabajamos</a>
            <a href="#resultados" className="hover:text-blue-700 transition-colors">Resultados</a>
            <a href="#faq" className="hover:text-blue-700 transition-colors">FAQ</a>
            <a
              href="https://wa.me/5491125826179?text=Hola%20Marcelo%2C%20quiero%20agendar%20diagn%C3%B3stico"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Agendar diagnóstico
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Cobro judicial ético y rápido en La Plata
            </h1>
            <p className="text-lg text-neutral-700">
              Medidas reales en días, sin hostigamiento. Diagnóstico por videollamada
              (20 min) sin costo y presupuesto por etapas.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5491125826179?text=Hola%20Marcelo%2C%20quiero%20agendar%20diagn%C3%B3stico"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                Agendar diagnóstico sin costo
              </a>
              <a
                href="#servicios"
                className="inline-block px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-colors"
              >
                Ver servicios
              </a>
            </div>
            <p className="text-sm text-neutral-600">
              * No reemplaza asesoramiento personalizado. Resultados sujetos a antecedentes y normativa aplicable.
            </p>
          </div>
          <div className="hidden lg:block">
            <img
              src="/legal-hero.jpg"
              alt="Ilustración abstracta de derecho"
              className="w-full h-auto rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Confianza / Trust factors */}
      <section className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
          <div className="flex gap-4">
            <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Cumplimiento legal</h3>
              <p className="text-sm text-neutral-700">
                Trato digno al consumidor, Registro No Llame y buenas prácticas BCRA.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <ShieldCheck className="w-8 h-8 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Protección de datos</h3>
              <p className="text-sm text-neutral-700">
                Confidencialidad absoluta y gestión segura de tus datos.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Timer className="w-8 h-8 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Rapidez garantizada</h3>
              <p className="text-sm text-neutral-700">
                Primera medida en ≤ 5 días hábiles y demanda en ≤ 21 días si hay título.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="border-t bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold">Servicios productizados</h2>
          <p className="mt-2 text-neutral-700">
            Paquetes claros, tiempos definidos y entregables concretos.  Elegí el
            servicio que mejor se adapte a tu necesidad.
          </p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* TEA */}
            <div className="rounded-3xl border p-6 bg-white shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-xl">Cobertura Total Ya — TEA (Salud/Educación)</h3>
                <p className="mt-3 text-sm text-neutral-700">
                  Amparo y medidas cautelares para cobertura integral (terapias, integración escolar, acompañantes).
                </p>
                <ul className="mt-4 text-sm list-disc pl-5 space-y-1 text-neutral-700">
                  <li>Diagnóstico por videollamada (20 min)</li>
                  <li>Intimación formal + cautelar</li>
                  <li>Acción principal y seguimiento</li>
                </ul>
              </div>
              <a
                href="#contacto"
                className="inline-block mt-6 text-sm font-medium text-blue-600 underline"
              >
                Quiero este servicio
              </a>
            </div>
            {/* Honorarios */}
            <div className="rounded-3xl border p-6 bg-white shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-xl">Honorarios que Entran — B2B (colegas/estudios)</h3>
                <p className="mt-3 text-sm text-neutral-700">
                  Ejecución de honorarios regulados con liquidación, demanda y medidas cautelares.
                </p>
                <ul className="mt-4 text-sm list-disc pl-5 space-y-1 text-neutral-700">
                  <li>Toma en 24 h</li>
                  <li>Reporte mensual</li>
                  <li>White‑label / % sobre recupero</li>
                </ul>
              </div>
              <a
                href="#contacto"
                className="inline-block mt-6 text-sm font-medium text-blue-600 underline"
              >
                Coordinemos un piloto
              </a>
            </div>
            {/* Cobro Ético */}
            <div className="rounded-3xl border p-6 bg-white shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-xl">Cobro Judicial Ético — B2B (retail/financieras/colegios)</h3>
                <p className="mt-3 text-sm text-neutral-700">
                  Recupero legal con contacto respetuoso y ejecución temprana cuando haya título.
                </p>
                <ul className="mt-4 text-sm list-disc pl-5 space-y-1 text-neutral-700">
                  <li>Piloto 100 casos / 90 días</li>
                  <li>SLAs y KPIs de recupero</li>
                  <li>Fee por archivo + %</li>
                </ul>
              </div>
              <a
                href="#contacto"
                className="inline-block mt-6 text-sm font-medium text-blue-600 underline"
              >
                Solicitar propuesta
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Método */}
      <section id="metodo" className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold">Cómo trabajamos</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {['Diagnóstico 20 min', 'Primera medida', 'Demanda / Acuerdo'].map((step, i) => (
              <div key={step} className="rounded-3xl border bg-neutral-50 p-6 shadow-sm">
                <div className="text-3xl font-bold text-blue-600">{i + 1}</div>
                <h4 className="mt-2 font-medium text-lg">{step}</h4>
                <p className="mt-2 text-sm text-neutral-700">
                  {i === 0 && 'Videollamada, checklist y estrategia sin costo.'}
                  {i === 1 && 'Carta documento / cautelar / notificación electrónica según corresponda.'}
                  {i === 2 && 'Seguimiento, reportes y cierre con documentación.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section id="resultados" className="border-t bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold">Resultados y estándares</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border p-6 bg-white shadow-sm">
              <h4 className="font-medium text-lg">SLAs</h4>
              <ul className="mt-2 text-sm list-disc pl-5 space-y-1 text-neutral-700">
                <li>≤ 5 días hábiles a primera medida</li>
                <li>≤ 21 días a demanda ejecutiva (si hay título)</li>
                <li>Reporte por hito relevante</li>
              </ul>
            </div>
            <div className="rounded-3xl border p-6 bg-white shadow-sm">
              <h4 className="font-medium text-lg">KPIs de gestión</h4>
              <ul className="mt-2 text-sm list-disc pl-5 space-y-1 text-neutral-700">
                <li>Tasa de cierre por servicio</li>
                <li>$ recuperado / costo</li>
                <li>Reclamos de consumidores ≈ 0</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold">Preguntas frecuentes</h2>
          <div className="mt-8 grid gap-6">
            {[
              { q: '¿El diagnóstico tiene costo?', a: 'No. Es una videollamada de 20 minutos para entender tu caso y explicarte el plan.' },
              { q: '¿Cómo son los honorarios?', a: 'Paquetes por etapa + éxitos cuando corresponda. Todo por escrito antes de empezar.' },
              { q: '¿Trabajan sin hostigar?', a: 'Sí. Cumplimos trato digno, protección de datos y buenas prácticas de contacto.' },
            ].map((item) => (
              <div key={item.q} className="rounded-3xl border bg-neutral-50 p-5 shadow-sm">
                <p className="font-medium text-lg">{item.q}</p>
                <p className="mt-1 text-sm text-neutral-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="border-t bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold">Contacto y agendamiento</h2>
          <p className="mt-2 text-neutral-700">Completá tus datos y te respondemos para coordinar la videollamada.</p>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 py-10 text-sm text-neutral-600 grid md:grid-cols-2 gap-4">
          <p>© {new Date().getFullYear()} Estudio Retamal. Todos los derechos reservados.</p>
          <p className="md:text-right">La Plata · Provincia de Buenos Aires · Argentina</p>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/5491125826179?text=Hola%20Marcelo%2C%20quiero%20agendar%20diagn%C3%B3stico"
        className="fixed bottom-5 right-5 rounded-full px-5 py-4 bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Abrir WhatsApp para agendar diagnóstico"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>

      {/* Schema JSON‑LD para LocalBusiness y FAQ */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LegalService',
            name: 'Estudio Retamal',
            areaServed: ['La Plata', 'Provincia de Buenos Aires'],
            url: 'https://estudioretamal.vercel.app/',
            email: 'consultas@estudioretamal.com.ar',
            telephone: '+54 9 11 2582-6179',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'La Plata',
              addressRegion: 'Buenos Aires',
              addressCountry: 'AR',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿El diagnóstico tiene costo?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'No. Es una videollamada de 20 minutos para entender tu caso y explicarte el plan.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cómo son los honorarios?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Paquetes por etapa + éxitos cuando corresponda. Todo por escrito antes de empezar.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Trabajan sin hostigar?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Sí. Cumplimos trato digno, protección de datos y buenas prácticas de contacto.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
