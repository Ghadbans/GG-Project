const fs = require('fs');
let file = 'src/js/AdminView1/CustomerViewAdmin.js';
if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    const oldCatch = /\} catch \(error\) \{\s*alert\('An error as Occur'\);\s*\}/g;
    const newCatch = `} catch (error) {\n        if (error.response && error.response.data && error.response.data.error) {\n          alert(error.response.data.error);\n        } else {\n          alert('An error as Occur');\n        }\n      }`;
    
    // Also handle console.error + alert
    const oldCatch2 = /\} catch \(error\) \{\s*console\.error\(error\);\s*\}/g;
    const newCatch2 = `} catch (error) {\n        if (error.response && error.response.data && error.response.data.error) {\n          alert(error.response.data.error);\n        } else {\n          console.error(error);\n        }\n      }`;

    content = content.replace(oldCatch, newCatch);
    content = content.replace(oldCatch2, newCatch2);
    
    fs.writeFileSync(file, content);
    console.log('Patched ' + file);
} else {
    console.log('Not found');
}
