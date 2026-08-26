const fs = require('fs');
let code = fs.readFileSync('server/routes/maintenanceRoutes.js', 'utf8');

const insertBlock = `
// TECHNICIAN RESTRICTED UPDATE
Route.route('/technician-update-maintenance/:id').put(async (req, res, next) => {
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
});
`;

if(!code.includes('/technician-update-maintenance/:id')) {
    code = code.replace('Route.route("/update-maintenance/:id").put', insertBlock + '\n\nRoute.route("/update-maintenance/:id").put');
    fs.writeFileSync('server/routes/maintenanceRoutes.js', code);
    console.log('Added technician route!');
}
