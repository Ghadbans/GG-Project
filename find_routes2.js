const fs = require('fs');
const lines = fs.readFileSync('server/routes/Routes.js', 'utf8').split('\n');
const idx1 = lines.findIndex(l => l.includes('Route.route("/cash"'));
const idx2 = lines.findIndex(l => l.includes('Route.route("/expense"'));
console.log('CASH:');
console.log(lines.slice(idx1, idx1+15).join('\n'));
console.log('EXPENSE:');
console.log(lines.slice(idx2, idx2+15).join('\n'));
