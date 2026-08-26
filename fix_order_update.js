const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

// 1. Remove clear button for Customer
code = code.replace(/<IconButton onClick=\{handleClear\}[^>]*>[\s\S]*?<\/IconButton>/, '');
code = code.replace(/<IconButton onClick=\{handleClearTech\}[^>]*>[\s\S]*?<\/IconButton>/, '');

// 2. Remove the Edit Pencil icon for items (CreateIcon)
const pencilRegex = /<BlackTooltip title="Update Item">[\s\S]*?<IconButton onClick=\{[^\}]*\}[^>]*>[\s\S]*?<CreateIcon[^>]*>[\s\S]*?<\/IconButton>[\s\S]*?<\/BlackTooltip>/;
code = code.replace(pencilRegex, '');

// 3. The side-drawer prices (FC and $).
// The user says "in the add list he can see the item prices". 
// Let's remove the Typography sections for FC and $.
const fcPriceRegex = /<Typography[^>]*>\s*FC\s*\{[^}]*\}\s*<\/Typography>/g;
const usdPriceRegex = /<Typography[^>]*>\s*\$\s*\{[^}]*\}\s*<\/Typography>/g;
code = code.replace(fcPriceRegex, '');
code = code.replace(usdPriceRegex, '');

// Let's also make sure there are no other price texts.
// "he can see the item price and Quantity !!!"
// So there might be a Quantity text too.
// Let's see what is inside the shop drawer.
fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', code);
console.log('Fixed restrictions in MaintenanceOrderUpdate');
