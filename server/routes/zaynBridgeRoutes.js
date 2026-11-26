const express = require('express');
const crypto = require('crypto');
const mongoose = require('mongoose');
const router = express.Router();

const Customer = require('../model/Model');
const Employee = require('../model/employeeSchema');
const Maintenance = require('../model/maintenanceSchema');
const Quotation = require('../model/quotationSchema');
const Invoice = require('../model/invoiceSchema');
const DeliveryNote = require('../model/deliveryNoteSchema');
const Notification = require('../model/notificationSchema');
const { toSafeObjectId } = require('../utils/objectIdUtils');
const { sendZaynMessage, normalizePhoneNumber } = require('../services/cloudWhatsAppService');

function safeEqual(a, b) {
  const ba = Buffer.from(String(a || ''));
  const bb = Buffer.from(String(b || ''));
  if (ba.length !== bb.length) return false;
  return crypto.timingSafeEqual(ba, bb);
}

function escapeRegex(str) {
  return String(str || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function verifyZaynSecret(req, res, next) {
  const expected = process.env.ZAYN_WEBHOOK_SECRET;
  if (!expected) {
    return res.status(503).json({ success: false, error: 'ZAYN_WEBHOOK_SECRET is not configured on server.' });
  }
  const provided = req.headers['x-gg-webhook-secret'];
  if (!provided || !safeEqual(provided, expected)) {
    return res.status(401).json({ success: false, error: 'Unauthorized: invalid X-GG-Webhook-Secret.' });
  }
  return next();
}

function phoneMatches(storedRaw, targetDigits) {
  if (!storedRaw || !targetDigits) return false;
  const tokens = String(storedRaw).split(/[,;/|]+/).map(t => normalizePhoneNumber(t)).filter(Boolean);
  return tokens.some(tok => tok === targetDigits);
}

function buildLast9Regex(targetDigits) {
  const last9 = String(targetDigits || '').slice(-9);
  if (last9.length < 9) return null;
  return new RegExp(last9.split('').join('[^0-9]*'));
}

function buildClientMatchFilter(cust) {
  const idStr = String(cust._id);
  const custKey = String(cust.Customer || '').trim();
  const custFull = String(cust.customerFullName || '').trim();
  const compName = String(cust.companyName || '').trim();

  const orClauses = [
    { 'customerName._id': idStr },
    { customerName: idStr }
  ];
  if (mongoose.Types.ObjectId.isValid(idStr)) {
    orClauses.push({ 'customerName._id': new mongoose.Types.ObjectId(idStr) });
  }
  if (custKey) {
    const exactKey = new RegExp(`^${escapeRegex(custKey)}$`, 'i');
    orClauses.push({ 'customerName.Customer': exactKey });
    orClauses.push({ 'customerName.customerName': exactKey });
    orClauses.push({ customerName: exactKey });
  }
  if (custFull) {
    const exactFull = new RegExp(`^${escapeRegex(custFull)}$`, 'i');
    orClauses.push({ 'customerName.customerName': exactFull });
  }
  if (compName) {
    const exactComp = new RegExp(`^${escapeRegex(compName)}$`, 'i');
    orClauses.push({ 'customerName.companyName': exactComp });
  }
  return { $or: orClauses };
}

function sanitizeMaintenanceForTechnician(m) {
  const rawCust = m.customerName;
  const customerName = typeof rawCust === 'string'
    ? rawCust
    : (rawCust?.Customer || rawCust?.customerName || rawCust?.companyName || '');

  return {
    serviceNumber: m.serviceNumber,
    serviceName: m.serviceName,
    serviceDate: m.serviceDate,
    visitDate: m.visitDate,
    status: m.status,
    customerName,
    itemDescriptionInfo: m.itemDescriptionInfo || '',
    brand: m.brand || '',
    model: m.model || '',
    serialNo: m.serialNo || '',
    warranty: m.warranty || '',
    defectDescription: m.defectDescription || '',
    action: m.action || '',
    items: Array.isArray(m.items)
      ? m.items.map(i => ({
          name: typeof i?.itemName === 'string'
            ? i.itemName
            : (i?.itemName?.itemName || i?.name || ''),
          qty: Number(i?.qty ?? i?.quantity ?? i?.itemQty ?? 0)
        }))
      : []
  };
}

// 1. Send approved reply or official PDF out via +243 827 722 222
router.post('/send-message', verifyZaynSecret, async (req, res) => {
  try {
    const { toPhone, text, pdfBase64, fileName, mediaBase64, mimeType, caption } = req.body || {};
    if (!toPhone) {
      return res.status(400).json({ success: false, error: 'toPhone is required.' });
    }
    const result = await sendZaynMessage({ toPhone, text, pdfBase64, fileName, mediaBase64, mimeType, caption });
    return res.json(result);
  } catch (err) {
    console.error('[ZaynBridge] send-message error:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
});

// 2. Strict Sender-Phone Identity & Zero-Leak ERP Lookup
router.get('/verify-sender', verifyZaynSecret, async (req, res) => {
  try {
    const targetDigits = normalizePhoneNumber(req.query.phone);
    if (!targetDigits || targetDigits.length < 9) {
      return res.json({ role: 'UNREGISTERED', registered: false, phone: '' });
    }

    const last9Regex = buildLast9Regex(targetDigits);

    // A. Check Employees FIRST (strict EMPLOYED status lock)
    const candidateEmployees = await Employee.find({
      employeePhone: { $regex: last9Regex }
    }).lean();

    const matchedEmployee = candidateEmployees.find(e => phoneMatches(e.employeePhone, targetDigits));
    if (matchedEmployee) {
      const empStatus = String(matchedEmployee.status || '').trim().toUpperCase();
      if (empStatus !== 'EMPLOYED') {
        return res.json({
          role: 'FORMER_EMPLOYEE',
          registered: false,
          access: 'DENIED',
          phone: targetDigits
        });
      }

      const roleText = `${matchedEmployee.employeeRole || ''} ${matchedEmployee.department || ''}`;
      const isTechnician = /tech|maint/i.test(roleText);

      let maintenanceOrders = [];
      if (isTechnician) {
        const techMatchers = [];
        if (matchedEmployee.employeeName) {
          techMatchers.push({ technicianAssign: new RegExp(`^${escapeRegex(matchedEmployee.employeeName.trim())}$`, 'i') });
        }
        if (matchedEmployee.employeeId) {
          techMatchers.push({ technicianAssign: new RegExp(`^${escapeRegex(matchedEmployee.employeeId.trim())}$`, 'i') });
        }
        if (techMatchers.length > 0) {
          const orders = await Maintenance.find({
            $or: techMatchers,
            status: { $regex: /^(open|pending)$/i }
          }).sort({ serviceDate: -1 }).lean();

          maintenanceOrders = orders.map(sanitizeMaintenanceForTechnician);
        }
      }

      return res.json({
        role: 'EMPLOYEE',
        registered: true,
        phone: targetDigits,
        employeeId: matchedEmployee.employeeId || String(matchedEmployee._id),
        employeeName: matchedEmployee.employeeName,
        employeeRole: matchedEmployee.employeeRole,
        department: matchedEmployee.department,
        status: matchedEmployee.status,
        isTechnician,
        maintenanceOrders
      });
    }

    // B. Check Customers (customerCompanyPhone or customerPhone)
    const candidateCustomers = await Customer.find({
      $or: [
        { customerCompanyPhone: { $regex: last9Regex } },
        { customerPhone: { $regex: last9Regex } }
      ]
    }).lean();

    const matchedCustomer = candidateCustomers.find(c =>
      phoneMatches(c.customerCompanyPhone, targetDigits) || phoneMatches(c.customerPhone, targetDigits)
    );

    if (matchedCustomer) {
      const clientFilter = buildClientMatchFilter(matchedCustomer);

      const [quotations, invoices, deliveryNotes, maintenance] = await Promise.all([
        Quotation.find({
          ...clientFilter,
          status: { $in: ['Sent', 'SENT', 'Converted', 'CONVERTED'] }
        })
          .select('quotationNumber quotationName estimateNumber estimateName quotationDate quotationSubject estimateSubject status totalInvoice total balanceDue CheckTvA tax')
          .sort({ quotationDate: -1 })
          .lean(),
        Invoice.find({
          ...clientFilter,
          status: { $in: ['Sent', 'SENT', 'Partially-Paid', 'PARTIALLY-PAID', 'Converted', 'CONVERTED'] }
        })
          .select('invoiceNumber invoiceName invoiceDate invoiceDueDate invoiceSubject status totalInvoice total balanceDue CheckTvA tax ReferenceName')
          .sort({ invoiceDate: -1 })
          .lean(),
        DeliveryNote.find({
          ...clientFilter,
          status: { $in: ['Delivered', 'DELIVERED'] }
        })
          .select('deliveryNumber deliveryName deliveryDate reason reference status deliveryAddress')
          .sort({ deliveryDate: -1 })
          .lean(),
        Maintenance.find({
          ...clientFilter,
          status: { $in: ['Open', 'OPEN', 'Pending', 'PENDING', 'Close', 'CLOSE', 'CLOSED', 'Converted', 'CONVERTED', 'Reschedule', 'RESCHEDULE', 'Cancel', 'CANCEL'] }
        })
          .select('serviceNumber serviceName serviceDate visitDate status itemDescriptionInfo defectDescription Converted ReferenceName')
          .sort({ serviceDate: -1 })
          .lean()
      ]);

      const sanitizedMaintenance = await Promise.all(
        maintenance.map(async (m) => {
          const entry = {
            serviceNumber: m.serviceNumber,
            serviceName: m.serviceName,
            serviceDate: m.serviceDate,
            visitDate: m.visitDate,
            status: m.status,
            itemDescriptionInfo: m.itemDescriptionInfo || '',
            defectDescription: m.defectDescription || ''
          };
          if (String(m.status || '').trim().toUpperCase() === 'CONVERTED' || m.Converted === true) {
            const linkedInv = invoices.find(inv =>
              (inv.ReferenceName && (String(inv.ReferenceName) === String(m._id) || String(inv.ReferenceName) === String(m.serviceName)))
            ) || await Invoice.findOne({
              ...clientFilter,
              $or: [
                { ReferenceName: String(m._id) },
                { ReferenceName: String(m.serviceName || '') }
              ]
            }).select('invoiceNumber invoiceName status').lean();

            if (linkedInv) {
              entry.linkedInvoice = {
                invoiceNumber: linkedInv.invoiceNumber,
                invoiceName: linkedInv.invoiceName,
                status: linkedInv.status
              };
            }
          }
          return entry;
        })
      );

      return res.json({
        role: 'CLIENT',
        registered: true,
        phone: targetDigits,
        clientId: String(matchedCustomer._id),
        registeredClientName: matchedCustomer.customerFullName || matchedCustomer.companyName || matchedCustomer.Customer || '',
        quotations,
        invoices: invoices.map(({ ReferenceName, ...inv }) => inv),
        deliveryNotes,
        maintenanceOrders: sanitizedMaintenance
      });
    }

    // C. Unregistered
    return res.json({ role: 'UNREGISTERED', registered: false, phone: targetDigits });
  } catch (err) {
    console.error('[ZaynBridge] verify-sender error:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
});

// 3. Technician Maintenance Update & Closure Endpoint
router.post('/maintenance-update', verifyZaynSecret, async (req, res) => {
  try {
    const {
      employeeId,
      phone,
      maintenanceId,
      serviceNumber,
      serviceName,
      status,
      actionTaken,
      note,
      beforePhotos = [],
      afterPhotos = []
    } = req.body || {};

    // Verify technician is still EMPLOYED
    let emp = null;
    if (employeeId) {
      emp = await Employee.findOne({
        $or: [
          ...(toSafeObjectId(employeeId) ? [{ _id: toSafeObjectId(employeeId) }] : []),
          { employeeId: String(employeeId).trim() }
        ]
      }).lean();
    } else if (phone) {
      const targetDigits = normalizePhoneNumber(phone);
      const last9Regex = buildLast9Regex(targetDigits);
      if (last9Regex) {
        const candidates = await Employee.find({ employeePhone: { $regex: last9Regex } }).lean();
        emp = candidates.find(e => phoneMatches(e.employeePhone, targetDigits)) || null;
      }
    }

    if (!emp || String(emp.status || '').trim().toUpperCase() !== 'EMPLOYED') {
      return res.status(403).json({ success: false, error: 'Access denied: employee is not EMPLOYED.' });
    }

    const isTechnician = /tech|maint/i.test(`${emp.employeeRole || ''} ${emp.department || ''}`);
    if (!isTechnician) {
      return res.status(403).json({ success: false, error: 'Access denied: employee is not a technician.' });
    }

    // Locate Maintenance Order
    const safeMaintId = toSafeObjectId(maintenanceId);
    const maintQuery = safeMaintId
      ? { _id: safeMaintId }
      : serviceName
        ? { serviceName: String(serviceName).trim() }
        : serviceNumber !== undefined
          ? { serviceNumber: Number(serviceNumber) }
          : null;

    if (!maintQuery) {
      return res.status(400).json({ success: false, error: 'maintenanceId, serviceName, or serviceNumber is required.' });
    }

    const order = await Maintenance.findOne(maintQuery);
    if (!order) {
      return res.status(404).json({ success: false, error: 'Maintenance order not found.' });
    }

    // Verify assignment & Open/Pending status
    const assigned = String(order.technicianAssign || '').trim().toLowerCase();
    const matchesTech = assigned && (
      assigned === String(emp.employeeName || '').trim().toLowerCase() ||
      (emp.employeeId && assigned === String(emp.employeeId).trim().toLowerCase())
    );
    if (!matchesTech) {
      return res.status(403).json({ success: false, error: 'Maintenance order is not assigned to this technician.' });
    }

    if (!/^(open|pending)$/i.test(String(order.status || '').trim())) {
      return res.status(409).json({ success: false, error: `Cannot update maintenance order with status '${order.status}'.` });
    }

    const updateFields = {};
    if (status) {
      const upper = String(status).trim().toUpperCase();
      if (!['OPEN', 'PENDING', 'CLOSE', 'CLOSED', 'RESCHEDULE'].includes(upper)) {
        return res.status(400).json({ success: false, error: `Unsupported target status '${status}'.` });
      }
      updateFields.status = upper === 'CLOSED' ? 'Close' : status;
    }
    if (actionTaken !== undefined) {
      updateFields.actionTaken = String(actionTaken).trim();
    }

    const photoLines = [];
    if (Array.isArray(beforePhotos) && beforePhotos.length > 0) {
      photoLines.push(`Before Photos: ${beforePhotos.join(', ')}`);
    }
    if (Array.isArray(afterPhotos) && afterPhotos.length > 0) {
      photoLines.push(`After Photos: ${afterPhotos.join(', ')}`);
    }
    if (note !== undefined || photoLines.length > 0) {
      const parts = [];
      if (note && String(note).trim()) parts.push(String(note).trim());
      if (photoLines.length > 0) parts.push(photoLines.join(' | '));
      updateFields.note = parts.join('\n');
    }

    const updatedOrder = await Maintenance.findByIdAndUpdate(
      order._id,
      { $set: updateFields },
      { new: true }
    ).lean();

    // Log internal notification for Branch Manager (Junior)
    const notif = await Notification.create({
      idInfo: String(updatedOrder._id),
      person: `${emp.employeeName} (Tech WhatsApp Update)`,
      reason: `Technician ${emp.employeeName} updated Maintenance ${updatedOrder.serviceName} (#${updatedOrder.serviceNumber}) to ${updatedOrder.status} via Zayn Bridge`,
      branchId: updatedOrder.branchId || emp.branchId || 'HQ'
    });

    const io = req.io || req.app?.get('io');
    if (io) {
      io.emit('newNotification', notif);
    }

    return res.json({
      success: true,
      order: sanitizeMaintenanceForTechnician(updatedOrder),
      notificationId: String(notif._id)
    });
  } catch (err) {
    console.error('[ZaynBridge] maintenance-update error:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
