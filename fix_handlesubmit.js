const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');
const lines = code.split('\n');

// Replace the broken handleSubmit block (lines 728 to 742, 0-indexed)
const correctHandleSubmit = [
  '  const handleSubmit = async (e) => {',
  '    e.preventDefault();',
  '    const itemsWithoutData = items.map(({ data, contentType, ...rest }) => rest);',
  '    const data = {',
  '      customerName,',
  '      serviceDate,',
  '      actionTaken,',
  '      itemDescriptionInfo,',
  '      warranty,',
  '      defectDescription,',
  '      brand,',
  '      model, technicianAssign,',
  '      serviceNumber,',
  '      serviceName,',
  '      serialNo,',
  "      status: statusInfo || 'Open', action,",
  '      items: itemsWithoutData, adjustmentNumber, totalInvoice, subTotal,',
  '      note, totalLaborFees, laborPercentage, totalDiscount, laborDiscount, laborQty, totalLaborFeesGenerale, updateS: false',
  '    };',
  '    try {',
  '      const res = await axios.put(`${ENDPOINT_URL}/update-maintenance/${id}`, data);',
  '      if (res) {',
  '        handleCreateComment();',
  '        handleOpen();',
  '      }',
  '    } catch (error) {',
  '      console.error("Error updating maintenance:", error);',
  '      handleError();',
  '    }',
  '  }',
  '  const [sideBar, setSideBar] = React.useState(true);',
  '  const toggleDrawer = () => {',
  '    setSideBar(!sideBar);',
  '  };',
  "  const [search2, setSearch2] = useState('');",
];

lines.splice(728, 743 - 728, ...correctHandleSubmit);

const result = lines.join('\n');
fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', result);
console.log('File fixed. Total lines:', lines.length);

// Verify the fix
const v = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');
const vlines = v.split('\n');
const s = vlines.findIndex(l => l.includes('const handleSubmit'));
const e = vlines.findIndex(l => l.includes('const handleSearch2'));
console.log('handleSubmit at line:', s, ' | handleSearch2 at line:', e);
console.log('\nSection preview:');
vlines.slice(s, e + 2).forEach((l, i) => console.log((s + i) + ': ' + l));

// Check for the route
const hasNormalRoute = v.includes('/update-maintenance/${id}');
const hasTechRoute = v.includes('/technician-update-maintenance/');
console.log('\nRoute checks:');
console.log('Uses update-maintenance:', hasNormalRoute);
console.log('Uses technician route:', hasTechRoute, '(should be false)');
