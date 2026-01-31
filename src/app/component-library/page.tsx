'use client';

import React from 'react';
import Link from 'next/link';
import Card from '@/components/Card';
import Table from '@/components/Table';
import Chip from '@/components/Chip';
import Map from '@/components/Map';
import { components } from '@/config/components';
import { variants } from '@/config/variants';
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
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-950 dark:via-gray-900/50 dark:to-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 dark:border-gray-800/80 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5f52ff] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-[#5f52ff]/20 group-hover:shadow-[#5f52ff]/30 transition-shadow">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="font-display font-bold text-base sm:text-lg text-gray-900 dark:text-white">NUT UI</span>
            </Link>
            <nav className="flex items-center space-x-6">
              <Link href="/" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5f52ff] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/component-library" className="text-sm font-medium text-gray-900 dark:text-white relative">
                Components
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#5f52ff]"></span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5f52ff]/10 dark:bg-[#5f52ff]/20 border border-[#5f52ff]/20 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#5f52ff] animate-pulse"></div>
            <span className="text-xs font-medium text-[#5f52ff] dark:text-[#818cf8]">Component Library</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-3 sm:mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Component Library
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            Browse our collection of UI components. All CSS and data are passed as props - nothing is hardcoded.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component, index) => (
            <Link
              key={component.id}
              href={`/component-library/${component.id}`}
              className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 hover:border-[#5f52ff]/50 dark:hover:border-[#5f52ff]/50 hover:shadow-xl hover:shadow-[#5f52ff]/10 dark:hover:shadow-[#5f52ff]/20 hover:-translate-y-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#5f52ff]/0 via-[#5f52ff]/0 to-[#5f52ff]/0 group-hover:from-[#5f52ff]/5 group-hover:via-[#5f52ff]/0 group-hover:to-[#5f52ff]/5 transition-all duration-300 pointer-events-none"></div>
              
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5f52ff] via-[#7c3aed] to-[#5f52ff] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="p-6 relative z-10">
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#5f52ff] transition-colors">
                      {component.name}
                    </h3>
                    <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                      {variants.filter(v => v.componentId === component.id).length} {variants.filter(v => v.componentId === component.id).length === 1 ? 'variant' : 'variants'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {component.description}
                  </p>
                </div>
                
                {/* Live Preview */}
                <div className={`relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden shadow-inner ${
                  component.id === 'slider' 
                    ? 'p-2 h-[180px]' 
                    : component.id === 'table'
                    ? 'p-2 h-[180px] overflow-x-auto'
                    : component.id === 'map'
                    ? 'p-1 h-[180px]'
                    : 'p-4 h-[180px]'
                }`}>
                  {/* Preview label */}
                  <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/10 dark:bg-white/10 backdrop-blur-sm rounded text-xs font-mono text-gray-600 dark:text-gray-400 border border-gray-200/50 dark:border-gray-700/50">
                    Preview
                  </div>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full max-w-full scale-90">
                      {getComponentPreview(component.id)}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900/50 dark:to-transparent border-t border-gray-200 dark:border-gray-800 relative">
                <div className="text-sm font-semibold text-[#5f52ff] flex items-center">
                  <span className="font-mono text-xs mr-2 opacity-60">&gt;</span>
                  View variants
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ComponentLibraryPage;
