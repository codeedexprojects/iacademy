import React from 'react'
import FAQsSection from '@/components/home/FAQsSection'
import IasJuniourBanner from './components/IasJuniourBanner'
import IasJuniourCourse from './components/IasJuniourCourse'

function page() {
  return (
    <div>
        <IasJuniourBanner></IasJuniourBanner>
        <IasJuniourCourse></IasJuniourCourse>
        <FAQsSection></FAQsSection>
    </div>
  )
}

export default page