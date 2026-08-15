import os
import glob

files = glob.glob('src/js/AdminView1/**/*.js', recursive=True)
count = 0

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    modified = False

    # Check if we have showQuickFilter: true and we haven't added debounceMs yet
    if 'showQuickFilter: true,' in content and 'quickFilterProps: { debounceMs: 500 }' not in content:
        content = content.replace('showQuickFilter: true,', 'showQuickFilter: true,\n                          quickFilterProps: { debounceMs: 500 },')
        modified = True

    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Added debounceMs to {filepath}")
        count += 1

print(f"Total files updated with debounceMs: {count}")
