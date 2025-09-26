"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Sora } from "next/font/google";
import { useRouter } from 'next/navigation';


const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function HeroSection() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/contact');
  };
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${sora.className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/home/hero-bg.png"
          alt="Background"
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center text-center lg:text-left">
          
          {/* Left Content */}
          <div
            className="text-white space-y-6"
            data-aos="fade-up"
          >
            <div>
              <p className="text-lg sm:text-xl md:text-2xl font-medium mb-2 opacity-90">
                Welcome to
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                iAcademy Manipur
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold mt-4 text-green-400">
                Innovate. Learn. Conquer.
              </p>
            </div>

            <div
              className="space-y-4 text-gray-100 leading-relaxed max-w-xl mx-auto lg:mx-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p>
                At iAcademy Manipur, we empower learners through cutting-edge
                courses designed to bridge the gap between knowledge and
                practical skills. Led by the visionary Director, and our esteemed
                Director{" "} <br></br>
                <span className="text-orange-300 font-semibold">
                  Mr. Ngammi Valui
                </span>
                , we are dedicated to nurturing talent and promoting excellence
                in education to impart quality education.
              </p>
            </div>

            <div className="pt-4" data-aos="fade-up" data-aos-delay="400">
              <button onClick={handleClick} className="bg-white text-gray-800 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div
            className="flex justify-center lg:justify-end"
            data-aos="fade-down"
          >
            <Image
              src="/home/girl.png"
              alt="Hero Right"
              width={400}
              height={400}
              className="w-64 sm:w-80 md:w-96 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
