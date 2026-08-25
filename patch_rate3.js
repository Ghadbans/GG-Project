const fs = require('fs');

let content = fs.readFileSync('src/js/AdminView1/AdminHome.js', 'utf8');

const oldLogic = `safeGet(\`\${ENDPOINT_URL}/rate\`).then(resRate => {
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

const newLogic = `
        const fetchRateWithRetry = async (retries = 3) => {
          for (let i = 0; i < retries; i++) {
            try {
              const res = await axios.get(\`\${ENDPOINT_URL}/rate\`);
              if (res.data && res.data.data && res.data.data.length > 0) {
                return res.data.data;
              }
            } catch (err) {
              await new Promise(r => setTimeout(r, 1000));
            }
          }
          return null;
        };

        fetchRateWithRetry().then(apiRateData => {
          let rateData = apiRateData;
          if (!rateData || rateData.length === 0) {
            try {
              const local = localStorage.getItem('Rate');
              if (local) rateData = JSON.parse(local);
            } catch(e) {}
          }
          if (rateData && rateData.length > 0) {
            const selectedBranch = localStorage.getItem('selectedBranch') || 'HQ';
            const branchRate = rateData.find(r => r.branchId === selectedBranch) || rateData.find(r => r.branchId === 'HQ') || rateData[0];
            const fetchedRate = branchRate?.rate || rateData[0]?.rate;
            setSystemRate(fetchedRate != null && fetchedRate !== 0 ? parseFloat(fetchedRate) : 1);
          }
        });
`;

content = content.replace(oldLogic, newLogic);
fs.writeFileSync('src/js/AdminView1/AdminHome.js', content);
console.log('AdminHome rate logic enhanced with explicit retry logic');
