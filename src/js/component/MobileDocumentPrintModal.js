import React, { useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  IconButton,
  Divider
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PrintIcon from '@mui/icons-material/Print';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import useCompanyProfile from '../hooks/useCompanyProfile';
import defaultLogo from '../img/images.png';

function safeText(val, fallback = '') {
  if (val === null || val === undefined) return fallback;
  if (typeof val === 'string' || typeof val === 'number') return String(val);
  if (typeof val === 'object') {
    if (val.customerName) return safeText(val.customerName, fallback);
    if (val.Customer) return safeText(val.Customer, fallback);
    if (val.itemName) return safeText(val.itemName, fallback);
    if (val.name) return safeText(val.name, fallback);
    if (val.description) return safeText(val.description, fallback);
    return fallback;
  }
  return String(val);
}

function formatMoney(val) {
  if (val === undefined || val === null || isNaN(val)) return '$0.00';
  return '$' + Number(val).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function MobileDocumentPrintModal({ open, onClose, record, type = 'invoices' }) {
  const { getBranchDetails } = useCompanyProfile();
  const printContentRef = useRef(null);

  if (!record) return null;

  const branchId = record?.branchId || localStorage.getItem('selectedBranch') || 'HQ';
  const company = getBranchDetails(branchId) || {
    companyName: 'GLOBAL GATE SARL',
    rccm: 'CD/KWZ/RCCM/22-B-00317',
    natId: '14-H5300N11179P',
    address: 'AVENUE SALONGO Q/INDUSTRIEL C/MANIKA',
    province: 'KOLWEZI LUALABA',
    country: 'DRC',
    phone: '+243 827 722 222',
    email: 'contact@globalgate.sarl',
    website: 'www.GlobalGate.sarl',
    bankName: 'SOFIBANQUE SA',
    entitled: 'GLOBAL GATE SARL',
    bankAccount: '00023233330214247020073',
    codeSwift: 'SFBXCDKIXXX',
    termsCondition: 'ESTIMATES ARE FOR LABOR AND ADDITIONAL MATERIAL ONLY, MATERIALS SOLD ARE NEITHER TAKEN BACK OR EXCHANGED WE WILL NOT BE RESPONSIBLE FOR LOSS OR DAMAGE CAUSED BY FIRE, THEFT, TESTING, DEFECTED PARE PARTS, OR ANY OTHER CAUSE BEYOND OUR CONTROL.'
  };

  const isInvoice = type === 'invoices';
  const isEstimate = type === 'quotations' || type === 'estimates';
  const isPayment = type === 'payments';
  const isMaintenance = type === 'maintenance' || type === 'maintenance_orders';

  const docTitle = isInvoice ? 'INVOICE' : (isEstimate ? 'QUOTATION' : (isPayment ? 'PAYMENT' : 'JOB CARD'));

  const refNumber = isInvoice
    ? (typeof record.invoiceNumber === 'number' ? `INV-${String(record.invoiceNumber).padStart(6, '0')}` : safeText(record.invoiceNumber, 'INV-000000'))
    : (isEstimate
      ? (typeof record.estimateNumber === 'number' ? `Q-${String(record.estimateNumber).padStart(6, '0')}` : safeText(record.estimateNumber, 'Q-000000'))
      : (isPayment ? `PAY-${safeText(record.paymentNumber || record._id?.substring(0,6) || '001')}` : `M-${safeText(record.serviceNumber || '000000')}`));

  const customerName = safeText(record?.customerName?.customerName || record?.customerName || record?.customer || record?.Customer || 'VALUED CLIENT');
  const customerAddress = safeText(record?.customerAddress || record?.address || record?.customerName?.address || 'KOLWEZI, DRC');
  const customerPhone = safeText(record?.customerPhone || record?.phone || record?.phone1 || record?.customerName?.phone || '');

  const docDate = safeText(record?.dateField || record?.date || record?.paymentDate || record?.serviceDate || record?.createdAt?.substring(0, 10), 'N/A');
  const dueDate = safeText(record?.dueDate || record?.due || 'Upon Receipt');
  const subject = safeText(record?.invoiceSubject || record?.subject || record?.defectDescription || record?.reason || '');

  const lineItems = Array.isArray(record?.itemInfo) ? record.itemInfo : (Array.isArray(record?.items) ? record.items : []);

  const calcSubTotal = lineItems.reduce((acc, it) => acc + (Number(it.itemTotal) || (Number(it.itemQuantity || it.quantity || 1) * Number(it.itemSellingPrice || it.rate || it.price || 0))), 0);
  const subTotal = Number(record?.subTotal ?? record?.subtotal ?? calcSubTotal);
  const discount = Number(record?.discount ?? 0);
  const shipping = Number(record?.shippingFee ?? record?.shipping ?? 0);
  const totalAmount = Number(record?.totalInvoice ?? record?.totalAmount ?? record?.totalEstimate ?? record?.total ?? (subTotal - discount + shipping));
  const balanceDue = Number(record?.balanceDue ?? (isInvoice ? totalAmount : 0));
  const totalInWords = safeText(record?.totalW || record?.totalInWords || '');

  const handleNativePrint = () => {
    window.print();
  };

  const handleWhatsAppShare = () => {
    let text = `*${company.companyName}*\n*${docTitle}: ${refNumber}*\nDate: ${docDate}\nClient: ${customerName}\n`;
    if (subject) text += `Subject: ${subject}\n`;
    text += `--------------------------\n`;
    lineItems.forEach((it, idx) => {
      const itName = safeText(it.itemName || it.description || `Item ${idx+1}`);
      const qty = Number(it.itemQuantity || it.quantity || 1);
      const total = formatMoney(Number(it.itemTotal) || (qty * Number(it.itemSellingPrice || it.rate || 0)));
      text += `${idx + 1}. ${itName} (Qty: ${qty}) - ${total}\n`;
    });
    text += `--------------------------\n`;
    text += `*Total: ${formatMoney(totalAmount)}*\n`;
    if (balanceDue > 0) text += `*Balance Due: ${formatMoney(balanceDue)}*\n`;
    text += `\nThank you for your business!\n${company.phone} | ${company.email}`;

    const cleanPhone = customerPhone.replace(/[^0-9]/g, '');
    const waUrl = cleanPhone
      ? `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(text)}`
      : `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  const handleEmailShare = () => {
    const emailTo = safeText(record?.email || record?.customerName?.email || '');
    const emailSubject = `${docTitle} ${refNumber} from ${company.companyName}`;
    const emailBody = `Dear ${customerName},\n\nPlease find the details of your ${docTitle.toLowerCase()} below:\n\nDocument: ${refNumber}\nDate: ${docDate}\nTotal Amount: ${formatMoney(totalAmount)}\nBalance Due: ${formatMoney(balanceDue)}\n\nThank you for choosing ${company.companyName}.\n\nBest regards,\n${company.companyName}\n${company.phone}\n${company.website}`;
    window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  };

  const handleCopySummary = () => {
    const summary = `${docTitle} ${refNumber}\nClient: ${customerName}\nDate: ${docDate}\nTotal: ${formatMoney(totalAmount)}\nBalance: ${formatMoney(balanceDue)}`;
    navigator.clipboard?.writeText(summary);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen
      PaperProps={{
        sx: {
          backgroundColor: '#525659',
          m: 0,
          p: 0,
          display: 'flex',
          flexDirection: 'column'
        }
      }}
    >
      {/* ── TOP ACTION BAR ── */}
      <Box
        className="no-print"
        sx={{
          backgroundColor: '#30368a',
          color: '#ffffff',
          px: 2,
          py: 1.5,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          zIndex: 10
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton onClick={onClose} size="small" sx={{ color: '#ffffff' }}>
            <CloseIcon />
          </IconButton>
          <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#ffffff' }}>
            {docTitle} - {refNumber}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button
            variant="contained"
            size="small"
            onClick={handleNativePrint}
            startIcon={<PrintIcon />}
            sx={{
              backgroundColor: '#10B981',
              color: '#ffffff',
              fontWeight: 700,
              textTransform: 'none',
              '&:hover': { backgroundColor: '#059669' }
            }}
          >
            Print / PDF
          </Button>

          <IconButton onClick={handleWhatsAppShare} sx={{ color: '#25D366', backgroundColor: 'rgba(255,255,255,0.1)' }} title="Share via WhatsApp">
            <WhatsAppIcon fontSize="small" />
          </IconButton>

          <IconButton onClick={handleEmailShare} sx={{ color: '#ffffff', backgroundColor: 'rgba(255,255,255,0.1)' }} title="Share via Email">
            <EmailIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* ── DOCUMENT SHEET (A4 WHITE PAPER CANVAS) ── */}
      <DialogContent sx={{ p: { xs: 1, sm: 3 }, display: 'flex', justifyContent: 'center', overflowY: 'auto' }}>
        <Box
          ref={printContentRef}
          id="printable-document-sheet"
          sx={{
            width: '100%',
            maxWidth: '820px',
            minHeight: '1050px',
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
            p: { xs: 2.5, sm: 5 },
            boxSizing: 'border-box',
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            color: '#1e293b',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            '@media print': {
              boxShadow: 'none',
              p: 0,
              m: 0,
              maxWidth: '100%'
            }
          }}
        >
          <Box>
            {/* ── 1. HEADER (LOGO LEFT, COMPANY DETAILS RIGHT) ── */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
              <Box sx={{ width: '45%' }}>
                {company.logo && company.logo.length > 50 ? (
                  <Box component="img" src={company.logo} alt="Company Logo" sx={{ maxHeight: 75, maxWidth: '100%', objectFit: 'contain' }} />
                ) : (
                  <Box component="img" src={defaultLogo} alt="Global Gate" sx={{ maxHeight: 75, maxWidth: '100%', objectFit: 'contain' }} />
                )}
              </Box>

              <Box sx={{ width: '50%', textAlign: 'right', fontSize: '11px', color: '#334155', lineHeight: 1.4 }}>
                <Typography variant="body2" sx={{ fontWeight: 800, color: '#0f172a', fontSize: '13px' }}>
                  {company.companyName}
                </Typography>
                {company.rccm && <Typography variant="caption" sx={{ display: 'block', color: '#475569' }}>RCCM {company.rccm}</Typography>}
                {company.natId && <Typography variant="caption" sx={{ display: 'block', color: '#475569' }}>ID NAT {company.natId}</Typography>}
                {company.address && <Typography variant="caption" sx={{ display: 'block', color: '#475569' }}>{company.address}</Typography>}
                {company.province && <Typography variant="caption" sx={{ display: 'block', color: '#475569' }}>{company.province} {company.country}</Typography>}
              </Box>
            </Box>

            {/* ── 2. DOCUMENT TITLE BANNER (CENTRAL CLEAN LINE) ── */}
            <Box sx={{ position: 'relative', my: 2.5, textAlign: 'center' }}>
              <Divider sx={{ borderColor: '#0f172a', borderWidth: '1px' }} />
              <Typography
                variant="subtitle1"
                sx={{
                  display: 'inline-block',
                  position: 'relative',
                  top: '-14px',
                  backgroundColor: '#ffffff',
                  px: 3,
                  fontWeight: 800,
                  color: '#30368a',
                  letterSpacing: '3px',
                  fontSize: '15px'
                }}
              >
                {docTitle}
              </Typography>
            </Box>

            {/* ── 3. METADATA & RECIPIENT GRID ── */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
              {/* Left: Client info */}
              <Box sx={{ width: '55%' }}>
                <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>
                  {isInvoice ? 'Bill To' : (isEstimate ? 'Quotation For' : (isPayment ? 'Payment From' : 'Client'))}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#0f172a', mt: 0.3, textTransform: 'uppercase' }}>
                  {customerName}
                </Typography>
                <Typography variant="caption" sx={{ color: '#475569', display: 'block', mt: 0.2 }}>
                  {customerAddress}
                </Typography>
                {customerPhone && (
                  <Typography variant="caption" sx={{ color: '#475569', display: 'block' }}>
                    Tel: {customerPhone}
                  </Typography>
                )}
              </Box>

              {/* Right: Document Details */}
              <Box sx={{ width: '40%', textAlign: 'right' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mb: 0.4 }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: '#334155', width: 90, textAlign: 'left' }}>
                    {docTitle} #
                  </Typography>
                  <Typography variant="caption" sx={{ fontWeight: 800, color: '#0f172a' }}>
                    {refNumber}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mb: 0.4 }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: '#334155', width: 90, textAlign: 'left' }}>
                    Date
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#0f172a' }}>
                    {docDate}
                  </Typography>
                </Box>
                {isInvoice && (
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mb: 0.4 }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: '#334155', width: 90, textAlign: 'left' }}>
                      Due Date
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#0f172a' }}>
                      {dueDate}
                    </Typography>
                  </Box>
                )}
                {subject && (
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mb: 0.4 }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: '#334155', width: 90, textAlign: 'left' }}>
                      Subject
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#0f172a', fontWeight: 600 }}>
                      {subject}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>

            {/* ── 4. ITEMS TABLE ── */}
            <Box sx={{ mb: 3 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #cbd5e1', borderBottom: '1.5px solid #0f172a' }}>
                    <th style={{ padding: '8px 6px', textAlign: 'center', width: '35px', fontWeight: 700, color: '#0f172a' }}>#</th>
                    <th style={{ padding: '8px 10px', textAlign: 'left', fontWeight: 700, color: '#0f172a' }}>Item</th>
                    <th style={{ padding: '8px 10px', textAlign: 'left', fontWeight: 700, color: '#0f172a' }}>Description</th>
                    <th style={{ padding: '8px 6px', textAlign: 'center', width: '50px', fontWeight: 700, color: '#0f172a' }}>Qty</th>
                    <th style={{ padding: '8px 8px', textAlign: 'right', width: '80px', fontWeight: 700, color: '#0f172a' }}>Rate</th>
                    {isEstimate && <th style={{ padding: '8px 6px', textAlign: 'center', width: '60px', fontWeight: 700, color: '#0f172a' }}>Discount</th>}
                    <th style={{ padding: '8px 8px', textAlign: 'right', width: '90px', fontWeight: 700, color: '#0f172a' }}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {lineItems.length > 0 ? (
                    lineItems.map((it, idx) => {
                      const itName = safeText(it.itemName || it.name || it.description, `Item ${idx + 1}`);
                      const itDesc = safeText(it.itemDescription || it.newDescription || it.description || '');
                      const qty = Number(it.itemQuantity || it.quantity || 1);
                      const rate = Number(it.itemSellingPrice || it.rate || it.price || 0);
                      const itDisc = it.discount ? `${it.discount}%` : '%0';
                      const itTotal = Number(it.itemTotal || (qty * rate));

                      return (
                        <tr key={idx} style={{ borderBottom: '1px solid #e2e8f0' }}>
                          <td style={{ padding: '8px 6px', textAlign: 'center', color: '#64748B' }}>{idx + 1}</td>
                          <td style={{ padding: '8px 10px', fontWeight: 700, color: '#0f172a' }}>{itName}</td>
                          <td style={{ padding: '8px 10px', color: '#475569', fontSize: '11px' }}>{itDesc}</td>
                          <td style={{ padding: '8px 6px', textAlign: 'center', fontWeight: 600 }}>{qty}</td>
                          <td style={{ padding: '8px 8px', textAlign: 'right', color: '#334155' }}>{formatMoney(rate)}</td>
                          {isEstimate && <td style={{ padding: '8px 6px', textAlign: 'center', color: '#64748B' }}>{itDisc}</td>}
                          <td style={{ padding: '8px 8px', textAlign: 'right', fontWeight: 700, color: '#0f172a' }}>{formatMoney(itTotal)}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '8px 6px', textAlign: 'center' }}>1</td>
                      <td style={{ padding: '8px 10px', fontWeight: 700 }}>{subject || 'General Services'}</td>
                      <td style={{ padding: '8px 10px', color: '#475569' }}>Standard Service Contract</td>
                      <td style={{ padding: '8px 6px', textAlign: 'center' }}>1</td>
                      <td style={{ padding: '8px 8px', textAlign: 'right' }}>{formatMoney(totalAmount)}</td>
                      {isEstimate && <td style={{ padding: '8px 6px', textAlign: 'center' }}>%0</td>}
                      <td style={{ padding: '8px 8px', textAlign: 'right', fontWeight: 700 }}>{formatMoney(totalAmount)}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </Box>

            {/* ── 5. SUMMARY & TOTALS SECTION ── */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
              {/* Left note */}
              <Box sx={{ width: '45%', pt: 1 }}>
                <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#475569', fontSize: '12px' }}>
                  {isInvoice ? 'Thanks for your Business.' : 'WE LOOK FORWARD TO THE OPPORTUNITY TO DO BUSINESS WITH YOU.'}
                </Typography>
              </Box>

              {/* Right Totals Table */}
              <Box sx={{ width: '50%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5, borderBottom: '1px solid #e2e8f0', fontSize: '12px' }}>
                  <Typography variant="caption" sx={{ color: '#475569' }}>
                    Sub Total {isEstimate && <span style={{ color: '#94a3b8' }}>(Tax Inclusive)</span>}
                  </Typography>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: '#0f172a' }}>
                    {formatMoney(subTotal)}
                  </Typography>
                </Box>

                {discount > 0 && (
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5, borderBottom: '1px solid #e2e8f0', fontSize: '12px' }}>
                    <Typography variant="caption" sx={{ color: '#ef4444' }}>Discount</Typography>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: '#ef4444' }}>-{formatMoney(discount)}</Typography>
                  </Box>
                )}

                {shipping > 0 && (
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5, borderBottom: '1px solid #e2e8f0', fontSize: '12px' }}>
                    <Typography variant="caption" sx={{ color: '#475569' }}>Shipping</Typography>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: '#0f172a' }}>{formatMoney(shipping)}</Typography>
                  </Box>
                )}

                <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.7, borderBottom: '1.5px solid #0f172a', fontSize: '13px' }}>
                  <Typography variant="body2" sx={{ fontWeight: 800, color: '#0f172a' }}>Total</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 800, color: '#0f172a' }}>{formatMoney(totalAmount)}</Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.7, borderBottom: '1px solid #e2e8f0', fontSize: '13px' }}>
                  <Typography variant="body2" sx={{ fontWeight: 800, color: '#30368a' }}>Balance Due</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 800, color: '#30368a' }}>{formatMoney(balanceDue)}</Typography>
                </Box>

                {totalInWords && (
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 0.8, fontSize: '11px' }}>
                    <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 600 }}>Total In Words:</Typography>
                    <Typography variant="caption" sx={{ color: '#334155', fontStyle: 'italic', textAlign: 'right', flex: 1, pl: 1 }}>
                      {totalInWords}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>

            {/* ── 6. BANK DETAILS & TERMS ── */}
            <Box sx={{ borderTop: '1px solid #e2e8f0', pt: 2, mb: 2 }}>
              <Typography variant="caption" sx={{ fontWeight: 800, color: '#0f172a', display: 'block', fontSize: '11px' }}>
                Bank: {company.bankName || 'SOFIBANQUE SA'}
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 700, color: '#334155', display: 'block', fontSize: '11px' }}>
                Entitled: {company.entitled || company.companyName}
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 700, color: '#334155', display: 'block', fontSize: '11px' }}>
                Bank Account: {company.bankAccount || '00023233330214247020073'}
              </Typography>
              {company.codeSwift && (
                <Typography variant="caption" sx={{ fontWeight: 700, color: '#334155', display: 'block', fontSize: '11px' }}>
                  Code Swift: {company.codeSwift}
                </Typography>
              )}

              <Box sx={{ mt: 1.5 }}>
                <Typography variant="caption" sx={{ fontWeight: 800, color: '#0f172a', display: 'block', fontSize: '10px', textTransform: 'uppercase' }}>
                  Terms & Conditions
                </Typography>
                <Typography variant="caption" sx={{ color: '#64748B', fontSize: '9.5px', lineHeight: 1.3, display: 'block' }}>
                  {company.termsCondition}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* ── 7. FOOTER BAR (EMAIL, PHONE, WEBSITE) ── */}
          <Box
            sx={{
              borderTop: '1px solid #cbd5e1',
              pt: 1.5,
              mt: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: { xs: 2, sm: 4 },
              fontSize: '11px',
              color: '#334155'
            }}
          >
            {company.email && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                <EmailIcon sx={{ fontSize: 15, color: '#30368a' }} />
                <span>{company.email}</span>
              </Box>
            )}
            {company.phone && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                <PhoneIcon sx={{ fontSize: 15, color: '#30368a' }} />
                <span>{company.phone}</span>
              </Box>
            )}
            {company.website && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                <LanguageIcon sx={{ fontSize: 15, color: '#30368a' }} />
                <span>{company.website}</span>
              </Box>
            )}
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
