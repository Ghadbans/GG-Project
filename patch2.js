const fs = require('fs');
let code = fs.readFileSync('server/routes/Routes.js', 'utf8');
code = code.replace(/const projection = summary \? \{[\s\S]*?\} : \{\};/g, 'const projection = {};');
fs.writeFileSync('server/routes/Routes.js', code);
console.log('Replaced projections');
