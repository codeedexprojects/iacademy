import { Monitor, BookOpen, TrendingUp, Users } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: "Hands-on Training by Industry Experts",
      icon: <BookOpen className="w-10 h-10 lg:w-12 lg:h-12 text-white" strokeWidth={1.5} />,
      bgGradient: "from-orange-500 to-red-500"
    },
    {
      id: 2, 
      title: "Flexible Online & Offline Learning Options",
      icon: <Monitor className="w-10 h-10 lg:w-12 lg:h-12 text-white" strokeWidth={1.5} />,
      bgGradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Career-Oriented Programs", 
      icon: <TrendingUp className="w-10 h-10 lg:w-12 lg:h-12 text-white" strokeWidth={1.5} />,
      bgGradient: "from-pink-500 to-red-500"
    },
    {
      id: 4,
      title: "Personalized Guidance and Mentorship",
      icon: <Users className="w-10 h-10 lg:w-12 lg:h-12 text-white" strokeWidth={1.5} />,
      bgGradient: "from-blue-500 to-indigo-600"
    }
  ]

  return (
    <section className="py-0">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`relative bg-gradient-to-br ${feature.bgGradient} p-6 lg:p-6 xl:p-6 flex flex-row justify-between items-center text-left text-white group hover:scale-105 transition-transform duration-300 min-h-[180px]`}
            >
              {/* Text */}
              <h3 className="text-base lg:text-lg font-semibold leading-tight max-w-[70%]">
                {feature.title}
              </h3>

              {/* Icon */}
              <div className="ml-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Decorative elements */}
              <div className="absolute top-2 left-2 w-2 h-2 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-2 right-2 w-1 h-1 bg-white/30 rounded-full"></div>
              <div className="absolute top-1/2 left-2 w-1 h-1 bg-white/25 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
