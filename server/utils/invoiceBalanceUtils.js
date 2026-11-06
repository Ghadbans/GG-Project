const mongoose = require('mongoose');
const invoiceSchema = require('../model/invoiceSchema');
const paymentSchema = require('../model/paymentSchema');

/**
 * Recalculates and updates total paid, balanceDue, and status for given invoice IDs.
 * @param {Array<string|mongoose.Types.ObjectId>} invoiceIds - Array of invoice _id values to synchronize.
 */
async function syncInvoiceBalances(invoiceIds) {
  if (!invoiceIds || !Array.isArray(invoiceIds) || invoiceIds.length === 0) return { updatedCount: 0 };
  const uniqueIds = Array.from(new Set(invoiceIds.map(id => id ? id.toString() : null).filter(Boolean)));
  if (uniqueIds.length === 0) return { updatedCount: 0 };

  let updatedCount = 0;

  for (const invId of uniqueIds) {
    try {
      const invoice = await invoiceSchema.findById(invId);
      if (!invoice) continue;

      let matchingIds = [invId.toString()];
      if (invoice.projectId) {
        matchingIds.push(invoice.projectId.toString());
      }
      if (invoice.Ref && invoice.Ref._id) {
        matchingIds.push(invoice.Ref._id.toString());
      }
      if (invoice.ReferenceName2) {
        try {
          const purchaseSchema = require('../model/purchaseSchema');
          const purchase = await purchaseSchema.findById(invoice.ReferenceName2).lean();
          if (purchase) {
            matchingIds.push(purchase._id.toString());
            const pId = purchase.projectName?._id || purchase.projectName?.id || (typeof purchase.projectName === 'string' && purchase.projectName.length === 24 ? purchase.projectName : null);
            if (pId) matchingIds.push(pId.toString());
          }
        } catch (_) {}
      }

      // Find all non-voided payments matching this invoice ID or its project/purchase ID
      const payments = await paymentSchema.find({
        status: { $nin: ['Voided', 'Void'] },
        'TotalAmount.id': { $in: matchingIds }
      }).lean();

      let totalPaid = 0;
      payments.forEach(p => {
        if (p.TotalAmount && Array.isArray(p.TotalAmount)) {
          p.TotalAmount.forEach(item => {
            const itemIdStr = item?.id ? item.id.toString() : null;
            if (itemIdStr && matchingIds.includes(itemIdStr)) {
              const amt = parseFloat(item.total !== undefined ? item.total : (item.amount !== undefined ? item.amount : (item.amountPaidUSD || 0)));
              if (!isNaN(amt) && amt > 0) {
                if (p.transactionType === 'Refund') {
                  totalPaid -= amt;
                } else {
                  totalPaid += amt;
                }
              }
            }
          });
        }
      });

      totalPaid = Math.max(0, Math.round(totalPaid * 100) / 100);
      const totalInvoice = parseFloat(invoice.totalInvoice || 0);
      const balanceDue = Math.max(0, Math.round((totalInvoice - totalPaid) * 100) / 100);

      let newStatus = invoice.status;
      if (invoice.status !== 'Void' && invoice.status !== 'Free of Charge') {
        if (totalInvoice > 0 && totalPaid >= totalInvoice - 0.001) {
          newStatus = 'Paid';
        } else if (totalPaid > 0.001) {
          newStatus = 'Partially-Paid';
        } else if (invoice.status === 'Paid' || invoice.status === 'Partially-Paid') {
          newStatus = 'Sent';
        }
      }

      const currentTotal = parseFloat(invoice.total || 0);
      const currentBalance = parseFloat(invoice.balanceDue !== undefined ? invoice.balanceDue : totalInvoice);
      if (
        Math.abs(currentTotal - totalPaid) > 0.001 ||
        Math.abs(currentBalance - balanceDue) > 0.001 ||
        invoice.status !== newStatus
      ) {
        await invoiceSchema.findByIdAndUpdate(invId, {
          $set: {
            total: totalPaid,
            balanceDue: balanceDue,
            status: newStatus
          }
        });
        updatedCount++;
      }
    } catch (err) {
      console.error(`Error syncing invoice balance for ${invId}:`, err.message);
    }
  }

  return { updatedCount };
}

/**
 * Scans ALL invoices in the database and recalculates their paid amounts, balances, and statuses.
 */
async function reconcileAllInvoiceBalances() {
  try {
    const allInvoices = await invoiceSchema.find({}, '_id invoiceNumber totalInvoice total balanceDue status').lean();
    if (!allInvoices || allInvoices.length === 0) return { totalInvoices: 0, updatedCount: 0 };

    // Group all non-voided payments by invoice ID
    const allPayments = await paymentSchema.find({
      status: { $nin: ['Voided', 'Void'] }
    }, 'TotalAmount status transactionType').lean();

    const paymentTotalsByInvId = new Map();

    allPayments.forEach(p => {
      if (p.TotalAmount && Array.isArray(p.TotalAmount)) {
        p.TotalAmount.forEach(item => {
          const amt = parseFloat(item.total || item.amount || 0);
          if (!isNaN(amt) && amt > 0 && item.id) {
            const idStr = item.id.toString();
            const signedAmt = p.transactionType === 'Refund' ? -amt : amt;
            paymentTotalsByInvId.set(idStr, (paymentTotalsByInvId.get(idStr) || 0) + signedAmt);
          }
        });
      }
    });

    let updatedCount = 0;
    const bulkOps = [];

    for (const inv of allInvoices) {
      const invIdStr = inv._id.toString();
      const totalPaid = Math.max(0, Math.round((paymentTotalsByInvId.get(invIdStr) || 0) * 100) / 100);
      const totalInvoice = parseFloat(inv.totalInvoice || 0);
      const balanceDue = Math.max(0, Math.round((totalInvoice - totalPaid) * 100) / 100);

      let newStatus = inv.status;
      if (inv.status !== 'Void' && inv.status !== 'Free of Charge') {
        if (totalInvoice > 0 && totalPaid >= totalInvoice - 0.001) {
          newStatus = 'Paid';
        } else if (totalPaid > 0.001) {
          newStatus = 'Partially-Paid';
        } else if (inv.status === 'Paid' || inv.status === 'Partially-Paid') {
          newStatus = 'Sent';
        }
      }

      const currentTotal = parseFloat(inv.total || 0);
      const currentBalance = parseFloat(inv.balanceDue !== undefined ? inv.balanceDue : totalInvoice);

      if (
        Math.abs(currentTotal - totalPaid) > 0.001 ||
        Math.abs(currentBalance - balanceDue) > 0.001 ||
        inv.status !== newStatus
      ) {
        bulkOps.push({
          updateOne: {
            filter: { _id: inv._id },
            update: {
              $set: {
                total: totalPaid,
                balanceDue: balanceDue,
                status: newStatus
              }
            }
          }
        });
        updatedCount++;
      }
    }

    if (bulkOps.length > 0) {
      await invoiceSchema.bulkWrite(bulkOps);
      console.log(`[Reconciliation] Successfully reconciled ${bulkOps.length} mismatched invoices with active payments!`);
    }

    return { totalInvoices: allInvoices.length, updatedCount: bulkOps.length };
  } catch (err) {
    console.error('[Reconciliation Error] Failed to reconcile invoices:', err.message);
    return { error: err.message };
  }
}

module.exports = {
  syncInvoiceBalances,
  reconcileAllInvoiceBalances
};
