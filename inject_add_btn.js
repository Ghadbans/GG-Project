const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', 'utf8');

const injectionPoint = "<Box sx={{ height: 600, width: '100%' }}>";
const replacement = `
  <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
    <ViewTooltip>
      <span>
        <IconButton disabled={MaintenanceInfoC.length === 0}>
          <NavLink to={'/MaintenanceFormView'} className='LinkName'>
            <span className='btnCustomerAdding'>
              <Add />
            </span>
          </NavLink>
        </IconButton>
      </span>
    </ViewTooltip>
  </section>
  <Box sx={{ height: 600, width: '100%' }}>
`;

if (code.includes(injectionPoint)) {
  code = code.replace(injectionPoint, replacement);
  fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', code);
  console.log('Injected add button successfully.');
} else {
  console.log('Could not find injection point');
}
