import sys

files = ['src/js/AdminView1/PageView/PayRoll/PayRollFormView.js', 'src/js/AdminView1/PageView/PayRoll/PayRollUpdateFormView.js']

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Update Grid to center tables
    content = content.replace('<Grid item xs={12}>\n                    <table className="secondTable"', '<Grid item xs={12} sx={{ display: \'flex\', flexDirection: \'column\', alignItems: \'center\' }}>\n                    <table className="secondTable"')
    
    # 2. Update maxWidth from 850px to 950px for tables
    content = content.replace("maxWidth: '850px'", "maxWidth: '950px'")
    
    # 3. Fix colSpan={0} to colSpan={2}
    content = content.replace('colSpan={0}', 'colSpan={2}')
    
    # 4. Fix colSpan={4}>{words} to colSpan={5}
    content = content.replace('colSpan={4}>{words}', 'colSpan={5}>{words}')
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
print('Done updating views')
