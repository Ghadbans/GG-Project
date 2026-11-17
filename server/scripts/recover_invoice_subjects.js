/**
 * Safe, reversible recovery for invoices whose `invoiceSubject` was overwritten
 * with 'CCTV & POS INSTALLATION' by the legacy startup auto-repair in v3.6.22.
 *
 * Can be run as a CLI script:
 *   node server/scripts/recover_invoice_subjects.js --dry-run
 *   node server/scripts/recover_invoice_subjects.js --apply
 *   node server/scripts/recover_invoice_subjects.js --rollback=server/backups/invoice_subjects_backup_....json
 *
 * Or invoked programmatically via runInvoiceSubjectRecovery({ dryRun, rollbackFile }).
 */
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const { toSafeObjectId } = require('../utils/objectIdUtils');

async function resolveTrueSubjectForInvoice(db, inv) {
  const custRaw = inv.customerName;
  const custName = typeof custRaw === 'string'
    ? custRaw
    : (custRaw?.customerName || custRaw?.Customer || custRaw?.companyName || '');
  const isKream = String(custName).toUpperCase().includes('KREAM');

  // 1. Check linked Purchase via inv.ReferenceName2 or purchase.ReferenceName2 === inv._id
  let linkedPurchase = null;
  const ref2Oid = toSafeObjectId(inv.ReferenceName2);
  if (ref2Oid) {
    linkedPurchase = await db.collection('purchase').findOne({ _id: ref2Oid });
  }
  if (!linkedPurchase && inv._id) {
    linkedPurchase = await db.collection('purchase').findOne({
      $or: [
        { ReferenceName2: String(inv._id) },
        { ReferenceName2: inv._id }
      ]
    });
  }
  if (linkedPurchase) {
    const pSubj = linkedPurchase.projectName?.projectName || linkedPurchase.description || '';
    if (pSubj && pSubj !== 'CCTV & POS INSTALLATION') {
      return {
        restoredSubject: pSubj,
        source: `Purchase (${linkedPurchase.purchaseName || linkedPurchase._id})`,
        preserveAsIs: false
      };
    }
    if (pSubj === 'CCTV & POS INSTALLATION' || (isKream && String(linkedPurchase.projectName?.projectName || '').includes('CCTV & POS INSTALLATION'))) {
      return {
        restoredSubject: pSubj || inv.invoiceSubject,
        source: `Purchase (${linkedPurchase.purchaseName || linkedPurchase._id}) [LEGITIMATE]`,
        preserveAsIs: true
      };
    }
  }

  // 2. Check linked Project via inv.projectId or inv.Ref._id
  const projOid = toSafeObjectId(inv.projectId) || toSafeObjectId(inv.Ref?._id);
  if (projOid) {
    const linkedProj = await db.collection('projects').findOne({ _id: projOid });
    if (linkedProj && linkedProj.projectName) {
      if (String(linkedProj.projectName).includes('CCTV & POS INSTALLATION') && isKream) {
        return {
          restoredSubject: linkedProj.projectName,
          source: `Project (P-${linkedProj.projectNumber}) [LEGITIMATE]`,
          preserveAsIs: true
        };
      }
      return {
        restoredSubject: linkedProj.projectName,
        source: `Project (P-${linkedProj.projectNumber})`,
        preserveAsIs: false
      };
    }
  }

  // 3. Check linked Quotation / Estimate via inv.ReferenceName or estimate.ReferenceName === inv._id
  let linkedEst = null;
  const ref1Oid = toSafeObjectId(inv.ReferenceName);
  if (ref1Oid) {
    linkedEst = await db.collection('estimation').findOne({ _id: ref1Oid });
  }
  if (!linkedEst && inv._id) {
    linkedEst = await db.collection('estimation').findOne({
      $or: [
        { ReferenceName: String(inv._id) },
        { ReferenceName: inv._id }
      ]
    });
  }
  if (linkedEst) {
    const eSubj = linkedEst.estimateSubject || linkedEst.estimateDefect || '';
    if (eSubj) {
      return {
        restoredSubject: eSubj,
        source: `Quotation (${linkedEst.estimateName || linkedEst._id})`,
        preserveAsIs: eSubj === 'CCTV & POS INSTALLATION' && isKream
      };
    }
  }

  // 4. Check linked Maintenance Order via inv.ReferenceName or maint.ReferenceName === inv._id
  let linkedMaint = null;
  if (ref1Oid) {
    linkedMaint = await db.collection('maintenance').findOne({ _id: ref1Oid });
  }
  if (!linkedMaint && inv._id) {
    linkedMaint = await db.collection('maintenance').findOne({
      $or: [
        { ReferenceName: String(inv._id) },
        { ReferenceName: inv._id }
      ]
    });
  }
  if (linkedMaint) {
    const mSubj = linkedMaint.itemDescriptionInfo || linkedMaint.defect || linkedMaint.actionTaken || '';
    if (mSubj) {
      return {
        restoredSubject: mSubj,
        source: `Maintenance (${linkedMaint.serviceName || linkedMaint._id})`,
        preserveAsIs: false
      };
    }
  }

  // 5. No linked record found with 'CCTV & POS INSTALLATION' -> it was originally blank ('')
  return {
    restoredSubject: '',
    source: 'No linked CCTV project/quote/maintenance (restored to blank)',
    preserveAsIs: false
  };
}

