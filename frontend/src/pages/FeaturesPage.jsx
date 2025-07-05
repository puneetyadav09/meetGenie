import React from 'react';
import PageLayout from '../layouts/PageLayout';
import { Mic, Brain, Users, Clock, FileText, Zap, Globe, Shield, Search, BarChart, Calendar, MessageSquare } from 'lucide-react';

const FeaturesPage = () => {
  const features = [
    {
      icon: Mic,
      title: 'Real-time Transcription',
      description: 'Advanced AI transcription with speaker identification and 99% accuracy using Whisper technology.',
      details: [
        'Multi-language support for global teams',
        'Speaker identification and labeling',
        'Real-time processing with minimal latency',
        'Custom vocabulary for technical terms'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Brain,
      title: 'AI Summarization',
      description: 'Intelligent meeting summaries powered by advanced NLP models like T5 and BART.',
      details: [
        'Key points extraction and organization',
        'Context-aware summary generation',
        'Customizable summary length and detail',
        'Topic clustering and categorization'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Zap,
      title: 'Action Item Detection',
      description: 'Automatically identify and extract action items, deadlines, and responsibilities.',
      details: [
        'Smart task identification from conversations',
        'Automatic deadline extraction',
        'Assignee detection and notification',
        'Priority level assessment'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Users,
      title: 'Sentiment Analysis',
      description: 'Monitor meeting tone and participant engagement with VADER sentiment analysis.',
      details: [
        'Real-time emotion tracking',
        'Engagement level monitoring',
        'Team dynamics insights',
        'Conflict detection and alerts'
      ],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'WebSocket-powered live updates with instant transcription and analysis.',
      details: [
        'Live transcription streaming',
        'Instant summary updates',
        'Real-time collaboration features',
        'Synchronized multi-device access'
      ],
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'Meeting Minutes',
      description: 'Auto-generated professional meeting minutes with key decisions and outcomes.',
      details: [
        'Structured minute formatting',
        'Decision tracking and documentation',
        'Outcome summarization',
        'Professional template options'
      ],
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Powerful search across all meetings with semantic understanding.',
      details: [
        'Natural language search queries',
        'Cross-meeting content discovery',
        'Contextual result ranking',
        'Advanced filtering options'
      ],
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights into meeting patterns and productivity metrics.',
      details: [
        'Meeting frequency and duration analysis',
        'Participation rate tracking',
        'Productivity trend visualization',
        'Custom reporting capabilities'
      ],
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      icon: Calendar,
      title: 'Calendar Integration',
      description: 'Seamless integration with popular calendar platforms.',
      details: [
        'Google Calendar synchronization',
        'Outlook integration support',
        'Automatic meeting scheduling',
        'Pre-meeting preparation reminders'
      ],
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50'
    },
    {
      icon: MessageSquare,
      title: 'Team Collaboration',
      description: 'Enhanced collaboration tools for distributed teams.',
      details: [
        'Shared meeting workspaces',
        'Collaborative note-taking',
        'Team member tagging',
        'Follow-up task assignment'
      ],
      color: 'text-violet-600',
      bgColor: 'bg-violet-50'
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Support for multiple languages with accurate transcription and translation.',
      details: [
        '50+ language support',
        'Real-time translation capabilities',
        'Cultural context awareness',
        'Accent and dialect recognition'
      ],
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'End-to-end encryption with SOC 2 compliance and data privacy protection.',
      details: [
        'AES-256 encryption at rest and in transit',
        'SOC 2 Type II compliance',
        'GDPR and CCPA compliance',
        'Role-based access controls'
      ],
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    }
  ];

  return (
    <PageLayout 
      title="Powerful Features for Better Meetings"
      description="Discover how MeetGenie's AI-powered features transform every conversation into actionable insights"
    >
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Start your free trial today and see how MeetGenie can transform your meetings
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="text-purple-600 px-8 py-4 rounded-lg border-2 border-purple-200 hover:border-purple-300 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FeaturesPage;