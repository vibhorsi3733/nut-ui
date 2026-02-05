import React from 'react';

export const pillsTabsCSS = {
  container: "w-full",
  list: "flex space-x-2",
  tab: "px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 transition-colors",
  activeTab: "bg-blue-600 text-white",
  panel: "mt-4"
};

export const pillsTabsData = {
  tabs: [
    {
      id: "tab1",
      label: "Tab 1",
      content: <div className="p-4 text-gray-600">Content for Tab 1</div>
    },
    {
      id: "tab2",
      label: "Tab 2",
      content: <div className="p-4 text-gray-600">Content for Tab 2</div>
    },
    {
      id: "tab3",
      label: "Tab 3",
      content: <div className="p-4 text-gray-600">Content for Tab 3</div>
    }
  ],
  defaultTab: "tab1",
  variant: "pills" as const
};
