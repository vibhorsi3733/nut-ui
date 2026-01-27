'use client';

import React from 'react';
import Link from 'next/link';

const InputPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white capitalize">Input Component</h2>
          <Link
            href="/component-library"
            className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-[#5f52ff] dark:hover:text-[#5f52ff] self-start sm:self-auto"
          >
            ← Back to Components
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 p-4 sm:p-6">
          {/* Preview Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-4">Preview</h3>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 sm:p-5 md:p-6 min-h-[250px] sm:min-h-[300px] md:min-h-[400px] flex flex-col items-center justify-center gap-6">
              <div className="w-full max-w-md">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Default Input</label>
                <input
                  type="text"
                  placeholder="Enter your text"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5f52ff] focus:border-[#5f52ff] dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div className="w-full max-w-md">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Input with Icon</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5f52ff] focus:border-[#5f52ff] dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              
              <div className="w-full max-w-md">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Error State</label>
                <input
                  type="text"
                  placeholder="Error input"
                  className="w-full px-4 py-2 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-white"
                />
                <p className="mt-1 text-sm text-red-600">This field is required</p>
              </div>
            </div>
          </div>

          {/* Code Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">Code</h3>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <pre className="p-3 sm:p-4 text-xs sm:text-sm text-gray-200 overflow-x-auto max-h-[300px] sm:max-h-96 overflow-y-auto">
                <code>{`// Default Input
<input
  type="text"
  placeholder="Enter your text"
  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5f52ff] focus:border-[#5f52ff] dark:bg-gray-700 dark:text-white"
/>

// Input with Icon
<div className="relative">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>
  <input
    type="text"
    placeholder="Search..."
    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5f52ff] focus:border-[#5f52ff] dark:bg-gray-700 dark:text-white"
  />
</div>`}</code>
              </pre>
            </div>

            <div className="mt-4 sm:mt-6">
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2 text-base">How to Use:</h4>
              <pre className="p-3 sm:p-4 bg-gray-800 text-gray-200 rounded overflow-x-auto text-xs sm:text-sm">
{`import React from 'react';

const Input = ({ label, placeholder, type = 'text', icon, error, ...props }) => {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      
      {icon ? (
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
          <input
            type={type}
            placeholder={placeholder}
            className={\`w-full pl-10 pr-4 py-2 border \${error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5f52ff] focus:border-[#5f52ff] dark:bg-gray-700 dark:text-white\`}
            {...props}
          />
        </div>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={\`w-full px-4 py-2 border \${error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5f52ff] focus:border-[#5f52ff] dark:bg-gray-700 dark:text-white\`}
          {...props}
        />
      )}
      
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputPage;