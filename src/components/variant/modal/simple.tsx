import React from 'react';

export const simpleModalCSS = {
  overlay: "fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center p-4 backdrop-blur-sm",
  container: "bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6 transform transition-all",
  header: "flex items-center justify-between mb-4",
  title: "text-lg font-semibold text-gray-900 dark:text-gray-100",
  closeButton: "text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors",
  body: "text-gray-600 dark:text-gray-300",
  footer: "mt-4 flex justify-end gap-2"
};

export const simpleModalData = {
  isOpen: true,
  title: "Confirm Action",
  children: <p>Are you sure you want to proceed with this action?</p>,
  footer: (
    <>
      <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
        Cancel
      </button>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Confirm
      </button>
    </>
  ),
  showCloseButton: true
};
