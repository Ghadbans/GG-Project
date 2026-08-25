const fs = require('fs');
let content = fs.readFileSync('SYSTEM_ARCHITECTURE_AND_PROGRESS.md', 'utf8');

const newUpdates = `
- **v3.3.99 Concurrency Lock UI Polish**:
  - Fixed a frontend variable shadowing issue where the lock screen overlay printed the current viewer's ID instead of the lock holder's ID. Switched the overlay to render the \`lockError\` string returned from the backend (which contains the exact locker name).
  - Removed the annoying native \`window.alert()\` double-popup in \`useDocumentLock.js\` to provide a cleaner UX when encountering a lock.
`;

content = content.replace("## Recovery Points", newUpdates + "\n## Recovery Points");

fs.writeFileSync('SYSTEM_ARCHITECTURE_AND_PROGRESS.md', content);
console.log('Appended progress');
