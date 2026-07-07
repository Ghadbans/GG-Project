printjson(db.itemPurchase.find({$or:[{itemPurchaseNumber:3258},{itemPurchaseNumber:'3258'}]}).limit(20).toArray());
