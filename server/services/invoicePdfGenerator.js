const PDFDocument = require('pdfkit');

function formatCurrency(val) {
  const num = Number(val || 0);
  return '$' + num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function safeString(val, fallback = '') {
  if (val === null || val === undefined) return fallback;
  if (typeof val === 'object') {
    return safeString(val.Customer || val.customerName || val.name || fallback);
  }
  return String(val).trim() || fallback;
}

/**
 * Generates an official Global Gate S.A.R.L invoice PDF buffer.
 * @param {Object} invoice - The invoice document object.
 * @returns {Promise<Buffer>} - Buffer containing the generated PDF document.
 */
function generateInvoicePdfBuffer(invoice) {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({
        size: 'A4',
        margins: { top: 36, bottom: 36, left: 36, right: 36 }
      });

      const buffers = [];
      doc.on('data', chunk => buffers.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(buffers)));
      doc.on('error', err => reject(err));

      const invNum = typeof invoice.invoiceNumber === 'number'
        ? `INV-${String(invoice.invoiceNumber).padStart(6, '0')}`
        : safeString(invoice.invoiceNumber, 'INV-000000');
      
      const invDate = invoice.invoiceDate || invoice.dateField || new Date().toLocaleDateString('en-GB');
      const custName = safeString(invoice.customerName, 'VALUED CLIENT');
      const custPhone = safeString(invoice.phone || invoice.customerPhone || '');
      const status = safeString(invoice.status, 'SENT').toUpperCase();

      const totalInvoice = Number(invoice.totalInvoice ?? invoice.total ?? 0);
      const paid = Number(invoice.paid ?? invoice.amountPaid ?? 0);
      const balanceDue = Number(invoice.balanceDue !== undefined ? invoice.balanceDue : (totalInvoice - paid));

      // ── 1. CORPORATE HEADER ──
      // Top accent bar
      doc.rect(36, 36, 523, 6).fill('#1a237e');

      // Company info (Left)
      doc.fillColor('#1a237e').fontSize(20).font('Helvetica-Bold').text('GLOBAL GATE S.A.R.L', 36, 52);
      doc.fillColor('#555555').fontSize(9).font('Helvetica')
        .text('Industrial & Mining Supplies • Contracting • Security Systems', 36, 76)
        .text('Showroom & Warehouse: Kolwezi, Lualaba Province, D.R. Congo', 36, 88)
        .text('Tel / WhatsApp: +243 827 722 222 • contact@globalgate.sarl', 36, 100);

      // Invoice info box (Right)
      doc.rect(380, 52, 179, 65).fillAndStroke('#f8fafc', '#cbd5e1');
      doc.fillColor('#1a237e').fontSize(14).font('Helvetica-Bold').text(invNum, 390, 60, { width: 160, align: 'center' });
      doc.fillColor('#333333').fontSize(9).font('Helvetica')
        .text(`Date: ${invDate}`, 390, 80, { width: 160, align: 'center' })
        .text(`Status: ${status}`, 390, 95, { width: 160, align: 'center' });

      // ── 2. BILL TO SECTION ──
      doc.rect(36, 130, 523, 50).fillAndStroke('#f1f5f9', '#e2e8f0');
      doc.fillColor('#1a237e').fontSize(10).font('Helvetica-Bold').text('FACTURÉ À / BILL TO:', 46, 138);
      doc.fillColor('#1e293b').fontSize(11).font('Helvetica-Bold').text(custName, 46, 152);
      if (custPhone) {
        doc.fillColor('#64748b').fontSize(9).font('Helvetica').text(`Phone / WhatsApp: ${custPhone}`, 46, 166);
      }

      // ── 3. ITEMS TABLE ──
      const tableTop = 195;
      doc.rect(36, tableTop, 523, 22).fill('#283593');
      doc.fillColor('#ffffff').fontSize(9).font('Helvetica-Bold');
      doc.text('#', 44, tableTop + 6, { width: 25, align: 'left' });
      doc.text('DESCRIPTION / ARTICLE', 75, tableTop + 6, { width: 260, align: 'left' });
      doc.text('QTY', 345, tableTop + 6, { width: 45, align: 'center' });
      doc.text('UNIT PRICE', 395, tableTop + 6, { width: 75, align: 'right' });
      doc.text('TOTAL', 475, tableTop + 6, { width: 75, align: 'right' });

      let currentY = tableTop + 24;
      const rawItems = Array.isArray(invoice.items) && invoice.items.length > 0
        ? invoice.items
        : (Array.isArray(invoice.itemInfo) && invoice.itemInfo.length > 0 ? invoice.itemInfo : []);

      const items = rawItems.length > 0 ? rawItems : [
        {
          itemName: invoice.invoiceSubject || 'Professional Services / Supply of Goods',
          itemQuantity: 1,
          itemSellingPrice: totalInvoice,
          itemAmount: totalInvoice
        }
      ];

      items.forEach((item, idx) => {
        if (currentY > 700) {
          doc.addPage();
          currentY = 40;
        }

        const isEven = idx % 2 === 0;
        doc.rect(36, currentY, 523, 20).fill(isEven ? '#ffffff' : '#f8fafc');

        const itemName = safeString(item.itemName?.itemName || item.itemName?.name || item.itemName || item.itemDescription || `Item #${idx + 1}`);
        const qty = Number(item.itemQty ?? item.itemQuantity ?? item.quantity ?? 1);
        const rate = Number(item.itemRate ?? item.itemSellingPrice ?? item.rate ?? item.price ?? 0);
        const lineTotal = Number(item.itemAmount ?? item.itemTotal ?? (qty * rate));

        doc.fillColor('#334155').fontSize(9).font('Helvetica');
        doc.text(String(idx + 1), 44, currentY + 5, { width: 25, align: 'left' });
        doc.text(itemName, 75, currentY + 5, { width: 260, ellipsis: true });
        doc.text(String(qty), 345, currentY + 5, { width: 45, align: 'center' });
        doc.text(formatCurrency(rate), 395, currentY + 5, { width: 75, align: 'right' });
        doc.font('Helvetica-Bold').text(formatCurrency(lineTotal), 475, currentY + 5, { width: 75, align: 'right' });

        currentY += 21;
      });

      // Bottom line of table
      doc.rect(36, currentY, 523, 1).fill('#cbd5e1');
      currentY += 15;

      // ── 4. SUMMARY TOTALS ──
      if (currentY > 680) {
        doc.addPage();
        currentY = 40;
      }

      const totalsBoxX = 350;
      doc.rect(totalsBoxX, currentY, 209, 85).fillAndStroke('#f8fafc', '#cbd5e1');
      doc.fillColor('#475569').fontSize(9).font('Helvetica');
      doc.text('Total Invoice:', totalsBoxX + 10, currentY + 12);
      doc.text(formatCurrency(totalInvoice), totalsBoxX + 10, currentY + 12, { width: 185, align: 'right' });

      doc.text('Amount Paid:', totalsBoxX + 10, currentY + 30);
      doc.text(formatCurrency(paid), totalsBoxX + 10, currentY + 30, { width: 185, align: 'right' });

      doc.rect(totalsBoxX, currentY + 48, 209, 1).fill('#cbd5e1');
      doc.fillColor('#1a237e').fontSize(11).font('Helvetica-Bold');
      doc.text('Balance Due:', totalsBoxX + 10, currentY + 58);
      doc.fillColor('#dc2626').text(formatCurrency(balanceDue), totalsBoxX + 10, currentY + 58, { width: 185, align: 'right' });

      // ── 5. PAYMENT INSTRUCTIONS & CLOSING ──
      const notesY = currentY;
      doc.fillColor('#1a237e').fontSize(9).font('Helvetica-Bold').text('MODALITÉS DE PAIEMENT / PAYMENT TERMS:', 36, notesY + 5);
      doc.fillColor('#475569').fontSize(8).font('Helvetica')
        .text('• Règlement par virement bancaire ou espèces contre quittance officielle.', 36, notesY + 18)
        .text('• Merci de mentionner le numéro de facture lors de votre virement.', 36, notesY + 30)
        .text('• Contactez notre service comptabilité au +243 827 722 222.', 36, notesY + 42);

      // Bottom footer
      doc.rect(36, 780, 523, 1).fill('#e2e8f0');
      doc.fillColor('#94a3b8').fontSize(8).font('Helvetica')
        .text('Global Gate S.A.R.L • Document officiel généré par le système de gestion • Tous droits réservés', 36, 788, { align: 'center', width: 523 });

      doc.end();
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = {
  generateInvoicePdfBuffer
};
