'use client'

import { useEffect } from 'react'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { PracticeAreas } from '@/components/practice-areas'
import { Team } from '@/components/team'
import { Testimonials } from '@/components/testimonials'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'
import { AccessibilityFeatures } from '@/components/accessibility'
import { useScrollAnimation, useAnimateOnScroll } from '@/components/motion-interactions'

export default function Home() {
  // Initialize scroll animations
  useScrollAnimation()
  useAnimateOnScroll()

  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const href = target.getAttribute('href')
      
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <div className="min-h-screen bg-law-bg">
      {/* Accessibility Features */}
      <AccessibilityFeatures />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Practice Areas Section */}
        <PracticeAreas />
        
        {/* Team Section */}
        <Team />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Contact Form Section */}
        <ContactForm />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}