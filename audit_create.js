/**
 * audit_create_routes.js
 * Checks all create-* routes in Routes.js for:
 * D = branchId destructured from req.body
 * C = branchId present inside .create({...}) payload
 */
const fs = require('fs');
const content = fs.readFileSync('routes/Routes.js', 'utf8');
const lines = content.split('\n');

const createRoutes = [];
lines.forEach((l, i) => {
  if (l.trim().startsWith('Route.route') && l.includes('create-') && l.includes('.post')) {
    const m = l.match(/"([^"]+)"/);
    if (m) createRoutes.push({ name: m[1], line: i + 1 });
  }
});

createRoutes.forEach(r => {
  const start = r.line - 1;
  const end = lines.findIndex((l, i) => i > start + 3 && l.trim().startsWith('Route.route('));
  const block = lines.slice(start, end > 0 ? end : start + 80).join('\n');
  
  const hasDestructure = block.includes('branchId') && (block.includes('req.body') || block.includes('req.body.branchId'));
  
  // Check if branchId appears inside any .create({ block
  const createBlocks = block.match(/\.create\(\{[\s\S]*?\}\)/g) || [];
  const hasInCreate = createBlocks.some(b => b.includes('branchId'));
  
  const status = (hasDestructure ? 'D' : '_') + (hasInCreate ? 'C' : '_');
  if (status !== 'DC') {
    console.log('[' + status + '] NEEDS FIX: ' + r.name + ' (L' + r.line + ')');
  } else {
    console.log('[OK] ' + r.name);
  }
});
