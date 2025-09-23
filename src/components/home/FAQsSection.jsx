'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function FAQsSection() {
  const [openFaq, setOpenFaq] = useState(1) // First FAQ open by default

  const faqs = [
    {
      id: 1,
      question: "What types of courses do you offer?",
      answer: "We offer both Online and Offline Courses in areas like Digital Marketing, Graphic Design, Robotics & AI for Kids, Job Search Training, and more, designed to bridge leadership, professional, and career objectives.",
      isHighlight: true
    },
    {
      id: 2,
      question: "Who can enroll in the courses?",
      answer: "Our courses are designed for students, working professionals, entrepreneurs, and anyone looking to enhance their skills. We offer programs for different age groups including specialized courses for kids aged 5-10.",
      isHighlight: false
    },
    {
      id: 3,
      question: "How can I enroll in a course?",
      answer: "You can enroll by visiting our campus, calling our admissions team, or filling out the online enrollment form on our website. Our counselors will guide you through the process and help you choose the right course.",
      isHighlight: false
    },
    {
      id: 4,
      question: "Are the courses industry-aligned?",
      answer: "Yes, all our courses are designed with industry requirements in mind. We regularly update our curriculum based on current market trends and employer needs. Our instructors are industry experts with real-world experience.",
      isHighlight: false
    },
    {
      id: 5,
      question: "Can I get a certificate after completing a course?",
      answer: "Absolutely! Upon successful completion of any course, you will receive a certificate from iAcademy Manipur. Our certificates are recognized by industry partners and can enhance your professional profile.",
      isHighlight: false
    },
    {
      id: 6,
      question: "Do you offer career support after the course?",
      answer: "Yes, we provide comprehensive career support including job placement assistance, resume building, interview preparation, and networking opportunities with our industry partners and alumni network.",
      isHighlight: false
    }
  ]

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            FAQS
          </h2>
          <p className="text-gray-600 max-w-2xl leading-relaxed">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${
                faq.isHighlight 
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white' 
                  : openFaq === faq.id
                    ? 'bg-white border-2 border-cyan-400 shadow-lg'
                    : 'bg-white border border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-black/5 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <span className={`text-2xl font-bold ${
                    faq.isHighlight ? 'text-white' : 'text-gray-400'
                  }`}>
                    {String(faq.id).padStart(2, '0')}
                  </span>
                  <h3 className={`text-lg font-semibold ${
                    faq.isHighlight ? 'text-white' : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </h3>
                </div>
                
                <div className={`p-2 rounded-full transition-all duration-200 ${
                  faq.isHighlight 
                    ? 'bg-white/20' 
                    : openFaq === faq.id
                      ? 'bg-cyan-100 text-cyan-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}>
                  {openFaq === faq.id ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>

              {/* Answer Content */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className={`px-8 pb-6 ${
                  faq.isHighlight ? 'text-white/90' : 'text-gray-600'
                }`}>
                  <div className="pl-12">
                    <p className="leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}