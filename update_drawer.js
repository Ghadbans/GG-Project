const fs = require('fs');
const path = require('path');

let updatedCount = 0;

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      // Update Drawer variant
      if (content.includes('variant="permanent"') && content.includes('<Drawer')) {
        content = content.replace(/<Drawer\s+variant=["']permanent["']/g, "<Drawer variant={window.innerWidth < 768 ? 'temporary' : 'permanent'}");
        changed = true;
      }

      // Add wrapper for Table/DataGrid if needed, or we can use global CSS
      // Actually global CSS is much safer for tables. Let's stick to Drawer replacement here.
      
      if (changed) {
        fs.writeFileSync(fullPath, content);
        updatedCount++;
      }
    }
  }
}

processDir('src');
console.log('Updated ' + updatedCount + ' files.');
