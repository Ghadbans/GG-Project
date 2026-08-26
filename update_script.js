const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/SettingsView/GrantAccessUpdateView.js', 'utf8');
const insertIndex = code.indexOf('fetchedModules = fetchedModules.map(');
const block = `        if (!fetchedModules.find(m => m.moduleName === 'Maintenance-Order')) {
          fetchedModules.push({
            moduleName: 'Maintenance-Order',
            access: { readM: false, createM: false, viewM: false, editM: false, deleteM: false }
          });
        }
`;
if (!code.includes('Maintenance-Order')) {
  code = code.slice(0, insertIndex) + block + code.slice(insertIndex);
  fs.writeFileSync('src/js/AdminView1/PageView/SettingsView/GrantAccessUpdateView.js', code);
}
