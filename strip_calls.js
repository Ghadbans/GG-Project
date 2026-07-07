const fs = require('fs');

const routesFile = 'E:/globalgateapi2/routes/Routes.js';
let content = fs.readFileSync(routesFile, 'utf8');

const lines = content.split('\n');
const newLines = lines.filter(line => !line.includes('calculateQuantity().catch('));

fs.writeFileSync(routesFile, newLines.join('\n'), 'utf8');
console.log('Removed all calculateQuantity calls from Routes.js');
