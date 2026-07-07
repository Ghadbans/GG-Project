const fs = require('fs');
const path = require('path');
const { MongoClient, ObjectId } = require('mongodb');
const BSON = require('bson');

const dumpDir = 'E:\\Backup\\15MAY26\\dump\\globalgatedb';
const liveDbName = 'globalgatedb';
const livePurchaseOrderId = '67618f58be9e77ca39e1d3fc';
const backupProjectId = '69da6937ca7bb3cf0e8921a0';
const projectName = 'SINGLE ROOM CONSTRUCTION 8.80MX4.10M';

const mongoUri = process.argv[2] || process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/globalgatedb';

function readBsonFile(filename) {
  const filePath = path.join(dumpDir, filename);
  if (!fs.existsSync(filePath)) throw new Error(`Missing file ${filePath}`);
  const buffer = fs.readFileSync(filePath);
  const docs = [];
  let offset = 0;
  while (offset + 4 <= buffer.length) {
    const size = buffer.readInt32LE(offset);
    if (!size || offset + size > buffer.length) break;
    const doc = BSON.deserialize(buffer.slice(offset, offset + size));
    docs.push(doc);
    offset += size;
  }
  return docs;
}

function isProjectRelated(doc) {
  if (!doc || typeof doc !== 'object') return false;
  if (doc.reference) {
    if (String(doc.reference._id) === backupProjectId) return true;
    if (String(doc.reference.referenceName) === projectName) return true;
  }
  if (doc.projectName) {
    if (String(doc.projectName._id) === backupProjectId) return true;
    if (String(doc.projectName.name) === projectName) return true;
    if (String(doc.projectName.projectName) === projectName) return true;
  }
  if (doc.referenceName && String(doc.referenceName) === projectName) return true;
  if (doc.POID && String(doc.POID) === backupProjectId) return true;
  return false;
}

function asObjectId(value) {
  if (value instanceof ObjectId) return value;
  if (typeof value === 'string' && /^[0-9a-fA-F]{24}$/.test(value)) return new ObjectId(value);
  return value;
}

function normalizeDoc(doc, collection) {
  const copy = JSON.parse(JSON.stringify(doc));
  if (copy._id) copy._id = asObjectId(copy._id);

  if (collection === 'itemOut' || collection === 'itemReturn') {
    if (copy.reference && String(copy.reference._id) === backupProjectId) {
      copy.reference._id = livePurchaseOrderId;
    }
    if (copy.reference) {
      copy.reference.referenceName = projectName;
    }
  }

  if (collection === 'itemPurchase') {
    if (copy.projectName) {
      if (String(copy.projectName._id) === backupProjectId || String(copy.projectName.name) === projectName || String(copy.projectName.projectName) === projectName) {
        copy.projectName._id = livePurchaseOrderId;
      }
      copy.projectName.name = projectName;
      if (copy.projectName.projectName) copy.projectName.projectName = projectName;
    }
    if (copy.POID) {
      copy.POID = livePurchaseOrderId;
    }
  }

  // maintain project link on any other relevant nested reference fields
  if (copy.IpRelated && String(copy.IpRelated.id) === backupProjectId) {
    copy.IpRelated.id = livePurchaseOrderId;
  }
  if (copy.purchaseOrder && String(copy.purchaseOrder._id) === backupProjectId) {
    copy.purchaseOrder._id = livePurchaseOrderId;
  }

  return copy;
}

function itemKey(item) {
  if (!item) return '__unknown';
  if (item.idRow) return `row:${item.idRow}`;
  if (item.itemName) {
    if (typeof item.itemName === 'string') return `name:${item.itemName}`;
    if (item.itemName._id) return `nameid:${item.itemName._id}`;
    if (item.itemName.itemName) return `name:${item.itemName.itemName}`;
  }
  return `desc:${item.itemDescription || item.description || ''}`;
}

function parseNumber(value) {
  if (value === undefined || value === null || value === '') return 0;
  if (typeof value === 'number') return value;
  const n = Number(value);
  return Number.isNaN(n) ? 0 : n;
}

