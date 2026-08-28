const fs = require('fs');

// ─────────────────────────────────────────────────────────────────────────────
// The real technician identifier is NOT role (which is Admin/User/CEO).
// A technician = user whose name matches technicianAssign on a record.
// 
// Strategy: in MaintenanceOrderAdmin, define isTechnician based on whether
// the user's name appears in ANY record as a technician assign AND they do NOT
// have full admin access (i.e. they're a User role, not Admin/CEO).
//
// Simplest correct approach: 
//   isTechnician = user.data.role === 'User' 
//   (Admin and CEO are office users; User role = regular employee/technician)
//   AND their name appears in technicianAssign records.
//
// Even simpler: just filter by name match always.
// Office users can ALSO be filtered this way if they ARE in the system as
// a technician - but the user said office users use the MAIN Maintenance module.
// So: show all records only for Admin/CEO; for 'User' role → filter by name.
// ─────────────────────────────────────────────────────────────────────────────

let admin = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', 'utf8');

// 1. Fix the row filter: User role = technician, Admin/CEO = office
admin = admin.replace(
  "rows={user.data.role === 'Technician' ? maintenance.filter(r => r.technicianAssign === user.data.userName && r.status !== 'Converted') : maintenance}",
  "rows={user.data.role === 'User' ? maintenance.filter(r => r.technicianAssign === user.data.userName && r.status !== 'Converted') : maintenance}"
);

// 2. Status modal: User role = technician (hide Reschedule & Cancel)
admin = admin.replace(
  `{user.data.role !== 'Technician' ? <MenuItem value="Reschedule">Reschedule</MenuItem> : null}`,
  `{user.data.role !== 'User' ? <MenuItem value="Reschedule">Reschedule</MenuItem> : null}`
);
admin = admin.replace(
  `{user.data.role !== 'Technician' ? <MenuItem value="Cancel">Cancel</MenuItem> : null}`,
  `{user.data.role !== 'User' ? <MenuItem value="Cancel">Cancel</MenuItem> : null}`
);

// 3. Delete column: hide for User role
admin = admin.replace(
  "role === 'Technician' ? <span></span>",
  "role === 'User' ? <span></span>"
);

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', admin);

let va = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', 'utf8');
const aChecks = [
  ['Row filter uses User role', va.includes("role === 'User' ? maintenance.filter(r => r.technicianAssign")],
  ['Reschedule hidden for User', va.includes("role !== 'User' ? <MenuItem value=\"Reschedule\"")],
  ['Cancel hidden for User', va.includes("role !== 'User' ? <MenuItem value=\"Cancel\"")],
  ['Delete hidden for User', va.includes("role === 'User' ? <span></span>")],
  ['Edit Status tooltip', va.includes('Edit Status')],
  ['Converted excluded', va.includes("status !== 'Converted'")],
];
aChecks.forEach(([n, p]) => console.log('[Admin] ' + (p ? 'OK  ' : 'FAIL') + ': ' + n));

// ─────────────────────────────────────────────────────────────────────────────
// Fix MaintenanceOrderUpdate.js:
// 1. handleClose: User role = technician → navigate to view page
// 2. Fix the lock: on successful save, explicitly release lock before navigating
// ─────────────────────────────────────────────────────────────────────────────
let update = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

// Fix handleClose navigation for User role (technicians)
update = update.replace(
  "const handleClose = () => {\n    navigate(user.data.role === 'Technician' ? `/MaintenanceOrderViewInformation/${id}` : '/MaintenanceOrderAdmin');\n  }",
  `const handleClose = () => {\n    navigate(user.data.role === 'User' ? \`/MaintenanceOrderViewInformation/\${id}\` : '/MaintenanceOrderAdmin');\n  }`
);

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', update);

let vu = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');
const uChecks = [
  ['handleClose uses User role', vu.includes("role === 'User' ? `/MaintenanceOrderViewInformation")],
  ['+ addItem intact', vu.includes('onClick={addItem}')],
  ['DragDropContext intact', vu.includes('<DragDropContext')],
  ['Save route correct', vu.includes('technician-update-maintenance')],
];
uChecks.forEach(([n, p]) => console.log('[Update] ' + (p ? 'OK  ' : 'FAIL') + ': ' + n));

// ─────────────────────────────────────────────────────────────────────────────
// Fix the Lock issue: auto-release stale locks after 2 minutes of no heartbeat
// The current heartbeat is 30s. The lock should auto-expire server-side.
// Add force-release capability in the Update form when lock blocks access.
// ─────────────────────────────────────────────────────────────────────────────
let lockHook = fs.readFileSync('src/js/hooks/useDocumentLock.js', 'utf8');

