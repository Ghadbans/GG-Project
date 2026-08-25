const fs = require('fs');
let content = fs.readFileSync('src/js/AdminView1/PageView/SettingsView/GrantAccessUpdateView.js', 'utf8');

const injectionBlock = `
        if (!fetchedModules.find(m => m.moduleName === 'Purchase-Order')) {
          fetchedModules.push({
            id: 17,
            moduleName: 'Purchase-Order',
            access: { readM: false, createM: false, viewM: false, editM: false, deleteM: false }
          });
        }
        if (!fetchedModules.find(m => m.moduleName === 'Point-Of-Sell')) {
          fetchedModules.push({
            id: 18,
            moduleName: 'Point-Of-Sell',
            access: { readM: false, createM: false, viewM: false, editM: false, deleteM: false }
          });
        }
`;

content = content.replace(
  '// Ensure Reports module is present even for old records',
  injectionBlock + '\n        // Ensure Reports module is present even for old records'
);

fs.writeFileSync('src/js/AdminView1/PageView/SettingsView/GrantAccessUpdateView.js', content);
console.log('UpdateView patched');