function buildItemOutSummary(itemOutDocs, itemReturnDocs) {
  const map = new Map();
  const accumulate = (item, sign) => {
    const key = itemKey(item);
    const current = map.get(key) || { ...item, newItemOut: 0 };
    const amount = parseNumber(item.newItemOut);
    current.newItemOut = parseNumber(current.newItemOut) + sign * amount;
    if (!current.idRow && item.idRow) current.idRow = item.idRow;
    if (!current.itemName && item.itemName) current.itemName = item.itemName;
    if (!current.itemDescription && item.itemDescription) current.itemDescription = item.itemDescription;
    map.set(key, current);
  };

  for (const doc of itemOutDocs) {
    const items = Array.isArray(doc.itemsQtyArray) ? doc.itemsQtyArray : [];
    for (const item of items) accumulate(item, 1);
  }
  for (const doc of itemReturnDocs) {
    const items = Array.isArray(doc.itemsQtyArray) ? doc.itemsQtyArray : [];
    for (const item of items) accumulate(item, -1);
  }

  return Array.from(map.values()).filter(item => parseNumber(item.newItemOut) !== 0);
}

function buildItemPurchaseSummary(itemPurchaseDocs) {
  const map = new Map();
  for (const doc of itemPurchaseDocs) {
    const items = Array.isArray(doc.items) ? doc.items : [];
    for (const item of items) {
      const key = itemKey(item);
      const current = map.get(key) || { ...item, itemQty: 0 };
      current.itemQty = parseNumber(current.itemQty) + parseNumber(item.itemQty);
      if (!current.idRow && item.idRow) current.idRow = item.idRow;
      if (!current.itemName && item.itemName) current.itemName = item.itemName;
      if (!current.itemDescription && item.itemDescription) current.itemDescription = item.itemDescription;
      current.itemQty = current.itemQty;
      map.set(key, current);
    }
  }
  return Array.from(map.values()).map(item => {
    item.itemQty = String(item.itemQty);
    return item;
  });
}

async function main() {
  const itemOutDocs = readBsonFile('itemOut.bson').filter(isProjectRelated).map(d => normalizeDoc(d, 'itemOut'));
  const itemPurchaseDocs = readBsonFile('itemPurchase.bson').filter(isProjectRelated).map(d => normalizeDoc(d, 'itemPurchase'));
  const itemReturnDocs = readBsonFile('itemReturn.bson').filter(isProjectRelated).map(d => normalizeDoc(d, 'itemReturn'));

  console.log('Found project docs:', { itemOut: itemOutDocs.length, itemPurchase: itemPurchaseDocs.length, itemReturn: itemReturnDocs.length });

  const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  const db = client.db(liveDbName);

  const collections = [
    { name: 'itemOut', docs: itemOutDocs },
    { name: 'itemPurchase', docs: itemPurchaseDocs },
    { name: 'itemReturn', docs: itemReturnDocs }
  ];

  for (const coll of collections) {
    const collection = db.collection(coll.name);
    let upserted = 0;
    let updated = 0;
    for (const doc of coll.docs) {
      if (!doc._id) continue;
      const result = await collection.updateOne({ _id: doc._id }, { $set: doc }, { upsert: true });
      if (result.upsertedCount) upserted += 1;
      if (result.modifiedCount) updated += 1;
    }
    console.log(`${coll.name} upserted ${upserted}, updated ${updated}, total ${coll.docs.length}`);
  }

  const summaryOut = buildItemOutSummary(itemOutDocs, itemReturnDocs);
  const summaryPurchase = buildItemPurchaseSummary(itemPurchaseDocs);

  const orderColl = db.collection('PurchaseOrder');
  const purchaseFilter = { $or: [{ _id: asObjectId(livePurchaseOrderId) }, { _id: livePurchaseOrderId }, { outNumber: 139 }, { outNumber: '139' }] };
  const updateFields = {
    description: projectName,
    'reference._id': livePurchaseOrderId,
    'reference.referenceName': projectName,
    itemsQtyArray: summaryOut,
    items: summaryPurchase
  };

  const orderRes = await orderColl.updateOne(purchaseFilter, { $set: updateFields });
  console.log('PurchaseOrder update:', orderRes.matchedCount, 'matched,', orderRes.modifiedCount, 'modified');

  await client.close();
  console.log('Restoration complete. Only project 139 documents were touched.');
}

main().catch(err => {
  console.error('ERROR', err);
  process.exit(1);
});
