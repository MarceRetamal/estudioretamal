'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, User, ArrowRight, Search, Filter, TrendingUp, BookOpen, Scale, Gavel } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  featured: boolean
  image: string
  tags: string[]
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Nuevas Reformas en el Derecho Laboral Argentino',
    excerpt: 'Análisis detallado de las últimas reformas legislativas que impactan en las relaciones laborales y cómo afectan a empleados y empleadores.',
    author: 'Dr. Carlos Mendoza',
    date: '15 de noviembre, 2024',
    readTime: '5 min',
    category: 'Derecho Laboral',
    featured: true,
    image: '/api/placeholder/400/250',
    tags: ['Reformas', 'Laboral', 'Legislación']
  },
  {
    id: '2',
    title: 'Guía Completa: Contratos Comerciales en 2024',
    excerpt: 'Todo lo que necesitas saber sobre la elaboración y negociación de contratos comerciales en el escenario económico actual.',
    author: 'Dra. Laura Sánchez',
    date: '12 de noviembre, 2024',
    readTime: '8 min',
    category: 'Derecho Comercial',
    featured: true,
    image: '/api/placeholder/400/250',
    tags: ['Contratos', 'Comercial', 'Negociación']
  },
  {
    id: '3',
    title: 'Protección de Datos Personales: Obligaciones Empresariales',
    excerpt: 'Las empresas deben cumplir con la Ley de Protección de Datos Personales. Conocé tus obligaciones y las sanciones por incumplimiento.',
    author: 'Dr. Martín Rodríguez',
    date: '10 de noviembre, 2024',
    readTime: '6 min',
    category: 'Derecho Tecnológico',
    featured: false,
    image: '/api/placeholder/400/250',
    tags: ['Datos', 'Privacidad', 'Tecnología']
  },
  {
    id: '4',
    title: 'Sucesiones: Cómo Evitar Conflictos Familiares',
    excerpt: 'Estrategias legales para planificar tu sucesión y prevenir disputas familiares. La importancia del testamento y la planificación anticipada.',
    author: 'Dra. Ana Martínez',
    date: '8 de noviembre, 2024',
    readTime: '7 min',
    category: 'Derecho de Familia',
    featured: false,
    image: '/api/placeholder/400/250',
    tags: ['Sucesiones', 'Familia', 'Planificación']
  },
  {
    id: '5',
    title: 'Delitos Económicos: Nuevas Tendencias',
    excerpt: 'Análisis de los delitos económicos más comunes en la era digital y cómo las empresas pueden protegerse.',
    author: 'Dr. Javier Torres',
    date: '5 de noviembre, 2024',
    readTime: '9 min',
    category: 'Derecho Penal',
    featured: false,
    image: '/api/placeholder/400/250',
    tags: ['Delitos', 'Económicos', 'Digital']
  },
  {
    id: '6',
    title: 'Propiedad Horizontal: Derechos y Deberes',
    excerpt: 'Conocé en detalle los derechos y obligaciones de los propietarios en regímenes de propiedad horizontal.',
    author: 'Dra. Sofía López',
    date: '3 de noviembre, 2024',
    readTime: '4 min',
    category: 'Derecho Inmobiliario',
    featured: false,
    image: '/api/placeholder/400/250',
    tags: ['Propiedad', 'Horizontal', 'Inmobiliario']
  }
]

const categories = [
  { name: 'Todos', icon: BookOpen, count: blogPosts.length },
  { name: 'Derecho Laboral', icon: Scale, count: blogPosts.filter(p => p.category === 'Derecho Laboral').length },
  { name: 'Derecho Comercial', icon: Gavel, count: blogPosts.filter(p => p.category === 'Derecho Comercial').length },
  { name: 'Derecho Penal', icon: Scale, count: blogPosts.filter(p => p.category === 'Derecho Penal').length },
  { name: 'Derecho de Familia', icon: BookOpen, count: blogPosts.filter(p => p.category === 'Derecho de Familia').length },
  { name: 'Derecho Inmobiliario', icon: Gavel, count: blogPosts.filter(p => p.category === 'Derecho Inmobiliario').length }
]

export function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('recent')

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === 'recent') return 0 // Already in order
    if (sortBy === 'featured') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
    return 0
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = sortedPosts.filter(post => !post.featured)

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Blog Legal
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Artículos y Análisis Legal
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Mantente informado con nuestras publicaciones sobre temas legales actualizados y relevantes para tu situación.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-3">
              <Filter className="h-5 w-5 text-slate-600" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
              >
                <option value="recent">Más Recientes</option>
                <option value="featured">Destacados</option>
              </select>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-xl border-2 transition-all duration-300 font-medium",
                    selectedCategory === category.name
                      ? "border-indigo-500 bg-indigo-50 text-indigo-700 shadow-md"
                      : "border-slate-200 hover:border-slate-300 text-slate-600 bg-white"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </button>
              )
            })}
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && selectedCategory === 'Todos' && (
          <div className="mb-16">
            <div className="flex items-center space-x-2 mb-8">
              <TrendingUp className="h-6 w-6 text-indigo-600" />
              <h3 className="text-2xl font-bold text-slate-800">Artículos Destacados</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white">
                  <div className="relative h-48 bg-gradient-to-br from-indigo-100 to-blue-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Destacado
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button
                        variant="ghost"
                        className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 p-2 rounded-lg transition-all duration-300 group-hover:scale-110"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8">
            {selectedCategory === 'Todos' ? 'Todos los Artículos' : `${selectedCategory}`}
          </h3>
          
          {sortedPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPosts.map((post) => (
                <Card key={post.id} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden bg-white hover:-translate-y-1">
                  <div className="relative h-40 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-indigo-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-5">
                    <h3 className="text-lg font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full"></div>
                        <span className="text-xs font-medium text-slate-700">{post.author}</span>
                      </div>
                      
                      <Button
                        variant="ghost"
                        className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 p-2 rounded-lg transition-all duration-300 group-hover:scale-110"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">No se encontraron artículos</h3>
              <p className="text-slate-500">Intenta con otros términos de búsqueda o categorías.</p>
            </div>
          )}
        </div>

        {/* Newsletter */}
        <div className="mt-20 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Suscríbete a nuestro Newsletter</h3>
          <p className="text-lg mb-8 text-indigo-100">
            Recibe las últimas novedades legales directamente en tu email
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email..."
              className="flex-1 px-4 py-3 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button className="bg-white text-indigo-600 hover:bg-slate-100 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105">
              Suscribirse
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}