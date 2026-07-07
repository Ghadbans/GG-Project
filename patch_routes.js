const fs = require('fs');
const file = 'E:/globalgateapi2/routes/Routes.js';
let content = fs.readFileSync(file, 'utf8');

// TASK 3: Assign Branch IDs
const createRoutes = [
  '/create-customer',
  '/create-Supplier',
  '/create-employee',
  '/create-dailyexpense',
  '/create-recurringinvoice',
  '/create-retainerinvoice',
  '/create-department'
];

for (const route of createRoutes) {
  // We want to add branchId: req.body.branchId to the model creation payload
  const routeRegex = new RegExp(`Route\\.route\\("${route}"\\)\\.post\\(async \\(req, res, next\\) => \\{\\s*//await [a-zA-Z0-9_]+\\s*const\\s*\\{[\\s\\S]*?\\}\\s*=\\s*req\\.body;\\s*(?:let\\s*photo\\s*=\\s*'';\\s*)?await [a-zA-Z0-9_]+\\.create\\(\\{`);
  
  if (routeRegex.test(content)) {
    content = content.replace(routeRegex, (match) => {
      return match.replace('.create({', '.create({\n      branchId: req.body.branchId,');
    });
  } else {
    // maybe it doesn't destructure or have await Model.create({ ?
    // Let's use a broader match
    const broadRegex = new RegExp(`Route\\.route\\("${route}"\\)\\.post\\(async \\(req, res, next\\) => \\{[\\s\\S]*?await ([a-zA-Z0-9_]+)\\.create\\(\\{`);
    content = content.replace(broadRegex, (match) => {
        return match.replace('.create({', '.create({\n      branchId: req.body.branchId,');
    });
  }
}

// TASK 4: List Endpoints (GET) HQ fallback
const getRoutes = [
  '/invoice-Information',
  '/expense-Information',
  '/maintenance-Information'
];

for (const route of getRoutes) {
  // Let's check how they do the query.
  // const payments = await invoiceSchema.find() -> we want to insert branchId logic
  const listRegex = new RegExp(`Route\\.route\\("${route}"(?:, cors\\(corsOptionsDelegate\\))?\\)\\.get\\(\\s*async \\(req, res, next\\) => \\{\\s*try \\{\\s*const ([a-zA-Z0-9_]+) =  await ([a-zA-Z0-9_]+)\\.find\\(\\)\\s*`);
  
  if (listRegex.test(content)) {
    content = content.replace(listRegex, (match, varName, schemaName) => {
      return `Route.route("${route}").get(
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
      const ${varName} = await ${schemaName}.find(query)
`;
    });
  } else {
      // fallback if they have some other structure. 
      // For instance: Route.route("/item-Information").get(...)
      const altListRegex = new RegExp(`Route\\.route\\("${route}"(?:, cors\\(corsOptionsDelegate\\))?\\)\\.get\\(\\s*async \\(req, res, next\\) => \\{\\s*try \\{\\s*(const rawBranchId[\\s\\S]*?await ([a-zA-Z0-9_]+)\\.find\\([^)]*\\))`);
      // If it already has branchId extraction, maybe it doesn't have the $or logic.
  }
}

// TASK 5: Crash Prevention
const fallbackLogic = `
  if (!req.body.customerName || !req.body.customerName.customerName || req.body.customerName.customerName.includes("Unknown Customer")) {
    if (req.body.ReferenceName2) {
      try {
        const purchaseSchema = require('../model/purchaseSchema');
        const purchase = await purchaseSchema.findById(req.body.ReferenceName2);
        if (purchase && purchase.customerName && purchase.customerName.customerName) {
          req.body.customerName = purchase.customerName;
        } else {
          req.body.customerName = { customerName: "Unknown Customer (Recovered)", billingAddress: "N/A", billingCity: "N/A" };
        }
      } catch(err) {
        req.body.customerName = { customerName: "Unknown Customer (Recovered)", billingAddress: "N/A", billingCity: "N/A" };
      }
    } else {
      req.body.customerName = { customerName: "Unknown Customer (Recovered)", billingAddress: "N/A", billingCity: "N/A" };
    }
  }
`;

const preventRoutes = [
  '/create-purchase',
  '/create-estimation',
  '/create-pos',
  '/create-payment'
];

for (const route of preventRoutes) {
  const routeHeadRegex = new RegExp(`Route\\.route\\("${route}"\\)\\.post\\(async \\(req, res, next\\) => \\{`);
  content = content.replace(routeHeadRegex, `Route.route("${route}").post(async (req, res, next) => {${fallbackLogic}`);
}

fs.writeFileSync(file, content, 'utf8');
console.log('Patched Routes.js');
