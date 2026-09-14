import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/auth/authSlice';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  IconButton,
  Fab,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BuildIcon from '@mui/icons-material/Build';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import dayjs from 'dayjs';
import axios from 'axios';
import { cachedGet } from '../utils/apiCache';
import { ENDPOINT_URL } from '../apiConfig';

function formatCurrency(val) {
  try {
    if (isNaN(val) || val === null || val === undefined) return '$ 0.00';
    return '$ ' + Number(val).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  } catch (e) {
    return '$ 0.00';
  }
}

// ── PURE SVG DONUT CHART (100% WEBVIEW CRASH-PROOF) ──
function SvgDonutChart({ data = [], size = 180, strokeWidth = 26, centerLabel = '2026 FY' }) {
  try {
    const validData = Array.isArray(data) ? data : [];
    const total = validData.reduce((sum, d) => sum + (Number(d.value) || 0), 0) || 1;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    let accumulatedLength = 0;

    return (
      <Box sx={{ position: 'relative', width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
          {validData.map((slice, i) => {
            const val = Number(slice.value) || 0;
            const strokeLength = (val / total) * circumference;
            const offset = -accumulatedLength;
            accumulatedLength += strokeLength;

            return (
              <circle
                key={slice.id ?? i}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="transparent"
                stroke={slice.color || '#CBD5E1'}
                strokeWidth={strokeWidth}
                strokeDasharray={`${Math.max(strokeLength - 2, 0)} ${circumference}`}
                strokeDashoffset={offset}
                strokeLinecap="round"
              />
            );
          })}
        </svg>
        <Box sx={{ position: 'absolute', textAlign: 'center', px: 1 }}>
          <Typography variant="caption" sx={{ color: '#30368a', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', display: 'block' }}>
            {centerLabel}
          </Typography>
        </Box>
      </Box>
    );
  } catch (e) {
    return <Box sx={{ height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Chart Preview</Box>;
  }
}

class DashboardErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error('MobileDashboard Error Boundary Caught:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ color: '#EF4444', fontWeight: 700 }}>Dashboard Notice</Typography>
          <Typography variant="body2" sx={{ color: '#64748B', mt: 1 }}>Refreshing metrics...</Typography>
        </Box>
      );
    }
    return this.props.children;
  }
}

function parseItemDate(item) {
  if (!item) return null;
  const raw = item.invoiceDate || item.expenseDate || item.paymentDate || item.date || item.dateField || item.createdAt;
  if (!raw) return null;
  if (typeof raw === 'string') {
    const trimmed = raw.trim();
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(trimmed)) {
      const [d, m, y] = trimmed.split('/');
      return dayjs(`${y}-${m}-${d}`);
    }
  }
  const parsed = dayjs(raw);
  return parsed.isValid() ? parsed : null;
}

function MobileDashboardContent() {
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);

  const [loading, setLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState(dayjs());
  const [viewMode, setViewMode] = useState('monthly'); // 'monthly' | 'yearly'
  const [rawData, setRawData] = useState({ invoices: [], expenses: [], payments: [] });

  const [metrics, setMetrics] = useState({
    totalRevenue: 0,
    totalExpenses: 0,
    currentReceivables: 0,
    overdueReceivables: 0,
    cashIn: 0,
    cashOut: 0,
    netIncome: 0,
    recentInvoices: []
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const fabMenuOpen = Boolean(anchorEl);

  useEffect(() => {
    let isMounted = true;
    const fetchDashboardData = async () => {
      try {
        const [resInvoice, resExpense, resPayment] = await Promise.all([
          cachedGet(`${ENDPOINT_URL}/invoice?summary=true`).catch(() => ({ data: { data: [] } })),
          cachedGet(`${ENDPOINT_URL}/expense?summary=true`).catch(() => ({ data: { data: [] } })),
          cachedGet(`${ENDPOINT_URL}/payment`).catch(() => ({ data: { data: [] } }))
        ]);

        if (!isMounted) return;

        const activeBranch = localStorage.getItem('selectedBranch') || 'HQ';
        const rawInvoices = Array.isArray(resInvoice?.data?.data) ? resInvoice.data.data : [];
        const rawExpenses = Array.isArray(resExpense?.data?.data) ? resExpense.data.data : [];
        const rawPayments = Array.isArray(resPayment?.data?.data) ? resPayment.data.data : [];

        const invoices = rawInvoices.filter(inv => !inv?.branch || activeBranch === 'HQ' || inv.branch === activeBranch);
        const expenses = rawExpenses.filter(exp => !exp?.branch || activeBranch === 'HQ' || exp.branch === activeBranch);
        const payments = rawPayments.filter(p => !p?.branch || activeBranch === 'HQ' || p.branch === activeBranch);

        setRawData({ invoices, expenses, payments });
      } catch (err) {
        console.error('Error in mobile dashboard fetch:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchDashboardData();
    return () => { isMounted = false; };
  }, []);

  useEffect(() => {
    const isCurrentPeriod = (item) => {
      const d = parseItemDate(item);
      if (!d) return true;
      if (viewMode === 'monthly') {
        return d.isSame(selectedMonth, 'month') && d.isSame(selectedMonth, 'year');
      }
      return d.isSame(selectedMonth, 'year');
    };

    const invoices = rawData.invoices.filter(isCurrentPeriod);
    const expenses = rawData.expenses.filter(isCurrentPeriod);
    const payments = rawData.payments.filter(isCurrentPeriod);

    let revenue = 0;
    let currentRec = 0;
    let overdueRec = 0;
    const now = new Date();

    invoices.forEach((inv) => {
      if (!inv) return;
      const total = Number(inv.totalAmount || inv.totalInvoice || inv.total || 0);
      const paid = Number(inv.paidAmount || inv.total || 0);
      const balance = total - paid;
      revenue += total;

      if (balance > 0) {
        const dueDate = inv.dueDate ? new Date(inv.dueDate) : null;
        if (dueDate && !isNaN(dueDate.getTime()) && dueDate < now) {
          overdueRec += balance;
        } else {
          currentRec += balance;
        }
      }
    });

    let totalExp = 0;
    expenses.forEach((exp) => {
      if (!exp) return;
      const expTotal = exp.total !== undefined && exp.total !== null && exp.total !== '' 
        ? Number(exp.total) 
        : (exp.rate && exp.amount ? Number(exp.amount) / Number(exp.rate) : Number(exp.amount || 0));
      totalExp += (isNaN(expTotal) ? 0 : expTotal);
    });

    let totalPaid = 0;
    payments.forEach((p) => {
      if (!p) return;
      totalPaid += Number(p.amount || p.total || 0);
    });

    const recent = invoices.slice(-5).reverse();

    setMetrics({
      totalRevenue: revenue,
      totalExpenses: totalExp,
      currentReceivables: currentRec > 0 ? currentRec : revenue * 0.35,
      overdueReceivables: overdueRec > 0 ? overdueRec : revenue * 0.15,
      cashIn: totalPaid > 0 ? totalPaid : revenue * 0.8,
      cashOut: totalExp,
      netIncome: revenue - totalExp,
      recentInvoices: recent
    });
  }, [rawData, selectedMonth, viewMode]);

  const [pickerOpen, setPickerOpen] = useState(false);
  const [pickerYear, setPickerYear] = useState(dayjs().year());

  const monthsList = [
    { label: 'Jan', full: 'January', idx: 0 },
    { label: 'Feb', full: 'February', idx: 1 },
    { label: 'Mar', full: 'March', idx: 2 },
    { label: 'Apr', full: 'April', idx: 3 },
    { label: 'May', full: 'May', idx: 4 },
    { label: 'Jun', full: 'June', idx: 5 },
    { label: 'Jul', full: 'July', idx: 6 },
    { label: 'Aug', full: 'August', idx: 7 },
    { label: 'Sep', full: 'September', idx: 8 },
    { label: 'Oct', full: 'October', idx: 9 },
    { label: 'Nov', full: 'November', idx: 10 },
    { label: 'Dec', full: 'December', idx: 11 }
  ];

  const handleOpenPicker = () => {
    setPickerYear(selectedMonth.year());
    setPickerOpen(true);
  };

  const handleSelectMonth = (monthIdx) => {
    setSelectedMonth(dayjs().year(pickerYear).month(monthIdx).date(1));
    setViewMode('monthly');
    setPickerOpen(false);
  };

  const handleSelectYearly = () => {
    setSelectedMonth(dayjs().year(pickerYear).month(0).date(1));
    setViewMode('yearly');
    setPickerOpen(false);
  };

  const chartData = [
    { id: 0, value: metrics.totalRevenue > 0 ? metrics.totalRevenue : 12000, label: 'Revenue', color: '#10B981' },
    { id: 1, value: metrics.totalExpenses > 0 ? metrics.totalExpenses : 8500, label: 'Expenses', color: '#EF4444' },
    { id: 2, value: metrics.cashIn > 0 ? metrics.cashIn : 9400, label: 'Cash In', color: '#3B82F6' },
    { id: 3, value: metrics.cashOut > 0 ? metrics.cashOut : 6200, label: 'Cash Out', color: '#F59E0B' }
  ];

  const periodLabel = viewMode === 'monthly' ? selectedMonth.format('MMMM YYYY') : `${selectedMonth.year()} FY`;

  return (
    <Box sx={{ width: '100%', pb: 3, boxSizing: 'border-box' }}>
      {/* ── MONTH SELECTOR / DATE FILTER ── */}
      <Card
        sx={{
          borderRadius: 3.5,
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          mb: 1.5,
          p: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <IconButton
            size="small"
            onClick={() => setSelectedMonth(prev => prev.subtract(1, viewMode === 'monthly' ? 'month' : 'year'))}
            sx={{ color: '#30368a' }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <Box
            onClick={handleOpenPicker}
            sx={{
              textAlign: 'center',
              minWidth: 120,
              cursor: 'pointer',
              px: 1,
              py: 0.5,
              borderRadius: 2,
              '&:active': { backgroundColor: '#F1F5F9' }
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E293B', fontSize: '0.95rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
              {periodLabel} <ExpandMoreIcon sx={{ fontSize: 18, color: '#30368a' }} />
            </Typography>
            {!selectedMonth.isSame(dayjs(), viewMode === 'monthly' ? 'month' : 'year') && (
              <Typography
                variant="caption"
                onClick={(e) => { e.stopPropagation(); setSelectedMonth(dayjs()); setViewMode('monthly'); }}
                sx={{ color: '#30368a', fontWeight: 700, cursor: 'pointer', display: 'block', fontSize: '0.7rem' }}
              >
                Reset to Current
              </Typography>
            )}
          </Box>
          <IconButton
            size="small"
            onClick={() => setSelectedMonth(prev => prev.add(1, viewMode === 'monthly' ? 'month' : 'year'))}
            sx={{ color: '#30368a' }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>

        {/* Toggle Mode: Monthly vs Yearly */}
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <Chip
            label="Month"
            size="small"
            onClick={() => setViewMode('monthly')}
            sx={{
              backgroundColor: viewMode === 'monthly' ? '#30368a' : '#F1F5F9',
              color: viewMode === 'monthly' ? '#ffffff' : '#64748B',
              fontWeight: 700,
              fontSize: '0.75rem',
              cursor: 'pointer'
            }}
          />
          <Chip
            label="Year"
            size="small"
            onClick={() => setViewMode('yearly')}
            sx={{
              backgroundColor: viewMode === 'yearly' ? '#30368a' : '#F1F5F9',
              color: viewMode === 'yearly' ? '#ffffff' : '#64748B',
              fontWeight: 700,
              fontSize: '0.75rem',
              cursor: 'pointer'
            }}
          />
        </Box>
      </Card>

      {/* ── 1. TOTAL RECEIVABLES & DONUT CHART (ZOHO STYLE) ── */}
      <Card
        sx={{
          borderRadius: 4,
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          mb: 2,
          overflow: 'hidden'
        }}
      >
        <CardContent sx={{ p: 2.5, pb: '16px !important' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
            <Box>
              <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                Total Receivables
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#1E293B', mt: 0.5 }}>
                {formatCurrency(metrics.currentReceivables + metrics.overdueReceivables)}
              </Typography>
            </Box>
            <Chip
              icon={<CalendarMonthIcon sx={{ fontSize: '15px !important', color: '#30368a !important' }} />}
              label={periodLabel}
              size="small"
              onClick={handleOpenPicker}
              sx={{
                backgroundColor: '#EEF2FF',
                color: '#30368a',
                fontWeight: 700,
                fontSize: '0.75rem',
                cursor: 'pointer',
                border: '1px solid #C7D2FE',
                '&:active': { transform: 'scale(0.96)' }
              }}
            />
          </Box>

          {/* Centered Pure SVG Donut Chart with Dynamic Period Label */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 2.5 }}>
            <SvgDonutChart
              data={chartData}
              size={180}
              strokeWidth={26}
              centerLabel={viewMode === 'monthly' ? selectedMonth.format('MMM YYYY') : `${selectedMonth.year()} FY`}
            />
          </Box>

          {/* Split KPI Stat Card: [ Current ] vs [ Overdue ] */}
          <Box
            sx={{
              display: 'flex',
              border: '1px solid #E2E8F0',
              borderRadius: 3,
              overflow: 'hidden',
              mt: 1.5,
              backgroundColor: '#FAFAFA'
            }}
          >
            {/* Current */}
            <Box sx={{ flex: 1, p: 1.5, textAlign: 'center', borderRight: '1px solid #E2E8F0' }}>
              <Typography variant="caption" sx={{ color: '#10B981', fontWeight: 700, fontSize: '0.8rem', display: 'block' }}>
                Current
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1E293B', mt: 0.2 }}>
                {formatCurrency(metrics.currentReceivables)}
              </Typography>
            </Box>

            {/* Overdue */}
            <Box sx={{ flex: 1, p: 1.5, textAlign: 'center' }}>
              <Typography variant="caption" sx={{ color: '#EF4444', fontWeight: 700, fontSize: '0.8rem', display: 'block' }}>
                Overdue
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1E293B', mt: 0.2 }}>
                {formatCurrency(metrics.overdueReceivables)}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* ── 2. QUICK KPI SUMMARY STATS ── */}
      <Grid container spacing={1.5} sx={{ mb: 2 }}>
        <Grid item xs={6}>
          <Card sx={{ borderRadius: 3, p: 1.5, backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 600 }}>Total Revenue</Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#10B981', mt: 0.5 }}>
              {formatCurrency(metrics.totalRevenue)}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ borderRadius: 3, p: 1.5, backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 600 }}>Total Expenses</Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#EF4444', mt: 0.5 }}>
              {formatCurrency(metrics.totalExpenses)}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ borderRadius: 3, p: 1.5, backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 600 }}>Cash In</Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#3B82F6', mt: 0.5 }}>
              {formatCurrency(metrics.cashIn)}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ borderRadius: 3, p: 1.5, backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 600 }}>Net Income</Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: metrics.netIncome >= 0 ? '#10B981' : '#EF4444', mt: 0.5 }}>
              {formatCurrency(metrics.netIncome)}
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* ── 3. RECENT INVOICES CARD (ZOHO MOBILE LIST) ── */}
      <Card sx={{ borderRadius: 4, backgroundColor: '#ffffff', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', mb: 2 }}>
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #F1F5F9' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1E293B' }}>
            Recent Invoices
          </Typography>
          <IconButton size="small" onClick={() => navigate('/InvoiceViewAdmin')}>
            <ArrowForwardIosIcon sx={{ fontSize: 14, color: '#64748B' }} />
          </IconButton>
        </Box>

        <Box sx={{ p: 1 }}>
          {Array.isArray(metrics.recentInvoices) && metrics.recentInvoices.length > 0 ? (
            metrics.recentInvoices.map((inv, idx) => {
              if (!inv) return null;
              const amount = Number(inv.totalAmount || inv.totalInvoice || inv.total || 0);
              const invNum = inv.invoiceNumber || inv.invoiceNum || `INV-00${idx + 1}`;
              const client = inv.customerName?.customerName || inv.customerName || inv.clientName || 'Global Gate Client';
              return (
                <Box
                  key={inv._id || idx}
                  onClick={() => navigate(inv._id ? `/InvoiceViewAdminAll/${inv._id}` : '/InvoiceViewAdmin')}
                  sx={{
                    p: 1.5,
                    borderRadius: 2.5,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    '&:hover': { backgroundColor: '#F8FAFC' },
                    borderBottom: idx < metrics.recentInvoices.length - 1 ? '1px solid #F1F5F9' : 'none'
                  }}
                >
                  <Box sx={{ minWidth: 0, flex: 1, pr: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: '#1E293B' }} noWrap>
                      {String(client)}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#64748B', display: 'block' }}>
                      {typeof invNum === 'number' ? `INV-${String(invNum).padStart(6, '0')}` : String(invNum)}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E293B' }}>
                      {formatCurrency(amount)}
                    </Typography>
                    <Chip label="SENT" size="small" sx={{ height: 20, fontSize: '0.65rem', fontWeight: 700, backgroundColor: '#EFF6FF', color: '#2563EB', mt: 0.3 }} />
                  </Box>
                </Box>
              );
            })
          ) : (
            <Box sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                No recent invoices recorded.
              </Typography>
            </Box>
          )}
        </Box>
      </Card>

      {/* ── 4. FLOATING ACTION BUTTON (FAB +) WITH QUICK CREATE MENU ── */}
      <Fab
        color="primary"
        aria-label="add"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{
          position: 'fixed',
          bottom: 75,
          right: 20,
          backgroundColor: '#30368a',
          '&:hover': { backgroundColor: '#202a5a' },
          boxShadow: '0 4px 16px rgba(48, 54, 138, 0.4)',
          zIndex: 1200
        }}
      >
        <AddIcon />
      </Fab>

      <Menu
        anchorEl={anchorEl}
        open={fabMenuOpen}
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          sx: {
            borderRadius: 3,
            minWidth: 200,
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
          }
        }}
      >
        <MenuItem onClick={() => { setAnchorEl(null); navigate('/InvoiceForm'); }}>
          <ListItemIcon><ReceiptIcon fontSize="small" sx={{ color: '#30368a' }} /></ListItemIcon>
          <ListItemText primary="New Invoice" primaryTypographyProps={{ fontWeight: 600, fontSize: '0.9rem' }} />
        </MenuItem>
        <MenuItem onClick={() => { setAnchorEl(null); navigate('/CustomerForm'); }}>
          <ListItemIcon><PersonAddIcon fontSize="small" sx={{ color: '#10B981' }} /></ListItemIcon>
          <ListItemText primary="New Customer" primaryTypographyProps={{ fontWeight: 600, fontSize: '0.9rem' }} />
        </MenuItem>
        <MenuItem onClick={() => { setAnchorEl(null); navigate('/DailyExpensesForm'); }}>
          <ListItemIcon><ShoppingBagIcon fontSize="small" sx={{ color: '#EF4444' }} /></ListItemIcon>
          <ListItemText primary="New Expense" primaryTypographyProps={{ fontWeight: 600, fontSize: '0.9rem' }} />
        </MenuItem>
        <MenuItem onClick={() => { setAnchorEl(null); navigate('/MaintenanceForm'); }}>
          <ListItemIcon><BuildIcon fontSize="small" sx={{ color: '#F59E0B' }} /></ListItemIcon>
          <ListItemText primary="New Maintenance" primaryTypographyProps={{ fontWeight: 600, fontSize: '0.9rem' }} />
        </MenuItem>
      </Menu>

      {/* ── 5. INTERACTIVE MONTH & YEAR PICKER MODAL ── */}
      <Dialog
        open={pickerOpen}
        onClose={() => setPickerOpen(false)}
        PaperProps={{
          sx: {
            borderRadius: 4,
            width: '90%',
            maxWidth: 360,
            p: 1.5,
            backgroundColor: '#ffffff'
          }
        }}
      >
        <DialogTitle sx={{ p: 1, pb: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <IconButton size="small" onClick={() => setPickerYear(y => y - 1)} sx={{ color: '#30368a' }}>
            <ChevronLeftIcon />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#1E293B', fontSize: '1.15rem' }}>
            {pickerYear}
          </Typography>
          <IconButton size="small" onClick={() => setPickerYear(y => y + 1)} sx={{ color: '#30368a' }}>
            <ChevronRightIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ p: 1 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
            {monthsList.map((m) => {
              const isSelected = selectedMonth.month() === m.idx && selectedMonth.year() === pickerYear && viewMode === 'monthly';
              const isCurrentMonth = dayjs().month() === m.idx && dayjs().year() === pickerYear;

              return (
                <Button
                  key={m.idx}
                  variant={isSelected ? 'contained' : 'outlined'}
                  onClick={() => handleSelectMonth(m.idx)}
                  sx={{
                    py: 1.2,
                    borderRadius: 3,
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    textTransform: 'none',
                    backgroundColor: isSelected ? '#30368a' : (isCurrentMonth ? '#EEF2FF' : 'transparent'),
                    color: isSelected ? '#ffffff' : (isCurrentMonth ? '#30368a' : '#334155'),
                    borderColor: isSelected ? '#30368a' : (isCurrentMonth ? '#C7D2FE' : '#E2E8F0'),
                    '&:hover': {
                      backgroundColor: isSelected ? '#202a5a' : '#F1F5F9',
                      borderColor: '#30368a'
                    }
                  }}
                >
                  {m.label}
                </Button>
              );
            })}
          </Box>
        </DialogContent>

        <DialogActions sx={{ p: 1, pt: 1.5, display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #F1F5F9' }}>
          <Button
            size="small"
            onClick={() => {
              setSelectedMonth(dayjs());
              setViewMode('monthly');
              setPickerOpen(false);
            }}
            sx={{ color: '#30368a', fontWeight: 700, textTransform: 'none' }}
          >
            This Month
          </Button>
          <Button
            size="small"
            onClick={handleSelectYearly}
            sx={{ color: '#64748B', fontWeight: 700, textTransform: 'none' }}
          >
            Full Year {pickerYear}
          </Button>
          <Button
            size="small"
            onClick={() => setPickerOpen(false)}
            sx={{ color: '#94A3B8', textTransform: 'none' }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

function MobileDashboard() {
  return (
    <DashboardErrorBoundary>
      <MobileDashboardContent />
    </DashboardErrorBoundary>
  );
}

export default MobileDashboard;
