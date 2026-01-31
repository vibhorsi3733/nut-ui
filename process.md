# How to Add a New Component

## 🚀 Quick Start

**Run one command and you're done!**

```bash
npm run add-component <componentName>
```

**Example:**
```bash
npm run add-component button
```

This automatically creates everything you need. Then just edit 2 files to implement your component.

---

## 📝 Step-by-Step Guide

### Step 1: Run the Script

```bash
npm run add-component button
```

**What this does:**
- ✅ Creates `src/developerComponent/button/` folder
- ✅ Creates `baseComponent.tsx` template
- ✅ Creates `exampleComponent.tsx` template
- ✅ Updates all registry files automatically
- ✅ Registers component in config

### Step 2: Implement Your Component

Edit `src/developerComponent/button/baseComponent.tsx`:

```tsx
import React from 'react';

interface ButtonCSS {
  button: string;
  text: string;
}

interface ButtonData {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<{ css: ButtonCSS; data: ButtonData }> = ({ css, data }) => {
  return (
    <button className={css.button} onClick={data.onClick}>
      <span className={css.text}>{data.label}</span>
    </button>
  );
};

export default Button;
```

### Step 3: Add Usage Example

Edit `src/developerComponent/button/exampleComponent.tsx`:

```tsx
import { Button } from '@/developerComponent/componentCollection';

function MyPage() {
  const buttonCSS = {
    button: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",
    text: "font-semibold"
  };
  
  const buttonData = { 
    label: "Click Me",
    onClick: () => console.log("Clicked!")
  };
  
  return <Button css={buttonCSS} data={buttonData} />;
}

export default MyPage;
```

### Step 4: Update Component Config (Optional)

Edit `src/config/components.ts` to update description and category:

```tsx
{
  id: 'button',
  name: 'Button',
  description: 'Interactive button component with customizable styles', // Update this
  category: 'Input' // Update if needed: 'Layout', 'Data Display', 'Input', 'Media'
}
```

### Step 5: Update Code Registry (Important!)

After implementing your component, update `src/developerComponent/codeRegistry.ts`:

1. Copy your entire `baseComponent.tsx` code
2. Paste it into the `buttonBaseCode` constant in `codeRegistry.ts`

**Example:**
```tsx
export const buttonBaseCode = `import React from 'react';
// ... paste your complete component code here
`;
```

**Why?** This is what gets displayed in the component library code viewer.

### Step 6: Done! 🎉

Your component is now in the library! Restart your dev server if needed:

```bash
npm run dev
```

---

## 📋 Complete Example: Adding a Button Component

### Step 1: Run Script
```bash
npm run add-component button
```

### Step 2: Edit baseComponent.tsx
```tsx
import React from 'react';

interface ButtonCSS {
  button: string;
  text: string;
  icon?: string;
}

interface ButtonData {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<{ css: ButtonCSS; data: ButtonData }> = ({ css, data }) => {
  return (
    <button
      className={css.button}
      onClick={data.onClick}
      disabled={data.disabled}
    >
      {data.icon && <span className={css.icon}>{data.icon}</span>}
      <span className={css.text}>{data.label}</span>
    </button>
  );
};

export default Button;
```

### Step 3: Edit exampleComponent.tsx
```tsx
import { Button } from '@/developerComponent/componentCollection';

function MyPage() {
  const buttonCSS = {
    button: "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:opacity-50",
    text: "text-sm",
    icon: "w-4 h-4 mr-2"
  };
  
  const buttonData = {
    label: "Click Me",
    onClick: () => alert("Button clicked!"),
    disabled: false
  };
  
  return (
    <div className="container mx-auto p-4">
      <Button css={buttonCSS} data={buttonData} />
    </div>
  );
}

export default MyPage;
```

### Step 4: Update codeRegistry.ts
Copy the code from `baseComponent.tsx` and paste into `buttonBaseCode` constant.

### Step 5: Update config/components.ts
```tsx
{
  id: 'button',
  name: 'Button',
  description: 'Interactive button component with customizable styles and states',
  category: 'Input'
}
```

---

## ✅ Checklist

After running `npm run add-component <name>`:

- [ ] Edit `baseComponent.tsx` - Implement your component
- [ ] Edit `exampleComponent.tsx` - Add usage example
- [ ] Update `codeRegistry.ts` - Copy component code to registry
- [ ] Update `config/components.ts` - Set description and category
- [ ] Test component in library

---

## 🔧 Troubleshooting

### Component not appearing in library?
- ✅ Check `config/components.ts` has your component
- ✅ Restart dev server: `npm run dev`

### Code not displaying correctly?
- ✅ Make sure you updated `codeRegistry.ts` with your component code
- ✅ Check for syntax errors in the code string

### Script not working?
- ✅ Make sure component name is camelCase (e.g., `button`, not `Button`)
- ✅ Check Node.js is installed: `node --version`

### Need to add variants?
1. Create folder: `src/components/variant/button/`
2. Create variant file: `primaryButton.tsx`
3. Add to `src/config/variants.ts`:
```tsx
{
  id: 'primaryButton',
  name: 'Primary Button',
  description: 'Primary button variant',
  componentId: 'button'
}
```

---

## 📁 File Structure

After running the script, you'll have:

```
src/developerComponent/
└── button/
    ├── baseComponent.tsx      ← Edit this (implement component)
    └── exampleComponent.tsx   ← Edit this (add example)
```

The script automatically updates:
- `componentCollection.ts` ✅
- `codeRegistry.ts` (needs your code) ⚠️
- `exampleRegistry.ts` ✅
- `config/components.ts` ✅

---

## 🎯 Summary

**3 Simple Steps:**

1. **Run:** `npm run add-component button`
2. **Edit:** `baseComponent.tsx` and `exampleComponent.tsx`
3. **Update:** `codeRegistry.ts` with your component code

**That's it!** Your component is ready. 🚀

---

## 🗑️ Remove a Component

**Run one command:**

```bash
npm run remove-component <componentName>
```

**Example:**
```bash
npm run remove-component button
```

**What this does:**
- ✅ Removes component folder (`src/developerComponent/button/`)
- ✅ Removes from `componentCollection.ts`
- ✅ Removes from `codeRegistry.ts`
- ✅ Removes from `exampleRegistry.ts`
- ✅ Removes from `config/components.ts`
- ✅ Removes all variants from `config/variants.ts`
- ✅ Removes variant folder (`src/components/variant/button/`)

**Done!** Component is completely removed. 🎉
