import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/auth/authSlice';
import { cachedGet } from '../utils/apiCache';
import { canAccessModule } from '../utils/permissionUtils';
import { ENDPOINT_URL } from '../apiConfig';
import { normalizeImageDataUrl } from '../utils/formatUtils';
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
import ArrowBack from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import MobileDetailSheet from './MobileDetailSheet';

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
  const candidates = [
    item.data,
    item.image,
    item.img,
    item.picture,
    item.photo,
    item.itemImage,
    item.imageUrl,
    item.imageURL,
    item.imagesURL
  ];
  for (const cand of candidates) {
    if (!cand) continue;
    const url = normalizeImageDataUrl(cand, item.contentType);
    if (url) return url;
    if (typeof cand === 'string') {
      const trimmed = cand.trim();
      if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed;
      if (trimmed.startsWith('/') || trimmed.startsWith('uploads/') || trimmed.startsWith('images/')) {
        return `${ENDPOINT_URL}${trimmed.startsWith('/') ? '' : '/'}${trimmed}`;
      }
    }
  }
  return null;
}

function getStatusChip(status, balanceDue, totalAmount) {
  const isPaid = parseFloat(balanceDue || 0) <= 0 && parseFloat(totalAmount || 0) > 0;
  const rawStat = safeText(status === 'Free of Charge' ? 'Free of Charge' : (isPaid ? 'Paid' : (status || 'Draft')), 'Draft');
  const stat = rawStat.toLowerCase();

  let bg = '#F1F5F9';
  let color = '#475569';

  switch (stat) {
    case 'free of charge':
      bg = '#F3E8FF';
      color = '#7E22CE';
      break;
    case 'paid':
    case 'close':
      bg = '#DCFCE7';
      color = '#15803D';
      break;
    case 'converted':
      bg = '#EDE9FE';
      color = '#6D28D9';
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
      bg = '#EDE9FE';
      color = '#6D28D9';
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
        fontSize: '0.65rem',
        height: 22,
        borderRadius: 1.5
      }}
    />
  );
}

