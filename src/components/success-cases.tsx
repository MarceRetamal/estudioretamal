'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Trophy, 
  Scale, 
  Building, 
  Users, 
  FileText, 
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Award,
  Star,
  Clock
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface CaseStudy {
  id: string
  title: string
  category: string
  description: string
  challenge: string
  solution: string
  result: string
  outcome: string
  icon: any
  color: string
  tags: string[]
  year: string
  duration: string
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Conflicto Corporativo Multinacional',
    category: 'Derecho Comercial',
    description: 'Resolución exitosa de disputa accionaria en empresa multinacional',
    challenge: 'Conflicto entre socios por dirección estratégica y reparto de utilidades',
    solution: 'Mediación y reestructuración societaria con acuerdo de accionistas',
    result: 'Acuerdo amistoso y plan de continuidad empresarial',
    outcome: '95% de satisfacción de las partes',
    icon: Building,
    color: 'from-blue-600 to-indigo-600',
    tags: ['Societario', 'Mediación', 'Acuerdo'],
    year: '2024',
    duration: '3 meses'
  },
  {
    id: '2',
    title: 'Despido Masivo Indebido',
    category: 'Derecho Laboral',
    description: 'Representación colectiva de 45 empleados en caso de despido injustificado',
    challenge: 'Despido sin causa justificada y falta de indemnización',
    solution: 'Acción judicial colectiva con medida cautelar',
    result: 'Reinstalación y pago de indemnizaciones completas',
    outcome: '$2.5M en indemnizaciones obtenidas',
    icon: Users,
    color: 'from-emerald-600 to-teal-600',
    tags: ['Colectivo', 'Indemnización', 'Reinstalación'],
    year: '2023',
    duration: '6 meses'
  },
  {
    id: '3',
    title: 'Herencia Compleja con Bienes en el Exterior',
    category: 'Derecho Civil',
    description: 'Sucesión internacional con activos en múltiples jurisdicciones',
    challenge: 'Bienes en 3 países y conflictos de ley aplicable',
    solution: 'Coordinación internacional y protocolo sucesorio',
    result: 'Partición equitativa y regularización fiscal',
    outcome: '100% de bienes regularizados',
    icon: Scale,
    color: 'from-purple-600 to-pink-600',
    tags: ['Sucesión', 'Internacional', 'Bienes'],
    year: '2024',
    duration: '8 meses'
  },
  {
    id: '4',
    title: 'Defensa en Delito Económico Complejo',
    category: 'Derecho Penal',
    description: 'Absolución completa en caso de complejidad económica',
    challenge: 'Acusación por delitos tributarios y lavado de activos',
    solution: 'Estrategia defensiva integral con peritos financieros',
    result: 'Absolución completa y sobreseimiento',
    outcome: 'Caso archivado sin antecedentes',
    icon: FileText,
    color: 'from-red-600 to-orange-600',
    tags: ['Defensa', 'Absolución', 'Tributario'],
    year: '2023',
    duration: '12 meses'
  },
  {
    id: '5',
    title: 'Contrato Internacional de Tecnología',
    category: 'Derecho Comercial',
    description: 'Negociación y redacción de contrato de licencia de software',
    challenge: 'Protección de PI y jurisdicción internacional',
    solution: 'Estructura contractual con cláusulas de protección',
    result: 'Acuerdo favorable con protección completa',
    outcome: '$5M en contrato licenciado',
    icon: Trophy,
    color: 'from-cyan-600 to-blue-600',
    tags: ['Tecnología', 'PI', 'Internacional'],
    year: '2024',
    duration: '2 meses'
  },
  {
    id: '6',
    title: 'Custodia y Régimen de Visitas',
    category: 'Derecho de Familia',
    description: 'Acuerdo de custodia compartida con régimen de visitas flexible',
    challenge: 'Conflicto de alta conflictividad entre padres',
    solution: 'Mediación familiar y plan de parentalidad',
    result: 'Custodia compartida y acuerdo mutuo',
    outcome: '90% de cumplimiento del acuerdo',
    icon: Users,
    color: 'from-green-600 to-emerald-600',
    tags: ['Familia', 'Custodia', 'Mediación'],
    year: '2023',
    duration: '4 meses'
  }
]

