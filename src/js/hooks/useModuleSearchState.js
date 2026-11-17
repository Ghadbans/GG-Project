import { useState, useCallback } from 'react';

const ROUTE_MODULE_PREFIXES = [
  { prefix: '/Invoice', module: 'invoice' },
  { prefix: '/MakePurchaseConvertToProject', module: 'estimate' },
  { prefix: '/MakePurchase', module: 'invoice' },
  { prefix: '/Project', module: 'project' },
  { prefix: '/Customer', module: 'customer' },
  { prefix: '/PurchaseOrder', module: 'purchaseOrder' },
  { prefix: '/ConvertPoToIP', module: 'purchaseOrder' },
  { prefix: '/PurchaseForm', module: 'purchaseOrder' }, // Note: PurchaseFormUpdate is /PurchaseFormUpdate
  { prefix: '/Purchases', module: 'purchase' },
  { prefix: '/ConvertToEstimate', module: 'purchase' },
  { prefix: '/ConvertToInvoice', module: 'purchase' },
  { prefix: '/MaintenanceOrder', module: 'maintenanceOrder' },
  { prefix: '/TechnicianStoreCatalog', module: 'maintenanceOrder' },
  { prefix: '/Maintenance', module: 'maintenance' },
  { prefix: '/Estimate', module: 'estimate' },
  { prefix: '/ItemOut', module: 'itemOut' },
  { prefix: '/ItemReturn', module: 'itemReturn' },
  { prefix: '/ItemPurchase', module: 'itemPurchase' },
  { prefix: '/Item', module: 'item' },
  { prefix: '/DailyExpense', module: 'expense' },
  { prefix: '/CategoryViewDailyExpenses', module: 'expense' },
  { prefix: '/ExpensesViewAdmin', module: 'expense' },
  { prefix: '/Supplier', module: 'supplier' },
  { prefix: '/PointOfSale', module: 'pos' },
  { prefix: '/StoreItemDisplay', module: 'pos' },
  { prefix: '/TechnicianStoreDisplay', module: 'pos' },
  { prefix: '/ReportPos', module: 'pos' },
  { prefix: '/SellShopInvoiceView', module: 'pos' },
  { prefix: '/ShopPos', module: 'pos' },
  { prefix: '/PayRoll', module: 'payroll' },
  { prefix: '/Fleet', module: 'fleet' },
  { prefix: '/TewmViewAdmin', module: 'team' },
  { prefix: '/Employee', module: 'team' },
  { prefix: '/Payment', module: 'payment' },
  { prefix: '/Recuring', module: 'recurringInvoice' },
  { prefix: '/Recurring', module: 'recurringInvoice' },
  { prefix: '/Retainer', module: 'retainerInvoice' },
  { prefix: '/InspectionReport', module: 'inspectionReport' },
  { prefix: '/Block', module: 'blockFactory' },
  { prefix: '/WorkerPaymentView', module: 'blockFactory' },
  { prefix: '/AdminHome', module: 'dashboard' },
];

export function getModuleKeyForPath(pathname) {
  const cleanPath = String(pathname || '').trim();
  if (!cleanPath || cleanPath === '/') return 'home';
  if (cleanPath.startsWith('/PurchaseFormUpdate')) return 'purchase';
  if (cleanPath.startsWith('/PurchaseUpdateOrder')) return 'purchaseOrder';
  for (const entry of ROUTE_MODULE_PREFIXES) {
    if (cleanPath.startsWith(entry.prefix)) {
      return entry.module;
    }
  }
  return cleanPath.split('/')[1] || 'other';
}

const moduleSearchStore = {
  moduleKey: null,
  searchTerm: '',
  filterField: '',
  filterValue: '',
  statusFilter: 'ALL',
  page: 0
};

export function syncModuleRoute(pathname) {
  const nextModule = getModuleKeyForPath(pathname);
  if (moduleSearchStore.moduleKey && moduleSearchStore.moduleKey !== nextModule) {
    moduleSearchStore.moduleKey = nextModule;
    moduleSearchStore.searchTerm = '';
    moduleSearchStore.filterField = '';
    moduleSearchStore.filterValue = '';
    moduleSearchStore.statusFilter = 'ALL';
    moduleSearchStore.page = 0;
  } else if (!moduleSearchStore.moduleKey) {
    moduleSearchStore.moduleKey = nextModule;
  }
}

