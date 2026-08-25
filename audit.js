const axios = require('axios');
const fs = require('fs');

async function audit() {
    const resCust = await axios.get('https://gg-project-production.up.railway.app/endpoint/customer');
    const customers = resCust.data.data;
    const globalPva = customers.find(c => {
        let name = c.Customer || c.companyName || c.customerFullName;
        return name && name.toLowerCase().includes('global pva');
    });
    const aluDesign = customers.find(c => {
        let name = c.Customer || c.companyName || c.customerFullName;
        return name && name.toLowerCase().includes('alu-design');
    });

    let report = "# Data Audit Report: Missing Payment Records\n\n";
    report += "The following invoices show as Paid or Partially-Paid in the INVOICE module, but they do NOT have matching Payment records linked to them in the database. This is why the ALL STATEMENT balance is higher than you expect.\n\n";

    async function checkCustomer(cust, name) {
        if (!cust) return;
        report += `## ${name}\n`;
        const id = cust._id;
        const resInv = await axios.get(`https://gg-project-production.up.railway.app/endpoint/invoice?customerId=${id}`);
        const invoices = resInv.data.data.filter(i => i.status !== 'Draft' && i.status !== 'Void');
        
        const resPay = await axios.get(`https://gg-project-production.up.railway.app/endpoint/payment?customerId=${id}`);
        const payments = resPay.data.data.filter(p => (p.customerName && p.customerName._id === id) || p.customerName === id);

        // Calculate allocated payments per invoice
        const allocated = {};
        payments.forEach(p => {
            if (p.TotalAmount && p.TotalAmount.length > 0) {
                p.TotalAmount.forEach(alloc => {
                    if (!allocated[alloc.id]) allocated[alloc.id] = 0;
                    allocated[alloc.id] += alloc.total;
                });
            }
        });

        let found = false;
        report += "| Invoice # | Status | Invoice Paid Amount (A-Paid) | Actual Payment Records Found | Missing Difference |\n";
        report += "|---|---|---|---|---|\n";
        
        invoices.forEach(i => {
            const invoicePaid = i.total || 0;
            const actualPaid = allocated[i._id] || 0;
            if (Math.abs(invoicePaid - actualPaid) > 0.01) {
                found = true;
                const diff = invoicePaid - actualPaid;
                report += `| ${i.invoiceNumber} | ${i.status} | $${invoicePaid.toFixed(2)} | $${actualPaid.toFixed(2)} | **$${diff.toFixed(2)}** |\n`;
            }
        });

        if (!found) {
            report += "| All invoices match perfectly! | | | | |\n";
        }
        report += "\n";
    }

    await checkCustomer(globalPva, "GLOBAL PVA");
    await checkCustomer(aluDesign, "ALU-DESIGN");

    fs.writeFileSync('C:/Users/GG/.gemini/antigravity/brain/47341926-a833-403d-997c-715e98dfb563/data_audit_report.md', report);
    console.log("Audit complete");
}
audit();
