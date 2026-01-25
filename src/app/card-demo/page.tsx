'use client';

import React, { useState } from 'react';
import Card from '@/components/Card';

const CardDemoPage = () => {
  const [copied, setCopied] = useState(false);

  // Sample card data
  const sampleCardData = {
    title: "Nut UI Card Component",
    description: "A beautifully designed card component with customizable styles",
    content: "This is the content section of the card. You can put any content here including text, images, or other components.",
    footer: "Card Footer Information"
  };

  // Sample custom styles
  const customCardStyles = {
    container: "max-w-sm mx-auto",
    title: "text-2xl font-bold text-[#5f52ff]",
    content: "p-6 text-gray-700"
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#5f52ff] mb-4">Nut UI - Card Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A beautifully designed card component with customizable styles and dark mode support.
          </p>
        </header>

        {/* Preview Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">Preview</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex justify-center">
            <Card
              data={sampleCardData}
              style={customCardStyles}
            />
          </div>
        </div>

        {/* Code Section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Complete Card Component Code</h2>
            <button
              onClick={handleCopyCode}
              className="px-4 py-2 bg-[#5f52ff] text-white rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[#5f52ff] focus:ring-opacity-50"
            >
              {copied ? 'Copied!' : 'Copy Code'}
            </button>
          </div>

          <div className="bg-gray-900 rounded-xl overflow-hidden">
            <pre className="p-6 text-sm text-gray-200 overflow-x-auto max-h-96 overflow-y-auto">
              <code>{cardComponentCode}</code>
            </pre>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">How to Use</h3>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Installation:</h4>
              <ol className="list-decimal pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                <li>Create a new file <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">components/Card.tsx</code></li>
                <li>Copy and paste the code from above into that file</li>
                <li>Import the component where you want to use it</li>
              </ol>
              
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mt-4 mb-2">Usage Example:</h4>
              <pre className="p-4 bg-gray-800 text-gray-200 rounded overflow-x-auto text-sm">
{`import Card from '@/components/Card';

const MyComponent = () => {
  const cardData = {
    title: "My Card Title",
    description: "A short description",
    content: "Main content goes here",
    footer: "Footer information",
    imageUrl: "/path/to/image.jpg",
    imageAlt: "Description of image"
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
  );
};

export default CardDemoPage;