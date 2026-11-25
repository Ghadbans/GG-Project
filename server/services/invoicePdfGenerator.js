const path = require('path');
const fs = require('fs');
const PDFDocument = require('pdfkit');

function formatCurrency(val) {
  const num = Number(val || 0);
  return '$' + num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatDate(raw) {
  if (!raw) return '';
  const d = new Date(raw);
  if (isNaN(d.getTime())) return String(raw);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

function safeString(val, fallback = '') {
  if (val === null || val === undefined) return fallback;
  if (typeof val === 'object') {
    return safeString(val.Customer || val.customerName || val.name || fallback);
  }
  const s = String(val).trim();
  return s.toLowerCase() === 'empty' ? fallback : (s || fallback);
}

function numberToWords(num) {
  const a = ['', 'ONE ', 'TWO ', 'THREE ', 'FOUR ', 'FIVE ', 'SIX ', 'SEVEN ', 'EIGHT ', 'NINE ', 'TEN ', 'ELEVEN ', 'TWELVE ', 'THIRTEEN ', 'FOURTEEN ', 'FIFTEEN ', 'SIXTEEN ', 'SEVENTEEN ', 'EIGHTEEN ', 'NINETEEN '];
  const b = ['', '', 'TWENTY', 'THIRTY', 'FORTY', 'FIFTY', 'SIXTY', 'SEVENTY', 'EIGHTY', 'NINETY'];

  function convertNumber(n) {
    if (n === 0) return 'ZERO';
    function inWords(n) {
      let str = '';
      if (n > 999999) {
        str += inWords(Math.floor(n / 1000000)) + ' MILLION ';
        n %= 1000000;
      }
      if (n > 999) {
        str += inWords(Math.floor(n / 1000)) + ' THOUSAND ';
        n %= 1000;
      }
      if (n > 99) {
        str += inWords(Math.floor(n / 100)) + ' HUNDRED ';
        n %= 100;
      }
      if (n > 19) {
        str += b[Math.floor(n / 10)] + ' ' + a[n % 10];
      } else if (n > 0) {
        str += a[n];
      }
      return str.trim();
    }
    return inWords(n);
  }

  const n = Number(num || 0);
  const dollars = Math.floor(n);
  const cents = Math.round((n - dollars) * 100);

  const dollarWord = convertNumber(dollars);
  const centWord = cents > 0 ? convertNumber(cents) : 'ZERO';
  return `${dollarWord} AND ${centWord} CENTS`;
}

/**
 * Generates an official Global Gate S.A.R.L invoice PDF buffer.
 * Replicates the official desktop printout and handles manual write-in items verbatim.
 * @param {Object} invoice - The invoice document object.
 * @returns {Promise<Buffer>} - Buffer containing the generated PDF document.
 */
function generateInvoicePdfBuffer(invoice) {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({
        size: 'A4',
        margins: { top: 28, bottom: 28, left: 32, right: 32 }
      });

      const buffers = [];
      doc.on('data', chunk => buffers.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(buffers)));
      doc.on('error', err => reject(err));

      const invNum = typeof invoice.invoiceNumber === 'number'
        ? `INV-${String(invoice.invoiceNumber).padStart(6, '0')}`
        : safeString(invoice.invoiceNumber, 'INV-000000');

      const invDate = formatDate(invoice.invoiceDate || invoice.dateField || new Date());
      const dueDate = formatDate(invoice.invoiceDueDate || invoice.dueDateField || invoice.invoiceDate || new Date());
      const cust = invoice.customerName || {};
      const custName = (typeof cust === 'string' ? cust : (cust.Customer || cust.customerName || cust.customerFullName || 'VALUED CUSTOMER')).toUpperCase();
      const custAddress = (typeof cust === 'object' ? (cust.billingAddress || cust.address || 'DRC CONGO, KOLWEZI') : 'DRC CONGO, KOLWEZI').toUpperCase();

      const subject = (invoice.invoiceSubject || '').toUpperCase();
      const defect = (invoice.invoiceDefect || invoice.defect || '').toUpperCase();
      const action = (invoice.actionTaken || invoice.action || '').toUpperCase();

      const totalInvoice = Number(invoice.totalInvoice ?? invoice.total ?? 0);
      const paid = Number(invoice.paid ?? invoice.amountPaid ?? invoice.total ?? 0);
      const balanceDue = Number(invoice.balanceDue !== undefined ? invoice.balanceDue : (totalInvoice - paid));
      const totalWords = invoice.totalW || numberToWords(totalInvoice);

      // ── 1. HEADER ──
      const logoPath = path.resolve(__dirname, '../assets/logo.png');
      if (fs.existsSync(logoPath)) {
        try {
          doc.image(logoPath, 32, 28, { width: 135 });
        } catch (_) {
          doc.fillColor('#093170').fontSize(16).font('Helvetica-Bold').text('GLOBAL GATE', 32, 35);
          doc.fillColor('#64748b').fontSize(8).font('Helvetica').text('GENERAL SERVICES', 32, 53);
        }
      } else {
        doc.fillColor('#093170').fontSize(16).font('Helvetica-Bold').text('GLOBAL GATE', 32, 35);
        doc.fillColor('#64748b').fontSize(8).font('Helvetica').text('GENERAL SERVICES', 32, 53);
      }

      // Company info (Right aligned)
      doc.fillColor('#093170').fontSize(10).font('Helvetica-Bold').text('GLOBAL GATE SARL', 330, 28, { width: 235, align: 'right' });
      doc.fillColor('#475569').fontSize(7.5).font('Helvetica')
        .text('RCCM RCM CD/KWZ/RCCM/22-B-00317', 330, 40, { width: 235, align: 'right' })
        .text('ID NAT ID NAT 14-H5300N11179P', 330, 50, { width: 235, align: 'right' })
        .text('AVENUE SALONGO Q/INDUSTRIEL C/MANIKA', 330, 60, { width: 235, align: 'right' })
        .text('KOLWEZI LUALABA', 330, 70, { width: 235, align: 'right' })
        .text('DRC', 330, 80, { width: 235, align: 'right' });

      // Horizontal separator line
      doc.rect(32, 94, 533, 1.2).fill('#093170');

      // ── 2. TITLE ──
      doc.fillColor('#093170').fontSize(13).font('Helvetica-Bold').text('INVOICE', 32, 102, { width: 533, align: 'center', characterSpacing: 1.5 });

      // ── 3. BILL TO & INVOICE METADATA GRID ──
      const metaY = 122;

      // Left: BILL TO
      doc.fillColor('#64748b').fontSize(7.5).font('Helvetica-Bold').text('BILL TO', 32, metaY);
      doc.fillColor('#0f172a').fontSize(9.5).font('Helvetica-Bold').text(custName, 32, metaY + 11, { width: 250 });
      doc.fillColor('#475569').fontSize(8).font('Helvetica').text(custAddress, 32, metaY + 24, { width: 250 });

      // Right: Metadata table
      const rLabelX = 370;
      const rValX = 445;
      let rCurY = metaY;

      const drawMetaRow = (label, val) => {
        if (!val) return;
        doc.fillColor('#475569').fontSize(7.5).font('Helvetica-Bold').text(label, rLabelX, rCurY, { width: 70 });
        doc.fillColor('#0f172a').fontSize(7.5).font('Helvetica').text(val, rValX, rCurY, { width: 120 });
        rCurY += 12;
      };

      drawMetaRow('INVOICE #', invNum);
      drawMetaRow('DATE', invDate);
      drawMetaRow('DUE DATE', dueDate);
      if (subject) drawMetaRow('SUBJECT', subject);
      if (defect) drawMetaRow('DEFECT', defect);

      let currentY = Math.max(metaY + 45, rCurY + 6);

      // ── 3.5 ACTION / NOTES (If present) ──
      if (action) {
        doc.rect(32, currentY, 533, 18).fillAndStroke('#f8fafc', '#e2e8f0');
        doc.fillColor('#093170').fontSize(7.5).font('Helvetica-Bold').text('ACTION', 38, currentY + 5);
        doc.fillColor('#1e293b').fontSize(7.5).font('Helvetica').text(action, 85, currentY + 5, { width: 470, ellipsis: true });
        currentY += 23;
      }

      // ── 4. ITEMS TABLE ──
      const thY = currentY;
      doc.rect(32, thY, 533, 18).fillAndStroke('#e8f7fe', '#b9e6fe');
      doc.fillColor('#093170').fontSize(7.5).font('Helvetica-Bold');
      doc.text('#', 36, thY + 5, { width: 22, align: 'center' });
      doc.text('ITEM', 62, thY + 5, { width: 175 });
      doc.text('DESCRIPTION', 240, thY + 5, { width: 155 });
      doc.text('QTY', 398, thY + 5, { width: 45, align: 'center' });
      doc.text('RATE', 445, thY + 5, { width: 55, align: 'right' });
      doc.text('TOTAL', 503, thY + 5, { width: 58, align: 'right' });

      currentY = thY + 18;

      const rawItems = Array.isArray(invoice.items) && invoice.items.length > 0
        ? invoice.items
        : (Array.isArray(invoice.itemInfo) && invoice.itemInfo.length > 0 ? invoice.itemInfo : []);

      const items = rawItems.length > 0 ? rawItems : [
        {
          itemDescription: invoice.invoiceSubject || 'Professional Services / Supply of Goods',
          itemQty: 1,
          itemRate: totalInvoice,
          itemAmount: totalInvoice
        }
      ];

      items.forEach((item, idx) => {
        if (currentY > 670) {
          doc.addPage();
          currentY = 40;
        }

        const isEven = idx % 2 === 0;
        doc.rect(32, currentY, 533, 18).fillAndStroke(isEven ? '#ffffff' : '#fcfdfe', '#e2e8f0');

        const rawName = typeof item.itemName === 'string'
          ? item.itemName
          : (item.itemName?.itemName || item.itemName?.name || '');
        const isManual = !rawName || rawName.trim().toLowerCase() === 'empty';
        
        // Exact text entered by the user in the box (spare part, material, custom item, service, or fee)
        const userManualText = (item.itemDescription || item.newDescription || '').trim();

        let displayName = '';
        let displayDesc = '';

        if (isManual) {
          // Manual write-in row:
          // The verbatim text typed by the user in the box is displayed as the item/description!
          // NEVER output "empty"!
          displayName = userManualText || 'Item';
          displayDesc = '';
        } else {
          // Catalog item row:
          displayName = rawName;
          displayDesc = userManualText;
        }

        const qty = Number(item.itemQty ?? item.itemQuantity ?? item.quantity ?? 1);
        const unit = item.unit ? ` ${String(item.unit).toUpperCase()}` : (item.itemName?.unit ? ` ${String(item.itemName.unit).toUpperCase()}` : '');
        const rate = Number(item.itemRate ?? item.itemSellingPrice ?? item.rate ?? item.price ?? 0);
        const lineTotal = Number(item.itemAmount ?? item.itemTotal ?? (qty * rate));

        doc.fillColor('#334155').fontSize(7.5).font('Helvetica');
        doc.text(String(idx + 1), 36, currentY + 5, { width: 22, align: 'center' });
        doc.text(displayName.toUpperCase(), 62, currentY + 5, { width: 175, ellipsis: true });
        doc.text(displayDesc.toUpperCase(), 240, currentY + 5, { width: 155, ellipsis: true });
        doc.text(`${qty}${unit}`, 398, currentY + 5, { width: 45, align: 'center' });
        doc.text(formatCurrency(rate), 445, currentY + 5, { width: 55, align: 'right' });
        doc.font('Helvetica-Bold').text(formatCurrency(lineTotal), 503, currentY + 5, { width: 58, align: 'right' });

        currentY += 18;
      });

      currentY += 8;

      // ── 5. SUMMARY & TOTALS ──
      const sumY = currentY;

      // Left: Thanks note
      doc.fillColor('#475569').fontSize(7.5).font('Helvetica-Bold').text('THANKS FOR YOUR BUSINESS.', 36, sumY + 5);

      // Right: Subtotal, Total, Balance Due
      const sBoxX = 350;
      const sLabelW = 120;
      const sValW = 90;
      let sY = sumY;

      doc.fillColor('#475569').fontSize(8).font('Helvetica');
      doc.text('SUB TOTAL (TAX INCLUSIVE)', sBoxX, sY, { width: sLabelW, align: 'right' });
      doc.text(formatCurrency(totalInvoice), sBoxX + sLabelW, sY, { width: sValW, align: 'right' });
      sY += 14;

      doc.text('TOTAL', sBoxX, sY, { width: sLabelW, align: 'right' });
      doc.font('Helvetica-Bold').text(formatCurrency(totalInvoice), sBoxX + sLabelW, sY, { width: sValW, align: 'right' });
      sY += 14;

      // Divider line
      doc.rect(sBoxX + 20, sY, 190, 0.8).fill('#cbd5e1');
      sY += 5;

      doc.fillColor('#093170').fontSize(9).font('Helvetica-Bold');
      doc.text('BALANCE DUE', sBoxX, sY, { width: sLabelW, align: 'right' });
      doc.text(formatCurrency(balanceDue), sBoxX + sLabelW, sY, { width: sValW, align: 'right' });
      sY += 16;

      // Total in words
      currentY = Math.max(sY, sumY + 45);
      doc.rect(32, currentY, 533, 16).fillAndStroke('#f8fafc', '#e2e8f0');
      doc.fillColor('#093170').fontSize(7.5).font('Helvetica-Bold').text('TOTAL IN WORDS:', 38, currentY + 4);
      doc.fillColor('#1e293b').fontSize(7.5).font('Helvetica-Bold').text(totalWords.toUpperCase(), 125, currentY + 4, { width: 430 });
      currentY += 24;

      // ── 6. BANKING & TERMS ──
      doc.fillColor('#093170').fontSize(7.5).font('Helvetica-Bold').text('BANK: SOFIBANQUE SA', 36, currentY);
      doc.fillColor('#334155').fontSize(7.5).font('Helvetica')
        .text('ENTITLED: GLOBAL GATE SARL', 36, currentY + 10)
        .text('BANK ACCOUNT: 00023233330214247020073', 36, currentY + 20)
        .text('CODE SWIFT: SFBXCDKIXXX', 36, currentY + 30);

      currentY += 44;

      doc.fillColor('#093170').fontSize(7.5).font('Helvetica-Bold').text('TERMS & CONDITIONS', 36, currentY);
      doc.fillColor('#64748b').fontSize(6.5).font('Helvetica').text(
        invoice.terms || 'ESTIMATES ARE FOR LABOR AND ADDITIONAL MATERIAL ONLY, MATERIALS SOLD ARE NEITHER TAKEN BACK OR EXCHANGED WE WILL NOT BE RESPONSIBLE FOR LOSS OR DAMAGE CAUSED BY FIRE, THEFT, TESTING, DEFECTED SPARE PARTS, OR ANY OTHER CAUSE BEYOND OUR CONTROL.',
        36, currentY + 10, { width: 525, lineGap: 1 }
      );

      // ── 7. FOOTER ──
      doc.rect(32, 792, 533, 0.8).fill('#093170');

      // SVG vector icon paths (Email, Phone, Web) rendered without font/encoding dependencies
      const emailIconPath = 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z';
      const phoneIconPath = 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z';
      const webIconPath = 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z';

      const drawVectorIcon = (svgPath, x, y, size = 8.5, color = '#093170') => {
        doc.save();
        doc.translate(x, y);
        doc.scale(size / 24);
        doc.path(svgPath).fillColor(color).fill();
        doc.restore();
      };

      doc.fontSize(7.5).font('Helvetica-Bold');
      const emailText = 'CONTACT@GLOBALGATE.SARL';
      const phoneText = '+243 827 722 222';
      const webText = 'WWW.GLOBALGATE.SARL';

      const emailW = doc.widthOfString(emailText);
      const phoneW = doc.widthOfString(phoneText);
      const webW = doc.widthOfString(webText);

      const iconSize = 8.5;
      const iconGap = 4;
      const secGap = 20;

      const totalFooterW = (iconSize + iconGap + emailW) + secGap + (iconSize + iconGap + phoneW) + secGap + (iconSize + iconGap + webW);
      const footStartX = 32 + (533 - totalFooterW) / 2;
      const footY = 800;

      let curFootX = footStartX;
      drawVectorIcon(emailIconPath, curFootX, footY - 0.5, iconSize, '#093170');
      curFootX += iconSize + iconGap;
      doc.fillColor('#093170').text(emailText, curFootX, footY, { lineBreak: false });
      curFootX += emailW + secGap;

      drawVectorIcon(phoneIconPath, curFootX, footY - 0.5, iconSize, '#093170');
      curFootX += iconSize + iconGap;
      doc.fillColor('#093170').text(phoneText, curFootX, footY, { lineBreak: false });
      curFootX += phoneW + secGap;

      drawVectorIcon(webIconPath, curFootX, footY - 0.5, iconSize, '#093170');
      curFootX += iconSize + iconGap;
      doc.fillColor('#093170').text(webText, curFootX, footY, { lineBreak: false });

      doc.end();
    } catch (err) {
      reject(err);
    }
  });
}

