import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Home, ArrowLeft, Search, HelpCircle } from 'lucide-react';
import PageLayout from '../layouts/PageLayout';

const NotFoundPage = () => {
  const suggestions = [
    {
      icon: Home,
      title: 'Go Home',
      description: 'Return to the main page',
      link: '/',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Search,
      title: 'Features',
      description: 'Explore our AI features',
      link: '/features',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: HelpCircle,
      title: 'Contact Support',
      description: 'Get help from our team',
      link: '/contact',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center space-x-2">
            <Bot className="h-12 w-12 text-purple-600" />
            <span className="text-2xl font-bold text-gray-900">MeetGenie</span>
          </Link>
        </div>

        {/* 404 Animation */}
        <div className="mb-8">
          <div className="relative">
            <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 opacity-20 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
                <Bot className="h-12 w-12 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            The page you're looking for seems to have vanished into the digital void. 
            Don't worry, even our AI gets lost sometimes!
          </p>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
            <p className="text-sm text-gray-500 mb-2">🤖 MeetGenie AI says:</p>
            <p className="text-gray-700 italic">
              "I've analyzed this situation and determined that this page doesn't exist. 
              But I found some great alternatives below!"
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {suggestions.map((suggestion, index) => (
            <Link
              key={index}
              to={suggestion.link}
              className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 ${suggestion.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <suggestion.icon className={`h-6 w-6 ${suggestion.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{suggestion.title}</h3>
              <p className="text-gray-600 text-sm">{suggestion.description}</p>
            </Link>
          ))}
        </div>

        {/* Back Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Go Back</span>
          </button>
          <span className="text-gray-400 hidden sm:block">|</span>
          <Link
            to="/"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Take Me Home
          </Link>
        </div>

        {/* Fun Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            While you're here, check out what MeetGenie has accomplished:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">10,000+</div>
              <div className="text-sm text-gray-600">Meetings Transcribed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">50M+</div>
              <div className="text-sm text-gray-600">Words Processed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">99.2%</div>
              <div className="text-sm text-gray-600">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600">AI Availability</div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Error Code: 404 | If this problem persists, please{' '}
            <Link to="/contact" className="text-purple-600 hover:text-purple-700 underline">
              contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
    </PageLayout>
  );
};

export default NotFoundPage;