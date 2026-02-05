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

// Button Component Code
export const buttonBaseCode = `import React from 'react';

interface ButtonCSS {
  button: string;
}

interface ButtonData {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

interface ButtonProps {
  css: ButtonCSS;
  data: ButtonData;
}

const Button: React.FC<ButtonProps> = ({ css, data }) => {
  return (
    <button
      type={data.type || 'button'}
      onClick={data.onClick}
      disabled={data.disabled}
      className={css.button}
    >
      {data.label}
    </button>
  );
};

export default Button;`;

// Badge Component Code
export const badgeBaseCode = `import React from 'react';

interface BadgeCSS {
  badge: string;
}

interface BadgeData {
  label: string;
  count?: number;
}

interface BadgeProps {
  css: BadgeCSS;
  data: BadgeData;
}

const Badge: React.FC<BadgeProps> = ({ css, data }) => {
  return (
    <span className={css.badge}>
      {data.label}
      {data.count !== undefined && data.count > 0 && (
        <span className="ml-1.5 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium">
          {data.count}
        </span>
      )}
    </span>
  );
};

export default Badge;`;

// Alert Component Code
export const alertBaseCode = `import React from 'react';

interface AlertCSS {
  container: string;
  icon: string;
  title: string;
  message: string;
  closeButton: string;
}

interface AlertData {
  title?: string;
  message: string;
  showClose?: boolean;
  onClose?: () => void;
  icon?: React.ReactNode;
}

interface AlertProps {
  css: AlertCSS;
  data: AlertData;
}

const Alert: React.FC<AlertProps> = ({ css, data }) => {
  return (
    <div className={css.container}>
      {data.icon && <div className={css.icon}>{data.icon}</div>}
      <div className="flex-1">
        {data.title && <h3 className={css.title}>{data.title}</h3>}
        <p className={css.message}>{data.message}</p>
      </div>
      {data.showClose && (
        <button
          onClick={data.onClose}
          className={css.closeButton}
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Alert;`;

// Avatar Component Code
export const avatarBaseCode = `import React from 'react';

interface AvatarCSS {
  container: string;
  avatar: string;
  image: string;
  fallback: string;
  group: string;
}

interface AvatarData {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg';
  avatars?: Array<{ src?: string; alt?: string; name?: string }>;
}

interface AvatarProps {
  css: AvatarCSS;
  data: AvatarData;
}

const Avatar: React.FC<AvatarProps> = ({ css, data }) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (data.avatars && data.avatars.length > 0) {
    return (
      <div className={css.group}>
        {data.avatars.slice(0, 3).map((avatar, index) => (
          <div key={index} className={css.avatar} style={{ zIndex: data.avatars!.length - index }}>
            {avatar.src ? (
              <img src={avatar.src} alt={avatar.alt || ''} className={css.image} />
            ) : (
              <div className={css.fallback}>
                {avatar.name ? getInitials(avatar.name) : '?'}
              </div>
            )}
          </div>
        ))}
        {data.avatars.length > 3 && (
          <div className={css.avatar} style={{ zIndex: 0 }}>
            <div className={css.fallback}>+{data.avatars.length - 3}</div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={css.avatar}>
      {data.src ? (
        <img src={data.src} alt={data.alt || ''} className={css.image} />
      ) : (
        <div className={css.fallback}>
          {data.name ? getInitials(data.name) : '?'}
        </div>
      )}
    </div>
  );
};

export default Avatar;`;

