"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
const TestimonialsSection = () => {
  const avatars = [
    { id: 1, src: "/testimonials/image1.jpg", alt: "Student 1" },
    { id: 2, src: "/testimonials/image2.jpg", alt: "Student 2" },
    { id: 3, src: "/testimonials/image3.jpg", alt: "Student 3" },
    { id: 4, src: "/testimonials/image4.png", alt: "Student 4" },
    { id: 5, src: "/testimonials/image5.jpg", alt: "Student 5" },
    { id: 6, src: "/testimonials/image6.jpg", alt: "Student 6" },
    { id: 7, src: "/testimonials/image7.jpg", alt: "Student 7" },
   
  ]
  const testimonials = [
    {
      id: 1,
      text: "As a working professional, I needed flexible learning options. iAcademy Manipur's online courses provided exactly that, with detailed modules and consistent support.",
      author: "Rajesh Singh",
      avatar: "/testimonials/image1.jpg",
      rating: 5,
    },
    {
      id: 2,
      text: "The Digital Marketing course at iAcademy Manipur helped me gain practical skills and land my first job in just 3 months. Highly recommended",
      author: "Rajesh Singh",
      avatar: "/testimonials/image2.jpg",
      rating: 5,
      highlighted: true,
    },
    {
      id: 3,
      text: "iAcademy Manipur is more than just a training institute - it's a community of learners and experts. The Graphic Design Mastery course helped me build a professional portfolio.",
      author: "Rajesh Singh",
      avatar: "/testimonials/image3.jpg",
      rating: 5,
    },
    {
      id: 4,
      text: "My child always struggled with traditional studies, but the course at iAcademy Manipur made learning enjoyable and sparked a deep interest.",
      author: "Rajesh Singh",
      avatar: "/testimonials/image5.jpg",
      rating: 5,
    },
  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [testimonials.length])
  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + testimonials.length) % testimonials.length
      visible.push({ ...testimonials[index], position: i })
    }
    return visible
  }
  const StarRating = ({ rating }) => (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Avatar Row */}
        <div className="flex justify-center items-center mb-16">
          <div className="flex  overflow-x-auto scrollbar-hide px-2 max-w-full">
            {avatars.map((avatar) => (
              <div
                key={avatar.id}
                className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0"
              >
                <Image
                  src={avatar.src}
                  alt={avatar.alt}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
            {/* Cards */}
            <div className="flex gap-4 sm:gap-6 items-center justify-center w-full max-w-5xl">
              {getVisibleTestimonials().map((testimonial) => (
                <div
                  key={`${testimonial.id}-${testimonial.position}`}
                  className={`transition-all duration-500 rounded-xl bg-white px-4 sm:px-6 py-6 ${
                    testimonial.position === 0
                      ? "w-full sm:w-96 scale-100 opacity-100 shadow-2xl"
                      : "hidden sm:block sm:w-80 scale-95 opacity-70 shadow-md"
                  } ${
                    testimonial.position === -1
                      ? "order-1"
                      : testimonial.position === 1
                      ? "order-3"
                      : "order-2"
                  }`}
                >
                  <div>
                    <StarRating rating={testimonial.rating} />
                    <blockquote className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                      />
                      <span className="font-medium text-gray-800 text-sm sm:text-base">
                        {testimonial.author}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TestimonialsSection