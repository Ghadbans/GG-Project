const fs = require('fs');
let content = fs.readFileSync('SYSTEM_ARCHITECTURE_AND_PROGRESS.md', 'utf8');

const newUpdates = `
- **v3.3.98 Concurrency Lock & Navigation Fixes**:
  - Fixed a bug where identical \`userName\` logins across different machines would bypass the pessimistic document lock. Injected a localized \`sessionLockId\` into \`useDocumentLock.js\` to ensure each browser tab is treated as a unique entity, even if they share the same username.
  - Fixed a React Router history corruption issue where the "Go Back" button on the lock overlay used \`window.history.back()\`, which broke subsequent \`NavLink\` "View" button clicks in list views. Replaced with React Router's \`navigate(-1)\` for safe traversal.
`;

content = content.replace("## Recovery Points", newUpdates + "\n## Recovery Points");

fs.writeFileSync('SYSTEM_ARCHITECTURE_AND_PROGRESS.md', content);
console.log('Appended progress');
