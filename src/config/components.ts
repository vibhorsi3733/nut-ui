// Component Library Configuration
// All components are registered here dynamically

export interface ComponentConfig {
  id: string;
  name: string;
  description: string;
  category?: string;
}

export const components: ComponentConfig[] = [
  {
    id: 'card',
    name: 'Card',
    description: 'Versatile card component with customizable styles',
    category: 'Layout'
  },
  {
    id: 'vibhor',
    name: 'Vibhor',
    description: 'Description of Vibhor component',
    category: 'Layout'
  }
  {
    id: 'slider',
    name: 'Slider',
    description: 'Carousel slider component using Swiper with navigation',
    category: 'Layout'
  },
      {
        id: 'table',
        name: 'Table',
        description: 'Data table component with customizable styling',
        category: 'Data Display'
      },
      {
        id: 'chip',
        name: 'Chip',
        description: 'Compact component for tags, labels, and filters',
        category: 'Input'
      },
      {
        id: 'clipCard',
        name: 'Clip Card',
        description: 'Video card component with thumbnail, play button, and metadata',
        category: 'Media'
      },
      {
        id: 'map',
        name: 'Map',
        description: 'Interactive map component displaying location by latitude and longitude',
        category: 'Media'
      }
      // Add more components here as they are created
    ];
