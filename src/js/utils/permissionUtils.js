import { cachedGet } from './apiCache';
import { ENDPOINT_URL } from '../apiConfig';

/**
 * Normalizes module names to handle variations (e.g. 'Pay-Roll' vs 'payroll', 'Point-Of-Sell' vs 'pos')
 */
export function normalizeModuleName(name = '') {
  const n = String(name).trim().toLowerCase().replace(/[\s_-]+/g, '');
  if (n === 'pos' || n === 'pointofsell' || n === 'pointofsale') return 'point-of-sell';
  if (n === 'payroll' || n === 'proll') return 'pay-roll';
  if (n === 'fleet' || n === 'fleetmanagement') return 'fleet management';
  if (n === 'maintenanceorder' || n === 'maintenanceorders') return 'maintenance-order';
  if (n === 'blockfactory' || n === 'block') return 'block-factory';
  if (n === 'blockmixer') return 'block-mixer';
  if (n === 'itempurchase' || n === 'ipurchase') return 'item-purchase';
  if (n === 'itemout') return 'item-out';
  if (n === 'itemreturn') return 'item-return';
  if (n === 'purchaseorder' || n === 'po') return 'purchase-order';
  if (n === 'grantaccess' || n === 'rolepermission') return 'grant-access';
  if (n === 'dailyexpense' || n === 'dailyexpenses' || n === 'expenses' || n === 'expense') return 'expenses';
  return name.trim();
}

/**
 * Check if the user has permission to perform an action on a module.
 * 
 * STRICT ACCESS CONTROL RULE:
 * - Superuser: ONLY userName === 'GG' bypasses permissions.
 * - ALL other users (including Admin, CEO, Manager, Technician, Staff) MUST
 *   have explicit permission granted in the Grant Access module.
 * 
 * @param {Object} user - Redux currentUser object (user.data)
 * @param {Array} grantAccessModules - Array of module access objects for the user
 * @param {String} moduleName - Target module (e.g. 'Customer', 'Invoice', 'Item')
 * @param {String} action - 'read' | 'view' | 'create' | 'edit' | 'delete'
 * @returns {Boolean}
 */
export function canAccessModule(user, grantAccessModules = [], moduleName = '', action = 'read') {
  if (!user) return false;
  const userName = user.userName || user.data?.userName || '';
  if (userName === 'GG') return true;

  if (!moduleName) return true;
  if (!Array.isArray(grantAccessModules) || grantAccessModules.length === 0) return false;

  const targetNormalized = normalizeModuleName(moduleName).toLowerCase();
  const mod = grantAccessModules.find(m => {
    const currentNormalized = normalizeModuleName(m.moduleName || m.name || '').toLowerCase();
    return currentNormalized === targetNormalized;
  });

  if (!mod || !mod.access) return false;

  const act = String(action).toLowerCase();
  if (act === 'read' || act === 'view') {
    return Boolean(mod.access.readM || mod.access.viewM);
  }
  if (act === 'create') {
    return Boolean(mod.access.createM);
  }
  if (act === 'edit' || act === 'update') {
    return Boolean(mod.access.editM);
  }
  if (act === 'delete') {
    return Boolean(mod.access.deleteM);
  }

  return Boolean(mod.access.readM || mod.access.viewM);
}

/**
 * Route to Module & Action Mapping
 */
