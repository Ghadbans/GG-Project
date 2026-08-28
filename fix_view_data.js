const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', 'utf8');

// Fix double comma
code = code.replace(/\),,/g, "),");

// Fix resM.data.data
code = code.replace(/const allMaintenance = resM\.data\.data;/g, "const allMaintenance = resM.data.itemI || resM.data.data;");

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', code);
console.log('Fixed double comma and data mapping');
