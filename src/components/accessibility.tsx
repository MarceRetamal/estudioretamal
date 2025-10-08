'use client'

import { useEffect } from 'react'

export function AccessibilityFeatures() {
  useEffect(() => {
    // Skip to main content functionality
    const handleSkipLink = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && e.target instanceof HTMLAnchorElement) {
        const href = e.target.getAttribute('href')
        if (href === '#main-content') {
          e.preventDefault()
          const mainContent = document.getElementById('main-content')
          if (mainContent) {
            mainContent.focus()
            mainContent.scrollIntoView()
          }
        }
      }
    }

    // Add keyboard navigation for all interactive elements
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation')
      }
    }

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation')
    }

    // Focus management for modals and overlays
    const handleFocusTrap = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // Close any open modals or overlays
        const modals = document.querySelectorAll('[role="dialog"]')
        modals.forEach(modal => {
          if (modal instanceof HTMLElement && modal.style.display !== 'none') {
            modal.style.display = 'none'
          }
        })
      }
    }

    // Announce page changes to screen readers
    const announcePageChange = () => {
      const announcement = document.createElement('div')
      announcement.setAttribute('aria-live', 'polite')
      announcement.setAttribute('aria-atomic', 'true')
      announcement.className = 'sr-only'
      announcement.textContent = 'Página cargada'
      document.body.appendChild(announcement)
      setTimeout(() => announcement.remove(), 1000)
    }

    // Add event listeners
    document.addEventListener('keydown', handleSkipLink)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('keydown', handleFocusTrap)
    
    // Announce page load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', announcePageChange)
    } else {
      announcePageChange()
    }

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleSkipLink)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('keydown', handleFocusTrap)
    }
  }, [])

  return null
}

// Component for external link indicators
export function ExternalLinkIndicator({ href }: { href: string }) {
  const isExternal = href.startsWith('http') && !href.includes(window.location.hostname)
  
  if (!isExternal) return null
  
  return (
    <span className="sr-only">
      (abre en nueva ventana)
    </span>
  )
}

// Component for phone link formatting
export function PhoneLink({ phone, children }: { phone: string; children: React.ReactNode }) {
  const formattedPhone = phone.replace(/[^\d+]/g, '')
  
  return (
    <a 
      href={`tel:${formattedPhone}`}
      className="hover:text-law-accent transition-colors duration-200"
      aria-label={`Llamar al teléfono ${phone}`}
    >
      {children}
    </a>
  )
}

// Component for email link
export function EmailLink({ email, children }: { email: string; children: React.ReactNode }) {
  return (
    <a 
      href={`mailto:${email}`}
      className="hover:text-law-accent transition-colors duration-200"
      aria-label={`Enviar correo electrónico a ${email}`}
    >
      {children}
    </a>
  )
}

// Component for WhatsApp link
export function WhatsAppLink({ phone, message, children }: { 
  phone: string; 
  message?: string; 
  children: React.ReactNode 
}) {
  const formattedPhone = phone.replace(/[^\d]/g, '')
  const encodedMessage = message ? encodeURIComponent(message) : ''
  
  return (
    <a
      href={`https://wa.me/${formattedPhone}${encodedMessage ? `?text=${encodedMessage}` : ''}`}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-law-accent transition-colors duration-200"
      aria-label="Chatear por WhatsApp"
    >
      {children}
    </a>
  )
}