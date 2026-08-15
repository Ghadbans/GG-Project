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

6. **Frontend Build Pipeline**: ALWAYS run 
pm run build (which invokes Webpack) to compile the React source code into the dist/ folder BEFORE running 
pm run make:win (which invokes electron-builder). If you only bump the version and run make:win without building, the newly generated .exe will contain stale frontend code from the last time 
pm run build was executed.

## Current Progress Log
- **Globally Fixed Search Flickering & Number Matching**: Injected quickFilterProps: { debounceMs: 500 } into all 21 DataGrid instances in AdminView1 to prevent request spamming per keystroke (flicker). Completely rewrote backend exact-number match queries (e.g., outNumber: 267) into $expr + $toString partial regex matches so users can find numbers by typing a substring (e.g. 1538 matches 15383).
- **Fixed DataGrid Crash & Search Glitches**: Ran a global script across all 16 `AdminView1` components (`DailyExpenses.js`, `PurchasesViewAdmin.js`, `ItemOutViewAdmin.js`, etc.) to resolve the "appearing then disappearing" search issue by enforcing `filterMode="server"`, and fixed the `NaN` page crash by correcting the `<Pagination>` `onChange` signature.
- **PayRoll Table Layout**: Fixed `PayRollFormView.js` and `PayRollUpdateFormView.js` to constrain the table width to `850px` for optimal A4 printing.
- **Search Logic for PayRoll and Daily Expenses**: Updated backend `server/routes/Routes.js` (lines `~5272` and `~5439`) to query across all relevant fields (`employeeName`, `status`, `words`, `payNumber`, `totalNet`, etc. for PayRoll, and `description`, `accountName`, `amount`, `expenseNumber`, etc. for Daily Expenses) to ensure search is accurate without downloading all records to the client side.
- **Final Search Overhaul (All Modules)**: Discovered that `DailyExpenses.js` was hitting a dead-code duplicate definition of `/expense-Information` high up in `Routes.js` which lacked the correct search fields. Deleted the broken duplicate `/expense-Information` and `/itemOut-Information` blocks so Express correctly hits the patched routes. Globally replaced all remaining unstable MongoDB `$expr` number matching with `$where` evaluation across every route in the system (`invoice-Information`, `maintenance-Information`, `purchaseOrder-Information`, `itemReturn-Information`). Pushed exact search fixes for all remaining submodules to Railway.

- **Fixed PayRoll Layouts**: Adjusted PayRollViewInformation.js table column widths from fixed pixels to percentages so the table expands properly and is no longer cramped. Updated PrintPayRoll.js to utilize percentages and added a 90% width wrapper with margin: 0 auto to perfectly fit A4 print preview boundaries without clipping the edges. Fixed missing setTotalItemCount in pagination for Purchase and Project modules. Run 
pm run build prior to compiling the next executable to guarantee all these UI fixes bundle successfully.
