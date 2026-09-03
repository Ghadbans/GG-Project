import PrintHeader from '../../../component/PrintHeader';
import PrintFooter from '../../../component/PrintFooter';
import React, { useEffect, useState, useRef } from 'react'
import SidebarDash from '../../../component/SidebarDash';
import '../../view.css'
import '../Chartview.css'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { TableContainer, Checkbox, Menu, MenuItem, Grid, IconButton, Paper, TextField, FormControl, InputLabel, Select, Typography, styled, FormLabel, RadioGroup, FormControlLabel, Radio, Input, OutlinedInput, InputAdornment, Modal, Backdrop, Fade, Box, Autocomplete, Table, TableBody, TableCell, TableRow, TableHead, Tabs, Tab, Button, Card, CardContent } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ENDPOINT_URL } from '../../../apiConfig';
import { useNavigate, NavLink, Link } from 'react-router-dom'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import dayjs from 'dayjs';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '../../../component/NetworkLogoutIcon';
import Loader from '../../../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Close from '@mui/icons-material/Close';
import ArrowBack from '@mui/icons-material/ArrowBack';
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import Phone from '@mui/icons-material/Phone';
import WebIcon from '@mui/icons-material/Web';
import Email from '@mui/icons-material/Email';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Image from '../../../img/images.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import LocalPrintshop from '@mui/icons-material/LocalPrintshop';
import { PieChart } from '@mui/x-charts';
import ExcelJS from 'exceljs'
import { saveAs } from 'file-saver';
import { Explicit } from '@mui/icons-material';

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

