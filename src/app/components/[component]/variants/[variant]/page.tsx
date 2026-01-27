'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Mock data for component variants with code examples
const componentVariantData = {
  card: {
    basic: {
      name: 'Basic Card',
      description: 'Simple card with title and content',
      code: `import React from 'react';

interface CardProps {
  title?: string;
  content: string;
  className?: string;
}

const BasicCard: React.FC<CardProps> = ({ title, content, className = '' }) => {
  return (
    <div className={\`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 \${className}\`}>
      {title && (
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
      )}
      <div className="p-4">
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};

export default BasicCard;`,
      preview: (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 max-w-sm">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Card Title</h3>
          </div>
          <div className="p-4">
            <p className="text-gray-700">This is the content of the basic card.</p>
          </div>
        </div>
      )
    },
    'with-image': {
      name: 'Card with Image',
      description: 'Card that includes an image',
      code: `import React from 'react';

interface CardWithImageProps {
  title?: string;
  content: string;
  imageUrl: string;
  imageAlt?: string;
  className?: string;
}

const CardWithImage: React.FC<CardWithImageProps> = ({ 
  title, 
  content, 
  imageUrl, 
  imageAlt = 'Card image', 
  className = '' 
}) => {
  return (
    <div className={\`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 \${className}\`}>
      <img 
        src={imageUrl} 
        alt={imageAlt} 
        className="w-full h-48 object-cover"
      />
      {title && (
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
      )}
      <div className="p-4">
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};

export default CardWithImage;`,
      preview: (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 max-w-sm">
          <div className="bg-gray-200 border-2 border-dashed w-full h-32" />
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Card with Image</h3>
          </div>
          <div className="p-4">
            <p className="text-gray-700">This card includes an image at the top.</p>
          </div>
        </div>
      )
    },
    'with-footer': {
      name: 'Card with Footer',
      description: 'Card with footer section',
      code: `import React from 'react';

interface CardWithFooterProps {
  title?: string;
  content: string;
  footer: string;
  className?: string;
}

const CardWithFooter: React.FC<CardWithFooterProps> = ({ 
  title, 
  content, 
  footer, 
  className = '' 
}) => {
  return (
    <div className={\`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 \${className}\`}>
      {title && (
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
      )}
      <div className="p-4">
        <p className="text-gray-700">{content}</p>
      </div>
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <p className="text-gray-600">{footer}</p>
      </div>
    </div>
  );
};

export default CardWithFooter;`,
      preview: (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 max-w-sm">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Card with Footer</h3>
          </div>
          <div className="p-4">
            <p className="text-gray-700">This card has a footer section at the bottom.</p>
          </div>
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <p className="text-gray-600">Footer content</p>
          </div>
        </div>
      )
    },
    horizontal: {
      name: 'Horizontal Card',
      description: 'Horizontally oriented card',
      code: `import React from 'react';

interface HorizontalCardProps {
  title?: string;
  content: string;
  imageUrl?: string;
  imageAlt?: string;
  className?: string;
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({ 
  title, 
  content, 
  imageUrl, 
  imageAlt = 'Card image', 
  className = '' 
}) => {
  return (
    <div className={\`flex bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 \${className}\`}>
      {imageUrl && (
        <div className="w-1/3">
          <img 
            src={imageUrl} 
            alt={imageAlt} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="w-2/3 p-4">
        {title && <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>}
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};

export default HorizontalCard;`,
      preview: (
        <div className="flex bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 max-w-md">
          <div className="w-1/3 bg-gray-200 border-2 border-dashed" />
          <div className="w-2/3 p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Horizontal Card</h3>
            <p className="text-gray-700">This card is oriented horizontally.</p>
          </div>
        </div>
      )
    }
  },
  button: {
    primary: {
      name: 'Primary Button',
      description: 'Standard primary button',
      code: `import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  disabled = false, 
  className = '' 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={\`px-4 py-2 bg-[#5f52ff] text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed \${className}\`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;`,
      preview: (
        <button className="px-4 py-2 bg-[#5f52ff] text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Primary Button
        </button>
      )
    },
    secondary: {
      name: 'Secondary Button',
      description: 'Secondary button style',
      code: `import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const SecondaryButton: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  disabled = false, 
  className = '' 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={\`px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed \${className}\`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;`,
      preview: (
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors">
          Secondary Button
        </button>
      )
    },
    outline: {
      name: 'Outline Button',
      description: 'Outline button style',
      code: `import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const OutlineButton: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  disabled = false, 
  className = '' 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={\`px-4 py-2 border border-[#5f52ff] text-[#5f52ff] rounded-lg hover:bg-[#5f52ff] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed \${className}\`}
    >
      {children}
    </button>
  );
};

export default OutlineButton;`,
      preview: (
        <button className="px-4 py-2 border border-[#5f52ff] text-[#5f52ff] rounded-lg hover:bg-[#5f52ff] hover:text-white transition-colors">
          Outline Button
        </button>
      )
    },
    icon: {
      name: 'Icon Button',
      description: 'Button with icon',
      code: `import React from 'react';

interface IconButtonProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ 
  children, 
  icon, 
  onClick, 
  disabled = false, 
  className = '' 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={\`flex items-center px-4 py-2 bg-[#5f52ff] text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed \${className}\`}
    >
      <span className="mr-2">{icon}</span>
      {children}
    </button>
  );
};

export default IconButton;`,
      preview: (
        <button className="flex items-center px-4 py-2 bg-[#5f52ff] text-white rounded-lg hover:bg-indigo-700 transition-colors">
          <span className="mr-2">★</span>
          Icon Button
        </button>
      )
    }
  }
};

