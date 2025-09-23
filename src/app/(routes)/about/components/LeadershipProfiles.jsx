'use client'

import Image from 'next/image'

export default function LeadershipProfiles() {
  const leaders = [
    {
      id: 1,
      name: "Mr. Ngammi Valui",
      title: "Director of iAcademy",
      quote: "At iAcademy Manipur, we believe education is more than knowledge—it's about critical thinking, creativity, tech literacy, and resilience. Our vision is to equip the next generation with skills, character, and confidence to become leaders, innovators, and responsible global citizens.",
      image: "/ngammi-valui.jpg",
      bgColor: "from-indigo-600 to-blue-700",
      layout: "left" // Image on left, text on right
    },
    {
      id: 2,
      name: "Joy Khamrang", 
      title: "Academic head",
      quote: "At iAcademy Manipur, we believe education is more than knowledge—it's about critical thinking, creativity, tech literacy, and resilience. Our vision is to equip the next generation with skills, character, and confidence to become leaders, innovators, and responsible global citizens.",
      image: "/joy-khamrang.jpg",
      bgColor: "from-red-500 to-orange-600",
      layout: "right" // Image on right, text on left
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12 space-y-16">
        
        {leaders.map((leader) => (
          <div key={leader.id} className={`grid lg:grid-cols-2 gap-12 items-center ${
            leader.layout === 'right' ? 'lg:grid-flow-col-dense' : ''
          }`}>
            
            {/* Leader Image */}
            <div className={`flex justify-center ${
              leader.layout === 'right' ? 'lg:col-start-2' : ''
            }`}>
              <div className="relative">
                {/* Circular background */}
                <div className={`w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br ${leader.bgColor} rounded-full flex items-center justify-center shadow-2xl`}>
                  
                  {/* Leader Image */}
                  <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src={leader.image}
                      alt={`${leader.name} - ${leader.title}`}
                      width={352}
                      height={352}
                      className="w-full h-full object-cover"
                      priority={false}
                    />
                    
                    {/* Image placeholder if image doesn't exist */}
                    {/* Uncomment this if you need a placeholder */}
                    {/* 
                    <div className="w-full h-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <div className="text-white text-center">
                        <div className="w-24 h-24 bg-white/30 rounded-full mx-auto mb-4"></div>
                        <p className="text-sm">{leader.name}</p>
                      </div>
                    </div>
                    */}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full opacity-70"></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-cyan-400 rounded-full opacity-60"></div>
              </div>
            </div>

            {/* Leader Content */}
            <div className={`space-y-6 ${
              leader.layout === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''
            }`}>
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {leader.name}
                </h3>
                <p className="text-xl text-gray-500 font-medium">
                  {leader.title}
                </p>
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                "{leader.quote}"
              </blockquote>

              {/* Optional: Additional info or signature */}
              <div className="pt-4">
                <div className="w-16 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}