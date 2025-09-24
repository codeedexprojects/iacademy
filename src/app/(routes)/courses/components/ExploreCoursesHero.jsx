'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function ExploreCoursesHero() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <section className="relative text-white py-20 lg:py-32 overflow-hidden">
      {/* Background Image with Blue Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/course/image1.jpg" 
          alt="Technology and learning background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/70"></div> {/* Blue overlay */}
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl space-y-8">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8" 
            data-aos="fade-down"
          >
            Explore<br />
            Our Courses
          </h1>
          <p 
            className="text-lg lg:text-xl leading-relaxed text-gray-100" 
            data-aos="fade-up"
            data-aos-delay="200"
          >
            At iAcademy Manipur, we offer a wide range of industry-aligned, hands-on courses 
            designed to empower students, professionals, and career changers with the practical 
            skills they need to succeed in the modern world.
          </p>
        </div>
      </div>
    </section>
  )
}
