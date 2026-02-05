import React from 'react';

export const withFormModalCSS = {
  overlay: "fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center p-4 backdrop-blur-sm",
  container: "bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-lg w-full p-6 transform transition-all",
  header: "flex items-center justify-between mb-4",
  title: "text-lg font-semibold text-gray-900 dark:text-gray-100",
  closeButton: "text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors",
  body: "text-gray-600 dark:text-gray-300",
  footer: "mt-4 flex justify-end gap-2"
};

export const withFormModalData = {
  isOpen: true,
  title: "Create New Item",
  children: (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          placeholder="Enter description"
        />
      </div>
    </form>
  ),
  footer: (
    <>
      <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
        Cancel
      </button>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Create
      </button>
    </>
  ),
  showCloseButton: true
};
