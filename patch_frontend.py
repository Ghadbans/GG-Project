import os
import re

files_to_patch = {
    'src/js/AdminView1/PageView/EstimateView/EstimateInvoiceFormUpdate.js': ('estimation', 'update-estimation'),
    'src/js/AdminView1/PageView/InvoiceView/InvoiceFormUpdate.js': ('invoice', 'update-invoice'),
    'src/js/AdminView1/PageView/ProjectView/ProjectUpdateView.js': ('project', 'update-project'),
    'src/js/AdminView1/PageView/MaintenanceView/MaintenanceUpdateView.js': ('maintenance', 'update-maintenance'),
    'src/js/AdminView1/PageView/PurchasesView/PurchaseFormUpdate.js': ('purchase', 'update-purchase'),
    'src/js/AdminView1/PageView/PurchaseOrder/PurchaseUpdateOrder.js': ('purchaseOrder', 'update-purchaseOrder'),
    'src/js/AdminView1/PageView/ItemOutView/ItemOutViewUpdate.js': ('itemOut', 'update-itemOut'),
    'src/js/AdminView1/PageView/ItemReturn/ItemReturnUpdateForm.js': ('itemReturn', 'update-itemReturn'),
    'src/js/AdminView1/PageView/ItemPurchase/ItemPurchaseUpdateForm.js': ('itemPurchase', 'update-itemPurchase')
}

lock_import = "import { useDocumentLock } from '../../../hooks/useDocumentLock';\n"

for filepath, (coll_name, endpoint_name) in files_to_patch.items():
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    if "useDocumentLock" in content:
        print(f"Already patched {filepath}")
        continue

    # 1. Add import
    content = content.replace("import axios from 'axios';", "import axios from 'axios';\n" + lock_import)
    
    # 2. Add hook call after useParams()
    # E.g. const { id } = useParams();
    hook_call = f"const {{ id }} = useParams();\n  const {{ isLocked, lockConfig, lockedBy }} = useDocumentLock(id, '{coll_name}');\n"
    content = re.sub(r'const\s+\{\s*id\s*\}\s*=\s*useParams\(\)\;?', hook_call, content)
    
    # 3. Modify axios.put
    # E.g. axios.put(`${ENDPOINT_URL}/update-estimation/${id}`, data)
    # We replace: axios.put(`${ENDPOINT_URL}/update-estimation/${id}`, data) with axios.put(..., data, lockConfig)
    # Regex to find: axios.put\((.*?update-.*?\$*\{*id\}*.*?), (.*?)\)
    # Be careful because some are like axios.put(`${ENDPOINT_URL}/update-itemOut/${id}`, data)
    put_regex = r"axios\.put\(`\$\{ENDPOINT_URL\}/" + endpoint_name + r"/\$\{id\}`,\s*(data.*?)\)"
    put_replacement = r"axios.put(`${ENDPOINT_URL}/" + endpoint_name + r"/${id}`, \1, lockConfig)"
    content = re.sub(put_regex, put_replacement, content)
    
    # 4. Add Early Return overlay just before `return (`
    # We find the last `return (` or the one that has `<div className='Homeemployee'>` or `<Box sx={{ display: 'flex' }}>`
    # Let's search for `return (` followed by a few spaces and `<div` or `<Box`
    overlay_ui = """
  if (isLocked) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', backgroundColor: 'rgba(0,0,0,0.8)', color: 'white', position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 9999 }}>
        <h2>This document is currently being edited by {lockedBy || 'another user'}</h2>
        <p>Please wait until they are finished.</p>
        <Button variant="contained" color="primary" onClick={() => window.history.back()} sx={{ mt: 3 }}>Go Back</Button>
      </div>
    );
  }
"""
    # Find the main return (usually near the end)
    # To be safe, let's inject it right before `return (` that is indented with 2 spaces
    content = re.sub(r'(?m)^(\s*)return \(\s*<div', overlay_ui + r'\1return (\n\1  <div', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Patched {filepath}")

