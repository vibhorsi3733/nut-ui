import React, { useState } from 'react';

interface TabsCSS {
  container: string;
  list: string;
  tab: string;
  activeTab: string;
  panel: string;
}

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface TabsData {
  tabs: TabItem[];
  defaultTab?: string;
  variant?: 'default' | 'pills';
}

interface TabsProps {
  css: TabsCSS;
  data: TabsData;
}

const Tabs: React.FC<TabsProps> = ({ css, data }) => {
  const [activeTab, setActiveTab] = useState(data.defaultTab || data.tabs[0]?.id || '');

  const activeTabContent = data.tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className={css.container}>
      <div className={css.list}>
        {data.tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`${css.tab} ${activeTab === tab.id ? css.activeTab : ''}`}
            onClick={() => !tab.disabled && setActiveTab(tab.id)}
            disabled={tab.disabled}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={css.panel}>
        {activeTabContent}
      </div>
    </div>
  );
};

export default Tabs;
