export default function DigitalMarketingCourse() {
  return (
    <div className="mx-auto bg-white shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left Content Section */}
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-lg font-medium text-gray-700">Duration: 6 Months</h2>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Hybrid
            </span>
          </div>
          {/* Overview Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview:</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dive deep into the world of online marketing and master strategies to build brands, drive traffic, and generate leads. This comprehensive course covers Search Engine Optimization (SEO), Search Engine Marketing (SEM), Social Media Marketing, Content Marketing, Email Marketing, Web Analytics, and more. Learn to execute successful digital campaigns and measure their impact.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <span className="font-medium">Who is this for?</span> Aspiring digital marketers, entrepreneurs, small business owners, marketing professionals looking to upskill, and anyone keen to build a career in the digital space.
            </p>
          </div>
          {/* Key Highlights Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Highlights:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">
                  <span className="font-medium">IBM Certification Opportunity:</span> Earn an industry-recognized IBM Professional Certificate.
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Hands-on projects with live campaigns and real-world case studies.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Master advanced tools and platforms used by leading agencies.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Portfolio development for job readiness.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">
                  <span className="font-medium">Learning Format:</span> Offline & Online (Hybrid)
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">
                  <span className="font-medium">Certification:</span> IBM Certified Digital Marketing Professional + iAcademy Certificate
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-80 flex items-center justify-center p-8">
          <img
            src="/course/image2.jpg"
            alt="Digital Marketing Course"
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
