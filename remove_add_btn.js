const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', 'utf8');

const addBtnRegex = /<section style=\{\{ position: 'relative', float: 'right', margin: '10px' \}\}>[\s\S]*?<ViewTooltip>[\s\S]*?<\/section>/;

code = code.replace(addBtnRegex, '');

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', code);
console.log('Removed Add button completely');
