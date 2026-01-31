/**
 * Component Code Registry
 * 
 * This file contains the source code for all base components as strings.
 * It's automatically maintained - when you add a new component to developerComponent,
 * you need to add its code here.
 * 
 * In the future, this could be auto-generated from the actual files.
 */

// Card Component Code
export const cardBaseCode = `import React from 'react';

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

// Slider Component Code
export const sliderBaseCode = `'use client';

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
    <div className="w-full max-w-6xl mx-auto relative">
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
      
      {/* Custom Navigation - Positioned relative to slider container */}
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

// Table Component Code
export const tableBaseCode = `import React from 'react';

// Define TypeScript interfaces
interface TableCSS {
  container: string;
  table: string;
  thead: string;
  tbody: string;
  headerRow: string;
  headerCell: string;
  row: string;
  cell: string;
  highlightedRow?: string;
}

interface TableColumn {
  key: string;
  label: string;
  align?: 'left' | 'center' | 'right';
}

interface TableRow {
  [key: string]: string | number | React.ReactNode;
}

interface TableData {
  columns: TableColumn[];
  rows: TableRow[];
  highlightedRowIndex?: number;
}

interface TableProps {
  css: TableCSS;
  data: TableData;
}

const Table: React.FC<TableProps> = ({ css, data }) => {
  return (
    <div className={css.container}>
      <table className={css.table}>
        <thead className={css.thead}>
          <tr className={css.headerRow}>
            {data.columns.map((column) => (
              <th
                key={column.key}
                className={css.headerCell}
                style={{ textAlign: column.align || 'left' }}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={css.tbody}>
          {data.rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={\`\${css.row} \${
                rowIndex === data.highlightedRowIndex && css.highlightedRow
                  ? css.highlightedRow
                  : ''
              }\`}
            >
              {data.columns.map((column) => (
                <td
                  key={column.key}
                  className={css.cell}
                  style={{ textAlign: column.align || 'left' }}
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;`;

// Chip Component Code
export const chipBaseCode = `import React from 'react';

// Define TypeScript interfaces
interface ChipCSS {
  container: string;
  chip: string;
  text: string;
  icon?: string;
}

interface ChipData {
  label: string;
  icon?: React.ReactNode;
}

interface ChipProps {
  css: ChipCSS;
  data: ChipData;
}

const Chip: React.FC<ChipProps> = ({ css, data }) => {
  return (
    <div className={css.container}>
      <div className={css.chip}>
        {data.icon && <span className={css.icon}>{data.icon}</span>}
        <span className={css.text}>{data.label}</span>
      </div>
    </div>
  );
};

export default Chip;`;

// ClipCard Component Code
export const clipCardBaseCode = `import React from 'react';

// Define TypeScript interfaces
interface ClipCardCSS {
  container: string;
  imageWrapper: string;
  image: string;
  overlay: string;
  loginBadge: string;
  loginIcon: string;
  loginText: string;
  playButton: string;
  bottomOverlay: string;
  caption: string;
  dateContainer: string;
  dateIcon: string;
  dateText: string;
  shareButton: string;
  shareIcon: string;
  shareMenu?: string;
  shareMenuItem?: string;
  shareMenuIcon?: string;
}

interface ClipCardData {
  imageUrl: string;
  imageAlt?: string;
  loginText?: string;
  caption: string;
  date: string;
  redirectUrl: string;
}

interface ClipCardProps {
  css: ClipCardCSS;
  data: ClipCardData;
}

const ClipCard: React.FC<ClipCardProps> = ({ css, data }) => {
  const handleClick = () => {
    if (data.redirectUrl) {
      window.open(data.redirectUrl, '_blank');
    }
  };

  return (
    <div className={css.container} onClick={handleClick}>
      <div className={css.imageWrapper}>
        <img 
          src={data.imageUrl} 
          alt={data.imageAlt || 'Video thumbnail'} 
          className={css.image}
        />
        
        {/* Login Badge - Top Left */}
        {data.loginText && (
          <div className={css.loginBadge}>
            <svg className={css.loginIcon} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className={css.loginText}>{data.loginText}</span>
          </div>
        )}

        {/* Play Button - Bottom Left */}
        <div className={css.playButton}>
          <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>

        {/* Bottom Overlay */}
        <div className={css.bottomOverlay}>
          <p className={css.caption}>{data.caption}</p>
          <div className={css.dateContainer}>
            <svg className={css.dateIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className={css.dateText}>{data.date}</span>
          </div>
          <button className={css.shareButton}>
            <svg className={css.shareIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClipCard;`;

