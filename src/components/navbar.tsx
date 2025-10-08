'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Scale } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Áreas de Práctica', href: '#areas' },
  { name: 'Equipo', href: '#equipo' },
  { name: 'Casos', href: '#casos' },
  { name: 'Recursos', href: '#recursos' },
  { name: 'Contacto', href: '#contacto' }
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
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
    handleScroll() // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out',
        isScrolled
          ? 'bg-law-primary/95 backdrop-blur-md shadow-navbar py-3'
          : 'bg-law-primary py-5'
      )}
    >
      <nav className="max-w-container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Scale className="h-8 w-8 text-law-accent" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-law-accent rounded-full opacity-80"></div>
            </div>
            <div>
              <h1 className="text-xl font-serif text-white font-bold">
                Estudio Jurídico
              </h1>
              <p className="text-xs text-law-accent font-medium tracking-wide">
                Excelencia Legal
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-white/90 hover:text-law-accent transition-colors duration-200 underline-center text-sm font-medium"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA and Theme Toggle */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="hidden lg:flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              <div className="relative w-5 h-5">
                <div className="absolute inset-0 bg-law-accent rounded-full opacity-80"></div>
                <div className="absolute inset-1 bg-law-primary rounded-full"></div>
              </div>
            </button>

            {/* CTA Button */}
            <Button 
              className="hidden lg:flex bg-law-accent hover:bg-law-accent/90 text-law-primary font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
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
                  className="text-white hover:bg-white/10"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-law-primary border-law-secondary">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className="text-white/90 hover:text-law-accent transition-colors duration-200 text-left text-lg font-medium py-2"
                      >
                        {item.name}
                      </button>
                    ))}
                  </nav>

                  {/* Mobile CTA */}
                  <div className="pt-4 border-t border-law-secondary">
                    <Button 
                      className="w-full bg-law-accent hover:bg-law-accent/90 text-law-primary font-semibold py-3 rounded-lg transition-all duration-200"
                      onClick={() => scrollToSection('#contacto')}
                    >
                      Consulta Inicial
                    </Button>
                  </div>

                  {/* Mobile Theme Toggle */}
                  <div className="flex items-center justify-between pt-4 border-t border-law-secondary">
                    <span className="text-white/70 text-sm">Tema</span>
                    <button
                      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                      className="flex items-center justify-center w-12 h-6 rounded-full bg-law-secondary relative transition-colors duration-200"
                    >
                      <div className={cn(
                        'absolute w-5 h-5 bg-law-accent rounded-full transition-transform duration-200',
                        theme === 'dark' ? 'translate-x-6' : 'translate-x-0.5'
                      )}></div>
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-law-secondary/20">
        <div 
          className="h-full bg-law-accent transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </header>
  )
}