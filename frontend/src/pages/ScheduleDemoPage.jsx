import React, { useState } from 'react';
import PageLayout from '../layouts/PageLayout'
import { Calendar, Clock, Users, Video, CheckCircle, ArrowRight } from 'lucide-react';

const ScheduleDemoPage = () => {
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    teamSize: '',
    useCase: '',
    questions: ''
  });

  const timeSlots = [
    '9:00 AM PST',
    '10:00 AM PST',
    '11:00 AM PST',
    '1:00 PM PST',
    '2:00 PM PST',
    '3:00 PM PST',
    '4:00 PM PST'
  ];

  const dates = [
    { date: '2025-01-20', day: 'Monday', available: true },
    { date: '2025-01-21', day: 'Tuesday', available: true },
    { date: '2025-01-22', day: 'Wednesday', available: false },
    { date: '2025-01-23', day: 'Thursday', available: true },
    { date: '2025-01-24', day: 'Friday', available: true }
  ];

  const demoFeatures = [
    {
      icon: Video,
      title: 'Live AI Transcription',
      description: 'See real-time speech-to-text with speaker identification'
    },
    {
      icon: Users,
      title: 'Smart Summarization',
      description: 'Watch AI generate intelligent meeting summaries'
    },
    {
      icon: CheckCircle,
      title: 'Action Item Detection',
      description: 'Automatic extraction of tasks and follow-ups'
    },
    {
      icon: Calendar,
      title: 'Integration Demo',
      description: 'See how MeetGenie works with your existing tools'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle demo scheduling
    console.log('Demo scheduled:', { ...formData, selectedTime });
  };

  return (
    <PageLayout 
      title="Schedule a Demo"
      description="See MeetGenie in action with a personalized demo tailored to your team's needs"
    >
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Demo Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                See MeetGenie in Action
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Book a 30-minute personalized demo to see how MeetGenie can transform your team's meeting productivity. 
                Our experts will show you the platform and answer all your questions.
              </p>

              {/* What You'll See */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What You'll See in the Demo</h3>
                <div className="space-y-4">
                  {demoFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Demo Details */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Demo Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">30 minutes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Video className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">Via Zoom or Google Meet</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">Bring your team (up to 10 people)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">Personalized to your use case</span>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-8 bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <img 
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face"
                    alt="Customer"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-gray-600 text-sm mb-2">
                      "The demo showed us exactly how MeetGenie could solve our meeting productivity challenges. 
                      We signed up immediately after seeing it in action."
                    </p>
                    <div className="text-sm">
                      <span className="font-semibold text-gray-900">Sarah Chen</span>
                      <span className="text-gray-500"> - Product Manager, TechStart Inc.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scheduling Form */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Demo</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Product Manager"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-2">
                    Team Size
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select team size</option>
                    <option value="1-10">1-10 people</option>
                    <option value="11-50">11-50 people</option>
                    <option value="51-200">51-200 people</option>
                    <option value="201-1000">201-1000 people</option>
                    <option value="1000+">1000+ people</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Use Case
                  </label>
                  <select
                    id="useCase"
                    name="useCase"
                    value={formData.useCase}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select primary use case</option>
                    <option value="team-meetings">Team Meetings</option>
                    <option value="client-calls">Client Calls</option>
                    <option value="interviews">Interviews</option>
                    <option value="training">Training Sessions</option>
                    <option value="all-hands">All-Hands Meetings</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Preferred Date
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {dates.map((date, index) => (
                      <button
                        key={index}
                        type="button"
                        disabled={!date.available}
                        className={`p-3 text-center rounded-lg border text-sm ${
                          date.available
                            ? 'border-gray-300 hover:border-purple-500 hover:bg-purple-50'
                            : 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <div className="font-medium">{date.day}</div>
                        <div className="text-xs">{date.date.split('-')[2]}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Preferred Time
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 text-center rounded-lg border text-sm ${
                          selectedTime === time
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-300 hover:border-purple-500 hover:bg-purple-50'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="questions" className="block text-sm font-medium text-gray-700 mb-2">
                    Questions or Special Requests
                  </label>
                  <textarea
                    id="questions"
                    name="questions"
                    rows={3}
                    value={formData.questions}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Any specific features you'd like to see or questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Schedule Demo</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                By scheduling a demo, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ScheduleDemoPage;