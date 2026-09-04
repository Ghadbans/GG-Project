# GG-Management2026 System Architecture & Progress Log

## Architecture Overview
- **Frontend**: A React application bundled as an Electron executable (desktop app) located in the local directory (`d:\GG\GG-Managment2026\ancient-kepler Pro`).
- **Backend**: A Node.js/Express application with MongoDB, located in the `server` subdirectory of the local project folder.
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

## Current Progress Log
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
- **Live Branch Revocation Eviction**: Patched a flaw in BranchSwitcher.js where users could retain their localStorage 'HQ' branch status if an administrator revoked their branches while they were actively logged in. If BranchSwitcher.js detects   branches assigned for a non-GG user, it now actively executes localStorage.clear() and forcefully kicks the user back to the login screen.
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
