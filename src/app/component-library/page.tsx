'use client';

import React from 'react';
import Link from 'next/link';
import Card from '@/components/Card';
import Table from '@/components/Table';
import Chip from '@/components/Chip';
import Map from '@/components/Map';
import { components } from '@/config/components';
import { imageCardCSS, imageCardData } from '@/components/variant/card';
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
        return <Card css={imageCardCSS} data={imageCardData} />;
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
          {components.map((component) => (
            <div
              key={component.id}
              className="block bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:border-[#5f52ff] flex flex-col h-full"
            >
              <div className="p-4 sm:p-5 flex-grow flex flex-col">
                <div className="flex items-start mb-3 sm:mb-4">
                  <div className="bg-gray-200 dark:bg-gray-700 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0" />
                  <div className="ml-3 flex-grow min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white truncate">
                      {component.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                      {component.description}
                    </p>
                  </div>
                </div>
                
                {/* Live Preview - Standardized sizing */}
                <div className={`mt-3 sm:mt-4 bg-gray-50 dark:bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden ${
                  component.id === 'slider' 
                    ? 'p-2 sm:p-3 h-[200px] sm:h-[220px] lg:h-[240px] xl:h-[220px] 2xl:h-[240px]' 
                    : component.id === 'table'
                    ? 'p-2 sm:p-3 h-[200px] sm:h-[220px] lg:h-[240px] xl:h-[220px] 2xl:h-[240px] overflow-x-auto'
                    : component.id === 'map'
                    ? 'p-2 sm:p-3 h-[200px] sm:h-[220px] lg:h-[240px] xl:h-[220px] 2xl:h-[240px]'
                    : 'p-3 sm:p-4 h-[200px] sm:h-[220px] lg:h-[240px] xl:h-[220px] 2xl:h-[240px]'
                }`}>
                  <div className="w-full h-full flex items-center justify-center max-w-full">
                    <div className="w-full max-w-full scale-90 sm:scale-95 lg:scale-100 xl:scale-95 2xl:scale-100">
                      {getComponentPreview(component.id)}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-5 border-t border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/50">
                <Link
                  href={`/component-library/${component.id}`}
                  className="text-[#5f52ff] font-medium text-sm sm:text-base flex items-center justify-center sm:justify-start hover:text-indigo-700 transition-colors"
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
