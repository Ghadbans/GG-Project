const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', 'utf8');

// 1. Rename 'Finance' to 'Items Used'
code = code.replace(/colSpan=\{6\}>Finance<\/th>/g, "colSpan={4}>Items Used</th>");

// 2. Remove Price, Discount, Total headers
code = code.replace(/<th style=\{\{ textAlign: 'left', border: '1px solid black' \}\}>Price<\/th>\s*<th style=\{\{ textAlign: 'left', border: '1px solid black', width: '50px' \}\}>Discount<\/th>\s*<th style=\{\{ textAlign: 'left', border: '1px solid black', width: '100px' \}\}>Total<\/th>/g, "");

// 3. Remove Price, Discount, Total td's inside the loop
code = code.replace(/<td style=\{\{ border: '1px solid black' \}\}> <span data-prefix>\$ <\/span>\{Item\.itemRate\}<\/td>\s*<td style=\{\{ border: '1px solid black' \}\}> <span data-prefix>% <\/span>\{Item\.itemDiscount\}<\/td>\s*<td style=\{\{ border: '1px solid black' \}\} ><span data-prefix>\$ <\/span><span id='totalItemService'>\{Number\(Item\.itemAmount \|\| 0\)\.toFixed\(2\)\.replace\(\/\\B\(\?=\(\\d\{3\}\)\+\(\?!\\d\)\)\/g, ','\)\}<\/span><\/td>/g, "");

// 4. Also fix colSpan={5} for newDescription
code = code.replace(/colSpan=\{5\}>\{Item\.newDescription\}<\/td>/g, "colSpan={4}>{Item.newDescription}</td>");

// 5. Remove Labor Fees and Grand Total rows
const footerRegex = /<tr>\s*<td style=\{\{ border: '1px solid black' \}\}>Labor Fees<\/td>\s*<td style=\{\{ border: '1px solid black' \}\}>[\s\S]*?<\/td>\s*<td style=\{\{ border: '1px solid black' \}\}>[\s\S]*?<\/td>\s*<td style=\{\{ border: '1px solid black' \}\}>[\s\S]*?<\/td>\s*<td style=\{\{ border: '1px solid black' \}\}><span data-prefix>\$ <\/span>0<\/td>\s*<td style=\{\{ border: '1px solid black' \}\}>% 0<\/td>\s*<td style=\{\{ border: '1px solid black' \}\}><span data-prefix>\$ <\/span>0<\/td>\s*<\/tr>[\s\S]*?<tr>\s*<td style=\{\{ border: '1px solid black' \}\} colSpan=\{6\}>Grand Total<\/td>\s*<td style=\{\{ border: '1px solid black' \}\}><span data-prefix>\$ <\/span>\{Number\(row\.amount \|\| 0\)\.toFixed\(2\)\.replace\(\/\\B\(\?=\(\\d\{3\}\)\+\(\?!\\d\)\)\/g, ','\)\}<\/td>\s*<\/tr>/g;
code = code.replace(footerRegex, "");

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', code);
console.log('Fixed Finance in View');
