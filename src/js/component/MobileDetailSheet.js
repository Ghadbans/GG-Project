import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/auth/authSlice';
import { cachedGet } from '../utils/apiCache';
import { ENDPOINT_URL } from '../apiConfig';
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
import PrintIcon from '@mui/icons-material/Print';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BadgeIcon from '@mui/icons-material/Badge';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import MobileDocumentPrintModal from './MobileDocumentPrintModal';

function safeText(val, fallback = '') {
  if (val === null || val === undefined) return fallback;
  if (typeof val === 'string' || typeof val === 'number') return String(val);
  if (typeof val === 'object') {
    if (val.itemName) return safeText(val.itemName, fallback);
    if (val.customerName) return safeText(val.customerName, fallback);
    if (val.Customer) return safeText(val.Customer, fallback);
    if (val.employeeName) return safeText(val.employeeName, fallback);
    if (val.technicianAssign) return safeText(val.technicianAssign, fallback);
    if (val.name) return safeText(val.name, fallback);
    if (val.expensesCategory) return safeText(val.expensesCategory, fallback);
    if (val.category) return safeText(val.category, fallback);
    if (val.projectName) return safeText(val.projectName, fallback);
    if (val.newCode) return safeText(val.newCode, fallback);
    if (val.code) return safeText(val.code, fallback);
    if (val.defectDescription) return safeText(val.defectDescription, fallback);
    if (val.description) return safeText(val.description, fallback);
    if (val.label) return safeText(val.label, fallback);
    if (val.title) return safeText(val.title, fallback);
    return fallback;
  }
  return String(val);
}

