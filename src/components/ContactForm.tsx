'use client';

import { useState } from 'react';

/**
 * A simple contact form that collects the visitor’s name, email, WhatsApp
 * number and a brief message.  Upon submission it opens the default mail
 * client via a `mailto:` link, preserving the functionality of the original
 * form.  Styles are inspired by Bootstrap 5: inputs are rounded and lightly
 * bordered, with clear spacing and accessible labels.
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build a mailto link with the form data.  This triggers the visitor’s
    // mail client and preserves the current simple workflow.  If you later
    // integrate a backend or a service like Netlify Forms, you can replace
    // this logic.
    const subject = encodeURIComponent('Consulta desde la web');
    const body = encodeURIComponent(
      `Hola Marcelo, mi nombre es ${formData.name} y mi caso es: ${formData.message}\n\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}`,
    );
    window.location.href = `mailto:consultas@estudioretamal.com.ar?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-2 md:col-span-1">
        <label htmlFor="name" className="text-sm font-medium text-neutral-700">
          Nombre y apellido
        </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full rounded-lg border border-neutral-300 bg-white p-3 text-sm placeholder-neutral-400 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
          placeholder="Tu nombre completo"
          required
        />
      </div>
      <div className="flex flex-col gap-2 md:col-span-1">
        <label htmlFor="email" className="text-sm font-medium text-neutral-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full rounded-lg border border-neutral-300 bg-white p-3 text-sm placeholder-neutral-400 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
          placeholder="tu@email.com"
          required
        />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="whatsapp" className="text-sm font-medium text-neutral-700">
          WhatsApp
        </label>
        <input
          id="whatsapp"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleInputChange}
          className="w-full rounded-lg border border-neutral-300 bg-white p-3 text-sm placeholder-neutral-400 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
          placeholder="+54 9 11 1234 5678"
        />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="message" className="text-sm font-medium text-neutral-700">
          Contanos brevemente tu caso
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className="w-full rounded-lg border border-neutral-300 bg-white p-3 text-sm placeholder-neutral-400 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
          rows={4}
          placeholder="Escribe tu mensaje..."
          required
        />
      </div>
      <div className="flex gap-4 md:col-span-2">
        <button
          type="submit"
          className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
        >
          Enviar consulta por email
        </button>
        <a
          href="https://wa.me/5491125826179?text=Hola%20Marcelo%2C%20quiero%20agendar%20diagn%C3%B3stico"
          className="inline-block px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp directo
        </a>
      </div>
      <p className="text-xs text-neutral-500 md:col-span-2">
        Al enviar tus datos aceptás nuestra política de privacidad y el uso de medios electrónicos para notificaciones.
      </p>
    </form>
  );
}
