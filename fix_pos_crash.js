const fs = require('fs');

function fix(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('const POSInfo = grantAccess')) {
    content = content.replace(
      'const BlockFactoryInfo = grantAccess.filter((row) => row.moduleName === "Block-Factory" && row.access.readM === true);',
      'const BlockFactoryInfo = grantAccess.filter((row) => row.moduleName === "Block-Factory" && row.access.readM === true);\n  const POSInfo = grantAccess.filter((row) => row.moduleName === "Point-Of-Sell" && row.access.readM === true);'
    );
    fs.writeFileSync(filePath, content);
    console.log(filePath + ' fixed.');
  }
}

fix('src/js/component/SidebarDash.js');
fix('src/js/component/SidebarDashE2.js');
