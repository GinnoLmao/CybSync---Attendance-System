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
  status: 'on-time' | 'late';
}

interface UpcomingEvent {
  id: string;
  name: string;
  date: string;
}

interface StudentDashboardData {
  stats: {
    totalEvents: number;
    lateAttendanceRate: number;
    onTimeAttendanceRate: number;
  };
  attendanceHistory: AttendanceRecord[];
  upcomingEvents: UpcomingEvent[];
}

export default function StudentDashboard() {
  // Backend integration: Replace with API data
  // Example API call:
  // useEffect(() => {
  //   const token = localStorage.getItem('studentToken') || sessionStorage.getItem('studentToken');
  //   fetch('/api/student/dashboard', {
  //     headers: {
  //       'Authorization': `Bearer ${token}`,
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => setDashboardData(data))
  //     .catch(error => console.error('Error fetching dashboard data:', error));
  // }, []);

  const [dashboardData] = useState<StudentDashboardData>({
    stats: {
      totalEvents: 12,
      lateAttendanceRate: 20,
      onTimeAttendanceRate: 80,
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
        status: 'on-time',
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
    ],
    upcomingEvents: [
      { id: '1', name: 'University Pagirimaw', date: 'September 12, 2025' },
      { id: '2', name: 'University Pagirimaw', date: 'September 12, 2025' },
    ],
  });

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
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Student Dashboard</h1>
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
              value={dashboardData.stats.totalEvents}
              icon="attended"
              iconColor="blue"
            />
            <StatCard
              title="Late Attendance Rate"
              value={`${dashboardData.stats.lateAttendanceRate}%`}
              icon="students"
              iconColor="red"
            />
            <StatCard
              title="On Time Attendance Rate"
              value={`${dashboardData.stats.onTimeAttendanceRate}%`}
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
                  {dashboardData.attendanceHistory.map((record) => (
                    <tr key={record.id} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50">
                      <td className="py-4 px-4 text-sm text-gray-900 font-medium">{record.type}</td>
                      <td className="py-4 px-4 text-sm text-gray-900">{record.event}</td>
                      <td className="py-4 px-4 text-sm text-gray-900">{record.date}</td>
                      <td className="py-4 px-4 text-sm text-gray-900">{record.time}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`text-sm font-semibold ${
                            record.status === 'on-time' ? 'text-green-600' : 'text-red-600'
                          }`}
                        >
                          {record.status === 'on-time' ? 'On Time' : 'Late'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <div className="space-y-4">
              {dashboardData.upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="p-5 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{event.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{event.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

