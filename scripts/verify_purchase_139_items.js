const doc = db.PurchaseOrder.findOne({ $or: [{ outNumber: 139 }, { outNumber: '139' }] }, { projection: { itemsQtyArray: 1, items: 1, reference: 1, description: 1 } });
if (!doc) {
  print('PurchaseOrder not found');
  quit(1);
}
print('Found PurchaseOrder _id=' + doc._id);
print('description=' + (doc.description === undefined ? 'undefined' : doc.description));
print('reference=' + JSON.stringify(doc.reference));
print('itemsQtyArray count=' + (Array.isArray(doc.itemsQtyArray) ? doc.itemsQtyArray.length : 0));
print('items count=' + (Array.isArray(doc.items) ? doc.items.length : 0));
if (Array.isArray(doc.itemsQtyArray)) {
  const first = doc.itemsQtyArray[0] || null;
  const second = doc.itemsQtyArray[1] || null;
  print('--- first itemQtyArray item ---');
  printjson(first);
  print('--- second itemQtyArray item ---');
  printjson(second);
}
if (Array.isArray(doc.items)) {
  print('--- first items item ---');
  printjson(doc.items[0] || null);
  print('--- second items item ---');
  printjson(doc.items[1] || null);
}