// Map Component Code
export const mapBaseCode = `import React, { useEffect, useRef } from 'react';

// Define TypeScript interfaces
interface MapCSS {
  container: string;
  map: string;
}

interface MapData {
  latitude: number;
  longitude: number;
  zoom?: number;
  markerTitle?: string;
  markerDescription?: string;
}

interface MapProps {
  css: MapCSS;
  data: MapData;
}

const Map: React.FC<MapProps> = ({ css, data }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map using OpenStreetMap
    const latOffset = 0.01;
    const lonOffset = 0.01;
    const bbox = \`\${data.longitude - lonOffset},\${data.latitude - latOffset},\${data.longitude + lonOffset},\${data.latitude + latOffset}\`;
    
    const iframe = document.createElement('iframe');
    iframe.src = \`https://www.openstreetmap.org/export/embed.html?bbox=\${bbox}&layer=mapnik&marker=\${data.latitude},\${data.longitude}\`;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.frameBorder = '0';
    iframe.style.border = '0';
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('aria-label', \`Map showing location at \${data.latitude}, \${data.longitude}\`);
    iframe.title = data.markerTitle || 'Map location';

    mapRef.current.innerHTML = '';
    mapRef.current.appendChild(iframe);

    return () => {
      if (mapRef.current) {
        mapRef.current.innerHTML = '';
      }
    };
  }, [data.latitude, data.longitude, data.markerTitle]);

  return (
    <div className={css.container}>
      <div ref={mapRef} className={css.map} />
    </div>
  );
};

export default Map;`;

// Price Card Component Code (special variant)
export const priceCardBaseCode = `import React from 'react';

// Define TypeScript interfaces
interface PriceCardCSS {
  container: string;
  header: string;
  title: string;
  description: string;
  content: string;
  footer: string;
  image: string;
}

interface PriceCardData {
  title?: string;
  description?: string;
  content?: string | React.ReactNode;
  footer?: string | React.ReactNode;
  imageUrl?: string;
  imageAlt?: string;
}

interface PriceCardProps {
  css: PriceCardCSS;
  data: PriceCardData;
}

const PriceCard: React.FC<PriceCardProps> = ({ css, data }) => {
  return (
    <div className={css.container}>
      {/* Image with Discount Banner */}
      {data.imageUrl && (
        <div className="relative">
          <img
            src={data.imageUrl}
            alt={data.imageAlt || 'Product image'}
            className={css.image}
          />
          {/* Discount Banner */}
          <div className="absolute top-4 right-4 bg-pink-500 text-white font-semibold px-3 py-1 rounded text-sm sm:text-base">
            Discount -30%
          </div>
        </div>
      )}

      {/* Title */}
      {data.title && (
        <div className={css.header}>
          <h3 className={css.title}>{data.title}</h3>
        </div>
      )}

      {/* Content (Price) */}
      {data.content && (
        <div className={css.content}>
          {typeof data.content === 'string' ? <p>{data.content}</p> : data.content}
        </div>
      )}

      {/* Footer (Buy Now Button) */}
      {data.footer && (
        <div className={css.footer}>
          {typeof data.footer === 'string' ? <p>{data.footer}</p> : data.footer}
        </div>
      )}
    </div>
  );
};

export default PriceCard;`;

// Component code mapping

// Vibhor Component Code
export const vibhorBaseCode = `import React from 'react';

// Define TypeScript interfaces
interface VibhorCSS {
  container: string;
  // Add your CSS properties here
}

interface VibhorData {
  // Add your data properties here
}

interface VibhorProps {
  css: VibhorCSS;
  data: VibhorData;
}

const Vibhor: React.FC<VibhorProps> = ({ css, data }) => {
  return (
    <div className={css.container}>
      {/* Your component implementation */}
    </div>
  );
};

export default Vibhor;
`;
export const componentCodeMap: Record<string, string> = {
  card: cardBaseCode,
  vibhor: vibhorBaseCode,
  slider: sliderBaseCode,
  table: tableBaseCode,
  chip: chipBaseCode,
  clipCard: clipCardBaseCode,
  map: mapBaseCode,
  priceCardVarient: priceCardBaseCode,
};

// Helper function to get component code
export const getComponentCode = (componentId: string, variantId?: string): string => {
  // Special case for price card variant
  if (componentId === 'card' && variantId === 'priceCardVarient') {
    return priceCardBaseCode;
  }
  
  return componentCodeMap[componentId] || '// Component code not available';
};
