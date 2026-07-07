const fs = require('fs');
const path = require('path');
const BSON = require('bson');

function readBsonFile(filePath) {
  if (!fs.existsSync(filePath)) return [];
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

function extractItemsFromDoc(doc) {
  const candidates = [];
  if (!doc || typeof doc !== 'object') return candidates;
  const fields = ['items', 'itemsQtyArray', 'itemsQty', 'item', 'itemList'];
  for (const f of fields) {
    if (Array.isArray(doc[f])) candidates.push(...doc[f]);
  }
  // also scan top-level array-valued props
  for (const k of Object.keys(doc)) {
    if (Array.isArray(doc[k]) && doc[k].length && typeof doc[k][0] === 'object') {
      // avoid duplicates of fields already captured
      if (!fields.includes(k)) candidates.push(...doc[k]);
    }
  }
  return candidates;
}

function matchesToken(doc, tokens, purchaseId) {
  try {
    const s = JSON.stringify(doc);
    for (const t of tokens) if (t && s.includes(t)) return true;
  } catch (e) {}
  // also check nested structured references
  try {
    if (doc.IpRelated && (doc.IpRelated.id === purchaseId || String(doc.IpRelated.number) === String(tokens[1]))) return true;
    if (doc.purchaseOrder && (doc.purchaseOrder._id === purchaseId || doc.purchaseOrder.outNumber === tokens[1])) return true;
    if (doc.poRelated && (doc.poRelated.id === purchaseId || doc.poRelated.number === tokens[1])) return true;
  } catch (e) {}
  return false;
}

async function main() {
  const dumpDir = process.argv[2] || 'E:\\Backup\\15MAY26\\dump\\globalgatedb';
  const extractDir = path.resolve(__dirname, '..', 'backup_extracts');
  if (!fs.existsSync(extractDir)) fs.mkdirSync(extractDir, { recursive: true });

  const purchaseMatchesFile = path.join(extractDir, 'PUR-000139_purchase_matches.json');
  if (!fs.existsSync(purchaseMatchesFile)) {
    console.error('Purchase matches JSON not found. Run extract_backup_records.js first.');
    process.exit(1);
  }
  const purchaseMatches = JSON.parse(fs.readFileSync(purchaseMatchesFile, 'utf8'));
  if (!purchaseMatches.length) {
    console.error('No purchase matches available in', purchaseMatchesFile);
    process.exit(1);
  }
  const purchase = purchaseMatches[0];
  const purchaseId = String(purchase._id);
  const outNumber = purchase.outNumber;
  const tokens = [purchaseId, String(outNumber), 'PUR-000139'];

  const collFiles = {
    itemOut: path.join(dumpDir, 'itemOut.bson'),
    itemPurchase: path.join(dumpDir, 'itemPurchase.bson'),
    itemReturn: path.join(dumpDir, 'itemReturn.bson'),
  };

  const foundItems = [];
  const seen = new Set();
  const relatedDocs = {};

  for (const [coll, file] of Object.entries(collFiles)) {
    const docs = readBsonFile(file);
    for (const doc of docs) {
      if (!doc) continue;
      if (!matchesToken(doc, tokens, purchaseId)) continue;
      // collect items
      const items = extractItemsFromDoc(doc);
      if (items && items.length) {
        for (const it of items) {
          // generate key for dedupe
          let key = null;
          if (it.idRow) key = `idRow:${it.idRow}`;
          else if (it.itemName && (it.itemName._id || it.itemName.itemName)) key = `nameid:${it.itemName._id||it.itemName.itemName}`;
          else if (it._id) key = `itemid:${it._id}`;
          else key = JSON.stringify(it);
          if (!seen.has(key)) {
            seen.add(key);
            foundItems.push(it);
          }
        }
      }
      // also save doc for trace
      if (!relatedDocs[coll]) relatedDocs[coll]=[];
      relatedDocs[coll].push(doc);
    }
  }

  const outMaster = path.join(extractDir, 'PUR-000139_master_items.json');
  fs.writeFileSync(outMaster, JSON.stringify(foundItems, null, 2));
  const relatedFile = path.join(extractDir, 'PUR-000139_trace_related_docs.json');
  fs.writeFileSync(relatedFile, JSON.stringify(relatedDocs, null, 2));

  console.log('Master items count:', foundItems.length);
  console.log(JSON.stringify(foundItems, null, 2));
  console.log('Wrote master list to', outMaster);
  console.log('Wrote related docs to', relatedFile);
}

main().catch(err=>{console.error(err);process.exit(1);});
