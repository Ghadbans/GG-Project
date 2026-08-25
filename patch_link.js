const fs = require('fs');
let content = fs.readFileSync('src/js/component/SideMaintenance.js', 'utf8');
content = content.replace(/to="\/PointOfSale"/g, 'to="/StoreItemDisplay"');
content = content.replace(/isActive\('\/PointOfSale'\)/g, "isActive('/StoreItemDisplay')");
fs.writeFileSync('src/js/component/SideMaintenance.js', content);
