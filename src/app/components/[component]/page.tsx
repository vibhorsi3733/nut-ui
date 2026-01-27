'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Mock data for component variants
const componentVariants = {
  card: [
    { id: 'basic', name: 'Basic Card', description: 'Simple card with title and content' },
    { id: 'with-image', name: 'Card with Image', description: 'Card that includes an image' },
    { id: 'with-footer', name: 'Card with Footer', description: 'Card with footer section' },
    { id: 'horizontal', name: 'Horizontal Card', description: 'Horizontally oriented card' },
  ],
  button: [
    { id: 'primary', name: 'Primary Button', description: 'Standard primary button' },
    { id: 'secondary', name: 'Secondary Button', description: 'Secondary button style' },
    { id: 'outline', name: 'Outline Button', description: 'Outline button style' },
    { id: 'icon', name: 'Icon Button', description: 'Button with icon' },
  ],
  modal: [
    { id: 'basic', name: 'Basic Modal', description: 'Simple modal dialog' },
    { id: 'confirm', name: 'Confirmation Modal', description: 'Modal with confirmation options' },
    { id: 'form', name: 'Form Modal', description: 'Modal with form elements' },
  ],
};

const ComponentVariantsPage = () => {
  const params = useParams();
  const componentName = params.component as string;
  const variants = componentVariants[componentName as keyof typeof componentVariants] || [];

  // Convert component name to title case
  const componentTitle = componentName
    ? componentName.charAt(0).toUpperCase() + componentName.slice(1)
    : 'Component';

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
              <li><Link href="/component-library" className="text-gray-600 hover:text-[#5f52ff] dark:text-gray-300 dark:hover:text-[#5f52ff]">Components</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-[#5f52ff] dark:text-gray-300 dark:hover:text-[#5f52ff]">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#5f52ff] dark:text-gray-300 dark:hover:text-[#5f52ff]">GitHub</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="mb-8 sm:mb-12">
          <Link 
            href="/component-library" 
            className="inline-flex items-center text-[#5f52ff] hover:text-indigo-700 mb-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Components
          </Link>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            {componentTitle} Variants
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl sm:max-w-2xl md:max-w-3xl">
            Browse different variants of the {componentTitle} component. Click on any variant to view the code and live preview.
          </p>
        </div>

        {variants.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {variants.map((variant) => (
              <Link
                key={variant.id}
                href={`/components/${componentName}/variants/${variant.id}`}
                className="block bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:border-[#5f52ff] cursor-pointer flex flex-col h-full"
              >
                <div className="p-5 flex-grow">
                  <div className="flex items-start">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 sm:w-14 sm:h-14" />
                    <div className="ml-3 sm:ml-4 flex-grow">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{variant.name}</h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">{variant.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 border-t border-gray-100 dark:border-gray-700">
                  <div className="text-[#5f52ff] font-medium flex items-center justify-center sm:justify-start">
                    View Variant
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No variants available</h3>
            <p className="text-gray-600 dark:text-gray-400">
              No variants have been defined for the {componentTitle} component yet.
            </p>
            <Link 
              href="/component-library" 
              className="inline-block mt-4 px-4 py-2 bg-[#5f52ff] text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Browse Other Components
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentVariantsPage;