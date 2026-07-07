const fs = require('fs');
const path = require('path');
const BSON = require('bson');

function readBsonFile(filePath) {
  if (!fs.existsSync(filePath)) throw new Error(`File not found: ${filePath}`);
  const buf = fs.readFileSync(filePath);
  const docs = [];
  let offset = 0;
  while (offset + 4 <= buf.length) {
    const size = buf.readInt32LE(offset);
    if (!size || offset + size > buf.length) break;
    const docBuf = buf.slice(offset, offset + size);
    const doc = BSON.deserialize(docBuf);
    docs.push(doc);
    offset += size;
  }
  return docs;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function main() {
  const dumpDirArg = process.argv[2];
  const dumpDir = dumpDirArg || 'E:\\Backup\\15MAY26\\dump\\globalgatedb';
  const outDir = path.resolve(__dirname, '..', 'backup_extracts');
  ensureDir(outDir);

  const filesToCheck = {
    purchaseOrder: path.join(dumpDir, 'PurchaseOrder.bson'),
    itemPurchase: path.join(dumpDir, 'itemPurchase.bson'),
    itemOut: path.join(dumpDir, 'itemOut.bson'),
    itemReturn: path.join(dumpDir, 'itemReturn.bson'),
  };

  const results = {};

  // Extract PurchaseOrder with outNumber 139 (PUR-000139)
  try {
    const poDocs = readBsonFile(filesToCheck.purchaseOrder);
    const poMatches = poDocs.filter(d => d && (d.outNumber === 139 || d.outNumber === '139' || d.outNumber === 'PUR-000139' || String(d.outNumber).includes('139')));
    results.purchaseOrder = poMatches;
    fs.writeFileSync(path.join(outDir, 'PUR-000139_purchase_matches.json'), JSON.stringify(poMatches, null, 2));
  } catch (err) {
    console.error('PurchaseOrder read error:', err.message);
  }

  // Extract itemPurchase with itemPurchaseNumber 3258 (IP-3258)
  try {
    const ipDocs = readBsonFile(filesToCheck.itemPurchase);
    const ipMatches = ipDocs.filter(d => d && (d.itemPurchaseNumber === 3258 || d.itemPurchaseNumber === '3258'));
    results.itemPurchase = ipMatches;
    fs.writeFileSync(path.join(outDir, 'IP-3258_itempurchase_matches.json'), JSON.stringify(ipMatches, null, 2));
  } catch (err) {
    console.error('itemPurchase read error:', err.message);
  }

  // Search related collections for references to PUR-000139
  const related = [];
  const searchToken = 'PUR-000139';
  const numericToken = 139;
  for (const coll of ['itemOut', 'itemReturn', 'itemPurchase', 'item']) {
    const file = path.join(dumpDir, `${coll}.bson`);
    if (!fs.existsSync(file)) continue;
    try {
      const docs = readBsonFile(file);
      for (const d of docs) {
        try {
          const s = JSON.stringify(d);
          if (s.includes(searchToken) || s.includes(String(numericToken))) {
            related.push({ collection: coll, doc: d });
          }
        } catch (_) {}
      }
    } catch (err) {
      console.error(`Error reading ${coll}:`, err.message);
    }
  }
  fs.writeFileSync(path.join(outDir, 'PUR-000139_related_records.json'), JSON.stringify(related, null, 2));
  results.related = related;

  // Print items arrays for the primary matches
  console.log('--- PurchaseOrder matches (items arrays) ---');
  if (results.purchaseOrder && results.purchaseOrder.length) {
    results.purchaseOrder.forEach((doc, idx) => {
      console.log(JSON.stringify({ matchIndex: idx, _id: doc._id, outNumber: doc.outNumber, items: doc.items || [] }, null, 2));
    });
  } else console.log('No PurchaseOrder match found for PUR-000139');

  console.log('\n--- itemPurchase matches (items arrays) ---');
  if (results.itemPurchase && results.itemPurchase.length) {
    results.itemPurchase.forEach((doc, idx) => {
      console.log(JSON.stringify({ matchIndex: idx, _id: doc._id, itemPurchaseNumber: doc.itemPurchaseNumber, items: doc.items || [] }, null, 2));
    });
  } else console.log('No itemPurchase match found for IP-3258');

  console.log('\nOutputs written to:', outDir);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
