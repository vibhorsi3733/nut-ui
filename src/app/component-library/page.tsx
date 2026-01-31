'use client';

import React from 'react';
import Link from 'next/link';
import Card from '@/components/Card';
import Table from '@/components/Table';
import Chip from '@/components/Chip';
import Map from '@/components/Map';
import { components } from '@/config/components';
import { basicCardCSS, basicCardData } from '@/components/variant/card';
import { newsSliderCSS, newsSliderData, NewsSliderComponent } from '@/components/variant/slider';
import { scoreBoardCSS, scoreBoardData } from '@/components/variant/table';
import { popularSearchesCSS, popularSearchesData, PopularSearchesComponent } from '@/components/variant/chip';
import { videoCardCSS, videoCardData, VideoCardComponent } from '@/components/variant/clipCard';
import { basicMapCSS, basicMapData, BasicMapComponent } from '@/components/variant/map';

const ComponentLibraryPage = () => {
  // Dynamic component previews - driven by config
  const getComponentPreview = (componentId: string) => {
    switch (componentId) {
      case 'card':
        return <Card css={basicCardCSS} data={basicCardData} />;
      case 'slider':
        return <NewsSliderComponent css={newsSliderCSS} data={newsSliderData} />;
      case 'table':
        return <Table css={scoreBoardCSS} data={scoreBoardData} />;
      case 'chip':
        return <PopularSearchesComponent css={popularSearchesCSS} data={popularSearchesData} />;
      case 'clipCard':
        return <VideoCardComponent css={videoCardCSS} data={videoCardData} />;
      case 'map':
        return <BasicMapComponent css={basicMapCSS} data={basicMapData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#5f52ff] flex items-center justify-center">
              <span className="text-white font-bold">N</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">NUT UI</h1>
          </Link>
          <nav className="w-full sm:w-auto">
            <ul className="flex flex-wrap justify-center gap-x-4 sm:gap-x-8 gap-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-[#5f52ff] dark:text-gray-300 dark:hover:text-[#5f52ff]">Home</Link></li>
              <li><Link href="/component-library" className="text-[#5f52ff] font-medium">Component Library</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Component Library
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">
            Browse our collection of UI components. All CSS and data are passed as props - nothing is hardcoded.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component) => (
            <div
              key={component.id}
              className="block bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:border-[#5f52ff] flex flex-col h-full"
            >
              <div className="p-5 flex-grow">
                <div className="flex items-start mb-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 sm:w-14 sm:h-14" />
                  <div className="ml-3 sm:ml-4 flex-grow">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                      {component.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">
                      {component.description}
                    </p>
                  </div>
                </div>
                
                {/* Live Preview */}
                <div className={`mt-4 bg-gray-50 dark:bg-gray-900 rounded-lg ${
                  component.id === 'slider' 
                    ? 'p-2 sm:p-3 min-h-[280px] sm:min-h-[320px] overflow-hidden' 
                    : component.id === 'table'
                    ? 'p-2 sm:p-3 overflow-x-auto'
                    : 'p-4 min-h-[120px] flex justify-center items-center'
                }`}>
                  {component.id === 'slider' ? (
                    <div className="w-full h-full flex items-center justify-center">
                      {getComponentPreview(component.id)}
                    </div>
                  ) : (
                    getComponentPreview(component.id)
                  )}
                </div>
              </div>
              
              <div className="p-5 border-t border-gray-100 dark:border-gray-700">
                <Link
                  href={`/component-library/${component.id}`}
                  className="text-[#5f52ff] font-medium flex items-center justify-center sm:justify-start hover:text-indigo-700 transition-colors"
                >
                  View Variants
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentLibraryPage;
