import React from 'react';

// Price Card Variant Configuration
export const priceCardVarientCSS = {
  container: "relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-[#5f52ff]",
  header: "relative p-4 sm:p-5 md:p-6",
  title: "text-xl sm:text-2xl font-bold text-gray-900 mb-2",
  description: "text-gray-600 text-sm sm:text-base mb-4",
  content: "p-4 sm:p-5 md:p-6 pt-0",
  footer: "p-4 sm:p-5 md:p-6 pt-0 flex justify-end",
  image: "w-full h-64 sm:h-72 md:h-80 object-cover"
};

export const priceCardVarientData = {
  title: "Sports Psychology",
  description: "",
  content: (
    <div className="w-full">
      <div className="text-2xl sm:text-3xl font-bold text-gray-900">
        ₹2785 ($35)
      </div>
    </div>
  ) as React.ReactNode,
  footer: (
    <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg transition-colors duration-300">
      Buy Now
    </button>
  ) as React.ReactNode,
  imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
  imageAlt: "Sports Psychology"
};
