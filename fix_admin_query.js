const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', 'utf8');

// We need to determine if they are an Office user.
// Office users have access to "Maintenance" module or are CEO.
// Let's add a check right after grantAccess is loaded or inside fetchItems.
// Actually, `user.data.role === 'CEO'` is a guaranteed office user.
// What about `grantAccess`? `grantAccess` is in state.
// Let's pass `role=${user?.data?.role}` and `isCEO=${user?.data?.role === 'CEO'}` and in the backend, we can just not filter by technician if they are CEO.
// But what if they are an Office user with role "User"?
// In `MaintenanceOrderAdmin.js`, we can do:
// const hasMainMaintenance = grantAccess.some(row => row.moduleName === "Maintenance" && row.access.readM);
// const officeQuery = (user?.data?.role === 'CEO' || hasMainMaintenance) ? '&isOffice=true' : '';

const insertionStr = `
      const hasMainMaintenance = grantAccess.some(row => row.moduleName === "Maintenance" && row.access.readM);
      const isOffice = (user?.data?.role === 'CEO' || hasMainMaintenance);
      const res = await axios.get(\`\${ENDPOINT_URL}/technician-maintenance-Information?technician=\${encodeURIComponent(user?.data?.userName || '')}&isOffice=\${isOffice}&page=\${page + 1}&limit=\${limit}&search=\${encodeURIComponent(searchTerm.trim())}\`);
`;

code = code.replace(
  /const res = await axios\.get\(`\$\{ENDPOINT_URL\}\/technician-maintenance-Information\?technician=\$\{encodeURIComponent\(user\?\.data\?\.userName \|\| ''\)\}&page=\$\{page \+ 1\}&limit=\$\{limit\}&search=\$\{encodeURIComponent\(searchTerm\.trim\(\)\)\}`\);/,
  insertionStr.trim()
);

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', code);
console.log('Fixed backend query to include isOffice');
