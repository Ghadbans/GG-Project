const fs = require('fs');
const path = require('path');

// 1. Revert index.html
let indexContent = fs.readFileSync('index.html', 'utf8');
indexContent = indexContent.replace('    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n', '');
indexContent = indexContent.replace('    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n', '');
fs.writeFileSync('index.html', indexContent);
console.log('Reverted index.html');

// 2. Revert view.css
let cssContent = fs.readFileSync('src/js/AdminView1/view.css', 'utf8');
const marker = '/* ========================================================';
if (cssContent.includes(marker)) {
    cssContent = cssContent.substring(0, cssContent.indexOf(marker));
    fs.writeFileSync('src/js/AdminView1/view.css', cssContent);
    console.log('Reverted view.css');
}

// 3. Revert Drawer changes
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
      if (content.includes("variant={window.innerWidth < 768 ? 'temporary' : 'permanent'}")) {
        content = content.replace(/variant=\{window\.innerWidth < 768 \? 'temporary' : 'permanent'\}/g, 'variant="permanent"');
        fs.writeFileSync(fullPath, content);
        updatedCount++;
      }
    }
  }
}
processDir('src');
console.log('Reverted ' + updatedCount + ' files with Drawer.');
