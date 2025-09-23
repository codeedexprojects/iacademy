import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "Certified Digital Marketing Master",
      description: "Master the Art of Digital Marketing to Grow Brands & Drive Results",
      image: "/digitalmarketingCourse.png",
    },
    {
      id: 2,
      title: "Graphic Design Master",
      description: "Unlock Your Creativity - Design Logos, Posters, Social Media Graphics & More",
      image: "/graphicDesignCourse.png",
    },
    {
      id: 3,
      title: "Creative Student Designer",
      description: "Become a Creative Designer | Master Tools, Concepts, and Real Projects",
      image: "/studentDesignerCourse.png",
    },
    {
      id: 4,
      title: "IAS Junior Course Class 5-10",
      description: "Prepare Early for IAS Success | Interactive Learning for Class 5 to 10 Students",
      image: "/iasJunior.png",
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            At our digital marketing agency, we offer a range of courses to help you grow your skills and succeed.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 flex flex-col"
            >
              {/* Course Image/Header */}
              <div className="relative h-48 bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Course Details */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{course.description}</p>
                <button className="mt-auto flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-200 group">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
            View All
          </button>
        </div>
      </div>
    </section>
  )
}
