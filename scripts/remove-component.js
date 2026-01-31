#!/usr/bin/env node

/**
 * Component Removal Script
 * 
 * This script removes a component and all its references from the UI library.
 * 
 * Usage: node scripts/remove-component.js <componentName>
 * Example: node scripts/remove-component.js button
 */

const fs = require('fs');
const path = require('path');

// Get component name from command line
const componentName = process.argv[2];

if (!componentName) {
  console.error('❌ Error: Component name is required');
  console.log('Usage: node scripts/remove-component.js <componentName>');
  console.log('Example: node scripts/remove-component.js button');
  process.exit(1);
}

// Validate component name (should be camelCase)
if (!/^[a-z][a-zA-Z0-9]*$/.test(componentName)) {
  console.error('❌ Error: Component name must be camelCase (e.g., "button", "myComponent")');
  process.exit(1);
}

const componentNamePascal = componentName.charAt(0).toUpperCase() + componentName.slice(1);
const componentDir = path.join(__dirname, '../src/developerComponent', componentName);

console.log(`\n🗑️  Removing component: ${componentNamePascal}\n`);

// Step 1: Remove component directory
if (fs.existsSync(componentDir)) {
  fs.rmSync(componentDir, { recursive: true, force: true });
  console.log('✅ Removed component directory');
} else {
  console.log('⚠️  Component directory does not exist');
}

// Step 2: Update componentCollection.ts
const componentCollectionPath = path.join(__dirname, '../src/developerComponent/componentCollection.ts');
let componentCollection = fs.readFileSync(componentCollectionPath, 'utf8');

// Remove component export
const componentExportRegex = new RegExp(`//\\s+${componentNamePascal}\\s+Component\\s*\\n\\s*export\\s+\\{\\s+default\\s+as\\s+${componentNamePascal}\\s+\\}\\s+from\\s+'\\.\\/${componentName}\\/baseComponent';\\s*\\n?`, 'g');
componentCollection = componentCollection.replace(componentExportRegex, '');

// Remove example export
const exampleExportRegex = new RegExp(`export\\s+\\{\\s+default\\s+as\\s+${componentNamePascal}Example\\s+\\}\\s+from\\s+'\\.\\/${componentName}\\/exampleComponent';\\s*\\n?`, 'g');
componentCollection = componentCollection.replace(exampleExportRegex, '');

fs.writeFileSync(componentCollectionPath, componentCollection);
console.log('✅ Updated componentCollection.ts');

// Step 3: Update codeRegistry.ts
const codeRegistryPath = path.join(__dirname, '../src/developerComponent/codeRegistry.ts');
let codeRegistry = fs.readFileSync(codeRegistryPath, 'utf8');

// Remove code constant
const codeConstantRegex = new RegExp(`//\\s+${componentNamePascal}\\s+Component\\s+Code\\s*\\n\\s*export\\s+const\\s+${componentName}BaseCode\\s*=\\s*\`[\\s\\S]*?\`;\\s*\\n?`, 'g');
codeRegistry = codeRegistry.replace(codeConstantRegex, '');

// Remove from componentCodeMap
const mapEntryRegex = new RegExp(`\\s+${componentName}:\\s+${componentName}BaseCode,\\s*\\n?`, 'g');
codeRegistry = codeRegistry.replace(mapEntryRegex, '');

fs.writeFileSync(codeRegistryPath, codeRegistry);
console.log('✅ Updated codeRegistry.ts');

// Step 4: Update exampleRegistry.ts
const exampleRegistryPath = path.join(__dirname, '../src/developerComponent/exampleRegistry.ts');
let exampleRegistry = fs.readFileSync(exampleRegistryPath, 'utf8');

// Remove component example logic - match from comment to closing brace
// Use a more precise pattern that matches the entire if block including the return statement
const commentPattern = `// ${componentNamePascal} component`;
const ifPattern = `if (componentId === '${componentName}')`;
const commentIndex = exampleRegistry.indexOf(commentPattern);
const ifIndex = exampleRegistry.indexOf(ifPattern);

if (commentIndex !== -1 && ifIndex !== -1 && ifIndex > commentIndex) {
  // Find the closing brace of the if block
  let braceCount = 0;
  let pos = ifIndex;
  let foundOpening = false;
  
  while (pos < exampleRegistry.length) {
    const char = exampleRegistry[pos];
    if (char === '{') {
      braceCount++;
      foundOpening = true;
    } else if (char === '}') {
      braceCount--;
      if (braceCount === 0 && foundOpening) {
        // Found the closing brace, check what comes after
        const afterBrace = exampleRegistry.slice(pos + 1).trim();
        // Remove from comment start to after the closing brace (including newline)
        const endPos = pos + 1 + (afterBrace.startsWith('\n') ? 1 : 0);
        exampleRegistry = exampleRegistry.slice(0, commentIndex) + exampleRegistry.slice(endPos);
        break;
      }
    }
    pos++;
  }
}

fs.writeFileSync(exampleRegistryPath, exampleRegistry);
console.log('✅ Updated exampleRegistry.ts');

// Step 5: Update config/components.ts
const componentsConfigPath = path.join(__dirname, '../src/config/components.ts');
let componentsConfig = fs.readFileSync(componentsConfigPath, 'utf8');

// Remove component config entry
const componentConfigRegex = new RegExp(`\\s*\\{\\s*\\n\\s*id:\\s+'${componentName}',[\\s\\S]*?\\},?\\s*\\n?`, 'g');
componentsConfig = componentsConfig.replace(componentConfigRegex, (match) => {
  // Remove trailing comma if it exists
  return match.trim().endsWith(',') ? '' : '';
});

// Clean up any double commas or extra whitespace
componentsConfig = componentsConfig.replace(/,\s*,/g, ',');
componentsConfig = componentsConfig.replace(/\n\s*\n\s*\n/g, '\n\n');

fs.writeFileSync(componentsConfigPath, componentsConfig);
console.log('✅ Updated config/components.ts');

// Step 6: Remove variants from config/variants.ts
const variantsConfigPath = path.join(__dirname, '../src/config/variants.ts');
if (fs.existsSync(variantsConfigPath)) {
  let variantsConfig = fs.readFileSync(variantsConfigPath, 'utf8');
  
  // Find and remove all variants for this component
  const variantRegex = new RegExp(`\\s*\\{\\s*\\n\\s*id:\\s+'[^']+',[\\s\\S]*?componentId:\\s+'${componentName}'[\\s\\S]*?\\},?\\s*\\n?`, 'g');
  const matches = variantsConfig.match(variantRegex);
  
  if (matches && matches.length > 0) {
    matches.forEach(match => {
      variantsConfig = variantsConfig.replace(match, '');
    });
    
    // Clean up any double commas or extra whitespace
    variantsConfig = variantsConfig.replace(/,\s*,/g, ',');
    variantsConfig = variantsConfig.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(variantsConfigPath, variantsConfig);
    console.log(`✅ Removed ${matches.length} variant(s) from config/variants.ts`);
  } else {
    console.log('ℹ️  No variants found for this component');
  }
}

// Step 7: Remove variant folder if it exists
const variantDir = path.join(__dirname, '../src/components/variant', componentName);
if (fs.existsSync(variantDir)) {
  fs.rmSync(variantDir, { recursive: true, force: true });
  console.log('✅ Removed variant directory');
}

console.log(`\n✨ Component "${componentNamePascal}" removed successfully!\n`);
console.log('📝 Note: You may need to restart your dev server for changes to take effect.\n');
