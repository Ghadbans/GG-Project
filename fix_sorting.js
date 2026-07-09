const fs = require('fs');
const file = 'server/routes/Routes.js';
let content = fs.readFileSync(file, 'utf8');

// Replace all occurrences of sorting by createdAt with _id
content = content.replace(/\.sort\(\{\s*createdAt\s*:\s*-1\s*\}\)/g, '.sort({ _id: -1 })');
content = content.replace(/\.sort\(\{\s*createdAt\s*:\s*1\s*\}\)/g, '.sort({ _id: 1 })');
content = content.replace(/\"createdAt\":\s*-1/g, '"_id": -1');

fs.writeFileSync(file, content);
console.log('Replaced all createdAt sorting with _id sorting');
