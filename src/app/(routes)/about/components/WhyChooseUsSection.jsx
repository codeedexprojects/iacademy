'use client'

import { User, BookOpen, Monitor, GraduationCap, Shield } from 'lucide-react'

export default function WhyChooseUsSection() {
  const features = [
    {
      id: 1,
      icon: <User className="w-12 h-12 text-indigo-600" />,
      title: "Expert Faculty",
      description: "Learn from experienced trainers and industry professionals."
    },
    {
      id: 2,
      icon: <BookOpen className="w-12 h-12 text-indigo-600" />,
      title: "Diverse Courses",
      description: "From Digital Marketing to Robotics, from IAS Junior prep to Creative Design, we cover it all."
    },
    {
      id: 3,
      icon: <Monitor className="w-12 h-12 text-indigo-600" />,
      title: "Practical Learning",
      description: "Hands-on training, projects, and workshops that build real skills."
    },
    {
      id: 4,
      icon: <GraduationCap className="w-12 h-12 text-indigo-600" />,
      title: "Student-Centric Approach",
      description: "Flexible learning, mentorship, and career guidance at every step."
    },
    {
      id: 5,
      icon: <Shield className="w-12 h-12 text-indigo-600" />,
      title: "Trusted Leadership",
      description: "Guided by visionary founders dedicated to shaping Manipur's future through education."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why choose us
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}