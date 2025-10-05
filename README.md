# App Router skeleton para Estudio Retamal

Estructura creada para `/src/app` con rutas agrupadas en `(marketing)`:

```
src/app
 ├─ (marketing)/
 │   ├─ page.tsx           // Home
 │   ├─ areas/
 │   │   ├─ page.tsx       // Index de áreas
 │   │   ├─ familia/...
 │   │   ├─ laboral/...
 │   │   └─ consumidor/...
 │   ├─ equipo/ page.tsx
 │   ├─ casos/ page.tsx    // testimonios, métricas
 │   ├─ recursos/ page.tsx // guías descargables
 │   └─ contacto/ page.tsx // mapa + formulario
 ├─ api/lead/route.ts      // endpoint de leads (Resend)
 ├─ sitemap.ts             // nativo Next.js
 ├─ robots.ts              // nativo Next.js
 ├─ opengraph-image.tsx    // OG dinámico (next/og)
 ├─ layout.tsx             // metadata global + JSON-LD
 └─ globals.css            // tokens/variables de color
```

## Variables de entorno

Configurar en Vercel o `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://tu-dominio
NEXT_PUBLIC_PHONE=+5491125826179
NEXT_PUBLIC_INSTAGRAM=https://instagram.com/tu_cuenta
NEXT_PUBLIC_FACEBOOK=https://facebook.com/tu_cuenta
RESEND_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxx
LEAD_NOTIFY_EMAIL=consultas@estudioretamal.com.ar
```

> El formulario en `/contacto` hace POST a `/api/lead` y el route envía un email vía Resend.

## Notas

- El OG dinámico acepta `?title=...` para personalizar el título.
- `sitemap.ts` y `robots.ts` usan `NEXT_PUBLIC_SITE_URL` como base.
- Estilos básicos y tokens en `globals.css`; puedes adaptar la paleta.
