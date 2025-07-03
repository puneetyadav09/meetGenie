import React from 'react';
import PageLayout from '../components/PageLayout';
import { Code, Key, Zap, Shield, Book, Terminal } from 'lucide-react';

const APIPage = () => {
  const endpoints = [
    {
      method: 'POST',
      endpoint: '/api/meetings',
      description: 'Create a new meeting session',
      example: `{
  "title": "Team Standup",
  "participants": ["user1", "user2"],
  "settings": {
    "transcription": true,
    "summarization": true
  }
}`
    },
    {
      method: 'GET',
      endpoint: '/api/meetings/{id}',
      description: 'Retrieve meeting details and transcript',
      example: `{
  "id": "meeting_123",
  "title": "Team Standup",
  "transcript": "...",
  "summary": "...",
  "action_items": [...]
}`
    },
    {
      method: 'POST',
      endpoint: '/api/transcribe',
      description: 'Transcribe audio file or stream',
      example: `{
  "audio_url": "https://...",
  "language": "en-US",
  "speaker_detection": true
}`
    },
    {
      method: 'GET',
      endpoint: '/api/analytics',
      description: 'Get meeting analytics and insights',
      example: `{
  "total_meetings": 47,
  "total_duration": 1250,
  "avg_participants": 5.2,
  "sentiment_trends": {...}
}`
    }
  ];

  const sdks = [
    {
      name: 'JavaScript/Node.js',
      icon: '🟨',
      install: 'npm install meetgenie-sdk',
      example: `import MeetGenie from 'meetgenie-sdk';

const client = new MeetGenie({
  apiKey: 'your-api-key'
});

const meeting = await client.meetings.create({
  title: 'Team Meeting'
});`
    },
    {
      name: 'Python',
      icon: '🐍',
      install: 'pip install meetgenie-python',
      example: `import meetgenie

client = meetgenie.Client(api_key='your-api-key')

meeting = client.meetings.create(
    title='Team Meeting'
)`
    },
    {
      name: 'cURL',
      icon: '🌐',
      install: 'Available by default',
      example: `curl -X POST https://api.meetgenie.com/v1/meetings \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{"title": "Team Meeting"}'`
    }
  ];

  return (
    <PageLayout 
      title="MeetGenie API"
      description="Integrate AI-powered meeting intelligence into your applications with our comprehensive REST API"
    >
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Getting Started */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Getting Started</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <Key className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Get API Key</h3>
                <p className="text-gray-600 text-sm">Sign up and generate your API key from the dashboard</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <Code className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Make Requests</h3>
                <p className="text-gray-600 text-sm">Use our REST API or SDKs to integrate with your app</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <Zap className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Go Live</h3>
                <p className="text-gray-600 text-sm">Deploy your integration and start processing meetings</p>
              </div>
            </div>
          </div>

          {/* API Endpoints */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">API Endpoints</h2>
            <div className="space-y-6">
              {endpoints.map((endpoint, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-lg font-mono text-gray-900">{endpoint.endpoint}</code>
                    </div>
                    <p className="text-gray-600">{endpoint.description}</p>
                  </div>
                  <div className="p-6 bg-gray-50">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Example Response:</h4>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                      <code>{endpoint.example}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SDKs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">SDKs & Libraries</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sdks.map((sdk, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl">{sdk.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-900">{sdk.name}</h3>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Installation:</h4>
                    <code className="bg-gray-100 px-3 py-1 rounded text-sm">{sdk.install}</code>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Example:</h4>
                    <pre className="bg-gray-900 text-green-400 p-3 rounded text-xs overflow-x-auto">
                      <code>{sdk.example}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">API Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <Shield className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• API key authentication</li>
                  <li>• Rate limiting protection</li>
                  <li>• 99.9% uptime SLA</li>
                  <li>• End-to-end encryption</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <Zap className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast & Scalable</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Real-time processing</li>
                  <li>• Global CDN distribution</li>
                  <li>• Auto-scaling infrastructure</li>
                  <li>• Webhook notifications</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Documentation CTA */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 text-center">
            <Book className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Complete Documentation
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Explore our comprehensive API documentation with detailed examples, tutorials, and best practices.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center space-x-2">
                <Book className="h-5 w-5" />
                <span>View Documentation</span>
              </button>
              <button className="text-purple-600 px-8 py-3 rounded-lg border-2 border-purple-200 hover:border-purple-300 transition-colors flex items-center space-x-2">
                <Terminal className="h-5 w-5" />
                <span>Try in Playground</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default APIPage;