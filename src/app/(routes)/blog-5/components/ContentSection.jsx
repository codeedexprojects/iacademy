import React from "react";

const ContentSection = () => {
  // Key points for Robotics & AI course
  const coursePoints = [
    {
      id: 1,
      title: "Why Robotics and AI Education Matters for Kids",
      description:
        "Technology is no longer optional; it’s essential. Learning robotics and AI at a young age helps children:",
      bullets: [
        "Develop logical thinking through coding and problem-solving.",
        "Understand technology concepts that are shaping the modern world.",
        "Boost creativity by designing and building real robotic models.",
        "Gain confidence in using tools and technologies for future careers.",
        "Instead of being just users of technology, kids learn to become creators and innovators.",
      ],
    },
    {
      id: 2,
      title: "What Kids Will Learn in the Smart Robotics and AI Course",
      bullets: [
        "Basic Coding Skills – Using simple programming languages and tools designed for kids.",
        "Robotics Kits – Hands-on experience building small robots that move, sense, and interact.",
        "Artificial Intelligence Basics – Introduction to AI concepts like speech recognition, image detection, and automation.",
        "STEM Principles – Science, Technology, Engineering, and Math made practical and exciting.",
        "Problem-Solving & Innovation – Activities that challenge kids to think outside the box.",
      ],
    },
    {
      id: 3,
      title: "Who Can Join?",
      bullets: [
        "Kids and teenagers aged 8–16 who are curious about technology.",
        "Students who love hands-on learning and want to explore coding and robotics.",
        "Parents who want their children to develop future-ready skills early.",
      ],
    },
    {
      id: 4,
      title: "Benefits of the Smart Robotics and AI Course",
      bullets: [
        "Future-Ready Skills: Equip kids with knowledge for tomorrow’s tech-driven careers.",
        "Creativity and Innovation: Encourage designing, experimenting, and critical thinking.",
        "Confidence Building: Present ideas, work in teams, and solve real problems.",
        "Early Exposure to STEM: A head start for careers in engineering, AI, and robotics.",
      ],
    },
    {
      id: 5,
      title: "Why Choose I Academy Manipur?",
      bullets: [
        "Expert Trainers: Experienced professionals who make learning simple and fun.",
        "Practical Learning: Focus on projects, not just theory.",
        "Safe Learning Environment: Kids learn at their own pace with guidance.",
        "Offline & Online Options: Flexible learning for every student.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-12">
      <div className="p-8 max-w-5xl">
        {/* Title */}
        <h1 className="text-3xl font-bold leading-snug text-gray-900 mb-6">
          Smart Robotics and AI for Kids:{" "}
          <span className="text-red-600">Building Future Innovators</span> at I Academy Manipur
        </h1>

        {/* Intro */}
        <p className="text-gray-700 mb-4 leading-relaxed">
          The world is moving toward automation, artificial intelligence (AI), and robotics at an incredible pace. From smart homes to self-driving cars, the technology we once saw in movies is now part of our daily lives. And guess what? The next generation will lead this revolution.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          That’s why <span className="text-red-600 font-semibold">I Academy Manipur</span> has designed the Smart Robotics and AI for Kids course—to help children explore technology early, build problem-solving skills, and prepare for a future powered by innovation.
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
            Conclusion: Prepare Kids for a Tech-Powered Future
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Technology is shaping the world, and kids who start learning robotics and AI early will have a huge advantage in the future. At <span className="text-red-600 font-semibold">I Academy Manipur</span>, our Smart Robotics and AI for Kids course helps young learners develop logical thinking, creativity, and tech confidence through fun and interactive sessions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
