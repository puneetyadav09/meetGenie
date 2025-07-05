import React from 'react';
import PageLayout from '../layouts/PageLayout';
import { MapPin, Clock, Users, Heart, Zap, Globe, Coffee, Laptop } from 'lucide-react';

const CareersPage = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      description: 'Lead the development of our AI models for speech recognition and natural language processing.',
      requirements: [
        '5+ years in machine learning and AI',
        'Experience with PyTorch/TensorFlow',
        'Strong background in NLP and speech processing',
        'PhD in Computer Science or related field preferred'
      ]
    },
    {
      title: 'Frontend Engineer',
      department: 'Engineering',
      location: 'Remote / New York',
      type: 'Full-time',
      description: 'Build beautiful, responsive user interfaces for our meeting intelligence platform.',
      requirements: [
        '3+ years in React and TypeScript',
        'Experience with modern CSS frameworks',
        'Strong understanding of web performance',
        'Experience with real-time applications'
      ]
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      description: 'Drive product strategy and roadmap for our enterprise meeting solutions.',
      requirements: [
        '4+ years in product management',
        'Experience with B2B SaaS products',
        'Strong analytical and communication skills',
        'Background in AI/ML products preferred'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Scale our infrastructure to handle millions of meeting minutes and real-time processing.',
      requirements: [
        '3+ years in DevOps and cloud infrastructure',
        'Experience with AWS, Docker, Kubernetes',
        'Strong background in monitoring and observability',
        'Experience with high-availability systems'
      ]
    },
    {
      title: 'Sales Development Representative',
      department: 'Sales',
      location: 'Remote / Austin',
      type: 'Full-time',
      description: 'Generate and qualify leads for our enterprise sales team.',
      requirements: [
        '1+ years in sales or business development',
        'Experience with B2B SaaS sales',
        'Strong communication and interpersonal skills',
        'Goal-oriented and self-motivated'
      ]
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time',
      description: 'Ensure our customers achieve maximum value from MeetGenie.',
      requirements: [
        '2+ years in customer success or account management',
        'Experience with enterprise software',
        'Strong problem-solving skills',
        'Excellent written and verbal communication'
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance plus wellness stipend'
    },
    {
      icon: Laptop,
      title: 'Remote-First',
      description: 'Work from anywhere with flexible hours and home office setup allowance'
    },
    {
      icon: Zap,
      title: 'Learning & Growth',
      description: 'Annual learning budget, conference attendance, and mentorship programs'
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Unlimited PTO, mental health days, and company-wide recharge weeks'
    },
    {
      icon: Users,
      title: 'Equity & Ownership',
      description: 'Competitive equity package so you can share in our success'
    },
    {
      icon: Globe,
      title: 'Global Team',
      description: 'Work with talented people from around the world in an inclusive environment'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We encourage experimentation and bold thinking to solve complex problems'
    },
    {
      title: 'Collaboration',
      description: 'We believe the best solutions come from diverse perspectives working together'
    },
    {
      title: 'Transparency',
      description: 'We share information openly and communicate with honesty and clarity'
    },
    {
      title: 'Growth',
      description: 'We invest in each other\'s development and celebrate learning from failures'
    }
  ];

  return (
    <PageLayout 
      title="Join Our Team"
      description="Help us transform the future of workplace communication with AI-powered meeting intelligence"
    >
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Why Work Here */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work at MeetGenie?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join a team of passionate innovators building the future of AI-powered workplace communication
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">$10M</div>
                  <div className="text-gray-600">Series A Funding</div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Benefits & Perks
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We believe in taking care of our team so they can do their best work
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find your next opportunity to make an impact
              </p>
            </div>

            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{position.department}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{position.location}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{position.type}</span>
                        </span>
                      </div>
                    </div>
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors mt-4 md:mt-0">
                      Apply Now
                    </button>
                  </div>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Application Process */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Hiring Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We've designed our process to be transparent, efficient, and respectful of your time
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Application</h3>
                <p className="text-gray-600 text-sm">Submit your application and we'll review it within 48 hours</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Screen</h3>
                <p className="text-gray-600 text-sm">30-minute call to discuss your background and the role</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Interview</h3>
                <p className="text-gray-600 text-sm">Role-specific technical assessment and team interviews</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Final Interview</h3>
                <p className="text-gray-600 text-sm">Meet with leadership and discuss culture fit</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't See the Right Role?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for exceptional talent. Send us your resume and tell us how you'd like to contribute to MeetGenie's mission.
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Send Us Your Resume
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CareersPage;