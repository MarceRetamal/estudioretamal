'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Phone, MessageCircle, Shield, Users, Award } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openWhatsApp = () => {
    const phoneNumber = '5491155550100' // Número de WhatsApp del estudio
    const message = encodeURIComponent('Hola, me gustaría agendar una consulta inicial.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const stats = [
    { icon: Shield, label: 'Años de Experiencia', value: '25+' },
    { icon: Users, label: 'Clientes Satisfechos', value: '500+' },
    { icon: Award, label: 'Casos Ganados', value: '95%' }
  ]

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden texture-paper">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-law-bg via-law-bg to-law-secondary/5"></div>
      
      {/* Subtle geometric patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-law-accent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-law-primary rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-container mx-auto px-4 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <div className={cn(
            'lg:col-span-7 space-y-8 fade-in-up',
            isVisible && 'visible'
          )}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-law-accent/10 border border-law-accent/20 rounded-full px-4 py-2">
              <Shield className="h-4 w-4 text-law-accent" />
              <span className="text-sm font-medium text-law-accent">
                Matrícula Profesional N° 12345
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-h1 lg:text-5xl xl:text-6xl font-serif text-law-primary leading-tight">
                Defendemos tus
                <span className="text-law-accent"> derechos</span>
                <br />
                con
                <span className="text-law-accent"> excelencia</span>
              </h1>
              
              <p className="text-body-lg text-law-neutral max-w-2xl leading-relaxed">
                Estudio jurídico especializado con más de 25 años de experiencia. 
                Ofrecemos asesoramiento legal integral y representación experta en 
                derecho civil, comercial y laboral.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-law-accent hover:bg-law-accent/90 text-law-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                onClick={() => scrollToSection('#contacto')}
              >
                <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Consulta Inicial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-law-primary text-law-primary hover:bg-law-primary hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 group"
                onClick={openWhatsApp}
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                WhatsApp Directo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-law-secondary border-2 border-law-bg flex items-center justify-center"
                    >
                      <span className="text-xs text-law-accent font-bold">
                        {String.fromCharCode(64 + i)}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="text-sm text-law-neutral">
                  Experto equipo legal
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-4 h-4 bg-law-accent rounded-sm"
                    ></div>
                  ))}
                </div>
                <span className="text-sm text-law-neutral">
                  4.9/5 satisfacción
                </span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className={cn(
            'lg:col-span-5 fade-in-up',
            isVisible && 'visible'
          )}
          style={{ transitionDelay: '200ms' }}
          >
            <div className="relative">
              {/* Main visual card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-law-secondary/20">
                <div className="space-y-6">
                  {/* Document icon */}
                  <div className="w-16 h-16 bg-law-accent/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-8 w-8 text-law-accent" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-serif text-law-primary font-semibold">
                      Tu caso, nuestra prioridad
                    </h3>
                    <p className="text-law-neutral leading-relaxed">
                      Atención personalizada y estrategia legal efectiva para proteger tus intereses.
                    </p>
                  </div>

                  {/* Stats mini */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-law-secondary/20">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-law-accent">
                          {stat.value}
                        </div>
                        <div className="text-xs text-law-neutral mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-law-accent/10 rounded-full flex items-center justify-center animate-pulse">
                <Award className="h-12 w-12 text-law-accent" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-law-secondary/10 rounded-lg flex items-center justify-center">
                <Users className="h-10 w-10 text-law-secondary" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className={cn(
          'mt-20 pt-12 border-t border-law-secondary/20 fade-in-up',
          isVisible && 'visible'
        )}
        style={{ transitionDelay: '400ms' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="flex items-center justify-center space-x-3">
                  <stat.icon className="h-6 w-6 text-law-accent" />
                  <div className="text-3xl font-bold text-law-primary">
                    {stat.value}
                  </div>
                </div>
                <p className="text-law-neutral font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-law-neutral/60">
          <span className="text-sm font-medium">Desplázate</span>
          <div className="w-6 h-10 border-2 border-law-neutral/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-law-neutral/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}