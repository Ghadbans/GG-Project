const fs = require('fs');
const text = `
## v3.4.12 - Strict Grant Access Enforcement & Supplier Fix
- **Strict Grant Access Enforcement**: Revoked the hardcoded \`CEO\` role bypass across all module sidebars (\`SidebarDash\`, \`SideMaintenance\`, \`SideShop\`, etc.). From now on, *every single user and role* (including CEO and Admin) must explicitly be granted permission via the Grant Access interface. The only account with an absolute system bypass is the creator account (\`userName === 'GG'\`).
- **Supplier Menu Permissions Fix**: Fixed a bug where the \`Supplier\` module in the \`STORE\` sidebar was erroneously tied to the \`Item\` Grant Access rule. It now correctly enforces the \`Supplier\` rule (\`SupplierInfo\`).
`;
fs.appendFileSync('SYSTEM_ARCHITECTURE_AND_PROGRESS.md', text);
