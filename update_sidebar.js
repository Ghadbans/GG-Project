const fs = require('fs');
let code = fs.readFileSync('src/js/component/SidebarDash.js', 'utf8');

// Insert filter
const filterInsertion = `const MaintenanceInfo = grantAccess.filter((row) => row.moduleName === "Maintenance" && row.access.readM === true);
    const MaintenanceOrderInfo = grantAccess.filter((row) => row.moduleName === "Maintenance-Order" && row.access.readM === true);`;
code = code.replace(`const MaintenanceInfo = grantAccess.filter((row) => row.moduleName === "Maintenance" && row.access.readM === true);`, filterInsertion);

// Insert buttons
const buttonInsertion = `<ListItemButton disabled={loadingAccess || (user.data?.userName !== 'GG' && MaintenanceInfo.length === 0)} sx={{ color: 'gray' }} component={NavLink} to="/MaintenanceViewAdmin" onClick={handleNavClick} style={isActive('/MaintenanceViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <ListItemIcon sx={{ color: 'gray' }} style={isActive('/MaintenanceViewAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
                <EngineeringIcon />
              </ListItemIcon>
              <ListItemText primary="Maintenance" />
            </ListItemButton>
            <ListItemButton disabled={loadingAccess || (user.data?.userName !== 'GG' && MaintenanceOrderInfo.length === 0)} sx={{ color: 'gray' }} component={NavLink} to="/MaintenanceOrderAdmin" onClick={handleNavClick} style={isActive('/MaintenanceOrderAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <ListItemIcon sx={{ color: 'gray' }} style={isActive('/MaintenanceOrderAdmin') ? { backgroundColor: '#30368a', color: 'white' } : null}>
                <EngineeringIcon />
              </ListItemIcon>
              <ListItemText primary="Maintenance Order" />
            </ListItemButton>`;

code = code.replace(/<ListItemButton[^>]*to="\/MaintenanceViewAdmin"[\s\S]*?<\/ListItemButton>/, buttonInsertion);

fs.writeFileSync('src/js/component/SidebarDash.js', code);
