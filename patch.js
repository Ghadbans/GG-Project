
const fs = require('fs');

const loginadmin = fs.readFileSync('src/js/Loginadmin.js', 'utf8');
const target = \\t\t\t\t\tif (myAccess && myAccess.branches && myAccess.branches.length > 0) {
\t\t\t\t\t\tconst myBranches = allBranches.filter(b => myAccess.branches.includes(b.branchId));
\t\t\t\t\t\tsetAvailableBranches(myBranches.length > 0 ? myBranches : [{ branchId: 'HQ', branchName: 'HeadQuarters' }]);
\t\t\t\t\t\tif (myBranches.length > 0) setSelectedBranch(myBranches[0].branchId);
\t\t\t\t\t} else {
\t\t\t\t\t\tsetAvailableBranches([{ branchId: 'HQ', branchName: 'HeadQuarters' }]);
\t\t\t\t\t\tsetSelectedBranch('HQ');
\t\t\t\t\t}\;
const replacement = \\t\t\t\t\tif (myAccess && myAccess.branches && myAccess.branches.length > 0) {
\t\t\t\t\t\tconst myBranches = allBranches.filter(b => myAccess.branches.includes(b.branchName) || myAccess.branches.includes(b.branchId));
\t\t\t\t\t\tif (myBranches.length > 0) {
\t\t\t\t\t\t\tsetAvailableBranches(myBranches);
\t\t\t\t\t\t\tsetSelectedBranch(myBranches[0].branchId);
\t\t\t\t\t\t} else {
\t\t\t\t\t\t\tsetIsErrorLoading(true);
\t\t\t\t\t\t\tsetErrorMsg('Your account has not been assigned to any branch. Please contact your administrator.');
\t\t\t\t\t\t\treturn;
\t\t\t\t\t\t}
\t\t\t\t\t} else {
\t\t\t\t\t\tsetIsErrorLoading(true);
\t\t\t\t\t\tsetErrorMsg('Your account has not been assigned to any branch. Please contact your administrator.');
\t\t\t\t\t\treturn;
\t\t\t\t\t}\;

fs.writeFileSync('src/js/Loginadmin.js', loginadmin.replace(target, replacement));
console.log('Loginadmin.js done');

const loginemployee = fs.readFileSync('src/js/Loginemployee.js', 'utf8');
fs.writeFileSync('src/js/Loginemployee.js', loginemployee.replace(target, replacement));
console.log('Loginemployee.js done');

