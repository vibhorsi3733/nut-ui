'use client';

import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#5f52ff] flex items-center justify-center">
              <span className="text-white font-bold">N</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">NUT UI</h1>
          </div>
          <nav className="w-full sm:w-auto">
            <ul className="flex flex-wrap justify-center gap-x-4 sm:gap-x-8 gap-y-2">
              <li><Link href="/component-library" className="text-gray-600 hover:text-[#5f52ff] dark:text-gray-300 dark:hover:text-[#5f52ff]">Components</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-[#5f52ff] dark:text-gray-300 dark:hover:text-[#5f52ff]">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#5f52ff] dark:text-gray-300 dark:hover:text-[#5f52ff]">GitHub</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Beautiful UI Components <br />
            <span className="text-[#5f52ff]">Ready to Copy & Paste</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            A curated collection of accessible, customizable React components with clean designs. 
            Simply copy the code and use in your projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/component-library"
              className="px-8 py-4 bg-[#5f52ff] text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium text-lg"
            >
              Browse Components
            </Link>
            <a 
              href="#" 
              className="px-8 py-4 bg-white dark:bg-gray-800 text-[#5f52ff] border border-[#5f52ff] rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium text-lg"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">Why Choose NUT UI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5f52ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Easy Copy & Paste</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Simply copy the code for any component and paste it directly into your project. No installation needed.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5f52ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Fully Customizable</h3>
              <p className="text-gray-600 dark:text-gray-400">
                All components are built with Tailwind CSS and TypeScript, making them easy to customize to your needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5f52ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Modern Design</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Clean, contemporary designs with attention to detail and consistent spacing and typography.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Component Showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Featured Components</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Explore our growing collection of beautifully crafted UI components
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/component-library/card" className="block group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 group-hover:shadow-xl group-hover:border-[#5f52ff]">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Card Component</h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">Versatile card with image, header, and footer support</p>
                    </div>
                  </div>
                  <div className="mt-4 text-[#5f52ff] font-medium flex items-center">
                    View Variants
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Building Beautiful Interfaces Today</h2>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-10">
            Join thousands of developers who use NUT UI to accelerate their design process.
          </p>
          <Link
            href="/component-library"
            className="inline-block px-8 py-4 bg-white text-[#5f52ff] rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
          >
            Browse Components
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-[#5f52ff] flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">NUT UI</h2>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-[#5f52ff] dark:text-gray-400 dark:hover:text-[#5f52ff]">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-[#5f52ff] dark:text-gray-400 dark:hover:text-[#5f52ff]">GitHub</a>
              <a href="#" className="text-gray-600 hover:text-[#5f52ff] dark:text-gray-400 dark:hover:text-[#5f52ff]">Documentation</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} NUT UI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;