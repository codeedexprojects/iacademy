import React from "react";

const ContentSection = () => {
  // Key points for IAS coaching
  const coachingPoints = [
    {
      id: 1,
      title: "Strong Academic Foundation for Future Preparation",
      description:
        "IAS exams cover a wide range of subjects like History, Geography, Polity, Economy, Science, and Current Affairs. Starting early gives students enough time to understand core concepts rather than memorizing them at the last minute.",
      example:
        "A student who learns about Indian history in Class 8 finds it easier to handle the UPSC syllabus in higher classes because they already know the basics.",
      benefit:
        "By the time they reach senior secondary or college, they have a deep understanding of topics, saving them time during actual preparation.",
    },
    {
      id: 2,
      title: "Habit of Reading and Self-Learning",
      description:
        "Reading newspapers, journals, and magazines is essential for IAS preparation. Early coaching introduces students to these resources in a simple way, helping them develop a daily reading habit.",
      benefit:
        "Students naturally stay informed about current affairs, government policies, and world events, boosting both knowledge and confidence.",
    },
    {
      id: 3,
      title: "Critical Thinking and Problem-Solving Skills",
      description:
        "IAS exams are not just about academics—they require analytical thinking, reasoning, and decision-making. Through activities like quizzes, debates, and case studies, students learn to think deeply and analyze real-world problems.",
      benefit:
        "This skill not only helps in IAS preparation but also improves overall academic performance and personality development.",
    },
    {
      id: 4,
      title: "Confidence Through Communication Training",
      description:
        "IAS interviews and group discussions test confidence and communication skills. Early coaching includes public speaking, essay writing, and group debates to help students overcome stage fear.",
      benefit:
        "Students become more confident in expressing ideas clearly, an essential quality for both IAS exams and leadership roles.",
    },
    {
      id: 5,
      title: "Time Management and Discipline",
      description:
        "IAS preparation requires consistency and smart planning. Starting early teaches students how to create study schedules, break down big goals into small tasks, and stay disciplined throughout the year.",
      benefit:
        "These habits also help students perform better in school exams and other competitive tests.",
    },
    {
      id: 6,
      title: "Stress-Free and Fun Learning Environment",
      description:
        "Unlike crash courses taken after graduation, early coaching introduces concepts slowly and in a fun, interactive way. Students enjoy learning through storytelling, games, and creative exercises.",
      benefit:
        "This approach keeps them motivated, stress-free, and curious rather than overwhelmed.",
    },
    {
      id: 7,
      title: "Awareness of Career Paths and Goal Setting",
      description:
        "Early exposure to civil services also helps students understand career opportunities in administration, law, governance, and public service.",
      benefit:
        "They develop a clear vision for the future and set long-term goals confidently.",
    },
    {
      id: 8,
      title: "Personality Development and Leadership Skills",
      description:
        "IAS officers require leadership qualities, ethical values, and decision-making abilities. Early coaching focuses on personality-building activities like leadership games, role-playing exercises, and teamwork projects.",
      benefit:
        "Students grow into confident, socially responsible individuals with the skills to handle challenges effectively.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-12">
      <div className="p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold leading-snug text-gray-900 mb-6">
          How Early IAS Coaching Builds Confidence and Knowledge in Students
        </h1>

        {/* Intro */}
        <p className="text-gray-700 mb-4 leading-relaxed">
          In today’s competitive world, starting IAS preparation early can
          completely change a student’s learning journey. Most aspirants begin
          preparing for the UPSC Civil Services Examination after graduation,
          but starting in school years (Classes 5–10) provides a strong
          foundation for both knowledge and confidence.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          At <span className="text-red-600 font-semibold">I Academy Manipur</span>, 
          our IAS Junior Course is designed to help young students develop the
          right mindset, skills, and academic strength needed for future success.
          Let’s break down how early IAS coaching can transform students into
          confident, well-prepared aspirants.
        </p>

        {/* Coaching Points */}
        <div className="space-y-8 mb-10">
          {coachingPoints.map((point) => (
            <div key={point.id}>
              <h3 className="font-bold text-gray-900">
                {point.id}. {point.title}
              </h3>
              <p className="text-gray-700 mt-1">{point.description}</p>
              {point.example && (
                <p className="text-gray-700 mt-1">
                  <span className="font-semibold text-gray-900">Example:</span>{" "}
                  {point.example}
                </p>
              )}
              <p className="text-gray-700 mt-1">
                <span className="font-semibold text-gray-900">Benefit:</span>{" "}
                {point.benefit}
              </p>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion: Build a Bright Future with Early IAS Coaching at I Academy Manipur</h2>
          <p className="text-gray-700 leading-relaxed">
            Starting IAS preparation early is not about pressuring students—it’s
            about providing them with the right direction, habits, and confidence
            to succeed both in academics and life. At{" "}
            <span className="text-red-600 font-semibold">I Academy Manipur</span>, 
            our IAS Junior Course for Classes 5–10 focuses on building a strong
            academic foundation, developing critical thinking and communication
            skills, and nurturing time management, leadership qualities, and exam
            confidence. Whether your child aspires to become a civil servant or
            simply wants to enhance knowledge, confidence, and analytical
            abilities, early IAS coaching at I Academy offers the perfect head
            start toward a successful future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
