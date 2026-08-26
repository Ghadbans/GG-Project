const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', 'utf8');

code = code.replace(/moduleName === "Maintenance"/g, 'moduleName === "Maintenance-Order"');

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', code);
console.log('Replaced all Maintenance access checks with Maintenance-Order');
