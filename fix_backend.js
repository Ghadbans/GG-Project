const fs = require('fs');
let code = fs.readFileSync('server/routes/maintenanceRoutes.js', 'utf8');

// The broken string is:
// const escapedSearch = search.trim().replace(/[.*+?^${()|[\]\]/g, '\Route.route("/maintenance-Information").get');
code = code.replace(
  "const escapedSearch = search.trim().replace(/[.*+?^${()|[\\]\\]/g, '\\Route.route(\"/maintenance-Information\").get');", 
  "const escapedSearch = search.trim().replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');"
);

fs.writeFileSync('server/routes/maintenanceRoutes.js', code);
