const fs = require('fs');
let content = fs.readFileSync('server/routes/estimationRoutes.js', 'utf8');

const deleteRegex = /Route\.route\("\/delete-estimation\/:id"\)\.delete\(async \(req, res, next\) => \{[\s\S]*?Route\.route\("\/estimation-Information"\)/;
const newDelete = `Route.route("/delete-estimation/:id").delete(async (req, res, next) => {
    const id = req.params.id;
    try {
        const purchaseLink = await purchaseSchema.findOne({ ReferenceName: id });
        if (purchaseLink) return res.status(400).json({ error: "Cannot delete Quotation because it is linked to a Purchase Request. Please delete the Purchase Request first." });
        
        const invoiceLink = await invoiceSchema.findOne({ ReferenceName: id });
        if (invoiceLink) return res.status(400).json({ error: "Cannot delete Quotation because it is linked to an Invoice. Please delete the Invoice first." });
        
        const maintenanceLink = await maintenanceSchema.findOne({ ReferenceName: id });
        if (maintenanceLink) return res.status(400).json({ error: "Cannot delete Quotation because it is linked to a Maintenance record. Please delete the Maintenance first." });

        await estimationSchema.findByIdAndRemove(id);
        res.json({ msg: "Data successfully deleted." });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

Route.route("/estimation-Information")`;

content = content.replace(deleteRegex, newDelete);
fs.writeFileSync('server/routes/estimationRoutes.js', content);
console.log('Updated delete-estimation');
