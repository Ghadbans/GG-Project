const fs = require('fs');
const lines = fs.readFileSync('server/routes/Routes.js', 'utf8').split('\n');
const idx = lines.findIndex(l => l.includes('Route.route("/update-itemPurchase'));
console.log(lines.slice(idx, idx+25).join('\n'));
