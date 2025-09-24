'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AboutUsFooter() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <section className="relative text-white py-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/AboutUsSlider.jpg')"
        }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-indigo-900/80"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-8 right-16 w-32 h-32 border-2 border-white/20 rounded-lg transform rotate-12"></div>
        <div className="absolute bottom-16 left-16 w-24 h-24 border border-white/15 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-white/10 rounded-lg transform -rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-white/10 rounded-full"></div>
        <div className="absolute top-1/4 left-1/3 w-12 h-12 bg-white/5 rounded-lg transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          {/* Header */}
          <div className="mb-8" data-aos="fade-down">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              About Us –<br />
              iAcademy Manipur
            </h2>
          </div>

          {/* Content */}
          <div className="text-lg lg:text-xl leading-relaxed text-gray-100 space-y-6" data-aos="fade-up" data-aos-delay="200">
            <p>
              At iAcademy Manipur, we believe education should do more than prepare students for 
              exams—it should empower them to innovate, explore, and achieve. Founded by{' '}
              <span className="font-semibold text-white">M.K. Preshow Shimmu</span> (Former Deputy Speaker) and{' '}
              <span className="font-semibold text-white">Mr. Ngammi Valui</span> (Director), iAcademy 
              Manipur was established with a mission to nurture talent, unlock potential, and build 
              leaders of tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
