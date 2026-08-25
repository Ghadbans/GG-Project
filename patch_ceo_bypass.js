const fs = require('fs');
const files = [
  'src/js/component/SidebarDash.js',
  'src/js/component/SidebarDashE2.js',
  'src/js/component/SideShop.js',
  'src/js/component/SideMaintenance.js'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  // Remove the CEO role check so only GG bypasses
  content = content.replace(/user\.data\?\.role !== 'CEO' && /g, '');
  fs.writeFileSync(file, content);
  console.log(`Removed CEO bypass from ${file}`);
}
