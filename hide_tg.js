const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

// Hide the TR containing Total Generale
const tgRegex = /<tr>[\s\S]*?Total Generale[\s\S]*?<\/tr>/;
code = code.replace(tgRegex, '<tr style={{ display: "none" }}></tr>');

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', code);
console.log('Hid Total Generale');
