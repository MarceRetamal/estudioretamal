'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, User, Phone, Mail, FileText, Check, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TimeSlot {
  id: string
  time: string
  available: boolean
}

interface FormData {
  name: string
  email: string
  phone: string
  caseType: string
  description: string
  date: string
  timeSlot: string
}

const timeSlots: TimeSlot[] = [
  { id: '1', time: '09:00', available: true },
  { id: '2', time: '09:30', available: true },
  { id: '3', time: '10:00', available: false },
  { id: '4', time: '10:30', available: true },
  { id: '5', time: '11:00', available: true },
  { id: '6', time: '11:30', available: false },
  { id: '7', time: '14:00', available: true },
  { id: '8', time: '14:30', available: true },
  { id: '9', time: '15:00', available: false },
  { id: '10', time: '15:30', available: true },
  { id: '11', time: '16:00', available: true },
  { id: '12', time: '16:30', available: true },
]

const caseTypes = [
  'Derecho Civil',
  'Derecho Comercial',
  'Derecho Laboral',
  'Derecho Penal',
  'Derecho de Familia',
  'Derecho Inmobiliario',
  'Otro'
]

export function AppointmentBooking() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    caseType: '',
    description: '',
    date: '',
    timeSlot: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email && formData.phone
      case 2:
        return formData.caseType && formData.description
      case 3:
        return formData.date && formData.timeSlot
      default:
        return true
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-8">
        <Card className="border-0 shadow-2xl bg-gradient-to-br from-emerald-50 to-teal-50">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Check className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">¡Consulta Agendada!</h2>
            <p className="text-lg text-slate-600 mb-8">
              Tu consulta inicial ha sido agendada exitosamente. Te enviaremos un email de confirmación con todos los detalles.
            </p>
            <div className="bg-white rounded-2xl p-6 shadow-lg max-w-md mx-auto">
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-emerald-600" />
                  <span className="font-medium text-slate-700">{formData.date}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-emerald-600" />
                  <span className="font-medium text-slate-700">{timeSlots.find(s => s.id === formData.timeSlot)?.time}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-emerald-600" />
                  <span className="font-medium text-slate-700">{formData.name}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Agenda tu Consulta Inicial</h2>
        <p className="text-xl text-slate-600">Es gratuita y sin compromiso. Nuestros abogados te esperan.</p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-12">
        <div className="flex items-center space-x-4">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300",
                  currentStep >= step
                    ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg"
                    : "bg-slate-200 text-slate-500"
                )}
              >
                {currentStep > step ? <Check className="h-5 w-5" /> : step}
              </div>
              {step < 4 && (
                <ChevronRight
                  className={cn(
                    "w-6 h-6 mx-2 transition-colors duration-300",
                    currentStep > step ? "text-indigo-600" : "text-slate-300"
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <Card className="border-0 shadow-2xl bg-white/98 backdrop-blur-xl">
        <CardContent className="p-8">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Información Personal</h3>
                <p className="text-slate-600">Cuéntanos quién eres para poder contactarte</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Nombre Completo</span>
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Juan Pérez"
                    className="h-12 rounded-xl border-slate-300 focus:border-indigo-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="juan@ejemplo.com"
                    className="h-12 rounded-xl border-slate-300 focus:border-indigo-500"
                  />
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>Teléfono</span>
                  </label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+54 9 11 5555-0100"
                    className="h-12 rounded-xl border-slate-300 focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Case Information */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Detalles del Caso</h3>
                <p className="text-slate-600">Describe tu situación legal</p>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700">Tipo de Caso</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {caseTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => handleInputChange('caseType', type)}
                        className={cn(
                          "p-3 rounded-xl border-2 transition-all duration-300 text-sm font-medium",
                          formData.caseType === type
                            ? "border-indigo-500 bg-indigo-50 text-indigo-700 shadow-md"
                            : "border-slate-200 hover:border-slate-300 text-slate-600"
                        )}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center space-x-2">
                    <FileText className="h-4 w-4" />
                    <span>Descripción del Caso</span>
                  </label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Describe brevemente tu situación legal..."
                    rows={6}
                    className="rounded-xl border-slate-300 focus:border-indigo-500 resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Date & Time Selection */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Selecciona Fecha y Hora</h3>
                <p className="text-slate-600">Elige el momento que mejor te convenga</p>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Fecha</span>
                  </label>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="h-12 rounded-xl border-slate-300 focus:border-indigo-500"
                  />
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700 flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>Horarios Disponibles</span>
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.id}
                        onClick={() => slot.available && handleInputChange('timeSlot', slot.id)}
                        disabled={!slot.available}
                        className={cn(
                          "p-3 rounded-xl border-2 transition-all duration-300 text-sm font-medium",
                          formData.timeSlot === slot.id
                            ? "border-indigo-500 bg-indigo-50 text-indigo-700 shadow-md"
                            : slot.available
                            ? "border-slate-200 hover:border-slate-300 text-slate-600"
                            : "border-slate-100 bg-slate-50 text-slate-400 cursor-not-allowed"
                        )}
                      >
                        {slot.time}
                        {!slot.available && (
                          <div className="text-xs mt-1">No disponible</div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Confirmar Consulta</h3>
                <p className="text-slate-600">Revisa los detalles antes de confirmar</p>
              </div>
              
              <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-3">Información Personal</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Nombre:</span>
                        <span className="font-medium text-slate-800">{formData.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Email:</span>
                        <span className="font-medium text-slate-800">{formData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Teléfono:</span>
                        <span className="font-medium text-slate-800">{formData.phone}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-3">Detalles de la Consulta</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Tipo de Caso:</span>
                        <span className="font-medium text-slate-800">{formData.caseType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Fecha:</span>
                        <span className="font-medium text-slate-800">{formData.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Hora:</span>
                        <span className="font-medium text-slate-800">
                          {timeSlots.find(s => s.id === formData.timeSlot)?.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-200">
                  <h4 className="font-semibold text-slate-700 mb-2">Descripción del Caso</h4>
                  <p className="text-sm text-slate-600 bg-white rounded-xl p-3">
                    {formData.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-6 py-3 rounded-xl font-semibold"
            >
              Anterior
            </Button>
            
            {currentStep < 4 ? (
              <Button
                onClick={nextStep}
                disabled={!isStepValid()}
                className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Siguiente
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {isSubmitting ? 'Agendando...' : 'Confirmar Consulta'}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}