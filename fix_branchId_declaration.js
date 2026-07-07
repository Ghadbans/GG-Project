/**
 * fix_branchId_declaration.js
 * 
 * Finds every create-* route that uses `branchId ? { branchId }` in a .findOne() call
 * but doesn't have `const branchId` declared — and injects the declaration.
 */

const fs = require('fs');
const path = require('path');

const ROUTES_PATH = path.join(__dirname, 'routes', 'Routes.js');
let content = fs.readFileSync(ROUTES_PATH, 'utf8');
const original = content;
let changes = 0;

// The 9 create routes that had findOne() patched with branchId
const targetRoutes = [
  '/create-invoice',
  '/create-payment',
  '/create-purchase',
  '/create-estimation',
  '/create-pos',
  '/create-projects',
  '/create-expense',
  '/create-maintenance',
  '/create-itemPurchase',
];

targetRoutes.forEach(routePath => {
  const marker = `Route.route("${routePath}")`;
  const routeIdx = content.indexOf(marker);
  if (routeIdx === -1) { console.log(`  SKIP (not found): ${routePath}`); return; }

  // Find the end of this route block
  const nextRouteIdx = content.indexOf('\nRoute.route(', routeIdx + marker.length);
  const end = nextRouteIdx > 0 ? nextRouteIdx : routeIdx + 5000;
  const block = content.slice(routeIdx, end);

  // Check: does this block use branchId in a findOne call?
  if (!block.includes('branchId ? { branchId }') && !block.includes('branchId ? {branchId}')) {
    console.log(`  SKIP (no branchId findOne): ${routePath}`);
    return;
  }

  // Check: is const branchId already declared?
  if (block.includes('const branchId') || block.includes('let branchId')) {
    console.log(`  SKIP (already declared): ${routePath}`);
    return;
  }

  // Find the findOne() that uses branchId — inject the declaration just before it
  // Look for the line with `branchId ? { branchId }` and inject declaration 1 line above
  const findOneIdx = block.indexOf('branchId ? { branchId }');
  if (findOneIdx === -1) { console.log(`  SKIP (pattern not found): ${routePath}`); return; }

  // Walk back to the start of that line
  let lineStart = findOneIdx;
  while (lineStart > 0 && block[lineStart - 1] !== '\n') lineStart--;

  // Get indentation of that line
  let indent = '';
  let i = lineStart;
  while (i < block.length && (block[i] === ' ' || block[i] === '\t')) { indent += block[i]; i++; }

  // Build the injection
  const injection = `${indent}const branchId = req.body.branchId || req.query.branchId;\n`;

  // Insert it right before the findOne line
  const newBlock = block.slice(0, lineStart) + injection + block.slice(lineStart);
  content = content.slice(0, routeIdx) + newBlock + content.slice(end);
  changes++;
  console.log(`  PATCHED: ${routePath}`);
});

if (content !== original) {
  fs.writeFileSync(ROUTES_PATH, content, 'utf8');
  console.log(`\nDone! Injected branchId declaration in ${changes} routes.`);
} else {
  console.log('\nNo changes made.');
}
