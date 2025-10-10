'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
  preferredContact: 'email' | 'phone' | 'whatsapp'
  urgency: 'low' | 'medium' | 'high'
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

const contactInfo = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+54 11 2582-6179',
    description: 'Lunes a Viernes 9:00-18:00'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'consultas@estudioretramal.com.ar',
    description: 'Respuesta en 24 horas'
  },
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'Av. Corrientes 1234, CABA',
    description: 'Piso 5 Oficina 501'
  },
  {
    icon: Clock,
    label: 'Horario de Atención',
    value: 'Lunes a Viernes',
    description: '9:00 a 18:00 hs'
  }
]

const practiceAreas = [
  'Derecho Civil',
  'Derecho Comercial',
  'Derecho Laboral',
  'Derecho de Familia',
  'Derecho Penal',
  'Derecho Tributario',
  'Otro'
]

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    urgency: 'medium'
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [selectedArea, setSelectedArea] = useState('')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    } else if (formData.name.length < 3) {
      newErrors.name = 'El nombre debe tener al menos 3 caracteres'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido'
    } else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'El teléfono no es válido'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es requerido'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido'
    } else if (formData.message.length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Send data to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          selectedArea
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar la consulta')
      }
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        preferredContact: 'email',
        urgency: 'medium'
      })
      setSelectedArea('')
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const handleAreaSelect = (area: string) => {
    setSelectedArea(area)
    handleInputChange('subject', `Consulta sobre ${area}`)
  }

  const openWhatsApp = () => {
    const phoneNumber = '5491125826179'
    const message = encodeURIComponent('Hola, me gustaría agendar una consulta inicial.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getUrgencyLabel = (urgency: string) => {
    switch (urgency) {
      case 'high':
        return 'Urgente'
      case 'medium':
        return 'Normal'
      case 'low':
        return 'No urgente'
      default:
        return 'Normal'
    }
  }

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="border-law-accent text-law-accent bg-law-accent/10">
            Contacto
          </Badge>
          
          <h2 className="text-h2 font-serif text-law-primary">
            Hablemos de tu
            <span className="text-law-accent"> Caso</span>
          </h2>
          
          <p className="text-body-lg text-law-neutral max-w-3xl mx-auto">
            Tu consulta es importante. Contáctanos y te responderemos en menos de 
            24 horas con una evaluación inicial de tu caso.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-law-primary">
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-law-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-law-accent" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-semibold text-law-primary">{info.label}</p>
                      <p className="text-law-neutral">{info.value}</p>
                      <p className="text-sm text-law-neutral/70">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* WhatsApp CTA */}
            <Card className="border-0 shadow-lg bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-green-800">WhatsApp Directo</h4>
                    <p className="text-sm text-green-600">
                      Respuesta inmediata en horario laboral
                    </p>
                  </div>
                </div>
                <Button 
                  className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white"
                  onClick={openWhatsApp}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chatear por WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-law-primary">
                  Formulario de Consulta
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitStatus === 'success' ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-green-800">
                      ¡Consulta Enviada!
                    </h3>
                    <p className="text-green-600">
                      Nos pondremos en contacto contigo en menos de 24 horas.
                    </p>
                    <Button 
                      onClick={() => setSubmitStatus('idle')}
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-50"
                    >
                      Enviar otra consulta
                    </Button>
                  </div>
                ) : submitStatus === 'error' ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                      <AlertCircle className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-red-800">
                      Error al enviar
                    </h3>
                    <p className="text-red-600">
                      Hubo un problema al enviar tu consulta. Por favor intenta nuevamente o contáctanos directamente por WhatsApp.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        onClick={() => setSubmitStatus('idle')}
                        variant="outline"
                        className="border-red-600 text-red-600 hover:bg-red-50"
                      >
                        Intentar nuevamente
                      </Button>
                      <Button 
                        onClick={openWhatsApp}
                        className="bg-green-500 hover:bg-green-600 text-white"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Contactar por WhatsApp
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Practice Area Selection */}
                    <div>
                      <label className="block text-sm font-medium text-law-primary mb-3">
                        ¿Sobre qué área es tu consulta?
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {practiceAreas.map((area) => (
                          <button
                            key={area}
                            type="button"
                            onClick={() => handleAreaSelect(area)}
                            className={cn(
                              'px-3 py-2 text-sm rounded-lg border transition-all duration-200',
                              selectedArea === area
                                ? 'border-law-accent bg-law-accent/10 text-law-accent'
                                : 'border-law-secondary/30 text-law-neutral hover:border-law-accent/50'
                            )}
                          >
                            {area}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-law-primary mb-2">
                          Nombre completo *
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Tu nombre completo"
                          className={cn(
                            errors.name && 'border-red-500 focus:border-red-500'
                          )}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-law-primary mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="tu@email.com"
                          className={cn(
                            errors.email && 'border-red-500 focus:border-red-500'
                          )}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-law-primary mb-2">
                          Teléfono *
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+54 11 5555-0100"
                          className={cn(
                            errors.phone && 'border-red-500 focus:border-red-500'
                          )}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-law-primary mb-2">
                          Empresa (opcional)
                        </label>
                        <Input
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Nombre de tu empresa"
                        />
                      </div>
                    </div>

                    {/* Subject and Message */}
                    <div>
                      <label className="block text-sm font-medium text-law-primary mb-2">
                        Asunto *
                      </label>
                      <Input
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="Breve descripción de tu consulta"
                        className={cn(
                          errors.subject && 'border-red-500 focus:border-red-500'
                        )}
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-law-primary mb-2">
                        Mensaje *
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Describe detalladamente tu caso o situación legal..."
                        rows={5}
                        className={cn(
                          errors.message && 'border-red-500 focus:border-red-500'
                        )}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Contact Preferences */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-law-primary mb-2">
                          Preferencia de contacto
                        </label>
                        <div className="flex space-x-4">
                          {(['email', 'phone', 'whatsapp'] as const).map((method) => (
                            <button
                              key={method}
                              type="button"
                              onClick={() => handleInputChange('preferredContact', method)}
                              className={cn(
                                'px-4 py-2 rounded-lg border transition-all duration-200 capitalize',
                                formData.preferredContact === method
                                  ? 'border-law-accent bg-law-accent/10 text-law-accent'
                                  : 'border-law-secondary/30 text-law-neutral hover:border-law-accent/50'
                              )}
                            >
                              {method === 'whatsapp' ? 'WhatsApp' : method}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-law-primary mb-2">
                          Urgencia
                        </label>
                        <div className="flex space-x-2">
                          {(['low', 'medium', 'high'] as const).map((urgency) => (
                            <button
                              key={urgency}
                              type="button"
                              onClick={() => handleInputChange('urgency', urgency)}
                              className={cn(
                                'px-3 py-2 rounded-lg border transition-all duration-200',
                                formData.urgency === urgency
                                  ? getUrgencyColor(urgency)
                                  : 'border-law-secondary/30 text-law-neutral hover:border-law-accent/50'
                              )}
                            >
                              {getUrgencyLabel(urgency)}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-between pt-6 border-t border-law-secondary/20">
                      <p className="text-sm text-law-neutral">
                        Los campos marcados con * son obligatorios
                      </p>
                      
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-law-accent hover:bg-law-accent/90 text-law-primary font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Enviar Consulta
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Error Message */}
                    {submitStatus === 'error' && (
                      <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
                        <AlertCircle className="h-5 w-5" />
                        <p className="text-sm">
                          Hubo un error al enviar tu consulta. Por favor, inténtalo de nuevo.
                        </p>
                      </div>
                    )}
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}