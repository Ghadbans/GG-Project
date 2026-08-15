import sys

files = [
    'src/js/AdminView1/PageView/PayRoll/PayRollFormView.js',
    'src/js/AdminView1/PageView/PayRoll/PayRollUpdateFormView.js'
]

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Fix first table
    content = content.replace(
        "<table className=\"secondTable\" style={{ width: '100%', margin: '0 auto', fontSize: '16px', marginBottom: '0px', border: '1px solid #DDD' }}>", 
        "<table className=\"secondTable\" style={{ width: '100%', maxWidth: '850px', margin: '0 auto', fontSize: '14px', marginBottom: '0px', border: '1px solid #DDD', borderCollapse: 'collapse' }}>"
    )
    
    # Fix second table
    content = content.replace(
        "<table className=\"secondTable\" style={{ fontSize: '20px', marginBottom: '5px', border: '1px solid #DDD' }}>", 
        "<table className=\"secondTable\" style={{ width: '100%', maxWidth: '850px', margin: '0 auto', fontSize: '14px', marginBottom: '5px', border: '1px solid #DDD', borderCollapse: 'collapse' }}>"
    )
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print('Done')