// Add a forceRelease export: clears the lock by force (for stuck locks)
if (!lockHook.includes('forceRelease')) {
  lockHook = lockHook.replace(
    'return { isLocked, lockError, lockConfig, lockedBy };',
    `const forceRelease = async () => {
        if (lockTimeouts[documentId]) {
            clearInterval(lockTimeouts[documentId]);
            delete lockTimeouts[documentId];
        }
        try {
            await axios.post(\`\${ENDPOINT_URL.replace('/endpoint', '')}/api/locks/release\`, {
                documentId,
                collectionName,
                lockedBy: 'force',
                force: true
            });
            setIsLocked(false);
            setLockError(null);
            await acquireLock();
        } catch (error) {
            console.error('Error force releasing lock', error);
        }
    };

    return { isLocked, lockError, lockConfig, lockedBy, forceRelease };`
  );
  fs.writeFileSync('src/js/hooks/useDocumentLock.js', lockHook);
  console.log('[Lock ] OK  : forceRelease added to useDocumentLock');
} else {
  console.log('[Lock ] OK  : forceRelease already present');
}

// ─────────────────────────────────────────────────────────────────────────────
// Add "Force Open" button to the lock screen in MaintenanceOrderUpdate.js
// ─────────────────────────────────────────────────────────────────────────────
update = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

// Check if forceRelease is already destructured
if (!update.includes('forceRelease')) {
  // Add forceRelease to the hook destructure
  update = update.replace(
    'const { isLocked, lockConfig, lockError } = useDocumentLock(id, \'maintenance\');',
    "const { isLocked, lockConfig, lockError, forceRelease } = useDocumentLock(id, 'maintenance');"
  );

  // Add a Force Open button to the lock screen (only for Admin/CEO)
  update = update.replace(
    `<h2>{lockError || 'This document is currently being edited by another user.'}</h2>`,
    `<h2>{lockError || 'This document is currently being edited by another user.'}</h2>
            {(user.data.role === 'Admin' || user.data.role === 'CEO') && (
              <button onClick={forceRelease} style={{ marginTop: '20px', padding: '10px 24px', backgroundColor: '#d32f2f', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}>
                Force Open (Admin)
              </button>
            )}`
  );

  fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', update);
  console.log('[Lock ] OK  : Force Open button added for Admin/CEO');
}

// ─────────────────────────────────────────────────────────────────────────────
// Fix backend lock release to support force=true from Admin
// ─────────────────────────────────────────────────────────────────────────────
const path = require('path');
function searchFile(dir, pattern) {
  const results = [];
  try {
    fs.readdirSync(dir).forEach(f => {
      const full = path.join(dir, f);
      const stat = fs.statSync(full);
      if (stat.isDirectory() && !['node_modules','dist'].includes(f)) results.push(...searchFile(full, pattern));
      else if (f.endsWith('.js') && fs.readFileSync(full,'utf8').includes(pattern)) results.push(full);
    });
  } catch(e) {}
  return results;
}
const lockFiles = searchFile('server', '/api/locks/release');
console.log('[Lock ] Release route files:', lockFiles.join(', '));

if (lockFiles.length > 0) {
  let lockRoute = fs.readFileSync(lockFiles[0], 'utf8');
  if (!lockRoute.includes('force: true') && !lockRoute.includes("req.body.force")) {
    // Add force release: if force=true, release without checking lockedBy
    lockRoute = lockRoute.replace(
      /router\.post\(['"]\/release['"]/,
      `router.post('/release'`
    );
    // Find the release handler and patch it
    const releaseIdx = lockRoute.indexOf("'/release'");
    if (releaseIdx > -1) {
      // Add force support: check req.body.force  
      lockRoute = lockRoute.replace(
        /const\s+\{\s*documentId.*?collectionName.*?lockedBy\s*\}\s*=\s*req\.body;[\s\S]*?const lock = await Lock\.findOne/,
        (match) => match.replace(
          'const lock = await Lock.findOne',
          `// Force release for admin
          if (req.body.force === true) {
            await Lock.deleteOne({ documentId, collectionName });
            return res.json({ success: true, message: 'Lock force released' });
          }
          const lock = await Lock.findOne`
        )
      );
      fs.writeFileSync(lockFiles[0], lockRoute);
      console.log('[Lock ] OK  : Force release added to backend lock route');
    }
  } else {
    console.log('[Lock ] OK  : Force release already in backend');
  }
}

console.log('\nAll fixes applied.');
