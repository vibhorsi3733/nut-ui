import React from 'react';

export const defaultTabsCSS = {
  container: "w-full",
  list: "flex border-b border-gray-200",
  tab: "px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 transition-colors",
  activeTab: "text-blue-600 border-blue-600",
  panel: "mt-4"
};

export const defaultTabsData = {
  tabs: [
    {
      id: "overview",
      label: "Overview",
      content: <div className="p-4 text-gray-600">Overview content goes here.</div>
    },
    {
      id: "details",
      label: "Details",
      content: <div className="p-4 text-gray-600">Details content goes here.</div>
    },
    {
      id: "settings",
      label: "Settings",
      content: <div className="p-4 text-gray-600">Settings content goes here.</div>
    }
  ],
  defaultTab: "overview"
};
