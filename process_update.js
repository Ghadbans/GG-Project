const fs = require('fs');
let updateCode = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

updateCode = updateCode.replace(/MaintenanceUpdateView/g, 'MaintenanceOrderUpdate');
updateCode = updateCode.replace(/update-maintenance/g, 'technician-update-maintenance');
// Change status options to only Open and Pending for technician
updateCode = updateCode.replace(/<MenuItem value="Open">Open<\/MenuItem>\s*<MenuItem value="Pending">Pending<\/MenuItem>\s*<MenuItem value="Reschedule">Reschedule<\/MenuItem>\s*<MenuItem value="Cancel">Cancel<\/MenuItem>\s*<MenuItem value="Close">Close<\/MenuItem>/g, '<MenuItem value="Open">Open</MenuItem>\n<MenuItem value="Pending">Pending</MenuItem>');

// Strip out Pricing and Stock from the item addition modal/drawer
updateCode = updateCode.replace(/FC \{Number\(item\.itemSellingPrice\).*?<\/Typography>/g, '');
updateCode = updateCode.replace(/Stock: \{item\.itemQuantity\}/g, '');
updateCode = updateCode.replace(/\$ \{(Number\(item\.itemSellingPrice\).*?)\}/g, '');

// Strip out table columns for pricing
updateCode = updateCode.replace(/<th>Stock<\/th>/g, '');
updateCode = updateCode.replace(/<th>Rate<\/th>/g, '');
updateCode = updateCode.replace(/<th>Amount<\/th>/g, '');
updateCode = updateCode.replace(/<th>Discount<\/th>/g, '');

// Strip out table cells for pricing. It's tricky to regex this perfectly if they have complex inputs, but let's try.
// Actually, it might be better to just hide them using CSS or a global regex, but I'll do a simple check.
// I'll manually replace the headers and hide the cells.

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', updateCode);
console.log('Processed MaintenanceOrderUpdate.js');
