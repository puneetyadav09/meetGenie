import React from 'react';
import { Mic, Brain, Users, Clock, FileText, Zap, Globe, Shield } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Mic,
      title: 'Real-time Transcription',
      description: 'Advanced AI transcription with speaker identification and 99% accuracy using Whisper technology.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Brain,
      title: 'AI Summarization',
      description: 'Intelligent meeting summaries powered by advanced NLP models like T5 and BART.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Zap,
      title: 'Action Item Detection',
      description: 'Automatically identify and extract action items, deadlines, and responsibilities.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Users,
      title: 'Sentiment Analysis',
      description: 'Monitor meeting tone and participant engagement with VADER sentiment analysis.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'WebSocket-powered live updates with instant transcription and analysis.',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'Meeting Minutes',
      description: 'Auto-generated professional meeting minutes with key decisions and outcomes.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Support for multiple languages with accurate transcription and translation.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'End-to-end encryption with SOC 2 compliance and data privacy protection.',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Better Meetings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform every conversation into actionable insights with our comprehensive AI-powered toolkit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by 10,000+ Teams Worldwide
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-lg font-semibold text-gray-700">Startup Inc.</div>
              <div className="text-lg font-semibold text-gray-700">Tech Corp</div>
              <div className="text-lg font-semibold text-gray-700">Innovation Labs</div>
              <div className="text-lg font-semibold text-gray-700">Global Enterprises</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;