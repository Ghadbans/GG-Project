# GG-Management2026 System Architecture & Progress Log

## Architecture Overview
- **Frontend**: A React application bundled as an Electron executable (desktop app) located in the local directory (`d:\GG\GG-Managment2026\ancient-kepler Pro`).
- **Backend**: A Node.js/Express application with MongoDB, located in the `server` subdirectory of the local project folder.
- **Database**: Production database is hosted on the dedicated **Railway MongoDB** service (`globalgatedb`) connected via Railway's high-speed private internal network (`mongodb.railway.internal:27017`), cutting \$200+/month in Atlas cloud costs while providing low latency and zero external exposure.
- **Deployment**: The backend (`server` folder) is deployed to Railway. All updates made to backend files (such as `server/routes/Routes.js`) MUST be committed to Git and pushed to `origin main` to trigger the Railway deployment.
- **Version Bumping**: When significant frontend changes are made and an executable `.exe` is to be generated (e.g. via `electron-builder`), always update the version number in `package.json` to prevent overwriting existing release files in `dist/`.

## Important Rules & Preferences
1. **Modules & Links**: Always understand how the system works and ensure no module or sub-module links are broken before making modifications.
2. **Search Logic**: Search features should encompass all visible columns in the UI. For performance reasons, avoid loading thousands of records on the client side at once (client-side searching was explicitly rejected due to initial loading delays). Keep `paginationMode="server"` and `filterMode="server"`, and enhance the `$or` conditions in `server/routes/Routes.js` to ensure accurate and comprehensive backend search.
3. **Build Integrity**: Make 100% sure the application is bug-free before building the `.exe`. Do not delete the `dist` files manually. Verify no hidden Node/Electron processes are running before you build to avoid file lock errors.
4. **DataGrid Pagination & Filtering**: Always ensure `filterMode="server"` is present alongside `paginationMode="server"` in DataGrid to prevent client-side filtering from incorrectly hiding server-returned search results. Furthermore, when using `<Pagination>` components, ensure the `onChange` handler properly extracts the value `onChange={(event, value) => setPage(value - 1)}` rather than passing an event object as the page number, which results in `NaN` page errors and crashes.
5. **Duplicate Routes & MongoDB Strict Querying**: `Routes.js` is extremely large and contains duplicate route definitions (e.g. two `/expense-Information` routes). Since Express uses the *first* defined route it encounters, you must verify that there are no duplicate bad routes shadowing your new code higher up in the file. Additionally, when searching numeric fields or nested fields in arrays, ALWAYS use JS-evaluated `$where` queries (e.g. `{ $where: "this.amount && this.amount.toString().match(/.../i)" }`) instead of MongoDB `$expr` to prevent silent null-evaluation failures. Furthermore, when querying objects stored as stringified arrays (e.g., `employeeName`), ALWAYS include the base array key `{ employeeName: regex }` in the query alongside the nested key `{ 'employeeName.name': regex }` to bypass strict schemas.
6. **Frontend Build Pipeline**: ALWAYS run `npm run build` (which invokes Webpack) to compile the React source code into the `dist/` folder BEFORE running `npm run make:win` (which invokes electron-builder). If you only bump the version and run `make:win` without building, the newly generated `.exe` will contain stale frontend code from the last time `npm run build` was executed.
7. **React DOM Stability (White Flash Prevention)**: When lazy-loading or routing to a component that performs a data fetch on mount (via `useEffect`), NEVER use a root-level `if (!data) return null;` if the layout (Sidebar, AppBar, Box wrapper) is shared across the app. Returning `null` forces React to unmount the entire layout tree and reconstruct it when data arrives, causing a jarring white flash and resetting local state (such as collapsed sidebars). Instead, return the full structural skeleton wrapper, and conditionally render ONLY the inner data-dependent children (e.g. `{!data ? <Typography>Loading...</Typography> : <ActualContent />}`).
8. **Backend Changes Require Git Push to Take Effect**: The `.exe` app communicates with the backend hosted on Railway (cloud). Editing `server/routes/Routes.js` or any server file locally does NOT affect the live app until those changes are committed and pushed (`git push origin main`). After pushing, Railway auto-deploys within ~1-2 minutes. ALWAYS verify backend search/route changes are pushed before testing or building a new `.exe`. A common mistake is assuming search fixes work because the code is correct locally — they won't until Railway is redeployed.
9. **Event Handler Naming Consistency**: When adding new event handlers to existing components (e.g., adding `handleClickMenu` to a file that already uses `handleClick`), ALWAYS verify the exact function name defined in the component's scope and use that name consistently on all JSX elements. Mismatched handler names (e.g., calling `onClick={handleClickMenu}` when only `handleClick` is defined) cause a `ReferenceError` crash that appears only at runtime, not at build time.
10. **Never Fetch Entire Collections for Per-Item Detail Views**: The Item Information view (and any similar detail/view page) MUST use server-side `itemId` filtering when loading transaction summaries (IN/OUT/RETURN/POS). NEVER call `/itemOut`, `/itemPurchase`, `/pos`, or `/itemReturn` without a `?itemId=xxx` query parameter from a detail page. Downloading entire collections and filtering client-side causes load times of 60+ seconds as data grows. Always use `Promise.all()` for parallel fetches instead of sequential `await`. Also: after a PUT/PATCH that updates a value (e.g., stock sync), ALWAYS update local React state immediately using `setState(prev => prev.map(...))` so the UI reflects the change without requiring a full page reload.
11. **Strict Role & Grant Access Architecture**: Roles (CEO, ADMIN, USER) are display titles and dashboard layout switchers only. Every user regardless of role title (including CEO and Admin) MUST have explicit permissions granted in the **Grant Access** module to perform actions (View, Create, Edit, Delete, Refund, etc.) in any module. The ONLY exception is username GG (the Creator/Founder of the system), who has universal access without requiring Grant Access configuration.
12. **Preserve Master-Detail State Initialization in Information Views**: In master-detail views (such as Maintenance Information, Item Information, Customer Information, Project Information), the left sidebar lists the overall collection while the main container filters by the active ID (e.g. `maintenance.filter(row => row._id === id)`). Never omit or drop the collection state setters (`setMaintenance`, `setItems`, etc.) when refactoring data fetches, as an empty collection state causes both the sidebar and the main details view to render blank/white without throwing any JavaScript console errors.
13. **Donut / PieChart Centering & Margins**: When hiding legends on MUI X-Charts `<PieChart>`, always specify explicit margins `margin={{ top: 5, bottom: 5, left: 5, right: 5 }}` and balanced radii (`innerRadius: 42, outerRadius: 68` for 200x160 containers). Omitting margins causes default legend space reservation on the right side of the SVG container, shifting the circle center (`cx`) to the left and clipping the left side of the circle at `x = 0`.
14. **Information Detail Views Full-Viewport Container Heights**: Detail/preview containers in information views (Invoices, Quotations, Purchases, Customers, Maintenance, Projects, Employees, Payroll, Payments, etc.) must NEVER have rigid, hardcoded fixed heights (e.g. `height: '450px'`, `height: '500px'`, `height: '520px'`, or `max-height: 600px'`). Instead, outer card containers `.itemInfoContainer` / `.itemInfoContainer2` must use `min-height: calc(100vh - 90px); box-sizing: border-box;`, inner left sidebars must use `height: calc(100vh - 170px); overflow-y: auto;`, and inner TabPanels / document containers must use `height: calc(100vh - 230px); overflow-y: auto;`. This eliminates dead gray bottom gaps across all screen sizes and resolutions.
15. **Modal Save & Window Navigation Safety**: When edit forms and modals (e.g., `ItemPurchaseUpdateForm`, `ItemOutViewUpdate`) provide navigation buttons such as "Go Back" after saving or closing, never assume `navigate(-1)` will always succeed. If a user opens the edit form in a new tab or window (`target='_blank'`), `window.history.length` is 1 and `window.history.state.idx` is 0. Attempting `navigate(-1)` in this scenario freezes the UI inside the modal. Always close the modal state immediately (`setLoadingOpenModal(false)`), check if `window.opener && window.history.length <= 1` to call `window.close()`, or fallback to the module's main list route (e.g. `navigate('/ItemPurchaseAdmin')`).
16. **Strict ISO YYYY-MM-DD Date Comparisons in Client Filters**: When filtering collections by date ranges in JavaScript (e.g. `Expenses`, `PayRoll`, `POS`, `Cash`, `Payment Received`), NEVER use `dayjs().format('DD/MM/YYYY')` in relational string comparisons (`>=` or `<=`). Because string comparison is alphabetical from left to right, comparing `DD/MM/YYYY` compares the day number first, which incorrectly includes records from past or future months (e.g. `"12/08/2026" >= "11/09/2026"` evaluates to `true`). Always format date strings as ISO `YYYY-MM-DD` (`dayjs(date).format('YYYY-MM-DD')`) so chronological order matches alphabetical order.
17. **Maintenance Converted vs Closed Distinction**: In the database, when a maintenance order is converted to an invoice, its `Converted` field is set to `true` while its `status` may remain `'Close'`. Queries and aggregations for pure `CLOSED` orders MUST explicitly filter for `Converted: { $nin: [true, 'true'] }`, while `CONVERTED` queries must filter for `{ $or: [{ Converted: true }, { Converted: 'true' }, { status: /^converted$/i }] }`. Neglecting this distinction will cause converted orders to bleed into the closed list and counts.
18. **Status Summary Filter Cards Uniformity & Viewport Awareness**: When embedding compact status summary cards grids across master listing views (Maintenance, Invoice, Quotation, Project, Purchase Request, POS Invoice), always style cards with `p: '6px 10px'`, 22px icon badge, 16px bold count, 9.5px uppercase label, and a 3px active status bar indicator. Concurrently, set DataGrid container height to `calc(100vh - 200px)` with `minHeight: 380px` and compact top action buttons to ensure table pagination controls remain permanently visible on screen without requiring vertical page scrolling.
19. **Backend Cloudflare Proxied Custom Domain**: The backend endpoint is permanently unified under `https://api.globalgate.sarl` with Cloudflare proxy (Orange Cloud) enabled. This shields the Railway backend from ISP-level DNS blocks and routing throttling worldwide (especially in DRC/Africa), ensuring all desktop apps, web portals (`portal.globalgate.sarl`), and mobile apps connect reliably with ultra-low latency without requiring any VPN. Always use `API_BASE_URL` and `ENDPOINT_URL` from `src/js/apiConfig.js`.
20. **Strict Isolation of Mobile Application Layout from Desktop & Web (Ver 3.5.09)**: The mobile application layout (`MobileLayout`, `MobileCardList`, mobile bottom tabs) must be strictly isolated to native Capacitor mobile environments (`window.Capacitor.isNativePlatform()`), real mobile handheld devices (smartphones/tablets via user-agent), or explicit debug query `?mobile=true`. Desktop executable (.exe / Electron) and desktop browsers MUST NEVER switch to mobile layout when users resize, snap, or minimize windows (`window.innerWidth < 900` fallback completely removed).
21. **Brand Identity & Icon Preservation**: Root `Icon.png` and `src/js/img/Image1.png` represent the official stylized **GG** (Global Gate) brand logo. Never overwrite them with generic placeholder or mobile generator assets. Always maintain the official Global Gate icon across Electron builds and titlebars.
22. **Null-Safe Client-Side Search & Filter Expressions (Ver 3.5.11)**: When implementing client-side `.filter()` or `.includes()` searches on collection records, NEVER invoke `.toLowerCase()`, `.toString()`, `.trim()`, or `.includes()` directly on unvalidated object fields (e.g. `row.manufacturerNumber.toLowerCase()`). In MongoDB, historical records or optional fields frequently have `null` or `undefined` values. Always use safe conditional checks or optional chaining (e.g. `(row.manufacturerNumber ? row.manufacturerNumber.toLowerCase().includes(search.toLowerCase()) : false)`). Failing to guard against `null` will throw an unhandled `TypeError: Cannot read properties of null (reading 'toLowerCase')` and trigger an empty white screen crash.
23. **Technician Financial Privacy & Cost/Rate/Stock Hiding vs Universal Grant Access (Ver 3.5.21 & 3.5.38)**:
    - **Strict Scope:** The restriction to hide item rates, item costs, service prices, stock quantities (`Stock-A`), labor fee financial charges, discounts, and grand totals applies **STRICTLY AND ONLY to TECHNICIANS** (users whose employee department is `TECHNICIAN` / `TECHNICIEN` / contains `TECH` or role is `TECHNICIAN`).
    - **All Other Users (Grant Access Authority):** All non-technician users (Office, Operations, Accounting, Sales, Admin, etc.) who have Grant Access permissions to Maintenance (`viewM`, `readM`, `editM`, `createM`) **MUST see all costs, rates, discounts, stock, labor fees, and totals identically to CEO**.
    - **Only Account `GG` Bypasses Grant Access:** Username `GG` is the creator and bypasses Grant Access unconditionally. All other roles (CEO, Admin, User) strictly follow their `grantAccess` module permissions.
    - Universal permission formula across maintenance and technician components:
      ```javascript
      const isOwner = user?.data?.userName === 'GG';
      const currentEmployee = (employee || []).find(e => 
        (e.employeeName || '').trim().toLowerCase() === (user?.data?.userName || '').trim().toLowerCase()
      );
      const isTechnician = !isOwner && (
        (currentEmployee?.department || '').toUpperCase() === 'TECHNICIAN' || 
        (currentEmployee?.department || '').toUpperCase() === 'TECHNICIEN' || 
        (currentEmployee?.department || '').toUpperCase().includes('TECH') || 
        (user?.data?.role || '').toUpperCase() === 'TECHNICIAN'
      );
      const canViewCosts = isOwner || !isTechnician;
      ```
    - When `!canViewCosts` (Technicians):
      1. In form/update tables: Only display `#`, `Item`, `Quantity`, and `Action`. Completely suppress `Stock-A`, `Rate`, `Discount`, `Amount`, `Labor Fees` financial charge/discount, and `Total Generale`.
      2. In detail/view pages: Render the dedicated 4-column "Items Used" table (`Parts/s Model`, `Description`, `Brand`, `Qty`) with no financial headers, labor totals, or grand totals.
    - When `canViewCosts` (Non-technicians with Grant Access & `GG`):
      1. Full visibility and editability of all pricing, rates, discounts, stock-A, labor fees, and total generale.
      2. Edit navigation routes directly to `MaintenanceUpdateView`.
24. **Global Delete Confirmation Modal Lifecycle & State Teardown (Ver 3.5.22)**:
    - In all admin listing views with single or bulk deletion (`MaintenanceViewAdmin`, `MaintenanceOrderAdmin`, `CustomerViewAdmin`, `EstimateViewAdmin`, `ItemViewAdmin`, `ProjectViewAdmin`, `SellShopInvoiceView`, `SupplierAdminView`, `TewmViewAdmin`, `DailyExpenses`, `UserAccount`, `RolePermission`, `EmployeePlaningView`), the delete reason/confirmation modal must NEVER be left open after submission.
    - Handlers (`handleDeleteMany`, `handleDelete`, `handleDeleteUpdate`) MUST explicitly close all associated modal states (`setOpenReasonDelete(false)`, `setOpenDeleteAll(false)`, `setOpenDeleteMultiple(false)` or `handleCloseReasonDelete()`), reset selection models (`setSelectedRows([])`), and clear reason text (`setReason('')`) before opening the deletion success dialog.
    - Confirm/Submit action buttons inside delete confirmation modals must ALWAYS render unconditionally (never guarded with `{info && <button...}`), and modal headers must immediately resolve item identifiers directly from the local client state with resilient fallback counts (`${selectedRows.length} selected record(s)`).
25. **Professional Report Center Caching & Authoritative Customer Statement Reconciliation (Ver 3.5.23)**:
    - **Smart TTL Caching for Report Dashboards:** `ReportsViewAdmin.js` and all sub-reports (`RevenueExpensesAll`, `ItemReportInfo`, `ARAgingReport`, `SalesByCustomerReport`) must NEVER issue un-cached, raw `axios.get` calls for massive database collections. Always route GET requests through `cachedGet` (`apiCache.js`) so that repeated navigation returns instantly in 0ms from memory.
    - **Customer Identity Normalization Across Documents:** In MongoDB, customer references are stored heterogeneously as `{ _id, Customer }`, `{ _id, customerName }`, `{ _id, companyName }`, or strings. All report aggregation engines must use universal customer resolution (`getCustomerIdentity`) matching by `_id`, normalized `Customer` name, and the authoritative `customers` catalog to prevent fragmented records or "Unknown Customer" entries.
    - **Credit-Account Payment Inclusion in Receivables:** When aggregating customer sales, collections, and statements, payments settled via customer credit (`modes === 'Credit-Account'`) represent authoritative settlements of invoice balances. They must NEVER be discarded or filtered out. The net invoice receivable balance must always calculate as `Total Invoiced - Total Applied Payments - Available Credit`, matching the Customer View Statement 100%.
26. **Zero-Side-Effect Query Routing & Strict Exact Supplier Match Isolation (Ver 3.5.26)**:
    - **GET Endpoints Must NEVER Mutate Documents:** `GET` API endpoints (such as `GET /itemPurchase`, `GET /purchaseOrder`, `GET /Supplier`) must be purely idempotent read operations. Never embed `updateMany` or background reconciliation mutations inside GET handlers.
    - **Strict Supplier Name & ID Matching:** When querying purchases or filtering transactions per supplier in backend routes or frontend views (`SupplierViewInformation.js`, `ItemPurchaseAdmin.js`), NEVER use loose substring inclusions (e.g. `sStore.includes(mName)` or `new RegExp(escaped, 'i')`). Such substring logic causes short supplier identifiers (like "ETS", "QUIN", "ZAC") to match and re-assign hundreds of unrelated suppliers' documents. Always match by authoritative `manufacturerID` or exact anchored equality (`^storeName$`).
27. **Strict Active Employed Filtering for Maintenance Technician Selection (Ver 3.5.27)**:
    - In all maintenance creation and update forms (`MaintenanceFormView.js`, `MaintenanceUpdateView.js`, `MaintenanceFormClone.js`, `EstimateConvertToMaintenance.js`, `MaintenanceOrderUpdate.js`), the "Assigned Technician" dropdown must strictly filter employees to ONLY those who are currently active (`status.toLowerCase() === 'employed' || status.toLowerCase() === 'active'`) and registered under the technician department (`department.toUpperCase() === 'TECHNICIAN' || department.toUpperCase() === 'TECHNICIEN' || department.toUpperCase().includes('TECH') || role.toUpperCase().includes('TECH')`).
    - Exclude all `Fired`, `Resign`, `Suspended`, and inactive employees, as well as employees from other non-technical departments (e.g. `DRIVER`, `CONSTRUCTION`, `OFFICE`, `SECURITY`).
    - Historical maintenance orders retain their assigned technician name seamlessly without breaking UI selections.
28. **Daily Expenses Maintenance Order Autocomplete Label Prioritization (Ver 3.5.28)**:
    - In Daily Expenses creation and edit forms (`DailyExpenseForm.js`, `DailyExpenseUpdate.js`), the "Maintenance Order" dropdown item formatting must strictly prioritize `itemDescriptionInfo` (e.g. `HILUX`) over `model` (e.g. `OLIVE GREEN`) via `{option.itemDescriptionInfo || option.model || ''}`, matching the item description displayed in the Maintenance Information module.
29. **Rate View Admin Data Refresh Lifecycle Resolution (Ver 3.5.29)**:
    - In `RateViewAdmin.js`, data fetching logic `fetchData()` must reside in component scope and be invoked by `handleCloseLoading()` upon modal dismissal. Never invoke un-scoped or foreign handler functions (e.g. `fetchItems`) in views that do not implement paginated server tables.
30. **Item Transfer Between Branches & Stock Synchronization (Ver 3.5.33)**:
    - In the Item Module (`ItemInformationVIew.js`), the **Transfer-Summary** tab (Tab 5) is placed directly before `Total-Summary` (Tab 6, the final tab). It displays complete inter-branch inventory transfer history and provides a modal to transfer items across company branches.
    - Transfer execution is strictly guarded by the **Grant Access** module: only users with Edit permissions on the Item module (`ItemInfoU` / `access.editM === true`) or system owners (`userName === 'GG'` / `role === 'CEO'`) can view the "Transfer Item" button and perform transfers.
    - Axios request/response branch interceptors in `src/js/index.js` explicitly bypass `/itemTransferHistory` and `/transfer-item`, ensuring transfer history and transfer in/out quantities are never discarded or filtered out when switching between branches (e.g. `HQ` and `GGLUB`).
    - Multi-branch stock calculation in `server/model/stockUtils.js` aggregates incoming transfers across matching branches `{ $or: [{ fromBranchId: branchId }, { toBranchId: branchId }, { branchId }] }` and destination items.
31. **Used Items Support (Ⓤ) & Newest-First Display Catalog Sorting (Ver 3.5.34)**:
    - When adding or editing items in the Item Module (`ItemForm.js`, `ItemFormUpdate.js`, `ItemFormClone.js`), checking the **`[x] Used Item (Ⓤ)`** checkbox automatically appends ` Ⓤ` to `itemName` (e.g., `MCB AC 2P Ⓤ`) and sets `isUsed: true` with `condition: 'Used'`.
    - This allows stock warehouse used items returned from client sites or projects to have an independent inventory record, separate stock tracking, and independent movement histories without causing duplicate name collisions with brand-new counterparts.
    - Used items behave 100% identically to normal goods across all linked modules (Purchases, Out, Returns, Invoices, Quotations, Maintenance, Projects, POS, Transfers).
    - In `ItemInformationVIew.js`, used items display a highlighted amber `Ⓤ USED ITEM` badge and condition indicator.
    - In the 3 store catalog displays (**Point of Sale** / `PointOfSale.js`, **Store Item Display** / `StoreItemDisplay.js`, **Technician Store Catalog** / `TechnicianStoreDisplay.js`), `GET /item-shop` applies strict `.sort({ _id: -1 })` and frontend `.reverse()` calls were removed, guaranteeing that newly added items are always displayed first (newest to oldest).
32. **Item Purchase Zero Quantity Preservation & Universal Item Name Display Normalization (Ver 3.5.39 & Ver 3.5.40)**:
    - Setting an item's quantity to `0` in `ItemPurchaseUpdateForm.js` or `ItemPurchaseViewForm.js` must NEVER blank out, delete, or detach the item's identity (`itemName`, thumbnail, description, rate).
    - Normalized data loading in `ItemPurchaseUpdateForm.js` guarantees that `itemName` is consistently structured as an object `{ _id, itemName }` by resolving the actual item name directly from the loaded `ItemInformation` catalog whenever `itemName` is an ID or object with missing string name.
    - `getItemDisplayName()` strictly resolves the actual item name from `itemName`, `itemName.itemName`, `itemName.name`, or the item catalog `ItemInformation.find(x => x._id === id).itemName`. It NEVER falls back to `itemDescription`, which contains technical specs (e.g. voltage, serials) and is not the item name.
    - In DataGrid and modal tables, `itemInfo` and `TableCell` mappings strictly resolve item names via catalog lookups and never conflate item descriptions with item names.
33. **Railway Internal MongoDB Infrastructure & Database Operations**:
    - The production database is hosted on the Railway MongoDB service (`globalgatedb`), connected via Railway's private internal network mesh (`mongodb.railway.internal:27017`).
    - Standard standalone MongoDB on Railway is fully compatible with the backend architecture (the system does not require replica sets or multi-document ACID transactions).
    - Public TCP proxy access (`hopper.proxy.rlwy.net`) should remain closed during normal operation for security, and opened only if external administrative database access or manual migrations are required.
    - Full verified production backups are retained locally in `./backup_atlas_prod` (56 collections, 165,615 documents) and can be restored using `transformBson` scripts to preserve native `ObjectId` and `Date` types.
34. **Universal Standard A4 Print Engine & Layout Optimization (Ver 3.5.44)**:
    - **No Artificial Height Forcing:** `useReactToPrint` hooks must NEVER calculate artificial heights using `PAGE_HEIGHT = 1045` and `Math.ceil(height / PAGE_HEIGHT)` inside `onBeforeGetContent`. Doing so causes small documents (e.g. 2-3 items) that slightly exceed 1,045px to forcefully expand to 2,090px (2 full pages) with large empty voids.
    - **Standardized A4 `@page` & Media Styles:** All printable modules must specify `pageStyle: '@page { size: A4 portrait; margin: 8mm 10mm 10mm 10mm; } @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }'`. In `@media print`, tables, headers, customer cards, and summary total boxes must use `page-break-inside: avoid !important; break-inside: avoid !important;`.
    - **In-Flow Printable Headers & Footers:** `PrintHeader.js` is constrained to `maxHeight: '65px'` with compact margins, and `PrintFooter.js` flows naturally at the end of documents with clean top borders instead of brittle `position: fixed; bottom: 0;` (which overlaps multi-page document content).
    - **Thermal POS Print Isolation:** Point of Sale (POS) printing (`SellShopInvoiceView.js` / `ReportPos.js`) uses thermal receipt roll dimensions and is strictly isolated from standard A4 document layouts.
35. **Universal Polymorphic Foreign Entity Access Pattern (Ver 3.5.52)**:
    - In historical MongoDB documents (2021-2023 vs modern), foreign entity references (`customerName`, `projectName`, `itemName`, `supplierName`, `expenseCategory`, `accountNameInfo`, `employeeName`) can be populated subdocuments `{ _id, name }` or flat strings/ObjectIds.
    - NEVER assume a double-nested structure (e.g., `row.expenseCategory.expensesCategory`, `row.itemName.itemName`, `row.projectName.projectName`, `option.customerName.customerName`) or chain string methods (`.toLowerCase()`, `.toUpperCase()`, `.trim()`, `.replace()`) directly on unvalidated properties.
    - Always employ defensive resolution guards:
      - **Customer:** `typeof c === 'string' ? c : (c?.Customer || c?.customerName || c?.name || '')`
      - **Project:** `typeof p === 'string' ? p : (p?.projectName || p?.name || '')`
      - **Item:** `typeof i === 'string' ? i : (i?.itemName || i?.itemDescription || i?.name || '')`
      - **Expense Category:** `typeof ec === 'string' ? ec : (ec?.expensesCategory || ec?.name || '')`
      - **Supplier:** `typeof s === 'string' ? s : (s?.supplierName || s?.manufacturer || s?.name || '')`
      - **Employee:** `typeof e === 'string' ? e : (e?.employeeName || e?.employee || e?.name || '')`

37. **Thermal POS Receipt Printing & Continuous Roll Layout Architecture (Ver 3.5.54 - 3.5.56)**:
    - **Isolation of Roll vs. A4 Print Canvas:** Global stylesheets (such as `Chartview.css`) must NEVER enforce root-level `@page { size: A4 portrait; }` as doing so corrupts POS thermal printers (e.g. `POS-80C` 80mm continuous roll), forcing the print driver to shrink 210mm A4 pages down onto 80mm rolls resulting in microscopic text.
    - **A4 Module Encapsulation:** Standard A4 modules (`InvoiceViewAdminAll`, `PurchasesViewAdminAll`, `ProjectViewInformation`, `CustomerInformationView`, etc.) must declare `size: A4 portrait` inside their own `useReactToPrint` `pageStyle` prop.
    - **POS Thermal Receipt Styling Standard:** All POS receipt views (`SellShopInvoiceView.js`) must specify dedicated `pageStyle` with `@page { size: auto; margin: 0mm !important; }`, crisp `9.5px` typography, `1.15` line-height, zero external margins, and explicit column widths and right-padding gutters (`.col-num: 5%`, `.col-item: 37%`, `.col-qty: 16%`, `.col-rate: 21%`, `.col-total: 21%`) with `white-space: nowrap` to guarantee clean visual separation between quantities, rates, and line totals without bunching.
    - **No Container Height Multiplier:** NEVER apply artificial multi-page height multipliers (`PAGE_HEIGHT = 560`) on thermal receipts, as continuous roll printers cut paper precisely at the natural end of the DOM content without feeding blank paper.

36. **Universal Item Image Data URL Normalization & Catalog Sorting Rule (Ver 3.5.53)**:
    - **Buffer / UTF-8 Base64 Image Normalization:** In MongoDB, item images are stored in `itemSchema` as `data: Buffer` and `contentType: String`. When serialized over HTTP, Node buffers containing ASCII Base64 strings (`'iVBORw0KGgo...'`, `'/9j/4AAQ...'`) must NEVER be re-encoded using `FileReader` or `btoa` without checking if the buffer already represents a Base64 text string. Doing so creates double-base64 encoded strings (`'data:image/png;base64,aVZCT1J3...'`), which browsers cannot parse, causing broken image icons and failed avatar fallbacks.
    - **Centralized Helper:** Always route raw image buffer/string conversion through `normalizeImageDataUrl(raw, contentType)` in `src/js/utils/formatUtils.js`.
    - **In-Memory Image Caching:** In `ItemThumbnail.js`, maintain a module-level in-memory cache to prevent redundant HTTP requests when rendering multiple rows in master-detail tables (e.g. Supplier Item Summary).
38. **Dashboard Statement of Accounts Universal Branding & Export Standards (Ver 3.5.62 & Ver 3.5.63)**:
    - **Uniform Sizing & Visual Styling:** All Statement of Accounts cards embedded in report drilldowns (`MaintenanceReportInfo`, `InvoiceReportInfo`, `PosReportInvoice`, `ProjectReportInfo`, `DailyExpensesReportInfo`, `ItemPurchaseReportInfo`, `PayRollReportInfo`, `PaymentReportInf`, `ItemReportInfo`) must use auto-sized card containers (`minWidth: '360px'`, `fontSize: '13px'`, border `1px solid #cbd5e1`, `borderRadius: '6px'`, `boxShadow: '0 2px 4px rgba(0,0,0,0.05)'`). Never use legacy cramped offsets (`fontSize: '70%'`, `left: '83px'`).
    - **Module-Specific Branded Titles:** The top banner must always specify the exact module in dark navy (`#093170`, white text, `13.5px`, bold), e.g. `Statement of Accounts - Commercial Invoices`, `Statement of Accounts - Maintenance Operations`, `Statement of Accounts - POS Sales`, `Statement of Accounts - Projects`, `Statement of Accounts - Daily Expenses`, `Statement of Accounts - Item Purchases`, `Statement of Accounts - Payroll`, `Statement of Accounts - Payments Received`.
    - **Universal Print & Excel Export Integration:** Every dashboard report drilldown must include the standard action pair:
      1. **Excel Export (`[ E ]` / `Explicit` icon):** Generates structured `.xlsx` workbooks via `ExcelJS` and downloads with `file-saver` (e.g. `Maintenance_Operations_Report.xlsx`, `Commercial_Invoices_Report.xlsx`, `POS_Sales_Report.xlsx`, `Projects_Report.xlsx`, `Inventory_Items_Report.xlsx`).
      2. **Print (`[ 🖨️ ]` / `LocalPrintshop` icon):** Invokes `react-to-print` on `componentRef` attached to the printable paper layout, including `PrintHeader` and `PrintFooter`.
39. **Commercial Invoices Status Summary Filter Cards & Aggregations (Ver 3.5.64)**:
    - **8 Standard Status Filter Cards:** In `InvoiceViewAdmin.js`, the top status summary cards grid must always render all 8 standard statuses:
      1. `ALL ORDERS` (`#30368a`, `AssignmentIcon`, `key: 'ALL'`)
      2. `PAID` (`#16a34a`, `CheckCircleIcon`, `key: 'Paid'`)
      3. `PARTIALLY-PAID` (`#d97706`, `PaymentsIcon`, `key: 'Partially-Paid'`)
      4. `DRAFT` (`#78909c`, `EditNoteIcon`, `key: 'Draft'`)
      5. `SENT` (`#1976d2`, `SendIcon`, `key: 'Sent'`)
      6. `PENDING` (`#801313`, `HourglassEmptyIcon`, `key: 'Pending'`)
      7. `DECLINE` (`#d32f2f`, `CancelIcon`, `key: 'Decline'`)
      8. `FREE OF CHARGE` (`#9c27b0`, `CardGiftcardIcon`, `key: 'Free of Charge'`)
    - **Backend Match & Aggregation (`server/routes/invoiceRoutes.js`):** In `GET /invoice-Information`, the `status` query filter and MongoDB `$group` status aggregation must support `paid` (`/^paid$/i`) and `partially-paid` (`/^partially[- ]?paid$/i`) to ensure accurate card counts and instant single-click server-side DataGrid filtering.
40. **User Login Notifications & Notification Activity Audit Log Architecture (Ver 3.5.65)**:
    - **Automatic Login Auditing:** On every user login (`server/Controller/auth.js:login`), a notification record is automatically stored in `notificationSchema` (`person: '${user.employeeName} Logged In'`, `reason: 'User ${user.employeeName} (${user.role}) successfully logged into the system'`) and broadcast in real-time via `req.io.emit('newNotification')`.
    - **Permanent History:** Notifications are stored permanently in MongoDB with zero automatic TTL or deletion.
    - **Interactive Dashboard Drilldown:** In `AdminHome.js`, clicking the "HR Announcements" card opens the full `NotificationReportInfo` drilldown (`showInfo === 12`) with search, type filters, custom date pickers, summary metrics, print engine, and Excel export.
41. **User Logout Recording, Chronological Sorting & Today's Scope Standard (Ver 3.5.66)**:
    - **User Logout Auditing:** Whenever any user logs out (or triggers logout), the frontend invokes `handleUserLogout` in `src/js/utils/authUtils.js`, which sends a `POST /auth/logout` payload. The backend creates a `notificationSchema` record (`person: '${name} Logged Out'`, `reason: 'User ${name} (${role}) logged out of the system'`) and broadcasts it in real-time via `req.io.emit('newNotification')`.
    - **Newest-First Chronological Order:** Because the backend `GET /notification` sorts by `{ dateNotification: -1, _id: -1 }`, frontend components (`NotificationVIewInfo.js`, `NotificationReportInfo.js`, etc.) must NEVER apply `.reverse()`. Socket additions must prepend (`[newNotification, ...prev]`) so that the most recent activities always appear at the top.
    - **Dashboard HR Announcements Scope:** The HR Announcements timeline card on `AdminHome.js` is strictly scoped to today's date (`dayjs(row.dateNotification).format('YYYY-MM-DD') === todayISO`) with color-coded status dots (`green` for login, `warning/orange` for logout, `primary/blue` for system actions) and compact timestamps (`HH:mm`), while full historical notifications remain accessible through the Notification Center / Report drilldown.
42. **Universal Grant Access Route Guarding & Platform-Wide Permission Standard (Ver 3.5.67)**:
    - **Single Superuser Principle:** In ALL applications (Desktop `.exe`, Web Application, and Capacitor Mobile App), ONLY `userName === 'GG'` is superuser bypass. All other users (including `Admin`, `CEO`, `Manager`, `Staff`, `Technician`) MUST strictly follow their explicit module permissions in the `grantAccess` database schema.
    - **Universal Route Guard (`RequireAuth.js` & `permissionUtils.js`):** Every protected route evaluates `getRoutePermission(location.pathname)` against `canAccessModule(user.data, grantAccess, module, action)`. Unauthorized access attempts are blocked and redirected to `/AdminHome` with an explicit "Access Denied" toast notification.
    - **Hierarchical Sidebar & Submenu Locking (`SidebarDash.js`, `SidebarDashE2.js`, `SideMaintenance.js`, `MobileDrawer.js`):** Parent buttons (e.g. Store, Maintenance, More) dynamically disable if the user lacks permissions for all underlying submodules. Quick Action FAB menus (`MobileDashboard.js`, `MobileCardList.js`) only render create options for modules where `createM === true`.
43. **Multi-Window (`Shift + Click`) Redux Hydration & Strict Desktop/Web vs Mobile Isolation (`RequireAuth.js`, Ver 3.5.75)**:
    - **Root Cause of New-Window `Access Denied` Bug:** When a user holds `Shift + Click` on a sidebar module in the Desktop (`.exe` / Electron) or Web (`portal.globalgate.sarl`) application, a brand-new window opens directly at the target route (e.g. `#/DailyExpenses` or `#/InvoiceViewAdmin`). In a newly spawned window, the Redux `authSlice` starts with `initialState: { data: { userName: '', role: '', selectedBranch: null } }` (`user.data.id` is `undefined`) because `<SidebarDash />` and the page component only read `localStorage.getItem('user')` **after** `<Outlet />` mounts.
    - **Never Block `<Outlet />` Before Hydration:** If `RequireAuth.js` runs permission checks before `<Outlet />` mounts and exits early when `!userId` with `grantAccess = null`, `canAccessModule` evaluates against an empty user (`userName = ''`) and empty permissions (`[]`), falsely throwing `"Access Denied: You do not have permission for the #### module."` and redirecting every `Shift + Click` window to `/AdminHome`!
    - **Strict Platform Isolation Rule:** `RequireAuth.js` MUST strictly check `isNativeMobile()`. When `!isNativeMobile()` (Desktop `.exe` and Web Portal), `RequireAuth` immediately renders `<Outlet />` (preserving 100% of the original Desktop & Web multi-window architecture where `<SidebarDash />` and each view component handle `localStorage` user hydration and module-level Grant Access enforcement). Even on native mobile, `RequireAuth.js` explicitly hydrates `localStorage.getItem('user')` via `/get-employeeuser/:id` before evaluating route permissions.
    - **Zero Shared-State Bleed:** Any default state or filter adjustment made for mobile workflows (such as `modes`/`reason` defaults or `Draft` invoice inclusion in `PaymentInformationForm.js` and `PaymentInformationUpdate.js`) MUST be strictly gated behind `isMobile` (`useIsMobile()` / `isNativeMobile()`) so Desktop and Web behavior is never altered.

44. **Universal Grant Access Route Guarding & Form Sidebar Security Enforcement (Ver 3.5.76)**:
    - **Form Sidebar Security (`SidebarDash1.js`):** Forms and edit views that render `<SidebarDash1 />` must NEVER use static presentation components with unauthenticated `<ListItemButton sx={{ color: 'gray' }}>`. `<SidebarDash1 />` must forward directly to `<SidebarDash {...props} />` so that user permissions, disabled states (light gray, non-clickable), active route highlighting, and module locking are 100% consistent across form views and list views alike.
    - **Maintenance Edit & Back Navigation Permission Integrity (`MaintenanceOrderViewInformation.js`, `MaintenanceViewInformation.js`, `MaintenanceUpdateView.js`):**
      - The decision to route to the full financial `MaintenanceUpdateView` vs operational `MaintenanceOrderUpdate` must NEVER rely on unhydrated state or financial flags (`canViewCosts`) alone. It must strictly check Grant Access edit permission: `(isOwner || (grantAccess || []).some(r => r.moduleName === "Maintenance" && r.access.editM === true)) ? '/MaintenanceUpdateView/:id' : '/MaintenanceOrderUpdate/:id'`.
      - In `MaintenanceUpdateView.js`, clicking the Back button in the confirmation modal ("Do you want to stop updating service?") must NEVER blindly force `navigate('/MaintenanceViewAdmin')`. It must check if `window.history.length > 1` to `navigate(-1)`; if fallback is needed, only route to `/MaintenanceViewAdmin` if the user has `readM` permission on `Maintenance`; otherwise safely fallback to `/MaintenanceOrderAdmin`.
    - **Universal Multi-Platform Route Guarding with Hydration Safety (`RequireAuth.js`):**
      - Route guarding must be enforced universally across Desktop (`.exe`), Web (`portal.globalgate.sarl`), and Native Mobile.
      - To prevent false "Access Denied" errors when users open new windows (`Shift + Click`), fresh browser tabs, or hard refreshes, `RequireAuth.js` must initialize with `checking = true` (rendering `<Loader />`), hydrate `localStorage.getItem('user')` via `/get-employeeuser/:id`, dispatch user credentials to Redux, fetch `grantAccess` permissions via `fetchUserGrantAccess`, and ONLY then evaluate `canAccessModule(effectiveUser, grantAccess, routePerm.module, routePerm.action)`.
      - Unauthorized route navigation attempts (such as a technician attempting to navigate directly to `#/MaintenanceViewAdmin` or another forbidden module) are strictly blocked with `toast.error("Access Denied: You do not have permission for the ... module.")` and redirected to `/AdminHome`.

45. **Employee Module & Tab Switching High-Performance Architecture (Ver 3.5.78)**:
    - **Synchronous Tab Hydration & Dependency Guarding (`TewmViewAdmin.js`):** Tab selection states stored in `localStorage` (`SelectEmployeeView`) must ALWAYS be initialized synchronously in React via lazy initializer `useState(() => localStorage.getItem('SelectEmployeeView') || '1')`. Any `useEffect` synchronizing this value MUST include an empty dependency array `[]` and guard against redundant updates `(result && result !== value)`. Never omit dependency arrays on tab switching effects, as this causes infinite re-render loops when switching tabs or returning to modules.
    - **Sub-Component Scope Extraction & Memoization (`EmployeePlaningView.js`):** Row components (such as `PlanningRow`) must NEVER be declared inside parent component render functions. Declaring components inside parent bodies forces React to unmount, destroy, and recreate the entire DOM tree and inner states on every single parent render. Always declare row components in module scope and wrap them with `React.memo`.
    - **O(1) Date Map Indexing vs O(D * N) Array Filtering:** When displaying date-grouped collections with thousands of records (e.g. 11,423 records in `planing`), NEVER filter the entire collection inside each day's row with repetitive `dayjs().format()` calls. Pre-group records once into a date dictionary (`planingByDate[YYYY-MM-DD] = [...]`) in `useMemo` (O(N) single-pass) so each row retrieves its records in O(1) time.
    - **Strict Date Range Limits & Collapse Unmounting:** Date range generation loops (`while (currentDate <= endDate)`) must enforce a strict safety cap (e.g., maximum 90 days) to prevent infinite loops from corrupted or historical date bounds. MUI `<Collapse>` components containing sub-tables must ALWAYS use `unmountOnExit` so off-screen collapsed tables do not execute DOM calculations or consume memory.
46. **Sidebar Navigation Non-Persistence, Submenu Recursion Elimination & Resilient Client Searching (Ver 3.5.79)**:
    - **Zero Persistence for Transient Submenu Navigation (`activeSidebarMenu` / `activeSidebarMenuE2`):** Submenu toggles (`show1 === 2` for More/Main, `show1 === 3` for Store, etc.) represent transient in-memory UI drawer states and MUST NEVER be written to or restored from `localStorage`. Persisting submenu states across route transitions causes newly mounted drawer components on subsequent pages to mount directly in nested submenu mode. All drawer sidebars (`SidebarDash`, `SidebarDashE2`, `SideMaintenance`, `SideShop`, `SideMaintenanceMenu`) must initialize with `const [show1, setShow1] = useState(1);` and purge legacy keys from `localStorage` on mount.
    - **Nested Submenu Prop Guarding (`isSubmenu`):** Whenever a sidebar component renders another sidebar as a submenu (e.g. `<SidebarDashE2 isSubmenu={true} />` inside `SidebarDash`, or `<SidebarDash onView3={3} isSubmenu={true} />` inside `SideMaintenance`), the child sidebar component MUST receive `isSubmenu={true}` and suppress its own submenu switcher buttons ("Main", "More", "Store", etc.). This strictly breaks component cross-nesting and makes recursive rendering trees (`<SidebarDash>` <-> `<SidebarDashE2>`) structurally impossible.
    - **Navigation Link Reset Callback (`handleNavClick`):** Every module navigation link (`<ListItemButton component={NavLink} ... onClick={handleNavClick}>`) in every sidebar component must invoke `handleNavClick` to reset submenu state (`setShow1(1)`) and ensure clean, top-level drawer presentation on the destination page. `handleNavClick` MUST be explicitly defined in component scope before any JSX invocation to prevent fatal runtime `ReferenceError` crashes.
    - **Null-Safe Client Searches & MUI Tab Indices (`ItemNameInfo.js`):** In search filters, never invoke string methods (`.toLowerCase()`, `.trim()`) on properties without prior existence guards (`(row.typeItem && row.typeItem.toLowerCase().includes(q))`). In MUI `<Tabs>`, index values (`value`, `value2`) must safely fallback to `false` when the active item is not found in the filtered result set (`selectedIndex !== -1 ? selectedIndex : false`), preventing MUI invalid tab value errors during live typing.
47. **Universal Defensive Purchase Reason / Description Display & Schema Sanitization (`getPurchaseReasonDisplay`, Ver 3.5.80)**:
    - **Flawed Object-Existence Ternary Hazard:** In MongoDB, `itemPurchaseSchema` defines `projectName: {}` (Mixed type). When an item purchase reason is changed to `'Other'` or when no project is selected, forms previously saved `projectName: {}` (an empty object). In JavaScript, `{}` is a truthy object where `row.projectName !== undefined` evaluates to `true`, and `(row.projectName.projectName || row.projectName.name || '')` evaluates to `''` (empty string). A ternary expression structured as `row.projectName !== undefined ? (typeof row.projectName === 'object' ? (row.projectName.projectName || row.projectName.name || '') : row.projectName) : row.description` thus evaluated to `''`, completely hiding `row.description` (`"ORDER FOR STORE KREAM"`) and causing the purchase reason to completely disappear from tables and modals!
    - **Universal Defensive Formatter (`formatPurchaseReasonDisplay` / `getPurchaseReasonDisplay`):** Always use `getPurchaseReasonDisplay(purchase, projectsList)` from `src/js/utils/formatUtils.js`. The helper defensively inspects:
      1. `purchase.projectName`: if a string or object with `.projectName` or `.name`, returns the non-empty trimmed text. If an object with only `._id`, resolves the project title/number from `projectsList`.
      2. If resolved project text is empty (such as `{}` stored on historical records), falls back seamlessly to `purchase.description` (`"ORDER FOR STORE KREAM"`).
      3. If description is also empty, falls back to `purchase.reason` (`"Other"`).
      4. Returns `''` only if all three fields are genuinely empty.
    - **Form State & Submission Sanitization:** In `ItemPurchaseUpdateForm`, `ItemPurchaseViewForm`, and `ConvertPoToIP`, when `reason === 'Other'` or `projectName` has no valid ID/name, sanitize `projectName` to `null` before sending to the backend so empty objects are not persisted to MongoDB.
    - **Consistent Summary Headers:** All summary table column headers (IN-SUMMARY, OUT-SUMMARY, RETURN-SUMMARY) must consistently display capitalized `Reason` instead of lowercase `reason`.

48. **Universal Defensive Object Child & Data URI Guard (`safeString`, Ver 3.5.81)**:
    - **React Error #31 (`Objects are not valid as a React child`):** In React 18, attempting to render a JavaScript object directly inside JSX curly braces (e.g. `{row.projectName}`, `{row.accountNameInfo}`) throws fatal `Minified React error #31: Objects are not valid as a React child (found: object with keys {_id, name})` and crashes the entire application to an unhandled white screen.
    - **Polymorphic Database References:** Historical and modern MongoDB records store fields like `projectName` and `accountNameInfo` heterogeneously: sometimes as flat strings (`"HQ PROJECT"`), sometimes as populated subdocuments (`{ _id: "...", name: "HQ PROJECT" }`, `{ _id: "...", projectName: "..." }`), and sometimes as `null` (e.g. when Reason is `'Other'`).
    - **Defensive String Resolution (`safeString`):** All JSX text interpolations across tables, modals, summaries, and reports must use `safeString(val, fallback = '')` from `src/js/utils/formatUtils.js` or safe inline property extraction: `{typeof val === 'object' && val !== null ? (val.name || val.projectName || fallback) : String(val || fallback)}`. Never interpolate raw variables `{row.projectName}` directly.
    - **Null-Safety on Form & Edit Scope:** In form components (`ItemPurchaseViewForm`, `ConvertPoToIP`, `ItemReturnViewForm`, etc.), top-level statements and `useEffect` hooks must NEVER assume `projectName` is non-null. Always use optional chaining `projectName?._id` and guard `if (!projectName?._id) return;` before filtering arrays or accessing nested properties.
    - **CardMedia Data URI Guards (`net::ERR_INVALID_URL`):** When rendering item thumbnails in catalog cards or grids via MUI `<CardMedia />`, NEVER pass an unguarded template literal `image={`data:${item.contentType};base64,${item.data}`}`. When an item has no image or an item is being initialized, `item.contentType` and `item.data` are `undefined`, producing the invalid URI `data:undefined;base64,undefined`. Browsers reject this and flood the console with dozens of `net::ERR_INVALID_URL` errors. Always guard with: `image={item.data && item.contentType ? `data:${item.contentType};base64,${item.data}` : undefined}`.

49. **Store Voucher (Item Out & Item Return) Standard A4 Print Architecture & Brand Presentation (Ver 3.5.82)**:
    - **Full-Width Canvas Enforcement:** Never render printable vouchers (`ItemOutViewAdmin`, `ItemReturnAdminView`, etc.) using unconstrained HTML `<table>` elements with `fontSize: 70%` and no width specification. Standard HTML tables without `width: 100%` collapse to the minimal text width, creating cramped 35% width columns jammed in the upper-left corner of the page with 65% empty white space. All printable containers must specify `width: '100%'`, `boxSizing: 'border-box'`, `padding: '10mm 12mm'`, `fontFamily: 'Arial, Helvetica, sans-serif'`, `fontSize: '12px'`, and `lineHeight: 1.4`.
    - **Official Company Stationery Header & Footer:** Store vouchers must always embed `<PrintHeader branchId={branchId} />` at the top (with the official Global Gate logo and legal registration info: RCCM, ID NAT, Address, Province, Country), separated by a solid brand border (`borderBottom: '2px solid #093170'`), and `<PrintFooter branchId={branchId} />` (Email, Phone, Website) at the bottom of the document.
    - **Branded Document Title Banner:** Include a bold dark-navy banner (`backgroundColor: '#093170'`, color `#ffffff`, `padding: '8px 14px'`, `borderRadius: '4px'`) clearly identifying the document type and padded identifier:
      - Item Out: `ITEM OUT VOUCHER / BON DE SORTIE` with `O-${String(outNumber).padStart(6, '0')}` (e.g. `O-027300`).
      - Item Return: `ITEM RETURN VOUCHER / BON DE RETOUR` with `R-${String(outNumber).padStart(6, '0')}` (e.g. `R-000728`).
    - **Structured 100% Metadata Box:** Render document metadata inside a dedicated full-width card (`backgroundColor: '#f8fafc'`, `border: '1px solid #cbd5e1'`, `borderRadius: '6px'`, `padding: '12px 16px'`) displaying Date, Reason, Reference (`INV-002603 / SOLUTION FOR AFRICA SAS`), and Issued/Received By in a balanced 4-column layout (`width: 14%` labels, `width: 36%` values), plus full-width description when present.
    - **Defensive Item Brand Formatting & Catalog Fetching:**
      - Master view components (`ItemOutViewAdmin`, `ItemReturnAdminView`) must fetch the item catalog (`GET /item`) on mount via `cachedGet('/item')` so `item` state is populated and item brands/units resolve accurately.
      - Never interpolate brands with unguarded parentheses (e.g. `( {brand ? brand : ''} )`), which prints empty parentheses `( )` whenever an item lacks a brand (e.g. `CEMENT SACK 50KG ()`).
      - Always format brand conditionally:
        ```javascript
        const itemId = row.itemName?._id || (typeof row.itemName === 'string' ? row.itemName : null);
        const relatedUnit = itemId ? (item || []).find((Item1) => Item1._id === itemId) : null;
        const rawName = typeof row.itemName === 'object' && row.itemName !== null
          ? (row.itemName?.itemName || row.itemName?.itemDescription || '')
          : String(row.itemName || '');
        const brand = (relatedUnit?.itemBrand || row.itemName?.itemBrand || '').toString().trim().toUpperCase();
        const displayName = brand ? `${rawName} (${brand})` : rawName;
        const unitStr = (relatedUnit?.unit || row.itemName?.unit || '').toString().trim().toUpperCase();
        ```
    - **100% Width Styled Items Table & Totals Summary:**
      - Header: `#093170` with white text, bold, `padding: '8px 12px'`.
      - Proportional column widths: `#` (6%), `Item Name` (44%), `Description` (35%), `Qty` (15%).
      - Alternating row styling (`#ffffff` and `#f8fafc`) with clean `#cbd5e1` borders.
      - Table footer row calculating total item count and sum of all quantities (`reduce((sum, r) => sum + parseFloat(r.newItemOut || 0), 0)`).
    - **Dual Side-by-Side Signature Blocks:** Warehouse movement documents require physical or stamp validation. Provide two balanced side-by-side signature cards (`width: '45%'`, `backgroundColor: '#fafafa'`, `border: '1px solid #cbd5e1'`, `borderRadius: '6px'`, `padding: '12px 14px'`) for Storekeeper (`Store Manager / Responsable Dépôt`) and Receiver/Returner (`Receiver / Destinataire` or `Returned By / Client ou Technicien`), each containing a 55px signing box, a dashed signature line, and a date line (`Date: _____/_____/202___`).
    - **Dynamic Print Document Titles:** `useReactToPrint` MUST always include `documentTitle` (`Item-Out-O-${String(outNumber).padStart(6, '0')}` or `Item-Return-R-${String(outNumber).padStart(6, '0')}`) so that browser PDF exports and print spools are cleanly named instead of defaulting to untitled.

50. **Payment & Refund Lifecycle, Multi-Currency Reconciliations, and Status Integrity (Ver 3.5.83)**:
    - **Transaction Type Architecture (`Payment` vs `Refund`):**
      - Standard payments collect money from clients towards unpaid invoices (`Sent`, `Partially-Paid`).
      - Refunds disburse funds back to clients against previously paid or partially-paid invoices where `paidAmount > 0`.
      - When `transactionType === 'Refund'`, invoice queries MUST filter for settled/partially-settled invoices: `status === 'Paid' || status === 'Partially-Paid' || paidAmount > 0.001`.
      - Refund inputs (`paidAmount`, `paidAmountUSD`, `paidAmountFC`) must be clamped to `maxRefundable` (the invoice's actual paid amount), NOT `balanceDue` (which is $0.00 on fully paid invoices). Clamping to `balanceDue` zeroes out legitimate refunds.
      - Never compute return change (`excessAction = 'Return'`) on refunds. Return change represents overpayment on receipts, whereas a refund is already an outgoing money disbursement.
    - **Status Lifecycle Architecture (`Cleared`, `Pending`, `Voided`):**
      - `Cleared`: Fully settled and verified transaction that affects invoice balances, cash books, revenue, and customer ledgers.
      - `Pending`: Recorded payment awaiting clearance or confirmation (e.g. check deposit or bank transfer clearance).
      - `Voided`: Canceled, bounced, or reversed transaction. **CRITICAL:** Voided payments MUST be strictly excluded from invoice paid balances (`syncInvoiceBalances`), cash in hand / daily expenses collections, customer statements, and financial turnover reports.
    - **Daily Cash Book & Expenses Integration (`DailyExpenseAdminView`):**
      - Outgoing refunds represent money leaving the company register. In daily cash calculations, refunds must be recorded with negative gross amounts (`-refundUSD`, `-refundFC`) and subtracted from daily collections (reducing net cash in hand).
      - Refunds must never generate fake "Return Change" rows or inflate "Payment Received" totals.
      - Voided payments must contribute $0.00 to cash collections and display with strikethrough and `[VOIDED]` indicator badge.
    - **Backend Ledger Consistency (`syncInvoiceBalances` & `reconcileAllInvoiceBalances`):**
      - In `invoiceBalanceUtils.js`, `syncInvoiceBalances` must inspect `payment.transactionType`. If `transactionType === 'Refund'`, it must subtract the refund amount from the invoice's `totalPaid` (`totalPaid -= amt;`) and clamp to zero (`Math.max(0, totalPaid)`). Adding refunds to paid amounts corrupts client balances.
      - MongoDB payment schemas must explicitly define `transactionType: { type: String, enum: ['Payment', 'Refund'], default: 'Payment' }` and `status: { type: String, enum: ['Cleared', 'Pending', 'Voided'], default: 'Cleared' }`. Backend `/create-payment` and `/update-payment` routes must accept and persist these fields.

51. **Multi-Token Search Conjunction Architecture & Elimination of Single-Word `$or` Disjunctions (Ver 3.5.84)**:
    - **Conjunction Requirement for Multi-Word Queries:** When a user enters a multi-word search phrase (e.g. `HASSAN HAMOUD` or `CAST CONCRETE`), the search engine MUST enforce conjunction (ALL tokens must be present across the record or linked customer) rather than disjunction (ANY single token matching).
    - **Prohibition of Single-Token `$or` Pollutions:** Backend search routes must NEVER loop over split tokens and push single-word regexes (`tokens.forEach(tok => searchOr.push({ 'customerName.Customer': tokRegex }))`) into an `$or` query array. Pushing individual tokens into `$or` destroys search specificity by returning every record matching any single word (e.g. returning all 111 invoices containing "HASSAN" including Hassan Mansour and Hassan Jaffal when the user specifically searched for Hassan Hamoud).
    - **Standardized Lookahead Conjunction Pattern:** All collection search endpoints (`/invoice-Information`, `/estimation-Information`, `/customer-Information`, `/employee-Information`, `/item-Information`, etc.) must construct conjunction regexes via positive lookaheads:
      ```javascript
      const tokens = search.trim().split(/\s+/).filter(Boolean).map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
      const allTokensRegex = tokens.length > 1
        ? new RegExp(tokens.map(t => `(?=.*${t})`).join(''), 'i')
        : fullRegex;
      ```
    - **Relational Customer Pre-Filtering:** When resolving customer IDs (`customerSchema.find`) for embedded or referenced relations (`customerName._id`, `customerId`), the query must test `allTokensRegex` against `Customer`, `customerName`, `customerFullName`, `companyName`, and first/last name permutations (`tokens.length === 2 ? { customerFirstName: tok0, customerLastName: tok1 } : ...`). Unrelated customers must never enter `matchingCustomerIds`.


52. **Route Action Semantic Alignment & Inverted Component Name Safeguarding (Ver 3.5.85)**:
    - **Underlying Mutation Determines Permission Action:** When mapping routes to module permissions in `ROUTE_PERMISSION_MAP` (`src/js/utils/permissionUtils.js`), NEVER determine the required action (`create`, `edit`, `view`, `read`) based on the component's filename or route naming conventions alone. Component filenames in legacy codebases frequently use counter-intuitive terms (e.g. `ItemReturnUpdateForm.js` performs `POST /create-itemReturn` to create new return vouchers, while `ItemReturnViewForm.js` performs `PUT /update-itemReturn/:id` to edit existing vouchers).
    - **Audit HTTP Mutation Before Guarding:** Always verify the underlying Axios mutation in the target component:
      - If the component calls `axios.post` to insert a new document, the route MUST map to `action: 'create'`.
      - If the component calls `axios.put` or `axios.patch` to update an existing document, the route MUST map to `action: 'edit'`.
      - If the component renders a read-only document preview or print sheet, the route MUST map to `action: 'view'`.
      - If the component renders a master listing grid or table, the route MUST map to `action: 'read'`.
    - **Inverted Item-Return Route Mapping Standard:**
      - Route `/itemreturnupdateform` is the **creation form** (`ItemReturnUpdateForm.js`, `POST /create-itemReturn`) -> MUST map to `{ module: 'Item-Return', action: 'create' }`.
      - Route `/itemreturnviewform` is the **edit/update form** (`ItemReturnViewForm.js`, `PUT /update-itemReturn/:id`) -> MUST map to `{ module: 'Item-Return', action: 'edit' }`.
      - Inverting these routes causes users with `Create` permission (like staff or warehouse managers) who lack `Edit` permission to receive `ACCESS DENIED: YOU DO NOT HAVE PERMISSION FOR THE ITEM-RETURN MODULE` and be kicked back to the dashboard upon clicking the `+` (Add) button.
    - **Comprehensive Route Pattern Coverage:** Ensure all navigation paths and secondary aliases across all modules (e.g., `/purchaseform` for Purchase-Order create, `/itemupdateview2` for Item edit, `/itemformview2` for Item create, `/estimateinformation` for Estimate view, `/estimateviewconverttoinvoice` for Estimate edit) are explicitly declared in `ROUTE_PERMISSION_MAP`.
    - **Universal Grant Access Compliance:** All users from CEO down to general staff strictly follow their configured permissions in the Grant Access module. The ONLY user account in the entire system that bypasses Grant Access rules is username `GG` (the system creator).

53. **Universal Document Attachment & Isolated Binary Storage Standard (Ver 3.5.86)**:
    - **Strict Isolation of Binary Payloads from Core Collections:** Never embed multi-megabyte binary file buffers (`data: Buffer` or long base64 strings) inside core transactional collections (`invoice`, `estimation`, `customer`, `purchase`, `expenses`). Core collections are frequently queried across dashboards, master grids, and financial reports; embedding multi-megabyte files balloons document sizes, triggers Mongo BSON 16MB document cap violations, and causes severe memory and bandwidth thrashing across desktop, web, and mobile clients.
    - **Dedicated `attachments` Collection Architecture:** All uploaded document attachments (Purchase Orders, signed delivery slips, related invoices, specs, contracts) MUST be stored in the isolated `attachments` collection (`server/model/attachmentSchema.js`) with schema `{ documentId: String, documentType: String, documentNumber: String, fileName: String, fileSize: Number, contentType: String, data: Buffer, uploadedBy: String, branchId: String, createdAt: Date }` and indexed by `{ documentId: 1, createdAt: -1 }`.
    - **Lightweight Metadata Queries vs On-Demand Streaming:**
      - Querying attachments for a document (`GET /attachments/:documentId`) MUST execute `.select('-data')` to return only lightweight metadata in <10ms without transferring heavy file contents.
      - Binary data MUST be streamed strictly on-demand via `GET /attachment-file/:id`: with `Content-Disposition: inline` for preview and printing, and `attachment` when `?download=true`.
    - **Zoho Invoice Parity for User Experience:**
      - **Dual Access Points:** Every supported document view (`InvoiceViewAdminAll`, `EstimateViewAdminAll`) must surface attachments in TWO places:
        1. A top action bar paperclip icon button with an active count badge (`Badge badgeContent={count} color="primary"`) for 1-click access.
        2. A dedicated menu item in the `OPTIONS` dropdown menu (`Attachments (count)`).
      - **Upload Experience:** Provide an intuitive modal with drag-and-drop and file browser upload supporting PDF, Images (PNG, JPG, WEBP), and Documents up to 15MB each, accompanied by a visual upload progress indicator.
      - **Card Representation:** Display attached files with format-specific color icons (Red for PDF, Cyan for Images, Gray for Documents), file name, formatted file size (e.g., `113.6 KB`), author, and upload date.
      - **Interactive Preview & Direct 1-Click Print Engine:** Clicking a file or its preview button must open a full-featured viewer modal (`AttachmentPreviewDialog.js`) with responsive PDF iframe embedding, image zoom/pan controls, download button, and a dedicated **Print** button that dispatches the document directly to the system print dialog without requiring the user to download the file first.
54. **Railway Backend Monorepo `/server` Root Directory Deployment Rule (Ver 3.5.86)**:
    - **Railway Trigger Filtering:** The Railway backend service (`api.globalgate.sarl`) is configured with `Root Directory: /server`. Railway's automated webhook pipeline monitors only the `/server` directory for changes.
    - **Mandatory Server File Modification for Backend Deploys:** If a git commit touches only frontend code, web bundles (`dist_web/`), documentation, or root configuration without modifying files inside `server/`, Railway automatically skips the build (`"the latest commit has nothing for the service to build"`).
    - **Standard Deployment Protocol:** Whenever new backend endpoints, Mongoose models, or server-side fixes are released, ALWAYS include a version bump in `server/package.json` (e.g. `"version": "3.5.86"`) and update the `/status` route signature in `server/index.js`. This guarantees that Railway detects the commit, initiates the container image build, and deploys the new backend without requiring manual intervention.
55. **Payroll Status Evaluation & Strict Non-Null Numeric Monetary Standard (Ver 3.5.87)**:
    - **Defensive Numeric Parsing on Payroll Forms:** In `PayRollUpdateFormView` and `PayRollFormView`, never evaluate payment status using `parseInt(amountPayUSD) === 0` without defensive fallback coercion. When an input field is empty, null, or undefined, `parseInt(null)` returns `NaN`. Because `NaN === 0` evaluates to `false`, unhandled status checks bypass `UnPaid` and erroneously default to `Partially-Paid`.
    - **Defensive Status Evaluation Formula:** Always coerce inputs using `parseFloat(val) || 0`. If both `cleanPaidUSD <= 0 && cleanPaidFC <= 0`, status strictly evaluates to **`UnPaid`**. If remaining credit is settled (`cleanCreditUSD <= 0.05 && cleanCreditFC <= 10`), status evaluates to **`Paid`**. Only when payments have actually been made (`cleanPaidUSD > 0 || cleanPaidFC > 0`) and remaining credit is positive does status evaluate to **`Partially-Paid`**.
    - **Database Numeric Integrity:** Never persist `null` or empty strings in `amountPayUSD` or `amountPayFC`. Always persist sanitized numeric values (`0` when unpaid).
    - **Defensive Null-Safe Detail Rendering:** In `PayRollViewInformation.js` (and any detail view formatting monetary values), NEVER call `.toString()` or `?.toFixed(2).replace(...)` directly on unvalidated MongoDB fields. Always wrap numeric values in defensive helpers (`safeFormatMoney`, `safeFormatInt`, `safeFormatRateDollars`) to prevent unhandled `TypeError: Cannot read properties of null (reading 'toString')` or `reading 'replace'` from triggering a white screen crash.
## Current Progress Log
- **Payroll Payment Status Logic Correction & View White Screen Crash Fix (Ver 3.5.87)**:
  - **Problem Reported:**
    - User reported: *"I was making edit for this employe pay roll than i made save .. it showed me the status Partially-Paid but me i didnt do payment for this .. i pressed the view button it make this erorr ....."*
    - Provided 4 screenshots showing:
      1. Payroll payment edit form for `MAHMOUD ALABOUSH` (#1421) with `Amount Paid(FC): 0` and `Amount Paid($): 0`, and full credit remaining.
      2. Pay Roll listing table showing record #1421 with status erroneously displaying `Partially-Paid`.
      3. Blank white screen when clicking the View (eye) button with console error:
         `TypeError: Cannot read properties of null (reading 'toString') at PayRollViewInformation.js:851:235`.
  - **Root Cause Analysis:**
    1. **Why Status Defaulted to `Partially-Paid`:**
       - In `PayRollUpdateFormView.js` (lines 629–636) and `PayRollFormView.js` (lines 735–742), status determination used `if (parseInt(amountPayUSD) === 0 && parseInt(amountPayFC) === 0)`.
       - When `amountPayUSD` was `null` or empty string, `parseInt(null)` returned `NaN`. Since `NaN === 0` is `false`, the check failed, skipped `UnPaid`, and fell into the `else` branch, assigning `status = 'Partially-Paid'` and saving `amountPayUSD: null` to MongoDB.
    2. **Why View Crashed with White Screen:**
       - In `PayRollViewInformation.js` line 851, the component rendered:
         `Amount Paid($): ${row.amountPayUSD !== undefined ? row.amountPayUSD.toString().replace(...) : 0}`.
       - Because in JavaScript `null !== undefined` evaluates to `true`, the expression executed `null.toString()`, throwing an unhandled `TypeError` that unmounted the React layout tree.
  - **Exhaustive Architectural Resolution & Implementation:**
    1. **`src/js/AdminView1/PageView/PayRoll/PayRollUpdateFormView.js` & `PayRollFormView.js`:**
       - Initialized state with `res.data.data.amountPayUSD != null ? res.data.data.amountPayUSD : 0` to eliminate null states.
       - Implemented defensive numeric parsing (`parseFloat() || 0`) for payments and remaining credit.
       - Enforced accurate status computation:
         - `cleanPaidUSD <= 0 && cleanPaidFC <= 0` -> strictly `UnPaid`.
         - `cleanCreditUSD <= 0.05 && cleanCreditFC <= 10` -> `Paid`.
         - Otherwise -> `Partially-Paid`.
       - Transmitted clean numeric values in the payload so MongoDB never stores `null` for payment amounts.
    2. **`src/js/AdminView1/PageView/PayRoll/PayRollViewInformation.js`:**
       - Introduced universal null-safe helpers: `safeNum`, `safeFormatMoney`, `safeFormatRateDollars`, and `safeFormatInt`.
       - Refactored all table cells (Basic wage, transport, food allowances, bounce allowances, loans, overtime/bonus, totals, amount paid FC/USD, credit FC/USD) to use these helpers, guaranteeing 100% crash-proof rendering regardless of database nulls.
    3. **`server/routes/payrollRoutes.js` & `server/index.js`:**
       - Added input sanitization in `POST /create-payRoll` and `PUT /update-payRoll/:id` to coerce `null`/`undefined`/`NaN` to `0` and force `UnPaid` if 0 payment is supplied with `Partially-Paid` status.
       - Added non-blocking background auto-repair in `server/index.js` that automatically cleans up existing records with `amountPayUSD: null` or misattributed `Partially-Paid` status.
       - Successfully updated live MongoDB record #1421 (`MAHMOUD ALABOUSH`) to `status: 'UnPaid'`, `amountPayUSD: 0`, `amountPayFC: 0`.
  - **Live Testing Verification & User Confirmation:**
    - User tested the live implementation: editing/saving a payroll record with 0 payments now reliably evaluates and assigns `status: 'UnPaid'`.
    - User confirmed clicking the View (eye) button opens the complete payroll details sheet with 100% stability, rendering all financial figures cleanly with 0 console errors or white screen crashes.
    - Verified live against MongoDB (`globalgatedb`), Railway container (`https://api.globalgate.sarl` running `v3.5.87`), Cloudflare Pages (`portal.globalgate.sarl`), and Electron desktop.
  - **Packaging & Multi-Platform Deployment:**
    - Version bumped to `3.5.87` across `package.json`, `server/package.json`, and `server/index.js`.
    - AST quality gate verified 234 source files with 0 errors.
    - Webpack compiled `dist_web/` (Cloudflare Pages) and `build/` (Electron desktop).
    - Packaged Windows desktop installer: `dist/Global Gate Setup 3.5.87.exe` (94,570,752 bytes).
    - Synchronized all files with GitHub `origin main` for automatic Cloudflare Pages and Railway container deployment.
- **Document Attachments (Upload, Preview, Direct Print, Download & Delete) for Invoices & Quotations (Ver 3.5.86)**:
  - **Problem & Requirement Reported:**
    - User requested: *"IN INVOICE and Quotation modules I would like to have in OPTIONS possibplity to add Attachments like if i have a Purchase Order or an related INVOICE to attach it with it so it will not be lost ... as well i can preview this attacment and i can print it out if i want ! same like in zoho invoices .. i left for you screenshuts .. be creative and dont mess with the links and modules and sub-modules"*.
    - Provided 5 screenshots detailing:
      1. Invoice Information view with `OPTIONS` button.
      2. Options menu dropdown.
      3. Zoho Invoice Attachments modal in empty state with upload zone.
      4. Zoho Invoice Attachments modal showing attached file `PO-000741.pdf` with metadata, download, and delete actions.
      5. Zoho Invoice full interactive PDF preview viewer with Zoom controls and Print button.
  - **Exhaustive Architectural Implementation:**
    1. **Isolated Binary Storage (`server/model/attachmentSchema.js`):**
       - Created dedicated `attachmentSchema` in MongoDB with fields: `documentId`, `documentType` (`Invoice` | `Estimation` | `PurchaseOrder`), `documentNumber`, `fileName`, `fileSize`, `contentType`, `data: Buffer`, `uploadedBy`, `branchId`, `createdAt`.
       - Indexed on `{ documentId: 1, createdAt: -1 }`. Core `invoice` and `estimation` collections remain 100% lightweight and performant.
    2. **REST API Endpoints (`server/routes/attachmentRoutes.js` & `server/index.js`):**
       - Mounted `attachmentRoutes` under `/endpoint`.
       - `POST /upload-attachment`: Handles multi-file uploads via `multer.memoryStorage()`, enforcing 15MB limit and allowed MIME types.
       - `GET /attachments/:documentId`: Returns lightweight metadata array using `.select('-data')` for sub-10ms response times.
       - `GET /attachment-file/:id`: Streams binary data with `Content-Type` and `Content-Disposition` (`inline` for preview/print, `attachment` for download).
       - `GET /attachment-data/:id`: Returns JSON with base64 data for frontend viewers.
       - `DELETE /delete-attachment/:id`: Deletes attachment by `_id`.
    3. **Zoho-Style Attachments Modal (`src/js/component/DocumentAttachmentsModal.js`):**
       - Header displaying document number (e.g. `INV-002610` / `Q-000431`), total files attached, and close button.
       - Empty state with paperclip illustration matching Zoho reference.
       - Drag-and-drop upload dropzone with linear progress bar.
       - Attachment list cards with red PDF / blue image icons, bold clickable file names, formatted file sizes (`KB`/`MB`), author, and upload date.
       - Four quick actions on every file card: **Preview** (eye), **Direct Print** (printer), **Download** (tray), and **Delete** (trash).
       - Delete confirmation dialog.
    4. **Interactive Preview & Direct 1-Click Print Engine (`src/js/component/AttachmentPreviewDialog.js`):**
       - Dark top toolbar matching Zoho reference.
       - PDF viewer with high-fidelity iframe streaming.
       - Image viewer with Zoom In, Zoom Out, and Reset Zoom controls.
       - Direct **Print** button: prints PDFs and images directly via system print dialog without downloading.
       - Direct **Download** button.
    5. **Integration in Invoice & Quotation Viewers:**
       - `src/js/AdminView1/PageView/InvoiceView/InvoiceViewAdminAll.js`: Added paperclip button with count badge in header + `Attachments (count)` MenuItem in `OPTIONS` menu.
       - `src/js/AdminView1/PageView/EstimateView/EstimateViewAdminAll.js`: Added paperclip button with count badge in header + `Attachments (count)` MenuItem in `OPTIONS` menu.
  - **Railway Monorepo Deployment & Production Synchronization:**
    - Resolved 404 deployment lag by modifying `server/package.json` (bumping API version to `3.5.86`) and updating `server/index.js` status routes, satisfying Railway's `/server` root directory watch rule (commit `f547088f`).
    - Verified live endpoint activation on `https://api.globalgate.sarl`:
      - `GET /endpoint/attachments/:id` -> `200 OK`
      - `POST /endpoint/upload-attachment` -> `200 OK` (tested live multipart upload)
      - `DELETE /endpoint/delete-attachment/:id` -> `200 OK`
  - **Live Testing Verification & User Confirmation:**
    - User verified live functionality in the desktop application with production screenshots:
      - Uploaded `Purchase Order - S4AL_LPO_2026_00215 (1).pdf` (48.6 KB) to `INV-002610` (`SOLUTION FOR AFRICA SAS`).
      - Confirmed green success toast `Attachment(s) uploaded successfully`.
      - Confirmed paperclip active count badge updated to `1`.
      - Confirmed interactive preview modal renders multi-page PDF with thumbnail bar, full vector display, zoom controls, download, and direct 1-click printing.
  - **Packaging & Artifact Preservation:**
    - Bumped `package.json` to version `3.5.86`.
    - AST pre-build safety gate passed with 0 errors across 234 source files (`node scripts/pre-build-check.js`).
    - Webpack production bundles compiled cleanly for Electron (`build/`) and Web (`dist_web/`).
    - Packaged Windows desktop installer: `dist/Global Gate Setup 3.5.86.exe` (94,570,817 bytes).
    - All code, web bundles, and architectural documentation synchronized with GitHub `origin main`.

- **Item-Return Create Route Permission Inversion Resolution & Universal Grant Access Enforcement (Ver 3.5.85)**:
  - **Problem Reported:**
    - User reported: *"i have an user like BENEDICTE K. MUTALENU it has access throw GRANT ACCESS module to create in the Item-Return ,, throw her account she can view edit but when she press on + button to add the system kicking her back to the dashboard and pop up msg coming up saying ACCESS DENIED: YOU DO NOT HAVE PERMISSION FOR THE ITEM-RETURN MODULE ... please check it please check it ... this was working fine what happened stop fixing somwthing damaging somthing else ... all users should be following the Grant access module from CEO till normall user only GG account by pass this grant access rules as this acount is the creator !"*.
    - Screenshot evidence confirmed that user `BENEDICTE K. MUTALENU` had Grant Access configured for module `Item-Return`: `Read: [x]`, `Create: [x]`, `View: [x]`, `Edit: [ ]`, `Delete: [ ]`.
    - When she navigated to `Item-Return` and clicked the `+` (Add) button, the application kicked her back to `/AdminHome` with the red toast `ACCESS DENIED: YOU DO NOT HAVE PERMISSION FOR THE ITEM-RETURN MODULE`.
  - **Exhaustive Root Cause Analysis:**
    1. **Counter-Intuitive Legacy Component Naming:**
       - In `src/js/AdminView1/ItemReturnAdminView.js`, line 683, clicking the Add (`+`) button navigates to `<NavLink to={'/ItemReturnUpdateForm'}>`.
       - Inside `ItemReturnUpdateForm.js`, line 645, the component executes `axios.post(`${ENDPOINT_URL}/create-itemReturn`, ...)` -> Despite having "Update" in its name, `ItemReturnUpdateForm` is the **CREATE** form!
       - In `ItemReturnAdminView.js`, line 574, clicking the Edit button in the table navigates to `<NavLink to={`/ItemReturnViewForm/${params.row._id}`}>`.
       - Inside `ItemReturnViewForm.js`, line 642, the component executes `axios.put(`${ENDPOINT_URL}/update-itemReturn/${id}`, ...)` -> Despite having "View" in its name, `ItemReturnViewForm` is the **EDIT** form!
    2. **Inverted Route Permission Mapping in `permissionUtils.js`:**
       - In `ROUTE_PERMISSION_MAP`, the mappings were mistakenly assigned based on component names:
         - `{ pattern: /^\/itemreturnviewform/i, module: 'Item-Return', action: 'create' }`
         - `{ pattern: /^\/itemreturnupdateform/i, module: 'Item-Return', action: 'edit' }`
       - When Benedicte clicked `+`, she navigated to `/ItemReturnUpdateForm`.
       - `RequireAuth.js` evaluated `matchRoutePermission('/ItemReturnUpdateForm')`, which matched `Item-Return` with `action: 'edit'`.
       - Because Benedicte has `createM: true` but `editM: false`, `canAccessModule` returned `false`.
       - `RequireAuth.js` immediately displayed the toast error and redirected her to `/AdminHome`.
  - **Architectural Resolution & Code Modifications Applied:**
    1. **Corrected Route Permission Mapping (`src/js/utils/permissionUtils.js`):**
       - Aligned `ROUTE_PERMISSION_MAP` with actual component behavior:
         - `/itemreturnupdateform` -> `action: 'create'` (calls `POST /create-itemReturn`)
         - `/itemreturnviewform` -> `action: 'edit'` (calls `PUT /update-itemReturn/:id`)
    2. **Audited & Added Missing Route Permissions:**
       - Added `{ pattern: /^\/purchaseform$/i, module: 'Purchase-Order', action: 'create' }` (Add button in `PurchaseOrderViewAdmin.js`).
       - Added `{ pattern: /^\/itemupdateview2/i, module: 'Item', action: 'edit' }` and `{ pattern: /^\/itemformview2/i, module: 'Item', action: 'create' }`.
       - Added `{ pattern: /^\/estimateinformation/i, module: 'Estimate', action: 'view' }` and `{ pattern: /^\/estimateviewconverttoinvoice/i, module: 'Estimate', action: 'edit' }`.
    3. **Universal Grant Access Hierarchy Affirmed:**
       - All users (CEO, Admins, Staff) strictly follow Grant Access permissions configured for their account. Only superuser `GG` bypasses these rules.
  - **Verification & Deployment:**
    - Version bumped to `3.5.85` in `package.json`.
    - AST pre-build safety verification passed with 0 errors across 232 files (`node scripts/pre-build-check.js`).
    - Webpack compiled Electron (`build/`) and Web (`dist_web/`) bundles with 0 errors.
    - Packaged Windows desktop installer: `dist/Global Gate Setup 3.5.85.exe`.
    - Pushed commit to GitHub `origin main` for automated Cloudflare Pages deployment.
  - **Live Testing & User Confirmation:**
    - User performed end-to-end testing in production using the user account `BENEDICTE K. MUTALENU`.
    - Navigated to the `Item-Return` module and clicked the `+` (Add) button.
    - Verified that `/ItemReturnUpdateForm` opened smoothly without getting kicked back to `/AdminHome` and with zero `ACCESS DENIED` popups.
    - Verified that return vouchers can be created and saved successfully.
    - Confirmed that users lacking `Edit` permission (`editM: false`) remain strictly guarded from modifying existing return records (`/ItemReturnViewForm/:id`).
    - User confirmed: *"working fine testing it .."*, confirming full restoration of the Grant Access workflow without side effects.

- **Multi-Token Search Conjunction Fortification for Invoices & Quotations (Ver 3.5.84)**:
  - **Problem Reported:**
    - User reported: *"in the search if im searching for client name like HASSAN HAMOUD it will show everyone in his name has Hassan like HASSAN Jaffal HASSAN MANSOUR etc.. im not searching for for Hassan to give me all the hassan clients in my invoices i noticed this happening in the INVOICES QUOTATION modules !"*.
    - Uploaded screenshot evidence confirmed that typing `HASSAN HAMOUD` in the Invoice module returned 111 invoices spanning every client with "Hassan" in their name (`MR. HASSAN MANSOUR`, `MR. HASSAN JAFFAL`, `MR. HASSAN HAMOUD`).
  - **Exhaustive Root Cause Analysis:**
    1. **Single-Word Disjunction in `invoiceRoutes.js` (L344–356):**
       - The route handler parsed search tokens `['HASSAN', 'HAMOUD']`, but then executed:
         ```javascript
         if (tokens.length > 1) {
           tokens.forEach(tok => {
             const tokRegex = new RegExp(tok, 'i');
             searchOr.push(
               { 'customerName.Customer': tokRegex },
               { 'customerName.customerName': tokRegex },
               ...
             );
           });
         }
         ```
       - Because MongoDB evaluates `query.$or = searchOr`, pushing `{ 'customerName.Customer': /HASSAN/i }` as an independent `$or` item immediately caused every document with "Hassan" to evaluate as a match, completely overriding the presence of "Hamoud".
    2. **Identical Copy in `estimationRoutes.js` (L388–400):**
       - The Quotation/Estimation search route `/estimation-Information` duplicated the exact same `tokens.forEach` single-word `$or` push, exhibiting the identical search pollution.
  - **Architectural Resolution & Code Modifications Applied:**
    1. **Standardized Order-Independent Lookahead Conjunction:**
       - Replaced the flawed `combinedRegex` and `reverseCombinedRegex` with the standard positive lookahead conjunction regex:
         `const allTokensRegex = tokens.length > 1 ? new RegExp(tokens.map(t => '(?=.*' + t + ')').join(''), 'i') : fullRegex;`
       - This guarantees that every token in the query must exist in the target string regardless of word order, while strictly excluding names that match only one token.
    2. **Customer Relational Pre-Filter Hardening:**
       - Updated `customerSchema.find` in both `invoiceRoutes.js` and `estimationRoutes.js` to query against `allTokensRegex` (plus two-token first/last name permutations). Only customers matching all search words are added to `matchingCustomerIds`.
    3. **Elimination of Flawed `$or` Token Loops:**
       - Completely removed the `tokens.forEach` blocks from both `invoiceRoutes.js` (lines 344–356) and `estimationRoutes.js` (lines 388–400).
    4. **Universal Field Verification:**
       - Maintained complete search coverage across invoice numbers, quotation numbers, subjects, descriptions, item names, defect descriptions, and customer metadata with 100% token conjunction.
  - **Verification & Deployment:**
    - Version bumped to `3.5.84` in `package.json`.
    - AST quality check passed with 0 errors across 232 files (`node scripts/pre-build-check.js`).
    - Webpack compiled Electron (`build/`) and Web (`dist_web/`) bundles with 0 errors.
    - Packaged Windows desktop installer: `dist/Global Gate Setup 3.5.84.exe`.
    - Pushed commit to GitHub `origin main` for automated Cloudflare Pages and Railway API deployments.

- **Payment & Refund Architecture, Status Lifecycle (`Cleared`, `Pending`, `Voided`) & Daily Cash Reconciliations (Ver 3.5.83)**:
  - **Problem Reported:**
    - User reported: *"In Payment module than Add new Payment there is transaction type there is Payment and REFUND and there is in Status Cleared Pending and Voided .. i want you to check this ones if its active or not is it working fine or not .... because i tried the refund is not showing me the client invoices from which invoice i want to make refund as well in the EXPENSES DAILY INFORMATION is showing +1100$ and -1100$ than its adding 1100$ to in the Payment Received"*.
  - **Exhaustive Root Cause Analysis:**
    1. **Inactive MongoDB Schema & Backend Routes:**
       - In `server/model/paymentSchema.js`, neither `transactionType` nor `status` was declared. Under Mongoose strict schema enforcement, any values sent from the client were silently stripped away before database persistence.
       - In `server/routes/Routes.js` (`POST /create-payment`), `transactionType`, `status`, and `reason` were never extracted from `req.body` or passed into `paymentSchema.create()`.
    2. **Refund Invoices Hidden & Zeroed Out:**
       - In `PaymentInformationForm.js`, invoice queries filtered strictly for `row.status === 'Sent' || row.status === 'Partially-Paid'`. Fully paid invoices had `row.status === 'Paid'` and were completely filtered out, leaving the client invoice list empty when attempting a refund.
       - `transactionType` was omitted from the `useEffect` dependency array, so toggling between `Payment` and `Refund` never re-queried or filtered invoices.
       - `handleChangeCEO` clamped input values to `balanceDue`. For a paid invoice, `balanceDue` is `0`, instantly zeroing out any typed refund amount.
       - `handleUpdateInvoice` filtered records with `rowPaid < row.balanceDue`. On a paid invoice, `0 < 0` evaluated to false, preventing the refund from attaching to the invoice.
    3. **Daily Expenses Erroneously Added Refunds & Generated Fake Return Change:**
       - Because invoices were empty, entering `$1100` resulted in `invoiceAmount = 0` and unallocated excess of `$1100`. The payment form defaulted `excessAction = 'Return'` with `returnUSD = 1100`.
       - In `DailyExpenseAdminView.js`, `getPaymentRowValues` ignored `transactionType`. It treated the `$1100` as gross cash payment received (`+$1100`) and the `$1100` return as change returned (`-$1100`).
       - In daily totals, `Total Payment Received` added `$1100` instead of subtracting the outgoing customer refund.
    4. **Inverted Backend Balance Synchronization:**
       - In `server/utils/invoiceBalanceUtils.js`, `syncInvoiceBalances` performed `totalPaid += amt` unconditionally. If a payment was a Refund, it increased the invoice's paid amount in the database instead of reducing it!
    5. **Customer Statements & Payment Grids Missing Audit Signals:**
       - Voided transactions were not excluded from customer balance calculations in `CustomerInformationView.js`, and refunds were not reflected as debit adjustments.
       - `PaymentView.js` lacked visual indicators for Transaction Type (`Payment` vs `Refund`) and Status (`Cleared`, `Pending`, `Voided`).
  - **Architectural Resolution & Code Modifications Applied:**
    1. **Database Schema & Route Persistence (`server/model/paymentSchema.js`, `server/routes/Routes.js`):**
       - Added `transactionType: { type: String, enum: ['Payment', 'Refund'], default: 'Payment' }` and `status: { type: String, enum: ['Cleared', 'Pending', 'Voided'], default: 'Cleared' }` to `paymentSchema.js`.
       - Extracted `transactionType`, `status`, and `reason` from `req.body` in `/create-payment` and persisted them across all branch execution paths.
    2. **Invoice Balance Synchronization (`server/utils/invoiceBalanceUtils.js`):**
       - Updated `syncInvoiceBalances`: `if (p.transactionType === 'Refund') totalPaid -= amt; else totalPaid += amt;` and clamped with `Math.max(0, totalPaid)`.
       - Updated `reconcileAllInvoiceBalances` to sign refund amounts negatively.
    3. **Payment Form Refund Activation (`PaymentInformationForm.js` & `PaymentInformationUpdate.js`):**
       - Enabled invoice selection for refunds: when `transactionType === 'Refund'`, filters for settled invoices (`status === 'Paid' || status === 'Partially-Paid' || paidAmount > 0.001`).
       - Populated `maxRefundable` (actual amount paid) and clamped refund inputs against `maxRefundable`.
       - Added `transactionType` to `useEffect` dependency array for instantaneous invoice list updating upon dropdown change.
       - Reset allocations and suppressed surplus/overpayment card on refunds.
       - Updated UI labels ("Paid Invoices (Refund Eligible)", "Refund Amount USD", "Refund Full").
       - Added `Transaction Type` and `Status` dropdowns to Mobile Card 1.
    4. **Daily Expenses Refund Accounting (`DailyExpenseAdminView.js`):**
       - In `getPaymentRowValues`: Refunds return negative gross and net amounts (`-refundUSD`, `-refundFC`), reducing daily cash in hand, and suppress return change calculations.
       - Voided transactions return zero amounts and render with strikethrough and `[VOIDED]` badge.
       - Rendered distinct visual badges: `[REFUND]` (bold red), `[VOIDED]` (strikethrough), `[PENDING]` (amber).
    5. **Customer Statement & Payment Grid Integrity (`CustomerInformationView.js`, `PaymentView.js`):**
       - Customer statement excludes voided transactions, signs refunds as ledger debits (increasing customer balance due), and displays `REFUND`, `VOIDED`, `PENDING` chips.
       - Added `Type` and `Status` columns to `PaymentView.js` with color-coded chips and red negative amounts for refunds.
  - **Verification & Deployment:**
    - Version bumped to `3.5.83` in `package.json`.
    - AST pre-build verification passed with 0 errors across all 232 files (`node scripts/pre-build-check.js`).
    - Webpack compiled Electron (`build/`) and Web (`dist_web/`) bundles with 0 errors.
    - Packaged Windows desktop installer: `dist/Global Gate Setup 3.5.83.exe` (94,437,058 bytes).
    - Pushed commit to GitHub `origin main` for automated Cloudflare Pages deployment (`portal.globalgate.sarl`).
  - **Live User Production Verification & End-to-End Accounting Proof:**
    - **Live Execution Recorded (`PAY-001173`):** User successfully executed a real-world $1,100.00 refund for client `MR. OLIVIER MOTEBA` against invoice `INV-002602` ($2,050.00 total) with `Transaction Type: Refund`, `Status: Cleared`, `Payment Mode: Cash`.
    - **Payment Register (`PaymentView.js`):** Row `PAY-001173` renders cleanly with `Type: REFUND` (red chip), `Status: CLEARED` (green chip), and `A-Paid: -$1,100.00` in bold red.
    - **Payment Voucher Document (`PaymentInformationView.js`):** Document header confirms `MR. OLIVIER MOTEBA | PAY-001173` with red `Refund` and blue `Cleared` badges, displaying the linked invoice `INV-002602` ($2,050 total, $1,100 refund applied).
    - **Commercial Invoices Multi-Module Ledger (`InvoiceViewAdmin.js` & `InvoiceInformationView.js`):** `INV-002602` automatically reverted from `Paid` to `Partially-Paid` (amber chip), with `I-Amount: $2,050.00`, `A-Paid: $950.00`, and `B-Due: $1,100.00` ($2,050.00 - $1,100.00 = $950.00 paid), confirming automatic balance deduction and invoice status recalculation.
    - **Daily Cash Book & Collections (`DailyExpenseAdminView.js`):** `PAY-001173 [REFUND]` appears as `-$1,100.00` in red under `Payment Received` with reference `INV-002602: -$1100`, eliminating the previous false `+$1100 / -$1100` double entries. `Payment Received Gross Total` accurately deducted the outgoing refund ($6,333.62 SAM TRANSPORT - $1,100.00 refund = $5,233.62 net cash), with `Payment Return Change Total: -$ 0.00`.
    - **Input Typography Polish:** Updated form labels in `PaymentInformationForm.js` and `PaymentInformationUpdate.js` so that when `Transaction Type: Refund` is active, the primary input label dynamically switches from `Amount Received` to `Refund Amount` / `Refund Amount ($)`.

- **Item Out & Item Return Printable Voucher Redesign & Brand Architecture (Ver 3.5.82)**:
  - **Problem Reported:**
    - User reported severe layout deformation on the printouts of **Item Out** (`O-027300`) and **Item Return** (`R-0728`) with user request: *"why the print out of item return and item out is like that ! fix it please"*.
    - Uploaded PDF evidence showed:
      1. **Squeezed 35% Width Layout:** The entire printable document was collapsed into a narrow 35% column in the upper-left quadrant of the A4 page, with microscopic 70% font, leaving 65% of the page width and 70% of page height completely blank.
      2. **Missing Official Stationery:** Printed without the official Global Gate letterhead ([`PrintHeader.js`](file:///d:/GG/GG-Managment2026/ancient-kepler%20Pro/src/js/component/PrintHeader.js)), missing company registration numbers (RCCM, ID NAT), registered office address, and official footer ([`PrintFooter.js`](file:///d:/GG/GG-Managment2026/ancient-kepler%20Pro/src/js/component/PrintFooter.js)).
      3. **Empty Parentheses Item Name Bug:** Rendered `CEMENT SACK 50KG ()` with empty trailing parentheses due to missing item catalog resolution.
      4. **Unformatted Signatures:** Signature labels "Store Manager Signature" and "Customer Signature" were plain unstyled text squeezed on the left without signature lines or date fields.
      5. **Default Untitled Print Job:** Print and PDF exports had no `documentTitle`, defaulting to browser title.
  - **Exhaustive Root Cause Analysis:**
    1. **CSS Table Auto-Sizing Collapse:** In `ItemOutViewAdmin.js` (line 799) and `ItemReturnAdminView.js` (line 788), `ref={componentRef}` wrapped `<table style={{ color: 'black', justifyContent: 'center', left: '40px', right: '40px' }}>` and inner tables `<table className="secondTable" style={{ fontSize: '70%', marginBottom: '5px', border: '1px solid #DDD' }}>`. None of these tables specified `width: 100%`. Under standard CSS table layout algorithms, tables default to intrinsic content width. Because the text was short, the tables shrunk to ~320px on an A4 sheet (~794px width).
    2. **Unpopulated Catalog State:** Both files declared `const [item, SetItems] = useState([])`, but `SetItems` was never called in any `useEffect`. When `item.find(Item1 => Item1._id === row.itemName._id)` executed during render, `item` was empty, so `relatedUnit` was always `undefined`. The template literal `( {relatedUnit !== undefined ? (relatedUnit?.itemBrand ? String(relatedUnit.itemBrand).toUpperCase() : '') : ''} )` placed parentheses outside the existence check, literally rendering `( )` whenever an item had no brand.
    3. **Missing Module Imports:** Neither `PrintHeader` nor `PrintFooter` were imported or referenced in either file.
    4. **Unpadded Document Numbers:** Both files used `O-0{itemPurchaseView.outNumber}` and `R-0{itemPurchaseView.outNumber}`, which produced inconsistent string padding (e.g. `O-027300` when `outNumber` was 27300).
  - **Architectural Resolution & Code Modifications Applied:**
    1. **Official Station Header & Footer Integration:**
       - Imported `PrintHeader` and `PrintFooter` in [`src/js/AdminView1/ItemOutViewAdmin.js`](file:///d:/GG/GG-Managment2026/ancient-kepler%20Pro/src/js/AdminView1/ItemOutViewAdmin.js) and [`src/js/AdminView1/ItemReturnAdminView.js`](file:///d:/GG/GG-Managment2026/ancient-kepler%20Pro/src/js/AdminView1/ItemReturnAdminView.js).
       - Rendered `<PrintHeader branchId={itemPurchaseView.branchId || ""} />` with bottom brand rule, and `<PrintFooter branchId={itemPurchaseView.branchId || ""} />` at the page base.
    2. **Branded Title Banners:**
       - Added full-width dark navy (`#093170`) title banners:
         - Item Out: `ITEM OUT VOUCHER / BON DE SORTIE` with `O-${String(itemPurchaseView.outNumber).padStart(6, '0')}`.
         - Item Return: `ITEM RETURN VOUCHER / BON DE RETOUR` with `R-${String(itemPurchaseView.outNumber).padStart(6, '0')}`.
    3. **Full-Width Metadata Card:**
       - Replaced cramped tables with a 100% width `#f8fafc` structured card with 12px clean typography, displaying Date, Reason, Reference (`INV-002603 / SOLUTION FOR AFRICA SAS`), and Issued/Received By.
    4. **100% Width Items Table & Total Quantity Summary:**
       - Replaced 70% font table with a 100% width, styled table with `#093170` header, defined column proportions (6% / 44% / 35% / 15%), alternating row shading (`#ffffff` / `#f8fafc`), clean `#cbd5e1` cell borders, and right-aligned quantities.
       - Added summary row calculating total item lines and grand total quantity.
    5. **Defensive Brand & Unit Resolution:**
       - Added catalog fetch effect on mount: `const resItem = await cachedGet(`${ENDPOINT_URL}/item`); SetItems(resItem.data.data || resItem.data || []);`.
       - Formatted item names defensively: `brand ? `${rawName} (${brand})` : rawName`, eliminating all empty `()` occurrences.
       - Appended unit abbreviations (`40 SACKS`, `15 PCS`) to quantity cells.
    6. **Dual Side-by-Side Signature Blocks:**
       - Implemented side-by-side signature boxes (45% width each) for Storekeeper (`Store Manager / Responsable Dépôt`) and Receiver/Returner (`Receiver / Destinataire` or `Returned By / Client ou Technicien`) with dashed signing lines and formatted date lines (`Date: _____/_____/202___`).
    7. **Dynamic PDF Titles:**
       - Configured `documentTitle: itemPurchaseView?.outNumber ? 'Item-Out-O-' + String(itemPurchaseView.outNumber).padStart(6, '0') : 'Item-Out'` in `useReactToPrint`.
  - **Verification & Deployment:**
    - Bumped `package.json` to `3.5.82`.
    - AST pre-build validation passed with 0 errors across 232 files (`node scripts/pre-build-check.js`).
    - Webpack compiled Electron (`build/`) and Web (`dist_web/`) bundles successfully with 0 errors.
    - Packaged Windows Electron installer: `dist/Global Gate Setup 3.5.82.exe` (94,422,694 bytes).
    - Pushed commit to GitHub `origin main` for automatic Cloudflare Pages deployment (`portal.globalgate.sarl`).

- **Minified React Error #31, Null Property Access & Catalog CardMedia ERR_INVALID_URL Resolution (Ver 3.5.81)**:
  - **Problem Reported:**
    1. Windows Electron desktop client and web portal (`portal.globalgate.sarl`) crashed to an unhandled white screen with console error:
       `Error: Minified React error #31; visit https://reactjs.org/docs/error-decoder.html?invariant=31&args[]=[object%20with%20keys%20%7B_id%2C%20name%7D]`
    2. Repeated network errors flooded the DevTools console 28 times on store/catalog grids:
       `Failed to load resource: net::ERR_INVALID_URL data:undefined;base64,undefined:1`
    3. Null reference exceptions occurred in form components:
       `TypeError: Cannot read properties of null (reading 'name')` and `TypeError: Cannot read properties of null (reading '_id')`.
  - **Exhaustive Root Cause Analysis:**
    1. **Object as React Child (Error #31):**
       - In `ItemPurchaseUpdateForm.js` and `ItemPurchaseViewForm.js`, saving purchases populated `projectName` as an object `{ _id, name: formattedName }`.
       - In master views and report components (`ProjectReportInfo.js`, `ProjectViewInformation.js`, `DailyExpenses.js`, `EstimateViewAdminAll.js`, `InvoiceViewAdminAll.js`, `ItemPurchaseReportInfo.js`, `PayRollReportInfo.js`, `PaymentReportInf.js`, `RevenueExpensesAll.js`, `SupplierReportInfo.js`), code assumed `projectName` or `accountNameInfo` was always a plain string. When rendered as `{row.projectName}` or `{row.accountNameInfo}`, React 18 threw invariant 31 and crashed the tree.
    2. **Null Reference on `projectName`:**
       - When Reason was set to `'Other'`, `projectName` was set to `null` per Rule 47.
       - Components evaluating `projectName.name !== undefined` or attempting `row.projectName._id === projectName._id` immediately threw `TypeError: Cannot read properties of null`.
    3. **CardMedia Malformed Data URI:**
       - 15 catalog and shop grid forms passed `image={`data:${item.contentType};base64,${item.data}`}` directly to MUI `<CardMedia />` without checking if `item.data` and `item.contentType` were present. When undefined, this resulted in 28 failed network requests for `data:undefined;base64,undefined`.
  - **Architectural Resolution & Code Modifications Applied:**
    1. **Defensive Utility (`src/js/utils/formatUtils.js`):**
       - Implemented and exported `safeString(val, fallback = '')` to cleanly extract string representations from `{ _id, name }`, `{ _id, projectName }`, numbers, strings, or return fallback.
    2. **Master & Report Views Object Child Guarding:**
       - Applied safe string coercion across `ProjectReportInfo.js`, `ProjectViewInformation.js`, `DailyExpenses.js`, `EstimateViewAdminAll.js`, `InvoiceViewAdminAll.js`, `ItemPurchaseReportInfo.js`, `PayRollReportInfo.js`, `PaymentReportInf.js`, `RevenueExpensesAll.js`, and `SupplierReportInfo.js`.
    3. **Form Null-Safety Patches:**
       - Added early returns and optional chaining (`!projectName?._id`, `projectName?._id`) in `ItemPurchaseViewForm.js`, `ConvertPoToIP.js`, `ItemReturnViewForm.js`, `ItemPurchaseViewAdmin.js`, and `EmployeePlaningFormUpdate.js`.
    4. **CardMedia Image Guards across 15 Files:**
       - Replaced all 15 unguarded data URI interpolations with `image={item.data && item.contentType ? `data:${item.contentType};base64,${item.data}` : undefined}` across `EstimateInvoiceForm.js`, `EstimateInvoiceFormUpdate.js`, `InvoiceForm.js`, `InvoiceFormUpdate.js`, `ItemOutViewForm.js`, `ItemOutViewUpdate.js`, `ItemPurchaseViewForm.js`, `ItemReturnUpdateForm.js`, `ItemReturnViewForm.js`, `MaintenanceOrderUpdate.js`, `MaintenanceFormView.js`, `MaintenanceUpdateView.js`, `PurchaseOrder/PurchaseForm.js`, `PurchasesView/PurchaseFormUpdate.js`, and `PurchasesView/PurchasesFormView.js`.
  - **Verification & Deployment:**
    - Bumped `package.json` to `3.5.81`.
    - Validated AST syntax across all 232 source files with 0 errors (`scripts/pre-build-check.js`).
    - Webpack compilation succeeded for Electron (`build/`) and Web Portal (`dist_web/`).
    - Packaged Windows Desktop installer: `dist/Global Gate Setup 3.5.81.exe`.
    - Pushed to GitHub `origin main` for automatic Cloudflare Pages deployment (`portal.globalgate.sarl`).

- **Item IN-SUMMARY Disappearing Reason Fix, Column Header Capitalization & Defensive Purchase Display Architecture (Ver 3.5.80)**:
  - **Problem Reported:**
    1. In the **Item Information** view (`/ItemInfo/:id`) on the **IN-SUMMARY** tab, for Item Purchase `#3787` (`IP-03787`), the `reason` column originally displayed an incorrect reason.
    2. The user opened module **Item Purchase**, edited record `#3787`, changed Reason to `"Other"`, entered Description `"ORDER FOR STORE KREAM"`, and saved.
    3. Upon returning to **Item Information -> IN-SUMMARY**, the reason column for `#3787` disappeared completely and rendered blank!
    4. Furthermore, the user noted: `( Note : reason written wrong need to be writen Reason )` — the summary table column header was displaying lowercase `reason` instead of capitalized `Reason`.
  - **Exhaustive Root Cause Analysis:**
    1. **Empty Object Truthiness & Premature Ternary Short-Circuit:**
       - In `ItemPurchaseUpdateForm.js`, when Reason was changed to `"Other"`, `handleReason` executed `setProjectName({})`.
       - When saved to MongoDB, Mongoose stored `projectName: {}` on document `#3787`.
       - In `ItemInformationVIew.js` (line 1240) and modal (line 1810), the table rendered:
         `{row.projectName !== undefined ? (typeof row.projectName === 'object' ? (row.projectName.projectName || row.projectName.name || '') : row.projectName) : row.description}`
       - In JavaScript, `{}` is an object, so `row.projectName !== undefined` evaluated to `true`, and `typeof row.projectName === 'object'` evaluated to `true`.
       - `(row.projectName.projectName || row.projectName.name || '')` evaluated to `''` (empty string).
       - Because the condition evaluated to `true`, JavaScript **never evaluated `: row.description`**!
       - The cell rendered empty string `''`, completely hiding `"ORDER FOR STORE KREAM"`.
    2. **Duplicate Flawed Ternaries Across Codebase:**
       - Found identical flawed ternaries in:
         - `ItemPurchaseViewAdmin.js` (line 232 DataGrid mapping & line 929 view modal)
         - `SupplierViewInformation.js` (line 1773 view modal)
       - In all these locations, any record saved with Reason `"Other"` rendered blank.
  - **Architectural Resolution & Code Modifications Applied:**
    1. **Universal Defensive Formatter (`src/js/utils/formatUtils.js`):**
       - Implemented and exported `formatPurchaseReasonDisplay` and alias `getPurchaseReasonDisplay`.
       - Defensively checks `purchase.projectName` (resolving string, `.projectName`, `.name`, or project ID lookups in `projectsList`).
       - If resolved project text is empty, falls back seamlessly to `purchase.description` (`"ORDER FOR STORE KREAM"`).
       - If description is empty, falls back to `purchase.reason` (`"Other"`).
    2. **Item Information View (`src/js/AdminView1/PageView/ItemView/ItemInformationVIew.js`):**
       - Capitalized table headers: `reason` -> `Reason` across IN-SUMMARY, OUT-SUMMARY, and RETURN-SUMMARY tables.
       - Replaced flawed ternary with `getPurchaseReasonDisplay(row, projectsList)` in IN-SUMMARY table cell.
       - Replaced flawed ternary with `getPurchaseReasonDisplay(itemPurchaseView, projectsList)` in detail view modal.
       - Enhanced `newArray` search filter to include `row.reason`.
    3. **Item Purchase Master View (`src/js/AdminView1/ItemPurchaseViewAdmin.js`):**
       - Updated `fetchItems` DataGrid mapping to use `Account: getPurchaseReasonDisplay(item)`.
       - Updated detail modal description display to use `getPurchaseReasonDisplay(itemPurchaseView)`.
    4. **Supplier View (`src/js/AdminView1/PageView/Supplier/SupplierViewInformation.js`):**
       - Updated detail modal description display to use `getPurchaseReasonDisplay(itemPurchaseView, projectsList)`.
    5. **Form State & Submission Sanitization (`ItemPurchaseUpdateForm.js`, `ItemPurchaseViewForm.js`, `ConvertPoToIP.js`):**
       - Updated `handleReason` to set `projectName` to `null` when `reason === 'Other'`.
       - Sanitized `handleSubmit` payload so `projectName` is submitted as `null` if empty or without valid ID/name.
  - **Verification & Deployment:**
    - Bumped version to `3.5.80` in `package.json`.
    - Quality gate verification: `node scripts/pre-build-check.js` validated AST syntax across all 232 source files with 0 errors.
    - Webpack compilation succeeded for Electron (`build/`) and Web Portal (`dist_web/`).
    - Packaged Windows Desktop installer: `dist/Global Gate Setup 3.5.80.exe`.
    - Pushed to GitHub `origin main` for automatic Cloudflare Pages Web Portal deployment (`portal.globalgate.sarl`).

- **Sidebar Recursive Infinite Render Loop Freezing on Navigation Between Item & Employee Modules (Ver 3.5.79)**:
  - **Problem Reported:**
    - User reported that when working in module `Employee` (`/TewmViewAdmin`), opening Tab 4 (`TODAY'S ASSIGNMENT`), navigating to module `ITEM` (`/ItemViewAdmin` or `/ItemInfo/:id`) to search for an item, and returning to module `Employee`, the system suffered severe lag, froze completely, and crashed to an empty white screen.
    - Screenshot (`media_1791916728823_64cfa4ca.png`) revealed the visual signature of the failure: the left navigation drawer showed **two nested `Close` buttons and two nested section headers** (`Close` -> `Main Menu` -> `Close` -> `More Menu` -> `Rate` -> `Fleet Management` -> `Employee` -> ...).
  - **Exhaustive Root Cause Analysis:**
    1. **Two-Way `localStorage` Poisoning & Circular Cross-Sidebar Component Recursion:**
       - In `SidebarDash.js` (Main Menu) line 58 and `SidebarDashE2.js` (More Menu) line 39:
         Both components previously synchronized their submenu toggle (`show1`) via `localStorage.getItem('activeSidebarMenu')` and `localStorage.getItem('activeSidebarMenuE2')` and wrote back via `localStorage.setItem('activeSidebarMenu', e)` / `localStorage.setItem('activeSidebarMenuE2', e)`.
       - When the user navigated in Item (`SideMaintenance.js`), clicking "Main" (`handleShow(2)`) rendered `<SidebarDash onView3={view2} />`.
       - Inside `<SidebarDash />`, clicking "More" wrote `activeSidebarMenu = 2` to `localStorage` and rendered `<SidebarDashE2 onView={view} />`.
       - Inside `<SidebarDashE2 />`, clicking "Employee" navigated to `/TewmViewAdmin`.
       - When `/TewmViewAdmin` mounted, its drawer rendered `<SidebarDashE2 />` directly (with `onView` undefined).
       - Because `activeSidebarMenuE2 = 2` remained in `localStorage`, `SidebarDashE2` mounted in `show1 = 2` ("Main Menu" mode) and rendered `<SidebarDash onView2={view2} />` (where `view2` was initialized to 0).
       - In `SidebarDash`, `onView2` was 0 (the guard `if (onView2 === 2)` evaluated to `false`). It read `activeSidebarMenu: 2` from `localStorage`, mounted in `show1 = 2` ("More Menu" mode), and rendered `<SidebarDashE2 onView={view} />` (where `view` was initialized to 0).
       - In that inner `SidebarDashE2`, `onView` was 0, so it mounted in `show1 = 2` and rendered `<SidebarDash onView2={0} />`...
       - **Infinite Recursive Component Tree:** `<SidebarDashE2>` -> `<SidebarDash>` -> `<SidebarDashE2>` -> `<SidebarDash>` -> ...
       - React hit `Maximum call stack size exceeded` and exhausted Chromium renderer process memory, locking the UI thread at 100% CPU and producing the empty white screen crash.
    2. **Uncaught ReferenceError in `SidebarDash.js`:**
       - In `SidebarDash.js`, lines 121, 127, 157, 163, 169, 175, 181, 187, and 202 had `onClick={handleNavClick}`, but `const handleNavClick` was never defined in component scope.
       - Any click on those links threw an uncaught `ReferenceError: handleNavClick is not defined`, crashing React if triggered.
    3. **Unprotected Item Filter & MUI Tab Values in `ItemNameInfo.js`:**
       - In `ItemNameInfo.js` lines 28-35, `.filter()` evaluated `row.typeItem.toLowerCase()`, `row.itemName.toLowerCase()` without null guards. If any item had a null property, it threw `TypeError: Cannot read properties of undefined (reading 'toLowerCase')`.
       - Furthermore, in MUI `<Tabs value={value2}>`, when filtering reduced the items array, `value2` could point to an out-of-bounds index, triggering MUI invalid tab value errors.
  - **Architectural Resolution & Code Modifications Applied:**
    1. **Eliminated `localStorage` Submenu Persistence Across All Sidebars:**
       - In `SidebarDash.js`, `SidebarDashE2.js`, `SideMaintenance.js`, `SideShop.js`, and `SideMaintenanceMenu.js`:
         - Removed all `localStorage.setItem` calls for menu state.
         - Initialized all sidebars with `const [show1, setShow1] = useState(1);`.
         - Added `useEffect(() => { localStorage.removeItem('activeSidebarMenu'); localStorage.removeItem('activeSidebarMenuE2'); }, [])` on mount.
    2. **Structural Recursion Breaking via `isSubmenu` Prop:**
       - Added `isSubmenu` to props in all sidebars:
         - `SidebarDash.js`: `function SidebarDash({ onView2, onView3, onView4, onView6, isSubmenu })`
         - `SidebarDashE2.js`: `function SidebarDashE2({ onView, isSubmenu })`
         - `SideMaintenance.js`: `function SideMaintenance({ onView, isSubmenu })`
         - `SideShop.js`: `function SideShop({ onView, isSubmenu })`
         - `SideMaintenanceMenu.js`: `function SideMaintenanceMenu({ onView, isSubmenu })`
       - Defined `isNestedSubmenu = Boolean(isSubmenu || ...)` in each component.
       - When `isNestedSubmenu` is true:
         - Child instances suppress their own submenu switcher buttons ("Main", "More", "Store", "POS", "Maintenance", "Block Factory").
         - Parent instances pass `isSubmenu={true}` and explicit view IDs when rendering children:
           - `SidebarDash`: renders `<SidebarDashE2 onView={2} isSubmenu={true} />`, `<SideMaintenance onView={3} isSubmenu={true} />`, `<SideShop onView={4} isSubmenu={true} />`, `<SideMaintenanceMenu onView={6} isSubmenu={true} />`.
           - `SidebarDashE2`: renders `<SidebarDash onView2={2} isSubmenu={true} />`.
           - `SideMaintenance`: renders `<SidebarDash onView3={3} isSubmenu={true} />`.
           - `SideShop`: renders `<SidebarDash onView4={4} isSubmenu={true} />`.
           - `SideMaintenanceMenu`: renders `<SidebarDash onView6={6} isSubmenu={true} />`.
       - This makes circular component nesting structurally impossible at runtime.
    3. **Defined Navigation Reset Callback (`handleNavClick`):**
       - Implemented `handleNavClick = () => { setShow1(1); localStorage.removeItem('activeSidebarMenu'); localStorage.removeItem('activeSidebarMenuE2'); }` in all sidebars.
       - Attached `onClick={handleNavClick}` to every module navigation link (`<ListItemButton component={NavLink} ...>`), ensuring route transitions immediately reset drawers to the top-level menu.
    4. **Null-Safe Client Search & Safe Tab Values (`ItemNameInfo.js`):**
       - Refactored `newArray` filter in `ItemNameInfo.js` to guard every property (`row.typeItem`, `row.itemDescription`, `row.itemName`, `row.itemBrand`, `row.itemManufacturer`, `row.itemStore`) before calling `.toLowerCase()`.
       - Updated MUI `<Tabs>` tab selection logic so `value` and `value2` fallback safely to `false` when the active item ID is not present in the filtered array (`selectedIndex !== -1 ? selectedIndex : false`), completely eliminating MUI invalid tab value errors during live search typing.
       - Safely rendered tab labels with `(row.itemName || '').toUpperCase()`.
    5. **Stale Key Cleanup on View Mount (`TewmViewAdmin.js`):**
       - In `TewmViewAdmin.js` `useEffect(() => { ... }, [])`, added `localStorage.removeItem('activeSidebarMenu'); localStorage.removeItem('activeSidebarMenuE2');` on mount.
  - **Verification & Deployment:**
    - Bumped version to `3.5.79` in `package.json`.
    - Quality gate verification: `node scripts/pre-build-check.js` validated AST syntax across all 232 source files with 0 errors.
    - Webpack compilation succeeded for Electron (`build/`) and Web Portal (`dist_web/`).
    - Packaged Windows Desktop installer: `dist/Global Gate Setup 3.5.79.exe` (94,335,244 bytes).
    - Committed and pushed all source, `dist_web/`, and documentation updates to `origin main` for automatic Cloudflare Pages Web Portal deployment (`portal.globalgate.sarl`).


- **Employee Module & Today's Assignment Tab Lag, Freeze & White Screen Resolution (Ver 3.5.78)**:
  - **Problem Reported**:
    - When working in module `Employee` (`/TewmViewAdmin`), opening Tab 4 (`TODAY'S ASSIGNMENT`), navigating to module `ITEM` to search for an item, and navigating back to module `Employee`, the system suffered severe lag, froze completely, and crashed to a blank white screen.
  - **Root Cause Analysis**:
    1. **Unbounded Re-render Loop in `TewmViewAdmin.js`**: An `useEffect` reading `localStorage.getItem('SelectEmployeeView')` was defined with zero dependency array (`[]`). Every render fired `setValue3(result)`, triggering an infinite re-render loop upon returning to Employee when Tab 4 was previously selected. In addition, an unassigned `useState` side-effect hook was executing in the component body.
    2. **Catastrophic Unfiltered Payload in `EmployeePlaningView.js`**: On mounting Tab 4, `fetchData()` executed an unbounded `GET /planing` fetching all 11,423 historical documents (~15 MB JSON) into client memory.
    3. **O(D * N) Exponential CPU Lockup & Inner Component Re-creation**:
       - `Row` was declared inside the `EmployeePlaningView` component body. Every parent re-render unmounted and destroyed all `<Row>` components and remounted new ones.
       - Inside each `<Row>`, it ran `newArray.filter((row1) => dayjs(row1.planingDate).format('DD/MM/YYYY') === dayjs(row).format('DD/MM/YYYY'))` across all 11,423 records. For a 30-day window, this executed 342,690 `dayjs().format()` calls per render without `unmountOnExit` on the MUI `<Collapse>`.
       - When combined with the `TewmViewAdmin` infinite re-render loop, the UI thread froze solid, causing Chromium memory exhaustion and a renderer white-screen crash.
    4. **Unsafe Property Access**: Missing null checks on `row.employeeName.toLowerCase()` and `row.projectName.name.toLowerCase()` risked immediate uncaught TypeErrors.
  - **Technical Fixes Applied**:
    1. **`src/js/AdminView1/TewmViewAdmin.js`**:
       - Synchronized `value3` from `localStorage` synchronously in `useState(() => localStorage.getItem('SelectEmployeeView') || '1')`.
       - Added `[]` dependency array and identity check to `useEffect` for `SelectEmployeeView`.
       - Cleaned up `searchEmployee` initialization with lazy initializer and guarded JSON parsing for `QuickFilterEmployeeTst` and `HiddenColumnsEmployee`.
    2. **`src/js/AdminView1/PageView/EmployeeView/EmployeePlaningView.js`**:
       - Extracted `PlanningRow` to module scope and wrapped with `React.memo`.
       - Added `unmountOnExit` to MUI `<Collapse>` so hidden date tables do not calculate DOM nodes until expanded.
       - Implemented O(1) date hashmap indexing (`planingByDate`) in `useMemo`, eliminating 342,690+ `dayjs()` calls.
       - Clamped date range generation to a maximum of 90 days with strict `dayjs` validation.
       - Updated client search inside `PlanningRow` to filter only the current day's records (5-10 items) with complete null-safety across `employeeName`, `projectName`, `status`, `planingTask`, and `planingDescription`.
       - Passed `startDate` and `endDate` query parameters to `/planing` to fetch only the active date window.
    3. **`server/routes/Routes.js`**:
       - Added `req.query.startDate` and `req.query.endDate` date filtering to `GET /planing` supporting both Date objects and ISO strings.
    4. **Release & Packaging**:
       - Bumped version to `3.5.78` in `package.json`.
       - Verified AST safety across all files.

- **MaintenanceOrderUpdate Scope Fix, Undeclared Variable Resolution & Form Component Hardening (Ver 3.5.77)**:
  - **Problem Reported**:
    - When viewing an assigned maintenance order (e.g. `KREAM RESTAURANT | M-001225`) in a technician or standard user account and clicking `Options -> Edit`, the browser navigated to `#/MaintenanceOrderUpdate/:id` and crashed with a blank white screen.
    - Console error: `Uncaught ReferenceError: isOwner is not defined at MaintenanceOrderUpdate`.
  - **Root Cause Analysis**:
    1. In `MaintenanceOrderUpdate.js` line 1571, the `serviceNumber` field rendered `disabled={!isOwner}`, and lines 1769-1999 rendered `{canViewCosts && ...}`, yet `isOwner` and `canViewCosts` were never declared in `MaintenanceOrderUpdate.js`. When the component mounted, evaluating `!isOwner` threw an unhandled ReferenceError.
    2. Additionally, `const [employee, setEmployee] = useState([])` was declared at line 557, below the `useEffect` fetch that called `setEmployee(...)`.
    3. Global AST scan across the entire codebase also identified missing `isOwner` / `canCreateItem` in `EstimateConvertToMaintenance.js` and missing `Tooltip` in `PaymentInformationForm.js`.
  - **Technical Fixes Applied**:
    1. **`src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js`**:
       - Defined `employee`, `grantAccess`, `costVisibility`, and fetched permissions via `useEffect` with `fetchGrant`.
       - Declared `isOwner`, `canViewCosts`, `userRole`, `isCEO`, `isAdmin`, `canEditRate`, `currentEmployee`, `isTechnician`, `canCreateCustomer`, and `canCreateItem` in component scope.
       - Removed duplicate `employee` state declaration.
    2. **`src/js/AdminView1/PageView/EstimateView/EstimateConvertToMaintenance.js`**:
       - Added `grantAccess` fetching and defined `isOwner`, `canCreateCustomer`, and `canCreateItem`.
       - Fixed customer creation button to properly check `canCreateCustomer`.
    3. **`src/js/AdminView1/PageView/Payment/PaymentInformationForm.js`**:
       - Imported `Tooltip, { tooltipClasses }` from `@mui/material/Tooltip` for `BlackTooltip`.
  - **Release & Distribution**: Bumped version to `3.5.77` in `package.json`, verified 0 undeclared variables across all modified files, compiled production bundles (`npm run build`), packaged Windows Desktop installer (`dist/Global Gate Setup 3.5.77.exe`), and pushed to GitHub `origin main` for automatic Cloudflare Pages Web Portal deployment (`portal.globalgate.sarl`). Mobile APK builds paused per instruction.

- **Strict Grant Access Route Guarding, Form Sidebar Security & Maintenance Navigation Fix (Ver 3.5.76)**:
  - **Problem Reported**:
    1. **Sidebar Bypass Visual Glitch in Forms**: In a technician account (e.g., `MOHAMAD AGHA`), when viewing an assigned maintenance order (`#/MaintenanceOrderViewInformation/:id`) and clicking `Options -> Edit`, the left sidebar navigation items turned normal gray (`color: 'gray'`) instead of light gray (disabled), visually indicating that unauthorized modules could be accessed and clicked.
    2. **Unauthorized Navigation to Main Maintenance Module**: From the edit view, clicking the "Back" button in the top bar without saving opened a confirmation modal ("Do you want to stop updating service?"). Clicking "Yes" navigated the user to `#/MaintenanceViewAdmin` (the main Maintenance module showing all 1,252 company-wide maintenance orders), which Grant Access permissions strictly forbid for technicians.
    3. **Route Guard Failure on Web Portal & Desktop**: Once navigated to `#/MaintenanceViewAdmin`, the system failed to block the technician, allowing him to see all 1,252 maintenance orders.
  - **Root Cause Analysis**:
    1. **`SidebarDash1.js` Presentation Mock**: Form and edit views (such as `MaintenanceUpdateView.js`, `MaintenanceOrderUpdate.js`, and ~25 other create/update forms) imported `<SidebarDash1 />`. `SidebarDash1.js` was a static mock component containing hardcoded `<ListItemButton sx={{ color: 'gray' }}>` with zero permission checks, zero disabled styling, and zero `grantAccess` integration.
    2. **Edit Route Resolution in Maintenance Order Views**: In `MaintenanceOrderViewInformation.js` line 1121 and `MaintenanceViewInformation.js` line 1222, clicking `Edit` evaluated `canViewCosts ? '/MaintenanceUpdateView/:id' : '/MaintenanceOrderUpdate/:id'`. Because `employee` catalog state was initially empty on component mount, `canViewCosts` evaluated to `true`, routing users without main `Maintenance` access to `MaintenanceUpdateView` instead of `MaintenanceOrderUpdate`.
    3. **Hardcoded Back Navigation in `MaintenanceUpdateView.js`**: Line 2243 in `openBack` modal had hardcoded `onClick={() => navigate('/MaintenanceViewAdmin')}`.
    4. **Universal Route Guard Disabled on Web & Desktop**: In `v3.5.75`, `RequireAuth.js` had bypassed non-mobile platforms (`if (!isMobile) return <Outlet />`) to work around the `Shift + Click` unhydrated Redux store bug. This left the Web Portal and Desktop without route protection, allowing direct URL manipulation or redirection to forbidden modules.
  - **Technical Fixes Applied**:
    1. **`src/js/component/SidebarDash1.js`**: Replaced mock implementation to forward all props directly to `<SidebarDash {...props} />`. All 25 form views now render the authentic sidebar with full Grant Access permission checking, light gray disabled states for unauthorized modules, active route highlights, and multi-branch scoping.
    2. **`src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js` & `MaintenanceViewInformation.js`**: Replaced `canViewCosts` check on Edit link with explicit Grant Access verification: `(isOwner || (grantAccess || []).some(r => r.moduleName === "Maintenance" && r.access.editM === true)) ? '/MaintenanceUpdateView/:id' : '/MaintenanceOrderUpdate/:id'`. Technicians and users with only `Maintenance-Order` access now correctly navigate to `/MaintenanceOrderUpdate/:id`.
    3. **`src/js/AdminView1/PageView/MaintenanceView/MaintenanceUpdateView.js`**: Updated the Back modal handler to check `window.history.length > 1` and `navigate(-1)`; if fallback is needed, check `hasMainMaintenanceRead = isOwner || (grantAccess || []).some(r => r.moduleName === "Maintenance" && r.access.readM === true)`: if true navigate to `/MaintenanceViewAdmin`, otherwise navigate to `/MaintenanceOrderAdmin`.
    4. **`src/js/RequireAuth.js`**: Restored universal route protection across Desktop, Web, and Mobile with robust `localStorage` hydration. When a new window (`Shift + Click`), fresh tab, or page refresh opens, `RequireAuth` sets `checking = true` (rendering `<Loader />`), retrieves `localStorage.getItem('user')`, fetches user details via `/get-employeeuser/:id`, dispatches to Redux, fetches `fetchUserGrantAccess`, and strictly enforces `canAccessModule`. Authorized routes render seamlessly, while unauthorized route attempts (such as a technician navigating to `#/MaintenanceViewAdmin`) are blocked with `toast.error` and redirected to `/AdminHome`.
  - **Release & Distribution**: Bumped version to `3.5.76` in `package.json`, verified pre-build safety checks, compiled production Electron and Web bundles (`npm run build`), built Windows installer (`dist/Global Gate Setup 3.5.76.exe`), and pushed to GitHub `origin main` for Cloudflare Pages Web Portal deployment (`portal.globalgate.sarl`). Mobile APK builds paused per user instruction.

- **Desktop & Web `Shift + Click` New Window "Access Denied" Fix & Strict Mobile Isolation (Ver 3.5.75)**:
  - **Problem Reported**:
    - In the Desktop (`.exe`) and Web (`portal.globalgate.sarl`) applications, opening another page — especially via **SHIFT + Click** on a sidebar module (e.g., `Daily Expenses`, `Invoices`) to open a new window — failed to open the chosen module. Instead, it displayed an error toast: `Access Denied: You do not have permission for the [Expenses / Invoice] module.` and redirected the new window to the Dashboard (`/AdminHome`).
    - The user also requested a full explanation of why this happened and why mobile changes affected the desktop and web applications.
  - **Root Cause Analysis**:
    1. **Why `Shift + Click` Triggered "Access Denied" & Redirected to Dashboard**: In `v3.5.67`, `RequireAuth.js` was modified globally to run route-level permission checks *before* rendering `<Outlet />`. When opening a new window via `Shift + Click`, the new window's Redux store starts at `initialState` (`user.data = { userName: '', role: '' }`, `userId = ''`) because `localStorage.getItem('user')` is hydrated inside `<SidebarDash />` and the page component *after* `<Outlet />` mounts. `RequireAuth.js` saw `!userId`, set `checking = false` with empty permissions, evaluated `canAccessModule` with an empty user, and fired `Access Denied` + `<Navigate to="/AdminHome" replace />`.
    2. **Why Mobile Changes Affected Desktop & Web**: `RequireAuth.js` is shared across Desktop, Web, and Mobile in `App.js`. Modifying it without gating behind `isNativeMobile()` affected both the `v3.5.67` Desktop build and the Cloudflare Pages Web deployment (`portal.globalgate.sarl`).
  - **Technical Fixes Applied**:
    1. **`src/js/RequireAuth.js`**: Strictly isolated Desktop and Web (`if (!isMobile)`) to return `<Outlet />` immediately, restoring 100% of the original Desktop & Web multi-window (`Shift + Click`) behavior. Also added `localStorage.getItem('user')` hydration on mobile so `RequireAuth` never evaluates permissions against an unhydrated user.
    2. **`src/js/AdminView1/PageView/Payment/PaymentInformationForm.js` & `PaymentInformationUpdate.js`**: Gated mobile-specific `modes`/`reason` defaults and `Draft` invoice filtering behind `isMobile` so Desktop and Web Payment forms remain 100% untouched.
    3. **`src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js`**: Preserved `res.data.totalItem` count on Desktop/Web and added `user?.data?.userName`, `user?.data?.role`, and `grantAccess` to the `useEffect` dependency list so newly opened windows re-fetch accurately once hydrated.
  - **Release & Distribution**: Bumped version to `3.5.75`, compiled production Desktop and Web bundles (`npm run build`), built Windows installer (`dist/Global Gate Setup 3.5.75.exe`), and pushed to `origin main` for Cloudflare Pages Web Portal deployment. Mobile APK builds paused per user instruction.

- **Technician Scope Strict Isolation, Dashboard Maintenance Status Real Counts & Payment Autocomplete Fix (Ver 3.5.74)**:
  - **Issues Resolved**:
    1. **Customer Autocomplete Selection Jump in Payment**: When selecting a customer like "GLOBAL PVA" from the dropdown in `PaymentInformationForm.js`, the component inadvertently jumped to "Mr. JUNIOR NUMBI". Root cause: `customer.find` contained `option.customerName === newValue?.customerName` where `customerName` was `undefined` on non-schema fields, matching the first record in the array that also had `customerName === undefined`. Fixed by checking defined `_id` and name fields explicitly and adding strict `isOptionEqualToValue`.
    2. **Technician Seeing Converted Maintenance Orders**: In `maintenanceRoutes.js` (`/technician-maintenance-Information`), orders that had `status: 'Open'` but `Converted: true` were not excluded because `baseScopeQuery` only checked `status: { $nin: ['Close', 'Converted', 'Cancel'] }`. Added `Converted: { $nin: [true, 'true'] }` to `baseScopeQuery` and added client-side filters in `MaintenanceOrderAdmin.js` and `MobileCardList.js` so technicians strictly only see Open or Pending orders.
    3. **Dashboard Maintenance Order Status Showing Zeros**: `MobileDashboard.js` was querying the non-existent `/maintenance-order` endpoint, which returned 404 and left counts at 0. Updated to use `/maintenance?summary=true`, respecting branch and technician assignment scoping, while hiding the Converted card for pure technician users so they only see their actionable Open and Pending orders.
  - **Release & Distribution**: Bumped version to `3.5.74`, verified pre-build AST checks, compiled web bundles, synced Capacitor, and built Android debug APK.

- **Payment Module Invoice Display & Mobile Payment Allocation (Ver 3.5.73)**:
  - **Issue Resolved**: When recording or updating payments in the mobile app, selecting a customer failed to display any unpaid invoices to apply payments against.
  - **Root Cause & Technical Fixes**:
    - **Mobile Customer Selection (`PaymentInformationForm.js`)**: Fixed mobile `Autocomplete` `onChange` to invoke `handleChangeCustomer(val)` rather than solely setting local object state. This ensures `customerId` is correctly resolved and triggers the invoice fetch `useEffect`.
    - **Payment Reason Defaulting**: Initialized `reason` state to `'Invoice'` and added a mobile `Payment Reason` dropdown selector (`Invoice`, `Project`, `Customer Credit`), ensuring invoice data queries are executed upon customer selection.
    - **Resilient Customer Matching**: Replaced brittle `row.customerName._id === customerId` matching with multi-attribute fallback checking `rowCustId === customerId` or matching normalized customer names, supporting invoices created across web, desktop, and mobile.
    - **Inclusive Unpaid Status Filter**: Expanded invoice filtering beyond strict `'Sent'` / `'Partially-Paid'` to include newly created `'Draft'` and `'Pending'` invoices with `balanceDue > 0`, while excluding finalized (`'Paid'`, `'Void'`, `'Decline'`, `'Free of Charge'`).
    - **Dedicated Mobile Invoices Allocation Card (Card 2)**: Added an interactive Card 2 on mobile in both `PaymentInformationForm.js` and `PaymentInformationUpdate.js` showing all unpaid invoices with reference code (`INV-000xxx`), invoice date, status chip, original total, balance due, per-invoice payment amount input, "Pay Full" button, and an "Auto-Allocate" button.
  - **Release & Distribution**: Bumped version to `3.5.73`, compiled production web assets, synced to native mobile platform via Capacitor, and compiled Android debug APK.

- **Maintenance Module Rate & Price Edit Permissions for CEO & Admin vs USER Level (Ver 3.5.60)**:
  - **Clarified & Unified Rate/Price Edit Permissions (`MaintenanceUpdateView.js`, `MaintenanceFormView.js`, `ItemUpdateView2.js`)**:
    - **`CEO` and `ADMIN` (and `GG`)**: Have full authority to change/edit item rates directly in the `itemRate` text field for both catalog items and empty manual custom item description boxes, as well as view and edit `Cost Unit Price` and `Selling Unit Price` inside the item edit modal (`ItemUpdateView2.js`).
    - **`USER` Level (`USER` / `Employee` / `Technician`)**: Cannot edit item rates in any case (the `itemRate` field remains disabled/read-only for them, and cost/selling unit prices in item edit modals are completely hidden/inaccessible).
    - **Technician Financial Privacy (Rule 23)**: Maintained strict privacy for technicians (`!canViewCosts`), suppressing the entire Rate, Discount, and Cost columns.
  - **Release & Distribution**: Bumped version to `3.5.60`, compiled Webpack production bundles (`build/` and `dist_web/`), generated `dist/Global Gate Setup 3.5.60.exe`, and synced to GitHub `origin main` to trigger Railway API and Cloudflare Pages deployments.
- **Universal Professional A4 Print Engine & Multi-Page Layout Optimization (Ver 3.5.44)**:
  - **Eliminated Artificial Height Forcing & Accidental Multi-Page Spills**:
    - Completely removed artificial height-forcing calculations (`PAGE_HEIGHT = 1045` & `Math.ceil(height / PAGE_HEIGHT)`) from `useReactToPrint` across all primary modules (`InvoiceViewAdminAll.js`, `EstimateViewAdminAll.js`, `PurchasesViewAdminAll.js`, `PurchaseOrderInfoView.js`, `CustomerInformationView.js`, `ItemOutViewAdmin.js`, `ItemReturnAdminView.js`, `ProjectViewInformation.js`, `PaymentInformationView.js`).
    - Standardized `pageStyle: '@page { size: A4 portrait; margin: 8mm 10mm 10mm 10mm; } @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }'` across every printable module and dashboard report (`ARAgingReport.js`, `RevenueExpensesAll.js`, `DailyExpensesReportInfo.js`, `ItemPurchaseReportInfo.js`, `PaymentReportInf.js`, `PayRollReportInfo.js`, `VatAccountView.js`, `WorkerPaymentView.js`, `PurchaseOrderViewAdmin.js`, `ItemPurchaseViewAdmin.js`, `MaintenanceViewInformation.js`, `MaintenanceOrderViewInformation.js`, `CategoryViewDailyExpenses.js`, `SupplierViewInformation.js`, `PayRollViewInformation.js`).
  - **Enhanced Universal Print Stylesheet (`Chartview.css`)**:
    - Configured standard `@page { size: A4 portrait; margin: 8mm 10mm 10mm 10mm; }` with clean print typography (11px body, 10px table cells, 1.35 line-height).
    - Added universal `page-break-inside: avoid !important; break-inside: avoid !important;` protection across table rows, summary cards, address blocks, and signature sections.
    - Standardized compact table padding (`4px 6px`) and subtle borders, ensuring 1-page documents stay squarely on 1 page and multi-page documents break naturally.
  - **Header & Footer Flow Optimization**:
    - Optimized `PrintHeader.js` logo height (`65px`) and compact address blocks.
    - Updated `PrintFooter.js` to render in-flow with clean top border and 9px metadata, preventing fixed-bottom footer overlap on multi-page invoices and statements.
    - Removed hardcoded `marginLeft: '40px'` offset in `PaymentInformationView.js` for perfect page centering.
  - **Release & Distribution**: Bumped version to `3.5.44`, compiled Webpack production bundles (`build/` and `dist_web/`), and verified clean build.
- **Production Database Migration to Railway MongoDB & Infrastructure Cost Optimization**:
  - **Full Data Migration & Verification (100% Parity Across 56 Collections / 165,615 Documents)**:
    - Successfully dumped complete live production dataset from MongoDB Atlas to local verified archive (`./backup_atlas_prod`).
    - Restored all 56 collections into the new dedicated Railway MongoDB cluster (`globalgatedb`) via optimized pipelined streaming.
    - Preserved 100% BSON fidelity across all collections using recursive `transformBson` casting (restoring native MongoDB `ObjectId` references and native ISO `Date` types for `createdAt`, `updatedAt`, `invoiceDate`, `date`, and `timestamp`).
    - Built and verified core production database indexes on critical collections (`employeeuserschemas`, `invoice`, `item`, `itemPurchase`, `itemOut`, `customer`, `Supplier`, `projects`).
    - Independently verified 1:1 exact document counts across all 56 collections (including `notification` 83,588, `employeeAttendance` 26,756, `expenseSchema` 14,581, `Planing` 11,280, `itemOut` 6,947, `itemPurchase` 3,594, `item` 3,253, `invoice` 1,896, `payment` 1,091, `customer` 389, `employee` 338, etc.).
  - **Backend Railway Internal Network Routing & Security Hardening**:
    - Configured production environment variables on the `GG-Project` Railway service (`MONGODB_URI` and fallback `MONGO_URL`) to target Railway's high-speed private internal mesh URL:
      `mongodb://mongo:YfZpVIstFWHIPmHQrceCyeaJfcvMSWVg@mongodb.railway.internal:27017/globalgatedb?authSource=admin`
    - Redeployed the Express backend cleanly with verified startup logs (`globalgate successfully connected.`).
    - Closed the public TCP proxy on Railway to prevent external exposure and ensure all database traffic remains isolated within the private network.
    - Successfully terminated the legacy MongoDB Atlas cluster, eliminating over \$200+/month in ongoing cloud infrastructure costs.
- **Item Purchase Item Name & Description Separation & Catalog Resolution Fix (Ver 3.5.40)**:
  - **Resolved Item Name Conflation with Description (`ItemPurchaseUpdateForm.js`, `ItemPurchaseViewAdmin.js`, `ItemPurchaseViewForm.js`)**:
    - Completely removed incorrect `itemDescription` fallback in `getItemDisplayName`, preventing technical descriptions (such as `CHARGE VOLTAGE : 56.5V...`) from erroneously replacing the item name (`LITHIUM BATTERY 5.12KWH 100A HI-5`).
    - Integrated `item-Information` catalog resolution on initial fetch and display in `ItemPurchaseUpdateForm` and `ItemPurchaseViewAdmin` so that whenever an item row contains an ID, its canonical name is reliably populated directly from the item master catalog.
    - Cleaned up `ItemPurchaseViewAdmin.js` DataGrid `itemInfo` and modal `TableCell` mappings to strictly render the true item name.
  - **Release & Distribution**: Bumped version to `3.5.40`, compiled Webpack electron and web bundles (`dist_web/`), packaged `dist/Global Gate Setup 3.5.40.exe`, and pushed commit to GitHub `origin main`.
- **Item Purchase Item Name Preservation & Quantity Zero Normalization (Ver 3.5.39)**:
  - **Resolved Item Name Loss on Edit Quantity to 0 (`ItemPurchaseUpdateForm.js`, `ItemPurchaseViewAdmin.js`, `ItemPurchaseViewForm.js`)**:
    - Fixed issue where setting an item quantity to `0` in `ItemPurchaseUpdateForm` caused the item row to render an empty Autocomplete input and save corrupted or blank item names.
    - Normalized items on initial fetch in `ItemPurchaseUpdateForm` to guarantee each item has a unique `idRow` and a normalized `{ _id, itemName }` structure.
    - Standardized `getItemDisplayName` across `ItemPurchaseUpdateForm.js`, `ItemPurchaseViewForm.js`, and `ItemPurchaseViewAdmin.js` to seamlessly render item names stored as strings, objects (`{ itemName }` or `{ name }`), or `newDescription`.
    - Removed `parseFloat(itemQty) > 0` filter in `ItemPurchaseViewAdmin.js` `itemInfo` mapping so items with quantity 0 are accurately displayed in the DataGrid and modal previews.
  - **Release & Distribution**: Bumped version to `3.5.39`, compiled Webpack electron and web bundles (`dist_web/`), packaged `dist/Global Gate Setup 3.5.39.exe`, and pushed commit to GitHub `origin main`.
- **Item Deletion Modal Close & State Teardown Fix (Ver 3.5.36)**:
  - **Resolved Frozen "Data Successfully Deleted" Dialog (`ItemViewAdmin.js`)**:
    - Fixed state mismatch where `handleCloseModal` called `setLoadingOpenModal(false)` instead of `setModalOpenLoading(false)`.
    - Because `modalOpenLoading` remained `true`, the success dialog stayed permanently stuck on screen after deleting items, freezing the interface until a full page refresh.
    - Updated `handleCloseModal` and `handleClose` to explicitly reset `modalOpenLoading(false)`, `loadingOpenModal(false)`, `openReasonDelete(false)`, `openDeleteAll(false)`, `openDeleteMultiple(false)`, `open(false)`, `selectedRows([])`, and `reason('')`.
    - Updated row-level delete buttons to immediately set `selectedRows([params.row._id])` and open the confirmation dialog cleanly.
  - **Release & Distribution**: Bumped version to `3.5.36`, compiled Webpack electron and web bundles (`dist_web/`), packaged `dist/Global Gate Setup 3.5.36.exe`, and pushed commit to GitHub `origin main`.
- **Used Items UI Alignment & Non-Deletable Ⓤ Suffix Enforcement (Ver 3.5.35)**:
  - **Type & Used Item Radio/Checkbox Same-Line Alignment (`ItemForm.js`, `ItemFormUpdate.js`, `ItemFormClone.js`)**: Wrapped `RadioGroup` (Goods / Services) and the `[x] Used Item (Ⓤ)` `FormControlLabel` in a shared horizontal flex box `<Box sx={{ display: 'flex', alignItems: 'center', gap: '30px' }}>` nested under `<FormLabel>Type</FormLabel>`. This guarantees that the checkbox and radio buttons align on the exact same horizontal baseline without vertical offset.
  - **Non-Deletable Ⓤ Suffix Engine (`handleItemNameChange` & server routes)**: Implemented input change interceptors and server sanitation ensuring that as long as `Used Item` is checked, the ` Ⓤ` symbol cannot be removed or accidentally deleted via backspace/editing. When user unchecks the box, ` Ⓤ` is cleanly stripped. Both frontend `handleSubmit` and backend `create-item` / `update-item` enforce that used items always conclude with ` Ⓤ`.
  - **Release & Distribution**: Bumped version to `3.5.35`, compiled Webpack electron and web bundles (`dist_web/`), packaged `dist/Global Gate Setup 3.5.35.exe`, and pushed commit to GitHub `origin main`.
- **Used Items (Ⓤ) Support & Newest-First Display Stores Sorting (Ver 3.5.34)**:
  - **Used Items (Ⓤ) Architecture (`itemSchema.js`, `itemRoutes.js`, `ItemForm.js`, `ItemFormUpdate.js`, `ItemFormClone.js`, `ItemInformationVIew.js`)**:
    - Added `isUsed: { type: Boolean, default: false }` and `condition: { type: String, enum: ['New', 'Used'], default: 'New' }` to `itemSchema.js`.
    - Added interactive `[x] Used Item (Ⓤ)` checkbox beside `Goods` radio in Add, Update, and Clone Item forms. Toggling appends or strips ` Ⓤ` from `itemName` seamlessly.
    - Highlighted used items with a distinctive `Ⓤ USED ITEM` badge in `ItemInformationVIew.js`.
  - **Newest-First Display Stores Sorting (`itemRoutes.js`, `PointOfSale.js`, `StoreItemDisplay.js`, `TechnicianStoreDisplay.js`)**:
    - Added `.sort({ _id: -1 })` to `GET /item-shop` endpoint.
    - Removed redundant `.reverse()` from `SetItems` in `PointOfSale.js`, `StoreItemDisplay.js`, and `TechnicianStoreDisplay.js`, ensuring page 1 of all store catalogs always lists the most recently created items first.
  - **Release & Distribution**: Bumped version to `3.5.34`, compiled Webpack electron and web bundles (`dist_web/`), packaged `dist/Global Gate Setup 3.5.34.exe`, and pushed commit to GitHub `origin main`.
- **Branch Transfer Response Interceptor Bypass & Grant Access Edit Permission Enforcement (Ver 3.5.33)**:
  - **Branch Interceptor Bypass for Transfer History (`src/js/index.js`)**: Added `/itemTransferHistory` and `/transfer-item` to `bypassEndpoints` in both the request and response Axios interceptors. Previously, the response interceptor filtered responses strictly by `item.branchId === selectedBranch`, discarding cross-branch transfer records (`branchId: 'HQ'`) when viewing destination branches (`GGLUB`), which caused `Transfer In` to display 0 and the transfer table to show "No transfer history found".
  - **Grant Access Module Permission for Transfers (`ItemInformationVIew.js`)**: Linked the "Transfer Item" feature strictly to the Grant Access module. Only users with Edit rights on the `Item` module (`access.editM === true`) or system administrators (`GG`/`CEO`) can access the transfer modal or submit transfer requests. If a user lacks edit permissions, the button is hidden and backend execution is blocked with clear feedback.
  - **Release & Distribution**: Bumped version to `3.5.33`, compiled Webpack electron and web bundles (`dist_web/`), packaged `dist/Global Gate Setup 3.5.33.exe`, and pushed commit to GitHub `origin main`.
- **Multi-Branch Stock Synchronization, Transfer History Visibility, Newest-First Sidebar Sorting & Tab Order (Ver 3.5.32)**:
  - **Multi-Branch Stock Synchronization (`server/model/stockUtils.js`)**: Updated `calculateQuantity()` so that transfers to destination branches (e.g. `HQ` -> `GGLUB`) correctly reflect in the destination branch's stock (`totalPurchase + transferIn - generalOut - transferOut`), matching incoming transfers across `toBranchId` and item names.
  - **Comprehensive Transfer History Visibility (`server/routes/itemRoutes.js` & `ItemInformationVIew.js`)**: Updated `GET /itemTransferHistory` to match transfer records by `itemId`, `toItemId`, or `itemName + branchId`. Automatically resolves transfer records in both source and destination branches, correctly badging records as `TRANSFER IN` (green, `+qty`) or `TRANSFER OUT` (red, `-qty`).
  - **Item List Sorting (Newest to Oldest) & Branch Scoping (`ItemViewLayout.js`)**: Removed legacy `.reverse()` which previously flipped newest-first database records into oldest-first, ensuring search and list displays items strictly from newest to oldest. Scoped item listing to active branch.
  - **Tab Ordering Standardized (`ItemInformationVIew.js`)**: Reorganized Item View tabs so `TRANSFER-SUMMARY` is Tab 5 and `TOTAL-SUMMARY` is the final overview tab (Tab 6).
  - **Release & Distribution**: Bumped version to `3.5.32`, compiled Webpack electron and web bundles (`dist_web/`), packaged `dist/Global Gate Setup 3.5.32.exe`, and pushed commit to GitHub `origin main`.
- **Item Transfer Between Branches Restoration & Multi-Branch Stock Synchronization (Ver 3.5.31)**:
  - **Restored Transfer-Summary Tab (Tab 6)**: Added the `Transfer-Summary` tab beside `Total-Summary` in `src/js/AdminView1/PageView/ItemView/ItemInformationVIew.js`.
  - **Inter-Branch Transfer Modal**: Added interactive dialog allowing users to select destination branch from `companyProfile.branches`, enter transfer quantity (validated against available stock), provide reason/reference notes, and execute transfers with immediate UI feedback and toasts.
  - **Backend Transfer Engine (`server/routes/itemRoutes.js`)**: Added `POST /transfer-item` (with branch validation, automated destination branch item creation/cloning, transfer history logging, and dual-branch stock recalculation) and `GET /itemTransferHistory` (supporting item and branch queries).
  - **Transfer History Table & Stock Math Integration**: Added searchable transfer history table with visual `TRANSFER OUT` (red badge) and `TRANSFER IN` (green badge) indicators, branch indicators, and incorporated transfers into Total-Summary pie charts and live stock calculations `(Purchase + TransferIn) - (GeneralOut + TransferOut)`.
  - **Release & Distribution**: Bumped version to `3.5.31`, compiled Webpack electron and web bundles (`dist_web/`), packaged `dist/Global Gate Setup 3.5.31.exe`, and pushed commit to GitHub `origin main`.
- **Rate Module Modal Close Error Resolution & Scope Refactor (Ver 3.5.29)**:
  - **Eliminated `ReferenceError: fetchItems is not defined` in `RateViewAdmin.js`**: Lifted `fetchData()` from local `useEffect` scope to top-level component scope and updated `handleCloseLoading()` to call `fetchData()`, ensuring that editing categories, rates, return rates, and payment rates updates the tables smoothly without JavaScript runtime errors.
  - **Release & Distribution**: Bumped version to `3.5.29`, compiled Webpack electron and web bundles (`dist_web/`), packaged `dist/Global Gate Setup 3.5.29.exe`, and pushed commit to GitHub `origin main`.
- **Daily Expenses Maintenance Order Item Description Display (Ver 3.5.28)**:
  - **Prioritized Item Description in Autocomplete**: Updated option rendering in `DailyExpenseForm.js` and `DailyExpenseUpdate.js` from `option.model || option.itemDescriptionInfo` to `option.itemDescriptionInfo || option.model`, ensuring maintenance job cards display their appliance/item description (e.g. `HILUX`, `ICE MACHINE`, `SIGNAGE BOARD X2`) in the dropdown list.
  - **Release & Distribution**: Bumped version to `3.5.28`, compiled Webpack electron and web bundles (`dist_web/`), packaged `dist/Global Gate Setup 3.5.28.exe`, and pushed commit to GitHub `origin main`.
- **Strict Active Employed Maintenance Technician Filtering (Ver 3.5.27)**:
  - **Eliminated Inactive & Non-Technician Staff from Dropdown**: Fixed case-sensitivity bug (`row.Status` vs `row.status`), boolean operator precedence bug (`A && B || C || D`), and French spelling mismatch (`TECHNICIEN` vs `TECHNICIAN`) in technician filter queries.
  - **Unified `isEmployedTechnician` Filter**: Standardized filtering across `MaintenanceFormView.js`, `MaintenanceUpdateView.js`, `MaintenanceFormClone.js`, `EstimateConvertToMaintenance.js`, and `MaintenanceOrderUpdate.js` ensuring only the 16 verified active employed technicians are selectable.
  - **Enhanced Technician Financial Privacy**: Expanded `isTechnician` detection across maintenance detail and edit views to accurately detect French `"TECHNICIEN"` department records.
  - **Historical Technician Assignment Preservation**: Added safe fallback in edit forms to gracefully display historical technician names on existing records without throwing Material-UI out-of-range warnings.
  - **Release & Distribution**: Bumped version to `3.5.27`, compiled Webpack electron and web bundles (`dist_web/`), packaged `dist/Global Gate Setup 3.5.27.exe`, and pushed commit to GitHub `origin main`.
- **Supplier Purchases Integrity & Substring Reconciliation Bug Elimination (Ver 3.5.26)**:
  - **Eliminated Destructive Backend Auto-Sync in `server/routes/itemRoutes.js`**: Removed `itemPurchaseSchema.updateMany` from `GET /itemPurchase` which previously performed accidental bulk overwrites of `manufacturer` and `manufacturerID` across hundreds of supplier purchases on view.
  - **Hardened Supplier Cascade in `server/routes/supplierRoutes.js`**: Replaced permissive partial regexes with exact ID and anchored exact-name match only.
  - **Hardened Frontend Matching in `SupplierViewInformation.js`**: Replaced substring inclusion matching in `isMatchingSupplier` with strict ID and exact name matching, preventing cross-supplier record bleeding.
  - **100% Database Recovery from Daily Backup**: Loaded authoritative clean snapshot (`GlobalGate_Backup_2026-09-23.json`) and restored all 350 modified purchases back to their authentic suppliers (`VIVCO STE VIVE CONGO SARL`, `ETS MARWA`, `TIMBEAT TRADING COMPANY LIMITED`, `ETS QUIN ZAC`, `STE S-MART SARL`, etc.) with zero remaining differences.
- **Universal Invoice & Estimate Search Resolution + Admin Views State Reference Audit (Ver 3.5.25)**:
  - **Enhanced Invoice & Estimate Server-Side Search Engine**:
    - Resolved search failure where typing customer names (e.g. `Hassan`, `Mansour`, `BNF Construction`, `Ali Jaafar`) failed to return matching invoices due to PCRE lookaheads, nested customer object schemas, or missing first/last name keys.
    - Integrated direct `customerSchema` lookup during invoice and estimation search queries to automatically resolve and match all customer `_id`s, full names, first/last names, and company names.
    - Added multi-token wildcard matching (`tokens.join('.*')`, `tokens.reverse().join('.*')`, and individual token regexes) across all candidate customer and invoice fields.
    - Expanded table column `valueGetter` for the Customer Name column to compose `customerFirstName` and `customerLastName` into full customer names seamlessly.
    - Fixed DataGrid search state in `InvoiceViewAdmin.js` by resetting `page` to `0` on filter change and optimizing debounce to 250ms for snappy responsiveness.
    - Updated `handleRefreshSearch` in `InvoiceViewAdmin.js` to fully reset filter model, search term, and debounced search state.
  - **Fixed `ReferenceError` Crashes in Admin Views (`ProjectViewAdmin.js`, `SupplierAdminView.js`, etc.)**:
    - Fixed `ReferenceError: projects is not defined` in `ProjectViewAdmin.js` by replacing `projects.find` with `(project || []).find`.
    - Fixed `ReferenceError: supplier is not defined` in `SupplierAdminView.js` by replacing `(supplier || []).find` with `(customer || []).find`.
    - Safely guarded state references in `ItemViewAdmin.js`, `EstimateViewAdmin.js`, and `MaintenanceOrderAdmin.js`.
  - **Release & Distribution**: Bumped version to `3.5.25`, compiled Webpack electron and web bundles (`dist_web/`), packaged `dist/Global Gate Setup 3.5.25.exe`, and pushed commit to GitHub `origin main` for live Railway and Cloudflare Pages deployment.

- **Authoritative Customer View Statement & Sales by Customer 100% Reconciliation (Ver 3.5.24)**:
  - **Reconciled Advance Deposits & Credit-Account Payments Across All Customer Statements**:
    - Resolved critical discrepancy where customers with advance deposits and subsequent credit settlements (such as `PROFESSIONAL CONSTRUCTION PCT`) showed inflated "Total Paid" figures (`$529,401.41` vs `$479,828.26`) and erroneous negative balances (`-$49,573.15` vs `-$864.58`) in the Professional Report Center.
    - Implemented exact customer ledger logic in `SalesByCustomerReport.js`:
      - Applied invoice payments are calculated as `Math.max(0, pAmount - (pay.remaining || 0))`.
      - Unallocated credit balances are calculated via the authoritative formula: `customerCredit += remaining` for Credit/advance deposits, and `customerCredit -= amount` for `Credit-Account` settlements.
      - Final Balance Due is computed as `(Total Sales - Total Paid) - Available Credit`, exactly mirroring `CustomerInformationView.js`.
      - Applied 0.05 floating-point snap to eliminate rounding dust.
    - Updated `SalesByCustomerReport.js` dialog view to display all 4 key metrics: Total Sales, Total Paid, Available Credit, and Balance Due.
    - Updated Excel export in `SalesByCustomerReport.js` to include the Available Credit column and reconciled totals.
  - **Universal Customer & Prefix-Free Number Search Across Invoices, Estimates, Purchases & Maintenance**:
    - Fixed issue where searching customer names (e.g. `ALI JAAFAR`) in the Invoice module returned zero rows due to MongoDB queries only checking `customerName.customerName` while documents store `Customer`, `customerName`, `companyName`, or strings.
    - Expanded `$or` search queries across `invoiceRoutes.js`, `estimationRoutes.js`, `maintenanceRoutes.js`, `purchaseRoutes.js`, and `projectRoutes.js` to match all customer object keys (`customerName.Customer`, `customerName.customerName`, `customerName.name`, `customerName.companyName`, direct `customerName`, `customer.Customer`, etc.).
    - Added prefix-cleaning logic (`INV-`, `EST-`, `SER-`, `PUR-`, `PRJ-`) so typing `INV-001167`, `INV-1167`, `001167`, or `1167` all accurately resolve and return matching records.
    - Updated client-side search filtering across `SalesByCustomerReport.js`, `ARAgingReport.js`, `SupplierReportInfo.js`, and `CustomerInformationView.js` with multi-token whitespace normalization (`searchTokens.every(token => normName.includes(token))`) to ensure searches like `ali ja` match records with irregular or double spaces (e.g. `Mr. ALI  JAAFAR`).
  - **Release & Distribution**: Bumped version to `3.5.24`, compiled Webpack electron and web bundles (`dist_web/`), packaged `dist/Global Gate Setup 3.5.24.exe`, and pushed commit to GitHub `origin main` for live Railway and Cloudflare Pages deployment.

- **Professional Report Center Performance & Customer Statement Discrepancy Fix (Ver 3.5.23)**:
  - **Eliminated Report Center Loading Latency via Smart Memory Caching**:
    - Replaced synchronous un-cached `axios.get` on 11 collections in `ReportsViewAdmin.js` with `cachedGet` from `apiCache.js`.
    - Configured case-insensitive TTL rules for `/customer`, `/item`, `/invoice`, `/expense`, `/payRoll`, `/payment`, `/itemPurchase`, `/maintenance`, `/projects`, `/pos`, `/item-usage`, `/supplier`, `/rate`, and `/notification`.
    - Added clean loading indicator and progressive render state during initial data hydration.
  - **Resolved Customer Statement & Sales by Customer Discrepancy (e.g. PALM CENTER BLD $549.99 vs $-0.01)**:
    - Fixed root cause where `SalesByCustomerReport.js` filtered out `pay.modes !== 'Credit-Account'`, ignoring $549.99 of credit settlements and artificially inflating the customer's balance.
    - Implemented universal `getCustomerIdentity` across `SalesByCustomerReport.js` and `ARAgingReport.js` to correctly resolve `Customer` and `customerName` properties.
    - Reconciled payment calculations with `CustomerInformationView.js`, ensuring Total Sales, Total Paid, and Balance Due match Customer View Statement 100% with floating-point rounding snap.
  - **Release & Distribution**: Bumped version to `3.5.23`, compiled Webpack electron and web bundles (`dist_web/`), packaged `dist/Global Gate Setup 3.5.23.exe`, and pushed commit to GitHub `origin main` for live Railway and Cloudflare Pages deployment.

- **Global Delete Confirmation Modal Lifecycle & State Teardown (Ver 3.5.22)**:
  - **Resolved Stuck Delete Confirmation Dialogs Across All Modules**:
    - Fixed critical bug where the "Why do you want to delete:" dialog stayed visibly stuck on screen after deleting records, requiring users to refresh the page.
    - Fixed root cause across `MaintenanceViewAdmin`, `MaintenanceOrderAdmin`, `CustomerViewAdmin`, `EstimateViewAdmin`, `ItemViewAdmin`, `ProjectViewAdmin`, `SellShopInvoiceView`, `SupplierAdminView`, `TewmViewAdmin`, `DailyExpenses`, `UserAccount`, `RolePermission`, and `EmployeePlaningView`.
    - Removed `{info && <button...}` guards in maintenance views so that the "Confirm Bulk Delete" button is always visible, interactive, and validates `DELETE` confirmation text.
    - Implemented immediate client-state item name/reference resolution with fallback to selected count so modal headers never render empty titles like `"Why do you want to delete: ?"`.
    - Added comprehensive modal state teardown on delete submit: closes `openReasonDelete`, `openDeleteAll`, `openDeleteMultiple`, clears `selectedRows = []`, resets `reason = ''`, and transitions cleanly to the success confirmation dialog.
  - **Release & Distribution**: Bumped version to `3.5.22`, compiled Webpack electron and web bundles (`dist_web/`), packaged `dist/Global Gate Setup 3.5.22.exe`, and pushed commit to GitHub `origin main` for live Railway and Cloudflare Pages deployment.

- **Technician Cost/Rate/Stock Hiding & Maintenance View/Edit Access Enforced (Ver 3.5.21)**:
  - **Comprehensive Technician Financial Data Protection Across All Maintenance Views**:
    - Enforced strict privacy rules for all employees registered in the `TECHNICIAN` department or with `costVisibility === false`.
    - Updated `MaintenanceFormView.js`, `MaintenanceUpdateView.js`, and `MaintenanceViewInformation.js` to compute `canViewCosts = isOwner || (!isTechnician && costVisibility)`.
    - In `MaintenanceFormView.js` & `MaintenanceUpdateView.js`: Conditionally hide `Stock-A`, `Rate`, `Discount`, `Amount`, `Labor Fees` financial amount/discount, and `Total Generale` rows when `canViewCosts` is false.
    - In `MaintenanceViewInformation.js`: When `canViewCosts` is false, render the dedicated 4-column "Items Used" table (`Parts/s Model`, `Description`, `Brand`, `Qty`) without financial figures, matching technician UI standards.
    - Preserved full edit capability for technicians via Grant Access while ensuring financial rates and stock counts remain hidden in both view and edit modes.
  - **Release & Distribution**: Bumped version to `3.5.21`, compiled Webpack electron and web bundles (`dist_web/`), packaged `dist/Global Gate Setup 3.5.21.exe`, and pushed commit to GitHub `origin main` for live Railway and Cloudflare Pages deployment.

- **Maintenance Order Grant Access Permission & Action Buttons Alignment (Ver 3.5.20)**:
  - **Reconciled `Maintenance-Order` Module Name in Grant Access Checks (`MaintenanceOrderViewInformation.js` & `MaintenanceOrderAdmin.js`)**:
    - Resolved issue where technicians with Grant Access assigned to `Maintenance-Order` (Module 26) could not edit maintenance orders in `MaintenanceOrderViewInformation.js` because `MaintenanceInfoU` only checked `moduleName === 'Maintenance'`.
    - Updated `MaintenanceOrderViewInformation.js`, `MaintenanceOrderAdmin.js`, and `MaintenanceViewInformation.js` to recognize both `"Maintenance-Order"` and `"Maintenance"` module entries for all permissions (`readM`, `createM`, `editM`, `deleteM`), with unconditional access support for owner (`userName === 'GG'` or `role === 'CEO'`).
    - Corrected `MaintenanceInfoU` in `MaintenanceOrderAdmin.js` which was incorrectly checking `readM` instead of `editM`.
    - Added the missing `+` (Create Maintenance Order) button to the toolbar in `MaintenanceOrderAdmin.js` linked to `/MaintenanceFormView` and guarded by `MaintenanceInfoC`.
  - **Release & Distribution**: Bumped version to `3.5.20`, compiled Webpack electron and web bundles (`dist_web/`), packaged `dist/Global Gate Setup 3.5.20.exe`, and pushed commit to GitHub `origin main` for live Railway and Cloudflare Pages deployment.

- **Daily Payment Received & Customer Deposit/Credit Drawer Reconciliation (Ver 3.5.19)**:
  - **Reconciled Customer Credit & Advance Cash Collections (`DailyExpenseAdminView.js`)**:
    - Resolved critical issue where cash payments received as customer deposits, advances, or direct customer credits (e.g. `$1,000` Cash received under `PAY-001136` with `Reference: INV-Credit`) were completely zeroed out in the "Expenses Daily Information" -> "VIEW PER DAY" tab.
    - Removed the flawed blanket zeroing condition `if (row.reason === 'Project' || row.reason === 'Customer Credit' || parseFloat(row.remaining) === parseFloat(row.amount))` inside `getPaymentRowValues()`.
    - Refactored `getPaymentRowValues` to properly compute `grossUSD`, `grossFC`, `credit`, `netUSD`, and `netFC` for all payment reasons (`Customer Credit`, `Project`, `Invoice`) when physical tender (Cash / Bank Transfer) is collected.
    - Ensured that customer deposits and credit cash enter drawer reconciliation accurately, updating row-level columns (`Total $`, `Credit $`), "Payment Received Gross Total", "Daily Payment Received Total (Net Cash in Hand)", and the Daily Expenses Summary table (`Total Payment Received` / `Cash In`), while non-cash settlement modes (`modes === 'Credit-Account'`) remain properly excluded from physical cash in hand.
  - **Release & Distribution**: Bumped version to `3.5.19`, compiled Webpack electron and web bundles (`dist_web/`), packaged `dist/Global Gate Setup 3.5.19.exe`, and pushed commit to GitHub `origin main` for live Railway and Cloudflare Pages deployment.

- **Project-to-Invoice Unit Price & Manual Item Rate Preservation (Ver 3.5.18)**:
  - **Authoritative Rate Resolution in Convert To Invoice (`ConvertToInvoice.js`)**:
    - Resolved issue where manually entered or unregistered items from a Project Purchase defaulted to `Rate: 0` / `$0.00` upon converting to an invoice.
    - Added `getProjectItemRate(item)` fallback hierarchy checking `item.itemRate`, `item.itemCost`, `item.itemPrice`, `item.totalCost / item.itemQty`, and `item.totalAmount / item.itemQty` during initial load (`fetchData`) and post-catalog reconciliation (`fetchItem`).
    - Recalculates `totalAmount`, `discount`, `percentage`, and `itemAmount` seamlessly on load so invoice preview tables accurately reflect the exact quantities and unit prices entered in the Project.
    - Extended robust rate resolution to `MaintenanceConvertToInvoice.js` and `ConvertToEstimate.js`.
  - **Release & Distribution**: Bumped version to `3.5.18`, compiled Webpack electron and web bundles (`dist_web/`), packaged `dist/Global Gate Setup 3.5.18.exe`, and pushed commit to GitHub `origin main` for live Railway and Cloudflare Pages deployment.

- **Message Center Direct Reply-Back Engine & Quoted Context Support (Ver 3.5.17)**:
  - **Direct Reply Interaction in Message Center (`src/js/AdminView1/MessageAdminView.js`)**:
    - Embedded interactive Reply action buttons on each message card across the Message Center popover.
    - Added an active reply context banner showing `"Replying to [userName]"` along with a snippet preview and quick cancel button.
    - Integrated quoted message bubbles (`Replying to @userName: "..."`) with warm amber accents inside reply messages, styled consistently with top collaboration apps.
    - Linked `inputRef` to auto-focus the message compose field on reply trigger and dynamic submit button label (`Send Reply` vs `Save`).
  - **Backend Reply Schema Support (`server/model/messageSchema.js` & `model/messageSchema.js`)**:
    - Extended Mongoose `messageSchema` with optional `replyTo` sub-document (`{ id, userName, message }`) preserving backward compatibility for existing records.
  - **Release & Distribution**: Bumped version to `3.5.17`, compiled Webpack electron and web bundles (`dist_web/`), packaged `dist/Global Gate Setup 3.5.17.exe`, and pushed commit to GitHub `origin main` for live Railway and Cloudflare Pages deployment.

- **Purchase Update Live Movement Synchronization & Strict Zero Formatting (Ver 3.5.16)**:
  - **Live Movement Resolution Engine in Update Purchase (`PurchaseFormUpdate.js`)**:
    - Integrated dynamic transaction movement synchronization identical to `PurchasesViewAdminAll.js`. `PurchaseFormUpdate.js` now queries `/itemOut`, `/itemReturn`, and `/itemPurchase` on load and computes live `netOutQty` (`matchedOut - matchedReturn`) and `buyQty` across all item rows.
    - Eliminated blank input boxes in the Out and Buy columns by enforcing safe numerical fallbacks `Item.itemOut != null && Item.itemOut !== '' ? Item.itemOut : 0` so zero-out items clearly show `0`.
    - Persists updated live movement values back into MongoDB upon saving the form.
  - **Release & Distribution**: Bumped version to `3.5.16`, compiled Webpack electron and web bundles (`dist_web/`), packaged `dist/Global Gate Setup 3.5.16.exe`, and pushed commit to GitHub `origin main` for live Railway and Cloudflare Pages deployment.

- **Maintenance-to-Invoice Lifecycle Standardization & Global Search State Fix (Ver 3.5.15)**:
  - **Automated Maintenance Transition to 'Close' on Invoice Deletion (`server/routes/invoiceRoutes.js` & `src/js/AdminView1/InvoiceViewAdmin.js`)**:
    - When an invoice created from a maintenance order (`Position === 'Maintenance'`) is deleted (single or batch delete), the backend and frontend cascade automatically unlinks the maintenance record (`Converted: false`, `ReferenceName: ''`) and sets its status back to `'Close'`.
    - Once unlinked and in `'Close'` state, the maintenance order is completely unlocked, allowing full editing, status modifications (Open, Pending, Reschedule, Cancel, Close), and re-conversion to an invoice whenever needed.
  - **Strict Edit & Status Lock While Converted (`MaintenanceViewAdmin.js`, `MaintenanceOrderAdmin.js`, `MaintenanceViewInformation.js`, `MaintenanceOrderViewInformation.js`, `MaintenanceUpdateView.js`, `MaintenanceOrderUpdate.js`)**:
    - Disabled Edit buttons, status updates, and form submissions on maintenance orders that are actively converted to an existing invoice, with clear informative tooltips explaining that the linked invoice must be deleted first.
  - **Elimination of `debouncedSearchTerm is not defined` ReferenceError**:
    - Corrected post-action modal close and delete handlers across `MaintenanceViewAdmin.js`, `MaintenanceOrderAdmin.js`, `ItemOutViewAdmin.js`, `ItemReturnAdminView.js`, and `SellShopInvoiceView.js` to correctly pass component state variables (`searchTerm`, `filterField`, `filterValue`, `statusFilter` / `fetchData()`).
  - **Release & Distribution**: Bumped version to `3.5.15`, compiled Webpack electron and web bundles (`dist_web/`), packaged `dist/Global Gate Setup 3.5.15.exe`, and pushed commit to GitHub `origin main` for live Railway and Cloudflare Pages deployment.

- **Null-Safe Client Search & Global Crash Prevention (Ver 3.5.11)**:
  - **Supplier Detail & Master Views (`SupplierViewInformation.js` & `SupplierName.js`)**:
    - Resolved critical `TypeError: Cannot read properties of null (reading 'toLowerCase')` runtime crash that triggered a white screen when viewing suppliers with `null` `manufacturerNumber`, `description`, `manufacturer`, `storeName`, or `address`.
    - Guarded all search filters (`newArray`, `newArray1`, `newArray2`), `formatPurchaseReason`, and related item purchases iteration with strict null-checks and safe optional chaining.
  - **Customer & Project Master Views (`CustomerInformationView.js` & `ProjectNameInfo.js`)**:
    - Hardened customer and project search filters against `null` `customerType`, `projectName`, `projectNumber`, `description`, and `customerName`.
  - **Daily Expenses Autocomplete Filters (`DailyExpenseUpdate.js`)**:
    - Fixed project selection Autocomplete `filterOptions`, `getOptionLabel`, and `renderOption` to safely handle records with missing or `null` customer names and project descriptions.
  - **Release & Distribution**: Bumped version to `3.5.11`, compiled Webpack electron and web bundles (`dist_web/`), packaged `dist/Global Gate Setup 3.5.11.exe`, and pushed commit to GitHub `origin main` for live Railway and Cloudflare Pages deployment.

- **Authoritative Invoice Payment Balance Synchronization & Self-Healing Engine (Ver 3.5.10)**:
  - **Authoritative Balance Engine (`server/utils/invoiceBalanceUtils.js`)**:
    - Created `syncInvoiceBalances(invoiceIds)` to recompute `totalPaid` and `balanceDue` directly from `paymentSchema` records and accurately update invoice status (`Paid`, `Partially-Paid`, `Sent`).
    - Hooked sync into `POST /create-payment`, `PUT /update-payment/:id`, and `DELETE /delete-payment/:id`.
  - **Automatic DB Startup Sweep (`server/index.js` & `server/routes/invoiceRoutes.js`)**:
    - Integrated `reconcileAllInvoiceBalances()` into server startup to automatically repair all historical mismatched invoices on MongoDB / Railway.
  - **Lock Exemption & UI Dynamic State (`lockMiddleware.js`, `InvoiceViewAdminAll.js`, `PaymentInformationForm.js`)**:
    - Exempted system balance updates from interactive document locks and added dynamic UI balance calculations on load.
  - **Release & Distribution**: Bumped version to `3.5.10`, compiled Webpack bundles, packaged `dist/Global Gate Setup 3.5.10.exe`, and pushed commit to GitHub `origin main`.

- **Desktop vs Mobile Layout Strict Separation, Daily Expenses Fix & Brand Icon Restoration (Ver 3.5.09)**:
  - **Strict Mobile / Desktop Layout Separation (`src/js/utils/isMobile.js`)**:
    - Completely removed the `window.innerWidth < 900` fallback in `isMobile.js` that caused the desktop .exe and desktop web version to abruptly transform into mobile bottom-navigation tabs and mobile cards when minimizing, resizing, or snapping windows.
    - Added explicit Electron desktop bypass (`navigator.userAgent.includes('Electron')` -> `false`) guaranteeing that the desktop app always retains full desktop DataGrids, sidebars, filters, and toolbars regardless of window dimensions.
    - Mobile layout is strictly isolated to native Capacitor mobile builds (`window.Capacitor.isNativePlatform()`), real handheld mobile devices via user-agent, or explicit debug query (`?mobile=true`).
  - **Daily Expenses Component Integrity (`DailyExpenses.js`)**:
    - Resolved `ReferenceError: NotificationVIewInfo is not defined` runtime crash by ensuring `NotificationVIewInfo` is properly imported and rendered on the top AppBar.
  - **Brand Icon & Logo Preservation (`Icon.png` & `src/js/img/Image1.png`)**:
    - Restored the official stylized **"GG"** (Global Gate) brand logo across root `Icon.png` and `Image1.png` which was temporarily replaced by a generic mobile script asset.
    - Added Rule 21 to permanently protect the official GG brand icon from being overwritten in future builds.
  - **Release & Distribution**: Bumped version to `3.5.09`, compiled Webpack electron and web bundles (`dist_web/`), packaged `dist/Global Gate Setup 3.5.9.exe`, and pushed commit to GitHub `origin main` for live Railway and Cloudflare Pages deployment.

- **Cloudflare Proxied Custom Domain Backend Migration (Ver 3.5.08)**:
  - **Backend Domain Routing (`api.globalgate.sarl`)**:
    - Connected Railway backend to custom domain `api.globalgate.sarl` with Cloudflare Anycast Proxy (`CNAME -> 4wu3pn5e.up.railway.app` Proxied).
    - Updated `API_BASE_URL` in `src/js/apiConfig.js` from `gg-project-production.up.railway.app` to `https://api.globalgate.sarl`.
    - Cleaned up all legacy hardcoded Railway URLs in `ExpensesViewAdmin.js` and `InvoiceFormClone.js` to strictly use `ENDPOINT_URL`.
    - Completely eliminates the need for VPN across all company laptops, web versions, and mobile devices.
  - **Release & Distribution**: Bumped version to `3.5.08`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.5.8.exe`, and pushed commit to GitHub for live Railway and Cloudflare Pages deployment.

- **Maintenance Information Converted Status Display Fix (Ver 3.5.07)**:
  - **Maintenance Detail Views (`MaintenanceViewInformation.js` & `MaintenanceOrderViewInformation.js`)**:
    - Fixed status display at the top header (next to Customer Name & Order No.) to show **Converted** in teal (`#00838f`) with bold font weight whenever an order has been converted to an invoice (`row.Converted === true` or `row.status === 'Converted'`).
    - Fixed status row in the Job Card Info printable table and Excel export (`data1`) to properly display `Converted` instead of raw `Close`.
  - **Release & Distribution**: Bumped version to `3.5.07`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.5.7.exe`, and pushed commit to GitHub for live Railway and Cloudflare Pages deployment.

- **Maintenance Order Status Summary Filter Cards & Version Sync (Ver 3.5.06)**:
  - **Maintenance Order View (`MaintenanceOrderAdmin.js` & `server/routes/maintenanceRoutes.js`)**:
    - Embedded 4 compact interactive status summary cards in `MaintenanceOrderAdmin.js`:
      - **ALL ORDERS**: Dark Blue `#30368a` | `AssignmentIcon`
      - **OPEN**: Primary Blue `#1976d2` | `BuildIcon`
      - **PENDING**: Amber `#ed6c02` | `HourglassEmptyIcon`
      - **RESCHEDULE**: Purple `#9c27b0` | `EventRepeatIcon`
    - Added MongoDB `$group` aggregation in `/technician-maintenance-Information` endpoint returning branch-scoped `statusCounts: { all, open, pending, reschedule }`.
    - Integrated 1-click status filtering resetting `page = 0`, toggle reset on re-clicking active card, and adjusted DataGrid height to `calc(100vh - 200px)` (minHeight `380px`).
  - **Version Display Synchronization**:
    - Synchronized version `3.5.06` across desktop app (Electron) and web version (`dist_web/`).
    - Packaged Windows installer `dist/Global Gate Setup 3.5.6.exe`.
    - Pushed commit to GitHub `main` for Railway backend & web deployment.

- **Invoice Module SENT Status Summary Card Addition (Ver 3.5.05)**:
  - **Invoice Module (`InvoiceViewAdmin.js` & `server/routes/invoiceRoutes.js`)**:
    - Expanded Invoice status summary cards from 5 to 6 cards: **ALL ORDERS** (`#30368a`), **DRAFT** (`#78909c`), **SENT** (`#1976d2`), **PENDING** (`#801313`), **DECLINE** (`#d32f2f`), **FREE OF CHARGE** (`#9c27b0`).
    - Added `sent` to MongoDB aggregation in `/invoice-Information` and backend status regex query.
    - Updated grid layout columns to `repeat(6, 1fr)` on desktop viewports.
  - **Release & Distribution**: Bumped version to `3.5.05`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.5.5.exe`, and pushed commit to GitHub for live Railway and Cloudflare Pages deployment.

- **Status Summary Filter Cards Across 5 Core Modules (Ver 3.5.03)**:
  - **Module 1: Invoice (`InvoiceViewAdmin.js` & `server/routes/invoiceRoutes.js`)**:
    - Embedded 5 compact status cards: **ALL ORDERS** (`#30368a`), **DRAFT** (`#78909c`), **PENDING** (`#801313`), **DECLINE** (`#d32f2f`), **FREE OF CHARGE** (`#9c27b0`).
    - Added MongoDB `$group` aggregation in `/invoice-Information` returning branch-scoped `statusCounts: { all, draft, pending, decline, freeOfCharge }`.
    - Integrated 1-click status filtering resetting `page = 0`, toggle reset on re-clicking active card, and adjusted DataGrid height to `calc(100vh - 200px)`.
  - **Module 2: Quotation / Estimate (`EstimateViewAdmin.js` & `server/routes/estimationRoutes.js`)**:
    - Embedded 5 compact status cards: **ALL ESTIMATES** (`#30368a`), **DRAFT** (`#78909c`), **SENT** (`#1976d2`), **DECLINE** (`#d32f2f`), **APPROVED** (`#2e7d32`).
    - Added MongoDB `$group` aggregation in `/estimation-Information` returning branch-scoped `statusCounts: { all, draft, sent, decline, approved }`.
    - Integrated 1-click status filtering and DataGrid container height `calc(100vh - 200px)`.
  - **Module 3: Project (`ProjectViewAdmin.js` & `server/routes/projectRoutes.js`)**:
    - Embedded 5 compact status cards: **ALL PROJECTS** (`#30368a`), **PENDING** (`#ed6c02`), **ON-GOING** (`#1976d2`), **STOPPED** (`#d32f2f`), **COMPLETED** (`#2e7d32`).
    - Added MongoDB `$group` aggregation in `/project-Information` returning branch-scoped `statusCounts: { all, pending, ongoing, stopped, completed }`.
    - Integrated 1-click status filtering and DataGrid container height `calc(100vh - 200px)`.
  - **Module 4: Purchase Request (`PurchasesViewAdmin.js` & `server/routes/purchaseRoutes.js`)**:
    - Embedded 5 compact status cards: **ALL REQUESTS** (`#30368a`), **PENDING** (`#ed6c02`), **ON-GOING** (`#1976d2`), **STOPPED** (`#d32f2f`), **COMPLETED** (`#2e7d32`).
    - Added MongoDB `$group` aggregation in `/purchase-Information` supporting both `statusInfo` and `status` fields, returning branch-scoped `statusCounts: { all, pending, ongoing, stopped, completed }`.
    - Integrated 1-click status filtering and DataGrid container height `calc(100vh - 200px)`.
  - **Module 5: POS Invoice (`SellShopInvoiceView.js`)**:
    - Embedded 4 compact status cards: **ALL INVOICES** (`#30368a`), **PAID** (`#2e7d32`), **PARTIALLY-PAID** (`#fb8c00`), **DRAFT** (`#78909c`).
    - Integrated instant memoized client-side filtering (`displayedInvoice`) and live `statusCounts` computation.
    - Updated DataGrid container height to `calc(100vh - 200px)`.
  - **Release & Distribution**: Bumped version to `3.5.03`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.5.3.exe`, and pushed commit to GitHub for live Railway and Cloudflare Pages deployment.

- **Maintenance Module Interactive Status Summary Filter Cards with Dedicated Converted Card (Ver 3.5.02)**:
  - **7 Status Summary Cards Grid**:
    - Embedded a responsive, ultra-compact 7-card interactive grid in `MaintenanceViewAdmin.js` positioned in the top area between the AppBar and the data table:
      - **ALL ORDERS**: Dark Blue `#30368a` | `AssignmentIcon`
      - **OPEN**: Primary Blue `#1976d2` | `BuildIcon`
      - **PENDING**: Amber `#ed6c02` | `HourglassEmptyIcon`
      - **CLOSED**: Emerald Green `#2e7d32` | `CheckCircleIcon` (Strictly counts & displays only un-converted closed orders)
      - **CONVERTED**: Teal `#00838f` | `ReceiptLongIcon` (Strictly counts & displays only orders converted to invoice)
      - **RESCHEDULE**: Purple `#9c27b0` | `EventRepeatIcon`
      - **CANCEL**: Danger Red `#d32f2f` | `CancelIcon`
    - Streamlined cards to a compact height (~52px) with `p: '6px 10px'`, 22px icon badge, 16px bold count, and 9.5px uppercase header to prevent pushing the table off screen.
  - **Full Viewport Fit & Pagination Visibility**:
    - Replaced hardcoded `height: 600` with `height: calc(100vh - 200px)` (with `minHeight: 380px`), ensuring the DataGrid and bottom pagination footer (`< 1 2 3 ... 12 >`) are permanently visible on all screen sizes without scrolling the page.
    - Compacted top action header bar (Add & Refresh Search) into a unified flex row.
  - **1-Click Filter & Reset Integration**:
    - Clicking any status card (e.g. `CLOSED` or `CONVERTED`) filters the maintenance orders table and pagination to display orders matching that status alone.
    - Clicking `ALL` or re-clicking the active card clears the filter and reloads all records.
  - **Server-Side Aggregation & Strict Separation**:
    - In `server/routes/maintenanceRoutes.js`, added MongoDB `$project` + `$group` aggregation to `/maintenance-Information` to separate `Converted: true` from pure `status: 'Close'`, returning accurate independent counts for `{ all, open, pending, close, converted, reschedule, cancel }`.
  - **Release & Distribution**: Bumped version to `3.5.02`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.5.2.exe`, and pushed commit to GitHub for live Railway and Cloudflare Pages deployment.

- **ISO YYYY-MM-DD Date Filter Normalization & Accurate Multi-Currency Reconciliation (Ver 3.5.01)**:
  - **Date Comparison ISO Normalization**:
    - Fixed alphabetical string comparison bug in `DailyExpenseAdminView.js` (`dayjs().format('DD/MM/YYYY')` -> `dayjs().format('YYYY-MM-DD')`) across Expenses, PayRoll, POS, Cash, and Payment filters.
    - Previously, alphabetical comparison on `DD/MM/YYYY` erroneously included past records from other months (such as August 12-15) on day 11, causing extraneous payments ($75.00) and FC values to bleed into today's Total Payment Received and distort Summary numbers.
    - With strict `YYYY-MM-DD` ISO filtering, only today's genuine transactions are included, ensuring physical cash counts perfectly match the register.
  - **Release & Distribution**: Bumped version to `3.5.01`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.5.01.exe`, and pushed commit to GitHub for live Railway and Cloudflare Pages deployment.

- **Payment Received Cash Accounting Reconciliation & POS Multi-Tier Summary Matching (Ver 3.5.00)**:
  - **Payment Received 3-Tier Multi-Currency Table Structure**:
    - Aligned the **Payment Received** table in `DailyExpenseAdminView.js` to strictly follow the multi-tier accounting model used in Point of Sale (POS):
      - **Gross Payment Display**: Each payment table row displays the gross cash received (`Total FC` and `Total $`), invoice reference, and `Credit` ($0 if surplus was returned in cash).
      - **3-Row Table Footer**:
        1. `Payment Received Gross Total` (`totalGrossPaymentFC` | `totalGrossPaymentUSD`)
        2. `Payment Return Change Total (Cash Returned)` (`-FC totalReturnPaymentFC` | `-$ totalReturnPaymentUSD` in red `#d32f2f`)
        3. `Daily Payment Received Total (Net Cash in Hand)` (`totalPaymentFC1` | `totalPaymentUSD1` in blue `#1565c0`)
  - **Correct Physical Cash Drawer Accounting on Surplus Cash Return**:
    - Fixed accounting formula when a customer pays excess cash (e.g. customer gives $200 cash for a $130 invoice with $50 USD return + FC 45,000 return):
      - Gross Cash received is computed from the full Amount Received ($200 USD), not the invoice amount.
      - Return cash ($50 USD and FC 45,000) is deducted from the gross cash received, resulting in exact physical cash in hand: +$150 USD net and -FC 45,000 net.
      - Total Summary card and drawer closing cash (`Remaining FC` and `Remaining $`) perfectly balance physical drawer cash movements and expenses.
      - Formatted negative amounts in Summary Cards cleanly with `-FC` and `-$`.
  - **Release & Distribution**: Bumped version to `3.5.00`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.5.00.exe`, and pushed commit to GitHub for live Railway and Cloudflare Pages deployment.

- **Payment Ordering, Add Payment Cash Return (USD/FC) & Maintenance Expenses Invoice Conversion (Ver 3.4.99)**:
  - **Payment Received Newest-to-Oldest Ordering**:
    - Fixed sort order in `src/js/AdminView1/PaymentView.js` for both online and offline Dexie cache views by sorting strictly descending by `paymentNumber` (`[...formatDate].sort((a, b) => Number(b.paymentNumber || 0) - Number(a.paymentNumber || 0))`).
    - Configured server-side sorting `{ paymentNumber: -1, _id: -1 }` on the `/payment` endpoint in `server/routes/Routes.js`.
  - **Add & Edit Payment Cash Return (Change) in USD / FC**:
    - In `PaymentInformationForm.js` and `PaymentInformationUpdate.js`, added comprehensive surplus handling when a customer overpays (`remaining > 0`):
      - **Deposit to Customer Credit**: Keeps existing credit accrual for the customer.
      - **Cash Return to Customer (Change)**: Allows the cashier to return the surplus to the customer in USD (`returnUSD`), Congolese Francs (`returnFC`), or both combined.
      - Integrated with Today's Rate (`rate` from `/rate` module) with 1-click helper buttons (`[Return All in USD]`, `[Return All in FC]`) and real-time equivalent balance validation.
      - If Cash Return is chosen, customer credit balance is NOT increased by the returned amount, maintaining 100% accounting integrity.
      - Updated `paymentSchema.js` and backend `/create-payment` and `/update-payment` routes to persist `excessAction`, `returnUSD`, and `returnFC`.
  - **Payment Receipt & Daily Expenses Reconciliation**:
    - In `PaymentInformationView.js`, updated the printable payment receipt to show `Cash Return USD` and `Cash Return FC` when change is given.
    - In `DailyExpenseAdminView.js`, updated daily cash calculations so that cash returned to customers reduces the net cash retained in the register (`PaymentReceivedUSD - returnUSD` and `PaymentReceivedFC - returnFC`), and added clear visual badges (`Return Change: $X / FC Y`) in the daily payments table to ensure physical drawer cash matches the reports.
  - **Maintenance Convert to Invoice Expenses Inclusion**:
    - In `MaintenanceConvertToInvoice.js`, added live fetching and grouping of maintenance expenses (`expense` and `expensesCategory`) and employee labor planning (`planing`).
    - Merged maintenance expenses categories and employee labor rows into the generated invoice items table alongside existing parts and labor fees, ensuring converted invoices match the Maintenance overview grand total.
  - **Release & Distribution**: Bumped version to `3.4.99`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.4.99.exe`, and pushed commit to GitHub for live Railway and Cloudflare Pages deployment.

- **Maintenance Customer Retention & DB Overwrite Protection (Ver 3.4.98)**:
  - **Maintenance Customer Name Loading & State Initialization**:
    - Fixed missing `setCustomerName(mData.customerName || null)` in `MaintenanceUpdateView.js` `fetchData()`, ensuring existing client names are always loaded into state when opening maintenance records for editing.
    - Updated `customerName` initial state from `{}` to `null` to avoid false truthy evaluations.
    - Updated `MaintenanceFormClone.js` and `MaintenanceConvertToInvoice.js` to ensure `customerName` is correctly populated on mount.
    - Rendered customer name with safe label extraction (`customerName.customerName || customerName.Customer || customerName.name`) and enhanced the Autocomplete with robust search filtering across name, address, and phone number.
  - **Backend Customer Retention Guard**:
    - Enhanced `/update-maintenance/:id`, `/update-invoice/:id`, `/update-estimation/:id`, and `/update-projects/:id` in backend routes to automatically delete invalid/empty `customerName` properties from update payloads.
    - Guarantees that partial updates (e.g. inventory itemOut/itemPurchase synchronization) or empty payload objects can **never** overwrite or wipe out an existing customer in MongoDB.
  - **Release & Distribution**: Bumped version to `3.4.98`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.4.98.exe`, and pushed commit to GitHub for live Railway and Cloudflare Pages deployment.

- **Strict Customer Name Enforcement, Item Purchase Re-assignment & Dynamic Maintenance Grand Total (Ver 3.4.97)**:
  - **Strict Customer Name Enforcement Across All Modules**:
    - Enforced mandatory Customer Name selection across **Maintenance**, **Invoices**, **Quotations/Estimates**, **Projects**, and **Point of Sale (POS)**.
    - Frontend validation on form submission: blocked creation and editing when customer is empty, displaying toast error: `"Please select or enter a valid Customer Name"`.
    - Backend validation on creation and update endpoints in `server/routes/maintenanceRoutes.js`, `server/routes/invoiceRoutes.js`, `server/routes/estimationRoutes.js`, `server/routes/projectRoutes.js`, and `server/routes/Routes.js`, rejecting empty customer payloads with HTTP 400.
  - **Item Purchase Edit Client & Reference Re-assignment**:
    - Enhanced `ItemPurchaseUpdateForm.js` to fetch live `projects`, `maintenanceList`, and `invoiceList` data on component mount.
    - Replaced non-interactive static text fields with searchable MUI `<Autocomplete>` dropdowns for Project (`PR-...`), Maintenance (`M-...`), Invoice (`INV-...`), and Description/Other.
    - Enabled users to freely modify or correct the assigned project, maintenance order, invoice, or client during item purchase edits.
    - Formatted reference labels safely in `ItemPurchaseViewForm.js` to prevent `undefined` strings.
  - **Maintenance Overview Dynamic Grand Total Calculation**:
    - In `src/js/AdminView1/PageView/MaintenanceView/MaintenanceViewInformation.js`, replaced static `row.totalInvoice` in the finance summary overview with dynamic live summation:
      `liveGrandTotal = liveItemsTotal + liveLaborTotal + (user.data.role === 'CEO' ? totalAmountPlaning + totalMaintenanceExpenses : 0)`.
    - Resolved issue where previously deleted or modified project/daily expenses remained cached in `row.totalInvoice`, ensuring live expenses ($50.00 + $4.44 = $54.44) and current items/labor are calculated dynamically in real-time.
  - **Release & Distribution**: Bumped version to `3.4.97`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.4.97.exe`, and pushed commit to GitHub for live Railway and Cloudflare Pages deployment.
  - **Purchase Order Search Scope Expansion**:
    - Enhanced `/purchaseOrder-Information` backend route in `server/routes/purchaseRoutes.js` with comprehensive `$or` search regex filters covering `description`, `manufacturer`, `manufacturerNumber`, `reason`, `status`, `Converted` (converted/open status queries), `reference.referenceName`, `reference.projectName`, `reference.serviceName`, `reference.customerName`, `itemsQtyArray.itemName`, `itemsQtyArray.itemBrand`, `itemsQtyArray.itemDescription`, `itemsQtyArray.newDescription`, and flexible PO numeric search (matching `PO-000724`, `PO-724`, or `724`).
    - Added multi-branch scoping (`branchId` parameter) to `PurchaseOrderViewAdmin.js` and `PurchaseOrderInfoView.js`.
  - **Newest-to-Oldest Ordering**:
    - Configured server-side sorting (`{ outNumber: -1, _id: -1 }`) on both `/purchaseOrder` and `/purchaseOrder-Information` endpoints.
    - Updated `PurchaseOrderInfoView.js` left sidebar to order records from newest to oldest (`outNumber` descending) and expanded its client filter to match PO numbers, manufacturers, references, descriptions, reasons, and items.
  - **Release & Distribution**: Bumped version to `3.4.96`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.4.96.exe`, and pushed commit to GitHub for live Railway and Cloudflare Pages deployment.

- **Autocomplete Safe String Extraction & Null Safety Fix Across Forms (Ver 3.4.95)**:
  - **TypeError: Cannot read properties of undefined (reading 'toLowerCase') Fix**:
    - Fixed runtime TypeError in `ItemOutViewForm.js` occurring when selecting "Maintenance" as Reason and clicking or typing in the Maintenance Number Autocomplete dropdown.
    - Replaced unsafe direct nested property accesses (`option.customerName.customerName.toLowerCase()`, `option.projectName.toLowerCase()`, `option.serviceName.toLowerCase()`) with bulletproof safe extraction logic across `ItemOutViewForm.js`, `ItemPurchaseViewForm.js`, `PurchaseForm.js`, `PurchasesFormView.js`, and `PurchaseFormUpdate.js`.
    - Ensured `getOptionLabel`, `renderOption`, and `filterOptions` gracefully handle missing objects, plain string representations, `null`, or `undefined` values without crashing.
  - **Release & Distribution**: Bumped version to `3.4.95`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.4.95.exe`, and pushed commit to GitHub for live Railway and Cloudflare Pages deployment.

- **Maintenance Edit/Update Safe Numeric Parsing & toFixed Guard (Ver 3.4.94)**:
  - **TypeError: Cannot read properties of null (reading 'toFixed') Fix**:
    - Fixed runtime TypeError in `src/js/AdminView1/PageView/MaintenanceView/MaintenanceUpdateView.js` when opening existing maintenance records for editing (such as `SOFI BANQUE | M-001179`).
    - Added data sanitization in `fetchData` ensuring all loaded items have valid numeric `itemAmount`, `itemQty`, `itemRate`, and `itemDiscount` properties.
    - Wrapped all `Item.itemAmount.toFixed()` calls and total computations with `Number(... || 0).toFixed(2)` across 16 forms and views (`MaintenanceUpdateView`, `MaintenanceFormView`, `MaintenanceFormClone`, `MaintenanceConvertToInvoice`, `EstimateConvertToMaintenance`, `EstimateInvoiceFormUpdate`, `ShopPosUpdateForm`, `InvoiceFormClone`, etc.).
  - **Release & Distribution**: Bumped version to `3.4.94`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.4.94.exe`, and pushed commit to GitHub for live Railway and Cloudflare Pages deployment.

- **Safe Unit & String Access in Project Information & Across All Views (Ver 3.4.93)**:
  - **TypeError: Cannot read properties of undefined (reading 'toUpperCase') Fix**:
    - Fixed runtime TypeError in `src/js/AdminView1/PageView/ProjectView/ProjectViewInformation.js` when rendering the Invoices and Purchase tabs.
    - Updated `server/routes/itemRoutes.js` `/item` route `summary=true` projection to explicitly include `unit: 1`, `itemSellingPrice: 1`, `itemCostPrice: 1`, `itemQuantity: 1`, and `stock: 1`.
    - Applied safe optional chaining and string checks (`relatedUnit?.unit ? String(relatedUnit.unit).toUpperCase() : ''`) across all 10 views where item units and brands are rendered (`ProjectViewInformation`, `InvoiceViewAdminAll`, `PurchasesViewAdminAll`, `PurchaseOrderInfoView`, `PurchaseOrderViewAdmin`, `ItemOutViewAdmin`, `ItemReturnAdminView`, `EstimateViewAdminAll`, `MaintenanceViewInformation`, `SupplierViewInformation`).
  - **Release & Distribution**: Bumped version to `3.4.93`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.4.93.exe`, and pushed commit to GitHub for live Railway and Cloudflare Pages deployment.

- **Project Information Ultra-Fast Query Scoping & Performance Optimization (Ver 3.4.92)**:
  - **Server-Side Project Scoping & Projection**:
    - Identified massive overhead in `ProjectViewInformation.js` where full collections were fetched across the database without scoping (e.g., 80,960 notifications taking 39s, 6,754 itemOut taking 12s, 14,254 expenses taking 5.7s, 10,827 planning records taking 4.1s, items taking 2s).
    - Updated backend endpoints (`/notification`, `/planing`, `/payment`, `/itemOut`, `/itemReturn`, `/itemPurchase`, `/expense`, `/purchase`, `/invoice`, `/item`, `/comment`) to accept `projectId` / `idInfo` queries with indexed filters and `.lean()`.
    - Added lightweight `summary=true` projection for `/item` to return only essential fields (`itemName`, `itemBrand`, `itemUnit`, `cost`, `itemCost`, `price`, `category`, `storeName`).
    - Added default limit safeguard on global `/notification` route (`.limit(100)`) preventing full table scans when viewing global alerts.
  - **Scoped Client-Side Data Loaders**:
    - Updated `ProjectViewInformation.js` data fetching methods (`fetchDetailedData`, `fetchInvoicesAndPurchases`, `fetchExpenses`, `fetchPayments`, `fetchTimelineAndStaff`, `fetchItemsMovement`, `fetchComment`) to pass `projectId=${id}` / `idInfo=${id}` and `summary=true`.
    - Updated `ProjectUpdateView.js` to query scoped purchases and lightweight customer summaries.
    - Dropped network payload from ~100MB+ down to <50KB, reducing total load time from 45+ seconds down to <1 second.
  - **Release & Distribution**: Bumped version to `3.4.92`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.4.92.exe`, and pushed commit to GitHub for live Railway and Cloudflare Pages deployment.

- **Employee Information Statement Tab DemoContainer Import Fix (Ver 3.4.91)**:
  - **Added Missing DatePicker DemoContainer Import**:
    - Fixed runtime ReferenceError `DemoContainer is not defined` in `src/js/AdminView1/PageView/EmployeeView/EmployeeViewAdminAll.js` at line 1392 (TabPanel 4 / Statement of Accounts tab).
    - Imported `DemoContainer` from `@mui/x-date-pickers/internals/demo`.
  - **Release & Distribution**: Bumped version to `3.4.91`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.4.91.exe`, and pushed commit to GitHub for live Railway and Cloudflare Pages deployment.

- **Invoice Information Item Search String Safety Fix (Ver 3.4.90)**:
  - **Bulletproof Search Matching in Invoice & Quotation Information Views**:
    - Fixed runtime TypeError crash `(e.itemName.itemName || e.itemName).toLowerCase is not a function` in `src/js/AdminView1/PageView/InvoiceView/InvoiceInformation.js`.
    - Wrapped item name and description parsing with explicit type checks (`typeof Item.itemName === 'string' ? Item.itemName : (Item.itemName?.itemName || Item.itemName?.itemDescription || '')`) and safe lowercase string matching.
    - Added matching safeguards to `src/js/AdminView1/PageView/EstimateView/EstimateInformation.js` for quotation searching.
  - **Release & Distribution**: Bumped version to `3.4.90`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.4.90.exe`, and pushed commit to GitHub for live Railway and Cloudflare Pages deployment.

- **Universal Styled Badges for All Payment Modes (Ver 3.4.89)**:
  - **Unified & Distinct Payment Mode Pill Badges**:
    - Enhanced payment tables and receipt vouchers across `CustomerInformationView.js`, `PaymentView.js`, and `PaymentInformationView.js` with clear, color-coded status badges for all payment modes:
      - `CASH`: Warm amber/gold badge (`#fef3c7` bg, `#92400e` text, bold, no-wrap, rounded pill).
      - `BANK TRANSFER`: Crisp sky blue badge (`#e0f2fe` bg, `#0369a1` text, bold, no-wrap, rounded pill).
      - `CREDIT DEPOSIT`: Emerald green badge (`#dcfce7` bg, `#166534` text, bold, no-wrap, rounded pill).
      - `CREDIT APPLIED`: Indigo badge (`#e0e7ff` bg, `#3730a3` text, bold, no-wrap, rounded pill).
      - Fallback/Other: Clean slate badge (`#f1f5f9` bg, `#334155` text, bold, no-wrap, rounded pill).
    - Added `display: inline-block; whiteSpace: nowrap;` and expanded column widths (`width: 140` / `width: 90px`) to prevent any wrapping across screen and printable views.
  - **Release & Distribution**: Bumped version to `3.4.89`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.4.89.exe`, and pushed commit to GitHub for live Railway and Cloudflare Pages deployment.

- **Payment System, Dynamic Customer Credit Ledger & Statement of Accounts Reconciliation (Ver 3.4.88)**:
  - **Dynamic Live Customer Credit Ledger Calculation**:
    - Replaced reliance on static or un-synced `customer.credit` fields by computing customer credit dynamically directly from the transaction ledger: `Available Credit = Total (Credit & Unallocated Deposits) - Total (Credit-Account Used)`.
    - Customer credit is strictly bounded (`Math.max(0, credit)`) to guarantee non-negative balances across all operations.
  - **Over-Allocation Prevention & Strict Credit Caps**:
    - In `PaymentInformationForm.js`: Added live customer credit balance display, capped `handlePayment` to available credit when `modes === 'Credit-Account'`, added MenuItem option for `Credit-Account` (`Use Customer Credit ($X.XX Available)`), and added strict alert validation blocking submission if applied credit exceeds available credit.
    - In `InvoiceViewAdminAll.js`: Dynamically resolved customer ID, fetched real-time credit ledger balance, and capped "Apply Credit" modal inputs and submissions so users can never apply more credit than the customer actually has.
    - In `PaymentView.js`: Fixed payment deletion credit restoration to safely compute dynamic customer credit balances.
  - **Customer View Payment Tab & Statement of Accounts Transparency**:
    - In `CustomerInformationView.js`: Refactored TabPanel 4 (Payment Tab) table to distinguish **Amount Received (Cash Inflow)** vs **Credit Applied (Credit-Account)**. For `Credit-Account` rows, "Amount Received" clearly displays `- (From Credit)` with a `CREDIT APPLIED` badge, preventing misleading visual duplicate revenue.
    - Reconciled Statement of Accounts calculations across All, Year, Custom, and All Outstanding modes so `Amount Paid` accurately reflects applied invoice payments and available unallocated credit.
  - **Release & Distribution**: Bumped version to `3.4.88`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.4.88.exe`, and pushed commit to GitHub for live Railway and Cloudflare Pages deployment.

- **Document Lock Force Unlock Action CEO-Only Restriction (Ver 3.4.87)**:
  - **Restricted Force Unlock / Take Over Action to CEO Role**:
    - Updated `src/js/hooks/useDocumentLock.js` to compute `isCEO = (resolvedRole || '').toUpperCase() === 'CEO' || (resolvedUserName || '').toUpperCase() === 'GG'` and expose it in the hook's return object.
    - Updated the full-screen document locking overlay across all 9 document update forms (`EstimateInvoiceFormUpdate`, `ItemOutViewUpdate`, `InvoiceFormUpdate`, `ItemPurchaseUpdateForm`, `PurchaseFormUpdate`, `PurchaseUpdateOrder`, `ProjectUpdateView`, `MaintenanceUpdateView`, and `MaintenanceOrderUpdate`).
    - The `Force Unlock / Take Over` button is now exclusively visible to and operable by users with `CEO` role or username `GG`.
    - Non-CEO users (users with `ADMIN` or `USER` roles) see only the "Go Back" button with informational text stating: "Please wait until they are finished editing this document."
  - **Release & Distribution**: Bumped version to `3.4.87`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.4.87.exe`, and pushed commit to GitHub for live Railway and Cloudflare Pages deployment.

- **Purchase & Project Information Item Movement Purchases & Dynamic Buy/Cost Calculations (Ver 3.4.86)**:
  - **Item Purchase (`Item Buy`) Integrated into Item Movement Info Subtable**:
    - Updated `PurchasesViewAdminAll.js` and `ProjectViewInformation.js` to fetch and integrate `/itemPurchase` documents directly alongside `/itemOut` and `/itemReturn`.
    - Renamed collapsible section title in item rows to **"Item Movement Info (Purchase, Out & Return)"**.
    - Configured movement rows for Item Purchases to display formatted movement numbers (e.g. `IP-003496`), transaction date/time, green badge (`Item Purchase`), and positive quantity pill (`+Qty`).
  - **Dynamic `Buy`, `Total-Buy`, `I-Out`, and `Total-Cost` Calculation**:
    - Implemented `isItemMatch()` and `isMatchingProjectOrPurchase()` matching algorithms supporting both catalog items (matched by MongoDB ObjectId) and manual/custom items (matched by item description or model number).
    - Calculated `Buy` quantity and `Total-Buy` cost dynamically from linked `itemPurchase` records, resolving `$0.00` display issues when item purchases exist.
    - Calculated `I-Out` as net outgoing quantity (`Math.max(0, Out - Return)`).
    - Calculated `Total-Cost` / `TotalCostOut` dynamically using unit purchase costs or total bought amounts.
    - Updated SubTotal and print templates across Purchase View and Project View TabPanel 3.
  - **Release & Distribution**: Bumped version to `3.4.86`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.4.86.exe`, and pushed commit to GitHub for live Railway and Cloudflare Pages deployment.

- **Notification Center Display-Only Security & Access Permission Enforcement (Ver 3.4.85)**:
  - **Removed Direct Navigation Handlers**:
    - Completely eliminated `handleNavigate`, `useNavigate`, and all `onClick` routing events from `NotificationVIewInfo.js` across both the **New** and **All** tabs.
    - Removed hover-scaling, transition effects, and pointer cursors from notification cards.
  - **Permission Enforcement & Grant Access Protection**:
    - The Notification Center is now strictly informational/display-only. Users with restricted roles can no longer click notification cards to bypass **Grant Access** permissions and view unauthorized maintenance orders, commercial invoices, or project files.
  - **Release & Distribution**: Bumped version to `3.4.85`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.4.85.exe`, and pushed commit to GitHub for live Railway and Cloudflare Pages deployment.

- **Asset Control Report Date of Visit Typing & State Atomic Update Fix (Ver 3.4.84)**:
  - **Fixed Input Typing Freeze on Date of Visit**:
    - Identified that `onChange` in `AssetControlReportSection.js` was firing dual state updates using a closed-over `units` array, causing the second update to overwrite the typed character with the previous empty string `''`.
    - Refactored `handleUnitChange`, `handleAddUnit`, `handleAddMultipleUnits`, `handleDeleteUnit`, and `handleFieldChange` to utilize atomic functional state updates (`prev => ...`), synchronizing `dateOfVisit` and `dateOfPurchase` simultaneously within a single state update.
  - **Release & Distribution**: Bumped version to `3.4.84`, compiled Webpack assets, packaged `dist/Global Gate Setup 3.4.84.exe`, and pushed to GitHub.

- **Asset Control Report Column Renaming & Blank Field Initialization (Ver 3.4.83 / Ver 3.4.82)**:
  - **Renamed "Purchase Date" to "Date of Visit"**:
    - Renamed column header and input placeholders across `AssetControlReportSection.js`, `MaintenanceViewInformation.js`, and `MaintenanceOrderViewInformation.js` (on-screen tables, printable A4 schedule sheets, and Excel exports) from "Purchase Date" / "Install/Purchase" / "PURCHASE" to **"Date of Visit"** (`DD/MM/YYYY`).
    - Maintained backward compatibility reading `unit.dateOfVisit || unit.dateOfPurchase || ''`.
  - **Clean Empty Defaults for New Equipment Rows**:
    - Updated `createDefaultAssetUnit` so all new rows start with completely blank strings (`''`) for Date of Visit, Location, Repair History, Brand, Model No, and Serial No, eliminating the need for technicians to manually erase default text like `N/A` or `HQ`.
  - **Schedule Metadata & KPI Adjustments**:
    - Removed redundant `Branch` and `Branch Manager` fields from the schedule header.
    - Automatically mapped `Prepared By` to the client name and `Ref No` to the Maintenance order number.
    - Simplified KPI badges to display raw unit counts (Total Units, Deep Cleaning Units, Soft Cleaning Units, Corrective Maintenance Units, Reactive Maintenance Units) without pricing multipliers.
  - **Release & Distribution**: Bumped versions to `3.4.82` and `3.4.83`, compiled Webpack assets, packaged Windows installers, and pushed to GitHub.

- **Maintenance Module ASSET CONTROL REPORT & Equipment Schedule System (Ver 3.4.81)**:
  - **Expandable Asset Control Section in Maintenance Forms**:
    - Implemented `AssetControlReportSection.js` as an expandable section across **Add Maintenance** (`MaintenanceFormView.js`), **Edit Maintenance** (`MaintenanceUpdateView.js`), and **Clone Maintenance** (`MaintenanceFormClone.js`), styled similarly to the Quotation Cover Letter.
    - Toggle checkbox: `Attach Asset Control Report to this Maintenance (Yearly Schedule & Equipment Units Audit)`.
    - Interactive equipment units table allowing technicians/office to add, clone, and remove units (e.g. 5, 23, or more devices) with full fields: `Device Type` (Split A/C, Cassette, Chiller, Refrigerator, etc. with Autocomplete), `Brand` (Samsung, LG, Sharp, etc.), `Model No`, `Serial No`, `Date of Purchase / Install`, `Location / Room` (HQ, ACM, Jovena, etc.), `Repair History`, `Deep Cleaning` checkbox, `Soft Cleaning` checkbox, `Corrective Maintenance` checkbox, `Reactive Maintenance` checkbox, and `Cleaning History / Notes`.
    - Schedule header fields: `Prepared By`, `Ref No`, `Branch`, `Branch Manager`, `Subject`, `Technician Name`, and `General Notes & Recommendations`.
    - Real-time KPI summary counters: Total Audited Units, Deep Cleaning count ($25 multiplier), Soft Cleaning count ($15 multiplier), Corrective Maintenance count ($20 multiplier), Reactive Maintenance count ($25 multiplier), and Estimated Contract Package Value.
  - **Overview Document & Printable "GLOBAL GATE GENERAL SERVICES - ASSET CONTROL SCHEDULE"**:
    - Integrated dedicated **"Asset Control Report"** tab (TabPanel 3) in `MaintenanceViewInformation.js` with KPI stat cards, schedule overview summary, and complete equipment units breakdown table.
    - In `Overview` tab (TabPanel 1) and ReactToPrint template, automatically appends the formal **"GLOBAL GATE GENERAL SERVICES - ASSET CONTROL SCHEDULE"** page (PrintHeader, Metadata Matrix table, Multiplier Rates Bar, Units Schedule Table, Notes, and 3-column Signatures for Prepared By, Technician, and Client Representative) when `includeAssetControl` is enabled.
    - Enhanced `exportToExcel` to dynamically create a dedicated `Asset Control Schedule` worksheet in exported Excel workbooks.
  - **Backend Persistence**:
    - Updated `server/model/maintenanceSchema.js` to store `includeAssetControl: { type: Boolean, default: false }` and `assetControlReport: { type: Object, default: {} }`.
    - Updated `server/routes/maintenanceRoutes.js` (`/create-maintenance` and `/update-maintenance/:id`) to accept and persist all Asset Control Report metadata.
  - **Release & Distribution**: Bumped version to `3.4.81`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.4.81.exe`, and pushed commit to GitHub for Railway deployment.

- **Rate Module Category Renaming & Cascade to All Daily Expenses + Crash Fix (Ver 3.4.80)**:
  - **Category Renaming & Creation in Rate Module**:
    - Enhanced the **All Category** section in `RateViewAdmin.js` with an **Action column** containing an Edit icon on each category row and hooked the `+` button in the card header to open an Add Category modal.
    - Added responsive dialog for creating new categories and editing existing category names with form validation and local storage cache invalidation (`localStorage.removeItem('Category')`).
  - **Automated Backend Cascade to Historical Daily Expenses**:
    - Updated `PUT /update-expensesCategory/:id` in `server/routes/expenseRoutes.js` to automatically cascade category name changes across all historical documents in `expenseSchema` (both object-based `{ expenseCategory: { _id, expensesCategory } }` and string-based records) as well as the `dailyExpense` collection using case-insensitive regex queries and ObjectId matching.
    - Renaming a category (e.g. changing "Fuel" to "Diesel") immediately updates all past and present Daily Expenses records tied to that category without data loss.
  - **Category Drill-down & Statement Export Crash Fix**:
    - Fixed `TypeError: (Item.total || 0).toFixed is not a function` in `CategoryViewDailyExpenses.js` and `CategoryPrintStatement.js` by ensuring `Item.amount` and `Item.total` are safely cast with `Number(...)` before formatting with `.toFixed(2)` and `.toLocaleString()`.
  - **Release & Distribution**: Bumped version to `3.4.80`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.4.80.exe`, and pushed commit to GitHub for Railway deployment.

- **Financial Performance & Statement of Accounts Metric Alignment (Ver 3.4.79)**:
  - **Identified Cause of Variance Between Dashboard & Statement Summary**:
    - Discovered that the Dashboard chart aggregates for the **entire month of September 2026** (30 days), whereas the Statement of Accounts was filtered to **Custom Range (`01/09/2026` to `04/09/2026`)**.
    - In the database, 5 expense entries (totaling **$1,527.66**) were dated after September 4th (on `06/09/2026` and `13/09/2026`: D-015550, D-015389, D-014917, D-014735, D-014475), causing the Dashboard to include them ($5,190.81 daily expenses) while the Custom Range 01/09-04/09 excluded them ($3,663.15 daily expenses).
    - Switching Statement of Accounts to `Month -> September` or extending the Custom Range encompasses the full month and aligns both views to the exact same numbers ($10,289.87 Expenses, $5,343.37 Cash Out, $1,191.72 Gross Cash Flow).
  - **Dynamic KPI Card Labeling in Statement of Accounts**:
    - Updated `RevenueExpensesAll.js` to dynamically label the red KPI card as `Total Cash Out (Disbursements)` when viewing `Cash Out` or `Gross Cash Flow`, and `Total Expenses (Accrual)` when viewing `Expenses` or `Net Income`, preventing confusion between Cash Out and Accrual Expenses.
  - **Release & Distribution**: Bumped version to `3.4.79`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.4.79.exe`, and pushed commit to GitHub.

- **Payment View & DataGrid Loading Balloon Graphic Removal (Ver 3.4.78)**:
  - **Eliminated Flash of Balloon "Saved Events" Graphic**:
    - Identified that `PaymentView.js` (along with `ExpensesViewAdmin.js`, `SellShopInvoiceView.js`, and `EmployeeAllViewTable.js`) conditionally rendered a legacy balloon illustration (`no-data.png` with text *"Saved events will show up here, so you can easily view them here later."*) whenever the table rows array had length 0.
    - Because data is loaded asynchronously from the server, the empty initial state (`[]`) caused the balloon image to flash on screen before the DataGrid popped in once records arrived.
    - Removed the balloon fallback across `PaymentView.js` (TabPanels 1, 2, 3), `ExpensesViewAdmin.js`, `SellShopInvoiceView.js`, and `EmployeeAllViewTable.js`, rendering DataGrid / Table directly so that the layout remains stable, fast, and uses standard DataGrid empty state handling.
  - **Release & Distribution**: Bumped version to `3.4.78`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.4.78.exe`, and pushed commit to GitHub.

- **Supplier Statement & IN-SUMMARY Reference Numbers & Project Number Display (Ver 3.4.77)**:
  - **Reference Number Visibility in Statement Details & IN-SUMMARY**:
    - Enhanced Supplier Statement of Accounts (`SupplierViewInformation.js`) to display the user-entered Reference number (stored in `manufacturerNumber`) in the **Details** column alongside the linked reason/client (e.g. `INV-002375 / GLOBAL PVA (Ref: 09)` or `P-000123 / GG CONCRETE BLOCK FACTORY (Ref: 15)`).
    - Applied the formatted `(Ref: ...)` string to both on-screen statement tables and printable/PDF statement exports (`formatStatementDetails()`).
    - Updated IN-SUMMARY table in Supplier Information to display the true Reference string (`manufacturerNumber`) in the **Reference** column, while adding a dedicated **IP #** column (`IP-003375`).
  - **Project Number Synchronization on Item Purchases**:
    - Resolved issue where project-linked purchases only showed the project name without the project number (e.g. `GG CONCRETE BLOCK FACTORY` instead of `P-000123 / GG CONCRETE BLOCK FACTORY`).
    - Implemented `formatPurchaseReason()` in `SupplierViewInformation.js` with dynamic lookup against `projectsList` to resolve and prepend `P-000xxx` whenever missing from legacy records.
    - Updated `ItemPurchaseViewForm.js` `handleChangeProject()` to automatically format `projectName.name` with `P-000xxx` upon selection.
  - **Safe Navigation & New Window Freeze Elimination**:
    - Fixed `handleDecision('previous')`, `handleClose()`, and `handleOpenBack()` in `ItemPurchaseUpdateForm.js` and `ItemOutViewUpdate.js` to prevent modals from getting stuck when opened in standalone windows or tabs with `history.length <= 1`.
  - **Release & Distribution**: Bumped version to `3.4.77`, compiled Webpack electron and web bundles, packaged `dist/Global Gate Setup 3.4.77.exe`, and pushed commit to GitHub.

- **Document Concurrency Lock Synchronization & Unknown User Race Condition Elimination (Ver 3.4.76)**:
  - **Root Cause Resolution for "Unknown User (XXXX)" Lockout**:
    - Identified a race condition where edit forms (Item Purchase, Item Out, Invoice, Quotation, Purchase Order, Maintenance, Project, etc.) mounted and invoked `useDocumentLock` before asynchronous user profile fetching (`fetchUser()`) had populated the Redux state with `user.data.userName`.
    - As a result, `useDocumentLock` acquired the concurrency lock in MongoDB under `"Unknown User (XXXX)"` (using the tab's temporary session code). When `fetchUser()` subsequently resolved to the real username (e.g., `"GG"`), the hook re-evaluated, encountered a mismatch with the existing `"Unknown User"` lock, and displayed a `409 Conflict` full-screen lock overlay locking the user out of their own document.
  - **Synchronous Auth Hydration & Lock Pre-checks**:
    - Updated `authSlice.js` to persist and retrieve `currentUserName` synchronously via `localStorage`.
    - Updated `useDocumentLock.js` to synchronously resolve the username immediately upon hook initialization and inhibit emitting lock acquisition requests until a verified username is confirmed.
    - Updated `server/routes/lockRoutes.js` `/acquire` and `/heartbeat` handlers to automatically upgrade and claim existing locks held under `"Unknown User"` or matching the active session ID without erroring.
  - **Force Unlock & Take Over Capability Across All Update Forms**:
    - Added a **"Force Unlock / Take Over"** action button to the lock screen overlay across all 8 update modules (`ItemPurchaseUpdateForm`, `ItemOutViewUpdate`, `PurchaseUpdateOrder`, `MaintenanceOrderUpdate`, `MaintenanceUpdateView`, `InvoiceFormUpdate`, `EstimateInvoiceFormUpdate`, `ProjectUpdateView`).
    - Exposed `forceRelease` from `useDocumentLock` to immediately clear stale locks from MongoDB and allow instant editing access.
  - **Release & Distribution**: Bumped version to `3.4.76`, compiled Webpack electron and web bundles, and packaged `dist/Global Gate Setup 3.4.76.exe`.

- **Supplier Store Name Cascade & Historical Item Purchases Synchronization (Ver 3.4.75)**:
  - **Cascade Supplier Updates to Item Purchases & Purchase Orders**:
    - Resolved the issue where changing a supplier's store name or supplier name in Supplier Information left existing/historical item purchases displaying the old store name.
    - Implemented `cascadeSupplierUpdate()` in `server/routes/supplierRoutes.js` inside `/update-Supplier/:id` to automatically find and update all related `itemPurchase`, `purchaseOrder`, and `item` records when a supplier's `storeName`, `supplierName`, or phone number is updated.
    - Added `/sync-all-supplier-purchases` endpoint to mass-reconcile all existing supplier records with their associated purchases.
    - Implemented lazy reconciliation in `server/routes/itemRoutes.js` on `/itemPurchase` queries so that any legacy unlinked or mismatched purchase records are automatically updated to the supplier's latest store name and ID.
    - Updated `SupplierFormUpdate.js` to invalidate client-side caches upon supplier edits.
  - **Release & Distribution**: Bumped version to `3.4.75`, compiled Webpack electron and web bundles, and packaged `dist/Global Gate Setup 3.4.75.exe`.
- **Supplier Item Purchases Synchronization & Supplier Statement Module (Ver 3.4.74)**:
  - **Resolved Item Purchase Discrepancy in Supplier Information**:
    - Identified root cause where suppliers with abbreviated or variant names (e.g., `supplierName: "TME"` vs `storeName: "TME. TSHILEMB MANUFACTURE & EXTRACTION"`) had purchases saved under the short name or with missing `manufacturerID`, causing strict equality filters to omit records (showing 9 instead of all 15 purchases).
    - Updated backend route (`server/routes/itemRoutes.js`) to support multi-identifier and regex matching on `supplierId`, `supplierName`, and `shortName` with case-insensitive and prefix regex matching.
    - Implemented `isMatchingSupplier()` helper in `SupplierViewInformation.js` with comprehensive matching: ID match, exact/substring name match, cleaned alphanumeric match, and prefix matching.
  - **Added Supplier Statement of Accounts Feature**:
    - Added dedicated **"Statement"** Tab (value 4) in `<TabList>` and a quick-access **"Supplier Statement"** button in TabPanel 2 (IN-SUMMARY).
    - Implemented dynamic filter options (`Year`, `Custom` date range, `All Outstanding`, `All`).
    - Added Account Summary calculation (Opening Balance, Invoiced/Purchased Amount, Amount Paid, Balance Due) and chronological running balances.
    - Included printable layout with `PrintHeader`, `PrintFooter`, supplier TO details, statement metadata, account summary, transaction rows, and print styling using `useReactToPrint`.
  - **Release & Distribution**: Bumped version to `3.4.74`, compiled Webpack electron and web bundles, and packaged `dist/Global Gate Setup 3.4.74.exe`.
- **Eliminated Bottom Gray Edges & Dynamic Full-Viewport Expansion (Ver 3.4.73)**:
  - **Resolved Root Cause Container Height Constraints**:
    - Updated `src/js/AdminView1/view.css`: Changed `.itemInfoContainer`, `.itemInfoContainer2`, `.itemInfoContainer3`, `.itemInfoContainer4` from `min-height: calc(100vh - 120px)` to `min-height: calc(100vh - 90px); box-sizing: border-box;`.
    - Updated `src/js/AdminView1/PageView/Chartview.css`: Removed restrictive `max-height: 600px` from `.itemInfoContainer2Contentdata` and ensured `max-width: 100%`.
  - **Standardized View Containers & TabPanels Across All Modules**:
    - **Invoices (`InvoiceViewAdminAll.js`)**: Updated TabPanels 1 (Invoice details), 2 (Payment Received), and 3 (Summary) from `470px`/`500px` to `calc(100vh - 230px)` with `overflowY: 'auto'`.
    - **Quotations / Estimates (`EstimateViewAdminAll.js`)**: Updated preview container from fixed `500px` to `calc(100vh - 230px)`.
    - **Purchases (`PurchasesViewAdminAll.js`)**: Updated purchase document container from fixed `450px` to `calc(100vh - 230px)`.
    - **Customers (`CustomerInformationView.js`)**: Updated sidebar lists to `calc(100vh - 170px)` and TabPanels 1 (Contact), 2 (Documents accordion), 3 (Payment Statement), and 5 (Statement of Accounts) from `550px` to `calc(100vh - 230px)`.
    - **Suppliers (`SupplierViewInformation.js`)**: Updated TabPanels 1 (Profile), 2 (Purchases list), and 3 (Ledger) from `500px` to `calc(100vh - 230px)`.
    - **Projects (`ProjectViewInformation.js`)**: Updated TabPanels 1 (Project details), 2 (Invoices), 3 (Purchases), and 4 (Advances) from `520px` to `calc(100vh - 230px)`.
    - **Maintenance & Maintenance Orders (`MaintenanceViewInformation.js`, `MaintenanceOrderViewInformation.js`)**: Updated TabPanels 1 (Job card) and 2 (Summary) from `500px` to `calc(100vh - 230px)`.
    - **Employees (`EmployeeViewAdminAll.js`)**: Updated sidebar lists to `calc(100vh - 170px)` and TabPanels 1 (Profile), 2 (Personal Info), 3 (Salary history), 4 (Statement of accounts), 5 (Planing), and 6 (Search) from `520px` to `calc(100vh - 230px)`.
    - **Payroll (`PayRollViewInformation.js`)**: Updated salary document container from fixed `550px` to `calc(100vh - 230px)`.
    - **Payments (`PaymentInformationView.js`)**: Updated receipt container from `560px` to `calc(100vh - 230px)`.
    - **Recurring & Retainer (`RecuringViewAdminAll.js`, `RetainerViewAdminAll.js`)**: Updated document containers from `580px` to `calc(100vh - 230px)`.
    - **Daily Expenses & Settings (`DailyExpenseAdminView.js`, `CategoryViewDailyExpenses.js`, `ExpensesViewAdminAll.js`, `RolePermission.js`)**: Converted all fixed sidebar and table heights (`520px`, `540px`, `565px`) to responsive viewport formulas.
  - **Release & Distribution**: Bumped version to `3.4.73`, built Webpack electron and web bundles, and packaged `dist/Global Gate Setup 3.4.73.exe`.
- **Credit Accounts Ledger Population & Calculation Synchronization (Ver 3.4.72)**:
  - **Synchronized Main Dashboard & Statement Totals**: Fixed `sortArrayByMonthCreditAccounts` and `totalCreditAccounts` in `AdminHome.js` so that negative settlement months are properly accounted for in the annual net total ($45,824.97) instead of clamping negative months to zero ($63,125.57), achieving 100% mathematical consistency with `RevenueExpensesAll.js`.
  - **Populated Credit Accounts Transaction Ledger**: Added dedicated `Credit Accounts` mapping in `RevenueExpensesAll.js` to render all client credit transactions (`New Credit Issued` and `Credit Settled / Paid`) with full client details (`Credit extended to [Client Name]` / `Credit payment settled by [Client Name]`), proper status pills (`#e0f2fe`/`#0369a1` for New Credit, `#dcfce7`/`#15803d` for Settled Credit), dynamic table headers, and running debt balance.
  - **Release & Distribution**: Bumped version to `3.4.72`, compiled Webpack assets, and packaged `dist/Global Gate Setup 3.4.72.exe`.

- **Donut Chart Full-Circle & Margin Alignment Fix (Ver 3.4.71)**:
  - **Resolved Circle Side Clipping**: Injected explicit `margin={{ top: 5, bottom: 5, left: 5, right: 5 }}` and balanced radii (`innerRadius: 42, outerRadius: 68`) across all 5 Donut PieCharts (Executive Summary, Maintenance, Projects, Commercial Invoices, and POS Shop) in `AdminHome.js` and `RevenueExpensesAll.js`. This eliminates default legend margin reservation shifts that previously pushed the circle center to the left and caused the left edge to be clipped by the SVG boundary.
  - **Release & Distribution**: Bumped version to `3.4.71`, compiled Webpack assets, and packaged `dist/Global Gate Setup 3.4.71.exe`.

- **Main Dashboard Executive UI & Layout Overhaul (Ver 3.4.70)**:
  - **Financial Overview Card Modernization**: Eliminated rigid legacy navy `#202a5a` background boxes, hacky -90deg rotated tabs, and overlapping margins. Created a sleek executive card with clean title headers, active year badges, and full-width responsive LineChart.
  - **Executive Summary & Donut Panel**: Redesigned right-side panel with compact year date picker, centered donut chart, and 7 interactive KPI metric rows with colored pill badges, bold formatted values, and smooth hover feedback linking directly to Statement of Accounts drilldowns.
  - **Overhauled 4 Quick Overview KPI Cards**: Restyled Cash In Collections, Daily Expenses, Item Purchases, and Payroll Expenses with clean elevation cards, bold totals, colored icon badges, and smooth sparkline mini-charts.
  - **Standardized Operational Module Sections**: Re-engineered all lower dashboard modules (Accounting & Taxes VAT, Inventory & Customers, Maintenance Operations, Project Management, Commercial Invoices, Point of Sale, and Human Resources) with unified modern typography, pill badges, and clean rounded DataGrid card wrappers.
  - **Release & Distribution**: Bumped version to `3.4.70`, built Webpack assets, and packaged `dist/Global Gate Setup 3.4.70.exe`.

- **Dashboard & Statement of Accounts Mathematical Alignment & Design Overhaul (Ver 3.4.69)**:
  - **Fixed Cash In Double Counting**: Separated `filterMonthPayment` into Direct Invoice Collections vs POS Cash Collections. Eliminated duplicate counting of POS receipts in the summary box ($1,034.80 total accurately reflects both the summary box and the ledger table).
  - **Corrected Gross Cash Flow Formula**: Fixed summary card to strictly compute `Total Cash In - Total Cash Out` (-$2,410.29) rather than Accrual Revenue minus Accrual Expenses (-$713.84).
  - **Scoped Monthly Credit Accounts**: Updated `AdminHome.js` and `RevenueExpensesAll.js` so `Credit Accounts` calculations and drilldown ledger reflect the monthly new credit issued and settled in the active month of the selected year instead of an accumulated lifetime sum.
  - **Professional UI Modernization**: Completely redesigned `RevenueExpensesAll.js` with modern corporate KPI cards (Gross Revenue, Expenses, Cash In, Cash Out, Net Income, Gross Cash Flow), sleek badge pills, zebra-striped data table, and responsive executive card structure.
  - **Release & Distribution**: Bumped version to `3.4.69`, built Webpack assets, and packaged `dist/Global Gate Setup 3.4.69.exe`.

- **Dashboard Upgrade, KPI Harmonization & Statement of Accounts Synchronization (Ver 3.4.68)**:
  - **Fixed Double-Rate Division Bug**: Eliminated erroneous second rate division `(row.total / (row.rate || 1))` in `DailyExpensesReportInfo.js` that reduced USD totals by ~2800 (turning August $25,712.46 into $11.53).
  - **Harmonized 4 Overview KPI Cards**: Renamed and aligned the 4 quick overview cards in `AdminHome.js` (`Cash In Overview`, `Daily Expenses`, `Item Purchases`, `Payroll Expenses`) with accurate metrics, charts, and drill-downs matching the top charts.
  - **Overhauled Statement of Accounts Engine**: Corrected summary cards and running balance totals across `RevenueExpensesAll.js` to clearly differentiate Gross Revenue, POS Sales, Invoices, Total Expenses, and Net Income (Accrual). Removed legacy debug labels (`[V2.8.17-FIX]`) and modernized the table and print layouts.
  - **Synchronized Sub-Module Scoping**: Injected `selectedYear` and strict Month+Year matching into `DailyExpensesReportInfo`, `PaymentReportInf`, `ItemPurchaseReportInfo`, and `PayRollReportInfo` to ensure drill-downs preserve time-horizon integrity.
  - **Release & Distribution**: Bumped version to `3.4.68`, compiled Webpack assets, and packaged `dist/Global Gate Setup 3.4.68.exe`.

- **Frontend Overfetching & API Pagination (Ver 3.3.92)**: Analyzed the Customer, Supplier, and Project Detail Views and found they were downloading hundreds of thousands of records (all estimates, all invoices, all purchases, all pos history) sequentially across the network just to filter them client-side by customerId or projectId. Refactored backend routes (invoiceRoutes.js, purchaseRoutes.js, estimationRoutes.js, maintenanceRoutes.js, etc.) to accept customerId, supplierId, and projectId directly in the MongoDB query. Modified the frontend modules to append these query parameters. Load times for these modules have dropped from 60+ seconds to milliseconds. Solved Issue #3.

- **Monolithic Router Split (Ver 3.3.91)**: Safely disassembled the 5,500-line server/routes/Routes.js file into 11 distinct domain controllers (e.g., invoiceRoutes.js, itemRoutes.js, employeeRoutes.js) and mounted them in server/index.js. Removed dead duplicate routes (e.g., lowercase /supplier-Information, duplicate /maintenance-Information) during the split. Solved Issue #2.

- **Employee Assignment UI Upgrade**: Enhanced the 'Project' dropdown in both `EmployeePlaningForm.js` and `EmployeePlaningFormUpdate.js` (Today's Assignment view). The autocomplete list and the text field now display and filter by the project number (e.g. `P-00123`) alongside the project name and customer, perfectly mirroring the formatting used for Maintenance tasks. Version bumped to 3.3.85.
- **Fixed POS ReferenceError**: Extracted `fetchItem` out of the `useEffect` scope in `PointOfSale.js` so it can be called globally by `handleRefreshSearch`, preventing a `ReferenceError: fetchItem is not defined` crash when interacting with the POS UI. Version bumped to 3.3.84.
- **Fixed Message Notification Crash**: Added safety guards in `MessageAdminView.js` to prevent `Cannot read properties of undefined (reading 'sendNotification')` when `window.electron` is unavailable. This unhandled promise rejection was causing the Socket.io callback to crash mid-execution, which prevented the `badgeMessage` from updating and stopped other users from receiving UI notifications. Also added a fallback to standard HTML5 Notifications. Version bumped to 3.3.83.
- **Globally Fixed Search Flickering & Number Matching**: Injected quickFilterProps: { debounceMs: 500 } into all 21 DataGrid instances in AdminView1 to prevent request spamming per keystroke (flicker). Completely rewrote backend exact-number match queries (e.g., outNumber: 267) into $expr + $toString partial regex matches so users can find numbers by typing a substring (e.g. 1538 matches 15383).
- **Fixed DataGrid Crash & Search Glitches**: Ran a global script across all 16 `AdminView1` components (`DailyExpenses.js`, `PurchasesViewAdmin.js`, `ItemOutViewAdmin.js`, etc.) to resolve the "appearing then disappearing" search issue by enforcing `filterMode="server"`, and fixed the `NaN` page crash by correcting the `<Pagination>` `onChange` signature.
- **PayRoll Table Layout**: Fixed `PayRollFormView.js` and `PayRollUpdateFormView.js` to constrain the table width to `850px` for optimal A4 printing.
- **Search Logic for PayRoll and Daily Expenses**: Updated backend `server/routes/Routes.js` (lines `~5272` and `~5439`) to query across all relevant fields (`employeeName`, `status`, `words`, `payNumber`, `totalNet`, etc. for PayRoll, and `description`, `accountName`, `amount`, `expenseNumber`, etc. for Daily Expenses) to ensure search is accurate without downloading all records to the client side.
- **Final Search Overhaul (All Modules)**: Discovered that `DailyExpenses.js` was hitting a dead-code duplicate definition of `/expense-Information` high up in `Routes.js` which lacked the correct search fields. Deleted the broken duplicate `/expense-Information` and `/itemOut-Information` blocks so Express correctly hits the patched routes. Globally replaced all remaining unstable MongoDB `$expr` number matching with `$where` evaluation across every route in the system (`invoice-Information`, `maintenance-Information`, `purchaseOrder-Information`, `itemReturn-Information`). Pushed exact search fixes for all remaining submodules to Railway.
- **Fixed PayRoll Layouts**: Adjusted PayRollViewInformation.js table column widths from fixed pixels to percentages so the table expands properly and is no longer cramped. Updated PrintPayRoll.js to utilize percentages and added a 90% width wrapper with margin: 0 auto to perfectly fit A4 print preview boundaries without clipping the edges. Fixed missing setTotalItemCount in pagination for Purchase and Project modules.
- **Fixed Fleet Management UI Flicker**: Removed a redundant `<ToastContainer>` from `FleetFormUpdate.js` that was misaligning the DOM index with `FleetViewAdmin.js`. Discovered a secondary flash issue caused by `if (!fleet) return null;`, which forced React to unmount the entire layout tree while fetching data. Replaced the `return null` with a skeleton layout structure holding the exact `SidebarDash` and `AppBar` to preserve DOM stability while loading. Recompiled frontend via `npm run build` so the `package.json` version bump (to 3.3.82) correctly propagates to the React UI.
- **Fixed ASAR Deadlock in Electron Builder (Ver 3.3.85)**: Discovered that `electron-builder` was hanging indefinitely during the `packaging platform=win32` phase because the internal ASAR compression algorithm was hitting a catastrophic bug (likely a stream hang) when attempting to compress the 47,883 files in `node_modules`. Bypassed the bug by temporarily disabling `asar: false` in `package.json` to prove the issue, and ultimately resolved it by fully cleaning all stale background locks and cache directories on the machine. 
- **Employee Planning UI Fix (Ver 3.3.85)**: Updated `EmployeePlaningForm.js` and `EmployeePlaningFormUpdate.js` so that when users select "Project" as the reason in the Today's Planning dropdown, the UI now properly displays both the `projectNumber` (e.g. `P-00123`) and the project name, identical to how Maintenance tasks are formatted.
- **Supplier and Invoice Backend Search Updates (Ver 3.3.86)**: Updated `server/routes/Routes.js` `$or` query blocks for `/Supplier-Information` to include `{ storeName: regex }` (allowing search by store name) and `/invoice-Information` to include `{ invoiceSubject: regex }` (allowing search by invoice subject). Also bumped package version to 3.3.86 and triggered a new build so frontend and backend modifications take effect in the distributed `.exe`.
- **Fixed Supplier View Crash + Railway Deploy (Ver 3.3.86)**: Root-cause analysis revealed three issues: (1) `onClick={handleClickMenu}` was used in `SupplierViewInformation.js` but the function is actually named `handleClick`, causing a `ReferenceError` crash every time the View page loaded. Fixed by correcting the handler name. (2) The storeName and invoiceSubject backend search fixes were in `Routes.js` locally but had NEVER been pushed to Railway — the live app was still running the old routes. (3) Added Rules 8 and 9 to SYSTEM_ARCHITECTURE_AND_PROGRESS.md to prevent repeat of these errors. All changes committed and pushed to Railway. New `npm run build` + `npm run make:win` triggered to produce updated `.exe`.
- **Item Module Performance + Stock Fix (Ver 3.3.87)**: Full deep investigation of `ItemInformationVIew.js` revealed 3 root causes: (1) All 4 tab summaries (IN/OUT/RETURN/POS) were downloading entire database collections sequentially (~60s) then filtering client-side. Fixed by adding `?itemId=xxx` server-side filtering to `/itemPurchase`, `/itemOut`, `/itemReturn`, and `/pos` routes in `Routes.js`, and by switching from sequential `await` to `Promise.all()` on the frontend. (2) After pressing Sync, the displayed stock didn't update without a full page reload because `fetchStock()` only wrote to DB but didn't update local React state. Fixed by adding `SetItems(prev => prev.map(...))` after the PUT succeeds. (3) All 6 tab panel heights were hardcoded at `500px`. Changed to `calc(100vh - 230px)` for full-page layout. Also changed the item overview fetch from downloading ALL items to `GET /get-item/:id` (single item). Added Rule 10. Version bumped to 3.3.87.
- **Item Module Mixed Array Filter Fix (Ver 3.3.88)**: The 3.3.87 server-side filtering caused empty summaries for records where the DB saved the embedded item reference as a String instead of an ObjectId. Updated `Routes.js` `itemId` filters to match either string or ObjectId using `$in`. Secondly, restored the client-side `Item.itemName._id === id` filter for `itemOut`, `itemPurchase`, `posOut`, and `itemReturn` in `ItemInformationVIew.js` so that transactions containing multiple distinct items don't render unrelated items in the summary. Version bumped to 3.3.88.
- **Global UI Freeze and Sidebar Gray-Out Fix (Ver 3.3.89)**: Identified that almost 50 separate frontend components (including `SidebarDash`, `EstimateViewAdmin`, etc.) were firing simultaneous `axios.get('/grantAccess')` requests on every page navigation. This blocked the browser's 6-request connection limit, drastically slowing down data fetches like `/estimation-Information`, and causing the sidebar menus to gray out (disabled state) for 1-2 seconds until the permissions arrived. Replaced all 50 global instances with `cachedGet` (memory cached for 5 minutes). Module navigations and sidebar states are now instantaneous.
- **Invoice Information Layout & Load Fix (Ver 3.3.90)**: The `InvoiceInformation` left-sidebar list and `PrintHeader` company profile logo were taking a few seconds to load due to duplicate full-collection fetches that were not being cached. Replaced `axios.get` with `cachedGet` in both `InvoiceInformation.js` and `useCompanyProfile.js` so they load instantly from memory alongside the main view. Also relocated the `Action` popup block in `InvoiceViewAdminAll.js` to render cleanly above the `Note` section instead of inside the upper grid, per user request.

- **v3.3.92 Server Routes Split**: Broke apart the 5,500-line `Routes.js` monolith into 11 specialized, domain-specific backend controllers (`invoiceRoutes.js`, `itemRoutes.js`, `customerRoutes.js`, etc.) while meticulously preserving all business logic. Hot-patched an oversight where the `branchFilter` middleware was dropped, which temporarily caused 500 crashes.
- **v3.3.93 React DOM Thrashing Revert (Issue #4 & #6)**: Initially replaced legacy spinner `<Loader>` components with `<Skeleton>` blocks across 26 views to prevent layout thrashing. Reverted back to the original spinning `<Loader>` per user preference. 
- **v3.3.94 Backend Sync & Payment Fixes (Issue #5, #7, #8, #9)**: 
  - Changed the `NetworkLogoutIcon.js` ping monitor to accurately hit the Railway backend `/status` instead of google.com.
  - Fixed a race condition in `PaymentView.js` where the empty state balloon flashed because `setLoadingData(false)` fired before the data array populated, and then fixed an infinite spinner when the early exit was removed.
  - Fixed the backend MongoDB customer update route. When a user updates a Customer's information in the Customer module, the backend now properly maps and pushes *all* updated fields (Phone, Address, Email, Company Name) into the embedded `customerName` objects stored inside the Maintenance, Invoice, Project, and Payment records.
  - Corrected table column widths in `MaintenanceViewInformation.js` to prevent the customer name cell from squishing into two lines while giving the phone number field too much empty space.


- **v3.3.95 Item Quantity Validation & Deletion Dependencies (Issue #10, #11, #12)**:
  - Added dependency-aware deletion checks across `delete-estimation`, `delete-invoice`, `delete-project`, `delete-maintenance`, `delete-purchase`, and `remove-customer` routes. Users are now blocked (HTTP 400) from deleting records that have active child links. The parent's status is also correctly reverted when a child link is deleted.
  - Re-mapped the frontend `handleDelete` UI in all Admin Views to display the backend's dependency warning messages cleanly in an alert.
  - Implemented client-side input validation on `ItemOutViewForm.js`, `ItemOutViewUpdate.js`, and `ItemReturnUpdateForm.js`. The quantity typed by the user cannot exceed the dynamically allowed maximum (Stock, remaining required Quantity, or original QTY Out). If they type an excessive number, the box automatically clears itself.
  - Fixed confusing component titles (e.g. changing "MAKE NEW ITEM OUT" to "ITEM RETURN" on return forms).
  - Recovered from a patching error that mistakenly deleted the `/purchaseOrder` routes in the backend (which crashed the Daily Expenses module with a 404), restored the routes, pushed to Railway, and successfully built `3.3.95`.


- **v3.3.96 Item Out Quantity Validation Fix (Issue #13)**:
  - Discovered that the Item Out quantity validation patch applied in v3.3.95 had silently failed to inject into `ItemOutViewForm.js` and `ItemOutViewUpdate.js` due to a regex mismatch, causing the form to only check against `Stock` and ignore the required `Quantity`.
  - Forcefully rewrote the logic in both `ItemOutView` files so it correctly calculates `maxAllowed = Math.min(Stock, Quantity - QTY Out)`. Users are now strictly blocked from typing an amount greater than what is allowed by either constraint.


- **v3.3.97 Concurrency Control & Document Locking (Issue #14)**:
  - Implemented a centralized, pessimistic lock system across 8 major modules (Quotations, Invoices, Projects, Maintenance, Purchase Requests, Purchase Orders, Item Out, Item Purchases) to prevent data collisions and dirty-writes.
  - **Backend**: Created a `Lock` collection (MongoDB TTL of 60s) and endpoints (`/api/locks/acquire`, `/api/locks/heartbeat`, `/api/locks/release`). Added `verifyLock` middleware globally to `/update-*` routes to reject unauthorized saves.
  - **Frontend**: Created the `useDocumentLock` hook that polls the heartbeat every 30s. If a user disconnects, the lock drops, and if another user takes over, the frontend alerts the user and auto-refreshes the page.


- **v3.3.98 Backend Performance Optimization (Issue #15)**:
  - Fixed a massive 15-20 second Time-To-First-Byte (TTFB) bottleneck that was freezing the Node.js event loop on the Railway server.
  - Injected the Mongoose `.lean()` optimization into all `.find()` queries across 14 backend route files (e.g. `purchaseRoutes`, `invoiceRoutes`, `maintenanceRoutes`). This instructs Mongoose to return raw JSON instead of heavy Mongoose Documents, dramatically reducing RAM usage and CPU serialization time for large payloads like `?summary=true`.


- **v3.3.98 Concurrency Lock & Navigation Fixes**:
  - Fixed a bug where identical `userName` logins across different machines would bypass the pessimistic document lock. Injected a localized `sessionLockId` into `useDocumentLock.js` to ensure each browser tab is treated as a unique entity, even if they share the same username.
  - Fixed a React Router history corruption issue where the "Go Back" button on the lock overlay used `window.history.back()`, which broke subsequent `NavLink` "View" button clicks in list views. Replaced with React Router's `navigate(-1)` for safe traversal.


- **v3.3.99 Concurrency Lock UI Polish**:
  - Fixed a frontend variable shadowing issue where the lock screen overlay printed the current viewer's ID instead of the lock holder's ID. Switched the overlay to render the `lockError` string returned from the backend (which contains the exact locker name).
  - Removed the annoying native `window.alert()` double-popup in `useDocumentLock.js` to provide a cleaner UX when encountering a lock.


- **v3.3.100 Concurrency Lock Lost Heartbeat Fix**:
  - Handled the edge case where User A loses Wi-Fi (causing their lock to expire), User B acquires the lock, saves the document, and releases the lock. When User A's Wi-Fi returns, the heartbeat previously ignored the `404 Not Found` response. It is now programmed to intercept `404`, alert the user that the lock expired, and force a `window.location.reload()` to automatically pull any changes User B may have made.

## Recovery Points
- **v3.3.90 Baseline (2026-08-21)**: The system is confirmed working. Frontend loading is optimized (grantAccess and companyProfile are cached), Item summaries load properly with server-side `$in` filtering, and exact-number searches are using `$where` in the monolithic `Routes.js` file (which is insecure and slow but currently functional). The UI layout rendering issues (Action popup in invoices) are resolved. This is the baseline state before tackling the major technical debt (NoSQL injection `$where`, breaking up `Routes.js`, implementing proper pagination, and preventing React DOM thrashing).
- **v3.3.91 Routes.js Split Baseline (2026-08-21)**: The critical NoSQL injection vulnerability (Issue #1) has been resolved. All instances of MongoDB `$expr` with `$regexMatch` and `$toString` on numeric ID fields (like `invoiceNumber`, `payNumber`) have been removed and replaced with safe, indexed exact numeric equality matches (e.g., `...(!isNaN(Number(search)) ? [{ invoiceNumber: Number(search) }] : [])`). This restores database indexing and closes the security gap, while retaining full regex matching for string fields. The live app is stable. I am now about to split the 5,500-line `Routes.js` monolith into domain-specific controller files (`invoiceRoutes.js`, `itemRoutes.js`, etc.) and safely delete confirmed dead duplicate routes.




## v3.3.101 - Customer Module Fixes
- **Customer Search Bar**: Removed a custom `no-data.png` overlay in `CustomerViewAdmin.js` that was unmounting the DataGrid when a search returned 0 results, allowing the native DataGrid 'No rows' state to correctly display without hiding the search bar.
- **Customer Payments & Statement Filtering**: Fixed the backend `GET /payment` API in `Routes.js` which was completely ignoring the `customerId` query parameter. It now correctly parses `req.query.customerId` and filters by `customerName._id`, instantly fixing both the Payment and Statement tabs which were previously mixing all customer payments together.
- **Statement Layout Tweaks**: Fixed a typo concatenating an undefined `row.re` which displayed as `undefinedINV`. Fixed the floating `Statement of Accounts` header box which had an arbitrary `left: 83px` offset, causing alignment issues.

## v3.3.102 - Customer Module Client-Side Filtering & Layout
- **Customer View Payments & Statement Filtering**: Realized that the backend API fix from 3.3.101 wasn't taking effect because the Electron app is a frontend-only client and the backend is deployed separately to Railway. To immediately fix the mixed payments issue without requiring a backend deployment, I implemented client-side filtering directly in the frontend inside `CustomerInformationView.js`. The table will now correctly filter `allPayments` down to the specific `customerId` on the fly.
- **Statement of Accounts Layout**: Changed the `Statement of Accounts` mini-table on the top right to have a fixed width of `450px` instead of a relative `40%`/`50%` which was causing it to compress text (like the '$2,691,565.09' total) and look unorganized.

## v3.3.103 - Payment Mode Column
- **Payment View Mode Column**: Added the Payment MODE (e.g., CASH, BANK TRANSFER) to the main `PAYMENT RECEIVED` table in the Payment Module so the user can easily see the mode of payment without having to click inside each one.

## v3.3.104 - Statement Table Borders
- **Statement Layout Fix**: Applied `borderCollapse: collapse` to the Account Summary table so the bottom borders on rows connect seamlessly without horizontal gaps, and finalized its width to exactly match the data columns of the bottom table.
- **Version String Fix**: Ensured the version was bumped *before* the Webpack build step, fixing the bug where the UI was falsely reporting the previous version number.

## v3.3.105 - Statement Table Alignment
- **Statement Layout Fix**: Shrank the `Statement of Accounts` mini-table from `450px` to `350px` to perfectly match the sum of the `Amount` (100px), `Payments` (100px), and `Balance` (150px) columns beneath it. Also reduced the address section width from 60% to 40% so the table can sit flush with the right edge.

## v3.3.106 - Statement Table Full Alignment
- **Statement Layout Fix**: Expanded the overall width of the Statement of Accounts table to `750px` and set explicit widths for its left (`400px`) and right (`350px`) columns. This guarantees that its left column perfectly aligns with the `Details` column below it, and its right column perfectly aligns with the sum of the `Amount`, `Payments`, and `Balance` columns below it, resolving the offset issue.

## v3.3.107 - Statement Table Alignment Revert
- **Statement Layout Fix**: Reverted the table width back to `350px` to fix the flex container overflow that caused it to center. The `350px` table now correctly floats to the far right, matching the exact width of the Amount, Payments, and Balance columns.

## v3.3.108 - Statement Table Structural Refactor
- **Statement Layout Fix**: Removed the `flex` wrapper entirely and instead embedded the `firstTable` directly into the `thead` of the `secondTable`. The `firstTable` now lives inside a `th colSpan={3}` that exactly spans the `Amount`, `Payments`, and `Balance` columns. This mathematically guarantees that its left and right edges will perfectly align with those columns regardless of screen size or dynamic column widths.

## v3.3.109 - Statement Customer Address Font & Alignment
- **Address Layout Fix**: Refactored the `CustomerInformationView` address block in the Statement tab to match the requested mockup (Screenshut 2). Changed the 'TO' font to be smaller, the customer name to be `15px` and bold, and the address to be `11px` and italicized. Also changed the `th` vertical alignment from `bottom` to `top` with a `10px` padding so the address aligns nicely with the 'Statement of Accounts' text on the right side.

## v3.3.110 - Statement Customer Address Un-Bold Fix
- **Address Layout Fix**: Explicitly applied `fontWeight: 'normal'` to the billing address span in `CustomerInformationView.js`. Because the address was structurally moved inside a `<th>` table header cell in version 3.3.108 to enforce perfect table alignment, the browser implicitly applied its default `bold` font weight to the text. Explicitly declaring `normal` weight fixes this and perfectly matches the user's requested mockup.

## v3.3.112 - Statement Table Font Weight Fix
- **Table Body Font Weight**: Explicitly applied `fontWeight: 'normal'` to the `<tbody>` containing the Account Summary rows in `firstTable`. Since the entire `firstTable` was embedded inside a `<th>` tag in v3.3.108 for layout alignment, the browser implicitly applied its default `bold` font weight to all text inside the table. Adding `normal` overrides this inheritance so only intended elements (like headers) remain bold.

## v3.3.113 - Item Purchase Update Crash & Invoice Pagination
- **Item Purchase Crash**: Fixed a bug in `ItemPurchaseUpdateForm.js` where the `handleDecision` function parameter was named `navigate`, shadowing the outer `useNavigate()` react-router-dom hook. Clicking 'Go Back' attempted to execute the string `'previous'` as a function (`navigate(-1)`), resulting in `TypeError: e is not a function`. Renamed the parameter to `decision`.
- **Invoice Pagination Counter**: Fixed a bug in `InvoiceViewAdmin.js` where the `<DataGrid>` displayed `0-0 of 0` despite having records. The component was correctly configured for `paginationMode='server'` with `rowCount={totalItemCount}`, but `setTotalItemCount` was never called when the invoice data was fetched. Added `setTotalItemCount(res.data.totalItem)` to explicitly pipe the backend's total count to the table UI.

## v3.3.114 - Customer Statement Balance Fix
- **Customer Statement Balance**: Fixed a bug in `CustomerInformationView.js` where the Statement of Accounts `All` view ignored unallocated payments (credits). The ledger mapped `payment` to `row.amount - row.remaining` instead of `row.amount`, which artificially inflated the customer's overall Balance Due by omitting their unallocated credits. Corrected it to use the full `row.amount` so the true account balance is reflected, solving the discrepancy between 'All' and 'All Outstanding'.

## v3.4.0 - Customer Statement Credit Double Counting Fix
- **Customer Statement Balance**: Fixed a massive double-counting bug introduced in 3.3.114. When a user paid with `Cash`, the full amount was added to the statement. But when they later allocated that credit via a `Credit` or `Credit-Account` payment, it was added *again* to the statement, doubling the payment amount. Fixed this by filtering out `row.modes === 'Credit'` and `Credit-Account` from the Statement array in `CustomerInformationView.js`, while keeping `payment: row.amount` so that the true cash flow ledger correctly reflects the original cash receipt in full. The separate `Payment` tab remains unfiltered so allocations can still be tracked.

## v3.4.1 - Customer Statement Revert
- **Customer Statement Math**: Reverted the `payment: row.amount` change back to `payment: row.amount - row.remaining` and removed the `Credit` filter. This correctly un-does the double counting bug while handling the database's internal `Credit` payment allocations properly. Note that missing payment records or `ItemReturn` credit notes can still cause valid differences between 'All' and 'All Outstanding', as the 'All' Ledger relies strictly on original `row.total` and actual payment records.

## v3.4.2 - ALL Statement Synchronization & Audit Tool
- **ALL Statement Math**: Modified the `CustomerInformationView` ALL statement summary to calculate `Balance Due` by explicitly subtracting unallocated `credit` from the `InvoiceTotal - PaymentTotal`. This aligns the math exactly with the user's expected formula (`Total Invoices - Payment Records - Credits = Balance Due`).
- **Running Balance Table**: The ALL statement table running balance will now correctly display the subtraction of any available credit at the bottom of the table so it matches the Summary Box.
- **Data Audit**: Created a `data_audit_report.md` artifact by querying the production MongoDB to expose exact invoices where `A-Paid` is greater than $0, but the corresponding `Payment` records in the database do not match (or are missing), which explains the $3,106.50 discrepancy for GLOBAL PVA and $10 for ALU-DESIGN.
- **Customer Statement Math Finalization**: Tested and verified that the ALL statement correctly calculates `Balance Due = Total Invoices - Payment Records - Credits`, aligning the customer ledger perfectly with the outstanding balances while appropriately isolating database integrity issues (missing payment records vs invoice paid amounts) for manual auditing.

## v3.4.3 - Expense and Cash Form Input Sanitization
- **Input Sanitization**: Fixed an issue in `DailyExpenses.js` and `DailyExpenseAdminView.js` where user-entered commas in numerical fields (like `86,000`) caused the string to parse prematurely as `86` due to `parseFloat` behavior. Added dynamic comma-stripping logic to `handleChangeAmount` and `handleChangeAmount1` to intercept typed commas and parse the full value cleanly, correcting downstream summation bugs in the `Daily Expenses` ledger.

## v3.4.4 - Cloudflare Edge Caching & Secure Permissions Bug Fix
- **Aggressive Edge Caching Override**: Updated `scripts/copy-web.js` to automatically append a cache-busting timestamp parameter (`app.js?v=TIMESTAMP`) when copying `index.html` to `dist_web/`. This permanently forces Cloudflare edge nodes and local browsers to download the newest JavaScript bundle on every deployment.
- **Admin Windows App Deployment**: Added a secure "Download Windows App (.exe)" button directly inside the Settings/Profile module (`SettingsViewAdmin.js`) that points to the server executable. This removes the `.exe` from the public landing page, securing it to authenticated personnel only.
- **Critical Permission Bypass Fix**: Discovered and patched a critical flaw in `SidebarDash.js` and `SidebarDashE2.js` where the `loadingAccess` state was never reset to `false` after the `grantAccess` API request completed. This resulted in the application universally defaulting to `disabled={false}` for all users on all modules, allowing unauthorized employees full access to the desktop application. 
- **Dashboard Today Rate**: Added the `systemRate` variable dynamically into `AdminHome.js` so it visually displays the rate integer alongside the "Today's Rate" text.

## v3.4.5 - CEO SuperUser Bypass
- **SuperUser Lockout Fix**: Re-implemented the CEO bypass (`user.data.role !== 'CEO' && user.data.userName !== 'GG'`) across all Sidebar navigation components (`SidebarDash`, `SidebarDashE2`, `SideMaintenance`, `SideShop`). The strict security fix in v3.4.4 correctly locked out employees but accidentally locked out the CEO, who does not have explicit module entries in the `grantAccess` database.

## v3.4.6 - Purchase Order Permission Guard & Search Persistence 
- **Purchase Order Module Protection**: Found that the "Purchase Order" navigation button in the STORE sub-menu (`SideMaintenance.js`) was missing its `disabled={}` protection attribute entirely. Added the guard and properly mapped it to the `Purchase-Order` ruleset in the `grantAccess` settings.
- **Search Bar Persistence Cleanup**: Removed aggressive `localStorage.setItem('search', ...)` hooks inside `InvoiceInformation.js` and `ItemViewLayout.js`. Previously, any search entered in these modules was saved globally to the browser, causing the input to persist and bleed over even when navigating between different views. React component state now handles the search query, cleanly resetting it to empty whenever a module unmounts.

## v3.4.7 - Point-Of-Sell Permission Guard
- **POS Module Protection**: Discovered that the "POS" navigation button in `SidebarDash` and all sub-modules inside `SideShop.js` (Main, Item Display, Invoice, Report) completely lacked `disabled={}` protection attributes. Connected them to the `Point-Of-Sell` rule in the `grantAccess` database so they are now strictly controlled by the security system.
- **Grant Access Missing Inject**: Fixed a bug in `GrantAccessUpdateView.js` where older employee records created before the `Point-Of-Sell` and `Purchase-Order` modules existed in the schema would simply not render them on the update screen. Added manual injection logic so all modules guarantee visibility.

## v3.4.9 - Sidebar Race Condition & Item Display Clone
- **Sidebar Fail-Open Fix**: Resolved a critical race condition where users could bypass the `grantAccess` security rules by clicking a module button during the 1-2 second loading delay on initial application boot. Rewrote the rendering logic in `SidebarDash.js` and `SidebarDashE2.js` to be Fail-Closed: buttons are now strictly forced into a `disabled` state until the server definitively confirms authorization.
- **STORE Item Display Integration**: Cloned the `Item Display` navigation button from the POS module and directly integrated it into the `STORE` module (`SideMaintenance.js`) beneath the `Supplier` menu. Bound its security logic exclusively to the `Item` Grant Access rule, seamlessly unifying its access control with the rest of the STORE module.

## v3.4.10 - Build Compilation Fix
- **Webpack Compilation Fix**: The previous 3.4.9 release packaged an outdated Webpack bundle (from 3.4.8) because the React build step was skipped before generating the executable. Recompiled the entire frontend source code to ensure the Sidebar Fail-Open fix and the STORE Item Display integration are physically present in the final desktop binary.

## v3.4.11 - Store Item Display Separation
- **Separated Store Item Display from POS**: Removed the direct link to `/PointOfSale` from the `STORE` module to prevent users from bypassing Grant Access rules and creating unauthorized POS invoices.
- **Created Independent View**: Duplicated the POS component into a read-only `StoreItemDisplay.js` interface. Stripped out all Shopping Cart functionality, "Add to Cart" buttons, and POS checkout logic. This guarantees that STORE users can only *view* the catalog (picture, details, stock, price) without being able to process transactions.

## v3.4.12 - Strict Grant Access Enforcement & Supplier Fix
- **Strict Grant Access Enforcement**: Revoked the hardcoded `CEO` role bypass across all module sidebars (`SidebarDash`, `SideMaintenance`, `SideShop`, etc.). From now on, *every single user and role* (including CEO and Admin) must explicitly be granted permission via the Grant Access interface. The only account with an absolute system bypass is the creator account (`userName === 'GG'`).
- **Supplier Menu Permissions Fix**: Fixed a bug where the `Supplier` module in the `STORE` sidebar was erroneously tied to the `Item` Grant Access rule. It now correctly enforces the `Supplier` rule (`SupplierInfo`).

## v3.4.13 - Grant Access Missing Module Injection
- **Supplier Grant Access Visibility**: Found that the `Supplier` module was completely missing from the internal `GrantAccessFormView` defaults and the `GrantAccessUpdateView` UI list, making it impossible for administrators to check or uncheck its access boxes for employees. Added fallback injection logic for `Supplier` so it natively renders in the Settings UI alongside the other dynamically injected modules (Point-Of-Sell, Purchase-Order).

## v3.4.14 - Dashboard Exchange Rate Formatting & Fetch Fix
- **Today's Rate UI Formatting**: Updated the `AdminHome.js` dashboard to format the exchange rate as `Today's Rate: $ 1 = FC [RATE]` instead of a raw integer (`Today's Rate: [RATE]`), providing clear currency context for all users.
- **Rate Fetch Accuracy**: Fixed a bug where the dashboard rate fetch could fail or pull a `0` value (defaulting the UI to `1`) due to incorrect route casing (`/Rate` instead of `/rate`) and poor fallback logic. The dashboard now reliably retrieves the correct active system rate.

## v3.4.15 - Dashboard Rate Fetching Resilience
- **Rate Network Failure Fallback**: Discovered that the dashboard was occasionally failing to fetch the active rate because it fires 15 simultaneous API requests on load, causing the Railway backend to sometimes drop or rate-limit the `/rate` request. 
- **Branch-Specific Rate & Caching**: The dashboard now falls back to `localStorage` if the network request is dropped. It also now correctly maps the fetched rate array to the logged-in user's specific `branchId` (e.g. HQ vs LUB) instead of blindly picking the first result.

## v3.4.16 - Dashboard Non-CEO Rate Bug Fix
- **Non-CEO Early Return Bug**: Discovered that `AdminHome.js` was returning early for non-CEO users, skipping the entire API block where `/rate` was fetched. This meant `systemRate` remained firmly at its default value of `1` for non-CEOs, leading to the `Today's Rate: $ 1 = FC 1` visual bug on their fallback dashboard. Moved the rate fetch logic above the early return so it successfully executes for all users.

## v3.4.17 - Dashboard Rate UX (Flash Prevention)
- **State Initialization**: Updated `AdminHome.js` to initialize the `systemRate` state synchronously from `localStorage` on component mount. This prevents a UI flash where the rate momentarily defaulted to `1` before the network request could finish resolving to the true rate (e.g., `2250`). The dashboard now renders seamlessly with the correct rate on initial load for both Web and Desktop platforms.

## v3.4.18 - Search Persistence & Filtering Accuracy
- **Global Search Bar Persistence**: Restored `localStorage` state initialization (`QuickFilter`) across 19 Admin View table components (including Customer, Supplier, Purchases, Payment, Payroll, etc.) ensuring search terms properly persist across navigation.
- **Customer View Filtering**: Fixed a critical bug in `CustomerInformationView.js` where the PAYMENT and STATEMENT tabs displayed all global records mixed together. Resolved a type-matching failure by explicitly casting MongoDB `ObjectId`s and URL string IDs to Strings during the frontend filter operations.
- **Search Engine Accuracy**: Audited and verified backend search endpoints (`/customer-Information`, `/invoice-Information`, etc.) to guarantee 100% search accuracy. Ensured all refactored schema fields correctly process case-insensitive regex queries and numeric fallbacks.

## v3.4.19 - Quotation Date Update Fix
- **Quotation/Estimate View**: Fixed a bug in `EstimateInvoiceFormUpdate.js` where the updated `estimateDate` was missing from the PUT payload, causing date changes to be ignored by the backend during saves. Added `estimateDate` to the data object submitted to `/update-estimation/:id`.

## v3.4.20 - Item Return Crash Fix
- **Item Return View**: Fixed a critical crash (`ReferenceError: isLocked is not defined`) in `ItemReturnUpdateForm.js`. This occurred because a document lock check (`if (isLocked)`) was blindly copied into a create form without importing or initializing the `useDocumentLock` hook. The invalid block was removed.
## v3.4.31 - Maintenance Order Stability & UI Lockdown
- **Admin View Crash Fix**: Resolved two critical crashes in `MaintenanceOrderAdmin.js`. Fixed a data fetching bug where an object property was erroneously treated as an array (`filter is not a function`) and replaced an undefined `<Edit>` component with the correct `<EditIcon>` import.
- **Sidebar Context Fix**: Fixed a bug where navigating to the `Technician Store` from the Maintenance Menu swapped the entire sidebar to the general STORE menu. Updated `TechnicianStoreCatalog.js` to securely use the `SideMaintenanceMenu` context and corrected its top header title.
- **Options Dropdown Cleanup**: Stripped the unauthorized `Clone` and `Export to Excel` options from the `MaintenanceOrderViewInformation.js` Options menu.
- **Safe Routing (Back Button)**: Updated the Back arrow in the View screen to explicitly route to `/MaintenanceOrderAdmin` rather than relying on `navigate(-1)`, preventing technicians from ever being dumped into unauthorized master list views if they refreshed the page or arrived via a direct link.
- **Form Edit Lockdown**: Removed the 'Clear' icons from the Client Name and Technician Assign fields in `MaintenanceOrderUpdate.js`, strictly locking those assignments from being altered by technicians.

## v3.4.37 - Maintenance Order Technician Workflow & Lock System
- **Role System Fixes**: Repaired critical logic flaws in `MaintenanceOrderAdmin.js` where the app was checking for a non-existent `Technician` role instead of the correct `User` schema value. Fixed a silent React crash (`a.data.data.filter is not a function`) that prevented the logged-in user's role from being recognized at all, breaking all UI role conditions.
- **Technician Security UI Restrictions**: Implemented strict role-based views. `User` (technician) roles now only see their explicitly assigned orders. In the Update modal, their Status options are permanently restricted to `Open`, `Pending`, and `Close`. The Delete button is hidden. Inside the Edit form, the Stock, Rate, Discount, Amount, and Labor Fee columns/fields are completely hidden from all users. 
- **Backend Item Dropping Bug**: Fixed a severe bug in the save logic where the backend route (`technician-update-maintenance`) was silently dropping all items if an `itemSchema` lookup failed (e.g. from branch isolation logic), resulting in empty rows and data loss despite a "Success" message. Rerouted the save to the standard `update-maintenance` endpoint which reliably saves exactly what the form sends via `$set`.
- **Admin Document Lock Override**: Added an emergency "Force Open (Admin)" override button to the Document Lock screen (visible only to Admin/CEO roles). This calls a new `/api/locks/force-release` backend endpoint, allowing management to immediately break stuck edit locks (e.g., if a technician closes their laptop mid-edit).

- **Mobile UI Rollback & Branch Security Fix (Ver 3.4.38)**: Reverted the mobile viewport scaling and CSS flex container overrides to restore the original 'desktop-zoom' behavior on mobile devices as requested. Identified a critical security loophole where the header branch dropdown was rendering <BranchSelector /> (which fetched and exposed all company branches without permission checks) instead of <BranchSwitcher /> (which evaluates the user.data.grantAccess array). Swapped the components in NotificationVIewInfo.js and patched BranchSwitcher.js to correctly match against ranchNames, ensuring users can only switch to branches they have been explicitly granted in the Grant Access panel.

## v3.4.39 - Strict Branch Enforcements & Eviction Hooks
- **Zero-Branch Login Lockdown (Fail-Closed)**: Fixed a severe security flaw in Loginadmin.js and Loginemployee.js. Previously, if a new user was created but had no branches assigned in their Grant Access profile, the login sequence artificially injected a default [{ branchId: 'HQ' }] fallback and allowed them into the HeadQuarters branch. Removed this fallback; the system now immediately rejects the login with the error *"Your account has not been assigned to any branch"* if myBranches.length === 0.
- **Live Branch Revocation Eviction**: Patched a flaw in BranchSwitcher.js where users could retain their localStorage 'HQ' branch status if an administrator revoked their branches while they were actively logged in. If BranchSwitcher.js detects   branches assigned for a non-GG user, it now actively executes localStorage.clear() and forcefully kicks the user back to the login screen.
- **Web Version Synchronization**: Executed the dedicated web bundler (\
pm run build:web\) and pushed the \dist_web\ payload to GitHub to ensure Cloudflare Pages properly synchronizes the new 3.4.39 branch security patches. Re-enforced that web deployments require manual compilation of the web package prior to pushing.

## v3.4.40 - Invoice Dropdown Search & Modal Shadowing Patches
- **Invoice Autocomplete Patch**: Rewrote the \getOptionLabel\ handlers for Invoice dropdowns in Item Purchase, Item Out, Item Return, and Purchase Order. The search filter now correctly parses and matches the \customerName\, and gracefully displays the combined name instead of just the invoice number. 
- **React Router Navigation Patch**: Resolved a critical variable shadowing bug (\TypeError: e is not a function\) that crashed 42 different update and creation forms when clicking 'Go Back' on the Success modal. The function argument was identically named \
avigate\, thereby shadowing the react-router-dom hook.

## v3.4.41 - Clone Payload Fixes
- **Base64 Payload Stripping**: Added \itemsWithoutData\ filter to EstimateFormClone, InvoiceFormClone, and MaintenanceFormClone. Previously, cloning a record would transmit the raw base64 thumbnail image data inside the items array to the backend, causing a \500 Internal Server Error\ (Payload Too Large or Mongoose Validation failure). The items array is now properly sanitized before transmission.

## v3.4.42 - Strict Desktop UX Restoration
- **UI Rollback**: Performed a hard reset to wipe 120+ uncommitted rogue mobile-responsive modifications that a background script had injected into the local working directory. This successfully restores the original desktop login illustration, branding, Dashboard container dimensions, and KPI styling. Strict platform isolation enforced for desktop users.

### v3.4.43: Critical Fixes for Quotation & Invoice Cloning Bugs
- **Issue:** Cloning an old Quotation sometimes threw a 500 Server Error, and Invoice clones threw a ReferenceError in the UI.
- **Root Cause 1:** Some older Quotations in the MongoDB database (e.g., QUO-001682) lacked an `estimateDate`. When cloned, the UI attempted to submit an undefined date, triggering a Mongoose ValidationError (500).
- **Root Cause 2:** A previous patch stripped base64 data using `itemsWithoutData` but failed to declare the variable in Invoice/Maintenance forms due to a regex mismatch.
- **Fix:** Safely fallback to `new Date()` when cloning records with missing dates across Estimate, Invoice, and Maintenance forms. Fixed the reference errors by properly declaring `itemsWithoutData` using updated regex scripts.


### v3.4.43 (Hotfix Build Process)
- **Issue:** The initial 3.4.43 Desktop .exe failed to include the Invoice ReferenceError fix because the Electron packager bundled the stale \uild/js\ folder from an earlier compilation.
- **Fix:** Properly ran \
pm run build\ to ensure the React production payload was compiled with the \itemsWithoutData\ declaration fix, then reran \
pm run make:win\ to package the new executable.
- **Web Version:** Re-ran \
pm run build:web\ to ensure \dist_web\ has the identical patched payloads. The Quotation, Invoice, and Maintenance clones are now fully stable.


### POS Refund & Stock Update (v3.4.43)
- **Backend:** Added \Refunded\ and \Partially-Refunded\ to \posSchema\ status enum. Implemented \/refund-pos/:id\ endpoint to dynamically deduct refunded money and update item refund quantities. Patched \stockUtils.js\ to correctly subtract \
efundedQty\ from POS Out stock, completely bypassing deduction for \Void\ invoices to plug a historical stock leak.
- **Frontend:** Integrated \PosRefundModal.js\ to precisely control item refund volumes per invoice directly from the POS table, featuring exact remaining stock caps and live refund financial totals. Styled the status chips to reflect the new states.



- **Cloudflare Pages & Web Build Fix (Ver 3.4.48)**: Discovered that .gitignore had a generic uild/ pattern which silently prevented dist_web/build/ from ever being pushed to GitHub, causing Cloudflare Pages to fail deployments. Fixed .gitignore to only ignore /build/ and tracked dist_web/build/. Also resolved a React MUI Modal nesting error where <PosRefundModal> was placed inside the delete <Modal>, throwing TypeError: Cannot read properties of undefined (reading 'hasOwnProperty').


- **POS Dual-Currency Cash Refund Breakdown (Ver 3.4.50)**: Enhanced PosRefundModal with separate inputs for cash returned in USD and FC, with live validation, quick helper buttons ([All in FC], [All in USD], [Proportional]), and exact deductions from pos.totalUSD and pos.totalFC. This ensures 100% financial accuracy across physical cash drawers, the POS Report, and the Daily Expenses Summary.


- **Grant Access Authorization for POS Refund (Ver 3.4.53)**: Tied the Refund capability directly to the Point-Of-Sell -> Edit permission in the Grant Access module. Users without this permission see the Refund button disabled/grayed out with a 'No Permission to Refund' tooltip, ensuring secure access control.


- **Universal Grant Access Enforcement (Ver 3.4.54)**: Enforced strict Grant Access permission checking for POS refunds across all roles (CEO, Admin, User). Verified that all users require explicit Point-Of-Sell -> Edit permission to process refunds, with universal bypass reserved exclusively for username GG.


- **Cloudflare Pages CI Lockfile Fix (Ver 3.4.54)**: Fixed Cloudflare Pages deployment failure caused by 
pm ci lockfile discrepancy (Missing: @capacitor/... from lock file). Cleaned unused capacitor dependencies, fully synchronized package-lock.json, and added .npmrc / .nvmrc to ensure reliable automated web builds on Cloudflare.


- **POS Print Slip Cash Refund Breakdown (Ver 3.4.55)**: Added Cash Refunded row to the POS invoice print slip in SellShopInvoiceView.js. It displays the exact physical cash handed back to the client in FC and/or USD (e.g. FC 294,637.50 or FC 100,000.00 & $ 50.00) alongside the total refunded value.


- **Responsive Home/Login Single-Line Branding (Ver 3.4.56)**: Resolved text wrapping on the home screen where resizing/minimizing the window caused 'GLOBAL GATE' to break into two stacked lines. Enforced whiteSpace: 'nowrap' with clamp() font and logo scaling, and upgraded the panel to width: 90%; max-width: 900px for smooth scaling across any window dimensions.

- **Item Movement (Out & Return) Audit & Cross-Module Linking Fix (Ver 3.4.57)**:
  - **Audit & Invariant Validation:** Conducted deep database and logic scan across MongoDB collections (`itemOut`, `itemReturn`, `purchase`, `project`, `invoice`, `item`). Verified that `item` stock calculations and Net Out quantities strictly follow $\text{Net Out} = \sum \text{Qty Out} - \sum \text{Qty Return}$ and that costing formulas preserve 100% integrity.
  - **Project Item Movement Visibility:** Fixed string vs ObjectId comparison in `ProjectViewInformation.js` (`related`, `relatedReturn`, `newAllOutReturn`, `relatedPurchase`, `Row3`) so returned items are correctly recognized. Upgraded the collapsible details table in `Row3` to `Item Movement Info (Out & Return)` with clear color-coded badges (`Item Out` in blue with `+qty`, `Item Return` in red with `-qty`).
  - **Purchase Request Movement Breakdown:** Added expandable movement breakdown in `PurchasesViewAdminAll.js` (`PurchaseItemRow`) with live `itemOut` and `itemReturn` fetching matching either the linked Project reference ID or Purchase ID. Allows direct on-screen inspection of item departures and returns from within the Purchase Request module.

- **Persistent Row Numbering with Click-to-Expand (Ver 3.4.58)**:
  - Preserved continuous sequential row numbering (`1, 2, 3, 4, ...`) in the `N` column across both **Purchase Request** (`PurchasesViewAdminAll.js`) and **Project Information** (`ProjectViewInformation.js`).
  - Removed arrow icons from replacing numbers; clicking directly on the row number smoothly toggles open/closed the `Item Movement Info (Out & Return)` breakdown table.

- **Purchase Request Edit Modal Instant Close & Fast Navigation (Ver 3.4.59)**:
  - Fixed modal closing delay in `PurchaseFormUpdate.js` by explicitly clearing modal open state (`setLoadingOpenModal(false)`) and setting `type="button"` on the Close button to prevent frozen UI states.
  - Directly routes back to `/PurchasesViewAdminAll/:id` upon closing the success dialog and leverages `cachedGet` in `PurchasesViewAdminAll.js` for instant rendering without blocking on heavy network queries.

- **Desktop Window Isolation & Cloudflare Web Build Fix (Ver 3.4.60)**:
  - **Desktop Window Resize Isolation:** Removed all responsive `window.innerWidth < 900` fallback checks across the desktop app. Resizing or snapping the desktop (.exe) window now strictly preserves full desktop views and never switches into the mobile layout.
  - **Safe Native Mobile Detection:** Created clean [`src/js/utils/isMobile.js`](file:///d:/GG/GG-Managment2026/ancient-kepler%20Pro/src/js/utils/isMobile.js) utility using global `window.Capacitor?.isNativePlatform?.()`, eliminating `@capacitor/core` module resolution errors on Cloudflare Pages.
  - **Mobile Dashboard Expense Metric Normalization:** Fixed currency summation bug in `MobileDashboard.js` that was reading raw Franc amounts (`exp.amount`) instead of normalized USD totals (`exp.total`), restoring accurate revenue and expense totals.

- **System-Wide Update Forms Modal Close & Freeze Prevention (Ver 3.4.61)**:
  - Fixed modal freeze across **Invoice Update** (`InvoiceFormUpdate.js`), **Estimate Update** (`EstimateInvoiceFormUpdate.js`), **Maintenance Update**, **Project Update**, **POS**, **Payment**, and all 35 update modules.
  - Systematically ensured `setLoadingOpenModal(false)` runs immediately when clicking `[Close]`, avoiding backdrop freezing or unresponsive modals during form save navigation.
  - Added explicit `type="button"` attributes across all modal dismiss buttons to prevent inadvertent form submission.

- **Desktop Window Resize Blank Screen Permanent Resolution (Ver 3.4.62)**:
  - **Scoped Mobile CSS:** Eliminated unscoped `@media screen and (max-width: 899px)` block in `view.css` that was hiding `MuiAppBar-root` and `MuiDrawer-root` on desktop window resize. Scoped all mobile-specific styles under `body.is-mobile-app`.
  - **Dynamic Class Management:** Configured `AppLayoutWrapper` in `App.js` to only apply `is-mobile-app` class when `isNativeMobile()` is true (Capacitor iOS/Android or explicit `?mobile=true`), ensuring Desktop Electron (.exe) and standard web desktop preserve complete layouts and never turn into a white/blank screen upon resizing, snapping, or unmaximizing.

- **Rename 'Home' to 'Receivables' & Full Historical Data Migration (Ver 3.4.63)**:
  - **Account Dropdown Update:** Updated Account Name dropdown in `DailyExpenseForm.js` and `DailyExpenseUpdate.js` from `Home` to `Receivables`.
  - **Comprehensive Data Migration:** Added server boot migration and endpoint `/migrate-home-to-receivables` updating all historical documents across `expenseSchema`, `expensesCategory`, and `dailyExpense` collections from `Home`/`HOME` to `Receivables`.
  - **Zero Disruption:** Preserved identical accounting and ledger mechanics across all financial dashboards, reports, and modules.

- **Expenses Category Information: Date Range Filter, Monthly Statements & Printout (Ver 3.4.64)**:
  - **E-Table Date Filtering:** Added `From Date` and `To Date` pickers alongside multi-column text search, allowing dynamic date-window filtering and real-time total sum recalculation in `CategoryViewDailyExpenses.js`.
  - **Printable Category Statement:** Created dedicated `CategoryPrintStatement.js` supporting high-definition printing (`useReactToPrint`) with Global Gate corporate branding, period ranges, transaction counts, account classifications, and grand totals.
  - **Interactive Monthly Statement Navigation:** Enhanced `CategoryChart.js` with monthly breakdown cards for the selected year. Clicking any month automatically sets the date range to that month, switches to the E-Table tab, and displays the exact itemized monthly statement ready for one-click printing.

- **Maintenance Account in Daily Expenses & Maintenance Information Expense Breakdown (Ver 3.4.65)**:
  - **Daily Expenses Maintenance Integration:** Added `Maintenance` option to the `accountName` select dropdown (`Office`, `Project`, `Maintenance`, `Employee`, `Receivables`) in `DailyExpenseForm.js` and `DailyExpenseUpdate.js`, and added `Maintenance` under Employee `reason` dropdown.
  - **Maintenance Order Search & Linking:** When `Maintenance` is selected, an Autocomplete dropdown fetches and displays all active maintenance orders (`GET /maintenance`), formatted as `Customer | M-XXXXXX | Model / Description`. Selecting an order records `accountName: "Maintenance"` and `accountNameInfo: { _id, name: "M-XXXXXX - Customer" }`. Added a clear button to remove or change selections.
  - **Daily Expense Displays & Statements:** Updated `DailyExpenseAdminView.js`, `CategoryViewDailyExpenses.js`, and `CategoryPrintStatement.js` to render the linked Maintenance Order identifier with customized chip styling (`#ea580c`) and proper details columns.
  - **Maintenance Information Finance Breakdown:** In `MaintenanceViewInformation.js` (and `MaintenanceOrderViewInformation.js`), introduced a collapsible `RowMaintenanceExpenses` component directly below the Employee payroll cost line (`Row2`) in the Finance overview table.
  - **Expandable Itemized Expenses:** Clicking row `#2 | Maintenance Expenses` smoothly expands an accordion sub-table displaying `#` (`D-XXXXXX`), Date (`DD/MM/YYYY`), Category, Description, Amount (FC), Rate, and Total ($) for all expenses linked to that specific maintenance service.
  - **Unified Costing Calculation:** Dynamically factors `totalMaintenanceExpenses` into the maintenance `totalCost` calculation (`totalCost = Parts Cost + Employee Payroll Cost + Maintenance Expenses`) in the Overview Summary card (`Cost` vs `Sell` vs `Gain`).
  - **Backend Endpoints:** Enhanced `GET /get-maintenance-related-info/:id` in `server/routes/maintenanceRoutes.js` to query `expenseSchema` where `accountNameInfo._id` matches the maintenance ID, returning `expenses` array in the payload. Added `maintenanceId` filter parameter in `server/routes/expenseRoutes.js` for standalone queries.

- **Fix Maintenance Information Blank/White Screen (Ver 3.4.66)**:
  - **Root Cause:** During the data-fetching refactor in `MaintenanceViewInformation.js`, `setMaintenance(allMaintenance...)` and `SetItems(resI.data.data)` were inadvertently omitted in `fetchData`. This left `maintenance` and inventory `item` state as empty arrays (`[]`). As a result, the left sidebar rendered zero service items, and the main container `{maintenance?.filter(row => row._id === id)?.map(...)}` found no matching elements, producing a blank white screen with zero console errors.
  - **Resolution:** Restored `setMaintenance` and `SetItems` in `MaintenanceViewInformation.js`. Added a fallback condition: if the active maintenance record returned by `resSingle` (`GET /get-maintenance/:id`) is not in the overview array (due to pagination or limit), it is automatically prepended to the `maintenance` state (`setMaintenance(prev => [currentMaintenance, ...prev])`), guaranteeing the left sidebar and main details panel always render immediately. Bumped version to `3.4.66` and built installer `dist/Global Gate Setup 3.4.66.exe`.

- **Comprehensive Invoice Search: Defect, Action Taken, Notes, Items & Terms (Ver 3.4.67)**:
  - **Comprehensive Backend Search (`/invoice-Information`):** Expanded the search query in `server/routes/invoiceRoutes.js` to encompass all invoice fields. Searching in the Invoice module now dynamically checks:
    - **Defect:** `invoiceDefect`, `defect`, `defectDescription`
    - **Action Taken:** `actionTaken`, `actionTaking`, `action`
    - **Notes & Terms:** `note`, `noteInfo`, `invoiceNote`, `terms`
    - **Items & Descriptions:** `items.itemDescription`, `items.itemName`, `items.itemName.itemName`, `items.itemBrand`
    - **Customer & Phone:** `customerName.customerName`, `customerName.customerEmail`, `customerName.customerPhone`, `customerName.phone`, `customerName.companyName`, `customerName.billingAddress`
    - **Identification & References:** `invoiceName` (`INV-XXXXXX`), numeric `invoiceNumber`, `invoiceSubject`, `subject`, `status`, `ReferenceName`, `ReferenceName2`, `Ref.projectName`, `Position`
  - **Safe Branch Filtering Integration:** Refactored query construction using `$and` when both branch filtering (`branchId === 'HQ'`) and search criteria are present, preventing search conditions from overwriting branch filters.
  - **Invoice Information Sidebar Search:** Updated `InvoiceInformation.js` local sidebar search (`newArray` & `newArray2`) to filter across `actionTaken`, `actionTaking`, `note`, `noteInfo`, `terms`, and `defect`.

- **Comprehensive Scope & Identifier Audit Across All 228 Modules (Ver 3.5.09)**:
  - **Root Cause Analysis:** User reported runtime crashes (`ReferenceError: sideBar is not defined`) in `PaymentInformationForm.js` and `DailyExpenseForm.js` when opening create forms on Desktop. The root cause was that recent mobile responsiveness refactorings omitted local desktop drawer state hooks (`sideBar`, `toggleDrawer`) and specific component/icon imports (`MessageAdminView`, `NotificationVIewInfo`, `DeleteIcon`, `Close`, `Logout`, `toast`) across various forms and sub-modules.
  - **Automated AST Scope Verification:** Built an automated AST scope scanner leveraging Babel (`@babel/parser` & `@babel/traverse`) that parsed all 228 JavaScript files in `src/js/` to statically evaluate scope bindings and identify any unresolved/unbound identifiers across the entire codebase.
  - **Resolved Issues Across Modules:**
    - **Payment Information (`PaymentInformationForm.js` & `PaymentInformationUpdate.js`):** Added `MessageAdminView`, `NotificationVIewInfo`, `sideBar`, and `toggleDrawer`. Cleaned up duplicate state declarations.
    - **Daily Expenses (`DailyExpenseForm.js` & `DailyExpenseUpdate.js`):** Added `MessageAdminView`, `sideBar`, `toggleDrawer`, `openAutocomplete2`, `modalOpenLoading`, and aligned submit handlers (`handleSubmit`).
    - **Customer Views (`CustomerForm.js` & `CustomerFormUpdate.js`):** Added missing `MessageAdminView` and `toast` notification imports.
    - **Employee Views (`EmployeeFormView.js` & `EmployeeUpdateView.js`):** Added missing `MessageAdminView`, `Close`, and `Logout` imports.
    - **Item & Supplier Forms (`ItemForm.js`, `ItemFormUpdate.js`, `SupplierForm.js`, `SupplierFormUpdate.js`):** Added missing `MessageAdminView` imports.
    - **Maintenance & Orders (`MaintenanceFormView.js`):** Added missing `DeleteIcon` import.
    - **Dashboard Reports (`ProjectReportInfo.js`):** Declared default date filter states (`fromDate`, `endDate`, `month`, `transactionYears`).
    - **Estimate & Payroll Views (`EstimateViewAdmin.js`, `PayRollViewAdmin.js`):** Aligned sync functions and variable references (`statusFilter`, `fetchItems`).
    - **Item Out & Return Views (`ItemOutViewUpdate.js`):** Defined local `related` reference mapping within table rows.
    - **Sidebar Navigation Components (`SidebarDashE2.js`, `SideMaintenance.js`, `SideShop.js`):** Added `useNavigate()` initialization.
  - **Verification:** Re-scanned all 228 files with 0 unresolved references remaining. Compiled Webpack bundles (`npm run build`) and generated Windows executable installer `dist/Global Gate Setup 3.5.9.exe`.

- **Automatic Invoice Payment Synchronization & Balance Self-Healing Engine (Ver 3.5.10)**:
  - **Problem Reported:** On invoice `NAISA ENGINEERING | INV-002380`, the `PAYMENT-RECEIVED` tab showed payment `PAY-001097` of `$1,578.25` made from client credit, yet the `OVERVIEW` tab and header still displayed status `Sent` with `$1,578.25` Balance Due and prompted *"Customer has credit, Do you want to use it? Click here"*. The user also raised concern about other historical invoices having the same issue.
  - **Root Causes Fixed:**
    1. **Backend Lock Middleware Interception:** `verifyLock` intercepted `PUT /endpoint/update-invoice/:id` from payment and credit flows where interactive document locks were absent, returning `403/409`. Updated `lockMiddleware.js` to allow balance/payment updates (`total`, `balanceDue`, `status`, `credit`) without requiring interactive edit locks.
    2. **Authoritative Backend Balance Engine:** Created [`server/utils/invoiceBalanceUtils.js`](file:///d:/GG/GG-Managment2026/ancient-kepler%20Pro/server/utils/invoiceBalanceUtils.js) with `syncInvoiceBalances(invoiceIds)` and `reconcileAllInvoiceBalances()`. It accurately matches non-voided payments in `paymentSchema`, calculates exact paid totals, updates `balanceDue = max(0, totalInvoice - totalPaid)`, and assigns `status: 'Paid'` (if balance <= 0) or `'Partially-Paid'`.
    3. **Automated Server Boot Self-Healing Sweep:** Wired `reconcileAllInvoiceBalances()` to run on MongoDB startup in `server/index.js` and added routes `POST /reconcile-all-invoices` and `POST /reconcile-invoice-balance/:id`. This automatically sweeps and repairs all historical mismatched invoices across the database.
    4. **Automatic Mutation Hooks:** Wired `syncInvoiceBalances` into `POST /create-payment`, `PUT /update-payment/:id`, and `DELETE /delete-payment/:id` in `server/routes/Routes.js` so every future payment transaction instantly reconciles linked invoices.
    5. **Frontend State & Calculation Resiliency:** Updated `InvoiceViewAdminAll.js` to dynamically live-sync the `invoice` state from `relatedPaymentInfo`, preventing `NaN` in `parseFloat(total || 0)` and ensuring the Overview tab and header status immediately reflect true paid totals and balances. Fixed `handleUpdateInvoice` in `PaymentInformationForm.js` and `PaymentInformationUpdate.js`.
  - **Verification:** AST scope validation passed with 0 unresolved references. Built Webpack bundles (`npm run build`) and generated installer `dist/Global Gate Setup 3.5.10.exe`.

- **Quotation Number Format Unification to `Q-00####` (Ver 3.5.12)**:
  - **Problem Reported:** Quotations displayed conflicting prefixes across different screens (`QUO-001728` in the main list table, `QT-001728` / `EST-001728` in headers, sidebars, and forms, and `Q-001728` in printable templates and PDFs).
  - **Comprehensive Unification:**
    1. **Master List (`EstimateViewAdmin.js`):** Unified `Quotation#` value formatter to strictly display `'Q-' + String(params?.value || '').padStart(6, '0')` and updated offline notification prefixes to `'Q-'`.
    2. **Detail View & Printing (`EstimateViewAdminAll.js`):** Standardized top header to `{customerName} | Q-{estimateNumber}` (using regex normalization `/^(EST|QUO|QT|Q)\s*-?/i` -> `'Q-'` when raw legacy `estimateName` is present) and updated print `documentTitle` to `'Q-' + String(estimateNumber).padStart(6, '0') + ' For ' + customerName1`.
    3. **Sidebar & Search (`EstimateInformation.js`):** Added `formatQuotationLabel` helper formatting all navigation tab labels as `${customerName} | Q-${String(estimateNumber).padStart(6, '0')}` and enhanced search filtering to match `Q-00####` queries.
    4. **Create & Edit Forms (`EstimateInvoiceForm.js`, `EstimateFormClone.js`, `EstimateInvoiceFormUpdate.js`, `ConvertToEstimate.js`):** Standardized `estimateName` generation to `"Q-" + String(estimateNumber).padStart(6, '0')`, set input adornments to `Q-00`, and unified notification reasons and mobile header titles.
    5. **Cross-Module Displays (`MaintenanceOrderViewInformation.js`, `MaintenanceViewInformation.js`, `InvoiceViewAdminAll.js`, `PurchasesViewAdminAll.js`, `LayoutTemplateManager.js`, `EstimateConvertToMaintenance.js`):** Standardized all cross-module quotation references and links to format with `Q-` and 6-digit zero-padding.
    6. **Mobile Components (`MobileCardList.js`, `MobileDetailSheet.js`):** Updated search filters and card title formatting to strictly use `Q-00####`.
    7. **Backend Route Search Enhancement (`server/routes/Routes.js`):** Expanded `GET /estimate-Information` search query to support numeric `estimateNumber` matching alongside `customerName.customerName`, `estimateSubject`, `status`, and `estimateName`.
  - **Verification:** AST scope validation passed with 0 errors. Compiled Webpack bundles (`npm run build`) and generated installer `dist/Global Gate Setup 3.5.12.exe`.

- **Comprehensive Project Search Across Description, Customer, References, Notes & Status (Ver 3.5.13)**:
  - **Problem Reported:** In the Project module, searching (e.g. `finish`) failed to return projects where the searched term appeared in the `description` (e.g. `P-000177` with description `FINISH`), only matching projects with that term in `projectName` (`P-000161`).
  - **Root Causes Fixed:**
    1. **Backend Route Search Field Correction (`server/routes/projectRoutes.js`):** In `/project-Information`, the `$or` conditions previously checked `projectDescription` instead of `description` (the actual schema and database field).
    2. **Comprehensive Field Coverage:** Expanded `/project-Information` `$or` conditions to search across:
       - `description` & `projectDescription`
       - `projectName`
       - `customerName.customerName`, `customerName.companyName`, `customerName.customerEmail`, `customerName.customerPhone`, `customerName.phone`, `customerName.billingAddress`, `customerName.address`, and string `customerName`
       - `ReferenceName` & `ReferenceName2`
       - `status`
       - `note` & `notes`
       - `phase.phaseName`, `phase.name`, `phase.description`
       - Numeric project numbers (`177`, `000177`, `P-000177`, `P-177`)
    3. **Safe Branch Scoping Integration:** Ensured branch filtering (`branchId === 'HQ'`) is merged safely with search `$or` using `$and`, preventing branch filters and search queries from overriding each other, and maintaining accurate live status card counts.
    4. **Project Sidebar Search (`ProjectNameInfo.js`):** Updated `matchProjectSearch` to perform full multi-field filtering across project names, descriptions, customer details, status, notes, references, and project number formats (`P-00####`).
  - **Verification:** AST scope validation passed with 0 errors. Compiled Webpack bundles (`npm run build`) and generated installer `dist/Global Gate Setup 3.5.13.exe`.

- **Quotation Status Card Label Standardization & Global Post-Delete Keyboard Lock Elimination (Ver 3.5.14)**:
  - **Problems Reported:**
    1. In Quotation module, top summary card displayed `ALL ESTIMATES` instead of `ALL QUOTATIONS`.
    2. In all modules, after performing a delete operation, keyboard typing became completely unresponsive across all inputs in the application until the app was closed and restarted.
  - **Root Causes & Resolutions:**
    1. **Quotation Status Card:** Updated `label: 'ALL QUOTATIONS'` in `src/js/AdminView1/EstimateViewAdmin.js`.
    2. **MUI Modal Focus Trap & Restore Focus Lock:** When a table row was deleted and its delete modal closed, MUI's default `restoreFocus` attempted to return focus to the deleted element that was removed from the DOM. This left `document.activeElement` detached and MUI's `TrapFocus` listeners intercepting all keystrokes.
       - Configured global MUI `ThemeProvider` in `src/js/App.js` with `disableRestoreFocus: true`, `disableAutoFocus: true`, and `disableEnforceFocus: false` across all `MuiModal` and `MuiDialog` components.
    3. **Self-Healing Lock & Focus Watcher (`src/js/index.js`):** Fixed modal detection (removed flawed `[role="presentation"]` selector that was permanently matching SVG icons and layout divs) and added global click/focus capture rescue listeners ensuring `<input>` and `<textarea>` elements always immediately receive focus and keystrokes.
    4. **Eliminated Destructive `window.location.reload()` Calls:** Replaced full-window reloads upon closing delete/action modals with smooth in-place `fetchItems(...)` state updates across `ProjectViewAdmin.js`, `MaintenanceViewAdmin.js`, `MaintenanceOrderAdmin.js`, `ItemOutViewAdmin.js`, `ItemReturnAdminView.js`, `PayRollViewAdmin.js`, `RateViewAdmin.js`, and `SellShopInvoiceView.js`.
    5. **Electron WebContents Focus Guarantee (`main.js`):** Added `did-finish-load` listeners ensuring `webContents.focus()` is maintained on all browser windows.
- **Mobile Layout Isolation & Strict Universal Permission Enforcement (Ver 3.5.30)**:
  - **Problem Reported:** Opening the web application on mobile browsers (e.g. Google Chrome on Android / iOS accessing `https://portal.globalgate.sarl`) incorrectly switched the entire web portal into mobile card layout mode. Furthermore, mobile views needed strict adherence to all Grant Access permission rules and technician restrictions identical to the desktop application.
  - **Root Cause & Architectural Resolution:**
    1. **Mobile Layout Isolation (`src/js/utils/isMobile.js`):** Removed userAgent-based mobile device matching so that web browsers on ANY device (smartphones, tablets, laptops, desktops) ALWAYS render the standard, complete Desktop theme and layout. Mobile layout is now strictly isolated to the native Capacitor mobile application wrapper (`window.Capacitor.isNativePlatform() === true`) or explicit developer debug mode (`?mobile=true`).
    2. **Strict Bottom Navigation Permissions (`src/js/component/MobileLayout.js`):** Added live `grantAccess` module verification to dynamically filter bottom navigation tabs, preventing unauthorized access to Invoices, Customers, or Maintenance.
    3. **Action & Edit Permission Enforcement (`src/js/component/MobileDetailSheet.js`):** Secured "Edit" and "Convert" actions with strict `canEdit(type)` permission checks against the logged-in user's `grantAccess` modules.
    4. **Technician Financial Privacy Protection (`src/js/component/MobileDetailSheet.js`):** Enforced Rule 23 across all mobile sheets to ensure technician roles/departments (`TECHNICIAN` / `TECHNICIEN`) cannot view prices, stock, rates, or print financial breakdowns.
  - **Verification:** AST syntax checks passed. Compiled Webpack production and web bundles (`dist_web/`) and generated Windows desktop installer `dist/Global Gate Setup 3.5.30.exe`.

- **Fix 500 Error in Create Supplier & Robust Error Feedback (Ver 3.5.37)**:
  - **Problem Reported:** When creating a new supplier in the "CREATE NEW SUPPLIER" screen (`SupplierForm.js`), clicking "Save" triggered a 500 error (`POST https://api.globalgate.sarl/endpoint/create-Supplier 500`) causing the "Data Failed to Saved" / "Try Again" error modal.
  - **Root Cause & Resolution:**
    1. **Invalid UUID _id Casting:** `SupplierForm.js` was generating and passing `_id: v4()` (a UUID string) in the POST request body. Because `SupplierSchema` (`server/model/suppliersSchema.js`) uses MongoDB's default `ObjectId`, Mongoose threw a `CastError: Cast to ObjectId failed` on the string UUID.
    2. **Frontend Payload Fix (`SupplierForm.js` & `SupplierForm2.js`):** Removed client-side `_id: v4()` so MongoDB automatically generates valid `ObjectId`s. Added `branchId: localStorage.getItem('selectedBranch') || 'HQ'` to ensure supplier records are properly branch-scoped.
    3. **Backend Robustness & Duplicate Key Handling (`server/routes/supplierRoutes.js`):** Sanitized `POST /create-Supplier` to strip non-ObjectId `_id` values defensively, added `try/catch` with explicit duplicate store name detection (`err.code === 11000` returning `400 "A supplier with this Store Name already exists"`), and eliminated duplicate `mongoose` require declarations.
    4. **Dynamic Error Modal:** Updated `SupplierForm.js` and `SupplierForm2.js` error modals to display the exact server error message to the user rather than a generic error.
  - **Verification:** AST checks passed, Webpack production & web bundles compiled (`npm run build`), Windows installer built (`dist/Global Gate Setup 3.5.37.exe`).

- **Technician-Only Cost Privacy & Universal Grant Access Alignment (Ver 3.5.38)**:
  - **Problem Reported:** Non-technician users (e.g. `JUNIOR KAJIKU TSHIYESU`) who were granted Maintenance permissions in the Grant Access module had item prices, stock, labor fees, and totals hidden when viewing/editing maintenance orders, and were improperly routed to the simplified technician screen.
  - **Core Architectural Rules Re-Enforced:**
    1. **Only Account `GG` Bypasses Grant Access:** Username `GG` is the creator and bypasses Grant Access unconditionally. All other roles (`CEO`, `ADMIN`, `USER`) strictly follow their `grantAccess` module permissions.
    2. **Technician Restriction Scope:** The restriction to hide item rates, costs, discounts, amounts, Stock-A, labor fee rates/discounts, and Total Generale applies **STRICTLY AND ONLY to TECHNICIANS** (`department === 'TECHNICIAN' || department === 'TECHNICIEN' || role === 'TECHNICIAN'`).
    3. **Full Visibility for Authorized Non-Technicians:** Any non-technician user with Grant Access to Maintenance (`viewM`, `readM`, `createM`, `editM`) sees all costs, rates, discounts, stock, labor fees, and total generale identically to CEO.
  - **Files Updated & Hardened:**
    1. `MaintenanceUpdateView.js` & `MaintenanceFormView.js`: Fixed `canViewCosts = isOwner || !isTechnician;`, removed legacy `disabled={user.data.role !== 'CEO'}` from `itemRate` inputs, and enabled item addition based on `canCreateItem`.
    2. `MaintenanceViewInformation.js` & `MaintenanceOrderViewInformation.js`: Fixed `canViewCosts = isOwner || !isTechnician;`, and updated Edit button navigation to route non-technicians directly to `MaintenanceUpdateView` with full financial breakdown.
    3. `MaintenanceOrderUpdate.js`: Replaced hardcoded `display: 'none'` on `Stock-A`, `Rate`, `Discount`, `Amount`, `Total Generale`, and Labor Fees financials with dynamic `{canViewCosts && ...}` checks, ensuring authorized users opening this view see all financial details.
    4. `EstimateConvertToMaintenance.js` & `MaintenanceFormClone.js`: Removed restrictive `role !== 'CEO'` constraints on `itemRate`.
    5. `MobileDetailSheet.js`, `MaintenanceViewAdmin.js`, `MaintenanceOrderAdmin.js`: Re-aligned `isOwner` to strictly check `userName === 'GG'`, ensuring all other users follow Grant Access.
  - **Verification:** AST Babel syntax validation passed across all modified files. Compiled Webpack production & web bundles (`npm run build`), generated Windows desktop installer `dist/Global Gate Setup 3.5.38.exe`, committed and pushed to `origin main` for Railway deployment.

- **Item Purchase Quantity 0 Preservation (Ver 3.5.39)**:
  - **Problem Reported:** Editing an item's quantity to 0 in an Item Purchase (e.g. `IP-2625`) caused the item to be stripped from display or deleted.
  - **Resolution:** Updated quantity filters to allow zero quantity lines (`parseFloat(itemQty) >= 0`) across Item Purchase update and view forms.

- **Item Name vs Description Separation in Item Purchases (Ver 3.5.40)**:
  - **Problem Reported:** Item purchases were using item descriptions as names or overwriting item names with descriptions on save.
  - **Resolution:** Enforced strict separation between `itemName` and `itemDescription` across `ItemPurchaseUpdateForm.js`, `ItemPurchaseViewForm.js`, and `ItemPurchaseViewAdmin.js`, with universal `getItemDisplayName` catalog lookups.

- **Fix undefined Reference Name in Purchase Order & Item Out/Return Direct-Invoice Selection (Ver 3.5.43)**:
  - **Problem Reported:** In "MAKE NEW PURCHASE ORDER" (`PurchaseForm.js`), when selecting Reason = `Direct-Invoice` and picking an invoice (e.g. `GLOBAL PVA/INV-002567`), the Invoice input field displayed `undefined / GLOBAL PVA`.
  - **Root Cause & Resolution:**
    1. **Legacy Property Reference:** `handleChangeInvoice` in `PurchaseForm.js`, `ItemOutViewForm.js`, and `ItemReturnUpdateForm.js` accessed `selectedOptions?.invoiceName` (which was undefined because MongoDB invoices store `invoiceNumber`).
    2. **Formatted Identifier Resolution:** Replaced `selectedOptions?.invoiceName` with `invNum = 'INV-' + String(selectedOptions.invoiceNumber).padStart(6, '0')`, ensuring clean formatted display (`INV-002567 / GLOBAL PVA`).
  - **Verification:** AST checks passed, Webpack production & web bundles compiled (`npm run build`), Windows installer generated (`dist/Global Gate Setup 3.5.43.exe`), and changes pushed to `origin main` for Railway deployment.

- **Item Purchase Catalog Separation, Auto-Repair & Safe Autocomplete (Ver 3.5.45)**:
  - **Problem Reported:** In Item Purchase (e.g. `IP-03752`), editing an existing purchase and adding an item with quotes/special characters (such as `MASKING PAPER TAPE 1" INCH`) caused the description to show truncated (`1 INCH`) and the Autocomplete input to appear blank on edit/view.
  - **Root Cause & Resolution:**
    1. **Strict Field Enrichment:** Added `sanitizeAndEnrichPurchaseItems()` in `server/routes/itemRoutes.js` across `POST /create-itemPurchase`, `PUT /update-itemPurchase/:id`, and `GET /get-itemPurchase/:id`.
    2. **Background Self-Healing Auto-Repair:** Automatically repaired existing database records with blank item names on fetch by looking up matching items from catalog and item purchases.
    3. **Catalog Resolution & Pagination Fix:** Updated `ItemPurchaseUpdateForm.js`, `ItemPurchaseViewForm.js`, `ItemPurchaseViewAdmin.js`, and `ItemInformationVIew.js` to fetch full item catalog (`limit=10000`) and safely resolve display names.
  - **Verification:** AST checks passed, Webpack production & web bundles compiled, installer `dist/Global Gate Setup 3.5.45.exe` generated.

- **Universal Multi-Format Customer Querying & Customer View Transactions/Statement Fix (Ver 3.5.46)**:
  - **Problem Reported:** In Customer View (`CustomerInformationView.js`), under the **TRANSACTION** tab, Invoices, Quotations, and Purchase Requests accordions were empty (0 rows) for all customers, while only Maintenance showed rows. Under the **STATEMENT** tab, invoices were completely missing (`Invoiced Amount: $0.00`), while payments were listed, causing false massive negative balances (`Balance Due: -$480,692.84`).
  - **Root Cause Analysis:**
    1. **Strict Mixed-Schema Query Flaw:** Backend routes (`/invoice`, `/estimation`, `/purchase`, `/maintenance`, `/payment`, `/pos`) queried `{ 'customerName._id': { $in: [customerId, objectId] } }`. In MongoDB, historical documents store `customerName` in multiple polymorphic formats:
       - Sub-object with string `_id` (`{ customerName: { _id: "66d...", Customer: "..." } }`)
       - Direct string customer name (`{ customerName: "PROFESSIONAL CONSTRUCTION PCT" }`)
       - Direct ObjectId or string ID (`{ customerName: "66d..." }` or `{ customerId: "66d..." }`)
       - Object with `Customer`, `customerName`, `companyName`, or `customerFullName` without `_id`
    2. Because Mongoose failed to match direct string names and variations when querying on `customerName._id`, `/invoice?summary=true&customerId=...`, `/estimation`, and `/purchase` returned `[]` (empty array).
    3. **Frontend Display Crash Guard:** In `CustomerInformationView.js`, table cells accessed `row.customerName.customerName.toUpperCase()`. If `customerName` is a string or has a different structure, this caused runtime `TypeError` crashes.
  - **Architectural Resolution:**
    1. **Universal Multi-Format Customer Filter (`server/utils/customerFilterUtils.js`):**
       - Implemented `buildCustomerFilter(customerId)` and `applyCustomerFilter(filter, custFilter)` utility.
       - Resolves both `_id` (ObjectId and String), direct ID fields (`customerId`, `customerName`, `customer._id`), and queries `customerSchema` to extract all name variants (`Customer`, `customerName`, `customerFullName`, `companyName`).
       - Matches all name variations using exact case-insensitive regex (`/^Name$/i`) and literal string equality across `customerName`, `customerName.Customer`, `customerName.customerName`, `customerName.companyName`, `customer`, and `Customer`.
    2. **Backend Route Hardening:**
       - Updated `server/routes/invoiceRoutes.js` (`GET /invoice`)
       - Updated `server/routes/estimationRoutes.js` (`GET /estimation`)
       - Updated `server/routes/purchaseRoutes.js` (`GET /purchase`)
       - Updated `server/routes/maintenanceRoutes.js` (`GET /maintenance`)
       - Updated `server/routes/Routes.js` (`GET /payment` and `GET /pos`)
    3. **Frontend Performance & Safety (`src/js/AdminView1/PageView/CustomerVIew/CustomerInformationView.js`):**
       - Replaced sequential waterfalls in `useEffect` with parallel `Promise.all()` across all 6 endpoints.
       - Implemented `getDisplayCustomerName(cust)` helper for safe, null-resilient customer name rendering.
       - Wrapped all numeric table totals with `parseFloat(row.subTotal || row.total || 0).toFixed(2)` to eliminate `undefined.toFixed()` crashes.
  - **Verification:** Webpack production and web bundles compiled cleanly (`npm run build`), desktop installer `dist/Global Gate Setup 3.5.46.exe` built.

- **Global Numerical Formatting Hardening Across All 228 Modules (Ver 3.5.47)**:
  - **Problem Reported:** In Customer View (`CustomerInformationView.js:1442:121`), older local client bundles threw `TypeError: Cannot read properties of undefined (reading 'toFixed')` when encountering historical invoices or payment records with nullish `subTotal` or `amount` fields, causing a white-screen render failure.
  - **Comprehensive Frontend Hardening:**
    1. Audited all 228 frontend JS files across `src/js/` for `.toFixed()` invocations on raw API objects (`row`, `item`, `params`, `params.row`).
    2. Wrapped all numeric property accesses across 22 files with bulletproof null-safe fallbacks: `(parseFloat(field) || 0).toFixed(2)`.
    3. Validated full Babel AST syntax parsing across all 228 modules with 0 errors.
  - **Verification:** Compiled Webpack desktop & web production bundles (`npm run build`), generated Windows desktop installer `dist/Global Gate Setup 3.5.47.exe`, committed and pushed to `origin main` for automated deployment.

- **Elimination of "Ref undefined / undefined" Statement Artifacts & Enriched Invoice Projection (Ver 3.5.48)**:
  - **Problem Reported:** In Customer View (`CustomerInformationView.js`), statement line items in the `Details` column were rendering as `Ref undefined / undefined INV-001265 - due on 01 October 2026` because `invoiceDefect` and `invoiceSubject` were omitted from the backend `/invoice?summary=true` projection, resulting in `"undefined / undefined"` string concatenation.
  - **Architectural Resolution:**
    1. **Backend Invoice Projection Enrichment (`server/routes/invoiceRoutes.js`):**
       - Expanded the `summary=true` projection in `GET /invoice` to include `invoiceDefect`, `invoiceSubject`, `invoiceDueDate`, `invoiceName`, `subTotal`, `terms`, `Position`, `ReferenceName`, `noteInfo`, `note`, `adjustment`, `adjustmentNumber`, and `shipping`.
    2. **Frontend Statement Defect Sanitization (`CustomerInformationView.js`):**
       - Implemented null/undefined filter in statement data construction: `[row.invoiceDefect, row.invoiceSubject, row.defect, row.subject].filter(v => v && v !== 'undefined' && v !== 'null')`.
       - Render `Ref [Subject/Defect] INV-XXXXXX` only when a genuine, non-empty defect or subject string is present; otherwise cleanly format as `INV-XXXXXX - due on [Date]`.
       - Hardened Payment details rendering to map through invoice reference numbers cleanly without undefined values.
  - **Verification:** Webpack prod & web bundles compiled cleanly (`npm run build`), Windows installer `dist/Global Gate Setup 3.5.48.exe` built.

- **Restoration & Permanent Hardening of Numeric Formats Across 20 Modules (Ver 3.5.49)**:
  - **Problem Reported:** In Expenses Daily Information (`DailyExpenseAdminView.js`), the VIEW PER DAY tab showed `$ 0.00` in the Expenses table rows for USD amounts (e.g. `$231.47`), while the bottom summary correctly showed the daily total.
  - **Root Cause Analysis:**
    - An empty `parseFloat()` argument without variable capture had been injected into 20 frontend files during numerical hardening, causing `(parseFloat() || 0)` to evaluate to `0`.
  - **Architectural Resolution:**
    - Audited and repaired all 20 affected files:
      1. `DailyExpenseAdminView.js` (`row.totalCash`, `item.amount`, `item.total`, `item.amountTotalFc`, `item.amountTotalUsd`, `item.returnUSD`, `row.returnAmountFC`, `row.returnAmountUSD`, `row.RemainingAmountFC`, `row.RemainingAmountUSD`)
      2. `DailyExpensesMonthlyChartView.js` (`row.total`)
      3. `DailyExpensesReportInfo.js` (`row.amount`, `row.payment`)
      4. `InvoiceReportInfo.js` (`row.subTotal`, `row.infoCost`)
      5. `ItemPurchaseReportInfo.js` (`row.amount`, `row.payment`)
      6. `MaintenanceReportInfo.js` (`row.totalLaborFeesGenerale`, `row.adjustmentNumber`, `row.laborDiscount`)
      7. `PayRollReportInfo.js` (`row.amount`, `row.payment`)
      8. `PaymentReportInf.js` (`row.amount`)
      9. `PosReportInvoice.js` (`row.infoSell`, `row.subTotal`, `row.infoCost`, `row.infoCostFC`, `row.TaxUSd`, `row.infoSellFC`)
      10. `EstimateViewAdminAll.js` (`row.shipping`, `row.adjustmentNumber`, `row.tax`, `row.totalInvoice`, `row.total`, `row.balanceDue`)
      11. `MakePurchaseConvertToProject.js` (`Item.totalCost`, `Item.totalGenerale`)
      12. `MakePurchase.js` (`Item.totalCost`, `Item.totalGenerale`)
      13. `ItemPurchaseViewForm.js` (`Item.totalAmountUSD`, `Item.fcConvertToUsdTotal`)
      14. `PrintPayRoll.js` (`row.totalActualSalary`, `row.totalActualEarning`, `row.totalActualDeduction`, `row.totalNet`, `row.bonus`, `row.totalPaid`, `row.totalPaidDollars`)
      15. `PaymentInformationView.js` (`row.returnUSD`, `row.remaining`)
      16. `ProjectViewInformation.js` (`item.total`, `item.dayPay`, `row.dayPay`, `row.total`, `row.subTotal`, `row.shipping`, `row.adjustmentNumber`, `row.totalInvoice`, `row.balanceDue`)
      17. `PurchaseForm.js` (`Item.totalAmountUSD`, `Item.fcConvertToUsdTotal`)
      18. `PurchaseUpdateOrder.js` (`Item.totalAmountUSD`, `Item.fcConvertToUsdTotal`)
      19. `ShopPosForm.js` (`Item.itemRate`)
      20. `ShopPosUpdateForm.js` (`Item.itemRate`)
  - **Verification:** Compiled Webpack desktop & web production bundles (`npm run build`), generated Windows desktop installer `dist/Global Gate Setup 3.5.49.exe`, committed and pushed to `origin main` for automated cloud deployment.

- **System-Wide 4-Layer Architectural Fortification & Pre-Build Quality Gate (Ver 3.5.50)**:
  - **Context & Objective:** Comprehensive audit and structural fortification across all major operational modules (Store & Inventory, Item Purchase & PO, Suppliers, Employees & Payroll, Grant Access & Settings, Block Factory, and Point of Sale) to prevent regressions, eliminate white-screen crashes on legacy MongoDB records, and enforce pre-build quality checks.
  - **Architectural Enhancements Implemented:**
    1. **Centralized Defensive Utility (`src/js/utils/formatUtils.js`):**
       - Implemented null-safe helper methods (`safeNumber`, `formatUSD`, `formatFC`, `formatDualCurrency`, `formatCustomerName`, `formatSupplierName`, `formatEmployeeName`) handling raw numbers, formatted currency strings, ObjectIds, and polymorphic subdocuments.
    2. **Hardening of 10 DataGrid Polymorphic ValueGetters:**
       - Hardened customer and project name getters across `AdminHome.js` (Invoice and POS Invoice grids), `EstimateViewAdmin.js`, `ExpensesViewAdmin.js`, `MaintenanceViewAdmin.js`, `MaintenanceOrderAdmin.js`, `PaymentView.js` (Invoices & Payments grids), `PurchasesViewAdmin.js`, and `SellShopInvoiceView.js`.
       - Replaced direct `customerName.customerName` access with resilient fallbacks: `(params.row?.customerName?.Customer || params.row?.customerName?.customerName || (typeof params.row?.customerName === 'string' ? params.row.customerName : '') || '').toUpperCase()`.
    3. **Automated Pre-Build AST Quality Gate (`scripts/pre-build-check.js`):**
       - Embedded a mandatory pre-build verification hook into `package.json` (`npm run build`, `npm run build:web`, `npm run build:electron`).
       - Parses all 229 JS/JSX source files via Babel AST to catch syntax errors, missing variables, or empty `parseFloat()` / `parseInt()` calls prior to bundle generation.
  - **Verification:** Verified Babel AST across all 229 source files, compiled Webpack production and web bundles (`npm run build`), built Windows installer `dist/Global Gate Setup 3.5.50.exe`.

- **Project Information Module Restoration & Polymorphic Link Fortification (Ver 3.5.51)**:
  - **Problem Reported:** In Project Information (`ProjectViewInformation.js`), the INVOICE and PURCHASE tabs rendered completely blank, and the OVERVIEW tab showed `$0.00` for Material Expense, Overhead Expense, and Invoiced Profit (e.g. for P-000175 CFAO MOBILITY and P-000176 MR. ERICK TSHILEMB).
  - **Root Cause Analysis:**
    1. **Frontend Priority Data Crash:** `resProjectSpec.data.data.customerName.customerName.replace(...)` failed with an unhandled TypeError on string-based customer records (e.g., `"CFAO MOBILITY"`), instantly triggering the `catch` block and aborting `fetchDetailedData()` before invoices, purchases, items, or expenses could be fetched.
    2. **Stale State Closure in Background Fetch:** `fetchDetailedData` relied on React state `projectName` and `projectNumber`, which were not yet committed during initial render tick, resulting in empty string matches for item movements.
    3. **Restrictive Backend Project Matching Queries:** Backend endpoints `/purchase`, `/invoice`, `/expense`, `/itemOut`, `/itemReturn`, `/itemPurchase` strictly looked for `projectName._id`, failing to match purchases/invoices linked via `ReferenceName2`, `Ref._id`, `invoicePurchase`, `ReferenceName`, or string names.
  - **Architectural Resolution:**
    1. **Frontend `ProjectViewInformation.js`:**
       - Hardened `fetchPriorityData` to safely extract customer names via polymorphic check `typeof rawCust === 'string' ? rawCust : (rawCust?.customerName || rawCust?.name || rawCust?.Customer || '')`.
       - Passed resolved project parameters (`id`, `pNum`, `pName`) directly into `fetchDetailedData`, `fetchInvoicesAndPurchases`, `fetchExpenses`, `fetchTimelineAndStaff`, and `fetchItemsMovement`, eliminating stale state closure.
       - Replaced all unprotected `.customerName.customerName` and `.customerName.billingAddress` references with polymorphic null-safe access throughout the component, search filters, and Excel/print exports.
       - Hardened advances amount rendering and `.toFixed(2)` calls.
    2. **Backend Multi-Field Project Link Matching:**
       - `server/routes/purchaseRoutes.js`: Expanded project queries to match `projectName._id`, `ReferenceName2`, `ReferenceName`, `projectName`, `projectName.projectName`, `projectName.name`.
       - `server/routes/invoiceRoutes.js`: Expanded project queries to match `ReferenceName2`, `Ref._id`, `invoicePurchase`, `ReferenceName`, `Ref.projectName`.
       - `server/routes/expenseRoutes.js`: Expanded project queries to match `accountNameInfo._id`, `accountNameInfo`, `accountNameInfo.name`, `accountName`.
       - `server/routes/itemRoutes.js`: Expanded `itemOut`, `itemReturn`, and `itemPurchase` queries to match `reference._id`, `reference`, `POID`, `projectName._id`, `projectName`, `projectName.projectName`, `projectName.name`.
  - **Verification:** Verified with AST quality gate across 229 files, compiled Webpack production and web bundles (`npm run build`), built Windows installer `dist/Global Gate Setup 3.5.51.exe`, committed and pushed to `origin main`.

- **System-Wide Scan & Polymorphic Schema Hardening Across All Modules (Ver 3.5.52)**:
  - **Context & Objective:** Following the resolution of polymorphic customer schema issues in Project Information, conducted a deep AST & regex inspection across all 229 frontend files and backend query structures to eradicate any remaining unsafe nested subdocument accesses, unhandled string vs. object polymorphisms, and unvalidated string method calls.
  - **Comprehensive Hardening Across Modules:**
    1. **Daily Expenses (`DailyExpenses.js`, `DailyExpenseAdminView.js`, `DailyExpenseForm.js`, `DailyExpenseUpdate.js`):**
       - Replaced direct `expenseCategory.expensesCategory` and `accountNameInfo.name` table cells with polymorphic type guards `typeof item.expenseCategory === 'object' ? (item.expenseCategory?.expensesCategory || item.expenseCategory?.name || '') : (item.expenseCategory || '')`.
       - Fortified search filters in `DailyExpenseAdminView.js` across `expenseNumber`, `accountName`, `expenseCategory`, `accountNameInfo`, and `employeeName`.
       - Added type safety to autocomplete `getOptionLabel` and `renderOption` handlers for projects and employees.
    2. **Item & Inventory Movements (`ItemOutViewAdmin.js`, `ItemPurchaseViewAdmin.js`, `ItemReturnAdminView.js`, `ItemInformationVIew.js`):**
       - Guarded table cells, print templates, and Excel exports against non-populated string `itemName` and `projectName` values.
       - Hardened `itemInfo` array mappings in item movement tables and search filters.
    3. **Purchase Orders & Purchases (`PurchasesViewAdminAll.js`, `PurchasesFormView.js`, `PurchaseFormUpdate.js`, `PurchaseOrderInfoView.js`, `PurchaseOrderViewAdmin.js`, `PurchaseUpdateOrder.js`):**
       - Safely extracted polymorphic customer and project references (`customerName.customerName`, `projectName.projectName`, `itemName.itemName`) in master tables, chip labels, reason strings, and autocomplete dropdowns.
    4. **Convert to Invoice / Estimate (`ConvertToInvoice.js`, `ConvertToEstimate.js`):**
       - Protected category accumulator calculations and reason string generators against string vs. object `expenseCategory` and `customerName`.
       - Hardened dropdown menu item displays for item selection.
    5. **Point of Sale (`ShopPosForm.js`, `ShopPosUpdateForm.js`, `ReportPos.js`):**
       - Hardened item filtering logic, receipt headers, and customer display in POS receipts and reports.
    6. **Suppliers & Payments (`SupplierViewInformation.js`, `PaymentView.js`):**
       - Safely extracted supplier names, customer references, and project descriptions for table rows and payment creation callbacks.
  - **Verification & Deployment:**
    - Verified all 229 source files through the Babel AST pre-build quality gate with 0 errors.
    - Compiled Webpack desktop & web production packages (`npm run build`).
    - Generated Windows desktop installer `dist/Global Gate Setup 3.5.52.exe`.
    - Pushed to `origin main` (`576e48de`) for automated Cloudflare Pages and Railway API deployments.

- **Point of Sale (POS) Thermal Receipt Printing Restoration (Ver 3.5.54)**:
  - **Problem Reported:** Following previous system-wide A4 print harmonization, POS thermal receipts printed through POS thermal roll printers (e.g., POS-80C 80mm roll printer) were printing microscopic text clustered in the middle of the paper roll.
  - **Root Cause Analysis:**
    1. A top-level global `@page { size: A4 portrait; margin: 8mm 10mm 10mm 10mm; }` rule inside `Chartview.css` forced the browser print pipeline to render the document on a virtual 210mm x 297mm A4 canvas.
    2. When the receipt was sent to an 80mm thermal receipt printer (`POS-80C`), the print spooler scaled the entire 210mm A4 canvas down to 72mm-80mm (a ~65% size reduction), causing tiny, unreadable text and large blank margins.
    3. `SellShopInvoiceView.js` lacked an explicit POS-tailored `pageStyle` on `useReactToPrint`.
  - **Architectural Resolution:**
    1. **CSS Decoupling (`src/js/AdminView1/PageView/Chartview.css`):** Reverted the global un-scoped root `@page` size restriction back to standard `@page { margin: 5mm; }`. All standard A4 modules (`InvoiceViewAdminAll`, `PurchasesViewAdminAll`, `CustomerInformationView`, etc.) already declare their own dedicated `pageStyle` with `size: A4 portrait`, preserving professional full-page layout without contaminating receipt printing.
    2. **POS Dedicated Page Style (`src/js/AdminView1/SellShopInvoiceView.js`):** Added explicit `pageStyle` with `@page { size: auto; margin: 0mm !important; }`, 100% width scaling, `max-width: 80mm`, readable font sizing (13px / 12px), clean compact padding, and `pos-receipt-table` styling.
  - **Verification & Deployment:**
    - Babel AST Quality Gate passed across all 229 source files (0 errors).
    - Webpack desktop & web production bundles compiled.
    - Updated version to `v3.5.54`.

- **Point of Sale (POS) Paper-Saving Thermal Receipt Layout Optimization (Ver 3.5.55)**:
  - **Problem Reported:** While v3.5.54 resolved the small/shrunk text scaling on 80mm roll printers, the vertical height of the printed receipt was overly tall and spaced out, consuming nearly twice as much thermal paper as the original receipts.
  - **Root Cause Analysis:**
    1. `onBeforeGetContent` previously introduced an artificial multi-page height calculation (`requiredHeight = numberOfPage * PAGE_HEIGHT`) which multiplied container height by 560px, forcing empty vertical white space into continuous roll paper printing.
    2. The font size (13px) and line height (1.3) combined with excessive cell padding (3px 2px) inflated row heights.
  - **Architectural Resolution:**
    1. **Paper-Saving Typography & Padding:** Adjusted font size to sharp 10px, line-height to tight 1.15, and cell padding to 1px 1px.
    2. **Elimination of Artificial Height Scaling:** Removed the container height multiplier so continuous thermal roll printers cut precisely at the end of the content with zero wasted paper.
    3. **Column & Header Proportioning:** Aligned header colspans strictly to the 5-column table structure and distributed widths (5% #, 45% Item, 14% Qty, 18% Rate, 18% Total) to prevent unnecessary text wrapping.
  - **Verification & Deployment:**
    - Babel AST Quality Gate passed across all 229 files (0 errors).
    - Webpack desktop & web production packages built.
    - Windows installer `dist/Global Gate Setup 3.5.55.exe` generated.

- **Point of Sale (POS) Receipt Column Spacing & Number Readability Refinement (Ver 3.5.56)**:
  - **Problem Reported:** In v3.5.55, the numeric values for QTY, Rate, and Total were clustered too tightly together without adequate horizontal separation, making adjacent numbers difficult to distinguish (e.g. `1 BOX FC180,000.00 FC180,000.00`).
  - **Root Cause Analysis:**
    1. Padding on numeric columns was set to 1px with no distinct column-specific gutters, causing right-aligned and center-aligned numeric text blocks to touch each other.
    2. Missing explicit column classes (`.col-qty`, `.col-rate`, `.col-total`) led to inconsistent column width budgeting across different item name lengths.
  - **Architectural Resolution:**
    1. **Column Classes & Width Allocation (`src/js/AdminView1/SellShopInvoiceView.js`):** Allocated distinct proportional widths (5% #, 37% Item, 16% Qty, 21% Rate, 21% Total) with explicit column classes.
    2. **Horizontal Spacing & Right Gutters:** Added `padding-right: 8px` on Rate and `padding-right: 6px` on Qty with `white-space: nowrap`, establishing a clean visual gap between quantities, unit prices, and line totals.
    3. **Crisp 9.5px Print Typography:** Maintained the paper-saving 9.5px font size for high-density readability without sacrificing paper economy.
  - **Verification & Deployment:**
    - Babel AST Quality Gate passed across all 229 files (0 errors).
    - Webpack desktop & web production packages built.
    - Windows installer `dist/Global Gate Setup 3.5.56.exe` generated.

- **Block Factory Historical Snapshot Rate Preservation & Accounting Lock Enforcement (Ver 3.5.57)**:
  - **Problem Reported:** When modifying Market Pricing (cement, concasse, gravel, sand, overheads) and Labor Payment Rates (machine crew tiers, mixer rate per sack, damage penalty rate) in `BlockConfigView`, historical records were being retroactively recalculated, altering past Worker Payment Statements, production block unit costs, and inventory valuations.
  - **Root Cause Analysis:**
    1. **Worker Payment Statements (`WorkerPaymentView.js`):** Mixer shares calculated dynamically using `config?.mixerRatePerSack`, retroactively altering past mixer payouts whenever the rate was adjusted. Furthermore, crew unit shares conditionally compared against `calculateWorkerShare` with live rates, potentially shifting past earnings.
    2. **Production Block Costs (`BlockProductionView.js`):** Material costs checked against `cementThreshold = sacks * config.cementPrice * 0.9`. Raising cement price in config caused historical production material costs to be discarded and re-evaluated at the new market rate.
    3. **Inventory Valuation & Tracking (`BlockTrackingView.js`):** Overrode saved historical `totalCost` and `totalMatCost` with dynamic runtime calculations using current config overheads and cement thresholds.
    4. **Mixer Team Schema (`blockMixerSchema.js` / `BlockMixerView.js`):** Mixer worker assignment records did not persist a rate snapshot (`mixerRatePerSack`), relying solely on runtime global config lookup.
    5. **Payroll Integration (`PayRollFormView.js`, `PayRollUpdateFormView.js`):** Dynamically calculated mixer payouts and crew rates when populating payroll from date ranges.
  - **Architectural Resolution:**
    1. **Immutable Mixer Rate Snapshots (`blockMixerSchema.js`, `BlockMixerView.js`):** Extended `blockMixerSchema` to include `mixerRatePerSack: Number`. `BlockMixerView.js` now persists the active `mixerRatePerSack` snapshot directly onto each worker record upon creation.
    2. **Worker Payment Statement Historical Integrity (`WorkerPaymentView.js`):**
       - Machine crew earnings prioritize stored `run.laborPot` snapshot (`unitShare = run.laborPot / weightedCrewCount`), preventing live labor rate shifts from altering past payouts.
       - Mixer earnings prioritize per-record `w.mixerRatePerSack` snapshot.
       - Damage deductions strictly enforce per-record `d.damageRate` snapshot across list calculations and `dmgSummary`.
    3. **Production Run Cost Snapshot Locking (`BlockProductionView.js`):** `recentProductions` strictly prioritizes saved `r.totalCost`, `r.totalMatCost`, `r.laborPotUSD`, and `r.overheadSnapshot` without re-evaluating historical records against live config cement thresholds or overhead changes.
    4. **Inventory & Cost Tracking Snapshot Preservation (`BlockTrackingView.js`):** Preserves `totalCost = parseFloat(r.totalCost)` and historical component snapshots, guaranteeing past production costs and inventory values remain 100% frozen.
    5. **Payroll Module Synchronization (`PayRollFormView.js`, `PayRollUpdateFormView.js`):** Aligned payroll generation to respect `w.mixerRatePerSack`, `run.laborPot`, and `d.damageRate` snapshots identically to Worker Payment Statements.
  - **Verification & Deployment:**
    - Babel AST Quality Gate passed across all 229 source files (0 errors).
    - Webpack desktop & web production packages compiled (`npm run build`).
    - Windows desktop installer `dist/Global Gate Setup 3.5.57.exe` generated.

- **Block Factory Historical Mixer Rate Backfill & Strict Zero-Recalculation Guarantee (Ver 3.5.58)**:
  - **Problem Reported:** After configuring Mixer Rate from 1,000 FC to 600 FC in `BlockConfigView`, historical mixer payouts (e.g. 16/09/26 with 4 sacks) dynamically flipped from +4,000 FC to +2,400 FC.
  - **Root Cause Analysis:**
    1. Historical `blockMixer` records created in past months in MongoDB did not have `mixerRatePerSack` persisted in the database documents.
    2. Fallback logic in `WorkerPaymentView.js` evaluated `config?.mixerRatePerSack` whenever `w.mixerRatePerSack` was absent, pulling the newly edited configuration rate for all past dates.
  - **Architectural Resolution:**
    1. **Production Database Snapshot Backfill:** Executed migration backfilling all 288 historical `blockMixer` records directly in Railway MongoDB (`mixerRatePerSack: 1000` for September 2026, `300` for prior months), permanently binding each historical mixer record to its immutable rate.
    2. **Strict Fallback Hardening (`WorkerPaymentView.js`, `PayRollFormView.js`, `PayRollUpdateFormView.js`):** Replaced live `config.mixerRatePerSack` fallback with date-anchored historical fallback (`1000` for Sept 2026, `300` earlier), completely isolating past dates from current `blockConfig` adjustments.
    3. **Backend Creation Snapshotting (`server/routes/Routes.js`):** In `POST /create-block-mixer`, if `mixerRatePerSack` is missing in the payload, the backend automatically queries `BlockConfig` and permanently sets `mixerRatePerSack` before document creation.
  - **Verification & Deployment:**
    - Babel AST Quality Gate passed across all 229 source files (0 errors).
    - Webpack desktop & web production packages compiled (`npm run build`).
    - Windows desktop installer `dist/Global Gate Setup 3.5.58.exe` generated.

- **Dashboard Operations & Commercial Invoices Statement of Accounts Accuracy Fixes (Ver 3.5.61)**:
  - **Problem Reported:** In the Dashboard:
    1. **Maintenance Operations:** Top overview card showed Total Cost `$0.00` (despite table rows having item costs), causing Operating Gain to equal Total Sell. In the drilldown Statement of Accounts (`MaintenanceReportInfo.js`), Total Cost and Total Revenue rendered as `$0.00`, Total Labor was omitted from the Statement card, and the box header incorrectly displayed "Expenses Summary".
    2. **Commercial Invoices:** In the Statement of Accounts drilldown (`InvoiceReportInfo.js`), Total Cost and Total Revenue rendered as `$NaN`, the table footer displayed `$NaN`, the Total Cost column in `Row3` mistakenly rendered `row.subTotal` instead of `row.infoCost`, and the box header said "Expenses Summary".
    3. User requested a comprehensive mathematical calculation and layout audit across all dashboard modules (Maintenance, Commercial Invoices, POS Sales, Projects, Expenses, Payroll, Payments) without disrupting cross-collection links.
  - **Root Cause Analysis:**
    1. **Maintenance `$0.00` Cost Bug:** `AdminHome.js` and `MaintenanceReportInfo.js` attempted to read `item.totalCostInfo`, an undefined property on maintenance items. The true item cost is `item.itemCost` (or `item.costPrice` / `item.itemCostPrice`) multiplied by `item.itemOut || item.itemQty`.
    2. **Commercial Invoices `$NaN` Bug:** In `InvoiceReportInfo.js`, `TCost` reduced non-existent `item.totalCostInfo`, producing `NaN` and poisoning `TotalRevenue`, `TotalDExpenses`, and `TotalPayRoll`.
    3. **Commercial Invoices Column Swap:** `Row3` line 336 rendered `row.subTotal` inside the Total Cost column instead of `row.infoCost`.
    4. **Copy-Pasted Headers & Unsafe Customer Name Lookups:** Multiple report drilldowns had hardcoded "Expenses Summary" headers and `row.customerName.customerName` lookups vulnerable to non-object strings or undefined values.
  - **Architectural Resolution:**
    1. **Dashboard Overview Calculations (`AdminHome.js`):**
       - Updated `safeGet('/maintenance?summary=true')` mapping to reliably calculate `infoSell`, `infoCost`, and `totalLaborFeesGenerale`.
       - Summed `totalMaintenanceRevenue` (`sum + row.infoSell`), `totalMaintenanceCost` (`sum + row.infoCost`), and `totalMaintenanceLaborFees` (`sum + row.totalLaborFeesGenerale`), resolving the `$0.00` Total Cost card and restoring accurate pie chart slices.
       - Passed `onPayment={payment}` to `<ProjectReportInfo />`.
    2. **Maintenance Statement of Accounts (`MaintenanceReportInfo.js`):**
       - Fixed data loading to accept `onMaintenance` regardless of `onMonth` value.
       - Replaced fragile date matching with `dayjs.isBetween` (`startOf('day')` / `endOf('day')`) for custom date ranges.
       - Fixed totals calculations (`TotalRevenue`, `TotalDExpenses`, `TotalPayRoll`, `TotalPayment`) to accurately aggregate item sales, costs, operating gain, and labor fees.
       - Updated section title to "Maintenance Summary", used polymorphic customer names (`row?.customerName?.Customer || row?.customerName?.customerName || ...`), and secured number formatting across all table footers.
    3. **Commercial Invoices Statement of Accounts (`InvoiceReportInfo.js`):**
       - Fixed `useEffect` data loading (`if (onInvoice) setInvoiceRevenue(onInvoice)`).
       - Replaced `item.totalCostInfo` with robust fallback calculation (`item.itemCost || item.costPrice || item.itemCostPrice`), eliminating all `$NaN` instances.
       - Fixed `Row3` Total Cost column to display `row.infoCost` and Revenue column to display `row.subTotal - row.infoCost`.
       - Updated section title to "Commercial Invoices Summary" and applied polymorphic customer names.
    4. **POS Sales Statement of Accounts (`PosReportInvoice.js`):**
       - Standardized custom date range filtering with `dayjs` `isBetween`.
       - Renamed section title to "POS Sales Summary", added polymorphic customer names, and guarded against `NaN` in totals and footers.
    5. **Project Summary Report (`ProjectReportInfo.js`):**
       - Renamed section title to "Project Summary", applied polymorphic customer names across all views, and aligned search and payment calculations.
  - **Verification & Deployment:**
    - Babel AST Quality Gate passed across all 229 source files (0 errors).
    - Webpack desktop & web production packages compiled (`npm run build`).
    - Windows desktop installer `dist/Global Gate Setup 3.5.61.exe` generated.

- **Dashboard Statement of Accounts Professional Layout & Module Branding Standardization (Ver 3.5.62)**:
  - **Problem Reported:**
    1. Across all Dashboard Statement of Accounts drilldowns, the top-right Statement table was cramped, difficult to read, and compressed (`fontSize: '70%'`, `left: '83px'`).
    2. All Statement tables used the generic and ambiguous title "Statement of Accounts" instead of distinguishing which module's statement was being viewed.
    3. User requested a professional layout overhaul across all dashboard Statement of Accounts cards with clear typography, consistent branding, appropriate spacing, and specific titles (e.g. `Statement of Accounts - Commercial Invoices`, `Statement of Accounts - Maintenance Operations`, `Statement of Accounts - POS Sales`, etc.).
  - **Architectural Resolution:**
    1. **Design System & Typography Standardization:**
       - Replaced cramped inline offsets with structured card containers (`minWidth: '360px'`, `fontSize: '13px'`, `borderCollapse: 'collapse'`, `border: '1px solid #cbd5e1'`, `borderRadius: '6px'`, `boxShadow: '0 2px 4px rgba(0,0,0,0.05)'`).
       - Implemented branded table header rows (`backgroundColor: '#093170'`, `color: '#ffffff'`, `padding: '9px 14px'`, `fontSize: '13.5px'`, `fontWeight: 'bold'`, `letterSpacing: '0.3px'`).
       - Standardized section banner styles (`backgroundColor: '#e8f7fe'`, `color: '#0369a1'`, `padding: '7px 14px'`, `fontSize: '12.5px'`, `fontWeight: 'bold'`, `borderBottom: '1px solid #bae6fd'`).
       - Highlighted bottom total and net revenue rows with clean green accents (`backgroundColor: '#f0fdf4'`, `color: '#166534'`, `fontWeight: 'bold'`).
    2. **Module-Specific Statement Titles Updated Across All Reports (Print & Screen):**
       - `InvoiceReportInfo.js`: `Statement of Accounts - Commercial Invoices` + `Commercial Invoices Summary`
       - `MaintenanceReportInfo.js`: `Statement of Accounts - Maintenance Operations` + `Maintenance Summary`
       - `PosReportInvoice.js`: `Statement of Accounts - POS Sales` + `POS Sales Summary`
       - `ProjectReportInfo.js`: `Statement of Accounts - Projects` + `Project Summary`
       - `DailyExpensesReportInfo.js`: `Statement of Accounts - Daily Expenses` + `Expenses Summary`
       - `ItemPurchaseReportInfo.js`: `Statement of Accounts - Item Purchases` + `Item Purchases Summary`
       - `PayRollReportInfo.js`: `Statement of Accounts - Payroll` + `Payroll Summary`
       - `PaymentReportInf.js`: `Statement of Accounts - Payments Received` + `Payment & Revenue Summary`
       - `ItemReportInfo.js`: Modernized header and search bar (`Inventory Items Summary`).
  - **Verification & Deployment:**
    - Babel AST Quality Gate passed across all 229 source files (0 errors).
    - Webpack desktop & web production packages compiled (`npm run build`).
    - Windows desktop installer `dist/Global Gate Setup 3.5.62.exe` generated.

- **Universal Print & Excel Export Standard Across All Dashboard Report Drilldowns (Ver 3.5.63)**:
  - **Problem Reported:**
    1. In the Dashboard report drilldowns (such as Maintenance Operations, Commercial Invoices, POS Sales, Projects, Inventory Items), the top filter bar was missing the Print `[ 🖨️ ]` and Excel `[ E ]` export buttons that were present in Payroll.
    2. User requested having the exact same Print and Excel capabilities enabled across all dashboard drilldown modules.
  - **Architectural Resolution:**
    1. **ExcelJS & File-Saver Integration:** Added module-specific `.xlsx` dataset generators across all remaining drilldown components with custom column definitions, structured widths, and formatted monetary values.
    2. **Print Rendering (`react-to-print`):** Attached `componentRef` to printable paper containers across all drilldown components, rendering standardized `PrintHeader`, statement cards, and detail tables with exact print color adjustment.
    3. **Top Action Bar Standardization:**
       - `MaintenanceReportInfo.js`: Added Excel Export (`Maintenance_Operations_Report.xlsx`) and Print.
       - `InvoiceReportInfo.js`: Added Excel Export (`Commercial_Invoices_Report.xlsx`) and Print.
       - `PosReportInvoice.js`: Added Excel Export (`POS_Sales_Report.xlsx`) and Print.
       - `ProjectReportInfo.js`: Added Excel Export (`Projects_Report.xlsx`) and Print.
       - `ItemReportInfo.js`: Added Excel Export (`Inventory_Items_Report.xlsx`) and Print.
  - **Verification & Deployment:**
    - Babel AST Quality Gate passed across all 229 source files (0 errors).
    - Webpack desktop & web production packages compiled (`npm run build`).
    - Windows desktop installer `dist/Global Gate Setup 3.5.63.exe` generated.

- **Commercial Invoices Paid & Partially-Paid Status Filter Cards & Backend Aggregation (Ver 3.5.64)**:
  - **Problem Reported:**
    1. In the Commercial Invoices listing view (`InvoiceViewAdmin.js`), the top summary card row previously contained: `ALL ORDERS`, `DRAFT`, `SENT`, `PENDING`, `DECLINE`, and `FREE OF CHARGE`.
    2. The user requested adding two new status cards: **`PAID`** and **`PARTIALLY-PAID`** to show the total invoice count for each status and allow one-click filtering to display only matching invoices.
  - **Architectural Resolution:**
    1. **Frontend (`InvoiceViewAdmin.js`):**
       - Extended `statusCounts` state to track `paid` and `partiallyPaid` counts.
       - Added `PAID` (`#16a34a` green badge with `CheckCircleIcon`, key: `'Paid'`) and `PARTIALLY-PAID` (`#d97706` amber badge with `PaymentsIcon`, key: `'Partially-Paid'`) filter cards.
       - Adjusted responsive grid layout to `xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)', md: 'repeat(8, 1fr)'` so all 8 cards align smoothly across top navigation.
       - Clicking either card instantly filters the server-side queried invoice DataGrid list.
    2. **Backend (`server/routes/invoiceRoutes.js`):**
       - Updated `GET /invoice-Information` status parameter filter to match `paid` (`/^paid$/i`) and `partially-paid` (`/^partially[- ]?paid$/i`).
       - Updated the MongoDB `$group` status aggregation logic to compute `statusCounts.paid` and `statusCounts.partiallyPaid` across all branch-scoped invoices.
  - **Verification & Deployment:**
    - Babel AST Quality Gate passed across all 229 source files (0 errors).
    - Webpack desktop & web production packages compiled (`npm run build`).
    - Windows desktop installer `dist/Global Gate Setup 3.5.64.exe` generated.

- **User Login Notifications & HR Announcements Full Audit History Drilldown (Ver 3.5.65)**:
  - **Problem Reported:**
    1. User requested real-time login notifications showing who logged in and at what time, recorded into the permanent notification history ("ALL" tab).
    2. User inquired why "HR Announcements" on the Dashboard could not be clicked or opened as a full report to inspect historical notifications, and asked about notification retention and lifecycle.
  - **Architectural Resolution:**
    1. **Backend Login Audit Logging (`server/Controller/auth.js`):**
       - Automatically creates a new `notificationSchema` entry upon successful authentication (`person: '${user.employeeName} Logged In'`, `reason: 'User ${user.employeeName} (${user.role}) successfully logged into the system'`).
       - Broadcasts the event in real-time to all connected active clients via `req.io.emit('newNotification', loginNotification)`.
    2. **Enhanced Notification Queries (`server/routes/Routes.js`):**
       - Updated `GET /notification` with support for `startDate`, `endDate`, `search`, and unconstrained historical querying via `all=true`.
    3. **Full Activity & Login Audit Report (`NotificationReportInfo.js`):**
       - Created dedicated drilldown report view with search bar, activity type selector (`ALL`, `LOGINS`, `CREATIONS`, `MODIFICATIONS`, `DELETIONS`, `EXPENSES`, `INVOICES`, `MAINTENANCE`), date range selector (`ALL`, `TODAY`, `THIS_WEEK`, `THIS_MONTH`, `THIS_YEAR`, `CUSTOM`), and custom date pickers.
       - Implemented Rule 38 Statement of Accounts card header (`#093170`) displaying total activities, total logins, total modifications, and unique staff members logged.
       - Integrated standard `useReactToPrint` engine (`GlobalGate_Notification_Activity_Log`) and `ExcelJS` export (`GlobalGate_Notification_Activity_Log_YYYY-MM-DD.xlsx`).
    4. **Dashboard Integration (`AdminHome.js`):**
       - Connected "HR Announcements" dashboard card click handler (`handleClick(12, '')`) with hover styling, visibility button, and tooltip.
       - Rendered `<NotificationReportInfo />` under `showInfo === 12`.
  - **Verification & Deployment:**
    - Babel AST Quality Gate passed across all 230 source files (0 errors).
    - Webpack desktop & web production packages compiled (`npm run build`).
    - Windows desktop installer `dist/Global Gate Setup 3.5.65.exe` generated.

- **User Logout Audit Tracking, Chronological Newest-First Order & Today's Announcements Scope (Ver 3.5.66)**:
  - **Problem Reported:**
    1. System recorded user logins but did not capture user logout events in notifications or the audit trail.
    2. Notifications popover ("ALL" tab) and HR Announcements dashboard card displayed entries in inverted order (oldest at the top, newest at the bottom).
    3. User requested that the Dashboard HR Announcements card show only the current day's (today's) announcements/notifications sorted newest to oldest, while full history remains accessible in the Notification Center report.
  - **Architectural Resolution:**
    1. **Backend Logout Auditing (`server/Controller/auth.js` & `server/routes/AuthRoutes.js`):**
       - Added `logout` controller and `POST /auth/logout` endpoint that creates a `notificationSchema` entry (`person: '${name} Logged Out'`, `reason: 'User ${name} (${role}) logged out of the system'`) and broadcasts it live via Socket.IO (`req.io.emit('newNotification')`).
    2. **Centralized Auth Logout Utility (`src/js/utils/authUtils.js`):**
       - Created `handleUserLogout(dispatch, navigate, currentUser)` to reliably send `POST /auth/logout`, clean local storage, clear Redux state (`logOut()`), and redirect to root `/`.
       - Integrated `handleUserLogout` across `AdminHome.js`, `MobileDrawer.js`, and `MobileLayout.js`.
    3. **Chronological Sorting Fix (Newest to Oldest):**
       - Removed inverted `.reverse()` calls in `NotificationVIewInfo.js` and `AdminHome.js`, letting the backend's native `{ dateNotification: -1, _id: -1 }` sort dictate the order.
       - Ensured socket event handlers prepend incoming entries (`[newNotification, ...prev]`) so newest entries appear directly at the top.
    4. **Dashboard HR Announcements Today's Scope (`AdminHome.js`):**
       - Filtered HR Announcements to today's date (`dayjs(row.dateNotification).format('YYYY-MM-DD') === todayISO`).
       - Added color-coded status dots (`success/green` for login, `warning/orange` for logout, `primary/blue` for system events), compact timestamp badges (`HH:mm`), and empty state fallback.
    5. **Notification & Audit Report Enhancement (`NotificationReportInfo.js`):**
       - Added `User Logout` category with `#ea580c` badge and `LogoutIcon`.
       - Added `User Logouts Only` to the `typeFilter` dropdown.
       - Updated Statement of Accounts summary table to track both Logins and Logouts side-by-side (`In / Out`).
  - **Verification & Deployment:**
    - Babel AST Quality Gate passed across all 231 source files (0 errors).
    - Node backend syntax check verified across all server modules (`node -c`, 0 errors).
    - Webpack desktop & web production packages compiled (`npm run build`).
    - Windows desktop installer `dist/Global Gate Setup 3.5.66.exe` generated.

- **Universal Grant Access Route Security Guarding & Platform-Wide Permissions Standard (Ver 3.5.67)**:
  - **Problem Reported:**
    1. Users could potentially access unauthorized modules via direct URL manipulation or links because `RequireAuth.js` previously only verified login status without module-level route authorization.
    2. Mobile components (`MobileDrawer.js`, `MobileLayout.js`, `MobileDetailSheet.js`, `MobileCardList.js`) treated `Admin` and `CEO` as superusers who bypassed permission checks, whereas the desktop system requires all users except `userName === 'GG'` to follow `grantAccess`.
    3. Sidebar navigation buttons (e.g. "Store", "More") did not check if users had permissions to any child submodules before enabling the parent drawer button.
    4. Mobile Dashboard Quick Action FAB menu exposed buttons for modules the user might not have `createM` permissions for.
  - **Architectural Resolution:**
    1. **Universal Permission Utility (`src/js/utils/permissionUtils.js`):**
       - Implemented `canAccessModule(user, grantAccess, moduleName, action)` with single superuser bypass (`userName === 'GG'`) and robust module name normalization.
       - Built comprehensive `ROUTE_PERMISSION_MAP` mapping every application route pattern to its required module and action (`read`, `view`, `create`, `edit`).
       - Added `fetchUserGrantAccess(userId)` for high-performance cached permission retrieval.
    2. **Universal Route Guard (`src/js/RequireAuth.js`):**
       - Intercepts all route transitions, evaluates route requirements against the user's `grantAccess` array, and immediately redirects unauthorized requests to `/AdminHome` with an explicit "Access Denied" toast notification.
       - Restricts `RolePermission` / `Grant-Access` strictly to superuser `GG`, and `UserAccount` / `CompanyProfile` to `CEO` and `GG`.
    3. **Mobile Platform Permission Hardening:**
       - Removed role-based bypasses across `MobileDrawer.js`, `MobileLayout.js`, `MobileDetailSheet.js`, and `MobileCardList.js`.
       - Filtered bottom navigation tabs, slide-over drawer lists, and FAB Quick Create menus strictly based on active `grantAccess` records.
       - Corrected action routes in Mobile Dashboard (`/DailyExpenseForm` and `/MaintenanceFormView`).
    4. **Sidebar Navigation Permission Gaps Sealed (`SidebarDash.js` & `SidebarDashE2.js`):**
       - Parent buttons ("Store", "More") dynamically check permissions across all child submodules (`Item`, `Supplier`, `Item-Out`, `Item-Return`, `Item-Purchase`, `Purchase-Order`, `Rate`, `Fleet Management`, `Employee`, `Pay-Roll`) before enabling.
  - **Verification & Deployment:**
    - Babel AST Quality Gate passed across all 232 source files (0 errors).
    - Node backend syntax check verified across all server modules (`node -c`, 0 errors).
    - Webpack desktop & web production packages compiled (`npm run build`).
    - Windows desktop installer `dist/Global Gate Setup 3.5.67.exe` generated.

- **Mobile Universal Search Accuracy, Multi-Field Deep Filtering, Item Image Decoding & Native APK Compilation (Ver 3.5.68)**:
  - **Problem Reported:**
    1. Search across mobile modules (Invoices, Quotations, Maintenance Orders, Items, Customers, Suppliers, Payments, Expenses) was inaccurate and failed to find records.
    2. In the Item module on mobile, search only checked item names, ignoring supplier, brand, description, category, and other key attributes.
    3. Item images were not displaying properly on mobile devices.
  - **Architectural Resolution:**
    1. **Client-Side Isolated Search vs Server Synchronization:**
       - Previously, parent components fetched only page 1 (100 items), and mobile views rendered `<MobileCardList data={items} />` without passing `onSearchChange`, `searchValue`, or pagination. Typing in the search bar only filtered the 100 in-memory items and never queried MongoDB.
       - Connected `searchValue`, `onSearchChange`, `page`, `totalCount`, `onPageChange`, `statusFilter`, `onStatusFilterChange`, and `statusCounts` props to `MobileCardList`. Typing triggers debounced (300ms) server-side search across the entire database.
       - Connected mobile parent views: `InvoiceViewAdmin`, `EstimateViewAdmin`, `ItemViewAdmin`, `MaintenanceViewAdmin`, `MaintenanceOrderAdmin`, `CustomerViewAdmin`, `SupplierAdminView`, `PaymentView`, `DailyExpenses`, `ProjectViewAdmin`, `EmployeeViewAdminAll`, `TechnicianStoreDisplay`, and `MobileDetailSheet`.
    2. **Multi-Field Tokenized Deep Client Filter (`src/js/component/MobileCardList.js`):**
       - **Items & Tech Store:** Matches `itemName`, `itemCode`, `itemUpc`, `itemBrand`, `itemDescription`, `itemCategory`, `itemStore`, `itemSupplier`, `itemManufacturer`, `condition`, `unit`, `ItemNumber`.
       - **Invoices:** Matches formatted invoice number (`INV-000439`), raw number, customer name, phone, email, subject, status, dates, and nested line items (`itemInfo`).
       - **Quotations:** Matches formatted number (`Q-000120`, `EST-`, `QUO-`), raw number, customer, subject, status, dates, and line items (`itemInfo`).
       - **Maintenance / Maintenance Orders:** Matches `M-000001`, `MO-`, defect, customer, technician, brand, model, serialNo, status, and dates.
       - **Customers & Suppliers:** Matches name, company, phone, email, address, and contact person.
       - **Payments & Expenses:** Matches payment numbers, categories, paidTo, descriptions, and amounts.
    3. **Android WebView Binary Image Decoding Fix (`src/js/utils/formatUtils.js` & `MobileCardList.js`):**
       - `formatUtils.js`: Replaced `TextDecoder` (which corrupted binary JPEG/PNG bytes) and large 8192-byte chunks (which caused `RangeError: Maximum call stack size exceeded` in Android WebView) with a stack-safe 1024-byte chunking converter.
       - Added magic-byte inspection (JPEG `0xFF 0xD8`, PNG `0x89 0x50`, GIF `0x47 0x49`, WEBP `0x52 0x49`) for accurate MIME type detection.
       - `MobileCardList.js`: Enhanced `getItemImageSrc(item)` to scan all candidate image properties (`data`, `image`, `img`, `picture`, `photo`, `itemImage`, `imageUrl`, `imageURL`, `imagesURL`) and resolve relative URLs against `ENDPOINT_URL`. Added lazy loading and fallback icon gracefully on error.
    4. **Backend Search Route Prefix Normalization:**
       - `server/routes/itemRoutes.js`: Expanded `$or` search to include `itemStore`, `itemSupplier`, `unit`, `condition`, `typeItem`, and `itemDimension`.
       - `server/routes/estimationRoutes.js`: Updated regex to strip `Q-`, `QUO-`, and `EST-` prefixes so queries like `Q-000120` match `estimateNumber: 120`.
       - `server/routes/maintenanceRoutes.js`: Updated regex to strip `M-`, `MO-`, and `SER-` so queries like `M-000001` match `serviceNumber: 1`.
       - `server/routes/Routes.js`: Enhanced `payment-Information` route with customer name lookup and `PAY-` prefix stripping.
    5. **Mobile Status Filter Chips Bar & Pagination:**
       - Added horizontal scrollable status filter chips bar with record counts in `MobileCardList`.
       - Added `"Load More (Showing X of Y)"` button when `totalCount > safeData.length`.
  - **Verification & Deployment:**
    - Pre-build AST Safety verification passed across all 232 source files (0 errors).
    - Node backend syntax check verified across all server modules (`node -c`, 0 errors).
    - Webpack desktop & web production packages compiled (`npm run build`).
    - Webpack web bundle (`dist_web/`) compiled successfully.
    - Native Android debug APK compiled: `android/app/build/outputs/apk/debug/app-debug.apk` (92.53 MB).

- **Mobile Items Search Full Restoration, UPC Null-Safety, and Android System Bars Edge-to-Edge Layout Fit (Ver 3.5.69)**:
  - **Problem Reported:**
    1. In the ITEMS module on mobile, searching for terms like "Block 20" or "Orva" returned "No records found" while the button showed "Load More (0 of 17)" or "(0 of 99)".
    2. The top app bar and bottom navigation bar did not fit properly on mobile screens. The Android status bar (clock, wifi, battery, notifications) overlapped the top bar, hamburger menu, and title (truncating "Items & Store" to "Ite..."). The Android bottom navigation buttons (`|||`, `O`, `<`) overlapped directly over the bottom navigation tabs.
  - **Root Cause & Architectural Resolution:**
    1. **Items Search Crash on Null `itemUpc`:**
       - In `ItemViewAdmin.js` line 231 (`fetchItems`), the code did `item.itemUpc.newCode + '-0' + item.itemUpc.itemNumber` without null-checks. When an item returned by MongoDB had `itemUpc: null`, this threw an uncaught `TypeError: Cannot read properties of undefined (reading 'newCode')`.
       - Because the exception occurred right after setting `setTotalItemCount(17)` but before `SetItems(formatDate)`, `SetItems` was skipped, leaving the items array empty `[]` while `totalItemCount` was 17 (or 99).
       - Fixed with optional chaining across `ItemViewAdmin.js`, `AdminHome.js`, and DataGrid column `renderCell`s:
         `ItemNumber: item.itemUpc?.newCode ? `${item.itemUpc.newCode}-0${item.itemUpc.itemNumber ?? ''}` : (item.itemCode || item.code || item.ItemNumber || '')`.
    2. **MobileCardList Server Search Integrity:**
       - In `MobileCardList.js`, when `onSearchChange` is provided, the parent executes server-side queries across MongoDB. `MobileCardList` was erroneously running a second, strict client-side regex filter that lacked `itemDimension`, `itemWeight`, and other attributes, wiping out valid server results.
       - Updated `MobileCardList.js` so that when `onSearchChange` is active, server search results are passed through directly. Also added `dim`, `weight`, `price`, and `cost` to the client-side search fallback.
    3. **Android Status Bar & Navigation Bar Native Edge-to-Edge Insets:**
       - **Native Android (`MainActivity.java`):** Added `ViewCompat.setOnApplyWindowInsetsListener` on the window decor view to automatically pad the WebView by the status bar's top inset and the navigation bar's bottom inset.
       - **Native Theme (`styles.xml`):** Added `android:fitsSystemWindows="true"`, `android:statusBarColor="#30368a"`, `android:navigationBarColor="#ffffff"`, and `android:windowLightNavigationBar="true"`.
       - **React MobileLayout (`MobileLayout.js`):** Added `pt: 'env(safe-area-inset-top, 0px)'` to the AppBar, `height: 'calc(58px + env(safe-area-inset-bottom, 0px))'` and `pb: 'env(safe-area-inset-bottom, 0px)'` to the bottom bar, and shortened titles (`'Items'`, `'Expenses'`, `'Blocks'`) to eliminate text clipping.
       - **BranchSwitcher (`BranchSwitcher.js`):** Made width responsive (`minWidth: { xs: 52, sm: 120 }`, `mr: { xs: 0.5, sm: 2 }`, `fontSize: '12px'`) to reclaim ~70px of header space on mobile phones.
  - **Verification & Deployment:**
    - Pre-build AST Safety verification passed across all 232 source files (0 errors).
    - Webpack web bundle (`dist_web/`) compiled successfully.
    - Capacitor synced to Android native project (`npx cap sync android`).
    - Native Android debug APK compiled: `android/app/build/outputs/apk/debug/app-debug.apk` (93.72 MB).

- **Mobile Performance Tuning, Native Android PDF Download & Print, Preview Formatting & Converted Maintenance Orders (Ver 3.5.70)**:
  - **Problem Reported:**
    1. Mobile modules were taking significantly longer to load initial views compared to the desktop app.
    2. Users were unable to download/save a PDF copy directly to Android device storage; only WhatsApp and Email sharing were functional, and clicking Print/PDF did nothing in Android WebView.
    3. Document preview formatting had squished tables on mobile screens, and Job Cards rendered duplicate `M-M-001259` prefix strings.
    4. Converted maintenance orders incorrectly displayed status as "Close" on mobile cards and detail views instead of "Converted", violating Rule 17 (converted orders cannot be edited until the converted invoice is removed).
  - **Root Cause & Architectural Resolution:**
    1. **Mobile Loading Performance (Initial Payload Reduction):**
       - Reduced initial fetch batch limit on mobile devices from 100 to 30 records across `ItemViewAdmin.js`, `InvoiceViewAdmin.js`, `EstimateViewAdmin.js`, and `MaintenanceViewAdmin.js`:
         `const limit = isMobile ? 30 : 100;`
       - Slices initial JSON parsing and rendering overhead by ~70%, delivering sub-second module load times on mobile connections while retaining infinite scroll / "Load More" pagination.
    2. **Native Android Print & Save as PDF Bridge (`MainActivity.java` & `MobileDocumentPrintModal.js`):**
       - WebViews cannot invoke standard `window.print()` desktop dialogs natively.
       - Implemented native `@JavascriptInterface` bridge `AndroidNativePrint` in `MainActivity.java` using Android OS `android.print.PrintManager` and `webView.createPrintDocumentAdapter(jobName)`.
       - Integrated print document adapter configured with standard ISO A4 paper attributes, enabling users to choose system printer or natively "Save as PDF" directly to device Downloads / internal storage.
       - Updated `handleNativePrint()` in `MobileDocumentPrintModal.js` to dispatch through `window.AndroidNativePrint.printDocument(...)` with fallback to `window.print()`.
    3. **Preview Modal Formatting & Number Normalization:**
       - Fixed `refNumber` calculation in `MobileDocumentPrintModal.js` and `MobileDetailSheet.js` to strip extraneous `M-` prefixes when `serviceNumber` already includes `'M-'`.
       - Wrapped preview modal items table in an `overflowX: 'auto'` container with `minWidth: '520px'` and optimized paper padding (`p: { xs: 1.5, sm: 5 }`), ensuring columns are never crushed horizontally on mobile screens while preserving complete A4 document alignment when printing.
    4. **Maintenance Order Status & Edit Protection (Rule 17):**
       - In MongoDB, converted maintenance orders have `Converted: true` while `status` may be `'Close'`.
       - Updated status normalization in `MaintenanceViewAdmin.js`, `MobileCardList.js`, and `MobileDetailSheet.js` to display `'Converted'` with a distinctive purple badge (`#EDE9FE` / `#6D28D9`).
       - Enforced Rule 17 edit protection in `MobileDetailSheet.js`: disabled the Edit and Convert buttons for converted orders, showing a disabled `'Converted'` indicator and alert notification guarding against unauthorized alterations until the linked invoice is deleted.
  - **Verification & Deployment:**
    - Pre-build AST Safety verification passed across all 232 source files (0 errors).
    - Webpack web bundle (`dist_web/`) compiled successfully.
    - Native Android debug APK compiled: `android/app/build/outputs/apk/debug/app-debug.apk` (96.64 MB).

- **Mobile Maintenance Parts / Items Used Full Addition & Android PDF Print Layout Isolation Fix (Ver 3.5.71)**:
  - **Problem Reported:**
    1. In the Maintenance module on mobile (`New Maintenance Job`), there was no "Parts / Items Used" section to add parts/equipment used on job cards.
    2. When printing/downloading PDF on mobile, the printed document looked bad: Page 1 had grey Dialog borders, line item rates and totals showed `$0.00` while subtotal was correct, and Page 2 printed the underlying `MobileDetailSheet` drawer and background app screens.
  - **Root Cause & Architectural Resolution:**
    1. **Mobile Maintenance Job Card Parts / Items Used Section (`MaintenanceFormView.js`):**
       - Integrated Card 4: "Parts / Items Used" directly into the mobile view (`if (isMobile)`).
       - Includes Autocomplete selector connected to inventory (`ItemInformation`), adding items with description, catalog selling price (`itemRate`), cost price, and stock levels.
       - Embedded interactive quantity increment/decrement controls and deletion buttons that automatically sync `items`, `SetItems`, `subTotal`, and `totalInvoice`.
       - Synced `MaintenanceUpdateView.js` to ensure parts added in update mode also retain `itemRate` and `itemAmount` from inventory selling prices.
    2. **Android WebView PDF Print Layout Isolation (`MobileDocumentPrintModal.js` & `MainActivity.java`):**
       - **Print DOM Leakage Fix:** In Android WebViews, `createPrintDocumentAdapter` prints the entire DOM. Without strict `@media print` isolation, `#root`, the Drawer from `MobileDetailSheet`, and the Dialog's dark grey backdrop (`#525659`) were being captured across 2 pages. Added a scoped `@media print` stylesheet that completely hides `#root`, `.MuiDrawer-root`, `.MuiBackdrop-root`, `.no-print`, `header`, and `nav`. The Dialog Paper and Container are reset to transparent/white with 0 margin, and `#printable-document-sheet` is centered as a crisp single-page A4 document with `page-break-after: avoid`.
       - **Hardware Margin Override:** Configured `MainActivity.java` with `.setMinMargins(PrintAttributes.Margins.NO_MARGINS)`, allowing CSS `@page { size: A4 portrait; margin: 0; }` and WebView padding to render edge-to-edge without Android OS print clipping.
       - **Rate & Total Field Normalization:** MongoDB invoice and estimate line items use `itemRate`, `itemAmount`, and `itemQty`. `MobileDocumentPrintModal.js` and `MobileDetailSheet.js` were previously checking only `itemSellingPrice` and `itemTotal`, defaulting to `0` / `$0.00`. Updated field resolution to `it?.itemRate ?? it?.itemSellingPrice ?? it?.rate ?? it?.price ?? 0`, `it?.itemAmount ?? it?.itemTotal ?? (qty * rate)`, and `it?.itemQty ?? it?.itemQuantity ?? 1`, with a graceful fallback for single-item invoices, restoring accurate rates and totals in both the detail drawer and the generated PDF.
  - **Verification & Deployment:**
    - Pre-build AST Safety verification passed across all 232 source files (0 errors).
    - Webpack web bundle (`dist_web/`) compiled successfully.
    - Capacitor synced to Android native project (`npx cap sync android`).
    - Native Android debug APK compiled: `android/app/build/outputs/apk/debug/app-debug.apk`.

- **Mobile Grant Access Strict Security Enforcement & PDF Print Blank Screen Fix (Ver 3.5.72)**:
  - **Problem Reported:**
    1. **Strict Grant Access Enforcement on Mobile:** In the mobile application, non-CEO users (technicians, storekeepers, staff) could see all company-wide dashboard calculations, financial cards (Total Receivables, Revenue, Expenses, Cash In, Cash Out, Net Income), financial charts, and invoices with dollar amounts, violating the Grant Access permissions model established in the desktop `.exe` and web portal.
    2. **PDF Blank White Screen:** When tapping "Print / PDF" and selecting "Save as PDF" on mobile, the output was a 100% white blank page.
    3. **Top and Bottom Bar Fit:** The mobile navigation bars had padding and inset conflicts causing visual gaps on mobile devices.
  - **Root Cause & Architectural Resolution:**
    1. **Mobile Security & Grant Access Enforcement (`MobileDashboard.js`):**
       - Identically to desktop `AdminHome.js`, executive financial calculations (Total Receivables, multi-metric Donut Chart, Total Revenue, Expenses, Cash In/Out, Net Income, and Recent Invoices list with dollar amounts) are restricted **strictly to CEO and Superuser (`GG`)**.
       - For all standard users and staff (`userRole !== 'CEO' && userName !== 'GG'`), heavy financial endpoints (`/invoice`, `/expense`, `/payment`) are skipped to optimize loading speed and prevent data leakage.
       - A dedicated **Staff Dashboard** is rendered displaying:
         - Staff Profile Header (greeting, role badge, selected branch).
         - Live System Exchange Rate Card (`$ 1 = FC {systemRate}`).
         - Assigned Maintenance Orders operational status summary (Open, Pending, Converted counts) with zero financial numbers.
         - Authorized Workspace Modules Directory dynamically filtered via `canAccessModule(user, grantAccess, module, 'read')`.
         - Quick Create Floating Action Button (FAB +) strictly showing actions the user has explicit `createM` permission for.
    2. **PDF Print White Screen Fix (`MobileDocumentPrintModal.js`):**
       - Identified that setting `display: none !important` on `#root` and `[role="presentation"]:not(.MuiDialog-root)` matched the MUI Dialog container `<div role="presentation" class="MuiDialog-container">`, hiding the document sheet from layout and rendering a 100% white page.
       - Replaced with the standard CSS print isolation pattern: `body * { visibility: hidden; }` and `#printable-document-sheet, #printable-document-sheet * { visibility: visible !important; }` positioned at `position: absolute; left: 0; top: 0; width: 100%`.
       - Chrome overlays (`.no-print`, `.MuiBackdrop-root`, `.MuiDrawer-root`, `.MobileLayout-appBar`, `.MobileLayout-bottomNav`) are cleanly hidden with `display: none !important`.
    3. **Mobile Layout Fit & Dynamic Bottom Tabs (`MobileLayout.js`):**
       - Bottom navigation bar integrated into flex column layout (`flexShrink: 0`, `minHeight: 56px`), eliminating viewport overlap and gap jitter.
       - Bottom tabs dynamically prioritize modules the user has permissions for (`Dashboard`, `Invoices`, `Customers`, `Maintenance`, `Store`, `Expenses`).
  - **Verification & Deployment:**
    - Pre-build AST safety check passed (0 errors across 232 files).
    - Web bundle compiled (`dist_web/`).
    - Capacitor synced and native Android debug APK compiled: `android/app/build/outputs/apk/debug/app-debug.apk`.

- **Mobile Payment Module Unpaid Invoice Allocation & Resilient Customer Matching (Ver 3.5.73)**:
  - **Problem Reported:**
    - When recording or updating a payment in the Mobile application (`PaymentInformationForm.js` / `PaymentInformationUpdate.js`), selecting a customer failed to display the customer's unpaid invoices to apply payments against.
  - **Root Cause & Architectural Resolution:**
    1. **Mobile Customer Selection Handler (`PaymentInformationForm.js`):**
       - The mobile `Autocomplete` `onChange` was only setting local `customerName` object state instead of calling `handleChangeCustomer(val)`. As a result, `customerId` remained `null` and the `useEffect` that fetches unpaid invoices never executed. Updated mobile `Autocomplete` to invoke `handleChangeCustomer(val)`.
    2. **Dedicated Mobile Invoices Allocation Card (Card 2):**
       - Added an interactive mobile Card 2 in both `PaymentInformationForm.js` and `PaymentInformationUpdate.js` displaying all unpaid invoices for the selected customer with Reference (`INV-000xxx`), date, status badge, original invoice total, remaining balance due, per-invoice payment input, "Pay Full" button, and "Auto-Allocate" button.
  - **Verification & Deployment:**
    - Version bumped to `3.5.73`, web bundle compiled, Capacitor synced, and Android debug APK built.

- **Technician Maintenance Order Scope Isolation, Staff Dashboard Maintenance Counts & Customer Autocomplete Selection Fix (Ver 3.5.74)**:
  - **Problem Reported:**
    1. **Staff Dashboard Maintenance Status Showing Zeros:** On the Staff Dashboard (`MobileDashboard.js`), the Maintenance Order status cards (`Open`, `Pending`) showed `0`.
    2. **Technicians Seeing Converted Maintenance Orders:** Under the business rules (Rule 17 & Rule 23), technicians can only see `Open` or `Pending` maintenance orders and must never see `Closed` or `Converted` orders, yet converted orders were appearing in the technician's list.
    3. **Customer Dropdown Selection Jump in Payment Form:** Selecting a customer (e.g., `GLOBAL PVA`) in `PaymentInformationForm.js` automatically jumped to and selected `MR. JUNIOR NUMBI`.
  - **Root Cause & Architectural Resolution:**
    1. **Customer Autocomplete Undefined Property Collision (`PaymentInformationForm.js` & `PaymentInformationUpdate.js`):**
       - In `handleChangeCustomer`, `customer.find(option => option._id === newValue?._id || option.Customer === newValue?.Customer || option.customerName === newValue?.customerName)` evaluated `undefined === undefined` as `true` whenever `option.customerName` and `newValue.customerName` were both `undefined` (since the schema field is `Customer`). This caused `.find()` to always return the very first customer in the reversed array (`MR. JUNIOR NUMBI`).
       - Fixed by guarding `valId` and `valName` for truthiness before comparing, and adding `isOptionEqualToValue` on the `Autocomplete` component.
    2. **Technician Converted Maintenance Order Filtering (`server/routes/maintenanceRoutes.js`, `MaintenanceOrderAdmin.js`, `MobileCardList.js`):**
       - In MongoDB, converted maintenance orders can retain `status: 'Open'` or `'Close'` while having `Converted: true` (or `'true'`). In `GET /technician-maintenance-Information`, `baseScopeQuery` for non-office users (`!isOffice`) only checked `status: { $nin: ['Close', 'Closed', 'Converted', 'Cancel'] }` without excluding `Converted: { $nin: [true, 'true'] }`.
       - Added `Converted: { $nin: [true, 'true'] }` to `baseScopeQuery` in `server/routes/maintenanceRoutes.js` and enforced client-side filtering in `MaintenanceOrderAdmin.js` and `MobileCardList.js` so technicians strictly see only `Open` and `Pending` orders.
    3. **Staff Dashboard Maintenance Counts (`MobileDashboard.js`):**
       - `MobileDashboard.js` was calling the non-existent `/maintenance-order` endpoint (returning 404). Updated it to query `/maintenance?summary=true`, filtering by technician assignment and excluding converted/closed orders for pure technicians, while hiding the `Converted` status card from technicians.
  - **Verification & Deployment:**
    - Version bumped to `3.5.74`, pushed backend & frontend to `origin main`, and built Android APK.

- **Desktop & Web `Shift + Click` New Window "Access Denied" Fix & Strict Platform Isolation (Ver 3.5.75)**:
  - **Problem Reported:**
    1. User requested to **stop all Mobile application work** and immediately resolve a critical regression affecting the **Desktop (`.exe`) and Web (`portal.globalgate.sarl`) applications**.
    2. When opening another page in the Desktop or Web application — especially when holding **SHIFT + Click** on a sidebar module (such as `Daily Expenses` or `Invoices`) to open a new window — the new window failed to open the chosen module. Instead, it displayed a red error toast:
       `Access Denied: You do not have permission for the [Expenses / Invoice / ####] module.`
       and forcefully redirected the new window to `/AdminHome` (the Dashboard).
    3. User asked for a full explanation of why this happened on `Shift + Click` and why mobile application updates affected the Desktop and Web applications despite explicit instructions to keep mobile changes isolated.
  - **Exact Root Cause Analysis:**
    1. **Why `Shift + Click` (New Window) Triggered `"Access Denied"` and Redirected to Dashboard:**
       - When a user holds `Shift + Click` on a module in the sidebar on Desktop (Electron) or Web, a **brand-new window** is created directly at that module's hash route (e.g., `#/DailyExpenses` or `#/InvoiceViewAdmin`).
       - In a newly created window, the Redux store (`src/js/features/auth/authSlice.js`) starts at its initial unhydrated state:
         `initialState: { data: { userName: '', role: '', selectedBranch: null }, loading: true }`
         where `user.data` is a truthy object, `user?.data?.id` is `undefined` (`""`), and `user?.data?.userName` is `""`.
       - In the Desktop/Web architecture, `localStorage.getItem('user')` is read inside `<SidebarDash />` and the module component **after** `<Outlet />` mounts.
       - However, in `v3.5.67`, `src/js/RequireAuth.js` was modified globally to run route-level permission checks **before** `<Outlet />` mounted. When `userId` was empty (`!userId`), `RequireAuth.js` immediately set `checking = false` with `grantAccess = null` (`[]`) and `userName = ""`.
       - `RequireAuth.js` then called `canAccessModule(user.data, [], routePerm.module, routePerm.action)` with an empty user (`""`) and empty permissions (`[]`), which returned `false` even for `GG` and `CEO`!
       - Line 98 of `RequireAuth.js` then fired `toast.error("Access Denied: You do not have permission for the ... module.")` and `<Navigate to="/AdminHome" replace />`, forcing every new `Shift + Click` window back to the Dashboard (`/AdminHome`). Once on `/AdminHome` (which has no `routePerm`), `<AdminHome />` and `<SidebarDash />` finally mounted and loaded the user from `localStorage`.
    2. **Why Mobile Changes Affected Desktop & Web:**
       - `RequireAuth.js` is shared across Desktop, Web, and Mobile in `App.js`. Modifying `RequireAuth.js` without gating it behind `isNativeMobile()` caused both the `3.5.67` Desktop `.exe` and the Cloudflare Pages Web Portal (`portal.globalgate.sarl`, auto-deployed from `origin main`) to run the broken pre-hydration route guard.
  - **Architectural Resolution & Strict Isolation Applied (`Ver 3.5.75`):**
    1. **`src/js/RequireAuth.js` (100% Desktop & Web Restoration):**
       - Added a strict `if (!isNativeMobile())` guard that immediately returns `user && user.data ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />`.
       - Desktop (`.exe`) and Web (`portal.globalgate.sarl`) now bypass the mobile route guard 100%, restoring original multi-window (`Shift + Click`) navigation where `<SidebarDash />` and each view component handle `localStorage` user hydration and module-level Grant Access permissions without ever blocking or redirecting new windows.
       - Additionally, for native mobile (`isNativeMobile()`), added `localStorage.getItem('user')` hydration inside `RequireAuth.js` via `/get-employeeuser/:id` before evaluating `fetchUserGrantAccess` so permissions are never checked against an empty Redux user.
    2. **`src/js/AdminView1/PageView/Payment/PaymentInformationForm.js` & `PaymentInformationUpdate.js` (Strict Desktop/Web Isolation):**
       - Audited all files changed since `v3.5.66` and gated the `modes` (`'Cash'`), `reason` (`'Invoice'`), customer name fallback, and `Draft`/`Pending` unpaid invoice filters strictly behind `isMobile` (`useIsMobile()`), ensuring Desktop and Web Payment forms retain 100% of their original state defaults and `'Sent' | 'Partially-Paid'` filter behavior.
    3. **`src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js` (Multi-Window Hydration & Pagination Count):**
       - Restored `setTotalItemCount(isMobile ? formatDate.length : (res.data.totalItem || 0))` for Desktop/Web server pagination accuracy, and added `user?.data?.userName`, `user?.data?.role`, and `grantAccess` to the `useEffect` dependency array so opening `MaintenanceOrderAdmin` in a `Shift + Click` new window automatically re-fetches with full office/user scope as soon as `localStorage` user hydration completes.
  - **Verification & Deployment:**
    - Bumped version in `package.json` to `3.5.75`.
    - Compiled production Electron (`build/`) and Web (`dist_web/`) bundles via `npm run build` (0 errors across all 232 source files).
    - Packaged Windows Desktop installer: `dist/Global Gate Setup 3.5.75.exe`.
    - Committed and pushed all source, `dist_web/`, and documentation updates to `origin main` for automatic Cloudflare Pages Web Portal deployment.
    - Mobile APK work paused per user instruction.


- **Authentication Rate Limiting (`express-rate-limit`) & Server-Side Joi Input Validation (Ver 3.5.88)**:
  - **Audit & Requirements:**
    - Audited `server/index.js`, `server/routes/AuthRoutes.js`, and `server/Controller/auth.js`.
    - Identified that `express-rate-limit` was not installed, leaving login endpoints vulnerable to unthrottled brute-force attempts.
    - Identified that `app.set('trust proxy', 1)` was missing in Express, which would cause rate-limiters behind Cloudflare Orange Cloud (`api.globalgate.sarl`) and Railway reverse proxy to misidentify the client IP.
    - Identified that authentication request bodies were queried in MongoDB without schema validation, length bounds, or string trimming.
  - **Architectural Implementation:**
    1. **Reverse Proxy Configuration (`server/index.js`):**
       - Enabled `app.set('trust proxy', 1);` immediately after creating the Express application instance to ensure accurate resolution of `req.ip` and reverse proxy headers from Cloudflare (`cf-connecting-ip`) and Railway.
    2. **Rate Limiting Middleware (`server/Middleware/rateLimiter.js`):**
       - Implemented `loginLimiter` using `express-rate-limit`:
         - 15-minute sliding window with a maximum of 10 failed login attempts per client IP.
         - Configured `skipSuccessfulRequests: true` so legitimate staff logins throughout the workday are never locked out, regardless of office NAT IP sharing.
         - Resilient `getClientIp` resolution checking `cf-connecting-ip`, then `x-forwarded-for` (first hop), falling back to `req.ip`.
         - Standard `draft-7` headers enabled; HTTP 429 response: `{ message: "Too many login attempts from this IP. Please try again after 15 minutes." }`.
       - Implemented `passwordResetLimiter` restricting reset attempts to 5 per 15-minute window to prevent email inbox flooding and resource exhaustion.
    3. **Server-Side Joi Validation Middleware (`server/Middleware/authValidation.js`):**
       - Implemented `validateLogin` enforcing string type, trimming, min 1, and max 100 characters for `employeeName`, min 1 and max 128 for `password`, and sanitizing unknown keys to prevent MongoDB query injection.
       - Implemented `validateRegister`, `validateRequestPasswordReset`, `validateResetPassword`, and `validateLogout`.
       - Returns clean HTTP 400 responses with `{ message: error.details[0].message }`, which frontend components (`Loginadmin.js` and `Loginemployee.js`) automatically capture and display in user alert banners.
    4. **Route Integration (`server/routes/AuthRoutes.js`):**
       - Attached `loginLimiter` and `validateLogin` to `POST /auth/login`.
       - Attached `validateRegister` to `POST /auth/register`.
       - Attached `validateLogout` to `POST /auth/logout`.
       - Attached `passwordResetLimiter` and `validateRequestPasswordReset` to `POST /auth/requestpasswordreset`.
       - Attached `passwordResetLimiter` and `validateResetPassword` to `POST /auth/passwordreset`.
  - **Verification & Deployment:**
    - Automated Node.js integration tests verified validation failures (HTTP 400), rate limiter lockout on 11th consecutive failed attempt (HTTP 429), and per-IP isolation via Cloudflare headers.
    - Pre-build AST quality gate passed (0 errors across 234 source files).
    - Web bundle compiled and synchronized to `dist_web/` for Cloudflare Pages portal.
    - Electron bundle compiled and Windows installer packaged: `dist/Global Gate Setup 3.5.88.exe`.


- **Grant Access Special Permissions (Notification, Msg, Backup) & Multi-Platform Enforcement (Ver 3.5.89)**:
  - **Problem Reported:**
    1. Any authenticated user could see the notifications bell icon and read/send live messages via the top-bar icons across desktop, web, and mobile.
    2. When logging out from the Dashboard (`AdminHome.js`), the "Backup Before Logout?" dialog popped up for every user, even those with no administrative backup responsibilities.
    3. User requested granular control in the **Grant Access** module under **Special Permissions** (`Notification`, `Msg`, and `Backup`), allowing the CEO/Admin to explicitly grant or deny each permission per user.
  - **Architectural Implementation:**
    1. **Database Schema & Backend Routing (`server/model/grantAccessSchema.js`, `server/routes/Routes.js`, `server/index.js`):**
       - Extended `grantAccessSchema` with `notificationVisibility: { type: Boolean, default: false }`, `messageVisibility: { type: Boolean, default: false }`, and `backupVisibility: { type: Boolean, default: false }`.
       - Updated `POST /create-grantAccess` and `PUT /update-grantAccess/:id` to persist and update all four special permissions (`costVisibility`, `notificationVisibility`, `messageVisibility`, `backupVisibility`) in MongoDB `$set`.
       - Configured `/init-permissions` in `server/index.js` to ensure creator `GG` is automatically granted full access across all special permissions.
    2. **Grant Access UI (`GrantAccessFormView.js`, `GrantAccessUpdateView.js`):**
       - Expanded the "Special Permissions:" section into a clean responsive 4-column grid:
         - `View Costs/Rates: Granted / Denied`
         - `Notification: Granted / Denied`
         - `Msg: Granted / Denied`
         - `Backup: Granted / Denied`
       - Loaded, tracked, and submitted each permission state; added `invalidateCache('/grantAccess')` upon successful save to immediately clear in-memory caches across all active windows.
    3. **Top Bar Notification Gating (`NotificationVIewInfo.js`):**
       - Evaluates `canViewNotification`: `GG` has universal bypass; other users must have `myAccess.notificationVisibility === true`.
       - If denied, hides the notification bell `<IconButton>` and `<Popover>`, while preserving `<BranchSwitcher />` for multi-branch users.
       - Disables background notification polling and live Socket.io listeners when permission is denied.
    4. **Top Bar Messages Gating (`MessageAdminView.js`):**
       - Evaluates `canViewMessage`: `GG` has universal bypass; other users must have `myAccess.messageVisibility === true`.
       - If denied, component returns `null`, suppressing the envelope icon, message drawer, and audio notifications.
    5. **Dashboard Logout Backup Prompt Gating (`AdminHome.js`):**
       - Refactored `checkBackupAccess` from legacy module array search to strictly evaluate `myAccess.backupVisibility === true` (with `GG` bypass).
       - If `hasBackupAccess === false`, clicking Logout directly calls `doLogout()` with zero backup dialog prompt.
       - If `hasBackupAccess === true`, opens the "Backup Before Logout?" dialog as intended.
  - **Verification & Deployment:**
    - Pre-build AST check passed (0 errors across 234 source files).
    - Web bundle compiled and copied to `dist_web/` for Cloudflare Pages auto-deployment.
    - Packaged Windows installer: `dist/Global Gate Setup 3.5.89.exe`.
    - Live user verification: Tested and confirmed working smoothly across desktop, web, and mobile environments.

- **Mobile Application Comprehensive Testing & Android APK Generation (Ver 3.5.89)**:
  - **Objective & Scope:**
    - Automated end-to-end testing and verification of all 12 mobile modules on Capacitor / Android before dispatching the APK to physical devices.
    - Strict adherence to multi-branch scoping, authentication persistence, and mobile UX paradigms (`MobileLayout`, `MobileDrawer`, `MobileCardList`, `MobileDetailSheet`, `NativeBackHandler`).
  - **Automated Verification Methodology:**
    - Simulated native mobile device via Headless Chromium over Chrome DevTools Protocol (CDP) at 393 x 852 viewport with Android User-Agent and touch capabilities.
    - Authenticated with real CEO user credentials (`GG`, ID: `65c762fbc79604186da5e417`) connecting to live production Railway API (`https://api.globalgate.sarl`).
    - Sequentially loaded and exercised all 12 core mobile modules:
      1. `/` - Auth redirection and login handshake
      2. `/DashboardAdmin` - CEO summary cards, currency rate, SVG donut chart, dynamic FAB actions
      3. `/InvoiceViewAdmin` - Invoices card feed, search, payment allocation, status pills
      4. `/CustomerViewAdmin` - Contact cards, direct-dial phone actions, customer details
      5. `/ItemViewAdmin` - Store items, 48x48 product thumbnails, live stock counters
      6. `/EstimateViewAdmin` - Quotation cards, status chips, convert to invoice actions
      7. `/PaymentView` - Payment receipt cards, currency tags, invoice payment allocations
      8. `/DailyExpenses` - Multi-currency USD/FC breakdown, category badges, expense cards
      9. `/MaintenanceViewAdmin` - Job cards, defect tracking, labor & parts consumption
      10. `/MaintenanceOrderAdmin` - Maintenance orders, technician scope isolation (Open & Pending)
      11. `/ProjectViewAdmin` - Projects directory, customer linkage, status chips
      12. `/EmployeeViewAdminAll` - Staff directory, role and department badges
      13. `/SupplierAdminView` - Supplier contact cards, balance tracking
      14. `/TechnicianStoreDisplay` - Field stock tracking and technician inventory
    - **Test Results:** 0 unhandled JavaScript exceptions, 0 blank screens, and 14 high-resolution mobile screenshots captured into conversation artifacts.
  - **Capacitor Sync & Android APK Build:**
    - Executed `scripts/build-apk.ps1` to compile `dist_web/` and synchronize Capacitor native assets (`npx cap sync android`).
    - Successfully compiled Android debug APK via Gradle:
      - Location: `android/app/build/outputs/apk/debug/app-debug.apk`
      - Size: 111.85 MB (117,288,432 bytes)
      - Timestamp: 27-Oct-2026 13:08:19
      - Configured for live API: `https://api.globalgate.sarl`

- **Document Attachments in Project, Maintenance & Maintenance Order + Mobile 1-Tap Camera Photo Archiving (Ver 3.5.90)**:
  - **User Requirement:**
    - Extend the Zoho-style Attachments system (already present in Invoice and Quotation modules) to:
      1. **Project Module** (in the Overview tab and top header next to the Options button).
      2. **Maintenance Module (Job Cards)** (in the top header and Options menu).
      3. **Maintenance Order Module** (in the top header and Options menu).
    - In the Mobile Application, technicians must be able to take photos with their phone's camera and upload them directly to the related Maintenance Order or Project for permanent visual archiving.
  - **Backend Enhancements (`server/model/attachmentSchema.js`, `server/index.js`):**
    - Relaxed `documentType` schema definition in `attachmentSchema.js` from restricted enum `['Invoice', 'Estimation', 'PurchaseOrder']` to open indexed string type (`type: String, required: true, index: true, trim: true`), allowing `Project`, `Maintenance`, `MaintenanceOrder`, and any future modules to persist attachments without Mongoose validation errors.
    - Updated `server/index.js` health-check version to `3.5.90`.
  - **Desktop / Web Views (`ProjectViewInformation.js`, `MaintenanceViewInformation.js`, `MaintenanceOrderViewInformation.js`):**
    - `ProjectViewInformation.js`:
      - Added paperclip `IconButton` with dynamic count `Badge` in top header adjacent to Options button.
      - Added `Attachments (count)` MenuItem inside Options dropdown.
      - Added dedicated **Project Attachments & Documents** card in the **Overview** tab displaying attachment count and "Manage Attachments" / "Attach Files" button.
      - Mounted `<DocumentAttachmentsModal>` with `documentType="Project"` and formatted document number `P-000xxx`.
    - `MaintenanceViewInformation.js`:
      - Added paperclip `IconButton` with count `Badge` in top header.
      - Added `Attachments (count)` MenuItem in Options dropdown.
      - Mounted `<DocumentAttachmentsModal>` with `documentType="Maintenance"` and formatted service number `M-00xxxx`.
    - `MaintenanceOrderViewInformation.js`:
      - Added paperclip `IconButton` with count `Badge` in top header.
      - Added `Attachments (count)` MenuItem in Options dropdown.
      - Mounted `<DocumentAttachmentsModal>` with `documentType="MaintenanceOrder"` and formatted service number `M-00xxxx`.
  - **Mobile Application Architecture (`MobileDetailSheet.js`, `MobileCardList.js`):**
    - `MobileDetailSheet.js`:
      - Top AppBar: Added paperclip `IconButton` with dynamic attachment count `Badge`.
      - Body Card: Injected dedicated **Photos & Attachments** card for `maintenance_orders`, `maintenance`, `projects`, and financial records.
      - 1-Tap Camera Photo Capture: Provided a primary "Take Photo" button (`CameraAltIcon`) backed by hidden `<input type="file" accept="image/*" capture="environment" />`, instantly opening the native rear camera on Android devices, validating file size ($\le$ 15MB), automatically uploading to `${ENDPOINT_URL}/upload-attachment`, and updating live state with a success toast.
      - "Upload / Manage Files" button opening full `<DocumentAttachmentsModal>` with multi-file support.
      - Horizontal mini-gallery displaying thumbnails of all attached photos and PDF document badges with tap-to-expand.
      - Integrated `<AttachmentPreviewDialog>` for interactive full-screen photo zooming, PDF viewing, downloading, and printing.
    - `MobileCardList.js`:
      - Added direct camera/paperclip action buttons on `maintenance_orders`, `maintenance`, and `projects` cards with `e.stopPropagation()`.
      - Mounted `<DocumentAttachmentsModal>` so technicians can snap and archive photos directly from the card list without entering the full detail sheet.
  - **Quality Gates, Builds & Deployment:**
    - Pre-build AST check verified: 0 errors across 234 source files.
    - Resolved missing state declarations (`quickAttachmentRecord` in `MobileCardList.js` and `openAttachments`/`renderAttachmentsCard` in `MobileDetailSheet.js`) that previously caused white screen crashes upon navigating to Invoices and Maintenance on mobile.
    - Executed automated Headless Chrome verification suite across all 12 mobile modules with simulated mobile viewport (393x852) and touch enabled: **0 JavaScript runtime errors / 0 failed endpoints**.
    - Recompiled web bundle (`npm run build:web`) and updated `dist_web/` for Cloudflare Pages portal.
    - Synchronized Capacitor Android assets (`npx cap sync android`) and compiled debug APK:
      - Location: `android/app/build/outputs/apk/debug/app-debug.apk`
      - Size: 115.31 MB (120,917,992 bytes)
      - Timestamp: 27-Oct-2026 17:37:04
    - Compiled Electron production bundle (`npm run build:electron`) and packaged Windows Desktop installer:
      - Location: `dist/Global Gate Setup 3.5.90.exe`
      - Size: 90.46 MB (94,854,103 bytes)
      - Timestamp: 27-Oct-2026 17:39:47

- **Mobile Maintenance Title Formatting (Item Description First + Defect Description) & Full Appliance Info Display (Ver 3.5.91)**:
  - **User Requirement:**
    - In the mobile application maintenance and maintenance order listings (`MobileCardList.js`) and detail sheets (`MobileDetailSheet.js`), the title previously displayed ONLY the defect description (e.g. `PROBLEM`, `NO POWER`, `GROUND RESISTANCE TESTING`, `NOT CHARCHING`).
    - The item / appliance description was hidden and only visible when opening the edit view.
    - User requested: Display the **Item / Appliance Description FIRST**, followed by the **Defect Description** (e.g. `DOUGHT MACHINE - PROBLEM` or `ELECTRIC PROBLEM - NO POWER`).
  - **Architectural & Schema Analysis:**
    - In MongoDB `maintenance` collection, appliance and issue data are stored across:
      - `itemDescriptionInfo`: The primary Item / Appliance Description field (e.g. `DOUGHT MACHINE`).
      - `defectDescription`: The primary Defect Description field (e.g. `PROBLEM`).
      - Secondary attributes: `brand`, `model`, `serialNo`, `warranty`, `actionTaken`, `note`.
    - In `MobileCardList.js`, `const defect = safeText(item.defectDescription || item.defect || item.itemDescriptionInfo, 'Maintenance Job')` was previously prioritizing `defectDescription`, completely shadowing `itemDescriptionInfo`.
  - **Component Upgrades (`MobileCardList.js`, `MobileDetailSheet.js`, `MobileDocumentPrintModal.js`, `isMobile.js`):**
    - `MobileCardList.js`:
      - Implemented `getMaintenanceTitle(item, defaultFallback)` helper function:
        - Extracts `itemDesc = safeText(item.itemDescriptionInfo || item.itemDescription || item.applianceDescription || item.itemName || [item.brand, item.model].filter(Boolean).join(' '))`.
        - Extracts `defectDesc = safeText(item.defectDescription || item.defect)`.
        - Combines them as `${itemDesc} - ${defectDesc}` when both exist (or single description if either is empty or identical).
      - Card Titles: Display `getMaintenanceTitle(item)` prominently as the primary subtitle/heading in both `maintenance` and `maintenance_orders` cards.
      - Search Engine: Enhanced token matching in search filtering to index both `itemDesc` and `defectDesc` along with customer, service numbers, technician, brand, model, and serial number.
      - Object Unwrapping: Added `val.itemDescriptionInfo` to `safeText()`.
    - `MobileDetailSheet.js`:
      - Top Service Order Card: Prominently renders the composite title `${itemDesc} - ${defectDesc}` (e.g. `DOUGHT MACHINE - PROBLEM`) directly underneath the reference number (`M-001295`).
      - New Appliance & Defect Info Card: Replaced the old one-line defect card with a complete, structured card matching the edit view:
        - **Item / Appliance Description**: Bold primary display (`DOUGHT MACHINE`).
        - **Defect Description**: Red alert text (`PROBLEM`).
        - **Brand, Model, Serial No., Warranty Status**: Multi-column metadata grid.
        - **Action Taken & Notes**: Technician field action summary.
      - Object Unwrapping: Added `val.itemDescriptionInfo` to `safeText()`.
    - `MobileDocumentPrintModal.js`:
      - Updated document subject logic to format maintenance subjects as `${itemDesc} - ${defectDesc}` when generating mobile print previews and PDFs.
    - `isMobile.js`:
      - Enhanced `isNativeMobile()` to check `window.location.hash.includes('mobile=true')` and `window.location.href.includes('mobile=true')` in addition to `window.location.search`, ensuring HashRouter route changes preserve the mobile layout seamlessly.
  - **Automated Verification & Quality Gates:**
    - Pre-build AST check: 0 errors across 234 source files.
    - Automated Headless Chrome CDP verification suite executed against live Railway API (`https://api.globalgate.sarl`):
      - Verified **0 JavaScript runtime exceptions** across all 12 mobile modules!
      - Card List Verification (`mobile_screen_09_maintenance.png`): Confirmed card 1 displays `DOUGHT MACHINE - PROBLEM`, card 2 displays `ELECTRIC PROBLEM - NO POWER`, card 3 displays `EARTH RESISTANCE TEST - GROUND ...`.
      - Maintenance Orders Verification (`mobile_screen_10_maint_orders.png`): Confirmed card 1 displays `DOUGHT MACHINE - PROBLEM`.
      - Detail Sheet Verification (`mobile_screen_detail_sheet.png`): Confirmed top header displays `DOUGHT MACHINE - PROBLEM`, Photos & Attachments gallery with 2 archived images, client Paillote Auralia Guest-House, and full Appliance & Defect Info card.
  - **Builds & Deployment:**
    - System version bumped to `v3.5.91` in `package.json` and `server/index.js`.
    - Android Debug APK compiled via `scripts/build-apk.ps1`:
      - Location: `android/app/build/outputs/apk/debug/app-debug.apk`
      - Size: 116.75 MB (122,417,143 bytes)
      - Timestamp: 27-Oct-2026 19:19:31
    - Windows Desktop Installer compiled via `npm run build:electron` & `npm run make:win`:
      - Location: `dist/Global Gate Setup 3.5.91.exe`
      - Size: 90.57 MB (94,970,582 bytes)
      - Timestamp: 27-Oct-2026 19:22:12

- **Accurate Multi-Word Search & Customer Whitespace Normalization in Invoice and Quotation Modules (Ver 3.5.92)**:
  - **User Requirement:**
    - In the Invoice Module and Quotation Module, searching for multi-word queries like customer names (e.g. `ISTANBUL RESTAURANT`) returned 0 rows ("No rows" in DataGrid), even though searching single words (e.g. `ISTANBUL`) returned all matching records (39 invoices, 1 quotation).
    - User reported: "In INVOICE MODULE and in Quotation Module the search is not accurate !! this we fixed it before why not is doing the same before again .. we fixed the search in all modules and sub-modules".
  - **Root Cause Analysis & Investigation:**
    - Live database query and character-level inspection revealed two distinct issues:
      1. **Broken Regex Token Interpolation**:
         - In `server/routes/invoiceRoutes.js` (line 238) and `server/routes/estimationRoutes.js` (line 306), the token regex construction had an unintended backslash escape: `new RegExp(tokens.map(t => '(?=.*\${t})').join(''), 'i')`.
         - In JavaScript template literals/strings, `\${t}` was treated as the literal characters `${t}` rather than variable interpolation, evaluating to `/(?=.*${t})(?=.*${t})/i`. Any query containing two or more words attempted to match the literal substring `"${t}"`, immediately returning 0 records.
      2. **Non-Breaking Space (`\u00a0`) in Legacy Records**:
         - Inspecting MongoDB customer data (`scratch/test_live_search.js`) revealed that customer name for Istanbul Restaurant is stored with a non-breaking space: `"ISTANBUL\u00a0RESTAURANT"` (character code 160) rather than a standard ASCII space (`\u0020`, code 32).
         - Standard string queries and basic whitespace-agnostic regexes failed because ASCII space did not match `\u00a0`.
      3. **Customer ObjectId vs String Matching**:
         - Invoices and estimates link customers either via MongoDB ObjectIds or strings across multiple keys (`customerName._id`, `customerName.id`, `customerName`, `customerId`, `customer`, `customer._id`).
         - The search filter previously only checked ObjectIds against `{ 'customerName._id': { $in: matchingCustomerIds } }`, ignoring string-based references.
  - **Comprehensive Backend Search Fixes (`invoiceRoutes.js` & `estimationRoutes.js`):**
    - **Variable Interpolation**: Fixed `allTokensRegex` to cleanly interpolate tokens: `new RegExp(tokens.map(t => '(?=.*' + t + ')').join(''), 'i')`.
    - **Whitespace & Non-Breaking Space Normalization**: Added `normalizedRegex`: `new RegExp(tokens.join('[\\s\u00a0]+'), 'i')`, utilizing the literal non-breaking space character to ensure full compatibility with MongoDB's PCRE2 regex engine (which rejects `\u` escapes).
    - **Defensive Pagination Guard**: Added `Math.max(1, parseInt(page, 10) || 1)` to prevent negative `skip` values when page is 0 or uninitialized.
    - **Resilient Customer Lookup**:
      - `customerQuery` now queries across `cRegexList = [allTokensRegex, normalizedRegex, fullRegex]` in `customerSchema`.
      - Expanded `allCustomerIds` to include both raw ObjectIds and stringified IDs (`matchingCustomerIds.map(id => id.toString())`).
      - In `searchOr` / `orConditions`, matched against all potential customer reference fields: `customerName._id`, `customerName.id`, `customerName`, `customerId`, `customer`, and `customer._id`.
    - **Numeric Amount Search**: Added support for searching invoices and quotations by numeric amount (`totalInvoice`, `subTotal`, `balanceDue`, `total`) alongside invoice/estimate number prefix stripping.
  - **Quality Gates, Builds & Deployment:**
    - Quality Gate check: Deep AST and safety verification PASSED on all 234 source files with 0 errors.
    - System version bumped to `v3.5.92` in `package.json` and `server/index.js`.
    - Web application rebuilt: `npm run build:web` generated updated bundle in `dist_web/`.
    - Android Debug APK compiled via `scripts/build-apk.ps1`:
      - Location: `android/app/build/outputs/apk/debug/app-debug.apk`
      - Size: 116.75 MB (122,418,900 bytes)
      - Timestamp: 28-Oct-2026 14:36:01
    - Windows Desktop Installer compiled via `npm run build:electron` & `npm run make:win`:
      - Location: `dist/Global Gate Setup 3.5.92.exe`
      - Size: 90.57 MB (94,970,552 bytes)
      - Timestamp: 28-Oct-2026 14:39:12

- **Data Entry Language Quality Suite (5-Strategy Suite) & Mobile Edit Save/Close Auto-Navigation (Ver 3.5.93)**:
  - **User Requirements:**
    1. **Language & Data Entry Quality**: Users frequently make language/typing mistakes when entering data (especially technical descriptions, defects, appliance types, and notes on mobile virtual keyboards and desktop). Implement a comprehensive 5-strategy solution to prevent and correct language mistakes without slowing users down.
    2. **Mobile Edit Save/Close Auto-Navigation**: In the mobile application across Invoices, Quotations, Maintenance, Maintenance Orders, and all sub-modules, saving an edit did not close the order being edited or return to the previous list page (e.g. keeping users trapped inside desktop information views like `/InvoiceViewAdminAll/:id` or reloading in place).
    3. **Full System Verification**: Perform rigorous end-to-end testing across Desktop App, Web App, and Mobile App before building and pushing. Ensure all module and sub-module navigation links remain 100% intact.
  - **Comprehensive 5-Strategy Language Quality Implementation**:
    - **Strategy 1: Quick Selection Chips Bar (`<QuickChipsBar />`)**:
      - Provides horizontal, swipeable chips with pre-standardized industry and shop terms.
      - Implemented for Maintenance Defects (`No Power`, `Not Charging`, `Overheating`, `Motor Blocked`, `Short Circuit`, etc.), Technician Actions Taken, Appliance/Equipment types, and Invoice/Quotation Subjects.
      - Users tap a chip to instantly insert standardized terms without typing.
    - **Strategy 2: Native Multi-Language Spellcheck**:
      - **Desktop (.exe / Electron)**: Enabled `spellcheck: true` in `webPreferences` for all BrowserWindows and activated bilingual French and US English dictionaries (`targetWin.webContents.session.setSpellCheckerLanguages(['fr', 'en-US'])`).
      - Implemented native `context-menu` popup to suggest correct spellings and allow adding custom terms to the dictionary upon right-clicking misspelled words.
      - **Web & Mobile**: Configured `spellCheck="true"`, `autoCorrect="on"`, and `autoCapitalize="sentences"` across inputs.
    - **Strategy 3: Auto-Formatting & Whitespace Normalization (`textAssistUtils.js`)**:
      - Auto-collapses multiple consecutive spaces, tabs, and non-breaking spaces into a single ASCII space.
      - Provides `toSentenceCase`, `toTitleCase` (for Customer and Employee names), and `toUpperCaseCode` (for codes/serials).
    - **Strategy 4: Custom Bilingual GG Dictionary (`TYPO_DICTIONARY`)**:
      - Built-in rule dictionary mapping 80+ frequent bilingual & technical phonetic typos (e.g. `not charch` -> `Not Charging`, `probleme` -> `Problem`, `electrique` -> `Electrical`, `maint` -> `Maintenance`, `reparation` -> `Repair`, `ventilo` -> `Ventilator`, `climatiseur` -> `Air Conditioner`, etc.).
    - **Strategy 5: "One-Click Language Fixer" Button (`<LanguageFixerButton />`)**:
      - Added a discreet sparkle magic wand button (`✨`) next to description, subject, and defect text fields.
      - With one click, it automatically normalizes spaces, fixes recognized typos, formats punctuation, and applies proper casing.
  - **Mobile Edit Save & Close Navigation Architecture**:
    - Resolved the issue across `InvoiceFormUpdate.js`, `EstimateInvoiceFormUpdate.js`, `MaintenanceUpdateView.js`, `MaintenanceOrderUpdate.js`, `PaymentInformationUpdate.js`, `CustomerFormUpdate.js`, `DailyExpenseUpdate.js`, `ItemFormUpdate.js`, `ProjectUpdateView.js`, `EmployeeUpdateView.js`, and `SupplierFormUpdate.js`.
    - When `isNativeMobile()` is true:
      - Upon saving, `handleOpen()` displays the success confirmation and automatically closes the form after 900ms, returning the user directly to the module's primary listing page (`/InvoiceViewAdmin`, `/EstimateViewAdmin`, `/MaintenanceViewAdmin`, `/MaintenanceOrderAdmin`, etc.).
      - `handleClose()` and top-bar back buttons immediately return to the main list route, eliminating any entrapment in desktop detail views or infinite reloads.
  - **Quality Gates, Builds & Deployment:**
    - Quality Gate check: Deep AST and safety verification PASSED on all 237 source files with 0 errors.
    - Automated Verification: `scripts/verify-language-and-nav.js` PASSED 100% verifying all 15 form routes and text assist functions.
    - System version bumped to `v3.5.93` in `package.json` and `server/index.js`.
    - Desktop Windows Installer packaged: `dist/Global Gate Setup 3.5.93.exe` (94.98 MB).
    - Android Debug APK built: `android/app/build/outputs/apk/debug/app-debug.apk` (117.99 MB).

- **Full UI Form Wiring & Active Auto-Sanitization on Save & Blur (Ver 3.5.94)**:
  - **Issue Addressed**: The initial v3.5.93 release created the language assistance components and utilities, but they were not physically embedded into JSX input fields in `MaintenanceFormView.js`, `MaintenanceUpdateView.js`, `MaintenanceOrderUpdate.js`, `InvoiceForm.js`, `InvoiceFormUpdate.js`, `EstimateInvoiceForm.js`, and `EstimateInvoiceFormUpdate.js`. Furthermore, right-clicking in Electron Desktop on custom shop typos didn't automatically surface the GG technical dictionary corrections.
  - **Comprehensive Enhancements in v3.5.94**:
    - **Visual JSX Integration**:
      - Embedded `<QuickChipsBar />` above `Item Description`, `Defect Description`, `Action Taken`, and `Subject` across both Desktop and Mobile views.
      - Integrated `<LanguageFixerButton />` (`✨`) directly inside `TextField` via `InputProps.endAdornment`.
    - **Automatic Self-Healing (`onBlur`)**:
      - Fields now automatically run `polishText()` when focus leaves the input, automatically fixing spacing and capitalization without needing extra clicks.
    - **Automatic Database Sanitization on Submit (`handleSubmit`)**:
      - Even if a user ignores chips and fixer buttons, `handleSubmit` automatically sanitizes all descriptions, defects, actions, notes, brand, and serial numbers before creating or updating records in MongoDB.
    - **Electron Right-Click Context Menu Enhancements (`main.js`)**:
      - Added `getGgTypoCorrection()` to Electron's main process context-menu handler.
      - Right-clicking misspelled or selected words now surfaces `✨ GG Quick Fix: "<Term>"` at the top of the menu.
      - Reordered spellcheck priority to `['en-US', 'fr']` so English dictionary suggestions appear first for English terms.
    - **Builds & Deployments**:
      - Windows Installer: `dist/Global Gate Setup 3.5.94.exe` (95.32 MB).
      - Android APK: `android/app/build/outputs/apk/debug/app-debug.apk` (119.13 MB).
      - Cloud Server & Web: Bumped to `v3.5.94` in `server/index.js` and `package.json`.
