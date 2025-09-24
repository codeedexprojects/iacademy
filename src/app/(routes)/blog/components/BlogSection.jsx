'use client'

import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const ArticleCard = ({ 
  title, 
  date, 
  image, 
  bgColor = "bg-gray-100",
  link
}) => (
  <div className="group cursor-pointer" data-aos="fade-up">
    {/* Image Container */}
    <div className={`h-64 ${bgColor} rounded-xl mb-4 overflow-hidden group-hover:scale-[1.02] transition-transform duration-300`}>
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    
    {/* Content */}
    <div>
      <h3 className="text-gray-800 font-bold text-xl mb-3 leading-tight group-hover:text-gray-600 transition-colors">
        {title}
      </h3>
      <div className="flex items-center justify-between">
        <span className="text-gray-500 text-sm font-medium">{date}</span>
        
        {/* Redirect with Link from data */}
        <Link href={link}>
          <button className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1 text-sm font-medium group">
            Read more
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default function BlogSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const articles = [
  {
    title: "Top 10 Digital Marketing Skills Every Student in Manipur Should Learn in 2025",
    date: "02-08-2025",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&auto=format",
    bgColor: "bg-blue-500",
    link: "/blog-1"
  },
  {
    title: "Why Digital Marketing is the Hottest Career Choice for Manipur’s Youth",
    date: "01-08-2025",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&auto=format",
    bgColor: "bg-gray-100",
    link: "/blog-2"
  },
  {
    title: "I Academy Manipur: Shaping Future Careers with Skill-Building Courses",
    date: "03-08-2025",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&auto=format",
    bgColor: "bg-gray-200",
    link: "/blog-3"
  },
  {
    title: "How Early IAS Coaching Builds Confidence and Knowledge in Students",
    date: "04-08-2025",
    image: "/blog/image3.jpg",
    bgColor: "bg-yellow-200",
    link: "/blog-4"
  },
  {
    title: "Smart Robotics and AI for Kids: Building Future Innovators",
    date: "05-08-2025",
    image: "/blog/image4.jpg",
    bgColor: "bg-green-200",
    link: "/blog-5"
  },
  {
    title: "Creative Student Designer: Unlocking Creativity in Young Minds",
    date: "06-08-2025",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&auto=format",
    bgColor: "bg-pink-200",
    link: "/blog-6"
  }
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12" data-aos="fade-down">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Articles</h1>
          <p className="text-gray-600 text-lg max-w-md">
            Stay Updated with the Latest in Education, Technology, and Innovation
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
}
