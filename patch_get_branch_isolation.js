/**
 * patch_get_branch_isolation.js
 *
 * Patches Routes.js for 3 goals:
 * 1. get-last-saved-* routes: inject branchId guard before findOne(query) [already done by prior patch, verify+skip]
 * 2. Simple .find() GET routes (rate, rateReturn, paymentRate, item-shop, etc.):
 *    Convert .find() → branch-aware .find(branchId ? {branchId} : {})
 * 3. /item-shop: extract branchId from req.query and inject into query object
 *
 * Strategy: targeted string replacement, safe for multiline content.
 */

const fs = require('fs');
const path = require('path');

const ROUTES_PATH = path.join(__dirname, 'routes', 'Routes.js');
let content = fs.readFileSync(ROUTES_PATH, 'utf8');
const originalContent = content;
let changes = 0;

// ──────────────────────────────────────────────────────────────────────────────
// PART 1: Verify get-last-saved-* are already patched (from prior run)
// ──────────────────────────────────────────────────────────────────────────────
const lastSavedNames = [
  'payRoll','invoice','payment','purchase','estimation','pos','project',
  'expense','maintenance','itemOut','purchaseOrder','itemReturn','cash',
  'itemPurchase','grantAccess'
];

console.log('=== Part 1: Verifying get-last-saved-* ===');
lastSavedNames.forEach(name => {
  const marker = `/get-last-saved-${name}`;
  const idx = content.indexOf(marker);
  if (idx === -1) { console.log(`  MISSING: ${marker}`); return; }
  const block = content.slice(idx, idx + 400);
  const ok = block.includes('req.query.branchId') || block.includes('const branchId = req.query.branchId');
  console.log(`  ${ok ? 'OK' : 'NOT PATCHED'}: ${marker}`);
});

// ──────────────────────────────────────────────────────────────────────────────
// PART 2: Patch simple .find() in GET routes for rate/rateReturn/paymentRate
// These use the pattern:  Schema\n      .find()\n  
// Convert to branch-aware async block
// ──────────────────────────────────────────────────────────────────────────────
console.log('\n=== Part 2: Patching rate/rateReturn/paymentRate GET routes ===');

const simpleGetRoutes = [
  { marker: 'Route.route("/rate",', schema: 'rateSchema' },
  { marker: 'Route.route("/rateReturn",', schema: 'RateReturnSchema' },
  { marker: 'Route.route("/paymentRate",', schema: 'paymentRateSchema' },
];

