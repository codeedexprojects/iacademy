export default function ExamCrashCourse() {
  return (
    <div className="mx-auto bg-white shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left Content Section */}
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-lg font-medium text-gray-700">Duration: 22 Days Per Project</h2>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Hybrid
            </span>
          </div>
          {/* Overview Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview:</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Get exam-ready with our intensive crash course designed specifically for Class 10 board examinations. This focused program provides thorough subject-wise revision, strategic exam-taking tips, practice with past papers, and doubt clarification sessions to boost confidence and performance.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <span className="font-medium">Who is this for?</span> Class 10 students preparing for their board examinations who need focused revision, strategic guidance, and intensive practice.
            </p>
          </div>
          {/* Key Highlights Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Highlights:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">
                  Subject-specific intensive revision modules.
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Expert faculty guidance on important topics and common pitfalls.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Practice tests, mock exams, and performance analysis.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Time management and stress reduction techniques.</span>
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
                  <span className="font-medium">Certification: iAcademy Exam Crash Course Participation Certificate</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-80 flex items-center justify-center p-8">
          <img
            src="/course/image6.jpg"
            alt="Digital Marketing Course"
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
