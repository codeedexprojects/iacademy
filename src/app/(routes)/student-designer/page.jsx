import React from 'react'
import FAQsSection from '@/components/home/FAQsSection'
import StudentDesignerBanner from './components/StudentDesignerBanner'
import StudentDesignerCourse from './components/StudentDesignerCourse'

function page() {
  return (
    <div>
        <StudentDesignerBanner></StudentDesignerBanner>
        <StudentDesignerCourse></StudentDesignerCourse>
        <FAQsSection></FAQsSection>
    </div>
  )
}

export default page