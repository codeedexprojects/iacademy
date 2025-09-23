'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    contactType: 'sayHi'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-700">
            Connect with Us: Let's Discuss Your Digital<br />
            Marketing Needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Form Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Type Radio Buttons */}
              <div className="flex space-x-6 mb-8">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contactType"
                    value="sayHi"
                    checked={formData.contactType === 'sayHi'}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-green-500 bg-gray-100 border-gray-300 focus:ring-green-500"
                  />
                  <span className="text-gray-700 font-medium">Say Hi</span>
                </label>
                
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contactType"
                    value="getQuote"
                    checked={formData.contactType === 'getQuote'}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-green-500 bg-gray-100 border-gray-300 focus:ring-green-500"
                  />
                  <span className="text-gray-700 font-medium">Get a Quote</span>
                </label>
              </div>

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 outline-none"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Decorative Section */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Background radiating lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                {/* Radiating lines from center */}
                {Array.from({ length: 24 }).map((_, i) => {
                  const angle = (i * 15) * (Math.PI / 180);
                  const x1 = 160;
                  const y1 = 160;
                  const x2 = 160 + Math.cos(angle) * 120;
                  const y2 = 160 + Math.sin(angle) * 120;
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#e5e7eb"
                      strokeWidth="1"
                      opacity="0.6"
                    />
                  );
                })}
              </svg>

              {/* Black diamond shape */}
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div 
                  className="w-16 h-16 bg-gray-900 transform rotate-45"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                  }}
                />
              </div>

              {/* Green diamond shape */}
              <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
                <div 
                  className="w-12 h-12 bg-green-500 transform rotate-45"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                  }}
                />
              </div>

              {/* Additional decorative elements */}
              <div className="absolute top-1/3 right-1/4">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
              <div className="absolute bottom-1/3 left-1/4">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;