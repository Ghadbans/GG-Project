const fs = require('fs');

let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', 'utf8');

// 1. Rename component
code = code.replace(/MaintenanceViewInformation/g, 'MaintenanceOrderViewInformation');

// 2. The sidebar data fetching. In the original, it fetches `/maintenance-Information?limit=1000&summary=true`.
// Let's replace it with `/technician-maintenance-Information?limit=1000&summary=true` and pass `technician` if the user is a technician.
// Wait, we need to know if the user is a technician.
// The rule: "the users that have access throw the grant access and there user name is like the user name is assigned in the maintenace fall on the the rules of the technician"
// But for the SIDEBAR fetch, how do we know if they are a technician before looking at the specific record?
// Generally, if they have `Maintenance-Order` but NOT `Maintenance`? Or maybe we pass `technician=${user.data.employeeName}` if their role is 'User'?
// Actually, the user said: "office users are the users that have access throw the grant access to enter the module maintenance order and there user name is not assigned in the maintenane job card"
// This means the filter depends on the record! But for the *list* on the left of the view screen, what should they see?
// "this users they onlyh see the miantenance orders that is still open or pending of the maintenance to remind them"
// So the list should show ALL Open/Pending if office user, or ONLY THEIR Open/Pending if technician.
// Let's implement that in the frontend data fetch in `MaintenanceOrderAdmin.js` and `MaintenanceOrderViewInformation.js`.

// For now, I'll just write a script to do the replacement later.
fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', code);
