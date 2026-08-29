import re

with open('package.json', 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'"version": "3.4.42"', '"version": "3.4.43"', content)
with open('package.json', 'w', encoding='utf-8') as f:
    f.write(content)

with open('src/js/App.js', 'r', encoding='utf-8') as f:
    app = f.read()

app = re.sub(r'3\.4\.42', '3.4.43', app)
with open('src/js/App.js', 'w', encoding='utf-8') as f:
    f.write(app)
