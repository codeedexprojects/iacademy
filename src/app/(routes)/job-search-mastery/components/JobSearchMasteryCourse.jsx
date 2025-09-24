export default function JobSearchMasteryCourse() {
  return (
    <div className="mx-auto bg-white shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left Content Section */}
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-lg font-medium text-gray-700">Duration: 1 Month</h2>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Hybrid
            </span>
          </div>
          {/* Overview Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview:</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Equip yourself with the essential tools and strategies to navigate today's competitive job market successfully. This course covers everything from crafting compelling resumes and cover letters to mastering interview techniques, networking effectively, and optimizing your online professional presence.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <span className="font-medium">Who is this for?</span> Fresh graduates, job seekers, professionals looking for a career change, and anyone seeking to enhance their employability skills.
            </p>
          </div>
          {/* Key Highlights Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Highlights:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">
                  Personalized resume and cover letter workshops.
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Mock interview sessions with constructive feedback.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Strategies for online job portals and LinkedIn optimization.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Career counseling and guidance.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">
                  Learning Format: Offline & Online (Hybrid)
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">
                 
Certification: iAcademy Job Search Mastery Certificate
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-80 flex items-center justify-center p-8">
          <img
            src="/course/image5.png"
            alt="Digital Marketing Course"
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
