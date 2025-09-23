import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function ArticlesSection() {
  const articles = [
    {
      id: 1,
      title: "Digital Marketing in 2025: Key Trends You Should Know",
      date: "02-08-2025",
      image: "/articles/digital-marketing-2025.jpg",
      imageAlt: "Social media icons including Facebook, YouTube, Instagram and LinkedIn"
    },
    {
      id: 2,
      title: "5 Essential Skills Every Student Must Learn Today",
      date: "01-08-2025",
      image: "/articles/essential-skills.jpg",
      imageAlt: "Design tools and creative workspace with The Perfect logo"
    },
    {
      id: 3,
      title: "Why Robotics and AI Education Matter for Kids",
      date: "03-08-2025",
      image: "/articles/robotics-ai-education.jpg",
      imageAlt: "White humanoid robot with blue accents"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Articles
          </h2>
          <p className="text-gray-600 max-w-2xl leading-relaxed">
            Stay Updated with the Latest in Education, Technology, and Innovation
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
            >
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  width={400}
                  height={240}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  priority={false}
                />
                
                {/* Image placeholder if images don't exist yet */}
                {/* Uncomment this section if you need placeholders */}
                {/* 
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">📱</div>
                    <p className="text-sm">Article Image</p>
                  </div>
                </div>
                */}
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-indigo-600 transition-colors duration-200">
                    {article.title}
                  </h3>
                  
                  <div className="text-sm text-gray-500 mb-4">
                    {article.date}
                  </div>
                </div>

                {/* Read More Button */}
                <button className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200 group/btn">
                  <span>Read more</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
            View all
          </button>
        </div>
      </div>
    </section>
  )
}