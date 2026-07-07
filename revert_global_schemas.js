/**
 * revert_global_schemas.js
 * 
 * Reverts branchId .find() filtering for 4 global config schemas
 * that should be shared across ALL branches:
 *   - itemCodeSchema (category prefixes like CTN)
 *   - itemUnitSchema
 *   - grantAccessSchema
 *   - departmentSchema
 */

const fs = require('fs');
const path = require('path');

const ROUTES_PATH = path.join(__dirname, 'routes', 'Routes.js');
let content = fs.readFileSync(ROUTES_PATH, 'utf8');
const original = content;
let changes = 0;

const globalSchemas = [
  'itemCodeSchema',
  'itemUnitSchema',
  'grantAccessSchema',
  'departmentSchema',
];

const branchFilterExpr = `req.query.branchId && req.query.branchId !== 'ALL' ? { branchId: req.query.branchId } : {}`;

globalSchemas.forEach(schema => {
  // Match: await schema\n   SPACES   .find(BRANCH_FILTER_EXPR)
  const chained = new RegExp(
    `(await ${schema}\\r?\\n\\s+\\.find\\()${branchFilterExpr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)`,
    'g'
  );
  const newContent = content.replace(chained, `$1)`);
  if (newContent !== content) {
    content = newContent;
    changes++;
    console.log(`  REVERTED chained: ${schema}`);
  }

  // Match: await schema.find(BRANCH_FILTER_EXPR)  (inline form)
  const inline = new RegExp(
    `(await ${schema}\\.find\\()${branchFilterExpr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)`,
    'g'
  );
  const newContent2 = content.replace(inline, `$1)`);
  if (newContent2 !== content) {
    content = newContent2;
    changes++;
    console.log(`  REVERTED inline: ${schema}`);
  }
});

if (content !== original) {
  fs.writeFileSync(ROUTES_PATH, content, 'utf8');
  console.log(`\nDone! Reverted ${changes} occurrences in routes/Routes.js`);
} else {
  console.log('\nNo changes made — patterns not found (may already be reverted).');
}
