const fs = require('fs');

let routes = fs.readFileSync('server/routes/maintenanceRoutes.js', 'utf8');

// Replace the entire technician-update-maintenance route with a simpler version
// that saves items directly without DB lookup (avoids itemSchema not found issue)
const oldRoute = `Route.route('/technician-update-maintenance/:id').put(async (req, res, next) => {
  try {
    const { applianceInfo, actionTaken, note, items, status } = req.body;
    
    // Only allow Open or Pending status from tech
    const allowedStatus = (status === 'Pending' || status === 'Open') ? status : 'Open';

    // Find existing maintenance to see if it's already converted/closed
    const mongoose = require('mongoose');
    const maintenanceModel = mongoose.model('maintenanceSchema');
    const itemModel = mongoose.model('itemSchema');
    
    const existing = await maintenanceModel.findById(req.params.id);
    if (!existing) {
      return res.status(404).json({ msg: 'Maintenance not found' });
    }
    
    // Check lock
    if (existing.status === 'Close' || existing.Converted) {
      return res.status(403).json({ msg: 'Cannot edit closed or converted maintenance order' });
    }
    
    // Hydrate items
    let subTotal = 0;
    const hydratedItems = [];
    
    if (Array.isArray(items)) {
      for (const reqItem of items) {
        if (!reqItem.itemName || !reqItem.itemName._id) continue;
        
        // Find item from DB to ensure prices are real
        const dbItem = await itemModel.findById(reqItem.itemName._id);
        if (!dbItem) continue;
        
        const qty = parseFloat(reqItem.itemQty) || 0;
        const rate = parseFloat(dbItem.itemSellingPrice) || 0;
        const cost = parseFloat(dbItem.itemCostPrice) || 0;
        const amount = qty * rate;
        
        subTotal += amount;
        
        hydratedItems.push({
          idRow: reqItem.idRow,
          itemName: { _id: dbItem._id, itemName: dbItem.itemName },
          itemDescription: dbItem.itemDescription || reqItem.itemDescription,
          itemQty: qty,
          itemRate: rate,
          itemCost: cost,
          itemAmount: amount,
          totalAmount: amount,
          discount: 0,
          percentage: 0,
          itemBuy: qty, // assuming they take what they use
          newDescription: reqItem.newDescription
        });
      }
    }
    
    // Calculate total including labor
    const laborFees = existing.totalLaborFeesGenerale || 0;
    const totalInvoice = subTotal + laborFees;
    
    const updateData = {
      status: allowedStatus,
      actionTaken: actionTaken || existing.actionTaken,
      note: note || existing.note,
      items: hydratedItems,
      subTotal: subTotal,
      totalInvoice: totalInvoice,
      totalLaborFees: laborFees
    };
    
    // Flatten applianceInfo into the main document fields
    if (applianceInfo) {
       if (applianceInfo.itemDescriptionInfo !== undefined) updateData.itemDescriptionInfo = applianceInfo.itemDescriptionInfo;
       if (applianceInfo.brand !== undefined) updateData.brand = applianceInfo.brand;
       if (applianceInfo.model !== undefined) updateData.model = applianceInfo.model;
       if (applianceInfo.serialNo !== undefined) updateData.serialNo = applianceInfo.serialNo;
       if (applianceInfo.warranty !== undefined) updateData.warranty = applianceInfo.warranty;
       if (applianceInfo.defectDescription !== undefined) updateData.defectDescription = applianceInfo.defectDescription;
    }
    
    const result = await maintenanceModel.findByIdAndUpdate(req.params.id, { $set: updateData }, { new: true });
    
    res.json({
      data: result,
      msg: 'Data successfully updated by Technician.',
    });
  } catch (error) {
    console.error('Technician update error:', error);
    next(error);
  }
});`;

