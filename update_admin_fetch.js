const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', 'utf8');

const oldFetch = "`${ENDPOINT_URL}/maintenance-Information?page=${page + 1}&limit=${limit}&search=${encodeURIComponent(searchTerm.trim())}&filterField=${encodeURIComponent(filterField.trim())}&filterValue=${encodeURIComponent(filterValue.trim())}`";
const newFetch = "`${ENDPOINT_URL}/technician-maintenance-Information?technician=${encodeURIComponent(user?.data?.userName || '')}&page=${page + 1}&limit=${limit}&search=${encodeURIComponent(searchTerm.trim())}`";

code = code.replace(oldFetch, newFetch);

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', code);
console.log('Updated MaintenanceOrderAdmin fetch route');
