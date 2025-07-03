import React from 'react';
import { Users, Award, Zap, Globe } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We push the boundaries of AI technology to solve real workplace challenges.'
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'Every feature is designed with user experience and productivity in mind.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in accuracy, security, and performance.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Empowering teams worldwide to communicate more effectively.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Revolutionizing Meeting Intelligence
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
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">2023</div>
                <div className="text-sm text-gray-600">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">100+</div>
                <div className="text-sm text-gray-600">Enterprise Clients</div>
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

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
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
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Mission
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We're always looking for talented individuals who share our passion for 
              transforming workplace communication through AI innovation.
            </p>
            <button disabled className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors cursor-not-allowed">
              Hiring Closed
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;