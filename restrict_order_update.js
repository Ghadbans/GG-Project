const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

// 1. Disable the minus icon for Customer (Clear icon in Autocomplete)
// Or we can just set `readOnly` or `disabled` on the Autocomplete!
// I'll add `readOnly={true}` to the Autocomplete for Customer and Technician Assign.
code = code.replace(/<Autocomplete/g, '<Autocomplete disabled={true} ');

// 2. The item pencil icon in the table. Usually it's an IconButton inside the items.map.
// Let's remove the pencil icon by replacing the IconButton that contains `ModeEdit` or `Edit` or `Create`.
const pencilRegex = /<IconButton[^>]*onClick=\{[^}]*handleOpenUpdateItem[^}]*\}[^>]*>[\s\S]*?<\/IconButton>/;
code = code.replace(pencilRegex, '');

// Also let's check for any other update item icon
const createIconRegex = /<IconButton[^>]*>[\s\S]*?<CreateIcon[\s\S]*?<\/IconButton>/;
code = code.replace(createIconRegex, '');

// 3. The side-drawer prices. 
// Previously I ran a replace for `<Typography ... FC ...` but maybe it didn't match perfectly.
// Let's remove ANY Typography containing FC or $.
const fcPriceRegex = /<Typography[^>]*>[\s\S]*?FC [\s\S]*?<\/Typography>/g;
const usdPriceRegex = /<Typography[^>]*>[\s\S]*?\$ [\s\S]*?<\/Typography>/g;
code = code.replace(fcPriceRegex, '');
code = code.replace(usdPriceRegex, '');

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', code);
console.log('Fixed MaintenanceOrderUpdate restrictions');
