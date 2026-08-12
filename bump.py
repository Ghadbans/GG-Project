import json
with open('package.json', 'r') as f:
    data = json.load(f)
if 'directories' not in data['build']:
    data['build']['directories'] = {}
data['build']['directories']['output'] = 'dist2'
with open('package.json', 'w') as f:
    json.dump(data, f, indent=2)
