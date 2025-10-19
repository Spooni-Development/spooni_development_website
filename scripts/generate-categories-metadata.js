#!/usr/bin/env node

/**
 * Generate Categories Metadata
 * 
 * Liest alle JSON-Dateien aus propData/ und generiert categories-metadata.json
 * Wird automatisch beim Build ausgeführt
 */

const fs = require('fs');
const path = require('path');

const propDataDir = path.join(__dirname, '../docs/.vitepress/theme/propData');
const outputPath = path.join(propDataDir, 'categories-metadata.json');

console.log('📊 Generating categories metadata...');

// Finde alle JSON-Dateien (außer metadata, template und all.json)
const files = fs.readdirSync(propDataDir)
  .filter(file => 
    file.endsWith('.json') && 
    !file.startsWith('_') && 
    file !== 'categories-metadata.json' &&
    file !== 'all.json'  // Exclude all.json
  );

console.log(`Found ${files.length} category files`);

const categories = [];
let totalProps = 0;

files.forEach(file => {
  const filePath = path.join(propDataDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  
  // Convert filename to readable category name
  // e.g. "spooni-props.json" -> "Spooni Props"
  const categoryName = file
    .replace('.json', '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Check if it's new format (with metadata) or old format (just array)
  let props, subcategories;
  
  if (Array.isArray(data)) {
    // Old format: just array of props
    props = data;
    
    // Build subcategories from props
    const subMap = new Map();
    props.forEach(prop => {
      if (prop.subcategory) {
        if (!subMap.has(prop.subcategory)) {
          subMap.set(prop.subcategory, { name: prop.subcategory, count: 0 });
        }
        subMap.get(prop.subcategory).count++;
      }
    });
    subcategories = Array.from(subMap.values()).sort((a, b) => a.name.localeCompare(b.name));
    
  } else {
    // New format: with metadata
    props = data.props || [];
    
    // Use defined subcategories from metadata
    if (data.metadata?.subcategories) {
      subcategories = data.metadata.subcategories.map(sub => ({
        name: sub.name,
        count: props.filter(p => p.subcategory === sub.name).length
      }));
    } else {
      // Fallback: extract from props
      const subMap = new Map();
      props.forEach(prop => {
        if (prop.subcategory) {
          if (!subMap.has(prop.subcategory)) {
            subMap.set(prop.subcategory, { name: prop.subcategory, count: 0 });
          }
          subMap.get(prop.subcategory).count++;
        }
      });
      subcategories = Array.from(subMap.values()).sort((a, b) => a.name.localeCompare(b.name));
    }
  }
  
  categories.push({
    name: categoryName,
    count: props.length,
    subcategories: subcategories
  });
  
  totalProps += props.length;
  
  console.log(`  ✓ ${categoryName.padEnd(30)} ${props.length.toString().padStart(6)} props`);
});

// Sort categories (Spooni Props first, then alphabetical)
categories.sort((a, b) => {
  if (a.name === "Spooni Props") return -1;
  if (b.name === "Spooni Props") return 1;
  return a.name.localeCompare(b.name);
});

// Create metadata
const metadata = {
  totalProps: totalProps,
  categories: categories
};

// Write metadata file
fs.writeFileSync(outputPath, JSON.stringify(metadata, null, 2), 'utf-8');

console.log('');
console.log(`✅ Generated categories-metadata.json`);
console.log(`   Total categories: ${categories.length}`);
console.log(`   Total props: ${totalProps}`);
console.log('');

