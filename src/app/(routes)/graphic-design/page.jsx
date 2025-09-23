import React from 'react'
import FAQsSection from '@/components/home/FAQsSection'
import GraphicDesignCourseBanner from './components/GraphicDesignCourseBanner'
import GraphicDesignCourse from './components/GraphicDesignCourse'

function page() {
  return (
    <div>
        <GraphicDesignCourseBanner></GraphicDesignCourseBanner>
        <GraphicDesignCourse></GraphicDesignCourse>
        <FAQsSection></FAQsSection>
    </div>
  )
}

export default page