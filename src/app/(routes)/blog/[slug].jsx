import React, { useState, useEffect } from 'react';
import { Mail, MessageCircle, Users, DollarSign, ShoppingCart, Play } from 'lucide-react';

const BlogInnerPage = () => {
    

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-lg font-semibold text-gray-800">Academy</span>
            </div>
            
            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About us</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">courses</a>
              <a href="#" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">Blog</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact us</a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className="w-full h-0.5 bg-gray-600"></span>
                <span className="w-full h-0.5 bg-gray-600"></span>
                <span className="w-full h-0.5 bg-gray-600"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner with Analytics Image */}
      <section className="relative">
        <div 
          className="relative h-80 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          {notifications.map((notification) => (
            <NotificationBadge key={notification.id} notification={notification} />
          ))}
        </div>
        
        {/* Blue accent bar */}
        <div className="h-1 bg-blue-600"></div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white">
          {/* Blog Title */}
          <header className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Top 10 Digital Marketing Skills Every Student in{' '}
              <span className="text-red-600">Manipur</span>{' '}
              Should Learn in 2025
            </h1>
          </header>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              In today's fast-changing digital world, businesses are shifting online at lightning speed, 
              creating massive opportunities for students and professionals in Manipur. Whether you 
              want to become a freelancer, a digital marketer, or launch your own startup, learning the 
              right digital marketing skills in 2025 is the key to success.
            </p>
            
            <p>
              At <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Academy Manipur</a>, we train students with industry-ready digital marketing skills to 
              make them job-ready and future-proof.
            </p>

            <div className="my-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Search Engine Optimization (SEO)</h2>
              <p>
                SEO is the backbone of digital marketing. It helps websites rank higher on Google, bringing 
                in free organic traffic. At I Academy, students learn keyword research, on-page 
                optimization, and link-building strategies to improve website visibility.
              </p>
            </div>

            <div className="my-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Social Media Marketing (SMM)</h2>
              <p>
                Platforms like Facebook, Instagram, and LinkedIn are powerful tools for brand awareness 
                and engagement. Students learn how to create content, run ads, and analyze performance 
                to reach the right audience effectively.
              </p>
            </div>

            <div className="my-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Content Marketing</h2>
              <p>
                Quality content drives engagement and builds trust with customers. Our courses teach 
                students how to create blogs, videos, infographics, and social media posts that convert 
                visitors into customers.
              </p>
            </div>

            <div className="my-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Pay-Per-Click Advertising (PPC)</h2>
              <p>
                PPC campaigns on Google Ads and Meta Ads help businesses drive instant traffic. Students 
                learn how to set up, manage, and optimize ad campaigns for better ROI.
              </p>
            </div>

            <div className="my-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Email Marketing</h2>
              <p>
                Email is still one of the most effective ways to connect with customers. At I Academy, 
                students learn how to create email campaigns, newsletters, and automation sequences for 
                lead nurturing.
              </p>
            </div>

            <div className="my-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. Analytics and Data Interpretation</h2>
              <p>
                Data-driven marketing is the future. Tools like Google Analytics help students understand 
                customer behavior, track campaign performance, and make informed decisions to improve 
                marketing strategies.
              </p>
            </div>

            <div className="my-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. Conversion Rate Optimization (CRO)</h2>
              <p>
                CRO focuses on improving website performance to convert more visitors into customers. 
                Students learn A/B testing, landing page optimization, and user experience design 
                principles.
              </p>
            </div>

            <div className="my-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">8. Affiliate Marketing</h2>
              <p>
                Affiliate marketing allows individuals to earn commissions by promoting other people's 
                products. This skill is perfect for students who want to start earning while learning.
              </p>
            </div>

            <div className="my-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">9. Influencer Marketing</h2>
              <p>
                Collaborating with influencers can boost brand reach and credibility. Students learn how 
                to identify, connect with, and manage influencer partnerships for maximum impact.
              </p>
            </div>

            <div className="my-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">10. Marketing Automation</h2>
              <p>
                Automation tools help streamline repetitive marketing tasks, saving time and improving 
                efficiency. Students learn to use platforms like HubSpot, Mailchimp, and Zapier for 
                automated marketing workflows.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <h3 className="text-lg font-bold text-blue-900 mb-3">Why Choose Academy Manipur?</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Industry-experienced trainers</li>
                <li>• Hands-on practical training</li>
                <li>• Job placement assistance</li>
                <li>• Flexible batch timings</li>
                <li>• Affordable course fees</li>
                <li>• Certificate upon completion</li>
              </ul>
            </div>

            <div className="my-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Conclusion</h2>
              <p>
                Digital marketing is not just a trend—it's the future of business. By mastering these 
                10 essential skills, students in Manipur can unlock countless career opportunities and 
                build a successful future in the digital economy.
              </p>
              <p className="mt-4">
                Ready to start your digital marketing journey? Join Academy Manipur today and transform 
                your career with industry-ready skills!
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg my-8">
              <h3 className="text-lg font-bold text-red-800 mb-3">🚀 Start Your Digital Marketing Journey Today!</h3>
              <p className="text-gray-700 mb-4">
                Don't wait for tomorrow—your digital marketing career starts now! Join Academy Manipur 
                and get trained by industry experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Enroll Now
                </button>
                <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Download Syllabus
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogInnerPage;