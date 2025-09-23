'use client'

import Image from 'next/image'

export default function ExploreCoursesHero() {
  return (
    <section className="relative text-white py-20 lg:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/courses-hero-bg.jpg" // Replace with your background image path
          alt="Technology and learning background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/70 to-indigo-950/80"></div>
      </div>

      {/* Background Tech Elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Computer/Laptop screens */}
        <div className="absolute top-16 right-32 w-48 h-32 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
          <div className="p-4 h-full flex flex-col">
            <div className="flex space-x-1 mb-3">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
            <div className="flex-1 bg-white/5 rounded"></div>
          </div>
        </div>

        {/* Mobile/Tablet screens */}
        <div className="absolute bottom-24 right-48 w-32 h-48 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
          <div className="p-3 h-full flex flex-col">
            <div className="w-full h-1 bg-white/10 rounded-full mb-2"></div>
            <div className="flex-1 bg-white/5 rounded-lg mb-2"></div>
            <div className="w-8 h-8 bg-white/10 rounded-full mx-auto"></div>
          </div>
        </div>

        {/* Code/Terminal window */}
        <div className="absolute top-1/2 right-16 w-56 h-40 bg-gray-900/30 rounded-lg backdrop-blur-sm border border-white/20">
          <div className="p-4 h-full">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-2 bg-green-400/40 rounded"></div>
              <div className="w-3/4 h-2 bg-blue-400/40 rounded"></div>
              <div className="w-1/2 h-2 bg-purple-400/40 rounded"></div>
              <div className="w-2/3 h-2 bg-cyan-400/40 rounded"></div>
            </div>
          </div>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute top-20 left-1/4 w-24 h-32 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"></div>
        <div className="absolute bottom-32 left-32 w-40 h-28 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-cyan-400/60 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-pink-400/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-yellow-400/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          {/* Main Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                Explore<br />
                Our Courses
              </h1>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg lg:text-xl leading-relaxed text-gray-100">
                At iAcademy Manipur, we offer a wide range of industry-aligned, hands-on courses 
                designed to empower students, professionals, and career changers with the practical 
                skills they need to succeed in the modern world.
              </p>
            </div>


          </div>
        </div>
      </div>

    </section>
  )
}