import React from 'react';

export const simpleDropdownCSS = {
  container: "relative inline-block text-left",
  button: "inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200",
  menu: "absolute z-10 mt-2 w-56 origin-top-left rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black dark:ring-gray-700 ring-opacity-5 focus:outline-none transition-all duration-200 ease-out opacity-100 translate-y-0",
  item: "text-black dark:text-gray-100 block px-4 py-2.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left transition-colors duration-150 cursor-pointer font-medium",
  icon: "mr-2"
};

export const simpleDropdownData = {
  label: "Options",
  items: [
    { label: "Edit", value: "edit" },
    { label: "Duplicate", value: "duplicate" },
    { label: "Delete", value: "delete", divider: true },
    { label: "Archive", value: "archive" }
  ]
};
