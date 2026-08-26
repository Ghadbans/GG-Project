const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

// Labor row fixes
// Find the td that contains laborQty, adjustmentNumber, laborDiscount, total price
const tdRegex = /<td[^>]*>[\s\S]*?<TextField[^>]*name='(adjustmentNumber|laborDiscount|stock|itemRate|itemDiscount)'[\s\S]*?<\/td>/g;
code = code.replace(tdRegex, (match, name) => {
  if (match.includes('display: "none"')) return match; // Already hidden
  return match.replace(/<td/, '<td style={{ display: "none" }}');
});

// For total prices
const totalPriceLaborRegex = /<td[^>]*>[\s\S]*?\{totalLaborFeesGenerale[\s\S]*?<\/td>/;
code = code.replace(totalPriceLaborRegex, '<td style={{ display: "none" }}></td>');

const totalGeneraleRowRegex = /<tr>\s*<th[\s\S]*?Total Generale<\/th>[\s\S]*?<\/tr>/;
code = code.replace(totalGeneraleRowRegex, '<tr style={{ display: "none" }}></tr>');

const totalCostRowRegex = /<tr>\s*<th[\s\S]*?Total Cost<\/th>[\s\S]*?<\/tr>/;
code = code.replace(totalCostRowRegex, '<tr style={{ display: "none" }}></tr>');

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', code);
console.log('Fixed labor row and items properly');
