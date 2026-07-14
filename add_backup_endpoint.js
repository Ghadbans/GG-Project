const fs = require('fs');
let content = fs.readFileSync('server/routes/Routes.js', 'utf8');

const backupEndpoint = `
// ─── SECURE BACKUP EXPORT ENDPOINT ─────────────────────────────────────────
// Called by the daily laptop backup script. Returns all DB collections as JSON.
const BACKUP_SECRET = 'GG_BACKUP_2026_SECURE';
Route.get('/backup-export', async (req, res) => {
  try {
    const { secret } = req.query;
    if (secret !== BACKUP_SECRET) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    const mongoose = require('mongoose');
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    const backup = {};
    for (const col of collections) {
      const name = col.name;
      try {
        backup[name] = await db.collection(name).find({}).toArray();
      } catch(e) {
        backup[name] = { error: e.message };
      }
    }
    res.status(200).json({
      exportedAt: new Date().toISOString(),
      database: 'globalgatedb',
      totalCollections: collections.length,
      data: backup
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// ────────────────────────────────────────────────────────────────────────────
`;

// Insert before module.exports
content = content.replace('module.exports = Route;', backupEndpoint + '\nmodule.exports = Route;');
fs.writeFileSync('server/routes/Routes.js', content);
console.log('Backup endpoint added!');
