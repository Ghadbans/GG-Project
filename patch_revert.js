const fs = require('fs');

const file = 'E:/globalgateapi2/routes/Routes.js';
let content = fs.readFileSync(file, 'utf8');

// The regex we used before to wipe it out was:
// /const last = await ([a-zA-Z0-9_]+)\.findOne\(\{\}\)/g
// So we can search for that and replace it.

const invoiceBlock = `const rawBranchId = req.query.branchId;
    const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
    const query = {};
    if (branchId && branchId !== 'ALL') {
      if (branchId === 'HQ') {
        query.$or = [{ branchId: 'HQ' }, { branchId: { $exists: false } }, { branchId: null }];
      } else {
        query.branchId = branchId;
      }
    }
    const last = await invoiceSchema.findOne(query)`;

const defaultBlock = `const rawBranchId = req.query.branchId;
    const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
    const query = branchId && branchId !== 'ALL' ? { branchId } : {};
    const last = await $1.findOne(query)`;

// Only patch if it is inside get-last-saved routes
const routes = content.split('Route.route("/get-last-saved-');

for (let i = 1; i < routes.length; i++) {
  if (routes[i].startsWith('invoice"')) {
    routes[i] = routes[i].replace(/const last = await invoiceSchema\.findOne\(\{\}\)/, invoiceBlock);
  } else {
    routes[i] = routes[i].replace(/const last = await ([a-zA-Z0-9_]+)\.findOne\(\{\}\)/, defaultBlock);
  }
}

content = routes[0] + routes.slice(1).map(r => 'Route.route("/get-last-saved-' + r).join('');

fs.writeFileSync(file, content, 'utf8');
console.log('Reverted branchId filtering in Routes.js');
