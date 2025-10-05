"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-black via-[#0B0B0C] to-[#101014] text-[#F5F1E6]">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4">
            <Image
              src="/logo-er.webp" // coloca tu logo en /public
              width={72}
              height={72}
              alt="Estudio Retamal"
              priority
            />
            <h1 className="font-[--font-cinzel] text-3xl md:text-5xl leading-tight">
              Servicios legales en La Plata
            </h1>
          </div>
          <p className="text-lg/relaxed text-[#E7E2D6]">
            Respuestas rápidas, trato humano y estrategia. Familia, Laboral y
            Defensa del Consumidor.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-xl bg-[#1E3A5F] hover:bg-[#23466F] px-5 py-3 font-medium"
              href="https://wa.me/5491125826179?text=Hola%20Estudio%20Retamal,%20necesito%20una%20consulta"
              target="_blank" rel="noopener"
            >
              Consultar por WhatsApp
            </a>
            <a
              className="rounded-xl border border-[#8B5E3C] px-5 py-3 font-medium hover:bg-[#151517]"
              href="#consulta"
            >
              Enviar consulta
            </a>
          </div>

          <ul className="text-sm text-[#CFC7B9] grid grid-cols-2 gap-x-6">
            <li>⏱️ Respuesta en menos de 24 h</li>
            <li>🧩 Estrategia personalizada</li>
            <li>📍 La Plata y alrededores</li>
            <li>🔒 Confidencialidad absoluta</li>
          </ul>
        </motion.div>

        {/* FORM */}
        <motion.form
          id="consulta"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#111216]/70 backdrop-blur rounded-2xl p-6 space-y-4 border border-white/5"
          action="/api/lead"
          method="POST"
        >
          <h2 className="font-[--font-cinzel] text-2xl">Tu consulta</h2>
          <input name="name" required placeholder="Nombre y apellido"
                 className="w-full bg-black/30 border border-white/10 rounded-lg p-3" />
          <input name="phone" required placeholder="Celular (WhatsApp)"
                 className="w-full bg-black/30 border border-white/10 rounded-lg p-3" />
          <input name="email" type="email" placeholder="Email"
                 className="w-full bg-black/30 border border-white/10 rounded-lg p-3" />
          <select name="area" className="w-full bg-black/30 border border-white/10 rounded-lg p-3">
            <option value="familia">Familia</option>
            <option value="laboral">Laboral</option>
            <option value="consumidor">Usuarios y Consumidores</option>
            <option value="otros">Otros</option>
          </select>
          <textarea name="message" rows={5} required
            placeholder="Contanos brevemente tu caso"
            className="w-full bg-black/30 border border-white/10 rounded-lg p-3" />
          <button
            className="w-full rounded-xl bg-[#8B5E3C] hover:bg-[#9C6C45] px-5 py-3 font-semibold text-black"
            type="submit"
          >
            Enviar y ser contactado
          </button>
          <p className="text-xs text-[#CFC7B9]">
            Acepto la política de privacidad y el tratamiento de mis datos.
          </p>
        </motion.form>
      </section>

      {/* ÁREAS */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">
        {[
          ["Familia", "Divorcios, alimentos, régimen de cuidado"],
          ["Laboral", "Despidos, indemnizaciones, accidentes"],
          ["Consumidor", "Planes, bancos, servicios, cláusulas abusivas"],
        ].map(([title, desc]) => (
          <motion.div
            key={String(title)}
            whileHover={{ y: -4 }}
            className="rounded-2xl p-6 border border-white/10 bg-gradient-to-b from-[#121214] to-[#0e0e10]"
          >
            <h3 className="font-[--font-cinzel] text-xl mb-2">{title}</h3>
            <p className="text-sm text-[#D9D3C7]">{desc}</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
