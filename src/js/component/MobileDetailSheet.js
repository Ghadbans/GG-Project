import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Card,
  Divider,
  Button,
  Chip
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TransformIcon from '@mui/icons-material/Transform';

function formatMoney(val) {
  if (val === undefined || val === null || isNaN(val)) return '$ 0.00';
  return '$ ' + Number(val).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function getStatusChip(status, balanceDue, totalAmount) {
  const isPaid = parseFloat(balanceDue || 0) <= 0 && parseFloat(totalAmount || 0) > 0;
  const stat = isPaid ? 'Paid' : (status || 'Draft');

  let bg = '#F1F5F9';
  let color = '#475569';

  switch (String(stat).toLowerCase()) {
    case 'paid':
      bg = '#DCFCE7';
      color = '#15803D';
      break;
    case 'sent':
    case 'active':
      bg = '#DBEAFE';
      color = '#1D4ED8';
      break;
    case 'pending':
    case 'in progress':
      bg = '#FEF3C7';
      color = '#B45309';
      break;
    case 'overdue':
    case 'decline':
    case 'fired':
      bg = '#FEE2E2';
      color = '#B91C1C';
      break;
    case 'partially-paid':
      bg = '#FFEDD5';
      color = '#C2410C';
      break;
    default:
      bg = '#F1F5F9';
      color = '#475569';
  }

  return (
    <Chip
      label={String(stat).toUpperCase()}
      size="small"
      sx={{
        backgroundColor: bg,
        color: color,
        fontWeight: 700,
        fontSize: '0.68rem',
        height: 24,
        borderRadius: 2
      }}
    />
  );
}

function MobileDetailSheet({ open, onClose, record, type }) {
  const navigate = useNavigate();
  if (!record) return null;

  try {
    const id = record?._id || record?.id;

    // Safe title extraction
    let title = 'Record Detail';
    let refNum = '';
    let customerName = record?.customerName?.customerName || record?.customerName || record?.customer || record?.Customer || record?.clientName || '';
    let totalAmount = Number(record?.totalAmount ?? record?.totalInvoice ?? record?.totalEstimate ?? record?.total ?? record?.amount ?? record?.Sell ?? record?.itemSellingPrice ?? record?.infoSell ?? 0);
    let balanceDue = Number(record?.balanceDue ?? 0);

    if (type === 'invoices') {
      refNum = typeof record?.invoiceNumber === 'number' ? `INV-${String(record.invoiceNumber).padStart(6, '0')}` : (record?.invoiceNumber || 'INV');
      title = refNum;
    } else if (type === 'quotations' || type === 'estimates') {
      refNum = typeof record?.estimateNumber === 'number' ? `EST-${String(record.estimateNumber).padStart(6, '0')}` : (record?.estimateNumber || 'EST');
      title = refNum;
    } else if (type === 'customers') {
      title = customerName || 'Customer';
    } else if (type === 'items' || type === 'tech_store') {
      title = record?.itemName || 'Store Item';
    } else if (type === 'maintenance') {
      refNum = record?.serviceNumber ? `M-${String(record.serviceNumber).padStart(6, '0')}` : 'Job Card';
      title = refNum;
    } else if (type === 'maintenance_orders') {
      title = record?.orderNumber || record?.maintenanceNumber || 'Maintenance Order';
    } else if (type === 'payments') {
      title = `PAY-${record?.paymentNumber || id?.substring(0, 6) || '001'}`;
    } else if (type === 'expenses') {
      title = record?.expenseCategory?.expensesCategory || record?.expenseCategory || record?.category || 'Daily Expense';
    } else if (type === 'projects') {
      title = record?.projectName || record?.project || 'Project';
    } else if (type === 'employees') {
      title = record?.employeeName || record?.name || 'Employee';
    } else if (type === 'suppliers') {
      title = record?.supplierName || record?.name || 'Supplier';
    }

    // Handle Edit Navigation
    const handleEdit = () => {
      onClose();
      if (type === 'invoices') navigate(`/InvoiceFormUpdate/${id}`);
      else if (type === 'quotations' || type === 'estimates') navigate(`/EstimateInvoiceFormUpdate/${id}`);
      else if (type === 'customers') navigate(`/CustomerFormUpdate/${id}`);
      else if (type === 'items') navigate(`/ItemFormUpdate/${id}`);
      else if (type === 'maintenance') navigate(`/MaintenanceUpdateView/${id}`);
      else if (type === 'maintenance_orders') navigate(`/MaintenanceOrderUpdate/${id}`);
      else if (type === 'payments') navigate(`/PaymentInformationUpdate/${id}`);
      else if (type === 'expenses') navigate(`/DailyExpenseUpdate/${id}`);
      else if (type === 'employees') navigate(`/EmployeeUpdateView/${id}`);
      else if (type === 'suppliers') navigate(`/SupplierFormUpdate/${id}`);
    };

    // Handle Convert Action (Estimates -> Invoice, Invoice -> Payment)
    const handleConvert = () => {
      onClose();
      if (type === 'quotations' || type === 'estimates') navigate(`/EstimateViewConvertToInvoice/${id}`);
      else if (type === 'invoices') navigate(`/PaymentInformationForm/${id}`);
      else if (type === 'maintenance') navigate(`/EstimateInvoiceForm`);
    };

    const lineItems = Array.isArray(record?.itemInfo) ? record.itemInfo : (Array.isArray(record?.items) ? record.items : []);

    return (
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '100vw',
            backgroundColor: '#F8FAFC',
            boxSizing: 'border-box'
          }
        }}
      >
        {/* ── STICKY TOP HEADER (NO PDF BUTTON) ── */}
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 1100,
            backgroundColor: '#30368a',
            color: '#ffffff',
            px: 1.5,
            py: 1.2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 0, gap: 1 }}>
            <IconButton onClick={onClose} size="small" sx={{ color: '#ffffff' }}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#ffffff' }} noWrap>
              {title}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button
              size="small"
              variant="contained"
              onClick={handleEdit}
              startIcon={<EditIcon sx={{ fontSize: '15px !important' }} />}
              sx={{
                backgroundColor: 'rgba(255,255,255,0.22)',
                color: '#ffffff',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'none',
                px: 1.5,
                py: 0.5,
                borderRadius: 2,
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.35)' }
              }}
            >
              Edit
            </Button>

            {(type === 'quotations' || type === 'estimates' || type === 'invoices' || type === 'maintenance') && (
              <IconButton
                size="small"
                onClick={handleConvert}
                sx={{
                  color: '#ffffff',
                  backgroundColor: 'rgba(255,255,255,0.18)',
                  p: 0.8,
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.3)' }
                }}
              >
                <TransformIcon sx={{ fontSize: 18 }} />
              </IconButton>
            )}
          </Box>
        </Box>

        {/* ── BODY (VERTICAL STACK OF WHITE CARDS) ── */}
        <Box sx={{ p: 2, pb: 8 }}>
          {/* CARD 1: OVERVIEW & STATUS */}
          <Card sx={{ borderRadius: 3.5, p: 2.5, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Box>
                <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
                  Total Amount
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#1E293B', mt: 0.3 }}>
                  {formatMoney(totalAmount)}
                </Typography>
                {balanceDue > 0 && (
                  <Typography variant="caption" sx={{ color: '#EF4444', fontWeight: 700, display: 'block', mt: 0.2 }}>
                    Balance Due: {formatMoney(balanceDue)}
                  </Typography>
                )}
              </Box>
              {getStatusChip(record?.status, balanceDue, totalAmount)}
            </Box>

            <Divider sx={{ my: 1.5 }} />

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
              <Box>
                <Typography variant="caption" sx={{ color: '#94A3B8' }}>Issue Date</Typography>
                <Typography variant="body2" sx={{ fontWeight: 700, color: '#334155' }}>
                  {record?.dateField || record?.date || record?.expenseDate || record?.createdAt?.substring(0, 10) || 'N/A'}
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption" sx={{ color: '#94A3B8' }}>Due Date</Typography>
                <Typography variant="body2" sx={{ fontWeight: 700, color: '#334155' }}>
                  {record?.dueDate || 'Upon Receipt'}
                </Typography>
              </Box>
            </Box>
          </Card>

          {/* CARD 2: CLIENT / CONTACT INFORMATION */}
          {Boolean(customerName || record?.phone || record?.email) && (
            <Card sx={{ borderRadius: 3.5, p: 2, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
              <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
                Client / Contact Details
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E293B', mt: 0.5 }}>
                {customerName || 'N/A'}
              </Typography>
              {(record?.phone || record?.phone1 || record?.customerName?.phone || record?.contact) && (
                <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.3 }}>
                  Phone: {record?.phone || record?.phone1 || record?.customerName?.phone || record?.contact}
                </Typography>
              )}
              {(record?.email || record?.customerName?.email) && (
                <Typography variant="caption" sx={{ color: '#64748B', display: 'block' }}>
                  Email: {record?.email || record?.customerName?.email}
                </Typography>
              )}
              {record?.address && (
                <Typography variant="caption" sx={{ color: '#64748B', display: 'block' }}>
                  Address: {record?.address}
                </Typography>
              )}
            </Card>
          )}

          {/* CARD 3: LINE ITEMS BREAKDOWN */}
          {lineItems.length > 0 && (
            <Card sx={{ borderRadius: 3.5, p: 2, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
              <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase', mb: 1, display: 'block' }}>
                Items & Services ({lineItems.length})
              </Typography>
              {lineItems.map((it, idx) => {
                const itName = it?.itemName || it?.description || `Item #${idx + 1}`;
                const qty = Number(it?.itemQuantity ?? it?.quantity ?? 1);
                const rate = Number(it?.itemSellingPrice ?? it?.rate ?? it?.price ?? 0);
                const itTotal = Number(it?.itemTotal ?? (qty * rate));
                return (
                  <Box key={idx} sx={{ py: 1, borderBottom: idx < lineItems.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Box sx={{ pr: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: '#1E293B' }}>
                          {itName}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#64748B' }}>
                          Qty: {qty} × {formatMoney(rate)}
                        </Typography>
                      </Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E293B' }}>
                        {formatMoney(itTotal)}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Card>
          )}

          {/* CARD 4: FINANCIAL BREAKDOWN */}
          <Card sx={{ borderRadius: 3.5, p: 2, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
            <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase', mb: 1, display: 'block' }}>
              Financial Breakdown
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
              <Typography variant="body2" sx={{ color: '#64748B' }}>Sub-Total</Typography>
              <Typography variant="body2" sx={{ fontWeight: 700, color: '#1E293B' }}>
                {formatMoney(record?.subTotal ?? record?.subtotal ?? totalAmount)}
              </Typography>
            </Box>
            {Number(record?.discount ?? 0) > 0 && (
              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
                <Typography variant="body2" sx={{ color: '#64748B' }}>Discount</Typography>
                <Typography variant="body2" sx={{ fontWeight: 700, color: '#EF4444' }}>
                  -{formatMoney(record?.discount)}
                </Typography>
              </Box>
            )}
            {Number(record?.shippingFee ?? record?.shipping ?? 0) > 0 && (
              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
                <Typography variant="body2" sx={{ color: '#64748B' }}>Shipping</Typography>
                <Typography variant="body2" sx={{ fontWeight: 700, color: '#1E293B' }}>
                  {formatMoney(record?.shippingFee ?? record?.shipping)}
                </Typography>
              </Box>
            )}
            <Divider sx={{ my: 1 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E293B' }}>Total</Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#30368a' }}>
                {formatMoney(totalAmount)}
              </Typography>
            </Box>
          </Card>

          {/* CARD 5: NOTES & DESCRIPTION */}
          {Boolean(record?.invoiceSubject || record?.defectDescription || record?.description || record?.note || record?.notes) && (
            <Card sx={{ borderRadius: 3.5, p: 2, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
              <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
                Notes & Description
              </Typography>
              {record?.invoiceSubject && (
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#1E293B', mt: 0.5 }}>
                  Subject: {record.invoiceSubject}
                </Typography>
              )}
              {record?.defectDescription && (
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#1E293B', mt: 0.5 }}>
                  Defect: {record.defectDescription}
                </Typography>
              )}
              {record?.description && (
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#1E293B', mt: 0.5 }}>
                  {record.description}
                </Typography>
              )}
              {(record?.note || record?.notes) && (
                <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.5 }}>
                  {record.note || record.notes}
                </Typography>
              )}
            </Card>
          )}
        </Box>
      </Drawer>
    );
  } catch (err) {
    console.error('Error rendering MobileDetailSheet:', err);
    return null;
  }
}

export default MobileDetailSheet;
