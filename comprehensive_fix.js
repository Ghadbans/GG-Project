/**
 * COMPREHENSIVE FIX SCRIPT
 * 1. Rewrites create-maintenance to use $max aggregation (no sort, no RAM limit issue, no duplicate key)
 * 2. Changes all list-view sorts back to _id: -1 so newest records ALWAYS appear first regardless of date field issues
 * 3. Keeps the ID-generator sorts (get-last-saved-*) using the number field sorts which ARE indexed
 */
const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, 'server', 'routes', 'Routes.js');
let c = fs.readFileSync(p, 'utf8');

// =====================================================================
// FIX 1: Rewrite create-maintenance to use aggregation for max serviceNumber
// This completely avoids the sort-on-large-collection 500 error
// =====================================================================
const oldCreateMaintenance = `Route.route("/create-maintenance").post(async (req, res, next) => {
 // await maintenanceSchema
 const { customerName,serviceNumber,action,
  serviceName,serviceDate,laborQty,totalLaborFeesGenerale,
  technicianAssign,note,totalLaborFees,laborPercentage,totalDiscount,laborDiscount,
  visitDate,status,items,itemDescriptionInfo,brand,actionTaken,model,
  warranty,serialNo,defectDescription,adjustment,adjustmentNumber,
  totalInvoice,subTotal,Create,Converted,ReferenceName} = req.body
 try {
  const branchId = req.body.branchId || req.query.branchId;
  const serviceNumberInfo = await maintenanceSchema.findOne(branchId ? { branchId } : {}).sort({
    serviceNumber: -1
  }).exec();0
  if (serviceNumberInfo && serviceNumberInfo.serviceNumber === serviceNumber) {
    const sum = serviceNumber + 1
    await maintenanceSchema.create({ customerName,serviceNumber: sum,
      serviceName: "M-00"+sum ,serviceDate,laborQty,totalLaborFeesGenerale,action,
      technicianAssign,note,totalLaborFees,laborPercentage,totalDiscount,laborDiscount,
      visitDate,status,items,itemDescriptionInfo,brand,actionTaken,model,
      warranty,serialNo,defectDescription,adjustment,adjustmentNumber,
      totalInvoice,subTotal,Create,Converted,ReferenceName,
      branchId}).then((result)=>{
      res.json({
        data: result,
        message: "Data successfully added.",
        status: 200,
      });
    }).catch((err)=>{
      return next(err)
    })
  } else {
    await maintenanceSchema.create({ customerName,serviceNumber,
      serviceName,serviceDate,laborQty,totalLaborFeesGenerale,action,
      technicianAssign,note,totalLaborFees,laborPercentage,totalDiscount,laborDiscount,
      visitDate,status,items,itemDescriptionInfo,brand,actionTaken,model,
      warranty,serialNo,defectDescription,adjustment,adjustmentNumber,
      totalInvoice,subTotal,Create,Converted,ReferenceName,
      branchId}).then((result)=>{
      res.json({
        data: result,
        message: "Data successfully added.",
        status: 200,
      });
    }).catch((err)=>{
      return next(err)
    })
  }
 } catch (error) {
  next(error);
 }
});`;

// Normalize CRLF to LF for matching
const cNorm = c.replace(/\r\n/g, '\n');
const oldNorm = oldCreateMaintenance.replace(/\r\n/g, '\n');

