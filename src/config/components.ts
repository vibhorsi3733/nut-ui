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
  }
  // Add more components here as they are created
];