// Input Component Code
export const inputBaseCode = `import React from 'react';

interface InputCSS {
  container: string;
  label: string;
  input: string;
  helperText: string;
  errorText: string;
}

interface InputData {
  label?: string;
  placeholder?: string;
  value?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'textarea';
  rows?: number;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  onChange?: (value: string) => void;
}

interface InputProps {
  css: InputCSS;
  data: InputData;
}

const Input: React.FC<InputProps> = ({ css, data }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (data.onChange) {
      data.onChange(e.target.value);
    }
  };

  return (
    <div className={css.container}>
      {data.label && (
        <label className={css.label}>
          {data.label}
          {data.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {data.type === 'textarea' ? (
        <textarea
          className={css.input}
          placeholder={data.placeholder}
          value={data.value}
          rows={data.rows || 4}
          disabled={data.disabled}
          onChange={handleChange}
        />
      ) : (
        <input
          type={data.type || 'text'}
          className={css.input}
          placeholder={data.placeholder}
          value={data.value}
          disabled={data.disabled}
          onChange={handleChange}
        />
      )}
      {data.error && <p className={css.errorText}>{data.error}</p>}
      {!data.error && data.helperText && <p className={css.helperText}>{data.helperText}</p>}
    </div>
  );
};

export default Input;`;

// Dropdown Component Code
export const dropdownBaseCode = `import React, { useState, useRef, useEffect } from 'react';

interface DropdownCSS {
  container: string;
  button: string;
  menu: string;
  item: string;
  icon: string;
}

interface DropdownItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  divider?: boolean;
}

interface DropdownData {
  label: string;
  items: DropdownItem[];
  placement?: 'left' | 'right';
}

interface DropdownProps {
  css: DropdownCSS;
  data: DropdownData;
}

const Dropdown: React.FC<DropdownProps> = ({ css, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={css.container} ref={dropdownRef}>
      <button
        type="button"
        className={css.button}
        onClick={() => setIsOpen(!isOpen)}
      >
        {data.label}
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className={\`\${css.menu} \${data.placement === 'right' ? 'right-0' : 'left-0'}\`}>
          {data.items.map((item, index) => {
            if (item.divider) {
              return <div key={index} className="border-t border-gray-200 dark:border-gray-700 my-1" />;
            }
            return (
              <button
                key={item.value}
                type="button"
                className={css.item}
                onClick={() => {
                  if (item.onClick) item.onClick();
                  setIsOpen(false);
                }}
                disabled={item.disabled}
              >
                {item.icon && <span className={css.icon}>{item.icon}</span>}
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;`;

// Modal Component Code
export const modalBaseCode = `import React, { useEffect, useRef } from 'react';

interface ModalCSS {
  overlay: string;
  container: string;
  header: string;
  title: string;
  closeButton: string;
  body: string;
  footer: string;
}

interface ModalData {
  isOpen: boolean;
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  onClose: () => void;
  showCloseButton?: boolean;
}

interface ModalProps {
  css: ModalCSS;
  data: ModalData;
}

const Modal: React.FC<ModalProps> = ({ css, data }) => {
  const bodyRef = useRef<HTMLBodyElement | null>(null);

  useEffect(() => {
    // Get body element reference using ref
    bodyRef.current = document.body;

    if (bodyRef.current) {
      if (data.isOpen) {
        bodyRef.current.style.overflow = 'hidden';
      } else {
        bodyRef.current.style.overflow = 'unset';
      }
    }

    return () => {
      // Cleanup: restore overflow when component unmounts or modal closes
      if (bodyRef.current) {
        bodyRef.current.style.overflow = 'unset';
      }
    };
  }, [data.isOpen]);

  // Helper function to add onClick handlers to footer buttons
  const addCloseHandlersToFooter = (footer: React.ReactNode): React.ReactNode => {
    if (!footer) return null;
    
    return React.Children.map(footer, (child) => {
      if (React.isValidElement(child)) {
        // Check if it's a button element
        if (child.type === 'button') {
          return React.cloneElement(child as React.ReactElement<any>, {
            onClick: (e: React.MouseEvent) => {
              // Call original onClick if it exists
              if (child.props.onClick) {
                child.props.onClick(e);
              }
              // Always close the modal
              data.onClose();
            },
          });
        }
        
        // If it's a fragment or has children, recurse
        if (child.props && child.props.children) {
          return React.cloneElement(child as React.ReactElement<any>, {
            children: addCloseHandlersToFooter(child.props.children),
          });
        }
      }
      return child;
    });
  };

  if (!data.isOpen) return null;

  return (
    <div className={css.overlay} onClick={data.onClose}>
      <div className={css.container} onClick={(e) => e.stopPropagation()}>
        {(data.title || data.showCloseButton !== false) && (
          <div className={css.header}>
            {data.title && <h3 className={css.title}>{data.title}</h3>}
            {data.showCloseButton !== false && (
              <button
                onClick={data.onClose}
                className={css.closeButton}
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        )}
        <div className={css.body}>
          {data.children}
        </div>
        {data.footer && <div className={css.footer}>{addCloseHandlersToFooter(data.footer)}</div>}
      </div>
    </div>
  );
};

export default Modal;`;

