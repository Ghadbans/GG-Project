import os
import glob

files = glob.glob('src/js/AdminView1/*.js')
count = 0

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    modified = False

    if 'paginationMode="server"' in content and 'filterMode="server"' not in content:
        content = content.replace('paginationMode="server"', 'paginationMode="server"\n                          filterMode="server"')
        modified = True

    if '<Pagination' in content and 'onChange={handlePageChange}' in content:
        content = content.replace('onChange={handlePageChange}', 'onChange={(e, value) => setPage(value - 1)}')
        modified = True

    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed {filepath}")
        count += 1

print(f"Total files fixed: {count}")
