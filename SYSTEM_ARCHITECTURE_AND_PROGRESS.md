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

## Current Progress Log
- **Globally Fixed Search Flickering & Number Matching**: Injected quickFilterProps: { debounceMs: 500 } into all 21 DataGrid instances in AdminView1 to prevent request spamming per keystroke (flicker). Completely rewrote backend exact-number match queries (e.g., outNumber: 267) into $expr + $toString partial regex matches so users can find numbers by typing a substring (e.g. 1538 matches 15383).
- **Fixed DataGrid Crash & Search Glitches**: Ran a global script across all 16 `AdminView1` components (`DailyExpenses.js`, `PurchasesViewAdmin.js`, `ItemOutViewAdmin.js`, etc.) to resolve the "appearing then disappearing" search issue by enforcing `filterMode="server"`, and fixed the `NaN` page crash by correcting the `<Pagination>` `onChange` signature.
- **PayRoll Table Layout**: Fixed `PayRollFormView.js` and `PayRollUpdateFormView.js` to constrain the table width to `850px` for optimal A4 printing.
- **Search Logic for PayRoll and Daily Expenses**: Updated backend `server/routes/Routes.js` (lines `~5272` and `~5439`) to query across all relevant fields (`employeeName`, `status`, `words`, `payNumber`, `totalNet`, etc. for PayRoll, and `description`, `accountName`, `amount`, `expenseNumber`, etc. for Daily Expenses) to ensure search is accurate without downloading all records to the client side.
- **Railway Deployment**: Pushed search updates to Railway. Backend is currently updating.
