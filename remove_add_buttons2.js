const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

// 1. Remove floating action buttons
const floatingRegex = /<div style=\{\{ display: 'block', position: 'fixed', zIndex: 1, float: 'right', right: '-5px', top: '400px' \}\}>[\s\S]*?<\/div>/;
code = code.replace(floatingRegex, "");

// 2. Remove inline row Add buttons
const rowAddRegex = /<span style=\{\{ display: 'flex' \}\}>\s*<BlackTooltip title="New-Row" placement="bottom">[\s\S]*?<\/BlackTooltip>\s*<\/span>/;
code = code.replace(rowAddRegex, "");

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', code);
console.log('Removed all + buttons');
