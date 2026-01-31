// Variant Configuration
// All variants are registered here dynamically

export interface VariantConfig {
  id: string;
  name: string;
  description: string;
  componentId: string;
}

export const variants: VariantConfig[] = [
  {
    id: 'basic',
    name: 'Basic Card',
    description: 'Simple card with title and content',
    componentId: 'card'
  },
  {
    id: 'image',
    name: 'Card with Image',
    description: 'Card that includes an image',
    componentId: 'card'
  },
  {
    id: 'news',
    name: 'News Card',
    description: 'News article card with image overlay and text',
    componentId: 'card'
  },
  {
    id: 'cardLowerHeading',
    name: 'Card Lower Heading',
    description: 'Card with image and heading positioned at the bottom',
    componentId: 'card'
  },
  {
    id: 'dataCard',
    name: 'Data Card',
    description: 'Minimalist card displaying a number with label',
    componentId: 'card'
  },
  {
    id: 'priceCardVarient',
    name: 'Price Card',
    description: 'Product card with image, price, discount banner, and buy button',
    componentId: 'card'
  },
  {
    id: 'news',
    name: 'News Slider',
    description: 'Carousel slider with news cards and navigation arrows',
    componentId: 'slider'
  },
  {
    id: 'matchScoreCard',
    name: 'Match Score Card Slider',
    description: 'Cricket match score card slider with team details and navigation',
    componentId: 'slider'
  },
  {
    id: 'matchScoreStack',
    name: 'Match Score Stack Slider',
    description: 'Cricket match score slider showing adjacent cards on sides',
    componentId: 'slider'
  },
  {
    id: 'scoreBoard',
    name: 'Scoreboard Table',
    description: 'Sports league standings table with team rankings',
    componentId: 'table'
  },
  {
    id: 'popularSearches',
    name: 'Popular Searches Chip',
    description: 'Chip component for displaying popular search terms',
    componentId: 'chip'
  },
  {
    id: 'videoCard',
    name: 'Video Card',
    description: 'Video card with thumbnail, play button, login badge, caption, date, and share button',
    componentId: 'clipCard'
  },
  {
    id: 'basicMap',
    name: 'Basic Map',
    description: 'Interactive map displaying location by latitude and longitude coordinates using OpenStreetMap',
    componentId: 'map'
  },
  {
    id: 'googleMap',
    name: 'Google Map',
    description: 'Google Maps embed displaying location by latitude and longitude coordinates',
    componentId: 'map'
  }
  // Add more variants here as they are created
];