const newCreateMaintenance = `Route.route("/create-maintenance").post(async (req, res, next) => {
  const { customerName,serviceNumber,action,
    serviceName,serviceDate,laborQty,totalLaborFeesGenerale,
    technicianAssign,note,totalLaborFees,laborPercentage,totalDiscount,laborDiscount,
    visitDate,status,items,itemDescriptionInfo,brand,actionTaken,model,
    warranty,serialNo,defectDescription,adjustment,adjustmentNumber,
    totalInvoice,subTotal,Create,Converted,ReferenceName} = req.body;
  try {
    const branchId = req.body.branchId || req.query.branchId;
    const matchStage = branchId ? { branchId } : {};

    // Use $max aggregation — works on any collection size without RAM or sort limits
    const aggResult = await maintenanceSchema.aggregate([
      { $match: matchStage },
      { $group: { _id: null, maxNum: { $max: '$serviceNumber' } } }
    ]);
    const maxServiceNumber = aggResult.length > 0 ? (aggResult[0].maxNum || 0) : 0;

    // If the frontend sent the same number as the current max, auto-increment
    const finalServiceNumber = (serviceNumber && serviceNumber > maxServiceNumber)
      ? serviceNumber
      : maxServiceNumber + 1;

    // Build the serviceName from the final number (keep existing if frontend sent a non-conflicting name)
    const digits = String(finalServiceNumber).padStart(6, '0');
    const finalServiceName = serviceName && !serviceName.endsWith(String(serviceNumber))
      ? serviceName
      : 'M-' + digits;

    const result = await maintenanceSchema.create({
      customerName, serviceNumber: finalServiceNumber,
      serviceName: finalServiceName, serviceDate, laborQty, totalLaborFeesGenerale, action,
      technicianAssign, note, totalLaborFees, laborPercentage, totalDiscount, laborDiscount,
      visitDate, status, items, itemDescriptionInfo, brand, actionTaken, model,
      warranty, serialNo, defectDescription, adjustment, adjustmentNumber,
      totalInvoice, subTotal, Create, Converted, ReferenceName, branchId
    });
    res.json({ data: result, message: "Data successfully added.", status: 200 });
  } catch (error) {
    next(error);
  }
});`;

if (cNorm.includes(oldNorm)) {
  c = cNorm.replace(oldNorm, newCreateMaintenance);
  console.log('✅ Fixed create-maintenance endpoint');
} else {
  console.log('⚠️  Could not match create-maintenance block exactly — applying regex fallback');
  // Regex fallback
  c = cNorm.replace(
    /Route\.route\("\/create-maintenance"\)\.post[\s\S]*?^\}\);/m,
    newCreateMaintenance
  );
  console.log('✅ Applied regex fallback for create-maintenance');
}

// =====================================================================
// FIX 2: Change list-view sorts to use _id: -1 (always newest first)
// _id is always indexed, always reliable, no date-string-vs-Date issues
// =====================================================================

// Invoice list (not ID generator)
c = c.replace(
  /invoiceSchema\.find\(filter, projection\)\.sort\(\{ invoiceDate: -1 \}\)\.allowDiskUse\(true\)/g,
  'invoiceSchema.find(filter, projection).sort({ _id: -1 }).allowDiskUse(true)'
);
c = c.replace(
  /invoiceSchema\.find\(query\)\.sort\(\{ invoiceDate: -1 \}\)\.allowDiskUse\(true\)/g,
  'invoiceSchema.find(query).sort({ _id: -1 }).allowDiskUse(true)'
);

// POS list
c = c.replace(
  /posSchema\.find\(filter, projection\)\.sort\(\{ invoiceDate: -1 \}\)\.allowDiskUse\(true\)/g,
  'posSchema.find(filter, projection).sort({ _id: -1 }).allowDiskUse(true)'
);
c = c.replace(
  /posSchema\.find\(query\)\.sort\(\{ invoiceDate: -1 \}\)\.allowDiskUse\(true\)/g,
  'posSchema.find(query).sort({ _id: -1 }).allowDiskUse(true)'
);

// Purchase (purchaseSchema) list
c = c.replace(
  /purchaseSchema\.find\(filter, projection\)\.sort\(\{ [a-zA-Z]+: -1 \}\)\.allowDiskUse\(true\)/g,
  'purchaseSchema.find(filter, projection).sort({ _id: -1 }).allowDiskUse(true)'
);
c = c.replace(
  /purchaseSchema\.find\(query\)\.sort\(\{ [a-zA-Z]+: -1 \}\)\.allowDiskUse\(true\)/g,
  'purchaseSchema.find(query).sort({ _id: -1 }).allowDiskUse(true)'
);

