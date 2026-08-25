const fs = require('fs');
let content = fs.readFileSync('SYSTEM_ARCHITECTURE_AND_PROGRESS.md', 'utf8');

const newUpdates = `
- **v3.3.95 Item Quantity Validation & Deletion Dependencies (Issue #10, #11, #12)**:
  - Added dependency-aware deletion checks across \`delete-estimation\`, \`delete-invoice\`, \`delete-project\`, \`delete-maintenance\`, \`delete-purchase\`, and \`remove-customer\` routes. Users are now blocked (HTTP 400) from deleting records that have active child links. The parent's status is also correctly reverted when a child link is deleted.
  - Re-mapped the frontend \`handleDelete\` UI in all Admin Views to display the backend's dependency warning messages cleanly in an alert.
  - Implemented client-side input validation on \`ItemOutViewForm.js\`, \`ItemOutViewUpdate.js\`, and \`ItemReturnUpdateForm.js\`. The quantity typed by the user cannot exceed the dynamically allowed maximum (Stock, remaining required Quantity, or original QTY Out). If they type an excessive number, the box automatically clears itself.
  - Fixed confusing component titles (e.g. changing "MAKE NEW ITEM OUT" to "ITEM RETURN" on return forms).
  - Recovered from a patching error that mistakenly deleted the \`/purchaseOrder\` routes in the backend (which crashed the Daily Expenses module with a 404), restored the routes, pushed to Railway, and successfully built \`3.3.95\`.
`;

content = content.replace("## Recovery Points", newUpdates + "\n## Recovery Points");

fs.writeFileSync('SYSTEM_ARCHITECTURE_AND_PROGRESS.md', content);
console.log('Appended progress');
