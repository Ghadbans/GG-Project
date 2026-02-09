import axios from 'axios';
import { store } from './store';

// Global request interceptor to save bandwidth during hibernation
axios.interceptors.request.use((config) => {
    const state = store.getState();
    const isHibernating = state.user?.isHibernating;

    if (isHibernating) {
        // Allow critical user-initiated requests to bypass hibernation
        // These endpoints are accessed when users specifically open views or submit forms
        const criticalEndpoints = [
            // Item Information & History
            '/endpoint/itemOut/item/',
            '/endpoint/itemPurchase/item/',
            '/endpoint/pos/item/',
            '/endpoint/itemReturn/item/',
            '/endpoint/get-item/',
            '/endpoint/update-item/',
            '/endpoint/upload-image-item/',
            '/endpoint/comment',
            '/endpoint/notification',
            '/endpoint/create-comment/',
            '/endpoint/get-itemPurchase/',
            '/endpoint/get-itemOut/',
            // All "get-" endpoints for viewing records
            '/endpoint/get-',
            // User session & authentication
            '/endpoint/get-employeeuser/',
            '/endpoint/grantAccess',
            // Last saved records for forms
            '/endpoint/get-last-saved-',
            // Customer & Supplier views
            '/endpoint/customer/',
            '/endpoint/Supplier/',
            // Invoice, Estimate, PO views
            '/endpoint/invoice/',
            '/endpoint/estimate/',
            '/endpoint/purchaseOrder/',
            '/endpoint/purchase/',
            '/endpoint/pos/',
            '/endpoint/itemReturn/',
            // Recurring & Retainer
            '/endpoint/recurringinvoice/',
            '/endpoint/retainerinvoice/'
        ];

        const isCritical = criticalEndpoints.some(endpoint => config.url?.includes(endpoint));

        if (!isCritical) {
            console.warn(`Blocking request to ${config.url} due to Sleep Mode (Hibernation).`);
            return Promise.reject(new Error('APPLICATION_HIBERNATING'));
        } else {
            console.log(`Allowing critical request to ${config.url} despite Sleep Mode.`);
        }
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

// Optional: Global response interceptor to handle hibernation errors gracefully
axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.message === 'APPLICATION_HIBERNATING') {
        // Silently skip hibernation-blocked requests
        return new Promise(() => { }); // Return a pending promise that never resolves
    }
    return Promise.reject(error);
});

export default axios;
