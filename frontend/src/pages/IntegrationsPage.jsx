import React from 'react';
import PageLayout from '../components/PageLayout';
import { Zap, Calendar, MessageSquare, Mail, FileText, Video, Slack, Chrome } from 'lucide-react';

const IntegrationsPage = () => {
  const integrations = [
    {
      name: 'Slack',
      icon: Slack,
      description: 'Get meeting summaries and action items delivered directly to your Slack channels',
      features: ['Automatic summary posting', 'Action item notifications', 'Team mentions', 'Custom channels'],
      status: 'Available',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      name: 'Google Calendar',
      icon: Calendar,
      description: 'Seamlessly integrate with Google Calendar for automatic meeting scheduling',
      features: ['Auto-sync meetings', 'Pre-meeting prep', 'Calendar invites', 'Timezone handling'],
      status: 'Available',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Microsoft Teams',
      icon: Video,
      description: 'Native integration with Microsoft Teams for enterprise workflows',
      features: ['Teams bot integration', 'Channel notifications', 'File sharing', 'SSO support'],
      status: 'Available',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      name: 'Zoom',
      icon: Video,
      description: 'Direct integration with Zoom meetings for automatic recording and transcription',
      features: ['Auto-join meetings', 'Cloud recording sync', 'Participant tracking', 'Breakout room support'],
      status: 'Available',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Notion',
      icon: FileText,
      description: 'Export meeting notes and action items directly to your Notion workspace',
      features: ['Page creation', 'Database integration', 'Template support', 'Collaborative editing'],
      status: 'Available',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    },
    {
      name: 'Gmail',
      icon: Mail,
      description: 'Send meeting summaries and follow-ups via Gmail integration',
      features: ['Email summaries', 'Action item reminders', 'Template customization', 'Scheduling'],
      status: 'Available',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      name: 'Salesforce',
      icon: FileText,
      description: 'Sync meeting data with Salesforce CRM for better customer relationship management',
      features: ['Contact sync', 'Opportunity tracking', 'Custom fields', 'Workflow automation'],
      status: 'Coming Soon',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      name: 'Chrome Extension',
      icon: Chrome,
      description: 'Browser extension for quick access to MeetGenie features',
      features: ['One-click recording', 'Tab integration', 'Quick summaries', 'Keyboard shortcuts'],
      status: 'Beta',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    }
  ];

  const workflows = [
    {
      title: 'Sales Team Workflow',
      description: 'Automatically capture client calls, extract action items, and update CRM records',
      steps: [
        'Join client call via Zoom integration',
        'MeetGenie transcribes and analyzes conversation',
        'Action items are extracted and assigned',
        'Summary is sent to Slack sales channel',
        'CRM is updated with meeting notes'
      ]
    },
    {
      title: 'Product Team Workflow',
      description: 'Streamline product meetings with automatic documentation and task creation',
      steps: [
        'Schedule meeting via Google Calendar',
        'MeetGenie joins and records the session',
        'Key decisions and features are identified',
        'Tasks are created in project management tool',
        'Meeting notes are saved to Notion'
      ]
    },
    {
      title: 'Executive Workflow',
      description: 'Keep leadership informed with executive summaries and key insights',
      steps: [
        'Attend strategic planning meeting',
        'AI identifies key decisions and risks',
        'Executive summary is generated',
        'Action items are assigned to team leads',
        'Follow-up reminders are scheduled'
      ]
    }
  ];

  return (
    <PageLayout 
      title="Powerful Integrations"
      description="Connect MeetGenie with your favorite tools and streamline your workflow"
    >
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Integrations Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Available Integrations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {integrations.map((integration, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${integration.bgColor} rounded-xl flex items-center justify-center`}>
                      <integration.icon className={`h-6 w-6 ${integration.color}`} />
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      integration.status === 'Available' 
                        ? 'bg-green-100 text-green-800'
                        : integration.status === 'Beta'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {integration.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{integration.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{integration.description}</p>
                  <ul className="space-y-1">
                    {integration.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-500 flex items-center space-x-2">
                        <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Workflow Examples */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Workflow Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {workflows.map((workflow, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{workflow.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{workflow.description}</p>
                  <div className="space-y-3">
                    {workflow.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-purple-600 font-semibold text-xs">{stepIndex + 1}</span>
                        </div>
                        <span className="text-sm text-gray-600">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Integration Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Integrate?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Automation</h3>
                <p className="text-gray-600 text-sm">Reduce manual work with automated workflows</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Communication</h3>
                <p className="text-gray-600 text-sm">Keep teams aligned with instant notifications</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
                <p className="text-gray-600 text-sm">Centralize meeting data in your preferred tools</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Scheduling</h3>
                <p className="text-gray-600 text-sm">Seamless calendar and meeting management</p>
              </div>
            </div>
          </div>

          {/* Custom Integration CTA */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Integration?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We work with enterprise customers to build custom integrations with your existing tools and workflows.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Request Integration
              </button>
              <button className="text-purple-600 px-8 py-3 rounded-lg border-2 border-purple-200 hover:border-purple-300 transition-colors">
                View API Docs
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default IntegrationsPage;