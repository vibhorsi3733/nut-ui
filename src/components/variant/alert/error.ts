import React from 'react';

export const errorAlertCSS = {
  container: "rounded-lg bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 border border-red-200 dark:border-red-800 p-4 flex items-start gap-3 shadow-sm hover:shadow-md transition-shadow duration-200",
  icon: "flex-shrink-0 w-5 h-5 text-red-600 dark:text-red-400 mt-0.5",
  title: "text-sm font-semibold text-red-900 dark:text-red-100",
  message: "text-sm text-red-800 dark:text-red-200 mt-1 leading-relaxed",
  closeButton: "ml-auto flex-shrink-0 rounded-md p-1 text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-100 dark:hover:bg-red-800/50 transition-colors duration-150"
};

export const errorAlertData = {
  title: "Error",
  message: "Something went wrong. Please try again.",
  showClose: true,
  icon: React.createElement('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
    React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' })
  )
};
