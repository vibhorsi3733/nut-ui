/**
 * Component Collection
 * 
 * This is the single import point for all components.
 * Developers should import all components from this file.
 * 
 * Usage:
 * import { Card, Slider, Table, Chip, ClipCard, Map } from '@/developerComponent/componentCollection';
 * 
 * To add a new component:
 * 1. Create a folder inside developerComponent (e.g., developerComponent/myComponent/)
 * 2. Add baseComponent.tsx with the component implementation
 * 3. Add exampleComponent.tsx with usage example
 * 4. Export the component from this file
 */

// Card Component
export { default as Card } from './card/baseComponent';

// Slider Component
export { default as Slider } from './slider/baseComponent';

// Table Component
export { default as Table } from './table/baseComponent';

// Chip Component
export { default as Chip } from './chip/baseComponent';

// ClipCard Component
export { default as ClipCard } from './clipCard/baseComponent';

// Map Component
export { default as Map } from './map/baseComponent';

// Generic Components
export { default as Button } from './button/baseComponent';
export { default as Badge } from './badge/baseComponent';
export { default as Alert } from './alert/baseComponent';
export { default as Avatar } from './avatar/baseComponent';
export { default as Input } from './input/baseComponent';
export { default as Dropdown } from './dropdown/baseComponent';
export { default as Modal } from './modal/baseComponent';
export { default as Tabs } from './tabs/baseComponent';
export { default as Breadcrumb } from './breadcrumb/baseComponent';

// Export example components for reference
export { default as CardExample } from './card/exampleComponent';
export { default as SliderExample } from './slider/exampleComponent';
export { default as TableExample } from './table/exampleComponent';
export { default as ChipExample } from './chip/exampleComponent';
export { default as ClipCardExample } from './clipCard/exampleComponent';
export { default as MapExample } from './map/exampleComponent';
export { default as ButtonExample } from './button/exampleComponent';
export { default as BadgeExample } from './badge/exampleComponent';
export { default as AlertExample } from './alert/exampleComponent';
export { default as AvatarExample } from './avatar/exampleComponent';
export { default as InputExample } from './input/exampleComponent';
export { default as DropdownExample } from './dropdown/exampleComponent';
export { default as ModalExample } from './modal/exampleComponent';
export { default as TabsExample } from './tabs/exampleComponent';
export { default as BreadcrumbExample } from './breadcrumb/exampleComponent';