export function clearModuleSearchStore() {
  moduleSearchStore.searchTerm = '';
  moduleSearchStore.filterField = '';
  moduleSearchStore.filterValue = '';
  moduleSearchStore.statusFilter = 'ALL';
  moduleSearchStore.page = 0;
}

/**
 * Persists searchTerm, filterField, filterValue, statusFilter, and page while
 * navigating within the same module, and automatically resets when switching modules.
 */
export function useModuleSearchState(moduleKey, defaults = {}) {
  const defaultSearch = defaults.searchTerm ?? '';
  const defaultFilterField = defaults.filterField ?? '';
  const defaultFilterValue = defaults.filterValue ?? '';
  const defaultStatus = defaults.statusFilter ?? 'ALL';
  const defaultPage = defaults.page ?? 0;

  const isSameModule = moduleSearchStore.moduleKey === moduleKey;
  if (!isSameModule) {
    moduleSearchStore.moduleKey = moduleKey;
    moduleSearchStore.searchTerm = defaultSearch;
    moduleSearchStore.filterField = defaultFilterField;
    moduleSearchStore.filterValue = defaultFilterValue;
    moduleSearchStore.statusFilter = defaultStatus;
    moduleSearchStore.page = defaultPage;
  }

  const [searchTerm, _setSearchTerm] = useState(
    isSameModule ? moduleSearchStore.searchTerm : defaultSearch
  );
  const [filterField, _setFilterField] = useState(
    isSameModule ? moduleSearchStore.filterField : defaultFilterField
  );
  const [filterValue, _setFilterValue] = useState(
    isSameModule ? moduleSearchStore.filterValue : defaultFilterValue
  );
  const [statusFilter, _setStatusFilter] = useState(
    isSameModule ? moduleSearchStore.statusFilter : defaultStatus
  );
  const [page, _setPage] = useState(
    isSameModule ? moduleSearchStore.page : defaultPage
  );

  const setSearchTerm = useCallback((val) => {
    _setSearchTerm((prev) => {
      const next = typeof val === 'function' ? val(prev) : val;
      moduleSearchStore.moduleKey = moduleKey;
      moduleSearchStore.searchTerm = next;
      return next;
    });
  }, [moduleKey]);

  const setFilterField = useCallback((val) => {
    _setFilterField((prev) => {
      const next = typeof val === 'function' ? val(prev) : val;
      moduleSearchStore.moduleKey = moduleKey;
      moduleSearchStore.filterField = next;
      return next;
    });
  }, [moduleKey]);

  const setFilterValue = useCallback((val) => {
    _setFilterValue((prev) => {
      const next = typeof val === 'function' ? val(prev) : val;
      moduleSearchStore.moduleKey = moduleKey;
      moduleSearchStore.filterValue = next;
      return next;
    });
  }, [moduleKey]);

  const setStatusFilter = useCallback((val) => {
    _setStatusFilter((prev) => {
      const next = typeof val === 'function' ? val(prev) : val;
      moduleSearchStore.moduleKey = moduleKey;
      moduleSearchStore.statusFilter = next;
      return next;
    });
  }, [moduleKey]);

  const setPage = useCallback((val) => {
    _setPage((prev) => {
      const next = typeof val === 'function' ? val(prev) : val;
      moduleSearchStore.moduleKey = moduleKey;
      moduleSearchStore.page = next;
      return next;
    });
  }, [moduleKey]);

  const resetSearchState = useCallback(() => {
    moduleSearchStore.moduleKey = moduleKey;
    moduleSearchStore.searchTerm = defaultSearch;
    moduleSearchStore.filterField = defaultFilterField;
    moduleSearchStore.filterValue = defaultFilterValue;
    moduleSearchStore.statusFilter = defaultStatus;
    moduleSearchStore.page = defaultPage;
    _setSearchTerm(defaultSearch);
    _setFilterField(defaultFilterField);
    _setFilterValue(defaultFilterValue);
    _setStatusFilter(defaultStatus);
    _setPage(defaultPage);
  }, [moduleKey, defaultSearch, defaultFilterField, defaultFilterValue, defaultStatus, defaultPage]);

  return {
    searchTerm,
    setSearchTerm,
    filterField,
    setFilterField,
    filterValue,
    setFilterValue,
    statusFilter,
    setStatusFilter,
    page,
    setPage,
    resetSearchState,
  };
}

export default useModuleSearchState;
