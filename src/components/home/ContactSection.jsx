'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    contactType: 'Say Hi',
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields')
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Handle form submission here
    console.log('Form submitted:', formData)
    
    // Reset form
    setFormData({
      contactType: 'Say Hi',
      name: '',
      email: '',
      message: ''
    })
    
    setIsSubmitting(false)
    alert('Message sent successfully!')
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl leading-relaxed">
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
            <div className="space-y-6">
              {/* Contact Type Radio Buttons */}
              <div className="space-y-3">
                <div className="flex items-center space-x-6">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="contactType"
                      value="Say Hi"
                      checked={formData.contactType === 'Say Hi'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-green-500"
                    />
                    <span className="text-gray-700 font-medium">Say Hi</span>
                  </label>
                  
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="contactType"
                      value="Get a Quote"
                      checked={formData.contactType === 'Get a Quote'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-green-500"
                    />
                    <span className="text-gray-700 font-medium">Get a Quote</span>
                  </label>
                </div>
              </div>

              {/* Name Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200 bg-white"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200 bg-white"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200 bg-white resize-vertical"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>

          {/* Decorative Side */}
          <div className="relative flex items-center justify-center min-h-96">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gray-50 rounded-2xl"></div>
            
            {/* Star Decorations */}
            <div className="relative z-10">
              {/* Main decorative elements */}
              <div className="relative w-80 h-80 flex items-center justify-center">
                {/* Radiating lines */}
                <div className="absolute inset-0">
                  {[...Array(24)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute bg-gray-300 origin-center"
                      style={{
                        width: '1px',
                        height: '40px',
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) rotate(${i * 15}deg) translateY(-60px)`,
                      }}
                    />
                  ))}
                </div>

                {/* Black Star */}
                <div className="absolute w-16 h-16 top-16 right-20">
                  <div className="w-full h-full bg-gray-900 transform rotate-45 rounded-sm"></div>
                </div>

                {/* Green Star */}
                <div className="absolute w-12 h-12 bottom-24 left-16">
                  <div className="w-full h-full bg-green-400 transform rotate-45 rounded-sm"></div>
                </div>

                {/* Additional small decorative elements */}
                <div className="absolute w-2 h-2 bg-gray-400 rounded-full top-20 left-32"></div>
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full bottom-20 right-20"></div>
                <div className="absolute w-1 h-1 bg-gray-500 rounded-full top-32 right-32"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}