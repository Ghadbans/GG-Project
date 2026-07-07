const mongoose = require('mongoose');

const extractItemIds = (doc) => {
  if (!doc) return null;
  const ids = new Set();
  let foundKnownArray = false;

  if (Array.isArray(doc.items)) {
    foundKnownArray = true;
    doc.items.forEach(entry => {
      if (entry && entry.itemName) {
        if (entry.itemName._id) ids.add(entry.itemName._id.toString());
        else if (typeof entry.itemName === 'string' || mongoose.Types.ObjectId.isValid(entry.itemName)) ids.add(entry.itemName.toString());
      }
    });
  }

  if (Array.isArray(doc.itemsQtyArray)) {
    foundKnownArray = true;
    doc.itemsQtyArray.forEach(entry => {
      if (entry && entry.itemName) {
        if (entry.itemName._id) ids.add(entry.itemName._id.toString());
        else if (typeof entry.itemName === 'string' || mongoose.Types.ObjectId.isValid(entry.itemName)) ids.add(entry.itemName.toString());
      }
    });
  }

  if (doc.itemId) {
    foundKnownArray = true;
    if (doc.itemId._id) ids.add(doc.itemId._id.toString());
    else if (typeof doc.itemId === 'string' || mongoose.Types.ObjectId.isValid(doc.itemId)) ids.add(doc.itemId.toString());
  }
  if (doc.toItemId) {
    foundKnownArray = true;
    if (doc.toItemId._id) ids.add(doc.toItemId._id.toString());
    else if (typeof doc.toItemId === 'string' || mongoose.Types.ObjectId.isValid(doc.toItemId)) ids.add(doc.toItemId.toString());
  }

  if (foundKnownArray) {
    return Array.from(ids);
  }

  return null;
};

