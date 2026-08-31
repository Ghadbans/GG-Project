import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  Typography,
  Chip,
  TextField,
  InputAdornment,
  IconButton,
  Fab,
  Avatar
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddIcon from '@mui/icons-material/Add';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import MobileDetailSheet from './MobileDetailSheet';

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
        fontSize: '0.65rem',
        height: 22,
        borderRadius: 1.5
      }}
    />
  );
}

function MobileCardList({ type = 'invoices', data = [], searchPlaceholder = 'Search records...' }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedRecord, setSelectedRecord] = useState(null);

  const safeData = Array.isArray(data) ? data : [];

  const filtered = safeData.filter((item) => {
    if (!item) return false;
    if (!search.trim()) return true;
    const q = search.toLowerCase();

    if (type === 'invoices') {
      const cust = String(item.customerName?.customerName || item.customer || '').toLowerCase();
      const num = String(item.invoiceNumber || '').toLowerCase();
      const subj = String(item.invoiceSubject || '').toLowerCase();
      return cust.includes(q) || num.includes(q) || subj.includes(q);
    }
    if (type === 'quotations' || type === 'estimates') {
      const cust = String(item.customerName?.customerName || item.customer || '').toLowerCase();
      const num = String(item.estimateNumber || '').toLowerCase();
      return cust.includes(q) || num.includes(q);
    }
    if (type === 'customers') {
      const name = String(item.customerName || item.Customer || '').toLowerCase();
      const phone = String(item.phone || item.phone1 || item.contact || '').toLowerCase();
      const email = String(item.email || '').toLowerCase();
      return name.includes(q) || phone.includes(q) || email.includes(q);
    }
    if (type === 'maintenance') {
      const defect = String(item.defectDescription || item.defect || '').toLowerCase();
      const cust = String(item.customerName?.customerName || item.customer || '').toLowerCase();
      const num = String(item.serviceNumber || '').toLowerCase();
      return defect.includes(q) || cust.includes(q) || num.includes(q);
    }
    if (type === 'maintenance_orders') {
      const num = String(item.orderNumber || item.maintenanceNumber || '').toLowerCase();
      const tech = String(item.technicianName || item.technician || '').toLowerCase();
      return num.includes(q) || tech.includes(q);
    }
    if (type === 'items' || type === 'tech_store') {
      const name = String(item.itemName || '').toLowerCase();
      const code = String(item.itemCode || item.code || item.itemUpc?.newCode || '').toLowerCase();
      return name.includes(q) || code.includes(q);
    }
    if (type === 'payments') {
      const cust = String(item.customerName?.customerName || item.customer || '').toLowerCase();
      const num = String(item.paymentNumber || '').toLowerCase();
      return cust.includes(q) || num.includes(q);
    }
    if (type === 'expenses') {
      const cat = String(item.expenseCategory?.expensesCategory || item.expenseCategory || item.category || '').toLowerCase();
      const note = String(item.description || item.expenseDescription || '').toLowerCase();
      return cat.includes(q) || note.includes(q);
    }
    if (type === 'projects') {
      const proj = String(item.projectName || item.project || '').toLowerCase();
      const cust = String(item.customerName?.customerName || item.customer || '').toLowerCase();
      return proj.includes(q) || cust.includes(q);
    }
    if (type === 'employees') {
      const emp = String(item.employeeName || item.name || '').toLowerCase();
      const pos = String(item.position || item.role || '').toLowerCase();
      return emp.includes(q) || pos.includes(q);
    }
    if (type === 'suppliers') {
      const sup = String(item.supplierName || item.name || '').toLowerCase();
      const phone = String(item.phone || item.contact || '').toLowerCase();
      return sup.includes(q) || phone.includes(q);
    }
    return true;
  });

  // FAB Click Navigation
  const handleFabAdd = () => {
    if (type === 'invoices') navigate('/InvoiceForm');
    else if (type === 'quotations' || type === 'estimates') navigate('/EstimateInvoiceForm');
    else if (type === 'customers') navigate('/CustomerForm');
    else if (type === 'items') navigate('/ItemForm');
    else if (type === 'maintenance') navigate('/MaintenanceFormView');
    else if (type === 'payments') navigate('/PaymentInformationForm');
    else if (type === 'expenses') navigate('/DailyExpenseForm');
    else if (type === 'projects') navigate('/ProjectFormView');
    else if (type === 'employees') navigate('/EmployeeFormView');
    else if (type === 'suppliers') navigate('/SupplierForm');
    else if (type === 'maintenance_orders') navigate('/MaintenanceOrderAdmin');
  };

  return (
    <Box sx={{ width: '100%', pb: 8, boxSizing: 'border-box', position: 'relative', minHeight: '80vh' }}>
      {/* ── SEARCH BAR ── */}
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          size="small"
          placeholder={searchPlaceholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#94a3b8', fontSize: 20 }} />
              </InputAdornment>
            ),
            endAdornment: search ? (
              <InputAdornment position="end">
                <IconButton size="small" onClick={() => setSearch('')}>
                  <ClearIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </InputAdornment>
            ) : null,
            sx: {
              backgroundColor: '#ffffff',
              borderRadius: 3,
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              '& fieldset': { borderColor: '#e2e8f0' }
            }
          }}
        />
      </Box>

      {/* ── CARD LIST ITEMS ── */}
      {filtered.length > 0 ? (
        filtered.map((item, idx) => {
          const id = item._id || item.id || idx;

          // 1. Invoices
          if (type === 'invoices') {
            const customer = item.customerName?.customerName || item.customer || 'Global Gate Client';
            const invNum = typeof item.invoiceNumber === 'number'
              ? `INV-${String(item.invoiceNumber).padStart(6, '0')}`
              : (item.invoiceNumber || `INV-00${idx + 1}`);
            const date = item.dateField || item.date || item.createdAt?.substring(0, 10) || '2026';
            const total = Number(item.totalInvoice ?? item.totalAmount ?? item.total ?? 0);
            const balanceDue = Number(item.balanceDue ?? 0);

            return (
              <Card
                key={id}
                onClick={() => setSelectedRecord(item)}
                sx={{
                  borderRadius: 3.5,
                  p: 2,
                  mb: 1.5,
                  backgroundColor: '#ffffff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  '&:active': { transform: 'scale(0.99)' }
                }}
              >
                <Box sx={{ minWidth: 0, flex: 1, pr: 1.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E293B', fontSize: '0.95rem' }} noWrap>
                    {customer}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.3 }}>
                    {invNum} • {date}
                  </Typography>
                  <Box sx={{ mt: 0.8 }}>
                    {getStatusChip(item.status, balanceDue, total)}
                  </Box>
                </Box>
                <Box sx={{ textAlign: 'right', flexShrink: 0 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1E293B', fontSize: '1rem' }}>
                    {formatMoney(total)}
                  </Typography>
                  {balanceDue > 0 && (
                    <Typography variant="caption" sx={{ color: '#EF4444', fontWeight: 600, display: 'block' }}>
                      Due: {formatMoney(balanceDue)}
                    </Typography>
                  )}
                  <IconButton size="small" sx={{ p: 0, mt: 0.5 }}>
                    <ArrowForwardIosIcon sx={{ fontSize: 12, color: '#CBD5E1' }} />
                  </IconButton>
                </Box>
              </Card>
            );
          }

          // 2. Quotations / Estimates
          if (type === 'quotations' || type === 'estimates') {
            const customer = item.customerName?.customerName || item.customer || 'Quotation Client';
            const estNum = typeof item.estimateNumber === 'number' ? `EST-${String(item.estimateNumber).padStart(6, '0')}` : (item.estimateNumber || 'EST');
            const date = item.dateField || item.date || '2026';
            const total = Number(item.totalEstimate ?? item.total ?? 0);

            return (
              <Card
                key={id}
                onClick={() => setSelectedRecord(item)}
                sx={{
                  borderRadius: 3.5,
                  p: 2,
                  mb: 1.5,
                  backgroundColor: '#ffffff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  '&:active': { transform: 'scale(0.99)' }
                }}
              >
                <Box sx={{ minWidth: 0, flex: 1, pr: 1.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E293B', fontSize: '0.95rem' }} noWrap>
                    {customer}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.3 }}>
                    {estNum} • {date}
                  </Typography>
                  <Box sx={{ mt: 0.8 }}>
                    {getStatusChip(item.status || 'Draft', 0, total)}
                  </Box>
                </Box>
                <Box sx={{ textAlign: 'right', flexShrink: 0 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1E293B', fontSize: '1rem' }}>
                    {formatMoney(total)}
                  </Typography>
                  <ArrowForwardIosIcon sx={{ fontSize: 12, color: '#CBD5E1', mt: 0.5 }} />
                </Box>
              </Card>
            );
          }

          // 3. Customers
          if (type === 'customers') {
            const name = item.customerName || item.Customer || 'Customer';
            const phone = item.phone || item.phone1 || item.contact || 'No Phone';
            const email = item.email || '';
            const typePill = item.customerType || 'Individual';

            return (
              <Card
                key={id}
                onClick={() => setSelectedRecord(item)}
                sx={{
                  borderRadius: 3.5,
                  p: 2,
                  mb: 1.5,
                  backgroundColor: '#ffffff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  '&:active': { transform: 'scale(0.99)' }
                }}
              >
                <Box sx={{ minWidth: 0, flex: 1, pr: 1.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E293B', fontSize: '0.95rem' }} noWrap>
                    {name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.3 }}>
                    {phone} {email ? `• ${email}` : ''}
                  </Typography>
                  <Box sx={{ mt: 0.8 }}>
                    <Chip label={typePill.toUpperCase()} size="small" sx={{ height: 20, fontSize: '0.65rem', fontWeight: 700, backgroundColor: '#F1F5F9', color: '#475569' }} />
                  </Box>
                </Box>
                <ArrowForwardIosIcon sx={{ fontSize: 14, color: '#CBD5E1' }} />
              </Card>
            );
          }

          // 4. Items / Store & Technician Store (WITH 48x48 THUMBNAIL)
          if (type === 'items' || type === 'tech_store') {
            const name = item.itemName || 'Store Item';
            const code = item.itemCode || item.code || item.itemUpc?.newCode || 'N/A';
            const qty = Number(item.itemQuantity ?? item.balanceQty ?? item.quantity ?? 0);
            const sell = Number(item.itemSellingPrice ?? item.Sell ?? item.sellPrice ?? 0);
            const hasImg = Boolean(item?.data && item?.contentType);
            const imgSrc = hasImg ? `data:${item.contentType};base64,${item.data}` : (item?.image || null);

            return (
              <Card
                key={id}
                onClick={() => setSelectedRecord(item)}
                sx={{
                  borderRadius: 3.5,
                  p: 1.8,
                  mb: 1.5,
                  backgroundColor: '#ffffff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  '&:active': { transform: 'scale(0.99)' }
                }}
              >
                {/* 48x48 Image Thumbnail */}
                {imgSrc ? (
                  <Box
                    component="img"
                    src={imgSrc}
                    alt={name}
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      objectFit: 'cover',
                      border: '1px solid #E2E8F0',
                      flexShrink: 0
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: '#EEF2FF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Inventory2OutlinedIcon sx={{ fontSize: 24, color: '#30368a' }} />
                  </Box>
                )}

                <Box sx={{ minWidth: 0, flex: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E293B', fontSize: '0.92rem' }} noWrap>
                    {name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.2 }}>
                    Code: {code} • Stock: {qty}
                  </Typography>
                </Box>

                <Box sx={{ textAlign: 'right', flexShrink: 0 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#10B981', fontSize: '0.95rem' }}>
                    {formatMoney(sell)}
                  </Typography>
                  <ArrowForwardIosIcon sx={{ fontSize: 12, color: '#CBD5E1', mt: 0.5 }} />
                </Box>
              </Card>
            );
          }

          // 5. Maintenance / Job Cards
          if (type === 'maintenance') {
            const defect = item.defectDescription || item.defect || 'Maintenance Job';
            const customer = item.customerName?.customerName || item.customer || 'Client';
            const servNum = item.serviceNumber ? `M-${String(item.serviceNumber).padStart(6, '0')}` : `M-00${idx + 1}`;
            const date = item.dateField || item.date || '2026';
            const cost = Number(item.infoSell ?? item.totalLaborFeesGenerale ?? 0);

            return (
              <Card
                key={id}
                onClick={() => setSelectedRecord(item)}
                sx={{
                  borderRadius: 3.5,
                  p: 2,
                  mb: 1.5,
                  backgroundColor: '#ffffff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  '&:active': { transform: 'scale(0.99)' }
                }}
              >
                <Box sx={{ minWidth: 0, flex: 1, pr: 1.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E293B', fontSize: '0.95rem' }} noWrap>
                    {defect}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.3 }}>
                    {servNum} • {customer} • {date}
                  </Typography>
                  <Box sx={{ mt: 0.8 }}>
                    <Chip label="JOB CARD" size="small" sx={{ height: 20, fontSize: '0.65rem', fontWeight: 700, backgroundColor: '#FEF3C7', color: '#B45309' }} />
                  </Box>
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1E293B' }}>
                    {formatMoney(cost)}
                  </Typography>
                  <ArrowForwardIosIcon sx={{ fontSize: 12, color: '#CBD5E1', mt: 0.5 }} />
                </Box>
              </Card>
            );
          }

          // 6. Maintenance Orders
          if (type === 'maintenance_orders') {
            const num = item.orderNumber || item.maintenanceNumber || `MO-${idx + 1}`;
            const tech = item.technicianName || item.technician || 'Technician';
            const date = item.dateField || item.date || '2026';
            const total = Number(item.totalCost ?? item.amount ?? 0);

            return (
              <Card
                key={id}
                onClick={() => setSelectedRecord(item)}
                sx={{
                  borderRadius: 3.5,
                  p: 2,
                  mb: 1.5,
                  backgroundColor: '#ffffff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  '&:active': { transform: 'scale(0.99)' }
                }}
              >
                <Box sx={{ minWidth: 0, flex: 1, pr: 1.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E293B', fontSize: '0.95rem' }} noWrap>
                    {num}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.3 }}>
                    Tech: {tech} • {date}
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1E293B' }}>
                    {formatMoney(total)}
                  </Typography>
                  <ArrowForwardIosIcon sx={{ fontSize: 12, color: '#CBD5E1', mt: 0.5 }} />
                </Box>
              </Card>
            );
          }

          // 7. Payments
          if (type === 'payments') {
            const customer = item.customerName?.customerName || item.customer || 'Client';
            const payNum = item.paymentNumber ? `PAY-${item.paymentNumber}` : 'Payment';
            const date = item.dateField || item.date || '2026';
            const amount = Number(item.amount ?? item.total ?? 0);

            return (
              <Card
                key={id}
                onClick={() => setSelectedRecord(item)}
                sx={{
                  borderRadius: 3.5,
                  p: 2,
                  mb: 1.5,
                  backgroundColor: '#ffffff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  '&:active': { transform: 'scale(0.99)' }
                }}
              >
                <Box sx={{ minWidth: 0, flex: 1, pr: 1.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E293B', fontSize: '0.95rem' }} noWrap>
                    {customer}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.3 }}>
                    {payNum} • {date}
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#10B981' }}>
                    {formatMoney(amount)}
                  </Typography>
                  <ArrowForwardIosIcon sx={{ fontSize: 12, color: '#CBD5E1', mt: 0.5 }} />
                </Box>
              </Card>
            );
          }

          // 8. Daily Expenses
          if (type === 'expenses') {
            const cat = item.expenseCategory?.expensesCategory || item.expenseCategory || item.category || 'Expense';
            const note = item.description || item.expenseDescription || 'Daily Expense';
            const date = item.expenseDate || item.dateField || item.date || '2026';
            const amount = Number(item.amount ?? item.total ?? 0);

            return (
              <Card
                key={id}
                onClick={() => setSelectedRecord(item)}
                sx={{
                  borderRadius: 3.5,
                  p: 2,
                  mb: 1.5,
                  backgroundColor: '#ffffff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  '&:active': { transform: 'scale(0.99)' }
                }}
              >
                <Box sx={{ minWidth: 0, flex: 1, pr: 1.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E293B', fontSize: '0.95rem' }} noWrap>
                    {cat}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.3 }}>
                    {note} • {date}
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#EF4444' }}>
                    {formatMoney(amount)}
                  </Typography>
                  <ArrowForwardIosIcon sx={{ fontSize: 12, color: '#CBD5E1', mt: 0.5 }} />
                </Box>
              </Card>
            );
          }

          // 9. Projects
          if (type === 'projects') {
            const projName = item.projectName || item.project || 'Project';
            const customer = item.customerName?.customerName || item.customer || 'Client';
            const desc = item.description || '';

            return (
              <Card
                key={id}
                onClick={() => setSelectedRecord(item)}
                sx={{
                  borderRadius: 3.5,
                  p: 2,
                  mb: 1.5,
                  backgroundColor: '#ffffff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  '&:active': { transform: 'scale(0.99)' }
                }}
              >
                <Box sx={{ minWidth: 0, flex: 1, pr: 1.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E293B', fontSize: '0.95rem' }} noWrap>
                    {projName}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.3 }}>
                    {customer} {desc ? `• ${desc}` : ''}
                  </Typography>
                </Box>
                <ArrowForwardIosIcon sx={{ fontSize: 14, color: '#CBD5E1' }} />
              </Card>
            );
          }

          // 10. Employees
          if (type === 'employees') {
            const empName = item.employeeName || item.name || 'Employee';
            const role = item.position || item.role || item.status || 'Staff';
            const phone = item.phone || '';

            return (
              <Card
                key={id}
                onClick={() => setSelectedRecord(item)}
                sx={{
                  borderRadius: 3.5,
                  p: 2,
                  mb: 1.5,
                  backgroundColor: '#ffffff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  '&:active': { transform: 'scale(0.99)' }
                }}
              >
                <Box sx={{ minWidth: 0, flex: 1, pr: 1.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E293B', fontSize: '0.95rem' }} noWrap>
                    {empName}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.3 }}>
                    Role: {role} {phone ? `• ${phone}` : ''}
                  </Typography>
                </Box>
                <ArrowForwardIosIcon sx={{ fontSize: 14, color: '#CBD5E1' }} />
              </Card>
            );
          }

          // 11. Suppliers
          if (type === 'suppliers') {
            const supName = item.supplierName || item.name || 'Supplier';
            const phone = item.phone || item.contact || '';
            const email = item.email || '';

            return (
              <Card
                key={id}
                onClick={() => setSelectedRecord(item)}
                sx={{
                  borderRadius: 3.5,
                  p: 2,
                  mb: 1.5,
                  backgroundColor: '#ffffff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  '&:active': { transform: 'scale(0.99)' }
                }}
              >
                <Box sx={{ minWidth: 0, flex: 1, pr: 1.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E293B', fontSize: '0.95rem' }} noWrap>
                    {supName}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.3 }}>
                    {phone} {email ? `• ${email}` : ''}
                  </Typography>
                </Box>
                <ArrowForwardIosIcon sx={{ fontSize: 14, color: '#CBD5E1' }} />
              </Card>
            );
          }

          return null;
        })
      ) : (
        <Box sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#94a3b8' }}>
            No records found.
          </Typography>
        </Box>
      )}

      {/* ── FLOATING ACTION BUTTON (+) ── */}
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleFabAdd}
        sx={{
          position: 'fixed',
          bottom: 74,
          right: 20,
          backgroundColor: '#30368a',
          color: '#ffffff',
          boxShadow: '0 4px 14px rgba(48, 54, 138, 0.4)',
          zIndex: 1000,
          '&:hover': { backgroundColor: '#202a5a' }
        }}
      >
        <AddIcon sx={{ fontSize: 28 }} />
      </Fab>

      {/* ── DEDICATED MOBILE DETAIL SHEET ── */}
      <MobileDetailSheet
        open={Boolean(selectedRecord)}
        onClose={() => setSelectedRecord(null)}
        record={selectedRecord}
        type={type}
      />
    </Box>
  );
}

export default MobileCardList;
