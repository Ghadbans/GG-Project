const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

async function main(){
  let mongoUri = process.env.MONGO_URI;
  // allow passing the URI as first CLI arg for convenience
  if (!mongoUri && process.argv[2]) mongoUri = process.argv[2];
  if (!mongoUri) { console.error('Set MONGO_URI env var or pass it as first arg (e.g. node script.js <MONGO_URI>)'); process.exit(1); }
  const dbName = process.env.MONGO_DB || 'globalgatedb';
  const extractDir = path.resolve(__dirname,'..','backup_extracts');
  const masterFile = path.join(extractDir,'PUR-000139_master_items_precise.json');
  const purchaseMatchesFile = path.join(extractDir,'PUR-000139_purchase_matches.json');
  if (!fs.existsSync(masterFile)) { console.error('Master items file missing:', masterFile); process.exit(1); }
  if (!fs.existsSync(purchaseMatchesFile)) { console.error('Purchase matches file missing:', purchaseMatchesFile); process.exit(1); }
  const master = JSON.parse(fs.readFileSync(masterFile,'utf8'));
  const purchaseMatches = JSON.parse(fs.readFileSync(purchaseMatchesFile,'utf8'));
  if (!purchaseMatches.length) { console.error('No purchase match'); process.exit(1); }
  const purchase = purchaseMatches[0];
  const filters = [];
  if (purchase._id) {
    try {
      const { ObjectId } = require('mongodb');
      filters.push({ _id: new ObjectId(purchase._id) });
    } catch {
      filters.push({ _id: purchase._id });
    }
  }
  if (purchase.outNumber !== undefined) {
    filters.push({ outNumber: purchase.outNumber });
    filters.push({ outNumber: String(purchase.outNumber) });
  }
  const filter = filters.length > 1 ? { $or: filters } : filters[0] || {};

  const client = new MongoClient(mongoUri, { useNewUrlParser:true, useUnifiedTopology:true });
  await client.connect();
  const db = client.db(dbName);
  const coll = db.collection('PurchaseOrder');
  const res = await coll.updateOne(filter, { $set: { items: master, itemsQtyArray: master } });
  console.log('Update result:', res.result || res);
  await client.close();
}

main().catch(err=>{console.error('Error:',err);process.exit(1);});
