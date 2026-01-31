# Developer Component Structure

This folder contains all component code that is displayed to users in the component library.

## Folder Structure

```
developerComponent/
├── componentCollection.ts    # Single import point for all components
├── codeRegistry.ts            # Component source code registry
├── exampleRegistry.ts         # Example usage code registry
├── card/
│   ├── baseComponent.tsx      # Base Card component implementation
│   └── exampleComponent.tsx   # Example usage of Card component
├── slider/
│   ├── baseComponent.tsx      # Base Slider component implementation
│   └── exampleComponent.tsx   # Example usage of Slider component
├── table/
│   ├── baseComponent.tsx      # Base Table component implementation
│   └── exampleComponent.tsx   # Example usage of Table component
├── chip/
│   ├── baseComponent.tsx      # Base Chip component implementation
│   └── exampleComponent.tsx   # Example usage of Chip component
├── clipCard/
│   ├── baseComponent.tsx      # Base ClipCard component implementation
│   └── exampleComponent.tsx   # Example usage of ClipCard component
└── map/
    ├── baseComponent.tsx      # Base Map component implementation
    └── exampleComponent.tsx   # Example usage of Map component
```

## How to Add a New Component

### Step 1: Create Component Folder
Create a new folder inside `developerComponent/` with your component name (e.g., `myComponent/`).

### Step 2: Create Base Component
Create `baseComponent.tsx` inside your component folder with the component implementation:

```tsx
// src/developerComponent/myComponent/baseComponent.tsx
import React from 'react';

interface MyComponentCSS {
  container: string;
  // ... other CSS properties
}

interface MyComponentData {
  // ... data properties
}

interface MyComponentProps {
  css: MyComponentCSS;
  data: MyComponentData;
}

const MyComponent: React.FC<MyComponentProps> = ({ css, data }) => {
  return (
    <div className={css.container}>
      {/* Your component implementation */}
    </div>
  );
};

export default MyComponent;
```

### Step 3: Create Example Component
Create `exampleComponent.tsx` inside your component folder with usage example:

```tsx
// src/developerComponent/myComponent/exampleComponent.tsx
// Example: Using MyComponent in your application

import { MyComponent } from '@/developerComponent/componentCollection';

function MyPage() {
  // Define CSS object
  const myComponentCSS = {
    container: "your-css-classes",
    // ... other CSS properties
  };

  // Define data object
  const myComponentData = {
    // ... data properties
  };

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <MyComponent css={myComponentCSS} data={myComponentData} />
    </div>
  );
}

export default MyPage;
```

### Step 4: Update componentCollection.ts
Add your component export to `componentCollection.ts`:

```tsx
// Export the component
export { default as MyComponent } from './myComponent/baseComponent';

// Export the example (optional, for reference)
export { default as MyComponentExample } from './myComponent/exampleComponent';
```

### Step 5: Update codeRegistry.ts
Add your component code to `codeRegistry.ts`:

```tsx
export const myComponentBaseCode = `import React from 'react';
// ... your component code as a string
`;

// Add to the mapping
export const componentCodeMap: Record<string, string> = {
  // ... existing components
  myComponent: myComponentBaseCode,
};
```

### Step 6: Update exampleRegistry.ts
Add your example code generation logic to `exampleRegistry.ts`:

```tsx
// Add case in getExampleCode function
if (componentId === 'myComponent') {
  return `// Example: Using ${variant.name} in your application
import { MyComponent } from '@/developerComponent/componentCollection';
// ... rest of example code
`;
}
```

### Step 7: Register Component in Config
Add your component to `src/config/components.ts`:

```tsx
{
  id: 'myComponent',
  name: 'My Component',
  description: 'Description of your component',
  category: 'Category'
}
```

### Step 8: Create Variants (Optional)
If your component has variants, add them to `src/config/variants.ts` and create variant files in `src/components/variant/myComponent/`.

## Import Flow

**All components should be imported through `componentCollection.ts`:**

```tsx
import { Card, Slider, Table, Chip, ClipCard, Map } from '@/developerComponent/componentCollection';
```

This ensures a single import point and makes it easy to manage all components.

## Automatic Discovery

Once you've completed the steps above:
- ✅ Component automatically appears in the UI display
- ✅ Component automatically appears in the component library
- ✅ Component's props are automatically generated and managed
- ✅ Component code is displayed in the variant detail page
- ✅ Example usage is displayed in the variant detail page

## Key Points

1. **Only 2 files per component needed**: `baseComponent.tsx` and `exampleComponent.tsx`
2. **Single import point**: All components imported through `componentCollection.ts`
3. **Automatic registration**: Component appears in library after adding to config
4. **Props auto-generation**: Props documentation is automatically generated
5. **Code display**: Component code is automatically displayed from `codeRegistry.ts`
6. **Example display**: Usage examples are automatically displayed from `exampleRegistry.ts`

## Notes

- The `codeRegistry.ts` and `exampleRegistry.ts` files contain the source code as strings for display purposes
- These registry files need to be manually updated when component code changes
- In the future, these could be auto-generated from the actual component files
