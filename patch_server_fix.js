const fs = require('fs');
let content = fs.readFileSync('server/index.js', 'utf8');

const importString = `const authRoutes = require('./routes/AuthRoutes');
const lockRoutes = require('./routes/lockRoutes');
const verifyLock = require('./middleware/lockMiddleware');`;

content = content.replace("const authRoutes = require('./routes/AuthRoutes');", importString);

fs.writeFileSync('server/index.js', content);
console.log('Fixed imports in server/index.js');
