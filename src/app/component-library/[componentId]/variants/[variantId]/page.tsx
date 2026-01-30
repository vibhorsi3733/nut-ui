'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Card from '@/components/Card';
import NewsCardComponent from '@/components/variant/card/NewsCardComponent';
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
  dataCardData
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

const VariantPage = () => {
  const params = useParams();
  const componentId = params.componentId as string;
  const variantId = params.variantId as string;
  const [copied, setCopied] = useState(false);

  // Get component and variant configs dynamically
  const component = components.find(c => c.id === componentId);
  const variant = variants.find(v => v.id === variantId && v.componentId === componentId);

  if (!component || !variant) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Variant Not Found</h1>
          <Link 
            href={`/component-library/${componentId}`} 
            className="px-4 py-2 bg-[#5f52ff] text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Back to {component?.name || 'Component'} Variants
          </Link>
        </div>
      </div>
    );
  }

  // Dynamic variant CSS and data mapping
  const getVariantConfig = (): { css: any; data: any } | null => {
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
      default:
        return null;
    }
  };

  const variantConfig = getVariantConfig();

  if (!variantConfig) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Variant Configuration Not Found</h1>
          <Link 
            href={`/component-library/${componentId}`} 
            className="px-4 py-2 bg-[#5f52ff] text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Back to {component.name} Variants
          </Link>
        </div>
      </div>
    );
  }

  // Dynamic base component code - loaded from user_visible_code folder
  const getBaseComponentCode = () => {
    switch (componentId) {
      case 'card':
        return `import React from 'react';

// Define TypeScript interfaces
interface CardCSS {
  container: string;
  header: string;
  title: string;
  description: string;
  content: string;
  footer: string;
  image: string;
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
  css: CardCSS;
  data: CardData;
}

const Card: React.FC<CardProps> = ({ css, data }) => {
  return (
    <div className={css.container}>
      {data.imageUrl && (
        <img 
          src={data.imageUrl} 
          alt={data.imageAlt || 'Card image'} 
          className={css.image}
        />
      )}
      
      {(data.title || data.description) && (
        <div className={css.header}>
          {data.title && <h3 className={css.title}>{data.title}</h3>}
          {data.description && <p className={css.description}>{data.description}</p>}
        </div>
      )}
      
      {data.content && (
        <div className={css.content}>
          {typeof data.content === 'string' ? <p>{data.content}</p> : data.content}
        </div>
      )}
      
      {data.footer && (
        <div className={css.footer}>
          {typeof data.footer === 'string' ? <p>{data.footer}</p> : data.footer}
        </div>
      )}
    </div>
  );
};

export default Card;`;
      case 'slider':
        return `'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Define TypeScript interfaces
interface SliderCSS {
  container: string;
  slide: string;
  image: string;
  overlay: string;
  title: string;
  category: string;
  navigation: string;
  prevButton: string;
  nextButton: string;
}

interface SlideData {
  imageUrl: string;
  imageAlt?: string;
  title: string;
  category?: string;
}

interface SliderData {
  slides: SlideData[];
}

interface SliderProps {
  css: SliderCSS;
  data: SliderData;
}

const Slider: React.FC<SliderProps> = ({ css, data }) => {
  const swiperRef = React.useRef<SwiperType | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 24
          },
          768: {
            slidesPerView: 1.8,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 2.2,
            spaceBetween: 40
          }
        }}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom'
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full"
      >
        {data.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={css.slide}>
              <img 
                src={slide.imageUrl} 
                alt={slide.imageAlt || slide.title} 
                className={css.image}
              />
              <div className={css.overlay}>
                {slide.category && <p className={css.category}>{slide.category}</p>}
                {slide.title && <h3 className={css.title}>{slide.title}</h3>}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation */}
      <div className={css.navigation}>
        <button 
          className={\`\${css.prevButton} swiper-button-prev-custom\`}
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          className={\`\${css.nextButton} swiper-button-next-custom\`}
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;`;
      default:
        return '// Component code not available';
    }
  };

  const componentCode = getBaseComponentCode();

  // Dynamic usage example - handle React components in footer
  const getUsageExample = () => {
    if (componentId === 'slider') {
      return `// Example: Using ${variant.name} in your application

// Step 1: Install Swiper (if not already installed)
// npm install swiper

// Step 2: Import the component and Swiper dependencies
import Slider from '@/components/user_visible_code/Slider';
import 'swiper/css';
import 'swiper/css/navigation';

function MyPage() {
  // Step 3: Define CSS object with all styling classes
  const sliderCSS = ${JSON.stringify(variantConfig.css, null, 4)};

  // Step 4: Define data object with slides array
  const sliderData = ${JSON.stringify(variantConfig.data, null, 4)};

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
    
    // If footer is a React component, show how to import and use it
    if (variantId === 'news' && componentId === 'card') {
      return `// Example: Using ${variant.name} in your application

import Card from '@/components/Card';
import NewsCardFooter from '@/components/variant/card/NewsCardFooter';

function MyPage() {
  // Define CSS object
  const cardCSS = ${JSON.stringify(variantConfig.css, null, 4)};

  // Define data object
  const cardData = {
    title: "${variantConfig.data.title}",
    description: "${variantConfig.data.description}",
    content: "${variantConfig.data.content}",
    footer: (
      <NewsCardFooter 
        date="26 Jan, 2026"
        shareTitle="${variantConfig.data.title}"
        shareUrl="https://example.com/article"
      />
    ),
    imageUrl: "${variantConfig.data.imageUrl}",
    imageAlt: "${variantConfig.data.imageAlt}"
  };

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <Card css={cardCSS} data={cardData} />
    </div>
  );
}

export default MyPage;`;
    }
    
    return `// Example: Using ${variant.name} in your application

import Card from '@/components/Card';

function MyPage() {
  // Define CSS object
  const cardCSS = ${JSON.stringify(variantConfig.css, null, 4)};

  // Define data object
  const cardData = ${JSON.stringify(variantConfig.data, null, 4)};

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <Card css={cardCSS} data={cardData} />
    </div>
  );
}