// Estimation (quotation) list — keep date sort since user confirmed it works
// Maintenance list
c = c.replace(
  /maintenanceSchema\.find\(filter, projection\)\.sort\(\{ serviceDate: -1 \}\)\.allowDiskUse\(true\)/g,
  'maintenanceSchema.find(filter, projection).sort({ _id: -1 }).allowDiskUse(true)'
);
c = c.replace(
  /maintenanceSchema\.find\(query\)\.sort\(\{ serviceDate: -1 \}\)\.allowDiskUse\(true\)/g,
  'maintenanceSchema.find(query).sort({ _id: -1 }).allowDiskUse(true)'
);

// Expense list
c = c.replace(
  /expenseSchema\.find\(filter, projection\)\.sort\(\{ expenseDate: -1 \}\)\.allowDiskUse\(true\)/g,
  'expenseSchema.find(filter, projection).sort({ _id: -1 }).allowDiskUse(true)'
);
c = c.replace(
  /expenseSchema\.find\(query\)\.sort\(\{ expenseDate: -1 \}\)\.allowDiskUse\(true\)/g,
  'expenseSchema.find(query).sort({ _id: -1 }).allowDiskUse(true)'
);

// itemPurchase list
c = c.replace(
  /itemPurchaseSchema\.find\(filter, projection\)\.sort\(\{ itemPurchaseDate: -1 \}\)\.allowDiskUse\(true\)/g,
  'itemPurchaseSchema.find(filter, projection).sort({ _id: -1 }).allowDiskUse(true)'
);
c = c.replace(
  /itemPurchaseSchema\.find\(query\)\.sort\(\{ itemPurchaseDate: -1 \}\)\.allowDiskUse\(true\)/g,
  'itemPurchaseSchema.find(query).sort({ _id: -1 }).allowDiskUse(true)'
);

// itemOut list
c = c.replace(
  /itemOutSchema\.find\(filter, projection\)\.sort\(\{ [a-zA-Z]+: -1 \}\)\.allowDiskUse\(true\)/g,
  'itemOutSchema.find(filter, projection).sort({ _id: -1 }).allowDiskUse(true)'
);
c = c.replace(
  /itemOutSchema\.find\(query\)\.sort\(\{ [a-zA-Z]+: -1 \}\)\.allowDiskUse\(true\)/g,
  'itemOutSchema.find(query).sort({ _id: -1 }).allowDiskUse(true)'
);

// purchaseOrder list
c = c.replace(
  /purchaseOrderSchema\.find\(filter, projection\)\.sort\(\{ [a-zA-Z]+: -1 \}\)\.allowDiskUse\(true\)/g,
  'purchaseOrderSchema.find(filter, projection).sort({ _id: -1 }).allowDiskUse(true)'
);
c = c.replace(
  /purchaseOrderSchema\.find\(query\)\.sort\(\{ [a-zA-Z]+: -1 \}\)\.allowDiskUse\(true\)/g,
  'purchaseOrderSchema.find(query).sort({ _id: -1 }).allowDiskUse(true)'
);

// itemReturn list
c = c.replace(
  /itemReturnSchema\.find\(query\)\.sort\(\{ [a-zA-Z]+: -1 \}\)\.allowDiskUse\(true\)/g,
  'itemReturnSchema.find(query).sort({ _id: -1 }).allowDiskUse(true)'
);

// payment Information list
c = c.replace(
  /paymentSchema\.find\(query\)\.sort\(\{ paymentDate: -1 \}\)\.allowDiskUse\(true\)/g,
  'paymentSchema.find(query).sort({ _id: -1 }).allowDiskUse(true)'
);

// project list
c = c.replace(
  /projectSchema\.find\(filter, projection\)\.sort\(\{ [a-zA-Z]+: -1 \}\)\.allowDiskUse\(true\)/g,
  'projectSchema.find(filter, projection).sort({ _id: -1 }).allowDiskUse(true)'
);

fs.writeFileSync(p, c, 'utf8');
console.log('✅ All fixes applied successfully');
console.log('allowDiskUse count (on find):', (c.match(/\.allowDiskUse\(true\)/g) || []).length);
