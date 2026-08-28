const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', 'utf8');

const targetStr = "axios.get(`${ENDPOINT_URL}/maintenance?summary=true`),";
const replaceStr = `
          // Dynamically fetch technician filtered list for sidebar
          axios.get(\`\${ENDPOINT_URL}/technician-maintenance-Information?summary=true&limit=1000&technician=\${encodeURIComponent(user?.data?.userName || '')}&isOffice=\${user?.data?.grantAccess?.some(r => r.moduleName === "Maintenance" && r.access.readM) || grantAccess?.some(r => r.moduleName === "Maintenance" && r.access.readM) || user?.data?.role === 'CEO'}\`),
`.trim() + ',';

code = code.replace(targetStr, replaceStr);

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', code);
console.log('Fixed sidebar fetch to use technician route');
