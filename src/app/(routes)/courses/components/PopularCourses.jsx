'use client';

import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const PopularCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Certified Digital Marketing Master",
      description: "Master the Art of Digital Marketing to Grow Brands & Drive Results",
      image: "/digitalmarketingCourse.png",
      background: "bg-gradient-to-r from-orange-500 to-red-500",
      slug: "digital-marketing",
    },
    {
      id: 2,
      title: "Graphic Design",
      description: "Unlock Your Creativity – Design Logos, Posters, Social Media Graphics & More",
      image: "/graphicDesignCourse.png",
      background: "bg-gradient-to-r from-purple-500 to-pink-500",
      slug: "graphic-design",
    },
    {
      id: 3,
      title: "Creative student designer",
      description: "Become a Creative Designer | Master Tools, Concepts, and Real Projects",
      image: "/studentDesignerCourse.png",
      background: "bg-gradient-to-r from-blue-600 to-purple-600",
      slug: "student-designer",
    },
    {
      id: 4,
      title: "IAS Junior course Class 5-10",
      description: "Prepare Early for IAS Success | Interactive Learning for Class 5 to 10 Students",
      image: "/iasJuniourCourse.png",
      background: "bg-gradient-to-r from-yellow-400 to-orange-500",
      slug: "ias-junior",
    },
    {
      id: 5,
      title: "Exam Crash Course for Class 10",
      description: "Master the Art of Digital Marketing to Grow Brands & Drive Results",
      image: "/examCrashCourse.png",
      background: "bg-gradient-to-r from-gray-700 to-gray-900",
      slug: "exam-crash-course",
    },
    {
      id: 6,
      title: "Job Search Mastery",
      description: "Unlock Your Creativity – Design Logos, Posters, Social Media Graphics & More",
      image: "/jobSearchCourse.png",
      background: "bg-gradient-to-r from-purple-600 to-blue-600",
      slug: "job-search-mastery",
    },
    {
      id: 7,
      title: "Digital Storyteller Course",
      description: "Become a Creative Designer | Master Tools, Concepts, and Real Projects",
      image: "/digitalStorytellerCourse.png",
      background: "bg-gradient-to-r from-red-500 to-pink-500",
      slug: "digital-storyteller",
    },
    {
      id: 8,
      title: "Smart Robotics and AI for Kids",
      description: "Prepare Early for IAS Success | Interactive Learning for Class 5 to 10 Students",
      image: "/smartRoboticsCourse.png",
      background: "bg-gradient-to-r from-pink-400 to-purple-500",
      slug: "smart-robotics",
    }
  ];

  return (
    <div className="w-full p-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Popular courses</h1>
        <p className="text-gray-600">Discover our most in-demand courses chosen by thousands of learners</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-200">
            {/* Image Section with Header */}
            <div className={`relative ${course.background} h-60 overflow-hidden`}>
              
              <Image 
                src={course.image} 
                alt={course.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1 leading-tight text-gray-900">{course.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{course.description}</p>
                </div>
                
                <div className="ml-4 flex flex-col items-end">
                  <Link href={`/${course.slug}`}>
                    <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors group-hover:bg-blue-600 flex items-center gap-2">
                      Learn more
                      <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;