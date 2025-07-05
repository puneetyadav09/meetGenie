import React, { useState } from 'react';
import { Bot, Plus, Search, Calendar, Clock, Users, FileText, Settings, Bell, LogOut, Mic, MicOff, Play, Pause, Download } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from "../utils/auth";


const Dashboard = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();        
    navigate("/login"); 
  };

  const recentMeetings = [
    {
      id: 1,
      title: 'Q4 Marketing Strategy',
      date: '2025-01-15',
      time: '10:00 AM',
      duration: '45 min',
      participants: 8,
      status: 'completed',
      summary: 'Discussed campaign objectives, budget allocation, and timeline for Q4 initiatives.'
    },
    {
      id: 2,
      title: 'Product Roadmap Review',
      date: '2025-01-14',
      time: '2:30 PM',
      duration: '60 min',
      participants: 12,
      status: 'completed',
      summary: 'Reviewed feature priorities, technical requirements, and delivery milestones.'
    },
    {
      id: 3,
      title: 'Weekly Team Standup',
      date: '2025-01-13',
      time: '9:00 AM',
      duration: '30 min',
      participants: 6,
      status: 'completed',
      summary: 'Sprint progress updates, blocker discussions, and week planning.'
    }
  ];

  const actionItems = [
    { id: 1, text: 'Finalize Q4 marketing budget', assignee: 'Sarah Chen', due: '2025-01-18' },
    { id: 2, text: 'Create technical specification document', assignee: 'Marcus Johnson', due: '2025-01-20' },
    { id: 3, text: 'Schedule user research sessions', assignee: 'Emily Rodriguez', due: '2025-01-22' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <Bot className="h-8 w-8 text-purple-600" />
                <span className="text-xl font-bold text-gray-900">MeetGenie</span>
              </Link>
              <div className="relative">
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search meetings..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent w-64"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Settings className="h-6 w-6" />
              </button>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=face"
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
              <button onClick={handleLogout} className="p-2 text-gray-400 hover:text-gray-600">
                <LogOut className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Manage your meetings and capture every important moment with AI.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Meetings</p>
                <p className="text-2xl font-bold text-gray-900">47</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Hours Saved</p>
                <p className="text-2xl font-bold text-gray-900">32.5</p>
              </div>
              <Clock className="h-8 w-8 text-green-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Action Items</p>
                <p className="text-2xl font-bold text-gray-900">18</p>
              </div>
              <FileText className="h-8 w-8 text-purple-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Team Members</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <Users className="h-8 w-8 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Live Recording Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Record</h2>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${isRecording ? 'bg-red-500' : 'bg-purple-600'} rounded-full flex items-center justify-center mx-auto mb-4 ${isRecording ? 'animate-pulse' : ''}`}>
                    {isRecording ? (
                      <MicOff className="h-8 w-8 text-white" />
                    ) : (
                      <Mic className="h-8 w-8 text-white" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {isRecording ? 'Recording in Progress' : 'Start Recording'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {isRecording ? 'AI is transcribing your meeting in real-time' : 'Click to begin recording your meeting'}
                  </p>
                </div>
                
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => setIsRecording(!isRecording)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                      isRecording 
                        ? 'bg-red-600 text-white hover:bg-red-700' 
                        : 'bg-purple-600 text-white hover:bg-purple-700'
                    }`}
                  >
                    {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                    <span>{isRecording ? 'Stop Recording' : 'Start Recording'}</span>
                  </button>
                </div>

                {isRecording && (
                  <div className="mt-6 bg-white rounded-lg p-4">
                    <div className="text-xs text-gray-500 mb-2">Live Transcription</div>
                    <div className="text-sm text-gray-800 mb-4">
                      "Welcome everyone to today's meeting. Let's start by reviewing our quarterly objectives and discussing the upcoming product launch..."
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Recording: 00:02:15</span>
                      <span>Words: 127</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Recent Meetings */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Recent Meetings</h2>
                <button className="flex items-center space-x-2 text-purple-600 hover:text-purple-700">
                  <Plus className="h-4 w-4" />
                  <span>New Meeting</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {recentMeetings.map((meeting) => (
                  <div key={meeting.id} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{meeting.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{meeting.date}</span>
                          <span>{meeting.time}</span>
                          <span>{meeting.duration}</span>
                          <span>{meeting.participants} participants</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{meeting.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Action Items */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Action Items</h3>
              <div className="space-y-3">
                {actionItems.map((item) => (
                  <div key={item.id} className="flex items-start space-x-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 text-purple-600 rounded border-gray-300" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-800">{item.text}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-gray-500">{item.assignee}</span>
                        <span className="text-xs text-gray-500">Due: {item.due}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-purple-600 hover:text-purple-700 text-sm font-medium">
                View All Action Items
              </button>
            </div>

            {/* Meeting Analytics */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">This Week</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Meetings</span>
                  <span className="font-semibold text-gray-900">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Duration</span>
                  <span className="font-semibold text-gray-900">6.5h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Action Items</span>
                  <span className="font-semibold text-gray-900">12</span>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Productivity Score</span>
                    <span className="font-semibold text-green-600">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;