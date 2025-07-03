import React from 'react';
import PageLayout from '../components/PageLayout';
import { Users, Award, Zap, Globe, Target, Heart, Lightbulb, Rocket } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We push the boundaries of AI technology to solve real workplace challenges and create meaningful impact.'
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'Every feature is designed with user experience and productivity in mind, ensuring maximum value delivery.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in accuracy, security, and performance across all our products.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Empowering teams worldwide to communicate more effectively and achieve better outcomes together.'
    }
  ];

  const team = [
    {
      name: 'Puneet Yadav',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
      bio: 'AI researcher and entrepreneur with 8+ years in machine learning and natural language processing.',
      linkedin: 'https://linkedin.com/in/puneetyadav'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
      bio: 'Former Google engineer specializing in real-time systems and scalable AI infrastructure.',
      linkedin: 'https://linkedin.com/in/sarahchen'
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of AI',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
      bio: 'PhD in Computer Science with expertise in speech recognition and natural language understanding.',
      linkedin: 'https://linkedin.com/in/marcusjohnson'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
      bio: 'Product leader with 10+ years building enterprise software and user-centered design.',
      linkedin: 'https://linkedin.com/in/emilyrodriguez'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Company Founded',
      description: 'MeetGenie was founded with a vision to transform meeting intelligence through AI'
    },
    {
      year: '2023',
      title: 'First Product Launch',
      description: 'Released our MVP with real-time transcription and basic summarization features'
    },
    {
      year: '2024',
      title: 'Series A Funding',
      description: 'Raised $10M Series A to accelerate product development and team growth'
    },
    {
      year: '2024',
      title: '10,000+ Users',
      description: 'Reached 10,000 active users across 500+ companies worldwide'
    },
    {
      year: '2024',
      title: 'Enterprise Launch',
      description: 'Launched enterprise features with advanced security and compliance'
    },
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Expanding to serve teams in 50+ countries with multilingual support'
    }
  ];

  return (
    <PageLayout 
      title="About MeetGenie"
      description="We're on a mission to transform how teams communicate and collaborate through AI-powered meeting intelligence"
    >
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission & Vision */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  MeetGenie was born from a simple observation: too much valuable information 
                  gets lost in meetings. Our team of AI researchers and product engineers 
                  came together to solve this fundamental workplace challenge.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Using cutting-edge technologies like Whisper for transcription, advanced 
                  NLP models for summarization, and real-time WebSocket connections, we've 
                  created the most comprehensive meeting intelligence platform available.
                </p>
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">2023</div>
                    <div className="text-sm text-gray-600">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">50+</div>
                    <div className="text-sm text-gray-600">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">10K+</div>
                    <div className="text-sm text-gray-600">Active Users</div>
                  </div>
                </div>
              </div>

              <div>
                <img 
                  src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do at MeetGenie
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The brilliant minds behind MeetGenie's AI-powered meeting intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Key milestones in MeetGenie's growth and evolution
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-purple-200"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="text-purple-600 font-bold text-lg mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Join Us CTA */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 text-center">
            <Rocket className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Mission
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for 
              transforming workplace communication through AI innovation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                View Open Positions
              </button>
              <button className="text-purple-600 px-8 py-3 rounded-lg border-2 border-purple-200 hover:border-purple-300 transition-colors">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;