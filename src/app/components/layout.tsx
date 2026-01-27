'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Component list for sidebar - only include components that exist
  const components = [
    { name: 'Button', path: '/components/button' },
    { name: 'Card', path: '/components/card' },
    { name: 'Input', path: '/components/input' },
    { name: 'Modal', path: '/components/modal' },
    { name: 'Table', path: '/components/table' },
    { name: 'Avatar', path: '/components/avatar' },
    { name: 'Badge', path: '/components/badge' },
    { name: 'Alert', path: '/components/alert' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex">
      {/* Mobile menu button */}
      <button
        className={`md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-[#5f52ff] text-white ${
          sidebarOpen ? 'hidden' : 'block'
        }`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-[#5f52ff] flex items-center justify-center">
              <span className="text-white font-bold">N</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">NUT UI</h1>
          </div>
          <button 
            className="md:hidden text-gray-500 dark:text-gray-300"
            onClick={() => setSidebarOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link href="/" className="block px-4 py-2 text-gray-600 hover:bg-[#5f52ff] hover:text-white rounded-md transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/component-library" className="block px-4 py-2 text-gray-600 hover:bg-[#5f52ff] hover:text-white rounded-md transition-colors">
                Component Library
              </Link>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-[#5f52ff] hover:text-white rounded-md transition-colors">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-[#5f52ff] hover:text-white rounded-md transition-colors">
                GitHub
              </a>
            </li>
          </ul>
          
          <div className="mt-6">
            <h3 className="px-4 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Components</h3>
            <ul className="mt-2 space-y-1">
              {components.map((component) => (
                <li key={component.name}>
                  <Link 
                    href={component.path} 
                    className={`block px-4 py-2 rounded-md transition-colors ${
                      pathname === component.path 
                        ? 'bg-[#5f52ff] text-white' 
                        : 'text-gray-600 hover:bg-[#5f52ff] hover:text-white'
                    }`}
                  >
                    {component.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <main className="flex-1 md:ml-64">
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          {children}
        </div>
      </main>
    </div>
  );
}