export default MyPage;`;
  };

  const usageExample = getUsageExample();

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
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
              <li><Link href="/component-library" className="text-gray-600 hover:text-[#5f52ff] dark:text-gray-300 dark:hover:text-[#5f52ff]">Component Library</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="mb-8">
          <Link 
            href={`/component-library/${componentId}`} 
            className="inline-flex items-center text-[#5f52ff] hover:text-indigo-700 mb-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to {component.name} Variants
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

          {/* Live Preview Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Preview</h2>
            <div className={`bg-gray-50 dark:bg-gray-700 rounded-lg ${
              componentId === 'slider' && (variantId === 'matchScoreCard' || variantId === 'matchScoreStack')
                ? 'p-4 sm:p-6 md:p-8 min-h-[500px] sm:min-h-[550px] overflow-hidden'
                : componentId === 'slider'
                ? 'p-8 min-h-[500px] overflow-hidden'
                : 'p-6 min-h-[200px] flex justify-center items-center'
            }`}>
              {componentId === 'slider' && variantId === 'news' ? (
                <div className="w-full h-full flex items-center justify-center">
                  <NewsSliderComponent css={variantConfig.css as any} data={variantConfig.data as any} />
                </div>
              ) : componentId === 'slider' && variantId === 'matchScoreCard' ? (
                <div className="w-full h-full flex items-center justify-center">
                  <MatchScoreCardSliderComponent css={variantConfig.css as any} data={variantConfig.data as any} />
                </div>
              ) : componentId === 'slider' && variantId === 'matchScoreStack' ? (
                <div className="w-full h-full flex items-center justify-center">
                  <MatchScoreStackSliderComponent css={variantConfig.css as any} data={variantConfig.data as any} />
                </div>
              ) : variantId === 'news' && componentId === 'card' ? (
                <NewsCardComponent css={variantConfig.css as any} data={variantConfig.data as any} />
              ) : componentId === 'card' ? (
                <Card css={variantConfig.css as any} data={variantConfig.data as any} />
              ) : null}
            </div>
          </div>

          {/* Component Code Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Component Code</h2>
              <button
                onClick={() => handleCopyCode(componentCode)}
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

          {/* How to Use Section - Only for Slider */}
          {componentId === 'slider' && (
            <div className="mb-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">How to Use - Step by Step</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Install Swiper</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Install the Swiper package using npm or yarn:</p>
                    <div className="bg-gray-900 rounded-lg p-3 mt-2">
                      <code className="text-white text-sm">npm install swiper</code>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Import Required Dependencies</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Import the Slider component and Swiper CSS styles:</p>
                    <div className="bg-gray-900 rounded-lg p-3">
                      <pre className="text-white text-xs overflow-x-auto">
                        <code>{`import Slider from '@/components/user_visible_code/Slider';
