/**
 * patch_branch_isolation.js
 * 
 * Safely patches Routes.js to:
 * 1. Add branchId filtering to all get-last-saved-* endpoints
 * 2. Add branchId to sequence-number findOne() queries in create-* endpoints
 *    so CTN-000001 etc. are isolated per branch
 */

const fs = require('fs');
const path = require('path');

const ROUTES_PATH = path.join(__dirname, 'routes', 'Routes.js');
let content = fs.readFileSync(ROUTES_PATH, 'utf8');
let changes = 0;

// ─────────────────────────────────────────────────────────────────────────────
// 1. Patch get-last-saved-* routes to filter by ?branchId
//    Pattern: findOne().sort({ ... }) with no branchId filter
//    We look for the exact pattern and replace it with a branch-aware version
// ─────────────────────────────────────────────────────────────────────────────

// Map of route name → { schema, sortField }
const lastSavedRoutes = [
  { route: 'get-last-saved-payRoll',      schema: 'payRollSchema',       sortField: 'payNumber' },
  { route: 'get-last-saved-invoice',      schema: 'invoiceSchema',        sortField: 'invoiceNumber' },
  { route: 'get-last-saved-payment',      schema: 'paymentSchema',        sortField: 'paymentNumber' },
  { route: 'get-last-saved-purchase',     schema: 'purchaseSchema',       sortField: 'purchaseNumber' },
  { route: 'get-last-saved-estimation',   schema: 'estimationSchema',     sortField: 'estimateNumber' },
  { route: 'get-last-saved-pos',          schema: 'posSchema',            sortField: 'factureNumber' },
  { route: 'get-last-saved-project',      schema: 'projectSchema',        sortField: '_id' },
  { route: 'get-last-saved-expense',      schema: 'expenseSchema',        sortField: '_id' },
  { route: 'get-last-saved-maintenance',  schema: 'maintenanceSchema',    sortField: '_id' },
  { route: 'get-last-saved-itemOut',      schema: 'itemOutSchema',        sortField: 'outNumber' },
  { route: 'get-last-saved-purchaseOrder',schema: 'purchaseOrderSchema',  sortField: 'outNumber' },
  { route: 'get-last-saved-itemReturn',   schema: 'itemReturnSchema',     sortField: 'outNumber' },
  { route: 'get-last-saved-cash',         schema: 'cashSchema',           sortField: '_id' },
  { route: 'get-last-saved-itemPurchase', schema: 'itemPurchaseSchema',   sortField: 'itemPurchaseNumber' },
  { route: 'get-last-saved-grantAccess',  schema: 'grantAccessSchema',    sortField: '_id' },
];

lastSavedRoutes.forEach(({ route, schema, sortField }) => {
  // Look for the route handler block with a simple findOne() (no branchId yet)
  const marker = `Route.route("/${route}")`;
  const idx = content.indexOf(marker);
  if (idx === -1) {
    console.log(`  SKIP (not found): ${route}`);
    return;
  }

  // Find the try { block and the findOne() inside it
  const blockStart = content.indexOf('try {', idx);
  const blockEnd = content.indexOf('\n})', blockStart) + 3;
  const block = content.slice(blockStart, blockEnd);

  // Check if already patched
  if (block.includes('req.query.branchId') || block.includes('branchFilter')) {
    console.log(`  SKIP (already patched): ${route}`);
    return;
  }

  // Build replacement block
  const newBlock = `try {
    const branchId = req.query.branchId;
    const query = branchId && branchId !== 'ALL' ? { branchId } : {};
    const last = await ${schema}.findOne(query).sort({
      ${sortField}: -1
    }).exec();
    res.json(last)
  } catch (error) {
    next(error);
  }
})`;

  content = content.slice(0, blockStart) + newBlock + content.slice(blockEnd);
  changes++;
  console.log(`  PATCHED: /${route}`);
});

// ─────────────────────────────────────────────────────────────────────────────
// 2. Patch sequence-number findOne() calls inside create-* routes.
//    These are the calls like:
//      const invoiceNumberOld = await invoiceSchema.findOne().sort({ invoiceNumber: -1 }).exec()
//    We need to filter these by branchId so each branch gets its own sequence.
//
//    Strategy: find lines matching  `await <schema>.findOne().sort({` inside create-* blocks
//    and convert them to `await <schema>.findOne(branchId ? {branchId} : {}).sort({`
// ─────────────────────────────────────────────────────────────────────────────

// Regex: matches  await SomeSchema.findOne().sort(
// and replaces with  await SomeSchema.findOne(branchId ? { branchId } : {}).sort(
const seqPattern = /await (\w+)\.findOne\(\)\.sort\(\{/g;
const newContent = content.replace(seqPattern, (match, schemaVar) => {
  changes++;
  console.log(`  PATCHED sequence findOne(): ${schemaVar}.findOne() -> findOne(branchId ? {branchId} : {})`);
  return `await ${schemaVar}.findOne(branchId ? { branchId } : {}).sort({`;
});
content = newContent;

// ─────────────────────────────────────────────────────────────────────────────
// 3. Write the patched file
// ─────────────────────────────────────────────────────────────────────────────
fs.writeFileSync(ROUTES_PATH, content, 'utf8');
console.log(`\nDone! Applied ${changes} changes to routes/Routes.js`);
