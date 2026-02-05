// Generic Variants Configuration
// All generic component variants are registered here

export interface GenericVariantConfig {
  id: string;
  name: string;
  description: string;
  componentId: string;
}

export const genericVariants: GenericVariantConfig[] = [
  // Button variants
  {
    id: 'primary',
    name: 'Primary Button',
    description: 'Primary action button with blue background',
    componentId: 'button'
  },
  {
    id: 'secondary',
    name: 'Secondary Button',
    description: 'Secondary action button with gray background',
    componentId: 'button'
  },
  // Badge variants
  {
    id: 'solid',
    name: 'Solid Badge',
    description: 'Badge with solid background color',
    componentId: 'badge'
  },
  {
    id: 'outline',
    name: 'Outline Badge',
    description: 'Badge with outline border',
    componentId: 'badge'
  },
  // Alert variants
  {
    id: 'success',
    name: 'Success Alert',
    description: 'Success message alert with green styling',
    componentId: 'alert'
  },
  {
    id: 'error',
    name: 'Error Alert',
    description: 'Error message alert with red styling',
    componentId: 'alert'
  },
  // Avatar variants
  {
    id: 'single',
    name: 'Single Avatar',
    description: 'Single user avatar with image or initials',
    componentId: 'avatar'
  },
  {
    id: 'group',
    name: 'Group Avatar',
    description: 'Multiple avatars displayed in a group',
    componentId: 'avatar'
  },
  // Input variants
  {
    id: 'text',
    name: 'Text Input',
    description: 'Standard text input field',
    componentId: 'input'
  },
  {
    id: 'textarea',
    name: 'Textarea Input',
    description: 'Multi-line textarea input field',
    componentId: 'input'
  },
  // Select variants
  {
    id: 'single',
    name: 'Single Select',
    description: 'Dropdown select for single option selection',
    componentId: 'select'
  },
  {
    id: 'multi',
    name: 'Multi Select',
    description: 'Dropdown select for multiple option selection',
    componentId: 'select'
  },
  // Checkbox variants
  {
    id: 'single',
    name: 'Single Checkbox',
    description: 'Single checkbox for boolean selection',
    componentId: 'checkbox'
  },
  {
    id: 'group',
    name: 'Checkbox Group',
    description: 'Multiple checkboxes for multi-selection',
    componentId: 'checkbox'
  },
  // Radio variants
  {
    id: 'single',
    name: 'Single Radio',
    description: 'Single radio button',
    componentId: 'radio'
  },
  {
    id: 'group',
    name: 'Radio Group',
    description: 'Radio button group for single selection',
    componentId: 'radio'
  },
  // Toggle variants
  {
    id: 'default',
    name: 'Default Toggle',
    description: 'Standard toggle switch',
    componentId: 'toggle'
  },
  {
    id: 'large',
    name: 'Large Toggle',
    description: 'Large toggle switch variant',
    componentId: 'toggle'
  },
  // Dropdown variants
  {
    id: 'simple',
    name: 'Simple Dropdown',
    description: 'Basic dropdown menu without icons',
    componentId: 'dropdown'
  },
  {
    id: 'withIcons',
    name: 'Dropdown with Icons',
    description: 'Dropdown menu with icon items',
    componentId: 'dropdown'
  },
  // Modal variants
  {
    id: 'simple',
    name: 'Simple Modal',
    description: 'Basic modal dialog with title and content',
    componentId: 'modal'
  },
  {
    id: 'withForm',
    name: 'Modal with Form',
    description: 'Modal dialog containing a form',
    componentId: 'modal'
  },
  // Tabs variants
  {
    id: 'default',
    name: 'Default Tabs',
    description: 'Standard tabbed interface',
    componentId: 'tabs'
  },
  {
    id: 'pills',
    name: 'Pills Tabs',
    description: 'Tabbed interface with pill-style tabs',
    componentId: 'tabs'
  },
  // Breadcrumb variants
  {
    id: 'simple',
    name: 'Simple Breadcrumb',
    description: 'Basic breadcrumb navigation',
    componentId: 'breadcrumb'
  },
  {
    id: 'withIcons',
    name: 'Breadcrumb with Icons',
    description: 'Breadcrumb navigation with icons',
    componentId: 'breadcrumb'
  }
];
