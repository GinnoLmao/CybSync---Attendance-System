'use client';

import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

// Types for backend integration
interface PendingReport {
  id: string;
  studentName: string;
  studentId: string;
  course: string;
  year: string;
  section: string;
  eventName: string;
  date: string;
  time: string;
  message: string;
  fullMessage: string;
  attachments?: string[]; // URLs to uploaded files/images
}

interface PreviousReport {
  id: string;
  eventName: string;
  date: string;
  message: string;
  status: 'resolved' | 'rejected';
}

interface ReportsData {
  pendingReports: PendingReport[];
  previousReports: PreviousReport[];
}

export default function Reports() {
  // State for which sections are expanded
  const [expandedSection, setExpandedSection] = useState<'pending' | 'previous' | null>(null);
  // State for which individual report is expanded
  const [expandedReportId, setExpandedReportId] = useState<string | null>(null);

  // Backend integration: Replace with API data
  // Example API call:
  // useEffect(() => {
  //   fetch('/api/reports', {
  //     headers: {
  //       'Authorization': `Bearer ${localStorage.getItem('token')}`,
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => setReportsData(data))
  //     .catch(error => console.error('Error fetching reports:', error));
  // }, []);

  const [reportsData] = useState<ReportsData>({
    pendingReports: [
      {
        id: '1',
        studentName: 'Dela Cruz, Juan Felipe J.',
        studentId: '2022M0000',
        course: 'BSCS',
        year: '4A',
        section: 'AI',
        eventName: 'University Hinampang [D1-SI-AM]',
        date: '10/01/2025',
        time: '10:59 PM',
        message: 'I have submitted a photo proof that I was present during the...',
        fullMessage: `I have submitted a photo proof that I was present during the University Hinampang.

I sincerely apologize for any inconvenience my absence may cause to the proceedings of the Hinampang. I have already informed my team captain and coach and ensured that my position will be covered by my designated substitute, Anna Reyes.

I understand the importance of the University Hinampang and fully support our school's participation. Thank you for your consideration and kind understanding regarding this matter.`,
        attachments: [
          'https://via.placeholder.com/400x500/f8f9fa/6c757d?text=Medical+Certificate',
          'https://via.placeholder.com/400x500/f8f9fa/6c757d?text=Photo+Proof'
        ],
      },
      {
        id: '2',
        studentName: 'Dela Cruz, Juan Felipe J.',
        studentId: '2022M0000',
        course: 'BSCS',
        year: '4A',
        section: 'AI',
        eventName: 'University Hinampang [D1-SI-AM]',
        date: '10/01/2025',
        time: '10:59 PM',
        message: 'I have submitted a photo proof that I was present during the...',
        fullMessage: `I have submitted a photo proof that I was present during the University Hinampang.

I sincerely apologize for any inconvenience my absence may cause to the proceedings of the Hinampang. I have already informed my team captain and coach and ensured that my position will be covered by my designated substitute, Anna Reyes.

I understand the importance of the University Hinampang and fully support our school's participation. Thank you for your consideration and kind understanding regarding this matter.`,
      },
      {
        id: '3',
        studentName: 'Dela Cruz, Juan Felipe J.',
        studentId: '2022M0000',
        course: 'BSCS',
        year: '4A',
        section: 'AI',
        eventName: 'University Hinampang [D1-SI-AM]',
        date: '10/01/2025',
        time: '10:59 PM',
        message: 'I have submitted a photo proof that I was present during the...',
        fullMessage: `I have submitted a photo proof that I was present during the University Hinampang.

I sincerely apologize for any inconvenience my absence may cause to the proceedings of the Hinampang. I have already informed my team captain and coach and ensured that my position will be covered by my designated substitute, Anna Reyes.

I understand the importance of the University Hinampang and fully support our school's participation. Thank you for your consideration and kind understanding regarding this matter.`,
      },
      {
        id: '4',
        studentName: 'Dela Cruz, Juan Felipe J.',
        studentId: '2022M0000',
        course: 'BSCS',
        year: '4A',
        section: 'AI',
        eventName: 'University Hinampang [D1-SI-AM]',
        date: '10/01/2025',
        time: '10:59 PM',
        message: 'I have submitted a photo proof that I was present during the...',
        fullMessage: `I have submitted a photo proof that I was present during the University Hinampang.

I sincerely apologize for any inconvenience my absence may cause to the proceedings of the Hinampang. I have already informed my team captain and coach and ensured that my position will be covered by my designated substitute, Anna Reyes.

I understand the importance of the University Hinampang and fully support our school's participation. Thank you for your consideration and kind understanding regarding this matter.`,
      },
      {
        id: '5',
        studentName: 'Dela Cruz, Juan Felipe J.',
        studentId: '2022M0000',
        course: 'BSCS',
        year: '4A',
        section: 'AI',
        eventName: 'University Hinampang [D1-SI-AM]',
        date: '10/01/2025',
        time: '10:59 PM',
        message: 'I have submitted a photo proof that I was present during the...',
        fullMessage: `I have submitted a photo proof that I was present during the University Hinampang.

I sincerely apologize for any inconvenience my absence may cause to the proceedings of the Hinampang. I have already informed my team captain and coach and ensured that my position will be covered by my designated substitute, Anna Reyes.

I understand the importance of the University Hinampang and fully support our school's participation. Thank you for your consideration and kind understanding regarding this matter.`,
      },
      {
        id: '6',
        studentName: 'Dela Cruz, Juan Felipe J.',
        studentId: '2022M0000',
        course: 'BSCS',
        year: '4A',
        section: 'AI',
        eventName: 'University Hinampang [D1-SI-AM]',
        date: '10/01/2025',
        time: '10:59 PM',
        message: 'I have submitted a photo proof that I was present during the...',
        fullMessage: `I have submitted a photo proof that I was present during the University Hinampang.

I sincerely apologize for any inconvenience my absence may cause to the proceedings of the Hinampang. I have already informed my team captain and coach and ensured that my position will be covered by my designated substitute, Anna Reyes.

I understand the importance of the University Hinampang and fully support our school's participation. Thank you for your consideration and kind understanding regarding this matter.`,
      },
    ],
    previousReports: [
      {
        id: 'prev_1',
        eventName: 'University Hinampang [D1-SI-AM]',
        date: '10/01/2025',
        message: 'I have submitted a photo proof that I was present during the...',
        status: 'resolved',
      },
      {
        id: 'prev_2',
        eventName: 'University Hinampang [D1-SI-AM]',
        date: '10/01/2025',
        message: 'I have submitted a photo proof that I was present during the...',
        status: 'resolved',
      },
      {
        id: 'prev_3',
        eventName: 'University Hinampang [D1-SI-AM]',
        date: '10/01/2025',
        message: 'I have submitted a photo proof that I was present during the...',
        status: 'rejected',
      },
    ],
  });

  // Toggle section expansion
  const toggleSection = (section: 'pending' | 'previous') => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Toggle individual report expansion
  const toggleReport = (reportId: string) => {
    setExpandedReportId(expandedReportId === reportId ? null : reportId);
  };

  // Handle accept report
  const handleAccept = async (reportId: string) => {
    // Backend integration point
    console.log('Accepting report:', reportId);
    
    // Example API call:
    // try {
    //   const response = await fetch(`/api/reports/${reportId}/accept`, {
    //     method: 'POST',
    //     headers: {
    //       'Authorization': `Bearer ${localStorage.getItem('token')}`,
    //       'Content-Type': 'application/json',
    //     },
    //   });
    //   
    //   if (response.ok) {
    //     alert('Report accepted successfully');
    //     // Refresh data or update state
    //   }
    // } catch (error) {
    //   console.error('Error accepting report:', error);
    // }
    
    alert('Report accepted! (Connect to backend)');
  };

  // Handle reject report
  const handleReject = async (reportId: string) => {
    // Backend integration point
    console.log('Rejecting report:', reportId);
    
    // Example API call:
    // try {
    //   const response = await fetch(`/api/reports/${reportId}/reject`, {
    //     method: 'POST',
    //     headers: {
    //       'Authorization': `Bearer ${localStorage.getItem('token')}`,
    //       'Content-Type': 'application/json',
    //     },
    //   });
    //   
    //   if (response.ok) {
    //     alert('Report rejected successfully');
    //     // Refresh data or update state
    //   }
    // } catch (error) {
    //   console.error('Error rejecting report:', error);
    // }
    
    alert('Report rejected! (Connect to backend)');
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
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Reports</h1>
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
          {/* Reports Sections */}
          <div className="space-y-4">
            {/* Pending Reports */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all">
              {/* Section Header - Clickable */}
              <button
                onClick={() => toggleSection('pending')}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1 text-left">
                  <h2 className="text-xl font-bold text-gray-900">Pending Reports</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    View and review pending reports here.
                  </p>
                </div>
                <div className="ml-4">
                  <svg
                    className={`w-6 h-6 text-gray-600 transition-transform ${
                      expandedSection === 'pending' ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Section Content - Expandable */}
              {expandedSection === 'pending' && (
                <div className="border-t border-gray-200">
                  {reportsData.pendingReports.length === 0 ? (
                    <div className="text-center py-12">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <p className="mt-4 text-sm text-gray-500">No pending reports</p>
                    </div>
                  ) : (
                    <div>
                      {reportsData.pendingReports.map((report) => {
                        const isReportExpanded = expandedReportId === report.id;

                        return (
                          <div key={report.id} className="border-b border-gray-200 last:border-b-0">
                            {/* Report Header - Clickable */}
                            <div
                              onClick={() => toggleReport(report.id)}
                              className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                              {/* Left: Student Info */}
                              <div>
                                <h3 className="text-base font-semibold text-gray-900">
                                  {report.studentName}
                                </h3>
                                <p className="text-xs text-gray-500 mt-1">
                                  {report.studentId} {report.course} {report.year} - {report.section}
                                </p>
                              </div>

                              {/* Right: Event Info */}
                              <div>
                                <h3 className="text-base font-semibold text-gray-900">
                                  {report.eventName}
                                </h3>
                                <p className="text-xs text-gray-500 mt-1">
                                  {report.date} | {report.message}
                                </p>
                              </div>
                            </div>

                            {/* Report Details - Expandable */}
                            {isReportExpanded && (
                              <div className="bg-gray-50 border-t border-gray-200">
                                <div className="p-6 max-w-5xl mx-auto">
                                  {/* Student Name Header */}
                                  <div className="flex items-center justify-between mb-6">
                                    <div>
                                      <h3 className="text-xl font-bold text-gray-900">
                                        {report.studentName}
                                      </h3>
                                      <p className="text-sm text-gray-500 mt-1">
                                        {report.studentId} {report.course} {report.year} - {report.section}
                                      </p>
                                    </div>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleReport(report.id);
                                      }}
                                      className="text-gray-400 hover:text-gray-600"
                                    >
                                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                      </svg>
                                    </button>
                                  </div>

                                  {/* Event Info */}
                                  <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-gray-900">
                                      {report.eventName} {report.date} {report.time}
                                    </h4>
                                  </div>

                                  {/* Full Message */}
                                  <div className="mb-6">
                                    <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                                      {report.fullMessage}
                                    </p>
                                  </div>

                                  {/* Attachments */}
                                  {report.attachments && report.attachments.length > 0 && (
                                    <div className="mb-6">
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {report.attachments.map((attachment, index) => (
                                          <div
                                            key={index}
                                            className="border border-gray-300 rounded-lg overflow-hidden bg-white"
                                          >
                                            <img
                                              src={attachment}
                                              alt={`Attachment ${index + 1}`}
                                              className="w-full h-auto object-contain"
                                            />
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* Action Buttons */}
                                  <div className="flex justify-center gap-4 mt-8">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleAccept(report.id);
                                      }}
                                      className="px-16 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
                                    >
                                      Accept
                                    </button>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleReject(report.id);
                                      }}
                                      className="px-16 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                                    >
                                      Reject
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Previous Reports */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all">
              {/* Section Header - Clickable */}
              <button
                onClick={() => toggleSection('previous')}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1 text-left">
                  <h2 className="text-xl font-bold text-gray-900">Previous Reports</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    View previous responded reports here.
                  </p>
                </div>
                <div className="ml-4">
                  <svg
                    className={`w-6 h-6 text-gray-600 transition-transform ${
                      expandedSection === 'previous' ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Section Content - Expandable */}
              {expandedSection === 'previous' && (
                <div className="border-t border-gray-200">
                  {reportsData.previousReports.length === 0 ? (
                    <div className="text-center py-12">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <p className="mt-4 text-sm text-gray-500">No previous reports</p>
                    </div>
                  ) : (
                    <div>
                      {reportsData.previousReports.map((report) => (
                        <div
                          key={report.id}
                          className="flex items-center justify-between p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
                        >
                          {/* Left: Event Info */}
                          <div className="flex-1">
                            <h3 className="text-base font-semibold text-gray-900">
                              {report.eventName}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">
                              [{report.date}] {report.message}
                            </p>
                          </div>

                          {/* Right: Status */}
                          <div className="ml-6 flex-shrink-0">
                            <span className="text-base font-medium">
                              Status:{' '}
                              <span
                                className={
                                  report.status === 'resolved'
                                    ? 'text-green-600 font-semibold'
                                    : 'text-red-600 font-semibold'
                                }
                              >
                                {report.status === 'resolved' ? 'Resolved' : 'Rejected'}
                              </span>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

