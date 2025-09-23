import React from 'react'
import AboutUsFooter from './components/AboutUsFooter'
import VisionMissionSection from './components/VisionMissionSection'
import WhyChooseUsSection from './components/WhyChooseUsSection'
import LeadershipProfiles from './components/LeadershipProfiles'

function page() {
  return (
    <div>
      <AboutUsFooter></AboutUsFooter>
      <VisionMissionSection></VisionMissionSection>
      <WhyChooseUsSection></WhyChooseUsSection>
      <LeadershipProfiles></LeadershipProfiles>
    </div>
  )
}

export default page
