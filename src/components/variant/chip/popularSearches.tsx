import React from 'react';
import Chip from '@/components/Chip';

// Popular Searches Chip Variant Configuration
export const popularSearchesCSS = {
  container: "w-full",
  chip: "inline-flex items-center gap-1 sm:gap-2 md:gap-2.5 bg-purple-400/30 hover:bg-purple-400/40 text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded-full text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium transition-all duration-300 cursor-pointer border border-purple-300/20 whitespace-nowrap flex-shrink-0",
  text: "text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg",
  icon: "w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
};

// Search terms data - array of chip data
export const popularSearchesData = {
  chips: [
    { label: "Sanju Samson", icon: undefined },
    { label: "IPL Auction 2024", icon: undefined },
    { label: "Sawal Mansingh Stadium", icon: undefined },
    { label: "Yuzvendra Chahal", icon: undefined },
    { label: "Yashasvi Jaiswal", icon: undefined },
    { label: "Riyan Parag", icon: undefined },
    { label: "Dhruv Jurel", icon: undefined },
    { label: "Barsapara Stadium", icon: undefined },
    { label: "Shimron Hetmyer", icon: undefined },
    { label: "Kuldeep Sen", icon: undefined },
    { label: "Adam Zampa", icon: undefined }
  ]
};

// Popular Searches Component - displays multiple chips
interface PopularSearchesProps {
  css: typeof popularSearchesCSS;
  data: typeof popularSearchesData;
}

export const PopularSearchesComponent: React.FC<PopularSearchesProps> = ({ css, data }) => {
  return (
    <div className="w-full min-h-[300px] bg-gradient-to-b from-purple-900 via-purple-800 to-pink-600 rounded-lg p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center">
      {/* Header with search icon */}
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <svg 
          className="w-5 h-5 sm:w-6 sm:h-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Popular Searches</h2>
      </div>

      {/* Chips container - Left to Right in single row */}
      <div className="w-full max-w-4xl flex flex-row items-center justify-start gap-3 sm:gap-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {data.chips.map((chipData, index) => (
          <React.Fragment key={chipData.label}>
            <Chip 
              css={css} 
              data={chipData} 
            />
            {/* Add separator after chips except the last one */}
            {index < data.chips.length - 1 && (
              <div className="hidden sm:block w-px h-6 bg-white/30 flex-shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
