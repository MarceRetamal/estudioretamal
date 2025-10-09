import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: "class",
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
        extend: {
                // Design Tokens - Estudio Jurídico Clásico Ejecutivo
                colors: {
                        // Paleta A - Confianza & Autoridad
                        'law-primary': '#0B1B2B',      // Azul profundo
                        'law-secondary': '#123C56',    // Azul petróleo
                        'law-accent': '#C4A661',       // Dorado sobrio
                        'law-bg': '#F7F7F5',          // Fondo marfil
                        'law-neutral': '#2E3239',      // Gris pizarra
                        'law-text': '#1A1D21',         // Texto grafito
                        
                        // System colors (compatibilidad con shadcn/ui)
                        background: 'hsl(var(--background))',
                        foreground: 'hsl(var(--foreground))',
                        card: {
                                DEFAULT: 'hsl(var(--card))',
                                foreground: 'hsl(var(--card-foreground))'
                        },
                        popover: {
                                DEFAULT: 'hsl(var(--popover))',
                                foreground: 'hsl(var(--popover-foreground))'
                        },
                        primary: {
                                DEFAULT: 'hsl(var(--primary))',
                                foreground: 'hsl(var(--primary-foreground))'
                        },
                        secondary: {
                                DEFAULT: 'hsl(var(--secondary))',
                                foreground: 'hsl(var(--secondary-foreground))'
                        },
                        muted: {
                                DEFAULT: 'hsl(var(--muted))',
                                foreground: 'hsl(var(--muted-foreground))'
                        },
                        accent: {
                                DEFAULT: 'hsl(var(--accent))',
                                foreground: 'hsl(var(--accent-foreground))'
                        },
                        destructive: {
                                DEFAULT: 'hsl(var(--destructive))',
                                foreground: 'hsl(var(--destructive-foreground))'
                        },
                        border: 'hsl(var(--border))',
                        input: 'hsl(var(--input))',
                        ring: 'hsl(var(--ring))',
                        chart: {
                                '1': 'hsl(var(--chart-1))',
                                '2': 'hsl(var(--chart-2))',
                                '3': 'hsl(var(--chart-3))',
                                '4': 'hsl(var(--chart-4))',
                                '5': 'hsl(var(--chart-5))'
                        }
                },
                // Tipografía - Escala tipográfica
                fontFamily: {
                        'serif': ['Libre Baskerville', 'Source Serif 4', 'serif'],
                        'sans': ['Inter', 'SF Pro', 'system-ui', 'sans-serif']
                },
                fontSize: {
                        'h1': ['48px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
                        'h2': ['36px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
                        'h3': ['28px', { lineHeight: '1.3' }],
                        'body': ['16px', { lineHeight: '1.5' }],
                        'body-lg': ['18px', { lineHeight: '1.5' }],
                        'caption': ['13px', { lineHeight: '1.5' }]
                },
                // Espaciado - Escala de 4
                spacing: {
                        'xs': '4px',
                        'sm': '8px',
                        'md': '12px',
                        'lg': '16px',
                        'xl': '24px',
                        '2xl': '32px',
                        '3xl': '48px',
                        '4xl': '64px'
                },
                // Border radius
                borderRadius: {
                        'none': '0',
                        'sm': 'calc(var(--radius) - 4px)',
                        'md': 'calc(var(--radius) - 2px)',
                        'lg': 'var(--radius)',
                        'xl': '16px',
                        'full': '9999px'
                },
                // Sombras
                boxShadow: {
                        'card': '0 8px 24px rgba(0, 0, 0, 0.08)',
                        'card-hover': '0 12px 32px rgba(0, 0, 0, 0.12)',
                        'navbar': '0 4px 16px rgba(0, 0, 0, 0.06)',
                        'subtle': '0 2px 8px rgba(0, 0, 0, 0.04)'
                },
                // Animaciones y transiciones
                transitionDuration: {
                        'fast': '180ms',
                        'base': '240ms',
                        'slow': '320ms'
                },
                transitionTimingFunction: {
                        'smooth': 'cubic-bezier(0.2, 0.8, 0.2, 1)',
                        'ease-out': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                },
                // Grid system
                gridTemplateColumns: {
                        '12': 'repeat(12, minmax(0, 1fr))',
                        '8': 'repeat(8, minmax(0, 1fr))',
                        '6': 'repeat(6, minmax(0, 1fr))',
                        '4': 'repeat(4, minmax(0, 1fr))',
                        '3': 'repeat(3, minmax(0, 1fr))',
                        '2': 'repeat(2, minmax(0, 1fr))'
                },
                // Container max width
                maxWidth: {
                        'container': '1200px',
                        'wide': '1280px'
                }
        }
  },
  plugins: [tailwindcssAnimate],
};
export default config;
