export default function IasJuniourCourse() {
  return (
    <div className="mx-auto bg-white shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left Content Section */}
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-lg font-medium text-gray-700">Duration: 1 Year</h2>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Hybrid
            </span>
          </div>
          {/* Overview Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview:</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
             Lay a strong foundation for future civil services aspirations with our meticulously designed IAS Junior Course. This program focuses on building a robust understanding of General Knowledge, Current Affairs, Analytical Skills, and Aptitude, tailored to the academic level of students from Class 5 to 10, fostering critical thinking from a young age.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <span className="font-medium">Who is this for ?</span> School students from Class 5 to 10 interested in building a strong academic and general awareness foundation for competitive exams, including future UPSC endeavors.
            </p>
          </div>
          {/* Key Highlights Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Highlights:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">
                 Age-appropriate curriculum developed by expert educators.
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Emphasis on conceptual clarity and analytical thinking.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Regular quizzes, discussions, and doubt-clearing sessions.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Holistic development beyond regular school curriculum.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">
                  <span className="font-medium">Learning Format: Offline & Online (Hybrid) </span>
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">
                  Certification: iAcademy IAS Junior Course Completion Certificate
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-80 flex items-center justify-center p-8">
          <img
            src="/course/image7.png"
            alt="Digital Marketing Course"
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
