'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  Mail, 
  Phone, 
  Linkedin, 
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  ChevronRight,
  CheckCircle
} from 'lucide-react'
import { cn } from '@/lib/utils'

const teamMembers = [
  {
    id: 1,
    name: 'Dr. Alejandro Martínez',
    position: 'Socio Fundador',
    specialty: 'Derecho Civil y Comercial',
    experience: '25 años',
    education: [
      'Abogado, Universidad de Buenos Aires',
      'Maestría en Derecho Empresarial, UCA',
      'Doctorado en Derecho Civil, UB'
    ],
    achievements: [
      'Premio Excelencia Jurídica 2020',
      'Autor de 15 publicaciones académicas',
      'Miembro del Colegio de Abogados'
    ],
    languages: ['Español', 'Inglés', 'Portugués'],
    email: 'amartinez@estudiojuridico.com',
    phone: '+54 11 5555-0101',
    linkedin: '#',
    location: 'Buenos Aires',
    avatar: '/api/placeholder/200/200'
  },
  {
    id: 2,
    name: 'Dra. Sofía Rodríguez',
    position: 'Socia Senior',
    specialty: 'Derecho Laboral y de Familia',
    experience: '18 años',
    education: [
      'Abogada, Universidad de La Plata',
      'Especialización en Derecho Laboral, UBA',
      'Mediadora Judicial Certificada'
    ],
    achievements: [
      'Mediadora del Año 2022',
      'Más de 300 casos resueltos',
      'Conferencista internacional'
    ],
    languages: ['Español', 'Inglés'],
    email: 'srodriguez@estudiojuridico.com',
    phone: '+54 11 5555-0102',
    linkedin: '#',
    location: 'Buenos Aires',
    avatar: '/api/placeholder/200/200'
  },
  {
    id: 3,
    name: 'Dr. Carlos Fernández',
    position: 'Socio',
    specialty: 'Derecho Penal y Tributario',
    experience: '15 años',
    education: [
      'Abogado, Universidad de Córdoba',
      'Especialización en Derecho Penal',
      'Maestría en Derecho Tributario'
    ],
    achievements: [
      'Defensa en casos de alto impacto',
      'Asesor de empresas Fortune 500',
      'Profesor universitario'
    ],
    languages: ['Español', 'Inglés', 'Francés'],
    email: 'cfernandez@estudiojuridico.com',
    phone: '+54 11 5555-0103',
    linkedin: '#',
    location: 'Buenos Aires',
    avatar: '/api/placeholder/200/200'
  },
  {
    id: 4,
    name: 'Dra. Laura González',
    position: 'Asociada Senior',
    specialty: 'Derecho Corporativo',
    experience: '12 años',
    education: [
      'Abogada, Universidad de San Andrés',
      'LLM en Derecho Internacional, NYU',
      'Especialización en M&A'
    ],
    achievements: [
      'Liderazgo en fusiones $100M+',
      'Reconocimiento Legal 500',
      'Mentora de jóvenes abogados'
    ],
    languages: ['Español', 'Inglés', 'Italiano'],
    email: 'lgonzalez@estudiojuridico.com',
    phone: '+54 11 5555-0104',
    linkedin: '#',
    location: 'Buenos Aires',
    avatar: '/api/placeholder/200/200'
  }
]

