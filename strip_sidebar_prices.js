const fs = require('fs');

let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

code = code.split("<Typography variant=\"body2\" color=\"text.secondary\">\n                          FC {(item.itemSellingPrice * rate)?.toFixed(2).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')}\n                        </Typography>").join("");

code = code.split("<Typography variant=\"body2\" color=\"primary\" fontWeight=\"bold\">\n                          $ {item.itemSellingPrice?.toFixed(2).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')}\n                        </Typography>").join("");

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', code);
console.log('Stripped prices from sidebar successfully');
