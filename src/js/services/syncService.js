import axios from 'axios';
import db from '../dexieDb';

const BASE_URL = 'https://gg-project-production.up.railway.app/endpoint';

/**
 * Centralized Sync Service for Hybrid Architecture
 * Handles initial data sync and cache management
 */
class SyncService {
    constructor() {
        this.isSyncing = false;
        this.syncProgress = 0;
        this.syncCallbacks = [];
    }

    /**
     * Subscribe to sync progress updates
     */
    onSyncProgress(callback) {
        this.syncCallbacks.push(callback);
    }

    /**
     * Notify all subscribers of progress
     */
    notifyProgress(progress, message) {
        this.syncProgress = progress;
        this.syncCallbacks.forEach(callback => callback({ progress, message }));
    }

    /**
     * Initial sync - Fetch all data and store in IndexedDB
     * Called once on app startup
     */
    async initialSync() {
        if (this.isSyncing) {
            console.log('⏳ Sync already in progress...');
            return;
        }

        this.isSyncing = true;
        this.notifyProgress(0, 'Starting initial sync...');

        try {
            console.log('🔄 Starting initial data sync...');
            const startTime = Date.now();

            // Sync all data types in parallel for speed
            await Promise.all([
                this.syncItemPurchases(),
                this.syncItemOuts(),
                this.syncPOS(),
                this.syncItemReturns(),
                this.syncInvoices(),
                this.syncEstimates(),
                this.syncCustomers(),
                this.syncSuppliers(),
                this.syncProjects(),
                this.syncMaintenance(),
                this.syncEmployees(),
                this.syncPayroll(),
                this.syncRates(),
                this.syncUsers(),
                this.syncGrantAccess(),
                this.syncPurchaseOrders(),
                this.syncPayments(),
                this.syncCash(),
                this.syncDailyExpenses()
            ]);

            const duration = ((Date.now() - startTime) / 1000).toFixed(2);
            console.log(`✅ Initial sync complete in ${duration}s`);
            this.notifyProgress(100, 'Sync complete!');

            return true;
        } catch (error) {
            console.error('❌ Initial sync failed:', error);
            this.notifyProgress(0, 'Sync failed');
            throw error;
        } finally {
            this.isSyncing = false;
        }
    }

    /**
     * Sync Item Purchases
     */
    async syncItemPurchases() {
        try {
            this.notifyProgress(10, 'Syncing item purchases...');
            const response = await axios.get(`${BASE_URL}/itemPurchase`);
            const data = response.data.data || [];

            // Clear old cache and insert new data
            await db.itemPurchaseCache.clear();
            await db.itemPurchaseCache.bulkPut(data);

            // Update metadata
            await this.updateSyncMetadata('itemPurchaseCache', data.length);

            console.log(`✅ Synced ${data.length} item purchases`);
        } catch (error) {
            console.error('❌ Failed to sync item purchases:', error);
            throw error;
        }
    }

    /**
     * Sync Item Outs
     */
    async syncItemOuts() {
        try {
            this.notifyProgress(20, 'Syncing item outs...');
            const response = await axios.get(`${BASE_URL}/itemOut`);
            const data = response.data.data || [];

            await db.itemOutCache.clear();
            await db.itemOutCache.bulkPut(data);
            await this.updateSyncMetadata('itemOutCache', data.length);

            console.log(`✅ Synced ${data.length} item outs`);
        } catch (error) {
            console.error('❌ Failed to sync item outs:', error);
            throw error;
        }
    }

    /**
     * Sync POS
     */
    async syncPOS() {
        try {
            this.notifyProgress(30, 'Syncing POS data...');
            const response = await axios.get(`${BASE_URL}/pos`);
            const data = response.data.data || [];

            await db.posCache.clear();
            await db.posCache.bulkPut(data);
            await this.updateSyncMetadata('posCache', data.length);

            console.log(`✅ Synced ${data.length} POS records`);
        } catch (error) {
            console.error('❌ Failed to sync POS:', error);
            throw error;
        }
    }

