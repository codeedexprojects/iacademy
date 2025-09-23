import React from 'react'
import FAQsSection from '@/components/home/FAQsSection'
import JobSearchMasteryCourseBanner from './components/JobSearchMasteryCourseBanner'
import JobSearchMasteryCourse from './components/JobSearchMasteryCourse'

function page() {
  return (
    <div>
        <JobSearchMasteryCourseBanner></JobSearchMasteryCourseBanner>
        <JobSearchMasteryCourse></JobSearchMasteryCourse>
        <FAQsSection></FAQsSection>
    </div>
  )
}

export default page