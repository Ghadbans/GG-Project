const fs = require('fs');
let content = fs.readFileSync('src/js/hooks/useDocumentLock.js', 'utf8');
content = content.replace("import { selectUser } from '../features/auth/authSlice';", "import { selectCurrentUser } from '../features/auth/authSlice';");
content = content.replace("const user = useSelector(selectUser);", "const user = useSelector(selectCurrentUser);");
fs.writeFileSync('src/js/hooks/useDocumentLock.js', content);
console.log('Fixed selectCurrentUser in useDocumentLock.js');
