'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Crear el mailto con los datos del formulario
    const subject = encodeURIComponent('Consulta desde la web');
    const body = encodeURIComponent(`Hola Marcelo, mi nombre es ${formData.name} y mi caso es: ${formData.message}

Email: ${formData.email}
WhatsApp: ${formData.whatsapp}`);
    
    window.location.href = `mailto:consultas@estudioretamal.com.ar?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid md:grid-cols-2 gap-4">
      <input 
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        className="w-full rounded-xl border p-3" 
        placeholder="Nombre y apellido" 
        required
      />
      <input 
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className="w-full rounded-xl border p-3" 
        placeholder="Email" 
        type="email" 
        required
      />
      <input 
        name="whatsapp"
        value={formData.whatsapp}
        onChange={handleInputChange}
        className="w-full rounded-xl border p-3 md:col-span-2" 
        placeholder="WhatsApp" 
      />
      <textarea 
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        className="w-full rounded-xl border p-3 md:col-span-2" 
        rows={4} 
        placeholder="Contanos brevemente tu caso" 
        required
      />
      <div className="flex gap-3 md:col-span-2">
        <button 
          type="submit"
          className="px-5 py-3 rounded-2xl bg-neutral-900 text-white hover:opacity-90" 
        >
          Enviar consulta por email
        </button>
        <a 
          href="https://wa.me/5491125826179?text=Hola%20Marcelo%2C%20vengo%20desde%20la%20web%20y%20quiero%20agendar%20diagn%C3%B3stico" 
          className="px-5 py-3 rounded-2xl border"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp directo
        </a>
      </div>
      <p className="text-xs text-neutral-500 md:col-span-2">Al enviar tus datos aceptás nuestra política de privacidad y el uso de medios electrónicos para notificaciones.</p>
    </form>
  );
}