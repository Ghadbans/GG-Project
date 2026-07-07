import pathlib, re
root = pathlib.Path('model')
updated = []
for p in sorted(root.glob('*.js')):
    text = p.read_text(encoding='utf-8')
    if 'branchId' in text:
        continue
    if 'new Schema' not in text:
        continue
    idx = text.find('new Schema')
    o = text.find('(', idx)
    if o == -1:
        continue
    brace = text.find('{', o)
    if brace == -1:
        continue
    level = 0
    insert_pos = None
    for i in range(brace, len(text)):
        c = text[i]
        if c == '{':
            level += 1
        elif c == '}':
            level -= 1
            if level == 0:
                insert_pos = i
                break
    if insert_pos is None:
        continue
    if 'branchId' in text[:insert_pos]:
        continue
    last_line = text[:insert_pos].splitlines()[-1]
    indent_match = re.match(r'([ \t]*)', last_line)
    indent_str = indent_match.group(1) if indent_match else '    '
    insert_text = f"{indent_str}branchId: {{ type: String, default: 'HQ' }},\n"
    new_text = text[:insert_pos] + insert_text + text[insert_pos:]
    p.write_text(new_text, encoding='utf-8')
    updated.append(p.name)
print('UPDATED FILES:')
for name in updated:
    print(name)
