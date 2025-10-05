# Estudio Retamal — Landing (Next.js + Tailwind)

**Cómo correr localmente**

1. Instalar Node.js LTS.
2. `npm install`
3. `npm run dev` y abrir http://localhost:3000

**Cómo desplegar GRATIS**

### Opción A — Vercel (recomendada)
- Crear una cuenta en Vercel.
- Importar este repositorio desde GitHub (o subirlo con el botón *New Project*).
- Vercel detecta Next.js automáticamente. *Build Command:* `next build`. *Output:* `.next` (default).
- Te dará un subdominio gratuito. Luego podés conectar tu dominio si querés.

### Opción B — Netlify
- Crear cuenta en Netlify.
- Importar repositorio. *Build:* `npm run build`. *Publish directory:* `.next` + activar *Netlify Next.js Runtime* o usar Adaptador Next.

### Opción C — Cloudflare Pages
- Conectar repo. *Build:* `npm run build`. *Build output directory:* `.vercel/output/static` usando el *Adapter* de Next (opcional) o export estático si migrás a contenido estático.

**Formas de contacto configuradas**
- WhatsApp directo: https://wa.me/5491125826179?text=Hola%20Marcelo%2C%20vengo%20desde%20la%20web%20y%20quiero%20agendar%20diagn%C3%B3stico
- Email: consultas@estudioretamal.com.ar

**Siguientes mejoras**
- Reemplazar el botón de email por un servicio de formularios (ej.: Formspree, Tally, Netlify Forms) para guardar leads.
- Agregar agenda (Calendly/Tidycal) y píxeles de conversión.
