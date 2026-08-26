const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

code = code.replace(
  /<td colSpan=\{3\}>Total Generale<\/td>/,
  '<td colSpan={3} style={{ display: "none" }}>Total Generale</td>'
);

code = code.replace(
  /<td><span>\$<\/span><span>\{totalInvoice/g,
  '<td style={{ display: "none" }}><span>$</span><span>{totalInvoice'
);

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', code);
console.log('Fixed Total Generale properly');
