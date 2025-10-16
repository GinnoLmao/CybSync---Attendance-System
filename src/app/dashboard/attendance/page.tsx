'use client';

import Sidebar from '@/components/Sidebar';
import StatCard from '@/components/StatCard';
import { useState, useRef, useEffect } from 'react';

// Types for backend integration
interface AttendanceRecord {
  id: string;
  studentId: string;
  name: string;
  course: string;
  year: number;
  section: string;
  timestamp: string;
}

interface AttendanceData {
  event: {
    name: string;
    date: string;
  };
  stats: {
    totalDepartmentStudents: number;
    totalStudentsAttended: number;
    attendanceRate: number;
  };
  records: AttendanceRecord[];
}

export default function Attendance() {
  // Backend integration: Replace with API data
  const [attendanceData, setAttendanceData] = useState<AttendanceData>({
    event: {
      name: 'University Pagirimaw 2025',
      date: 'September 12, 2025',
    },
    stats: {
      totalDepartmentStudents: 1000,
      totalStudentsAttended: 800,
      attendanceRate: 80,
    },
    records: [
      {
        id: '1',
        studentId: '2023M1025',
        name: 'Zuriel Eliazar D. Calix',
        course: 'BSCS',
        year: 3,
        section: 'B',
        timestamp: '15:00',
      },
      {
        id: '2',
        studentId: '2023M1025',
        name: 'Zuriel Eliazar D. Calix',
        course: 'BSCS',
        year: 3,
        section: 'B',
        timestamp: '15:00',
      },
      {
        id: '3',
        studentId: '2023M1025',
        name: 'Zuriel Eliazar D. Calix',
        course: 'BSCS',
        year: 3,
        section: 'B',
        timestamp: '15:00',
      },
      {
        id: '4',
        studentId: '2023M1025',
        name: 'Zuriel Eliazar D. Calix',
        course: 'BSCS',
        year: 3,
        section: 'B',
        timestamp: '15:00',
      },
      {
        id: '5',
        studentId: '2023M1025',
        name: 'Zuriel Eliazar D. Calix',
        course: 'BSCS',
        year: 3,
        section: 'B',
        timestamp: '15:00',
      },
      {
        id: '6',
        studentId: '2023M1025',
        name: 'Zuriel Eliazar D. Calix',
        course: 'BSCS',
        year: 3,
        section: 'B',
        timestamp: '15:00',
      },
      {
        id: '7',
        studentId: '2023M1025',
        name: 'Zuriel Eliazar D. Calix',
        course: 'BSCS',
        year: 3,
        section: 'B',
        timestamp: '15:00',
      },
      {
        id: '8',
        studentId: '2023M1025',
        name: 'Zuriel Eliazar D. Calix',
        course: 'BSCS',
        year: 3,
        section: 'B',
        timestamp: '15:00',
      },
      {
        id: '9',
        studentId: '2023M1025',
        name: 'Zuriel Eliazar D. Calix',
        course: 'BSCS',
        year: 3,
        section: 'B',
        timestamp: '15:00',
      },
      {
        id: '10',
        studentId: '2023M1025',
        name: 'Zuriel Eliazar D. Calix',
        course: 'BSCS',
        year: 3,
        section: 'B',
        timestamp: '15:00',
      },
    ],
  });

  // RFID Scanner State
  const [rfidInput, setRfidInput] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const rfidInputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input when scanning starts
  useEffect(() => {
    if (isScanning && rfidInputRef.current) {
      rfidInputRef.current.focus();
    }
  }, [isScanning]);

  // Backend integration: Handle manual RFID entry
  const handleRfidSubmit = async () => {
    if (!rfidInput.trim()) return;

    console.log('Manual RFID Entry:', rfidInput);
    
    // Backend integration point - Add your API call here
    // Example:
    // try {
    //   const response = await fetch('/api/attendance/scan', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ rfid: rfidInput, eventId: 'current' }),
    //   });
    //   const data = await response.json();
    //   // Update attendance records
    //   setAttendanceData(prev => ({
    //     ...prev,
    //     records: [data.record, ...prev.records],
    //   }));
    // } catch (error) {
    //   console.error('Failed to record attendance:', error);
    // }

    setRfidInput('');
  };

  // Backend integration: Start automatic RFID scanning
  const handleStartScanning = () => {
    setIsScanning(true);
    console.log('RFID Scanner: Started');
    
    // Backend integration point
    // Connect to RFID reader via WebSocket or polling
    // Example:
    // const ws = new WebSocket('ws://your-rfid-reader/scan');
    // ws.onmessage = (event) => {
    //   const rfid = event.data;
    //   // Automatically process scanned RFID
    //   handleRfidScan(rfid);
    // };
  };

  // Backend integration: Stop automatic RFID scanning
  const handleStopScanning = () => {
    setIsScanning(false);
    console.log('RFID Scanner: Stopped');
    
    // Backend integration point
    // Disconnect from RFID reader
    // Example:
    // if (ws) ws.close();
  };

  // Handle Enter key press in RFID input
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleRfidSubmit();
    }
  };

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
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Attendance</h1>
              <p className="text-sm sm:text-base text-gray-600 mt-1">{attendanceData.event.name}</p>
            </div>
            <button className="p-3 hover:bg-gray-100 rounded-full transition-colors relative">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              {/* Red notification dot */}
              <span className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="p-4 sm:p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard
              title="Total Department Students"
              value={attendanceData.stats.totalDepartmentStudents}
              icon="students"
              iconColor="red"
            />
            <StatCard
              title="Total Students Attended"
              value={attendanceData.stats.totalStudentsAttended}
              icon="attended"
              iconColor="blue"
            />
            <StatCard
              title="Attendance Rate"
              value={`${attendanceData.stats.attendanceRate}%`}
              icon="rate"
              iconColor="green"
            />
          </div>

          {/* Attendance Table */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Table Container - Horizontal scroll on mobile */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">ID</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Course</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Year</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Section</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {attendanceData.records.map((record) => (
                    <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">{record.studentId}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">{record.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">{record.course}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">{record.year}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">{record.section}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">{record.timestamp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* RFID Scanner Controls */}
            <div className="border-t border-gray-200 p-6">
              {/* Note */}
              <p className="text-center text-xs text-gray-400 italic mb-4">
                ***Note: RFID Entries are automatically scanned via ID Card Reader***
              </p>

              {/* Scanner Controls */}
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                {/* RFID Input */}
                <div className="flex-1">
                  <input
                    ref={rfidInputRef}
                    type="text"
                    value={rfidInput}
                    onChange={(e) => setRfidInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter Student RF ID"
                    disabled={isScanning}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900 placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Enter Button */}
                <button
                  onClick={handleRfidSubmit}
                  disabled={isScanning || !rfidInput.trim()}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold rounded-xl transition-colors disabled:cursor-not-allowed whitespace-nowrap"
                >
                  Enter
                </button>

                {/* Start Button */}
                <button
                  onClick={handleStartScanning}
                  disabled={isScanning}
                  className="px-8 py-3 bg-white hover:bg-gray-50 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  Start
                </button>

                {/* Stop Button */}
                <button
                  onClick={handleStopScanning}
                  disabled={!isScanning}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-semibold rounded-xl transition-colors disabled:cursor-not-allowed whitespace-nowrap"
                >
                  Stop
                </button>
              </div>

              {/* Scanning Status Indicator */}
              {isScanning && (
                <div className="mt-4 flex items-center justify-center gap-2 text-green-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Scanner Active - Ready to scan RFID cards</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

