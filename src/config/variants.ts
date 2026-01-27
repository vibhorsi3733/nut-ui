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
  }
  // Add more variants here as they are created
];
