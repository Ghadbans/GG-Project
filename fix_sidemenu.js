const fs = require('fs');
let code = fs.readFileSync('src/js/component/SideMaintenanceMenu.js', 'utf8');

code = code.replace(/<NavLink to='\/StoreItemDisplay' className='LinkName'>/g, "<NavLink to='/TechnicianStoreDisplay' className='LinkName'>");

fs.writeFileSync('src/js/component/SideMaintenanceMenu.js', code);
console.log('Fixed SideMaintenanceMenu route');