simpleGetRoutes.forEach(({ marker, schema }) => {
  const routeIdx = content.indexOf(marker);
  if (routeIdx === -1) { console.log(`  SKIP (not found): ${marker}`); return; }

  // Find the end of this route handler (next Route.route)
  const nextRoute = content.indexOf('\nRoute.route(', routeIdx + marker.length);
  const routeBlock = content.slice(routeIdx, nextRoute);

  if (routeBlock.includes('req.query.branchId')) {
    console.log(`  SKIP (already patched): ${marker}`);
    return;
  }

  // Replace: await Schema\n      .find()\n      .then((result) => { ... })
  // with a try/catch block that filters by branchId
  const oldPattern = new RegExp(
    `(async \\(req, res, next\\) =>\\s*\\{\\s*)await ${schema}\\s*\\.find\\(\\)\\s*\\.then\\(\\(result\\) =>\\s*\\{\\s*res\\.json\\(\\{\\s*data: result,[^}]*\\}\\);?\\s*\\}\\)\\s*\\.catch\\(\\(err\\) =>\\s*\\{[^}]*\\}\\);?\\s*\\}`,
    's'
  );

  const replacement = `async (req, res, next) => {
    try {
      const branchId = req.query.branchId;
      const filter = branchId && branchId !== 'ALL' ? { branchId } : {};
      const result = await ${schema}.find(filter);
      res.json({ data: result, message: "Data successfully fetched!", status: 200 });
    } catch (err) { next(err); }
  }`;

  const newRouteBlock = routeBlock.replace(oldPattern, replacement);
  if (newRouteBlock !== routeBlock) {
    content = content.slice(0, routeIdx) + newRouteBlock + content.slice(nextRoute);
    changes++;
    console.log(`  PATCHED: ${marker}`);
  } else {
    console.log(`  WARN (pattern not matched, doing manual patch): ${marker}`);
    // Manual targeted replacement for the .find() call only
    const findIdx = content.indexOf(`${schema}\n      .find()\n      .then`, routeIdx);
    const findIdx2 = content.indexOf(`${schema}\n    .find()\n    .then`, routeIdx);
    const findIdx3 = content.indexOf(`await ${schema}\n      .find()\n`, routeIdx);
    
    const allFindPatterns = [
      `await ${schema}\n      .find()\n`,
      `await ${schema}\n    .find()\n`,
    ];
    
    let patched = false;
    for (const pat of allFindPatterns) {
      const fi = content.indexOf(pat, routeIdx);
      if (fi !== -1 && fi < routeIdx + 500) {
        const replacement2 = `const _branchFilter_${schema} = req.query.branchId && req.query.branchId !== 'ALL' ? { branchId: req.query.branchId } : {};\n      const _findResult_${schema} = await ${schema}.find(_branchFilter_${schema});\n      `;
        // This approach is getting complicated - instead just patch the .find() call directly
        break;
      }
    }
    
    // Simple find: replace   .find()  with  .find(req.query.branchId && req.query.branchId !== 'ALL' ? {branchId:req.query.branchId} : {})
    // within the route block only
    const nextRouteIdx2 = content.indexOf('\nRoute.route(', routeIdx + marker.length);
    const routeSlice = content.slice(routeIdx, nextRouteIdx2);
    const patchedSlice = routeSlice.replace(
      new RegExp(`(${schema}\\s*\\.find\\()\\)`, 'g'),
      `$1req.query.branchId && req.query.branchId !== 'ALL' ? { branchId: req.query.branchId } : {})`
    );
    if (patchedSlice !== routeSlice) {
      content = content.slice(0, routeIdx) + patchedSlice + content.slice(nextRouteIdx2);
      changes++;
      console.log(`  PATCHED (simple): ${marker}`);
    } else {
      console.log(`  FAILED: ${marker} - could not find .find() to patch`);
    }
  }
});

// ──────────────────────────────────────────────────────────────────────────────
// PART 3: Patch /item-shop to add branchId to query
// ──────────────────────────────────────────────────────────────────────────────
console.log('\n=== Part 3: Patching /item-shop ===');

const itemShopIdx = content.indexOf('Route.route("/item-shop")');
if (itemShopIdx === -1) {
  console.log('  SKIP: /item-shop not found');
} else {
  const nextRoute = content.indexOf('\nRoute.route(', itemShopIdx + 20);
  const itemShopBlock = content.slice(itemShopIdx, nextRoute);
  
  if (itemShopBlock.includes('req.query.branchId')) {
    console.log('  SKIP: already patched');
  } else {
    // Add branchId to the destructure and then inject into query
    let patched = itemShopBlock
      // Add branchId to destructuring
      .replace(
        "const {page = 1, limit = 60, search = ''} = req.query;",
        "const {page = 1, limit = 60, search = '', branchId} = req.query;"
      )
      // Inject branchId into query after query object creation
      .replace(
        "const query = {}\n\n    if (search.trim())",
        "const query = {}\n    if (branchId && branchId !== 'ALL') query.branchId = branchId;\n\n    if (search.trim())"
      );
    
    if (patched !== itemShopBlock) {
      content = content.slice(0, itemShopIdx) + patched + content.slice(nextRoute);
      changes++;
      console.log('  PATCHED: /item-shop');
    } else {
      console.log('  WARN: pattern not matched for /item-shop, trying alternative');
      // Try broader pattern
      const altPatched = content.slice(itemShopIdx, nextRoute)
        .replace(
          "const query = {}",
          "const branchId = req.query.branchId;\n    const query = branchId && branchId !== 'ALL' ? { branchId } : {};"
        );
      if (altPatched !== content.slice(itemShopIdx, nextRoute)) {
        content = content.slice(0, itemShopIdx) + altPatched + content.slice(nextRoute);
        changes++;
        console.log('  PATCHED (alt): /item-shop');
      } else {
        console.log('  FAILED: /item-shop');
      }
    }
  }
}

