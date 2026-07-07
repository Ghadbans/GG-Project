const fs = require('fs');
const path = require('path');

const modelsDir = path.join(__dirname, 'model');
const routesFile = path.join(__dirname, 'routes', 'Routes.js');

let stockUtilsContent = fs.readFileSync(path.join(modelsDir, 'stockUtils.js'), 'utf8');
stockUtilsContent = stockUtilsContent.replace(
  /const originalQty = \(parseFloat\(entry\.itemQty\) \|\| 0\) \+ \(parseFloat\(entry\.itemOut\) \|\| 0\);\s*itemQuantities\[itemId\]\.purchase \+= originalQty;/,
  'itemQuantities[itemId].purchase += parseFloat(entry.itemQty) || 0;'
);
fs.writeFileSync(path.join(modelsDir, 'stockUtils.js'), stockUtilsContent, 'utf8');
console.log('Fixed math in stockUtils.js');

let routesContent = fs.readFileSync(routesFile, 'utf8');

// Strip all calculateQuantity().catch(...) calls precisely
routesContent = routesContent.replace(/\s*calculateQuantity\(\)\.catch\([^\)]+\);/g, '');

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
  const anchor = 'Route.route("/CalculateTotal").post(async (req, res, next) => {';
  const parts = routesContent.split(anchor);
  if (parts.length > 1) {
     routesContent = parts[0] + deleteBranchEndpoint + "\n" + anchor + parts[1];
     fs.writeFileSync(routesFile, routesContent, 'utf8');
     console.log('Injected /delete-branch into Routes.js');
  } else {
     console.log('Anchor for /delete-branch not found!');
  }
} else {
  fs.writeFileSync(routesFile, routesContent, 'utf8');
}
