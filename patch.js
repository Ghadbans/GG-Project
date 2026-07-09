const fs = require('fs');
let code = fs.readFileSync('server/routes/Routes.js', 'utf8');
code = code.replace(/req\.query\.summary !== 'false'; \/\/ DEFAULT TO TRUE/g, "req.query.summary === 'true';");
const heavyExclusions = '"-items -image -qrCode -attachments -signature -products -logo -thumbnail -documents -history -payments -expenseInformation -maintenanceInformation -itemInformation -itemOuts -itemReturns -invoices -planings -comments -notifications -receipt -customerImage"';
code = code.split('.select(' + heavyExclusions + ')').join('');
fs.writeFileSync('server/routes/Routes.js', code);
