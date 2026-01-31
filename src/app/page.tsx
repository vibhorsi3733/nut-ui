'use client';

import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-gray-950 dark:via-gray-900/30 dark:to-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 dark:border-gray-800/80 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 sm:h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#5f52ff] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-[#5f52ff]/20 group-hover:shadow-[#5f52ff]/30 transition-shadow">
                <span className="text-white font-bold text-xs sm:text-sm">N</span>
              </div>
              <span className="font-display font-bold text-base sm:text-lg text-gray-900 dark:text-white">NUT UI</span>
            </Link>
            <nav className="flex items-center space-x-3 sm:space-x-6">
              <Link href="/component-library" className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white relative group">
                Components
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#5f52ff]"></span>
              </Link>
              <a href="#" className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors relative group">
                Docs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5f52ff] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors relative group">
                GitHub
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5f52ff] group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5f52ff]/10 dark:bg-[#5f52ff]/20 border border-[#5f52ff]/20 mb-6 sm:mb-8">
            <div className="w-2 h-2 rounded-full bg-[#5f52ff] animate-pulse"></div>
            <span className="text-xs font-medium text-[#5f52ff] dark:text-[#818cf8]">Component Library v1.0</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 sm:mb-6 leading-[1.1]">
            Beautiful UI Components
            <br />
            <span className="bg-gradient-to-r from-[#5f52ff] via-[#7c3aed] to-[#5f52ff] bg-clip-text text-transparent">
              Ready to Use
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed px-4">
            A curated collection of accessible, customizable React components with clean designs. 
            Simply copy the code and use in your projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <Link
              href="/component-library"
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#5f52ff] to-[#7c3aed] text-white rounded-lg hover:from-[#6d5fff] hover:to-[#8b4efd] transition-all font-semibold text-sm sm:text-base shadow-lg shadow-[#5f52ff]/20 hover:shadow-[#5f52ff]/30 hover:-translate-y-0.5"
            >
              Browse Components
            </Link>
            <a 
              href="#" 
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all font-semibold text-sm sm:text-base hover:-translate-y-0.5"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-3 sm:mb-4">
              Why Choose NUT UI?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to build beautiful interfaces faster
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <div className="text-center p-6 sm:p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-[#5f52ff]/50 dark:hover:border-[#5f52ff]/50 transition-all hover:shadow-lg">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-[#5f52ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
              </div>
              <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Easy Copy & Paste</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Simply copy the code for any component and paste it directly into your project. No installation needed.
              </p>
            </div>
            <div className="text-center p-6 sm:p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-[#5f52ff]/50 dark:hover:border-[#5f52ff]/50 transition-all hover:shadow-lg">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-[#5f52ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Fully Customizable</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                All components are built with Tailwind CSS and TypeScript, making them easy to customize to your needs.
              </p>
            </div>
            <div className="text-center p-6 sm:p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-[#5f52ff]/50 dark:hover:border-[#5f52ff]/50 transition-all hover:shadow-lg md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-[#5f52ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Modern Design</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Clean, contemporary designs with attention to detail and consistent spacing and typography.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#5f52ff] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-[#5f52ff]/20">
                <span className="text-white font-bold text-xs sm:text-sm">N</span>
              </div>
              <span className="font-display font-bold text-base sm:text-lg text-gray-900 dark:text-white">NUT UI</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="#" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">GitHub</a>
              <a href="#" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Documentation</a>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} NUT UI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;