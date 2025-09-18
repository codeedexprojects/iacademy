import Beams from '@/components/Beams'
import React from 'react'
import Image from 'next/image' // Import the Image component

function Index() {
  return (
    <div className="min-h-screen bg-black text-white">
     
      <header className="relative z-10 flex items-center justify-between p-6 md:p-8">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={120} // Set appropriate width
            height={40} // Set appropriate height
            className="h-10 w-30 md:h-12 md:w-32 rounded-lg shadow-lg"
          
          />
          
        </div>
        
        {/* <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
        </nav> */}
      </header>

      {/* Beams Background Section */}
      <div className="relative" style={{ width: '100%', height: '600px' }}>
        <div className="absolute inset-0">
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={0}
          />
        </div>
        
        {/* Coming Soon Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-6 md:px-12 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Coming Soon
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Something amazing is on the way. We&apos;re working hard to bring you an incredible experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex -space-x-1">
                <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-gray-900"></div>
                <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-gray-900"></div>
                <div className="w-8 h-8 bg-indigo-500 rounded-full border-2 border-gray-900"></div>
              </div>
              <span className="text-gray-400">1,000+ people waiting</span>
            </div>
            
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-80"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto">
                Notify Me
              </button>
            </div> */}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-gray-400">
        <p>&copy; 2025 iAcademy. All rights reserved.</p>
        
      </footer>
    </div>
  )
}

export default Index