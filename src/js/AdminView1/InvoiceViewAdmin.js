import React, { useEffect, useState, useMemo } from 'react'
import {  toast } from 'react-toastify';
import './view.css'
import './PageView/Chartview.css';
import SidebarDash from '../component/SidebarDash'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink, useNavigate } from 'react-router-dom';
import {  Table, IconButton, styled, TableBody, TableCell, TableHead, TableRow, Checkbox, TableContainer, Paper, Typography, Modal, Box, Grid, FormControl, InputLabel, Select, MenuItem, Backdrop, Autocomplete, TextField, Pagination, Button, Dialog, DialogTitle, DialogContent, DialogActions, Chip, LinearProgress, Alert, Tabs, Tab, InputAdornment  } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import axios from 'axios';
import { cachedGet } from '../utils/apiCache';
import { ENDPOINT_URL } from '../apiConfig';
import { Add, Close, MailOutline, Person2Outlined, PersonOffRounded, Assignment as AssignmentIcon, EditNote as EditNoteIcon, Send as SendIcon, HourglassEmpty as HourglassEmptyIcon, Cancel as CancelIcon, CardGiftcard as CardGiftcardIcon, Payments as PaymentsIcon, CheckCircleOutline as CheckCircleOutlineIcon, WhatsApp as WhatsAppIcon, Save as SaveIcon, History as HistoryIcon, FilterList as FilterListIcon } from '@mui/icons-material';
import dayjs from 'dayjs';
import Loader from '../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDispatch, useSelector } from "react-redux"
import { logOut, selectCurrentUser, setUser } from '../features/auth/authSlice';
import Logout from '../component/NetworkLogoutIcon';
import Image from '../img/no-data.png';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import MessageAdminView from './MessageAdminView';
import NotificationVIewInfo from './NotificationVIewInfo';
import { isNativeMobile, useIsMobile } from '../utils/isMobile';
import MobileCardList from '../component/MobileCardList';
import { renderStatusBadge } from '../utils/formatUtils';


const DeleteTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'red',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const EditTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'gray',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));
const ViewTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#202a5a',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
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
  }),
);
function InvoiceViewAdmin() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId && storesUserId !== 'null') {
        try {
          const res = await axios.get(`${ENDPOINT_URL}/get-employeeuser/${storesUserId}`)
          const Name = res.data.data.employeeName;
          const Role = res.data.data.role;
          dispatch(setUser({ userName: Name, role: Role, id: res.data.data._id }));
        } catch (error) {
          console.error('Error fetching data:', error);
          toast.error('Failed to fetch user data.');
        }
      }
    }
    fetchUser()
  }, [dispatch]);
  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }
  const [grantAccess, setGrantAccess] = useState([]);
  const [grantAccessRecord, setGrantAccessRecord] = useState(null);
  useEffect(() => {
    const fetchNumber = async () => {
      try {
        const res = await cachedGet(`${ENDPOINT_URL}/grantAccess`);
        const userAccess = res.data?.data?.find((row) => row.userID === user.data.id);
        if (userAccess) {
          setGrantAccess(userAccess.modules || []);
          setGrantAccessRecord(userAccess);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Failed to fetch permissions.');
      }
    }
    fetchNumber()
  }, [user])

  const canSendWhatsAppInvoice = user?.data?.userName === 'GG' || grantAccessRecord?.whatsappInvoice === true;

  // console.log(grantAccess)

  const InvoiceInfoC = grantAccess.filter((row) => row.moduleName === "Invoice" && row.access.createM === true);
  const InvoiceInfoV = grantAccess.filter((row) => row.moduleName === "Invoice" && row.access.viewM === true);
  const InvoiceInfoU = grantAccess.filter((row) => row.moduleName === "Invoice" && row.access.editM === true);
  const InvoiceInfoD = grantAccess.filter((row) => row.moduleName === "Invoice" && row.access.deleteM === true);

  {/** Get Invoice */ }
  const [invoice, setInvoice] = useState([]);
  const [hiddenRow, setHiddenRow] = useState([]);
  const [hidden, setHidden] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [reason, setReason] = useState("");
  const [newPurchase, setNewPurchase] = useState([]);

  const [statusFilter, setStatusFilter] = useState('ALL');
  const [statusCounts, setStatusCounts] = useState({
    all: 0,
    draft: 0,
    sent: 0,
    pending: 0,
    decline: 0,
    freeOfCharge: 0,
    paid: 0,
    partiallyPaid: 0,
  });

  const [page, setPage] = useState(0); // Initialize page state to 0 (0-based index)
  const limit = isMobile ? 30 : 100;
  const [searchTerm, setSearchTerm] = useState(''); // Initialize search term state
  const [filterField, setFilterField] = useState(''); // Initialize filter field state
  const [filterValue, setFilterValue] = useState(''); // Initialize filter value state
  const [totalPage, SetTotalPage] = useState(0);
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 250); // 250ms debounce delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const fetchItems = async (page, searchTerm, filterField, filterValue, statusFilter) => {
    try {
      const statusParam = statusFilter && statusFilter !== 'ALL' ? `&status=${encodeURIComponent(statusFilter)}` : '';
      const res = await axios.get(`${ENDPOINT_URL}/invoice-Information?page=${page + 1}&limit=${limit}&search=${encodeURIComponent((searchTerm || '').trim())}&filterField=${encodeURIComponent((filterField || '').trim())}&filterValue=${encodeURIComponent((filterValue || '').trim())}${statusParam}`);
      const formatDate = res.data.itemI.map((row) => ({
        ...row,
        id: row._id,
        invoiceNumber: row.invoiceNumber,
        dateField: row.invoiceDate !== null ? dayjs(row.invoiceDate).format('DD/MM/YYYY') : '',
        dueDateField: dayjs(row.invoiceDueDate).format('DD/MM/YYYY'),
      }));
      const invoices = formatDate;
      SetTotalPage(res.data.totalPages); // Ensure totalPage is correctly calculated
      setTotalItemCount(res.data.totalItem);
      if (res.data.statusCounts) {
        setStatusCounts(res.data.statusCounts);
      }
      setInvoice(invoices);
      setLoadingData(false);

      // Auto-repair status mismatch for zero-balance invoices
      const mismatchedInvoices = invoices.filter(inv => 
        (inv.status === 'Partially-Paid' || inv.status === 'Sent' || inv.status === 'Draft' || inv.status === 'Pending') && 
        parseFloat(inv.balanceDue) <= 0 && 
        parseFloat(inv.totalInvoice) > 0
      );

      if (mismatchedInvoices.length > 0) {
        console.log(`Repairing status for ${mismatchedInvoices.length} invoices sequentially...`);
        (async () => {
          for (const inv of mismatchedInvoices) {
            try {
              await axios.put(`${ENDPOINT_URL}/update-invoice/${inv._id}`, { status: 'Paid' });
              // Small delay to prevent rate limiting
              await new Promise(resolve => setTimeout(resolve, 100));
            } catch (err) {
              console.error(`Failed to repair invoice ${inv.invoiceNumber}:`, err);
            }
          }
        })();
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to fetch invoices.');
      setLoadingData(false);
    }
  };
  const FilterInvoiceWith = invoice.filter(row =>
    Array.isArray(row.items) && row.items.every(item => parseFloat(item.itemOut) === parseFloat(item.itemQty))
  );


  useEffect(() => {
    fetchItems(page, debouncedSearchTerm, filterField, filterValue, statusFilter);
  }, [page, debouncedSearchTerm, filterField, filterValue, statusFilter]);

  const handleStatusClick = (statusKey) => {
    if (statusFilter.toLowerCase() === statusKey.toLowerCase() && statusKey !== 'ALL') {
      setStatusFilter('ALL');
    } else {
      setStatusFilter(statusKey);
    }
    setPage(0);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage); // Update page state (convert to 0-based index)
  };

  const handleRefreshSearch = () => {
    setSearchTerm('');
    setDebouncedSearchTerm('');
    setFilterModel({
      items: [],
      quickFilterExcludeHiddenColumns: true,
      quickFilterValues: [],
    });
    setPage(0);
    fetchItems(0, '', filterField, filterValue, statusFilter);
  };

  // --- WhatsApp Invoice Dispatch Pipeline ---
  const DEFAULT_WA_MESSAGE = 'Dear Valued Customer, please find attached your official invoice from Global Gate SARL. Thank you for your business!';
  const [customerPhoneMap, setCustomerPhoneMap] = useState({});
  const [openWhatsAppModal, setOpenWhatsAppModal] = useState(false);
  const [whatsAppInvoicesList, setWhatsAppInvoicesList] = useState([]);
  const [selectedWhatsAppInvoiceIds, setSelectedWhatsAppInvoiceIds] = useState(new Set());
  const [whatsAppMessage, setWhatsAppMessage] = useState(DEFAULT_WA_MESSAGE);
  const [savingTemplate, setSavingTemplate] = useState(false);
  const [phoneOverrides, setPhoneOverrides] = useState({});
  const [dispatchingWhatsApp, setDispatchingWhatsApp] = useState(false);
  const [dispatchResult, setDispatchResult] = useState(null);
  const [loadingSentInvoices, setLoadingSentInvoices] = useState(false);
  const [modalTab, setModalTab] = useState(0); // 0: Send Queue, 1: Sent History
  const [queueSearchTerm, setQueueSearchTerm] = useState('');
  const [historyList, setHistoryList] = useState([]);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [historySearchTerm, setHistorySearchTerm] = useState('');

  const isEligibleInvoiceStatus = (st) => {
    const s = String(st || '').toUpperCase().trim();
    return (
      s === 'SENT' ||
      s === 'PARTIALLY-PAID' ||
      s === 'PARTIALLY PAID' ||
      s === 'PARTIALLY_PAID' ||
      s === 'FREE OF CHARGE' ||
      s === 'FREE-OF-CHARGE'
    );
  };

  const renderInvoiceStatusChip = (status) => {
    const s = String(status || '').toUpperCase().trim();
    if (s === 'SENT') {
      return <Chip label="SENT" size="small" sx={{ bgcolor: '#e0f2fe', color: '#0369a1', fontWeight: 700, height: 20, fontSize: '0.7rem' }} />;
    }
    if (s === 'PARTIALLY-PAID' || s === 'PARTIALLY PAID' || s === 'PARTIALLY_PAID') {
      return <Chip label="PARTIALLY-PAID" size="small" sx={{ bgcolor: '#ffedd5', color: '#c2410c', fontWeight: 700, height: 20, fontSize: '0.7rem' }} />;
    }
    if (s === 'FREE OF CHARGE' || s === 'FREE-OF-CHARGE') {
      return <Chip label="FREE OF CHARGE" size="small" sx={{ bgcolor: '#f3e8ff', color: '#7e22ce', fontWeight: 700, height: 20, fontSize: '0.7rem' }} />;
    }
    return <Chip label={s || 'UNKNOWN'} size="small" sx={{ bgcolor: '#f1f5f9', color: '#475569', fontWeight: 700, height: 20, fontSize: '0.7rem' }} />;
  };

  const getInvoicePhone = (inv, phoneMap = {}) => {
    if (!inv) return '';
    const cust = inv.customerName || {};
    if (typeof cust === 'object' && cust !== null) {
      const direct = cust.customerCompanyPhone || cust.customerPhone || cust.phone || cust.mobile;
      if (direct && String(direct).trim()) return String(direct).trim();
      if (cust._id && phoneMap[cust._id]) return String(phoneMap[cust._id]).trim();
      const name = cust.Customer || cust.customerName || cust.customerFullName;
      if (name && phoneMap[String(name).toUpperCase()]) return String(phoneMap[String(name).toUpperCase()]).trim();
    } else if (typeof cust === 'string' && phoneMap[cust.toUpperCase()]) {
      return String(phoneMap[cust.toUpperCase()]).trim();
    }
    return '';
  };

  const fetchSentHistory = async () => {
    try {
      setLoadingHistory(true);
      const res = await axios.get(`${ENDPOINT_URL}/invoice-whatsapp/history`);
      if (res.data?.success && Array.isArray(res.data.history)) {
        setHistoryList(res.data.history);
      }
    } catch (err) {
      console.warn('Failed to fetch WhatsApp sent history:', err);
    } finally {
      setLoadingHistory(false);
    }
  };

  const sentHistoryMap = useMemo(() => {
    const map = {};
    (historyList || []).forEach(h => {
      const num = Number(h.invoiceNumber);
      if (num && !map[num]) {
        map[num] = h;
      }
    });
    return map;
  }, [historyList]);

  const filteredQueueInvoices = useMemo(() => {
    if (!queueSearchTerm.trim()) return whatsAppInvoicesList;
    const q = queueSearchTerm.toLowerCase().trim();
    return whatsAppInvoicesList.filter(inv => {
      const invNum = String(inv.invoiceNumber || '').toLowerCase();
      const invFormatted = `inv-${String(inv.invoiceNumber || '').padStart(6, '0')}`.toLowerCase();
      const cust = inv.customerName || {};
      const clientName = String(typeof cust === 'string' ? cust : (cust.Customer || cust.customerName || cust.customerFullName || '')).toLowerCase();
      const rawPhone = phoneOverrides[inv._id || inv.id] !== undefined ? phoneOverrides[inv._id || inv.id] : getInvoicePhone(inv, customerPhoneMap);
      const phone = String(rawPhone || '').toLowerCase();
      const st = String(inv.status || '').toLowerCase();
      return invNum.includes(q) || invFormatted.includes(q) || clientName.includes(q) || phone.includes(q) || st.includes(q);
    });
  }, [whatsAppInvoicesList, queueSearchTerm, phoneOverrides, customerPhoneMap]);

  const handleSelectFiltered = () => {
    setSelectedWhatsAppInvoiceIds(prev => {
      const next = new Set(prev);
      filteredQueueInvoices.forEach(inv => next.add(inv._id || inv.id));
      return next;
    });
  };

  const handleUncheckFiltered = () => {
    setSelectedWhatsAppInvoiceIds(prev => {
      const next = new Set(prev);
      filteredQueueInvoices.forEach(inv => next.delete(inv._id || inv.id));
      return next;
    });
  };

  const filteredHistoryList = useMemo(() => {
    if (!historySearchTerm.trim()) return historyList;
    const q = historySearchTerm.toLowerCase().trim();
    return historyList.filter(h => {
      const invNum = String(h.invoiceNumber || '').toLowerCase();
      const invFormatted = `inv-${String(h.invoiceNumber || '').padStart(6, '0')}`.toLowerCase();
      const client = String(h.customerName || '').toLowerCase();
      const phone = String(h.phone || '').toLowerCase();
      const user = String(h.sentBy || '').toLowerCase();
      return invNum.includes(q) || invFormatted.includes(q) || client.includes(q) || phone.includes(q) || user.includes(q);
    });
  }, [historyList, historySearchTerm]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await cachedGet(`${ENDPOINT_URL}/customer`);
        if (res.data?.data) {
          const map = {};
          res.data.data.forEach(c => {
            const p = (c.customerCompanyPhone || c.customerPhone || c.phone || c.mobile || '').trim();
            if (p) {
              if (c._id) map[c._id] = p;
              if (c.Customer) map[c.Customer.toUpperCase()] = p;
              if (c.customerName) map[c.customerName.toUpperCase()] = p;
              if (c.customerFullName) map[c.customerFullName.toUpperCase()] = p;
            }
          });
          setCustomerPhoneMap(map);
        }
      } catch (_) {}
    };
    fetchCustomers();
  }, []);

  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/invoice-whatsapp/template`);
        if (res.data?.success && res.data?.templateMessage) {
          setWhatsAppMessage(res.data.templateMessage);
        }
      } catch (_) {}
    };
    fetchTemplate();
  }, []);

  const handleSaveTemplateAsDefault = async () => {
    if (!whatsAppMessage.trim()) {
      toast.warn('Message cannot be empty');
      return;
    }
    setSavingTemplate(true);
    try {
      const res = await axios.post(`${ENDPOINT_URL}/invoice-whatsapp/template`, {
        templateMessage: whatsAppMessage.trim(),
        updatedBy: user?.data?.userName || 'GG'
      });
      if (res.data?.success) {
        toast.success('Default WhatsApp message saved successfully!');
      }
    } catch (err) {
      toast.error('Failed to save default message: ' + (err.message || ''));
    } finally {
      setSavingTemplate(false);
    }
  };

  const handleOpenWhatsAppBatchModal = async () => {
    if (!canSendWhatsAppInvoice) {
      toast.error('Permission denied. WhatsApp Invoice Dispatch is restricted in Grant Access.');
      return;
    }
    setDispatchResult(null);
    setLoadingSentInvoices(true);
    setQueueSearchTerm('');
    setModalTab(0);
    setOpenWhatsAppModal(true);

    fetchSentHistory();

    try {
      const [resSent, resPartial, resFoc] = await Promise.allSettled([
        axios.get(`${ENDPOINT_URL}/invoice-Information?page=1&limit=200&status=SENT`),
        axios.get(`${ENDPOINT_URL}/invoice-Information?page=1&limit=200&status=PARTIALLY-PAID`),
        axios.get(`${ENDPOINT_URL}/invoice-Information?page=1&limit=200&status=FREE OF CHARGE`)
      ]);

      const pool = [];
      [resSent, resPartial, resFoc].forEach(r => {
        if (r.status === 'fulfilled' && Array.isArray(r.value?.data?.itemI)) {
          pool.push(...r.value.data.itemI);
        }
      });

      const seen = new Set();
      let combined = pool.filter(r => {
        const id = r._id || r.id;
        if (!id || seen.has(id)) return false;
        seen.add(id);
        return isEligibleInvoiceStatus(r.status);
      }).map(r => ({
        ...r,
        id: r._id,
        dateField: r.invoiceDate ? dayjs(r.invoiceDate).format('DD/MM/YYYY') : ''
      }));

      if (combined.length === 0) {
        combined = invoice.filter(inv => isEligibleInvoiceStatus(inv.status));
      }

      setWhatsAppInvoicesList(combined);
      setSelectedWhatsAppInvoiceIds(new Set()); // Default to 0 checked on open

      const initPhones = {};
      combined.forEach(inv => {
        const id = inv._id || inv.id;
        initPhones[id] = getInvoicePhone(inv, customerPhoneMap);
      });
      setPhoneOverrides(initPhones);
    } catch (err) {
      console.error('Error fetching eligible invoices:', err);
      const localEligible = invoice.filter(inv => isEligibleInvoiceStatus(inv.status));
      setWhatsAppInvoicesList(localEligible);
      setSelectedWhatsAppInvoiceIds(new Set()); // Default to 0 checked on open
      const initPhones = {};
      localEligible.forEach(inv => {
        const id = inv._id || inv.id;
        initPhones[id] = getInvoicePhone(inv, customerPhoneMap);
      });
      setPhoneOverrides(initPhones);
    } finally {
      setLoadingSentInvoices(false);
    }
  };

  const handleOpenWhatsAppSingleModal = (row) => {
    if (!canSendWhatsAppInvoice) {
      toast.error('Permission denied. WhatsApp Invoice Dispatch is restricted in Grant Access.');
      return;
    }
    if (!isEligibleInvoiceStatus(row.status)) {
      toast.warn('Only invoices with status SENT, PARTIALLY-PAID, or FREE OF CHARGE can be sent via WhatsApp.');
      return;
    }
    setDispatchResult(null);
    setQueueSearchTerm('');
    setModalTab(0);
    setWhatsAppInvoicesList([row]);
    setSelectedWhatsAppInvoiceIds(new Set([row._id || row.id]));
    const initialPhone = getInvoicePhone(row, customerPhoneMap);
    setPhoneOverrides({ [row._id || row.id]: initialPhone });
    fetchSentHistory();
    setOpenWhatsAppModal(true);
  };

  const handleToggleWhatsAppInvoice = (id) => {
    setSelectedWhatsAppInvoiceIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleToggleSelectAllWhatsApp = () => {
    if (selectedWhatsAppInvoiceIds.size === whatsAppInvoicesList.length) {
      setSelectedWhatsAppInvoiceIds(new Set());
    } else {
      setSelectedWhatsAppInvoiceIds(new Set(whatsAppInvoicesList.map(inv => inv._id || inv.id)));
    }
  };

  const handleExecuteWhatsAppDispatch = async () => {
    const selectedInvoices = whatsAppInvoicesList
      .filter(inv => selectedWhatsAppInvoiceIds.has(inv._id || inv.id))
      .map(inv => {
        const totalAmount = Number(inv.totalInvoice || inv.total || 0).toFixed(2);
        const hasValidBalance = inv.balanceDue !== undefined && inv.balanceDue !== null && !isNaN(parseFloat(inv.balanceDue));
        const balanceDueAmount = hasValidBalance ? parseFloat(inv.balanceDue).toFixed(2) : totalAmount;
        return {
          ...inv,
          balanceDue: balanceDueAmount
        };
      });
    if (selectedInvoices.length === 0) {
      toast.warn('Please select at least one invoice to send.');
      return;
    }

    setDispatchingWhatsApp(true);
    setDispatchResult(null);

    const payload = {
      invoices: selectedInvoices,
      templateMessage: whatsAppMessage.trim(),
      phoneOverrides
    };

    try {
      let result = null;
      if (window.electron && typeof window.electron.sendInvoiceWhatsApp === 'function') {
        result = await window.electron.sendInvoiceWhatsApp(payload);
      } else {
        // Direct local daemon check: allows Web Portal or any client on this PC to dispatch directly
        let localSuccess = false;
        try {
          const localCheck = await axios.get('http://127.0.0.1:5055/status', { timeout: 1500 });
          if (localCheck.status === 200) {
            const localRes = await axios.post('http://127.0.0.1:5055/send-invoices', payload, { timeout: 180000 });
            if (localRes?.data) {
              result = localRes.data;
              localSuccess = true;
            }
          }
        } catch (_) {
          localSuccess = false;
        }

        if (!localSuccess) {
          const res = await axios.post(`${ENDPOINT_URL}/invoice-whatsapp/send`, payload);
          result = res.data;
        }
      }

      setDispatchResult(result);

      const sentCount = Number(result?.report?.sent || 0);
      const failedCount = Number(result?.report?.failed !== undefined ? result.report.failed : Math.max(0, selectedInvoices.length - sentCount));
      const totalCount = Number(result?.report?.total || selectedInvoices.length);

      // Determine the exact invoices that actually succeeded
      const sentDetails = Array.isArray(result?.report?.details)
        ? result.report.details.filter(d => d.status === 'sent')
        : [];

      let actuallySentInvoices = [];
      if (sentDetails.length > 0) {
        actuallySentInvoices = selectedInvoices.filter(inv => {
          const invNum = String(inv.invoiceNumber);
          const invId = String(inv._id || inv.id);
          return sentDetails.some(d => String(d.invoiceNumber) === invNum || String(d.invoiceId) === invId);
        });
      } else if (sentCount > 0 && sentCount === selectedInvoices.length) {
        actuallySentInvoices = selectedInvoices;
      } else if (sentCount > 0) {
        actuallySentInvoices = selectedInvoices.slice(0, sentCount);
      }

      // ALWAYS record history in MongoDB for any invoice that actually delivered!
      if (actuallySentInvoices.length > 0) {
        try {
          await axios.post(`${ENDPOINT_URL}/invoice-whatsapp/record-history`, {
            records: actuallySentInvoices.map(inv => ({
              invoiceId: inv._id || inv.id,
              invoiceNumber: inv.invoiceNumber,
              customerName: typeof inv.customerName === 'object' ? (inv.customerName?.Customer || inv.customerName?.customerName || '') : inv.customerName,
              phone: phoneOverrides[inv._id || inv.id] || getInvoicePhone(inv, customerPhoneMap),
              amount: Number(inv.balanceDue !== undefined ? inv.balanceDue : (inv.totalInvoice || inv.total || 0)),
              caption: whatsAppMessage.trim(),
              status: 'sent'
            })),
            sentBy: user?.data?.userName || 'GG'
          });
          fetchSentHistory();
        } catch (histErr) {
          console.warn('[InvoiceWhatsApp] History record warning:', histErr);
        }
      }

      if (sentCount > 0 && failedCount === 0) {
        toast.success(`WhatsApp dispatch complete: ${sentCount} of ${totalCount} invoice(s) sent!`);
        fetchItems(page, debouncedSearchTerm, filterField, filterValue, statusFilter);
      } else if (sentCount > 0 && failedCount > 0) {
        toast.warn(`WhatsApp dispatch partial: ${sentCount} sent, ${failedCount} failed. Recorded in Sent History.`);
        fetchItems(page, debouncedSearchTerm, filterField, filterValue, statusFilter);
      } else {
        toast.error(result?.error || `Failed to dispatch WhatsApp invoices (0 of ${totalCount} sent).`);
      }
    } catch (err) {
      console.error('WhatsApp dispatch error:', err);
      const is503 = err?.response?.status === 503;
      const friendlyMsg = is503
        ? 'WhatsApp desktop agent is not running on this PC. Please install and launch Global Gate v3.6.46.'
        : err.message;
      setDispatchResult({ success: false, error: friendlyMsg });
      toast.error('Dispatch failed: ' + friendlyMsg);
    } finally {
      setDispatchingWhatsApp(false);
    }
  };

  const [loading, setLoading] = useState(false);
  const [ErrorOpenModal, setErrorOpenModal] = useState(false);
  const [loadingOpenModal, setLoadingOpenModal] = useState(false);
  const [modalDeleteOpenLoading, setModalDeleteOpenLoading] = useState(false);
  {/** Loading Update View Start */ }
  const handleOpenLoading = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    handleCloseUpdate();
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  const handleCloseLoading = () => {
    setLoadingOpenModal(false);
    setLoading(false);
    fetchItems(page, searchTerm, filterField, filterValue);
  }
  {/** Loading Update View End */ }

  {/** Loading Delete View Start */ }
  const handleDeleteOpenLoading = () => {
    setModalDeleteOpenLoading(true);
    setLoading(true);
    handleClose();

    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  const handleDeleteCloseLoading = () => {
    setModalDeleteOpenLoading(false);
    setLoading(false);
    fetchItems(page, searchTerm, filterField, filterValue);
  }

  const handleOpenOffline = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  const handleError = () => {
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }


  useEffect(() => {
    const fetchDataHidden = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/hidden`)
        setHiddenRow(res.data.data.map((row) => row.idRow))
        setHidden(res.data.data)
        localStorage.removeItem('Hidden')
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Failed to fetch hidden rows.');
      }
    }
    fetchDataHidden()
  }, [])
  const [openReasonDelete, setOpenReasonDelete] = useState(false);

  const handleOpenReasonDelete = (e) => {
    e.preventDefault()
    setOpenReasonDelete(true);
  };
  const handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };
  {/** End Get Invoice */ }
  const [open, setOpen] = useState(false);
  const [DeleteId, setDeleteId] = useState(null)

  const handleOpen = (id) => {
    setOpen(true);
    setDeleteId(id)
  };
  const handleClose = () => {
    setLoadingOpenModal(false);
    setOpen(false);
  };
  const [open1, setOpen1] = useState(false);
  const [updateId, setUpdateId] = useState(null)
  const [status, setStatus] = useState("");

  const handleOpenUpdate = (id) => {
    setOpen1(true);
    setUpdateId(id);
  };
  const handleCloseUpdate = () => {
    setOpen1(false);
    setUpdateId(null);
  };
  {/** delete multiple && all modal start */ }
  const [openDeleteMultiple, setOpenDeleteMultiple] = useState(false);

  const handleOpenMultiple = () => {
    setOpenDeleteMultiple(true);
  };
  const handleCloseMultiple = () => {
    setOpenDeleteMultiple(false);
  };
  const [openDeleteAll, setOpenDeleteAll] = useState(false);

  const handleOpenAll = () => {
    setOpenDeleteAll(true);
  };
  const handleCloseAll = () => {
    setOpenDeleteAll(false);
  };

  {/** Delete Function */ }
  const handleDelete = async () => {
    setLoading(true);
    setModalDeleteOpenLoading(true);
    handleClose();
    try {
      const invToDelete = invoice.find(inv => inv._id === DeleteId);
      if (invToDelete && invToDelete.ReferenceName && invToDelete.Position === 'Maintenance') {
        try {
          await axios.put(`${ENDPOINT_URL}/update-maintenance/${invToDelete.ReferenceName}`, { Converted: false, ReferenceName: '', status: 'Close' });
        } catch (e) { console.error('Failed to update maintenance order', e); }
      }

      const res = await axios.delete(`${ENDPOINT_URL}/delete-invoice/${DeleteId}`);
      if (res) {
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error('Failed to delete invoice.');
      handleError();
    }
  };
  const [InvoiceDeleted, setInvoiceDeleted] = useState([])
  useEffect(() => {
    const fetchFunction = async () => {
      const deletePromises = selectedRows.map(async (idToDelete) => {
        return axios.get(`${ENDPOINT_URL}/get-invoice/${idToDelete}`)
      })
      try {
        const res = await Promise.all(deletePromises);
        setInvoiceDeleted(res.map((row) => 'INV-' + String(row.data.data.invoiceNumber).padStart(6, '0')))
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
    fetchFunction()
  }, [selectedRows])
  const related = InvoiceDeleted.map(row => row)
  const info = related.toString()
  const handleCreateNotification = async () => {
    const data = {
      idInfo: '',
      person: user.data.userName + ' Deleted ' + info,
      reason,
      dateNotification: new Date()
    }
    try {
      await axios.post(`${ENDPOINT_URL}/create-notification`, data)
    } catch (error) {
      console.error('Notification error:', error);
    }
  }
  const handleDeleteMany = async (e) => {
    e.preventDefault()
    setLoading(true);
    setModalDeleteOpenLoading(true);
    handleCloseMultiple();
    handleCloseAll();
    handleCloseReasonDelete();
    const deletePromises = selectedRows.map(async (idToDelete) => {
      const invToDelete = invoice.find(inv => inv._id === idToDelete);
      if (invToDelete && invToDelete.ReferenceName && invToDelete.Position === 'Maintenance') {
        try {
          await axios.put(`${ENDPOINT_URL}/update-maintenance/${invToDelete.ReferenceName}`, { Converted: false, ReferenceName: '', status: 'Close' });
        } catch (e) { console.error('Failed to update maintenance order', e); }
      }
      return axios.delete(`${ENDPOINT_URL}/delete-invoice/${idToDelete}`)
    })
    try {
      const res = await Promise.all(deletePromises);
      if (res) {
        handleCreateNotification()
        setLoading(false);
        setSelectedRows([]);
      }
    } catch (error) {
      console.error('Delete Many error:', error);
      setLoading(false);
      toast.error('Failed to delete multiple invoices.');
      handleError();
    }
  }
  {/** End Delete Function */ }
  {/** Update Invoice Status start */ }
  const [invoiceN, setInvoiceN] = useState(0)
  useEffect(() => {
    const fetchId = async () => {
      if (updateId !== null) {
        try {
          const res = await axios.get(`${ENDPOINT_URL}/get-invoice/${updateId}`)
          setStatus(res.data.data.status);
          setInvoiceN(res.data.data.invoiceNumber);
        } catch (error) {
          console.error('Error fetching data:', error);
          toast.error('Failed to fetch invoice detail.');
        }
      }
    }
    fetchId()
  }, [updateId]);
  const handleCreateComment = async () => {
    const data = {
      idInfo: updateId,
      person: user.data.userName,
      reason: status + ' INV-' + String(invoiceN).padStart(6, '0'),
      dateNotification: new Date()
    };
    try {
      await axios.post(`${ENDPOINT_URL}/create-notification/`, data)
    } catch (error) {
      console.error('Notification error:', error);
    }
  }
  const handleSubmitUpdateStatus = async (e) => {
    e.preventDefault();
    const data = {
      status
    };
    try {
      const res = await axios.put(`${ENDPOINT_URL}/update-invoice/${updateId}`, data)
      if (res) {
        handleCreateComment();
        handleOpenLoading();
      }
    } catch (error) {
      console.error('Error making PUT request:', error);
      toast.error('Failed to update invoice status.');
    }
  }
  {/** Update Invoice Status End */ }




  const handleHideRow = async (id) => {

    if (user.data.role === 'CEO') {
      try {
        if (hiddenRow.includes(id)) {
          setHiddenRow(hiddenRow.filter((row) => row !== id));
          const result = hidden.filter((row) => row.idRow === id)
            .map((row) => row._id)
          const hiddenId = result.toString()

          await axios.delete(`${ENDPOINT_URL}/delete-hidden/${hiddenId}`);
        } else {
          setHiddenRow([...hiddenRow, id]);
          await axios.post(`${ENDPOINT_URL}/create-hidden`, {
            idRow: id, hiddenByCEO: true
          })
        }
      } catch (error) {
        console.error('Hide error:', error);
        toast.error('Failed to update row visibility.');
      }
    }
  }

  const rowRenderer = (params) => {
    if (hiddenRow.includes(params.row._id)) {
      return null
    }
    return <div>{params.row[params.field]}</div>
  }
  const [filteredRows, setFilteredRows] = useState([])
  useEffect(() => {
    const Inv = invoice.filter(row => !hiddenRow.includes(row._id))
    setFilteredRows(Inv)
  }, [invoice, hiddenRow])
  {/** search start */ }
  const [searchInvoice, setSearchInvoice] = useState("");
  useEffect(() => {
    const storedValue = localStorage.getItem('QuickFilterInvoice');
    if (storedValue) {
      setSearchInvoice(storedValue)
    }
  }, [])
  const [filterModel, setFilterModel] = React.useState({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    quickFilterValues: [],
  });
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({});
  const handelHiddenColumn = (newHidden) => {
    setColumnVisibilityModel(newHidden)
    localStorage.setItem('HiddenColumnsInvoice', JSON.stringify(newHidden))
  }
  const handleFilter = (newModel) => {
    const searchTerm = newModel.quickFilterValues?.join(' ') || '';
    setSearchTerm(searchTerm);
    setFilterModel(newModel);
    setPage(0);
  }
  useEffect(() => {
    const storedQuick = JSON.parse(localStorage.getItem('QuickFilterInvoiceTst'));
    if (storedQuick) {
      const searchTerm = storedQuick.quickFilterValues?.join(' ') || '';
      setSearchTerm(searchTerm);
      setFilterModel(storedQuick);
    }
    const storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsInvoice'))
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns)
    }

  }, [searchInvoice])
  const [sideBar, setSideBar] = React.useState(true);
  const toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  {/** search end */ }
  const columns = [
    { field: 'invoiceNumber', headerName: 'Invoice#', minWidth: 100, flex: 1, renderCell: (params) => (<div> <span>INV-{String(params.row.invoiceNumber).padStart(6, '0')}</span> </div>) },
    { 
      field: 'customer', 
      headerName: 'Customer Name', 
      minWidth: 200, 
      flex: 2, 
      valueGetter: (params) => {
        const raw = params.row?.customerName || params.row?.Customer || params.row?.customer;
        if (!raw) return '';
        if (typeof raw === 'string') return raw.toUpperCase();
        const fullName = [raw.customerFirstName, raw.customerLastName].filter(Boolean).join(' ');
        const name = raw.Customer || raw.customerName || raw.customerFullName || raw.companyName || fullName || raw.name || raw.clientName || '';
        return String(name).toUpperCase();
      } 
    },
    {
      field: 'status', headerName: 'Status', minWidth: 100, flex: 1, renderCell: (params) => {
        const isActuallyPaid = parseFloat(params.row.balanceDue) <= 0 && parseFloat(params.row.totalInvoice) > 0;
        const fallbackStatus = (parseFloat(params.row.total) > 0 && parseFloat(params.row.balanceDue) > 0) ? 'Partially-Paid' : 'Sent';
        const displayStatus = isActuallyPaid ? "Paid" : (params.row.status || fallbackStatus);
        return renderStatusBadge(displayStatus);
      }
    },
    { 
      field: 'invoiceSubject', 
      headerName: 'Subject', 
      minWidth: 150, 
      flex: 1,
      valueGetter: (params) => params.row?.invoiceSubject || (params.row?.invoiceNumber === 2673 ? 'CCTV & POS INSTALLATION' : '')
    },
    { field: 'dateField', headerName: 'Date', minWidth: 100, flex: 1 },
    { field: 'totalInvoice', headerName: 'I-Amount', minWidth: 100, flex: 1, renderCell: (params) => `$${params.row.totalInvoice?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'total', headerName: 'A-Paid', minWidth: 100, flex: 1, renderCell: (params) => `$${params.row.total?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'balanceDue', headerName: 'B-Due', minWidth: 100, flex: 1, renderCell: (params) => `$${params.row.balanceDue?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    {
      field: 'view', headerName: 'View', width: 60, minWidth: 60, renderCell: (params) => (
        <ViewTooltip title="View">
          <span>
            <IconButton disabled={InvoiceInfoV.length === 0}>
              <NavLink to={`/InvoiceViewAdminAll/${params.row._id}`} className='LinkName'>
                <VisibilityIcon style={{ color: '#202a5a' }} />
              </NavLink>
            </IconButton>
          </span>
        </ViewTooltip>
      )
    },
    {
      field: 'edit', headerName: 'Edit', width: 50, renderCell: (params) => (
        <EditTooltip title="Edit">
          <span>
            <IconButton onClick={() => handleOpenUpdate(params.row._id)} disabled={params.row.status !== 'Draft' && InvoiceInfoU.length === 0}>
              <EditIcon style={{ color: 'gray' }} />
            </IconButton>
          </span>
        </EditTooltip>

      )
    },
    {
      field: 'Delete', headerName: 'Delete', width: 50, renderCell: (params) => (
        <DeleteTooltip title="Delete">
          <span>                                <IconButton onClick={() => handleOpen(params.row._id)} disabled={InvoiceInfoD.length === 0}>
            <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
          </IconButton>
          </span>
        </DeleteTooltip>)
    },
    {
      field: 'whatsapp',
      headerName: 'WhatsApp',
      width: 60,
      sortable: false,
      renderCell: (params) => {
        const isEligible = isEligibleInvoiceStatus(params.row.status);
        if (!canSendWhatsAppInvoice) return null;
        if (!isEligible) {
          return (
            <Tooltip title="Only invoices with status SENT, PARTIALLY-PAID, or FREE OF CHARGE can be sent via WhatsApp">
              <span>
                <IconButton size="small" disabled sx={{ color: '#cbd5e1' }}>
                  <WhatsAppIcon sx={{ fontSize: 18 }} />
                </IconButton>
              </span>
            </Tooltip>
          );
        }
        return (
          <Tooltip title={`Send ${params.row.invoiceName || 'invoice'} via WhatsApp`}>
            <span>
              <IconButton
                size="small"
                onClick={() => handleOpenWhatsAppSingleModal(params.row)}
                sx={{
                  color: '#25D366',
                  '&:hover': { color: '#1ebe5d', backgroundColor: '#f0fdf4' }
                }}
              >
                <WhatsAppIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </span>
          </Tooltip>
        );
      }
    },
    {
      field: 'hide',
      headerName: 'Action',
      sortable: false,
      width: 40,
      renderCell: (params) => {
        if (user.data.role === 'CEO') {
          return (
            <div>
              {
                hiddenRow.includes(params.row._id) ?
                  (<ViewTooltip title="UnHide">
                    <span>
                      <IconButton onClick={() => handleHideRow(params.row._id)} >
                        <PersonOffRounded style={{ color: '#202a5a' }} />
                      </IconButton>
                    </span>
                  </ViewTooltip>)
                  : (
                    <ViewTooltip title="Hide">
                      <span>
                        <IconButton onClick={() => handleHideRow(params.row._id)} >
                          <Person2Outlined style={{ color: '#202a5a' }} />
                        </IconButton>
                      </span>
                    </ViewTooltip>
                  )

              }
            </div>
          )
        }
      }
    }
  ]

  {/** Search View End */ }

  if (isMobile) {
    return loadingData ? (
      <div style={{ position: 'relative', top: '120px', textAlign: 'center' }}>
        <Loader />
      </div>
    ) : (
      <Box sx={{ width: '100%', py: 1 }}>
        <MobileCardList
          type="invoices"
          data={invoice}
          searchPlaceholder="Search invoices, clients, items, amounts..."
          searchValue={searchTerm}
          onSearchChange={setSearchTerm}
          page={page}
          totalCount={totalItemCount}
          onPageChange={setPage}
          loading={loadingData}
          statusFilter={statusFilter}
          onStatusFilterChange={handleStatusClick}
          statusCounts={statusCounts}
        />
      </Box>
    );
  }

  return (
    <div className='Homeemployee'>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={sideBar} sx={{ backgroundColor: '#30368a' }}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(sideBar && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Invoice
            </Typography>
            <NotificationVIewInfo />
            <MessageAdminView name={user.data.userName} role={user.data.role} />
            <IconButton color="inherit" onClick={handleLogout}>
              <Logout style={{ color: 'white' }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={sideBar} onMouseEnter={() => setSideBar(true)} onMouseLeave={() => setSideBar(false)}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List sx={{ height: '700px' }}>
            <SidebarDash />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            width: '100%',
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="none" sx={{ mt: 0.5, px: { xs: 1, sm: 2 } }} >
            {/* Status Summary Filter Cards Grid */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'repeat(2, 1fr)',
                  sm: 'repeat(4, 1fr)',
                  md: 'repeat(8, 1fr)',
                },
                gap: 1,
                mb: 0.75,
                mt: 0.25,
              }}
            >
              {[
                { key: 'ALL', label: 'ALL ORDERS', count: statusCounts.all, color: '#30368a', bgLight: '#eef2ff', icon: <AssignmentIcon sx={{ fontSize: 15, color: '#30368a' }} /> },
                { key: 'Paid', label: 'PAID', count: statusCounts.paid, color: '#16a34a', bgLight: '#dcfce7', icon: <CheckCircleIcon sx={{ fontSize: 15, color: '#16a34a' }} /> },
                { key: 'Partially-Paid', label: 'PARTIALLY-PAID', count: statusCounts.partiallyPaid, color: '#d97706', bgLight: '#fef3c7', icon: <PaymentsIcon sx={{ fontSize: 15, color: '#d97706' }} /> },
                { key: 'Draft', label: 'DRAFT', count: statusCounts.draft, color: '#78909c', bgLight: '#eceff1', icon: <EditNoteIcon sx={{ fontSize: 15, color: '#78909c' }} /> },
                { key: 'Sent', label: 'SENT', count: statusCounts.sent, color: '#1976d2', bgLight: '#e3f2fd', icon: <SendIcon sx={{ fontSize: 15, color: '#1976d2' }} /> },
                { key: 'Pending', label: 'PENDING', count: statusCounts.pending, color: '#801313', bgLight: '#fbe9e7', icon: <HourglassEmptyIcon sx={{ fontSize: 15, color: '#801313' }} /> },
                { key: 'Decline', label: 'DECLINE', count: statusCounts.decline, color: '#d32f2f', bgLight: '#ffebee', icon: <CancelIcon sx={{ fontSize: 15, color: '#d32f2f' }} /> },
                { key: 'Free of Charge', label: 'FREE OF CHARGE', count: statusCounts.freeOfCharge, color: '#9c27b0', bgLight: '#f3e5f5', icon: <CardGiftcardIcon sx={{ fontSize: 15, color: '#9c27b0' }} /> },
              ].map((card) => {
                const isSelected = statusFilter.toLowerCase() === card.key.toLowerCase();
                return (
                  <Box
                    key={card.key}
                    onClick={() => handleStatusClick(card.key)}
                    sx={{
                      backgroundColor: '#ffffff',
                      borderRadius: '8px',
                      p: '6px 10px',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      border: isSelected ? `2px solid ${card.color}` : '1px solid #e2e8f0',
                      boxShadow: isSelected
                        ? `0 4px 12px -2px ${card.color}33, 0 2px 4px -1px rgba(0, 0, 0, 0.06)`
                        : '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
                      transform: isSelected ? 'translateY(-1px)' : 'none',
                      transition: 'all 0.15s ease-in-out',
                      '&:hover': {
                        boxShadow: `0 4px 10px -2px ${card.color}25, 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
                        transform: 'translateY(-1px)',
                        borderColor: card.color,
                      },
                    }}
                  >
                    {isSelected && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '3px',
                          backgroundColor: card.color,
                        }}
                      />
                    )}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.25 }}>
                      <Typography
                        sx={{
                          fontSize: '9.5px',
                          fontWeight: 700,
                          letterSpacing: '0.4px',
                          color: isSelected ? card.color : '#64748b',
                          textTransform: 'uppercase',
                        }}
                      >
                        {card.label}
                      </Typography>
                      <Box
                        sx={{
                          width: 22,
                          height: 22,
                          borderRadius: '50%',
                          backgroundColor: card.bgLight,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {card.icon}
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                      <Typography
                        sx={{
                          fontSize: '16px',
                          fontWeight: 800,
                          color: isSelected ? card.color : '#1e293b',
                          lineHeight: 1.1,
                        }}
                      >
                        {(card.count || 0).toLocaleString()}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
            {
              loadingData ? <div >
                <div style={{ position: 'relative', top: '120px' }}>
                  <Loader />
                </div>
              </div> : (
                <div  >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5, mt: 0.25 }}>
                    <Box>
                      {invoice.length > 0 && selectedRows.length > 1 && selectedRows.length < invoice.length && (
                        <button disabled={user.data.role !== 'CEO'} onClick={handleOpenAll} className='btnCustomer2'>Delete multiple</button>
                      )}
                      {invoice.length > 0 && selectedRows.length === invoice.length && (
                        <button onClick={handleOpenAll} disabled={user.data.role !== 'CEO'} className='btnCustomer2'>Delete all</button>
                      )}
                    </Box>
                    {!isNativeMobile() && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <ViewTooltip>
                          <span>
                            <IconButton disabled={InvoiceInfoC.length === 0} size="small">
                              <NavLink to={'/InvoiceForm'} className='LinkName'>
                                <span className='btnCustomerAdding'>
                                  <Add sx={{ fontSize: 18 }} />
                                </span>
                              </NavLink>
                            </IconButton>
                          </span>
                        </ViewTooltip>
                        <button onClick={handleRefreshSearch} className='btnCustomer2' style={{ height: '32px', lineHeight: '32px', padding: '0 12px' }}>Refresh Search</button>
                        {canSendWhatsAppInvoice && (
                          <Button
                            variant="contained"
                            size="small"
                            startIcon={<WhatsAppIcon sx={{ fontSize: 18 }} />}
                            onClick={handleOpenWhatsAppBatchModal}
                            sx={{
                              backgroundColor: '#25D366',
                              '&:hover': { backgroundColor: '#1ebe5d' },
                              color: '#fff',
                              fontWeight: 700,
                              textTransform: 'none',
                              height: '32px',
                              px: 1.5,
                              borderRadius: '4px',
                              boxShadow: '0 2px 4px rgba(37,211,102,0.25)'
                            }}
                          >
                            Send WhatsApp Invoices
                          </Button>
                        )}
                      </Box>
                    )}
                  </Box>

                  <Box sx={{ height: isNativeMobile() ? 'auto' : 'calc(100vh - 200px)', minHeight: 380, width: '100%' }}>
                    {
                      isNativeMobile() ? (
                        <MobileCardList
                          type="invoices"
                          data={invoice}
                          searchPlaceholder="Search invoices, clients, items, amounts..."
                          searchValue={searchTerm}
                          onSearchChange={setSearchTerm}
                          page={page}
                          totalCount={totalItemCount}
                          onPageChange={setPage}
                          loading={loadingData}
                          statusFilter={statusFilter}
                          onStatusFilterChange={handleStatusClick}
                          statusCounts={statusCounts}
                        />
                      ) : user.data.role === 'CEO' ? (
                        <>
                          <DataGrid
                          paginationMode="server"
                          filterMode="server"
                          rowCount={totalItemCount}
                          paginationModel={{ page: page, pageSize: limit }}
                          onPaginationModelChange={(newModel) => handlePageChange(newModel.page)}
                            rows={invoice}
                            columns={columns}
                            slots={{ toolbar: GridToolbar }}
                            slotProps={{
                              toolbar: {
                                showQuickFilter: true,
                          quickFilterProps: { debounceMs: 500 },
                                printOptions: {
                                  disableToolbarButton: true
                                },
                              },
                            }}
                            getRowClassName={(params) =>
                              FilterInvoiceWith.some(filteredRow => filteredRow.id === params.row.id) ? 'new-Purchase' : ''
                            }
                            onRowSelectionModelChange={(newSelection) => setSelectedRows(newSelection)}
                            rowRenderer={rowRenderer}
                            checkboxSelection
                            disableColumnFilter
                            disableDensitySelector
                            rowSelectionModel={selectedRows}
                            filterModel={filterModel}
                            onFilterModelChange={(newModel) => handleFilter(newModel)}
                            columnVisibilityModel={columnVisibilityModel}
                            onColumnVisibilityModelChange={handelHiddenColumn}
                            sx={{
                              width: '100%',
                              backgroundColor: 'white',
                              padding: '10px',
                              '& .new-Purchase': {
                                backgroundColor: '#e3f2fd',
                              },
                            }}
                          />
                          <Pagination 
                            count={totalPage} 
                            page={page + 1} 
                            onChange={(e, value) => setPage(value - 1)} 
                            color="primary" 
                            sx={{ position: 'relative', top: '-52px', zIndex: 1000, display: 'flex', justifyContent: 'center', width: 'fit-content', margin: '0 auto' }} 
                          />
                        </>
                      ) : (
                        <>
                          <DataGrid
                          paginationMode="server"
                          filterMode="server"
                          rowCount={totalItemCount}
                          paginationModel={{ page: page, pageSize: limit }}
                          onPaginationModelChange={(newModel) => handlePageChange(newModel.page)}
                            rows={filteredRows}
                            columns={columns}
                            slots={{ toolbar: GridToolbar }}
                            slotProps={{
                              toolbar: {
                                showQuickFilter: true,
                          quickFilterProps: { debounceMs: 500 },
                                printOptions: {
                                  disableToolbarButton: true
                                },
                              },
                            }}
                            getRowClassName={(params) =>
                              FilterInvoiceWith.some(filteredRow => filteredRow.id === params.row.id) ? 'new-Purchase' : ''
                            }
                            onRowSelectionModelChange={(newSelection) => setSelectedRows(newSelection)}
                            checkboxSelection
                            disableColumnFilter
                            disableDensitySelector
                            rowSelectionModel={selectedRows}
                            filterModel={filterModel}
                            onFilterModelChange={(newModel) => handleFilter(newModel)}
                            columnVisibilityModel={columnVisibilityModel}
                            onColumnVisibilityModelChange={handelHiddenColumn}
                            sx={{
                              width: '100%',
                              backgroundColor: 'white',
                              padding: '10px',
                              '& .new-Purchase': {
                                backgroundColor: '#e3f2fd',
                              },
                            }}
                          />
                          <Pagination 
                            count={totalPage} 
                            page={page + 1} 
                            onChange={(e, value) => setPage(value - 1)} 
                            color="primary" 
                            sx={{ position: 'relative', top: '-52px', zIndex: 1000, display: 'flex', justifyContent: 'center', width: 'fit-content', margin: '0 auto' }} 
                          />
                        </>
                      )
                    }
                  </Box>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={{ ...style, width: 500 }}>
                      <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                        <h2>Do you want to Delete ?</h2>
                        <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
                          <button className='btnCustomer2' onClick={handleDelete}>
                            Delete
                          </button>
                          <button className='btnCustomer' onClick={handleClose}>
                            Cancel
                          </button>
                        </div>
                      </div>
                    </Box>
                  </Modal>

                  <Modal
                    open={modalDeleteOpenLoading}
                    onClose={handleDeleteCloseLoading}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={{ ...style, width: 500 }}>
                      <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                        {loading ? (<Loader />
                        ) : (
                          <div>
                            <p><CheckCircleIcon style={{ color: 'green', height: '40px', width: '40px' }} /></p>
                            <h2> Done Successfully</h2>
                            <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
                              <button onClick={handleDeleteCloseLoading} className='btnCustomer'>
                                Close
                              </button>
                            </div>
                          </div>)}
                      </div>
                    </Box>
                  </Modal>

                  <Modal
                    open={openDeleteAll}
                    onClose={handleCloseAll}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={{ ...style, width: 500 }}>
                      <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                        <h2>Do you want to Delete ?</h2>
                        {
                          selectedRows.length === 1 && (
                            <p><span className="txt2" style={{ color: 'red' }}>Note:</span> Selected rows will be deleted</p>
                          )
                        }
                        {
                          selectedRows.length > 1 && selectedRows.length < invoice.length && (
                            <p><span className="txt2" style={{ color: 'red' }}>Note:</span> All selected rows will be deleted</p>
                          )
                        }
                        {
                          selectedRows.length === invoice.length && (
                            <p><span className="txt2" style={{ color: 'red' }}>Note:</span> All rows will be deleted</p>
                          )
                        }
                        <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
                          <button className='btnCustomer2' onClick={handleOpenReasonDelete}>
                            Delete
                          </button>
                          <button className='btnCustomer' onClick={handleCloseAll}>
                            Cancel
                          </button>
                        </div>
                      </div>
                    </Box>
                  </Modal>
                  <Modal
                    open={openReasonDelete}
                    onClose={handleCloseReasonDelete}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={{ ...style, width: 500 }}>
                      <ViewTooltip title="Close" placement='left'>
                        <IconButton onClick={handleCloseReasonDelete} style={{ position: 'relative', float: 'right' }}>
                          <Close style={{ color: '#202a5a' }} />
                        </IconButton>
                      </ViewTooltip>
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        Why do you want to delete: {info}?
                      </Typography>
                      <form onSubmit={handleDeleteMany}>
                        <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>
                          <Grid item xs={12}>
                            <TextField
                              required
                              id='reason'
                              name='reason'
                              multiline
                              rows={4}
                              value={reason}
                              placeholder='Reason'
                              onChange={(e) => setReason(e.target.value)}
                              label='Reason'
                              sx={{ width: '100%', backgroundColor: 'white' }}
                            />
                          </Grid>
                          <br />
                          <Grid item xs={12}>
                            <button type='submit' className='btnCustomer' style={{ width: '100%' }}>Save</button>
                          </Grid>
                        </Grid>
                      </form>

                    </Box>
                  </Modal>

                  <Modal
                    open={open1}
                    onClose={handleCloseUpdate}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        Update Invoice Status
                      </Typography>
                      <br />
                      <form onSubmit={handleSubmitUpdateStatus}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Status</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={status}
                            label="Status"
                            onChange={(e) => setStatus(e.target.value)}
                          >
                            <MenuItem value={'Draft'}>Draft</MenuItem>
                            <MenuItem value={'Sent'}>Sent</MenuItem>
                            <MenuItem value={'Pending'}>Pending</MenuItem>
                            <MenuItem value={'Decline'}>Decline</MenuItem>
                            <MenuItem value={'Free of Charge'}>Free of Charge</MenuItem>
                          </Select>
                        </FormControl>
                        <br /><br />
                        <button type='submit' className='btnCustomer6' style={{ width: '100%' }}>Update</button>
                      </form>

                    </Box>
                  </Modal>
                  <Modal
                    open={loadingOpenModal}
                    onClose={handleCloseLoading}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={{ ...style, width: 500 }}>
                      <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                        {loading ? (<Loader />
                        ) : (
                          <div>
                            <p><CheckCircleIcon style={{ color: 'green', height: '40px', width: '40px' }} /></p>
                            <h2> Done Successfully</h2>
                            <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
                              <button onClick={handleCloseLoading} className='btnCustomer'>
                                Close
                              </button>
                            </div>
                          </div>)}
                      </div>
                    </Box>
                  </Modal>
                  <Modal
                    open={ErrorOpenModal}
                    onClose={() => setErrorOpenModal(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={{ ...style, width: 500 }}>
                      <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                        <h2> Error Occured</h2>
                        <p>Please try again later</p>
                        <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
                          <button onClick={() => setErrorOpenModal(false)} className='btnCustomer'>
                            Close
                          </button>
                        </div>
                      </div>
                    </Box>
                  </Modal>

                  {/* WhatsApp Invoices Dispatch Dialog with Send Queue and 3-Month History */}
                  <Dialog
                    open={openWhatsAppModal}
                    onClose={() => !dispatchingWhatsApp && setOpenWhatsAppModal(false)}
                    maxWidth="lg"
                    fullWidth
                    PaperProps={{
                      sx: { borderRadius: 2, p: 1, maxWidth: 980, width: '100%' }
                    }}
                  >
                    <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 0.5 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                        <WhatsAppIcon sx={{ color: '#25D366', fontSize: 28 }} />
                        <Typography variant="h6" sx={{ fontWeight: 800, color: '#0f172a' }}>
                          Send Invoices via WhatsApp (+243 827 722 222)
                        </Typography>
                      </Box>
                      <IconButton
                        size="small"
                        onClick={() => !dispatchingWhatsApp && setOpenWhatsAppModal(false)}
                        disabled={dispatchingWhatsApp}
                      >
                        <Close />
                      </IconButton>
                    </DialogTitle>

                    {/* Modal Tabs: Queue vs Sent History */}
                    <Box sx={{ px: 3, pt: 1, borderBottom: 1, borderColor: 'divider' }}>
                      <Tabs
                        value={modalTab}
                        onChange={(e, val) => setModalTab(val)}
                        textColor="primary"
                        indicatorColor="primary"
                      >
                        <Tab
                          icon={<WhatsAppIcon sx={{ fontSize: 18 }} />}
                          iconPosition="start"
                          label={`Send Queue (${whatsAppInvoicesList.length})`}
                          sx={{ textTransform: 'none', fontWeight: 700 }}
                        />
                        <Tab
                          icon={<HistoryIcon sx={{ fontSize: 18 }} />}
                          iconPosition="start"
                          label={`Sent History (${historyList.length})`}
                          sx={{ textTransform: 'none', fontWeight: 700 }}
                        />
                      </Tabs>
                    </Box>

                    <DialogContent dividers sx={{ pt: 1.5, pb: 2 }}>
                      {modalTab === 0 ? (
                        <>
                          <Alert severity="info" sx={{ mb: 2, fontSize: '0.85rem' }}>
                            <strong>Eligible Invoices:</strong> Invoices with status <strong>SENT</strong>, <strong>PARTIALLY-PAID</strong>, or <strong>FREE OF CHARGE</strong> are listed and eligible for WhatsApp dispatch.
                            Dispatches are sent one-by-one from official company line <strong>+243 827 722 222</strong>.
                          </Alert>

                          {/* Customizable Short Message Box */}
                          <Box sx={{ mb: 2, p: 2, border: '1px solid #e2e8f0', borderRadius: 1.5, backgroundColor: '#f8fafc' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#1e293b' }}>
                                Customizable Short Message (English)
                              </Typography>
                              <Button
                                size="small"
                                variant="outlined"
                                startIcon={<SaveIcon />}
                                onClick={handleSaveTemplateAsDefault}
                                disabled={savingTemplate || dispatchingWhatsApp}
                                sx={{ textTransform: 'none', py: 0.25, fontSize: '0.78rem' }}
                              >
                                {savingTemplate ? 'Saving...' : 'Save as Default'}
                              </Button>
                            </Box>
                            <TextField
                              fullWidth
                              multiline
                              rows={4.5}
                              value={whatsAppMessage}
                              onChange={(e) => setWhatsAppMessage(e.target.value)}
                              placeholder="Type short message in English..."
                              disabled={dispatchingWhatsApp}
                              sx={{
                                backgroundColor: '#fff',
                                '& .MuiInputBase-root': {
                                  fontSize: '0.92rem',
                                  lineHeight: 1.6,
                                  p: 1.5
                                }
                              }}
                            />
                            <Typography variant="caption" sx={{ color: '#64748b', mt: 0.5, display: 'block' }}>
                              * When a client has multiple invoices, this short message is attached to the first invoice PDF, followed sequentially by subsequent invoices.
                            </Typography>
                          </Box>

                          {/* Search Bar & Batch Selection Controls */}
                          <Box sx={{ mb: 1.5, display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center', justifyContent: 'space-between' }}>
                            <TextField
                              size="small"
                              placeholder="Search by customer, invoice #, phone..."
                              value={queueSearchTerm}
                              onChange={(e) => setQueueSearchTerm(e.target.value)}
                              disabled={dispatchingWhatsApp}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <SearchIcon sx={{ color: '#94a3b8', fontSize: 20 }} />
                                  </InputAdornment>
                                ),
                                endAdornment: queueSearchTerm ? (
                                  <InputAdornment position="end">
                                    <IconButton size="small" onClick={() => setQueueSearchTerm('')}>
                                      <Close sx={{ fontSize: 16 }} />
                                    </IconButton>
                                  </InputAdornment>
                                ) : null
                              }}
                              sx={{ minWidth: 280, flex: 1, backgroundColor: '#fff' }}
                            />

                            <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                              {queueSearchTerm.trim() && (
                                <>
                                  <Button
                                    size="small"
                                    variant="outlined"
                                    onClick={handleSelectFiltered}
                                    disabled={dispatchingWhatsApp || filteredQueueInvoices.length === 0}
                                    sx={{ textTransform: 'none', fontSize: '0.75rem', py: 0.3 }}
                                  >
                                    Select Filtered ({filteredQueueInvoices.length})
                                  </Button>
                                  <Button
                                    size="small"
                                    variant="outlined"
                                    onClick={handleUncheckFiltered}
                                    disabled={dispatchingWhatsApp || filteredQueueInvoices.length === 0}
                                    sx={{ textTransform: 'none', fontSize: '0.75rem', py: 0.3 }}
                                  >
                                    Uncheck Filtered
                                  </Button>
                                </>
                              )}
                              <Button
                                size="small"
                                onClick={handleToggleSelectAllWhatsApp}
                                disabled={dispatchingWhatsApp || whatsAppInvoicesList.length === 0}
                                sx={{ textTransform: 'none', fontSize: '0.78rem' }}
                              >
                                {selectedWhatsAppInvoiceIds.size === whatsAppInvoicesList.length ? 'Uncheck All' : 'Select All'}
                              </Button>
                            </Box>
                          </Box>

                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                            <Typography variant="caption" sx={{ fontWeight: 700, color: '#475569' }}>
                              Showing {filteredQueueInvoices.length} of {whatsAppInvoicesList.length} Invoices ({selectedWhatsAppInvoiceIds.size} Selected to Send)
                            </Typography>
                          </Box>

                          {loadingSentInvoices ? (
                            <Box sx={{ py: 4, textAlign: 'center' }}>
                              <Loader />
                              <Typography variant="caption" sx={{ color: '#64748b', mt: 1, display: 'block' }}>
                                Loading eligible invoices (SENT, PARTIALLY-PAID, FREE OF CHARGE)...
                              </Typography>
                            </Box>
                          ) : whatsAppInvoicesList.length === 0 ? (
                            <Box sx={{ py: 4, textAlign: 'center', color: '#64748b' }}>
                              <Typography variant="body2">No invoices with status SENT, PARTIALLY-PAID, or FREE OF CHARGE found.</Typography>
                            </Box>
                          ) : filteredQueueInvoices.length === 0 ? (
                            <Box sx={{ py: 3, textAlign: 'center', color: '#64748b' }}>
                              <Typography variant="body2">No invoices match your search term "{queueSearchTerm}".</Typography>
                            </Box>
                          ) : (
                            <TableContainer component={Paper} variant="outlined" sx={{ maxHeight: 310, borderRadius: 1.5 }}>
                              <Table size="small" stickyHeader>
                                <TableHead>
                                  <TableRow sx={{ '& th': { fontWeight: 700, backgroundColor: '#f1f5f9' } }}>
                                    <TableCell padding="checkbox" sx={{ width: 40 }}>
                                      <Checkbox
                                        size="small"
                                        checked={filteredQueueInvoices.length > 0 && filteredQueueInvoices.every(inv => selectedWhatsAppInvoiceIds.has(inv._id || inv.id))}
                                        indeterminate={filteredQueueInvoices.some(inv => selectedWhatsAppInvoiceIds.has(inv._id || inv.id)) && !filteredQueueInvoices.every(inv => selectedWhatsAppInvoiceIds.has(inv._id || inv.id))}
                                        onChange={() => {
                                          const allFilteredSelected = filteredQueueInvoices.every(inv => selectedWhatsAppInvoiceIds.has(inv._id || inv.id));
                                          if (allFilteredSelected) {
                                            handleUncheckFiltered();
                                          } else {
                                            handleSelectFiltered();
                                          }
                                        }}
                                        disabled={dispatchingWhatsApp}
                                      />
                                    </TableCell>
                                    <TableCell sx={{ width: 110 }}>Invoice #</TableCell>
                                    <TableCell sx={{ width: 95 }}>Date</TableCell>
                                    <TableCell>Customer Name</TableCell>
                                    <TableCell sx={{ width: 165 }}>WhatsApp Phone (Editable)</TableCell>
                                    <TableCell sx={{ width: 125, textAlign: 'right' }}>Balance Due</TableCell>
                                    <TableCell sx={{ width: 110, textAlign: 'center' }}>Status</TableCell>
                                    <TableCell sx={{ width: 110, textAlign: 'center' }}>Sent History</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {filteredQueueInvoices.map((inv) => {
                                    const id = inv._id || inv.id;
                                    const isChecked = selectedWhatsAppInvoiceIds.has(id);
                                    const cust = inv.customerName || {};
                                    const clientName = (typeof cust === 'string' ? cust : (cust.Customer || cust.customerName || cust.customerFullName || 'Customer')).toUpperCase();
                                    const phoneVal = phoneOverrides[id] !== undefined ? phoneOverrides[id] : getInvoicePhone(inv, customerPhoneMap);
                                    const totalAmount = Number(inv.totalInvoice || inv.total || 0).toFixed(2);
                                    const hasValidBalance = inv.balanceDue !== undefined && inv.balanceDue !== null && !isNaN(parseFloat(inv.balanceDue));
                                    const balanceDueAmount = hasValidBalance ? parseFloat(inv.balanceDue).toFixed(2) : totalAmount;
                                    const isPartial = String(inv.status || '').toUpperCase().includes('PARTIAL');
                                    const isFree = String(inv.status || '').toUpperCase().includes('FREE');
                                    const amount = isFree ? '0.00' : balanceDueAmount;
                                    const prevSent = sentHistoryMap[Number(inv.invoiceNumber)];

                                    return (
                                      <TableRow key={id} hover selected={isChecked} sx={{ '&.Mui-selected': { backgroundColor: 'rgba(37,211,102,0.06)' } }}>
                                        <TableCell padding="checkbox">
                                          <Checkbox
                                            size="small"
                                            checked={isChecked}
                                            onChange={() => handleToggleWhatsAppInvoice(id)}
                                            disabled={dispatchingWhatsApp}
                                          />
                                        </TableCell>
                                        <TableCell sx={{ fontWeight: 700, color: '#0f172a' }}>
                                          INV-{String(inv.invoiceNumber).padStart(6, '0')}
                                        </TableCell>
                                        <TableCell sx={{ fontSize: '0.8rem', color: '#64748b' }}>
                                          {inv.dateField || (inv.invoiceDate ? dayjs(inv.invoiceDate).format('DD/MM/YYYY') : '')}
                                        </TableCell>
                                        <TableCell sx={{ fontWeight: 600 }}>{clientName}</TableCell>
                                        <TableCell>
                                          <TextField
                                            size="small"
                                            value={phoneVal}
                                            onChange={(e) => setPhoneOverrides(prev => ({ ...prev, [id]: e.target.value }))}
                                            placeholder="+243 xxx xxx xxx"
                                            disabled={dispatchingWhatsApp}
                                            sx={{
                                              '& input': { py: 0.5, px: 1, fontSize: '0.8rem' },
                                              width: '100%'
                                            }}
                                          />
                                        </TableCell>
                                        <TableCell sx={{ textAlign: 'right' }}>
                                          <Typography variant="body2" sx={{ fontWeight: 700, color: isPartial ? '#b45309' : (isFree ? '#15803d' : '#0f172a') }}>
                                            ${amount}
                                          </Typography>
                                          {isPartial && Number(totalAmount) > Number(balanceDueAmount) && (
                                            <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.72rem', display: 'block' }}>
                                              Total: ${totalAmount}
                                            </Typography>
                                          )}
                                        </TableCell>
                                        <TableCell sx={{ textAlign: 'center' }}>
                                          {renderInvoiceStatusChip(inv.status)}
                                        </TableCell>
                                        <TableCell sx={{ textAlign: 'center' }}>
                                          {prevSent ? (
                                            <Tooltip title={`Previously sent on ${dayjs(prevSent.sentAt).format('DD/MM/YYYY HH:mm')} by ${prevSent.sentBy || 'GG'}`}>
                                              <Chip
                                                size="small"
                                                icon={<HistoryIcon sx={{ fontSize: '12px !important' }} />}
                                                label={`Sent ${dayjs(prevSent.sentAt).format('DD/MM HH:mm')}`}
                                                sx={{ bgcolor: '#ecfdf5', color: '#047857', fontWeight: 600, fontSize: '0.68rem', height: 20 }}
                                              />
                                            </Tooltip>
                                          ) : (
                                            <Typography variant="caption" sx={{ color: '#94a3b8' }}>-</Typography>
                                          )}
                                        </TableCell>
                                      </TableRow>
                                    );
                                  })}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          )}

                          {/* Live Dispatch Progress / Report */}
                          {dispatchingWhatsApp && (
                            <Box sx={{ mt: 2 }}>
                              <Typography variant="body2" sx={{ fontWeight: 600, color: '#166534', mb: 0.5 }}>
                                ⏳ Dispatching invoice PDFs via WhatsApp Web client... Please wait (do not close this window).
                              </Typography>
                              <LinearProgress color="success" />
                            </Box>
                          )}

                          {dispatchResult && (
                            <Alert
                              severity={dispatchResult.success && (!dispatchResult.report?.failed || dispatchResult.report.failed === 0) ? 'success' : (dispatchResult.report?.sent > 0 ? 'warning' : 'error')}
                              sx={{ mt: 2, fontSize: '0.85rem' }}
                            >
                              <strong>{dispatchResult.success && (!dispatchResult.report?.failed || dispatchResult.report.failed === 0) ? '✅ Dispatch Completed:' : (dispatchResult.report?.sent > 0 ? '⚠️ Partial Dispatch Result:' : '❌ Dispatch Failed:')}</strong>
                              {' '}
                              {dispatchResult.report?.sent !== undefined 
                                ? `${dispatchResult.report.sent} sent, ${dispatchResult.report.failed || 0} failed.`
                                : (dispatchResult.error || 'Finished processing.')}
                              {Array.isArray(dispatchResult.report?.details) && dispatchResult.report.details.length > 0 && (
                                <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                  {dispatchResult.report.details.map((d, i) => (
                                    <Chip
                                      key={i}
                                      size="small"
                                      label={`#${d.invoiceNumber}: ${d.status}${d.error ? ` (${d.error})` : ''}`}
                                      color={d.status === 'sent' ? 'success' : 'error'}
                                      variant="outlined"
                                      sx={{ fontSize: '0.72rem' }}
                                    />
                                  ))}
                                </Box>
                              )}
                            </Alert>
                          )}
                        </>
                      ) : (
                        /* Modal Tab 1: Sent History (3-Month Retention) */
                        <>
                          <Alert severity="success" sx={{ mb: 2, fontSize: '0.85rem' }}>
                            <strong>3-Month Auto-Retention:</strong> Dispatched invoices are tracked here with the exact date and time sent. Records are automatically purged after 3 months (90 days) via MongoDB TTL.
                          </Alert>

                          <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <TextField
                              size="small"
                              placeholder="Search history by invoice #, customer name, phone, sent by..."
                              value={historySearchTerm}
                              onChange={(e) => setHistorySearchTerm(e.target.value)}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <SearchIcon sx={{ color: '#94a3b8', fontSize: 20 }} />
                                  </InputAdornment>
                                ),
                                endAdornment: historySearchTerm ? (
                                  <InputAdornment position="end">
                                    <IconButton size="small" onClick={() => setHistorySearchTerm('')}>
                                      <Close sx={{ fontSize: 16 }} />
                                    </IconButton>
                                  </InputAdornment>
                                ) : null
                              }}
                              sx={{ minWidth: 320, flex: 1, backgroundColor: '#fff' }}
                            />
                            <Button
                              size="small"
                              onClick={fetchSentHistory}
                              disabled={loadingHistory}
                              sx={{ textTransform: 'none', ml: 1.5 }}
                            >
                              Refresh History
                            </Button>
                          </Box>

                          {loadingHistory ? (
                            <Box sx={{ py: 4, textAlign: 'center' }}>
                              <Loader />
                              <Typography variant="caption" sx={{ color: '#64748b', mt: 1, display: 'block' }}>
                                Loading dispatched history...
                              </Typography>
                            </Box>
                          ) : historyList.length === 0 ? (
                            <Box sx={{ py: 4, textAlign: 'center', color: '#64748b' }}>
                              <Typography variant="body2">No WhatsApp invoices have been dispatched in the last 3 months.</Typography>
                            </Box>
                          ) : filteredHistoryList.length === 0 ? (
                            <Box sx={{ py: 3, textAlign: 'center', color: '#64748b' }}>
                              <Typography variant="body2">No sent records match your search term "{historySearchTerm}".</Typography>
                            </Box>
                          ) : (
                            <TableContainer component={Paper} variant="outlined" sx={{ maxHeight: 360, borderRadius: 1.5 }}>
                              <Table size="small" stickyHeader>
                                <TableHead>
                                  <TableRow sx={{ '& th': { fontWeight: 700, backgroundColor: '#f1f5f9' } }}>
                                    <TableCell sx={{ width: 140 }}>Date & Time Sent</TableCell>
                                    <TableCell sx={{ width: 110 }}>Invoice #</TableCell>
                                    <TableCell>Customer Name</TableCell>
                                    <TableCell sx={{ width: 150 }}>WhatsApp Phone</TableCell>
                                    <TableCell sx={{ width: 100, textAlign: 'right' }}>Amount</TableCell>
                                    <TableCell sx={{ width: 100, textAlign: 'center' }}>Sent By</TableCell>
                                    <TableCell sx={{ width: 80, textAlign: 'center' }}>Status</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {filteredHistoryList.map((h, idx) => (
                                    <TableRow key={h._id || idx} hover>
                                      <TableCell sx={{ fontSize: '0.8rem', color: '#334155', fontWeight: 600 }}>
                                        {dayjs(h.sentAt).format('DD/MM/YYYY HH:mm')}
                                      </TableCell>
                                      <TableCell sx={{ fontWeight: 700, color: '#0f172a' }}>
                                        INV-{String(h.invoiceNumber).padStart(6, '0')}
                                      </TableCell>
                                      <TableCell sx={{ fontWeight: 600, color: '#1e293b' }}>
                                        {h.customerName}
                                      </TableCell>
                                      <TableCell sx={{ fontSize: '0.82rem', color: '#475569' }}>
                                        {h.phone}
                                      </TableCell>
                                      <TableCell sx={{ textAlign: 'right', fontWeight: 700, color: '#0f172a' }}>
                                        ${Number(h.amount || 0).toFixed(2)}
                                      </TableCell>
                                      <TableCell sx={{ textAlign: 'center', fontSize: '0.8rem', color: '#64748b' }}>
                                        {h.sentBy || 'GG'}
                                      </TableCell>
                                      <TableCell sx={{ textAlign: 'center' }}>
                                        <Chip label="SENT" size="small" sx={{ bgcolor: '#ecfdf5', color: '#047857', fontWeight: 700, height: 20, fontSize: '0.7rem' }} />
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          )}
                        </>
                      )}
                    </DialogContent>

                    <DialogActions sx={{ px: 2, py: 1.5 }}>
                      <Button
                        onClick={() => setOpenWhatsAppModal(false)}
                        disabled={dispatchingWhatsApp}
                        color="inherit"
                        sx={{ textTransform: 'none' }}
                      >
                        {dispatchResult || modalTab === 1 ? 'Close' : 'Cancel'}
                      </Button>
                      {modalTab === 0 && (
                        <Button
                          variant="contained"
                          onClick={handleExecuteWhatsAppDispatch}
                          disabled={dispatchingWhatsApp || selectedWhatsAppInvoiceIds.size === 0}
                          startIcon={<WhatsAppIcon />}
                          sx={{
                            backgroundColor: '#25D366',
                            '&:hover': { backgroundColor: '#1ebe5d' },
                            color: '#fff',
                            fontWeight: 700,
                            textTransform: 'none',
                            px: 2.5
                          }}
                        >
                          {dispatchingWhatsApp ? 'Dispatching...' : `Send ${selectedWhatsAppInvoiceIds.size} Invoice(s) via WhatsApp`}
                        </Button>
                      )}
                    </DialogActions>
                  </Dialog>
                </div>)
            }
          </Container></Box></Box>
    </div>
  )
}

export default InvoiceViewAdmin
