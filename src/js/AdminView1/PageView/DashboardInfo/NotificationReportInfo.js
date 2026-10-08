import React, { useEffect, useState, useRef, useMemo } from 'react';
import PrintHeader from '../../../component/PrintHeader';
import PrintFooter from '../../../component/PrintFooter';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Box,
  Grid,
  Card,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Chip,
  TablePagination,
  styled,
  CircularProgress
} from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import LocalPrintshop from '@mui/icons-material/LocalPrintshop';
import { Explicit } from '@mui/icons-material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LoginIcon from '@mui/icons-material/Login';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import dayjs from 'dayjs';
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { ENDPOINT_URL } from '../../../apiConfig';

const PrintTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'white',
    color: 'black',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

function getNotificationCategory(person = '', reason = '') {
  const p = (person || '').toLowerCase();
  const r = (reason || '').toLowerCase();

  if (p.includes('login') || p.includes('logged in') || r.includes('logged into')) {
    return { label: 'User Login', color: '#16a34a', bg: '#dcfce7', icon: <LoginIcon sx={{ fontSize: 13 }} /> };
  }
  if (p.includes('delete') || r.includes('delete') || p.includes('decline')) {
    return { label: 'Deletion / Decline', color: '#dc2626', bg: '#fee2e2', icon: <DeleteOutlineIcon sx={{ fontSize: 13 }} /> };
  }
  if (p.includes('modify') || p.includes('update') || r.includes('update') || r.includes('modified')) {
    return { label: 'Modification', color: '#d97706', bg: '#fef3c7', icon: <EditNoteIcon sx={{ fontSize: 13 }} /> };
  }
  if (p.includes('create') || p.includes('created') || p.includes('new') || r.includes('create')) {
    return { label: 'Creation', color: '#2563eb', bg: '#dbeafe', icon: <AddCircleOutlineIcon sx={{ fontSize: 13 }} /> };
  }
  if (p.includes('expense') || r.includes('expense')) {
    return { label: 'Expense', color: '#c026d3', bg: '#fae8ff', icon: <NotificationsActiveIcon sx={{ fontSize: 13 }} /> };
  }
  if (p.includes('invoice') || r.includes('invoice')) {
    return { label: 'Invoice', color: '#0284c7', bg: '#e0f2fe', icon: <NotificationsActiveIcon sx={{ fontSize: 13 }} /> };
  }
  if (p.includes('maintenance') || r.includes('maintenance')) {
    return { label: 'Maintenance', color: '#7c3aed', bg: '#ede9fe', icon: <NotificationsActiveIcon sx={{ fontSize: 13 }} /> };
  }
  return { label: 'System Activity', color: '#475569', bg: '#f1f5f9', icon: <NotificationsActiveIcon sx={{ fontSize: 13 }} /> };
}

