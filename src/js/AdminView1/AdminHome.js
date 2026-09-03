import React, { useEffect, useState } from 'react'
import './view.css'
import SidebarDash from '../component/SidebarDash'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { useDispatch, useSelector } from "react-redux"
import { logOut, selectCurrentUser, setUser } from '../features/auth/authSlice';
import { IconButton, Paper, TextField, Typography, styled, Backdrop, Modal, Box, Grid, Card, CardContent, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import axios from 'axios';
import { cachedGet } from '../utils/apiCache';
import { ENDPOINT_URL } from '../apiConfig';
import Loader from '../component/Loader';
import { useNavigate, NavLink } from 'react-router-dom';
import { isNativeMobile } from '../utils/isMobile';
import MobileDashboard from '../component/MobileDashboard';
import Logout from '../component/NetworkLogoutIcon';
import { AccountBalance, AddCard, BackHandOutlined, Close, GroupAdd, GroupOutlined, GroupRemove, MailOutline, NotificationAdd, Person2Sharp, PersonAddDisabled, PriceChange, Receipt, Sell, ShoppingBagOutlined, ShoppingCart, Square, Storefront } from '@mui/icons-material';
import MessageAdminView from './MessageAdminView';
import NotificationVIewInfo from './NotificationVIewInfo';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import {
  LineChart, LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses,
} from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import MonetizationOn from '@mui/icons-material/MonetizationOn';
import Store from '@mui/icons-material/Store';
import Payment from '@mui/icons-material/Payment';
import { DataGrid } from '@mui/x-data-grid';
import dayjs from 'dayjs';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, timelineItemClasses } from '@mui/lab';
import { axisClasses } from '@mui/x-charts';
import Visibility from '@mui/icons-material/Visibility';
import RevenueExpensesAll from './PageView/DashboardInfo/RevenueExpensesAll';
import PaymentReportInf from './PageView/DashboardInfo/PaymentReportInf';
import DailyExpensesReportInfo from './PageView/DashboardInfo/DailyExpensesReportInfo';
import ItemPurchaseReportInfo from './PageView/DashboardInfo/ItemPurchaseReportInfo';
import PayRollReportInfo from './PageView/DashboardInfo/PayRollReportInfo';
import MaintenanceReportInfo from './PageView/DashboardInfo/MaintenanceReportInfo';
import ProjectReportInfo from './PageView/DashboardInfo/ProjectReportInfo';
import InvoiceReportInfo from './PageView/DashboardInfo/InvoiceReportInfo';
import ItemReportInfo from './PageView/DashboardInfo/ItemReportInfo';
import PosReportInvoice from './PageView/DashboardInfo/PosReportInvoice';
import VatAccountView from './PageView/DashboardInfo/VatAccountView';

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
import './Dashboard.css';

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
const pData1 = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels1 = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];
function AdminHome() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
        try {
          const res = await axios.get(`${ENDPOINT_URL}/get-employeeuser/${storesUserId}`)
          const Name = res.data.data.employeeName;
          const Role = res.data.data.role;
          dispatch(setUser({ userName: Name, role: Role, id: res.data.data._id }));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        navigate('/');
      }
    }
    fetchUser()
  }, [dispatch]);

  // ── BACKUP BEFORE LOGOUT ────────────────────────────────────────
  const [backupDialogOpen, setBackupDialogOpen] = useState(false);
  const [backupLoading, setBackupLoading] = useState(false);
  const [backupDone, setBackupDone] = useState(false);
  const [hasBackupAccess, setHasBackupAccess] = useState(false);
  const [backupProgress, setBackupProgress] = useState({ done: 0, total: 0, phase: '' });

  // Check backup access: GG = god mode, everyone else needs Grant Access
  useEffect(() => {
    const checkBackupAccess = async () => {
      try {
        // localStorage 'user' stores a plain userId string (not JSON)
        const userId = localStorage.getItem('user');
        if (!userId) return;

        // Get userName from Redux store (not localStorage)
        const userName = user?.data?.userName || '';

        // GG account always has backup access (God mode)
        if (userName === 'GG') {
          setHasBackupAccess(true);
          return;
        }

        // For all others: check Grant Access module
        const res = await cachedGet(`${ENDPOINT_URL}/grantAccess`);
        const myAccess = res.data.data.slice().reverse().find(
          a => a.userID === userId
        );

        if (myAccess && Array.isArray(myAccess.modules)) {
          // Module field is 'moduleName' in the Grant Access schema
          const allowed = myAccess.modules.some(m => {
            const name = typeof m === 'string'
              ? m
              : (m?.moduleName || m?.name || m?.module || '');
            return name.toLowerCase().includes('backup');
          });
          setHasBackupAccess(allowed);
        }
      } catch (e) {
        console.log('Backup access check error:', e.message);
      }
    };
    if (user?.data?.userName) {
      checkBackupAccess();
    }
  }, [user?.data?.userName]);

  const doLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/');
  };

  const handleLogout = () => {
    if (hasBackupAccess) {
      setBackupDone(false);
      setBackupDialogOpen(true);
    } else {
      doLogout();
    }
  };

  const handleDownloadBackup = async () => {
    setBackupLoading(true);
    setBackupProgress({ done: 0, total: 0, phase: 'Connecting...' });
    const encoder = new TextEncoder();
    try {
      const BASE = `${ENDPOINT_URL}/backup-export?secret=GG_BACKUP_2026_SECURE`;

      // Step 1: Get collection list (fast — no data)
      const listRes = await axios.get(BASE, { timeout: 30000 });
      const { collections, exportedAt } = listRes.data;
      setBackupProgress({ done: 0, total: collections.length, phase: 'Downloading...' });

      // Step 2: Fetch ALL collections in PARALLEL for speed
      let doneCount = 0;
      const results = await Promise.all(
        collections.map(colName =>
          axios.get(`${BASE}&col=${encodeURIComponent(colName)}`, { timeout: 180000 })
            .then(r => {
              doneCount++;
              setBackupProgress(p => ({ ...p, done: doneCount }));
              return { colName, docs: r.data.data || [] };
            })
        )
      );

      // Step 3: Build JSON as Blob byte-chunks (avoids V8 string length limit)
      setBackupProgress({ done: collections.length, total: collections.length, phase: 'Building file...' });
      const chunks = [];
      chunks.push(encoder.encode(
        `{"exportedAt":"${exportedAt}","database":"globalgatedb","totalCollections":${collections.length},"data":{`
      ));
      let firstCol = true;
      for (const { colName, docs } of results) {
        if (!firstCol) chunks.push(encoder.encode(','));
        firstCol = false;
        chunks.push(encoder.encode(`"${colName}":`));
        chunks.push(encoder.encode(JSON.stringify(docs)));
      }
      chunks.push(encoder.encode('}}'));

      // Step 4: Create Blob and trigger download
      const blob = new Blob(chunks, { type: 'application/json' });
      const url  = URL.createObjectURL(blob);
      const now  = new Date();
      const dateStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
      const a = document.createElement('a');
      a.href     = url;
      a.download = `GlobalGate_Backup_${dateStr}.json`;
      a.click();
      URL.revokeObjectURL(url);

      setBackupDone(true);
      setBackupLoading(false);
      setTimeout(() => { doLogout(); }, 2000);

    } catch (err) {
      setBackupLoading(false);
      setBackupProgress({ done: 0, total: 0, phase: '' });
      const serverMsg = err?.response?.data?.error || err.message;
      alert('Backup failed: ' + serverMsg);
    }
  };
  // ────────────────────────────────────────────────────────────────
  const [payment1, setPayment] = useState([]);
  const [payRoll, setPayRoll] = useState([]);
  const [itemPurchaseInfo, setItemPurchase] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [item, setItem] = useState([]);
  const [category, setCategory] = useState([]);
  const [invoice, setInvoice] = useState([]);
  const [allInvoices, setAllInvoices] = useState([]);
  const [posInvoice, setPosInvoice] = useState([]);
  const [maintenance, setMaintenance] = useState([]);
  const [relatedMaintenance, setRelatedMaintenance] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [employeeAttendance, setAttendance] = useState([]);
  const [notification, setNotification] = useState([]);
  const [purchase, setPurchase] = useState([]);
  const [project, setProject] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [customer1, setCustomer1] = useState([]);
  const [itemsValue, setItemValue] = useState([]);
  const [purchaseOrder, setPurchaseOrder] = useState([]);
  const [systemRate, setSystemRate] = useState(() => {
    try {
      const local = localStorage.getItem('Rate');
      if (local) {
        const rateData = JSON.parse(local);
        const selectedBranch = localStorage.getItem('selectedBranch') || 'HQ';
        const branchRate = rateData.find(r => r.branchId === selectedBranch) || rateData.find(r => r.branchId === 'HQ') || rateData[0];
        const fetchedRate = branchRate?.rate || rateData[0]?.rate;
        if (fetchedRate != null && fetchedRate !== 0) return parseFloat(fetchedRate);
      }
    } catch (e) {}
    return '...'; // Show loading dots instead of 1 so it doesn't flash falsely
  });
  const [date, setDate] = useState(() => {
    const date1 = new Date()
    return date1
  });

  useEffect(() => {
    const fetchAll = async () => {
      // Use cachedGet so repeated dashboard visits reuse cached data instead of re-downloading
      const safeGet = (url) => cachedGet(url).catch(err => {
        console.error(`Error fetching ${url}:`, err);
        return { data: { data: [] } };
      });

      if (!user.data.role) return;


        
        const fetchRateWithRetry = async (retries = 3) => {
          for (let i = 0; i < retries; i++) {
            try {
              const res = await axios.get(`${ENDPOINT_URL}/rate`);
              if (res.data && res.data.data && res.data.data.length > 0) {
                return res.data.data;
              }
            } catch (err) {
              await new Promise(r => setTimeout(r, 1000));
            }
          }
          return null;
        };

        fetchRateWithRetry().then(apiRateData => {
          let rateData = apiRateData;
          if (!rateData || rateData.length === 0) {
            try {
              const local = localStorage.getItem('Rate');
              if (local) rateData = JSON.parse(local);
            } catch(e) {}
          }
          if (rateData && rateData.length > 0) {
            const selectedBranch = localStorage.getItem('selectedBranch') || 'HQ';
            const branchRate = rateData.find(r => r.branchId === selectedBranch) || rateData.find(r => r.branchId === 'HQ') || rateData[0];
            const fetchedRate = branchRate?.rate || rateData[0]?.rate;
            setSystemRate(fetchedRate != null && fetchedRate !== 0 ? parseFloat(fetchedRate) : 1);
          }
        });

      if (user.data.role !== 'CEO') {
        try {
          const [resEmployee, resAttendance] = await Promise.all([
            axios.get(`${ENDPOINT_URL}/employee`),
            axios.get(`${ENDPOINT_URL}/employeeattendance`)
          ]);
          setEmployee(resEmployee.data.data.reverse());
          setAttendance(resAttendance.data?.data?.filter((row) => dayjs(row.timeIn).format('DD/MM/YYYY') === dayjs(date).format('DD/MM/YYYY') && (row.observation === 'P' || row.observation === 'S' || row.observation === 'A' || row.observation === 'H')));
          return;
        } catch (error) {
          console.error('Error fetching non-CEO data:', error);
          return;
        }
      }

      try {
        safeGet(`${ENDPOINT_URL}/customer`).then(resCustomer => {
          const mappedCustomers = resCustomer.data.data.map(item => ({
            ...item,
            id: item._id,
            Customer: item.Customer || item.customerName || item.customerFullName || item.companyName || 'No Customer Name'
          }));
          setCustomer(mappedCustomers.filter(row => parseFloat(row.credit || 0) > 0));
          setCustomer1(mappedCustomers);
        });

        safeGet(`${ENDPOINT_URL}/expense?summary=true`).then(resExpenses => {
          setExpenses(resExpenses.data?.data?.filter(row => dayjs(row.expenseDate).format('YYYY') === dayjs(date).format('YYYY')).map(row => ({
            ...row,
            expenseNumber: row.expenseNumber.toString().padStart(6, '0')
          })));
        });

        safeGet(`${ENDPOINT_URL}/itemPurchase?summary=true`).then(resItemPurchase => {
          setItemPurchase(resItemPurchase.data?.data?.filter(row => dayjs(row.itemPurchaseDate).format('YYYY') === dayjs(date).format('YYYY')).map(row => ({
            ...row,
            itemPurchaseNumber: row.itemPurchaseNumber.toString().padStart(6, '0')
          })));
        });

        safeGet(`${ENDPOINT_URL}/payRoll`).then(resPayRoll => {
          setPayRoll(resPayRoll.data?.data?.filter(row => dayjs(row.month).format('YYYY') === dayjs(date).format('YYYY')).map(row => ({
            ...row,
            payNumber: (row.payNumber || "").toString().padStart(6, '0')
          })));
        });

        safeGet(`${ENDPOINT_URL}/payment`).then(resPayment => {
          setPayment(resPayment.data?.data?.filter(row => dayjs(row.paymentDate).format('YYYY') === dayjs(date).format('YYYY')));
        });


        safeGet(`${ENDPOINT_URL}/pos?summary=true`).then(resPosInvoice => {
          setPosInvoice(resPosInvoice.data?.data?.filter(row => row.status === 'Paid').map(row => ({
            ...row,
            id: row._id,
            factureNumber: 'S-' + (row.factureNumber || "").toString().padStart(6, '0'),
            dateField: dayjs(row.invoiceDate).format('DD/MM/YYYY'),
            infoSell: Math.round(((row.TotalAmountPaid - (row.tax || 0)) / (row.rate || (!isNaN(systemRate) ? systemRate : 1))) * 100) / 100,
            infoCost: (row.items.reduce((sum, ITem) => sum + (ITem.itemQty * ITem.itemCost), 0)) / (row.rate || (!isNaN(systemRate) ? systemRate : 1))
          })).reverse());
        });

        safeGet(`${ENDPOINT_URL}/item`).then(resItem => {
          const ItemInfo = resItem.data.data.map(item => ({
            ...item,
            id: item._id,
            ItemNumber: item.itemUpc.newCode + '-' + item.itemUpc.itemNumber.toString().padStart(6, '0')
          }));
          setItem(ItemInfo.reverse());
        });

        safeGet(`${ENDPOINT_URL}/itemCode`).then(resCode => {
          setCategory(resCode.data.data);
        });

        Promise.all([
          safeGet(`${ENDPOINT_URL}/invoice?summary=true`),
          safeGet(`${ENDPOINT_URL}/purchase?summary=true`)
        ]).then(([resInvoice, resPurchase]) => {
          const processedInvoices = resInvoice.data.data.map(row => ({
            ...row,
            id: row._id,
            invoiceNumber: 'INV-' + (row.invoiceNumber || "").toString().padStart(6, '0'),
            dateField: dayjs(row.invoiceDate).format('DD/MM/YYYY'),
            infoSell: row.totalInvoice,
            infoCost: row.items.reduce((sum, ITem) => sum + (ITem.itemOut * ITem.itemCost), 0),
          })).reverse();
          setAllInvoices(processedInvoices);
          setInvoice(processedInvoices.filter(row => row.status === 'Paid'));

          setPurchase(resPurchase.data.data.map(row => ({
            ...row,
            infoCost: row.items.reduce((sum, ITem) => sum + (ITem.itemOut * ITem.itemCost), 0),
            RelatedInvoice: resInvoice.data?.data?.find(inv => inv.ReferenceName2 === row._id)
          })));
        });

        safeGet(`${ENDPOINT_URL}/maintenance?summary=true`).then(resMaintenance => {
          setMaintenance(resMaintenance.data?.data?.filter(row => row.status === 'Close').map(row => ({
            ...row,
            id: row._id,
            maintenanceNumber: "M-" + (row.maintenanceNumber || row.serviceNumber || "").toString().padStart(6, '0'),
            dateField: dayjs(row.serviceDate).format('DD/MM/YYYY'),
            infoSell: row.subTotal,
            infoCost: row.items.reduce((sum, ITem) => sum + (ITem.itemOut * ITem.itemCost), 0),
          })).reverse());
          setRelatedMaintenance(resMaintenance.data.data);
        });

        safeGet(`${ENDPOINT_URL}/projects`).then(resProject => {
          setProject(resProject.data?.data?.filter(row => row.status === 'Completed').map(row => ({
            ...row,
            id: row._id,
            projectNumber: "P-" + (row.projectNumber || "").toString().padStart(6, '0'),
          })));
        });

        safeGet(`${ENDPOINT_URL}/employee`).then(resEmployee => {
          setEmployee(resEmployee.data.data.reverse());
        });

        safeGet(`${ENDPOINT_URL}/employeeattendance`).then(resAttendance => {
          setAttendance(resAttendance.data?.data?.filter(row => dayjs(row.timeIn).format('DD/MM/YYYY') === dayjs(date).format('DD/MM/YYYY') && (row.observation === 'P' || row.observation === 'S' || row.observation === 'A' || row.observation === 'H')));
        });

        safeGet(`${ENDPOINT_URL}/notification`).then(resNotification => {
          setNotification(resNotification.data?.data?.filter(row => dayjs(row.dateNotification).format('DD/MM/YYYY') === dayjs(date).format('DD/MM/YYYY')).reverse());
        });

      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };
    fetchAll();
  }, [date, user.data.role, dispatch]);

  const fetchValue = async () => {
    try {
      const resItemOutItemReturn = await axios.get(`${ENDPOINT_URL}/item-usage`)
      setItemValue(resItemOutItemReturn.data?.map((item) => ({
        ...item,
        id: item.itemId,
        ItemNumber: item.itemUpc.newCode + '-0' + item.itemUpc.itemNumber
      })))
    } catch (error) {
      console.log(error)
    }
  }
  const payment = [];

  payment1.forEach(row => {
    payment.push({
      _id: row._id,
      paymentNumber: 'PAY-' + row.paymentNumber.toString().padStart(6, '0'),
      customerName: row.customerName,
      paymentDate: row.paymentDate,
      TotalAmount: row.TotalAmount,
      description: row.description,
      PaymentReceivedFC: row.PaymentReceivedFC,
      PaymentReceivedUSD: row.PaymentReceivedUSD,
      remaining: row.remaining,
      amount: row.amount,
      bankCharge: row.bankCharge,
      modes: row.modes,
      tax: row.tax || 0,
      status: row.status || 'Paid',
      transactionType: row.transactionType || 'Invoice',
      paymentMethod: row.paymentMethod || 'Bank Transfer'
    })
  })
  posInvoice.forEach(row => {
    payment.push({
      _id: row._id,
      paymentNumber: row.factureNumber,
      customerName: row.customerName,
      paymentDate: row.invoiceDate,
      TotalAmount: [],
      description: "Shop",
      PaymentReceivedFC: 0,
      PaymentReceivedUSD: 0,
      remaining: 0,
      amount: row.TotalAmountPaid / row.rate,
      bankCharge: 0,
      modes: "",
      tax: row.TaxUSd || 0,
      status: row.status || 'Paid',
      transactionType: 'POS',
      paymentMethod: row.totalPaymentMethod === "Cash" ? "Cash" : "POS"
    })
  })

  const itemPurchase = [];

  itemPurchaseInfo.forEach(row => {
    itemPurchase.push({
      _id: row._id,
      itemPurchaseNumber: 'IP-' + row.itemPurchaseNumber.toString().padStart(6, '0'),
      itemPurchaseDate: row.itemPurchaseDate,
      projectName: row.projectName,
      manufacturer: row.manufacturer,
      manufacturerNumber: row.manufacturerNumber,
      description: row.description,
      totalFC: row.totalFC,
      total: row.total,
      amount: row.totalUSD !== undefined ? row.totalUSD : row.total,
      payments: row.payments || [],
      status: row.status || 'Paid',
      tax: row.tax || 0
    })
  })



  const projectWithAll = project.map((row) => {
    const relatedExpenses = expenses.filter((row2) => row2.accountNameInfo !== undefined ? row2.accountNameInfo._id === row._id : null)
    const relatedPurchase = purchase.filter((row3) => row3.projectName._id === row._id)
    return ({
      ...row,
      expenses: relatedExpenses,
      relatedPurchase,
      totalSell: relatedPurchase.filter((item) => item.RelatedInvoice !== undefined).reduce((sum, item) => sum + (parseFloat(item.RelatedInvoice.totalInvoice) || 0), 0),
      totalExpenses: relatedExpenses?.reduce((sum, item) => sum + (parseFloat(item.total) || 0), 0),
      totalItemCost: relatedPurchase?.reduce((sum, item) => sum + (parseFloat(item.infoCost) || 0), 0)
    })
  })
  const filterInvoice = invoice.filter((row) =>
    !purchase.some((Item) => Item._id === row.ReferenceName2) && !relatedMaintenance.some((Item2) => Item2.ReferenceName === row._id && Item2._id === row.ReferenceName)
  )

  const totalSellInvoice = filterInvoice.length > 0 ? filterInvoice.reduce((sum, item) => sum + (parseFloat(item.infoSell) || 0), 0) : 0
  const totalCostInvoice = filterInvoice.length > 0 ? filterInvoice.reduce((sum, item) => sum + (parseFloat(item.infoCost) || 0), 0) : 0
  const invoiceRevenue = totalSellInvoice - totalCostInvoice

  const totalPOSSellInvoice = posInvoice.length > 0 ? posInvoice.reduce((sum, item) => sum + (parseFloat(item.infoSell) || 0), 0) : 0
  const totalPOSCostInvoice = posInvoice.length > 0 ? posInvoice.reduce((sum, item) => sum + (parseFloat(item.infoCost) || 0), 0) : 0
  const invoicePOSRevenue = totalPOSSellInvoice - totalPOSCostInvoice



  const projectCostInfo = projectWithAll.length > 0 ? projectWithAll.reduce((acc, row) => { return acc + row.relatedPurchase.reduce((sum, item) => sum + (parseFloat(item.infoCost) || 0), 0) }, 0) : 0
  const projectExpensesInfo = projectWithAll.length > 0 ? projectWithAll.reduce((acc, row) => { return acc + row.expenses.reduce((sum, item) => sum + (parseFloat(item.total) || 0), 0) }, 0) : 0
  const projectSellInfo = projectWithAll.length > 0 ? projectWithAll.reduce((acc, row) => { return acc + row.relatedPurchase.filter((item) => item.RelatedInvoice !== undefined).reduce((sum, item) => sum + (parseFloat(item.RelatedInvoice.totalInvoice) || 0), 0) }, 0) : 0
  const projectRevenue = projectSellInfo - (projectCostInfo + projectExpensesInfo)


  const totalMaintenanceRevenue = maintenance.length > 0 ? maintenance.reduce((acc, row) => { return acc + row.items.reduce((sum, item) => sum + (parseFloat(item.itemAmount) || 0), 0) }, 0) : 0
  const totalMaintenanceCost = maintenance.length > 0 ? maintenance.reduce((acc, row) => { return acc + row.items.reduce((sum, item) => sum + (parseFloat(item.totalCostInfo) || 0), 0) }, 0) : 0
  const totalMaintenanceLaborFees = maintenance.filter((row) => row.totalLaborFeesGenerale !== undefined).reduce((sum, row) => sum + (parseFloat(row.totalLaborFeesGenerale) || 0), 0)


  const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  //Month Payment Start
  const TotalMonthPayment = payment ? payment.filter(item => {
    if (item.status === 'Voided') return false;
    
    // Business Rule: Advanced Payment (Credit) does not count as Cash In until applied to an invoice
    const isAdvancedPayment = (item.transactionType !== 'POS') && (item.TotalAmount?.length === 0 || !item.TotalAmount) && (parseFloat(item.remaining || item.credit || 0) > 0);
    if (isAdvancedPayment) return false;

    return dayjs(item.paymentDate).format('YYYY') === dayjs(date).format('YYYY');
  }).reduce((acc, item) => {
    const month = dayjs(item.paymentDate).format('MMMM');
    if (!acc[month]) {
      acc[month] = { month, amount: 0 }
    }
    
    // Business Rule: Use sum of applied amounts (TotalAmount) instead of gross amount (item.amount)
    // to ensure 'Credit' (unapplied balance) is not counted in Cash In.
    const appliedTotal = (item.TotalAmount?.length > 0) 
      ? item.TotalAmount.reduce((s, it) => s + parseFloat(it.total || it.amount || 0), 0)
      : parseFloat(item.amount || 0);

    const val = isFinite(appliedTotal) ? appliedTotal : 0;
    acc[month].amount += item.transactionType === 'Refund' ? -val : val;
    return acc;
  }, {}) : ''
  const newMonthArrayPayment = (Object.entries(TotalMonthPayment).map(([month, total]) => ({
    month: total.month, total: parseFloat((total.amount || 0).toFixed(2))
  })))
  const sortArrayByMonthPayment = newMonthArrayPayment.sort((a, b) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months.indexOf(a.month) - months.indexOf(b.month)
  })


  //Month Payment End
  //Daily Expenses Start
  const TotalMonthDailyExpenses = expenses ? expenses.filter(item => dayjs(item.expenseDate).format('YYYY') === dayjs(date).format('YYYY')).reduce((acc, item) => {
    const month = dayjs(item.expenseDate).format('MMMM');
    if (!acc[month]) {
      acc[month] = { month, total: 0 }
    }
    acc[month].total += parseFloat(item.total)
    return acc
  }, {}) : ''
  const newMonthArrayDailyExpenses = (Object.entries(TotalMonthDailyExpenses).map(([month, total]) => ({
    month: total.month, total: parseFloat((total.total || 0).toFixed(2))
  })))
  const sortArrayByMonthDailyExpenses = newMonthArrayDailyExpenses.sort((a, b) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months.indexOf(a.month) - months.indexOf(b.month)
  })
  const totalDailyExpenses = sortArrayByMonthDailyExpenses.reduce((sum, row) => sum + row.total, 0)


  //Daily Expenses End
  //PayRoll Start
  const TotalMonthPayRoll = payRoll ? payRoll.filter(item => dayjs(item.month).format('YYYY') === dayjs(date).format('YYYY')).reduce((acc, item) => {
    const month = dayjs(item.month).format('MMMM');
    if (!acc[month]) {
      acc[month] = { month, totalPaidDollars: 0 }
    }
    acc[month].totalPaidDollars += parseFloat(item.totalPaidDollars)
    return acc
  }, {}) : ''
  const newMonthArrayPayRoll = (Object.entries(TotalMonthPayRoll).map(([month, total]) => ({
    month: total.month, total: parseFloat(total.totalPaidDollars.toFixed(2))
  })))
  const sortArrayByMonthPayRoll = newMonthArrayPayRoll.sort((a, b) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months.indexOf(a.month) - months.indexOf(b.month)
  })
  const totalPayRoll = sortArrayByMonthPayRoll.reduce((sum, row) => sum + row.total, 0);
  //PayRoll End
  //Item Purchase Start
  const TotalMonthItemPurchase = itemPurchase ? itemPurchase.filter(item => dayjs(item.itemPurchaseDate).format('YYYY') === dayjs(date).format('YYYY')).reduce((acc, item) => {
    const month = dayjs(item.itemPurchaseDate).format('MMMM');
    if (!acc[month]) {
      acc[month] = { month, total: 0 }
    }
    acc[month].total += parseFloat(item.totalUSD || item.total || item.amount || 0);
    return acc
  }, {}) : ''
  const newMonthArrayItemPurchase = (Object.entries(TotalMonthItemPurchase).map(([month, total]) => ({
    month: total.month, total: parseFloat(total.total.toFixed(2))
  })))
  const sortArrayByMonth = newMonthArrayItemPurchase.sort((a, b) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months.indexOf(a.month) - months.indexOf(b.month)
  })
  const totalItemPurchase = sortArrayByMonth.reduce((sum, row) => sum + row.total, 0);

  const TotalMonthPaidItemPurchase = itemPurchase ? itemPurchase.reduce((acc, item) => {
    const hasPayments = (item.payments || []).length > 0;
    if (hasPayments) {
      item.payments.forEach(p => {
        if (dayjs(p.date).format('YYYY') !== dayjs(date).format('YYYY')) return;
        const month = dayjs(p.date).format('MMMM');
        if (!acc[month]) {
          acc[month] = { month, total: 0 }
        }
        const rateToUse = parseFloat(p.rate || (!isNaN(systemRate) ? systemRate : 1));
        const pAmount = parseFloat(p.totalUSD || (parseFloat(p.amount || 0) + (parseFloat(p.amountFC || 0) / rateToUse)) || 0);
        acc[month].total += pAmount;
      });
    } else if (item.status === 'PAID' || item.status === 'Paid') {
      // Legacy Fallback for older records with no payment log
      if (dayjs(item.itemPurchaseDate).format('YYYY') === dayjs(date).format('YYYY')) {
        const month = dayjs(item.itemPurchaseDate).format('MMMM');
        if (!acc[month]) {
          acc[month] = { month, total: 0 }
        }
        acc[month].total += parseFloat(item.amount || 0);
      }
    }
    return acc;
  }, {}) : {}
  const newMonthArrayPaidItemPurchase = (Object.entries(TotalMonthPaidItemPurchase).map(([month, total]) => ({
    month: total.month, total: parseFloat(total.total.toFixed(2))
  })))
  const sortArrayByMonthPaidItemPurchase = newMonthArrayPaidItemPurchase.sort((a, b) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months.indexOf(a.month) - months.indexOf(b.month)
  })


  // VAT Calculations
  const getVatValue = (item) => {
    const hasTva = item.CheckTvA || item.checkTvA || item.CheckTva || item.hasTVA || item.tva || item.TVA;
    const tax = item.tax || item.taxAmount || item.vatAmount || item.TvaAmount || item.taxUSD || 0;
    if (tax > 0) return tax;
    if (hasTva) {
      const totalVal = item.totalUSD !== undefined ? item.totalUSD : item.total !== undefined ? item.total : item.amount;
      return (Number(totalVal) * 0.16);
    }
    return 0;
  };
  const vatCollected = (payment || []).filter(p => p.status !== 'Voided').reduce((sum, p) => sum + getVatValue(p), 0);
  const vatPaidExpenses = (expenses || []).reduce((sum, e) => sum + getVatValue(e), 0);
  const vatPaidPurchases = (itemPurchase || []).filter(p => p.status !== 'Voided').reduce((sum, p) => sum + getVatValue(p), 0);
  const vatPaid = vatPaidExpenses + vatPaidPurchases;
  const netVat = vatCollected - vatPaid;

  // Credit Accounts Calculations (monthly net credit activity in the selected year)
  const monthlyCreditChanges = monthsOfYear.reduce((acc, month) => {
    acc[month] = 0;
    return acc;
  }, {});

  if (payment) {
    payment.forEach(item => {
      if (item.status === 'Voided') return;
      if (dayjs(item.paymentDate).format('YYYY') !== dayjs(date).format('YYYY')) return; // Filter by selected year
      const monthName = dayjs(item.paymentDate).format('MMMM');
      if (item.modes === 'Credit' || (item.modes === 'Cash' && parseFloat(item.remaining || 0) > 0) || (item.modes === 'Bank Transfer' && parseFloat(item.remaining || 0) > 0)) {
        monthlyCreditChanges[monthName] += parseFloat(item.remaining || 0);
      } else if (item.modes === 'Credit-Account') {
        monthlyCreditChanges[monthName] -= parseFloat(item.amount || 0);
      }
    });
  }

  // Monthly credit accounts for each month of the selected year:
  const sortArrayByMonthCreditAccounts = monthsOfYear.map(month => {
    const val = monthlyCreditChanges[month] || 0;
    return { month, total: parseFloat(val.toFixed(2)) };
  });

  const totalCreditAccounts = Object.values(monthlyCreditChanges).reduce((sum, val) => sum + val, 0);

  // --- Synchronized Financial Metrics (Phase 74) ---

  // 1. REVENUE (Accrual Basis - Total Invoice Amount)
  const TotalMonthAllInvoices = allInvoices ? allInvoices.filter(item => item.status && !['Draft', 'Decline', 'Void', 'Free of Charge'].includes(item.status) && dayjs(item.invoiceDate).format('YYYY') === dayjs(date).format('YYYY')).reduce((acc, item) => {
    const month = dayjs(item.invoiceDate).format('MMMM');
    if (!acc[month]) {
      acc[month] = { month, total: 0 }
    }
    acc[month].total += parseFloat(item.totalInvoice || 0)
    return acc
  }, {}) : {}
  const TotalMonthPOS = posInvoice ? posInvoice.filter(item => dayjs(item.invoiceDate).format('YYYY') === dayjs(date).format('YYYY')).reduce((acc, item) => {
    const month = dayjs(item.invoiceDate).format('MMMM');
    if (!acc[month]) {
      acc[month] = { month, total: 0 }
    }
    acc[month].total += parseFloat((item.totalInvoice || item.TotalAmountPaid || 0) / (item.rate || (!isNaN(systemRate) ? systemRate : 1)))
    return acc
  }, {}) : {}

  const mergedRevenueArrays = (arr1, arr2) => {
    const merged = {};
    Object.values(arr1).forEach(item => {
      if (!merged[item.month]) { merged[item.month] = { ...item, total: 0 } }
      merged[item.month].total += parseFloat(item.total)
    });
    Object.values(arr2).forEach(item => {
      if (!merged[item.month]) { merged[item.month] = { ...item, total: 0 } }
      merged[item.month].total += parseFloat(item.total)
    });
    return Object.values(merged);
  }

  const sortArrayByMonthRevenue = mergedRevenueArrays(TotalMonthAllInvoices, TotalMonthPOS)
    .sort((a, b) => {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      return months.indexOf(a.month) - months.indexOf(b.month)
    })
  const totalRevenue = sortArrayByMonthRevenue.reduce((sum, row) => sum + (parseFloat(row.total) || 0), 0)

  // 2. CASH REVENUE (For Net Income - Total Payments Received)
  const TotalMonthAllPayments = allInvoices ? allInvoices.filter(item => item.status && !['Draft', 'Decline', 'Void', 'Free of Charge'].includes(item.status) && dayjs(item.invoiceDate).format('YYYY') === dayjs(date).format('YYYY')).reduce((acc, item) => {
    const month = dayjs(item.invoiceDate).format('MMMM');
    if (!acc[month]) {
      acc[month] = { month, total: 0 }
    }
    acc[month].total += parseFloat(item.total || 0)
    return acc
  }, {}) : {}
  const TotalMonthPOSCash = posInvoice ? posInvoice.filter(item => dayjs(item.invoiceDate).format('YYYY') === dayjs(date).format('YYYY')).reduce((acc, item) => {
    const month = dayjs(item.invoiceDate).format('MMMM');
    if (!acc[month]) {
      acc[month] = { month, total: 0 }
    }
    acc[month].total += parseFloat(item.TotalAmountPaid / (item.rate || (!isNaN(systemRate) ? systemRate : 1)))
    return acc
  }, {}) : {}

  const sortArrayByMonthCashRevenueNet = mergedRevenueArrays(TotalMonthAllPayments, TotalMonthPOSCash)
    .sort((a, b) => {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      return months.indexOf(a.month) - months.indexOf(b.month)
    })
  const totalCashRevenueForNet = sortArrayByMonthCashRevenueNet.reduce((sum, row) => sum + row.total, 0)

  // 3. EXPENSES (Accrual) and CASH OUT (Cash Basis)
  const mergeArrays = (arr1, arr2, arr3) => {
    const merged = {};
    [arr1, arr2, arr3].forEach(arr => {
      arr.forEach(item => {
        if (!merged[item.month]) {
          merged[item.month] = { ...item, total: 0 }
        }
        merged[item.month].total += parseFloat(item.total)
      })
    })
    return Object.values(merged)
  }
  const mergedArray = mergeArrays(sortArrayByMonthDailyExpenses, sortArrayByMonthPayRoll, sortArrayByMonth)
  const sortArrayByMonthTotalExpensesAll = mergedArray.sort((a, b) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months.indexOf(a.month) - months.indexOf(b.month)
  })
  const totalExpenses = sortArrayByMonthTotalExpensesAll.reduce((sum, row) => sum + (parseFloat(row.total) || 0), 0);

  const mergedArrayCashOut = mergeArrays(sortArrayByMonthDailyExpenses, sortArrayByMonthPayRoll, sortArrayByMonthPaidItemPurchase)
  const sortArrayByMonthTotalCashOutAll = mergedArrayCashOut.sort((a, b) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months.indexOf(a.month) - months.indexOf(b.month)
  })
  const totalCashOut = sortArrayByMonthTotalCashOutAll.reduce((sum, row) => sum + (parseFloat(row.total) || 0), 0);

  // 4. FINAL SUMS
  const netIncome = totalRevenue - totalExpenses; // Accrual-basis Net Income

  const TotalMonthPaymentStandard = sortArrayByMonthPayment.reduce((acc, item) => {
    acc[item.month] = item;
    return acc;
  }, {});
  // Cash In = Dashboard Payment Collection (already includes POS Shop Payments)
  const sortArrayByMonthCashIn = sortArrayByMonthPayment;
  const totalCashIn = sortArrayByMonthCashIn.reduce((sum, row) => sum + (parseFloat(row.total) || 0), 0);
  const grossCashFlow = totalCashIn - totalCashOut;

  // --- Normalizing arrays for Line Chart ---
  const normalizeSortArrayByMonthRevenue = monthsOfYear.map((moth) => {
    const related = sortArrayByMonthRevenue.find((row) => row.month === moth)
    return { month: moth, total: related ? related.total : 0 }
  })
  const normalizeSortArrayByMonthTotalExpensesAllChart = monthsOfYear.map((moth) => {
    const related = sortArrayByMonthTotalExpensesAll.find((row) => row.month === moth)
    return { month: moth, total: related ? related.total : 0 }
  })
  const normalizeSortArrayByMonthCashRevenueNetChart = monthsOfYear.map((moth) => {
    const related = sortArrayByMonthCashRevenueNet.find((row) => row.month === moth)
    return { month: moth, total: related ? related.total : 0 }
  })
  const normalizeSortArrayByMonthCashInChart = monthsOfYear.map((moth) => {
    const related = sortArrayByMonthCashIn.find((row) => row.month === moth)
    return { month: moth, total: related ? related.total : 0 }
  })
  const normalizeSortArrayByMonthCashOutChart = monthsOfYear.map((moth) => {
    const related = sortArrayByMonthTotalCashOutAll.find((row) => row.month === moth)
    return { month: moth, total: related ? related.total : 0 }
  })
  const normalizeSortArrayByMonthDailyExpensesChart = monthsOfYear.map((moth) => {
    const related = sortArrayByMonthDailyExpenses.find((row) => row.month === moth)
    return { month: moth, total: related ? related.total : 0 }
  })
  const normalizeSortArrayByMonthItemPurchaseChart = monthsOfYear.map((moth) => {
    const related = sortArrayByMonth.find((row) => row.month === moth)
    return { month: moth, total: related ? related.total : 0 }
  })
  const normalizeSortArrayByMonthPayRollChart = monthsOfYear.map((moth) => {
    const related = sortArrayByMonthPayRoll.find((row) => row.month === moth)
    return { month: moth, total: related ? related.total : 0 }
  })

  // Data mapping for Pie Chart & Cards
  const data = [
    { label: 'Revenue', value: totalRevenue, color: 'green' },
    { label: 'Expenses', value: totalExpenses, color: 'red' },
    { label: 'Net Income', value: netIncome, color: 'blue' },
    { label: 'Cash In', value: totalCashIn, color: 'lightgreen' },
    { label: 'Cash Out', value: totalCashOut, color: 'lightcoral' },
    { label: 'Gross Cash Flow', value: grossCashFlow, color: 'orange' },
    { label: 'Credit Accounts', value: totalCreditAccounts, color: '#0d47a1' },
  ];
  const data2 = [
    { label: 'Total Sell', value: totalMaintenanceRevenue },
    { label: 'Total Cost', value: totalMaintenanceCost },
    { label: 'Labor Fees', value: totalMaintenanceLaborFees },
    { label: 'Total Gain', value: totalMaintenanceRevenue - totalMaintenanceCost },
  ];
  const data3 = [
    { label: 'Total Sell', value: projectSellInfo },
    { label: 'Total Expenses', value: projectExpensesInfo },
    { label: 'Total Item Cost', value: projectCostInfo },
    { label: 'Total Gain', value: projectRevenue },
  ];
  const data4 = [
    { label: 'Total Sell', value: totalSellInvoice },
    { label: 'Total Cost', value: totalCostInvoice },
    { label: 'Revenue', value: invoiceRevenue },
  ];
  const data5 = [
    { label: 'Total Sell', value: totalPOSSellInvoice },
    { label: 'Total Cost', value: totalPOSCostInvoice },
    { label: 'Revenue', value: invoicePOSRevenue },
  ];

  const palette = ['green', 'red', 'blue', 'lightgreen', 'lightcoral', 'orange', '#0d47a1'];
  const palette2 = ['blue', 'red', 'orange', 'green'];
  const palette3 = ['blue', 'red', '#643047', 'green'];
  const palette1 = ['green', 'red', 'blue', 'lightgreen', 'lightcoral', 'orange', '#0d47a1'];

  //ItemPurchase End
  const totalItem = item.filter((row) => row.typeItem === 'Goods')
  const totalOut = item.filter((row) => row.itemQuantity === 0)

  const Employed = employee.filter((row) => row.status === "Employed" || row.status === "Suspended")
  const EmployedFired = employee.filter((row) => row.status === "Fired")
  const EmployedResign = employee.filter((row) => row.status === "Resign")

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const columnsItemOut = [
    { field: 'ItemNumber', headerName: '#', width: 80 },
    { field: 'itemName', headerName: 'Item Name', width: open ? 250 : 250, renderCell: (params) => params.row.itemName.toUpperCase() },
    { field: 'balanceQty', headerName: 'Total Sell', width: open ? 120 : 100, renderCell: (params) => params.row.balanceQty?.toFixed(2) },
    { field: 'Sell', headerName: 'Sell Rate', width: 100, renderCell: (params) => `$${params.row.Sell?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'Value', headerName: 'Value', width: 150, renderCell: (params) => parseFloat(params.row.balanceQty * params.row.Sell).toFixed(2) }
  ]
  const columnMaintenance = [
    { field: 'serviceNumber', headerName: 'Service#', width: 80 },
    { field: 'dateField', headerName: 'Service Date', width: 100 },
    { field: 'customer', headerName: 'Customer Name', width: open ? 200 : 260, valueGetter: (params) => params.row.customerName.customerName },
    { field: 'defectDescription', headerName: 'Defect', width: open ? 130 : 200 },
    { field: 'infoSell', headerName: 'Total Sell', width: 150, renderCell: (params) => `$${parseFloat(params.row.infoSell)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'infoCost', headerName: 'Total Cost', width: 150, renderCell: (params) => `$${params.row.infoCost?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'revenue', headerName: 'Revenue', width: 150, renderCell: (params) => `$${parseFloat(parseFloat(params.row.infoSell) - params.row.infoCost)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'totalLaborFeesGenerale', headerName: 'Labor Fees', width: 150, renderCell: (params) => `$${params.row.totalLaborFeesGenerale !== undefined ? params.row.totalLaborFeesGenerale.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 'Undefined'}` },
    {
      field: 'view', headerName: 'View', width: 50, renderCell: (params) => (
        <ViewTooltip title="View">
          <span>
            <IconButton disabled={user.data.role === 'User'}>
              <NavLink to={`/MaintenanceViewInformation/${params.row._id}`} className='LinkName'>
                <Visibility style={{ color: '#202a5a' }} />
              </NavLink>
            </IconButton>
          </span>
        </ViewTooltip>

      )
    }
  ]
  const columnProject = [
    { field: 'customer', headerName: 'Customer Name', width: open ? 200 : 240, valueGetter: (params) => params.row.customerName?.customerName || 'No Customer' },
    { field: 'projectName', headerName: 'Project Name', width: open ? 200 : 240 },
    { field: 'description', headerName: 'Description', width: open ? 150 : 240 },
    { field: 'sell', headerName: 'Total Sell', width: 150, renderCell: (params) => params.row.relatedPurchase?.map((item) => item.RelatedInvoice ? 'INV-' + item.RelatedInvoice.invoiceNumber + ' / $' + item.RelatedInvoice.totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0) },
    { field: 'cost', headerName: 'Total Item Cost', width: 150, renderCell: (params) => params.row.relatedPurchase?.map((item) => 'PUR-' + item.purchaseNumber + ' / $' + item.infoCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) },
    { field: 'totalExpenses', headerName: 'Total Expenses', width: 150, renderCell: (params) => `$${params.row.totalExpenses?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'Gain', headerName: 'Revenue', width: 100, renderCell: (params) => params.row.relatedPurchase?.map((item) => item.RelatedInvoice ? '$' + parseFloat(item.RelatedInvoice.totalInvoice - (Number(item.infoCost) + Number(params.row.totalExpenses)))?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0) },
    {
      field: 'view', headerName: 'View', width: 50, renderCell: (params) => (
        <ViewTooltip title="View">
          <span>
            <IconButton disabled={user.data.role === 'User'}>
              <NavLink to={`/ProjectInfo/${params.row._id}`} className='LinkName'>
                <Visibility style={{ color: '#202a5a' }} />
              </NavLink>
            </IconButton>
          </span>
        </ViewTooltip>

      )
    }
  ]
  const columnInvoice = [
    { field: 'invoiceNumber', headerName: 'Invoice#', width: 80 },
    { field: 'dateField', headerName: 'Invoice Date', width: 100 },
    { field: 'customer', headerName: 'Customer Name', width: open ? 200 : 260, valueGetter: (params) => params.row.customerName.customerName },
    { field: 'invoiceSubject', headerName: 'Defect', width: open ? 130 : 200 },
    { field: 'total', headerName: 'A-Paid', width: 150, renderCell: (params) => `$${params.row.total?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'infoSell', headerName: 'Total Sell', width: 150, renderCell: (params) => `$${params.row.infoSell?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'infoCost', headerName: 'Total Cost', width: 150, renderCell: (params) => `$${params.row.infoCost?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'revenue', headerName: 'Revenue', width: 150, renderCell: (params) => `$${parseFloat(params.row.infoSell - params.row.infoCost)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    {
      field: 'view', headerName: 'View', width: 50, renderCell: (params) => (
        <ViewTooltip title="View">
          <span>
            <IconButton disabled={user.data.role === 'User'}>
              <NavLink to={`/InvoiceViewAdminAll/${params.row._id}`} className='LinkName'>
                <Visibility style={{ color: '#202a5a' }} />
              </NavLink>
            </IconButton>
          </span>
        </ViewTooltip>
      )
    }
  ]
  const columnPOSInvoice = [
    { field: 'factureNumber', headerName: 'Invoice#', width: 80 },
    { field: 'dateField', headerName: 'Invoice Date', width: 100 },
    { field: 'time', headerName: 'Time', width: 100, valueGetter: (params) => dayjs(params.row.invoiceDate).format('HH:mm') },
    { field: 'customer', headerName: 'Customer Name', width: open ? 250 : 260, valueGetter: (params) => params.row.customerName.customerName },
    { field: 'totalInvoice', headerName: 'Invoice Amount', width: 150, renderCell: (params) => `$${(params.row.totalInvoice / params.row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'infoSell', headerName: 'Total Paid', width: 150, renderCell: (params) => `$${params.row.infoSell?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'infoCost', headerName: 'Total Cost', width: 150, renderCell: (params) => `$${params.row.infoCost?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'revenue', headerName: 'Revenue', width: 150, renderCell: (params) => `$${parseFloat(params.row.infoSell - params.row.infoCost)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` }
  ]
  const columnCustomer = [
    { field: 'customer', headerName: 'Customer Name', width: open ? 160 : 220, valueGetter: (params) => params.row.Customer },
    { field: 'credit', headerName: 'Credit', width: 100, renderCell: (params) => `$${params.row.credit?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    {
      field: 'view', headerName: 'View', width: 40, renderCell: (params) => (
        <ViewTooltip title="View">
          <span>
            <IconButton disabled={user.data.role === 'User'}>
              <NavLink to={`/CustomerInformationView/${params.row._id}`} className='LinkName'>
                <Visibility style={{ color: '#202a5a' }} />
              </NavLink>
            </IconButton>
          </span>
        </ViewTooltip>
      )
    }
  ]
  const [monthAllRevenueExpenses, setMonthAllRevenueExpenses] = useState('');
  const [showInfo, setShowInfo] = useState(1);
  const [infoName, setInfoName] = useState('')
  const [metricType, setMetricType] = useState('All');
  const handleClick = (e, monthI, type = 'All') => {
    setShowInfo(e)
    if (monthI && monthI.axisValue) {
      setMonthAllRevenueExpenses(monthI.axisValue)
    }
    if (monthI) {
      setInfoName(monthI)
    }
    setMetricType(type)
  }

  const isMobile = isNativeMobile();
  if (isMobile) {
    return <MobileDashboard />;
  }

  return (
    <div className='Homeemployee'>
      {user.loading ? (<div style={{
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: 24,
        width: 400,
        textAlign: 'center',
        backgroundColor: 'white',
        boxShadow: 24,
      }}>
        <div style={{ padding: '5px' }}>
          <Loader />
        </div>
      </div>) : (
        <div className='Homeemployee'>
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="absolute" open={open} sx={{ backgroundColor: '#30368a' }}>
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
                    ...(open && { display: 'none' }),

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
                  Dashboard
                </Typography>
                <NotificationVIewInfo />
                <MessageAdminView name={user.data.userName} role={user.data.role} />
                <IconButton color="inherit" onClick={handleLogout} title="Logout">
                  <Logout style={{ color: 'white' }} />
                </IconButton>

                {/* ── BACKUP BEFORE LOGOUT DIALOG ─────────────────── */}
                {backupDialogOpen && (
                  <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                    background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)',
                    zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <div style={{
                      background: 'linear-gradient(135deg, #1a1f3a 0%, #252b4a 100%)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '20px', padding: '40px 48px', maxWidth: '440px', width: '90%',
                      boxShadow: '0 25px 60px rgba(0,0,0,0.5)', textAlign: 'center', color: 'white'
                    }}>
                      {/* Icon */}
                      <div style={{
                        width: '72px', height: '72px', borderRadius: '50%',
                        background: 'linear-gradient(135deg, #4f8ef7, #7c4dff)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 24px', fontSize: '32px',
                        boxShadow: '0 8px 24px rgba(79,142,247,0.4)'
                      }}>💾</div>

                      {backupDone ? (
                        <>
                          <h2 style={{ margin: '0 0 10px', fontSize: '22px', color: '#4ade80' }}>✅ Backup Downloaded!</h2>
                          <p style={{ margin: '0 0 24px', color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
                            Logging you out now...
                          </p>
                        </>
                      ) : (
                        <>
                          <h2 style={{ margin: '0 0 10px', fontSize: '22px', fontWeight: 700 }}>Backup Before Logout?</h2>
                          <p style={{ margin: '0 0 28px', color: 'rgba(255,255,255,0.65)', fontSize: '14px', lineHeight: 1.6 }}>
                            Do you want to download a full database backup before logging out?
                          </p>

                          {backupLoading ? (
                            <div style={{ color: '#4f8ef7', fontSize: '15px', padding: '12px 0', textAlign: 'center' }}>
                              <div style={{
                                width: '36px', height: '36px', border: '3px solid rgba(79,142,247,0.3)',
                                borderTop: '3px solid #4f8ef7', borderRadius: '50%',
                                animation: 'spin 1s linear infinite', margin: '0 auto 10px'
                              }} />
                              <div style={{ fontWeight: 600, marginBottom: '6px' }}>
                                {backupProgress.phase || 'Preparing backup...'}
                              </div>
                              {backupProgress.total > 0 && (
                                <>
                                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', marginBottom: '8px' }}>
                                    {backupProgress.done} / {backupProgress.total} collections
                                  </div>
                                  <div style={{ width: '200px', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', margin: '0 auto' }}>
                                    <div style={{
                                      width: `${Math.round((backupProgress.done / backupProgress.total) * 100)}%`,
                                      height: '100%', background: 'linear-gradient(90deg,#4f8ef7,#7c4dff)',
                                      borderRadius: '3px', transition: 'width 0.3s'
                                    }} />
                                  </div>
                                </>
                              )}
                            </div>
                          ) : (
                            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center' }}>
                              {/* YES - Download Backup */}
                              <button onClick={handleDownloadBackup} style={{
                                background: 'linear-gradient(135deg, #4f8ef7, #7c4dff)',
                                border: 'none', borderRadius: '12px', color: 'white',
                                padding: '13px 28px', fontSize: '15px', fontWeight: 600,
                                cursor: 'pointer', boxShadow: '0 4px 16px rgba(79,142,247,0.4)',
                                transition: 'transform 0.15s',
                              }}
                              onMouseEnter={e => e.target.style.transform='scale(1.05)'}
                              onMouseLeave={e => e.target.style.transform='scale(1)'}>
                                💾 Yes, Download
                              </button>

                              {/* NO - Just Logout */}
                              <button onClick={doLogout} style={{
                                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                                borderRadius: '12px', color: 'rgba(255,255,255,0.8)',
                                padding: '13px 28px', fontSize: '15px', fontWeight: 600,
                                cursor: 'pointer', transition: 'transform 0.15s',
                              }}
                              onMouseEnter={e => e.target.style.transform='scale(1.05)'}
                              onMouseLeave={e => e.target.style.transform='scale(1)'}>
                                No, Logout
                              </button>

                              {/* Cancel */}
                              <button onClick={() => setBackupDialogOpen(false)} style={{
                                background: 'transparent', border: 'none',
                                color: 'rgba(255,255,255,0.4)', fontSize: '22px',
                                cursor: 'pointer', position: 'absolute', top: '16px', right: '16px',
                                lineHeight: 1
                              }}>✕</button>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                  </div>
                )}
                {/* ─────────────────────────────────────────────────── */}
              </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
              <Toolbar
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  px: [1]
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
              <Container maxWidth="none" sx={{ mt: 4 }}>
                <div >
                  {user.data.role === 'CEO' ?
                    <div style={{ width: '100%' }}>
                      {
                        showInfo === 1 ?
                          <Grid container spacing={3}>
                            {/* Top Section: Main Multi-Line Financial Chart */}
                            <Grid item xs={12} lg={8}>
                              <Card sx={{ width: '100%', borderRadius: '16px', boxShadow: '0 4px 20px -2px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0', p: 2.5, backgroundColor: '#ffffff' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                  <div>
                                    <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0f172a' }}>Financial Performance & Cash Flow</Typography>
                                    <Typography sx={{ fontSize: '0.85rem', color: '#64748b' }}>Monthly accrual revenue, operating expenses, cash collections, and net flow</Typography>
                                  </div>
                                  <span style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', backgroundColor: '#e0e7ff', color: '#3730a3' }}>
                                    Year {dayjs(date).format('YYYY')}
                                  </span>
                                </div>
                                <div style={{ width: '100%', overflowX: 'auto' }}>
                                  <LineChart
                                    width={open ? 680 : 820}
                                    height={330}
                                    series={[
                                      { data: normalizeSortArrayByMonthRevenue.map((row) => row.total), label: 'Revenue', id: 'revId', color: '#16a34a' },
                                      { data: normalizeSortArrayByMonthTotalExpensesAllChart.map((row) => row.total), label: 'Expenses', id: 'expId', color: '#dc2626' },
                                      { data: normalizeSortArrayByMonthRevenue.map((row, i) => row.total - normalizeSortArrayByMonthTotalExpensesAllChart[i].total), label: 'Net Income', id: 'netId', color: '#2563eb' },
                                      { data: normalizeSortArrayByMonthCashInChart.map((row) => row.total), label: 'Cash In', id: 'cashInId', color: '#10b981' },
                                      { data: normalizeSortArrayByMonthCashOutChart.map((row) => row.total), label: 'Cash Out', id: 'cashOutId', color: '#f87171' },
                                      { data: normalizeSortArrayByMonthCashInChart.map((row, i) => row.total - normalizeSortArrayByMonthCashOutChart[i].total), label: 'Gross Cash Flow', id: 'grossId', color: '#d97706' },
                                      { data: sortArrayByMonthCreditAccounts.map((row) => row.total), label: 'Credit Accounts', id: 'creditAccId', color: '#0d47a1' },
                                    ]}
                                    xAxis={[{ scaleType: 'point', data: monthsOfYear }]}
                                    colors={palette1}
                                    onAxisClick={(e, monthsOfYear) => handleClick(2, monthsOfYear)}
                                  />
                                </div>
                              </Card>
                            </Grid>

                            {/* Top Section: Financial Health Donut & Interactive Metrics List */}
                            <Grid item xs={12} lg={4}>
                              <Card sx={{ width: '100%', height: '100%', minHeight: '430px', borderRadius: '16px', boxShadow: '0 4px 20px -2px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0', p: 2.5, backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0f172a' }}>Executive Summary</Typography>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                      <DemoContainer components={['DatePicker']}>
                                        <DatePicker
                                          required
                                          name='date'
                                          value={dayjs(date)}
                                          onChange={(date) => setDate(date)}
                                          format='YYYY'
                                          label='Select Year'
                                          views={['year']}
                                          slotProps={{ textField: { size: 'small' } }}
                                        />
                                      </DemoContainer>
                                    </LocalizationProvider>
                                  </div>
                                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 1 }}>
                                    <PieChart
                                      series={[
                                        {
                                          paddingAngle: 4,
                                          innerRadius: 42,
                                          outerRadius: 68,
                                          data,
                                        },
                                      ]}
                                      colors={palette}
                                      margin={{ top: 5, bottom: 5, left: 5, right: 5 }}
                                      width={200}
                                      height={160}
                                      legend={{ hidden: true }}
                                    />
                                  </div>
                                  <Divider sx={{ my: 1.5 }} />
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    {[
                                      { label: 'Revenue', value: totalRevenue, color: '#16a34a', bg: '#dcfce7', type: 'Revenue' },
                                      { label: 'Expenses', value: totalExpenses, color: '#dc2626', bg: '#fee2e2', type: 'Expenses' },
                                      { label: 'Net Income', value: netIncome, color: '#2563eb', bg: '#dbeafe', type: 'Net Income' },
                                      { label: 'Cash In', value: totalCashIn, color: '#059669', bg: '#d1fae5', type: 'Cash In' },
                                      { label: 'Cash Out', value: totalCashOut, color: '#e11d48', bg: '#ffe4e6', type: 'Cash Out' },
                                      { label: 'Gross Cash Flow', value: grossCashFlow, color: '#d97706', bg: '#fef3c7', type: 'Gross Cash Flow' },
                                      { label: 'Credit Accounts', value: totalCreditAccounts, color: '#0d47a1', bg: '#e0e7ff', type: 'Credit Accounts' },
                                    ].map((item) => (
                                      <div
                                        key={item.label}
                                        onClick={() => handleClick(2, '', item.type)}
                                        style={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'space-between',
                                          padding: '6px 10px',
                                          borderRadius: '8px',
                                          cursor: 'pointer',
                                          transition: 'all 0.2s',
                                          backgroundColor: '#f8fafc',
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = item.bg}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                                      >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: item.color }} />
                                          <span style={{ fontSize: '13px', fontWeight: '500', color: '#334155' }}>{item.label}</span>
                                        </div>
                                        <span style={{ fontSize: '13px', fontWeight: 'bold', color: item.color }}>
                                          ${item.value?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </Card>
                            </Grid>

                            {/* 4 Quick Overview KPI Cards */}
                            <Grid item xs={12} sm={6} lg={3}>
                              <Card
                                sx={{
                                  borderRadius: '16px',
                                  boxShadow: '0 4px 15px -2px rgba(0,0,0,0.05)',
                                  border: '1px solid #e2e8f0',
                                  p: 2,
                                  cursor: 'pointer',
                                  transition: 'transform 0.2s, box-shadow 0.2s',
                                  '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 8px 25px -4px rgba(16, 185, 129, 0.2)' }
                                }}
                                onClick={() => handleClick(3, '')}
                              >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                  <div>
                                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Cash In Collections</Typography>
                                    <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#059669', mt: 0.5 }}>
                                      ${totalCashIn?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    </Typography>
                                  </div>
                                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <MonetizationOn sx={{ color: '#059669', fontSize: '24px' }} />
                                  </div>
                                </div>
                                <LineChart
                                  dataset={normalizeSortArrayByMonthCashInChart}
                                  xAxis={[{ scaleType: 'point', data: monthsOfYear }]}
                                  series={[{ dataKey: 'total', area: false, color: '#059669' }]}
                                  width={240}
                                  height={110}
                                  sx={{
                                    [`& .${lineElementClasses.root}`]: { stroke: '#059669', strokeWidth: 2 },
                                    [`& .${markElementClasses.root}`]: { display: 'none' },
                                    [`.${axisClasses.root}`]: { [`.${axisClasses.tick}, .${axisClasses.line}, .${axisClasses.tickLabel}`]: { display: 'none' } },
                                  }}
                                />
                              </Card>
                            </Grid>

                            <Grid item xs={12} sm={6} lg={3}>
                              <Card
                                sx={{
                                  borderRadius: '16px',
                                  boxShadow: '0 4px 15px -2px rgba(0,0,0,0.05)',
                                  border: '1px solid #e2e8f0',
                                  p: 2,
                                  cursor: 'pointer',
                                  transition: 'transform 0.2s, box-shadow 0.2s',
                                  '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 8px 25px -4px rgba(239, 68, 68, 0.2)' }
                                }}
                                onClick={() => handleClick(4, '')}
                              >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                  <div>
                                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Daily Expenses</Typography>
                                    <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#dc2626', mt: 0.5 }}>
                                      ${totalDailyExpenses?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    </Typography>
                                  </div>
                                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <ShoppingBagOutlined sx={{ color: '#dc2626', fontSize: '24px' }} />
                                  </div>
                                </div>
                                <LineChart
                                  dataset={normalizeSortArrayByMonthDailyExpensesChart}
                                  xAxis={[{ scaleType: 'point', data: monthsOfYear }]}
                                  series={[{ dataKey: 'total', area: false, color: '#dc2626' }]}
                                  width={240}
                                  height={110}
                                  sx={{
                                    [`& .${lineElementClasses.root}`]: { stroke: '#dc2626', strokeWidth: 2 },
                                    [`& .${markElementClasses.root}`]: { display: 'none' },
                                    [`.${axisClasses.root}`]: { [`.${axisClasses.tick}, .${axisClasses.line}, .${axisClasses.tickLabel}`]: { display: 'none' } },
                                  }}
                                />
                              </Card>
                            </Grid>

                            <Grid item xs={12} sm={6} lg={3}>
                              <Card
                                sx={{
                                  borderRadius: '16px',
                                  boxShadow: '0 4px 15px -2px rgba(0,0,0,0.05)',
                                  border: '1px solid #e2e8f0',
                                  p: 2,
                                  cursor: 'pointer',
                                  transition: 'transform 0.2s, box-shadow 0.2s',
                                  '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 8px 25px -4px rgba(124, 58, 237, 0.2)' }
                                }}
                                onClick={() => handleClick(5, '')}
                              >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                  <div>
                                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Item Purchases</Typography>
                                    <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#7c3aed', mt: 0.5 }}>
                                      ${totalItemPurchase?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    </Typography>
                                  </div>
                                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#f3e8ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <ShoppingCart sx={{ color: '#7c3aed', fontSize: '24px' }} />
                                  </div>
                                </div>
                                <LineChart
                                  dataset={normalizeSortArrayByMonthItemPurchaseChart}
                                  xAxis={[{ scaleType: 'point', data: monthsOfYear }]}
                                  series={[{ dataKey: 'total', area: false, color: '#7c3aed' }]}
                                  width={240}
                                  height={110}
                                  sx={{
                                    [`& .${lineElementClasses.root}`]: { stroke: '#7c3aed', strokeWidth: 2 },
                                    [`& .${markElementClasses.root}`]: { display: 'none' },
                                    [`.${axisClasses.root}`]: { [`.${axisClasses.tick}, .${axisClasses.line}, .${axisClasses.tickLabel}`]: { display: 'none' } },
                                  }}
                                />
                              </Card>
                            </Grid>

                            <Grid item xs={12} sm={6} lg={3}>
                              <Card
                                sx={{
                                  borderRadius: '16px',
                                  boxShadow: '0 4px 15px -2px rgba(0,0,0,0.05)',
                                  border: '1px solid #e2e8f0',
                                  p: 2,
                                  cursor: 'pointer',
                                  transition: 'transform 0.2s, box-shadow 0.2s',
                                  '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 8px 25px -4px rgba(37, 99, 235, 0.2)' }
                                }}
                                onClick={() => handleClick(6, '')}
                              >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                  <div>
                                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Payroll Expenses</Typography>
                                    <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#2563eb', mt: 0.5 }}>
                                      ${totalPayRoll?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    </Typography>
                                  </div>
                                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Payment sx={{ color: '#2563eb', fontSize: '24px' }} />
                                  </div>
                                </div>
                                <LineChart
                                  dataset={normalizeSortArrayByMonthPayRollChart}
                                  xAxis={[{ scaleType: 'point', data: monthsOfYear }]}
                                  series={[{ dataKey: 'total', area: false, color: '#2563eb' }]}
                                  width={240}
                                  height={110}
                                  sx={{
                                    [`& .${lineElementClasses.root}`]: { stroke: '#2563eb', strokeWidth: 2 },
                                    [`& .${markElementClasses.root}`]: { display: 'none' },
                                    [`.${axisClasses.root}`]: { [`.${axisClasses.tick}, .${axisClasses.line}, .${axisClasses.tickLabel}`]: { display: 'none' } },
                                  }}
                                />
                              </Card>
                            </Grid>

                            {/* Section: Accounting & Taxes */}
                            <Grid item xs={12}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px', marginBottom: '8px' }}>
                                <AccountBalance sx={{ color: '#0f172a', fontSize: '26px' }} />
                                <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0f172a' }}>Accounting & Taxes</Typography>
                              </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Card
                                sx={{
                                  borderRadius: '16px',
                                  boxShadow: '0 4px 15px -2px rgba(0,0,0,0.05)',
                                  border: '1px solid #e2e8f0',
                                  p: 2.5,
                                  cursor: 'pointer',
                                  transition: 'all 0.2s',
                                  '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 8px 20px -2px rgba(0,0,0,0.1)' }
                                }}
                                onClick={() => handleClick(15, 'All')}
                              >
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                      <AccountBalance sx={{ color: '#ffffff', fontSize: '26px' }} />
                                    </div>
                                    <div>
                                      <Typography sx={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a' }}>VAT Statement Account</Typography>
                                      <Typography sx={{ fontSize: '0.85rem', color: '#64748b' }}>Collected vs Paid Tax Reconciliation</Typography>
                                    </div>
                                  </div>
                                  <div style={{ textAlign: 'right' }}>
                                    <span style={{
                                      display: 'inline-block',
                                      padding: '6px 14px',
                                      borderRadius: '20px',
                                      fontWeight: 'bold',
                                      fontSize: '14px',
                                      backgroundColor: netVat >= 0 ? '#dbeafe' : '#fee2e2',
                                      color: netVat >= 0 ? '#1d4ed8' : '#b91c1c'
                                    }}>
                                      ${Math.abs(netVat).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {netVat >= 0 ? '(Due)' : '(Credit)'}
                                    </span>
                                  </div>
                                </div>
                              </Card>
                            </Grid>

                            {/* Section: Inventory & Customers */}
                            <Grid item xs={12}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px', marginBottom: '8px' }}>
                                <Store sx={{ color: '#0f172a', fontSize: '26px' }} />
                                <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0f172a' }}>Inventory & Customers</Typography>
                              </div>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Card
                                sx={{
                                  borderRadius: '16px',
                                  boxShadow: '0 4px 15px -2px rgba(0,0,0,0.05)',
                                  border: '1px solid #e2e8f0',
                                  p: 2.5,
                                  cursor: 'pointer',
                                  '&:hover': { transform: 'translateY(-2px)' }
                                }}
                                onClick={() => handleClick(10, 'Category')}
                              >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                  <div>
                                    <Typography sx={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Active Store Inventory</Typography>
                                    <Typography sx={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#0284c7', mt: 0.5 }}>{totalItem.length} Items</Typography>
                                  </div>
                                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Store sx={{ color: '#0284c7', fontSize: '24px' }} />
                                  </div>
                                </div>
                              </Card>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Card
                                sx={{
                                  borderRadius: '16px',
                                  boxShadow: '0 4px 15px -2px rgba(0,0,0,0.05)',
                                  border: '1px solid #e2e8f0',
                                  p: 2.5,
                                  cursor: 'pointer',
                                  '&:hover': { transform: 'translateY(-2px)' }
                                }}
                                onClick={() => handleClick(10, 'Out of Stock')}
                              >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                  <div>
                                    <Typography sx={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Out of Stock</Typography>
                                    <Typography sx={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#dc2626', mt: 0.5 }}>{totalOut.length} Items</Typography>
                                  </div>
                                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <ProductionQuantityLimitsIcon sx={{ color: '#dc2626', fontSize: '24px' }} />
                                  </div>
                                </div>
                              </Card>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Card sx={{ borderRadius: '16px', boxShadow: '0 4px 15px -2px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', p: 2.5 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                  <div>
                                    <Typography sx={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Customer Directory</Typography>
                                    <Typography sx={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#059669', mt: 0.5 }}>{customer1.length} Accounts</Typography>
                                  </div>
                                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Person2Sharp sx={{ color: '#059669', fontSize: '24px' }} />
                                  </div>
                                </div>
                              </Card>
                            </Grid>

                            <Grid item xs={12} lg={8}>
                              <Card sx={{ borderRadius: '16px', boxShadow: '0 4px 20px -2px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0', p: 2, backgroundColor: '#ffffff' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                                  <Typography sx={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a' }}>Inventory Valuation Overview</Typography>
                                  {itemsValue.length === 0 && <Button variant="outlined" size="small" onClick={fetchValue}>Load Values</Button>}
                                </div>
                                <TableContainer sx={{ height: '380px', width: '100%', borderRadius: '8px' }}>
                                  <DataGrid
                                    rows={itemsValue}
                                    columns={columnsItemOut}
                                    sx={{ border: 'none', '& .MuiDataGrid-columnHeaders': { backgroundColor: '#f8fafc', fontWeight: 'bold' } }}
                                  />
                                </TableContainer>
                              </Card>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                              <Card sx={{ borderRadius: '16px', boxShadow: '0 4px 20px -2px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0', p: 2, backgroundColor: '#ffffff' }}>
                                <Typography sx={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a', mb: 1.5 }}>Customer Balances</Typography>
                                <TableContainer sx={{ height: '380px', width: '100%', borderRadius: '8px' }}>
                                  <DataGrid
                                    rows={customer}
                                    columns={columnCustomer}
                                    sx={{ border: 'none', '& .MuiDataGrid-columnHeaders': { backgroundColor: '#f8fafc', fontWeight: 'bold' } }}
                                  />
                                </TableContainer>
                              </Card>
                            </Grid>

                            {/* Section: Maintenance */}
                            <Grid item xs={12}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px', marginBottom: '8px' }}>
                                <PriceChange sx={{ color: '#0f172a', fontSize: '26px' }} />
                                <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0f172a' }}>Maintenance Operations</Typography>
                              </div>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                              <Card
                                sx={{
                                  borderRadius: '16px',
                                  boxShadow: '0 4px 20px -2px rgba(0,0,0,0.06)',
                                  border: '1px solid #e2e8f0',
                                  p: 2.5,
                                  height: '100%',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  cursor: 'pointer'
                                }}
                                onClick={() => handleClick(7, 'All')}
                              >
                                <Typography sx={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a', mb: 1 }}>Maintenance Breakdown</Typography>
                                <PieChart
                                  series={[{ paddingAngle: 4, innerRadius: 42, outerRadius: 68, data: data2 }]}
                                  colors={palette2}
                                  margin={{ top: 5, bottom: 5, left: 5, right: 5 }}
                                  width={200}
                                  height={160}
                                  legend={{ hidden: true }}
                                />
                              </Card>
                            </Grid>
                            <Grid item xs={12} lg={8}>
                              <Grid container spacing={2}>
                                <Grid item xs={6}>
                                  <Card sx={{ borderRadius: '12px', border: '1px solid #e2e8f0', p: 2, cursor: 'pointer' }} onClick={() => handleClick(7, 'Sell')}>
                                    <Typography sx={{ fontSize: '0.8rem', color: '#64748b' }}>Total Sell</Typography>
                                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2563eb' }}>${totalMaintenanceRevenue?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                  </Card>
                                </Grid>
                                <Grid item xs={6}>
                                  <Card sx={{ borderRadius: '12px', border: '1px solid #e2e8f0', p: 2, cursor: 'pointer' }} onClick={() => handleClick(7, 'Cost')}>
                                    <Typography sx={{ fontSize: '0.8rem', color: '#64748b' }}>Total Cost</Typography>
                                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#dc2626' }}>${totalMaintenanceCost?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                  </Card>
                                </Grid>
                                <Grid item xs={6}>
                                  <Card sx={{ borderRadius: '12px', border: '1px solid #e2e8f0', p: 2, cursor: 'pointer' }} onClick={() => handleClick(7, 'Labor')}>
                                    <Typography sx={{ fontSize: '0.8rem', color: '#64748b' }}>Labor Fees</Typography>
                                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#d97706' }}>${totalMaintenanceLaborFees?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                  </Card>
                                </Grid>
                                <Grid item xs={6}>
                                  <Card sx={{ borderRadius: '12px', border: '1px solid #e2e8f0', p: 2, cursor: 'pointer' }} onClick={() => handleClick(7, 'Revenue')}>
                                    <Typography sx={{ fontSize: '0.8rem', color: '#64748b' }}>Operating Gain</Typography>
                                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#059669' }}>${(totalMaintenanceRevenue - totalMaintenanceCost)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                  </Card>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={12}>
                              <Card sx={{ borderRadius: '16px', boxShadow: '0 4px 20px -2px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0', p: 2, backgroundColor: '#ffffff' }}>
                                <TableContainer sx={{ height: '400px', width: '100%', borderRadius: '8px' }}>
                                  <DataGrid
                                    rows={maintenance}
                                    columns={columnMaintenance}
                                    sx={{ border: 'none', '& .MuiDataGrid-columnHeaders': { backgroundColor: '#f8fafc', fontWeight: 'bold' } }}
                                  />
                                </TableContainer>
                              </Card>
                            </Grid>

                            {/* Section: Project */}
                            <Grid item xs={12}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px', marginBottom: '8px' }}>
                                <Sell sx={{ color: '#0f172a', fontSize: '26px' }} />
                                <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0f172a' }}>Project Management</Typography>
                              </div>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                              <Card
                                sx={{
                                  borderRadius: '16px',
                                  boxShadow: '0 4px 20px -2px rgba(0,0,0,0.06)',
                                  border: '1px solid #e2e8f0',
                                  p: 2.5,
                                  height: '100%',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  cursor: 'pointer'
                                }}
                                onClick={() => handleClick(8, 'Revenue')}
                              >
                                <Typography sx={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a', mb: 1 }}>Projects Performance</Typography>
                                <PieChart
                                  series={[{ paddingAngle: 4, innerRadius: 42, outerRadius: 68, data: data3 }]}
                                  colors={palette3}
                                  margin={{ top: 5, bottom: 5, left: 5, right: 5 }}
                                  width={200}
                                  height={160}
                                  legend={{ hidden: true }}
                                />
                              </Card>
                            </Grid>
                            <Grid item xs={12} lg={8}>
                              <Grid container spacing={2}>
                                <Grid item xs={6}>
                                  <Card sx={{ borderRadius: '12px', border: '1px solid #e2e8f0', p: 2, cursor: 'pointer' }} onClick={() => handleClick(8, 'Sell')}>
                                    <Typography sx={{ fontSize: '0.8rem', color: '#64748b' }}>Total Sell</Typography>
                                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2563eb' }}>${projectSellInfo?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                  </Card>
                                </Grid>
                                <Grid item xs={6}>
                                  <Card sx={{ borderRadius: '12px', border: '1px solid #e2e8f0', p: 2, cursor: 'pointer' }} onClick={() => handleClick(8, 'Expenses')}>
                                    <Typography sx={{ fontSize: '0.8rem', color: '#64748b' }}>Project Expenses</Typography>
                                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#dc2626' }}>${projectExpensesInfo?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                  </Card>
                                </Grid>
                                <Grid item xs={6}>
                                  <Card sx={{ borderRadius: '12px', border: '1px solid #e2e8f0', p: 2, cursor: 'pointer' }} onClick={() => handleClick(8, 'Item Cost')}>
                                    <Typography sx={{ fontSize: '0.8rem', color: '#64748b' }}>Direct Item Cost</Typography>
                                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#7c3aed' }}>${projectCostInfo?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                  </Card>
                                </Grid>
                                <Grid item xs={6}>
                                  <Card sx={{ borderRadius: '12px', border: '1px solid #e2e8f0', p: 2, cursor: 'pointer' }} onClick={() => handleClick(8, 'Revenue')}>
                                    <Typography sx={{ fontSize: '0.8rem', color: '#64748b' }}>Net Project Profit</Typography>
                                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#059669' }}>${projectRevenue?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                  </Card>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={12}>
                              <Card sx={{ borderRadius: '16px', boxShadow: '0 4px 20px -2px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0', p: 2, backgroundColor: '#ffffff' }}>
                                <TableContainer sx={{ height: '400px', width: '100%', borderRadius: '8px' }}>
                                  <DataGrid
                                    rows={projectWithAll}
                                    columns={columnProject}
                                    sx={{ border: 'none', '& .MuiDataGrid-columnHeaders': { backgroundColor: '#f8fafc', fontWeight: 'bold' } }}
                                  />
                                </TableContainer>
                              </Card>
                            </Grid>

                            {/* Section: Invoices */}
                            <Grid item xs={12}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px', marginBottom: '8px' }}>
                                <Receipt sx={{ color: '#0f172a', fontSize: '26px' }} />
                                <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0f172a' }}>Commercial Invoices</Typography>
                              </div>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                              <Card
                                sx={{
                                  borderRadius: '16px',
                                  boxShadow: '0 4px 20px -2px rgba(0,0,0,0.06)',
                                  border: '1px solid #e2e8f0',
                                  p: 2.5,
                                  height: '100%',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  cursor: 'pointer'
                                }}
                                onClick={() => handleClick(9, 'Revenue')}
                              >
                                <Typography sx={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a', mb: 1 }}>Invoices Overview</Typography>
                                <PieChart
                                  series={[{ paddingAngle: 4, innerRadius: 42, outerRadius: 68, data: data4 }]}
                                  colors={palette}
                                  margin={{ top: 5, bottom: 5, left: 5, right: 5 }}
                                  width={200}
                                  height={160}
                                  legend={{ hidden: true }}
                                />
                              </Card>
                            </Grid>
                            <Grid item xs={12} lg={8}>
                              <Grid container spacing={2}>
                                <Grid item xs={4}>
                                  <Card sx={{ borderRadius: '12px', border: '1px solid #e2e8f0', p: 2, cursor: 'pointer' }} onClick={() => handleClick(9, 'Sell')}>
                                    <Typography sx={{ fontSize: '0.8rem', color: '#64748b' }}>Total Sell</Typography>
                                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2563eb' }}>${totalSellInvoice?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                  </Card>
                                </Grid>
                                <Grid item xs={4}>
                                  <Card sx={{ borderRadius: '12px', border: '1px solid #e2e8f0', p: 2, cursor: 'pointer' }} onClick={() => handleClick(9, 'Cost')}>
                                    <Typography sx={{ fontSize: '0.8rem', color: '#64748b' }}>Total Cost</Typography>
                                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#dc2626' }}>${totalCostInvoice?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                  </Card>
                                </Grid>
                                <Grid item xs={4}>
                                  <Card sx={{ borderRadius: '12px', border: '1px solid #e2e8f0', p: 2, cursor: 'pointer' }} onClick={() => handleClick(9, 'Revenue')}>
                                    <Typography sx={{ fontSize: '0.8rem', color: '#64748b' }}>Net Invoice Margin</Typography>
                                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#059669' }}>${invoiceRevenue?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                  </Card>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={12}>
                              <Card sx={{ borderRadius: '16px', boxShadow: '0 4px 20px -2px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0', p: 2, backgroundColor: '#ffffff' }}>
                                <TableContainer sx={{ height: '400px', width: '100%', borderRadius: '8px' }}>
                                  <DataGrid
                                    rows={filterInvoice}
                                    columns={columnInvoice}
                                    sx={{ border: 'none', '& .MuiDataGrid-columnHeaders': { backgroundColor: '#f8fafc', fontWeight: 'bold' } }}
                                  />
                                </TableContainer>
                              </Card>
                            </Grid>

                            {/* Section: Point of Sale (Shop) */}
                            <Grid item xs={12}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px', marginBottom: '8px' }}>
                                <Storefront sx={{ color: '#0f172a', fontSize: '26px' }} />
                                <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0f172a' }}>Point of Sale (Shop)</Typography>
                              </div>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                              <Card
                                sx={{
                                  borderRadius: '16px',
                                  boxShadow: '0 4px 20px -2px rgba(0,0,0,0.06)',
                                  border: '1px solid #e2e8f0',
                                  p: 2.5,
                                  height: '100%',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  cursor: 'pointer'
                                }}
                                onClick={() => handleClick(11, 'All')}
                              >
                                <Typography sx={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a', mb: 1 }}>POS Overview</Typography>
                                <PieChart
                                  series={[{ paddingAngle: 4, innerRadius: 42, outerRadius: 68, data: data5 }]}
                                  colors={palette}
                                  margin={{ top: 5, bottom: 5, left: 5, right: 5 }}
                                  width={200}
                                  height={160}
                                  legend={{ hidden: true }}
                                />
                              </Card>
                            </Grid>
                            <Grid item xs={12} lg={8}>
                              <Grid container spacing={2}>
                                <Grid item xs={4}>
                                  <Card sx={{ borderRadius: '12px', border: '1px solid #e2e8f0', p: 2, cursor: 'pointer' }} onClick={() => handleClick(11, 'Sell')}>
                                    <Typography sx={{ fontSize: '0.8rem', color: '#64748b' }}>Total Sell</Typography>
                                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2563eb' }}>${totalPOSSellInvoice?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                  </Card>
                                </Grid>
                                <Grid item xs={4}>
                                  <Card sx={{ borderRadius: '12px', border: '1px solid #e2e8f0', p: 2, cursor: 'pointer' }} onClick={() => handleClick(11, 'Cost')}>
                                    <Typography sx={{ fontSize: '0.8rem', color: '#64748b' }}>Total Cost</Typography>
                                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#dc2626' }}>${totalPOSCostInvoice?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                  </Card>
                                </Grid>
                                <Grid item xs={4}>
                                  <Card sx={{ borderRadius: '12px', border: '1px solid #e2e8f0', p: 2, cursor: 'pointer' }} onClick={() => handleClick(11, 'Revenue')}>
                                    <Typography sx={{ fontSize: '0.8rem', color: '#64748b' }}>Net POS Margin</Typography>
                                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#059669' }}>${invoicePOSRevenue?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                                  </Card>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={12}>
                              <Card sx={{ borderRadius: '16px', boxShadow: '0 4px 20px -2px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0', p: 2, backgroundColor: '#ffffff' }}>
                                <TableContainer sx={{ height: '400px', width: '100%', borderRadius: '8px' }}>
                                  <DataGrid
                                    rows={posInvoice}
                                    columns={columnPOSInvoice}
                                    sx={{ border: 'none', '& .MuiDataGrid-columnHeaders': { backgroundColor: '#f8fafc', fontWeight: 'bold' } }}
                                  />
                                </TableContainer>
                              </Card>
                            </Grid>

                            {/* Section: Human Resources (Employee) */}
                            <Grid item xs={12}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px', marginBottom: '8px' }}>
                                <GroupOutlined sx={{ color: '#0f172a', fontSize: '26px' }} />
                                <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0f172a' }}>Human Resources</Typography>
                              </div>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Card sx={{ borderRadius: '16px', border: '1px solid #e2e8f0', p: 2.5 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                  <div>
                                    <Typography sx={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Active Personnel</Typography>
                                    <Typography sx={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#0284c7', mt: 0.5 }}>{Employed && Employed.length} Active</Typography>
                                  </div>
                                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <GroupOutlined sx={{ color: '#0284c7', fontSize: '24px' }} />
                                  </div>
                                </div>
                              </Card>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Card sx={{ borderRadius: '16px', border: '1px solid #e2e8f0', p: 2.5 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                  <div>
                                    <Typography sx={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Resigned Staff</Typography>
                                    <Typography sx={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#d97706', mt: 0.5 }}>{EmployedResign && EmployedResign.length}</Typography>
                                  </div>
                                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <PersonAddDisabled sx={{ color: '#d97706', fontSize: '24px' }} />
                                  </div>
                                </div>
                              </Card>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Card sx={{ borderRadius: '16px', border: '1px solid #e2e8f0', p: 2.5 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                  <div>
                                    <Typography sx={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Dismissed / Fired</Typography>
                                    <Typography sx={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#dc2626', mt: 0.5 }}>{EmployedFired && EmployedFired.length}</Typography>
                                  </div>
                                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <GroupRemove sx={{ color: '#dc2626', fontSize: '24px' }} />
                                  </div>
                                </div>
                              </Card>
                            </Grid>

                            <Grid item xs={12} lg={4}>
                              <Card sx={{ borderRadius: '16px', border: '1px solid #e2e8f0', p: 2, height: '400px', backgroundColor: '#ffffff' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                                  <Typography sx={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a' }}>HR Announcements</Typography>
                                  <NotificationAdd sx={{ color: '#2563eb' }} />
                                </div>
                                <Divider sx={{ my: 1 }} />
                                <div style={{ height: '320px', overflowY: 'auto', paddingRight: '6px' }}>
                                  {notification?.map((row) => (
                                    <Timeline key={row._id} sx={{ [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 } }}>
                                      <TimelineItem>
                                        <TimelineSeparator>
                                          <TimelineDot color="primary" />
                                          <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                          <Typography sx={{ fontSize: '13px', fontWeight: 'bold', color: '#0f172a' }}>{row.person}</Typography>
                                          <Typography sx={{ fontSize: '12px', color: '#64748b' }}>{row.reason}</Typography>
                                        </TimelineContent>
                                      </TimelineItem>
                                    </Timeline>
                                  ))}
                                </div>
                              </Card>
                            </Grid>
                            <Grid item xs={12} lg={8}>
                              <Card sx={{ borderRadius: '16px', border: '1px solid #e2e8f0', p: 2, height: '400px', backgroundColor: '#ffffff' }}>
                                <Typography sx={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a', mb: 1 }}>Today's Employee Attendance</Typography>
                                <TableContainer sx={{ height: '320px', width: '100%', borderRadius: '8px' }}>
                                  <Table size="small">
                                    <TableHead>
                                      <TableRow sx={{ backgroundColor: '#f8fafc' }}>
                                        <TableCell sx={{ fontWeight: 'bold' }}>#</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Staff Name</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Check-In Time</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Remarks / Observation</TableCell>
                                      </TableRow>
                                    </TableHead>
                                    <TableBody>
                                      {employeeAttendance?.map((row, i) => (
                                        <TableRow key={row._id} hover>
                                          <TableCell>{i + 1}</TableCell>
                                          <TableCell sx={{ fontWeight: 600 }}>{row.name}</TableCell>
                                          <TableCell>{dayjs(row.timeIn).format('HH:mm')} AM</TableCell>
                                          <TableCell>{row.observation}</TableCell>
                                        </TableRow>
                                      ))}
                                    </TableBody>
                                  </Table>
                                </TableContainer>
                              </Card>
                            </Grid>
                          </Grid> : ''
                      }
                      {
                        showInfo === 2 ?
                          <div>
                            <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                              <Close onClick={() => handleClick(1, '')} className='btnCustomer' style={{ fontSize: '40px' }} />
                            </section>
                            <RevenueExpensesAll
                              onMonth={monthAllRevenueExpenses}
                              onPayment={payment}
                              onPayRoll={payRoll}
                              onItemPurChase={itemPurchase}
                              onExpenses={expenses}
                              allInvoices={allInvoices}
                              posInvoice={posInvoice}
                              type={metricType}
                              selectedYear={date}
                              customers={customer1}
                            />
                          </div> : ''
                      }
                      {
                        showInfo === 3 ?
                          <div>
                            <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                              <Close onClick={() => handleClick(1, '')} className='btnCustomer' style={{ fontSize: '40px' }} />
                            </section>
                            <PaymentReportInf
                              onMonth={monthAllRevenueExpenses}
                              onPayment={payment}
                              selectedYear={date}
                            />
                          </div>
                          : ''
                      }
                      {
                        showInfo === 4 ?
                          <div>
                            <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                              <Close onClick={() => handleClick(1, '')} className='btnCustomer' style={{ fontSize: '40px' }} />
                            </section>
                            <DailyExpensesReportInfo
                              onMonth={monthAllRevenueExpenses}
                              onExpenses={expenses}
                              selectedYear={date}
                            />
                          </div>
                          : ''
                      }
                      {
                        showInfo === 5 ?
                          <div>
                            <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                              <Close onClick={() => handleClick(1, '')} className='btnCustomer' style={{ fontSize: '40px' }} />
                            </section>
                            <ItemPurchaseReportInfo
                              onMonth={monthAllRevenueExpenses}
                              onItemPurChase={itemPurchase}
                              selectedYear={date}
                            />
                          </div>
                          : ''
                      }
                      {
                        showInfo === 6 ?
                          <div>
                            <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                              <Close onClick={() => handleClick(1, '')} className='btnCustomer' style={{ fontSize: '40px' }} />
                            </section>
                            <PayRollReportInfo
                              onMonth={monthAllRevenueExpenses}
                              onPayRoll={payRoll}
                              selectedYear={date}
                            />
                          </div>
                          : ''
                      }
                      {
                        showInfo === 7 ?
                          <div>
                            <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                              <Close onClick={() => handleClick(1, '')} className='btnCustomer' style={{ fontSize: '40px' }} />
                            </section>
                            <MaintenanceReportInfo
                              onMonth={infoName}
                              onMaintenance={maintenance}
                            />
                          </div>
                          : ''
                      }
                      {
                        showInfo === 8 ?
                          <div>
                            <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                              <Close onClick={() => handleClick(1, '')} className='btnCustomer' style={{ fontSize: '40px' }} />
                            </section>
                            <ProjectReportInfo
                              onMonth={infoName}
                              onProjectName={projectWithAll}
                            />
                          </div>
                          : ''
                      }
                      {
                        showInfo === 9 ?
                          <div>
                            <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                              <Close onClick={() => handleClick(1, '')} className='btnCustomer' style={{ fontSize: '40px' }} />
                            </section>
                            <InvoiceReportInfo
                              onMonth={infoName}
                              onInvoice={filterInvoice}
                            />
                          </div>
                          : ''
                      }
                      {
                        showInfo === 11 ?
                          <div>
                            <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                              <Close onClick={() => handleClick(1, '')} className='btnCustomer' style={{ fontSize: '40px' }} />
                            </section>
                            <PosReportInvoice
                              onMonth={infoName}
                              onInvoice={posInvoice}
                            />
                          </div>
                          : ''
                      }
                      {
                        showInfo === 10 ?
                          <div>
                            <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                              <Close onClick={() => handleClick(1, '')} className='btnCustomer' style={{ fontSize: '40px' }} />
                            </section>
                            <ItemReportInfo
                              onMonth={infoName}
                              onItem={item}
                            />
                          </div>
                          : ''
                      }
                      {
                        showInfo === 15 ?
                          <div>
                            <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                              <Close onClick={() => handleClick(1, '')} className='btnCustomer' style={{ fontSize: '40px' }} />
                            </section>
                            <VatAccountView
                              payments={payment}
                              expenses={expenses}
                              allInvoices={allInvoices}
                              itemPurchase={itemPurchase}
                              onAction={setShowInfo}
                            />
                          </div>
                          : ''
                      }
                    </div>
                    : (
                      <div>
                        <div className='projectSection1'>
                          <div className='projectSectionAdminView' style={{ justifyContent: 'center', textAlign: 'center', marginLeft: '260px', top: '30%', position: 'absolute' }}>
                            <h2>Welcome {user.data.userName}</h2>
                            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                              <section style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <h2> Today's Rate: $ 1 = FC {systemRate} </h2>
                                <CurrencyExchangeIcon />
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>)}

                </div>
              </Container>

            </Box>
          </Box>
        </div >)
      }
    </div >
  )
}

export default AdminHome
