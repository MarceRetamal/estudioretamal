'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Scale, Phone, MessageCircle, ChevronDown } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const navItems = [
  { 
    name: 'Inicio', 
    href: '#inicio',
    dropdown: []
  },
  { 
    name: 'Servicios', 
    href: '#areas',
    dropdown: [
      { name: 'Derecho Civil', href: '#civil' },
      { name: 'Derecho Comercial', href: '#comercial' },
      { name: 'Derecho Laboral', href: '#laboral' },
      { name: 'Derecho Penal', href: '#penal' }
    ]
  },
  { 
    name: 'Blog', 
    href: '/blog',
    dropdown: []
  },
  { 
    name: 'Casos de Éxito', 
    href: '#casos',
    dropdown: []
  },
  { 
    name: 'Citas', 
    href: '#citas',
    dropdown: []
  },
  { 
    name: 'Contacto', 
    href: '#contacto',
    dropdown: []
  }
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20
      setIsScrolled(scrolled)
      
      // Calculate scroll progress
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollProgress(Math.min(Math.max(progress, 0), 100))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      // Navigate to page
      return
    }
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
          isScrolled
            ? 'bg-white/98 backdrop-blur-xl shadow-xl py-2 border-b border-gray-100/50'
            : 'bg-gradient-to-r from-slate-900 to-slate-800 py-4'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-2xl">
                  <Scale className="h-7 w-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 h-4 w-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-90 animate-pulse shadow-lg"></div>
              </div>
              <div>
                <Link href="/" className="block">
                  <h1 className={cn(
                    "text-2xl font-serif font-bold transition-all duration-300 hover:tracking-wide",
                    isScrolled ? "text-slate-800 hover:text-indigo-600" : "text-white hover:text-cyan-300"
                  )}>
                    ER Soluciones Legales
                  </h1>
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              <ul className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <li key={item.name} className="relative">
                    {item.dropdown.length > 0 ? (
                      <div className="relative">
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className={cn(
                            "flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105",
                            isScrolled 
                              ? "text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-600 hover:shadow-lg" 
                              : "text-slate-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm"
                          )}
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={cn(
                            "h-4 w-4 transition-transform duration-300",
                            activeDropdown === item.name && "rotate-180"
                          )} />
                        </button>
                        
                        {/* Dropdown Menu */}
                        {activeDropdown === item.name && (
                          <div className="absolute top-full left-0 mt-2 w-64 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-100/50 overflow-hidden animate-in slide-in-from-top-2 duration-300">
                            <div className="py-2">
                              {item.dropdown.map((dropdownItem) => (
                                <button
                                  key={dropdownItem.name}
                                  onClick={() => scrollToSection(dropdownItem.href)}
                                  className="block w-full text-left px-5 py-3.5 text-sm text-slate-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 hover:text-indigo-700 transition-all duration-300 group"
                                >
                                  <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                                    {dropdownItem.name}
                                  </span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className={cn(
                          "px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105",
                          isScrolled 
                            ? "text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-600 hover:shadow-lg" 
                            : "text-slate-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm"
                        )}
                      >
                        {item.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA and Actions */}
            <div className="flex items-center space-x-3">
              {/* Quick Actions */}
              <div className="hidden md:flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "text-slate-600 hover:text-white transition-all duration-300 transform hover:scale-105 rounded-xl px-4 py-2",
                    isScrolled 
                      ? "hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-600 hover:shadow-lg" 
                      : "text-slate-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm"
                  )}
                  onClick={() => window.open('tel:+5491125826179')}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="hidden lg:inline font-medium">+54-11-2582-6179</span>
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "text-slate-600 hover:text-white transition-all duration-300 transform hover:scale-105 rounded-xl px-3 py-2",
                    isScrolled 
                      ? "hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600 hover:shadow-lg" 
                      : "text-slate-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm"
                  )}
                  onClick={() => window.open('https://wa.me/5491125826179?text=Hola,%20me%20gustaría%20agendar%20una%20consulta.', '_blank')}
                >
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>

              {/* CTA Button */}
              <Button 
                className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 hover:from-indigo-700 hover:via-blue-700 hover:to-cyan-700 text-white font-bold px-7 py-2.5 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl transform hover:rotate-1 border-0"
                onClick={() => scrollToSection('#contacto')}
              >
                Consulta Inicial
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-600 hover:text-law-accent hover:bg-gray-100"
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Abrir menú</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white border-gray-200">
                  <div className="flex flex-col space-y-6 mt-8">
                    {/* Mobile Navigation */}
                    <nav className="flex flex-col space-y-2">
                      {navItems.map((item) => (
                        <div key={item.name}>
                          {item.dropdown.length > 0 ? (
                            <div className="space-y-2">
                              <button
                                onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                                className="flex items-center justify-between w-full text-left text-gray-700 hover:text-law-accent px-4 py-3 rounded-lg font-medium transition-colors duration-200"
                              >
                                <span>{item.name}</span>
                                <ChevronDown className={cn(
                                  "h-4 w-4 transition-transform duration-200",
                                  activeDropdown === item.name && "rotate-180"
                                )} />
                              </button>
                              
                              {activeDropdown === item.name && (
                                <div className="ml-4 space-y-1">
                                  {item.dropdown.map((dropdownItem) => (
                                    <button
                                      key={dropdownItem.name}
                                      onClick={() => scrollToSection(dropdownItem.href)}
                                      className="block w-full text-left text-sm text-gray-600 hover:text-law-accent px-4 py-2 rounded-lg transition-colors duration-200"
                                    >
                                      {dropdownItem.name}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <button
                              onClick={() => scrollToSection(item.href)}
                              className="block w-full text-left text-gray-700 hover:text-law-accent px-4 py-3 rounded-lg font-medium transition-colors duration-200"
                            >
                              {item.name}
                            </button>
                          )}
                        </div>
                      ))}
                    </nav>

                    {/* Mobile Quick Actions */}
                    <div className="pt-4 border-t border-gray-200 space-y-3">
                      <Button 
                        variant="outline"
                        className="w-full justify-start"
                        onClick={() => window.open('tel:+5491125826179')}
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Llamar ahora
                      </Button>
                      
                      <Button 
                        variant="outline"
                        className="w-full justify-start"
                        onClick={() => window.open('https://wa.me/5491125826179?text=Hola,%20me%20gustaría%20agendar%20una%20consulta.', '_blank')}
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        WhatsApp
                      </Button>
                      
                      <Button 
                        className="w-full bg-gradient-to-r from-law-primary to-law-secondary hover:from-law-primary/90 hover:to-law-secondary/90 text-white"
                        onClick={() => scrollToSection('#contacto')}
                      >
                        Consulta Inicial
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-200 to-slate-100">
          <div 
            className="h-full bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 transition-all duration-300 ease-out shadow-lg"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </header>

      {/* Close dropdown when clicking outside */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </>
  )
}