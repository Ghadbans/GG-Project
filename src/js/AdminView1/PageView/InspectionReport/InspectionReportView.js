import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Container,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Button,
  TextField,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Tooltip,
  Menu,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  CssBaseline,
  Toolbar,
  Divider,
  List,
  styled
} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import SearchIcon from '@mui/icons-material/Search';
import AssignmentIcon from '@mui/icons-material/Assignment';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, logOut, setUser } from '../../../features/auth/authSlice';
import { ENDPOINT_URL } from '../../../apiConfig';
import SidebarDashE2 from '../../../component/SidebarDashE2';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import MessageAdminView from '../../MessageAdminView';
import Logout from '../../../component/NetworkLogoutIcon';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  })
);

function InspectionReportView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  const [sideBar, setSideBar] = useState(false);
  const toggleDrawer = () => setSideBar(!sideBar);

  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [deleteId, setDeleteId] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
        try {
          const res = await axios.get(`${ENDPOINT_URL}/get-employeeuser/${storesUserId}`);
          const Name = res.data.data.employeeName;
          const Role = res.data.data.role;
          dispatch(setUser({ userName: Name, role: Role, id: res.data.data._id }));
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      } else {
        navigate('/');
      }
    };
    fetchUser();
  }, [dispatch, navigate]);

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/');
  };

  const fetchReports = async () => {
    setLoading(true);
    try {
      const params = {};
      if (search.trim()) params.search = search.trim();
      if (statusFilter !== 'All') params.status = statusFilter;
      const res = await axios.get(`${ENDPOINT_URL}/inspection-reports`, { params });
      if (res.data && res.data.success) {
        setReports(res.data.data || []);
      }
    } catch (err) {
      console.error('Error fetching inspection reports:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, [statusFilter]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchReports();
  };

  const handleOpenDelete = (id) => {
    setDeleteId(id);
    setDeleteOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    try {
      await axios.delete(`${ENDPOINT_URL}/inspection-reports/${deleteId}`);
      setReports((prev) => prev.filter((r) => r._id !== deleteId));
      setDeleteOpen(false);
      setDeleteId(null);
    } catch (err) {
      console.error('Error deleting report:', err);
    } finally {
      setDeleting(false);
    }
  };

  const handleConvertToQuote = async (row) => {
    try {
      await axios.post(`${ENDPOINT_URL}/inspection-reports/${row._id}/convert-quote`);
      setReports((prev) =>
        prev.map((r) => (r._id === row._id ? { ...r, status: 'CONVERTED TO QUOTE' } : r))
      );
    } catch (err) {
      console.error('Error updating status on convert:', err);
    }
    navigate('/EstimateInvoiceForm', {
      state: {
        fromInspectionReport: true,
        reportId: row._id,
        reportCode: row.reportCode,
        customerId: row.customerId,
        customerName: row.customerName,
        estimateSubject: row.subject || `Technical Remediation - ${row.reportCode || ''}`
      }
    });
  };

  // Quick Status Menu State & Handler
  const [statusMenuAnchor, setStatusMenuAnchor] = useState(null);
  const [selectedReportForStatus, setSelectedReportForStatus] = useState(null);

  const handleOpenStatusMenu = (e, row) => {
    e.stopPropagation();
    setStatusMenuAnchor(e.currentTarget);
    setSelectedReportForStatus(row);
  };

  const handleCloseStatusMenu = () => {
    setStatusMenuAnchor(null);
    setSelectedReportForStatus(null);
  };

  const handleUpdateStatus = async (newStatus) => {
    if (!selectedReportForStatus) return;
    const targetId = selectedReportForStatus._id;
    let quoteNum = selectedReportForStatus.linkedQuotationNumber || '';
    if (newStatus === 'CONVERTED TO QUOTE' && !quoteNum) {
      const input = window.prompt('Enter Quotation Number (e.g. Q-001753) or leave blank:', '');
      if (input !== null) {
        quoteNum = input.trim();
      }
    }
    try {
      await axios.patch(`${ENDPOINT_URL}/inspection-reports/${targetId}/status`, {
        status: newStatus,
        quotationNumber: quoteNum
      });
      setReports((prev) =>
        prev.map((r) => (r._id === targetId ? { ...r, status: newStatus, linkedQuotationNumber: quoteNum } : r))
      );
    } catch (err) {
      console.error('Error updating status:', err);
    } finally {
      handleCloseStatusMenu();
    }
  };

  const getStatusChip = (status, row) => {
    const s = (status || '').toUpperCase();
    switch (s) {
      case 'COMPLETED':
        return <Chip label="COMPLETED" size="small" sx={{ backgroundColor: '#e0f2fe', color: '#0369a1', fontWeight: 'bold' }} />;
      case 'SENT TO CLIENT':
      case 'SENT':
        return <Chip label="SENT TO CLIENT" size="small" sx={{ backgroundColor: '#dcfce7', color: '#15803d', fontWeight: 'bold' }} />;
      case 'CONVERTED TO QUOTE':
      case 'CONVERTED':
        const quoteLabel = row?.linkedQuotationNumber ? `CONVERTED TO QUOTE ${row.linkedQuotationNumber}` : 'CONVERTED TO QUOTE';
        return <Chip label={quoteLabel} size="small" sx={{ backgroundColor: '#fef3c7', color: '#b45309', fontWeight: 'bold' }} />;
      default:
        return <Chip label="DRAFT" size="small" sx={{ backgroundColor: '#f1f5f9', color: '#64748b', fontWeight: 'bold' }} />;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* ── TOP NAV BAR ── */}
      <AppBar position="absolute" open={sideBar} sx={{ backgroundColor: '#202a5a' }}>
        <Toolbar sx={{ pr: '24px' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{ marginRight: '36px', ...(sideBar && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <AssignmentIcon sx={{ mr: 1.5, fontSize: 26 }} />
          <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, fontWeight: 600 }}>
            Technical Inspection Reports
          </Typography>
          <NotificationVIewInfo />
          <MessageAdminView name={user?.data?.userName || ''} role={user?.data?.role || ''} />
          <IconButton color="inherit" onClick={handleLogout}>
            <Logout style={{ color: 'white' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* ── LEFT SLIDING DRAWER ── */}
      <Drawer
        variant="permanent"
        open={sideBar}
        onMouseEnter={() => setSideBar(true)}
        onMouseLeave={() => setSideBar(false)}
      >
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }}>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List sx={{ height: '700px' }}>
          <SidebarDashE2 />
        </List>
      </Drawer>

      {/* ── MAIN CONTENT ── */}
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
          pt: 10,
          pb: 6,
          px: { xs: 2, sm: 3 }
        }}
      >
        <Container maxWidth="xl" disableGutters>
          {/* Header Banner */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#0f172a' }}>
                Inspection Reports Registry
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748b' }}>
                Engineering surveys, diagnostic root causes, and remediation action plans
              </Typography>
            </Box>
            <Button
              variant="contained"
              component={NavLink}
              to="/InspectionReportForm"
              startIcon={<AddIcon />}
              sx={{
                backgroundColor: '#30368a',
                '&:hover': { backgroundColor: '#1e2468' },
                textTransform: 'none',
                fontWeight: 600,
                px: 3,
                py: 1
              }}
            >
              New Inspection Report
            </Button>
          </Box>

          {/* Search & Filter Bar */}
          <Paper sx={{ p: 2, mb: 3, borderRadius: 2 }}>
            <form onSubmit={handleSearchSubmit}>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Search by subject, customer, report #, or location..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  sx={{ flex: { xs: '1 1 100%', md: '1 1 auto' } }}
                  InputProps={{
                    endAdornment: (
                      <IconButton type="submit" size="small">
                        <SearchIcon />
                      </IconButton>
                    )
                  }}
                />
                <FormControl size="small" sx={{ minWidth: 200 }}>
                  <InputLabel id="status-filter-label">Status</InputLabel>
                  <Select
                    labelId="status-filter-label"
                    value={statusFilter}
                    label="Status"
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <MenuItem value="All">All Statuses</MenuItem>
                    <MenuItem value="DRAFT">Draft</MenuItem>
                    <MenuItem value="COMPLETED">Completed</MenuItem>
                    <MenuItem value="SENT TO CLIENT">Sent to Client</MenuItem>
                    <MenuItem value="CONVERTED TO QUOTE">Converted to Quote</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  type="submit"
                  variant="outlined"
                  sx={{ textTransform: 'none', borderColor: '#cbd5e1', color: '#334155' }}
                >
                  Apply
                </Button>
              </Box>
            </form>
          </Paper>

          {/* Table Container */}
          <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
            <Table size="medium">
              <TableHead sx={{ backgroundColor: '#f8fafc' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, color: '#334155' }}>#</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: '#334155' }}>REPORT #</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: '#334155' }}>DATE</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: '#334155' }}>CLIENT</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: '#334155' }}>SUBJECT</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: '#334155' }}>LOCATION</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: '#334155' }}>STATUS</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: '#334155', textAlign: 'center' }}>ACTIONS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={8} sx={{ textAlign: 'center', py: 6 }}>
                      <CircularProgress size={32} />
                      <Typography variant="body2" sx={{ mt: 1.5, color: '#64748b' }}>
                        Loading inspection reports...
                      </Typography>
                    </TableCell>
                  </TableRow>
                ) : reports.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} sx={{ textAlign: 'center', py: 6 }}>
                      <AssignmentIcon sx={{ fontSize: 48, color: '#cbd5e1', mb: 1 }} />
                      <Typography variant="body1" sx={{ color: '#64748b', fontWeight: 600 }}>
                        No inspection reports found.
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                        Click "New Inspection Report" above to create your first report.
                      </Typography>
                    </TableCell>
                  </TableRow>
                ) : (
                  reports.map((row, index) => (
                    <TableRow key={row._id} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell sx={{ color: '#64748b' }}>{index + 1}</TableCell>
                      <TableCell sx={{ fontWeight: 700, color: '#30368a' }}>
                        {row.reportCode || `IR-${String(row.reportNumber || 0).padStart(4, '0')}`}
                      </TableCell>
                      <TableCell sx={{ color: '#334155' }}>
                        {row.date ? dayjs(row.date).format('DD/MM/YYYY') : '-'}
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#0f172a' }}>
                        {row.customerName || 'Direct / Unlisted Client'}
                      </TableCell>
                      <TableCell sx={{ maxWidth: 300, color: '#334155' }}>
                        <Typography variant="body2" noWrap title={row.subject}>
                          {row.subject || '-'}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ color: '#64748b' }}>
                        {row.location || '-'}
                      </TableCell>
                      <TableCell>
                        <Tooltip title="Click to change status">
                          <Box
                            onClick={(e) => handleOpenStatusMenu(e, row)}
                            sx={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}
                          >
                            {getStatusChip(row.status, row)}
                          </Box>
                        </Tooltip>
                      </TableCell>
                      <TableCell sx={{ textAlign: 'center', whiteSpace: 'nowrap' }}>
                        <Tooltip title="View & Print Official PDF">
                          <IconButton
                            size="small"
                            sx={{ color: '#0284c7' }}
                            onClick={() => navigate(`/InspectionReportPrintView/${row._id}`)}
                          >
                            <VisibilityIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Edit Report">
                          <IconButton
                            size="small"
                            sx={{ color: '#d97706' }}
                            onClick={() => navigate(`/InspectionReportForm/${row._id}`)}
                          >
                            <EditIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        {row.status !== 'CONVERTED TO QUOTE' ? (
                          <Tooltip title="Convert to Quotation">
                            <IconButton
                              size="small"
                              sx={{ color: '#16a34a' }}
                              onClick={() => handleConvertToQuote(row)}
                            >
                              <RequestQuoteIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        ) : (
                          <Tooltip title={row.linkedQuotationNumber ? `Quotation: ${row.linkedQuotationNumber}` : 'View Quotations'}>
                            <IconButton
                              size="small"
                              sx={{ color: '#0284c7' }}
                              onClick={() => navigate('/EstimateViewAdmin')}
                            >
                              <RequestQuoteIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        )}
                        <Tooltip title="Delete Report">
                          <IconButton
                            size="small"
                            sx={{ color: '#dc2626' }}
                            onClick={() => handleOpenDelete(row._id)}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Status Change Menu */}
          <Menu
            anchorEl={statusMenuAnchor}
            open={Boolean(statusMenuAnchor)}
            onClose={handleCloseStatusMenu}
            PaperProps={{ sx: { borderRadius: 2, minWidth: 230, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' } }}
          >
            <MenuItem onClick={() => handleUpdateStatus('DRAFT')} sx={{ fontSize: '0.85rem' }}>
              <Chip label="DRAFT" size="small" sx={{ mr: 1.5, backgroundColor: '#f1f5f9', color: '#64748b', fontWeight: 'bold' }} />
              In Progress / Survey Draft
            </MenuItem>
            <MenuItem onClick={() => handleUpdateStatus('COMPLETED')} sx={{ fontSize: '0.85rem' }}>
              <Chip label="COMPLETED" size="small" sx={{ mr: 1.5, backgroundColor: '#e0f2fe', color: '#0369a1', fontWeight: 'bold' }} />
              Inspection Completed
            </MenuItem>
            <MenuItem onClick={() => handleUpdateStatus('SENT TO CLIENT')} sx={{ fontSize: '0.85rem' }}>
              <Chip label="SENT TO CLIENT" size="small" sx={{ mr: 1.5, backgroundColor: '#dcfce7', color: '#15803d', fontWeight: 'bold' }} />
              Sent to Client
            </MenuItem>
            <MenuItem onClick={() => handleUpdateStatus('CONVERTED TO QUOTE')} sx={{ fontSize: '0.85rem' }}>
              <Chip label="CONVERTED TO QUOTE" size="small" sx={{ mr: 1.5, backgroundColor: '#fef3c7', color: '#b45309', fontWeight: 'bold' }} />
              Converted to Quotation
            </MenuItem>
          </Menu>

          {/* Delete Confirmation Dialog */}
          <Dialog open={deleteOpen} onClose={() => setDeleteOpen(false)}>
            <DialogTitle sx={{ fontWeight: 700 }}>Confirm Deletion</DialogTitle>
            <DialogContent>
              <Typography variant="body2" sx={{ color: '#475569' }}>
                Are you sure you want to permanently delete this inspection report? This action cannot be undone.
              </Typography>
            </DialogContent>
            <DialogActions sx={{ p: 2 }}>
              <Button onClick={() => setDeleteOpen(false)} sx={{ textTransform: 'none', color: '#64748b' }}>
                Cancel
              </Button>
              <Button
                onClick={handleConfirmDelete}
                variant="contained"
                disabled={deleting}
                sx={{ backgroundColor: '#dc2626', '&:hover': { backgroundColor: '#b91c1c' }, textTransform: 'none' }}
              >
                {deleting ? 'Deleting...' : 'Delete'}
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      </Box>
    </Box>
  );
}

export default InspectionReportView;
