const fs = require('fs');
let content = fs.readFileSync('server/routes/maintenanceRoutes.js', 'utf8');

const deleteRegex = /Route\.route\("\/delete-maintenance\/:id"\)\.delete\(async \(req, res, next\) => \{[\s\S]*?Route\.route\("\/maintenance-Information"\)/;
const newDelete = `Route.route("/delete-maintenance/:id").delete(async (req, res, next) => {
    const id = req.params.id;
    try {
        const itemOutLink = await itemOutSchema.findOne({ ReferenceName: id });
        if (itemOutLink) return res.status(400).json({ error: "Cannot delete Maintenance because it has linked Item Out entries. Please delete the Item Out entries first." });

        const itemReturnLink = await itemReturnSchema.findOne({ ReferenceName: id });
        if (itemReturnLink) return res.status(400).json({ error: "Cannot delete Maintenance because it has linked Item Return entries. Please delete the Item Return entries first." });

        const invoiceLink = await invoiceSchema.findOne({ ReferenceName: id });
        if (invoiceLink) return res.status(400).json({ error: "Cannot delete Maintenance because it has linked Invoices. Please delete the Invoices first." });

        const maint = await maintenanceSchema.findById(id);
        if (maint && maint.ReferenceName) {
            // Revert parent estimation
            await estimationSchema.findByIdAndUpdate(maint.ReferenceName, {
                $set: { status: 'Approved' },
                $unset: { ReferenceName: 1 }
            });
        }

        await maintenanceSchema.findByIdAndRemove(id);
        res.json({ msg: "Data successfully deleted." });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

Route.route("/maintenance-Information")`;

content = content.replace(deleteRegex, newDelete);
fs.writeFileSync('server/routes/maintenanceRoutes.js', content);
console.log('Updated delete-maintenance');
