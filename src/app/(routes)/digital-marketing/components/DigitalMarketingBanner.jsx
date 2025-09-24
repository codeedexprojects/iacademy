'use client';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function DigitalMarketingBanner() {
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
        <title>Certified Digital Marketing Master | Leaderry & IBM</title>
        <meta
          name="description"
          content="Master the Art of Digital Marketing to Grow Brands & Drive Results"
        />
      </Head>

      <div className="relative w-full">
        {/* Banner Image */}
        <div className="w-full aspect-[2/1] relative">
          <Image
            src="/digitalMarketingBanner.png"
            alt="Certified Digital Marketing Master Banner"
            fill
            className="object-cover"
            priority
          />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 md:px-12 text-white">
            <h1
              className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 leading-snug max-w-full sm:max-w-lg"
              data-aos="fade-up"
            >
              Certified Digital Marketing Master
            </h1>
            <p
              className="text-sm sm:text-base md:text-xl mb-4 sm:mb-6 max-w-full sm:max-w-md"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Master the Art of Digital Marketing to Grow Brands & Drive Results
            </p>
            <button
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-md text-sm sm:text-lg transition duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Enroll now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
