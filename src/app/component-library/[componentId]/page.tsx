'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Card from '@/components/Card';
import Table from '@/components/Table';
import Chip from '@/components/Chip';
import Map from '@/components/Map';
import NewsCardComponent from '@/components/variant/card/NewsCardComponent';
import PriceCardComponent from '@/components/variant/card/PriceCardComponent';
import { components } from '@/config/components';
import { variants } from '@/config/variants';
import { 
  basicCardCSS, 
  basicCardData,
  imageCardCSS,
  imageCardData,
  newsCardCSS,
  newsCardData,
  cardLowerHeadingCSS,
  cardLowerHeadingData,
  dataCardCSS,
  dataCardData,
  priceCardVarientCSS,
  priceCardVarientData
} from '@/components/variant/card';
import { 
  newsSliderCSS,
  newsSliderData,
  NewsSliderComponent,
  matchScoreCardSliderCSS,
  matchScoreCardSliderData,
  MatchScoreCardSliderComponent,
  matchScoreStackSliderCSS,
  matchScoreStackSliderData,
  MatchScoreStackSliderComponent
} from '@/components/variant/slider';
import {
  scoreBoardCSS,
  scoreBoardData
} from '@/components/variant/table';
import {
  popularSearchesCSS,
  popularSearchesData,
  PopularSearchesComponent
} from '@/components/variant/chip';
import {
  videoCardCSS,
  videoCardData,
  VideoCardComponent
} from '@/components/variant/clipCard';
import {
  basicMapCSS,
  basicMapData,
  BasicMapComponent,
  googleMapCSS,
  googleMapData,
  GoogleMapComponent
} from '@/components/variant/map';

