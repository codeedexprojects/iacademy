"use client";
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function JobSearchMasteryCourseBanner() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <>
      <Head>
        <title>Job Search Mastery</title>
        <meta
          name="description"
          content="Creative Learning Program to Master the Art of Crafting Engaging Digital Content, Video Editing, and Visual Storytelling."
        />
      </Head>

      <div className="relative w-full">
        {/* Banner Image */}
        <div className="w-full aspect-[2/1] relative"> {/* Maintain aspect ratio */}
          <Image
            src="/jobSearchBanner.png"
            alt="Certified Digital Marketing Master Banner"
            fill
            className="object-cover"
            priority
          />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-end px-4 sm:px-6 md:px-12 text-white text-right">
            <h1 data-aos="fade-up"
              className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 leading-snug max-w-full sm:max-w-lg">
              Job Search Mastery
            </h1>
            <p  data-aos="fade-up"
              data-aos-delay="150" className="text-sm sm:text-base md:text-xl mb-4 sm:mb-6 max-w-full sm:max-w-md">
              Creative Learning Program to Master the Art of Crafting Engaging Digital Content, Video Editing, and Visual Storytelling.
            </p>
            <button  data-aos="fade-up"
              data-aos-delay="300" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-md text-sm sm:text-lg transition duration-300">
              Enroll now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
