import React from 'react'
import FAQsSection from '@/components/home/FAQsSection'
import SmartRoboticsCourseBanner from './components/SmartRoboticsCourseBanner'
import SmartRoboticsCourse from './components/SmartRoboticsCourse'

function page() {
  return (
    <div>
        <SmartRoboticsCourseBanner></SmartRoboticsCourseBanner>
        <SmartRoboticsCourse></SmartRoboticsCourse>
        <FAQsSection></FAQsSection>
    </div>
  )
}

export default page