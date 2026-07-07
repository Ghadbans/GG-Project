const doc = db.PurchaseOrder.findOne({ _id: ObjectId('67618f58be9e77ca39e1d3fc') });
if (!doc) {
  print('not found');
  quit(1);
}
print('keys: ' + Object.keys(doc).join(', '));
printjson(doc);
