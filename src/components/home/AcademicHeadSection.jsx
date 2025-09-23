import Image from 'next/image'

export default function AcademicHeadSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Academic Head Card */}
        <div className="bg-gradient-to-r from-indigo-800 via-purple-800 to-indigo-900 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Content Side */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Our Academic head
                </h2>
                
                {/* Name Badge */}
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/30">
                  JOY KHARMAWAD
                </div>
              </div>
              
              {/* Description */}
              <div className="space-y-4 text-gray-100 leading-relaxed">
                <p>
                  An esteemed educator and visionary leader, Joy Kharmawar brings years of experience 
                  in Marketing Director and Online Education to drive than knowledge—it's about 
                  fostering critical thinking, real-world application, and innovation. Our vision is to equip the 
                  next generation of leaders with the skills, mindset, and ethical foundation needed to excel in an 
                  ever-evolving global landscape, while remaining grounded in our values of integrity, 
                  innovation, and impactful global citizens.
                </p>
              </div>
              
              {/* Optional: Additional credentials or achievements */}
              <div className="pt-4">
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium border border-white/20">
                    Marketing Director
                  </span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium border border-white/20">
                    Online Education Expert
                  </span>
                </div>
              </div>
            </div>
            
            {/* Image Side */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Academic Head Image */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <Image 
                    src="/academic-head-joy.jpg" 
                    alt="Joy Kharmawad - Academic Head"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                    priority={false}
                  />
                  
                  {/* Image placeholder if image doesn't exist */}
                  {/* Uncomment this if you need a placeholder */}
                  {/* 
                  <div className="w-full h-full bg-white/20 rounded-2xl shadow-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                    <div className="text-center text-white/80">
                      <div className="w-24 h-24 bg-white/30 rounded-full mx-auto mb-4"></div>
                      <p className="text-sm">Joy Kharmawad</p>
                      <p className="text-xs opacity-75">Academic Head Photo</p>
                    </div>
                  </div>
                  */}
                  
                  {/* Decorative overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full opacity-70"></div>
                <div className="absolute top-1/2 -left-6 w-4 h-4 bg-cyan-400 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}