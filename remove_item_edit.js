const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

// Replace handleOpenItemUpdate button
code = code.replace(/<BlackTooltip title="Edit" placement='bottom'>[\s\S]*?<IconButton onClick=\{[^}]*handleOpenItemUpdate[^}]*\}[^>]*>[\s\S]*?<\/IconButton>[\s\S]*?<\/BlackTooltip>/, '');

// Make sure it removed it
fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', code);
