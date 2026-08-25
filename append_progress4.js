const fs = require('fs');
let content = fs.readFileSync('SYSTEM_ARCHITECTURE_AND_PROGRESS.md', 'utf8');

const newUpdates = `
- **v3.3.98 Backend Performance Optimization (Issue #15)**:
  - Fixed a massive 15-20 second Time-To-First-Byte (TTFB) bottleneck that was freezing the Node.js event loop on the Railway server.
  - Injected the Mongoose \`.lean()\` optimization into all \`.find()\` queries across 14 backend route files (e.g. \`purchaseRoutes\`, \`invoiceRoutes\`, \`maintenanceRoutes\`). This instructs Mongoose to return raw JSON instead of heavy Mongoose Documents, dramatically reducing RAM usage and CPU serialization time for large payloads like \`?summary=true\`.
`;

content = content.replace("## Recovery Points", newUpdates + "\n## Recovery Points");

fs.writeFileSync('SYSTEM_ARCHITECTURE_AND_PROGRESS.md', content);
console.log('Appended progress');
