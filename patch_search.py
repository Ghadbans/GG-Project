import os

filepath = 'server/routes/Routes.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

bad_pattern = "const regex = new RegExp(search.split(' ').join('|'), 'i');"
good_pattern = r"""const escapedSearch = search.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedSearch, 'i');"""

content = content.replace(bad_pattern, good_pattern)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Replaced all bad regexes in Routes.js")
