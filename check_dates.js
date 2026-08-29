const axios = require('axios');
async function test() {
    const resList = await axios.get('https://gg-project-production.up.railway.app/endpoint/estimation');
    const missing = resList.data.data.filter(e => !e.estimateDate);
    console.log("Missing dates:", missing.length);
}
test();
