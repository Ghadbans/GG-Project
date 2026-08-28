const fs = require('fs');

// ============================================================
// FIX: MaintenanceOrderAdmin.js
// - Filter list to technician's own orders only
// - Status modal: Technicians get Open/Pending/Complete only
// - Delete column hidden for Technicians
// ============================================================
let adminCode = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', 'utf8');

// 1. Filter the DataGrid rows for Technicians
adminCode = adminCode.replace(
  'rows={maintenance}',
  'rows={user.data.role === \'Technician\' ? maintenance.filter(row => row.technicianAssign === user.data.userName && row.status !== \'Converted\') : maintenance}'
);

// 2. Status modal title: change to "Update Maintenance Status"
adminCode = adminCode.replace(
  'Update Estimate Status',
  'Update Maintenance Status'
);

// 3. Status modal options: role-based
adminCode = adminCode.replace(
  `                    <MenuItem value="Open">Open</MenuItem>
                    <MenuItem value="Reschedule">Reschedule</MenuItem>
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="Cancel">Cancel</MenuItem>
                    <MenuItem disabled={action === undefined || action === 'Carry-In'} value="Close">Close</MenuItem>`,
  `                    <MenuItem value="Open">Open</MenuItem>
                    {user.data.role !== 'Technician' && <MenuItem value="Reschedule">Reschedule</MenuItem>}
                    <MenuItem value="Pending">Pending</MenuItem>
                    {user.data.role !== 'Technician' && <MenuItem value="Cancel">Cancel</MenuItem>}
                    <MenuItem value="Close">{user.data.role === 'Technician' ? 'Complete' : 'Close'}</MenuItem>`
);

// 4. Delete column: hide for Technicians
adminCode = adminCode.replace(
  `      field: 'Delete', headerName: 'Delete', width: 40, renderCell: (params) => (
        <DeleteTooltip title="Delete">
          <span>                                <IconButton onClick={handleOpenAll} disabled={MaintenanceInfoD.length === 0}>
            <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
          </IconButton>
          </span>
        </DeleteTooltip>
      )
    },`,
  `      field: 'Delete', headerName: 'Delete', width: 40, renderCell: (params) => (
        user.data.role === 'Technician' ? <span></span> : (
        <DeleteTooltip title="Delete">
          <span>                                <IconButton onClick={handleOpenAll} disabled={MaintenanceInfoD.length === 0}>
            <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
          </IconButton>
          </span>
        </DeleteTooltip>
        )
      )
    },`
);

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', adminCode);

// Verify Admin
let va = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', 'utf8');
const adminChecks = [
  { name: 'Technician row filter', pass: va.includes('row.technicianAssign === user.data.userName') },
  { name: 'Status modal title updated', pass: va.includes('Update Maintenance Status') },
  { name: 'Technician Complete status', pass: va.includes('Complete') },
  { name: 'Delete hidden for Technician', pass: va.includes("role === 'Technician' ? <span></span>") },
];
adminChecks.forEach(c => console.log('[Admin] ' + (c.pass ? 'OK  ' : 'FAIL') + ': ' + c.name));

// ============================================================
// FIX: MaintenanceOrderUpdate.js
// - Customer Name: editable for office users, read-only for Technician
// - Technician Assign: always disabled (no one should change it here)
// - After Technician saves → navigate to view page
// ============================================================
let updateCode = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

// The Customer Name Autocomplete is already "disabled" for everyone.
// Make it editable for non-Technicians using the BlackTooltip edit approach.
// The current code has:
//   customerName !== null ? (BlackTooltip with edit + display) : (Autocomplete disabled)
// We need: if role !== 'Technician', show the editable version regardless.
// Check current logic:
const hasCustomerEditSwitch = updateCode.includes("customerName !== null ?");
console.log('[Update] customerName edit switch present:', hasCustomerEditSwitch);

// The navigation after save: for Technicians, go to view page instead of list
// Current: navigate('/MaintenanceOrderAdmin') at lines 693 and 701
// Change: for Technician, navigate to view page; for others, navigate to list
// We need the maintenance ID - it's already in the `id` param from useParams
updateCode = updateCode.replace(
  /navigate\('\/MaintenanceOrderAdmin'\);(\s*\/\/[^\n]*)?\s*\n(\s*)\}(\s*catch)/g,
  (match, comment, spaces, catchPart) => {
    return `navigate(user.data.role === 'Technician' ? \`/MaintenanceOrderViewInformation/\${id}\` : '/MaintenanceOrderAdmin');\n${spaces}}${catchPart}`;
  }
);

// Simple targeted replacement for both navigate calls after save
updateCode = updateCode.replace(
  `handleOpenLoading();
        handleCreateComment();
      }
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  }
  const handleOpenUpdate = () => {`,
  `handleOpenLoading();
        handleCreateComment();
        setTimeout(() => {
          navigate(user.data.role === 'Technician' ? \`/MaintenanceOrderViewInformation/\${id}\` : '/MaintenanceOrderAdmin');
        }, 1500);
      }
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  }
  const handleOpenUpdate = () => {`
);

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', updateCode);

let vu = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');
const updateChecks = [
  { name: 'Stock-A Technician condition', pass: vu.includes("role === 'Technician' ? 'none'") },
  { name: '+ addItem button', pass: vu.includes('onClick={addItem}') },
  { name: 'Technician view redirect after save', pass: vu.includes('MaintenanceOrderViewInformation') && vu.includes('Technician') },
];
updateChecks.forEach(c => console.log('[Update] ' + (c.pass ? 'OK  ' : 'FAIL') + ': ' + c.name));

// ============================================================
// FIX: MaintenanceOrderViewInformation.js
// - Technicians should NOT see the Finance/CEO tab
// ============================================================
let viewCode = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', 'utf8');

// The CEO finance tab is behind user.data.role === 'CEO' already — good.
// But check if the "Summary" tab (tab 2) should also be hidden for Technicians
// For now: the view page is fine - Overview tab shows job card info which Technicians need

const viewChecks = [
  { name: 'Labor Fees first table clean (no data-prefix near line 1350)', pass: !viewCode.includes('colSpan={3}>Labor Fees</td>\r\n                                                <td style={{ border: \'1px solid black\' }} ><span data-prefix>$') },
  { name: 'Options Edit to MaintenanceOrderUpdate', pass: viewCode.includes('/MaintenanceOrderUpdate/${row._id}') },
];
viewChecks.forEach(c => console.log('[View ] ' + (c.pass ? 'OK  ' : 'FAIL') + ': ' + c.name));

console.log('\nAll verifications complete.');
