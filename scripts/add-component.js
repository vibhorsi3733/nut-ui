#!/usr/bin/env node

/**
 * Component Addition Script
 * 
 * This script automates the process of adding a new component to the UI library.
 * 
 * Usage: node scripts/add-component.js <componentName>
 * Example: node scripts/add-component.js button
 */

const fs = require('fs');
const path = require('path');

// Get component name from command line
const componentName = process.argv[2];

if (!componentName) {
  console.error('❌ Error: Component name is required');
  console.log('Usage: node scripts/add-component.js <componentName>');
  console.log('Example: node scripts/add-component.js button');
  process.exit(1);
}

// Validate component name (should be camelCase)
if (!/^[a-z][a-zA-Z0-9]*$/.test(componentName)) {
  console.error('❌ Error: Component name must be camelCase (e.g., "button", "myComponent")');
  process.exit(1);
}

const componentNamePascal = componentName.charAt(0).toUpperCase() + componentName.slice(1);
const componentDir = path.join(__dirname, '../src/developerComponent', componentName);
const baseComponentPath = path.join(componentDir, 'baseComponent.tsx');
const exampleComponentPath = path.join(componentDir, 'exampleComponent.tsx');

console.log(`\n🚀 Adding component: ${componentNamePascal}\n`);

// Step 1: Create component directory
if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true });
  console.log('✅ Created component directory');
} else {
  console.log('⚠️  Component directory already exists');
}

// Step 2: Create baseComponent.tsx
if (!fs.existsSync(baseComponentPath)) {
  const baseComponentTemplate = `import React from 'react';

// Define TypeScript interfaces
interface ${componentNamePascal}CSS {
  container: string;
  // Add your CSS properties here
}

interface ${componentNamePascal}Data {
  // Add your data properties here
}

interface ${componentNamePascal}Props {
  css: ${componentNamePascal}CSS;
  data: ${componentNamePascal}Data;
}

const ${componentNamePascal}: React.FC<${componentNamePascal}Props> = ({ css, data }) => {
  return (
    <div className={css.container}>
      {/* Your component implementation */}
    </div>
  );
};

export default ${componentNamePascal};
`;

  fs.writeFileSync(baseComponentPath, baseComponentTemplate);
  console.log('✅ Created baseComponent.tsx');
} else {
  console.log('⚠️  baseComponent.tsx already exists');
}

// Step 3: Create exampleComponent.tsx
if (!fs.existsSync(exampleComponentPath)) {
  const exampleComponentTemplate = `// Example: Using ${componentNamePascal} component in your application

import { ${componentNamePascal} } from '@/developerComponent/componentCollection';

function MyPage() {
  // Define CSS object with all styling classes
  const ${componentName}CSS = {
    container: "your-tailwind-classes",
    // Add your CSS properties matching the interface
  };

  // Define data object
  const ${componentName}Data = {
    // Add your data properties matching the interface
  };

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <${componentNamePascal} css={${componentName}CSS} data={${componentName}Data} />
    </div>
  );
}

export default MyPage;
`;

  fs.writeFileSync(exampleComponentPath, exampleComponentTemplate);
  console.log('✅ Created exampleComponent.tsx');
} else {
  console.log('⚠️  exampleComponent.tsx already exists');
}

// Step 4: Update componentCollection.ts
const componentCollectionPath = path.join(__dirname, '../src/developerComponent/componentCollection.ts');
let componentCollection = fs.readFileSync(componentCollectionPath, 'utf8');

if (!componentCollection.includes(`export { default as ${componentNamePascal} }`)) {
  // Find the last component export and add after it
  const lastExportMatch = componentCollection.match(/export \{ default as \w+ \} from '\.\/\w+\/baseComponent';/g);
  if (lastExportMatch) {
    const lastExport = lastExportMatch[lastExportMatch.length - 1];
    const insertPosition = componentCollection.indexOf(lastExport) + lastExport.length;
    const newExport = `\n\n// ${componentNamePascal} Component\nexport { default as ${componentNamePascal} } from './${componentName}/baseComponent';`;
    componentCollection = componentCollection.slice(0, insertPosition) + newExport + componentCollection.slice(insertPosition);
  }

  // Add example export
  const exampleExportsMatch = componentCollection.match(/export \{ default as \w+Example \} from '\.\/\w+\/exampleComponent';/g);
  if (exampleExportsMatch) {
    const lastExampleExport = exampleExportsMatch[exampleExportsMatch.length - 1];
    const insertPosition = componentCollection.indexOf(lastExampleExport) + lastExampleExport.length;
    const newExampleExport = `\nexport { default as ${componentNamePascal}Example } from './${componentName}/exampleComponent';`;
    componentCollection = componentCollection.slice(0, insertPosition) + newExampleExport + componentCollection.slice(insertPosition);
  }

  fs.writeFileSync(componentCollectionPath, componentCollection);
  console.log('✅ Updated componentCollection.ts');
} else {
  console.log('⚠️  Component already exported in componentCollection.ts');
}

// Step 5: Update codeRegistry.ts
const codeRegistryPath = path.join(__dirname, '../src/developerComponent/codeRegistry.ts');
let codeRegistry = fs.readFileSync(codeRegistryPath, 'utf8');