function drawCompanyHeader(doc, title) {
  const logoPath = path.resolve(__dirname, '../assets/logo.png');
  if (fs.existsSync(logoPath)) {
    try {
      doc.image(logoPath, 32, 28, { width: 135 });
    } catch (_) {
      doc.fillColor('#093170').fontSize(16).font('Helvetica-Bold').text('GLOBAL GATE', 32, 35);
      doc.fillColor('#64748b').fontSize(8).font('Helvetica').text('GENERAL SERVICES', 32, 53);
    }
  } else {
    doc.fillColor('#093170').fontSize(16).font('Helvetica-Bold').text('GLOBAL GATE', 32, 35);
    doc.fillColor('#64748b').fontSize(8).font('Helvetica').text('GENERAL SERVICES', 32, 53);
  }

  doc.fillColor('#093170').fontSize(10).font('Helvetica-Bold').text('GLOBAL GATE SARL', 330, 28, { width: 235, align: 'right' });
  doc.fillColor('#475569').fontSize(7.5).font('Helvetica')
    .text('RCCM RCM CD/KWZ/RCCM/22-B-00317', 330, 40, { width: 235, align: 'right' })
    .text('ID NAT ID NAT 14-H5300N11179P', 330, 50, { width: 235, align: 'right' })
    .text('AVENUE SALONGO Q/INDUSTRIEL C/MANIKA', 330, 60, { width: 235, align: 'right' })
    .text('KOLWEZI LUALABA', 330, 70, { width: 235, align: 'right' })
    .text('DRC', 330, 80, { width: 235, align: 'right' });

  doc.rect(32, 94, 533, 1.2).fill('#093170');
  doc.fillColor('#093170').fontSize(13).font('Helvetica-Bold').text(title, 32, 102, { width: 533, align: 'center', characterSpacing: 1.5 });
}

