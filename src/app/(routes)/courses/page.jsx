import React from 'react'
import ExploreCoursesHero from './components/ExploreCoursesHero'
import PopularCourses from './components/PopularCourses'
import ContactForm from './components/ContactForm'

function page() {
  return (
    <div>
      <ExploreCoursesHero></ExploreCoursesHero>
      <PopularCourses></PopularCourses>
      <ContactForm></ContactForm>
    </div>
  )
}

export default page