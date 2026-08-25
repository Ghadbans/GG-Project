const fs = require('fs');
let content = fs.readFileSync('server/routes/invoiceRoutes.js', 'utf8');

const deleteRegex = /Route\.route\("\/delete-invoice\/:id"\)\.delete\(async \(req, res, next\) => \{[\s\S]*?Route\.route\("\/invoice-Information"\)/;
const newDelete = `Route.route("/delete-invoice/:id").delete(async (req, res, next) => {
    const id = req.params.id;
    try {
        const paymentLink = await paymentSchema.findOne({ relatedNumber: id });
        if (paymentLink) return res.status(400).json({ error: "Cannot delete Invoice because it has linked Payments. Please delete the Payments first." });
        
        const itemOutLink = await itemOutSchema.findOne({ ReferenceName: id });
        if (itemOutLink) return res.status(400).json({ error: "Cannot delete Invoice because it has linked Item Out entries. Please delete the Item Out entries first." });

        const itemReturnLink = await itemReturnSchema.findOne({ ReferenceName: id });
        if (itemReturnLink) return res.status(400).json({ error: "Cannot delete Invoice because it has linked Item Return entries. Please delete the Item Return entries first." });

        const invoice = await invoiceSchema.findById(id);
        if (invoice && invoice.ReferenceName) {
            // Revert parent estimation
            await estimationSchema.findByIdAndUpdate(invoice.ReferenceName, {
                $set: { status: 'Approved' },
                $unset: { ReferenceName: 1 }
            });
            // Revert parent maintenance
            await maintenanceSchema.findByIdAndUpdate(invoice.ReferenceName, {
                $set: { status: 'Complete' },
                $unset: { ReferenceName: 1 }
            });
        }
        
        await invoiceSchema.findByIdAndRemove(id);
        res.json({ msg: "Data successfully deleted." });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

Route.route("/invoice-Information")`;

content = content.replace(deleteRegex, newDelete);
fs.writeFileSync('server/routes/invoiceRoutes.js', content);
console.log('Updated delete-invoice');
