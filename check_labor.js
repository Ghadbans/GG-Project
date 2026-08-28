const fs = require('fs');

// Fix the second Labor Fees row in the CEO/Admin detail table (9-col table)
// colSpan={2} → should be colSpan={6} to span: Labor Fees label + Qty + Rate + Discount + Amount + Out columns correctly
// Actually: this table has headers: Item Name, Desc, Qty, Sell Rate, Discount, Total, Out, Cost Rate, Total Cost (9 cols)
// Labor Fees row uses colSpan={2} for label, then qty, then $ rate, % discount, $ total = 6 tds for 9 cols
// This is CORRECT for the CEO admin detail view - leave as-is.
// The FIRST Labor Fees row (line ~1350) in the Technician-facing 4-col table is already fixed.

// The verify check was wrong - data-prefix in the CEO table is valid.
// Just confirm the FIRST table's Labor Fees row is clean:
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', 'utf8');
const lines = code.split('\n');
console.log('First Labor Fees row (Technician 4-col view):');
console.log(lines.slice(1349, 1357).join('\n'));
console.log('');
console.log('Second Labor Fees row (CEO 9-col finance view):');
console.log(lines.slice(1468, 1476).join('\n'));
