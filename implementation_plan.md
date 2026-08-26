# Maintenance Order (Technician Restricted Module) Implementation Plan

## Goal Description
Create a dedicated "Maintenance Order" sub-module tailored for Technicians. This module will allow assigned technicians to view their tasks, browse available store items, and update maintenance records (Appliance Info, Action Taken, Notes, and Parts/Items used) **without exposing sensitive financial data (prices, costs, labor fees) or stock levels**.

The updates made by the technician will sync directly to the original Maintenance record for Office Users to review, price, and invoice.

## User Review Required
> [!IMPORTANT]  
> **Backend Pricing Hydration:** Since technicians won't see prices, when they add an item to the maintenance order, I plan to have the **backend automatically look up and attach the standard selling price/cost** to that item in the background. This ensures that when the Office opens the record, the totals and financial data are already perfectly calculated. Let me know if this works for you.

## Open Questions
> [!WARNING]
> 1. **Status Updates:** Should the technician be allowed to change the Maintenance Status (e.g., from "Open" to "Completed" or "Pending Parts")? 
> 2. **Store Item Display:** You mentioned a "Store Item Display" for them to explore items first. Should this be a separate page in the sidebar (e.g., "Technician Item Catalog"), or just a large, visual pop-up modal *inside* the Maintenance Order form when they click "Add Item"?
> 3. **Item Search:** Since they can't see stock, what happens if they add an item that is out of stock? Should the system warn them, or allow it anyway so the office can handle procurement?

---

## Proposed Changes

### 1. Database & Access Control
#### [MODIFY] `server/model/grantAccessSchema.js`
- Add `maintenanceOrder: { type: Boolean, default: false }` to the schema so you can toggle this specific module for technicians in the Grant Access screen.

#### [MODIFY] `src/js/AdminView1/PageView/SettingsView/GrantAccessFormView.js`
- Add the UI toggle for "Maintenance Order" alongside the other modules.

#### [MODIFY] `src/js/component/SidebarDash.js`
- Add the "Maintenance Order" menu item, guarded by the new `grantAccess.maintenanceOrder` flag.

---

### 2. Backend Routing & Logic
#### [NEW] `server/routes/maintenanceRoutes.js` (Technician Endpoint)
- Create a specific `/technician-update-maintenance/:id` endpoint.
- **Security:** This endpoint will strictly ignore any pricing/financial data sent by the frontend. It will only accept updates to: `applianceInfo`, `actionTaken`, `note`, and the `items` array.
- **Auto-Pricing:** When parsing the `items` array, the backend will query the `Item` collection, attach the current `itemSellingPrice` and `itemCostPrice`, and calculate the hidden totals automatically.

---

### 3. Frontend Views (Technician Side)
#### [NEW] `src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js`
- The main data grid showing all Maintenance Orders.
- **Rule:** As requested, all technicians can see the list "from the outside". However, the "Open/Edit" button will run a check: `if (row.technician !== currentUser) { disable_button }`. 

#### [NEW] `src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js`
- A cloned, highly modified version of the Maintenance Update form.
- **Read-Only / Disabled Fields:** 
  - Client Info (Name, Phone, Address)
  - Job Card Info (Dates, Order No)
  - Technician Assign dropdown
  - Labor Fees
- **Editable Fields:**
  - Appliance Info (Item Description, Brand, Model, Serial No, Defect, Warranty)
  - Action Taken & Note
- **Restricted Items Table:**
  - The table will ONLY display: `#`, `Item Thumbnail`, `Item Name`, `Description`, and `Quantity`.
  - Columns for `Stock`, `Rate/Price`, `Discount`, and `Amount` will be completely removed from the UI.
  - The "Total Summary" footer (Subtotal, Tax, Balance Due) will be hidden.

#### [NEW] `src/js/AdminView1/PageView/MaintenanceOrder/TechnicianStoreCatalog.js`
- A visual catalog view displaying store items as cards with images, names, and descriptions. 
- Stock numbers and Prices will be completely stripped out.
- Technicians can use this to browse parts before requesting or adding them to their job card.

---

## Verification Plan
### Automated & Manual Verification
1. Log in as CEO -> Create a Maintenance Order -> Assign to Technician "John Doe".
2. Grant "Maintenance Order" access to "John Doe".
3. Log in as "John Doe" -> Open Maintenance Order.
4. Verify prices/stock are completely invisible.
5. Verify "John Doe" cannot click/open tasks assigned to "Jane Smith".
6. "John Doe" adds a "Water Booster 2HP" and saves.
7. Log back in as CEO -> Open standard Maintenance module -> Verify the "Water Booster 2HP" is there and the system correctly pulled the $979.50 price and calculated the totals automatically.
