import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden font-sora">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/heroSection.png" // Replace with your background image path
          alt="Background"
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAGQAAAQUAAAAAAAAAAAAAAAAAAAECBAYH/8QAJRAAAQMCBAcAAAAAAAAAAAAAAQACAwQFBhESFCEiMUFRYYHB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJOG8V3W5V8cNTU6mO5nZQN1vFjvNfbqZsVJNoY3gGtGyIiD/9k="
        />
      </div>

      {/* Background decorative elements */}
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div>
              <p className="text-2xl font-medium mb-2 opacity-90">Welcome to</p>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
                iAcademy Manipur
              </h1>
              <p className="text-xl md:text-2xl font-semibold mt-4 text-green-400">
                Innovate. Learn. Conquer.
              </p>
            </div>
            
            <div className="space-y-4 text-gray-100 leading-relaxed max-w-lg">
              <p>
                At iAcademy Manipur, we empower learners through cutting-edge courses designed to bridge the
                 gap between knowledge and practical skills. Led by the visionary Director , and our esteemed Director {' '}
                <span className="text-orange-300 font-semibold">Mr. Ngammi Valui</span>, we are dedicated to nurturing talent
                and promoting excellence in education.
              </p>
            </div>
            
            <div className="pt-4">
              <button className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                Contact Us
              </button>
            </div>
          </div>
          
        
        </div>
      </div>
    </section>
  )
}