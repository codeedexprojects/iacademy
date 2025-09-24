"use client"
import React, { useState } from 'react';
import { Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Academy Info */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-18 h-18 object-contain"
              />
            </div>


            {/* Navigation Links */}
            <nav className="flex flex-wrap gap-6 text-sm">
              <a href="/about" className="text-gray-600 hover:text-gray-800 transition-colors">About us</a>
              <a href="/courses" className="text-gray-600 hover:text-gray-800 transition-colors">Courses</a>
              <a href="/blog" className="text-gray-600 hover:text-gray-800 transition-colors">Blog</a>
              <a href="/contact" className="text-gray-600 hover:text-gray-800 transition-colors">Contact Us</a>
            </nav>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Twitter className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Right Column - Contact & Newsletter */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Us */}
            <div className="space-y-4">
              <div className="inline-block bg-green-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                Contact us:
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <div>
                  <span className="font-medium">Email:</span> info@iacademy.in
                </div>
                <div>
                  <span className="font-medium">Phone:</span> +91 6909002067 | 0385 3534074
                </div>
                <div>
                  <span className="font-medium">Address:</span> Opposite to City Hospital Chingmeirong,<br />
                  Manipur
                </div>
              </div>

            </div>

            {/* Newsletter Signup */}
            <div className="bg-green-400 rounded-lg p-6 text-white">
              <div className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full text-white px-4 py-2 rounded-lg border border-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  onClick={handleSubscribe}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                >
                  Subscribe to news
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 space-y-4 md:space-y-0">
          <div>© 2025 iacademy. All Rights Reserved.</div>
          <a href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;