function MobileCardList({
  type = 'invoices',
  data = [],
  searchPlaceholder = 'Search records...',
  searchValue = '',
  onSearchChange = null,
  page = 0,
  totalCount = null,
  onPageChange = null,
  loading = false,
  statusFilter = 'ALL',
  onStatusFilterChange = null,
  statusCounts = null
}) {
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  const [search, setSearch] = useState(searchValue || '');
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [grantAccess, setGrantAccess] = useState([]);

  // Sync internal search state when external searchValue changes
  useEffect(() => {
    if (searchValue !== undefined && searchValue !== null && searchValue !== search) {
      setSearch(searchValue);
    }
  }, [searchValue]);

  // Debounce notification to parent onSearchChange for server-side queries
  useEffect(() => {
    if (!onSearchChange) return;
    const timer = setTimeout(() => {
      if (search !== searchValue) {
        onSearchChange(search);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

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
        console.error('Error loading grantAccess in MobileCardList:', err);
      }
    };
    fetchAccess();
  }, [user]);

  const userName = user?.data?.userName || '';
  const userRole = user?.data?.role || '';

  const canCreate = (t) => {
    const typeToModule = {
      invoices: 'Invoice',
      quotations: 'Estimate',
      estimates: 'Estimate',
      customers: 'Customer',
      items: 'Item',
      maintenance: 'Maintenance',
      maintenance_orders: 'Maintenance-Order',
      payments: 'Payment',
      expenses: 'Expenses',
      projects: 'Project',
      employees: 'Employee',
      suppliers: 'Supplier'
    };
    const modName = typeToModule[t] || t || '';
    return canAccessModule(user?.data, grantAccess, modName, 'create');
  };

  const safeData = Array.isArray(data) ? data : [];

  const filtered = safeData.filter((item) => {
    if (!item) return false;

    // Status chip filter
    if (statusFilter && statusFilter !== 'ALL') {
      const rawStat = safeText(item.status).toLowerCase();
      const statTarget = statusFilter.toLowerCase();
      if (statTarget === 'paid' && rawStat !== 'paid') return false;
      if (statTarget === 'pending' && rawStat !== 'pending') return false;
      if (statTarget === 'open' && rawStat !== 'open') return false;
      if (statTarget === 'close' && rawStat !== 'close') return false;
    }

    // Strictly enforce technician scope: Technicians can ONLY see Open or Pending orders
    if ((type === 'maintenance' || type === 'maintenance_orders') && userName !== 'GG') {
      const isTech = userRole?.toUpperCase() === 'TECHNICIAN' || 
                     userRole?.toUpperCase() === 'TECHNICIEN' || 
                     user?.data?.department?.toUpperCase() === 'TECHNICIAN' ||
                     !grantAccess.some(row => row.moduleName === "Maintenance" && row.access.readM);
      if (isTech) {
        const isConverted = item.Converted === true || item.Converted === 'true' || String(item.status || '').toLowerCase() === 'converted';
        const isClosed = String(item.status || '').toLowerCase() === 'close' || String(item.status || '').toLowerCase() === 'closed';
        if (isConverted || isClosed) return false;
      }
    }

    // If server-side search is enabled (onSearchChange provided),
    // safeData is already the authoritative search result returned by the backend query!
    // Do not filter out valid server results with mismatched client regex.
    if (onSearchChange) {
      return true;
    }

    const trimmed = search.trim().toLowerCase();
    if (!trimmed) return true;
    const tokens = trimmed.split(/\s+/).filter(Boolean);

    if (type === 'invoices') {
      const cust = safeText(item.customerName?.customerName || item.customerName?.Customer || item.customerName || item.customer).toLowerCase();
      const num = safeText(item.invoiceNumber).toLowerCase();
      const numFmt = `inv-${String(item.invoiceNumber || '').padStart(6, '0')}`.toLowerCase();
      const numClean = safeText(item.invoiceNumber).replace(/^0+/, '');
      const subj = safeText(item.invoiceSubject || item.subject).toLowerCase();
      const stat = safeText(item.status).toLowerCase();
      const date = safeText(item.dateField || item.invoiceDate).toLowerCase();
      const itemsText = (Array.isArray(item.itemInfo) ? item.itemInfo : []).map(it => `${safeText(it.itemName?.itemName || it.itemName)} ${safeText(it.itemDescription)}`).join(' ').toLowerCase();
      const allText = `${cust} ${num} ${numFmt} ${numClean} ${subj} ${stat} ${date} ${itemsText}`;
      return tokens.every(tok => allText.includes(tok));
    }

    if (type === 'quotations' || type === 'estimates') {
      const cust = safeText(item.customerName?.customerName || item.customerName?.Customer || item.customerName || item.customer).toLowerCase();
      const num = safeText(item.estimateNumber).toLowerCase();
      const numFmt = `q-${String(item.estimateNumber || '').padStart(6, '0')}`.toLowerCase();
      const numFmtEst = `est-${String(item.estimateNumber || '').padStart(6, '0')}`.toLowerCase();
      const numFmtQuo = `quo-${String(item.estimateNumber || '').padStart(6, '0')}`.toLowerCase();
      const numClean = safeText(item.estimateNumber).replace(/^0+/, '');
      const subj = safeText(item.estimateName || item.estimateSubject || item.subject).toLowerCase();
      const stat = safeText(item.status).toLowerCase();
      const date = safeText(item.dateField || item.estimateDate).toLowerCase();
      const itemsText = (Array.isArray(item.itemInfo) ? item.itemInfo : []).map(it => `${safeText(it.itemName?.itemName || it.itemName)} ${safeText(it.itemDescription)}`).join(' ').toLowerCase();
      const allText = `${cust} ${num} ${numFmt} ${numFmtEst} ${numFmtQuo} ${numClean} ${subj} ${stat} ${date} ${itemsText}`;
      return tokens.every(tok => allText.includes(tok));
    }

    if (type === 'customers') {
      const name = safeText(item.customerName || item.Customer || item.customerFullName).toLowerCase();
      const comp = safeText(item.companyName).toLowerCase();
      const phone = safeText(item.phone || item.phone1 || item.contact || item.customerCompanyPhone || item.customerPhone).toLowerCase();
      const email = safeText(item.email || item.customerEmail).toLowerCase();
      const addr = safeText(item.billingAddress || item.address).toLowerCase();
      const allText = `${name} ${comp} ${phone} ${email} ${addr}`;
      return tokens.every(tok => allText.includes(tok));
    }

    if (type === 'maintenance' || type === 'maintenance_orders') {
      const defect = safeText(item.defectDescription || item.itemDescriptionInfo || item.defect).toLowerCase();
      const cust = safeText(item.customerName?.customerName || item.customerName?.Customer || item.customerName || item.customer).toLowerCase();
      const num = safeText(item.serviceNumber || item.orderNumber || item.maintenanceNumber).toLowerCase();
      const numFmt = `m-${String(item.serviceNumber || item.orderNumber || '').padStart(6, '0')}`.toLowerCase();
      const numFmtMo = `mo-${String(item.serviceNumber || item.orderNumber || '').padStart(6, '0')}`.toLowerCase();
      const tech = safeText(item.technicianAssign || item.technicianName || item.technician).toLowerCase();
      const brand = safeText(item.brand).toLowerCase();
      const model = safeText(item.model).toLowerCase();
      const serial = safeText(item.serialNo).toLowerCase();
      const stat = safeText(item.status).toLowerCase();
      const date = safeText(item.dateField || item.serviceDate || item.visit).toLowerCase();
      const allText = `${defect} ${cust} ${num} ${numFmt} ${numFmtMo} ${tech} ${brand} ${model} ${serial} ${stat} ${date}`;
      return tokens.every(tok => allText.includes(tok));
    }

    if (type === 'items' || type === 'tech_store') {
      const name = safeText(item.itemName || item.name).toLowerCase();
      const code = safeText(item.itemCode || item.code || item.itemUpc?.newCode || item.itemUpc || item.ItemNumber).toLowerCase();
      const codeNum = safeText(item.itemUpc?.itemNumber).toLowerCase();
      const brand = safeText(item.itemBrand || item.brand).toLowerCase();
      const desc = safeText(item.itemDescription || item.description).toLowerCase();
      const cat = safeText(item.itemCategory || item.category).toLowerCase();
      const store = safeText(item.itemStore || item.store).toLowerCase();
      const sup = safeText(item.itemSupplier || item.supplier || item.supplierName).toLowerCase();
      const mfg = safeText(item.itemManufacturer || item.manufacturer).toLowerCase();
      const cond = safeText(item.condition || item.typeItem).toLowerCase();
      const unit = safeText(item.unit).toLowerCase();
      const dim = safeText(item.itemDimension || item.dimension).toLowerCase();
      const wt = safeText(item.itemWeight || item.weight).toLowerCase();
      const price = safeText(item.itemSellingPrice || item.price).toLowerCase();
      const cost = safeText(item.itemCostPrice || item.cost).toLowerCase();
      const allText = `${name} ${code} ${codeNum} ${brand} ${desc} ${cat} ${store} ${sup} ${mfg} ${cond} ${unit} ${dim} ${wt} ${price} ${cost}`;
      return tokens.every(tok => allText.includes(tok));
    }

    if (type === 'payments') {
      const cust = safeText(item.customerName?.customerName || item.customerName?.Customer || item.customerName || item.customer).toLowerCase();
      const num = safeText(item.paymentNumber).toLowerCase();
      const numFmt = `pay-${String(item.paymentNumber || '').padStart(6, '0')}`.toLowerCase();
      const desc = safeText(item.description).toLowerCase();
      const mode = safeText(item.modes || item.mode).toLowerCase();
      const amt = safeText(item.amount || item.amountPaid).toLowerCase();
      const allText = `${cust} ${num} ${numFmt} ${desc} ${mode} ${amt}`;
      return tokens.every(tok => allText.includes(tok));
    }

    if (type === 'expenses') {
      const cat = safeText(item.expenseCategory?.expensesCategory || item.expenseCategory || item.category).toLowerCase();
      const note = safeText(item.description || item.expenseDescription).toLowerCase();
      const paid = safeText(item.paidTo || item.name).toLowerCase();
      const amt = safeText(item.totalCash || item.amount).toLowerCase();
      const allText = `${cat} ${note} ${paid} ${amt}`;
      return tokens.every(tok => allText.includes(tok));
    }

    if (type === 'projects') {
      const proj = safeText(item.projectName || item.project).toLowerCase();
      const cust = safeText(item.customerName?.customerName || item.customerName || item.customer).toLowerCase();
      const desc = safeText(item.description).toLowerCase();
      const allText = `${proj} ${cust} ${desc}`;
      return tokens.every(tok => allText.includes(tok));
    }

    if (type === 'employees') {
      const emp = safeText(item.employeeName || item.name).toLowerCase();
      const pos = safeText(item.position || item.role || item.status || item.department).toLowerCase();
      const allText = `${emp} ${pos}`;
      return tokens.every(tok => allText.includes(tok));
    }

    if (type === 'suppliers') {
      const sup = safeText(item.supplierName || item.storeName || item.companyName || item.name || item.contactPerson).toLowerCase();
      const phone = safeText(item.phone || item.phone1 || item.contact || item.address || item.description).toLowerCase();
      const email = safeText(item.email).toLowerCase();
      const allText = `${sup} ${phone} ${email}`;
      return tokens.every(tok => allText.includes(tok));
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
      {/* ── TOP SEARCH BAR ── */}
      <Box
        sx={{
          mb: 1.5,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}
      >
        <TextField
          fullWidth
          size="small"
          placeholder={searchPlaceholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#30368a', fontSize: 22 }} />
              </InputAdornment>
            ),
            endAdornment: search ? (
              <InputAdornment position="end">
                <IconButton size="small" onClick={() => setSearch('')}>
                  <ClearIcon sx={{ fontSize: 18 }} />
                </IconButton>
              </InputAdornment>
            ) : null,
            sx: {
              backgroundColor: '#ffffff',
              borderRadius: 3,
              height: 44,
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              '& fieldset': { borderColor: '#cbd5e1' },
              '&:hover fieldset': { borderColor: '#30368a' },
              '&.Mui-focused fieldset': { borderColor: '#30368a' }
            }
          }}
        />
      </Box>

      {/* ── STATUS FILTER PILLS (IF PROVIDED BY PARENT) ── */}
      {statusCounts && onStatusFilterChange && (
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            overflowX: 'auto',
            pb: 1.2,
            mb: 1,
            '::-webkit-scrollbar': { display: 'none' }
          }}
        >
          {Object.entries(statusCounts).map(([key, count]) => {
            const labelKey = key === 'all' ? 'ALL' : (key === 'freeOfCharge' ? 'Free of Charge' : (key === 'partiallyPaid' ? 'Partially-Paid' : key.toUpperCase()));
            const isSelected = (statusFilter || 'ALL').toUpperCase() === labelKey.toUpperCase();
            return (
              <Chip
                key={key}
                label={`${labelKey} (${count || 0})`}
                size="small"
                onClick={() => onStatusFilterChange(labelKey === 'ALL' ? 'ALL' : key)}
                sx={{
                  fontWeight: isSelected ? 800 : 600,
                  fontSize: '0.72rem',
                  backgroundColor: isSelected ? '#30368a' : '#f1f5f9',
                  color: isSelected ? '#ffffff' : '#475569',
                  cursor: 'pointer',
                  flexShrink: 0,
                  '&:active': { transform: 'scale(0.96)' }
                }}
              />
            );
          })}
        </Box>
      )}

      {/* ── CARD LIST ITEMS ── */}
      {filtered.length > 0 ? (
        filtered.map((item, idx) => {
          const id = item._id || item.id || idx;

          // 1. Invoices
          if (type === 'invoices') {
            const customer = safeText(item.customerName?.customerName || item.customerName || item.customer, 'Global Gate Client');
            const invNum = typeof item.invoiceNumber === 'number'
              ? `INV-${String(item.invoiceNumber).padStart(6, '0')}`
              : safeText(item.invoiceNumber, `INV-00${idx + 1}`);
            const date = safeText(item.dateField || item.date || item.createdAt?.substring(0, 10), '2026');
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
            const customer = safeText(item.customerName?.customerName || item.customerName || item.customer, 'Quotation Client');
            const estNum = typeof item.estimateNumber === 'number'
              ? `Q-${String(item.estimateNumber).padStart(6, '0')}`
              : (String(item.estimateNumber || item.estimateName || '').replace(/^(EST|QUO|QT|Q)\s*-?/i, 'Q-') || 'Q-000000');
            const date = safeText(item.dateField || item.date, '2026');
            const lineItems = Array.isArray(item.itemInfo) ? item.itemInfo : (Array.isArray(item.items) ? item.items : []);
            const calcLineTotal = lineItems.reduce((acc, it) => acc + (Number(it?.itemTotal) || (Number(it?.itemQuantity || it?.quantity || 1) * Number(it?.itemSellingPrice || it?.rate || it?.price || 0))), 0);
            const total = Number(item.totalInvoice ?? item.totalAmount ?? item.totalEstimate ?? item.total ?? (calcLineTotal > 0 ? calcLineTotal : 0));

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
            const name = safeText(item.customerName || item.Customer, 'Customer');
            const phone = safeText(item.phone || item.phone1 || item.contact, 'No Phone');
            const email = safeText(item.email);
            const typePill = safeText(item.customerType, 'Individual');

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
            const isTechStore = type === 'tech_store';
            const name = safeText(item.itemName || item.name, 'Store Item');
            const code = safeText(item.itemCode || item.code || item.itemUpc?.newCode || item.itemUpc, 'N/A');
            const qty = Number(item.itemQuantity ?? item.balanceQty ?? item.quantity ?? 0);
            const sell = Number(item.itemSellingPrice ?? item.Sell ?? item.sellPrice ?? 0);
            const imgSrc = getItemImageSrc(item);

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
                {/* Image Thumbnail with robust fallback */}
                {imgSrc ? (
                  <Box
                    component="img"
                    src={imgSrc}
                    alt={name}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 2,
                      objectFit: 'contain',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #E2E8F0',
                      flexShrink: 0
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
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
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.2 }} noWrap>
                    {isTechStore ? `Code: ${code}` : `Code: ${code} • Stock: ${qty}`}
                    {item.itemBrand ? ` • ${item.itemBrand}` : ''}
                    {item.itemCategory ? ` • ${item.itemCategory}` : ''}
                  </Typography>
                </Box>

                <Box sx={{ textAlign: 'right', flexShrink: 0 }}>
                  {!isTechStore && (
                    <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#10B981', fontSize: '0.95rem' }}>
                      {formatMoney(sell)}
                    </Typography>
                  )}
                  <ArrowForwardIosIcon sx={{ fontSize: 12, color: '#CBD5E1', mt: 0.5 }} />
                </Box>
              </Card>
            );
          }

          // 5. Maintenance / Job Cards
          if (type === 'maintenance') {
            const defect = safeText(item.defectDescription || item.defect || item.itemDescriptionInfo, 'Maintenance Job');
            const customer = safeText(item.customerName?.customerName || item.customerName || item.customer, 'Client');
            const servNum = item.serviceNumber ? (String(item.serviceNumber).startsWith('M-') ? item.serviceNumber : `M-${String(item.serviceNumber).padStart(6, '0')}`) : `M-00${idx + 1}`;
            const date = safeText(item.dateField || item.date, '2026');
            const isOrderConverted = item.Converted === true || item.status === 'Converted';
            const displayStatus = isOrderConverted ? 'Converted' : (item.status || 'Open');

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
                    {getStatusChip(displayStatus, 0, 0)}
                  </Box>
                </Box>
                <Box sx={{ textAlign: 'right', flexShrink: 0 }}>
                  <ArrowForwardIosIcon sx={{ fontSize: 14, color: '#CBD5E1' }} />
                </Box>
              </Card>
            );
          }

          // 6. Maintenance Orders
          if (type === 'maintenance_orders') {
            const servNum = safeText(item.serviceNumber || item.orderNumber || item.maintenanceNumber, `MO-${idx + 1}`);
            const tech = safeText(item.technicianAssign || item.technicianName || item.technician, 'Unassigned');
            const customer = safeText(item.customerName?.customerName || item.customerName || item.customer, '');
            const defect = safeText(item.defectDescription || item.itemDescriptionInfo || item.defect || item.brand, 'Service Order');
            const date = safeText(item.dateField || item.date || item.visit, '2026');
            const isOrderConverted = item.Converted === true || item.status === 'Converted';
            const displayStatus = isOrderConverted ? 'Converted' : (item.status || 'Open');

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
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E293B', fontSize: '0.95rem' }} noWrap>
                      {servNum}
                    </Typography>
                    {customer && (
                      <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 600 }} noWrap>
                        • {customer}
                      </Typography>
                    )}
                  </Box>
                  <Typography variant="body2" sx={{ color: '#334155', fontWeight: 600, mt: 0.3 }} noWrap>
                    {defect}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.2 }}>
                    Tech: {tech} • {date}
                  </Typography>
                  <Box sx={{ mt: 0.8 }}>
                    {getStatusChip(displayStatus, 0, 0)}
                  </Box>
                </Box>
                <Box sx={{ textAlign: 'right', flexShrink: 0 }}>
                  <ArrowForwardIosIcon sx={{ fontSize: 14, color: '#CBD5E1' }} />
                </Box>
              </Card>
            );
          }

          // 7. Payments
          if (type === 'payments') {
            const customer = safeText(item.customerName?.customerName || item.customerName || item.customer, 'Client');
            const payNum = item.paymentNumber ? `PAY-${String(item.paymentNumber).padStart(6, '0')}` : 'Payment';
            const date = safeText(item.dateField || item.date || item.paymentDate?.substring(0, 10), '2026');
            const amount = Number(item.amount ?? item.paidAmount ?? item.total ?? 0);
            const mode = safeText(item.modes || item.mode, '');

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
                    {payNum} • {date} {mode ? `• ${mode}` : ''}
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
            const cat = safeText(item.expenseCategory?.expensesCategory || item.expenseCategory || item.category || item.categoryExpenses, 'Expense');
            const note = safeText(item.description || item.expenseDescription || item.name, 'Daily Expense');
            const date = safeText(item.expenseDate || item.dateField || item.date, '2026');
            
            // In DB: item.amount is Congolese Francs (FC), item.total is USD ($)
            const fcAmount = Number(item.amount || 0);
            const usdTotal = Number(item.total || 0);
            const isFC = fcAmount > 0;

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
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.3 }} noWrap>
                    {note} • {date}
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'right', flexShrink: 0 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#EF4444', fontSize: '0.95rem' }}>
                    {isFC ? `FC ${fcAmount.toLocaleString()}` : `$ ${usdTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                  </Typography>
                  {isFC && usdTotal > 0 && (
                    <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 600, display: 'block' }}>
                      ≈ $ {usdTotal.toFixed(2)}
                    </Typography>
                  )}
                  <ArrowForwardIosIcon sx={{ fontSize: 12, color: '#CBD5E1', mt: 0.5 }} />
                </Box>
              </Card>
            );
          }

          // 9. Projects
          if (type === 'projects') {
            const projName = safeText(item.projectName || item.project, 'Project');
            const customer = safeText(item.customerName?.customerName || item.customerName || item.customer, 'Client');
            const desc = safeText(item.description);

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
            const empName = safeText(item.employeeName || item.name, 'Employee');
            const role = safeText(item.position || item.role || item.status, 'Staff');
            const phone = safeText(item.phone);

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
            const supName = safeText(item.supplierName || item.storeName || item.companyName || item.name, 'Supplier');
            const store = safeText(item.storeName || item.companyName);
            const phone = safeText(item.phone || item.phone1 || item.contact);
            const email = safeText(item.email);
            const address = safeText(item.address);

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
                  {store && store !== supName && (
                    <Typography variant="caption" sx={{ color: '#30368a', fontWeight: 600, display: 'block', mt: 0.2 }} noWrap>
                      {store}
                    </Typography>
                  )}
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.3 }}>
                    {phone || 'No Phone'} {email ? `• ${email}` : ''} {address ? `• ${address}` : ''}
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

      {/* ── PAGINATION & LOAD MORE ── */}
      {onPageChange && totalCount > safeData.length && (
        <Box sx={{ mt: 2.5, mb: 4, display: 'flex', justifyContent: 'center' }}>
          <Box
            component="button"
            type="button"
            onClick={() => onPageChange(page + 1)}
            disabled={loading}
            sx={{
              backgroundColor: '#30368a',
              color: '#ffffff',
              border: 'none',
              borderRadius: 3,
              py: 1.2,
              px: 3,
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(48,54,138,0.25)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              '&:active': { transform: 'scale(0.98)' }
            }}
          >
            {loading ? 'Loading...' : `Load More (${safeData.length} of ${totalCount})`}
          </Box>
        </Box>
      )}

      {/* ── FLOATING ACTION BUTTON (+) ── */}
      {canCreate(type) && (
        <Fab
          color="primary"
          aria-label="add"
          onClick={handleFabAdd}
          sx={{
            position: 'fixed',
            bottom: 'calc(70px + env(safe-area-inset-bottom, 0px))',
            right: 16,
            width: 50,
            height: 50,
            minHeight: 50,
            backgroundColor: '#30368a',
            color: '#ffffff',
            boxShadow: '0 4px 14px rgba(48, 54, 138, 0.4)',
            zIndex: 1300,
            '&:hover': { backgroundColor: '#202a5a' }
          }}
        >
          <AddIcon sx={{ fontSize: 26 }} />
        </Fab>
      )}

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
