const fs = require('fs');
let code = fs.readFileSync('src/js/component/SidebarDash.js', 'utf8');

// Add import
code = code.replace("import SideMaintenance from './SideMaintenance';", "import SideMaintenance from './SideMaintenance';\nimport SideMaintenanceMenu from './SideMaintenanceMenu';");

// Replace Maintenance and Maintenance Order direct buttons
const badButtons = /<ListItemButton disabled=\{loadingAccess \|\| \(user\.data\?\.userName !== 'GG' && MaintenanceInfo\.length === 0\)\} sx=\{\{ color: 'gray' \}\} component=\{NavLink\} to="\/MaintenanceViewAdmin" onClick=\{handleNavClick\}[\s\S]*?<ListItemText primary="Maintenance Order" \/>\s*<\/ListItemButton>/m;

const newButton = `<ListItemButton disabled={loadingAccess || (user.data?.userName !== 'GG' && MaintenanceInfo.length === 0 && MaintenanceOrderInfo.length === 0)} sx={{ color: 'gray' }} onClick={() => handleShow(6)}>
              <ListItemIcon sx={{ color: 'gray' }} >
                <EngineeringIcon />
              </ListItemIcon>
              <ListItemText primary="Maintenance" />
            </ListItemButton>`;
            
code = code.replace(badButtons, newButton);

// Add show1 === 6 block
const show6Block = `      {
        show1 === 6 ?
          <div>
            <ListItemButton sx={{ color: 'gray' }} onClick={() => handleShow(1)}>
              <ListItemIcon sx={{ color: 'gray' }} >
                <Close />
              </ListItemIcon>
              <ListItemText primary="Close" />
            </ListItemButton>
            <Divider />
            <ListSubheader component="div" inset>
              Maintenance Menu
            </ListSubheader>
            <SideMaintenanceMenu onView={view} />
          </div>
          : null
      }`;

code = code.replace('</>', show6Block + '\n    </>');

fs.writeFileSync('src/js/component/SidebarDash.js', code);