if (!codeRegistry.includes(`${componentName}BaseCode`)) {
  // Read the base component to get the code
  const baseComponentCode = fs.readFileSync(baseComponentPath, 'utf8');
  
  // Escape backticks and $ for template string
  const escapedCode = baseComponentCode
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${');

  // Add code constant before componentCodeMap
  const codeConstant = `\n// ${componentNamePascal} Component Code\nexport const ${componentName}BaseCode = \`${escapedCode}\`;\n`;
  
  // Find the last code constant before componentCodeMap
  const mapPosition = codeRegistry.indexOf('export const componentCodeMap');
  if (mapPosition > 0) {
    codeRegistry = codeRegistry.slice(0, mapPosition) + codeConstant + codeRegistry.slice(mapPosition);
  }

  // Add to componentCodeMap
  const mapMatch = codeRegistry.match(/export const componentCodeMap: Record<string, string> = \{[\s\S]*?\};/);
  if (mapMatch) {
    const mapContent = mapMatch[0];
    if (!mapContent.includes(`${componentName}: ${componentName}BaseCode`)) {
      // Find the last entry in the map
      const lastEntryMatch = mapContent.match(/\w+: \w+BaseCode,?\s*$/m);
      if (lastEntryMatch) {
        const insertPos = mapContent.indexOf(lastEntryMatch[0]) + lastEntryMatch[0].length;
        const newEntry = `\n  ${componentName}: ${componentName}BaseCode,`;
        const updatedMap = mapContent.slice(0, insertPos) + newEntry + mapContent.slice(insertPos);
        codeRegistry = codeRegistry.replace(mapContent, updatedMap);
      }
    }
  }

  fs.writeFileSync(codeRegistryPath, codeRegistry);
  console.log('✅ Updated codeRegistry.ts');
} else {
  console.log('⚠️  Component already in codeRegistry.ts');
}

// Step 6: Update exampleRegistry.ts
const exampleRegistryPath = path.join(__dirname, '../src/developerComponent/exampleRegistry.ts');
let exampleRegistry = fs.readFileSync(exampleRegistryPath, 'utf8');

if (!exampleRegistry.includes(`componentId === '${componentName}'`)) {
  // Find the default fallback section
  const defaultFallbackMatch = exampleRegistry.match(/\/\/ Default fallback[\s\S]*?return `\/\/ Example:/);
  if (defaultFallbackMatch) {
    const insertPosition = exampleRegistry.indexOf(defaultFallbackMatch[0]);
    const exampleCode = `
  // ${componentNamePascal} component
  if (componentId === '${componentName}') {
    return \`// Example: Using \${variant.name} in your application

import { ${componentNamePascal} } from '@/developerComponent/componentCollection';

function MyPage() {
  // Define CSS object with all styling classes
  const ${componentName}CSS = \${JSON.stringify(displayCSS, null, 4)};

  // Define data object
  const ${componentName}Data = \${JSON.stringify(displayData, null, 4)};

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <${componentNamePascal} css={\${${componentName}CSS}} data={\${${componentName}Data}} />
    </div>
  );
}

export default MyPage;\`;
  }
`;
    exampleRegistry = exampleRegistry.slice(0, insertPosition) + exampleCode + exampleRegistry.slice(insertPosition);
  }

  fs.writeFileSync(exampleRegistryPath, exampleRegistry);
  console.log('✅ Updated exampleRegistry.ts');
} else {
  console.log('⚠️  Component already in exampleRegistry.ts');
}

// Step 7: Update config/components.ts
const componentsConfigPath = path.join(__dirname, '../src/config/components.ts');
let componentsConfig = fs.readFileSync(componentsConfigPath, 'utf8');

if (!componentsConfig.includes(`id: '${componentName}'`)) {
  // Find the position before the closing bracket or comment
  const beforeClosingBracket = componentsConfig.lastIndexOf(']');
  const beforeComment = componentsConfig.lastIndexOf('// Add more components');
  const insertBefore = (beforeComment > 0 && beforeComment < beforeClosingBracket) ? beforeComment : beforeClosingBracket;
  
  // Get the text before insertion point
  const textBefore = componentsConfig.slice(0, insertBefore).trim();
  
  // Check if last character before insertion is a comma
  const needsComma = !textBefore.endsWith(',') && !textBefore.endsWith('[');
  
  // Create new component entry
  const newComponent = `${needsComma ? ',' : ''}
  {
    id: '${componentName}',
    name: '${componentNamePascal}',
    description: 'Description of ${componentNamePascal} component',
    category: 'Layout'
  }`;
  
  // Insert before closing bracket or comment
  componentsConfig = componentsConfig.slice(0, insertBefore) + newComponent + componentsConfig.slice(insertBefore);

  fs.writeFileSync(componentsConfigPath, componentsConfig);
  console.log('✅ Updated config/components.ts');
} else {
  console.log('⚠️  Component already in config/components.ts');
}

console.log(`\n✨ Component "${componentNamePascal}" added successfully!\n`);
console.log('📝 Next steps:');
console.log(`   1. Edit ${baseComponentPath} to implement your component`);
console.log(`   2. Edit ${exampleComponentPath} to add usage example`);
console.log(`   3. Update config/components.ts to set correct description and category`);
console.log(`   4. Create variants in src/components/variant/${componentName}/ if needed\n`);
