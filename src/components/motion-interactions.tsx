'use client'

import { useEffect, useState } from 'react'

// Hook para animaciones de scroll
export function useScrollAnimation() {
  const [elements, setElements] = useState<Element[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in')
    animatedElements.forEach((el) => observer.observe(el))
    setElements(Array.from(animatedElements))

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return elements
}

// Componente para animación de números
export function AnimatedNumber({ 
  value, 
  duration = 2000, 
  suffix = '', 
  prefix = '' 
}: { 
  value: number
  duration?: number
  suffix?: string
  prefix?: string 
}) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setDisplayValue(Math.floor(easeOutQuart * value))

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [value, duration])

  return (
    <span>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  )
}

// Componente para efecto de máquina de escribir
export function TypewriterText({ 
  text, 
  delay = 50, 
  className = '' 
}: { 
  text: string
  delay?: number
  className?: string 
}) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, delay])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

// Componente para partículas flotantes
export function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-law-accent/20 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  )
}

// Componente para efecto de brillo (shimmer)
export function ShimmerEffect({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode
  className?: string 
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
      {children}
    </div>
  )
}

// Componente para cursor personalizado (solo desktop)
export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.matches('button, a, [role="button"], input, textarea, select')) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = () => {
      setIsHovering(false)
    }

    if (window.innerWidth > 768) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseover', handleMouseOver)
      window.addEventListener('mouseout', handleMouseOut)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null
  }

  return (
    <>
      <div
        className="fixed w-6 h-6 border-2 border-law-accent rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
        style={{
          left: position.x - 12,
          top: position.y - 12,
          transform: isHovering ? 'scale(1.5)' : 'scale(1)'
        }}
      />
      <div
        className="fixed w-2 h-2 bg-law-accent rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: position.x - 4,
          top: position.y - 4
        }}
      />
    </>
  )
}

// Hook para detección de movimiento reducido
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return prefersReducedMotion
}

// Componente para indicador de progreso de lectura
export function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const scrolled = window.scrollY
      const progress = (scrolled / documentHeight) * 100
      setProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-law-secondary/20 z-50">
      <div 
        className="h-full bg-law-accent transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

// Componente para notificaciones flotantes
export function FloatingNotification({ 
  message, 
  type = 'info', 
  duration = 3000,
  onClose 
}: { 
  message: string
  type?: 'info' | 'success' | 'warning' | 'error'
  duration?: number
  onClose: () => void 
}) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [duration, onClose])

  const typeStyles = {
    info: 'bg-blue-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500'
  }

  return (
    <div className={`fixed top-4 right-4 ${typeStyles[type]} text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in-right`}>
      <p className="text-sm font-medium">{message}</p>
    </div>
  )
}

// Hook para animación de entrada de elementos
export function useAnimateOnScroll() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])
}

// Componente para efecto de revelación gradual
export function RevealText({ 
  text, 
  delay = 100, 
  className = '' 
}: { 
  text: string
  delay?: number
  className?: string 
}) {
  return (
    <span className={className}>
      {text.split(' ').map((word, index) => (
        <span
          key={index}
          className="inline-block opacity-0 animate-reveal"
          style={{ animationDelay: `${index * delay}ms` }}
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  )
}

// Estilos CSS para las animaciones
export const animationStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-20px) rotate(120deg); }
    66% { transform: translateY(10px) rotate(240deg); }
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(200%); }
  }

  @keyframes slide-in-right {
    0% { transform: translateX(100%); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }

  @keyframes reveal {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .animate-float {
    animation: float linear infinite;
  }

  .animate-shimmer {
    animation: shimmer 2s infinite;
  }

  .animate-slide-in-right {
    animation: slide-in-right 0.3s ease-out;
  }

  .animate-reveal {
    animation: reveal 0.6s ease-out forwards;
  }

  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .animate-on-scroll.animate-in {
    opacity: 1;
    transform: translateY(0);
  }

  .fade-in-up {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .fade-in-up.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .fade-in-left {
    opacity: 0;
    transform: translateX(-30px);
    transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .fade-in-left.visible {
    opacity: 1;
    transform: translateX(0);
  }

  .fade-in-right {
    opacity: 0;
    transform: translateX(30px);
    transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .fade-in-right.visible {
    opacity: 1;
    transform: translateX(0);
  }

  .scale-in {
    opacity: 0;
    transform: scale(0.9);
    transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .scale-in.visible {
    opacity: 1;
    transform: scale(1);
  }

  @media (prefers-reduced-motion: reduce) {
    .animate-float,
    .animate-shimmer,
    .animate-slide-in-right,
    .animate-reveal,
    .fade-in-up,
    .fade-in-left,
    .fade-in-right,
    .scale-in {
      animation: none !important;
      transition: none !important;
    }
  }
`