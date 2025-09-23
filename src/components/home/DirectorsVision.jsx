import Image from 'next/image';

export default function DirectorsVision() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Director&apos;s Vision
          </h2>
          <p className="text-lg text-gray-600 max-w-md">
            Our mission is to unlock the true potential of every learner in Manipur.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Director Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Blue circular background */}
              <div >
                {/* Director Image - Using Next.js Image component */}
                <div className=" lg:w-88 lg:h-120  overflow-hidden shadow-lg">
                  <Image
                    src="/Ngammi.png"
                    alt="Mr. Ngammi Valui - Director of iAcademy Manipur"
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAGQAAAQUAAAAAAAAAAAAAAAAAAAECBAYH/8QAJRAAAQMCBAcAAAAAAAAAAAAAAQACAwQFBhESFCEiMUFRYYHB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJOG8V3W5V8cNTU6mO5nZQN1vFjvNfbqZsVJNoY3gGtGyIiD/9k="
                  />
                </div>
                
              </div>
            </div>
          </div>

          {/* Director's Message */}
          <div className="space-y-6">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                I founded iAcademy with a singular purpose: to unlock the immense 
                potential within the students of Manipur. We are an institute built on the bedrock 
                of <span className="font-semibold text-indigo-600">Innovate, Learn, and Conquer</span>. We foster an environment where innovation 
                thrives, encouraging you to think beyond boundaries. We provide the 
                comprehensive support you need to learn deeply and effectively.
                We empower you with the resilience and skills to Conquer your academic goals and future 
                endeavors. iAcademy Manipur is your dedicated partner in achieving excellence. 
                Join us, and together, let&apos;s shape a future of success and impact for our 
                community and beyond.
              </p>
              
              <p className="italic">
                Warmly,
              </p>
            </div>

            {/* Director Info */}
            <div className="pt-4">
              <h4 className="text-xl font-bold text-gray-900 mb-1">
                Mr. Ngammi Valui
              </h4>
              <p className="text-indigo-600 font-semibold">
                Director of iAcademy Manipur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}