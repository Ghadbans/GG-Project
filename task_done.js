const fs = require('fs');
let content = fs.readFileSync('C:\\Users\\GG\\.gemini\\antigravity\\brain\\47341926-a833-403d-997c-715e98dfb563\\task.md', 'utf8');
content = content.replace(/- `\[ \]`/g, '- `[x]`');
fs.writeFileSync('C:\\Users\\GG\\.gemini\\antigravity\\brain\\47341926-a833-403d-997c-715e98dfb563\\task.md', content);
console.log('Checked off tasks');
