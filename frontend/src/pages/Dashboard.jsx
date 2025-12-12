import React, { useState } from 'react';
import {
  Bot, Plus, Search, Calendar, Clock, Users,
  FileText, Settings, Bell, LogOut, Mic,
  MicOff, Play, Pause, Download, CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useMeetings, useActionItems } from '../hooks/useMeetings';
import { useAnalytics } from '../hooks/useAnalytics';
import { format } from 'date-fns';
import toast from 'react-hot-toast';


const Dashboard = () => {
  const { user, profile, signOut } = useAuth();
  const { meetings, createMeeting, fetchMeetings } = useMeetings();
  const { actionItems, updateActionItem, fetchActionItems } = useActionItems();
  const { dashboardStats, actionItemsSummary, loading: analyticsLoading, fetchAnalytics } = useAnalytics();

  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [newMeetingTitle, setNewMeetingTitle] = useState('');

  useEffect(() => {
    fetchMeetings();
    fetchActionItems();
    fetchAnalytics();
  }, []);

  const handleStartRecording = async () => {
    if (!newMeetingTitle.trim()) setNewMeetingTitle('Quick Meeting');
  
    const t = toast.loading('Starting recording...');
    try {
      await createMeeting({
        title: newMeetingTitle.trim() || 'Quick Meeting',
        status: 'in_progress',
        start_time: new Date().toISOString(),
        participant_count: 1
      });
      toast.success('Recording started', { id: t });
      setIsRecording(true);
    } catch (err) {
      toast.error(err.message || 'Failed to start recording', { id: t });
    }
  };
  
  const handleStopRecording = () => {
    setIsRecording(false);
    setNewMeetingTitle('');
    toast('Recording stopped', { icon: '⏹️' });
  };


  const handleToggleActionItem = async (itemId, currentStatus) => {
    const newStatus = currentStatus === 'completed' ? 'pending' : 'completed';
    const t = toast.loading('Updating action item...');
    try {
      await updateActionItem(itemId, { status: newStatus });
      toast.success(`Marked as ${newStatus}`, { id: t });
    } catch (error) {
      toast.error('Failed to update item', { id: t });
    }
  };
  

  const recentMeetings = meetings.slice(0, 3);
  const pendingActionItems = actionItems.filter(item => item.status === 'pending').slice(0, 3);

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
              <button className="p-2 text-gray-400 hover:text-gray-600"><Bell className="h-6 w-6" /></button>
              <button className="p-2 text-gray-400 hover:text-gray-600"><Settings className="h-6 w-6" /></button>
              <img
                src={profile?.avatar_url || "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=face"}
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
              />
              <button onClick={signOut} className="p-2 text-gray-400 hover:text-gray-600">
                <LogOut className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome back, {profile?.first_name || user?.email?.split('@')[0]}!
          </h1>
          <p className="text-gray-600">Manage your meetings and capture every important moment with AI.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Meetings', value: dashboardStats?.total_meetings, icon: <Calendar className="h-8 w-8 text-blue-600" /> },
            { label: 'Hours Saved', value: dashboardStats?.total_duration_hours, icon: <Clock className="h-8 w-8 text-green-600" /> },
            { label: 'Action Items', value: dashboardStats?.total_action_items, icon: <FileText className="h-8 w-8 text-purple-600" /> },
            { label: 'This Month', value: dashboardStats?.meetings_this_month, icon: <Users className="h-8 w-8 text-orange-600" /> }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{item.label}</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {analyticsLoading ? '...' : (item.value || 0)}
                  </p>
                </div>
                {item.icon}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Record */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Record</h2>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-purple-600'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {isRecording ? <MicOff className="h-8 w-8 text-white" /> : <Mic className="h-8 w-8 text-white" />}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {isRecording ? 'Recording in Progress' : 'Start Recording'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {isRecording ? 'AI is transcribing your meeting in real-time' : 'Click to begin recording your meeting'}
                  </p>
                </div>

                {!isRecording && (
                  <input
                    type="text"
                    placeholder="Meeting title (optional)"
                    value={newMeetingTitle}
                    onChange={e => setNewMeetingTitle(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent mb-4"
                  />
                )}

                <div className="flex justify-center">
                  <button
                    onClick={isRecording ? handleStopRecording : handleStartRecording}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${isRecording ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-purple-600 text-white hover:bg-purple-700'}`}
                  >
                    {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                    <span>{isRecording ? 'Stop Recording' : 'Start Recording'}</span>
                  </button>
                </div>

                {isRecording && (
                  <div className="mt-6 bg-white rounded-lg p-4">
                    <div className="text-xs text-gray-500 mb-2">Live Transcription</div>
                    <p className="text-sm text-gray-800 mb-4">
                      "Welcome everyone to today's meeting..."
                    </p>
                    <div className="flex justify-between text-xs text-gray-500">
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
                {recentMeetings.length ? recentMeetings.map(meeting => (
                  <div key={meeting.id} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{meeting.title}</h3>
                        <div className="flex space-x-4 text-sm text-gray-500">
                          <span>{meeting.start_time ? format(new Date(meeting.start_time), 'MMM dd, yyyy') : 'No date'}</span>
                          <span>{meeting.start_time ? format(new Date(meeting.start_time), 'h:mm a') : 'No time'}</span>
                          <span>{meeting.duration_minutes} min</span>
                          <span>{meeting.participant_count} participants</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          {isPlaying ? <Pause className="h-4 w-4"/> : <Play className="h-4 w-4"/>}
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600"><Download className="h-4 w-4"/></button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{meeting.description || 'No description available'}</p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      meeting.status === 'completed' ? 'bg-green-100 text-green-800'
                      : meeting.status === 'in_progress' ? 'bg-blue-100 text-blue-800'
                      : meeting.status === 'scheduled' ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-100 text-gray-800'
                    }`}>
                      {meeting.status.replace('_', ' ')}
                    </span>
                  </div>
                )) : (
                  <div className="text-center py-8 text-gray-500">
                    <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>No meetings yet. Start your first recording!</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Action Items</h3>
              <div className="space-y-3">
                {pendingActionItems.length ? pendingActionItems.map(item => (
                  <div key={item.id} className="flex items-start space-x-3">
                    <button
                      onClick={() => handleToggleActionItem(item.id, item.status)}
                      className="mt-1 h-4 w-4 text-purple-600 rounded border-gray-300 hover:bg-purple-50"
                    >
                      {item.status === 'completed' ? <CheckCircle className="h-4 w-4 text-green-600"/> : <div className="h-4 w-4 border-2 border-gray-300 rounded"/>}
                    </button>
                    <div className="flex-1">
                      <p className={`text-sm ${item.status === 'completed' ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                        {item.title}
                      </p>
                      <div className="flex items-center justify-between mt-1 text-xs text-gray-500">
                        <span>{item.assignee || 'Unassigned'}</span>
                        {item.due_date && <span>Due: {format(new Date(item.due_date), 'MMM dd')}</span>}
                      </div>
                    </div>
                  </div>
                )) : (
                  <div className="text-center py-4 text-gray-500">
                    <CheckCircle className="h-8 w-8 mx-auto mb-2 text-gray-300"/>
                    <p className="text-sm">No pending action items</p>
                  </div>
                )}
              </div>
              <button className="w-full mt-4 text-purple-600 hover:text-purple-700 text-sm font-medium">
                View All Action Items
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">This Week</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Meetings</span>
                  <span className="font-semibold text-gray-900">{analyticsLoading ? '...' : (dashboardStats?.meetings_this_month || 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Duration</span>
                  <span className="font-semibold text-gray-900">{analyticsLoading ? '...' : `${dashboardStats?.total_duration_hours || 0}h`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Action Items</span>
                  <span className="font-semibold text-gray-900">{analyticsLoading ? '...' : (actionItemsSummary?.pending_items || 0)}</span>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Productivity Score</span>
                    <span className="font-semibold text-green-600">{analyticsLoading ? '...' : `${Math.round((dashboardStats?.avg_sentiment_score || 0) * 100)}%`}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: `${Math.round((dashboardStats?.avg_sentiment_score || 0) * 100)}%` }} />
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
