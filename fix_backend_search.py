import re
import os

filepath = 'server/routes/Routes.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Fix inline exact matches: { fieldName: isNaN(Number(search)) ? null : Number(search) }
# We want to replace it with: { $expr: { $regexMatch: { input: { $toString: "$fieldName" }, regex: escapedSearch, options: 'i' } } }
pattern1 = re.compile(r'\{\s*([\w.]+)\s*:\s*isNaN\(Number\(search\)\)\s*\?\s*null\s*:\s*Number\(search\)\s*\}')

def replace_inline(match):
    field_name = match.group(1)
    # We must ensure we don't end up with invalid JSON keys, but since it's JS, `$expr` and `$regexMatch` need string keys or just variable keys.
    # It's inside an array, so we can return an object.
    return f"{{ $expr: {{ $regexMatch: {{ input: {{ $toString: \"${field_name}\" }}, regex: escapedSearch, options: 'i' }} }} }}"

new_content = pattern1.sub(replace_inline, content)

# 2. Fix if(isNum) blocks for PayRoll (lines 5288-5291) and DailyExpenses (lines 5471-5473)
# These use: query.$or.push({ payNumber: num });
pattern2 = re.compile(r'query\.\$or\.push\(\{\s*([\w.]+)\s*:\s*num\s*\}\);')

def replace_push(match):
    field_name = match.group(1)
    return f"query.$or.push({{ $expr: {{ $regexMatch: {{ input: {{ $toString: \"${field_name}\" }}, regex: escapedSearch, options: 'i' }} }} }});"

new_content = pattern2.sub(replace_push, new_content)

# 3. Fix if (!isNaN(Number(search))) blocks
# Example: query.$or.push({ purchaseNumber: Number(search) });
pattern3 = re.compile(r'query\.\$or\.push\(\{\s*([\w.]+)\s*:\s*Number\(search\)\s*\}\);')
def replace_push_number(match):
    field_name = match.group(1)
    return f"query.$or.push({{ $expr: {{ $regexMatch: {{ input: {{ $toString: \"${field_name}\" }}, regex: escapedSearch, options: 'i' }} }} }});"

new_content = pattern3.sub(replace_push_number, new_content)


if new_content != content:
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully replaced backend exact number matching with $expr.")
else:
    print("No changes were made to backend.")
