const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', 'utf8');

const insertionStr = `
        const hasMainMaintenance = user?.data?.grantAccess?.some(row => row.moduleName === "Maintenance" && row.access.readM) || grantAccess?.some(row => row.moduleName === "Maintenance" && row.access.readM);
        const isOffice = (user?.data?.role === 'CEO' || hasMainMaintenance);
        const res = await axios.get(\`\${ENDPOINT_URL}/technician-maintenance-Information?limit=1000&summary=true&technician=\${encodeURIComponent(user?.data?.userName || '')}&isOffice=\${isOffice}\`);
`;

code = code.replace(
  /const res = await axios\.get\(`\$\{ENDPOINT_URL\}\/technician-maintenance-Information\?limit=1000&summary=true&technician=\$\{encodeURIComponent\(user\?\.data\?\.userName \|\| ''\)\}`\);/,
  insertionStr.trim()
);

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', code);
console.log('Fixed view sidebar query');
