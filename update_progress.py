import sys
with open('SYSTEM_ARCHITECTURE_AND_PROGRESS.md', 'r', encoding='utf-8') as f:
    content = f.read()

rule4 = '\n4. **DataGrid Pagination & Filtering**: Always ensure `filterMode="server"` is present alongside `paginationMode="server"` in DataGrid to prevent client-side filtering from incorrectly hiding server-returned search results. Furthermore, when using `<Pagination>` components, ensure the `onChange` handler properly extracts the value `onChange={(event, value) => setPage(value - 1)}` rather than passing an event object as the page number, which results in `NaN` page errors and crashes.'

content = content.replace('3. **Build Integrity**: Make 100% sure the application is bug-free before building the `.exe`. Do not delete the `dist` files manually. Verify no hidden Node/Electron processes are running before you build to avoid file lock errors.', '3. **Build Integrity**: Make 100% sure the application is bug-free before building the `.exe`. Do not delete the `dist` files manually. Verify no hidden Node/Electron processes are running before you build to avoid file lock errors.' + rule4)

progress = '- **Fixed DataGrid Crash & Search Glitches**: Ran a global script across all 16 `AdminView1` components (`DailyExpenses.js`, `PurchasesViewAdmin.js`, `ItemOutViewAdmin.js`, etc.) to resolve the "appearing then disappearing" search issue by enforcing `filterMode="server"`, and fixed the `NaN` page crash by correcting the `<Pagination>` `onChange` signature.\n'

content = content.replace('## Current Progress Log\n', '## Current Progress Log\n' + progress)

with open('SYSTEM_ARCHITECTURE_AND_PROGRESS.md', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated SYSTEM_ARCHITECTURE_AND_PROGRESS.md')