const ROUTE_PERMISSION_MAP = [
  // Customers
  { pattern: /^\/customerviewadmin/i, module: 'Customer', action: 'read' },
  { pattern: /^\/customerformupdate/i, module: 'Customer', action: 'edit' },
  { pattern: /^\/customerinformationview/i, module: 'Customer', action: 'view' },
  { pattern: /^\/customerform/i, module: 'Customer', action: 'create' },

  // Items & Store
  { pattern: /^\/itemviewadmin/i, module: 'Item', action: 'read' },
  { pattern: /^\/storeitemdisplay/i, module: 'Item', action: 'read' },
  { pattern: /^\/itemformupdate/i, module: 'Item', action: 'edit' },
  { pattern: /^\/itemformclone/i, module: 'Item', action: 'create' },
  { pattern: /^\/iteminfo/i, module: 'Item', action: 'view' },
  { pattern: /^\/itemcommentform/i, module: 'Item', action: 'edit' },
  { pattern: /^\/itemform/i, module: 'Item', action: 'create' },

  // Item Out / Return / Purchase / PO
  { pattern: /^\/itemoutviewform/i, module: 'Item-Out', action: 'create' },
  { pattern: /^\/itemoutviewupdate/i, module: 'Item-Out', action: 'edit' },
  { pattern: /^\/itemoutviewadmin/i, module: 'Item-Out', action: 'read' },

  { pattern: /^\/itemreturnviewform/i, module: 'Item-Return', action: 'create' },
  { pattern: /^\/itemreturnupdateform/i, module: 'Item-Return', action: 'edit' },
  { pattern: /^\/itemreturnadminview/i, module: 'Item-Return', action: 'read' },

  { pattern: /^\/itempurchaseviewform/i, module: 'Item-Purchase', action: 'create' },
  { pattern: /^\/itempurchaseupdateform/i, module: 'Item-Purchase', action: 'edit' },
  { pattern: /^\/itempurchaseviewadmin/i, module: 'Item-Purchase', action: 'read' },

  { pattern: /^\/convertpo/i, module: 'Purchase-Order', action: 'edit' },
  { pattern: /^\/purchaseupdateorder/i, module: 'Purchase-Order', action: 'edit' },
  { pattern: /^\/purchaseorderinfoview/i, module: 'Purchase-Order', action: 'view' },
  { pattern: /^\/purchaseorder/i, module: 'Purchase-Order', action: 'create' },
  { pattern: /^\/purchaseorderviewadmin/i, module: 'Purchase-Order', action: 'read' },

  // Quotations / Estimates
  { pattern: /^\/estimateinvoiceformupdate/i, module: 'Estimate', action: 'edit' },
  { pattern: /^\/estimateinvoiceform/i, module: 'Estimate', action: 'create' },
  { pattern: /^\/estimateformclone/i, module: 'Estimate', action: 'create' },
  { pattern: /^\/estimateviewadminall/i, module: 'Estimate', action: 'view' },
  { pattern: /^\/estimateviewadmin/i, module: 'Estimate', action: 'read' },

  // Invoices
  { pattern: /^\/invoiceformupdate/i, module: 'Invoice', action: 'edit' },
  { pattern: /^\/invoiceform/i, module: 'Invoice', action: 'create' },
  { pattern: /^\/invoiceviewadminall/i, module: 'Invoice', action: 'view' },
  { pattern: /^\/invoiceviewadmin/i, module: 'Invoice', action: 'read' },
  { pattern: /^\/recuringinvoiceviewadmin/i, module: 'Invoice', action: 'read' },
  { pattern: /^\/retainerinvoiceview/i, module: 'Invoice', action: 'read' },

  // Payments
  { pattern: /^\/paymentinformationform/i, module: 'Payment', action: 'create' },
  { pattern: /^\/paymentinformationupdate/i, module: 'Payment', action: 'edit' },
  { pattern: /^\/paymentinformationview/i, module: 'Payment', action: 'view' },
  { pattern: /^\/paymentview/i, module: 'Payment', action: 'read' },

  // Projects
  { pattern: /^\/projectupdateview/i, module: 'Project', action: 'edit' },
  { pattern: /^\/projectviewinformation/i, module: 'Project', action: 'view' },
  { pattern: /^\/projectform/i, module: 'Project', action: 'create' },
  { pattern: /^\/projectphase/i, module: 'Project', action: 'view' },
  { pattern: /^\/projectviewadmin/i, module: 'Project', action: 'read' },

  // Purchases Request
  { pattern: /^\/purchaseformupdate/i, module: 'Purchase', action: 'edit' },
  { pattern: /^\/purchasesformview/i, module: 'Purchase', action: 'create' },
  { pattern: /^\/purchasesviewadminall/i, module: 'Purchase', action: 'view' },
  { pattern: /^\/purchasesviewadmin/i, module: 'Purchase', action: 'read' },

  // Maintenance & Maintenance Orders
  { pattern: /^\/maintenanceorderupdate/i, module: 'Maintenance-Order', action: 'edit' },
  { pattern: /^\/maintenanceorderviewinformation/i, module: 'Maintenance-Order', action: 'view' },
  { pattern: /^\/technicianstorecatalog/i, module: 'Maintenance-Order', action: 'read' },
  { pattern: /^\/technicianstoredisplay/i, module: 'Maintenance-Order', action: 'read' },
  { pattern: /^\/maintenanceorderadmin/i, module: 'Maintenance-Order', action: 'read' },

  { pattern: /^\/maintenanceupdateview/i, module: 'Maintenance', action: 'edit' },
  { pattern: /^\/maintenanceviewinformation/i, module: 'Maintenance', action: 'view' },
  { pattern: /^\/maintenanceformclone/i, module: 'Maintenance', action: 'create' },
  { pattern: /^\/maintenanceformview/i, module: 'Maintenance', action: 'create' },
  { pattern: /^\/maintenanceviewadmin/i, module: 'Maintenance', action: 'read' },

  // Daily Expenses
  { pattern: /^\/dailyexpenseupdate/i, module: 'Expenses', action: 'edit' },
  { pattern: /^\/dailyexpenseform/i, module: 'Expenses', action: 'create' },
  { pattern: /^\/dailyexpenses/i, module: 'Expenses', action: 'read' },
  { pattern: /^\/expensesviewadmin/i, module: 'Expenses', action: 'read' },

  // Rates
  { pattern: /^\/rateviewadmin/i, module: 'Rate', action: 'read' },

  // Employees
  { pattern: /^\/employeeattendance/i, module: 'Employee', action: 'read' },
  { pattern: /^\/employeeupdateview/i, module: 'Employee', action: 'edit' },
  { pattern: /^\/employeeformview/i, module: 'Employee', action: 'create' },
  { pattern: /^\/employeeplaning/i, module: 'Employee', action: 'read' },
  { pattern: /^\/employeeviewadminall/i, module: 'Employee', action: 'read' },
  { pattern: /^\/tewmviewadmin/i, module: 'Employee', action: 'read' },

  // Payroll
  { pattern: /^\/payrollupdateformview/i, module: 'Pay-Roll', action: 'edit' },
  { pattern: /^\/payrollviewinformation/i, module: 'Pay-Roll', action: 'view' },
  { pattern: /^\/payrollformview/i, module: 'Pay-Roll', action: 'create' },
  { pattern: /^\/payrollviewadmin/i, module: 'Pay-Roll', action: 'read' },

  // Suppliers
  { pattern: /^\/supplierformupdate/i, module: 'Supplier', action: 'edit' },
  { pattern: /^\/supplierviewinformation/i, module: 'Supplier', action: 'view' },
  { pattern: /^\/supplierform/i, module: 'Supplier', action: 'create' },
  { pattern: /^\/supplieradminview/i, module: 'Supplier', action: 'read' },

  // POS
  { pattern: /^\/shopposupdateform/i, module: 'Point-Of-Sell', action: 'edit' },
  { pattern: /^\/shopposform/i, module: 'Point-Of-Sell', action: 'create' },
  { pattern: /^\/sellshopinvoiceview/i, module: 'Point-Of-Sell', action: 'view' },
  { pattern: /^\/reportpos/i, module: 'Point-Of-Sell', action: 'read' },
  { pattern: /^\/pointofsale/i, module: 'Point-Of-Sell', action: 'read' },

  // Reports
  { pattern: /^\/reportsviewadmin/i, module: 'Reports', action: 'read' },

  // Block Factory & Mixer
  { pattern: /^\/blockproduction/i, module: 'Block-Factory', action: 'read' },
  { pattern: /^\/blocksales/i, module: 'Block-Factory', action: 'read' },
  { pattern: /^\/blocktracking/i, module: 'Block-Factory', action: 'read' },
  { pattern: /^\/blockconfig/i, module: 'Block-Factory', action: 'read' },
  { pattern: /^\/workerpayment/i, module: 'Block-Factory', action: 'read' },
  { pattern: /^\/blockdamage/i, module: 'Block-Factory', action: 'read' },
  { pattern: /^\/blockmixer/i, module: 'Block-Mixer', action: 'read' },
  { pattern: /^\/blockfactorylayout/i, module: 'Block-Factory', action: 'read' },

  // Fleet Management
  { pattern: /^\/fleetformupdate/i, module: 'Fleet Management', action: 'edit' },
  { pattern: /^\/fleetformview/i, module: 'Fleet Management', action: 'create' },
  { pattern: /^\/fleetviewadmin/i, module: 'Fleet Management', action: 'read' },

  // Settings & Access Control
  { pattern: /^\/rolepermission/i, module: 'Grant-Access', action: 'read', ggOnly: true },
  { pattern: /^\/grantaccess/i, module: 'Grant-Access', action: 'read', ggOnly: true },
  { pattern: /^\/useraccount/i, module: 'User Account', action: 'read', ceoOnly: true },
  { pattern: /^\/companyprofile/i, module: 'Company Profile', action: 'read', ceoOnly: true },
  { pattern: /^\/branchmanagement/i, module: 'Branch Management', action: 'read', ceoOnly: true },
];

/**
 * Returns required permission rule for a given pathname
 */
export function getRoutePermission(pathname = '') {
  const cleanPath = '/' + String(pathname).replace(/^[/#]+/, '').toLowerCase();
  for (const rule of ROUTE_PERMISSION_MAP) {
    if (rule.pattern.test(cleanPath)) {
      return rule;
    }
  }
  return null;
}

/**
 * Load user's grantAccess modules array
 */
export async function fetchUserGrantAccess(userId) {
  if (!userId) return [];
  try {
    const res = await cachedGet(`${ENDPOINT_URL}/grantAccess`);
    const userAccess = res?.data?.data?.find(row => row.userID === userId);
    return Array.isArray(userAccess?.modules) ? userAccess.modules : [];
  } catch (err) {
    console.error('Error fetching grantAccess in permissionUtils:', err);
    return [];
  }
}
