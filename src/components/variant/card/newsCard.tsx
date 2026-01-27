import React from 'react';
import NewsCardFooter from './NewsCardFooter';

// News Card Variant Configuration - Image with text overlay
export const newsCardCSS = {
  container: "bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-[#5f52ff] relative",
  header: "absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent",
  title: "text-white text-base sm:text-lg md:text-xl font-bold mb-3 line-clamp-2",
  description: "text-white/90 text-xs sm:text-sm mb-2",
  content: "hidden",
  footer: "flex items-center justify-between text-white/90 text-xs sm:text-sm mt-2 w-full",
  image: "w-full h-64 sm:h-72 md:h-80 object-cover"
};

export const newsCardData = {
  title: "Shimron Hetmyer named in West Indies' T20 World Cup 2026 squad",
  description: "",
  content: "",
  footer: (
    <NewsCardFooter 
      date="26 Jan, 2026"
      shareTitle="Shimron Hetmyer named in West Indies' T20 World Cup 2026 squad"
    />
  ) as React.ReactNode,
  imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
  imageAlt: "Cricket match action"
};
