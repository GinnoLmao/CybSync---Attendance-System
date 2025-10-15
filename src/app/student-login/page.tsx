'use client';

import Link from "next/link";
import { useState } from "react";

export default function StudentLogin() {
  const [studentId, setStudentId] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Backend integration point
    console.log('Student login attempt:', { studentId, rememberMe });

    // Example API call:
    // try {
    //   const response = await fetch('/api/auth/student-login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ studentId }),
    //   });
    //
    //   const data = await response.json();
    //
    //   if (response.ok) {
    //     // Store token and student info
    //     if (rememberMe) {
    //       localStorage.setItem('studentToken', data.token);
    //       localStorage.setItem('studentId', studentId);
    //     } else {
    //       sessionStorage.setItem('studentToken', data.token);
    //       sessionStorage.setItem('studentId', studentId);
    //     }
    //     
    //     // Redirect to student dashboard
    //     window.location.href = '/student-dashboard';
    //   } else {
    //     alert(data.message || 'Invalid Student ID');
    //   }
    // } catch (error) {
    //   console.error('Login error:', error);
    //   alert('An error occurred. Please try again.');
    // } finally {
    //   setIsLoading(false);
    // }

    // Temporary success message (remove when API is connected)
    setTimeout(() => {
      alert('Student login successful! (Demo mode - connect to backend)');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0000FF] px-4 py-8">
      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
              <svg 
                className="w-12 h-12 text-blue-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                />
              </svg>
            </div>
            <div className="absolute top-0 right-0 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">S</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-black mb-2">
          Student Login
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Enter Your Student ID
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Student ID Field */}
          <div>
            <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-2">
              Student ID
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg 
                  className="h-5 w-5 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" 
                  />
                </svg>
              </div>
              <input
                id="studentId"
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                placeholder="e.g., 2022M0000"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 text-gray-900 placeholder-gray-400"
                required
              />
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Enter your Student ID to access attendance system
            </p>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3.5 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing In...
              </>
            ) : (
              <>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" 
                  />
                </svg>
                Sign In
              </>
            )}
          </button>
        </form>

        {/* Council Login Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Student Council?{' '}
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold hover:underline">
              Login Here
            </Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-white text-sm">
        @ Cyb:Robotics Organization
      </footer>
    </div>
  );
}

