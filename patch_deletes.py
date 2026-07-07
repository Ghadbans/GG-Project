import re

with open('E:/globalgateapi2/routes/Routes.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix /delete-purchase/:id
purchase_route_old = """Route.route("/delete-purchase/:id").delete(async (req, res,next) => {
    const id = req.params.id
    try {
      const purchaseFiltered = await purchaseSchema.find({_id:id});
  if (purchaseFiltered) {
      await Promise.all (purchaseFiltered.map(async (row)=>{
        if ( row.status === 'Draft') {
          await purchaseSchema.findOneAndDelete({_id:row._id}).then(() => {
            res.json({
              msg: "Data successfully updated.",
            });
          })
        }
        else if (row.ReferenceName === undefined && row.status === 'Invoiced') {
       await purchaseSchema.findOneAndDelete({_id:row._id}).then(() => {
            res.json({
              msg: "Data successfully updated.",
            });
          }),
        await invoiceSchema.findOneAndDelete({ReferenceName2:row._id})
        } else if (row.ReferenceName2 !== undefined && row.ReferenceName === undefined && row.Position === 'Last') {
       await purchaseSchema.findOneAndDelete({_id:row._id}).then(() => {
            res.json({
              msg: "Data successfully updated.",
            });
          }),
          await invoiceSchema.findOneAndUpdate({ReferenceName2:row._id},{$set:{
          invoicePurchase: '',ReferenceName2:'null'}})
        } else if(row.ReferenceName !== undefined && row.Position === 'Second' && row.ReferenceName2 === 'null') {
        await purchaseSchema.findOneAndDelete({_id:row._id}).then(() => {
            res.json({
              msg: "Data successfully updated.",
            });
          }), 
          await estimationSchema.findOneAndUpdate({ReferenceName:row._id},{$set:{
            status: 'Approved',ReferenceName:''}})
        }
      }))
    }
    } catch (error) {
      return next(err);
    }
});"""

purchase_route_new = """Route.route("/delete-purchase/:id").delete(async (req, res, next) => {
    const id = req.params.id;
    try {
      const purchaseFiltered = await purchaseSchema.find({_id:id});
      if (purchaseFiltered && purchaseFiltered.length > 0) {
        await Promise.all(purchaseFiltered.map(async (row) => {
          // Unconditional delete before cascade chain
          await purchaseSchema.findOneAndDelete({_id:row._id});

          if (row.status === 'Draft') {
            // No cascade needed
          } else if (row.ReferenceName === undefined && row.status === 'Invoiced') {
            await invoiceSchema.findOneAndDelete({ReferenceName2:row._id});
          } else if (row.ReferenceName2 !== undefined && row.ReferenceName === undefined && row.Position === 'Last') {
            await invoiceSchema.findOneAndUpdate({ReferenceName2:row._id},{$set:{invoicePurchase: '',ReferenceName2:'null'}});
          } else if(row.ReferenceName !== undefined && row.Position === 'Second' && row.ReferenceName2 === 'null') {
            await estimationSchema.findOneAndUpdate({ReferenceName:row._id},{$set:{status: 'Approved',ReferenceName:''}});
          }
        }));
        res.json({ msg: "Data successfully deleted." });
      } else {
        res.status(404).json({ msg: "Purchase not found" });
      }
    } catch (error) {
      return next(error);
    }
});"""

content = content.replace(purchase_route_old, purchase_route_new)

# Fix /delete-invoice/:id
invoice_route_old = """Route.route("/delete-invoice/:id").delete(async (req, res,next) => {

    const id = req.params.id;
    try {
      const invoiceFiltered = await invoiceSchema.find({_id:id});
  if (invoiceFiltered) {
      await Promise.all (invoiceFiltered.map(async (row)=>{
       if (row.ReferenceName === undefined && row.invoicePurchase === '') {
          await invoiceSchema.findOneAndDelete({_id:row._id}).then(() => {
           res.json({
             msg: "Data successfully deleted.",
           });
         }),
        await purchaseSchema.findOneAndDelete({ReferenceName2:row._id})
       } else if (row.Position === 'Last') {
        await invoiceSchema.findOneAndDelete({_id:row._id}).then(() => {
          res.json({
            msg: "Data successfully deleted.",
          });
        }), 
        await purchaseSchema.findOneAndUpdate({ReferenceName2:row._id},{$set:{
        status: 'Estimated',ReferenceName2:'null'}})
       }else if (row.Position === 'Maintenance') {
        await invoiceSchema.findOneAndDelete({_id:row._id}).then(() => {
          res.json({
            msg: "Data successfully deleted.",
          });
        }), await maintenanceSchema.findOneAndUpdate({ReferenceName:row._id},{$set:{
        Converted: false,ReferenceName:''}})
       } else if ( row.Position === 'Second' && row.ReferenceName2 === 'null') {
        await invoiceSchema.findOneAndDelete({_id:row._id}).then(() => {
          res.json({
            msg: "Data successfully deleted.",
          });
        }),
        await estimationSchema.findOneAndUpdate({ReferenceName:row._id},{$set:{
        status: 'Approved',ReferenceName:'null'}})
       }
      }
      ))
    }
    } catch (error) {
      return next(error);
    }
});"""

invoice_route_new = """Route.route("/delete-invoice/:id").delete(async (req, res, next) => {
    const id = req.params.id;
    try {
      const invoiceFiltered = await invoiceSchema.find({_id:id});
      if (invoiceFiltered && invoiceFiltered.length > 0) {
        await Promise.all(invoiceFiltered.map(async (row) => {
          // Unconditional delete before cascade chain
          await invoiceSchema.findOneAndDelete({_id:row._id});

          if (row.ReferenceName === undefined && row.invoicePurchase === '') {
            await purchaseSchema.findOneAndDelete({ReferenceName2:row._id});
          } else if (row.Position === 'Last') {
            await purchaseSchema.findOneAndUpdate({ReferenceName2:row._id},{$set:{status: 'Estimated',ReferenceName2:'null'}});
          } else if (row.Position === 'Maintenance') {
            await maintenanceSchema.findOneAndUpdate({ReferenceName:row._id},{$set:{Converted: false,ReferenceName:''}});
          } else if (row.Position === 'Second' && row.ReferenceName2 === 'null') {
            await estimationSchema.findOneAndUpdate({ReferenceName:row._id},{$set:{status: 'Approved',ReferenceName:'null'}});
          }
        }));
        res.json({ msg: "Data successfully deleted." });
      } else {
        res.status(404).json({ msg: "Invoice not found" });
      }
    } catch (error) {
      return next(error);
    }
});"""

content = content.replace(invoice_route_old, invoice_route_new)

with open('E:/globalgateapi2/routes/Routes.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated /delete-purchase and /delete-invoice routes.")
