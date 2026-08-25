const fs = require('fs');
let content = fs.readFileSync('src/js/hooks/useDocumentLock.js', 'utf8');
content = content.replace("import { ENDPOINT_URL } from '../config/layout-config.json';", "import { ENDPOINT_URL } from '../apiConfig';");
fs.writeFileSync('src/js/hooks/useDocumentLock.js', content);
console.log('Fixed useDocumentLock.js');
