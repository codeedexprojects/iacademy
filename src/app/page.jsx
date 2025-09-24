"use client"
import AcademicHeadSection from '@/components/home/AcademicHeadSection'
import ArticlesSection from '@/components/home/ArticlesSection'
import ContactSection from '@/components/home/ContactSection'
import CoursesSection from '@/components/home/CoursesSection'
import DirectorsVision from '@/components/home/DirectorsVision'
import FAQsSection from '@/components/home/FAQsSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import HeroSection from '@/components/home/HeroSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

function Page() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
        <Image
          src="/logo.png"
          alt="iAcademy Logo"
          width={120}
          height={40}
          priority
          className="animate-pulse"
        />
        <div className="flex space-x-2 mt-6">
          <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce [animation-delay:200ms]"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce [animation-delay:400ms]"></span>
        </div>
      </div>
    )
  }

  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <DirectorsVision />
      <CoursesSection />
      <AcademicHeadSection />
      <ArticlesSection />
      <FAQsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}

export default Page
