import React from "react";

const ContentSection = () => {
  // Offline courses
  const offlineCourses = [
    {
      id: 1,
      title: "Certified Digital Marketing Master",
      description:
        "Digital marketing is the backbone of every business today. This course provides in-depth knowledge of SEO, Google Ads, Meta (Facebook/Instagram) Ads, social media management, and content marketing. Students will also get the chance to work on real projects, gaining hands-on experience.",
      who: "Students, business owners, freelancers, or job seekers.",
      outcome:
        "Build a career as a digital marketer, boost business sales, or start freelancing.",
    },
    {
      id: 2,
      title: "Creative Student Designer",
      description:
        "This program focuses on creativity, innovation, and design thinking for students. It helps young learners explore new ideas, sharpen problem-solving skills, and express creativity through various design activities.",
      who: "School and college students.",
      outcome:
        "Improve creative confidence, presentation skills, and innovative thinking.",
    },
    {
      id: 3,
      title: "Graphic Design Mastery",
      description:
        "Graphic design is a high-demand skill in today’s world of marketing and content creation. This course teaches Photoshop, Illustrator, Canva, and professional design principles.",
      who: "Students interested in creative fields or those planning a design career.",
      outcome:
        "Build a portfolio, start freelancing, or apply for jobs in design agencies.",
    },
    {
      id: 4,
      title: "Job Search Mastery",
      description:
        "Finding a job is not just about having qualifications—it’s about standing out. This course teaches resume building, interview preparation, communication skills, LinkedIn optimization, and professional networking.",
      who: "Fresh graduates, job seekers, and career changers.",
      outcome:
        "Increased confidence and higher chances of landing a dream job.",
    },
  ];

  // Online courses
  const onlineCourses = [
    {
      id: 1,
      title: "IAS Junior Course (Class 5–10)",
      description:
        "Preparing for the future starts early. This program is designed for school students who wish to build a strong foundation for IAS and other competitive exams.",
      who: "Students from class 5–10.",
      outcome:
        "Build critical thinking, GK, current affairs awareness, and exam confidence.",
    },
    {
      id: 2,
      title: "Exam Crash Course (Class 10)",
      description:
        "This is a short-term, intensive course focused on board exam preparation. It covers smart study strategies, time management, and revision techniques.",
      who: "Class 10 students.",
      outcome: "Improved scores, reduced stress, and better exam performance.",
    },
    {
      id: 3,
      title: "Digital Storyteller Course",
      description:
        "Storytelling is an art, and in the digital world, it’s a skill every professional needs. This course helps students learn video creation, blogging, podcasting, and content strategy.",
      who: "Students, influencers, and aspiring content creators.",
      outcome:
        "Build a personal brand, grow social media presence, or start a YouTube/blogging career.",
    },
    {
      id: 4,
      title: "Smart Robotics and AI for Kids",
      description:
        "Robotics and Artificial Intelligence are the future. This fun and interactive course introduces children to basic coding, robotics kits, and AI concepts.",
      who: "Kids and teenagers with curiosity for technology.",
      outcome:
        "Build logical thinking, problem-solving, and 21st-century tech skills at an early age.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-12">
      <div className="p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold leading-snug text-gray-900 mb-6">
          I Academy Manipur:{" "}
          <span className="text-red-600">Shaping Future Careers</span> with
          Skill-Building Courses
        </h1>

        {/* Intro */}
        <p className="text-gray-700 mb-4 leading-relaxed">
          In the rapidly evolving digital era, success depends on how quickly
          one can adapt, learn, and apply new skills. For students,
          professionals, and entrepreneurs in Manipur, the opportunity to
          upgrade knowledge is more important than ever. Recognizing this need,
          I Academy has launched a wide range of offline and online courses
          designed to empower learners with the right tools to thrive in
          education, careers, and business.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Our mission is simple: to bridge the gap between traditional education
          and modern skill requirements.
        </p>

        {/* Offline Courses */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Offline Courses at I Academy
        </h2>
        <div className="space-y-6 mb-10">
          {offlineCourses.map((course) => (
            <div key={course.id}>
              <h3 className="font-bold text-gray-900">
                {course.id}. {course.title}
              </h3>
              <p className="text-gray-700 mt-1">{course.description}</p>
              <p className="text-gray-700 mt-1">
                <span className="font-semibold text-gray-900">Who can join?</span>{" "}
                {course.who}
              </p>
              <p className="text-gray-700 mt-1">
                <span className="font-semibold text-gray-900">Outcome:</span>{" "}
                {course.outcome}
              </p>
            </div>
          ))}
        </div>

        {/* Online Courses */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Online Courses at I Academy
        </h2>
        <div className="space-y-6 mb-10">
          {onlineCourses.map((course) => (
            <div key={course.id}>
              <h3 className="font-bold text-gray-900">
                {course.id}. {course.title}
              </h3>
              <p className="text-gray-700 mt-1">{course.description}</p>
              <p className="text-gray-700 mt-1">
                <span className="font-semibold text-gray-900">Who can join?</span>{" "}
                {course.who}
              </p>
              <p className="text-gray-700 mt-1">
                <span className="font-semibold text-gray-900">Outcome:</span>{" "}
                {course.outcome}
              </p>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed">
            In today’s competitive world, learning the right skills at the right
            time makes all the difference. The courses offered by{" "}
            <span className="text-red-600 font-semibold">I Academy Manipur</span>{" "}
            are carefully designed to prepare students, professionals, and
            entrepreneurs for real-world success. From mastering digital
            marketing and graphic design to exploring robotics, AI, and
            storytelling, every program is a step toward building confidence,
            creativity, and career growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