function NotificationReportInfo({ onMonth, onNotification }) {
  const [notifications, setNotifications] = useState(onNotification || []);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('ALL');
  const [dateRangeFilter, setDateRangeFilter] = useState('ALL');
  const [customFromDate, setCustomFromDate] = useState(dayjs().startOf('month').format('YYYY-MM-DD'));
  const [customToDate, setCustomToDate] = useState(dayjs().format('YYYY-MM-DD'));

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);

  const componentRef = useRef();

  const fetchLiveNotifications = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${ENDPOINT_URL}/notification?all=true`);
      if (res.data && res.data.data) {
        setNotifications(res.data.data);
      }
    } catch (err) {
      console.error('Error fetching notification audit log:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveNotifications();
  }, []);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'GlobalGate_Notification_Activity_Log',
    pageStyle: `@page { size: A4 landscape; margin: 8mm 10mm; } @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }`,
  });

  const filteredNotifications = useMemo(() => {
    return (notifications || []).filter((item) => {
      // 1. Search Query Filter
      if (search && search.trim() !== '') {
        const q = search.trim().toLowerCase();
        const p = (item.person || '').toLowerCase();
        const r = (item.reason || '').toLowerCase();
        const b = (item.branchId || '').toLowerCase();
        const d = item.dateNotification ? dayjs(item.dateNotification).format('DD/MM/YYYY HH:mm:ss').toLowerCase() : '';
        if (!p.includes(q) && !r.includes(q) && !b.includes(q) && !d.includes(q)) {
          return false;
        }
      }

      // 2. Type Filter
      if (typeFilter !== 'ALL') {
        const p = (item.person || '').toLowerCase();
        const r = (item.reason || '').toLowerCase();
        if (typeFilter === 'LOGINS') {
          if (!p.includes('login') && !p.includes('logged in') && !r.includes('logged into')) return false;
        } else if (typeFilter === 'CREATIONS') {
          if (!p.includes('create') && !p.includes('created')) return false;
        } else if (typeFilter === 'MODIFICATIONS') {
          if (!p.includes('modify') && !p.includes('update') && !r.includes('update')) return false;
        } else if (typeFilter === 'DELETIONS') {
          if (!p.includes('delete') && !p.includes('decline')) return false;
        } else if (typeFilter === 'EXPENSES') {
          if (!p.includes('expense') && !r.includes('expense')) return false;
        } else if (typeFilter === 'INVOICES') {
          if (!p.includes('invoice') && !r.includes('invoice') && !p.includes('inv-')) return false;
        } else if (typeFilter === 'MAINTENANCE') {
          if (!p.includes('maintenance') && !r.includes('maintenance')) return false;
        }
      }

      // 3. Date Range Filter
      if (dateRangeFilter !== 'ALL' && item.dateNotification) {
        const itemDate = dayjs(item.dateNotification);
        const today = dayjs();

        if (dateRangeFilter === 'TODAY') {
          if (!itemDate.isSame(today, 'day')) return false;
        } else if (dateRangeFilter === 'THIS_WEEK') {
          if (!itemDate.isSame(today, 'week')) return false;
        } else if (dateRangeFilter === 'THIS_MONTH') {
          if (!itemDate.isSame(today, 'month')) return false;
        } else if (dateRangeFilter === 'THIS_YEAR') {
          if (!itemDate.isSame(today, 'year')) return false;
        } else if (dateRangeFilter === 'CUSTOM') {
          const from = dayjs(customFromDate).startOf('day');
          const to = dayjs(customToDate).endOf('day');
          if (itemDate.isBefore(from) || itemDate.isAfter(to)) return false;
        }
      }

      return true;
    });
  }, [notifications, search, typeFilter, dateRangeFilter, customFromDate, customToDate]);

  // Summary Metrics
  const summaryMetrics = useMemo(() => {
    let totalLogins = 0;
    let totalCreations = 0;
    let totalModifications = 0;
    let totalDeletions = 0;
    const staffSet = new Set();

    (filteredNotifications || []).forEach((n) => {
      const p = (n.person || '').toLowerCase();
      const r = (n.reason || '').toLowerCase();

      if (p.includes('login') || p.includes('logged in') || r.includes('logged into')) {
        totalLogins += 1;
      } else if (p.includes('create') || p.includes('created')) {
        totalCreations += 1;
      } else if (p.includes('modify') || p.includes('update')) {
        totalModifications += 1;
      } else if (p.includes('delete') || p.includes('decline')) {
        totalDeletions += 1;
      }

      // Extract user name token
      const match = (n.person || '').match(/^([^\s]+)/);
      if (match && match[1]) {
        staffSet.add(match[1].toUpperCase());
      }
    });

    return {
      total: filteredNotifications.length,
      totalLogins,
      totalCreations,
      totalModifications,
      totalDeletions,
      uniqueStaff: staffSet.size,
    };
  }, [filteredNotifications]);

  const exportExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Notification Activity Log');

    worksheet.columns = [
      { header: '#', key: 'index', width: 8 },
      { header: 'Date & Time', key: 'date', width: 22 },
      { header: 'Category', key: 'category', width: 18 },
      { header: 'Action / User', key: 'person', width: 30 },
      { header: 'Details & Description', key: 'reason', width: 55 },
      { header: 'Branch', key: 'branch', width: 12 },
    ];

    worksheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
    worksheet.getRow(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF093170' },
    };

    filteredNotifications.forEach((row, i) => {
      const cat = getNotificationCategory(row.person, row.reason);
      worksheet.addRow({
        index: i + 1,
        date: row.dateNotification ? dayjs(row.dateNotification).format('DD/MM/YYYY HH:mm:ss') : '',
        category: cat.label,
        person: row.person || '',
        reason: row.reason || '',
        branch: row.branchId || 'HQ',
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), `GlobalGate_Notification_Activity_Log_${dayjs().format('YYYY-MM-DD')}.xlsx`);
  };

  const paginatedRows = useMemo(() => {
    return filteredNotifications.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [filteredNotifications, page, rowsPerPage]);

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#f8fafc', padding: '16px' }}>
      {/* Top Filter & Action Bar */}
      <Card sx={{ borderRadius: '12px', border: '1px solid #e2e8f0', p: 2, mb: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <Grid container spacing={1.5} alignItems="center">
          {/* Search Box */}
          <Grid item xs={12} sm={6} md={3.5}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search user, action, details..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(0);
              }}
              InputProps={{
                startAdornment: <SearchIcon sx={{ color: '#64748b', fontSize: 20, mr: 1 }} />,
              }}
            />
          </Grid>

          {/* Activity Type Filter */}
          <Grid item xs={6} sm={3} md={2}>
            <FormControl fullWidth size="small">
              <InputLabel>Activity Type</InputLabel>
              <Select
                value={typeFilter}
                label="Activity Type"
                onChange={(e) => {
                  setTypeFilter(e.target.value);
                  setPage(0);
                }}
              >
                <MenuItem value="ALL">All Activities</MenuItem>
                <MenuItem value="LOGINS">User Logins Only</MenuItem>
                <MenuItem value="CREATIONS">New Creations</MenuItem>
                <MenuItem value="MODIFICATIONS">Modifications</MenuItem>
                <MenuItem value="DELETIONS">Deletions / Declines</MenuItem>
                <MenuItem value="EXPENSES">Expenses</MenuItem>
                <MenuItem value="INVOICES">Invoices</MenuItem>
                <MenuItem value="MAINTENANCE">Maintenance</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Date Range Filter */}
          <Grid item xs={6} sm={3} md={2}>
            <FormControl fullWidth size="small">
              <InputLabel>Date Range</InputLabel>
              <Select
                value={dateRangeFilter}
                label="Date Range"
                onChange={(e) => {
                  setDateRangeFilter(e.target.value);
                  setPage(0);
                }}
              >
                <MenuItem value="ALL">All Time</MenuItem>
                <MenuItem value="TODAY">Today</MenuItem>
                <MenuItem value="THIS_WEEK">This Week</MenuItem>
                <MenuItem value="THIS_MONTH">This Month</MenuItem>
                <MenuItem value="THIS_YEAR">This Year</MenuItem>
                <MenuItem value="CUSTOM">Custom Range</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Custom Date Pickers */}
          {dateRangeFilter === 'CUSTOM' && (
            <>
              <Grid item xs={6} sm={3} md={1.5}>
                <TextField
                  fullWidth
                  size="small"
                  type="date"
                  label="From Date"
                  value={customFromDate}
                  onChange={(e) => {
                    setCustomFromDate(e.target.value);
                    setPage(0);
                  }}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={6} sm={3} md={1.5}>
                <TextField
                  fullWidth
                  size="small"
                  type="date"
                  label="To Date"
                  value={customToDate}
                  onChange={(e) => {
                    setCustomToDate(e.target.value);
                    setPage(0);
                  }}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </>
          )}

          {/* Action Buttons */}
          <Grid item xs={12} sm={6} md={dateRangeFilter === 'CUSTOM' ? 1.5 : 4.5} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            <PrintTooltip title="Export to Excel (.xlsx)">
              <IconButton onClick={exportExcel} sx={{ backgroundColor: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0', '&:hover': { backgroundColor: '#dcfce7' } }}>
                <Explicit sx={{ fontSize: 20 }} />
              </IconButton>
            </PrintTooltip>

            <PrintTooltip title="Print Activity Report">
              <IconButton onClick={handlePrint} sx={{ backgroundColor: '#eff6ff', color: '#2563eb', border: '1px solid #bfdbfe', '&:hover': { backgroundColor: '#dbeafe' } }}>
                <LocalPrintshop sx={{ fontSize: 20 }} />
              </IconButton>
            </PrintTooltip>

            <PrintTooltip title="Refresh Live Notifications">
              <IconButton onClick={fetchLiveNotifications} sx={{ backgroundColor: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0', '&:hover': { backgroundColor: '#e2e8f0' } }}>
                {loading ? <CircularProgress size={20} /> : <RefreshIcon sx={{ fontSize: 20 }} />}
              </IconButton>
            </PrintTooltip>
          </Grid>
        </Grid>
      </Card>

      {/* Printable Paper Canvas */}
      <div ref={componentRef} style={{ width: '100%', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '16px' }}>
        <PrintHeader title="ACTIVITY AUDIT & NOTIFICATION REPORT" />

        {/* Statement of Accounts Style Summary Header (Rule 38) */}
        <Box sx={{ mb: 2, mt: 1 }}>
          <table
            style={{
              width: '100%',
              maxWidth: '850px',
              borderCollapse: 'collapse',
              border: '1px solid #cbd5e1',
              borderRadius: '6px',
              overflow: 'hidden',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              fontSize: '13px',
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#093170', color: '#ffffff' }}>
                <th colSpan="4" style={{ padding: '9px 14px', textAlign: 'left', fontSize: '13.5px', fontWeight: 'bold', letterSpacing: '0.3px' }}>
                  Statement of Accounts - Notification & Activity Audit Log
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: '#e8f7fe', color: '#0369a1', fontWeight: 'bold', borderBottom: '1px solid #bae6fd' }}>
                <td style={{ padding: '7px 14px' }}>Total Filtered Activities</td>
                <td style={{ padding: '7px 14px', textAlign: 'center' }}>User Logins</td>
                <td style={{ padding: '7px 14px', textAlign: 'center' }}>Creations & Modifications</td>
                <td style={{ padding: '7px 14px', textAlign: 'center' }}>Unique Staff Logged</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: '#ffffff' }}>
                <td style={{ padding: '8px 14px', fontWeight: 'bold', fontSize: '15px', color: '#0f172a' }}>
                  {summaryMetrics.total.toLocaleString()} Records
                </td>
                <td style={{ padding: '8px 14px', textAlign: 'center', fontWeight: 'bold', fontSize: '15px', color: '#16a34a' }}>
                  {summaryMetrics.totalLogins.toLocaleString()}
                </td>
                <td style={{ padding: '8px 14px', textAlign: 'center', fontWeight: 'bold', fontSize: '15px', color: '#2563eb' }}>
                  {(summaryMetrics.totalCreations + summaryMetrics.totalModifications).toLocaleString()}
                </td>
                <td style={{ padding: '8px 14px', textAlign: 'center', fontWeight: 'bold', fontSize: '15px', color: '#7c3aed' }}>
                  {summaryMetrics.uniqueStaff} Staff Members
                </td>
              </tr>
            </tbody>
          </table>
        </Box>

        {/* DataGrid / Table Layout */}
        <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #e2e8f0', borderRadius: '8px', overflowX: 'auto' }}>
          <Table size="small" sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#093170' }}>
                <TableCell sx={{ color: '#ffffff', fontWeight: 'bold', width: '50px' }}>#</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 'bold', width: '180px' }}>Date & Time</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 'bold', width: '140px' }}>Category</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 'bold', width: '220px' }}>Activity / Performed By</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }}>Details & Description</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 'bold', width: '90px' }}>Branch</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.length > 0 ? (
                paginatedRows.map((row, idx) => {
                  const cat = getNotificationCategory(row.person, row.reason);
                  return (
                    <TableRow key={row._id || idx} hover sx={{ '&:nth-of-type(even)': { backgroundColor: '#f8fafc' } }}>
                      <TableCell sx={{ fontSize: '12px', color: '#64748b' }}>{page * rowsPerPage + idx + 1}</TableCell>
                      <TableCell sx={{ fontSize: '12px', fontWeight: 600, color: '#1e293b', whiteSpace: 'nowrap' }}>
                        {row.dateNotification ? dayjs(row.dateNotification).format('DD/MM/YYYY - HH:mm:ss') : '-'}
                      </TableCell>
                      <TableCell>
                        <Chip
                          size="small"
                          icon={cat.icon}
                          label={cat.label}
                          sx={{
                            backgroundColor: cat.bg,
                            color: cat.color,
                            fontWeight: 700,
                            fontSize: '11px',
                            height: '22px',
                            '& .MuiChip-icon': { color: cat.color },
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ fontSize: '12.5px', fontWeight: 700, color: '#0f172a' }}>
                        {row.person || '-'}
                      </TableCell>
                      <TableCell sx={{ fontSize: '12px', color: '#334155', lineHeight: 1.4 }}>
                        {row.reason || '-'}
                      </TableCell>
                      <TableCell sx={{ fontSize: '12px', fontWeight: 600, color: '#64748b' }}>
                        {row.branchId || 'HQ'}
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={6} sx={{ textAlign: 'center', py: 4, color: '#64748b' }}>
                    <HistoryToggleOffIcon sx={{ fontSize: 40, opacity: 0.4, mb: 1, display: 'block', margin: '0 auto' }} />
                    <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>No matching notifications or activity logs found.</Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <TablePagination
          rowsPerPageOptions={[25, 50, 100, 200]}
          component="div"
          count={filteredNotifications.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(e, newPage) => setPage(newPage)}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
          sx={{ borderTop: '1px solid #e2e8f0', mt: 1 }}
        />

        <PrintFooter />
      </div>
    </div>
  );
}

export default NotificationReportInfo;
