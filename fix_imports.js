const fs = require('fs');
const files = [
  'src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js',
  'src/js/AdminView1/PageView/MaintenanceOrder/TechnicianStoreCatalog.js'
];

files.forEach(file => {
  let code = fs.readFileSync(file, 'utf8');
  
  code = code.replace(/'\.\/PageView\/Chartview\.css'/g, "'../Chartview.css'");
  code = code.replace(/'\.\.\/utils\/apiCache'/g, "'../../../utils/apiCache'");
  code = code.replace(/'\.\.\/img\/no-data\.png'/g, "'../../../img/no-data.png'");
  code = code.replace(/'\.\/MessageAdminView'/g, "'../../MessageAdminView'");
  code = code.replace(/'\.\/NotificationVIewInfo'/g, "'../../NotificationVIewInfo'");
  
  fs.writeFileSync(file, code);
});
console.log('Fixed relative imports');
