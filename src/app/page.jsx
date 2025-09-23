import AcademicHeadSection from '@/components/home/AcademicHeadSection'
import ArticlesSection from '@/components/home/ArticlesSection'
import ContactSection from '@/components/home/ContactSection'
import CoursesSection from '@/components/home/CoursesSection'
import DirectorsVision from '@/components/home/DirectorsVision'
import FAQsSection from '@/components/home/FAQsSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import HeroSection from '@/components/home/HeroSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import React from 'react'

function page() {
  return (
    <div>
      <HeroSection></HeroSection>
      <FeaturesSection></FeaturesSection>
      <DirectorsVision></DirectorsVision>
      <CoursesSection></CoursesSection>
      <AcademicHeadSection></AcademicHeadSection>
      <ArticlesSection></ArticlesSection>
      <FAQsSection></FAQsSection>
      <TestimonialsSection></TestimonialsSection>
      <ContactSection></ContactSection>
    </div>
  )
}

export default page