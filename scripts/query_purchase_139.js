printjson(db.getCollectionNames());
print('---');
printjson(db.PurchaseOrder.find({$or:[{outNumber:139},{outNumber:'139'}]}).limit(20).toArray());
