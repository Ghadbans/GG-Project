/**
 * patch_find_dot_calls.js
 * 
 * Finds all standalone .find() calls on their own line (chained pattern)
 * in simple GET route handlers that don't yet have branchId filtering.
 * Patches them to .find(branchId filter).
 * 
 * Targets the pattern:
 *   await someSchema
 *     .find()
 *     .then(...)
 * or:
 *   await someSchema
 *       .find()
 *       .then(...)
 */

const fs = require('fs');
const path = require('path');

const ROUTES_PATH = path.join(__dirname, 'routes', 'Routes.js');
let content = fs.readFileSync(ROUTES_PATH, 'utf8');
const original = content;
let changes = 0;

// These are the schemas used in the simple GET-all routes (the ones with cors handler)
// We patch these specific chained .find() patterns
const schemaTargets = [
  'customerSchema',
  'invoiceSchema',
  'employeeSchema',
  'posSchema',
  'purchaseSchema',
  'estimationSchema',
  'maintenanceSchema',
  'itemOutSchema',
  'itemReturnSchema',
  'itemPurchaseSchema',
  'paymentSchema',
  'projectSchema',
  'expenseSchema',
  'cashSchema',
  'planingSchema',
  'purchaseOrderSchema',
  'dailyExpenseSchema',
  'dailyReportSchema',
  'payRollSchema',
  'employeeAttendanceShema',
  'commentSchema',
  'messageSchema',
  'notificationSchema',
  'grantAccessSchema',
  'itemCodeSchema',
  'itemUnitSchema',
  'departmentSchema',
  'hiddenSchema',
  'imageSchema',
  'SupplierSchema',
];

// For each schema, find GET route handlers that use the chained pattern
// and don't already have branchId filtering.
// Pattern: we find all occurrences of   await SCHEMA\n      .find()\n
// (varying whitespace) within GET route blocks

schemaTargets.forEach(schema => {
  // Match patterns like:
  //   await schemaName\n   SPACES   .find()\n
  // This is the chained form used by the simple GET routes
  const regex = new RegExp(`(await ${schema}\\s*\\.find\\()\\)(\\.sort|\\.then|\\.select)`, 'g');
  
  let match;
  const replacements = [];
  
  while ((match = regex.exec(content)) !== null) {
    const pos = match.index;
    
    // Check if this occurrence is within a GET route (not a calculateQuantity or similar)
    // Look backwards ~500 chars to find the enclosing route
    const context = content.slice(Math.max(0, pos - 600), pos);
    
    // Skip if already has branchId nearby
    const nearbyContent = content.slice(Math.max(0, pos - 200), pos + 200);
    if (nearbyContent.includes('branchId')) continue;
    
    // Skip if it's inside calculateQuantity or a utility function (not a Route.route)
    if (context.includes('const calculateQuantity') && !context.includes('Route.route')) continue;
    
    // Only patch if inside a GET route handler
    const lastGetRoute = context.lastIndexOf('.get(');
    const lastPostRoute = context.lastIndexOf('.post(');
    if (lastGetRoute === -1) continue; // not in a GET handler
    if (lastPostRoute > lastGetRoute) continue; // last route verb is POST, skip
    
    replacements.push({
      start: match.index + match[1].length,
      end: match.index + match[1].length,
      insert: 'req.query.branchId && req.query.branchId !== \'ALL\' ? { branchId: req.query.branchId } : {}'
    });
  }
  
  if (replacements.length > 0) {
    // Apply in reverse so positions don't shift
    replacements.reverse().forEach(({ start, end, insert }) => {
      content = content.slice(0, start) + insert + content.slice(start);
    });
    changes += replacements.length;
    console.log(`  PATCHED ${replacements.length}x: ${schema}`);
  }
});

// ── Also patch the standalone .find() pattern (chained on new line) ──────────
// Pattern:  .find()\n  where the await + schema are on the previous line
// Regex: await SCHEMA\r?\n\s+\.find\(\)
schemaTargets.forEach(schema => {
  const regex = new RegExp(`(await ${schema}\\r?\\n\\s+\\.find\\()\\)`, 'g');
  const newContent = content.replace(regex, (match, prefix) => {
    // Check context for branchId
    const idx = content.indexOf(match);
    if (idx !== -1) {
      const nearby = content.slice(Math.max(0, idx - 200), idx + 200);
      if (nearby.includes('branchId')) return match; // already patched
    }
    changes++;
    console.log(`  PATCHED chained: ${schema}`);
    return `${prefix}req.query.branchId && req.query.branchId !== 'ALL' ? { branchId: req.query.branchId } : {})`;
  });
  content = newContent;
});

if (content !== original) {
  fs.writeFileSync(ROUTES_PATH, content, 'utf8');
  console.log(`\nDone! Applied ${changes} additional patches.`);
} else {
  console.log('\nNo additional changes made.');
}
