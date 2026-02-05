// Generic Components Configuration
// All generic components are registered here

export interface GenericComponentConfig {
  id: string;
  name: string;
  description: string;
  category?: string;
}

export const genericComponents: GenericComponentConfig[] = [
  {
    id: 'button',
    name: 'Button',
    description: 'Clickable button component with customizable styles',
    category: 'Form'
  },
  {
    id: 'badge',
    name: 'Badge',
    description: 'Small status indicator or label component',
    category: 'Display'
  },
  {
    id: 'alert',
    name: 'Alert',
    description: 'Alert component for displaying important messages',
    category: 'Feedback'
  },
  {
    id: 'avatar',
    name: 'Avatar',
    description: 'User avatar component with image or initials fallback',
    category: 'Display'
  },
  {
    id: 'input',
    name: 'Input',
    description: 'Text input and textarea form component',
    category: 'Form'
  },
  {
    id: 'select',
    name: 'Select',
    description: 'Dropdown select component for single or multiple selection',
    category: 'Form'
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    description: 'Checkbox component for single or multiple selection',
    category: 'Form'
  },
  {
    id: 'radio',
    name: 'Radio',
    description: 'Radio button component for single selection from a group',
    category: 'Form'
  },
  {
    id: 'toggle',
    name: 'Toggle',
    description: 'Toggle switch component for on/off states',
    category: 'Form'
  },
  {
    id: 'dropdown',
    name: 'Dropdown',
    description: 'Dropdown menu component with customizable items',
    category: 'Navigation'
  },
  {
    id: 'modal',
    name: 'Modal',
    description: 'Modal dialog component for overlays and forms',
    category: 'Overlay'
  },
  {
    id: 'tabs',
    name: 'Tabs',
    description: 'Tabbed interface component for organizing content',
    category: 'Navigation'
  },
  {
    id: 'breadcrumb',
    name: 'Breadcrumb',
    description: 'Breadcrumb navigation component for showing page hierarchy',
    category: 'Navigation'
  }
];
