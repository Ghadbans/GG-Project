const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

async function main() {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    console.error('Missing MONGO_URI environment variable. Set MONGO_URI to your live DB connection string.');
    process.exit(1);
  }
  const dbName = process.env.MONGO_DB || 'globalgatedb';
  const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

  const extractDir = path.resolve(__dirname, '..', 'backup_extracts');
  const purchaseFile = path.join(extractDir, 'PUR-000139_purchase_matches.json');
  const itemPurchaseFile = path.join(extractDir, 'IP-3258_itempurchase_matches.json');

  if (!fs.existsSync(purchaseFile) && !fs.existsSync(itemPurchaseFile)) {
    console.error('No backup extract files found. Run extract_backup_records.js first.');
    process.exit(1);
  }

  await client.connect();
  const db = client.db(dbName);

  // Update PurchaseOrder
  if (fs.existsSync(purchaseFile)) {
    const poMatches = JSON.parse(fs.readFileSync(purchaseFile, 'utf8'));
    for (const doc of poMatches) {
      const filter = {};
      if (doc.outNumber !== undefined) filter.outNumber = doc.outNumber;
      else if (doc._id) filter._id = doc._id;
      else continue;
      const items = doc.items || [];
      const res = await db.collection('PurchaseOrder').updateOne(filter, { $set: { items } });
      console.log('PurchaseOrder update filter:', filter, 'matchedCount:', res.matchedCount, 'modifiedCount:', res.modifiedCount);
    }
  }

  // Update itemPurchase
  if (fs.existsSync(itemPurchaseFile)) {
    const ipMatches = JSON.parse(fs.readFileSync(itemPurchaseFile, 'utf8'));
    for (const doc of ipMatches) {
      const filter = {};
      if (doc.itemPurchaseNumber !== undefined) filter.itemPurchaseNumber = doc.itemPurchaseNumber;
      else if (doc._id) filter._id = doc._id;
      else continue;
      const items = doc.items || [];
      const res = await db.collection('itemPurchase').updateOne(filter, { $set: { items } });
      console.log('itemPurchase update filter:', filter, 'matchedCount:', res.matchedCount, 'modifiedCount:', res.modifiedCount);
    }
  }

  await client.close();
  console.log('Repair script finished. Verify in the live DB.');
}

main().catch(err => {
  console.error('Repair script error:', err);
  process.exit(1);
});
