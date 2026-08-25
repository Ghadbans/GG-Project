const fs = require('fs');
let content = fs.readFileSync('server/routes/customerRoutes.js', 'utf8');

const deleteRegex = /Route\.route\("\/remove-customer\/:id"\)\.delete\(async \(req, res\) => \{[\s\S]*?Route\.route\("\/create-department"\)/;
const newDelete = `Route.route("/remove-customer/:id").delete(async (req, res) => {
    const id = req.params.id;
    try {
        let objectId = null;
        try { objectId = new require('mongoose').Types.ObjectId(id); } catch (e) {}
        const idFilter = objectId ? { $in: [id, objectId] } : id;

        // Check if customer has any linked records
        const invoiceLink = await invoiceSchema.findOne({ 'customerName._id': idFilter });
        if (invoiceLink) return res.status(400).json({ error: "Cannot delete Customer because they have linked Invoices." });

        const estimationLink = await estimationSchema.findOne({ 'customerName._id': idFilter });
        if (estimationLink) return res.status(400).json({ error: "Cannot delete Customer because they have linked Quotations." });

        const projectLink = await projectSchema.findOne({ 'customerName._id': idFilter });
        if (projectLink) return res.status(400).json({ error: "Cannot delete Customer because they have linked Projects." });

        const maintenanceLink = await maintenanceSchema.findOne({ 'customerName._id': idFilter });
        if (maintenanceLink) return res.status(400).json({ error: "Cannot delete Customer because they have linked Maintenance records." });

        const paymentLink = await paymentSchema.findOne({ 'customerName._id': idFilter });
        if (paymentLink) return res.status(400).json({ error: "Cannot delete Customer because they have linked Payments." });

        const purchaseLink = await purchaseSchema.findOne({ 'customerName._id': idFilter });
        if (purchaseLink) return res.status(400).json({ error: "Cannot delete Customer because they have linked Purchase records." });

        await customerSchema.findByIdAndRemove(id);
        res.json({ msg: "Data successfully deleted." });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

Route.route("/create-department")`;

content = content.replace(deleteRegex, newDelete);
fs.writeFileSync('server/routes/customerRoutes.js', content);
console.log('Updated remove-customer');
