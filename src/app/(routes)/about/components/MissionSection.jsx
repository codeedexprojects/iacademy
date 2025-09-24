'use client'

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MissionSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 border-x-8 border-pink-100 overflow-hidden">
      
      {/* Left Mission Points */}
      <div className="flex-1 space-y-4" data-aos="fade-right">
        <h2 className="text-3xl font-bold text-black mb-4">
          Our Mission
          <div className="w-20 h-1 bg-indigo-600 mt-1" />
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>
            To provide innovative, practical, and future-ready courses across diverse fields.
          </li>
          <li>
            To create a student-first learning environment where creativity and curiosity thrive.
          </li>
        </ul>
      </div>

      {/* Center Image */}
      <div className="my-8 md:my-0 md:mx-12 flex-shrink-0" data-aos="zoom-in" data-aos-delay="200">
        <img
          src="/about/mission.png"
          alt="Mission Target"
          className="w-48 h-auto"
        />
      </div>

      {/* Right Mission Points */}
      <div className="flex-1 space-y-10" data-aos="fade-left" data-aos-delay="400">
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>
            To bridge the gap between academic knowledge and real-world skills.
          </li>
          <li>
            To foster a learner-centered environment where curiosity, creativity, and critical thinking are nurtured.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MissionSection;
