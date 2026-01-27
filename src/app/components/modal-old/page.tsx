'use client';

import React from 'react';
import Link from 'next/link';

const ModalPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white capitalize">Modal Component</h2>
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
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 sm:p-5 md:p-6 min-h-[250px] sm:min-h-[300px] md:min-h-[400px] flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-xl border border-gray-200 dark:border-gray-600 overflow-hidden">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-600 flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Modal Title</h3>
                    <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      This is a modal component example. Modals are flexible dialog prompts with minimum required styles and smart defaults.
                    </p>
                  </div>
                  <div className="p-4 border-t border-gray-200 dark:border-gray-600 flex justify-end space-x-3">
                    <button className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg">
                      Cancel
                    </button>
                    <button className="px-4 py-2 bg-[#5f52ff] text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      Confirm
                    </button>
                  </div>
                </div>
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
                <code>{`<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div className="bg-white dark:bg-gray-700 rounded-lg shadow-xl border border-gray-200 dark:border-gray-600 overflow-hidden w-full max-w-md mx-4">
    <div className="p-4 border-b border-gray-200 dark:border-gray-600 flex justify-between items-center">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Modal Title</h3>
      <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div className="p-4">
      <p className="text-gray-600 dark:text-gray-300">
        This is a modal component example.
      </p>
    </div>
    <div className="p-4 border-t border-gray-200 dark:border-gray-600 flex justify-end space-x-3">
      <button className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg">
        Cancel
      </button>
      <button className="px-4 py-2 bg-[#5f52ff] text-white rounded-lg hover:bg-indigo-700 transition-colors">
        Confirm
      </button>
    </div>
  </div>
</div>`}</code>
              </pre>
            </div>

            <div className="mt-4 sm:mt-6">
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2 text-base">How to Use:</h4>
              <pre className="p-3 sm:p-4 bg-gray-800 text-gray-200 rounded overflow-x-auto text-xs sm:text-sm">
{`import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, title, children, footer }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-xl border border-gray-200 dark:border-gray-600 overflow-hidden w-full max-w-md mx-4">
        <div className="p-4 border-b border-gray-200 dark:border-gray-600 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4">
          {children}
        </div>
        {footer && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-600">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPage;