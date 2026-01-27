'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Card from '@/components/Card';
import { 
  newsCardCSS,
  newsCardData,
  cardLowerHeadingCSS,
  cardLowerHeadingData,
  dataCardCSS,
  dataCardData
} from '@/components/variant/card';

const CardVariantPage = () => {
  const params = useParams();
  const variantId = params.variantId as string;
  const [copied, setCopied] = useState(false);

  const variants: Record<string, { css: any; data: any; name: string; description: string }> = {
    news: {
      css: newsCardCSS,
      data: newsCardData,
      name: 'News Card',
      description: 'News article card with image overlay and text'
    },
    cardLowerHeading: {
      css: cardLowerHeadingCSS,
      data: cardLowerHeadingData,
      name: 'Card Lower Heading',
      description: 'Card with image and heading positioned at the bottom'
    },
    dataCard: {
      css: dataCardCSS,
      data: dataCardData,
      name: 'Data Card',
      description: 'Minimalist card displaying a number with label'
    }
  };

  const variant = variants[variantId];

  if (!variant) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Variant Not Found</h1>
          <Link 
            href="/components/card" 
            className="px-4 py-2 bg-[#5f52ff] text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Back to Card Variants
          </Link>
        </div>
      </div>
    );
  }

  const componentCode = `import Card from '@/components/Card';

const MyComponent = () => {
  const cardCSS = ${JSON.stringify(variant.css, null, 2)};

  const cardData = ${JSON.stringify(variant.data, null, 2)};

  return (
    <Card css={cardCSS} data={cardData} />
  );
};

export default MyComponent;`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(componentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
              <li><Link href="/components/card" className="text-gray-600 hover:text-[#5f52ff] dark:text-gray-300 dark:hover:text-[#5f52ff]">Card</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="mb-8">
          <Link 
            href="/components/card" 
            className="inline-flex items-center text-[#5f52ff] hover:text-indigo-700 mb-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Card Variants
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {variant.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              {variant.description}
            </p>
          </div>

          {/* Preview Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Preview</h2>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 flex justify-center items-center min-h-[200px]">
              <Card css={variant.css} data={variant.data} />
            </div>
          </div>

          {/* Code Section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Code</h2>
              <button
                onClick={handleCopyCode}
                className="px-4 py-2 bg-[#5f52ff] text-white rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[#5f52ff] focus:ring-opacity-50"
              >
                {copied ? 'Copied!' : 'Copy Code'}
              </button>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <pre className="p-4 text-sm text-gray-200 overflow-x-auto max-h-96 overflow-y-auto">
                <code>{componentCode}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardVariantPage;
