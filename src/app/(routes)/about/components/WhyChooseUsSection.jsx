'use client'

import React, { useEffect } from 'react';
import { FaUserTie, FaBookOpen, FaChalkboardTeacher, FaGraduationCap, FaShieldAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const features = [
    {
      icon: <FaUserTie className="text-indigo-700 text-3xl mb-3" />,
      title: 'Expert Faculty',
      description: 'Learn from experienced trainers and industry professionals.',
    },
    {
      icon: <FaBookOpen className="text-indigo-700 text-3xl mb-3" />,
      title: 'Diverse Courses',
      description: 'From Digital Marketing to Robotics, from IAS Junior prep to Creative Design, we cover it all.',
    },
    {
      icon: <FaChalkboardTeacher className="text-indigo-700 text-3xl mb-3" />,
      title: 'Practical Learning',
      description: 'Hands-on training, projects, and workshops that build real skills.',
    },
    {
      icon: <FaGraduationCap className="text-indigo-700 text-3xl mb-3" />,
      title: 'Student-Centric Approach',
      description: 'Flexible learning, mentorship, and career guidance at every step.',
    },
    {
      icon: <FaShieldAlt className="text-indigo-700 text-3xl mb-3" />,
      title: 'Trusted Leadership',
      description: 'Guided by visionary founders dedicated to shaping Manipur’s future through education.',
    },
  ];

  return (
    <div className="bg-white px-6 md:px-16 py-12 border-x-8 border-pink-100">
      {/* Header */}
      <h2 className="text-3xl font-bold text-black mb-10" data-aos="fade-down">
        Why choose us
        <div className="w-28 h-1 bg-indigo-600 mt-1" />
      </h2>

      {/* Grid of Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-700 text-base">
        {features.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-start" 
            data-aos="fade-up" 
            data-aos-delay={index * 100}
          >
            {item.icon}
            <h3 className="font-semibold text-black mb-1">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
