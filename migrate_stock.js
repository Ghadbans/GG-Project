const mongoose = require('mongoose');
const itemSchema = require('./model/itemSchema');
const itemPurchaseSchema = require('./model/itemPurchaseSchema');
const itemReturnSchema = require('./model/itemReturnSchema');
const purchaseSchema = require('./model/purchaseSchema');
const invoiceSchema = require('./model/invoiceSchema');
const posSchema = require('./model/posSchema');
const itemOutSchema = require('./model/itemOutSchema');
const maintenanceSchema = require('./model/maintenanceSchema');

async function migrateStock() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect('mongodb://127.0.0.1:27017/globalgatedb');
    console.log('Connected.');

    const stockMap = {};

    console.log('Fetching all LIVE items to ensure every item is processed and grab intact stockOnHand...');
    const liveItems = await itemSchema.find({}).lean();
    for (const item of liveItems) {
      stockMap[item._id.toString()] = parseFloat(item.stockOnHand || 0);
    }

    console.log('Fetching all items from item_backup to get original itemQuantity...');
    const itemBackupDb = mongoose.connection.collection('item_backup');
    const allBackupItems = await itemBackupDb.find({}).toArray();
    for (const item of allBackupItems) {
      const q1 = parseFloat(item.itemQuantity || 0);
      if (stockMap[item._id.toString()] !== undefined) {
        stockMap[item._id.toString()] += q1;
      } else {
        stockMap[item._id.toString()] = q1 + parseFloat(item.stockOnHand || 0);
      }
    }

    function isValidId(id) {
      return id && /^[0-9a-fA-F]{24}$/.test(id.toString());
    }

    function addStock(itemId, qty) {
      if (!isValidId(itemId)) return;
      const id = itemId.toString();
      if (!stockMap[id]) stockMap[id] = 0;
      stockMap[id] += parseFloat(qty || 0);
    }

    function deductStock(itemId, qty) {
      if (!isValidId(itemId)) return;
      const id = itemId.toString();
      if (!stockMap[id]) stockMap[id] = 0;
      stockMap[id] -= parseFloat(qty || 0);
    }

    console.log('Tallying Item Purchases (Increases)...');
    const itemPurchases = await itemPurchaseSchema.find({}).lean();
    for (const doc of itemPurchases) {
      for (const item of (doc.items || [])) {
        if (item.itemName && item.itemName._id) addStock(item.itemName._id, item.itemQty);
      }
    }

    console.log('Tallying Item Returns (Increases)...');
    const itemReturns = await itemReturnSchema.find({}).lean();
    for (const doc of itemReturns) {
      for (const item of (doc.itemsQtyArray || [])) {
        if (item.itemName && item.itemName._id) addStock(item.itemName._id, item.newItemOut);
      }
    }

    console.log('Tallying POS (Decreases)...');
    const poss = await posSchema.find({}).lean();
    for (const doc of poss) {
      for (const item of (doc.items || [])) {
        if (item.itemName && item.itemName._id) deductStock(item.itemName._id, item.itemQty);
      }
    }

    console.log('Tallying Item Outs (Decreases)...');
    const itemOuts = await itemOutSchema.find({}).lean();
    for (const doc of itemOuts) {
      for (const item of (doc.itemsQtyArray || [])) {
        if (item.itemName && item.itemName._id) deductStock(item.itemName._id, item.itemOut);
      }
    }

    console.log('Applying calculated stock to the Item collection...');
    const itemIds = Object.keys(stockMap);
    console.log(`Found ${itemIds.length} items with stock changes to apply.`);
    let updatedCount = 0;

    for (const id of itemIds) {
      const finalQty = stockMap[id];
      const result = await itemSchema.updateOne({ _id: id }, { $set: { itemQuantity: finalQty } });
      if (result.modifiedCount > 0) updatedCount++;
    }

    console.log(`Migration Complete! Updated stock for ${updatedCount} items.`);

  } catch (error) {
    console.error('Migration failed:', error);
  } finally {
    mongoose.disconnect();
  }
}

migrateStock();
