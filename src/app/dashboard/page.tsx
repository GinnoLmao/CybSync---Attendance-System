'use client';

import Sidebar from '@/components/Sidebar';
import StatCard from '@/components/StatCard';
import { useState } from 'react';

// Types for backend integration
interface DashboardData {
  event: {
    name: string;
    date: string;
  };
  stats: {
    totalDepartmentStudents: number;
    totalStudentsAttended: number;
    attendanceRate: number;
  };
  courseDistribution: {
    course: string;
    value: number;
    color: string;
  }[];
  yearCourseDistribution: {
    year: string;
    courseA: number;
    courseB: number;
  }[];
  upcomingEvents: {
    id: string;
    name: string;
    date: string;
  }[];
}

export default function Dashboard() {
  // Backend integration: Replace with API data
  const [dashboardData] = useState<DashboardData>({
    event: {
      name: 'University Pagirimaw 2025',
      date: 'September 12, 2025',
    },
    stats: {
      totalDepartmentStudents: 1000,
      totalStudentsAttended: 800,
      attendanceRate: 80,
    },
    courseDistribution: [
      { course: 'CS', value: 30, color: '#EF4444' },
      { course: 'IT', value: 25, color: '#06B6D4' },
      { course: 'IS', value: 20, color: '#A855F7' },
      { course: 'EMC', value: 15, color: '#22C55E' },
      { course: 'BLIS', value: 10, color: '#F97316' },
    ],
    yearCourseDistribution: [
      { year: '1st', courseA: 34, courseB: 21 },
      { year: '2nd', courseA: 29, courseB: 31 },
      { year: '3rd', courseA: 26, courseB: 29 },
      { year: '4th', courseA: 34, courseB: 21 },
    ],
    upcomingEvents: [
      { id: '1', name: 'University Pagirimaw', date: 'September 12, 2025' },
      { id: '2', name: 'University Pagirimaw', date: 'September 12, 2025' },
    ],
  });

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 sm:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="lg:ml-0 ml-12">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Event Dashboard</h1>
              <p className="text-sm sm:text-base text-gray-600 mt-1">{dashboardData.event.name}</p>
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
              title="Total Department Students"
              value={dashboardData.stats.totalDepartmentStudents}
              icon="students"
              iconColor="red"
            />
            <StatCard
              title="Total Students Attended"
              value={dashboardData.stats.totalStudentsAttended}
              icon="attended"
              iconColor="blue"
            />
            <StatCard
              title="Attendance Rate"
              value={`${dashboardData.stats.attendanceRate}%`}
              icon="rate"
              iconColor="green"
            />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Donut Chart - Attendance by Course */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Attendance Distribution by Course
              </h2>
              <div className="flex items-center justify-center mb-6">
                {/* Donut Chart Placeholder */}
                <div className="relative w-64 h-64">
                  <svg viewBox="0 0 200 200" className="transform -rotate-90">
                    {/* CS - Red */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#EF4444"
                      strokeWidth="40"
                      strokeDasharray="150.8 502.4"
                      strokeDashoffset="0"
                    />
                    {/* IT - Cyan */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#06B6D4"
                      strokeWidth="40"
                      strokeDasharray="125.6 502.4"
                      strokeDashoffset="-150.8"
                    />
                    {/* IS - Purple */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#A855F7"
                      strokeWidth="40"
                      strokeDasharray="100.5 502.4"
                      strokeDashoffset="-276.4"
                    />
                    {/* EMC - Green */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#22C55E"
                      strokeWidth="40"
                      strokeDasharray="75.4 502.4"
                      strokeDashoffset="-376.9"
                    />
                    {/* BLIS - Orange */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#F97316"
                      strokeWidth="40"
                      strokeDasharray="50.2 502.4"
                      strokeDashoffset="-452.3"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {dashboardData.courseDistribution.map((item) => (
                  <div key={item.course} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-gray-600">{item.course}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-xs text-gray-400 mt-4">
                Tip: Click on a color to change graph details
              </p>
            </div>

            {/* Bar Chart - Year and Course */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Attendance Distribution by Year and Course
              </h2>
              <div className="mb-4 flex justify-end">
                <div className="text-sm font-semibold text-gray-700">YEAR</div>
              </div>
              <div className="flex items-end justify-around h-64 border-b border-gray-200 pb-2">
                {dashboardData.yearCourseDistribution.map((item, index) => (
                  <div key={index} className="flex items-end gap-2">
                    {/* Course A - Blue */}
                    <div className="flex flex-col items-center">
                      <div className="relative mb-2">
                        <div
                          className="w-12 bg-blue-600 rounded-t-lg"
                          style={{ height: `${item.courseA * 3}px` }}
                        />
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-gray-700">
                          {item.courseA}
                        </span>
                      </div>
                      <span className="text-xs text-gray-600 mt-2">A</span>
                    </div>
                    {/* Course B - Light Blue */}
                    <div className="flex flex-col items-center">
                      <div className="relative mb-2">
                        <div
                          className="w-12 bg-blue-300 rounded-t-lg"
                          style={{ height: `${item.courseB * 3}px` }}
                        />
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-gray-700">
                          {item.courseB}
                        </span>
                      </div>
                      <span className="text-xs text-gray-600 mt-2">B</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-around mt-4">
                {dashboardData.yearCourseDistribution.map((item) => (
                  <div key={item.year} className="text-center">
                    <span className="text-sm font-medium text-gray-700">{item.year}</span>
                  </div>
                ))}
              </div>
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

