'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function ContactFormSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
   
    const whatsappNumber = '+916909002067'
    const whatsappMessage = `Hello! My name is ${name}. Email: ${email}. Message: ${message}`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    // Redirect to WhatsApp
    window.open(whatsappURL, '_blank')
  }

  return (
    <div className="bg-gray-50">
      {/* Section Header */}
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-12 text-center lg:text-left"
        data-aos="fade-down"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600 max-w-2xl leading-relaxed">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-gray-100 rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-xl">

            {/* Left Side - Form */}
            <div className="w-full lg:w-1/2 p-8 sm:p-12" data-aos="fade-right">
              <div className="flex items-center space-x-6 mb-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="contactOption"
                    defaultChecked
                    className="w-4 h-4 text-green-500"
                  />
                  <span className="text-gray-700 font-medium">Say Hi</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="contactOption"
                    className="w-4 h-4 text-green-500"
                  />
                  <span className="text-gray-700 font-medium">Get a Quote</span>
                </label>
              </div>

              {/* Form */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white rounded-md py-3 font-semibold hover:bg-gray-900 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Side - Image */}
            <div className="w-full lg:w-1/2 flex justify-end items-end relative p-8 sm:p-12" data-aos="fade-left">
              <Image
                src="/home/contact.png"
                alt="Contact Illustration"
                width={250}
                height={250}
                priority
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
