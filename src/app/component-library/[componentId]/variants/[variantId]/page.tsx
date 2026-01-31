'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Card from '@/components/Card';
import Table from '@/components/Table';
import Chip from '@/components/Chip';
import Map from '@/components/Map';
import NewsCardComponent from '@/components/variant/card/NewsCardComponent';
import PriceCardComponent from '@/components/variant/card/PriceCardComponent';
import { components } from '@/config/components';
import { variants } from '@/config/variants';
import { getComponentCode } from '@/developerComponent/codeRegistry';
import { getExampleCode } from '@/developerComponent/exampleRegistry';
import { 
  imageCardCSS,
  imageCardData,
  newsCardCSS,
  newsCardData,
  cardLowerHeadingCSS,
  cardLowerHeadingData,
  dataCardCSS,
  dataCardData,
  priceCardVarientCSS,
  priceCardVarientData
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
import {
  scoreBoardCSS,
  scoreBoardData
} from '@/components/variant/table';
import {
  popularSearchesCSS,
  popularSearchesData,
  PopularSearchesComponent
} from '@/components/variant/chip';
import {
  videoCardCSS,
  videoCardData,
  VideoCardComponent
} from '@/components/variant/clipCard';
import {
  basicMapCSS,
  basicMapData,
  BasicMapComponent,
  googleMapCSS,
  googleMapData,
  GoogleMapComponent
} from '@/components/variant/map';

const VariantPage = () => {
  const params = useParams();
  const componentId = params.componentId as string;
  const variantId = params.variantId as string;
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedUsage, setCopiedUsage] = useState(false);
  const [editableCSS, setEditableCSS] = useState<string>('');
  const [editableData, setEditableData] = useState<string>('');
  const [parseError, setParseError] = useState<string>('');
  const [executedCSS, setExecutedCSS] = useState<any>(null);
  const [executedData, setExecutedData] = useState<any>(null);
  const initializedRef = useRef<string>('');
  const [openAccordions, setOpenAccordions] = useState<Set<string>>(new Set(['css-props', 'data-props']));

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
          case 'image':
            return { css: imageCardCSS, data: imageCardData };
          case 'news':
            return { css: newsCardCSS, data: newsCardData };
          case 'cardLowerHeading':
            return { css: cardLowerHeadingCSS, data: cardLowerHeadingData };
          case 'dataCard':
            return { css: dataCardCSS, data: dataCardData };
          case 'priceCardVarient':
            return { css: priceCardVarientCSS, data: priceCardVarientData };
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
      case 'table':
        switch (variantId) {
          case 'scoreBoard':
            return { css: scoreBoardCSS, data: scoreBoardData };
          default:
            return null;
        }
      case 'chip':
        switch (variantId) {
          case 'popularSearches':
            return { css: popularSearchesCSS, data: popularSearchesData };
          default:
            return null;
        }
      case 'clipCard':
        switch (variantId) {
          case 'videoCard':
            return { css: videoCardCSS, data: videoCardData };
          default:
            return null;
        }
      case 'map':
        switch (variantId) {
          case 'basicMap':
            return { css: basicMapCSS, data: basicMapData };
          case 'googleMap':
            return { css: googleMapCSS, data: googleMapData };
          default:
            return null;
        }
      default:
        return null;
    }
  };

  const variantConfig = getVariantConfig();

  // Get CSS props based on component type
  const getCSSProps = () => {
    switch (componentId) {
      case 'card':
        return [
          { key: 'container', title: 'container', type: 'string', description: 'Main card container styling. Controls the overall card appearance including background, border, shadow, and hover effects.', examples: 'bg-white, rounded-xl, shadow-lg, border, transition-all, hover:shadow-xl', details: 'Each class controls a specific visual property (background, border radius, shadow, etc.)' },
          { key: 'header', title: 'header', type: 'string', description: 'Header section styling. Controls padding, positioning, and background for the area containing title and description.', examples: 'p-4, absolute, bottom-0, bg-gradient-to-t', details: 'Use "absolute" for overlay positioning, "p-4" for padding, "bg-gradient-to-t" for gradient backgrounds' },
          { key: 'title', title: 'title', type: 'string', description: 'Title text styling. Controls font size, weight, color, and spacing for the card title.', examples: 'text-white, text-xl, font-bold, mb-3, line-clamp-2', details: 'text-white = text color, text-xl = font size, font-bold = font weight, mb-3 = margin bottom, line-clamp-2 = max 2 lines' },
          { key: 'description', title: 'description', type: 'string', description: 'Description text styling. Controls font size, color, and spacing for the card description text.', examples: 'text-white/90, text-sm, mb-2', details: 'text-white/90 = white with 90% opacity, text-sm = small font size, mb-2 = margin bottom' },
          { key: 'content', title: 'content', type: 'string', description: 'Content area styling. Controls padding and styling for the main content section.', examples: 'p-4, hidden', details: 'Use "hidden" to hide this section completely, or use "p-4" for padding if you want to show content' },
          { key: 'footer', title: 'footer', type: 'string', description: 'Footer section styling. Controls layout, padding, and text styling for the footer area (e.g., date, share button).', examples: 'flex, items-center, justify-between, text-white/90, text-sm', details: 'flex = flexbox layout, items-center = vertical alignment, justify-between = space between items, text-white/90 = text color with opacity' },
          { key: 'image', title: 'image', type: 'string', description: 'Image styling. Controls width, height, object-fit, and other image display properties.', examples: 'w-full, h-64, object-cover', details: 'w-full = full width, h-64 = fixed height, object-cover = cover entire area while maintaining aspect ratio' }
        ];
      case 'slider':
        return [
          { key: 'container', title: 'container', type: 'string', description: 'Main slider container styling. Controls the wrapper around the entire slider component.', examples: 'relative w-full', details: 'Use "relative" for positioning context, "w-full" for full width' },
          { key: 'slide', title: 'slide', type: 'string', description: 'Individual slide container styling. Controls the appearance of each slide in the carousel.', examples: 'relative overflow-hidden rounded-xl h-[250px]', details: 'Controls slide dimensions, border radius, overflow behavior, and positioning' },
          { key: 'image', title: 'image', type: 'string', description: 'Slide image styling. Controls how images are displayed within slides.', examples: 'w-full h-full object-cover', details: 'w-full = full width, h-full = full height, object-cover = maintain aspect ratio while covering area' },
          { key: 'overlay', title: 'overlay', type: 'string', description: 'Overlay styling for slide content. Controls the background overlay that appears over images.', examples: 'absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90', details: 'Positioned absolutely over the image, typically at the bottom with gradient background' },
          { key: 'title', title: 'title', type: 'string', description: 'Slide title text styling. Controls font size, weight, color, and spacing for slide titles.', examples: 'text-white text-lg font-bold mb-2 line-clamp-2', details: 'Text styling for the main title displayed on each slide' },
          { key: 'category', title: 'category', type: 'string', description: 'Category label styling. Controls the appearance of category tags or labels on slides.', examples: 'text-white/80 text-xs uppercase tracking-wider', details: 'Smaller text, uppercase, with letter spacing for category labels' },
          { key: 'navigation', title: 'navigation', type: 'string', description: 'Navigation buttons container styling. Controls the positioning and layout of prev/next buttons.', examples: 'absolute bottom-3 right-3 z-20 flex gap-2', details: 'Positioned absolutely, controls button container layout and spacing' },
          { key: 'prevButton', title: 'prevButton', type: 'string', description: 'Previous button styling. Controls the appearance of the "previous slide" navigation button.', examples: 'w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm', details: 'Circular button with backdrop blur effect, hover states, and sizing' },
          { key: 'nextButton', title: 'nextButton', type: 'string', description: 'Next button styling. Controls the appearance of the "next slide" navigation button.', examples: 'w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm', details: 'Circular button with backdrop blur effect, hover states, and sizing' }
        ];
      case 'table':
        return [
          { key: 'container', title: 'container', type: 'string', description: 'Table container styling. Controls the wrapper around the entire table component.', examples: 'w-full overflow-x-auto', details: 'Controls table width and horizontal scrolling behavior' },
          { key: 'table', title: 'table', type: 'string', description: 'Table element styling. Controls the main table appearance including borders and spacing.', examples: 'min-w-full divide-y divide-gray-200', details: 'Full width table with dividers between rows' },
          { key: 'thead', title: 'thead', type: 'string', description: 'Table header section styling. Controls the appearance of the header area.', examples: 'bg-gray-50', details: 'Background color for the header section' },
          { key: 'tbody', title: 'tbody', type: 'string', description: 'Table body section styling. Controls the appearance of the body area.', examples: 'bg-white divide-y divide-gray-200', details: 'Background and dividers for table body rows' },
          { key: 'headerRow', title: 'headerRow', type: 'string', description: 'Header row styling. Controls the appearance of header row cells.', examples: '', details: 'Styling for the header row container' },
          { key: 'headerCell', title: 'headerCell', type: 'string', description: 'Header cell styling. Controls font size, weight, color, and padding for header cells.', examples: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider', details: 'Padding, text alignment, font styling for column headers' },
          { key: 'row', title: 'row', type: 'string', description: 'Table row styling. Controls the appearance of data rows including hover effects.', examples: 'hover:bg-gray-50', details: 'Hover state styling for interactive rows' },
          { key: 'cell', title: 'cell', type: 'string', description: 'Table cell styling. Controls padding, text alignment, and font styling for data cells.', examples: 'px-6 py-4 whitespace-nowrap text-sm text-gray-900', details: 'Padding, text wrapping, font size, and text color for cells' },
          { key: 'highlightedRow', title: 'highlightedRow', type: 'string', description: 'Highlighted row styling (optional). Controls the appearance of a highlighted/special row.', examples: 'bg-yellow-50', details: 'Optional styling for rows that should be visually emphasized' }
        ];
      case 'chip':
        return [
          { key: 'container', title: 'container', type: 'string', description: 'Chip container styling. Controls the wrapper around chip components.', examples: 'w-full', details: 'Controls container width and layout' },
          { key: 'chip', title: 'chip', type: 'string', description: 'Individual chip styling. Controls background, padding, border radius, and hover effects.', examples: 'inline-flex items-center gap-2 bg-purple-400/30 hover:bg-purple-400/40 px-3 py-1.5 rounded-full', details: 'Inline flex layout, background colors, padding, rounded corners, hover states' },
          { key: 'text', title: 'text', type: 'string', description: 'Chip text styling. Controls font size, weight, and color for chip labels.', examples: 'text-sm font-medium', details: 'Font size and weight for chip text content' },
          { key: 'icon', title: 'icon', type: 'string', description: 'Icon styling (optional). Controls the size and appearance of icons within chips.', examples: 'w-4 h-4', details: 'Optional icon sizing and styling' }
        ];
      case 'map':
        return [
          { key: 'container', title: 'container', type: 'string', description: 'Map container styling. Controls the wrapper around the map component.', examples: 'w-full h-full rounded-lg overflow-hidden', details: 'Full width/height container with rounded corners and hidden overflow' },
          { key: 'map', title: 'map', type: 'string', description: 'Map element styling. Controls the iframe or map element dimensions and appearance.', examples: 'w-full h-full min-h-[200px]', details: 'Full width/height with minimum height to ensure map visibility' }
        ];
      case 'clipCard':
        return [
          { key: 'container', title: 'container', type: 'string', description: 'Video card container styling. Controls the main wrapper and hover effects.', examples: 'w-full max-w-md mx-auto cursor-pointer group transition-transform hover:scale-[1.02]', details: 'Container width, centering, cursor, and hover scale effects' },
          { key: 'imageWrapper', title: 'imageWrapper', type: 'string', description: 'Image wrapper styling. Controls the container around the video thumbnail image.', examples: 'relative w-full aspect-video rounded-lg overflow-hidden', details: 'Relative positioning, aspect ratio, rounded corners, and overflow control' },
          { key: 'image', title: 'image', type: 'string', description: 'Thumbnail image styling. Controls how the video thumbnail is displayed.', examples: 'w-full h-full object-cover', details: 'Full width/height with object-cover to maintain aspect ratio' },
          { key: 'overlay', title: 'overlay', type: 'string', description: 'Overlay styling. Controls gradient overlays over the image.', examples: 'absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent', details: 'Absolute positioned overlay with gradient from bottom to top' },
          { key: 'loginBadge', title: 'loginBadge', type: 'string', description: 'Login badge styling. Controls the "Login to Watch" badge appearance.', examples: 'absolute top-3 left-3 flex items-center gap-2 bg-purple-600/90 backdrop-blur-sm px-3 py-1.5 rounded-full', details: 'Positioned badge with backdrop blur and rounded corners' },
          { key: 'playButton', title: 'playButton', type: 'string', description: 'Play button styling. Controls the centered play button appearance.', examples: 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 rounded-full', details: 'Centered play button with backdrop blur and hover scale effects' },
          { key: 'bottomOverlay', title: 'bottomOverlay', type: 'string', description: 'Bottom overlay styling. Controls the overlay containing caption and date.', examples: 'absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4', details: 'Bottom positioned overlay with gradient background' },
          { key: 'caption', title: 'caption', type: 'string', description: 'Caption text styling. Controls the video caption text appearance.', examples: 'text-white text-sm font-medium line-clamp-2', details: 'White text with line clamping for multi-line captions' },
          { key: 'dateContainer', title: 'dateContainer', type: 'string', description: 'Date container styling. Controls the layout of date information.', examples: 'flex items-center gap-2', details: 'Flex layout for date icon and text' },
          { key: 'shareButton', title: 'shareButton', type: 'string', description: 'Share button styling. Controls the share button appearance.', examples: 'absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full', details: 'Positioned share button with backdrop blur effect' }
        ];
      default:
        return [];
    }
  };

  // Get Data props based on component type
  const getDataProps = () => {
    switch (componentId) {
      case 'card':
        return [
          { key: 'title', title: 'title', type: 'string | undefined', description: 'Card title text. Displayed in the header section. Optional - card will work without it.' },
          { key: 'description', title: 'description', type: 'string | undefined', description: 'Card description text. Displayed below the title in the header section. Optional.' },
          { key: 'content', title: 'content', type: 'string | ReactNode | undefined', description: 'Main content of the card. Can be a string or React component (like forms, buttons, lists, etc.). Optional.', hasDetails: true },
          { key: 'footer', title: 'footer', type: 'string | ReactNode | undefined', description: 'Footer content. Can be a string or React component (like date, share buttons, etc.). Optional.', hasDetails: true },
          { key: 'imageUrl', title: 'imageUrl', type: 'string | undefined', description: 'URL of the image to display. If provided, image will be shown at the top of the card. Optional.', hasDetails: true },
          { key: 'imageAlt', title: 'imageAlt', type: 'string | undefined', description: 'Alternative text for the image. Used for accessibility (screen readers) and when image fails to load. Optional.', hasDetails: true }
        ];
      case 'slider':
        const sliderDataProps = [
          { key: 'slides', title: 'slides', type: 'Array<SlideData>', description: 'Array of slide objects. Structure varies by variant:', hasDetails: true }
        ];
        // Add variant-specific slide structure info
        if (variantId === 'news') {
          sliderDataProps[0].description = 'Array of slide objects. Each slide contains imageUrl (string), imageAlt (string), title (string), and category (string) properties.';
        } else if (variantId === 'matchScoreCard' || variantId === 'matchScoreStack') {
          sliderDataProps[0].description = 'Array of slide objects. Each slide contains status, statusColor, league, matchType, date, time, team1 (object with name, logo, score, overs), team2 (same structure), summary, and buttonText properties.';
        }
        return sliderDataProps;
      case 'table':
        return [
          { key: 'columns', title: 'columns', type: 'Array<TableColumn>', description: 'Array of column definitions. Each column has key, label, and optional align properties.', hasDetails: true },
          { key: 'rows', title: 'rows', type: 'Array<TableRow>', description: 'Array of row data objects. Each row object contains values keyed by column keys.', hasDetails: true },
          { key: 'highlightedRowIndex', title: 'highlightedRowIndex', type: 'number | undefined', description: 'Optional index of the row to highlight. If provided, that row will use the highlightedRow CSS class.', hasDetails: false }
        ];
      case 'chip':
        return [
          { key: 'chips', title: 'chips', type: 'Array<ChipData>', description: 'Array of chip data objects. Each chip has a label and optional icon property.', hasDetails: true }
        ];
      case 'map':
        return [
          { key: 'latitude', title: 'latitude', type: 'number', description: 'Latitude coordinate for the map center point. Required for map to display.', hasDetails: false },
          { key: 'longitude', title: 'longitude', type: 'number', description: 'Longitude coordinate for the map center point. Required for map to display.', hasDetails: false },
          { key: 'zoom', title: 'zoom', type: 'number | undefined', description: 'Zoom level for the map. Higher values show more detail. Optional, defaults to 13.', hasDetails: false },
          { key: 'markerTitle', title: 'markerTitle', type: 'string | undefined', description: 'Title text for the map marker. Used for accessibility and tooltips. Optional.', hasDetails: false },
          { key: 'markerDescription', title: 'markerDescription', type: 'string | undefined', description: 'Description text for the map marker. Used for additional context. Optional.', hasDetails: false }
        ];
      case 'clipCard':
        return [
          { key: 'imageUrl', title: 'imageUrl', type: 'string', description: 'URL of the video thumbnail image. Required for video card to display.', hasDetails: false },
          { key: 'imageAlt', title: 'imageAlt', type: 'string | undefined', description: 'Alternative text for the thumbnail image. Used for accessibility. Optional.', hasDetails: false },
          { key: 'loginText', title: 'loginText', type: 'string | undefined', description: 'Text to display in the login badge. If provided, shows "Login to Watch" badge. Optional.', hasDetails: false },
          { key: 'caption', title: 'caption', type: 'string', description: 'Video caption text displayed at the bottom of the card. Required.', hasDetails: false },
          { key: 'date', title: 'date', type: 'string', description: 'Date string displayed with the caption. Required.', hasDetails: false },
          { key: 'redirectUrl', title: 'redirectUrl', type: 'string', description: 'URL to navigate to when the card is clicked. Required for card functionality.', hasDetails: false }
        ];
      default:
        return [];
    }
  };

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

  // Initialize editable values from variant config (only once when component/variant changes)
  const currentKey = `${componentId}-${variantId}`;
  useEffect(() => {
    if (variantConfig && initializedRef.current !== currentKey) {
      const cssString = JSON.stringify(variantConfig.css, null, 2);
      const dataString = JSON.stringify(variantConfig.data, null, 2);
      setEditableCSS(cssString);
      setEditableData(dataString);
      setExecutedCSS(null);
      setExecutedData(null);
      setParseError('');
      initializedRef.current = currentKey;
    }
  }, [componentId, variantId, currentKey]);

  // Handle Execute button click
  const handleExecute = () => {
    let cssError = '';
    let dataError = '';
    let parsedCSS = variantConfig?.css || {};
    let parsedData = variantConfig?.data || {};

    // Parse CSS
    if (editableCSS) {
      try {
        parsedCSS = JSON.parse(editableCSS);
        cssError = '';
      } catch (e) {
        cssError = 'Invalid JSON in CSS';
      }
    }

    // Parse Data
    if (editableData) {
      try {
        parsedData = JSON.parse(editableData);
        dataError = '';
      } catch (e) {
        dataError = 'Invalid JSON in Data';
      }
    }

    // Update error state
    const error = cssError || dataError;
    setParseError(error);

    // Only update executed values if there are no errors
    if (!error) {
      setExecutedCSS(parsedCSS);
      setExecutedData(parsedData);
    }
  };

  // Use executed values for preview, fallback to original config
  const previewConfig = useMemo(() => {
    const css = executedCSS !== null ? executedCSS : (variantConfig?.css || {});
    const data = executedData !== null ? executedData : (variantConfig?.data || {});
    return {
      css,
      data
    };
  }, [executedCSS, executedData, variantConfig]);

  // Dynamic base component code - loaded from developerComponent folder
  const getBaseComponentCode = () => {
    return getComponentCode(componentId, variantId);
  };

  const componentCode = getBaseComponentCode();

  // Dynamic usage example - loaded from developerComponent folder
  const getUsageExample = () => {
    // Use executed values if available, otherwise use original config
    const displayCSS = executedCSS !== null ? executedCSS : (variantConfig?.css || {});
    const displayData = executedData !== null ? executedData : (variantConfig?.data || {});
    
    return getExampleCode(componentId, variantId, displayCSS, displayData);
  };

  const usageExample = getUsageExample();

  const handleCopyCode = (code: string, type: 'code' | 'usage') => {
    navigator.clipboard.writeText(code);
    if (type === 'code') {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } else {
      setCopiedUsage(true);
      setTimeout(() => setCopiedUsage(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-950 dark:via-gray-900/50 dark:to-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 dark:border-gray-800/80 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5f52ff] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-[#5f52ff]/20 group-hover:shadow-[#5f52ff]/30 transition-shadow">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="font-bold text-gray-900 dark:text-white text-lg">NUT UI</span>
            </Link>
            <nav className="flex items-center space-x-6">
              <Link href="/" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5f52ff] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/component-library" className="text-sm font-medium text-gray-900 dark:text-white relative">
                Components
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#5f52ff]"></span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="mb-6">
          <Link 
            href={`/component-library/${componentId}`} 
            className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group"
          >
            <svg className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-mono text-xs mr-2 opacity-60">&lt;</span>
            Back to {component.name}
          </Link>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5f52ff]/10 dark:bg-[#5f52ff]/20 border border-[#5f52ff]/20">
              <div className="w-2 h-2 rounded-full bg-[#5f52ff] animate-pulse"></div>
              <span className="text-xs font-medium text-[#5f52ff] dark:text-[#818cf8]">{component.name}</span>
            </div>
            <span className="text-xs font-mono text-gray-500 dark:text-gray-500">/</span>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{variant.name}</span>
            </div>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-3 sm:mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            {variant.name}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            {variant.description}
          </p>
        </div>

        <div className="space-y-12">
          {/* Preview Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Preview</h2>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-xs font-mono font-medium text-green-700 dark:text-green-400">Live</span>
              </div>
            </div>
            <div className={`relative bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900 rounded-xl border-2 border-gray-200 dark:border-gray-800 shadow-lg overflow-hidden ${
              componentId === 'slider' && (variantId === 'matchScoreCard' || variantId === 'matchScoreStack')
                ? 'p-4 sm:p-6 md:p-8 min-h-[500px] sm:min-h-[550px] overflow-hidden'
                : componentId === 'slider'
                ? 'p-8 min-h-[500px] overflow-hidden'
                : componentId === 'table'
                ? 'p-3 sm:p-4 md:p-6 overflow-x-auto'
                : componentId === 'map'
                ? 'p-2 sm:p-3 md:p-4 lg:p-5 min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px]'
                : 'p-6 min-h-[200px] flex justify-center items-center'
            }`}>
              {componentId === 'slider' && variantId === 'news' ? (
                <div className="w-full h-full flex items-center justify-center">
                  <NewsSliderComponent css={previewConfig.css as any} data={previewConfig.data as any} />
                </div>
              ) : componentId === 'slider' && variantId === 'matchScoreCard' ? (
                <div className="w-full h-full flex items-center justify-center">
                  <MatchScoreCardSliderComponent css={previewConfig.css as any} data={previewConfig.data as any} />
                </div>
              ) : componentId === 'slider' && variantId === 'matchScoreStack' ? (
                <div className="w-full h-full flex items-center justify-center">
                  <MatchScoreStackSliderComponent css={previewConfig.css as any} data={previewConfig.data as any} />
                </div>
              ) : variantId === 'news' && componentId === 'card' ? (
                <NewsCardComponent css={previewConfig.css as any} data={previewConfig.data as any} />
              ) : variantId === 'priceCardVarient' && componentId === 'card' ? (
                <PriceCardComponent css={previewConfig.css as any} data={previewConfig.data as any} />
              ) : componentId === 'card' ? (
                <Card css={previewConfig.css as any} data={previewConfig.data as any} />
              ) : componentId === 'table' ? (
                <Table css={previewConfig.css as any} data={previewConfig.data as any} />
              ) : componentId === 'chip' ? (
                <PopularSearchesComponent css={previewConfig.css as any} data={previewConfig.data as any} />
              ) : componentId === 'clipCard' ? (
                <VideoCardComponent css={previewConfig.css as any} data={previewConfig.data as any} />
              ) : componentId === 'map' && variantId === 'googleMap' ? (
                <GoogleMapComponent css={previewConfig.css as any} data={previewConfig.data as any} />
              ) : componentId === 'map' ? (
                <BasicMapComponent css={previewConfig.css as any} data={previewConfig.data as any} />
              ) : null}
            </div>
          </div>

          {/* Component Code Section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Component Code</h2>
                <span className="px-2 py-0.5 text-xs font-mono font-medium rounded-md bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                  TypeScript
                </span>
              </div>
              <button
                onClick={() => handleCopyCode(componentCode, 'code')}
                className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-[#5f52ff] to-[#7c3aed] text-white rounded-lg hover:from-[#6d5fff] hover:to-[#8b4efd] transition-all text-xs sm:text-sm font-medium shadow-lg shadow-[#5f52ff]/20 hover:shadow-[#5f52ff]/30"
              >
                {copiedCode ? (
                  <span className="flex items-center gap-1 sm:gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="hidden sm:inline">Copied!</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1 sm:gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span className="hidden sm:inline">Copy Code</span>
                  </span>
                )}
              </button>
            </div>

            <div className="relative bg-gray-900 dark:bg-gray-950 rounded-xl border-2 border-gray-800 dark:border-gray-700 overflow-hidden shadow-2xl">
              {/* Code header */}
              <div className="flex items-center justify-between px-4 py-2 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="ml-3 text-xs font-mono text-gray-400">component.tsx</span>
                </div>
                <div className="text-xs font-mono text-gray-500">React + TypeScript</div>
              </div>
              <pre className="p-6 text-sm text-gray-200 overflow-x-auto max-h-96 overflow-y-auto bg-gray-900 dark:bg-gray-950">
                <code className="font-mono">{componentCode}</code>
              </pre>
            </div>
          </div>

          {/* How to Use Section - Only for Slider */}
          {componentId === 'slider' && (
            <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800 shadow-lg overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">How to Use - Step by Step</h2>
                  <span className="px-2 py-0.5 text-xs font-mono font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                    Guide
                  </span>
                </div>
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
                        <code>{`import Slider from '@/developerComponent/componentCollection';
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
            </div>
          )}

          {/* Editable CSS and Data Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Playground</h2>
              <span className="px-2 py-0.5 text-xs font-mono font-medium rounded-md bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
                Interactive
              </span>
            </div>
            {parseError && (
              <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300 text-sm flex items-start gap-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-mono">{parseError}</span>
              </div>
            )}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    CSS Object (JSON)
                  </label>
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-500">.css</span>
                </div>
                <div className="relative bg-gray-900 dark:bg-gray-950 rounded-xl border-2 border-gray-800 dark:border-gray-700 overflow-hidden shadow-lg">
                  <div className="px-3 py-1.5 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-800 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs font-mono text-gray-400">styles.json</span>
                  </div>
                  <textarea
                    value={editableCSS}
                    onChange={(e) => setEditableCSS(e.target.value)}
                    className="w-full h-64 p-4 bg-gray-900 dark:bg-gray-950 text-gray-200 font-mono text-sm focus:outline-none resize-none"
                    spellCheck={false}
                  />
                </div>
              </div>
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Data Object (JSON)
                  </label>
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-500">.data</span>
                </div>
                <div className="relative bg-gray-900 dark:bg-gray-950 rounded-xl border-2 border-gray-800 dark:border-gray-700 overflow-hidden shadow-lg">
                  <div className="px-3 py-1.5 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-800 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs font-mono text-gray-400">data.json</span>
                  </div>
                  <textarea
                    value={editableData}
                    onChange={(e) => setEditableData(e.target.value)}
                    className="w-full h-64 p-4 bg-gray-900 dark:bg-gray-950 text-gray-200 font-mono text-sm focus:outline-none resize-none"
                    spellCheck={false}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleExecute}
                className="px-6 py-2.5 bg-gradient-to-r from-[#5f52ff] to-[#7c3aed] text-white rounded-lg hover:from-[#6d5fff] hover:to-[#8b4efd] transition-all font-semibold shadow-lg shadow-[#5f52ff]/20 hover:shadow-[#5f52ff]/30 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Execute
              </button>
              <button
                onClick={() => {
                  setEditableCSS(JSON.stringify(variantConfig?.css || {}, null, 2));
                  setEditableData(JSON.stringify(variantConfig?.data || {}, null, 2));
                  setExecutedCSS(null);
                  setExecutedData(null);
                  setParseError('');
                }}
                className="px-4 py-2.5 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors font-medium flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Reset
              </button>
            </div>
          </div>

          {/* Usage Example Section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Usage Example</h2>
                <span className="px-2 py-0.5 text-xs font-mono font-medium rounded-md bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                  Copy & Paste
                </span>
              </div>
              <button
                onClick={() => handleCopyCode(usageExample, 'usage')}
                className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-[#5f52ff] to-[#7c3aed] text-white rounded-lg hover:from-[#6d5fff] hover:to-[#8b4efd] transition-all text-xs sm:text-sm font-medium shadow-lg shadow-[#5f52ff]/20 hover:shadow-[#5f52ff]/30"
              >
                {copiedUsage ? (
                  <span className="flex items-center gap-1 sm:gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="hidden sm:inline">Copied!</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1 sm:gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span className="hidden sm:inline">Copy Usage</span>
                  </span>
                )}
              </button>
            </div>

            <div className="relative bg-gray-900 dark:bg-gray-950 rounded-xl border-2 border-gray-800 dark:border-gray-700 overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-2 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="ml-3 text-xs font-mono text-gray-400">usage.example.tsx</span>
                </div>
                <div className="text-xs font-mono text-gray-500">React Component</div>
              </div>
              <pre className="p-6 text-sm text-gray-200 overflow-x-auto max-h-96 overflow-y-auto bg-gray-900 dark:bg-gray-950">
                <code className="font-mono">{usageExample}</code>
              </pre>
            </div>
          </div>

          {/* Props Documentation Section */}
          <div>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Props Documentation</h2>
              <span className="px-2 py-0.5 text-xs font-mono font-medium rounded-md bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
                API Reference
              </span>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              {/* CSS Props Accordion */}
              <div className="group relative overflow-hidden rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 hover:border-[#5f52ff]/50 dark:hover:border-[#5f52ff]/50 hover:shadow-lg hover:shadow-[#5f52ff]/10">
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5f52ff] via-[#7c3aed] to-[#5f52ff] transition-opacity duration-300 ${
                  openAccordions.has('css-props') ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                }`}></div>
                
                <button
                  onClick={() => {
                    const newOpen = new Set(openAccordions);
                    if (newOpen.has('css-props')) {
                      newOpen.delete('css-props');
                    } else {
                      newOpen.add('css-props');
                    }
                    setOpenAccordions(newOpen);
                  }}
                  className="w-full flex items-center justify-between p-4 sm:p-5 bg-gradient-to-r from-gray-50/50 to-transparent dark:from-gray-900/50 dark:to-transparent hover:from-gray-100/50 hover:to-gray-50/50 dark:hover:from-gray-800/50 dark:hover:to-gray-900/50 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      openAccordions.has('css-props') ? 'bg-[#5f52ff] scale-150' : 'bg-gray-400 group-hover:bg-[#5f52ff]'
                    }`}></div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 text-xs font-mono font-semibold rounded bg-[#5f52ff]/10 dark:bg-[#5f52ff]/20 text-[#5f52ff] dark:text-[#818cf8] border border-[#5f52ff]/20">
                        CSS
                      </span>
                      <h3 className="font-display text-base sm:text-lg font-bold text-gray-900 dark:text-white">CSS Props</h3>
                    </div>
                    <span className="hidden sm:inline text-xs font-mono text-gray-500 dark:text-gray-400">css object</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline text-xs font-mono text-gray-400 dark:text-gray-500">
                      {openAccordions.has('css-props') ? 'collapse' : 'expand'}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-all duration-300 ${
                        openAccordions.has('css-props') ? 'rotate-180 text-[#5f52ff]' : 'group-hover:text-[#5f52ff]'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openAccordions.has('css-props') && (
                  <div className="p-4 sm:p-5 border-t border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-900/50">
                    <div className="mb-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                      <p className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">💡</span>
                        <span>Each property in the <code className="font-mono text-xs bg-white dark:bg-gray-800 px-1.5 py-0.5 rounded">css</code> object is a string containing Tailwind CSS classes. You can combine multiple classes to style each part of the component.</span>
                      </p>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      {getCSSProps().map((prop) => (
                        <div key={prop.key} className="group/prop relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-[#5f52ff]/50 dark:hover:border-[#5f52ff]/50 transition-all duration-200">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#5f52ff] to-[#7c3aed] opacity-0 group-hover/prop:opacity-100 transition-opacity"></div>
                          <button
                            onClick={() => {
                              const newOpen = new Set(openAccordions);
                              const propKey = `css-${prop.key}`;
                              if (newOpen.has(propKey)) {
                                newOpen.delete(propKey);
                              } else {
                                newOpen.add(propKey);
                              }
                              setOpenAccordions(newOpen);
                            }}
                            className="w-full flex items-center justify-between text-left p-3 sm:p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                          >
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <code className="font-mono text-xs sm:text-sm font-bold text-[#5f52ff] dark:text-[#818cf8] bg-[#5f52ff]/10 dark:bg-[#5f52ff]/20 px-2 py-1 rounded border border-[#5f52ff]/20">
                                {prop.title}
                              </code>
                              <span className="text-xs font-mono text-gray-500 dark:text-gray-400 hidden sm:inline">: {prop.type}</span>
                              <span className="text-xs text-gray-400 dark:text-gray-500 hidden md:inline truncate">— {prop.description.split('.')[0]}.</span>
                            </div>
                            <svg
                              className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-all duration-200 flex-shrink-0 ${
                                openAccordions.has(`css-${prop.key}`) ? 'rotate-180 text-[#5f52ff]' : 'group-hover/prop:text-[#5f52ff]'
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {openAccordions.has(`css-${prop.key}`) && (
                            <div className="px-4 pb-4 border-t border-gray-200/50 dark:border-gray-700/50 bg-gray-50/50 dark:bg-gray-800/30 animate-in slide-in-from-top-2 duration-200">
                              <p className="text-sm text-gray-700 dark:text-gray-300 mt-3 mb-3">{prop.description}</p>
                              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg border border-gray-800 dark:border-gray-700 overflow-hidden">
                                <div className="px-3 py-1.5 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-800 flex items-center gap-2">
                                  <div className="flex gap-1">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                  </div>
                                  <span className="text-xs font-mono text-gray-400">example.tailwind</span>
                                </div>
                                <div className="p-3">
                                  <code className="text-xs font-mono text-gray-300">
                                    <span className="text-purple-400">{prop.title}</span>
                                    <span className="text-gray-500">: </span>
                                    <span className="text-green-400">"{prop.examples}"</span>
                                  </code>
                                </div>
                              </div>
                              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">{prop.details}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Data Props Accordion */}
              <div className="group relative overflow-hidden rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10">
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-500 transition-opacity duration-300 ${
                  openAccordions.has('data-props') ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                }`}></div>
                
                <button
                  onClick={() => {
                    const newOpen = new Set(openAccordions);
                    if (newOpen.has('data-props')) {
                      newOpen.delete('data-props');
                    } else {
                      newOpen.add('data-props');
                    }
                    setOpenAccordions(newOpen);
                  }}
                  className="w-full flex items-center justify-between p-4 sm:p-5 bg-gradient-to-r from-gray-50/50 to-transparent dark:from-gray-900/50 dark:to-transparent hover:from-gray-100/50 hover:to-gray-50/50 dark:hover:from-gray-800/50 dark:hover:to-gray-900/50 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      openAccordions.has('data-props') ? 'bg-emerald-500 scale-150' : 'bg-gray-400 group-hover:bg-emerald-500'
                    }`}></div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 text-xs font-mono font-semibold rounded bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                        DATA
                      </span>
                      <h3 className="font-display text-base sm:text-lg font-bold text-gray-900 dark:text-white">Data Props</h3>
                    </div>
                    <span className="hidden sm:inline text-xs font-mono text-gray-500 dark:text-gray-400">data object</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline text-xs font-mono text-gray-400 dark:text-gray-500">
                      {openAccordions.has('data-props') ? 'collapse' : 'expand'}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-all duration-300 ${
                        openAccordions.has('data-props') ? 'rotate-180 text-emerald-500' : 'group-hover:text-emerald-500'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openAccordions.has('data-props') && (
                  <div className="p-4 sm:p-5 border-t border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-900/50">
                    <div className="mb-4 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                      <p className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-emerald-500 mt-0.5">💡</span>
                        <span>The <code className="font-mono text-xs bg-white dark:bg-gray-800 px-1.5 py-0.5 rounded">data</code> object contains all content and configuration for the {component.name.toLowerCase()} component. Only the props listed below are used by this component.</span>
                      </p>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      {getDataProps().map((prop) => (
                        <div key={prop.key} className="group/prop relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-200">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-green-500 opacity-0 group-hover/prop:opacity-100 transition-opacity"></div>
                          <button
                            onClick={() => {
                              const newOpen = new Set(openAccordions);
                              const propKey = `data-${prop.key}`;
                              if (newOpen.has(propKey)) {
                                newOpen.delete(propKey);
                              } else {
                                newOpen.add(propKey);
                              }
                              setOpenAccordions(newOpen);
                            }}
                            className="w-full flex items-center justify-between text-left p-3 sm:p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                          >
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <code className="font-mono text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20 px-2 py-1 rounded border border-emerald-500/20">
                                {prop.title}
                              </code>
                              <span className="text-xs font-mono text-gray-500 dark:text-gray-400 hidden sm:inline">{prop.type}</span>
                              <span className="text-xs text-gray-400 dark:text-gray-500 hidden md:inline truncate">— {prop.description.split('.')[0]}.</span>
                            </div>
                            <svg
                              className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-all duration-200 flex-shrink-0 ${
                                openAccordions.has(`data-${prop.key}`) ? 'rotate-180 text-emerald-500' : 'group-hover/prop:text-emerald-500'
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {openAccordions.has(`data-${prop.key}`) && (
                            <div className="px-4 pb-4 border-t border-gray-200/50 dark:border-gray-700/50 bg-gray-50/50 dark:bg-gray-800/30 animate-in slide-in-from-top-2 duration-200">
                              <p className="text-sm text-gray-700 dark:text-gray-300 mt-3 mb-3">{prop.description}</p>
                              {prop.key === 'content' && (
                                <div className="mt-3 space-y-2">
                                  <div className="bg-gray-900 dark:bg-gray-950 rounded-lg border border-gray-800 dark:border-gray-700 overflow-hidden">
                                    <div className="px-3 py-1.5 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-800 flex items-center gap-2">
                                      <div className="flex gap-1">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                      </div>
                                      <span className="text-xs font-mono text-gray-400">examples.ts</span>
                                    </div>
                                    <div className="p-3 space-y-2">
                                      <div>
                                        <p className="text-xs text-gray-400 mb-1">String:</p>
                                        <code className="text-xs font-mono text-gray-300">
                                          <span className="text-purple-400">content</span>
                                          <span className="text-gray-500">: </span>
                                          <span className="text-green-400">"This is the main content text"</span>
                                        </code>
                                      </div>
                                      <div>
                                        <p className="text-xs text-gray-400 mb-1">React Component:</p>
                                        <code className="text-xs font-mono text-gray-300">
                                          <span className="text-purple-400">content</span>
                                          <span className="text-gray-500">: </span>
                                          <span className="text-blue-400">&lt;</span>
                                          <span className="text-yellow-400">div</span>
                                          <span className="text-blue-400">&gt;</span>
                                          <span className="text-gray-500">...</span>
                                          <span className="text-blue-400">&lt;/</span>
                                          <span className="text-yellow-400">div</span>
                                          <span className="text-blue-400">&gt;</span>
                                        </code>
                                      </div>
                                    </div>
                                  </div>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 italic">When using a React component, you can pass any valid React element or component as the content.</p>
                                </div>
                              )}
                              {prop.key === 'footer' && (
                                <div className="mt-3 space-y-2">
                                  <div className="bg-gray-900 dark:bg-gray-950 rounded-lg border border-gray-800 dark:border-gray-700 overflow-hidden">
                                    <div className="px-3 py-1.5 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-800 flex items-center gap-2">
                                      <div className="flex gap-1">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                      </div>
                                      <span className="text-xs font-mono text-gray-400">examples.ts</span>
                                    </div>
                                    <div className="p-3 space-y-2">
                                      <div>
                                        <p className="text-xs text-gray-400 mb-1">String:</p>
                                        <code className="text-xs font-mono text-gray-300">
                                          <span className="text-purple-400">footer</span>
                                          <span className="text-gray-500">: </span>
                                          <span className="text-green-400">"Footer text here"</span>
                                        </code>
                                      </div>
                                      <div>
                                        <p className="text-xs text-gray-400 mb-1">React Component:</p>
                                        <code className="text-xs font-mono text-gray-300">
                                          <span className="text-purple-400">footer</span>
                                          <span className="text-gray-500">: </span>
                                          <span className="text-blue-400">&lt;</span>
                                          <span className="text-yellow-400">NewsCardFooter</span>
                                          <span className="text-gray-500"> </span>
                                          <span className="text-purple-400">date</span>
                                          <span className="text-gray-500">=</span>
                                          <span className="text-green-400">"26 Jan, 2026"</span>
                                          <span className="text-blue-400"> /&gt;</span>
                                        </code>
                                      </div>
                                    </div>
                                  </div>
                                  {variantId === 'news' && componentId === 'card' && (
                                    <div className="mt-4 p-4 rounded-lg border-2 border-emerald-500/30 dark:border-emerald-500/20 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-900/20 dark:to-green-900/20">
                                      <div className="flex items-center gap-2 mb-3">
                                        <span className="text-lg">📦</span>
                                        <h4 className="font-display text-sm font-bold text-gray-900 dark:text-white">NewsCardFooter Component Props</h4>
                                      </div>
                                      <p className="text-xs text-gray-600 dark:text-gray-300 mb-4">When footer is a NewsCardFooter component, it accepts these props:</p>
                                      <div className="space-y-3">
                                        {[
                                          { name: 'date', required: true, type: 'string', description: 'The date string to display (e.g., "26 Jan, 2026"). Shows with a calendar icon.', example: 'date="26 Jan, 2026"' },
                                          { name: 'shareUrl', required: false, type: 'string | undefined', description: 'Custom URL to share on social media. If not provided, automatically uses the current page URL.', example: 'shareUrl="https://example.com/article"', default: 'Current page URL (window.location.href)' },
                                          { name: 'shareTitle', required: false, type: 'string | undefined', description: 'Title text to include when sharing on social media platforms. Used in Facebook, Twitter, and WhatsApp shares.', example: 'shareTitle="Article Title Here"', default: 'Empty string if not provided' }
                                        ].map((footerProp) => (
                                          <div key={footerProp.name} className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-3">
                                            <div className="flex items-center gap-2 mb-2">
                                              <code className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/20">
                                                {footerProp.name}
                                              </code>
                                              {footerProp.required && (
                                                <span className="px-1.5 py-0.5 text-xs font-semibold rounded bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800">
                                                  required
                                                </span>
                                              )}
                                              {!footerProp.required && (
                                                <span className="px-1.5 py-0.5 text-xs font-semibold rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                                                  optional
                                                </span>
                                              )}
                                            </div>
                                            <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">{footerProp.description}</p>
                                            <div className="bg-gray-900 dark:bg-gray-950 rounded border border-gray-800 dark:border-gray-700 p-2 mt-2">
                                              <code className="text-xs font-mono text-gray-300">
                                                <span className="text-purple-400">{footerProp.name}</span>
                                                <span className="text-gray-500">: </span>
                                                <span className="text-green-400">"{footerProp.example.split('=')[1]?.replace(/"/g, '') || 'value'}"</span>
                                              </code>
                                            </div>
                                            {footerProp.default && (
                                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                                <strong>Default:</strong> <code className="font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">{footerProp.default}</code>
                                              </p>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                      <div className="mt-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
                                          <span>💡</span>
                                          <span>How NewsCardFooter Works:</span>
                                        </p>
                                        <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1 list-disc list-inside ml-4">
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
                              )}
                              {prop.key === 'imageUrl' && (
                                <div className="mt-3">
                                  <div className="bg-gray-900 dark:bg-gray-950 rounded-lg border border-gray-800 dark:border-gray-700 overflow-hidden">
                                    <div className="px-3 py-1.5 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-800 flex items-center gap-2">
                                      <div className="flex gap-1">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                      </div>
                                      <span className="text-xs font-mono text-gray-400">example.ts</span>
                                    </div>
                                    <div className="p-3">
                                      <code className="text-xs font-mono text-gray-300">
                                        <span className="text-purple-400">imageUrl</span>
                                        <span className="text-gray-500">: </span>
                                        <span className="text-green-400">"https://example.com/image.jpg"</span>
                                      </code>
                                    </div>
                                  </div>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Can be a relative path (<code className="font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">"/images/card.jpg"</code>) or absolute URL. Image is displayed using the <code className="font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">image</code> CSS class.</p>
                                </div>
                              )}
                              {prop.key === 'imageAlt' && (
                                <div className="mt-3">
                                  <div className="bg-gray-900 dark:bg-gray-950 rounded-lg border border-gray-800 dark:border-gray-700 overflow-hidden">
                                    <div className="px-3 py-1.5 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-800 flex items-center gap-2">
                                      <div className="flex gap-1">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                      </div>
                                      <span className="text-xs font-mono text-gray-400">example.ts</span>
                                    </div>
                                    <div className="p-3">
                                      <code className="text-xs font-mono text-gray-300">
                                        <span className="text-purple-400">imageAlt</span>
                                        <span className="text-gray-500">: </span>
                                        <span className="text-green-400">"A beautiful sunset over mountains"</span>
                                      </code>
                                    </div>
                                  </div>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                    <strong>Default:</strong> <code className="font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">"Card image"</code> (if not provided). 
                                    This text describes what the image shows. Important for accessibility and SEO.
                                  </p>
                                </div>
                              )}
                              {prop.key === 'slides' && componentId === 'slider' && (
                                <div className="mt-3">
                                  {variantId === 'news' ? (
                                    <>
                                      <div className="bg-gray-900 dark:bg-gray-950 rounded-lg border border-gray-800 dark:border-gray-700 overflow-hidden">
                                        <div className="px-3 py-1.5 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-800 flex items-center gap-2">
                                          <div className="flex gap-1">
                                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                          </div>
                                          <span className="text-xs font-mono text-gray-400">news-slider.ts</span>
                                        </div>
                                        <div className="p-3">
                                          <code className="text-xs font-mono text-gray-300">
                                            <span className="text-purple-400">slides</span>
                                            <span className="text-gray-500">: [</span>
                                            <br />
                                            <span className="text-gray-500 ml-4">{'{'}</span>
                                            <br />
                                            <span className="text-purple-400 ml-8">imageUrl</span>
                                            <span className="text-gray-500">: </span>
                                            <span className="text-green-400">"https://example.com/image.jpg"</span>
                                            <span className="text-gray-500">,</span>
                                            <br />
                                            <span className="text-purple-400 ml-8">imageAlt</span>
                                            <span className="text-gray-500">: </span>
                                            <span className="text-green-400">"Image description"</span>
                                            <span className="text-gray-500">,</span>
                                            <br />
                                            <span className="text-purple-400 ml-8">title</span>
                                            <span className="text-gray-500">: </span>
                                            <span className="text-green-400">"Slide title"</span>
                                            <span className="text-gray-500">,</span>
                                            <br />
                                            <span className="text-purple-400 ml-8">category</span>
                                            <span className="text-gray-500">: </span>
                                            <span className="text-green-400">"News"</span>
                                            <br />
                                            <span className="text-gray-500 ml-4">{'}'}</span>
                                            <br />
                                            <span className="text-gray-500">]</span>
                                          </code>
                                        </div>
                                      </div>
                                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Each slide object contains imageUrl (string), imageAlt (string), title (string), and category (string) properties.</p>
                                    </>
                                  ) : (variantId === 'matchScoreCard' || variantId === 'matchScoreStack') ? (
                                    <>
                                      <div className="bg-gray-900 dark:bg-gray-950 rounded-lg border border-gray-800 dark:border-gray-700 overflow-hidden">
                                        <div className="px-3 py-1.5 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-800 flex items-center gap-2">
                                          <div className="flex gap-1">
                                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                          </div>
                                          <span className="text-xs font-mono text-gray-400">match-score-slider.ts</span>
                                        </div>
                                        <div className="p-3">
                                          <code className="text-xs font-mono text-gray-300">
                                            <span className="text-purple-400">slides</span>
                                            <span className="text-gray-500">: [</span>
                                            <br />
                                            <span className="text-gray-500 ml-4">{'{'}</span>
                                            <br />
                                            <span className="text-purple-400 ml-8">status</span>
                                            <span className="text-gray-500">: </span>
                                            <span className="text-green-400">"Match Ended"</span>
                                            <span className="text-gray-500">,</span>
                                            <br />
                                            <span className="text-purple-400 ml-8">league</span>
                                            <span className="text-gray-500">: </span>
                                            <span className="text-green-400">"Indian Premier League"</span>
                                            <span className="text-gray-500">,</span>
                                            <br />
                                            <span className="text-purple-400 ml-8">team1</span>
                                            <span className="text-gray-500">: </span>
                                            <span className="text-gray-500">{'{'}</span>
                                            <span className="text-purple-400"> name</span>
                                            <span className="text-gray-500">, </span>
                                            <span className="text-purple-400">logo</span>
                                            <span className="text-gray-500">, </span>
                                            <span className="text-purple-400">score</span>
                                            <span className="text-gray-500">, </span>
                                            <span className="text-purple-400">overs</span>
                                            <span className="text-gray-500"> {'}'}</span>
                                            <span className="text-gray-500">,</span>
                                            <br />
                                            <span className="text-purple-400 ml-8">team2</span>
                                            <span className="text-gray-500">: </span>
                                            <span className="text-gray-500">{'{'}</span>
                                            <span className="text-purple-400"> name</span>
                                            <span className="text-gray-500">, </span>
                                            <span className="text-purple-400">logo</span>
                                            <span className="text-gray-500">, </span>
                                            <span className="text-purple-400">score</span>
                                            <span className="text-gray-500">, </span>
                                            <span className="text-purple-400">overs</span>
                                            <span className="text-gray-500"> {'}'}</span>
                                            <br />
                                            <span className="text-gray-500 ml-4">{'}'}</span>
                                            <br />
                                            <span className="text-gray-500">]</span>
                                          </code>
                                        </div>
                                      </div>
                                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Each slide contains status, statusColor, league, matchType, date, time, team1 (object), team2 (object), summary, and buttonText properties.</p>
                                    </>
                                  ) : null}
                                </div>
                              )}
                              {prop.key === 'columns' && componentId === 'table' && (
                                <div className="mt-3">
                                  <div className="bg-gray-900 dark:bg-gray-950 rounded-lg border border-gray-800 dark:border-gray-700 overflow-hidden">
                                    <div className="px-3 py-1.5 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-800 flex items-center gap-2">
                                      <div className="flex gap-1">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                      </div>
                                      <span className="text-xs font-mono text-gray-400">example.ts</span>
                                    </div>
                                    <div className="p-3">
                                      <code className="text-xs font-mono text-gray-300">
                                        <span className="text-purple-400">columns</span>
                                        <span className="text-gray-500">: [</span>
                                        <br />
                                        <span className="text-gray-500 ml-4">{'{'}</span>
                                        <span className="text-purple-400"> key</span>
                                        <span className="text-gray-500">: </span>
                                        <span className="text-green-400">"name"</span>
                                        <span className="text-gray-500">, </span>
                                        <span className="text-purple-400">label</span>
                                        <span className="text-gray-500">: </span>
                                        <span className="text-green-400">"Name"</span>
                                        <span className="text-gray-500">, </span>
                                        <span className="text-purple-400">align</span>
                                        <span className="text-gray-500">: </span>
                                        <span className="text-blue-400">"left"</span>
                                        <span className="text-gray-500"> {'}'}</span>
                                        <br />
                                        <span className="text-gray-500">]</span>
                                      </code>
                                    </div>
                                  </div>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Each column has key (string), label (string), and optional align ('left' | 'center' | 'right').</p>
                                </div>
                              )}
                              {prop.key === 'rows' && componentId === 'table' && (
                                <div className="mt-3">
                                  <div className="bg-gray-900 dark:bg-gray-950 rounded-lg border border-gray-800 dark:border-gray-700 overflow-hidden">
                                    <div className="px-3 py-1.5 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-800 flex items-center gap-2">
                                      <div className="flex gap-1">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                      </div>
                                      <span className="text-xs font-mono text-gray-400">example.ts</span>
                                    </div>
                                    <div className="p-3">
                                      <code className="text-xs font-mono text-gray-300">
                                        <span className="text-purple-400">rows</span>
                                        <span className="text-gray-500">: [</span>
                                        <br />
                                        <span className="text-gray-500 ml-4">{'{'}</span>
                                        <span className="text-purple-400"> name</span>
                                        <span className="text-gray-500">: </span>
                                        <span className="text-green-400">"Team A"</span>
                                        <span className="text-gray-500">, </span>
                                        <span className="text-purple-400">score</span>
                                        <span className="text-gray-500">: </span>
                                        <span className="text-yellow-400">150</span>
                                        <span className="text-gray-500"> {'}'}</span>
                                        <br />
                                        <span className="text-gray-500">]</span>
                                      </code>
                                    </div>
                                  </div>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Each row object contains values keyed by column keys. Values can be strings, numbers, or ReactNode.</p>
                                </div>
                              )}
                              {prop.key === 'chips' && componentId === 'chip' && (
                                <div className="mt-3">
                                  <div className="bg-gray-900 dark:bg-gray-950 rounded-lg border border-gray-800 dark:border-gray-700 overflow-hidden">
                                    <div className="px-3 py-1.5 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-800 flex items-center gap-2">
                                      <div className="flex gap-1">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                      </div>
                                      <span className="text-xs font-mono text-gray-400">example.ts</span>
                                    </div>
                                    <div className="p-3">
                                      <code className="text-xs font-mono text-gray-300">
                                        <span className="text-purple-400">chips</span>
                                        <span className="text-gray-500">: [</span>
                                        <br />
                                        <span className="text-gray-500 ml-4">{'{'}</span>
                                        <span className="text-purple-400"> label</span>
                                        <span className="text-gray-500">: </span>
                                        <span className="text-green-400">"Popular Search"</span>
                                        <span className="text-gray-500">, </span>
                                        <span className="text-purple-400">icon</span>
                                        <span className="text-gray-500">: </span>
                                        <span className="text-blue-400">&lt;Icon /&gt;</span>
                                        <span className="text-gray-500"> {'}'}</span>
                                        <br />
                                        <span className="text-gray-500">]</span>
                                      </code>
                                    </div>
                                  </div>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Each chip object has label (string, required) and optional icon (ReactNode).</p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* How It Works Accordion */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => {
                    const newOpen = new Set(openAccordions);
                    if (newOpen.has('how-it-works')) {
                      newOpen.delete('how-it-works');
                    } else {
                      newOpen.add('how-it-works');
                    }
                    setOpenAccordions(newOpen);
                  }}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">How It Works</h3>
                  <svg
                    className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${
                      openAccordions.has('how-it-works') ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openAccordions.has('how-it-works') && (
                  <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
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
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VariantPage;