// ──────────────────────────────────────────────────────────────────────────────
// PART 4: Patch ALL remaining bare .find() calls in GET route handlers
// that don't yet have branchId filtering. We target the main list routes.
// ──────────────────────────────────────────────────────────────────────────────
console.log('\n=== Part 4: Patching other simple list GET routes ===');

// Routes that use the simple cors GET pattern with .find() and no branch filter
const simpleListRoutes = [
  { path: '/invoice', schema: 'invoiceSchema' },
  { path: '/customer', schema: 'customerSchema' },
  { path: '/employee', schema: 'employeeSchema' },
  { path: '/pos', schema: 'posSchema' },
  { path: '/purchase', schema: 'purchaseSchema' },
  { path: '/estimation', schema: 'estimationSchema' },
  { path: '/maintenance', schema: 'maintenanceSchema' },
  { path: '/itemOut', schema: 'itemOutSchema' },
  { path: '/itemReturn', schema: 'itemReturnSchema' },
  { path: '/itemPurchase', schema: 'itemPurchaseSchema' },
  { path: '/payment', schema: 'paymentSchema' },
  { path: '/projects', schema: 'projectSchema' },
  { path: '/expense', schema: 'expenseSchema' },
  { path: '/cash', schema: 'cashSchema' },
  { path: '/planing', schema: 'planingSchema' },
  { path: '/purchaseOrder', schema: 'purchaseOrderSchema' },
  { path: '/dailyexpense', schema: 'dailyExpenseSchema' },
  { path: '/dailyreport', schema: 'dailyReportSchema' },
  { path: '/payRoll', schema: 'payRollSchema' },
];

simpleListRoutes.forEach(({ path: routePath, schema }) => {
  // These routes use: Route.route("/routePath", cors(...)).get(
  // or:               Route.route("/routePath").get(
  const marker1 = `Route.route("${routePath}",`;
  const marker2 = `Route.route("${routePath}")`;
  
  let routeIdx = content.indexOf(marker1);
  if (routeIdx === -1) routeIdx = content.indexOf(marker2);
  if (routeIdx === -1) { console.log(`  SKIP (not found): ${routePath}`); return; }

  const nextRoute = content.indexOf('\nRoute.route(', routeIdx + 10);
  const routeBlock = content.slice(routeIdx, nextRoute > 0 ? nextRoute : routeIdx + 500);
  
  if (routeBlock.includes('req.query.branchId') || routeBlock.includes('branchFilter')) {
    console.log(`  SKIP (already patched): ${routePath}`);
    return;
  }

  // Pattern: Schema\n      .find()\n  (with various indentations)
  const newBlock = routeBlock.replace(
    new RegExp(`(await ${schema}\n\\s*\\.find\\()\\)`, 'g'),
    `$1req.query.branchId && req.query.branchId !== 'ALL' ? { branchId: req.query.branchId } : {})`
  ).replace(
    new RegExp(`(${schema}\n\\s*\\.find\\()\\)`, 'g'),
    `$1req.query.branchId && req.query.branchId !== 'ALL' ? { branchId: req.query.branchId } : {})`
  );

  if (newBlock !== routeBlock) {
    content = content.slice(0, routeIdx) + newBlock + content.slice(nextRoute > 0 ? nextRoute : routeIdx + routeBlock.length);
    changes++;
    console.log(`  PATCHED: ${routePath}`);
  } else {
    console.log(`  NO MATCH: ${routePath} (may use different pattern or already OK)`);
  }
});

// ──────────────────────────────────────────────────────────────────────────────
// Write & verify
// ──────────────────────────────────────────────────────────────────────────────
if (content !== originalContent) {
  fs.writeFileSync(ROUTES_PATH, content, 'utf8');
  console.log(`\nDone! Applied ${changes} patches to routes/Routes.js`);
} else {
  console.log('\nNo changes made (all already patched or patterns not matched).');
}