export function Team() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null)

  const scrollToContact = () => {
    const element = document.querySelector('#contacto')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="equipo" className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="border-law-accent text-law-accent bg-law-accent/10">
            Nuestro Equipo
          </Badge>
          
          <h2 className="text-h2 font-serif text-law-primary">
            Profesionales de
            <span className="text-law-accent"> Excelencia</span>
          </h2>
          
          <p className="text-body-lg text-law-neutral max-w-3xl mx-auto">
            Nuestro equipo está conformado por abogados con vasta experiencia 
            y formación de élite, comprometidos con la defensa de sus intereses.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member) => (
            <Card 
              key={member.id}
              className={cn(
                'group cursor-pointer transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2 border-0 shadow-lg',
                selectedMember === member.id ? 'ring-2 ring-law-accent' : ''
              )}
              onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
            >
              <CardContent className="p-6">
                {/* Avatar */}
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="bg-law-accent/10 text-law-accent text-xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-law-accent rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <h3 className="text-lg font-serif text-law-primary font-semibold">
                      {member.name}
                    </h3>
                    <p className="text-sm text-law-accent font-medium">
                      {member.position}
                    </p>
                    <p className="text-sm text-law-neutral">
                      {member.specialty}
                    </p>
                  </div>

                  {/* Quick Info */}
                  <div className="w-full space-y-2 pt-4 border-t border-law-secondary/20">
                    <div className="flex items-center justify-center space-x-2 text-sm text-law-neutral">
                      <Calendar className="h-4 w-4" />
                      <span>{member.experience}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-law-neutral">
                      <MapPin className="h-4 w-4" />
                      <span>{member.location}</span>
                    </div>
                  </div>

                  {/* Expand indicator */}
                  <div className="flex items-center space-x-1 text-law-accent text-sm font-medium">
                    <span>Ver perfil</span>
                    <ChevronRight className={cn(
                      'h-4 w-4 transition-transform duration-200',
                      selectedMember === member.id ? 'rotate-90' : ''
                    )} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Expanded Member Details */}
        {selectedMember && (
          <div className="mb-16">
            {teamMembers
              .filter(member => member.id === selectedMember)
              .map(member => (
                <Card key={member.id} className="border-0 shadow-xl bg-gradient-to-br from-law-primary to-law-secondary text-white">
                  <CardContent className="p-8 lg:p-12">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Profile Info */}
                      <div className="lg:col-span-1 space-y-6">
                        <div className="flex items-center space-x-4">
                          <Avatar className="w-20 h-20">
                            <AvatarImage src={member.avatar} alt={member.name} />
                            <AvatarFallback className="bg-law-accent/20 text-law-accent text-2xl font-bold">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-2xl font-serif font-bold">
                              {member.name}
                            </h3>
                            <p className="text-law-accent font-medium">
                              {member.position}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <Mail className="h-5 w-5 text-law-accent" />
                            <a href={`mailto:${member.email}`} className="hover:text-law-accent transition-colors">
                              {member.email}
                            </a>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Phone className="h-5 w-5 text-law-accent" />
                            <a href={`tel:${member.phone}`} className="hover:text-law-accent transition-colors">
                              {member.phone}
                            </a>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Linkedin className="h-5 w-5 text-law-accent" />
                            <a href={member.linkedin} className="hover:text-law-accent transition-colors">
                              LinkedIn
                            </a>
                          </div>
                        </div>

                        <Button 
                          className="w-full bg-law-accent hover:bg-law-accent/90 text-law-primary font-semibold"
                          onClick={scrollToContact}
                        >
                          Agendar Consulta
                        </Button>
                      </div>

                      {/* Details */}
                      <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                        {/* Education */}
                        <div className="space-y-4">
                          <div className="flex items-center space-x-2">
                            <GraduationCap className="h-5 w-5 text-law-accent" />
                            <h4 className="text-lg font-semibold">Formación</h4>
                          </div>
                          <ul className="space-y-2">
                            {member.education.map((edu, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-law-accent rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-law-bg/80">{edu}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Achievements */}
                        <div className="space-y-4">
                          <div className="flex items-center space-x-2">
                            <Award className="h-5 w-5 text-law-accent" />
                            <h4 className="text-lg font-semibold">Logros</h4>
                          </div>
                          <ul className="space-y-2">
                            {member.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-law-accent rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-law-bg/80">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Languages */}
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold">Idiomas</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.languages.map((language, index) => (
                              <Badge key={index} variant="secondary" className="bg-law-accent/20 text-law-accent border-law-accent/30">
                                {language}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-law-bg rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-serif text-law-primary mb-4">
              ¿Listo para trabajar con nuestro equipo?
            </h3>
            <p className="text-law-neutral mb-6 max-w-2xl mx-auto">
              Cada miembro de nuestro equipo está comprometido con ofrecerle el mejor 
              servicio legal posible. Contáctenos y le asignaremos el especialista 
              adecuado para su caso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-law-accent hover:bg-law-accent/90 text-law-primary font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                onClick={scrollToContact}
              >
                Consulta con Especialista
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-law-primary text-law-primary hover:bg-law-primary hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                onClick={() => document.getElementById('testimonios')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Casos de Éxito
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}