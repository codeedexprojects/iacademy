'use client';

import React from 'react';
import Image from 'next/image';

const ArticlesPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-96 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/articlesHero.png" // Replace with your actual image path
            alt="Person working on laptop"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-start h-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Articles
            </h1>
            <p className="text-white text-lg leading-relaxed opacity-95">
              Welcome to our Blog - your trusted hub for expert insights, practical tips, 
              and inspiring stories to guide your learning and career growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;