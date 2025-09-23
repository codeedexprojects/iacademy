import React from 'react'
import FAQsSection from '@/components/home/FAQsSection'
import ExamCrashCourseBanner from './components/ExamCrashCourseBanner'
import ExamCrashCourse from './components/ExamCrashCourse'

function page() {
  return (
    <div>
        <ExamCrashCourseBanner></ExamCrashCourseBanner>
        <ExamCrashCourse></ExamCrashCourse>
        <FAQsSection></FAQsSection>
    </div>
  )
}

export default page