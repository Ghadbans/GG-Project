const fs = require('fs');
let code = fs.readFileSync('server/routes/maintenanceRoutes.js', 'utf8');

code = code.replace(
  'const query = { technicianAssign: technician };',
  "const query = { technicianAssign: technician, status: { $nin: ['Close', 'Converted', 'Cancelled'] } };"
);

fs.writeFileSync('server/routes/maintenanceRoutes.js', code);
console.log('Updated technician query');
