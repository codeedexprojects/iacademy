import React from 'react'
import FAQsSection from '@/components/home/FAQsSection'
import DigitalStoryTellerCourse from './components/DigitalStoryTellerCourse'
import DigitalStoryTellerBanner from './components/DigitalMarketingBanner'

function page() {
  return (
    <div>
        <DigitalStoryTellerBanner></DigitalStoryTellerBanner>
        <DigitalStoryTellerCourse></DigitalStoryTellerCourse>
        <FAQsSection></FAQsSection>
    </div>
  )
}

export default page