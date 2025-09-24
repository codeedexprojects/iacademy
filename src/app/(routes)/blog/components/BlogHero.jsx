'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function BlogHero() {
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
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl space-y-8">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
            data-aos="fade-down"
          >
            Articles
          </h1>
          <p
            className="text-lg lg:text-xl leading-relaxed text-gray-100"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Welcome to our Blog – your trusted hub for expert insights, practical tips, and inspiring stories to guide your learning and career growth.
          </p>
        </div>
      </div>
    </section>
  )
}
