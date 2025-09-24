"use client";
import React, { useState, useEffect } from "react";
import { Phone, FileText, Mail } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "+916909002067";
    const whatsappMessage = `Hello! My details are:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-green-600 p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20">
        <div className="grid md:grid-cols-2 gap-0">
          
          {/* Left Side - Contact Form */}
          <div className="p-8 md:p-12 bg-white/90 backdrop-blur-sm" data-aos="fade-right">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Get in <span className="text-green-500">Touch</span>
              </h1>
              <p className="text-gray-600 mb-8">
                Have questions or ideas? We'd love to hear from you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="text-black w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="text-black w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="text-black w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="+91 9876543210"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                >
                  SEND
                </button>
              </form>

              {/* Contact Information */}
              <div className="mt-12 grid grid-cols-1 gap-6">
                <div className="flex items-center gap-3" data-aos="fade-up" data-aos-delay="100">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide">PHONE</p>
                    <p className="text-green-600 font-medium">+916909002067</p>
                  </div>
                </div>

                <div className="flex items-center gap-3" data-aos="fade-up" data-aos-delay="200">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide">PHONE</p>
                    <p className="text-green-600 font-medium">0385 3534074</p>
                  </div>
                </div>

                <div className="flex items-center gap-3" data-aos="fade-up" data-aos-delay="300">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide">EMAIL</p>
                    <p className="text-green-600 font-medium">hello@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Google Maps Iframe */}
          <div className="relative min-h-[600px] md:min-h-full" data-aos="fade-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.3098052682494!2d93.947002074537!3d24.810487947594872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3749263cc07f8b27%3A0x38de37bcba8c7b8a!2sImphal%2C%20Manipur!5e0!3m2!1sen!2sin!4v1698676489893!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-10 right-10 w-60 h-60 bg-white/5 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default ContactSection;