function drawBankDetailsBlock(doc, startY) {
  let y = startY;
  doc.fillColor('#0f172a').fontSize(7.5).font('Helvetica-Bold')
    .text('BANK: SOFIBANQUE SA', 32, y)
    .text('ENTITLED: GLOBAL GATE SARL', 32, y + 11)
    .text('BANK ACCOUNT: 00023233330214247020073', 32, y + 22)
    .text('CODE SWIFT: SFBXCDKIXXX', 32, y + 33);
  return y + 48;
}

function drawCompanyFooter(doc) {
  doc.rect(32, 790, 533, 0.8).fill('#cbd5e1');
  const emailIconPath = 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z';
  const phoneIconPath = 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z';
  const webIconPath = 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z';
  const drawIcon = (svgPath, x, y, size, color) => {
    doc.save();
    doc.translate(x, y);
    doc.scale(size / 24);
    doc.path(svgPath).fillColor(color).fill();
    doc.restore();
  };

  doc.fontSize(7.5).font('Helvetica-Bold');
  const emailText = 'CONTACT@GLOBALGATE.SARL';
  const phoneText = '+243 827 722 222';
  const webText = 'WWW.GLOBALGATE.SARL';
  const emailW = doc.widthOfString(emailText);
  const phoneW = doc.widthOfString(phoneText);
  const webW = doc.widthOfString(webText);
  const iconSize = 8.5;
  const iconGap = 4;
  const secGap = 20;
  const totalFooterW = (iconSize + iconGap + emailW) + secGap + (iconSize + iconGap + phoneW) + secGap + (iconSize + iconGap + webW);
  let curFootX = 32 + (533 - totalFooterW) / 2;
  const footY = 800;

  drawIcon(emailIconPath, curFootX, footY - 0.5, iconSize, '#093170');
  curFootX += iconSize + iconGap;
  doc.fillColor('#093170').text(emailText, curFootX, footY, { lineBreak: false });
  curFootX += emailW + secGap;

  drawIcon(phoneIconPath, curFootX, footY - 0.5, iconSize, '#093170');
  curFootX += iconSize + iconGap;
  doc.fillColor('#093170').text(phoneText, curFootX, footY, { lineBreak: false });
  curFootX += phoneW + secGap;

  drawIcon(webIconPath, curFootX, footY - 0.5, iconSize, '#093170');
  curFootX += iconSize + iconGap;
  doc.fillColor('#093170').text(webText, curFootX, footY, { lineBreak: false });
}

