'use client'

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const team = [
    {
      name: "Mr. Ngammi Valui",
      title: "Director of iAcademy",
      image: "/about/person.png",
      bgColor: "bg-blue-700",
      text: `“At iAcademy Manipur, we believe education is more than knowledge—it’s about critical thinking, creativity, tech literacy, and resilience. Our vision is to equip the next generation with skills, character, and confidence to become leaders, innovators, and responsible global citizens.”`,
      reverse: false,
      topShape: true, 
    },
   {
  name: "Phashokmi Vashi",
  title: "Academic Head",
  image: "/home/head1.png", 
  bgColor: "bg-red-700",
  text: `“Our approach at iAcademy is to nurture curiosity and encourage students to explore beyond textbooks. We focus on personalized learning, practical exposure, and a supportive environment that empowers every learner to grow academically and personally.”`,
  reverse: true,
  topShape: true, 
}

  ];

  return (
    <div className="mx-auto px-8 py-20 space-y-24 bg-white overflow-hidden">
      {team.map((member, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-12 ${member.reverse ? "md:flex-row-reverse" : ""}`}
          data-aos={member.reverse ? "fade-left" : "fade-right"}
        >
          {/* Image */}
          <div
            className={`w-60 h-60 md:w-72 md:h-72 flex items-center justify-center overflow-hidden ${member.bgColor} ${member.topShape ? "rounded-t-full" : "rounded-b-full"}`}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 text-center md:text-left space-y-4" data-aos="fade-up" data-aos-delay="400">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{member.name}</h2>
            <p className="text-lg md:text-xl text-gray-500 font-medium">{member.title}</p>
            <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">{member.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamSection;
