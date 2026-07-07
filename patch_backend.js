const fs = require('fs');
const path = require('path');

const modelsDir = path.join(__dirname, 'model');
const routesFile = path.join(__dirname, 'routes', 'Routes.js');

const stockUtilsCode = 
"const mongoose = require('mongoose');\n" +
"\n" +
"const calculateQuantity = async () => {\n" +
"  try {\n" +
"    const itemSchema = require('./itemSchema');\n" +
"    const itemPurchaseSchema = require('./itemPurchaseSchema');\n" +
"    const itemOutSchema = require('./itemOutSchema');\n" +
"    const itemReturnSchema = require('./itemReturnSchema');\n" +
"    const posSchema = require('./posSchema');\n" +
"    const itemTransferHistorySchema = require('./itemTransferHistorySchema');\n" +
"\n" +
"    const items = await itemSchema.find();\n" +
"    const itemQuantities = {};\n" +
"    const itemUpcMap = {}; \n" +
"    \n" +
"    items.forEach(item => {\n" +
"      const id = item._id.toString();\n" +
"      itemQuantities[id] = {\n" +
"        purchase: 0,\n" +
"        out: 0,\n" +
"        posOut: 0,\n" +
"        returned: 0,\n" +
"        transferOut: 0,\n" +
"        transferIn: 0\n" +
"      };\n" +
"      if (item.itemUpc && item.itemUpc.newCode && item.itemUpc.itemNumber) {\n" +
"        const upcKey = item.itemUpc.newCode + '-' + item.itemUpc.itemNumber + '-' + (item.branchId || 'HQ');\n" +
"        itemUpcMap[upcKey] = id;\n" +
"      }\n" +
"    });\n" +
"\n" +
"    const [purchase, outs, iReturn, posOutInfo, transfers] = await Promise.all([\n" +
"      itemPurchaseSchema.find(),\n" +
"      itemOutSchema.find(),\n" +
"      itemReturnSchema.find(),\n" +
"      posSchema.find(),\n" +
"      itemTransferHistorySchema.find()\n" +
"    ]);\n" +
"\n" +
"    purchase.forEach(transactions => {\n" +
"      if (!transactions.items) return;\n" +
"      transactions.items.forEach(entry => {\n" +
"        const itemId = entry.itemName && entry.itemName._id ? entry.itemName._id.toString() : null;\n" +
"        if (itemId && itemQuantities[itemId]) {\n" +
"          const originalQty = (parseFloat(entry.itemQty) || 0) + (parseFloat(entry.itemOut) || 0);\n" +
"          itemQuantities[itemId].purchase += originalQty;\n" +
"        }\n" +
"      });\n" +
"    });\n" +
"\n" +
"    outs.forEach(transactions => {\n" +
"      if (!transactions.itemsQtyArray) return;\n" +
"      transactions.itemsQtyArray.forEach(entry => {\n" +
"        const itemId = entry.itemName && entry.itemName._id ? entry.itemName._id.toString() : null;\n" +
"        if (itemId && itemQuantities[itemId]) {\n" +
"          itemQuantities[itemId].out += parseFloat(entry.newItemOut) || 0;\n" +
"        }\n" +
"      });\n" +
"    });\n" +
"\n" +
"    iReturn.forEach(transactions => {\n" +
"      if (!transactions.itemsQtyArray) return;\n" +
"      transactions.itemsQtyArray.forEach(entry => {\n" +
"        const itemId = entry.itemName && entry.itemName._id ? entry.itemName._id.toString() : null;\n" +
"        if (itemId && itemQuantities[itemId]) {\n" +
"          itemQuantities[itemId].returned += parseFloat(entry.newItemOut) || 0;\n" +
"        }\n" +
"      });\n" +
"    });\n" +
"\n" +
"    posOutInfo.forEach(transactions => {\n" +
"      if (!transactions.items) return;\n" +
"      transactions.items.forEach(entry => {\n" +
"        const itemId = entry.itemName && entry.itemName._id ? entry.itemName._id.toString() : null;\n" +
"        if (itemId && itemQuantities[itemId]) {\n" +
"          itemQuantities[itemId].posOut += parseFloat(entry.itemQty) || 0;\n" +
"        }\n" +
"      });\n" +
"    });\n" +
"\n" +
"    transfers.forEach(transfer => {\n" +
"      const originItemId = transfer.itemId ? transfer.itemId.toString() : null;\n" +
"      const qty = parseFloat(transfer.quantity) || 0;\n" +
"      \n" +
"      if (originItemId && itemQuantities[originItemId]) {\n" +
"         itemQuantities[originItemId].transferOut += qty;\n" +
"      }\n" +
"      \n" +
"      if (transfer.toItemId && itemQuantities[transfer.toItemId.toString()]) {\n" +
"          itemQuantities[transfer.toItemId.toString()].transferIn += qty;\n" +
"      }\n" +
"    });\n" +
"\n" +
"    const bulkOperations = [];\n" +
"    Object.entries(itemQuantities).forEach(([itemId, q]) => {\n" +
"      const totalOut = q.posOut + q.out + q.transferOut;\n" +
"      const totalIn = q.purchase + q.returned + q.transferIn;\n" +
"      \n" +
"      const itemQuantity = Math.round((totalIn - totalOut) * 100) / 100;\n" +
"      \n" +
"      bulkOperations.push({\n" +
"        updateOne: {\n" +
"          filter: { _id: new mongoose.Types.ObjectId(itemId) },\n" +
"          update: { $set: { itemQuantity } }\n" +
"        }\n" +
"      });\n" +
"    });\n" +
"\n" +
"    if (bulkOperations.length > 0) {\n" +
"      await itemSchema.bulkWrite(bulkOperations);\n" +
"    }\n" +
"    console.log('[SYS] calculateQuantity hook completed - stock synced for', bulkOperations.length, 'items');\n" +
"  } catch (error) {\n" +
"    console.log('[SYS] calculateQuantity error:', error);\n" +
"  }\n" +
"};\n" +
"\n" +
"const attachStockHooks = (schema) => {\n" +
"  const trigger = function() {\n" +
"    calculateQuantity().catch(console.error);\n" +
"  };\n" +
"  \n" +
"  schema.post('save', trigger);\n" +
"  schema.post('findOneAndUpdate', trigger);\n" +
"  schema.post('findOneAndDelete', trigger);\n" +
"};\n" +
"\n" +
"module.exports = { calculateQuantity, attachStockHooks };\n";

