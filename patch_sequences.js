const fs = require('fs');

const file = 'E:/globalgateapi2/routes/Routes.js';
let content = fs.readFileSync(file, 'utf8');

// 1. Fix invoice-Overdue
const overdueOld = `Route.route("/invoice-Overdue", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
 try {
 const payments =  await invoiceSchema.find()
 const today = new Date ()
 payments.forEach(row=>{
  const invoiceDueDate = new Date(row.invoiceDueDate)
  row.overdue = invoiceDueDate < today;
  row.daysPastDue = row.overdue ? Math.ceil((today - invoiceDueDate) / (1000 * 60 * 60 * 24)) :0
 })
 res.json(payments);
 } catch (error) {
  return next(err);
 }
  }
);`;

const overdueNew = `Route.route("/invoice-Overdue", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    try {
      const branchId = req.query.branchId;
      const query = {};
      if (branchId) {
        if (branchId === 'HQ') {
          query.$or = [{ branchId: 'HQ' }, { branchId: { $exists: false } }, { branchId: null }];
        } else {
          query.branchId = branchId;
        }
      }
      const payments = await invoiceSchema.find(query);
      const today = new Date();
      payments.forEach(row => {
        const invoiceDueDate = new Date(row.invoiceDueDate);
        row.overdue = invoiceDueDate < today;
        row.daysPastDue = row.overdue ? Math.ceil((today - invoiceDueDate) / (1000 * 60 * 60 * 24)) : 0;
      });
      res.json(payments);
    } catch (error) {
      return next(error);
    }
  }
);`;

if (content.includes(overdueOld)) {
  content = content.replace(overdueOld, overdueNew);
} else {
  console.log("Could not find overdue block exactly. Using regex...");
  const overdueRegex = /Route\.route\("\/invoice-Overdue"[\s\S]*?const payments =  await invoiceSchema\.find\(\)[\s\S]*?res\.json\(payments\);\s*\}\s*catch\s*\(error\)\s*\{\s*return next\(err\);\s*\}\s*\}/;
  content = content.replace(overdueRegex, overdueNew);
}

// 2. Fix all /get-last-saved-* routes
// Replace:
// const rawBranchId = req.query.branchId;
// const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
// const query = branchId && branchId !== 'ALL' ? { branchId } : {};
// const last = await SchemaName.findOne(query)

const getLastRegex = /const rawBranchId = req\.query\.branchId;\s*const branchId = Array\.isArray\(rawBranchId\) \? rawBranchId\[0\] : rawBranchId;\s*const query = branchId && branchId !== 'ALL' \? \{ branchId \} : \{\};\s*const last = await ([a-zA-Z0-9_]+)\.findOne\(query\)/g;

content = content.replace(getLastRegex, "const last = await $1.findOne({})");

fs.writeFileSync(file, content, 'utf8');
console.log("Patch complete.");