function RevenueExpensesAll({ onMonth, onPayment, onPayRoll, onItemPurChase, onExpenses, allInvoices, posInvoice, type, selectedYear, customers }) {
  const [month, setMonth] = useState('');
  const [selectOptions, setSelectOptions] = useState('');
  const [startDate, setStartDate] = useState(() => {
    return new Date()
  });
  const transactionYears = new Date(startDate).getFullYear()
  const [fromDate, setFromDate] = useState(() => {
    const date = new Date()
    return date
  });
  const [endDate, setEndDate] = useState(() => {
    const date = new Date()
    return date
  });
  useEffect(() => {
    if (onMonth) {
      setMonth(onMonth);
      setSelectOptions('Month');
      if (selectedYear) setStartDate(new Date(dayjs(selectedYear).format('YYYY'), 0, 1));
    } else if (selectedYear) {
      setMonth('');
      setSelectOptions('Year');
      setStartDate(new Date(dayjs(selectedYear).format('YYYY'), 0, 1));
    } else {
      setMonth('');
      setSelectOptions('All');
    }
  }, [onMonth, selectedYear]);

  {/** All Start */ }
  const payment = onPayment;
  const payRoll = onPayRoll;
  const itemPurchase = onItemPurChase;
  const expenses = onExpenses;
  {/** All End */ }
  {/** Month Filter Start */ }
  const [filterMonthPayment, setFilterMonthPayment] = useState([]);
  const [filterMonthPayRoll, setFilterMonthPayRoll] = useState([]);
  const [filterMonthItemPurchase, setFilterMonthItemPurchase] = useState([]);
  const [filterMonthItemPayments, setFilterMonthItemPayments] = useState([]);
  const [filterMonthExpenses, setFilterMonthExpenses] = useState([]);
  const [filterMonthAllInvoices, setFilterMonthAllInvoices] = useState([]);
  const [filterMonthPOS, setFilterMonthPOS] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [systemRate, setSystemRate] = useState(1);

  // Fetch system rate for currency conversion fallback
  useEffect(() => {
    const fetchRate = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/rate`);
        if (Array.isArray(res?.data?.data) && res.data.data.length > 0) {
          setSystemRate(parseFloat(res.data?.data?.[0]?.rate || 1));
        }
      } catch (error) {
        console.error('Error fetching system rate:', error);
      }
    };
    fetchRate();
  }, []);

  useEffect(() => {
    const headers = [];
    const currentDate = new Date(fromDate);
    while (currentDate <= endDate) {
      headers.push(currentDate.toDateString());
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setFilteredData(headers)
  }, [fromDate, endDate])


  useEffect(() => {
    if (selectOptions === 'Month') {
      setFilterMonthPayment(payment?.filter((row) => dayjs(row.paymentDate).format('MMMM') === month && dayjs(row.paymentDate).format('YYYY') === dayjs(startDate).format('YYYY')))
      setFilterMonthPayRoll(payRoll?.filter((row) => dayjs(row.month).format('MMMM') === month && dayjs(row.month).format('YYYY') === dayjs(startDate).format('YYYY')))
      setFilterMonthItemPurchase(itemPurchase?.filter((row) => dayjs(row.itemPurchaseDate).format('MMMM') === month && dayjs(row.itemPurchaseDate).format('YYYY') === dayjs(startDate).format('YYYY')))
      setFilterMonthExpenses(expenses?.filter((row) => dayjs(row.expenseDate).format('MMMM') === month && dayjs(row.expenseDate).format('YYYY') === dayjs(startDate).format('YYYY')))
      setFilterMonthAllInvoices(allInvoices?.filter((row) => dayjs(row.invoiceDate).format('MMMM') === month && dayjs(row.invoiceDate).format('YYYY') === dayjs(startDate).format('YYYY')))
      setFilterMonthPOS(posInvoice?.filter((row) => dayjs(row.invoiceDate).format('MMMM') === month && dayjs(row.invoiceDate).format('YYYY') === dayjs(startDate).format('YYYY')))
    } else if (selectOptions === 'Year') {
      setFilterMonthPayment(payment?.filter((row) => dayjs(row.paymentDate).format('YYYY') === dayjs(startDate).format('YYYY')))
      setFilterMonthPayRoll(payRoll?.filter((row) => dayjs(row.month).format('YYYY') === dayjs(startDate).format('YYYY')))
      setFilterMonthItemPurchase(itemPurchase?.filter((row) => dayjs(row.itemPurchaseDate).format('YYYY') === dayjs(startDate).format('YYYY')))
      setFilterMonthExpenses(expenses?.filter((row) => dayjs(row.expenseDate).format('YYYY') === dayjs(startDate).format('YYYY')))
      setFilterMonthAllInvoices(allInvoices?.filter((row) => dayjs(row.invoiceDate).format('YYYY') === dayjs(startDate).format('YYYY')))
      setFilterMonthPOS(posInvoice?.filter((row) => dayjs(row.invoiceDate).format('YYYY') === dayjs(startDate).format('YYYY')))
    }
    else if (selectOptions === 'Custom') {
      const start = dayjs(fromDate).startOf('day');
      const end = dayjs(endDate).endOf('day');

      const isBetween = (date) => {
        const d = dayjs(date);
        return (d.isAfter(start) || d.isSame(start)) && (d.isBefore(end) || d.isSame(end));
      };

      setFilterMonthPayment(payment?.filter((row) => isBetween(row.paymentDate)))
      setFilterMonthPayRoll(payRoll?.filter((row) => isBetween(row.month)))
      setFilterMonthItemPurchase(itemPurchase?.filter((row) => isBetween(row.itemPurchaseDate)))
      setFilterMonthExpenses(expenses?.filter((row) => isBetween(row.expenseDate)))
      setFilterMonthAllInvoices(allInvoices?.filter((row) => isBetween(row.invoiceDate)))
      setFilterMonthPOS(posInvoice?.filter((row) => isBetween(row.invoiceDate)))
    }
    else if (selectOptions === 'All') {
      setFilterMonthPayment(payment || [])
      setFilterMonthPayRoll(payRoll || [])
      setFilterMonthItemPurchase(itemPurchase || [])
      setFilterMonthExpenses(expenses || [])
      setFilterMonthAllInvoices(allInvoices || [])
      setFilterMonthPOS(posInvoice || [])
    }

    // Process Item Purchase Payments separately for cash-basis reports
    const allItemPaymentsInRange = [];
    itemPurchase?.forEach(item => {
      const hasPayments = (item.payments || []).length > 0;
      if (hasPayments) {
        item.payments.forEach(p => {
          let inRange = false;
          if (selectOptions === 'Month') {
            inRange = dayjs(p.date).format('MMMM') === month && dayjs(p.date).format('YYYY') === dayjs(startDate).format('YYYY');
          } else if (selectOptions === 'Year') {
            inRange = dayjs(p.date).format('YYYY') === dayjs(startDate).format('YYYY');
          } else if (selectOptions === 'Custom') {
            const start = dayjs(fromDate).startOf('day');
            const end = dayjs(endDate).endOf('day');
            const d = dayjs(p.date);
            inRange = (d.isAfter(start) || d.isSame(start)) && (d.isBefore(end) || d.isSame(end));
          } else if (selectOptions === 'All') {
            inRange = true;
          }

          if (inRange) {
            allItemPaymentsInRange.push({
              ...p,
              itemPurchaseNumber: item.itemPurchaseNumber,
              projectName: item.projectName,
              description: item.description,
              reason: item.reason,
              parentStatus: item.status
            });
          }
        });
      } else if (item.status === 'PAID' || item.status === 'Paid') {
        // Legacy Fallback for older records with no payment log
        let inRange = false;
        if (selectOptions === 'Month') {
          inRange = dayjs(item.itemPurchaseDate).format('MMMM') === month && dayjs(item.itemPurchaseDate).format('YYYY') === dayjs(startDate).format('YYYY');
        } else if (selectOptions === 'Year') {
          inRange = dayjs(item.itemPurchaseDate).format('YYYY') === dayjs(startDate).format('YYYY');
        } else if (selectOptions === 'Custom') {
          const start = dayjs(fromDate).startOf('day');
          const end = dayjs(endDate).endOf('day');
          const d = dayjs(item.itemPurchaseDate);
          inRange = (d.isAfter(start) || d.isSame(start)) && (d.isBefore(end) || d.isSame(end));
        } else if (selectOptions === 'All') {
          inRange = true;
        }

        if (inRange) {
          allItemPaymentsInRange.push({
            date: item.itemPurchaseDate,
            amount: item.amount,
            itemPurchaseNumber: item.itemPurchaseNumber,
            projectName: item.projectName,
            description: item.description,
            reason: item.reason,
            parentStatus: item.status
          });
        }
      }
    });
    setFilterMonthItemPayments(allItemPaymentsInRange);

  }, [selectOptions, month, startDate, fromDate, endDate, payment, payRoll, itemPurchase, expenses, allInvoices, posInvoice])
  {/** Month Filter End */ }


  const monthArray = []

  if (type === 'Revenue' || type === 'Net Income' || type === 'All' || !type) {
    filterMonthAllInvoices?.filter(r => r.status && !['Draft', 'Decline', 'Void', 'Free of Charge'].includes(r.status)).forEach(row => {
      monthArray.push({
        type: 'Direct Invoice',
        date: row.invoiceDate,
        number: row.invoiceNumber,
        description: `Invoice for ${row.customerName?.customerName || 'Customer'}`,
        amount: parseFloat(row.totalInvoice || 0),
        payment: parseFloat(row.total || 0)
      })
    })
    filterMonthPOS?.forEach(row => {
      monthArray.push({
        type: 'POS Invoice',
        date: row.invoiceDate,
        number: row.factureNumber,
        description: 'POS Sale',
        amount: parseFloat(row.totalInvoice || 0) / (parseFloat(row.rate) || 1),
        payment: parseFloat(row.totalInvoice || row.TotalAmountPaid || 0) / (parseFloat(row.rate) || 1)
      })
    })
  }

  if (type === 'Cash In' || type === 'Gross Cash Flow' || type === 'All' || !type) {
    filterMonthPayment?.forEach(row => {
      if (row.status === 'Voided') return;
      
      // Business Rule: POS Invoices are already added separately above from filterMonthPOS.
      // We skip them here to avoid double-counting in the table rows if type is All.
      if (row.transactionType === 'POS' && (type === 'All' || !type)) return;

      // Business Rule: Advanced Payment (Credit) does not count as Cash In until applied to an invoice
      const isAdvancedPayment = (row.transactionType !== 'POS') && (row.TotalAmount?.length === 0 || !row.TotalAmount) && (parseFloat(row.remaining || row.credit || 0) > 0);
      if (isAdvancedPayment) return;

      // Use the sum of applied amounts (TotalAmount) instead of gross amount (row.amount)
      // to ensure 'Credit' (unapplied balance) is not counted in Cash In.
      const appliedTotal = (row.TotalAmount?.length > 0) 
        ? row.TotalAmount.reduce((s, it) => s + parseFloat(it.total || it.amount || 0), 0)
        : parseFloat(row.amount || 0);

      const val = isFinite(appliedTotal) ? appliedTotal : 0;

      monthArray.push({
        type: 'Payment',
        date: row.paymentDate,
        number: row.paymentNumber,
        numberArray: row.TotalAmount !== null ? row.TotalAmount : [],
        defect: row.modes,
        payment: row.transactionType === 'Refund' ? -val : val,
        status: row.status || 'Cleared',
        credit: parseFloat(row.remaining || 0),
        transactionType: row.transactionType || 'Payment'
      })
    })
  }

  if (type === 'Expenses' || type === 'Cash Out' || type === 'Net Income' || type === 'Gross Cash Flow' || type === 'All' || !type) {
    filterMonthPayRoll?.forEach(row => {
      monthArray.push({
        type: 'Pay Slip',
        month: row.month,
        date: row.payDate,
        number: row.payNumber,
        description: 'Net Payable For ' + (row.employeeName?.name || 'Employee'),
        amount: parseFloat(row.totalPaidDollars || row.total || 0),
      })
    })
    if (type === 'Cash Out' || type === 'Gross Cash Flow') {
        filterMonthItemPayments?.forEach(row => {
          const rateToUse = parseFloat(row.rate || systemRate || 1);
          const convertedAmount = parseFloat(row.totalUSD || (parseFloat(row.amount || 0) + (parseFloat(row.amountFC || 0) / rateToUse)) || 0);
          
          monthArray.push({
            type: 'Item Purchase Payment',
            date: row.date,
            number: row.itemPurchaseNumber,
            reason: row.reason,
            description: `Payment for IP-${row.itemPurchaseNumber} (${row.projectName !== undefined ? row.projectName.name : row.description})`,
            amount: convertedAmount,
          })
        })
    } else {
      filterMonthItemPurchase?.forEach(row => {
        monthArray.push({
          type: 'Item Purchase',
          date: row.itemPurchaseDate,
          number: row.itemPurchaseNumber,
          reason: row.reason,
          description: row.projectName !== undefined ? row.projectName.name : row.description,
          amount: parseFloat(row.totalUSD || row.total || row.amount || 0),
        })
      })
    }
    filterMonthExpenses?.forEach(row => {
      monthArray.push({
        type: 'Expenses',
        date: row.expenseDate,
        number: row.expenseNumber,
        reason: row.expenseCategory?.expensesCategory + ' For ' + row.accountName,
        description: row.accountNameInfo !== undefined ? row.accountNameInfo.name : row.description,
        amount: parseFloat(row.total || 0),
      })
    })
  }
  const [TotalExpenses, setTotalExpenses] = useState(0);
  const [TotalDExpenses, setTotalDExpenses] = useState(0);
  const [TotalItemPurchase, setTotalItemPurchase] = useState(0);
  const [TotalPayRoll, setTotalPayRoll] = useState(0);
  const [TotalInvoices, setTotalInvoices] = useState(0);
  const [TotalPOS, setTotalPOS] = useState(0);
  const [TotalRevenue, setTotalRevenue] = useState(0);

  const [directCollections, setDirectCollections] = useState(0);
  const [posCollections, setPosCollections] = useState(0);
  const [totalCashIn, setTotalCashIn] = useState(0);
  const [totalCashOut, setTotalCashOut] = useState(0);
  const [grossCashFlow, setGrossCashFlow] = useState(0);
  const [totalNewCredit, setTotalNewCredit] = useState(0);
  const [totalCreditSettled, setTotalCreditSettled] = useState(0);
  const [netCreditActivity, setNetCreditActivity] = useState(0);

  const handleChangeSelected = (e) => {
    setSelectOptions(e.target.value)
    setMonth('');
  }

  useEffect(() => {
    // 1. Direct Invoice Collections vs POS Cash Collections
    let dirColl = 0;
    let posColl = 0;
    filterMonthPayment?.forEach(row => {
      if (row.status === 'Voided') return;
      const isAdvancedPayment = (row.transactionType !== 'POS') && (row.TotalAmount?.length === 0 || !row.TotalAmount) && (parseFloat(row.remaining || row.credit || 0) > 0);
      if (isAdvancedPayment) return;
      const appliedTotal = (row.TotalAmount?.length > 0)
        ? row.TotalAmount.reduce((s, it) => s + parseFloat(it.total || it.amount || 0), 0)
        : parseFloat(row.amount || 0);
      const val = isFinite(appliedTotal) ? (row.transactionType === 'Refund' ? -appliedTotal : appliedTotal) : 0;
      if (row.transactionType === 'POS') {
        posColl += val;
      } else {
        dirColl += val;
      }
    });

    const totCashIn = dirColl + posColl;

    // 2. Accrual Revenue
    const TInvoice = filterMonthAllInvoices?.length > 0 ? filterMonthAllInvoices.filter(r => r.status && !['Draft', 'Decline', 'Void', 'Free of Charge'].includes(r.status)).reduce((sum, row) => sum + (parseFloat(row.totalInvoice || 0) || 0), 0) : 0;
    const TPOS = filterMonthPOS?.length > 0 ? filterMonthPOS.reduce((sum, row) => sum + ((parseFloat(row.totalInvoice || 0) || 0) / (parseFloat(row.rate) || 1)), 0) : 0;
    const grossAccrualRevenue = TInvoice + TPOS;

    // 3. Accrual Expenses
    const TPayRoll = filterMonthPayRoll?.length > 0 ? filterMonthPayRoll.reduce((sum, row) => sum + (parseFloat(row.totalPaidDollars || row.total || 0) || 0), 0) : 0;
    const TPayExpenses = filterMonthExpenses?.length > 0 ? filterMonthExpenses.reduce((sum, row) => sum + (parseFloat(row.total || 0) || 0), 0) : 0;
    const TPayItemPurchaseAccrual = filterMonthItemPurchase?.length > 0 ? filterMonthItemPurchase.reduce((sum, row) => sum + (parseFloat(row.totalUSD || row.total || row.amount || 0) || 0), 0) : 0;
    const totAccrualExpenses = TPayRoll + TPayExpenses + TPayItemPurchaseAccrual;

    // 4. Cash Out (Disbursements)
    const TPayItemPurchaseCash = filterMonthItemPayments?.length > 0 ? filterMonthItemPayments.reduce((sum, row) => {
      const rateToUse = parseFloat(row.rate || systemRate || 1);
      return sum + (parseFloat(row.totalUSD || (parseFloat(row.amount || 0) + (parseFloat(row.amountFC || 0) / rateToUse)) || 0) || 0);
    }, 0) : 0;
    const totCashOut = TPayRoll + TPayExpenses + TPayItemPurchaseCash;

    // 5. Net Income & Gross Cash Flow
    const netAccrualIncome = grossAccrualRevenue - totAccrualExpenses;
    const netGrossCashFlow = totCashIn - totCashOut;

    // 6. Monthly Credit Activity
    let newCredit = 0;
    let settledCredit = 0;
    filterMonthPayment?.forEach(row => {
      if (row.status === 'Voided') return;
      if (row.modes === 'Credit' || (row.modes === 'Cash' && parseFloat(row.remaining || 0) > 0) || (row.modes === 'Bank Transfer' && parseFloat(row.remaining || 0) > 0)) {
        newCredit += parseFloat(row.remaining || 0);
      } else if (row.modes === 'Credit-Account') {
        settledCredit += parseFloat(row.amount || 0);
      }
    });

    setDirectCollections(dirColl);
    setPosCollections(posColl);
    setTotalCashIn(totCashIn);
    setTotalCashOut(totCashOut);
    setGrossCashFlow(netGrossCashFlow);
    setTotalInvoices(TInvoice);
    setTotalPOS(TPOS);
    setTotalRevenue(grossAccrualRevenue);
    setTotalPayRoll(TPayRoll);
    setTotalDExpenses(TPayExpenses);
    setTotalItemPurchase(type === 'Cash Out' || type === 'Gross Cash Flow' ? TPayItemPurchaseCash : TPayItemPurchaseAccrual);
    setTotalExpenses(type === 'Cash Out' || type === 'Gross Cash Flow' ? totCashOut : totAccrualExpenses);
    setTotalNewCredit(newCredit);
    setTotalCreditSettled(settledCredit);
    setNetCreditActivity(newCredit - settledCredit);
  }, [filterMonthPayment, filterMonthPayRoll, filterMonthExpenses, filterMonthItemPurchase, filterMonthItemPayments, filterMonthAllInvoices, filterMonthPOS, type, systemRate]);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  })

  const data = [
    { label: 'Total DailyExpenses', value: TotalDExpenses },
    { label: 'Total ItemPurchase', value: TotalItemPurchase },
    { label: 'Total PayRol', value: TotalPayRoll },
    { label: 'Total Payment', value: totalCashIn },
    { label: 'Total Expenses', value: TotalExpenses },
    { label: 'Revenue', value: TotalRevenue },
  ];
  const palette = ['#eab308', '#643047', '#f97316', '#2563eb', '#ef4444', '#16a34a'];
  const getTransactionDetail = (row) => {
    try {
      if (row.type === 'Item Purchase' || row.type === 'Item Purchase Payment') {
        return `Ref PUR-${String(row.number).padStart(5, '0')} / ${row.description || ''}`;
      }
      if (row.type === 'Expenses') {
        return `Ref D-${String(row.number).padStart(5, '0')} / ${row.reason || ''} / ${row.description || ''}`;
      }
      if (row.type === 'Pay Slip') {
        return `${row.description || ''} Ref PAY-${String(row.number).padStart(5, '0')}`;
      }
      if (row.type === 'Payment') {
        const typeLabel = row.transactionType === 'Refund' ? 'Refund' : 'Payment';
        if (row.numberArray?.length === 0) {
          if (row.credit > 0) {
            return `PAY-${String(row.number).padStart(5, '0')} $${row.credit.toLocaleString()} In Advanced Payment (Credit)`;
          }
          return `Shop ${typeLabel} Number ${row.number || ''}`;
        }
        const invoices = row.numberArray?.map((r) => `INV-${String(r.Ref).padStart(5, '0')}`).join(', ') || '';
        return `PAY-${String(row.number).padStart(5, '0')} $${Math.abs(row.payment || 0).toLocaleString()} for ${row.transactionType === 'Refund' ? 'refund' : 'payment'} of ${invoices} / Mode: ${row.defect || ''}${row.status === 'Voided' ? ' [VOIDED]' : ''}`;
      }
      if (row.type === 'Direct Invoice') {
        return `Invoice INV-${String(row.number).padStart(5, '0')} / ${row.description || ''}`;
      }
      if (row.type === 'POS Invoice') {
        return `S-${String(row.number).padStart(5, '0')} / ${row.description || ''}`;
      }
      if (row.type === 'New Credit Issued' || row.type === 'Credit Settled') {
        return row.description || '';
      }
      return '';
    } catch (e) {
      console.error("Error rendering detail:", e);
      return "Error rendering detail";
    }
  };
  let amount3 = 0;
  const Revenue = monthArray?.sort((a, b) => new Date(a.date) - new Date(b.date)).map((row) => {
    if (row.type === 'Payment' || row.type === 'Direct Invoice' || row.type === 'POS Invoice') {
      if (row.status !== 'Voided') {
        const val = (type === 'Revenue' || type === 'Net Income' || type === 'All' || !type) ? parseFloat(row.amount || 0) : parseFloat(row.payment || 0);
        amount3 += (isNaN(val) ? 0 : (row.transactionType === 'Refund' ? -val : val))
      }
    } else {
      const val = parseFloat(row.amount || 0);
      amount3 -= (isNaN(val) ? 0 : val);
    }
    let displayPayment = 0;
    if (['Payment', 'Direct Invoice', 'POS Invoice'].includes(row.type)) {
      if (row.type === 'Payment' && (row.numberArray?.length === 0 && (row.credit || 0) > 0)) {
        displayPayment = 0;
      } else {
        displayPayment = parseFloat(row.transactionType === 'Refund' ? -row.payment : row.payment);
      }
    }

    return ({
      ...row,
      date: dayjs(row.date).format('DD/MM/YYYY'),
      Details: getTransactionDetail(row),
      balance: `$${(isNaN(amount3) ? 0 : amount3).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
      amount: !['Payment'].includes(row.type) ? `$${parseFloat(row.amount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : '',
      payment: ['Payment', 'Direct Invoice', 'POS Invoice'].includes(row.type) ? `$${displayPayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : '',
    })
  });

  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const workSheet = workbook.addWorksheet('Sheet1');
    workSheet.columns = [
      { header: "Date", key: 'date', width: 20 },
      { header: "Type", key: 'type', width: 20 },
      { header: "Detail", key: 'Details', width: 40 },
      { header: "Amount", key: 'amount', width: 20 },
      { header: "Payments", key: 'payment', width: 20 },
      { header: "Balance", key: 'balance', width: 20 },
    ];

    Revenue.forEach(item => {
      workSheet.addRow(item)
    });
    const buffer = await workbook.xlsx.writeBuffer();
    const bold = new Blob([buffer], { type: 'application/octet-stream' });
    saveAs(bold, 'Statement_of_Accounts.xlsx')
  }

  let amount2 = 0;

  const allStandingRow = monthArray?.sort((a, b) => new Date(a.date) - new Date(b.date)).map((row, i) => {
    if (row.type === 'Payment' || row.type === 'Direct Invoice' || row.type === 'POS Invoice') {
      if (row.status !== 'Voided') {
        let val = 0;
        const isAdvancedPayment = row.type === 'Payment' && (row.numberArray?.length === 0 && (row.credit || 0) > 0);

        if (isAdvancedPayment) {
          val = 0;
        } else if (type === 'Revenue' || type === 'Net Income' || type === 'All' || !type) {
           val = parseFloat(row.amount || 0);
        } else {
           val = parseFloat(row.payment || 0);
        }
        
        if (!isFinite(val)) val = 0;
        amount2 += val;
      }
    } else {
      let val = parseFloat(row.amount || 0);
      if (!isFinite(val)) val = 0;
      amount2 -= val;
    }
    if (!isFinite(amount2)) amount2 = 0;

    let displayPaymentValue = 0;
    if (['Payment', 'Direct Invoice', 'POS Invoice'].includes(row.type)) {
      if (row.type === 'Payment' && (row.numberArray?.length === 0 && (row.credit || 0) > 0)) {
        displayPaymentValue = 0;
      } else {
        displayPaymentValue = parseFloat(row.transactionType === 'Refund' ? -row.payment : row.payment);
      }
    }

    const typeLabel = row.type === 'Payment' ? (row.transactionType === 'Refund' ? 'Refund' : 'Payment') : row.type;
    return (
      <tr key={i} style={{ opacity: row.status === 'Voided' ? 0.5 : 1, textDecoration: row.status === 'Voided' ? 'line-through' : 'none', backgroundColor: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
        <td style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #e2e8f0' }}>{dayjs(row.date).format('DD/MM/YYYY')}</td>
        <td style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #e2e8f0' }}>
          <span style={{
            display: 'inline-block',
            padding: '3px 8px',
            borderRadius: '6px',
            fontSize: '11px',
            fontWeight: 600,
            backgroundColor: ['Direct Invoice', 'POS Invoice'].includes(row.type) ? '#dcfce7' : (row.type === 'Payment' ? '#e0e7ff' : (row.type === 'Expenses' ? '#fee2e2' : '#f1f5f9')),
            color: ['Direct Invoice', 'POS Invoice'].includes(row.type) ? '#15803d' : (row.type === 'Payment' ? '#4338ca' : (row.type === 'Expenses' ? '#b91c1c' : '#334155'))
          }}>
            {typeLabel}
          </span>
        </td>
        <td style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #e2e8f0' }}>
          {getTransactionDetail(row)}
          {row.status === 'Voided' && <span style={{ color: 'red', fontWeight: 'bold' }}> [VOIDED]</span>}
        </td>
        <td style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #e2e8f0', fontWeight: '500' }}>{['Direct Invoice', 'POS Invoice', 'Item Purchase', 'Item Purchase Payment', 'Expenses', 'Pay Slip', 'New Credit Issued'].includes(row.type) ? `$${(row.amount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : ''}</td>
        <td style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #e2e8f0', fontWeight: '500' }}>{['Payment', 'Direct Invoice', 'POS Invoice', 'Credit Settled'].includes(row.type) ? `$${displayPaymentValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : ''}</td>
        <td style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #e2e8f0', fontWeight: '600' }}>{`$${amount2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</td>
      </tr>
    )
  })

  const renderSummaryCard = () => {
    return (
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', backgroundColor: '#ffffff', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
        <thead>
          <tr style={{ backgroundColor: '#f1f5f9' }}>
            <th colSpan={2} style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 'bold', color: '#1e293b', borderBottom: '1px solid #cbd5e1' }}>
              Statement Summary - {type || 'All Operations'}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2} style={{ padding: '8px 16px', textAlign: 'right', color: '#64748b', fontSize: '12px', borderBottom: '1px solid #f1f5f9' }}>
              {selectOptions === 'Year' && `Period: 01/01/${transactionYears} To 31/12/${transactionYears}`}
              {selectOptions === 'Custom' && `Period: ${dayjs(fromDate).format('DD/MM/YYYY')} To ${dayjs(endDate).format('DD/MM/YYYY')}`}
              {selectOptions === 'All' && 'All Transactions'}
              {selectOptions === 'Month' && `Period: ${month} ${dayjs(startDate).format('YYYY')}`}
            </td>
          </tr>

          {type === 'Revenue' && (
            <>
              <tr>
                <td style={{ padding: '8px 16px', color: '#334155' }}>POS Cash Sales</td>
                <td style={{ padding: '8px 16px', textAlign: 'right', fontWeight: '500' }}>${TotalPOS.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 16px', color: '#334155' }}>Direct Invoices</td>
                <td style={{ padding: '8px 16px', textAlign: 'right', fontWeight: '500' }}>${TotalInvoices.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
              <tr style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
                <td style={{ padding: '10px 16px', fontWeight: 'bold', color: '#15803d' }}>Total Gross Revenue (Accrual)</td>
                <td style={{ padding: '10px 16px', textAlign: 'right', fontWeight: 'bold', color: '#15803d' }}>${(TotalInvoices + TotalPOS).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
            </>
          )}

          {type === 'Expenses' && (
            <>
              <tr>
                <td style={{ padding: '8px 16px', color: '#334155' }}>Total PayRoll</td>
                <td style={{ padding: '8px 16px', textAlign: 'right', fontWeight: '500' }}>${TotalPayRoll.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 16px', color: '#334155' }}>Item Purchases</td>
                <td style={{ padding: '8px 16px', textAlign: 'right', fontWeight: '500' }}>${TotalItemPurchase.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 16px', color: '#334155' }}>Daily Expenses</td>
                <td style={{ padding: '8px 16px', textAlign: 'right', fontWeight: '500' }}>${TotalDExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
              <tr style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
                <td style={{ padding: '10px 16px', fontWeight: 'bold', color: '#b91c1c' }}>Total Expenses (Accrual)</td>
                <td style={{ padding: '10px 16px', textAlign: 'right', fontWeight: 'bold', color: '#b91c1c' }}>${TotalExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
            </>
          )}

          {type === 'Net Income' && (
            <>
              <tr>
                <td style={{ padding: '8px 16px', color: '#334155' }}>Total Gross Revenue</td>
                <td style={{ padding: '8px 16px', textAlign: 'right', fontWeight: '500', color: '#15803d' }}>${(TotalInvoices + TotalPOS).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 16px', color: '#334155' }}>Total Expenses</td>
                <td style={{ padding: '8px 16px', textAlign: 'right', fontWeight: '500', color: '#b91c1c' }}>${TotalExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
              <tr style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
                <td style={{ padding: '10px 16px', fontWeight: 'bold', color: ((TotalInvoices + TotalPOS) - TotalExpenses) >= 0 ? '#15803d' : '#b91c1c' }}>Net Income (Accrual)</td>
                <td style={{ padding: '10px 16px', textAlign: 'right', fontWeight: 'bold', color: ((TotalInvoices + TotalPOS) - TotalExpenses) >= 0 ? '#15803d' : '#b91c1c' }}>${((TotalInvoices + TotalPOS) - TotalExpenses).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
            </>
          )}

          {type === 'Cash In' && (
            <>
              <tr>
                <td style={{ padding: '8px 16px', color: '#334155' }}>Direct Invoice Collections</td>
                <td style={{ padding: '8px 16px', textAlign: 'right', fontWeight: '500' }}>${directCollections.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 16px', color: '#334155' }}>POS Cash Collections</td>
                <td style={{ padding: '8px 16px', textAlign: 'right', fontWeight: '500' }}>${posCollections.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
              <tr style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
                <td style={{ padding: '10px 16px', fontWeight: 'bold', color: '#15803d' }}>Total Cash In</td>
                <td style={{ padding: '10px 16px', textAlign: 'right', fontWeight: 'bold', color: '#15803d' }}>${totalCashIn.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
            </>
          )}

          {type === 'Cash Out' && (
            <>
              <tr>
                <td style={{ padding: '8px 16px', color: '#334155' }}>Total PayRoll Paid</td>
                <td style={{ padding: '8px 16px', textAlign: 'right', fontWeight: '500' }}>${TotalPayRoll.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 16px', color: '#334155' }}>Paid Item Purchases</td>
                <td style={{ padding: '8px 16px', textAlign: 'right', fontWeight: '500' }}>${TotalItemPurchase.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 16px', color: '#334155' }}>Daily Expenses Paid</td>
                <td style={{ padding: '8px 16px', textAlign: 'right', fontWeight: '500' }}>${TotalDExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
              <tr style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
                <td style={{ padding: '10px 16px', fontWeight: 'bold', color: '#b91c1c' }}>Total Cash Out</td>
                <td style={{ padding: '10px 16px', textAlign: 'right', fontWeight: 'bold', color: '#b91c1c' }}>${totalCashOut.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
            </>
          )}

          {type === 'Gross Cash Flow' && (
            <>
              <tr>
                <td style={{ padding: '8px 16px', color: '#334155' }}>Total Cash In (Collections)</td>
                <td style={{ padding: '8px 16px', textAlign: 'right', fontWeight: '500', color: '#15803d' }}>${totalCashIn.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 16px', color: '#334155' }}>Total Cash Out (Disbursements)</td>
                <td style={{ padding: '8px 16px', textAlign: 'right', fontWeight: '500', color: '#b91c1c' }}>${totalCashOut.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
              <tr style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
                <td style={{ padding: '10px 16px', fontWeight: 'bold', color: grossCashFlow >= 0 ? '#15803d' : '#b91c1c' }}>Gross Cash Flow</td>
                <td style={{ padding: '10px 16px', textAlign: 'right', fontWeight: 'bold', color: grossCashFlow >= 0 ? '#15803d' : '#b91c1c' }}>${grossCashFlow.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
            </>
          )}

          {type === 'Credit Accounts' && (
            <>
              <tr>
                <td style={{ padding: '8px 16px', color: '#334155' }}>New Credit Issued</td>
                <td style={{ padding: '8px 16px', textAlign: 'right', fontWeight: '500', color: '#0369a1' }}>${totalNewCredit.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 16px', color: '#334155' }}>Credit Settled / Paid</td>
                <td style={{ padding: '8px 16px', textAlign: 'right', fontWeight: '500', color: '#15803d' }}>${totalCreditSettled.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
              <tr style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
                <td style={{ padding: '10px 16px', fontWeight: 'bold', color: '#0369a1' }}>Net Monthly Credit Activity</td>
                <td style={{ padding: '10px 16px', textAlign: 'right', fontWeight: 'bold', color: '#0369a1' }}>${netCreditActivity.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
            </>
          )}

          {(!type || type === 'All') && (
            <>
              <tr>
                <td style={{ padding: '8px 16px', color: '#334155' }}>Gross Revenue (Accrual)</td>
                <td style={{ padding: '8px 16px', textAlign: 'right', fontWeight: '500', color: '#15803d' }}>${(TotalInvoices + TotalPOS).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 16px', color: '#334155' }}>Total Expenses (Accrual)</td>
                <td style={{ padding: '8px 16px', textAlign: 'right', fontWeight: '500', color: '#b91c1c' }}>${TotalExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 16px', fontWeight: 'bold', color: ((TotalInvoices + TotalPOS) - TotalExpenses) >= 0 ? '#15803d' : '#b91c1c' }}>Net Income (Accrual)</td>
                <td style={{ padding: '8px 16px', textAlign: 'right', fontWeight: 'bold', color: ((TotalInvoices + TotalPOS) - TotalExpenses) >= 0 ? '#15803d' : '#b91c1c' }}>${((TotalInvoices + TotalPOS) - TotalExpenses).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
              <tr style={{ borderTop: '1px dashed #cbd5e1' }}>
                <td style={{ padding: '8px 16px', color: '#334155' }}>Total Cash In (Collections)</td>
                <td style={{ padding: '8px 16px', textAlign: 'right', fontWeight: '500', color: '#15803d' }}>${totalCashIn.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 16px', color: '#334155' }}>Total Cash Out (Disbursements)</td>
                <td style={{ padding: '8px 16px', textAlign: 'right', fontWeight: '500', color: '#b91c1c' }}>${totalCashOut.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
              <tr style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
                <td style={{ padding: '10px 16px', fontWeight: 'bold', color: grossCashFlow >= 0 ? '#15803d' : '#b91c1c' }}>Gross Cash Flow</td>
                <td style={{ padding: '10px 16px', textAlign: 'right', fontWeight: 'bold', color: grossCashFlow >= 0 ? '#15803d' : '#b91c1c' }}>${grossCashFlow.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <FormControl sx={{ minWidth: '150px' }} size="small">
            <InputLabel id="select">Period Type</InputLabel>
            <Select
              id="selectOptions"
              value={selectOptions}
              onChange={(e) => handleChangeSelected(e)}
              name="selectOptions"
              label="Period Type"
            >
              <MenuItem value="Year">Year</MenuItem>
              <MenuItem value="Month">Month</MenuItem>
              <MenuItem value="Custom">Custom Range</MenuItem>
              <MenuItem value="All">All Transactions</MenuItem>
            </Select>
          </FormControl>
          {selectOptions === "Month" && (
            <FormControl sx={{ minWidth: '150px' }} size="small">
              <InputLabel id="month">Month</InputLabel>
              <Select
                id="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                name="month"
                label="Month"
              >
                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(m => (
                  <MenuItem key={m} value={m}>{m}</MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          {selectOptions === 'Year' && (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  required
                  name='startDate'
                  value={dayjs(startDate)}
                  onChange={(date) => setStartDate(date)}
                  format='YYYY'
                  label='Year'
                  views={['year']}
                  slotProps={{ textField: { size: 'small' } }}
                />
              </DemoContainer>
            </LocalizationProvider>
          )}
          {selectOptions === 'Custom' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker
                    required
                    name='fromDate'
                    label='From'
                    value={dayjs(fromDate)}
                    onChange={(date) => setFromDate(date)}
                    format='DD/MM/YYYY'
                    slotProps={{ textField: { size: 'small' } }}
                  />
                </DemoContainer>
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker
                    required
                    name='endDate'
                    label='To'
                    value={dayjs(endDate)}
                    onChange={(date) => setEndDate(date)}
                    format='DD/MM/YYYY'
                    slotProps={{ textField: { size: 'small' } }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          )}
        </div>
        <section style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <PrintTooltip title="Export to Excel">
            <IconButton onClick={exportToExcel} sx={{ backgroundColor: '#f1f5f9', '&:hover': { backgroundColor: '#e2e8f0' } }}>
              <Explicit sx={{ color: '#15803d' }} />
            </IconButton>
          </PrintTooltip>
          <PrintTooltip title="Print Statement">
            <IconButton onClick={handlePrint} sx={{ backgroundColor: '#f1f5f9', '&:hover': { backgroundColor: '#e2e8f0' } }}>
              <LocalPrintshop sx={{ color: '#1e293b' }} />
            </IconButton>
          </PrintTooltip>
        </section>
      </section>

      {/* Hidden Print Document */}
      <Box hidden>
        <table ref={componentRef} className='invoicedetails' style={{ width: '100%' }}>
          <thead>
            <tr><th></th></tr>
          </thead>
          <tbody>
            <tr>
              <th style={{ borderBottom: '1px solid black' }}>
                <PrintHeader branchId={typeof row !== "undefined" ? row?.branchId : ""} />
              </th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <div style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                    <div style={{ width: '380px' }}>
                      {renderSummaryCard()}
                    </div>
                  </div>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#1e293b', color: '#ffffff' }}>
                        <th style={{ padding: '8px', textAlign: 'left' }}>Date</th>
                        <th style={{ padding: '8px', textAlign: 'left' }}>Type</th>
                        <th style={{ padding: '8px', textAlign: 'left' }}>Details</th>
                        <th style={{ padding: '8px', textAlign: 'left' }}>Amount</th>
                        <th style={{ padding: '8px', textAlign: 'left' }}>Payments</th>
                        <th style={{ padding: '8px', textAlign: 'left' }}>Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allStandingRow}
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                <PrintFooter branchId={typeof row !== "undefined" ? row?.branchId : ""} />
              </td>
            </tr>
          </tfoot>
        </table>
      </Box>

      {/* On-Screen Professional Card */}
      <Box sx={{ padding: '25px', borderRadius: '16px', backgroundColor: '#ffffff' }} component={Paper} elevation={2}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '15px', marginBottom: '20px' }}>
          <div>
            <h2 style={{ margin: 0, fontSize: '22px', fontWeight: 'bold', color: '#0f172a' }}>Statement of Accounts</h2>
            <span style={{ fontSize: '13px', color: '#64748b' }}>Executive Financial Ledger & Cash Flow Summary</span>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span style={{ padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', backgroundColor: '#e0e7ff', color: '#3730a3' }}>
              {type ? `${type} View` : 'Consolidated View'}
            </span>
            <span style={{ padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', backgroundColor: '#f1f5f9', color: '#475569' }}>
              {selectOptions === 'Month' ? `${month} ${dayjs(startDate).format('YYYY')}` : (selectOptions === 'Year' ? `Year ${transactionYears}` : selectOptions)}
            </span>
          </div>
        </div>

        {/* 4 Floating KPI Pill Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
          <div style={{ padding: '16px', borderRadius: '12px', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: 'white', boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.2)' }}>
            <span style={{ fontSize: '12px', opacity: 0.9, fontWeight: '500' }}>Gross Revenue (Accrual)</span>
            <h3 style={{ margin: '4px 0 0 0', fontSize: '22px', fontWeight: 'bold' }}>${(TotalInvoices + TotalPOS).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h3>
          </div>
          <div style={{ padding: '16px', borderRadius: '12px', background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', color: 'white', boxShadow: '0 4px 6px -1px rgba(239, 68, 68, 0.2)' }}>
            <span style={{ fontSize: '12px', opacity: 0.9, fontWeight: '500' }}>Total Expenses (Accrual)</span>
            <h3 style={{ margin: '4px 0 0 0', fontSize: '22px', fontWeight: 'bold' }}>${TotalExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h3>
          </div>
          <div style={{ padding: '16px', borderRadius: '12px', background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', color: 'white', boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.2)' }}>
            <span style={{ fontSize: '12px', opacity: 0.9, fontWeight: '500' }}>Cash In (Collections)</span>
            <h3 style={{ margin: '4px 0 0 0', fontSize: '22px', fontWeight: 'bold' }}>${totalCashIn.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h3>
          </div>
          <div style={{ padding: '16px', borderRadius: '12px', background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', color: 'white', boxShadow: '0 4px 6px -1px rgba(245, 158, 11, 0.2)' }}>
            <span style={{ fontSize: '12px', opacity: 0.9, fontWeight: '500' }}>Gross Cash Flow</span>
            <h3 style={{ margin: '4px 0 0 0', fontSize: '22px', fontWeight: 'bold' }}>${grossCashFlow.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h3>
          </div>
        </div>

        {/* Upper Grid: Pie Chart + Summary Box */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 320px) 1fr', gap: '24px', marginBottom: '24px', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8fafc', borderRadius: '12px', padding: '15px' }}>
            <PieChart
              series={[
                {
                  paddingAngle: 4,
                  innerRadius: 55,
                  outerRadius: 85,
                  data,
                },
              ]}
              colors={palette}
              margin={{ right: 5 }}
              width={260}
              height={200}
              legend={{ hidden: true }}
            />
          </div>
          <div>
            {renderSummaryCard()}
          </div>
        </div>

        {/* Lower Grid: Modern Ledger Table */}
        <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ backgroundColor: '#0f172a', color: '#ffffff' }}>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: '600' }}>Date</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: '600' }}>Transaction Type</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: '600' }}>Transaction Details</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: '600' }}>Amount</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: '600' }}>Payments</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: '600' }}>Running Balance</th>
              </tr>
            </thead>
            <tbody>
              {allStandingRow}
              <tr style={{ backgroundColor: '#f1f5f9', borderTop: '2px solid #cbd5e1' }}>
                <td colSpan={3} style={{ padding: '14px', fontWeight: 'bold' }}></td>
                <td colSpan={2} style={{ padding: '14px', fontWeight: 'bold', textAlign: 'right', color: '#0f172a' }}>
                  {type === 'Net Income' ? 'Net Income (Accrual)' : 
                   (type === 'Cash Out' ? 'Total Cash Out' : 
                   (type === 'Cash In' ? 'Total Cash In' : 
                   (type === 'Gross Cash Flow' ? 'Gross Cash Flow' : 
                   (type === 'Credit Accounts' ? 'Net Credit Activity' : 
                   (type === 'Expenses' ? 'Total Expenses' : 
                   (type === 'Revenue' ? 'Total Revenue' : 'Net Operating Balance'))))))}
                </td>
                <td style={{
                  padding: '14px',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  fontSize: '14px',
                  color: (type === 'Gross Cash Flow' ? (grossCashFlow >= 0 ? '#15803d' : '#b91c1c') : (type === 'Net Income' || type === 'All' || !type ? (((TotalInvoices + TotalPOS) - TotalExpenses) >= 0 ? '#15803d' : '#b91c1c') : '#0f172a'))
                }}>
                  {type === 'Cash In' ? `$${totalCashIn.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` :
                   (type === 'Cash Out' ? `$${totalCashOut.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` :
                   (type === 'Gross Cash Flow' ? `$${grossCashFlow.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` :
                   (type === 'Revenue' ? `$${(TotalInvoices + TotalPOS).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` :
                   (type === 'Expenses' ? `$${TotalExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` :
                   (type === 'Credit Accounts' ? `$${netCreditActivity.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` :
                   `$${amount2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`)))))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Box>
    </div>
  )
}

export default RevenueExpensesAll;
