const fs = require('fs');
let content = fs.readFileSync('package.json', 'utf8');
content = content.replace('"version": "3.3.99"', '"version": "3.3.100"');
fs.writeFileSync('package.json', content);
console.log('Bumped version to 3.3.100');
