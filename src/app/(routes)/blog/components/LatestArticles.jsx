import React from 'react';
import { Clock } from 'lucide-react';

const LatestArticles = () => {
  const articles = [
    {
      id: 1,
      image: '/api/placeholder/300/200',
      title: 'Top 10 Digital Marketing Skills Every Student in Manipur Should Learn in 2025',
      category: 'Digital Marketing',
      readTime: '5 min read',
      date: 'Dec 15, 2024'
    },
    {
      id: 2,
      image: '/api/placeholder/300/200',
      title: 'Why Digital Marketing is the Hottest Career Choice for Manipur\'s Youth',
      category: 'Career',
      readTime: '3 min read',
      date: 'Dec 12, 2024'
    },
    {
      id: 3,
      image: '/api/placeholder/300/200',
      title: 'Academy Manipur: Shaping Future Careers with Skill-Building Courses',
      category: 'Education',
      readTime: '4 min read',
      date: 'Dec 10, 2024'
    },
    {
      id: 4,
      image: '/api/placeholder/300/200',
      title: 'Top 10 Digital Marketing Skills Every Student in Manipur Should Learn in 2025',
      category: 'Digital Marketing',
      readTime: '5 min read',
      date: 'Dec 15, 2024'
    },
    {
      id: 5,
      image: '/api/placeholder/300/200',
      title: 'Why Digital Marketing is the Hottest Career Choice for Manipur\'s Youth',
      category: 'Career',
      readTime: '3 min read',
      date: 'Dec 12, 2024'
    },
    {
      id: 6,
      image: '/api/placeholder/300/200',
      title: 'Academy Manipur: Shaping Future Careers with Skill-Building Courses',
      category: 'Education',
      readTime: '4 min read',
      date: 'Dec 10, 2024'
    }
  ];

  const ArticleCard = ({ article }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <div className="relative">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
            {article.category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-sm leading-tight mb-3 hover:text-blue-600 transition-colors">
          {article.title}
        </h3>
        
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock size={12} />
            <span>{article.readTime}</span>
          </div>
          <span>{article.date}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Latest Articles</h1>
          <div className="w-16 h-1 bg-blue-600 rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default LatestArticles;