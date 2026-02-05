import React from 'react';

export const withIconsDropdownCSS = {
  container: "relative inline-block text-left",
  button: "inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200",
  menu: "absolute z-10 mt-2 w-56 origin-top-left rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black dark:ring-gray-700 ring-opacity-5 focus:outline-none transition-all duration-200 ease-out opacity-100 translate-y-0",
  item: "text-gray-900 dark:text-gray-100 flex items-center px-4 py-2.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left transition-colors duration-150 cursor-pointer",
  icon: "mr-2 w-4 h-4 text-gray-600 dark:text-gray-300"
};

export const withIconsDropdownData = {
  label: "Actions",
  items: [
    {
      label: "Edit",
      value: "edit",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      label: "Duplicate",
      value: "duplicate",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      label: "Delete",
      value: "delete",
      divider: true,
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      )
    },
    {
      label: "Share",
      value: "share",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C7.17 14.056 5 15.22 5 17c0 2.22 3.178 4 7 4s7-1.78 7-4c0-1.78-2.17-2.944-3.684-3.658m0 0a9.003 9.003 0 01-1.343-.886m1.343.886a9 9 0 01-1.343.886M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ]
};
