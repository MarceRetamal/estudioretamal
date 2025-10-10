'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Scale, 
  Building, 
  Users, 
  FileText, 
  Home, 
  Briefcase,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { cn } from '@/lib/utils'

const practiceAreas = [
  {
    id: 1,
    title: 'Derecho Civil',
    description: 'Asesoramiento integral en contratos, responsabilidad civil, sucesiones y derechos reales.',
    icon: Scale,
    color: 'law-accent',
    features: [
      'Contratos civiles y comerciales',
      'Responsabilidad civil',
      'Sucesiones y herencias',
      'Derechos reales'
    ],
    cases: '150+ casos resueltos'
  },
  {
    id: 2,
    title: 'Derecho Comercial',
    description: 'Especialización en derecho societario, contratos mercantiles y reestructuraciones empresariales.',
    icon: Building,
    color: 'law-secondary',
    features: [
      'Constitución de sociedades',
      'Contratos mercantiles',
      'Reestructuraciones',
      'Fusiones y adquisiciones'
    ],
    cases: '200+ empresas asesoradas'
  },
  {
    id: 3,
    title: 'Derecho Laboral',
    description: 'Defensa de derechos laborales para empleados y empleadores en todo tipo de conflictos.',
    icon: Users,
    color: 'law-primary',
    features: [
      'Despidos injustificados',
      'Accidentes laborales',
      'Negociación colectiva',
      'Seguridad social'
    ],
    cases: '300+ casos laborales'
  },
  {
    id: 4,
    title: 'Derecho de Familia',
    description: 'Acompañamiento sensible y profesional en divorcios, custodia y régimen de visitas.',
    icon: Home,
    color: 'law-accent',
    features: [
      'Divorcios y separaciones',
      'Custodia compartida',
      'Pensiones alimenticias',
      'Violencia familiar'
    ],
    cases: '180+ familias asesoradas'
  },
  {
    id: 5,
    title: 'Derecho Penal',
    description: 'Representación legal robusta en causas penales y defensa de garantías constitucionales.',
    icon: FileText,
    color: 'law-secondary',
    features: [
      'Defensa penal',
      'Delitos económicos',
      'Garantías constitucionales',
      'Recursos de apelación'
    ],
    cases: '120+ casos penales'
  },
  {
    id: 6,
    title: 'Derecho Tributario',
    description: 'Optimización fiscal y defensa en controversias tributarias con autoridades fiscales.',
    icon: Briefcase,
    color: 'law-primary',
    features: [
      'Planeamiento fiscal',
      'Controversias tributarias',
      'Defensa en inspecciones',
      'Recursos administrativos'
    ],
    cases: '90+ casos tributarios'
  }
]

export function PracticeAreas() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const scrollToContact = () => {
    const element = document.querySelector('#contacto')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="areas" className="py-20 bg-law-bg">
      <div className="max-w-container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="border-law-accent text-law-accent bg-law-accent/10">
            Especialidades
          </Badge>
          
          <h2 className="text-h2 font-serif text-law-primary">
            Áreas de
            <span className="text-law-accent"> Práctica</span>
          </h2>
          
          <p className="text-body-lg text-law-neutral max-w-3xl mx-auto">
            Contamos con especialistas en cada área del derecho para ofrecerle 
            el mejor asesoramiento legal adaptado a sus necesidades específicas.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <Card 
              key={area.id}
              className={cn(
                'group relative overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2 cursor-pointer',
                hoveredCard === area.id ? 'ring-2 ring-law-accent/50' : ''
              )}
              onMouseEnter={() => setHoveredCard(area.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient overlay */}
              <div className={cn(
                'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300',
                area.color === 'law-accent' && 'from-law-accent to-transparent',
                area.color === 'law-secondary' && 'from-law-secondary to-transparent',
                area.color === 'law-primary' && 'from-law-primary to-transparent'
              )}></div>

              <CardHeader className="space-y-4">
                {/* Icon */}
                <div className={cn(
                  'w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110',
                  area.color === 'law-accent' && 'bg-law-accent/10',
                  area.color === 'law-secondary' && 'bg-law-secondary/10',
                  area.color === 'law-primary' && 'bg-law-primary/10'
                )}>
                  <area.icon className={cn(
                    'h-8 w-8 transition-colors duration-300',
                    area.color === 'law-accent' && 'text-law-accent',
                    area.color === 'law-secondary' && 'text-law-secondary',
                    area.color === 'law-primary' && 'text-law-primary'
                  )} />
                </div>

                <div className="space-y-2">
                  <CardTitle className="text-xl font-serif text-law-primary group-hover:text-law-accent transition-colors duration-300">
                    {area.title}
                  </CardTitle>
                  <CardDescription className="text-law-neutral leading-relaxed">
                    {area.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div className="space-y-3">
                  {area.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-law-accent flex-shrink-0" />
                      <span className="text-sm text-law-neutral">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-law-secondary/20">
                  <span className="text-sm font-medium text-law-neutral">
                    {area.cases}
                  </span>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-law-accent hover:text-law-accent/80 hover:bg-law-accent/10 p-0 h-auto"
                    onClick={scrollToContact}
                  >
                    Ver más
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>

              {/* Hover effect overlay */}
              {hoveredCard === area.id && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 right-4">
                    <div className="w-2 h-2 bg-law-accent rounded-full animate-pulse"></div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-law-primary rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl font-serif mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-law-bg/80 mb-6 max-w-2xl mx-auto">
              Contáctenos para evaluar su caso. Si no manejamos directamente su área legal, 
              lo derivaremos con profesionales de confianza.
            </p>
            <Button 
              size="lg"
              className="bg-law-accent hover:bg-law-accent/90 text-law-primary font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={scrollToContact}
            >
              Consultar sobre mi caso
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}