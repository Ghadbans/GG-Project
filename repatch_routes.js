const fs = require('fs');
const file = 'E:/globalgateapi2/routes/Routes.js';
let content = fs.readFileSync(file, 'utf8');

// TASK 4: List Endpoints (GET) HQ fallback
const getRoutes = [
  '/invoice-Information',
  '/expense-Information',
  '/maintenance-Information'
];

for (const route of getRoutes) {
  // Let's find the exact string where branchId is extracted and replace it.
  const oldBranchLogic = `if (branchId && branchId !== 'ALL') query.branchId = branchId;`;
  const newBranchLogic = `if (branchId && branchId !== 'ALL') {
      if (branchId === 'HQ') {
        query.$or = [{ branchId: 'HQ' }, { branchId: { $exists: false } }, { branchId: null }];
      } else {
        query.branchId = branchId;
      }
    }`;

  // We need to only replace this logic INSIDE the specific route.
  const routeHead = `Route.route("${route}")`;
  const startIndex = content.indexOf(routeHead);
  if (startIndex !== -1) {
    const nextRouteIndex = content.indexOf('Route.route', startIndex + 1);
    const block = content.substring(startIndex, nextRouteIndex !== -1 ? nextRouteIndex : content.length);
    const updatedBlock = block.replace(oldBranchLogic, newBranchLogic);
    content = content.substring(0, startIndex) + updatedBlock + content.substring(nextRouteIndex !== -1 ? nextRouteIndex : content.length);
  }
}

fs.writeFileSync(file, content, 'utf8');
console.log('Repatched list routes');
