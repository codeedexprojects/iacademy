'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const students = [
    { id: 1, name: "Rajesh Singh", image: "/testimonials/student1.jpg" },
    { id: 2, name: "Priya Sharma", image: "/testimonials/student2.jpg" },
    { id: 3, name: "Amit Kumar", image: "/testimonials/student3.jpg" },
    { id: 4, name: "Sarah Johnson", image: "/testimonials/student4.jpg" },
    { id: 5, name: "David Chen", image: "/testimonials/student5.jpg" },
    { id: 6, name: "Maya Patel", image: "/testimonials/student6.jpg" },
    { id: 7, name: "John Williams", image: "/testimonials/student7.jpg" },
    { id: 8, name: "Lisa Brown", image: "/testimonials/student8.jpg" },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Singh",
      text: "As a working professional, I needed flexible learning options. iAcademy Manipur's online courses provided exactly that, with detailed modules and constant support. Their Career Development Workshop was incredibly useful in polishing my job application skills and interview confidence.",
      rating: 5,
      image: "/testimonials/student1.jpg"
    },
    {
      id: 2,
      name: "Rajesh Singh",
      text: "The Digital Marketing course at iAcademy Manipur helped me gain practical skills and land my first job in just 3 months. Highly recommended!",
      rating: 5,
      image: "/testimonials/student2.jpg"
    },
    {
      id: 3,
      name: "Rajesh Singh", 
      text: "iAcademy Manipur is more than just a training institute – it's a community of learners and experts. The Graphic Design Mastery course helped me build a professional portfolio, and the personalized mentorship gave me the confidence to take freelance projects. Highly recommended for creative minds!",
      rating: 5,
      image: "/testimonials/student3.jpg"
    },
    {
      id: 4,
      name: "Rajesh Singh",
      text: "My child always showed exceptional curiosity about how things work. When we enrolled in the course at iAcademy Manipur, I've never spoken a word. But they became grateful for their futuristic methods.",
      rating: 5,
      image: "/testimonials/student4.jpg"
    }
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our happy students
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Hear from Our Satisfied students: Read Our Testimonials to Learn More about Our Digital Marketing Services
          </p>
        </div>

        {/* Student Avatars Row */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 overflow-x-auto pb-4">
            {students.map((student, index) => (
              <div
                key={student.id}
                className={`flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-4 transition-all duration-300 cursor-pointer ${
                  currentTestimonial === index % testimonials.length
                    ? 'border-indigo-500 scale-110'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setCurrentTestimonial(index % testimonials.length)}
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center text-white text-xs font-medium">
                  {student.name.split(' ').map(n => n[0]).join('')}
                </div>
                {/* Replace with actual images when available */}
                {/* 
                <Image
                  src={student.image}
                  alt={student.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
                */}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
                    {/* Stars Rating */}
                    <div className="flex items-center space-x-1 mb-6">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Student Info */}
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center text-white text-sm font-medium">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      {/* Replace with actual image when available */}
                      {/* 
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      */}
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">Verified Student</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg border border-gray-200 transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg border border-gray-200 transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentTestimonial === index
                  ? 'bg-indigo-600'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}