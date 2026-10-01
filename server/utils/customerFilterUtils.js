const mongoose = require('mongoose');
const customerSchema = require('../model/Model');

/**
 * Builds a robust MongoDB $or filter that matches a customer across all legacy and current formats:
 * - Object with _id (as String or ObjectId)
 * - Object with id (as String or ObjectId)
 * - Object with Customer, customerName, companyName, customerFullName (String or exact Regex)
 * - Direct String/ObjectId ID
 * - Direct String name (String or exact Regex)
 *
 * @param {string|mongoose.Types.ObjectId} customerId - The customer ID or name to filter by.
 * @returns {Promise<{ $or: Array<Object> }|null>}
 */
async function buildCustomerFilter(customerId) {
  if (!customerId) return null;
  const cIdStr = customerId.toString().trim();
  if (!cIdStr) return null;

  let cIdObj = null;
  try {
    if (mongoose.Types.ObjectId.isValid(cIdStr)) {
      cIdObj = new mongoose.Types.ObjectId(cIdStr);
    }
  } catch (e) {}

  const possibleIds = [cIdStr];
  if (cIdObj) possibleIds.push(cIdObj);

  const orConditions = [
    { 'customerName._id': { $in: possibleIds } },
    { 'customerName.id': { $in: possibleIds } },
    { 'customerId': { $in: possibleIds } },
    { 'customerName': { $in: possibleIds } },
    { 'customer._id': { $in: possibleIds } },
    { 'customer.id': { $in: possibleIds } }
  ];

  try {
    let custDoc = null;
    if (cIdObj) {
      custDoc = await customerSchema.findById(cIdObj).select('Customer customerName customerFullName companyName').lean();
    }
    if (!custDoc) {
      custDoc = await customerSchema.findOne({
        $or: [
          { Customer: cIdStr },
          { customerName: cIdStr },
          { customerFullName: cIdStr },
          { companyName: cIdStr }
        ]
      }).select('Customer customerName customerFullName companyName').lean();
    }

    const nameList = [];
    if (custDoc) {
      if (custDoc.Customer) nameList.push(custDoc.Customer);
      if (custDoc.customerName) nameList.push(custDoc.customerName);
      if (custDoc.customerFullName) nameList.push(custDoc.customerFullName);
      if (custDoc.companyName) nameList.push(custDoc.companyName);
    } else if (!cIdObj) {
      // If customerId is not a valid ObjectId and no doc found, treat cIdStr itself as a potential customer name
      nameList.push(cIdStr);
    }

    const uniqueNames = Array.from(new Set(nameList.map(n => (n || '').toString().trim()).filter(Boolean)));

    for (const name of uniqueNames) {
      const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const exactRegex = new RegExp(`^${escaped}$`, 'i');

      orConditions.push(
        { 'customerName': name },
        { 'customerName': exactRegex },
        { 'customerName.Customer': name },
        { 'customerName.Customer': exactRegex },
        { 'customerName.customerName': name },
        { 'customerName.customerName': exactRegex },
        { 'customerName.companyName': name },
        { 'customerName.companyName': exactRegex },
        { 'customerName.customerFullName': name },
        { 'customerName.customerFullName': exactRegex },
        { 'customer.Customer': name },
        { 'customer.Customer': exactRegex },
        { 'customer.customerName': name },
        { 'customer.customerName': exactRegex },
        { 'customer': name },
        { 'customer': exactRegex },
        { 'Customer': name },
        { 'Customer': exactRegex }
      );
    }
  } catch (err) {
    console.error('Error in buildCustomerFilter:', err);
  }

  return { $or: orConditions };
}

/**
 * Safely attaches a customer filter to an existing MongoDB filter object.
 * Preserves branchId, status, and existing $or or $and clauses.
 *
 * @param {Object} filter - The query filter object to mutate.
 * @param {Object} customerFilter - The filter returned by buildCustomerFilter.
 * @returns {Object} The updated filter object.
 */
function applyCustomerFilter(filter, customerFilter) {
  if (!customerFilter || !customerFilter.$or || customerFilter.$or.length === 0) {
    return filter;
  }
  if (filter.$or) {
    const existingOr = filter.$or;
    delete filter.$or;
    if (filter.$and) {
      filter.$and.push({ $or: existingOr }, customerFilter);
    } else {
      filter.$and = [{ $or: existingOr }, customerFilter];
    }
  } else if (filter.$and) {
    filter.$and.push(customerFilter);
  } else {
    filter.$or = customerFilter.$or;
  }
  return filter;
}

module.exports = {
  buildCustomerFilter,
  applyCustomerFilter
};
