import React from 'react';
import { ArrowRight, Play, Bot, FileCheck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: Play,
      title: 'Start Your Meeting',
      description: 'Launch MeetGenie and connect to your meeting platform or upload audio files.',
      color: 'bg-purple-600'
    },
    {
      step: 2,
      icon: Bot,
      title: 'AI Analyzes in Real-time',
      description: 'Our AI transcribes, summarizes, and extracts insights as your meeting progresses.',
      color: 'bg-blue-600'
    },
    {
      step: 3,
      icon: FileCheck,
      title: 'Get Instant Results',
      description: 'Receive meeting minutes, action items, and follow-ups delivered instantly.',
      color: 'bg-green-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How MeetGenie Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three simple steps to transform your meetings from chaos to clarity
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-transform`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="mb-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full font-bold text-gray-700">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full transform -translate-y-1/2 -translate-x-6">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              See MeetGenie in Action
            </h3>
            <p className="text-gray-600">
              Watch how our AI transforms a typical meeting into actionable insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Live Transcription</h4>
                  <p className="text-gray-600 text-sm">Words appear instantly as participants speak</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Smart Analysis</h4>
                  <p className="text-gray-600 text-sm">AI identifies key topics and decisions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-semibold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Instant Delivery</h4>
                  <p className="text-gray-600 text-sm">Summaries and action items sent immediately</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-xs text-gray-500 mb-2">Live Transcription</div>
                <div className="text-sm text-gray-800 mb-4">
                  "Let's discuss the Q4 marketing campaign. We need to finalize the budget by Friday..."
                </div>
                <div className="border-t pt-4">
                  <div className="text-xs text-green-600 font-semibold mb-1">Action Item Detected</div>
                  <div className="text-sm text-gray-700">📋 Finalize Q4 marketing budget - Due: Friday - Assigned: Marketing Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;