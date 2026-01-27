'use client';

import React from 'react';
import Link from 'next/link';
import Card from '@/components/Card';
import { 
  basicCardCSS, 
  basicCardData,
  imageCardCSS,
  imageCardData,
  footerCardCSS,
  footerCardData
} from '@/components/variant/card';

const CardPage = () => {
  const variants = [
    {
      id: 'basic',
      name: 'Basic Card',
      description: 'Simple card with title and content',
      css: basicCardCSS,
      data: basicCardData
    },
    {
      id: 'image',
      name: 'Card with Image',
      description: 'Card that includes an image',
      css: imageCardCSS,
      data: imageCardData
    },
    {
      id: 'footer',
      name: 'Card with Footer',
      description: 'Card with footer section',
      css: footerCardCSS,
      data: footerCardData
    }
  ];

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
              <li><Link href="/components/card" className="text-[#5f52ff] font-medium">Card</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Card Component Variants
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            All CSS and data are passed as props. Nothing is hardcoded in the core component.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {variants.map((variant) => (
            <Link
              key={variant.id}
              href={`/components/card/variant/${variant.id}`}
              className="block bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:border-[#5f52ff] cursor-pointer"
            >
              <div className="p-5">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {variant.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                  {variant.description}
                </p>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 flex justify-center">
                  <Card css={variant.css} data={variant.data} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardPage;
