import React from 'react';

export const successAlertCSS = {
  container: "rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 p-4 flex items-start gap-3 shadow-sm hover:shadow-md transition-shadow duration-200",
  icon: "flex-shrink-0 w-5 h-5 text-green-600 dark:text-green-400 mt-0.5",
  title: "text-sm font-semibold text-green-900 dark:text-green-100",
  message: "text-sm text-green-800 dark:text-green-200 mt-1 leading-relaxed",
  closeButton: "ml-auto flex-shrink-0 rounded-md p-1 text-green-500 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 hover:bg-green-100 dark:hover:bg-green-800/50 transition-colors duration-150"
};

export const successAlertData = {
  title: "Success",
  message: "Your changes have been saved successfully.",
  showClose: true,
  icon: React.createElement('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
    React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' })
  )
};
