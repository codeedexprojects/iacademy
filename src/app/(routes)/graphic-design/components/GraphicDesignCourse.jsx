export default function GraphicDesignCourse() {
  return (
    <div className="mx-auto bg-white shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left Content Section */}
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-lg font-medium text-gray-700">Duration: 2 Months</h2>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Hybrid
            </span>
          </div>
          {/* Overview Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview:</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
               Unleash your creativity and learn the art of visual communication. This intensive course covers fundamental design principles, typography, color theory, image manipulation, and layout design. You'll gain proficiency in industry-standard software (e.g., Adobe Photoshop, Illustrator) and create stunning visuals for various mediums.
Who is this for? Aspiring graphic designers, content creators, marketers, students, and anyone wanting to develop strong visual communication skills.
            </p>
            
          </div>
          {/* Key Highlights Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Highlights:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">
                 Focus on practical application and portfolio building
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Learn to design logos, brochures, social media graphics, posters, and more.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Expert-led instruction with personalized feedback.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Learning Format: Offline & Online (Hybrid)</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">
                  <span className="font-medium">Certification:</span>  iAcademy Graphic Design Mastery Certificate
                </span>
              </li>
             
            </ul>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-80 flex items-center justify-center p-8">
          <img
            src="/course/image3.jpg"
            alt="Digital Marketing Course"
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
