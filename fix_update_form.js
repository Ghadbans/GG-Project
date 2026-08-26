const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

// 1. Remove clear buttons for Autocompletes
code = code.replace(/<IconButton[^>]*>\s*<RemoveCircleOutline[^>]*>\s*<\/IconButton>/gi, '');

// 2. Fix 'navigate' back to MaintenanceOrderAdmin
code = code.replace(/navigate\('\/MaintenanceViewAdmin'\)/g, "navigate('/MaintenanceOrderAdmin')");
code = code.replace(/navigate\('\/PointOfSale'\)/g, "navigate('/MaintenanceOrderAdmin')");
code = code.replace(/navigate\(-1\)/g, "navigate('/MaintenanceOrderAdmin')");

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', code);
console.log('Fixed Clear buttons and routing');
