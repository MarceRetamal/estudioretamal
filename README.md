# Estudio Jurídico - Website Premium

Una interfaz web premium para un estudio jurídico que transmite seguridad, profesionalismo y confianza, con estética contemporánea, transiciones sutiles y microinteracciones elegantes.

## 🎨 Diseño y Características

### Dirección Visual
- **Paleta Clásico Ejecutivo**: Azules profundos, dorado sobrio, fondo marfil
- **Tipografía**: Serif humanista para titulares (Libre Baskerville), sans geométrica para cuerpo (Inter)
- **Estilo**: Serio, cálido y cercano, evitando clichés visuales legales

### Componentes Implementados
- ✅ **Navbar** sticky con animaciones y estado scroll
- ✅ **Hero** con textura sutil y CTA dual
- ✅ **Áreas de Práctica** con cards interactivas
- ✅ **Equipo** con bios y credenciales expandibles
- ✅ **Testimonios** con carrusel suave y autoplay
- ✅ **Formulario de Contacto** con validaciones y estados
- ✅ **Footer** completo con navegación y compliance

### Características Técnicas
- 🌙 **Dark Mode** automático y manual
- ♿ **Accesibilidad WCAG 2.1 AA**
- 📱 **Responsive Design** mobile-first
- ⚡ **Performance** optimizada con skeletons y lazy loading
- 🎭 **Microinteracciones** sutiles y elegantes
- 🔍 **SEO** optimizado con metadatos y structured data

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15 con App Router
- **Lenguaje**: TypeScript 5
- **Styling**: Tailwind CSS 4 con design system personalizado
- **UI Components**: shadcn/ui (New York style)
- **Icons**: Lucide React
- **Animations**: CSS custom animations y Framer Motion ready
- **Theme**: next-themes para dark mode
- **Fonts**: Google Fonts (Inter + Libre Baskerville)

## 🎯 Design System

### Tokens de Color
```css
--law-primary: #0B1B2B      /* Azul profundo */
--law-secondary: #123C56    /* Azul petróleo */
--law-accent: #C4A661       /* Dorado sobrio */
--law-bg: #F7F7F5          /* Fondo marfil */
--law-neutral: #2E3239      /* Gris pizarra */
--law-text: #1A1D21         /* Texto grafito */
```

### Escala Tipográfica
- **H1**: 48px / 1.2
- **H2**: 36px / 1.3
- **H3**: 28px / 1.3
- **Body**: 16px / 1.5
- **Caption**: 13px / 1.5

### Espaciado
Escala modular de 4px: 4, 8, 12, 16, 24, 32, 48, 64px

### Animaciones
- **Micro**: 180ms (cubic-bezier(0.2, 0.8, 0.2, 1))
- **Base**: 240ms
- **Overlays**: 320ms
- **Respeta prefers-reduced-motion**

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css          # Estilos globales y design system
│   ├── layout.tsx           # Layout principal con metadata SEO
│   └── page.tsx             # Página home
├── components/
│   ├── ui/                  # Componentes shadcn/ui
│   ├── navbar.tsx           # Navegación principal
│   ├── hero.tsx             # Sección hero
│   ├── practice-areas.tsx   # Áreas de práctica
│   ├── team.tsx             # Equipo y bios
│   ├── testimonials.tsx     # Testimonios y carrusel
│   ├── contact-form.tsx     # Formulario de contacto
│   ├── footer.tsx           # Footer completo
│   ├── theme-provider.tsx   # Proveedor de tema
│   └── motion-interactions.tsx # Utilidades de animación
└── lib/
    ├── utils.ts             # Utilidades generales
    ├── db.ts                # Cliente Prisma
    └── socket.ts            # Configuración Socket.IO
```

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+
- npm o yarn

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm run dev
```
La aplicación estará disponible en http://localhost:3000

### Build para Producción
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 🎨 Componentes Principales

### Navbar
- Sticky con efecto al hacer scroll
- Menú responsive con mobile menu
- Integración con dark mode
- Progress bar de lectura

### Hero
- Textura sutil de papel
- Animaciones de entrada
- CTA dual (Consulta + WhatsApp)
- Estadísticas con contador animado

### Áreas de Práctica
- Grid responsive
- Cards con hover effects
- Iconos y características
- Filtrado por categoría

### Equipo
- Cards con avatares
- Expansión de detalles
- Información de contacto
- Certificaciones y logros

### Testimonios
- Carrusel con autoplay
- Navegación manual
- Rating system
- Company logos

### Formulario de Contacto
- Validaciones en tiempo real
- Estados de envío
- Preferencias de contacto
- Niveles de urgencia

### Footer
- Navegación completa
- Información legal y compliance
- Certificaciones
- Social links

## ♿ Accesibilidad

### WCAG 2.1 AA
- Contraste mínimo 4.5:1 para texto normal
- Navegación por teclado completa
- Focus indicators visibles
- Skip to main content link
- ARIA labels apropiados
- Respeta prefers-reduced-motion

### Características
- Screen reader friendly
- Keyboard navigation
- High contrast support
- Text scaling
- Focus management

## 🌙 Dark Mode

### Implementación
- Sistema automático (prefers-color-scheme)
- Toggle manual persistente
- Paleta conservadora sin neones
- Smooth transitions
- Componente ThemeProvider

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large**: > 1280px

### Características
- Mobile-first approach
- Touch-friendly targets (44px mínimo)
- Optimized typography scaling
- Adaptive layouts

## ⚡ Performance

### Optimizaciones
- Lazy loading de imágenes
- Skeleton states para carga
- Optimización de fonts
- CSS animations vs JavaScript
- Minified production build
- Image optimization (WebP ready)

### Métricas Objetivo
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1
- TTI: < 3.8s

## 🔧 Personalización

### Colores
Modificar variables CSS en `globals.css`:
```css
:root {
  --law-primary: #tu-color;
  --law-accent: #tu-acento;
  /* ... */
}
```

### Tipografía
Actualizar imports en `layout.tsx` y font families en `tailwind.config.ts`

### Animaciones
Personalizar duraciones y easing en las utilidades CSS

## 📄 Licencia

Proyecto desarrollado para Estudio Jurídico. Todos los derechos reservados.

---

**Desarrollado con Next.js 15, TypeScript, Tailwind CSS y shadcn/ui**
