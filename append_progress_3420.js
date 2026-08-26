const fs = require('fs');

const text = `
## v3.4.20 - Item Return Crash Fix
- **Item Return View**: Fixed a critical crash (\`ReferenceError: isLocked is not defined\`) in \`ItemReturnUpdateForm.js\`. This occurred because a document lock check (\`if (isLocked)\`) was blindly copied into a create form without importing or initializing the \`useDocumentLock\` hook. The invalid block was removed.
`;

fs.appendFileSync('SYSTEM_ARCHITECTURE_AND_PROGRESS.md', text);
