const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', 'utf8');

// The footer section starts from Labor Fees row and ends at Grand Total row.
// Let's just find the closing </tbody> and go up from there, or just replace the specific text.
const laborFeesRegex = /<tr>\s*<td style=\{\{ border: '1px solid black' \}\}>Labor Fees<\/td>[\s\S]*?<\/tr>/g;
code = code.replace(laborFeesRegex, "");

const employeeRegex = /<tr>\s*<td style=\{\{ border: '1px solid black' \}\}>1<\/td>\s*<td style=\{\{ border: '1px solid black' \}\} colSpan=\{5\}>Employee<\/td>[\s\S]*?<\/tr>/g;
code = code.replace(employeeRegex, "");

const grandTotalRegex = /<tr>\s*<td style=\{\{ border: '1px solid black' \}\} colSpan=\{6\}>Grand Total<\/td>[\s\S]*?<\/tr>/g;
code = code.replace(grandTotalRegex, "");

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', code);
console.log('Fixed Grand Total');
