const fs = require('fs');

let content = fs.readFileSync('src/js/component/BranchSwitcher.js', 'utf8');

const targetRegex = /const myBranches = allBranches\.filter\(b => myAccess\.branches\.includes\(b\.branchName\) \|\| myAccess\.branches\.includes\(b\.branchId\)\);\s*finalBranches = myBranches\.length > 0 \? myBranches : \[\{ branchId: 'HQ', branchName: 'HeadQuarters' \}\];\s*\} else \{\s*finalBranches = \[\{ branchId: 'HQ', branchName: 'HeadQuarters' \}\];\s*\}\s*\}\s*setAvailableBranches\(finalBranches\);\s*\/\/ Enforce branch validity in localStorage\s*const currentSelected = localStorage\.getItem\('selectedBranch'\) \|\| 'HQ';\s*const isValid = finalBranches\.some\(b => b\.branchId === currentSelected\);\s*if \(\!isValid && finalBranches\.length > 0\) \{\s*localStorage\.setItem\('selectedBranch', finalBranches\[0\]\.branchId\);\s*window\.location\.reload\(\);\s*\}/;

const replacement = \const myBranches = allBranches.filter(b => myAccess.branches.includes(b.branchName) || myAccess.branches.includes(b.branchId));
            finalBranches = myBranches.length > 0 ? myBranches : [];
          } else {
            finalBranches = [];
          }
        }
        
        // Active Eviction: if a regular user has 0 branches assigned (e.g. revoked), force logout
        if (finalBranches.length === 0 && (!empName || empName.trim().toUpperCase() !== 'GG')) {
            localStorage.clear();
            window.location.href = '/';
            return;
        }

        setAvailableBranches(finalBranches);
        
        // Enforce branch validity in localStorage
        const currentSelected = localStorage.getItem('selectedBranch') || 'HQ';
        const isValid = finalBranches.some(b => b.branchId === currentSelected);
        if (!isValid && finalBranches.length > 0) {
          localStorage.setItem('selectedBranch', finalBranches[0].branchId);
          window.location.reload();
        }\;

if (targetRegex.test(content)) {
    content = content.replace(targetRegex, replacement);
    fs.writeFileSync('src/js/component/BranchSwitcher.js', content);
    console.log('BranchSwitcher.js done');
} else {
    console.log('Target not found in BranchSwitcher');
}
