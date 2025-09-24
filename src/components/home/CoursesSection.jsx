"use client";
import { useEffect } from "react";
import { ArrowRight, Monitor, PenTool, Users, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from 'next/navigation';


export default function CoursesSection() {
  const router = useRouter();
   useEffect(() => {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
      })
    }, [])
  const courses = [
   {
      id: 1,
      title: "Certified Digital Marketing Master",
      description:
        "Master the Art of Digital Marketing to Grow Brands & Drive Results",
      image: "/course/digital.png",
      icon: <Monitor className="w-6 h-6 text-indigo-600" />,
      status: "Offline",
      link: "/digital-marketing", 
    },
    {
      id: 2,
      title: "Graphic Design Master",
      description:
        "Unlock Your Creativity - Design Logos, Posters, Social Media Graphics & More",
      image: "/course/graphic.png",
      icon: <PenTool className="w-6 h-6 text-pink-600" />,
      status: "Offline",
      link: "/graphic-design",
    },
    {
      id: 3,
      title: "Creative Student Designer",
      description:
        "Become a Creative Designer | Master Tools, Concepts, and Real Projects",
      image: "/course/stud-des.png",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      status: "Offline",
      link: "/student-designer",
    },
    {
      id: 4,
      title: "IAS Junior Course Class 5-10",
      description:
        "Prepare Early for IAS Success | Interactive Learning for Class 5 to 10 Students",
      image: "/course/ias.png",
      icon: <GraduationCap className="w-6 h-6 text-yellow-600" />,
      status: "Online",
      link: "/ias-junior",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // ensures animation runs only once
      offset: 100,
    });
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 text-center lg:text-left" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            At our digital marketing agency, we offer a range of courses to help
            you grow your skills and succeed.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {courses.map((course, index) => (
                    <div
                      key={course.id}
                      className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-black flex flex-col"
                      data-aos="fade-up"
                      data-aos-delay={index * 100} // staggered animation
                    >
                      {/* Course Image/Header */}
                      <div className="relative h-44 sm:h-52 overflow-hidden">
                        <Image
                          src={course.image}
                          alt={course.title}
                          fill
                          className="object-cover"
                        />
        
                        {/* Top-right Icon */}
                        <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md">
                          {course.icon}
                        </div>
                      </div>
        
                      {/* Course Details */}
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-gray-900">
                            {course.title}
                          </h3>
                          <span
                            className={`text-sm font-medium ${
                              course.status === "Online"
                                ? "text-green-600"
                                : "text-gray-500"
                            }`}
                          >
                            ● {course.status}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4 flex-1 text-sm">
                          {course.description}
                        </p>
        
                        <div className="flex items-center justify-end mt-auto cursor-pointer">
                          {/* Learn More with Link */}
                          <Link href={course.link} passHref>
                            <button className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-800 font-semibold text-sm transition-colors duration-200 group">
                              <span>Learn more</span>
                              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

        {/* View All Button */}
        <div className="text-center" data-aos="zoom-in">
          <button onClick={() => router.push('/courses')}  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200 shadow-md hover:shadow-lg">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
