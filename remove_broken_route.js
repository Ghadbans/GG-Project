const fs = require('fs');
let code = fs.readFileSync('server/routes/maintenanceRoutes.js', 'utf8');

const regex = /Route\.route\('\/technician-maintenance-Information'\)[\s\S]*?(?=Route\.route\("\/maintenance-Information"\)\.get)/;
code = code.replace(regex, '');

fs.writeFileSync('server/routes/maintenanceRoutes.js', code);