    /**
     * Sync Item Returns
     */
    async syncItemReturns() {
        try {
            this.notifyProgress(40, 'Syncing item returns...');
            const response = await axios.get(`${BASE_URL}/itemReturn`);
            const data = response.data.data || [];

            await db.itemReturnCache.clear();
            await db.itemReturnCache.bulkPut(data);
            await this.updateSyncMetadata('itemReturnCache', data.length);

            console.log(`✅ Synced ${data.length} item returns`);
        } catch (error) {
            console.error('❌ Failed to sync item returns:', error);
            throw error;
        }
    }

    /**
     * Sync Invoices
     */
    async syncInvoices() {
        try {
            this.notifyProgress(50, 'Syncing invoices...');
            const response = await axios.get(`${BASE_URL}/invoice`);
            const data = response.data.data || [];

            await db.invoiceCache.clear();
            await db.invoiceCache.bulkPut(data);
            await this.updateSyncMetadata('invoiceCache', data.length);

            console.log(`✅ Synced ${data.length} invoices`);
        } catch (error) {
            console.error('❌ Failed to sync invoices:', error);
            // Non-critical, continue
        }
    }

    /**
     * Sync Estimates
     */
    async syncEstimates() {
        try {
            this.notifyProgress(60, 'Syncing estimates...');
            const response = await axios.get(`${BASE_URL}/estimate`);
            const data = response.data.data || [];

            await db.estimateCache.clear();
            await db.estimateCache.bulkPut(data);
            await this.updateSyncMetadata('estimateCache', data.length);

            console.log(`✅ Synced ${data.length} estimates`);
        } catch (error) {
            console.error('❌ Failed to sync estimates:', error);
        }
    }

    /**
     * Sync Customers
     */
    async syncCustomers() {
        try {
            this.notifyProgress(70, 'Syncing customers...');
            const response = await axios.get(`${BASE_URL}/customers`);
            const data = response.data.data || [];

            await db.customerCache.clear();
            await db.customerCache.bulkPut(data);
            await this.updateSyncMetadata('customerCache', data.length);

            console.log(`✅ Synced ${data.length} customers`);
        } catch (error) {
            console.error('❌ Failed to sync customers:', error);
        }
    }

    /**
     * Sync Suppliers
     */
    async syncSuppliers() {
        try {
            this.notifyProgress(80, 'Syncing suppliers...');
            const response = await axios.get(`${BASE_URL}/supplier`);
            const data = response.data.data || [];

            await db.supplierCache.clear();
            await db.supplierCache.bulkPut(data);
            await this.updateSyncMetadata('supplierCache', data.length);

            console.log(`✅ Synced ${data.length} suppliers`);
        } catch (error) {
            console.error('❌ Failed to sync suppliers:', error);
        }
    }

    /**
     * Sync Projects
     */
    async syncProjects() {
        try {
            this.notifyProgress(90, 'Syncing projects...');
            const response = await axios.get(`${BASE_URL}/project`);
            const data = response.data.data || [];

            await db.projectCache.clear();
            await db.projectCache.bulkPut(data);
            await this.updateSyncMetadata('projectCache', data.length);

            console.log(`✅ Synced ${data.length} projects`);
        } catch (error) {
            console.error('❌ Failed to sync projects:', error);
        }
    }

    /**
     * Sync Maintenance
     */
    async syncMaintenance() {
        try {
            this.notifyProgress(95, 'Syncing maintenance records...');
            const response = await axios.get(`${BASE_URL}/maintenance`);
            const data = response.data.data || [];

            await db.maintenanceCache.clear();
            await db.maintenanceCache.bulkPut(data);
            await this.updateSyncMetadata('maintenanceCache', data.length);

            console.log(`✅ Synced ${data.length} maintenance records`);
        } catch (error) {
            console.error('❌ Failed to sync maintenance:', error);
        }
    }

    /**
     * Update sync metadata
     */
    async updateSyncMetadata(tableName, recordCount) {
        await db.syncMetadata.put({
            tableName,
            lastSync: new Date().toISOString(),
            recordCount
        });
    }

    /**
     * Get last sync info
     */
    async getSyncInfo() {
        const metadata = await db.syncMetadata.toArray();
        return metadata;
    }

    /**
     * Check if initial sync is needed
     */
    async needsInitialSync() {
        const metadata = await db.syncMetadata.count();
        return metadata === 0;
    }

