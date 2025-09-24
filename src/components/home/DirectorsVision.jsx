"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DirectorsVision() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // run animation only once
    });
  }, []);

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Director&apos;s Vision
          </h2>
          <p className="text-lg text-gray-600 max-w-md">
            Our mission is to unlock the true potential of every learner in
            Manipur.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Director Image */}
          <div
            className="flex justify-center lg:justify-start"
            data-aos="fade-right"
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-[22rem] lg:h-[28rem] overflow-hidden shadow-lg rounded-lg">
              <Image
                src="/Ngammi.png"
                alt="Mr. Ngammi Valui - Director of iAcademy Manipur"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
              />
            </div>
          </div>

          {/* Director's Message */}
          <div className="space-y-6" data-aos="fade-left">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                I founded iAcademy with a singular purpose: to unlock the immense
                potential within the students of Manipur. We are an institute
                built on the bedrock of{" "}
                <span className="font-semibold text-indigo-600">
                  Innovate, Learn, and Conquer
                </span>
                . We foster an environment where innovation thrives, encouraging
                you to think beyond boundaries. We provide the comprehensive
                support you need to learn deeply and effectively. We empower you
                with the resilience and skills to Conquer your academic goals and
                future endeavors. iAcademy Manipur is your dedicated partner in
                achieving excellence. Join us, and together, let&apos;s shape a
                future of success and impact for our community and beyond.
              </p>

              <p className="italic">Warmly,</p>
            </div>

            {/* Director Info */}
            <div className="pt-4">
              <h4 className="text-xl font-bold text-gray-900 mb-1">
                Mr. Ngammi Valui
              </h4>
              <p className="text-indigo-600 font-semibold">
                Director of iAcademy Manipur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