const categories = [
  { name: 'Todos', count: caseStudies.length },
  { name: 'Derecho Comercial', count: caseStudies.filter(c => c.category === 'Derecho Comercial').length },
  { name: 'Derecho Laboral', count: caseStudies.filter(c => c.category === 'Derecho Laboral').length },
  { name: 'Derecho Civil', count: caseStudies.filter(c => c.category === 'Derecho Civil').length },
  { name: 'Derecho Penal', count: caseStudies.filter(c => c.category === 'Derecho Penal').length },
  { name: 'Derecho de Familia', count: caseStudies.filter(c => c.category === 'Derecho de Familia').length }
]

export function SuccessCases() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [expandedCase, setExpandedCase] = useState<string | null>(null)

  const filteredCases = caseStudies.filter(caseStudy => 
    selectedCategory === 'Todos' || caseStudy.category === selectedCategory
  )

  return (
    <section id="casos" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Casos de Éxito
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Historias de
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600"> Éxito</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Conoce algunos de nuestros casos más representativos y cómo hemos ayudado a nuestros clientes a obtener resultados favorables.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
            <div className="text-slate-600 font-medium">Casos Ganados</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
            <div className="text-slate-600 font-medium">Tasa de Éxito</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">$50M+</div>
            <div className="text-slate-600 font-medium">Recuperado para Clientes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
            <div className="text-slate-600 font-medium">Años de Experiencia</div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={cn(
                "flex items-center space-x-2 px-4 py-2 rounded-xl border-2 transition-all duration-300 font-medium",
                selectedCategory === category.name
                  ? "border-amber-500 bg-amber-50 text-amber-700 shadow-md"
                  : "border-slate-200 hover:border-slate-300 text-slate-600 bg-white"
              )}
            >
              <span>{category.name}</span>
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </button>
          ))}
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((caseStudy) => {
            const Icon = caseStudy.icon
            return (
              <Card key={caseStudy.id} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white hover:-translate-y-1">
                <div className={cn(
                  "relative h-48 bg-gradient-to-br overflow-hidden",
                  caseStudy.color
                )}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold border border-white/30">
                      {caseStudy.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-white/80 text-sm line-clamp-2">
                      {caseStudy.description}
                    </p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Quick Info */}
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="h-4 w-4" />
                        <span>{caseStudy.outcome}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="h-4 w-4" />
                        <span>{caseStudy.year}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Expandable Details */}
                    {expandedCase === caseStudy.id && (
                      <div className="space-y-4 pt-4 border-t border-slate-200 animate-in slide-in-from-top-2 duration-300">
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2">Desafío:</h4>
                          <p className="text-sm text-slate-600">{caseStudy.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2">Solución:</h4>
                          <p className="text-sm text-slate-600">{caseStudy.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2">Resultado:</h4>
                          <p className="text-sm text-slate-600">{caseStudy.result}</p>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-amber-600">
                          <Clock className="h-4 w-4" />
                          <span>Duración: {caseStudy.duration}</span>
                        </div>
                      </div>
                    )}

                    {/* Action Button */}
                    <Button
                      variant="ghost"
                      className="w-full text-amber-600 hover:text-amber-700 hover:bg-amber-50 group"
                      onClick={() => setExpandedCase(expandedCase === caseStudy.id ? null : caseStudy.id)}
                    >
                      {expandedCase === caseStudy.id ? 'Ver menos' : 'Ver detalles'}
                      <ArrowRight className={cn(
                        "ml-2 h-4 w-4 transition-transform",
                        expandedCase === caseStudy.id && "rotate-180"
                      )} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <div className="flex items-center justify-center mb-6">
            <Trophy className="h-12 w-12 mr-4" />
            <h3 className="text-3xl font-bold">¿Necesitas ayuda con tu caso?</h3>
          </div>
          <p className="text-lg mb-8 text-amber-100 max-w-2xl mx-auto">
            Cada caso es único. Permítenos evaluar tu situación y ofrecerte la mejor estrategia legal para proteger tus derechos.
          </p>
          <Button 
            size="lg"
            className="bg-white text-amber-600 hover:bg-slate-100 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
            onClick={() => {
              const element = document.querySelector('#contacto')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Consultar sobre mi caso
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}