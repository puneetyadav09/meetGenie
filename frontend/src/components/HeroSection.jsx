import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Mic, Brain, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="h-4 w-4" />
              <span>AI-Powered Meeting Intelligence</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Meetings with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              {' '}AI Magic
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Real-time transcription, intelligent summarization, and automatic action item detection. 
            Never miss important details again with MeetGenie's AI-powered meeting assistant.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Link 
              to="/signup" 
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Free Trial
            </Link>
            <button className="flex items-center space-x-2 text-gray-700 px-8 py-4 rounded-lg border-2 border-gray-200 hover:border-purple-300 transition-all">
              <Play className="h-5 w-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="ml-4 text-sm text-gray-600">MeetGenie Dashboard</span>
                </div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                    <Mic className="h-8 w-8 text-purple-600 mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Live Transcription</h3>
                    <p className="text-sm text-gray-600">Real-time speech-to-text with 99% accuracy</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                    <Brain className="h-8 w-8 text-blue-600 mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">AI Summarization</h3>
                    <p className="text-sm text-gray-600">Intelligent meeting summaries and insights</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                    <Zap className="h-8 w-8 text-green-600 mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Action Items</h3>
                    <p className="text-sm text-gray-600">Automatic task detection and assignment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;