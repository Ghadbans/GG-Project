const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

// Hide the stock td
code = code.replace(/<td>\s*<TextField\s*(disabled)?\s*name='stock'/g, '<td style={{ display: "none" }}>\n<TextField name="stock"');

// Hide the itemRate td
code = code.replace(/<td\s*>\s*<TextField\s*name='itemRate'/g, '<td style={{ display: "none" }}>\n<TextField name="itemRate"');

// Hide the itemDiscount td
code = code.replace(/<td\s*>\s*<TextField\s*name='itemDiscount'/g, '<td style={{ display: "none" }}>\n<TextField name="itemDiscount"');

// Hide the adjustment td's in the top Labor Fees row!
// The user says "no one should access this edit button", "he can see the item price and Quantity". 
// Wait, the "Labor Fees" row has "adjustmentNumber", "laborDiscount", and total price!
// Let's hide the total price <td>: <td><span>$</span><span>{totalLaborFeesGenerale...}</span></td>
const laborFeePriceRegex = /<td>\s*<span>\$<\/span>\s*<span>\{totalLaborFeesGenerale.*?<\/span>\s*<\/td>/;
code = code.replace(laborFeePriceRegex, '<td style={{ display: "none" }}></td>');

// Hide adjustmentNumber
code = code.replace(/<td>\s*<TextField\s*id='adjustmentNumber'/g, '<td style={{ display: "none" }}>\n<TextField id="adjustmentNumber"');

// Hide laborDiscount
code = code.replace(/<td>\s*<TextField\s*(disabled=\{[^}]*\})?\s*name='laborDiscount'/g, '<td style={{ display: "none" }}>\n<TextField name="laborDiscount"');

// Wait! Also the "Total Generale" at the bottom!
// <th colSpan={7} style={{ textAlign: 'center', backgroundColor: '#f2f2f2' }}>Total Generale</th>
// <th><span>$</span><span>{totalGeneraleFinal...}</span></th>
code = code.replace(/<th colSpan=\{7\}.*?>Total Generale<\/th>/, '<th colSpan={4} style={{ textAlign: "center", backgroundColor: "#f2f2f2", display: "none" }}>Total Generale</th>');
code = code.replace(/<th[^>]*>\s*<span>\$<\/span>\s*<span>\{totalGeneraleFinal.*?<\/span>\s*<\/th>/, '<th style={{ display: "none" }}></th>');
// Also the Total Cost if it's there
code = code.replace(/<th colSpan=\{6\}.*?>Total Cost<\/th>/, '<th style={{ display: "none" }}></th>');
code = code.replace(/<th>\s*<span>\$<\/span>\s*<span>\{totalCostGenerale.*?<\/span>\s*<\/th>/, '<th style={{ display: "none" }}></th>');

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', code);
console.log('Fixed inputs in MaintenanceOrderUpdate');
