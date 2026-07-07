const doc = db.PurchaseOrder.findOne({ _id: ObjectId('67618f58be9e77ca39e1d3fc') });
if (!doc) { print('not found'); quit(1); }
print('itemsQtyArray length=' + (Array.isArray(doc.itemsQtyArray) ? doc.itemsQtyArray.length : 0));
print('items length=' + (Array.isArray(doc.items) ? doc.items.length : 0));
const firstQty = Array.isArray(doc.itemsQtyArray) ? doc.itemsQtyArray[0] : null;
const secondQty = Array.isArray(doc.itemsQtyArray) ? doc.itemsQtyArray[1] : null;
const firstItems = Array.isArray(doc.items) ? doc.items[0] : null;
const secondItems = Array.isArray(doc.items) ? doc.items[1] : null;
print('first itemQty item: ' + JSON.stringify(firstQty));
print('second itemQty item: ' + JSON.stringify(secondQty));
print('first item item: ' + JSON.stringify(firstItems));
print('second item item: ' + JSON.stringify(secondItems));
function typeOfField(field){ if (field === null || field === undefined) return String(field); return field.constructor && field.constructor.name ? field.constructor.name : typeof field; }
print('first itemQty.itemName._id type=' + typeOfField(firstQty && firstQty.itemName && firstQty.itemName._id));
print('second itemQty.itemName._id type=' + typeOfField(secondQty && secondQty.itemName && secondQty.itemName._id));
print('first item.itemName._id type=' + typeOfField(firstItems && firstItems.itemName && firstItems.itemName._id));
print('second item.itemName._id type=' + typeOfField(secondItems && secondItems.itemName && secondItems.itemName._id));
