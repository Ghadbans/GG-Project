const mongoose = require('mongoose');

const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/globalgatedb';
const OLD_HQ_LABEL = 'Main Branch (HQ)';
const NEW_HQ_LABEL = 'HeadQuarters';

const branchModelFiles = [
  'Model',
  'dailyExpenseSchema',
  'dailyReportSchema',
  'employeeAttendanceSchema',
  'employeeSchema',
  'employeeUserSchema',
  'invoiceSchema',
  'itemSchema',
  'paymentSchema',
  'purchaseSchema',
  'recurringInvoiceSchema',
  'retainerInvoiceSchema',
  'companyProfileSchema',
  'estimationSchema',
  'projectSchema',
  'ExpenseSchema',
  'dailyExpensesMonthlyTotalSchema',
  'maintenanceSchema',
  'dailyExpensesCategorySchema',
  'rateSchema',
  'itemCodeSchema',
  'itemOutSchema',
  'commentSchema',
  'hiddenSchema',
  'imageSchema',
  'cashSchema',
  'itemPurchaseSchema',
  'itemUnitSchema',
  'itemReturnSchema',
  'itemTransferHistorySchema',
  'payRollSchema',
  'paymentRateSchema',
  'grantAccessSchema',
  'messageSchema',
  'notificationSchema',
  'purchaseOrderSchema',
  'planingSchema',
  'posSchema',
  'departmentSchema',
  'suppliersSchema',
  'rateReturnSchema',
  'blockProductionSchema',
  'blockDamageSchema',
  'blockSalesSchema',
  'blockMixerSchema',
  'BlockInventoryCount',
  'blockConfigSchema',
];

function normalizeBranchLabels(value) {
  if (Array.isArray(value)) {
    return value.map(normalizeBranchLabels);
  }
  if (value && typeof value === 'object') {
    const normalized = {};
    let changed = false;
    for (const [key, child] of Object.entries(value)) {
      const updatedChild = normalizeBranchLabels(child);
      normalized[key] = updatedChild;
      if (updatedChild !== child) changed = true;
    }
    return changed ? normalized : value;
  }
  if (typeof value === 'string' && value === OLD_HQ_LABEL) {
    return NEW_HQ_LABEL;
  }
  return value;
}

async function updateMissingBranchIds() {
  const models = branchModelFiles.map((file) => require(`../model/${file}`));

  for (const model of models) {
    try {
      const result = await model.updateMany(
        {
          $or: [
            { branchId: { $exists: false } },
            { branchId: null },
            { branchId: '' },
          ],
        },
        { $set: { branchId: 'HQ' } }
      );

      console.log(
        `Updated ${result.modifiedCount} document(s) in ${model.collection.collectionName} to set branchId=HQ`
      );
    } catch (error) {
      console.error(`Failed to update branchId for ${model.collection.collectionName}:`, error);
    }
  }
}

async function normalizeCompanyProfileBranches() {
  const CompanyProfile = require('../model/companyProfileSchema');
  const docs = await CompanyProfile.find().lean();

  for (const doc of docs) {
    let updated = false;
    const branches = Array.isArray(doc.branches) ? [...doc.branches] : [];

    for (let i = 0; i < branches.length; i += 1) {
      const value = branches[i];
      const normalized = normalizeBranchLabels(value);
      if (normalized !== value) {
        branches[i] = normalized;
        updated = true;
      }
    }

    if (updated) {
      await CompanyProfile.updateOne({ _id: doc._id }, { $set: { branches } });
      console.log(`Normalized branches for companyProfile _id=${doc._id}`);
    }
  }
}

async function main() {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Connected to MongoDB at ${mongoUri}`);
    await updateMissingBranchIds();
    await normalizeCompanyProfileBranches();

    console.log('Migration complete.');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

main();
