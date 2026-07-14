const fs = require('fs');
let content = fs.readFileSync('server/routes/Routes.js', 'utf8');

// Fix the backup endpoint - replace the inner require with top-level mongoose
const oldEndpoint = `// ─── SECURE BACKUP EXPORT ENDPOINT ─────────────────────────────────────────
// Called by the daily laptop backup script. Returns all DB collections as JSON.
const BACKUP_SECRET = 'GG_BACKUP_2026_SECURE';
Route.get('/backup-export', async (req, res) => {
  try {
    const { secret } = req.query;
    if (secret !== BACKUP_SECRET) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    const mongoose = require('mongoose');
    const db = mongoose.connection.db;`;

const newEndpoint = `// ─── SECURE BACKUP EXPORT ENDPOINT ─────────────────────────────────────────
// Called by the daily laptop backup script. Returns all DB collections as JSON.
const BACKUP_SECRET = 'GG_BACKUP_2026_SECURE';
const mongoose_backup = require('mongoose');
Route.get('/backup-export', async (req, res) => {
  try {
    const { secret } = req.query;
    if (secret !== BACKUP_SECRET) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    const db = mongoose_backup.connection.db;`;

if (content.includes(oldEndpoint)) {
  content = content.replace(oldEndpoint, newEndpoint);
  fs.writeFileSync('server/routes/Routes.js', content);
  console.log('Fixed!');
} else {
  console.log('Pattern not found - checking...');
  const idx = content.indexOf('backup-export');
  console.log(content.substring(idx - 10, idx + 300));
}