const newRoute = `Route.route('/technician-update-maintenance/:id').put(async (req, res, next) => {
  try {
    const mongoose = require('mongoose');
    const maintenanceModel = mongoose.model('maintenanceSchema');

    const existing = await maintenanceModel.findById(req.params.id);
    if (!existing) {
      return res.status(404).json({ msg: 'Maintenance not found' });
    }
    if (existing.status === 'Close' || existing.Converted) {
      return res.status(403).json({ msg: 'Cannot edit closed or converted maintenance order' });
    }

    // Take items directly from the form — the form already has proper item structure
    // loaded from the DB, so we trust it rather than re-looking-up by ID (which can fail
    // due to branch isolation or collection naming differences).
    const { actionTaken, note, items, status, action } = req.body;

    // Only allow Open or Pending status from tech
    const allowedStatus = (status === 'Pending' || status === 'Open') ? status : 'Open';

    // Build clean items array — preserve real items (with itemName._id) and custom text rows
    const savedItems = [];
    if (Array.isArray(items)) {
      for (const reqItem of items) {
        // Skip completely blank rows (no name and no description)
        const hasName = reqItem.itemName && (reqItem.itemName._id || reqItem.itemName.itemName);
        const hasDesc = reqItem.newDescription !== undefined && reqItem.newDescription !== null;
        if (!hasName && !hasDesc) continue;

        const itemToSave = {
          idRow: reqItem.idRow,
          itemName: reqItem.itemName || { _id: '', itemName: '' },
          itemDescription: reqItem.itemDescription || '',
          itemQty: parseFloat(reqItem.itemQty) || 0,
          itemRate: parseFloat(reqItem.itemRate) || 0,
          itemCost: parseFloat(reqItem.itemCost) || 0,
          itemAmount: parseFloat(reqItem.itemAmount) || 0,
          totalAmount: parseFloat(reqItem.totalAmount) || 0,
          discount: parseFloat(reqItem.discount) || 0,
          percentage: parseFloat(reqItem.percentage) || 0,
          itemBuy: parseFloat(reqItem.itemBuy) || parseFloat(reqItem.itemQty) || 0,
          stock: parseFloat(reqItem.stock) || 0,
        };
        // Only include newDescription if it's actually set (not null/undefined)
        // so the form doesn't mistake real items as blank-description rows
        if (hasDesc) {
          itemToSave.newDescription = reqItem.newDescription;
        }
        savedItems.push(itemToSave);
      }
    }

    const updateData = {
      status: allowedStatus,
      action: action || existing.action,
      actionTaken: actionTaken !== undefined ? actionTaken : existing.actionTaken,
      note: note !== undefined ? note : existing.note,
      items: savedItems,
    };

    const result = await maintenanceModel.findByIdAndUpdate(
      req.params.id,
      { $set: updateData },
      { new: true }
    );

    res.json({
      data: result,
      msg: 'Data successfully updated by Technician.',
    });
  } catch (error) {
    console.error('Technician update error:', error);
    next(error);
  }
});`;

if (routes.includes(oldRoute.substring(0, 100))) {
  routes = routes.replace(oldRoute, newRoute);
  console.log('Route replaced successfully');
} else {
  // Try a fuzzy approach - find by line numbers and replace
  const lines = routes.split('\n');
  const start = lines.findIndex(l => l.includes("technician-update-maintenance/:id"));
  let depth = 0, end = start;
  for (let i = start; i < lines.length; i++) {
    for (const ch of lines[i]) {
      if (ch === '{') depth++;
      if (ch === '}') depth--;
    }
    if (depth === 0 && i > start) { end = i; break; }
  }
  console.log('Using line replacement: lines', start, 'to', end);
  lines.splice(start, end - start + 1, ...newRoute.split('\n'));
  routes = lines.join('\n');
  console.log('Route replaced via lines');
}

fs.writeFileSync('server/routes/maintenanceRoutes.js', routes);

// Verify
const verify = fs.readFileSync('server/routes/maintenanceRoutes.js', 'utf8');
const checks = [
  ['New simple route', verify.includes('savedItems')],
  ['No itemModel lookup', !verify.includes('itemModel.findById')],
  ['Status allowed check', verify.includes('allowedStatus')],
  ['Items saved directly', verify.includes('items: savedItems')],
  ['newDescription only when set', verify.includes('if (hasDesc)')],
  ['Not Converted check', verify.includes('existing.Converted')],
];
checks.forEach(([n, p]) => console.log((p ? 'OK  ' : 'FAIL') + ': ' + n));
