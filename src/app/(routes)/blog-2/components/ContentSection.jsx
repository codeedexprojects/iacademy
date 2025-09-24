import React from "react";

const ContentSection = () => {
  // Dynamic points data
  const points = [
    {
      id: 1,
      title: "Massive Job Opportunities Across Industries",
      description: (
        <>
          With more businesses shifting online, companies need skilled digital
          marketers who can manage:
          <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
            <li>Social Media Campaigns to engage audiences on platforms like Instagram, Facebook, and LinkedIn.</li>
            <li>SEO Strategies to rank higher on Google and attract organic traffic.</li>
            <li>Paid Ads on Google and Meta to boost sales.</li>
            <li>Content Marketing for brand storytelling and audience building.</li>
          </ul>
          <p className="mt-2">
            As a digital marketing professional, you can work as a Social Media
            Manager, SEO Specialist, Content Creator, PPC Expert, or Digital
            Marketing Consultant. Many companies also offer remote job
            opportunities, letting you work with clients across India or even
            internationally while staying in Manipur.
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "Start Earning Early with Freelancing",
      description: (
        <>
          Unlike traditional careers where you wait for a degree before earning,
          digital marketing allows you to start freelancing while learning.
          Platforms like <span className="font-semibold">Upwork</span>,{" "}
          <span className="font-semibold">Fiverr</span>, and{" "}
          <span className="font-semibold">Freelancer</span> give you access to
          global clients who need help with:
          <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
            <li>Social media management</li>
            <li>Blog writing and content creation</li>
            <li>Ad campaign setup and optimization</li>
            <li>Website SEO audits</li>
          </ul>
          <p className="mt-2">
            Many young people in Manipur are already earning part-time incomes
            through freelancing while studying or working on other projects.
          </p>
        </>
      ),
    },
    {
      id: 3,
      title: "Launch Your Own Business or Agency",
      description:
        "Digital marketing doesn’t just prepare you for jobs—it equips you to start your own business. With the right skills, you can build an e-commerce store, start a digital marketing agency for local businesses, or grow a personal brand as a content creator, influencer, or blogger. At I Academy Manipur, students receive practical training to help them confidently launch and grow their own ventures online.",
    },
    {
      id: 4,
      title: "Affordable Courses with High ROI",
      description:
        "Traditional degrees can take years to complete and often cost a fortune. In contrast, digital marketing courses are affordable, skill-focused, and short-term. Within a few months, you can learn in-demand skills and start earning—making it a low-investment, high-return career path for ambitious youth.",
    },
    {
      id: 5,
      title: "Unlimited Growth and Learning Opportunities",
      description:
        "The digital marketing world is always changing. New social media platforms emerge, Google updates its algorithms, and marketing strategies evolve. This means learning never stops, and there’s always room to upgrade your skills, get certifications, and stay ahead of competitors.",
    },
    {
      id: 6,
      title: "Work from Anywhere—Freedom & Flexibility",
      description:
        "One of the biggest attractions of digital marketing is its location independence. Whether you want to work from home, a co-working space, or while traveling, all you need is a laptop and internet connection. This flexibility is perfect for young people who value work-life balance and freedom.",
    },
    {
      id: 7,
      title: "Be Part of Manipur’s Digital Transformation",
      description:
        "Manipur is witnessing a digital revolution with businesses, startups, and entrepreneurs embracing online platforms. Skilled digital marketers are the driving force behind this change. By learning digital marketing, you can become part of this transformation, helping local businesses grow and putting Manipur on the digital map.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-12">
      <div className="p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold leading-snug text-gray-900 mb-6">
          Why Digital Marketing is the{" "}
          <span className="text-red-600">Hottest Career Choice</span> for
          Manipur’s Youth
        </h1>

        {/* Intro Paragraph */}
        <p className="text-gray-700 mb-4 leading-relaxed">
          The digital world is growing at lightning speed, and businesses of all
          sizes—from small local shops to global brands—are racing to build a
          strong online presence. As a result, digital marketing has become one
          of the most in-demand skills in today’s job market.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          For the youth of Manipur, this digital revolution has opened up
          exciting opportunities. Digital marketing in 2025 is not just a career
          path—it’s a gateway to financial independence, creative expression,
          and professional growth. Let’s explore why it has become the dream
          career for so many young people in Manipur.
        </p>

        {/* Dynamic Points */}
        <div className="space-y-6 mt-6">
          {points.map((point) => (
            <div key={point.id}>
              <h2 className="font-bold text-gray-900">
                {point.id}. {point.title}
              </h2>
              <div className="text-gray-700 mt-1">{point.description}</div>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed">
            Learning digital marketing in Manipur is not just about earning a
            certificate—it’s about building a future-ready career with endless
            growth opportunities. At{" "}
            <span className="text-red-600 font-semibold">I Academy Manipur</span>
            , we combine hands-on training through real-world projects, expert
            mentorship from industry professionals, and flexible learning
            options designed for both students and working professionals.
            Whether your goal is to secure a high-paying job, start a freelance
            career, or launch your own business, our digital marketing courses
            equip you with the skills and confidence to succeed in today’s
            competitive digital world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
