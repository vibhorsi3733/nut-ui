// Example: Using Tabs component in your application

import { Tabs } from '@/developerComponent/componentCollection';

function MyPage() {
  // Define CSS object with all styling classes
  const tabsCSS = {
    container: "w-full",
    list: "flex border-b border-gray-200",
    tab: "px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300",
    activeTab: "text-blue-600 border-blue-600",
    panel: "mt-4"
  };

  // Define data object
  const tabsData = {
    tabs: [
      {
        id: "tab1",
        label: "Tab 1",
        content: <div className="p-4">Content for Tab 1</div>
      },
      {
        id: "tab2",
        label: "Tab 2",
        content: <div className="p-4">Content for Tab 2</div>
      },
      {
        id: "tab3",
        label: "Tab 3",
        content: <div className="p-4">Content for Tab 3</div>
      }
    ],
    defaultTab: "tab1"
  };

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <Tabs css={tabsCSS} data={tabsData} />
    </div>
  );
}

export default MyPage;
