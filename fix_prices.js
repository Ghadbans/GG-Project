const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

const fcRegex = /FC \{\(item\.itemSellingPrice \* rate\)\?\.toFixed\(2\)\.replace\(\/\\B\(\?=\(\\d\{3\}\)\+\(\?!\\d\)\)\/g, ','\)\}/g;
const usdRegex = /\$ \{item\.itemSellingPrice\?\.toFixed\(2\)\.replace\(\/\\B\(\?=\(\\d\{3\}\)\+\(\?!\\d\)\)\/g, ','\)\}/g;

code = code.replace(fcRegex, '');
code = code.replace(usdRegex, '');

// The user also mentioned Quantity: "when he add item to list he can see the item price and Quantity"
// Wait, the item list has Quantity. Let's see if there is a Quantity string.
// Let's remove the typography for the entire price blocks.
const typographyRegex = /<Typography[^>]*>\s*<\/Typography>/g;
code = code.replace(typographyRegex, '');

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', code);
console.log('Fixed prices in MaintenanceOrderUpdate');
