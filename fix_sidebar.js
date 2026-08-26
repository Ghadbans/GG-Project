const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/TechnicianStoreDisplay.js', 'utf8');

code = code.replace(/import SideMaintenance from '\.\.\/component\/SideMaintenance';/, "import SideMaintenanceMenu from '../component/SideMaintenanceMenu';");
code = code.replace(/<SideMaintenance \/>/, "<SideMaintenanceMenu />");

fs.writeFileSync('src/js/AdminView1/TechnicianStoreDisplay.js', code);
console.log('Replaced sidebar for TechnicianStoreDisplay');
