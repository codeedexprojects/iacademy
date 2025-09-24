"use client";
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function IasJuniourBanner() {
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
        <title>IAS Junior Course</title>
        <meta
          name="description"
          content="Foundational Learning Program for Class 5–10 Students to Build Strong Basics in General Knowledge, Reasoning, and Current Affairs."
        />
      </Head>

      <div className="relative w-full">
        {/* Banner Image */}
        <div className="w-full aspect-[2/1] relative"> {/* Maintain aspect ratio */}
          <Image
            src="/iasJunior.png"
            alt="Certified Digital Marketing Master Banner"
            fill
            className="object-cover"
            priority
          />

          {/* Heading - Top Center */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-center px-4 text-white">
            <h1 data-aos="fade-up"
              className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug max-w-full sm:max-w-2xl">
              IAS Junior Course
            </h1>
          </div>

          {/* Description + Button - Bottom Right */}
          <div className="absolute bottom-6 right-6 flex flex-col items-end text-white px-4 sm:px-6">
            <p  data-aos="fade-up"
              data-aos-delay="150" className="text-sm sm:text-base md:text-xl mb-4 sm:mb-6 max-w-full sm:max-w-md text-right">
              Foundational Learning Program for Class 5–10 Students to Build Strong Basics in General Knowledge, Reasoning, and Current Affairs.
            </p>
            <button   data-aos="fade-up"
              data-aos-delay="300" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-md text-sm sm:text-lg transition duration-300">
              Enroll now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
