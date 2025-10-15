'use client';

import StudentSidebar from '@/components/StudentSidebar';
import StatCard from '@/components/StatCard';
import { useState } from 'react';

// Types for backend integration
interface AttendanceRecord {
  id: string;
  type: string;
  event: string;
  date: string;
  time: string;
  status: 'on-time' | 'late' | 'excused';
}

interface StudentAttendanceData {
  stats: {
    totalEvents: number;
    lateAttendance: number;
    onTimeAttendance: number;
  };
  attendanceHistory: AttendanceRecord[];
}

export default function StudentAttendance() {
  const [eventCode, setEventCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Backend integration: Replace with API data
  // Example API call:
  // useEffect(() => {
  //   const token = localStorage.getItem('studentToken') || sessionStorage.getItem('studentToken');
  //   fetch('/api/student/attendance', {
  //     headers: {
  //       'Authorization': `Bearer ${token}`,
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => setAttendanceData(data))
  //     .catch(error => console.error('Error fetching attendance data:', error));
  // }, []);

  const [attendanceData] = useState<StudentAttendanceData>({
    stats: {
      totalEvents: 12,
      lateAttendance: 4,
      onTimeAttendance: 5,
    },
    attendanceHistory: [
      {
        id: '1',
        type: '[AM, Sign In]',
        event: 'University Days 2026 - Day 1',
        date: 'January 23, 2026',
        time: '7:01',
        status: 'on-time',
      },
      {
        id: '2',
        type: '[AM, Sign In]',
        event: 'University Days 2026 - Day 1',
        date: 'January 23, 2026',
        time: '7:01',
        status: 'late',
      },
      {
        id: '3',
        type: '[AM, Sign In]',
        event: 'University Days 2026 - Day 1',
        date: 'January 23, 2026',
        time: '7:01',
        status: 'on-time',
      },
      {
        id: '4',
        type: '[AM, Sign In]',
        event: 'University Days 2026 - Day 1',
        date: 'January 23, 2026',
        time: '7:01',
        status: 'on-time',
      },
      {
        id: '5',
        type: '[AM, Sign In]',
        event: 'University Days 2026 - Day 1',
        date: 'January 23, 2026',
        time: '7:01',
        status: 'excused',
      },
      {
        id: '6',
        type: '[AM, Sign In]',
        event: 'University Days 2026 - Day 1',
        date: 'January 23, 2026',
        time: '7:01',
        status: 'late',
      },
      {
        id: '7',
        type: '[AM, Sign In]',
        event: 'University Days 2026 - Day 1',
        date: 'January 23, 2026',
        time: '7:01',
        status: 'on-time',
      },
      {
        id: '8',
        type: '[AM, Sign In]',
        event: 'University Days 2026 - Day 1',
        date: 'January 23, 2026',
        time: '7:01',
        status: 'on-time',
      },
      {
        id: '9',
        type: '[AM, Sign In]',
        event: 'University Days 2026 - Day 1',
        date: 'January 23, 2026',
        time: '7:01',
        status: 'on-time',
      },
      {
        id: '10',
        type: '[AM, Sign In]',
        event: 'University Days 2026 - Day 1',
        date: 'January 23, 2026',
        time: '7:01',
        status: 'late',
      },
      {
        id: '11',
        type: '[AM, Sign In]',
        event: 'University Days 2026 - Day 1',
        date: 'January 23, 2026',
        time: '7:01',
        status: 'on-time',
      },
    ],
  });

  // Handle event check-in
  const handleCheckIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!eventCode.trim()) {
      alert('Please enter an event code');
      return;
    }

    setIsSubmitting(true);

    // Backend integration point
    console.log('Checking in to event:', eventCode);

    // Example API call:
    // try {
    //   const token = localStorage.getItem('studentToken') || sessionStorage.getItem('studentToken');
    //   const response = await fetch('/api/student/check-in', {
    //     method: 'POST',
    //     headers: {
    //       'Authorization': `Bearer ${token}`,
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ eventCode }),
    //   });
    //
    //   const data = await response.json();
    //
    //   if (response.ok) {
    //     alert(`Successfully checked in to ${data.eventName}!`);
    //     setEventCode('');
    //     // Refresh attendance data
    //     // fetchAttendanceData();
    //   } else {
    //     alert(data.message || 'Failed to check in. Please verify the event code.');
    //   }
    // } catch (error) {
    //   console.error('Check-in error:', error);
    //   alert('An error occurred. Please try again.');
    // } finally {
    //   setIsSubmitting(false);
    // }

    // Temporary success message (remove when API is connected)
    setTimeout(() => {
      alert('Check-in successful! (Demo mode - connect to backend)');
      setEventCode('');
      setIsSubmitting(false);
    }, 1000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-time':
        return 'text-green-600';
      case 'late':
        return 'text-red-600';
      case 'excused':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'on-time':
        return 'On Time';
      case 'late':
        return 'Late';
      case 'excused':
        return 'Excused';
      default:
        return status;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <main className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 sm:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="lg:ml-0 ml-12">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Attendance</h1>
            </div>
            <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="p-4 sm:p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard
              title="Total Number of Events"
              value={attendanceData.stats.totalEvents}
              icon="attended"
              iconColor="blue"
            />
            <StatCard
              title="Late Attendance"
              value={attendanceData.stats.lateAttendance}
              icon="students"
              iconColor="red"
            />
            <StatCard
              title="On Time Attendance"
              value={attendanceData.stats.onTimeAttendance}
              icon="rate"
              iconColor="green"
            />
          </div>

          {/* Attendance Overview Table */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Attendance Overview</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Type</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Event</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Time</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceData.attendanceHistory.map((record) => (
                    <tr key={record.id} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50">
                      <td className="py-4 px-4 text-sm text-gray-900 font-medium">{record.type}</td>
                      <td className="py-4 px-4 text-sm text-gray-900">{record.event}</td>
                      <td className="py-4 px-4 text-sm text-gray-900">{record.date}</td>
                      <td className="py-4 px-4 text-sm text-gray-900">{record.time}</td>
                      <td className="py-4 px-4">
                        <span className={`text-sm font-semibold ${getStatusColor(record.status)}`}>
                          {getStatusText(record.status)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Event Check-In Section */}
          <div className="flex items-center gap-4">
            <form onSubmit={handleCheckIn} className="flex-1 flex items-center gap-4">
              <input
                type="text"
                value={eventCode}
                onChange={(e) => setEventCode(e.target.value)}
                placeholder="Enter Event"
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900 placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-12 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-xl transition-colors shadow-lg disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Checking In...' : 'Enter'}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

