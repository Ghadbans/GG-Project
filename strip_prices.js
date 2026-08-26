const fs = require('fs');

let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/TechnicianStoreCatalog.js', 'utf8');

// The simplest way to strip the exact string in JS without regex hell is to use replace with the exact substring
code = code.split("<span><span data-prefix >FC </span>{(row.itemSellingPrice * rate)?.toFixed(2).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')} ($ {row.itemSellingPrice?.toFixed(2).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')})</span>").join("");

code = code.split("<Typography variant=\"body2\" color=\"text.secondary\">Stock: {row.itemQuantity}</Typography>").join("");

code = code.split("Price: FC {(selectedItem.itemSellingPrice * rate)?.toFixed(2).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')} ($ {selectedItem.itemSellingPrice?.toFixed(2).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')})").join("");

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/TechnicianStoreCatalog.js', code);
console.log('Stripped prices successfully');
