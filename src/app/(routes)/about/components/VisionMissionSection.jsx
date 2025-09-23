'use client'

import { Lightbulb, Target, Brain, Users, BookOpen, Compass } from 'lucide-react'

export default function VisionMissionSection() {
  const missionPoints = [
    {
      id: 1,
      title: "To provide innovative, practical, and future-ready courses across diverse fields.",
      icon: <BookOpen className="w-6 h-6 text-indigo-600" />
    },
    {
      id: 2, 
      title: "To create a student-first learning environment where creativity and curiosity thrive.",
      icon: <Users className="w-6 h-6 text-indigo-600" />
    },
    {
      id: 3,
      title: "To bridge the gap between academic knowledge and real-world skills.",
      icon: <Compass className="w-6 h-6 text-indigo-600" />
    },
    {
      id: 4,
      title: "To foster a learner-centered environment where curiosity, creativity, and critical thinking are nurtured.",
      icon: <Brain className="w-6 h-6 text-indigo-600" />
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Our Vision Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Vision Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Vision
            </h2>
            <div className="w-16 h-1 bg-indigo-600 mb-8"></div>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              To become Manipur's leading hub for skill-based learning, empowering students and 
              professionals with the knowledge, creativity, and resilience to succeed in a fast-changing 
              world.
            </p>
          </div>

          {/* Vision Graphic - Lightbulb with Brain */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 flex items-center justify-center">
                {/* Lightbulb SVG representation */}
                <div className="relative">
                  {/* Lightbulb base */}
                  <div className="w-32 h-40 bg-gradient-to-b from-gray-100 to-gray-200 rounded-full border-4 border-gray-300 flex items-center justify-center relative">
                    {/* Brain inside lightbulb */}
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                    {/* Light rays */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-1 h-6 bg-yellow-400 rounded-full"></div>
                    </div>
                    <div className="absolute -top-6 -left-6 transform rotate-45">
                      <div className="w-1 h-4 bg-yellow-400 rounded-full"></div>
                    </div>
                    <div className="absolute -top-6 -right-6 transform -rotate-45">
                      <div className="w-1 h-4 bg-yellow-400 rounded-full"></div>
                    </div>
                  </div>
                  {/* Lightbulb screw base */}
                  <div className="w-16 h-8 bg-gray-400 mx-auto mt-1 rounded-b-lg border-t-2 border-gray-500">
                    <div className="w-full h-1 bg-gray-500 mt-1"></div>
                    <div className="w-full h-1 bg-gray-500 mt-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Mission Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <div className="w-16 h-1 bg-indigo-600 mb-8"></div>
            
            {/* Mission Points */}
            <div className="space-y-6">
              {missionPoints.map((point) => (
                <div key={point.id} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mt-1">
                    {point.icon}
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      {point.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Graphic - Target with Arrows */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-64 h-64 flex items-center justify-center">
                {/* Target circles */}
                <div className="relative">
                  {/* Outer circles */}
                  <div className="absolute inset-0 w-48 h-48 border-4 border-red-400 rounded-full"></div>
                  <div className="absolute inset-4 w-40 h-40 border-4 border-red-500 rounded-full"></div>
                  <div className="absolute inset-8 w-32 h-32 border-4 border-red-600 rounded-full"></div>
                  <div className="absolute inset-12 w-24 h-24 bg-red-600 rounded-full"></div>
                  
                  {/* Center bullseye */}
                  <div className="absolute inset-20 w-8 h-8 bg-white rounded-full border-2 border-red-800"></div>
                  
                  {/* Arrows pointing to target */}
                  {/* Top arrow */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-blue-500"></div>
                    <div className="w-1 h-8 bg-blue-500 mx-auto"></div>
                  </div>
                  
                  {/* Right arrow */}
                  <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                    <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-orange-500"></div>
                    <div className="w-8 h-1 bg-orange-500 -ml-8 mt-2"></div>
                  </div>
                  
                  {/* Left arrow */}
                  <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
                    <div className="w-0 h-0 border-t-4 border-b-4 border-r-8 border-t-transparent border-b-transparent border-r-green-500"></div>
                    <div className="w-8 h-1 bg-green-500 ml-0 mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}