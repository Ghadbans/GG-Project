const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', 'utf8');

const grandTotalRegex = /<tr>\s*<td style=\{\{ border: '1px solid black', width: '100px' \}\} colSpan=\{5\}>Grand Total<\/td>[\s\S]*?<\/tr>/g;
code = code.replace(grandTotalRegex, "");

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', code);
console.log('Fixed Grand Total');
