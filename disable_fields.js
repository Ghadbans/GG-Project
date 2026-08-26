const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

// Disable Customer Selection
code = code.replace(/<Autocomplete\s+disablePortal\s+id="combo-box-demo"\s+options=\{customer\}/, '<Autocomplete disabled disablePortal id="combo-box-demo" options={customer}');

// Disable Service Date
code = code.replace(/<DatePicker\s+label="Service Date"\s+format="DD\/MM\/YYYY"\s+value=\{serviceDate\}/, '<DatePicker disabled label="Service Date" format="DD/MM/YYYY" value={serviceDate}');

// Disable Visit Date
code = code.replace(/<DatePicker\s+label="Visit Date"\s+format="DD\/MM\/YYYY"\s+value=\{visitDate\}/, '<DatePicker disabled label="Visit Date" format="DD/MM/YYYY" value={visitDate}');

// Disable Technician Select
code = code.replace(/<Select\s+required\s+id="technicianAssign"/, '<Select disabled required id="technicianAssign"');

// Fix Table Headers
code = code.replace(/<th>Stock-A<\/th>/g, '');
code = code.replace(/<th >Rate<\/th>/g, '');
code = code.replace(/<th>Amount<\/th>/g, '');

// Fix Table cells inside map loop - we can just look for the itemAmount and replace the entire <td> block.
code = code.replace(/<td id='amountTotalInvoice'>\{Item\.itemAmount\.toFixed\(2\)\.replace\(\/\\B\(\?\=\(\\d\{3\}\)\+\(\?\!\\d\)\)\/g, ','\)\}<\/td>/g, '');
// Wait, to be safer, I'll just use a CSS trick to hide the columns that I can't easily regex.
// Let's add a global CSS override for the technician view!

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', code);
console.log('Processed MaintenanceOrderUpdate form constraints');
