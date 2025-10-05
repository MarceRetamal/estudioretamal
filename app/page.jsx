export default function Landing() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Navbar */}
      <header className="w-full sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-neutral-900" />
            <span className="font-semibold tracking-tight">Estudio Retamal</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicios" className="hover:opacity-70">Servicios</a>
            <a href="#metodo" className="hover:opacity-70">Cómo trabajamos</a>
            <a href="#resultados" className="hover:opacity-70">Resultados</a>
            <a href="#faq" className="hover:opacity-70">FAQ</a>
            <a href="https://wa.me/5491125826179?text=Hola%20Marcelo%2C%20vengo%20desde%20la%20web%20y%20quiero%20agendar%20diagn%C3%B3stico" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-neutral-900 text-white hover:opacity-90">Agendar diagnóstico</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
              Cobro Judicial Ético y Soluciones de Urgencia en La Plata
            </h1>
            <p className="mt-5 text-lg text-neutral-700">
              Medidas concretas en días, sin hostigamiento. Diagnóstico por videollamada de 20 minutos, paquete cerrado y primera medida tangible.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://wa.me/5491125826179?text=Hola%20Marcelo%2C%20vengo%20desde%20la%20web%20y%20quiero%20agendar%20diagn%C3%B3stico" target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-2xl bg-neutral-900 text-white hover:opacity-90">
                Agendar diagnóstico sin costo
              </a>
              <a href="#servicios" className="px-5 py-3 rounded-2xl border border-neutral-300 hover:bg-white">
                Ver servicios
              </a>
            </div>
            <p className="mt-4 text-sm text-neutral-600">* No reemplaza asesoramiento personalizado. Resultados sujetos a antecedentes y normativa aplicable.</p>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm border">
            <div className="grid gap-4">
              <div className="p-4 rounded-2xl border bg-neutral-50">
                <p className="text-sm font-medium">Promesa operativa</p>
                <ul className="mt-2 text-sm text-neutral-700 list-disc pl-5 space-y-1">
                  <li>Primera medida en ≤ 5 días hábiles.</li>
                  <li>Demanda ejecutiva en ≤ 21 días si el título lo permite.</li>
                  <li>Reporte de estado en cada hito.</li>
                </ul>
              </div>
              <div className="p-4 rounded-2xl border bg-neutral-50">
                <p className="text-sm font-medium">Cumplimiento</p>
                <ul className="mt-2 text-sm text-neutral-700 list-disc pl-5 space-y-1">
                  <li>Trato digno al consumidor. Sin hostigamiento.</li>
                  <li>Protección de datos y confidencialidad.</li>
                  <li>Buenas prácticas de contacto y notificación electrónica.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold">Servicios productizados</h2>
          <p className="mt-2 text-neutral-700">Paquetes claros, tiempos definidos y entregables concretos.</p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* TEA */}
            <div className="rounded-3xl border p-6 bg-neutral-50">
              <h3 className="font-semibold text-lg">Cobertura Total Ya — TEA (Salud/Educación)</h3>
              <p className="mt-2 text-sm text-neutral-700">Amparo y medidas cautelares para cobertura integral (terapias, integración escolar, acompañantes).</p>
              <ul className="mt-3 text-sm list-disc pl-5 space-y-1">
                <li>Diagnóstico por video (20’)</li>
                <li>Intimación formal + cautelar</li>
                <li>Acción principal y seguimiento</li>
              </ul>
              <a href="https://wa.me/5491125826179?text=Hola%20Marcelo%2C%20vengo%20desde%20la%20web%20y%20quiero%20agendar%20diagn%C3%B3stico" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm font-medium underline">Quiero este servicio</a>
            </div>
            {/* Honorarios */}
            <div className="rounded-3xl border p-6 bg-neutral-50">
              <h3 className="font-semibold text-lg">Honorarios que Entran — B2B (colegas/estudios)</h3>
              <p className="mt-2 text-sm text-neutral-700">Ejecución de honorarios regulados con liquidación, demanda y medidas cautelares.</p>
              <ul className="mt-3 text-sm list-disc pl-5 space-y-1">
                <li>Toma en 24 h</li>
                <li>Reporte mensual</li>
                <li>White‑label / % sobre recupero</li>
              </ul>
              <a href="https://wa.me/5491125826179?text=Hola%20Marcelo%2C%20vengo%20desde%20la%20web%20y%20quiero%20agendar%20diagn%C3%B3stico" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm font-medium underline">Coordinemos un piloto</a>
            </div>
            {/* Cobro Ético */}
            <div className="rounded-3xl border p-6 bg-neutral-50">
              <h3 className="font-semibold text-lg">Cobro Judicial Ético — B2B (retail/financieras/colegios)</h3>
              <p className="mt-2 text-sm text-neutral-700">Recupero legal con contacto respetuoso y ejecución temprana cuando haya título.</p>
              <ul className="mt-3 text-sm list-disc pl-5 space-y-1">
                <li>Piloto 100 casos / 90 días</li>
                <li>SLAs y KPIs de recupero</li>
                <li>Fee por archivo + %</li>
              </ul>
              <a href="https://wa.me/5491125826179?text=Hola%20Marcelo%2C%20vengo%20desde%20la%20web%20y%20quiero%20agendar%20diagn%C3%B3stico" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm font-medium underline">Solicitar propuesta</a>
            </div>
          </div>
        </div>
      </section>

      {/* Método */}
      <section id="metodo" className="border-t bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold">Cómo trabajamos</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {["Diagnóstico 20’", "Primera medida", "Demanda / Acuerdo"].map((step, i) => (
              <div key={step} className="rounded-3xl border bg-white p-6">
                <div className="text-3xl font-bold">{i + 1}</div>
                <h4 className="mt-2 font-medium">{step}</h4>
                <p className="mt-2 text-sm text-neutral-700">
                  {i === 0 && "Videollamada, checklist y estrategia sin costo."}
                  {i === 1 && "Carta documento / cautelar / notificación electrónica según corresponda."}
                  {i === 2 && "Seguimiento, reportes y cierre con documentación."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section id="resultados" className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold">Resultados y estándares</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border p-6 bg-neutral-50">
              <h4 className="font-medium">SLAs</h4>
              <ul className="mt-2 text-sm list-disc pl-5 space-y-1 text-neutral-700">
                <li>≤ 5 días hábiles a primera medida</li>
                <li>≤ 21 días a demanda ejecutiva (si hay título)</li>
                <li>Reporte por hito relevante</li>
              </ul>
            </div>
            <div className="rounded-3xl border p-6 bg-neutral-50">
              <h4 className="font-medium">KPIs de gestión</h4>
              <ul className="mt-2 text-sm list-disc pl-5 space-y-1 text-neutral-700">
                <li>Tasa de cierre por servicio</li>
                <li>$ recuperado / costo</li>
                <li>Reclamos de consumidores ≈ 0</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold">Preguntas frecuentes</h2>
          <div className="mt-6 grid gap-4">
            {[
              {q: "¿El diagnóstico tiene costo?", a: "No. Es una videollamada de 20 minutos para entender tu caso y explicarte el plan."},
              {q: "¿Cómo son los honorarios?", a: "Paquetes por etapa + éxitos cuando corresponda. Todo por escrito antes de empezar."},
              {q: "¿Trabajan sin hostigar?", a: "Sí. Cumplimos trato digno, protección de datos y buenas prácticas de contacto."},
            ].map((item) => (
              <div key={item.q} className="rounded-2xl border bg-white p-5">
                <p className="font-medium">{item.q}</p>
                <p className="mt-1 text-sm text-neutral-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold">Contacto y agendamiento</h2>
          <p className="mt-2 text-neutral-700">También podés escribirnos directo por WhatsApp o email.</p>
          <form className="mt-6 grid md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
            <input className="w-full rounded-xl border p-3" placeholder="Nombre y apellido" />
            <input className="w-full rounded-xl border p-3" placeholder="Email" type="email" />
            <input className="w-full rounded-xl border p-3 md:col-span-2" placeholder="WhatsApp" />
            <textarea className="w-full rounded-xl border p-3 md:col-span-2" rows={4} placeholder="Contanos brevemente tu caso" />
            <div className="flex gap-3 md:col-span-2">
              <a href="mailto:consultas@estudioretamal.com.ar?subject=Consulta%20desde%20la%20web&body=Hola%20Marcelo%2C%20mi%20nombre%20es%20[Tu%20Nombre]%20y%20mi%20caso%20es%3A%20..." className="px-5 py-3 rounded-2xl bg-neutral-900 text-white hover:opacity-90">Enviar consulta por email</a>
              <a href="https://wa.me/5491125826179?text=Hola%20Marcelo%2C%20vengo%20desde%20la%20web%20y%20quiero%20agendar%20diagn%C3%B3stico" target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-2xl border">WhatsApp directo</a>
            </div>
            <p className="text-xs text-neutral-500 md:col-span-2">Al enviar tus datos aceptás nuestra política de privacidad y el uso de medios electrónicos para notificaciones.</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-neutral-600 grid md:grid-cols-2 gap-4">
          <p>© {new Date().getFullYear()} Estudio Retamal. Todos los derechos reservados.</p>
          <p className="md:text-right">La Plata · Provincia de Buenos Aires · Argentina · <a href="mailto:consultas@estudioretamal.com.ar" className="underline">consultas@estudioretamal.com.ar</a></p>
        </div>
      </footer>
    </div>
  );
}
