'use client'

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const VisionSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 border-x-8 border-pink-100">
      
      {/* Text Section */}
      <div className="max-w-xl" data-aos="fade-right">
        <h2 className="text-3xl font-bold text-black mb-4">
          Our Vision
          <div className="w-20 h-1 bg-indigo-600 mt-1" />
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          To become Manipur’s leading hub for skill-based learning, empowering students and professionals with the knowledge, creativity, and resilience to succeed in a fast-changing world.
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-8 md:mt-0 md:ml-12" data-aos="zoom-in" data-aos-delay="200">
        <img
          src="/about/bulb.png"
          alt="Vision Lightbulb"
          className="w-48 h-auto"
        />
      </div>
    </div>
  );
};

export default VisionSection;