    /**
     * Sync Employees
     */
    async syncEmployees() {
        try {
            const response = await axios.get(`${BASE_URL}/employee`);
            const data = response.data.data || [];
            await db.employeeCache.clear();
            await db.employeeCache.bulkPut(data);
            await this.updateSyncMetadata('employeeCache', data.length);
            console.log(`✅ Synced ${data.length} employees`);
        } catch (error) {
            console.error('❌ Failed to sync employees:', error);
        }
    }

    /**
     * Sync Payroll
     */
    async syncPayroll() {
        try {
            const response = await axios.get(`${BASE_URL}/payroll`);
            const data = response.data.data || [];
            await db.payrollCache.clear();
            await db.payrollCache.bulkPut(data);
            await this.updateSyncMetadata('payrollCache', data.length);
            console.log(`✅ Synced ${data.length} payroll records`);
        } catch (error) {
            console.error('❌ Failed to sync payroll:', error);
        }
    }

    /**
     * Sync Rates
     */
    async syncRates() {
        try {
            const response = await axios.get(`${BASE_URL}/rate`);
            const data = response.data.data || [];
            await db.rateCache.clear();
            await db.rateCache.bulkPut(data);
            await this.updateSyncMetadata('rateCache', data.length);
            console.log(`✅ Synced ${data.length} rates`);
        } catch (error) {
            console.error('❌ Failed to sync rates:', error);
        }
    }

    /**
     * Sync Users
     */
    async syncUsers() {
        try {
            const response = await axios.get(`${BASE_URL}/get-employeeuser`);
            const data = response.data.data || [];
            await db.userCache.clear();
            await db.userCache.bulkPut(data);
            await this.updateSyncMetadata('userCache', data.length);
            console.log(`✅ Synced ${data.length} users`);
        } catch (error) {
            console.error('❌ Failed to sync users:', error);
        }
    }

    /**
     * Sync Grant Access
     */
    async syncGrantAccess() {
        try {
            const response = await axios.get(`${BASE_URL}/grantAccess`);
            const data = response.data.data || [];
            await db.grantAccessCache.clear();
            await db.grantAccessCache.bulkPut(data);
            await this.updateSyncMetadata('grantAccessCache', data.length);
            console.log(`✅ Synced ${data.length} grant access records`);
        } catch (error) {
            console.error('❌ Failed to sync grant access:', error);
        }
    }

    /**
     * Sync Purchase Orders
     */
    async syncPurchaseOrders() {
        try {
            const response = await axios.get(`${BASE_URL}/purchaseOrder`);
            const data = response.data.data || [];
            await db.purchaseOrderCache.clear();
            await db.purchaseOrderCache.bulkPut(data);
            await this.updateSyncMetadata('purchaseOrderCache', data.length);
            console.log(`✅ Synced ${data.length} purchase orders`);
        } catch (error) {
            console.error('❌ Failed to sync purchase orders:', error);
        }
    }

    /**
     * Sync Payments
     */
    async syncPayments() {
        try {
            const response = await axios.get(`${BASE_URL}/payment`);
            const data = response.data.data || [];
            await db.paymentCache.clear();
            await db.paymentCache.bulkPut(data);
            await this.updateSyncMetadata('paymentCache', data.length);
            console.log(`✅ Synced ${data.length} payments`);
        } catch (error) {
            console.error('❌ Failed to sync payments:', error);
        }
    }

    /**
     * Sync Cash
     */
    async syncCash() {
        try {
            const response = await axios.get(`${BASE_URL}/cash`);
            const data = response.data.data || [];
            await db.cashCache.clear();
            await db.cashCache.bulkPut(data);
            await this.updateSyncMetadata('cashCache', data.length);
            console.log(`✅ Synced ${data.length} cash records`);
        } catch (error) {
            console.error('❌ Failed to sync cash:', error);
        }
    }

    /**
     * Sync Daily Expenses
     */
    async syncDailyExpenses() {
        try {
            const response = await axios.get(`${BASE_URL}/daily-expense`);
            const data = response.data.data || [];
            await db.dailyExpenseCache.clear();
            await db.dailyExpenseCache.bulkPut(data);
            await this.updateSyncMetadata('dailyExpenseCache', data.length);
            console.log(`✅ Synced ${data.length} daily expenses`);
        } catch (error) {
            console.error('❌ Failed to sync daily expenses:', error);
        }
    }
}

// Create singleton instance
const syncService = new SyncService();

export default syncService;
