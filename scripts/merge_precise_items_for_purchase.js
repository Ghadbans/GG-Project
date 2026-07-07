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
  const fields = ['items', 'itemsQtyArray', 'itemsQty', 'item', 'itemList'];
  const found = [];
  for (const f of fields) if (Array.isArray(doc[f])) found.push(...doc[f]);
  for (const k of Object.keys(doc)) {
    if (!fields.includes(k) && Array.isArray(doc[k]) && doc[k].length && typeof doc[k][0] === 'object') found.push(...doc[k]);
  }
  return found;
}

function eq(a,b){
  if (a===undefined||b===undefined) return false;
  return String(a)===String(b);
}

async function main(){
  const dumpDir = process.argv[2] || 'E:\\Backup\\15MAY26\\dump\\globalgatedb';
  const extractDir = path.resolve(__dirname, '..', 'backup_extracts');
  if (!fs.existsSync(extractDir)) fs.mkdirSync(extractDir,{recursive:true});

  const purchaseMatchesFile = path.join(extractDir, 'PUR-000139_purchase_matches.json');
  if (!fs.existsSync(purchaseMatchesFile)) { console.error('Purchase matches missing'); process.exit(1); }
  const purchaseMatches = JSON.parse(fs.readFileSync(purchaseMatchesFile,'utf8'));
  const purchase = purchaseMatches[0];
  const purchaseId = String(purchase._id);
  const outNumber = purchase.outNumber;
  const ipRelated = purchase.IpRelated || {};
  const ipRelatedId = ipRelated.id ? String(ipRelated.id) : null;
  const ipRelatedNumber = ipRelated.number || null;

  const collFiles = {
    itemOut: path.join(dumpDir, 'itemOut.bson'),
    itemPurchase: path.join(dumpDir, 'itemPurchase.bson'),
    itemReturn: path.join(dumpDir, 'itemReturn.bson'),
  };

  const foundItems=[]; const seen=new Set(); const related={};

  // itemOut: match exact outNumber or purchase id refs
  {
    const docs = readBsonFile(collFiles.itemOut);
    for (const doc of docs){
      const isMatch = eq(doc.outNumber, outNumber) || (doc.purchaseOrder && (eq(doc.purchaseOrder._id,purchaseId)||eq(doc.purchaseOrder.id,purchaseId))) || (doc.poRelated && (eq(doc.poRelated.id,purchaseId)||eq(doc.poRelated.number,outNumber))) || (doc.IpRelated && eq(doc.IpRelated.id,purchaseId));
      if (!isMatch) continue;
      related.itemOut = related.itemOut||[]; related.itemOut.push(doc);
      const items = extractItemsFromDoc(doc);
      for (const it of items){
        const key = it.idRow?`idRow:${it.idRow}`:(it.itemName&& (it.itemName._id||it.itemName.itemName))?`name:${it.itemName._id||it.itemName.itemName}`:JSON.stringify(it);
        if (!seen.has(key)){ seen.add(key); foundItems.push(it); }
      }
    }
  }

  // itemPurchase: match by ipRelatedId or number
  {
    const docs = readBsonFile(collFiles.itemPurchase);
    for (const doc of docs){
      const isMatch = (ipRelatedId && eq(doc._id,ipRelatedId)) || (ipRelatedNumber && eq(doc.itemPurchaseNumber, ipRelatedNumber)) || (doc.IpRelated && (eq(doc.IpRelated.id,purchaseId)||eq(doc.IpRelated.number,outNumber))) || (doc.projectName && (doc.projectName._id && eq(doc.projectName._id, purchase.projectId)));
      if (!isMatch) continue;
      related.itemPurchase = related.itemPurchase||[]; related.itemPurchase.push(doc);
      const items = extractItemsFromDoc(doc);
      for (const it of items){
        const key = it.idRow?`idRow:${it.idRow}`:(it.itemName&& (it.itemName._id||it.itemName.itemName))?`name:${it.itemName._id||it.itemName.itemName}`:JSON.stringify(it);
        if (!seen.has(key)){ seen.add(key); foundItems.push(it); }
      }
    }
  }

  // itemReturn: match by outNumber or purchase id
  {
    const docs = readBsonFile(collFiles.itemReturn);
    for (const doc of docs){
      const isMatch = eq(doc.outNumber, outNumber) || (doc.purchaseOrder && (eq(doc.purchaseOrder._id,purchaseId)||eq(doc.purchaseOrder.id,purchaseId))) || (doc.poRelated && (eq(doc.poRelated.id,purchaseId)||eq(doc.poRelated.number,outNumber))) || (doc.IpRelated && eq(doc.IpRelated.id,purchaseId));
      if (!isMatch) continue;
      related.itemReturn = related.itemReturn||[]; related.itemReturn.push(doc);
      const items = extractItemsFromDoc(doc);
      for (const it of items){
        const key = it.idRow?`idRow:${it.idRow}`:(it.itemName&& (it.itemName._id||it.itemName.itemName))?`name:${it.itemName._id||it.itemName.itemName}`:JSON.stringify(it);
        if (!seen.has(key)){ seen.add(key); foundItems.push(it); }
      }
    }
  }

  const outMaster = path.join(extractDir,'PUR-000139_master_items_precise.json');
  fs.writeFileSync(outMaster, JSON.stringify(foundItems, null, 2));
  const relatedFile = path.join(extractDir,'PUR-000139_related_precise.json');
  fs.writeFileSync(relatedFile, JSON.stringify(related, null, 2));

  console.log('Precise master items count:', foundItems.length);
  console.log('Wrote', outMaster);
  console.log('Wrote related docs to', relatedFile);
}

main().catch(err=>{console.error(err);process.exit(1);});
