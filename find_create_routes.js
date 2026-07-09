const fs = require('fs');
const lines = fs.readFileSync('server/routes/Routes.js', 'utf8').split('\n');
const idx1 = lines.findIndex(l => l.includes('Route.route("/create-expense"'));
const idx2 = lines.findIndex(l => l.includes('Route.route("/create-cash"'));
console.log('CREATE EXPENSE:');
console.log(lines.slice(idx1, idx1+25).join('\n'));
console.log('CREATE CASH:');
console.log(lines.slice(idx2, idx2+25).join('\n'));