const ComponentPage = () => {
  const params = useParams();
  const componentId = params.componentId as string;

  // Get component config dynamically
  const component = components.find(c => c.id === componentId);
  
  // Get all variants for this component dynamically
  const componentVariants = variants.filter(v => v.componentId === componentId);

  if (!component) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Component Not Found</h1>
          <Link 
            href="/component-library" 
            className="px-4 py-2 bg-[#5f52ff] text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Back to Component Library
          </Link>
        </div>
      </div>
    );
  }

  // Dynamic variant CSS and data mapping
  const getVariantConfig = (variantId: string) => {
    switch (componentId) {
      case 'card':
        switch (variantId) {
          case 'basic':
            return { css: basicCardCSS, data: basicCardData };
          case 'image':
            return { css: imageCardCSS, data: imageCardData };
          case 'news':
            return { css: newsCardCSS, data: newsCardData };
          case 'cardLowerHeading':
            return { css: cardLowerHeadingCSS, data: cardLowerHeadingData };
          case 'dataCard':
            return { css: dataCardCSS, data: dataCardData };
          case 'priceCardVarient':
            return { css: priceCardVarientCSS, data: priceCardVarientData };
          default:
            return null;
        }
      case 'slider':
        switch (variantId) {
          case 'news':
            return { css: newsSliderCSS, data: newsSliderData };
          case 'matchScoreCard':
            return { css: matchScoreCardSliderCSS, data: matchScoreCardSliderData };
          case 'matchScoreStack':
            return { css: matchScoreStackSliderCSS, data: matchScoreStackSliderData };
          default:
            return null;
        }
      case 'table':
        switch (variantId) {
          case 'scoreBoard':
            return { css: scoreBoardCSS, data: scoreBoardData };
          default:
            return null;
        }
      case 'chip':
        switch (variantId) {
          case 'popularSearches':
            return { css: popularSearchesCSS, data: popularSearchesData };
          default:
            return null;
        }
      case 'clipCard':
        switch (variantId) {
          case 'videoCard':
            return { css: videoCardCSS, data: videoCardData };
          default:
            return null;
        }
      case 'map':
        switch (variantId) {
          case 'basicMap':
            return { css: basicMapCSS, data: basicMapData };
          case 'googleMap':
            return { css: googleMapCSS, data: googleMapData };
          default:
            return null;
        }
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
              <li><Link href="/component-library" className="text-gray-600 hover:text-[#5f52ff] dark:text-gray-300 dark:hover:text-[#5f52ff]">Component Library</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="mb-8">
          <Link 
            href="/component-library" 
            className="inline-flex items-center text-[#5f52ff] hover:text-indigo-700 mb-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Component Library
          </Link>
        </div>

        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            {component.name} Variants
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            {component.description}
          </p>
        </div>

        {componentVariants.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
            {componentVariants.map((variant) => {
              const variantConfig = getVariantConfig(variant.id);
              if (!variantConfig) return null;

              return (
                <Link
                  key={variant.id}
                  href={`/component-library/${componentId}/variants/${variant.id}`}
                  className="block bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:border-[#5f52ff] cursor-pointer flex flex-col h-full"
                >
                  <div className="p-4 sm:p-5 flex-grow flex flex-col">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2">
                      {variant.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-2">
                      {variant.description}
                    </p>
                    
                    {/* Live Preview - Standardized sizing */}
                    <div className={`bg-gray-50 dark:bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden flex-grow ${
                      componentId === 'slider' && variant.id === 'matchScoreCard' 
                        ? 'p-2 sm:p-3 h-[280px] sm:h-[300px] lg:h-[320px] xl:h-[300px] 2xl:h-[320px]' 
                        : componentId === 'slider' 
                        ? 'p-2 sm:p-3 h-[280px] sm:h-[300px] lg:h-[320px] xl:h-[300px] 2xl:h-[320px]'
                        : componentId === 'table'
                        ? 'p-2 sm:p-3 h-[280px] sm:h-[300px] lg:h-[320px] xl:h-[300px] 2xl:h-[320px] overflow-x-auto'
                        : componentId === 'map'
                        ? 'p-2 sm:p-3 h-[280px] sm:h-[300px] lg:h-[320px] xl:h-[300px] 2xl:h-[320px]'
                        : 'p-3 sm:p-4 h-[280px] sm:h-[300px] lg:h-[320px] xl:h-[300px] 2xl:h-[320px]'
                    }`}>
                      <div className="w-full h-full flex items-center justify-center max-w-full">
                        <div className="w-full max-w-full scale-90 sm:scale-95 lg:scale-100 xl:scale-95 2xl:scale-100">
                      {componentId === 'slider' && variant.id === 'news' ? (
                        <div className="w-full h-full flex items-center justify-center">
                          <NewsSliderComponent css={variantConfig.css as any} data={variantConfig.data as any} />
                        </div>
                      ) : componentId === 'slider' && variant.id === 'matchScoreCard' ? (
                        <div className="w-full h-full flex items-center justify-center">
                          <MatchScoreCardSliderComponent css={variantConfig.css as any} data={variantConfig.data as any} />
                        </div>
                      ) : componentId === 'slider' && variant.id === 'matchScoreStack' ? (
                        <div className="w-full h-full flex items-center justify-center">
                          <MatchScoreStackSliderComponent css={variantConfig.css as any} data={variantConfig.data as any} />
                        </div>
                      ) : variant.id === 'news' && componentId === 'card' ? (
                        <NewsCardComponent css={variantConfig.css as any} data={variantConfig.data as any} />
                      ) : variant.id === 'priceCardVarient' && componentId === 'card' ? (
                        <PriceCardComponent css={variantConfig.css as any} data={variantConfig.data as any} />
                      ) : componentId === 'card' ? (
                        <Card css={variantConfig.css as any} data={variantConfig.data as any} />
                      ) : componentId === 'table' ? (
                        <Table css={variantConfig.css as any} data={variantConfig.data as any} />
                      ) : componentId === 'chip' ? (
                        <PopularSearchesComponent css={variantConfig.css as any} data={variantConfig.data as any} />
                      ) : componentId === 'clipCard' ? (
                        <VideoCardComponent css={variantConfig.css as any} data={variantConfig.data as any} />
                      ) : componentId === 'map' && variant.id === 'basicMap' ? (
                        <BasicMapComponent css={variantConfig.css as any} data={variantConfig.data as any} />
                      ) : componentId === 'map' && variant.id === 'googleMap' ? (
                        <GoogleMapComponent css={variantConfig.css as any} data={variantConfig.data as any} />
                      ) : componentId === 'map' ? (
                        <BasicMapComponent css={variantConfig.css as any} data={variantConfig.data as any} />
                      ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-5 border-t border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/50">
                    <div className="text-[#5f52ff] font-medium text-sm sm:text-base flex items-center justify-center sm:justify-start">
                      View Variant
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No variants available</h3>
            <p className="text-gray-600 dark:text-gray-400">
              No variants have been defined for the {component.name} component yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentPage;
