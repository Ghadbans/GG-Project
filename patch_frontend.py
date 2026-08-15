import os
import glob
import re

files = glob.glob('src/js/AdminView1/*ViewAdmin.js')

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add totalItemCount state if SetTotalPage exists
    if 'const [totalItemCount, setTotalItemCount]' not in content:
        content = re.sub(r'(const\s+\[totalPage,\s*SetTotalPage\]\s*=\s*useState\(.*?\);)',
                         r'\1\n  const [totalItemCount, setTotalItemCount] = useState(0);',
                         content)

    # 2. Update fetchItems to set totalItemCount
    if 'setTotalItemCount(' not in content:
        content = re.sub(r'(SetTotalPage\(Math\.ceil\(res\.data\.totalItem\s*/\s*limit\)\);)',
                         r'\1\n      setTotalItemCount(res.data.totalItem || 0);',
                         content)
        content = re.sub(r'(SetTotalPage\(Math\.ceil\(res\.data\.TotalItems\s*/\s*limit\)\);)',
                         r'\1\n      setTotalItemCount(res.data.TotalItems || 0);',
                         content)

    # 3. Update rowCount
    content = re.sub(r'rowCount=\{totalPage\s*\*\s*limit\}', r'rowCount={totalItemCount}', content)
    content = re.sub(r'rowCount=\{totalPage\*limit\}', r'rowCount={totalItemCount}', content)

    # 4. Add debounceMs to DataGrid slotProps if showQuickFilter is true
    if 'debounceMs: 700' not in content:
        content = content.replace(
            "slotProps={{ toolbar: { showQuickFilter: true, printOptions: { disableToolbarButton: true } } }}",
            "slotProps={{ toolbar: { showQuickFilter: true, quickFilterProps: { debounceMs: 700 }, printOptions: { disableToolbarButton: true } } }}"
        )
        content = content.replace(
            "slotProps={{ toolbar: { showQuickFilter: true } }}",
            "slotProps={{ toolbar: { showQuickFilter: true, quickFilterProps: { debounceMs: 700 } } }}"
        )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Frontend components patched.")
