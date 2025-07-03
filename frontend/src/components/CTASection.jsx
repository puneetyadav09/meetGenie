import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="h-4 w-4" />
              <span>Transform Your Meetings Today</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Make Every
            <br />
            Meeting Count?
          </h2>
          
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of teams already using MeetGenie to capture insights, 
            streamline follow-ups, and boost productivity in every conversation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Link 
              to="/signup" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              to="/schedule-demo"
              className="flex items-center space-x-2 text-white px-8 py-4 rounded-lg border-2 border-white/30 hover:border-white/50 transition-all"
            >
              <span>Schedule Demo</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">⚡</div>
              <div className="text-white font-semibold mb-1">Instant Setup</div>
              <div className="text-purple-200 text-sm">Get started in under 2 minutes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">🔒</div>
              <div className="text-white font-semibold mb-1">Enterprise Security</div>
              <div className="text-purple-200 text-sm">SOC 2 compliant & encrypted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">🎯</div>
              <div className="text-white font-semibold mb-1">99% Accuracy</div>
              <div className="text-purple-200 text-sm">Industry-leading AI precision</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;