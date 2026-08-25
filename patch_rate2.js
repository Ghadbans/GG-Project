const fs = require('fs');

let content = fs.readFileSync('src/js/AdminView1/AdminHome.js', 'utf8');

const oldLogic = `safeGet(\`\${ENDPOINT_URL}/rate\`).then(resRate => {
          if (resRate.data?.data?.length > 0) {
            const fetchedRate = resRate.data.data[0]?.rate;
            setSystemRate(fetchedRate != null && fetchedRate !== 0 ? parseFloat(fetchedRate) : 1);
          }
        });`;

const newLogic = `safeGet(\`\${ENDPOINT_URL}/rate\`).then(resRate => {
          let rateData = resRate.data?.data;
          
          if (!rateData || rateData.length === 0) {
            try {
              const local = localStorage.getItem('Rate');
              if (local) rateData = JSON.parse(local);
            } catch(e) {}
          }

          if (rateData && rateData.length > 0) {
            const branchRate = rateData.find(r => r.branchId === user.data?.branchId) || rateData[0];
            const fetchedRate = branchRate?.rate || rateData[0]?.rate;
            setSystemRate(fetchedRate != null && fetchedRate !== 0 ? parseFloat(fetchedRate) : 1);
          } else {
             // Hard fallback to a reasonable default if DB is completely unreachable
             // We'll leave it as whatever it currently is, or 1.
          }
        });`;

content = content.replace(oldLogic, newLogic);
fs.writeFileSync('src/js/AdminView1/AdminHome.js', content);
console.log('AdminHome rate logic enhanced with localStorage fallback and branch filtering');
