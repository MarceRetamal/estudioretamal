'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MessageCircle, X, Send, Phone, User, Clock, Check, CheckCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  status?: 'sending' | 'sent' | 'delivered' | 'read'
}

const botResponses = [
  "Hola, bienvenido al Estudio Jurídico. ¿En qué puedo ayudarte?",
  "Soy un asistente virtual. Puedo agendarte una consulta o responder preguntas básicas.",
  "Para una consulta personalizada, puedo conectarte con uno de nuestros abogados.",
  "Nuestro horario de atención es de lunes a viernes de 9:00 a 18:00.",
  "¿Te gustaría agendar una consulta inicial? Es gratuita.",
  "Puedes llamarnos al (011) 5555-0100 o escribirnos por WhatsApp.",
  "¿Sobre qué área legal necesitas asesoramiento? Civil, Comercial, Laboral o Penal."
]

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [responseIndex, setResponseIndex] = useState(0)

  useEffect(() => {
    // Initial bot message after 2 seconds
    const timer = setTimeout(() => {
      if (messages.length === 0) {
        addBotMessage("Hola, bienvenido al Estudio Jurídico. ¿En qué puedo ayudarte hoy?")
      }
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0)
    }
  }, [isOpen])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const addBotMessage = (text: string) => {
    const botMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date(),
      status: 'delivered'
    }
    setMessages(prev => [...prev, botMessage])
  }

  const sendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
      status: 'sending'
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => 
        prev.map(msg => 
          msg.id === userMessage.id 
            ? { ...msg, status: 'sent' as const }
            : msg
        )
      )

      setTimeout(() => {
        setMessages(prev => 
          prev.map(msg => 
            msg.id === userMessage.id 
              ? { ...msg, status: 'delivered' as const }
              : msg
          )
        )

        setTimeout(() => {
          setIsTyping(false)
          const response = botResponses[responseIndex % botResponses.length]
          addBotMessage(response)
          setResponseIndex(prev => prev + 1)

          if (!isOpen) {
            setUnreadCount(prev => prev + 1)
          }
        }, 1000)
      }, 500)
    }, 300)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-AR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  }

  const quickActions = [
    { text: "Agendar consulta", action: () => addBotMessage("¿Te gustaría agendar una consulta inicial?") },
    { text: "Horarios", action: () => addBotMessage("Nuestro horario es de lunes a viernes de 9:00 a 18:00.") },
    { text: "Llamar ahora", action: () => window.open('tel:+5491155550100') },
    { text: "WhatsApp", action: () => window.open('https://wa.me/5491155550100?text=Hola,%20me%20gustaría%20agendar%20una%20consulta.', '_blank') }
  ]

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {unreadCount > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
              {unreadCount}
            </div>
          )}
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 hover:from-indigo-700 hover:via-blue-700 hover:to-cyan-700 text-white rounded-full w-16 h-16 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 group border-0"
          >
            <MessageCircle className="h-7 w-7 group-hover:animate-bounce" />
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[420px] max-w-[calc(100vw-2rem)]">
      <Card className="shadow-3xl border-0 bg-white/98 backdrop-blur-xl rounded-3xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <CardTitle className="text-xl font-bold">Asistente Legal IA</CardTitle>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">En línea - Responde inmediatamente</span>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-0 h-[500px] flex flex-col">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-slate-50 to-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.sender === 'user' ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[85%] rounded-3xl px-5 py-3 shadow-lg transition-all duration-300 hover:scale-[1.02]",
                    message.sender === 'user'
                      ? "bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white shadow-blue-200"
                      : "bg-white border border-slate-200 text-slate-800 shadow-slate-100"
                  )}
                >
                  <p className="text-sm">{message.text}</p>
                  <div className={cn(
                    "flex items-center justify-end space-x-1 mt-1",
                    message.sender === 'user' ? "text-white/70" : "text-gray-500"
                  )}>
                    <span className="text-xs">{formatTime(message.timestamp)}</span>
                    {message.sender === 'user' && message.status && (
                      <>
                        {message.status === 'sending' && <Clock className="h-3 w-3" />}
                        {message.status === 'sent' && <Check className="h-3 w-3" />}
                        {message.status === 'delivered' && <CheckCheck className="h-3 w-3" />}
                        {message.status === 'read' && <CheckCheck className="h-3 w-3 text-blue-400" />}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 bg-white border-t border-gray-100">
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={action.action}
                    className="text-xs h-7 bg-gray-50 hover:bg-law-accent/10 hover:text-law-accent border-gray-200"
                  >
                    {action.text}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                className="flex-1 border-gray-300 focus:border-law-accent"
              />
              <Button
                onClick={sendMessage}
                disabled={!inputMessage.trim()}
                className="bg-gradient-to-r from-law-primary to-law-secondary hover:from-law-primary/90 hover:to-law-secondary/90 text-white rounded-full px-3"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}