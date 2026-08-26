const fs = require('fs');

let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', 'utf8');

// The view fetches data using: 
// const res = await axios.get(`${ENDPOINT_URL}/maintenance-Information?limit=1000&summary=true`);
// Let's replace it with technician endpoint
code = code.replace(
  /\$\{ENDPOINT_URL\}\/maintenance-Information\?limit=1000&summary=true/g,
  "${ENDPOINT_URL}/technician-maintenance-Information?limit=1000&summary=true&technician=${encodeURIComponent(user?.data?.userName || '')}"
);

// We need to make sure the Left Sidebar links back to MaintenanceOrderViewInformation instead of MaintenanceViewInformation!
// <NavLink to={`/MaintenanceViewInformation/${row._id}`} ...
code = code.replace(/\/MaintenanceViewInformation\/\$\{row\._id\}/g, '/MaintenanceOrderViewInformation/${row._id}');

// Remove convert and edit buttons. Wait, the user said Office Users should only view them and close them from main Maintenance.
// The Technician can edit from MaintenanceOrderUpdate.
// What buttons are in MaintenanceViewInformation? Edit, Convert, Option dropdown...
// Let's just remove the Option dropdown completely for now in the Technician View!
const optionDropdownRegex = /<Dropdown>[\s\S]*?<\/Dropdown>/g;
code = code.replace(optionDropdownRegex, '');

// Also remove the explicit Edit button if it exists outside Dropdown
code = code.replace(/<button[^>]*>Edit<\/button>/gi, '');
code = code.replace(/<button[^>]*>Convert<\/button>/gi, '');

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', code);
console.log('Fixed MaintenanceOrderViewInformation data fetch and links');