const calculateQuantity = async (branchId = null, specificItemIds = null) => {
  try {
    const itemSchema = require('./itemSchema');
    const itemPurchaseSchema = require('./itemPurchaseSchema');
    const itemOutSchema = require('./itemOutSchema');
    const itemReturnSchema = require('./itemReturnSchema');
    const posSchema = require('./posSchema');
    const itemTransferHistorySchema = require('./itemTransferHistorySchema');

    const query = branchId && branchId !== 'ALL' ? { branchId } : {};

    const itemQuery = { ...query };
    
    let objectIdArray = [];
    let inClause = null;

    if (specificItemIds !== null) {
      if (specificItemIds.length === 0) {
        console.log('[SYS] calculateQuantity hook skipped - no items involved');
        return;
      }
      objectIdArray = specificItemIds.filter(id => mongoose.Types.ObjectId.isValid(id)).map(id => new mongoose.Types.ObjectId(id));
      inClause = { $in: objectIdArray };
      itemQuery._id = inClause;
    }

    const items = await itemSchema.find(itemQuery);
    if (!items || items.length === 0) return;

    const itemQuantities = {};
    const itemUpcMap = {}; 
    
    items.forEach(item => {
      const id = item._id.toString();
      itemQuantities[id] = {
        purchase: 0,
        out: 0,
        posOut: 0,
        returned: 0,
        transferOut: 0,
        transferIn: 0
      };
      if (item.itemUpc && item.itemUpc.newCode && item.itemUpc.itemNumber) {
        const upcKey = item.itemUpc.newCode + '-' + item.itemUpc.itemNumber + '-' + (item.branchId || 'HQ');
        itemUpcMap[upcKey] = id;
      }
    });

    const purchaseQuery = { ...query };
    const outQuery = { ...query };
    const returnQuery = { ...query };
    const posQuery = { ...query };
    const transferQuery = { ...query };

    // We removed the fragile $in clause here. Mongoose Mixed arrays with both Strings and ObjectIds
    // cause $in queries to fail matching, which falsely returns 0 transactions and sets stock to 0.
    // Instead, we fetch the branch transactions and rely on the bulletproof .toString() comparison below.

    const [purchase, outs, iReturn, posOutInfo, transfers] = await Promise.all([
      itemPurchaseSchema.find(purchaseQuery),
      itemOutSchema.find(outQuery),
      itemReturnSchema.find(returnQuery),
      posSchema.find(posQuery),
      itemTransferHistorySchema.find(transferQuery)
    ]);

    purchase.forEach(transactions => {
      if (!transactions.items) return;
      transactions.items.forEach(entry => {
        const itemId = entry.itemName && entry.itemName._id ? entry.itemName._id.toString() : (entry.itemName ? entry.itemName.toString() : null);
        if (itemId && itemQuantities[itemId]) {
          itemQuantities[itemId].purchase += parseFloat(entry.itemQty) || 0;
        }
      });
    });

    outs.forEach(transactions => {
      if (!transactions.itemsQtyArray) return;
      transactions.itemsQtyArray.forEach(entry => {
        const itemId = entry.itemName && entry.itemName._id ? entry.itemName._id.toString() : (entry.itemName ? entry.itemName.toString() : null);
        if (itemId && itemQuantities[itemId]) {
          itemQuantities[itemId].out += parseFloat(entry.newItemOut) || 0;
        }
      });
    });

    iReturn.forEach(transactions => {
      if (!transactions.itemsQtyArray) return;
      transactions.itemsQtyArray.forEach(entry => {
        const itemId = entry.itemName && entry.itemName._id ? entry.itemName._id.toString() : (entry.itemName ? entry.itemName.toString() : null);
        if (itemId && itemQuantities[itemId]) {
          itemQuantities[itemId].returned += parseFloat(entry.newItemOut) || 0;
        }
      });
    });

    posOutInfo.forEach(transactions => {
      if (!transactions.items) return;
      transactions.items.forEach(entry => {
        const itemId = entry.itemName && entry.itemName._id ? entry.itemName._id.toString() : (entry.itemName ? entry.itemName.toString() : null);
        if (itemId && itemQuantities[itemId]) {
          itemQuantities[itemId].posOut += parseFloat(entry.itemQty) || 0;
        }
      });
    });

    transfers.forEach(transfer => {
      const originItemId = transfer.itemId ? transfer.itemId.toString() : null;
      const qty = parseFloat(transfer.quantity) || 0;
      
      if (originItemId && itemQuantities[originItemId]) {
         itemQuantities[originItemId].transferOut += qty;
      }
      
      if (transfer.toItemId && itemQuantities[transfer.toItemId.toString()]) {
          itemQuantities[transfer.toItemId.toString()].transferIn += qty;
      }
    });

    const bulkOperations = [];
    Object.entries(itemQuantities).forEach(([itemId, q]) => {
      const totalOut = q.posOut + q.out + q.transferOut;
      const totalIn = q.purchase + q.returned + q.transferIn;
      
      const itemQuantity = Math.round((totalIn - totalOut) * 100) / 100;
      
      bulkOperations.push({
        updateOne: {
          filter: { _id: new mongoose.Types.ObjectId(itemId) },
          update: { $set: { itemQuantity } }
        }
      });
    });

    if (bulkOperations.length > 0) {
      await itemSchema.bulkWrite(bulkOperations);
    }
    console.log('[SYS] calculateQuantity hook completed - stock synced for', bulkOperations.length, 'items');
  } catch (error) {
    console.log('[SYS] calculateQuantity error:', error);
  }
};

const attachStockHooks = (schema) => {
  const trigger = function(doc) {
    if (!doc) return; // Skip if no document was found/modified (e.g., bad ID in findOneAndUpdate)
    
    const branchId = doc && doc.branchId ? doc.branchId : null;
    let itemIds = extractItemIds(doc) || [];
    
    if (this && typeof this.getUpdate === 'function') {
      const updatePayload = this.getUpdate();
      if (updatePayload) {
        const payloadToParse = updatePayload.$set || updatePayload;
        const newIds = extractItemIds(payloadToParse) || [];
        itemIds = [...new Set([...itemIds, ...newIds])];
      }
    }

    calculateQuantity(branchId, itemIds).catch(console.error);
  };
  
  schema.post('save', trigger);
  schema.post('findOneAndUpdate', trigger);
  schema.post('findOneAndDelete', trigger);
  schema.post('findOneAndRemove', trigger);
  schema.post('findByIdAndDelete', trigger);
  schema.post('findByIdAndRemove', trigger);
};

module.exports = { calculateQuantity, attachStockHooks, extractItemIds };
