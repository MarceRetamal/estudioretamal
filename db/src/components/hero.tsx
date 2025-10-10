'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Phone, MessageCircle, Shield, Users, Award, CheckCircle, Star, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

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
    const phoneNumber = '5491125826179'
    const message = encodeURIComponent('Hola, me gustaría agendar una consulta inicial.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const stats = [
    { icon: Shield, label: 'Años de Experiencia', value: '25+' },
    { icon: Users, label: 'Clientes Satisfechos', value: '500+' },
    { icon: Award, label: 'Casos Ganados', value: '95%' }
  ]

  const testimonials = [
    { name: 'Carlos M.', text: 'Excelente servicio profesional, resolvieron mi caso rápidamente.', rating: 5 },
    { name: 'María L.', text: 'El mejor estudio jurídico, muy recomendados.', rating: 5 },
    { name: 'Juan P.', text: 'Atención personalizada y resultados excepcionales.', rating: 5 }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-indigo-400 to-purple-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-emerald-400 to-cyan-600 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-2xl animate-bounce backdrop-blur-sm border border-white/10" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 bg-gradient-to-r from-indigo-400/20 to-purple-600/20 rounded-full animate-pulse backdrop-blur-sm border border-white/10" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-emerald-400/20 to-cyan-600/20 rounded-xl animate-bounce backdrop-blur-sm border border-white/10" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <div className={cn(
            'lg:col-span-7 space-y-8',
            isVisible && 'animate-in fade-in slide-in-from-bottom-4 duration-700'
          )}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 backdrop-blur-sm rounded-full px-6 py-3 animate-in fade-in slide-in-from-left-2 duration-500">
              <Shield className="h-5 w-5 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-100">
                Matrícula Profesional N° 12345
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-serif text-white leading-tight">
                Defendemos tus
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"> derechos</span>
                <br />
                con
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-600"> excelencia</span>
                <br />
                y
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600"> compromiso</span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
                Estudio jurídico especializado con más de 25 años de experiencia. 
                Ofrecemos asesoramiento legal integral y representación experta en 
                derecho civil, comercial, laboral y penal.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-600 hover:via-blue-700 hover:to-indigo-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl group transform hover:rotate-1 border-0"
                onClick={() => scrollToSection('#contacto')}
              >
                <Phone className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                Consulta Inicial Gratuita
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-cyan-400 text-cyan-100 hover:bg-cyan-500 hover:text-white font-bold px-10 py-5 rounded-2xl transition-all duration-500 group hover:shadow-2xl hover:scale-105 backdrop-blur-sm"
                onClick={openWhatsApp}
              >
                <MessageCircle className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                WhatsApp Directo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-2 border-white/50 flex items-center justify-center shadow-lg backdrop-blur-sm"
                    >
                      <span className="text-sm text-white font-bold">
                        {String.fromCharCode(64 + i)}
                      </span>
                    </div>
                  ))}
                </div>
                <div>
                  <span className="text-sm font-semibold text-slate-200">Experto equipo legal</span>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-xs text-slate-400 ml-1">4.9/5</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-400" />
                <span className="text-sm font-semibold text-slate-200">
                  Disponibilidad 24/7
                </span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className={cn(
            'lg:col-span-5',
            isVisible && 'animate-in fade-in slide-in-from-right-4 duration-700'
          )}
          style={{ transitionDelay: '200ms' }}
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <Shield className="h-10 w-10 text-white" />
                    </div>
                    <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/30 backdrop-blur-sm px-4 py-2 rounded-full">
                      Activo
                    </Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl font-serif text-white font-bold">
                      Tu caso, nuestra prioridad
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-lg">
                      Atención personalizada y estrategia legal efectiva para proteger tus intereses con la máxima confidencialidad.
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-cyan-400">
                          {stat.value}
                        </div>
                        <div className="text-xs text-slate-400 mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-xl border-0"
                    onClick={() => scrollToSection('#contacto')}
                  >
                    Agendar Consulta
                  </Button>
                </div>
              </div>

              {/* Floating Testimonial */}
              <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-6 max-w-xs animate-bounce border border-white/20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-200 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <p className="text-xs font-semibold text-cyan-300 mt-3">
                  - {testimonials[currentTestimonial].name}
                </p>
              </div>
              
              {/* Contact Badge */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-2xl shadow-2xl p-6 text-white animate-pulse border border-white/20">
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6" />
                  <div>
                    <p className="text-sm font-bold">Respuesta Rápida</p>
                    <p className="text-xs opacity-90">Menos de 24h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className={cn(
          'mt-24 pt-16 border-t border-white/20',
          isVisible && 'animate-in fade-in slide-in-from-bottom-4 duration-700'
        )}
        style={{ transitionDelay: '400ms' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-4 group">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 backdrop-blur-sm border border-white/20">
                    <stat.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div className="text-5xl font-bold text-white">
                    {stat.value}
                  </div>
                </div>
                <p className="text-slate-300 font-semibold text-lg">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-3 text-slate-400">
          <span className="text-sm font-medium">Desplázate</span>
          <div className="w-8 h-12 border-2 border-slate-500 rounded-full flex justify-center">
            <div className="w-2 h-4 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}