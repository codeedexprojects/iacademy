"use client";
import Image from 'next/image'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AcademicHeadSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Academic Head Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/home/bg.png')" }}
          ></div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-800/90 via-purple-800/90 to-indigo-900/90"></div>

          {/* Content */}
          <div className="relative p-6 sm:p-8 lg:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Content Side */}
              <div className="space-y-6" data-aos="fade-right">
                <div data-aos="fade-up">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                    Meet Our Academic Head
                  </h2>
                  
                  {/* Name Badge with Qualification */}
                  <div className="inline-block bg-white backdrop-blur-sm px-4 py-2 rounded-full text-black text-sm font-semibold mb-4 border border-white/30">
                    Phashokmi Vashi
                  </div>

                  {/* New heading before description */}
                  <h3 className="text-lg sm:text-xl font-semibold mb-2" data-aos="fade-up" data-aos-delay="100">
                    Academic Head of iAcademy
                  </h3>
                </div>
                
                {/* Description */}
                <div className="space-y-4 text-gray-100 leading-relaxed text-sm sm:text-base" data-aos="fade-up" data-aos-delay="150">
                  <p>
                   Phashokmi Vashi holds a Master's and an M.Phil. degree in Education, specializing in Teachers Autonomy and the Re-Imagination of Inclusive Consciousness, respectively.
Currently, at the University of Delhi, he is working on his doctoral thesis on Culture, Education, and their interfaces, with a special focus on the Manipur context. His other interests include Philosophy, Psychoanalysis, Translation Studies, Philology, and ICT. He has authored two books: "A Draft to Final Hinge" and "Nasha Iniwui Khararchan" (A Dove and Our Story). His current projects center on Translation.
                  </p>
                </div>
              </div>
              
              {/* Image Side (Responsive) */}
              <div className="flex justify-center lg:justify-end" data-aos="fade-left">
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-96 lg:h-96">
                  <Image 
                    src="/home/head1.png" 
                    alt="Joy Kharmawad - Academic Head"
                    width={384}
                    height={384}
                    className="w-100 h-100 object-cover"
                    priority={false}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