fs.writeFileSync(path.join(modelsDir, 'stockUtils.js'), stockUtilsCode, 'utf8');
console.log('Created model/stockUtils.js');

const schemasToPatch = [
  'itemPurchaseSchema.js',
  'itemOutSchema.js',
  'itemReturnSchema.js',
  'posSchema.js',
  'itemTransferHistorySchema.js'
];

schemasToPatch.forEach(file => {
  const filePath = path.join(modelsDir, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('attachStockHooks')) {
    const schemaNameMatch = content.match(/module\.exports\s*=\s*mongoose\.model\(['"]([^'"]+)['"]/);
    if (schemaNameMatch) {
       const schemaVarName = schemaNameMatch[1];
       const hookCode = "\n// Attach stock sync hooks\nrequire('./stockUtils').attachStockHooks(" + schemaVarName + ");\n";
       content = content.replace(/module\.exports\s*=\s*mongoose\.model/, hookCode + 'module.exports = mongoose.model');
       fs.writeFileSync(filePath, content, 'utf8');
       console.log('Patched ' + file + ' with stock hooks.');
    }
  }
});

let routesContent = fs.readFileSync(routesFile, 'utf8');

// Remove old calculateQuantity definition and its catch logs
routesContent = routesContent.replace(/const calculateQuantity = async \(\) => \{[\s\S]*?\n\}(?=\nRoute\.route)/m, '');
routesContent = routesContent.replace(/\s*calculateQuantity\(\)\.catch\([^\)]+\);/g, '');

routesContent = routesContent.replace(
  /await calculateQuantity\(\)/g, 
  "await require('../model/stockUtils').calculateQuantity()"
);

const deleteBranchEndpoint = 
"\n// --- DELETE BRANCH ---\n" +
"Route.route('/delete-branch').post(async (req, res, next) => {\n" +
"  try {\n" +
"    const { branchIdToDelete, transferBranchId } = req.body;\n" +
"    \n" +
"    if (!branchIdToDelete) {\n" +
"      return res.status(400).json({ msg: 'branchIdToDelete is required' });\n" +
"    }\n" +
"\n" +
"    if (transferBranchId && transferBranchId !== branchIdToDelete) {\n" +
"      const modelsToUpdate = [\n" +
"        require('../model/quotationSchema'),\n" +
"        require('../model/purchaseSchema'),\n" +
"        require('../model/projectSchema'),\n" +
"        require('../model/invoiceSchema'),\n" +
"        require('../model/posSchema'),\n" +
"        require('../model/employeeSchema'),\n" +
"        require('../model/itemSchema'),\n" +
"        require('../model/itemPurchaseSchema'),\n" +
"        require('../model/itemOutSchema'),\n" +
"        require('../model/itemReturnSchema'),\n" +
"        require('../model/dailyExpenseSchema')\n" +
"      ];\n" +
"\n" +
"      for (const Model of modelsToUpdate) {\n" +
"        if (Model && Model.updateMany) {\n" +
"          await Model.updateMany(\n" +
"            { branchId: branchIdToDelete }, \n" +
"            { $set: { branchId: transferBranchId } }\n" +
"          );\n" +
"        }\n" +
"      }\n" +
"    }\n" +
"\n" +
"    const companyProfileSchema = require('../model/companyProfileSchema');\n" +
"    const company = await companyProfileSchema.findOne({});\n" +
"    if (company && company.branches) {\n" +
"      company.branches = company.branches.filter(b => b.branchId !== branchIdToDelete);\n" +
"      await companyProfileSchema.updateOne({ _id: company._id }, { $set: { branches: company.branches } });\n" +
"    }\n" +
"\n" +
"    res.status(200).json({ msg: 'Branch successfully deleted and data transferred.' });\n" +
"  } catch (err) {\n" +
"    console.error('Error deleting branch:', err);\n" +
"    res.status(500).json({ msg: 'Server error during branch deletion' });\n" +
"  }\n" +
"});\n";

if (!routesContent.includes('/delete-branch')) {
  routesContent = routesContent.replace(/(Route\.route\("\/create-user"\))/, deleteBranchEndpoint + '\n$1');
  fs.writeFileSync(routesFile, routesContent, 'utf8');
  console.log('Injected /delete-branch into Routes.js');
}
