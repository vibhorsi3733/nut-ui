import React from 'react';

export const multiSelectDropdownCSS = {
  container: "relative inline-block text-left",
  button: "inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200",
  menu: "absolute z-10 mt-2 w-64 origin-top-left rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black dark:ring-gray-700 ring-opacity-5 focus:outline-none transition-all duration-200 ease-out opacity-100 translate-y-0 max-h-60 overflow-y-auto",
  item: "text-black dark:text-gray-100 flex items-center px-4 py-2.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left transition-colors duration-150 cursor-pointer",
  checkbox: "mr-3 w-4 h-4 text-[#5f52ff] border-gray-300 rounded focus:ring-[#5f52ff] focus:ring-2",
  icon: "mr-2 w-4 h-4 text-gray-600 dark:text-gray-300"
};

export const multiSelectDropdownData = {
  label: "Select Options",
  items: [
    { label: "Option 1", value: "option1", selected: false },
    { label: "Option 2", value: "option2", selected: true },
    { label: "Option 3", value: "option3", selected: false },
    { label: "Option 4", value: "option4", selected: true },
    { label: "Option 5", value: "option5", selected: false }
  ],
  multiSelect: true
};
