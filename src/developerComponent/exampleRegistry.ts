/**
 * Example Component Code Registry
 * 
 * This file contains the example/demo code for all components as strings.
 * It's automatically maintained - when you add a new component to developerComponent,
 * you need to add its example code here.
 * 
 * In the future, this could be auto-generated from the actual files.
 */

import { components } from '@/config/components';
import { variants } from '@/config/variants';

// Helper function to get example code for a component
export const getExampleCode = (
  componentId: string,
  variantId: string,
  displayCSS: any,
  displayData: any
): string => {
  const component = components.find(c => c.id === componentId);
  const variant = variants.find(v => v.id === variantId && v.componentId === componentId);
  
  if (!component || !variant) {
    return '// Example code not available';
  }

  // Card variants
  if (componentId === 'card') {
    if (variantId === 'news') {
      // News card uses NewsCardFooter component
      const newsData = displayData as any;
      return `// Example: Using ${variant.name} in your application

import { Card } from '@/developerComponent/componentCollection';
import NewsCardFooter from '@/components/variant/card/NewsCardFooter';

function MyPage() {
  // Define CSS object
  const cardCSS = ${JSON.stringify(displayCSS, null, 4)};

  // Define data object with NewsCardFooter component
  const cardData = {
    title: ${JSON.stringify(newsData.title || '')},
    description: ${JSON.stringify(newsData.description || '')},
    content: ${JSON.stringify(newsData.content || '')},
    footer: (
      <NewsCardFooter 
        date="26 Jan, 2026"
        shareTitle=${JSON.stringify(newsData.title || '')}
        shareUrl="https://example.com/article"
      />
    ),
    imageUrl: ${JSON.stringify(newsData.imageUrl || '')},
    imageAlt: ${JSON.stringify(newsData.imageAlt || '')}
  };

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <Card css={cardCSS} data={cardData} />
    </div>
  );
}

export default MyPage;`;
    } else if (variantId === 'priceCardVarient') {
      // Price card uses PriceCardComponent
      return `// Example: Using ${variant.name} in your application

import PriceCard from '@/components/variant/card/PriceCardComponent';

function MyPage() {
  // Define CSS object
  const priceCardCSS = ${JSON.stringify(displayCSS, null, 4)};

  // Define data object
  const priceCardData = ${JSON.stringify(displayData, null, 4)};

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <PriceCard css={priceCardCSS} data={priceCardData} />
    </div>
  );
}

export default MyPage;`;
    } else {
      // Other card variants use base Card component
      return `// Example: Using ${variant.name} in your application

import { Card } from '@/developerComponent/componentCollection';

function MyPage() {
  // Define CSS object
  const cardCSS = ${JSON.stringify(displayCSS, null, 4)};

  // Define data object
  const cardData = ${JSON.stringify(displayData, null, 4)};

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <Card css={cardCSS} data={cardData} />
    </div>
  );
}

export default MyPage;`;
    }
  }

  // Slider component
  if (componentId === 'slider') {
    return `// Example: Using ${variant.name} in your application

// Step 1: Install Swiper (if not already installed)
// npm install swiper

// Step 2: Import the component and Swiper dependencies
import { Slider } from '@/developerComponent/componentCollection';
import 'swiper/css';
import 'swiper/css/navigation';

function MyPage() {
  // Step 3: Define CSS object with all styling classes
  const sliderCSS = ${JSON.stringify(displayCSS, null, 4)};

  // Step 4: Define data object with slides array
  const sliderData = ${JSON.stringify(displayData, null, 4)};

  // Step 5: Use the component
  return (
    <div className="container mx-auto p-4">
      <Slider css={sliderCSS} data={sliderData} />
    </div>
  );
}

export default MyPage;

// Additional Configuration Options:
// - slidesPerView: Number of slides visible at once (default: 1.2)
// - spaceBetween: Space between slides in pixels (default: 20)
// - centeredSlides: Center the active slide (default: true)
// - loop: Enable infinite loop (default: true)
// - breakpoints: Responsive breakpoints for different screen sizes`;
  }

  // Table component
  if (componentId === 'table') {
    return `// Example: Using ${variant.name} in your application

import { Table } from '@/developerComponent/componentCollection';

function MyPage() {
  // Define CSS object with all styling classes
  const tableCSS = ${JSON.stringify(displayCSS, null, 4)};

  // Define data object with columns and rows
  const tableData = ${JSON.stringify(displayData, null, 4)};

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <Table css={tableCSS} data={tableData} />
    </div>
  );
}

export default MyPage;`;
  }

  // Chip component
  if (componentId === 'chip') {
    return `// Example: Using ${variant.name} in your application

import { Chip } from '@/developerComponent/componentCollection';

function MyPage() {
  // Define CSS object with all styling classes
  const chipCSS = ${JSON.stringify(displayCSS, null, 4)};

  // Define data object with chip information
  const chipData = ${JSON.stringify(displayData, null, 4)};

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <Chip css={chipCSS} data={chipData} />
    </div>
  );
}

export default MyPage;`;
  }

  // ClipCard component
  if (componentId === 'clipCard') {
    return `// Example: Using ${variant.name} in your application

import { ClipCard } from '@/developerComponent/componentCollection';

function MyPage() {
  // Define CSS object with all styling classes
  const clipCardCSS = ${JSON.stringify(displayCSS, null, 4)};

  // Define data object with video information
  const clipCardData = ${JSON.stringify(displayData, null, 4)};

  // Use the component
  // Note: Clicking the card will redirect to the URL specified in redirectUrl
  return (
    <div className="container mx-auto p-4">
      <ClipCard css={clipCardCSS} data={clipCardData} />
    </div>
  );
}

export default MyPage;`;
  }

  // Map component
  if (componentId === 'map') {
    return `// Example: Using ${variant.name} in your application

import { Map } from '@/developerComponent/componentCollection';

function MyPage() {
  // Define CSS object with all styling classes
  const mapCSS = ${JSON.stringify(displayCSS, null, 4)};

  // Define data object with latitude and longitude
  const mapData = ${JSON.stringify(displayData, null, 4)};

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <div className="w-full h-[400px]">
        <Map css={mapCSS} data={mapData} />
      </div>
    </div>
  );
}

export default MyPage;`;
  }

  
  // Vibhor component
  if (componentId === 'vibhor') {
    return `// Example: Using ${variant.name} in your application

import { Vibhor } from '@/developerComponent/componentCollection';

function MyPage() {
  // Define CSS object with all styling classes
  const vibhorCSS = ${JSON.stringify(displayCSS, null, 4)};

  // Define data object
  const vibhorData = ${JSON.stringify(displayData, null, 4)};

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <Vibhor css={${vibhorCSS}} data={${vibhorData}} />
    </div>
  );
}

export default MyPage;`;
  }
// Default fallback
  return `// Example: Using ${variant.name} in your application

import { Component } from '@/developerComponent/componentCollection';

function MyPage() {
  // Define CSS object
  const componentCSS = ${JSON.stringify(displayCSS, null, 4)};

  // Define data object
  const componentData = ${JSON.stringify(displayData, null, 4)};

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <Component css={componentCSS} data={componentData} />
    </div>
  );
}

export default MyPage;`;
};