function formatMoney(val) {
  if (val === undefined || val === null || isNaN(val)) return '$ 0.00';
  return '$ ' + Number(val).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function getItemImageSrc(item) {
  if (!item) return null;
  if (item.data && typeof item.data === 'string' && item.data.length > 50) {
    if (item.data.startsWith('data:')) return item.data;
    const ct = item.contentType || 'image/jpeg';
    return `data:${ct};base64,${item.data}`;
  }
  if (item.image && typeof item.image === 'string' && item.image.length > 20) {
    return item.image;
  }
  if (item.data && item.data.data && Array.isArray(item.data.data)) {
    try {
      const bytes = new Uint8Array(item.data.data);
      let binary = '';
      for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
      const b64 = window.btoa(binary);
      return `data:${item.contentType || 'image/jpeg'};base64,${b64}`;
    } catch(e) {}
  }
  return null;
}

function getStatusChip(status, balanceDue, totalAmount) {
  const isPaid = parseFloat(balanceDue || 0) <= 0 && parseFloat(totalAmount || 0) > 0;
  const rawStat = safeText(isPaid ? 'Paid' : (status || 'Draft'), 'Draft');
  const stat = rawStat.toLowerCase();

  let bg = '#F1F5F9';
  let color = '#475569';

  switch (stat) {
    case 'paid':
    case 'close':
    case 'converted':
      bg = '#DCFCE7';
      color = '#15803D';
      break;
    case 'open':
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
    case 'reschedule':
      bg = '#F3E8FF';
      color = '#7E22CE';
      break;
    case 'cancel':
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
      label={rawStat.toUpperCase()}
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
  const user = useSelector(selectCurrentUser);
  const [printOpen, setPrintOpen] = useState(false);
  const [grantAccess, setGrantAccess] = useState([]);

  useEffect(() => {
    const fetchAccess = async () => {
      if (!user?.data?.id) return;
      try {
        const res = await cachedGet(`${ENDPOINT_URL}/grantAccess`);
        const userAccess = res?.data?.data?.find(row => row.userID === user?.data?.id);
        if (userAccess && Array.isArray(userAccess.modules)) {
          setGrantAccess(userAccess.modules);
        }
      } catch (err) {
        console.error('Error loading grantAccess in MobileDetailSheet:', err);
      }
    };
    if (open) {
      fetchAccess();
    }
  }, [open, user]);

  const userName = user?.data?.userName || '';
  const userRole = user?.data?.role || '';
  const isSuperUser = userName === 'GG' || userRole === 'Admin' || userRole === 'CEO';

  const canEdit = (t) => {
    if (isSuperUser) return true;
    const typeToModule = {
      invoices: 'Invoice',
      quotations: 'Estimate',
      estimates: 'Estimate',
      customers: 'Customer',
      items: 'Store',
      maintenance: 'Maintenance',
      maintenance_orders: 'Maintenance-Order',
      payments: 'Payment',
      expenses: 'Expenses',
      projects: 'Project',
      employees: 'Employee',
      suppliers: 'Purchase'
    };
    const modName = typeToModule[t] || '';
    const mod = grantAccess.find(m => m.moduleName?.toLowerCase() === modName?.toLowerCase() || m.name?.toLowerCase() === modName?.toLowerCase());
    return Boolean(mod?.access?.editM || mod?.access?.updateM);
  };

  if (!record) return null;

  try {
    const id = record?._id || record?.id;
    const isTechStore = type === 'tech_store';
    const isItem = type === 'items' || isTechStore;

    // Safe title extraction
    let title = 'Record Detail';
    let refNum = '';
    let customerName = safeText(record?.customerName?.customerName || record?.customerName || record?.customer || record?.Customer || record?.clientName);

    const lineItems = Array.isArray(record?.itemInfo) ? record.itemInfo : (Array.isArray(record?.items) ? record.items : []);
    const calcLineTotal = lineItems.reduce((acc, it) => acc + (Number(it?.itemTotal) || (Number(it?.itemQuantity || it?.quantity || 1) * Number(it?.itemSellingPrice || it?.rate || it?.price || 0))), 0);

    let totalAmount = Number(record?.totalInvoice ?? record?.totalAmount ?? record?.totalEstimate ?? record?.total ?? record?.amount ?? (calcLineTotal > 0 ? calcLineTotal : 0));
    let balanceDue = Number(record?.balanceDue ?? (type === 'invoices' ? totalAmount : 0));

    if (type === 'invoices') {
      refNum = typeof record?.invoiceNumber === 'number' ? `INV-${String(record.invoiceNumber).padStart(6, '0')}` : safeText(record?.invoiceNumber, 'INV');
      title = refNum;
      refNum = typeof record?.estimateNumber === 'number'
        ? `Q-${String(record.estimateNumber).padStart(6, '0')}`
        : (String(record?.estimateNumber || record?.estimateName || '').replace(/^(EST|QUO|QT|Q)\s*-?/i, 'Q-') || 'Q-000000');
      title = refNum;
    } else if (type === 'customers') {
      title = customerName || 'Customer';
    } else if (isItem) {
      title = safeText(record?.itemName || record?.name, 'Store Item');
    } else if (type === 'maintenance') {
      refNum = record?.serviceNumber ? (String(record.serviceNumber).startsWith('M-') ? record.serviceNumber : `M-${String(record.serviceNumber).padStart(6, '0')}`) : 'Job Card';
      title = refNum;
    } else if (type === 'maintenance_orders') {
      title = safeText(record?.serviceNumber || record?.orderNumber || record?.maintenanceNumber, 'Maintenance Order');
    } else if (type === 'payments') {
      title = `PAY-${safeText(record?.paymentNumber || id?.substring(0, 6) || '001')}`;
    } else if (type === 'expenses') {
      title = safeText(record?.expenseCategory?.expensesCategory || record?.expenseCategory || record?.category, 'Daily Expense');
    } else if (type === 'projects') {
      title = safeText(record?.projectName || record?.project, 'Project');
    } else if (type === 'employees') {
      title = safeText(record?.employeeName || record?.name, 'Employee');
    } else if (type === 'suppliers') {
      title = safeText(record?.supplierName || record?.name, 'Supplier');
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

    // Handle Convert Action
    const handleConvert = () => {
      onClose();
      if (type === 'quotations' || type === 'estimates') navigate(`/EstimateViewConvertToInvoice/${id}`);
      else if (type === 'invoices') navigate(`/PaymentInformationForm/${id}`);
      else if (type === 'maintenance') navigate(`/EstimateInvoiceForm`);
    };

    const isPrintable = type === 'invoices' || type === 'quotations' || type === 'estimates' || type === 'payments' || type === 'maintenance';

    return (
      <>
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
          {/* ── STICKY TOP HEADER WITH PRINT/PDF ACTION ── */}
          <Box
            sx={{
              position: 'sticky',
              top: 0,
              zIndex: 1100,
              backgroundColor: '#30368a',
              color: '#ffffff',
              px: 1.5,
              pt: 'calc(10px + env(safe-area-inset-top, 0px))',
              pb: 1.2,
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
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#ffffff', maxWidth: 160 }} noWrap>
                {title}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {isPrintable && (
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => setPrintOpen(true)}
                  startIcon={<PrintIcon sx={{ fontSize: '15px !important' }} />}
                  sx={{
                    backgroundColor: '#10B981',
                    color: '#ffffff',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textTransform: 'none',
                    px: 1.2,
                    py: 0.5,
                    borderRadius: 2,
                    '&:hover': { backgroundColor: '#059669' }
                  }}
                >
                  Print / PDF
                </Button>
              )}

              {!isTechStore && (
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
                    px: 1.2,
                    py: 0.5,
                    borderRadius: 2,
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.35)' }
                  }}
                >
                  Edit
                </Button>
              )}

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
          {isItem ? (
            /* ── ITEM & TECHNICIAN STORE DETAIL VIEW ── */
            <Box sx={{ p: 2, pb: 'calc(80px + env(safe-area-inset-bottom, 0px))' }}>
              <Card sx={{ borderRadius: 3.5, p: 2.5, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)', textAlign: 'center' }}>
                {getItemImageSrc(record) ? (
                  <Box
                    component="img"
                    src={getItemImageSrc(record)}
                    alt={title}
                    sx={{
                      width: '100%',
                      maxHeight: 220,
                      objectFit: 'contain',
                      borderRadius: 3,
                      mb: 2,
                      backgroundColor: '#f8fafc',
                      p: 1,
                      border: '1px solid #e2e8f0'
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      width: '100%',
                      height: 160,
                      borderRadius: 3,
                      backgroundColor: '#eef2ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2
                    }}
                  >
                    <Inventory2OutlinedIcon sx={{ fontSize: 64, color: '#30368a' }} />
                  </Box>
                )}

                <Typography variant="h6" sx={{ fontWeight: 800, color: '#1e293b' }}>
                  {title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748B', mt: 0.5 }}>
                  Code: {safeText(record?.itemCode || record?.code || record?.itemUpc?.newCode || record?.itemUpc, 'N/A')}
                </Typography>
                {record?.category && (
                  <Chip
                    label={safeText(record.category)}
                    size="small"
                    sx={{ mt: 1, backgroundColor: '#f1f5f9', fontWeight: 600, color: '#475569' }}
                  />
                )}
              </Card>

              {/* Only show pricing & stock if NOT technician store */}
              {!isTechStore && (
                <Card sx={{ borderRadius: 3.5, p: 2.5, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                  <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase', mb: 1.5, display: 'block' }}>
                    Stock & Pricing
                  </Typography>
                  <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                    <Box>
                      <Typography variant="caption" sx={{ color: '#94A3B8' }}>Available Stock</Typography>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: '#10B981' }}>
                        {Number(record?.itemQuantity ?? record?.balanceQty ?? record?.quantity ?? 0)}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: '#94A3B8' }}>Selling Price</Typography>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: '#30368a' }}>
                        {formatMoney(Number(record?.itemSellingPrice ?? record?.Sell ?? record?.sellPrice ?? 0))}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              )}

              {/* Item Details / Description */}
              {Boolean(record?.itemDescription || record?.description || record?.specifications) && (
                <Card sx={{ borderRadius: 3.5, p: 2.5, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                  <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase', mb: 1, display: 'block' }}>
                    Item Details & Description
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#334155', lineHeight: 1.6 }}>
                    {safeText(record?.itemDescription || record?.description || record?.specifications)}
                  </Typography>
                </Card>
              )}
            </Box>
          ) : type === 'maintenance_orders' || type === 'maintenance' ? (
            /* ── MAINTENANCE / JOB CARD VIEW ── */
            <Box sx={{ p: 2, pb: 'calc(80px + env(safe-area-inset-bottom, 0px))' }}>
              <Card sx={{ borderRadius: 3.5, p: 2.5, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
                      Service Order
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#1E293B', mt: 0.3 }}>
                      {title}
                    </Typography>
                  </Box>
                  {getStatusChip(record?.status || 'Open', 0, 0)}
                </Box>

                <Divider sx={{ my: 1.5 }} />

                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#94A3B8' }}>Service Date</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: '#334155' }}>
                      {safeText(record?.dateField || record?.serviceDate || record?.date || record?.createdAt?.substring(0, 10), 'N/A')}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#94A3B8' }}>Assigned Tech</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: '#334155' }}>
                      {safeText(record?.technicianAssign || record?.technicianName || record?.technician, 'Unassigned')}
                    </Typography>
                  </Box>
                </Box>
              </Card>

              {/* Client Info */}
              {customerName && (
                <Card sx={{ borderRadius: 3.5, p: 2, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                  <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
                    Client Information
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E293B', mt: 0.5 }}>
                    {customerName}
                  </Typography>
                </Card>
              )}

              {/* Defect / Problem Description */}
              {Boolean(record?.defectDescription || record?.itemDescriptionInfo || record?.defect) && (
                <Card sx={{ borderRadius: 3.5, p: 2, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                  <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
                    Defect / Issue Reported
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#1E293B', fontWeight: 600, mt: 0.5 }}>
                    {safeText(record?.defectDescription || record?.itemDescriptionInfo || record?.defect)}
                  </Typography>
                </Card>
              )}

              {/* Parts Used */}
              {lineItems.length > 0 && (
                <Card sx={{ borderRadius: 3.5, p: 2, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                  <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase', mb: 1, display: 'block' }}>
                    Parts / Items Used ({lineItems.length})
                  </Typography>
                  {lineItems.map((it, idx) => {
                    const itName = safeText(it?.itemName || it?.description, `Item #${idx + 1}`);
                    const qty = Number(it?.itemQty ?? it?.itemQuantity ?? it?.quantity ?? 1);
                    return (
                      <Box key={idx} sx={{ py: 1, borderBottom: idx < lineItems.length - 1 ? '1px solid #F1F5F9' : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: '#1E293B' }}>
                          {itName}
                        </Typography>
                        <Chip label={`Qty: ${qty}`} size="small" sx={{ backgroundColor: '#EEF2FF', color: '#30368a', fontWeight: 700, height: 22 }} />
                      </Box>
                    );
                  })}
                </Card>
              )}
            </Box>
          ) : type === 'suppliers' ? (
            /* ── SUPPLIER PROFILE VIEW (WITH COMPLETE PHONE DETAILS) ── */
            <Box sx={{ p: 2, pb: 'calc(80px + env(safe-area-inset-bottom, 0px))' }}>
              <Card sx={{ borderRadius: 3.5, p: 2.5, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                  <Box sx={{ p: 1.2, borderRadius: 2.5, backgroundColor: '#EEF2FF', color: '#30368a' }}>
                    <StorefrontIcon />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
                      Supplier Details
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#1E293B', mt: 0.2 }}>
                      {safeText(record?.supplierName || record?.name, 'Supplier')}
                    </Typography>
                    {(record?.storeName || record?.companyName) && (
                      <Typography variant="body2" sx={{ color: '#30368a', fontWeight: 600 }}>
                        {safeText(record?.storeName || record?.companyName)}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Card>

              {/* Contact Information & Quick Actions */}
              <Card sx={{ borderRadius: 3.5, p: 2, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase', mb: 1.5, display: 'block' }}>
                  Contact Information
                </Typography>

                {/* Primary Phone */}
                {Boolean(record?.customerPhone1 || record?.phone1 || record?.phone || record?.contact) && (
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, borderBottom: '1px solid #F1F5F9' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <PhoneIcon sx={{ fontSize: 18, color: '#64748B' }} />
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: '#1E293B' }}>
                          {safeText(record?.customerPhone1 || record?.phone1 || record?.phone || record?.contact)}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#94A3B8' }}>Primary Phone</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                      <IconButton size="small" component="a" href={`tel:${safeText(record?.customerPhone1 || record?.phone1 || record?.phone || record?.contact)}`} sx={{ color: '#10B981', backgroundColor: '#ECFDF5', p: 0.8 }}>
                        <PhoneIcon fontSize="small" />
                      </IconButton>
                      <IconButton size="small" component="a" href={`https://wa.me/${safeText(record?.customerPhone1 || record?.phone1 || record?.phone || record?.contact).replace(/[^0-9]/g, '')}`} target="_blank" sx={{ color: '#25D366', backgroundColor: '#F0FDF4', p: 0.8 }}>
                        <WhatsAppIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                )}

                {/* Secondary Phone */}
                {Boolean(record?.customerPhone2 || record?.phone2) && (
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, borderBottom: '1px solid #F1F5F9' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <PhoneIcon sx={{ fontSize: 18, color: '#64748B' }} />
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: '#1E293B' }}>
                          {safeText(record?.customerPhone2 || record?.phone2)}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#94A3B8' }}>Secondary Phone</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                      <IconButton size="small" component="a" href={`tel:${safeText(record?.customerPhone2 || record?.phone2)}`} sx={{ color: '#10B981', backgroundColor: '#ECFDF5', p: 0.8 }}>
                        <PhoneIcon fontSize="small" />
                      </IconButton>
                      <IconButton size="small" component="a" href={`https://wa.me/${safeText(record?.customerPhone2 || record?.phone2).replace(/[^0-9]/g, '')}`} target="_blank" sx={{ color: '#25D366', backgroundColor: '#F0FDF4', p: 0.8 }}>
                        <WhatsAppIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                )}

                {record?.email && (
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, borderBottom: '1px solid #F1F5F9' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <EmailIcon sx={{ fontSize: 18, color: '#64748B' }} />
                      <Typography variant="body2" sx={{ fontWeight: 600, color: '#1E293B' }}>
                        {record.email}
                      </Typography>
                    </Box>
                    <IconButton size="small" component="a" href={`mailto:${record.email}`} sx={{ color: '#3B82F6', backgroundColor: '#EFF6FF', p: 0.8 }}>
                      <EmailIcon fontSize="small" />
                    </IconButton>
                  </Box>
                )}
                {record?.address && (
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, py: 1, borderBottom: Boolean(record?.description || record?.notes) ? '1px solid #F1F5F9' : 'none' }}>
                    <LocationOnIcon sx={{ fontSize: 18, color: '#64748B', mt: 0.3 }} />
                    <Typography variant="body2" sx={{ color: '#334155' }}>
                      {record.address}
                    </Typography>
                  </Box>
                )}
              </Card>

              {/* Description / Notes */}
              {Boolean(record?.description || record?.notes) && (
                <Card sx={{ borderRadius: 3.5, p: 2, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                  <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase', mb: 0.5, display: 'block' }}>
                    Notes & Remarks
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#334155', lineHeight: 1.6 }}>
                    {safeText(record?.description || record?.notes)}
                  </Typography>
                </Card>
              )}
            </Box>
          ) : type === 'expenses' ? (
            /* ── DAILY EXPENSE DETAIL VIEW (FC & USD ACCURATE) ── */
            <Box sx={{ p: 2, pb: 'calc(80px + env(safe-area-inset-bottom, 0px))' }}>
              <Card sx={{ borderRadius: 3.5, p: 2.5, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
                      Daily Expense
                    </Typography>
                    {Number(record?.amount) > 0 ? (
                      <>
                        <Typography variant="h5" sx={{ fontWeight: 800, color: '#EF4444', mt: 0.3 }}>
                          FC {(Number(record.amount)).toLocaleString()}
                        </Typography>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#64748B', mt: 0.2 }}>
                          (${Number(record.total || 0).toFixed(2)} USD)
                        </Typography>
                      </>
                    ) : (
                      <Typography variant="h5" sx={{ fontWeight: 800, color: '#EF4444', mt: 0.3 }}>
                        ${(Number(record?.total || 0)).toFixed(2)}
                      </Typography>
                    )}
                  </Box>
                  <Chip
                    label={safeText(record?.expenseCategory?.expensesCategory || record?.expenseCategory || record?.category, 'Expense').toUpperCase()}
                    size="small"
                    sx={{ backgroundColor: '#FEE2E2', color: '#B91C1C', fontWeight: 700, borderRadius: 2 }}
                  />
                </Box>
                <Divider sx={{ my: 1.5 }} />
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#94A3B8' }}>Expense No</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: '#334155' }}>
                      {typeof record?.expenseNumber === 'number' ? `D-${String(record.expenseNumber).padStart(6, '0')}` : safeText(record?.expenseNumber, 'D-001')}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#94A3B8' }}>Date</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: '#334155' }}>
                      {record?.expenseDate || record?.dateField || record?.dataField || record?.date || 'N/A'}
                    </Typography>
                  </Box>
                </Box>
              </Card>

              {/* Account, Employee, and Rate Details */}
              <Card sx={{ borderRadius: 3.5, p: 2, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase', mb: 1, display: 'block' }}>
                  Transaction Info
                </Typography>
                {(record?.accountName || record?.accountNameInfo) && (
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.8, borderBottom: '1px solid #F1F5F9' }}>
                    <Typography variant="body2" sx={{ color: '#64748B' }}>Paid To / Account</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: '#1E293B' }}>
                      {safeText(record.accountName || record.accountNameInfo)}
                    </Typography>
                  </Box>
                )}
                {(record?.employeeName || record?.employee) && (
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.8, borderBottom: '1px solid #F1F5F9' }}>
                    <Typography variant="body2" sx={{ color: '#64748B' }}>Recorded By</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: '#1E293B' }}>
                      {safeText(record.employeeName || record.employee)}
                    </Typography>
                  </Box>
                )}
                {Number(record?.rate) > 0 && (
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.8, borderBottom: '1px solid #F1F5F9' }}>
                    <Typography variant="body2" sx={{ color: '#64748B' }}>Exchange Rate</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: '#30368a' }}>
                      1 USD = {Number(record.rate).toLocaleString()} FC
                    </Typography>
                  </Box>
                )}
              </Card>

              {/* Description / Reason */}
              {Boolean(record?.description || record?.reason) && (
                <Card sx={{ borderRadius: 3.5, p: 2, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                  <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase', mb: 0.5, display: 'block' }}>
                    Description / Purpose
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#334155', lineHeight: 1.6 }}>
                    {safeText(record?.description || record?.reason)}
                  </Typography>
                </Card>
              )}
            </Box>
          ) : type === 'employees' ? (
            /* ── EMPLOYEE PROFILE VIEW ── */
            <Box sx={{ p: 2, pb: 'calc(80px + env(safe-area-inset-bottom, 0px))' }}>
              <Card sx={{ borderRadius: 3.5, p: 2.5, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                  <Box sx={{ p: 1.2, borderRadius: 2.5, backgroundColor: '#EEF2FF', color: '#30368a' }}>
                    <BadgeIcon />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
                      Employee Profile
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#1E293B', mt: 0.2 }}>
                      {safeText(record?.employeeName || record?.name, 'Employee')}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#30368a', fontWeight: 600 }}>
                      {safeText(record?.employeeRole || record?.role || record?.position, 'Staff')} {record?.department ? `• ${record.department}` : ''}
                    </Typography>
                  </Box>
                  {getStatusChip(record?.status || 'Employed', 0, 0)}
                </Box>
              </Card>

              {/* Contact Information & Quick Actions */}
              <Card sx={{ borderRadius: 3.5, p: 2, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase', mb: 1.5, display: 'block' }}>
                  Contact & Personnel Info
                </Typography>
                {(record?.employeePhone || record?.phone || record?.contact) && (
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, borderBottom: '1px solid #F1F5F9' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <PhoneIcon sx={{ fontSize: 18, color: '#64748B' }} />
                      <Typography variant="body2" sx={{ fontWeight: 600, color: '#1E293B' }}>
                        {safeText(record?.employeePhone || record?.phone || record?.contact)}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                      <IconButton size="small" component="a" href={`tel:${safeText(record?.employeePhone || record?.phone || record?.contact)}`} sx={{ color: '#10B981', backgroundColor: '#ECFDF5', p: 0.8 }}>
                        <PhoneIcon fontSize="small" />
                      </IconButton>
                      <IconButton size="small" component="a" href={`https://wa.me/${safeText(record?.employeePhone || record?.phone || record?.contact).replace(/[^0-9]/g, '')}`} target="_blank" sx={{ color: '#25D366', backgroundColor: '#F0FDF4', p: 0.8 }}>
                        <WhatsAppIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                )}
                {(record?.employeeEmail || record?.email) && (
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, borderBottom: '1px solid #F1F5F9' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <EmailIcon sx={{ fontSize: 18, color: '#64748B' }} />
                      <Typography variant="body2" sx={{ fontWeight: 600, color: '#1E293B' }}>
                        {record.employeeEmail || record.email}
                      </Typography>
                    </Box>
                    <IconButton size="small" component="a" href={`mailto:${record.employeeEmail || record.email}`} sx={{ color: '#3B82F6', backgroundColor: '#EFF6FF', p: 0.8 }}>
                      <EmailIcon fontSize="small" />
                    </IconButton>
                  </Box>
                )}
                {(record?.employeeAddress || record?.address) && (
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, py: 1 }}>
                    <LocationOnIcon sx={{ fontSize: 18, color: '#64748B', mt: 0.3 }} />
                    <Typography variant="body2" sx={{ color: '#334155' }}>
                      {record.employeeAddress || record.address}
                    </Typography>
                  </Box>
                )}
              </Card>
            </Box>
          ) : (
            /* ── INVOICES / QUOTATIONS / PAYMENTS / GENERAL FINANCIAL RECORD ── */
            <Box sx={{ p: 2, pb: 'calc(80px + env(safe-area-inset-bottom, 0px))' }}>
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
                    {balanceDue > 0 && type === 'invoices' && (
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
                      {record?.dateField || record?.date || record?.paymentDate || record?.createdAt?.substring(0, 10) || 'N/A'}
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

              {/* CARD 2: CLIENT DETAILS */}
              {Boolean(customerName || record?.phone || record?.email) && (
                <Card sx={{ borderRadius: 3.5, p: 2, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                  <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
                    Client Details
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E293B', mt: 0.5 }}>
                    {safeText(customerName, 'N/A')}
                  </Typography>
                  {(record?.phone || record?.phone1 || record?.customerName?.phone || record?.contact) && (
                    <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.3 }}>
                      Phone: {safeText(record?.phone || record?.phone1 || record?.customerName?.phone || record?.contact)}
                    </Typography>
                  )}
                  {(record?.email || record?.customerName?.email) && (
                    <Typography variant="caption" sx={{ color: '#64748B', display: 'block' }}>
                      Email: {safeText(record?.email || record?.customerName?.email)}
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
                    const itName = safeText(it?.itemName || it?.description, `Item #${idx + 1}`);
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
            </Box>
          )}
        </Drawer>

        {/* ── NATIVE-IDENTICAL PRINTOUT & PDF DIALOG ── */}
        <MobileDocumentPrintModal
          open={printOpen}
          onClose={() => setPrintOpen(false)}
          record={record}
          type={type}
        />
      </>
    );
  } catch (err) {
    console.error('Error rendering MobileDetailSheet:', err);
    return null;
  }
}

export default MobileDetailSheet;
