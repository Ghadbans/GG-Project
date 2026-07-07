const fs = require('fs');
const path = require('path');
const BSON = require('bson');

function readBsonFile(filePath) {
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

const dumpDir = process.argv[2] || 'E:\\Backup\\15MAY26\\dump\\globalgatedb';
const token = process.argv[3] || '3258';
const file = path.join(dumpDir, 'itemPurchase.bson');
if (!fs.existsSync(file)) {
  console.error('itemPurchase.bson not found at', file);
  process.exit(1);
}
const docs = readBsonFile(file);
const matches = [];
for (const d of docs) {
  try {
    if (JSON.stringify(d).includes(token)) matches.push(d);
  } catch (e) {}
}
console.log('Found', matches.length, 'matches for token', token);
if (matches.length) {
  const outDir = path.resolve(__dirname, '..', 'backup_extracts');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, `itemPurchase_token_${token}.json`), JSON.stringify(matches, null, 2));
  console.log('Wrote', path.join(outDir, `itemPurchase_token_${token}.json`));
}
