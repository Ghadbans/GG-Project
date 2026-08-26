const fs = require('fs');
let code = fs.readFileSync('server/routes/maintenanceRoutes.js', 'utf8');

code = code.replace(/\$nin:\s*\['Close',\s*'Converted',\s*'Cancelled'\]/g, "$nin: ['Close', 'Converted', 'Cancel']");
fs.writeFileSync('server/routes/maintenanceRoutes.js', code);
console.log('Fixed backend route cancel string');