/**
 * Generates an official Global Gate S.A.R.L Payment PDF buffer matching the system Print-to-PDF template.
 */
function generatePaymentPdfBuffer(payment) {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({
        size: 'A4',
        margins: { top: 28, bottom: 28, left: 32, right: 32 }
      });
      const buffers = [];
      doc.on('data', chunk => buffers.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(buffers)));
      doc.on('error', err => reject(err));

      const payNum = typeof payment.paymentNumber === 'number'
        ? `PAY-${String(payment.paymentNumber).padStart(6, '0')}`
        : safeString(payment.paymentNumber, 'PAY-000000');
      const payDate = formatDate(payment.paymentDate || new Date());
      const cust = payment.customerName || {};
      const custName = (typeof cust === 'string' ? cust : (cust.Customer || cust.customerName || cust.customerFullName || 'VALUED CUSTOMER')).toUpperCase();
      const custAddress = (typeof cust === 'object' ? (cust.billingAddress || cust.address || '') : '').toUpperCase();

      drawCompanyHeader(doc, 'PAYMENT');

      const metaY = 124;
      doc.fillColor('#64748b').fontSize(7.5).font('Helvetica-BoldOblique').text('PAYMENT FROM', 32, metaY);
      doc.fillColor('#0f172a').fontSize(9.5).font('Helvetica-Bold').text(custName, 32, metaY + 11, { width: 250 });
      if (custAddress) {
        doc.fillColor('#475569').fontSize(8).font('Helvetica').text(custAddress, 32, metaY + 24, { width: 250 });
      }

      let rCurY = metaY;
      const modeText = safeString(payment.modes || payment.mode || 'CASH').toUpperCase();
      const drawMeta = (label, val, highlight = false) => {
        if (!val) return;
        doc.fillColor('#0f172a').fontSize(7.5).font('Helvetica-Bold').text(label, 375, rCurY, { width: 55 });
        if (highlight) {
          doc.rect(433, rCurY - 2, 42, 12).fill('#fef08a');
          doc.fillColor('#0f172a').fontSize(7.5).font('Helvetica-Bold').text(String(val), 435, rCurY, { width: 125 });
        } else {
          doc.fillColor('#0f172a').fontSize(7.5).font('Helvetica').text(String(val), 435, rCurY, { width: 125 });
        }
        rCurY += 13;
      };
      drawMeta('PAY #', payNum);
      drawMeta('DATE', payDate);
      drawMeta('MODE', modeText, true);
      drawMeta('REASON', safeString(payment.reason || 'INVOICE').toUpperCase());
      drawMeta('TYPE', 'PAYMENT');
      drawMeta('STATUS', safeString(payment.status || 'CLEARED').toUpperCase());

      let y = Math.max(metaY + 56, rCurY + 12);
      if (payment.description) {
        doc.fillColor('#0f172a').fontSize(7.5).font('Helvetica-Bold').text('DESCRIPTION', 32, y, { width: 75 });
        doc.fillColor('#334155').font('Helvetica').text(safeString(payment.description).toUpperCase(), 115, y, { width: 440 });
        y += 18;
      }

      const drawTableHeader = (topY) => {
        doc.rect(32, topY, 533, 18).fill('#eff6ff');
        doc.rect(32, topY, 533, 18).strokeColor('#cbd5e1').lineWidth(0.5).stroke();
        doc.fillColor('#093170').fontSize(7.5).font('Helvetica-Bold');
        doc.text('#', 36, topY + 5, { width: 18, align: 'center' });
        doc.text('REFERENCE', 58, topY + 5, { width: 65 });
        doc.text('DATE', 128, topY + 5, { width: 60 });
        doc.text('SUBJECT', 194, topY + 5, { width: 200 });
        doc.text('INVOICE AMOUNT', 398, topY + 5, { width: 80, align: 'right' });
        doc.text('AMOUNT PAID', 482, topY + 5, { width: 78, align: 'right' });
      };

      drawTableHeader(y);
      y += 18;

      const refs = Array.isArray(payment.TotalAmount) && payment.TotalAmount.length > 0
        ? payment.TotalAmount
        : (Array.isArray(payment.referenceNumber) ? payment.referenceNumber : []);

      if (refs.length === 0) {
        doc.rect(32, y, 533, 20).strokeColor('#e2e8f0').lineWidth(0.5).stroke();
        doc.fillColor('#0f172a').fontSize(7.5).font('Helvetica').text('1', 36, y + 6, { width: 18, align: 'center' });
        doc.text('-', 58, y + 6, { width: 65 });
        doc.text(payDate, 128, y + 6, { width: 60 });
        doc.text('DIRECT PAYMENT / CREDIT SETTLEMENT', 194, y + 6, { width: 200 });
        doc.text(formatCurrency(payment.amount || payment.PaymentReceived || 0), 398, y + 6, { width: 80, align: 'right' });
        doc.text(formatCurrency(payment.amount || payment.PaymentReceived || 0), 482, y + 6, { width: 78, align: 'right' });
        y += 20;
      } else {
        refs.forEach((row, idx) => {
          if (y > 680) {
            drawCompanyFooter(doc);
            doc.addPage();
            drawTableHeader(32);
            y = 50;
          }
          const refNum = row.Ref ? `INV-${String(row.Ref).padStart(6, '0')}` : (row.invoiceNumber ? `INV-${String(row.invoiceNumber).padStart(6, '0')}` : '-');
          const refDate = row.invoiceDate ? formatDate(row.invoiceDate) : payDate;
          const subj = safeString(row.invoiceSubject || row.subject || '-', '-').toUpperCase();
          const invAmt = formatCurrency(row.totalInvoice || row.total || row.amount || 0);
          const paidAmt = formatCurrency(row.total || row.amountPaid || row.Amount || 0);

          const subjH = doc.heightOfString(subj, { width: 200 });
          const rowH = Math.max(20, subjH + 10);
          doc.rect(32, y, 533, rowH).strokeColor('#e2e8f0').lineWidth(0.5).stroke();
          doc.fillColor('#0f172a').fontSize(7.5).font('Helvetica');
          doc.text(String(idx + 1), 36, y + 6, { width: 18, align: 'center' });
          doc.text(refNum, 58, y + 6, { width: 65 });
          doc.text(refDate, 128, y + 6, { width: 60 });
          doc.text(subj, 194, y + 6, { width: 200 });
          doc.text(invAmt, 398, y + 6, { width: 80, align: 'right' });
          doc.text(paidAmt, 482, y + 6, { width: 78, align: 'right' });
          y += rowH;
        });
      }

      y += 10;
      const amtUsd = Number(payment.amount || payment.PaymentReceived || payment.AmountPaidDollar || 0);
      const amtFc = Number(payment.AmountPaidFC || 0);
      const totalPaidUsd = Number(payment.PaymentReceived || payment.amount || amtUsd);
      const creditVal = Number(payment.remaining || payment.credit || 0);

      const drawSummaryLine = (label, val) => {
        doc.moveTo(310, y + 18).lineTo(565, y + 18).strokeColor('#cbd5e1').lineWidth(0.5).stroke();
        doc.fillColor('#334155').fontSize(7.5).font('Helvetica').text(label, 315, y + 5, { width: 150, align: 'center' });
        doc.fillColor('#0f172a').font('Helvetica').text(val, 470, y + 5, { width: 92, align: 'right' });
        y += 20;
      };
      drawSummaryLine('AMOUNT RECEIVED', formatCurrency(amtUsd));
      drawSummaryLine('AMOUNT PAID FC', `FC${amtFc.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
      drawSummaryLine('AMOUNT PAID $', formatCurrency(amtUsd));
      drawSummaryLine('TOTAL PAID USD', formatCurrency(totalPaidUsd));
      drawSummaryLine('CREDIT', formatCurrency(creditVal));

      y += 12;
      drawBankDetailsBlock(doc, y);
      drawCompanyFooter(doc);
      doc.end();
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Generates an official Global Gate S.A.R.L Quotation PDF buffer matching the system Print-to-PDF template.
 */
function generateQuotationPdfBuffer(estimate) {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({
        size: 'A4',
        margins: { top: 28, bottom: 28, left: 32, right: 32 }
      });
      const buffers = [];
      doc.on('data', chunk => buffers.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(buffers)));
      doc.on('error', err => reject(err));

      const estNum = typeof estimate.estimateNumber === 'number'
        ? `Q-${String(estimate.estimateNumber).padStart(6, '0')}`
        : safeString(estimate.estimateNumber, 'Q-000000');
      const estDate = formatDate(estimate.estimateDate || new Date());
      const cust = estimate.customerName || {};
      const custName = (typeof cust === 'string' ? cust : (cust.Customer || cust.customerName || cust.customerFullName || 'VALUED CUSTOMER')).toUpperCase();
      const custAddress = (typeof cust === 'object' ? (cust.billingAddress || cust.address || 'DRC CONGO, KOLWEZI') : 'DRC CONGO, KOLWEZI').toUpperCase();

      drawCompanyHeader(doc, 'QUOTATION');

      const metaY = 124;
      doc.fillColor('#64748b').fontSize(7.5).font('Helvetica-Bold').text('QUOTATION FOR', 32, metaY);
      doc.fillColor('#0f172a').fontSize(9.5).font('Helvetica-Bold').text(custName, 32, metaY + 11, { width: 250 });
      doc.fillColor('#475569').fontSize(8).font('Helvetica').text(custAddress, 32, metaY + 24, { width: 250 });

      let rCurY = metaY;
      const drawMeta = (label, val) => {
        if (!val) return;
        doc.fillColor('#0f172a').fontSize(7.5).font('Helvetica-Bold').text(label, 355, rCurY, { width: 70 });
        doc.fillColor('#0f172a').fontSize(7.5).font('Helvetica').text(String(val), 430, rCurY, { width: 135 });
        rCurY += 13;
      };
      drawMeta('QUOTATION #', estNum);
      drawMeta('DATE', estDate);
      if (estimate.estimateSubject) drawMeta('SUBJECT', safeString(estimate.estimateSubject).toUpperCase());

      let y = Math.max(metaY + 54, rCurY + 10);
      const topNote = safeString(estimate.estimateNote || '', '');
      if (topNote) {
        doc.fillColor('#0f172a').fontSize(7.5).font('Helvetica-Bold').text('NOTE', 32, y);
        y += 11;
        doc.fillColor('#334155').fontSize(7.5).font('Helvetica').text(topNote.toUpperCase(), 32, y, { width: 533 });
        y += doc.heightOfString(topNote.toUpperCase(), { width: 533 }) + 10;
      }

      const drawHeader = (topY) => {
        doc.rect(32, topY, 533, 18).fill('#eff6ff');
        doc.rect(32, topY, 533, 18).strokeColor('#cbd5e1').lineWidth(0.5).stroke();
        doc.fillColor('#093170').fontSize(7.5).font('Helvetica-Bold');
        doc.text('#', 36, topY + 5, { width: 18, align: 'center' });
        doc.text('ITEM', 58, topY + 5, { width: 120 });
        doc.text('DESCRIPTION', 182, topY + 5, { width: 190 });
        doc.text('QTY', 376, topY + 5, { width: 48, align: 'right' });
        doc.text('RATE', 428, topY + 5, { width: 65, align: 'right' });
        doc.text('TOTAL', 497, topY + 5, { width: 65, align: 'right' });
      };

      drawHeader(y);
      y += 18;
      const items = Array.isArray(estimate.items) ? estimate.items : [];
      items.forEach((item, idx) => {
        if (y > 680) {
          drawCompanyFooter(doc);
          doc.addPage();
          drawHeader(32);
          y = 50;
        }
        const iName = safeString(item.itemName && typeof item.itemName === 'object' ? item.itemName.itemName : item.itemName, '-').toUpperCase();
        const desc = safeString(item.itemDescription || item.newDescription || '', '-').toUpperCase();
        const qty = `${Number(item.itemQty || 0)} ${safeString(item.unit, '')}`.trim().toUpperCase();
        const rate = formatCurrency(item.itemRate || 0);
        const amt = formatCurrency(item.itemAmount || (Number(item.itemQty || 0) * Number(item.itemRate || 0)));

        const nameH = doc.heightOfString(iName, { width: 120 });
        const descH = doc.heightOfString(desc, { width: 190 });
        const rowH = Math.max(20, Math.max(nameH, descH) + 10);
        doc.rect(32, y, 533, rowH).strokeColor('#e2e8f0').lineWidth(0.5).stroke();
        doc.fillColor('#0f172a').fontSize(7.5).font('Helvetica');
        doc.text(String(idx + 1), 36, y + 6, { width: 18, align: 'center' });
        doc.text(iName, 58, y + 6, { width: 120 });
        doc.text(desc, 182, y + 6, { width: 190 });
        doc.text(qty, 376, y + 6, { width: 48, align: 'right' });
        doc.text(rate, 428, y + 6, { width: 65, align: 'right' });
        doc.text(amt, 497, y + 6, { width: 65, align: 'right' });
        y += rowH;
      });

      y += 10;
      const subTotal = Number(estimate.subTotal || 0);
      const tax = Number(estimate.total || 0);
      const totalInvoice = Number(estimate.totalInvoice ?? (subTotal + tax));
      const noteText = safeString(estimate.note || 'WE LOOK FORWARD TO THE OPPORTUNITY TO DO BUSINESS WITH YOU.').toUpperCase();
      doc.fillColor('#334155').fontSize(7.5).font('Helvetica').text(noteText, 32, y + 6, { width: 220 });

      const drawTotalLine = (label, val, bold = false, highlightColor = '#0f172a') => {
        doc.moveTo(270, y + 20).lineTo(565, y + 20).strokeColor('#cbd5e1').lineWidth(0.5).stroke();
        doc.fillColor('#334155').fontSize(7.5).font(bold ? 'Helvetica-Bold' : 'Helvetica').text(label, 275, y + 6, { width: 155, align: 'center' });
        doc.fillColor(highlightColor).font(bold ? 'Helvetica-Bold' : 'Helvetica').text(val, 435, y + 6, { width: 127, align: 'right' });
        y += 22;
      };
      drawTotalLine('SUB TOTAL (TAX EXCLUDED)', formatCurrency(subTotal));
      if (tax > 0) drawTotalLine('TVA / TAX', formatCurrency(tax));
      drawTotalLine('TOTAL', formatCurrency(totalInvoice));
      drawTotalLine('BALANCE DUE', formatCurrency(totalInvoice), true, '#093170');

      const totalWords = (estimate.totalW || numberToWords(totalInvoice)).toUpperCase();
      doc.fillColor('#334155').fontSize(7.5).font('Helvetica').text('TOTAL IN WORDS', 275, y + 5, { width: 100 });
      doc.fillColor('#0f172a').fontSize(7.5).font('Helvetica').text(totalWords, 378, y + 5, { width: 185 });
      y += 32;

      y = drawBankDetailsBlock(doc, y);
      y += 6;
      const terms = safeString(
        estimate.terms ||
        'QUOTE VALID FOR 7 DAYS (SUBJECT TO STOCK/MARKET CHANGES). PAYMENT: 50% DEPOSIT / 40% MID-PROJECT / 10% UPON COMPLETION. ALL MATERIAL SALES ARE FINAL. WE ARE NOT RESPONSIBLE FOR LOSS, THEFT, OR DAMAGE CAUSED BY DEFECTIVE PARTS OR EXTERNAL FACTORS.'
      ).toUpperCase();
      doc.fillColor('#0f172a').fontSize(7.5).font('Helvetica-Bold').text('TERMS & CONDITIONS', 32, y);
      y += 11;
      doc.fillColor('#334155').fontSize(7).font('Helvetica').text(terms, 32, y, { width: 533 });

      drawCompanyFooter(doc);
      doc.end();
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = {
  generateInvoicePdfBuffer,
  generatePaymentPdfBuffer,
  generateQuotationPdfBuffer
};
