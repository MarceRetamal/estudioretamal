'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Scale, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Shield,
  Award,
  Users,
  Clock,
  ChevronUp,
  ExternalLink
} from 'lucide-react'
import { cn } from '@/lib/utils'

const footerSections = [
  {
    title: 'Servicios',
    links: [
      { name: 'Derecho Civil', href: '#areas' },
      { name: 'Derecho Comercial', href: '#areas' },
      { name: 'Derecho Laboral', href: '#areas' },
      { name: 'Derecho de Familia', href: '#areas' },
      { name: 'Derecho Penal', href: '#areas' },
      { name: 'Derecho Tributario', href: '#areas' }
    ]
  },
  {
    title: 'Empresa',
    links: [
      { name: 'Sobre Nosotros', href: '#equipo' },
      { name: 'Nuestro Equipo', href: '#equipo' },
      { name: 'Casos de Éxito', href: '#casos' },
      { name: 'Blog Legal', href: '#recursos' },
      { name: 'Carreras', href: '#' },
      { name: 'Prensa', href: '#' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Aviso Legal', href: '/legal' },
      { name: 'Política de Privacidad', href: '/privacidad' },
      { name: 'Política de Cookies', href: '/cookies' },
      { name: 'Términos y Condiciones', href: '/terminos' },
      { name: 'Compliance', href: '/compliance' },
      { name: 'Libro de Reclamaciones', href: '/reclamaciones' }
    ]
  },
  {
    title: 'Contacto',
    links: [
      { name: 'Agendar Consulta', href: '#contacto' },
      { name: 'WhatsApp Directo', href: 'whatsapp' },
      { name: 'Emergencias 24/7', href: 'tel:+541155550100' },
      { name: 'Sede Central', href: '#contacto' },
      { name: 'Sucursales', href: '#' },
      { name: 'Soporte Online', href: 'mailto:contacto@estudiojuridico.com' }
    ]
  }
]

const certifications = [
  { name: 'ISO 9001', description: 'Gestión de Calidad' },
  { name: 'ISO 27001', description: 'Seguridad de Información' },
  { name: 'Compliance', description: 'Normativa Legal' },
  { name: 'Data Protection', description: 'Protección de Datos' }
]

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/estudiojuridico', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/estudiojuridico', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/estudiojuridico', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/estudiojuridico', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/@estudiojuridico', label: 'YouTube' }
]

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openWhatsApp = () => {
    const phoneNumber = '5491155550100'
    const message = encodeURIComponent('Hola, me gustaría agendar una consulta inicial.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-law-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Scale className="h-10 w-10 text-law-accent" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-law-accent rounded-full opacity-80"></div>
              </div>
              <div>
                <h3 className="text-xl font-serif text-white font-bold">
                  Estudio Jurídico
                </h3>
                <p className="text-xs text-law-accent font-medium tracking-wide">
                  Excelencia Legal desde 1999
                </p>
              </div>
            </div>

            <p className="text-law-bg/80 leading-relaxed max-w-sm">
              Con más de 25 años de experiencia, somos un referente en el ámbito 
              legal, comprometidos con la defensa de los derechos e intereses 
              de nuestros clientes.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-law-accent" />
                <a href="tel:+541155550100" className="text-law-bg/90 hover:text-law-accent transition-colors">
                  +54 11 5555-0100
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-law-accent" />
                <a href="mailto:contacto@estudiojuridico.com" className="text-law-bg/90 hover:text-law-accent transition-colors">
                  contacto@estudiojuridico.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-law-accent" />
                <span className="text-law-bg/90">Av. Corrientes 1234, CABA</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              className="bg-law-accent hover:bg-law-accent/90 text-law-primary font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              onClick={() => scrollToSection('#contacto')}
            >
              Consulta Inicial Gratuita
            </Button>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        {link.href.startsWith('#') ? (
                          <button
                            onClick={() => scrollToSection(link.href)}
                            className="text-law-bg/80 hover:text-law-accent transition-colors duration-200 text-sm flex items-center group text-left w-full"
                          >
                            {link.name}
                            <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                        ) : link.href === 'whatsapp' ? (
                          <button
                            onClick={openWhatsApp}
                            className="text-law-bg/80 hover:text-law-accent transition-colors duration-200 text-sm flex items-center group text-left w-full"
                          >
                            {link.name}
                            <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                        ) : (
                          <a
                            href={link.href}
                            className="text-law-bg/80 hover:text-law-accent transition-colors duration-200 text-sm flex items-center group"
                            target={link.href.startsWith('http') || link.href.startsWith('tel:') || link.href.startsWith('mailto:') ? '_blank' : '_self'}
                            rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                          >
                            {link.name}
                            <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-16 pt-8 border-t border-law-secondary/20">
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold text-white mb-2">
              Certificaciones y Cumplimiento
            </h4>
            <p className="text-law-bg/80 text-sm">
              Estamos certificados bajo los más altos estándares de calidad y cumplimiento normativo
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="text-center p-4 bg-law-secondary/10 rounded-lg border border-law-secondary/20 hover:bg-law-secondary/20 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-law-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-law-accent" />
                </div>
                <h5 className="font-semibold text-white text-sm mb-1">
                  {cert.name}
                </h5>
                <p className="text-law-bg/70 text-xs">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Compliance Section */}
        <div className="mt-12 p-6 bg-law-secondary/10 rounded-lg border border-law-secondary/20">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-law-accent" />
                <h5 className="text-lg font-semibold text-white">
                  Información Legal y Regulatoria
                </h5>
              </div>
              <div className="space-y-2 text-sm text-law-bg/80">
                <p>
                  <strong>Matrícula Profesional:</strong> N° 12345 - Colegio de Abogados de la Ciudad de Buenos Aires
                </p>
                <p>
                  <strong>Responsabilidad:</strong> Limitada según normativa profesional vigente
                </p>
                <p>
                  <strong>Jurisdicción:</strong> Competencia en todo el territorio nacional
                </p>
                <p>
                  <strong>Seguro:</strong> Póliza de responsabilidad civil profesional N° 98765
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-law-accent" />
                <h5 className="text-lg font-semibold text-white">
                  Compromiso con la Ética
                </h5>
              </div>
              <div className="space-y-2 text-sm text-law-bg/80">
                <p>
                  • Cumplimiento estricto del Código de Ética Profesional
                </p>
                <p>
                  • Confidencialidad absoluta de la información del cliente
                </p>
                <p>
                  • Transparencia en honorarios y costos procesales
                </p>
                <p>
                  • Actualización continua en normativas y jurisprudencia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-law-secondary/20">
        <div className="max-w-container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-law-bg/80 text-sm">
                © {currentYear} Estudio Jurídico. Todos los derechos reservados.
              </p>
              <p className="text-law-bg/60 text-xs mt-1">
                Designed with excellence for legal professionals
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-law-bg/60 text-sm mr-2">Síguenos:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-law-secondary/10 rounded-lg flex items-center justify-center text-law-bg/80 hover:text-law-accent hover:bg-law-accent/10 transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-law-accent hover:bg-law-accent/90 text-law-primary rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-40"
          aria-label="Volver arriba"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </footer>
  )
}