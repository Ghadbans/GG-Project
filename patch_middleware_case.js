const fs = require('fs');
let content = fs.readFileSync('server/index.js', 'utf8');
content = content.replace("require('./middleware/lockMiddleware')", "require('./Middleware/lockMiddleware')");
fs.writeFileSync('server/index.js', content);
console.log('Fixed Middleware casing');