const ComponentVariantPage = () => {
  const params = useParams();
  const componentName = params.component as string;
  const variantId = params.variant as string;

  const componentData = componentVariantData[componentName as keyof typeof componentVariantData];
  const variantData = componentData?.[variantId as keyof typeof componentData];

  const [copied, setCopied] = useState(false);

  if (!variantData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Variant Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              The requested variant does not exist for this component.
            </p>
            <Link 
              href={`/components/${componentName}`} 
              className="px-4 py-2 bg-[#5f52ff] text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Back to {componentName.charAt(0).toUpperCase() + componentName.slice(1)} Variants
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(variantData.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied status after 2 seconds
  };

  // Convert component name to title case
  const componentTitle = componentName
    ? componentName.charAt(0).toUpperCase() + componentName.slice(1)
    : 'Component';

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
              <li><Link href="/component-library" className="text-gray-600 hover:text-[#5f52ff] dark:text-gray-300 dark:hover:text-[#5f52ff]">Components</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-[#5f52ff] dark:text-gray-300 dark:hover:text-[#5f52ff]">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#5f52ff] dark:text-gray-300 dark:hover:text-[#5f52ff]">GitHub</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="mb-8">
          <Link 
            href={`/components/${componentName}`} 
            className="inline-flex items-center text-[#5f52ff] hover:text-indigo-700 mb-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to {componentTitle} Variants
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {variantData.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                {variantData.description}
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="inline-block px-3 py-1 bg-indigo-100 text-[#5f52ff] rounded-full text-sm font-medium">
                {componentTitle}
              </span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Preview</h2>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 flex justify-center items-center min-h-[200px]">
              {variantData.preview}
            </div>
          </div>

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
                <code>{variantData.code}</code>
              </pre>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">How to Use</h3>
              
              <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Installation:</h4>
                <ol className="list-decimal pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Create a new file <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">components/{variantData.name.replace(/\s+/g, '')}.tsx</code></li>
                  <li>Copy and paste the code from above into that file</li>
                  <li>Import the component where you want to use it</li>
                </ol>

                <h4 className="font-medium text-gray-700 dark:text-gray-300 mt-4 mb-2">Usage Example:</h4>
                <pre className="p-4 bg-gray-800 text-gray-200 rounded overflow-x-auto text-sm">
{`import ${variantData.name.replace(/\s+/g, '')} from '@/components/${variantData.name.replace(/\s+/g, '')}';

const MyComponent = () => {
  return (
    <${variantData.name.replace(/\s+/g, '')}>
      {variantData.name} content
    </${variantData.name.replace(/\s+/g, '')}>
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

export default ComponentVariantPage;