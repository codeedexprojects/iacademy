import React from "react";

const ContentSection = () => {
  // Updated skills data
  const skills = [
    {
      id: 1,
      title: "Search Engine Optimization (SEO)",
      description:
        "SEO is the backbone of digital marketing. It helps websites rank higher on Google, bringing in free organic traffic. At I Academy, students learn keyword research, on-page optimization, and link-building strategies to improve website visibility.",
    },
    {
      id: 2,
      title: "Social Media Marketing (SMM)",
      description:
        "Platforms like Facebook, Instagram, and LinkedIn are powerful tools for brand awareness and engagement. Students learn how to create content, run ads, and analyze performance to reach the right audience effectively.",
    },
    {
      id: 3,
      title: "Content Marketing",
      description:
        "Content is king, and businesses need quality blogs, videos, and graphics to attract customers. Our training focuses on storytelling, blogging, and content planning strategies for better reach and conversions.",
    },
    {
      id: 4,
      title: "Pay-Per-Click Advertising (PPC)",
      description:
        "PPC campaigns on Google Ads and Meta Ads help businesses drive instant traffic. Students learn how to set up, manage, and optimize ad campaigns for better ROI.",
    },
    {
      id: 5,
      title: "Email Marketing",
      description:
        "Email is still one of the most effective ways to connect with customers. At I Academy, students learn how to create email campaigns, newsletters, and automation sequences for lead nurturing.",
    },
    {
      id: 6,
      title: "Analytics and Data Interpretation",
      description:
        "Data-driven marketing is the future. Tools like Google Analytics help students understand customer behavior, traffic sources, and campaign performance to make informed decisions.",
    },
    {
      id: 7,
      title: "Video Marketing",
      description:
        "With the rise of YouTube and Instagram Reels, video content is dominating digital marketing. Students learn video editing, scripting, and strategies for viral content creation.",
    },
    {
      id: 8,
      title: "Influencer and Affiliate Marketing",
      description:
        "Influencer collaborations and affiliate programs are booming. We teach students how to partner with influencers and set up affiliate programs for brand growth.",
    },
    {
      id: 9,
      title: "Marketing Automation and AI Tools",
      description:
        "AI tools like ChatGPT, Canva AI, and marketing automation platforms help in creating smarter campaigns. Students learn how to leverage AI for content creation and ad optimization.",
    },
    {
      id: 10,
      title: "Personal Branding and Portfolio Building",
      description:
        "Finally, students learn how to showcase their skills online through personal websites, LinkedIn profiles, and digital portfolios to attract employers and clients.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-12">
      <div className="p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold leading-snug text-gray-900 mb-6">
          Top 10 Digital Marketing Skills Every Student in{" "}
          <span className="text-red-600">Manipur</span> Should Learn in 2025
        </h1>

        {/* Intro Paragraphs */}
        <p className="text-gray-700 mb-4 leading-relaxed">
          In today’s fast-changing digital world, businesses are shifting online
          at lightning speed, creating massive opportunities for students and
          professionals in Manipur. Whether you want to become a freelancer, a
          digital marketer, or launch your own startup, learning the right
          digital marketing skills in 2025 is the key to success.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          At{" "}
          <span className="text-red-600 font-semibold">I Academy Manipur</span>,
          we train students with industry-ready digital marketing skills to make
          them job-ready and future-proof.
        </p>

        {/* Skills List */}
        <div className="space-y-6 mt-6">
          {skills.map((skill) => (
            <div key={skill.id}>
              <h2 className="font-bold text-gray-900">
                {skill.id}. {skill.title}
              </h2>
              <p className="text-gray-700 mt-1">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed">
            Digital marketing is not just a career choice; it’s the future of
            business. By mastering these top 10 digital marketing skills in
            2025, students in Manipur can secure high-paying jobs, start
            freelancing, or even launch their own businesses. At I Academy
            Manipur, we provide hands-on training, real-world projects, and
            expert mentorship to help students build strong careers in the
            digital world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
