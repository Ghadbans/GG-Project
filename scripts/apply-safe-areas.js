const fs = require('fs');
const path = require('path');

const targetFiles = [
  'src/js/AdminView1/PageView/CustomerVIew/CustomerForm.js',
  'src/js/AdminView1/PageView/CustomerVIew/CustomerFormUpdate.js',
  'src/js/AdminView1/PageView/DailyExpenses/DailyExpenseForm.js',
  'src/js/AdminView1/PageView/DailyExpenses/DailyExpenseUpdate.js',
  'src/js/AdminView1/PageView/EstimateView/EstimateInvoiceForm.js',
  'src/js/AdminView1/PageView/EstimateView/EstimateInvoiceFormUpdate.js',
  'src/js/AdminView1/PageView/InvoiceView/InvoiceForm.js',
  'src/js/AdminView1/PageView/InvoiceView/InvoiceFormUpdate.js',
  'src/js/AdminView1/PageView/Payment/PaymentInformationForm.js',
  'src/js/AdminView1/PageView/Payment/PaymentInformationUpdate.js',
  'src/js/AdminView1/PageView/ItemView/ItemForm.js',
  'src/js/AdminView1/PageView/ItemView/ItemFormUpdate.js',
  'src/js/AdminView1/PageView/MaintenanceView/MaintenanceFormView.js',
  'src/js/AdminView1/PageView/MaintenanceView/MaintenanceUpdateView.js',
  'src/js/AdminView1/PageView/EmployeeView/EmployeeFormView.js',
  'src/js/AdminView1/PageView/EmployeeView/EmployeeUpdateView.js',
  'src/js/AdminView1/PageView/Supplier/SupplierForm.js',
  'src/js/AdminView1/PageView/Supplier/SupplierFormUpdate.js',
  'src/js/AdminView1/PageView/ProjectView/ProjectFormView.js',
  'src/js/AdminView1/PageView/ProjectView/ProjectUpdateView.js',
  'src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js',
  'src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js',
];

const root = path.join(__dirname, '..');

targetFiles.forEach(relPath => {
  const fullPath = path.join(root, relPath);
  if (!fs.existsSync(fullPath)) return;

  let content = fs.readFileSync(fullPath, 'utf8');

  // Replace py: 1.5 in the sticky mobile header with safe-area padding
  content = content.replace(/position:\s*'sticky',\s*top:\s*0,\s*zIndex:\s*1000,\s*backgroundColor:\s*'#30368a',\s*color:\s*'#ffffff',\s*px:\s*2,\s*py:\s*1\.5,/g, 
    "position: 'sticky', top: 0, zIndex: 1000, backgroundColor: '#30368a', color: '#ffffff', px: 2, pt: 'calc(10px + env(safe-area-inset-top, 0px))', pb: '10px',");

  // Also replace pb: 12 with safe area bottom
  content = content.replace(/backgroundColor:\s*'#F8FAFC',\s*pb:\s*12/g, 
    "backgroundColor: '#F8FAFC', pb: 'calc(90px + env(safe-area-inset-bottom, 0px))'");

  fs.writeFileSync(fullPath, content);
  console.log(`Updated safe area styles in: ${relPath}`);
});
