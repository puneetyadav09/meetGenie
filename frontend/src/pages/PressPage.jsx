import React from 'react';
import PageLayout from '../components/PageLayout';
import { Calendar, Download, ExternalLink, Award, Newspaper, Users } from 'lucide-react';

const PressPage = () => {
  const pressReleases = [
    {
      title: 'MeetGenie Raises $10M Series A to Accelerate AI Meeting Intelligence Platform',
      date: '2024-12-15',
      excerpt: 'Leading venture capital firms invest in MeetGenie\'s vision to transform workplace communication through advanced AI technology.',
      category: 'Funding',
      link: '#'
    },
    {
      title: 'MeetGenie Launches Enterprise Security Features for Fortune 500 Companies',
      date: '2024-11-20',
      excerpt: 'New SOC 2 compliance and advanced security controls enable large enterprises to adopt AI-powered meeting intelligence.',
      category: 'Product',
      link: '#'
    },
    {
      title: 'MeetGenie Reaches 10,000 Active Users Milestone',
      date: '2024-10-10',
      excerpt: 'Rapid growth demonstrates strong market demand for AI-powered meeting transcription and analysis solutions.',
      category: 'Milestone',
      link: '#'
    },
    {
      title: 'MeetGenie Partners with Microsoft Teams for Native Integration',
      date: '2024-09-05',
      excerpt: 'Strategic partnership brings AI meeting intelligence directly into Microsoft Teams workflow for enterprise customers.',
      category: 'Partnership',
      link: '#'
    }
  ];

  const mediaKit = [
    {
      title: 'Company Logo Pack',
      description: 'High-resolution logos in various formats and color schemes',
      type: 'ZIP',
      size: '2.5 MB'
    },
    {
      title: 'Product Screenshots',
      description: 'High-quality screenshots of MeetGenie interface and features',
      type: 'ZIP',
      size: '8.1 MB'
    },
    {
      title: 'Executive Headshots',
      description: 'Professional photos of MeetGenie leadership team',
      type: 'ZIP',
      size: '12.3 MB'
    },
    {
      title: 'Company Fact Sheet',
      description: 'Key statistics, milestones, and company information',
      type: 'PDF',
      size: '1.2 MB'
    }
  ];

  const mediaFeatures = [
    {
      publication: 'TechCrunch',
      title: 'How MeetGenie is Using AI to Make Meetings More Productive',
      date: '2024-12-20',
      type: 'Feature Article',
      link: '#'
    },
    {
      publication: 'Forbes',
      title: 'The Future of Remote Work: AI-Powered Meeting Intelligence',
      date: '2024-11-15',
      type: 'Opinion Piece',
      link: '#'
    },
    {
      publication: 'VentureBeat',
      title: 'MeetGenie\'s AI Transcription Accuracy Reaches 99.2%',
      date: '2024-10-25',
      type: 'News Article',
      link: '#'
    },
    {
      publication: 'The Wall Street Journal',
      title: 'Startups Race to Solve the Meeting Productivity Crisis',
      date: '2024-09-30',
      type: 'Industry Analysis',
      link: '#'
    }
  ];

  const awards = [
    {
      title: 'Best AI Startup 2024',
      organization: 'AI Excellence Awards',
      date: '2024-11-01',
      description: 'Recognized for innovation in natural language processing and meeting intelligence'
    },
    {
      title: 'Top 50 SaaS Companies to Watch',
      organization: 'SaaS Weekly',
      date: '2024-08-15',
      description: 'Selected as one of the most promising B2B SaaS companies of 2024'
    },
    {
      title: 'Innovation in Workplace Technology',
      organization: 'Remote Work Association',
      date: '2024-06-20',
      description: 'Honored for advancing remote work productivity through AI technology'
    }
  ];

  return (
    <PageLayout 
      title="Press & Media"
      description="Latest news, press releases, and media resources for MeetGenie"
    >
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Press Releases */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Press Releases
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Latest announcements and company news
              </p>
            </div>

            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          release.category === 'Funding' ? 'bg-green-100 text-green-800' :
                          release.category === 'Product' ? 'bg-blue-100 text-blue-800' :
                          release.category === 'Partnership' ? 'bg-purple-100 text-purple-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {release.category}
                        </span>
                        <div className="flex items-center space-x-1 text-gray-500 text-sm">
                          <Calendar className="h-4 w-4" />
                          <span>{release.date}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{release.title}</h3>
                      <p className="text-gray-600">{release.excerpt}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <a 
                        href={release.link}
                        className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-semibold"
                      >
                        <span>Read More</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Media Coverage */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Media Coverage
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                What the media is saying about MeetGenie
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mediaFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Newspaper className="h-5 w-5 text-purple-600" />
                        <span className="font-semibold text-purple-600">{feature.publication}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{feature.type}</span>
                        <span>{feature.date}</span>
                      </div>
                    </div>
                    <a 
                      href={feature.link}
                      className="text-purple-600 hover:text-purple-700"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Awards & Recognition
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Industry recognition for our innovation and impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{award.title}</h3>
                  <p className="text-purple-600 font-medium mb-2">{award.organization}</p>
                  <p className="text-sm text-gray-500 mb-3">{award.date}</p>
                  <p className="text-gray-600 text-sm">{award.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Media Kit */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Media Kit
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Download high-quality assets and company information
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mediaKit.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Download className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{item.type}</span>
                    <span>{item.size}</span>
                  </div>
                  <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 text-center">
            <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Media Inquiries
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              For press inquiries, interview requests, or additional information, please contact our media relations team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Contact Press Team
              </button>
              <a 
                href="mailto:press@meetgenie.com"
                className="text-purple-600 px-8 py-3 rounded-lg border-2 border-purple-200 hover:border-purple-300 transition-colors"
              >
                press@meetgenie.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PressPage;