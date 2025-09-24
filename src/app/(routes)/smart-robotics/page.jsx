"use client"
import React, { useEffect, useState } from 'react'
import FAQsSection from '@/components/home/FAQsSection'
import SmartRoboticsCourseBanner from './components/SmartRoboticsCourseBanner'
import SmartRoboticsCourse from './components/SmartRoboticsCourse'
import ContactFormSection from '@/components/home/ContactSection'
import Image from 'next/image'

function page() {
   const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false)
      }, 1500)
      return () => clearTimeout(timer)
    }, [])
  
    if (loading) {
      return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
          <Image
            src="/logo.png"
            alt="iAcademy Logo"
            width={120}
            height={40}
            priority
            className="animate-pulse"
          />
          <div className="flex space-x-2 mt-6">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce [animation-delay:200ms]"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce [animation-delay:400ms]"></span>
          </div>
        </div>
      )
    }
  return (
    <div>
        <SmartRoboticsCourseBanner></SmartRoboticsCourseBanner>
        <SmartRoboticsCourse></SmartRoboticsCourse>
        <FAQsSection></FAQsSection>
                    <ContactFormSection></ContactFormSection>
    </div>
  )
}

export default page