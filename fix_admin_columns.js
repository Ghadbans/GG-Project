const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', 'utf8');

// Replace MaintenanceInfoV to check Maintenance-Order
code = code.replace(/moduleName === "Maintenance" && row\.access\.viewM/g, 'moduleName === "Maintenance-Order" && row.access.readM');
code = code.replace(/moduleName === "Maintenance" && row\.access\.editM/g, 'moduleName === "Maintenance-Order" && row.access.readM');

// Replace Eye icon link
code = code.replace(/\/MaintenanceViewInformation\/\$\{params\.row\._id\}/g, '/MaintenanceOrderUpdate/${params.row._id}');

// Replace Edit icon button
const editRegex = /\{\s*field:\s*'edit'[\s\S]*?handleOpenUpdate\(params\.row\._id\)[\s\S]*?<\/EditTooltip>\s*\)\s*\},/;
const editColumnNew = `{
      field: 'edit', headerName: 'Edit', width: 40, renderCell: (params) => (
        <EditTooltip title="Edit Order">
          <span>
            <IconButton disabled={params.row.status === 'Converted' || params.row.status === 'Close'}>
              <NavLink to={\`/MaintenanceOrderUpdate/\${params.row._id}\`} className='LinkName'>
                <EditIcon style={{ color: (params.row.status === 'Converted' || params.row.status === 'Close') ? 'lightgray' : 'gray' }} />
              </NavLink>
            </IconButton>
          </span>
        </EditTooltip>
      )
    },`;

code = code.replace(editRegex, editColumnNew);

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', code);
console.log('Fixed MaintenanceOrderAdmin columns');
