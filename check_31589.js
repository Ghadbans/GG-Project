const axios = require('axios');
async function test() {
    const resList = await axios.get('https://gg-project-production.up.railway.app/endpoint/estimation');
    const match = resList.data.data.filter(e => e.totalInvoice === 31589 || e.subTotal === 31589);
    console.log("Matched estimates:", match.length);
    if (match.length > 0) {
        console.log("Missing fields in match:");
        const e = match[0];
        console.log("estimateDate:", e.estimateDate);
        console.log("estimateName:", e.estimateName);
        console.log("estimateNumber:", e.estimateNumber);
        console.log("subTotal:", e.subTotal);
        console.log("items with data:", e.items.some(i => i.data));
    }
}
test();
