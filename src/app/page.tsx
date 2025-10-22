'use client'

import { useEffect } from 'react'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { PracticeAreas } from '@/components/practice-areas'
import { Testimonials } from '@/components/testimonials'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'
// import { AccessibilityFeatures } from '@/components/accessibility'
// import { ChatWidget } from '@/components/chat-widget'
// import { AppointmentBooking } from '@/components/appointment-booking'
// import { BlogSection } from '@/components/blog-section'
// import { SuccessCases } from '@/components/success-cases'
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
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Accessibility Features */}
      {/* <AccessibilityFeatures /> */}

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Practice Areas Section */}
        <PracticeAreas />

        {/* Blog Section - Temporalmente desactivado */}
        {/* <BlogSection /> */}

        {/* Success Cases Section - Temporalmente desactivado */}
        {/* <SuccessCases /> */}

        {/* Appointment Booking Section - Temporalmente desactivado */}
        {/* 
        <section id="citas" className="py-20 bg-white">
          <AppointmentBooking />
        </section>
        */}

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Form Section */}
        <ContactForm />
      </main>

      {/* Chat Widget - Temporalmente desactivado */}
      {/* <ChatWidget /> */}

      {/* Footer */}
      <Footer />
    </div>
  )
}
