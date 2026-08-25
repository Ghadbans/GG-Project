const fs = require('fs');
let content = fs.readFileSync('SYSTEM_ARCHITECTURE_AND_PROGRESS.md', 'utf8');

const newUpdates = `
- **v3.3.96 Item Out Quantity Validation Fix (Issue #13)**:
  - Discovered that the Item Out quantity validation patch applied in v3.3.95 had silently failed to inject into \`ItemOutViewForm.js\` and \`ItemOutViewUpdate.js\` due to a regex mismatch, causing the form to only check against \`Stock\` and ignore the required \`Quantity\`.
  - Forcefully rewrote the logic in both \`ItemOutView\` files so it correctly calculates \`maxAllowed = Math.min(Stock, Quantity - QTY Out)\`. Users are now strictly blocked from typing an amount greater than what is allowed by either constraint.
`;

content = content.replace("## Recovery Points", newUpdates + "\n## Recovery Points");

fs.writeFileSync('SYSTEM_ARCHITECTURE_AND_PROGRESS.md', content);
console.log('Appended progress');