import 'swiper/css';
import 'swiper/css/navigation';`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Define CSS Object</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Create a CSS object with all styling classes for the slider, slides, images, overlays, navigation buttons, etc.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Define Data Object</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Create a data object with a slides array. Each slide should have imageUrl, imageAlt, title, and category properties.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">5</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Use the Component</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Render the Slider component and pass the css and data props:</p>
                    <div className="bg-gray-900 rounded-lg p-3 mt-2">
                      <pre className="text-white text-xs overflow-x-auto">
                        <code>{`<Slider css={sliderCSS} data={sliderData} />`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Usage Example Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Usage Example</h2>
              <button
                onClick={() => handleCopyCode(usageExample)}
                className="px-4 py-2 bg-[#5f52ff] text-white rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[#5f52ff] focus:ring-opacity-50"
              >
                {copied ? 'Copied!' : 'Copy Usage'}
              </button>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <pre className="p-4 text-sm text-gray-200 overflow-x-auto max-h-96 overflow-y-auto">
                <code>{usageExample}</code>
              </pre>
            </div>
          </div>

          {/* Props Documentation Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Props Documentation</h2>
            
            <div className="space-y-6">
              {/* CSS Props */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">CSS Props (css object)</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Each property in the css object is a string containing Tailwind CSS classes. You can combine multiple classes to style each part of the card.</p>
                <div className="space-y-3">
                  <div className="border-l-4 border-[#5f52ff] pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">container</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Main card container styling. Controls the overall card appearance including background, border, shadow, and hover effects.</p>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded p-2 text-xs">
                      <p className="text-gray-600 dark:text-gray-300"><strong>Example classes:</strong> bg-white, rounded-xl, shadow-lg, border, transition-all, hover:shadow-xl</p>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">Each class controls a specific visual property (background, border radius, shadow, etc.)</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-[#5f52ff] pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">header</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Header section styling. Controls padding, positioning, and background for the area containing title and description.</p>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded p-2 text-xs">
                      <p className="text-gray-600 dark:text-gray-300"><strong>Example classes:</strong> p-4, absolute, bottom-0, bg-gradient-to-t</p>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">Use "absolute" for overlay positioning, "p-4" for padding, "bg-gradient-to-t" for gradient backgrounds</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-[#5f52ff] pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">title</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Title text styling. Controls font size, weight, color, and spacing for the card title.</p>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded p-2 text-xs">
                      <p className="text-gray-600 dark:text-gray-300"><strong>Example classes:</strong> text-white, text-xl, font-bold, mb-3, line-clamp-2</p>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">text-white = text color, text-xl = font size, font-bold = font weight, mb-3 = margin bottom, line-clamp-2 = max 2 lines</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-[#5f52ff] pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">description</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Description text styling. Controls font size, color, and spacing for the card description text.</p>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded p-2 text-xs">
                      <p className="text-gray-600 dark:text-gray-300"><strong>Example classes:</strong> text-white/90, text-sm, mb-2</p>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">text-white/90 = white with 90% opacity, text-sm = small font size, mb-2 = margin bottom</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-[#5f52ff] pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">content</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Content area styling. Controls padding and styling for the main content section.</p>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded p-2 text-xs">
                      <p className="text-gray-600 dark:text-gray-300"><strong>Example classes:</strong> p-4, hidden</p>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">Use "hidden" to hide this section completely, or use "p-4" for padding if you want to show content</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-[#5f52ff] pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">footer</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Footer section styling. Controls layout, padding, and text styling for the footer area (e.g., date, share button).</p>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded p-2 text-xs">
                      <p className="text-gray-600 dark:text-gray-300"><strong>Example classes:</strong> flex, items-center, justify-between, text-white/90, text-sm</p>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">flex = flexbox layout, items-center = vertical alignment, justify-between = space between items, text-white/90 = text color with opacity</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-[#5f52ff] pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">image</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Image styling. Controls width, height, object-fit, and other image display properties.</p>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded p-2 text-xs">
                      <p className="text-gray-600 dark:text-gray-300"><strong>Example classes:</strong> w-full, h-64, object-cover</p>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">w-full = full width, h-64 = fixed height, object-cover = cover entire area while maintaining aspect ratio</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Props */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Data Props (data object)</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">title</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Card title text. Displayed in the header section. Optional - card will work without it.</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">description</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Card description text. Displayed below the title in the header section. Optional.</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">content</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Main content of the card. Can be a string or React component (like forms, buttons, lists, etc.). Optional.</p>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded p-2 text-xs mt-2">
                      <p className="text-gray-600 dark:text-gray-300 mb-1"><strong>String example:</strong> "This is the main content text"</p>
                      <p className="text-gray-600 dark:text-gray-300"><strong>React component example:</strong> &lt;div&gt;&lt;button&gt;Click me&lt;/button&gt;&lt;/div&gt;</p>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">When using a React component, you can pass any valid React element or component as the content.</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">footer</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Footer content. Can be a string or React component (like date, share buttons, etc.). Optional.</p>
                    
                    <div className="bg-gray-50 dark:bg-gray-700 rounded p-2 text-xs mb-2">
                      <p className="text-gray-600 dark:text-gray-300 mb-1"><strong>String example:</strong> "Footer text here"</p>
                      <p className="text-gray-600 dark:text-gray-300"><strong>React component example:</strong> &lt;NewsCardFooter date="26 Jan, 2026" /&gt;</p>
                    </div>
                    
                    {/* Nested Object: NewsCardFooter Component */}
                    {variantId === 'news' && (
                      <div className="mt-3 ml-4 pl-4 border-l-2 border-green-300 dark:border-green-600 bg-green-50/50 dark:bg-green-900/20 rounded-r p-3">
                        <p className="text-gray-700 dark:text-gray-200 text-xs mb-3 font-semibold">📦 NewsCardFooter Component Props:</p>
                        <p className="text-gray-600 dark:text-gray-300 text-xs mb-3">When footer is a NewsCardFooter component, it accepts these props:</p>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-800 rounded p-2">
                            <span className="font-semibold text-gray-900 dark:text-white text-xs">date (required):</span>
                            <p className="text-gray-600 dark:text-gray-300 text-xs mt-1 ml-0">The date string to display (e.g., "26 Jan, 2026"). Shows with a calendar icon.</p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 ml-0"><strong>Type:</strong> string</p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 ml-0"><strong>Example:</strong> date="26 Jan, 2026"</p>
                          </div>
                          <div className="bg-white dark:bg-gray-800 rounded p-2">
                            <span className="font-semibold text-gray-900 dark:text-white text-xs">shareUrl (optional):</span>
                            <p className="text-gray-600 dark:text-gray-300 text-xs mt-1 ml-0">Custom URL to share on social media. If not provided, automatically uses the current page URL.</p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 ml-0"><strong>Type:</strong> string (optional)</p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 ml-0"><strong>Example:</strong> shareUrl="https://example.com/article"</p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 ml-0"><strong>Default:</strong> Current page URL (window.location.href)</p>
                          </div>
                          <div className="bg-white dark:bg-gray-800 rounded p-2">
                            <span className="font-semibold text-gray-900 dark:text-white text-xs">shareTitle (optional):</span>
                            <p className="text-gray-600 dark:text-gray-300 text-xs mt-1 ml-0">Title text to include when sharing on social media platforms. Used in Facebook, Twitter, and WhatsApp shares.</p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 ml-0"><strong>Type:</strong> string (optional)</p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 ml-0"><strong>Example:</strong> shareTitle="Article Title Here"</p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 ml-0"><strong>Default:</strong> Empty string if not provided</p>
                          </div>
                        </div>
                        <div className="mt-3 bg-blue-50 dark:bg-blue-900/20 rounded p-2">
                          <p className="text-gray-700 dark:text-gray-200 text-xs font-semibold mb-1">💡 How NewsCardFooter Works:</p>
                          <ul className="text-gray-600 dark:text-gray-300 text-xs space-y-1 list-disc list-inside">
                            <li>Displays the date with a calendar icon</li>
                            <li>Shows a share button that opens a menu when clicked</li>
                            <li>Share menu includes: Facebook, Twitter/X, WhatsApp, Copy Link, and Close buttons</li>
                            <li>Clicking outside the menu or the close button closes the menu</li>
                            <li>Each share button opens the respective platform's share dialog</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">imageUrl</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">URL of the image to display. If provided, image will be shown at the top of the card. Optional.</p>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded p-2 text-xs">
                      <p className="text-gray-600 dark:text-gray-300 mb-1"><strong>Type:</strong> string (optional)</p>
                      <p className="text-gray-600 dark:text-gray-300 mb-1"><strong>Example:</strong> imageUrl="https://example.com/image.jpg"</p>
                      <p className="text-gray-500 dark:text-gray-400">Can be a relative path ("/images/card.jpg") or absolute URL ("https://..."). Image is displayed using the "image" CSS class from the css object.</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">imageAlt</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Alternative text for the image. Used for accessibility (screen readers) and when image fails to load. Optional.</p>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded p-2 text-xs">
                      <p className="text-gray-600 dark:text-gray-300 mb-1"><strong>Type:</strong> string (optional)</p>
                      <p className="text-gray-600 dark:text-gray-300 mb-1"><strong>Example:</strong> imageAlt="A beautiful sunset over mountains"</p>
                      <p className="text-gray-500 dark:text-gray-400"><strong>Default:</strong> "Card image" (if not provided)</p>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">This text describes what the image shows. Important for accessibility and SEO.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">How It Works</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  The Card component accepts two main props:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm space-y-1">
                  <li><strong>css:</strong> An object containing CSS classes for each part of the card (container, header, title, etc.)</li>
                  <li><strong>data:</strong> An object containing all the content and information to display (title, description, image, etc.)</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-3">
                  Nothing is hardcoded - you have complete control over styling and content by passing different objects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VariantPage;
