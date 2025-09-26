"use client";
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/navigation';



export default function GraphicDesignCourseBanner() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/contact');
  };
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
        <title>Graphic design</title>
        <meta
          name="description"
          content="Master the Art of Graphic Design to Create Stunning Visuals & Powerful Brand Identities.mastery"
        />
      </Head>

      <div className="relative w-full">
        {/* Banner Image */}
        <div className="w-full aspect-[2/1] relative"> {/* Maintain aspect ratio */}
          <Image
            src="/graphicDesignBanner.png"
            alt="Certified Digital Marketing Master Banner"
            fill
            className="object-cover"
            priority
          />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-end px-4 sm:px-6 md:px-12 text-white text-right">
            <h1 data-aos="fade-up" className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 leading-snug max-w-full sm:max-w-lg">
              Graphic design
            </h1>
            <p  data-aos="fade-up"
              data-aos-delay="150" className="text-sm sm:text-base md:text-xl mb-4 sm:mb-6 max-w-full sm:max-w-md">
              Master the Art of Graphic Design to Create Stunning Visuals & Powerful Brand Identities.mastery
            </p>
            <button
              onClick={handleClick}
             data-aos="fade-up"
              data-aos-delay="300" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-md text-sm sm:text-lg transition duration-300">
              Enroll now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