async function runInvoiceSubjectRecovery(db, options = {}) {
  const dryRun = options.dryRun !== false;
  const rollbackFile = options.rollbackFile || null;
  const backupDir = path.join(__dirname, '..', 'backups');

  if (rollbackFile) {
    const resolved = path.isAbsolute(rollbackFile) ? rollbackFile : path.join(process.cwd(), rollbackFile);
    if (!fs.existsSync(resolved)) {
      throw new Error(`Backup file not found: ${resolved}`);
    }
    const snapshot = JSON.parse(fs.readFileSync(resolved, 'utf8'));
    let rolledBack = 0;
    for (const rec of snapshot.records || []) {
      const oid = toSafeObjectId(rec._id);
      if (!oid) continue;
      await db.collection('invoice').updateOne(
        { _id: oid },
        { $set: { invoiceSubject: rec.previousInvoiceSubject } }
      );
      rolledBack++;
    }
    return { mode: 'rollback', rollbackFile: resolved, restoredCount: rolledBack };
  }

  const affected = await db.collection('invoice')
    .find({ invoiceSubject: 'CCTV & POS INSTALLATION' })
    .sort({ invoiceNumber: -1 })
    .toArray();

  const report = [];
  for (const inv of affected) {
    const custRaw = inv.customerName;
    const custName = typeof custRaw === 'string'
      ? custRaw
      : (custRaw?.customerName || custRaw?.Customer || custRaw?.companyName || 'UNKNOWN');
    const resolution = await resolveTrueSubjectForInvoice(db, inv);
    report.push({
      _id: String(inv._id),
      invoiceNumber: inv.invoiceNumber,
      invoiceName: inv.invoiceName || `INV-${String(inv.invoiceNumber || '').padStart(6, '0')}`,
      customerName: custName,
      previousInvoiceSubject: inv.invoiceSubject,
      restoredSubject: resolution.restoredSubject,
      source: resolution.source,
      willUpdate: !resolution.preserveAsIs && resolution.restoredSubject !== inv.invoiceSubject
    });
  }

  let backupPath = null;
  let updatedCount = 0;

  if (!dryRun) {
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    const ts = new Date().toISOString().replace(/[:.]/g, '-');
    backupPath = path.join(backupDir, `invoice_subjects_backup_${ts}.json`);
    fs.writeFileSync(backupPath, JSON.stringify({
      createdAt: new Date().toISOString(),
      totalMatched: report.length,
      records: report
    }, null, 2));

    for (const row of report) {
      if (!row.willUpdate) continue;
      const oid = toSafeObjectId(row._id);
      if (!oid) continue;
      await db.collection('invoice').updateOne(
        { _id: oid },
        { $set: { invoiceSubject: row.restoredSubject } }
      );
      updatedCount++;
    }
  }

  return {
    mode: dryRun ? 'dry-run' : 'apply',
    totalMatched: report.length,
    updatedCount,
    backupPath,
    report
  };
}

if (require.main === module) {
  (async () => {
    const args = process.argv.slice(2);
    const apply = args.includes('--apply');
    const rollbackArg = args.find(a => a.startsWith('--rollback='));
    const rollbackFile = rollbackArg ? rollbackArg.split('=')[1] : null;
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/globalgatedb';
    await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      const result = await runInvoiceSubjectRecovery(mongoose.connection.db, {
        dryRun: !apply && !rollbackFile,
        rollbackFile
      });
      console.log(JSON.stringify(result, null, 2));
    } finally {
      await mongoose.disconnect();
    }
  })().catch((err) => {
    console.error('Recovery failed:', err);
    process.exit(1);
  });
}

module.exports = { runInvoiceSubjectRecovery, resolveTrueSubjectForInvoice };