// Tabs Component Code
export const tabsBaseCode = `import React, { useState } from 'react';

interface TabsCSS {
  container: string;
  list: string;
  tab: string;
  activeTab: string;
  panel: string;
}

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface TabsData {
  tabs: TabItem[];
  defaultTab?: string;
  variant?: 'default' | 'pills';
}

interface TabsProps {
  css: TabsCSS;
  data: TabsData;
}

const Tabs: React.FC<TabsProps> = ({ css, data }) => {
  const [activeTab, setActiveTab] = useState(data.defaultTab || data.tabs[0]?.id || '');

  const activeTabContent = data.tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className={css.container}>
      <div className={css.list}>
        {data.tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={\`\${css.tab} \${activeTab === tab.id ? css.activeTab : ''}\`}
            onClick={() => !tab.disabled && setActiveTab(tab.id)}
            disabled={tab.disabled}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={css.panel}>
        {activeTabContent}
      </div>
    </div>
  );
};

export default Tabs;`;

// Breadcrumb Component Code
export const breadcrumbBaseCode = `import React from 'react';
import Link from 'next/link';

interface BreadcrumbCSS {
  container: string;
  list: string;
  item: string;
  link: string;
  separator: string;
  icon: string;
}

interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

interface BreadcrumbData {
  items: BreadcrumbItem[];
  separator?: 'slash' | 'chevron' | 'dot';
  disableLinks?: boolean; // Add option to disable links (useful when inside another Link)
}

interface BreadcrumbProps {
  css: BreadcrumbCSS;
  data: BreadcrumbData;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ css, data }) => {
  const getSeparator = () => {
    switch (data.separator) {
      case 'chevron':
        return (
          <svg className={css.separator} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        );
      case 'dot':
        return <span className={css.separator}>•</span>;
      default:
        return <span className={css.separator}>/</span>;
    }
  };

  return (
    <nav className={css.container}>
      <ol className={css.list}>
        {data.items.map((item, index) => (
          <li key={index} className={css.item}>
            {index > 0 && getSeparator()}
            {item.href && !data.disableLinks ? (
              <Link href={item.href} className={css.link}>
                {item.icon && <span className={css.icon}>{item.icon}</span>}
                {item.label}
              </Link>
            ) : (
              <span className={css.link}>
                {item.icon && <span className={css.icon}>{item.icon}</span>}
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;`;

// Component code mapping

export const componentCodeMap: Record<string, string> = {
  card: cardBaseCode,
  slider: sliderBaseCode,
  table: tableBaseCode,
  chip: chipBaseCode,
  clipCard: clipCardBaseCode,
  map: mapBaseCode,
  priceCardVarient: priceCardBaseCode,
  button: buttonBaseCode,
  badge: badgeBaseCode,
  alert: alertBaseCode,
  avatar: avatarBaseCode,
  input: inputBaseCode,
  dropdown: dropdownBaseCode,
  modal: modalBaseCode,
  tabs: tabsBaseCode,
  breadcrumb: breadcrumbBaseCode,
};

// Helper function to get component code
export const getComponentCode = (componentId: string, variantId?: string): string => {
  // Special case for price card variant
  if (componentId === 'card' && variantId === 'priceCardVarient') {
    return priceCardBaseCode;
  }
  
  return componentCodeMap[componentId] || '// Component code not available';
};
