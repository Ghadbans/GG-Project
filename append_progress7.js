const fs = require('fs');
let content = fs.readFileSync('SYSTEM_ARCHITECTURE_AND_PROGRESS.md', 'utf8');

const newUpdates = `
- **v3.3.100 Concurrency Lock Lost Heartbeat Fix**:
  - Handled the edge case where User A loses Wi-Fi (causing their lock to expire), User B acquires the lock, saves the document, and releases the lock. When User A's Wi-Fi returns, the heartbeat previously ignored the \`404 Not Found\` response. It is now programmed to intercept \`404\`, alert the user that the lock expired, and force a \`window.location.reload()\` to automatically pull any changes User B may have made.
`;

content = content.replace("## Recovery Points", newUpdates + "\n## Recovery Points");

fs.writeFileSync('SYSTEM_ARCHITECTURE_AND_PROGRESS.md', content);
console.log('Appended progress');
