const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceView/MaintenanceViewInformation.js', 'utf8');

code = code.replace(/navigate\('\/MaintenanceViewAdmin'\)/g, 'navigate(-1)');

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceView/MaintenanceViewInformation.js', code);
console.log('Fixed back button');
