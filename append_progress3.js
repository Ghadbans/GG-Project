const fs = require('fs');
let content = fs.readFileSync('SYSTEM_ARCHITECTURE_AND_PROGRESS.md', 'utf8');

const newUpdates = `
- **v3.3.97 Concurrency Control & Document Locking (Issue #14)**:
  - Implemented a centralized, pessimistic lock system across 8 major modules (Quotations, Invoices, Projects, Maintenance, Purchase Requests, Purchase Orders, Item Out, Item Purchases) to prevent data collisions and dirty-writes.
  - **Backend**: Created a \`Lock\` collection (MongoDB TTL of 60s) and endpoints (\`/api/locks/acquire\`, \`/api/locks/heartbeat\`, \`/api/locks/release\`). Added \`verifyLock\` middleware globally to \`/update-*\` routes to reject unauthorized saves.
  - **Frontend**: Created the \`useDocumentLock\` hook that polls the heartbeat every 30s. If a user disconnects, the lock drops, and if another user takes over, the frontend alerts the user and auto-refreshes the page.
`;

content = content.replace("## Recovery Points", newUpdates + "\n## Recovery Points");

fs.writeFileSync('SYSTEM_ARCHITECTURE_AND_PROGRESS.md', content);
console.log('Appended progress');
