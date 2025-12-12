import React, { useState, useEffect } from 'react';
import PageLayout from "../layouts/PageLayout";
import {
  Calendar, Clock, Users, Video, CheckCircle, ArrowRight
} from 'lucide-react';
import { supabase } from '../utils/supabase';
import toast from 'react-hot-toast';

const ScheduleDemoPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
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

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [dates, setDates] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);

  // ✅ Fetch available dates and time slots dynamically
  useEffect(() => {
    const fetchSlots = async () => {
      const { data: dateData, error: dateError } = await supabase
        .from('demo_dates')
        .select('*')
        .order('date', { ascending: true });

      const { data: timeData, error: timeError } = await supabase
        .from('demo_time_slots')
        .select('*');

      if (dateError || timeError) {
        toast.error('Failed to load available slots');
        return;
      }

      setDates(dateData);
      setTimeSlots(timeData.map(t => t.slot));
    };

    fetchSlots();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      toast.error('Please select a date and time');
      return;
    }

    setLoading(true);
    const toastId = toast.loading('Scheduling demo...');

    try {
      const { error: submitError } = await supabase
        .from('demo_requests')
        .insert([{
          ...formData,
          preferred_date: selectedDate,
          preferred_time: selectedTime
        }]);

      if (submitError) throw submitError;

      toast.success('Demo scheduled successfully!', { id: toastId });
      setSuccess(true);
    } catch (err) {
      toast.error(err.message || 'Failed to schedule demo', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <PageLayout title="Demo Scheduled!" description="We'll be in touch soon.">
        <section className="py-20">
          <div className="max-w-2xl mx-auto text-center px-6">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank you!</h2>
            <p className="text-gray-600 mb-6">
              We’ll confirm your meeting soon. You chose <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong>.
            </p>
            <button
              onClick={() => window.location.href = '/'}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700"
            >
              Back to Home
            </button>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title="Schedule a Demo"
      description="See MeetGenie in action with a personalized session"
    >
      <section className="py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">
          {/* Left Info Column */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Live Product Demo</h2>
            <p className="text-lg text-gray-600 mb-8">Book a 30-minute walkthrough with our team.</p>

            <div className="space-y-5 mb-10">
              {[
                { icon: Video, text: 'Live AI Transcription' },
                { icon: Users, text: 'Smart Meeting Summaries' },
                { icon: CheckCircle, text: 'Auto Action Items' },
                { icon: Calendar, text: 'Calendar Integration' }
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form Column */}
          <div className="bg-white rounded-2xl shadow-lg border p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Time</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="firstName" required value={formData.firstName} onChange={handleChange}
                  placeholder="First Name *"
                  className="w-full border rounded-lg px-4 py-3" />
                <input name="lastName" required value={formData.lastName} onChange={handleChange}
                  placeholder="Last Name *"
                  className="w-full border rounded-lg px-4 py-3" />
              </div>

              <input type="email" name="email" required value={formData.email} onChange={handleChange}
                placeholder="Work Email *"
                className="w-full border rounded-lg px-4 py-3" />

              <input name="company" required value={formData.company} onChange={handleChange}
                placeholder="Company *"
                className="w-full border rounded-lg px-4 py-3" />

              <input name="jobTitle" value={formData.jobTitle} onChange={handleChange}
                placeholder="Job Title"
                className="w-full border rounded-lg px-4 py-3" />

              <select name="teamSize" value={formData.teamSize} onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3">
                <option value="">Team Size</option>
                <option value="1-10">1–10</option>
                <option value="11-50">11–50</option>
                <option value="51-200">51–200</option>
                <option value="200+">200+</option>
              </select>

              <select name="useCase" value={formData.useCase} onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3">
                <option value="">Primary Use Case</option>
                <option value="team-meetings">Team Meetings</option>
                <option value="client-calls">Client Calls</option>
                <option value="interviews">Interviews</option>
                <option value="training">Training</option>
                <option value="all-hands">All Hands</option>
              </select>

              {/* Date Selector */}
              <div>
                <label className="block text-sm mb-2 font-medium">Select Date</label>
                <div className="grid grid-cols-3 gap-2">
                  {dates.map(({ date, day, available }, i) => (
                    <button
                      key={i}
                      type="button"
                      disabled={!available}
                      onClick={() => setSelectedDate(date)}
                      className={`p-2 rounded-lg text-sm border w-full
                        ${selectedDate === date
                          ? 'bg-purple-50 border-purple-500 text-purple-700'
                          : available
                            ? 'border-gray-300 hover:border-purple-500'
                            : 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed'}`}>
                      <div className="font-medium">{day}</div>
                      <div className="text-xs">{date}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selector */}
              <div>
                <label className="block text-sm mb-2 font-medium">Select Time</label>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((time, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 rounded-lg border text-sm w-full
                        ${selectedTime === time
                          ? 'bg-purple-50 border-purple-500 text-purple-700'
                          : 'border-gray-300 hover:border-purple-500'}`}>
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                name="questions"
                value={formData.questions}
                onChange={handleChange}
                placeholder="Any special requests or questions..."
                className="w-full border rounded-lg px-4 py-3"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 flex justify-center items-center gap-2">
                {loading ? 'Scheduling...' : 'Schedule Demo'}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ScheduleDemoPage;
