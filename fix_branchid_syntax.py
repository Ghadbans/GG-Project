import pathlib
root = pathlib.Path('model')
fixed = []
for p in sorted(root.glob('*.js')):
    text = p.read_text(encoding='utf-8')
    lines = text.splitlines()
    changed = False
    for i, line in enumerate(lines):
        if 'branchId: { type: String, default: ' in line:
            j = i - 1
            while j >= 0 and lines[j].strip() == '':
                j -= 1
            if j >= 0:
                prev = lines[j].rstrip()
                if not prev.endswith(',') and not prev.endswith('[') and not prev.endswith('{'):
                    lines[j] = prev + ','
                    changed = True
    if changed:
        p.write_text('\n'.join(lines) + '\n', encoding='utf-8')
        fixed.append(p.name)
print('fixed', len(fixed), 'files')
for name in fixed:
    print(name)
