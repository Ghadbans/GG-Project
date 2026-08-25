const fs = require('fs');

const files = [
  'src/js/AdminView1/EstimateViewAdmin.js',
  'src/js/AdminView1/InvoiceViewAdmin.js',
  'src/js/AdminView1/ProjectViewAdmin.js',
  'src/js/AdminView1/MaintenanceViewAdmin.js',
  'src/js/AdminView1/PurchaseOrderViewAdmin.js',
  'src/js/AdminView1/CustomerAdminView.js'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    const oldCatch = /\} catch \(error\) \{\s*alert\('An error as Occur'\);\s*\}/g;
    const newCatch = `} catch (error) {\n        if (error.response && error.response.data && error.response.data.error) {\n          alert(error.response.data.error);\n        } else {\n          alert('An error as Occur');\n        }\n      }`;
    
    // Also handle console.error + alert
    const oldCatch2 = /\} catch \(error\) \{\s*console\.error\(error\);\s*\}/g;
    const newCatch2 = `} catch (error) {\n        if (error.response && error.response.data && error.response.data.error) {\n          alert(error.response.data.error);\n        } else {\n          console.error(error);\n        }\n      }`;
    
    // Handle toast.error
    const oldCatch3 = /\} catch \(error\) \{\s*toast\.error\('An error as Occur'\);\s*\}/g;
    const newCatch3 = `} catch (error) {\n        if (error.response && error.response.data && error.response.data.error) {\n          toast.error(error.response.data.error);\n        } else {\n          toast.error('An error as Occur');\n        }\n      }`;

    content = content.replace(oldCatch, newCatch);
    content = content.replace(oldCatch2, newCatch2);
    content = content.replace(oldCatch3, newCatch3);
    
    fs.writeFileSync(file, content);
    console.log('Patched ' + file);
  }
}
