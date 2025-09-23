import React from 'react'
import DigitalMarketingBanner from './components/DigitalMarketingBanner'
import FAQsSection from '@/components/home/FAQsSection'
import CourseDetails from './components/CourseDetails'

function page() {
  return (
    <div>
        <DigitalMarketingBanner></DigitalMarketingBanner>
        <CourseDetails></CourseDetails>
        <FAQsSection></FAQsSection>
    </div>
  )
}

export default page