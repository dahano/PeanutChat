#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Preparing LibreChat for deployment...');

// Copy production config to the expected location
const prodConfigPath = path.join(__dirname, '..', 'librechat.production.yaml');
const configPath = path.join(__dirname, '..', 'librechat.yaml');

if (fs.existsSync(prodConfigPath)) {
  fs.copyFileSync(prodConfigPath, configPath);
  console.log('✅ Production configuration copied');
} else {
  console.log('⚠️  No production config found, using existing librechat.yaml');
}

// Ensure client/dist exists (should be built already)
const distPath = path.join(__dirname, '..', 'client', 'dist');
if (!fs.existsSync(distPath)) {
  console.log('❌ Client dist folder not found. Run "cd client && npm run build" first');
  process.exit(1);
} else {
  console.log('✅ Client build found');
}

// Check if packages are built
const packagesPath = path.join(__dirname, '..', 'packages');
const requiredPackages = ['data-provider', 'data-schemas', 'api'];

for (const pkg of requiredPackages) {
  const distPath = path.join(packagesPath, pkg, 'dist');
  if (!fs.existsSync(distPath)) {
    console.log(`❌ Package ${pkg} not built. Run "npm run build:${pkg.replace('-', '-')}" first`);
    process.exit(1);
  }
}

console.log('✅ All packages built');
console.log('🎉 Deployment preparation complete!'); 