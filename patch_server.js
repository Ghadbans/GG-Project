const fs = require('fs');

let content = fs.readFileSync('server/index.js', 'utf8');

const importString = `const authRoutes = require('./routes/auth');
const lockRoutes = require('./routes/lockRoutes');
const verifyLock = require('./middleware/lockMiddleware');`;

content = content.replace("const authRoutes = require('./routes/auth');", importString);

const applyMiddlewareString = `app.use('/auth', authRoutes);

app.use('/api/locks', lockRoutes);

// Apply verifyLock to all PUT update routes
app.put('/endpoint/update-*', verifyLock);
`;

content = content.replace("app.use('/auth', authRoutes);", applyMiddlewareString);

fs.writeFileSync('server/index.js', content);
console.log('Patched server/index.js');
