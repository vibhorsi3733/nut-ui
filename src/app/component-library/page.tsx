'use client';

import React from 'react';
import Card from '@/components/Card';
import Link from 'next/link';

const ComponentLibraryPage = () => {
  // No state needed - using routing instead

  // Sample card data for preview
  const sampleCardData = {
    title: "Sample Card",
    description: "A beautiful card component",
    content: "This is a sample card to demonstrate the component.",
    footer: "Card Footer"
  };

  const components = [
    { id: 'Card', name: 'Card Component', description: 'Versatile card with image, header, and footer support' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#5f52ff] flex items-center justify-center">
              <span className="text-white font-bold">N</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">NUT UI</h1>
          </Link>
          <nav className="w-full sm:w-auto">
            <ul className="flex flex-wrap justify-center gap-x-4 sm:gap-x-8 gap-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-[#5f52ff] dark:text-gray-300 dark:hover:text-[#5f52ff]">Home</Link></li>
              <li><Link href="/component-library" className="text-[#5f52ff] font-medium">Components</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-[#5f52ff] dark:text-gray-300 dark:hover:text-[#5f52ff]">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#5f52ff] dark:text-gray-300 dark:hover:text-[#5f52ff]">GitHub</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Component Library</h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">
            Browse our collection of beautifully designed UI components. Click on any component to view the code and live preview.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component) => (
            <Link
              key={component.id}
              href={`/components/${component.id.toLowerCase()}`}
              className="block bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:border-[#5f52ff] cursor-pointer flex flex-col h-full"
            >
              <div className="p-5 flex-grow">
                <div className="flex items-start">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 sm:w-14 sm:h-14" />
                  <div className="ml-3 sm:ml-4 flex-grow">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{component.name}</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">{component.description}</p>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4">
                  {/* Preview of the component */}
                  <div className="mt-3 sm:mt-4">
                    <Card
                      data={{
                        title: "Sample Card",
                        description: "Preview of the component",
                        content: "This is how the component looks"
                      }}
                      style={{ container: "w-full max-w-[150px] sm:max-w-[180px] md:max-w-xs" }}
                    />
                  </div>
                </div>
              </div>
              <div className="p-5 border-t border-gray-100 dark:border-gray-700">
                <div className="text-[#5f52ff] font-medium flex items-center justify-center sm:justify-start">
                  View Component
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentLibraryPage;