const fs = require('fs');
let code = fs.readFileSync('server/routes/maintenanceRoutes.js', 'utf8');

const replacement = `
    const { page = 1, limit = 100, search = '', technician, isOffice } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const query = { status: { $nin: ['Close', 'Converted', 'Cancel'] } };
    if (isOffice !== 'true' && technician) {
      query.technicianAssign = technician;
    }
`;

code = code.replace(
  /const \{ page = 1, limit = 100, search = '', technician \} = req\.query;\s*const skip = \(Number\(page\) - 1\) \* Number\(limit\);\s*\/\/ Filter strictly by the technician's name\s*const query = \{ technicianAssign: technician, status: \{ \$nin: \['Close', 'Converted', 'Cancel'\] \} \};/g,
  replacement.trim()
);

fs.writeFileSync('server/routes/maintenanceRoutes.js', code);
console.log('Fixed backend query');
