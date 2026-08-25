const fs = require('fs');

// Patch GrantAccessFormView.js
let formContent = fs.readFileSync('src/js/AdminView1/PageView/SettingsView/GrantAccessFormView.js', 'utf8');
if (!formContent.includes("moduleName: 'Supplier'")) {
  formContent = formContent.replace(
    /\{\s*id:\s*24,\s*moduleName:\s*'Layout-Print'.*?\},/,
    "{ id: 24, moduleName: 'Layout-Print', access: { readM: false, createM: false, viewM: false, editM: false, deleteM: false } },\n    { id: 25, moduleName: 'Supplier', access: { readM: false, createM: false, viewM: false, editM: false, deleteM: false } },"
  );
  fs.writeFileSync('src/js/AdminView1/PageView/SettingsView/GrantAccessFormView.js', formContent);
  console.log('Patched GrantAccessFormView');
}

// Patch GrantAccessUpdateView.js
let updateContent = fs.readFileSync('src/js/AdminView1/PageView/SettingsView/GrantAccessUpdateView.js', 'utf8');
if (!updateContent.includes("moduleName: 'Supplier'")) {
  const injectionLogic = `
        if (!fetchedModules.find(m => m.moduleName === 'Supplier')) {
          fetchedModules.push({
            id: 25,
            moduleName: 'Supplier',
            access: { readM: false, createM: false, viewM: false, editM: false, deleteM: false }
          });
        }
  `;
  
  updateContent = updateContent.replace(
    /if \(\!fetchedModules\.find\(m => m\.moduleName === 'Point-Of-Sell'\)\) \{/,
    injectionLogic.trim() + '\n        if (!fetchedModules.find(m => m.moduleName === \'Point-Of-Sell\')) {'
  );
  fs.writeFileSync('src/js/AdminView1/PageView/SettingsView/GrantAccessUpdateView.js', updateContent);
  console.log('Patched GrantAccessUpdateView');
}
