'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  ChevronLeft, 
  ChevronRight, 
  Quote,
  Star,
  Building,
  Briefcase,
  Users
} from 'lucide-react'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    id: 1,
    name: 'María González',
    position: 'CEO',
    company: 'Tech Solutions S.A.',
    type: 'corporate',
    testimonial: 'El equipo del estudio nos acompañó en una fusión compleja. Su profesionalismo y conocimiento del derecho societario fueron fundamentales para el éxito de la operación. Sin duda, los mejores.',
    rating: 5,
    case: 'Fusión empresarial $2.5M',
    duration: '6 meses',
    avatar: '/api/placeholder/100/100'
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    position: 'Director de RRHH',
    company: 'Industrias Patagónicas',
    type: 'laboral',
    testimonial: 'Nos representaron en un conflicto laboral colectivo. Lograron una negociación favorable que evitó un juicio costoso. Su estrategia y experiencia en derecho laboral son incomparables.',
    rating: 5,
    case: 'Conflicto laboral colectivo',
    duration: '3 meses',
    avatar: '/api/placeholder/100/100'
  },
  {
    id: 3,
    name: 'Ana Martínez',
    position: 'Emprendedora',
    company: 'StartUp Innovación',
    type: 'corporate',
    testimonial: 'Nos ayudaron a constituir nuestra empresa y a estructurar los contratos con inversores. Su asesoramiento fue clave para nuestra primera ronda de financiación. Profesionales excepcionales.',
    rating: 5,
    case: 'Constitución y financiación',
    duration: '2 meses',
    avatar: '/api/placeholder/100/100'
  },
  {
    id: 4,
    name: 'Roberto Silva',
    position: 'Gerente General',
    company: 'Constructora del Sur',
    type: 'civil',
    testimonial: 'Representamos a la empresa en un disputa contractual compleja. El resultado fue favorable gracias a su preparación exhaustiva y estrategia legal impecable. Muy recomendados.',
    rating: 5,
    case: 'Disputa contractual',
    duration: '8 meses',
    avatar: '/api/placeholder/100/100'
  },
  {
    id: 5,
    name: 'Laura Fernández',
    position: 'Vicepresidente',
    company: 'Grupo Financiero Nacional',
    type: 'tributario',
    testimonial: 'Nos asesoraron en una reestructuración fiscal compleja. Lograron optimizar nuestra carga tributaria cumpliendo con todas las normativas. Su conocimiento técnico es impresionante.',
    rating: 5,
    case: 'Reestructuración fiscal',
    duration: '4 meses',
    avatar: '/api/placeholder/100/100'
  },
  {
    id: 6,
    name: 'Diego Morales',
    position: 'Socio Fundador',
    company: 'Consultora Jurídica',
    type: 'civil',
    testimonial: 'Colaboramos con ellos en varios casos complejos. Su ética profesional y capacidad de análisis son excepcionales. Son nuestro referente en derecho civil y comercial.',
    rating: 5,
    case: 'Asesoramiento continuo',
    duration: '2+ años',
    avatar: '/api/placeholder/100/100'
  }
]

const companyLogos = [
  { name: 'Tech Solutions', category: 'technology' },
  { name: 'Industrias Patagónicas', category: 'industry' },
  { name: 'StartUp Innovación', category: 'startup' },
  { name: 'Constructora del Sur', category: 'construction' },
  { name: 'Grupo Financiero', category: 'finance' },
  { name: 'Consultora Jurídica', category: 'legal' }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'corporate':
        return <Building className="h-4 w-4" />
      case 'laboral':
        return <Users className="h-4 w-4" />
      case 'civil':
        return <Briefcase className="h-4 w-4" />
      default:
        return <Briefcase className="h-4 w-4" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'corporate':
        return 'Corporativo'
      case 'laboral':
        return 'Laboral'
      case 'civil':
        return 'Civil'
      case 'tributario':
        return 'Tributario'
      default:
        return 'General'
    }
  }

  return (
    <section id="testimonios" className="py-20 bg-law-bg">
      <div className="max-w-container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="border-law-accent text-law-accent bg-law-accent/10">
            Testimonios
          </Badge>
          
          <h2 className="text-h2 font-serif text-law-primary">
            La Confianza de
            <span className="text-law-accent"> Nuestros Clientes</span>
          </h2>
          
          <p className="text-body-lg text-law-neutral max-w-3xl mx-auto">
            Descubra por qué más de 500 empresas y personas confían en nuestro 
            estudio para proteger sus intereses y resolver sus casos legales.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative mb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-white overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-law-accent/10 rounded-full flex items-center justify-center">
                    <Quote className="h-8 w-8 text-law-accent" />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="text-center space-y-6">
                  <blockquote className="text-body-lg text-law-neutral leading-relaxed italic">
                    "{testimonials[currentIndex].testimonial}"
                  </blockquote>

                  {/* Rating */}
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={cn(
                          'h-5 w-5',
                          i < testimonials[currentIndex].rating 
                            ? 'text-law-accent fill-current' 
                            : 'text-law-neutral/30'
                        )} 
                      />
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex flex-col items-center space-y-3">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                      <AvatarFallback className="bg-law-accent/10 text-law-accent text-xl font-bold">
                        {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-law-primary">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-law-neutral">
                        {testimonials[currentIndex].position} en {testimonials[currentIndex].company}
                      </p>
                    </div>

                    {/* Case Info */}
                    <div className="flex flex-wrap justify-center gap-4 pt-4 border-t border-law-secondary/20">
                      <div className="flex items-center space-x-2">
                        {getTypeIcon(testimonials[currentIndex].type)}
                        <Badge variant="secondary" className="bg-law-accent/10 text-law-accent border-law-accent/20">
                          {getTypeLabel(testimonials[currentIndex].type)}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-law-neutral">
                        <span className="font-medium">Caso:</span>
                        <span>{testimonials[currentIndex].case}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-law-neutral">
                        <span className="font-medium">Duración:</span>
                        <span>{testimonials[currentIndex].duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-law-primary text-law-primary hover:bg-law-primary hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={cn(
                      'w-2 h-2 rounded-full transition-all duration-300',
                      index === currentIndex 
                        ? 'w-8 bg-law-accent' 
                        : 'bg-law-neutral/30 hover:bg-law-neutral/50'
                    )}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-law-primary text-law-primary hover:bg-law-primary hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Auto-play Toggle */}
            <div className="flex justify-center mt-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-law-neutral hover:text-law-primary"
              >
                {isAutoPlaying ? 'Pausar' : 'Reproducir'} presentación automática
              </Button>
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-xl font-serif text-law-primary mb-2">
              Empresas que confían en nosotros
            </h3>
            <p className="text-law-neutral">
              Más de 500 clientes satisfechos en diversos sectores
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companyLogos.map((company, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-6 bg-white rounded-lg shadow-subtle hover:shadow-card transition-all duration-300 cursor-pointer group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-law-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-law-accent/20 transition-colors">
                    <Building className="h-6 w-6 text-law-accent" />
                  </div>
                  <p className="text-sm font-medium text-law-neutral group-hover:text-law-primary transition-colors">
                    {company.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-law-primary rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-law-accent">500+</div>
              <p className="text-law-bg/80">Clientes Satisfechos</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-law-accent">95%</div>
              <p className="text-law-bg/80">Casos Ganados</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-law-accent">25+</div>
              <p className="text-law-bg/80">Años de Experiencia</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-law-accent">4.9</div>
              <p className="text-law-bg/80">Calificación Promedio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}