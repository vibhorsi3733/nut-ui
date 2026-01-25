'use client';

import React, { useState } from 'react';
import Card from '@/components/Card';
import Link from 'next/link';

const CardDetailPage = () => {
  const [copied, setCopied] = useState(false);

  // Sample card data for preview
  const sampleCardData = {
    title: "Sample Card",
    description: "A beautiful card component",
    content: "This is a sample card to demonstrate the component.",
    footer: "Card Footer"
  };

  // Complete Card component code
  const cardComponentCode = `import React from 'react';

// Define TypeScript interfaces
interface CardStyle {
  container?: string;
  header?: string;
  title?: string;
  description?: string;
  content?: string;
  footer?: string;
  image?: string;
}

interface CardData {
  title?: string;
  description?: string;
  content?: string | React.ReactNode;
  footer?: string | React.ReactNode;
  imageUrl?: string;
  imageAlt?: string;
}

interface CardProps {
  style?: CardStyle;
  data: CardData;
  className?: string;
}

const Card: React.FC<CardProps> = ({ style = {}, data, className = '' }) => {
  // Default styles for the card components with white background and black text
  const defaultStyles: CardStyle = {
    container: \`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-[#5f52ff] \${className}\`,
    header: 'p-6 pb-4',
    title: 'text-xl font-bold text-black mb-2',
    description: 'text-gray-600 text-sm',
    content: 'p-6 pt-0',
    footer: 'p-6 pt-0 text-sm text-[#5f52ff]',
    image: 'w-full h-auto object-cover',
  };

  // Merge default styles with custom styles
  const mergedStyles = {
    container: \`\${defaultStyles.container} \${style.container || ''}\`,
    header: \`\${defaultStyles.header} \${style.header || ''}\`,
    title: \`\${defaultStyles.title} \${style.title || ''}\`,
    description: \`\${defaultStyles.description} \${style.description || ''}\`,
    content: \`\${defaultStyles.content} \${style.content || ''}\`,
    footer: \`\${defaultStyles.footer} \${style.footer || ''}\`,
    image: \`\${defaultStyles.image} \${style.image || ''}\`,
  };

  return (
    <div className={mergedStyles.container}>
      {data.imageUrl && (
        <img
          src={data.imageUrl}
          alt={data.imageAlt || 'Card image'}
          className={mergedStyles.image}
        />
      )}

      {(data.title || data.description) && (
        <div className={mergedStyles.header}>
          {data.title && <h3 className={mergedStyles.title}>{data.title}</h3>}
          {data.description && <p className={mergedStyles.description}>{data.description}</p>}
        </div>
      )}

      {data.content && (
        <div className={mergedStyles.content}>
          {typeof data.content === 'string' ? <p>{data.content}</p> : data.content}
        </div>
      )}

      {data.footer && (
        <div className={mergedStyles.footer}>
          {typeof data.footer === 'string' ? <p>{data.footer}</p> : data.footer}
        </div>
      )}
    </div>
  );
};

export default Card;`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(cardComponentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied status after 2 seconds
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
              <li><Link href="/component-library" className="text-[#5f52ff] font-medium">Components</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-[#5f52ff] dark:text-gray-300 dark:hover:text-[#5f52ff]">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#5f52ff] dark:text-gray-300 dark:hover:text-[#5f52ff]">GitHub</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white capitalize">Card Component</h2>
            <Link 
              href="/component-library"
              className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-[#5f52ff] dark:hover:text-[#5f52ff] self-start sm:self-auto"
            >
              ← Back to Components
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-6 p-4 sm:p-6">
            {/* Preview Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-4">Preview</h3>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 sm:p-5 md:p-6 min-h-[250px] sm:min-h-[300px] md:min-h-[400px] flex items-center justify-center">
                <div className="w-full max-w-xs">
                  <Card data={sampleCardData} />
                </div>
              </div>
            </div>

            {/* Code Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">Code</h3>
                <button
                  onClick={handleCopyCode}
                  className="px-4 py-2 bg-[#5f52ff] text-white rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[#5f52ff] focus:ring-opacity-50 self-start sm:self-auto"
                >
                  {copied ? 'Copied!' : 'Copy Code'}
                </button>
              </div>

              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <pre className="p-3 sm:p-4 text-xs sm:text-sm text-gray-200 overflow-x-auto max-h-[300px] sm:max-h-96 overflow-y-auto">
                  <code>
                    {cardComponentCode}
                  </code>
                </pre>
              </div>

              <div className="mt-4 sm:mt-6">
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2 text-base">How to Use:</h4>
                <pre className="p-3 sm:p-4 bg-gray-800 text-gray-200 rounded overflow-x-auto text-xs sm:text-sm">
{`import Card from '@/components/Card';

const MyComponent = () => {
  const cardData = {
    title: "My Card Title",
    description: "A short description",
    content: "Main content goes here",
    footer: "Footer information"
  };

  return (
    <Card data={cardData} />
  );
};`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailPage;