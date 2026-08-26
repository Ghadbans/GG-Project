const fs = require('fs');
let code = fs.readFileSync('server/routes/maintenanceRoutes.js', 'utf8');

const newRoute = `
Route.route('/technician-maintenance-Information').get(async (req, res) => {
  try {
    const { page = 1, limit = 100, search = '', technician } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    // Filter strictly by the technician's name
    const query = { technicianAssign: technician };
    
    if (search) {
      // Clean string replace for search
      const escapedSearch = search.trim().replace(/[.*+?^$\{()|[\\]\\]/g, '\\\\$&');
      const regex = new RegExp(escapedSearch, 'i');
      query.$or = [
        ...(!isNaN(Number(search)) ? [{ serviceNumber: Number(search) }] : []),
        { serviceName: regex },
        { status: regex },
        { brand: regex },
        { model: regex },
        { serialNo: regex },
        { note: regex },
        { actionTaken: regex },
        { defectDescription: regex },
        { 'customerName.customerName': regex },
        { 'customerName.customerPhone': regex },
      ].filter(condition => condition !== null);
    }
    
    const itemI = await maintenanceSchema.find(query).sort({ _id: -1 }).allowDiskUse(true).skip(skip).limit(Number(limit)).lean();
    const totalItem = await maintenanceSchema.countDocuments(query);

    res.status(200).json({ itemI, totalItem, totalPages: Math.ceil(totalItem / Number(limit)) });
  } catch (error) {
    console.error('Error fetching technician-maintenance-Information:', error);
    res.status(500).json({ message: error.message });
  }
});

`;

// Safely split and insert
const parts = code.split('Route.route("/maintenance-Information").get');
if (parts.length === 2) {
  code = parts[0] + newRoute + 'Route.route("/maintenance-Information").get' + parts[1];
  fs.writeFileSync('server/routes/maintenanceRoutes.js', code);
  console.log('Successfully inserted route.');
} else {
  console.log('Could not find split point.');
}
