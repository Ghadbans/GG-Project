/**
 * fix_branchId_array.js
 * 
 * The frontend interceptor sometimes sends branchId as a duplicate query param,
 * causing req.query.branchId to be an array like ['LUB', 'LUB'].
 * This breaks Mongoose's string cast validation.
 * 
 * Fix: globally replace every instance of:
 *   const branchId = req.query.branchId;
 * with the array-safe version:
 *   const rawBranchId = req.query.branchId;
 *   const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
 */

const fs = require('fs');
const path = require('path');

const ROUTES_PATH = path.join(__dirname, 'routes', 'Routes.js');
let content = fs.readFileSync(ROUTES_PATH, 'utf8');

const OLD = `const branchId = req.query.branchId;`;
const NEW = `const rawBranchId = req.query.branchId;\n      const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;`;

// Count occurrences before
const count = (content.match(/const branchId = req\.query\.branchId;/g) || []).length;

// Replace all occurrences (AllowMultiple)
content = content.split(OLD).join(NEW);

fs.writeFileSync(ROUTES_PATH, content, 'utf8');
console.log(`Done! Fixed ${count} occurrences of branchId array issue in routes/Routes.js`);
