import React from 'react';

export const defaultToggleCSS = {
  container: "flex items-center",
  toggle: "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-gray-200",
  label: "ml-3 text-sm text-gray-700",
  helperText: "mt-1 text-sm text-gray-500"
};

export const defaultToggleData = {
  label: "Enable notifications",
  checked: false,
  helperText: "Receive email notifications"
};
