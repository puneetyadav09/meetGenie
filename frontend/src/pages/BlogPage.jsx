import React from 'react';
import PageLayout from '../components/PageLayout';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const BlogPage = () => {
  const featuredPost = {
    title: 'The Future of AI-Powered Meeting Intelligence',
    excerpt: 'Explore how artificial intelligence is transforming the way we capture, analyze, and act on meeting insights in the modern workplace.',
    author: 'Puneet Yadav',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'AI & Technology',
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
  };

  const blogPosts = [
    {
      title: 'How Real-time Transcription is Changing Remote Work',
      excerpt: 'Discover the impact of real-time transcription technology on remote team collaboration and productivity.',
      author: 'Sarah Chen',
      date: '2025-01-12',
      readTime: '6 min read',
      category: 'Remote Work',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      title: 'Building Inclusive Meetings with AI Assistance',
      excerpt: 'Learn how AI-powered meeting tools can help create more inclusive and accessible workplace conversations.',
      author: 'Emily Rodriguez',
      date: '2025-01-10',
      readTime: '5 min read',
      category: 'Workplace Culture',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      title: 'The Science Behind Sentiment Analysis in Meetings',
      excerpt: 'A deep dive into how we use natural language processing to understand meeting dynamics and team sentiment.',
      author: 'Marcus Johnson',
      date: '2025-01-08',
      readTime: '7 min read',
      category: 'AI & Technology',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      title: 'Maximizing Meeting ROI with Action Item Tracking',
      excerpt: 'Best practices for turning meeting discussions into actionable outcomes that drive business results.',
      author: 'David Kim',
      date: '2025-01-05',
      readTime: '4 min read',
      category: 'Productivity',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      title: 'Enterprise Security in AI Meeting Platforms',
      excerpt: 'Understanding the security measures and compliance standards that protect your meeting data.',
      author: 'Lisa Wang',
      date: '2025-01-03',
      readTime: '6 min read',
      category: 'Security',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      title: 'Integration Strategies for Meeting Intelligence',
      excerpt: 'How to seamlessly integrate AI meeting tools into your existing workflow and tech stack.',
      author: 'Alex Thompson',
      date: '2025-01-01',
      readTime: '5 min read',
      category: 'Integrations',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Technology',
    'Remote Work',
    'Productivity',
    'Security',
    'Workplace Culture',
    'Integrations'
  ];

  return (
    <PageLayout 
      title="MeetGenie Blog"
      description="Insights, tips, and updates on AI-powered meeting intelligence and workplace productivity"
    >
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-2 mb-4">
                    <Tag className="h-4 w-4 text-purple-600" />
                    <span className="text-purple-600 font-semibold text-sm">{featuredPost.category}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <button className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-semibold">
                    <span>Read Full Article</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="lg:order-first">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Categories Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <button 
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Tag className="h-3 w-3 text-purple-600" />
                    <span className="text-purple-600 font-semibold text-xs">{post.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Load More Articles
            </button>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights on AI, meeting intelligence, and workplace productivity.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-3 sm:space-y-0 sm:space-x-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BlogPage;