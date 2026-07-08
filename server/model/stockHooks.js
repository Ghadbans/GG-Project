const mongoose = require('mongoose');

/**
 * Attaches stock sync hooks to a Mongoose schema.
 * @param {mongoose.Schema} schema - The Mongoose schema to attach hooks to.
 * @param {string} arrayField - The name of the array containing items (e.g., 'items' or 'itemsQtyArray').
 * @param {string} qtyField - The name of the field storing the quantity (e.g., 'itemQty' or 'newItemOut').
 * @param {number} multiplier - 1 for additions to stock (e.g. Purchases, Returns), -1 for deductions (e.g. Invoices, POS).
 */
function attachStockHooks(schema, arrayField, qtyField, multiplier) {
  
  // Create / Save
  schema.post('save', async function(doc) {
    if (!doc[arrayField] || !Array.isArray(doc[arrayField])) return;
    const Item = require('./itemSchema');
    
    for (const item of doc[arrayField]) {
      const itemId = item.itemName && item.itemName._id ? item.itemName._id : null;
      const qty = parseFloat(item[qtyField] || 0);
      if (itemId && qty) {
        await Item.updateOne({ _id: itemId }, { $inc: { itemQuantity: qty * multiplier } });
      }
    }
  });

  // Delete
  schema.post('findOneAndDelete', async function(doc) {
    console.log(`[STOCK HOOK] findOneAndDelete triggered for ${this.model.modelName} (doc id: ${doc ? doc._id : 'null'})`);
    if (!doc || !doc[arrayField] || !Array.isArray(doc[arrayField])) {
      console.log(`[STOCK HOOK] Aborting: Missing doc or arrayField ${arrayField}`);
      return;
    }
    const Item = require('./itemSchema');
    
    // Reverse the multiplier since the document is being deleted
    for (const item of doc[arrayField]) {
      let itemId = null;
      if (item.itemName && item.itemName._id) {
        itemId = item.itemName._id;
      } else if (item.itemName && typeof item.itemName === 'string') {
        // Fallback if itemName is just an ObjectId string
        itemId = item.itemName;
      }
      
      const qty = parseFloat(item[qtyField] || 0);
      console.log(`[STOCK HOOK] Reversing qty: ${qty} for itemId: ${itemId}`);
      if (itemId && qty) {
        await Item.updateOne({ _id: itemId }, { $inc: { itemQuantity: qty * (multiplier * -1) } });
      }
    }
  });

  // Update
  schema.pre('findOneAndUpdate', async function(next) {
    // Store the original document before it's updated
    this._oldDoc = await this.model.findOne(this.getQuery());
    next();
  });

  schema.post('findOneAndUpdate', async function(doc) {
    if (!doc || !this._oldDoc) return;
    const Item = require('./itemSchema');
    
    const oldItems = this._oldDoc[arrayField] || [];
    const newItems = doc[arrayField] || [];
    
    const qtyMap = {};

    // Subtract old quantities (reverse multiplier)
    for (const item of oldItems) {
      const itemId = item.itemName && item.itemName._id ? item.itemName._id.toString() : null;
      if (itemId) {
        if (!qtyMap[itemId]) qtyMap[itemId] = 0;
        qtyMap[itemId] -= parseFloat(item[qtyField] || 0);
      }
    }

    // Add new quantities (forward multiplier)
    for (const item of newItems) {
      const itemId = item.itemName && item.itemName._id ? item.itemName._id.toString() : null;
      if (itemId) {
        if (!qtyMap[itemId]) qtyMap[itemId] = 0;
        qtyMap[itemId] += parseFloat(item[qtyField] || 0);
      }
    }

    // Apply the net delta
    for (const itemId of Object.keys(qtyMap)) {
      const delta = qtyMap[itemId];
      if (delta !== 0) {
        await Item.updateOne({ _id: itemId }, { $inc: { itemQuantity: delta * multiplier } });
      }
    }
  });
}

/**
 * Attaches transfer hooks to the Branch Transfer schema.
 */
function attachTransferHooks(schema) {
  schema.post('save', async function(doc) {
    if (!doc.itemId || !doc.quantity) return;
    const Item = require('./itemSchema');
    const qty = parseFloat(doc.quantity);
    
    // Deduct from origin, add to destination on the exact same itemId (net zero, but keeping logic as requested)
    await Item.updateOne({ _id: doc.itemId }, { $inc: { itemQuantity: -qty } });
    await Item.updateOne({ _id: doc.itemId }, { $inc: { itemQuantity: qty } });
  });

  schema.post('findOneAndDelete', async function(doc) {
    if (!doc || !doc.itemId || !doc.quantity) return;
    const Item = require('./itemSchema');
    const qty = parseFloat(doc.quantity);
    
    // Reverse logic
    await Item.updateOne({ _id: doc.itemId }, { $inc: { itemQuantity: qty } });
    await Item.updateOne({ _id: doc.itemId }, { $inc: { itemQuantity: -qty } });
  });

  schema.pre('findOneAndUpdate', async function(next) {
    this._oldDoc = await this.model.findOne(this.getQuery());
    next();
  });

  schema.post('findOneAndUpdate', async function(doc) {
    if (!doc || !this._oldDoc) return;
    const Item = require('./itemSchema');
    
    const oldQty = parseFloat(this._oldDoc.quantity || 0);
    const newQty = parseFloat(doc.quantity || 0);
    const delta = newQty - oldQty;
    
    if (delta !== 0) {
      await Item.updateOne({ _id: doc.itemId }, { $inc: { itemQuantity: -delta } });
      await Item.updateOne({ _id: doc.itemId }, { $inc: { itemQuantity: delta } });
    }
  });
}

module.exports = { attachStockHooks, attachTransferHooks };
