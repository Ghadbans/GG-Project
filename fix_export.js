const fs = require('fs');

let viewCode = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', 'utf8');
viewCode = viewCode.replace(
  /<MenuItem onClick=\{exportToExcel\}[\s\S]*?<span>Export to Excel<\/span>\s*<\/MenuItem>/g,
  ''
);
fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', viewCode);

console.log('Fixed Export to Excel');
