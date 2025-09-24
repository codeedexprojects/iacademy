import React from "react";

const ContentSection = () => {
  // Key points for Creative Student Designer course
  const coursePoints = [
    {
      id: 1,
      title: "Why Creativity Matters for Students in 2025 and Beyond",
      description:
        "As businesses, startups, and even personal brands go digital, the demand for creative minds is exploding. Students who learn design early gain:",
      bullets: [
        "Better problem-solving skills for academic and real-life challenges.",
        "Confidence in self-expression through digital art and branding.",
        "Opportunities to earn through freelancing, internships, and creative gigs even before completing college.",
        "Creativity is not just about art—it’s about thinking differently, creating solutions, and standing out in a competitive world.",
      ],
    },
    {
      id: 2,
      title: "What Students Will Learn in the Creative Student Designer Program",
      bullets: [
        "Design Fundamentals – Understanding color theory, typography, composition, and visual hierarchy to create designs that are attractive and professional.",
        "Hands-on Digital Tools Training – Students learn to work with Canva, Photoshop, and Illustrator for practical design skills.",
        "Branding & Social Media Design – Learn to create logos, social media posts, and marketing visuals that build brand identity.",
        "Creative Thinking & Problem-Solving – Participate in challenges, competitions, and brainstorming sessions to think outside the box.",
        "Portfolio Development – Build a mini-portfolio showcasing your best designs for career or college opportunities.",
      ],
    },
    {
      id: 3,
      title: "Who Should Join the Creative Student Designer Course?",
      bullets: [
        "School and college students who want to explore creativity alongside academics.",
        "Aspiring graphic designers looking for a structured, beginner-friendly course.",
        "Students interested in digital branding, marketing, or freelancing opportunities.",
      ],
    },
    {
      id: 4,
      title: "Key Benefits of the Course",
      bullets: [
        "Confidence Building: Express ideas visually and present designs professionally.",
        "Freelancing & Earning Potential: Start taking small projects online and offline.",
        "Career-Ready Skills: Adds value to resumes, LinkedIn profiles, and college applications.",
        "Creative Growth: Encourages innovation, problem-solving, and analytical thinking.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-12">
      <div className="p-8 max-w-5xl">
        {/* Title */}
        <h1 className="text-3xl font-bold leading-snug text-gray-900 mb-6">
          Creative Student Designer:{" "}
          <span className="text-red-600">Unlocking Creativity in Young Minds</span> with I Academy Manipur
        </h1>

        {/* Intro */}
        <p className="text-gray-700 mb-4 leading-relaxed">
          In the modern digital era, creativity is no longer optional—it’s essential. From eye-catching posters to compelling brand campaigns, creativity drives innovation, communication, and personal expression. Yet, most students focus solely on academics, overlooking the importance of creative thinking and design skills.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          At <span className="text-red-600 font-semibold">I Academy Manipur</span>, we believe that creativity empowers students to stand out, communicate effectively, and prepare for a future where digital design and branding skills are highly valued. Our Creative Student Designer program is designed specifically to help school and college students develop these skills through hands-on learning, expert guidance, and real-world projects.
        </p>

        {/* Course Points */}
        <div className="space-y-8 mb-10">
          {coursePoints.map((point) => (
            <div key={point.id}>
              <h2 className="font-bold text-gray-900 mb-2">
                {point.id}. {point.title}
              </h2>
              {point.description && (
                <p className="text-gray-700 mb-2">{point.description}</p>
              )}
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {point.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Conclusion: Building Future-Ready Creators in Manipur
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The Creative Student Designer Course at <span className="text-red-600 font-semibold">I Academy Manipur</span> is more than just a design program—it’s a creativity accelerator for the next generation. By combining practical design skills, branding knowledge, and creative confidence, we prepare students for freelancing, entrepreneurship, or future creative careers. In a world where content and creativity rule, this program ensures that students don’t just consume digital content—they learn to create, innovate, and lead.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
