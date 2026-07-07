/**
 * patch_create_branchId.js
 * 
 * For every create-* route in Routes.js:
 * 1. If branchId is NOT destructured from req.body, inject it via req.body.branchId
 * 2. In every schema.create({...}) payload, append branchId if missing
 * 3. In every schema.add({...}) payload, append branchId if missing
 * 
 * Strategy: use targeted string replacements scoped to each route block.
 * Routes that use req.body directly (i.e., .create(req.body)) already pass branchId — skip those.
 */

const fs = require('fs');
const path = require('path');

const ROUTES_PATH = path.join(__dirname, 'routes', 'Routes.js');
let content = fs.readFileSync(ROUTES_PATH, 'utf8');
let totalChanges = 0;

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Find the character index of the Nth occurrence of a string inside `haystack`
 */
function findNth(haystack, needle, n) {
  let idx = -1;
  for (let i = 0; i < n; i++) {
    idx = haystack.indexOf(needle, idx + 1);
    if (idx === -1) return -1;
  }
  return idx;
}

/**
 * Extract the route handler block for a given route path.
 * Returns { start, end } character positions in `content`.
 */
function getRouteBlock(routePath) {
  const marker = `Route.route("${routePath}")`;
  const markerIdx = content.indexOf(marker);
  if (markerIdx === -1) return null;
  
  // Find the next Route.route( that isn't part of this one
  const searchFrom = markerIdx + marker.length;
  const nextRouteIdx = content.indexOf('\nRoute.route(', searchFrom);
  const end = nextRouteIdx === -1 ? content.length : nextRouteIdx;
  return { start: markerIdx, end };
}

/**
 * Given a route block string, inject `branchId` into every .create({ or .add({ payload
 * that doesn't already contain it, and that doesn't use req.body directly.
 */
function injectBranchIdInPayloads(block) {
  let changed = false;
  
  // Match .create({ ... }) — may be multiline, finds the matching closing })
  // Strategy: find .create({ and then find the matching }), inject branchId before it
  // Only match explicit object payloads (not req.body)
  let result = block;
  
  // Pattern: .create({  or  .add({
  const callPattern = /\.(create|add)\(\{/g;
  let match;
  const insertions = []; // collect { pos, text } to insert, apply in reverse order
  
  while ((match = callPattern.exec(result)) !== null) {
    const openBrace = match.index + match[0].length - 1; // position of {
    
    // Walk forward to find the matching }
    let depth = 0;
    let closeBrace = -1;
    for (let i = openBrace; i < result.length; i++) {
      if (result[i] === '{') depth++;
      else if (result[i] === '}') {
        depth--;
        if (depth === 0) { closeBrace = i; break; }
      }
    }
    if (closeBrace === -1) continue;
    
    const payload = result.slice(openBrace, closeBrace + 1);
    
    // Skip if it's .create(req.body) - payload would just be req.body, not an object literal
    // Also skip if branchId already in payload
    if (payload.includes('branchId')) continue;
    
    // Skip if the payload seems to be a variable (starts with identifier, no colons)
    // A literal object payload will have key: value patterns
    const inner = payload.slice(1, -1).trim();
    if (!inner.includes(':') && !inner.includes(',')) continue; // probably a variable ref
    
    // Insert ,\n      branchId before the closing }
    insertions.push({ pos: closeBrace, text: ',\n      branchId' });
    changed = true;
  }
  
  // Apply insertions in reverse order so positions don't shift
  insertions.reverse().forEach(({ pos, text }) => {
    result = result.slice(0, pos) + text + result.slice(pos);
  });
  
  return { block: result, changed };
}

/**
 * Ensure branchId is extracted from req.body somewhere in the block.
 * If req.body is destructured, add branchId to the destructure list.
 * If not, inject `const branchId = req.body.branchId;` after `try {` or at top of handler.
 */
function ensureBranchIdExtracted(block) {
  if (block.includes('branchId')) return { block, changed: false }; // already there
  
  // Case 1: destructuring pattern like const { a, b, c } = req.body
  const destructureMatch = block.match(/const\s*\{([^}]+)\}\s*=\s*req\.body/);
  if (destructureMatch) {
    const oldDestructure = destructureMatch[0];
    const fields = destructureMatch[1];
    const newDestructure = oldDestructure.replace(
      '} = req.body',
      ', branchId } = req.body'
    );
    return { block: block.replace(oldDestructure, newDestructure), changed: true };
  }
  
  // Case 2: no destructure — inject after the handler function opening or after `try {`
  const tryIdx = block.indexOf('try {');
  if (tryIdx !== -1) {
    const insertAt = tryIdx + 'try {'.length;
    const newBlock = block.slice(0, insertAt) + '\n    const branchId = req.body.branchId;' + block.slice(insertAt);
    return { block: newBlock, changed: true };
  }
  
  return { block, changed: false };
}

// ─────────────────────────────────────────────────────────────────────────────
// Main: collect all create-* routes and patch them
// ─────────────────────────────────────────────────────────────────────────────
const lines = content.split('\n');
const createRoutes = [];
lines.forEach((l, i) => {
  if (l.trim().startsWith('Route.route') && l.includes('create-') && l.includes('.post')) {
    const m = l.match(/"([^"]+)"/);
    if (m) createRoutes.push(m[1]);
  }
});

console.log(`Found ${createRoutes.length} create-* routes to process...\n`);

createRoutes.forEach(routePath => {
  const bounds = getRouteBlock(routePath);
  if (!bounds) {
    console.log(`  SKIP (not found): ${routePath}`);
    return;
  }
  
  let block = content.slice(bounds.start, bounds.end);
  let changed = false;
  
  // Step 1: ensure branchId is extracted from req.body
  const extracted = ensureBranchIdExtracted(block);
  if (extracted.changed) {
    block = extracted.block;
    changed = true;
    console.log(`  [+destructure] ${routePath}`);
  }
  
  // Step 2: inject branchId into .create({}) payloads
  const injected = injectBranchIdInPayloads(block);
  if (injected.changed) {
    block = injected.block;
    changed = true;
    console.log(`  [+create payload] ${routePath}`);
  }
  
  if (changed) {
    content = content.slice(0, bounds.start) + block + content.slice(bounds.end);
    totalChanges++;
  } else {
    console.log(`  [OK] ${routePath}`);
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// Write patched file
// ─────────────────────────────────────────────────────────────────────────────
fs.writeFileSync(ROUTES_PATH, content, 'utf8');
console.log(`\nDone! Patched ${totalChanges} routes in routes/Routes.js`);
