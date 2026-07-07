const fs = require('fs');
const path = require('path');
const BSON = require('bson');

const dumpDir = 'E:\\Backup\\15MAY26\\dump\\globalgatedb';
const files = ['itemOut.bson','itemPurchase.bson','itemReturn.bson','PurchaseOrder.bson'];
const projectId = '69da6937ca7bb3cf0e8921a0';
const projectName = 'SINGLE ROOM CONSTRUCTION 8.80MX4.10M';

function readBson(file){
  const buf = fs.readFileSync(file);
  const docs = [];
  let offset = 0;
  while(offset + 4 <= buf.length){
    const size = buf.readInt32LE(offset);
    if (!size || offset + size > buf.length) break;
    const doc = BSON.deserialize(buf.slice(offset, offset+size));
    docs.push(doc);
    offset += size;
  }
  return docs;
}

function matches(doc){
  if (!doc || typeof doc !== 'object') return false;
  const s = JSON.stringify(doc);
  return s.includes(projectId) || s.includes(projectName);
}

for(const file of files){
  const full = path.join(dumpDir,file);
  if (!fs.existsSync(full)) continue;
  const docs = readBson(full);
  const matchesDocs = docs.filter(matches);
  console.log(file, 'matches', matchesDocs.length);
  if (matchesDocs.length > 0) {
    const outFile = path.resolve(__dirname,'..','backup_extracts',`scan_${path.basename(file,'.bson')}_project139.json`);
    fs.writeFileSync(outFile, JSON.stringify(matchesDocs, null, 2));
    console.log('wrote', outFile);
  }
}
