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
  const [TotalPayment, setTotalPayment] = useState(0);
  const [TotalInvoices, setTotalInvoices] = useState(0);
  const [TotalPOS, setTotalPOS] = useState(0);
  const [TotalRevenue, setTotalRevenue] = useState(0);

  const handleChangeSelected = (e) => {
    setSelectOptions(e.target.value)
    setMonth('');
  }

  useEffect(() => {
    const TPayment = filterMonthPayment?.length > 0 ? filterMonthPayment.reduce((sum, row) => {
      if (row.status === 'Voided') return sum;
      
      // Business Rule: Advanced Payment (Credit) does not count as Cash In until applied to an invoice
      const isAdvancedPayment = (row.transactionType !== 'POS') && (row.TotalAmount?.length === 0 || !row.TotalAmount) && (parseFloat(row.remaining || row.credit || 0) > 0);
      if (isAdvancedPayment) return sum;

      // Use sum of applied totals to exclude 'Credit' from Cash In
      const appliedTotal = (row.TotalAmount?.length > 0) 
        ? row.TotalAmount.reduce((s, it) => s + parseFloat(it.total || it.amount || 0), 0)
        : parseFloat(row.amount || 0);

      const val = isFinite(appliedTotal) ? appliedTotal : 0;
      return row.transactionType === 'Refund' ? sum - val : sum + val;
    }, 0) : 0;

    const TPayRoll = filterMonthPayRoll?.length > 0 ? filterMonthPayRoll.reduce((sum, row) => {
      let val = parseFloat(row.totalPaidDollars || row.total || 0);
      if (isNaN(val)) val = 0;
      return sum + val;
    }, 0) : 0;

    const TPayExpenses = filterMonthExpenses?.length > 0 ? filterMonthExpenses.reduce((sum, row) => {
      let val = parseFloat(row.total || 0);
      if (isNaN(val)) val = 0;
      return sum + val;
    }, 0) : 0;
    
    let TPayItemPurchase = 0;
    if (type === 'Cash Out' || type === 'Gross Cash Flow') {
      TPayItemPurchase = filterMonthItemPayments?.length > 0 ? filterMonthItemPayments.reduce((sum, row) => {
        const rateToUse = parseFloat(row.rate || systemRate || 1);
        let val = parseFloat(row.totalUSD || (parseFloat(row.amount || 0) + (parseFloat(row.amountFC || 0) / rateToUse)) || 0);
        return sum + val;
      }, 0) : 0;
    } else {
      TPayItemPurchase = filterMonthItemPurchase?.length > 0 ? filterMonthItemPurchase.reduce((sum, row) => {
        let val = parseFloat(row.totalUSD || row.total || row.amount || 0);
        if (isNaN(val)) val = 0;
        return sum + val;
      }, 0) : 0;
    }

    const TInvoice = filterMonthAllInvoices?.length > 0 ? filterMonthAllInvoices.filter(r => r.status && !['Draft', 'Decline', 'Void', 'Free of Charge'].includes(r.status)).reduce((sum, row) => {
      let val = parseFloat(row.totalInvoice || 0);
      return sum + val;
    }, 0) : 0;

    const TInvoicePaid = filterMonthAllInvoices?.length > 0 ? filterMonthAllInvoices.filter(r => r.status && !['Draft', 'Decline', 'Void', 'Free of Charge'].includes(r.status)).reduce((sum, row) => {
      let val = parseFloat(row.total || 0);
      return sum + val;
    }, 0) : 0;

    const TPOS = filterMonthPOS?.length > 0 ? filterMonthPOS.reduce((sum, row) => {
      let val = parseFloat((row.totalInvoice || 0) / (row.rate || 1));
      return sum + val;
    }, 0) : 0;

    const TPOSPaid = filterMonthPOS?.length > 0 ? filterMonthPOS.reduce((sum, row) => {
      // Synchronize with AdminHome logic: use totalInvoice if available, otherwise TotalAmountPaid
      let val = parseFloat((row.totalInvoice || row.TotalAmountPaid || 0) / (row.rate || 1));
      return sum + val;
    }, 0) : 0;

    const TExpenses = (parseFloat(TPayRoll) || 0) + (parseFloat(TPayExpenses) || 0) + (parseFloat(TPayItemPurchase) || 0);
    
    let Gain = 0;
    if (type === 'Revenue') {
      Gain = TInvoice + TPOS; // Gross Accrual Revenue
    } else if (type === 'Net Income') {
      Gain = (TInvoice + TPOS) - TExpenses; // Accrual Net Income
    } else if (type === 'Cash In') {
      Gain = TPayment + TPOSPaid; // Total Collections
    } else if (type === 'Cash Out') {
      Gain = TExpenses;
    } else if (type === 'Credit Accounts') {
      Gain = customers ? customers.reduce((sum, c) => sum + (parseFloat(c.credit) || 0), 0) : 0;
    } else {
      // Default / 'All' - shows Accrual Net Income to match the running balance table at the bottom
      Gain = (TInvoice + TPOS) - TExpenses;
    }

    setTotalPayment(TPayment);
    setTotalInvoices(TInvoice);
    setTotalPOS(TPOSPaid);
    setTotalDExpenses(TPayExpenses);
    setTotalPayRoll(TPayRoll);
    setTotalItemPurchase(TPayItemPurchase);
    setTotalExpenses(TExpenses);
    setTotalRevenue(Gain);
  }, [filterMonthPayment, filterMonthPayRoll, filterMonthExpenses, filterMonthItemPurchase, filterMonthItemPayments, filterMonthAllInvoices, filterMonthPOS, type]);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  })

  const data = [
    { label: 'Total DailyExpenses', value: TotalDExpenses },
    { label: 'Total ItemPurchase', value: TotalItemPurchase },
    { label: 'Total PayRol', value: TotalPayRoll },
    { label: 'Total Payment', value: TotalPayment },
    { label: 'Total Expenses', value: TotalExpenses },
    { label: 'Revenue', value: TotalRevenue },
  ];
  const palette = ['yellow', '#643047', 'orange', 'blue', 'red', 'green'];
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
    if (type === 'Credit Accounts') {
      workSheet.columns = [
        { header: "#", key: 'index', width: 10 },
        { header: "Customer Name", key: 'customer', width: 45 },
        { header: "Credit Balance", key: 'credit', width: 25 },
      ];
      customers?.filter(c => parseFloat(c.credit || 0) > 0).forEach((item, i) => {
        workSheet.addRow({
          index: i + 1,
          customer: item.Customer || item.customerName || 'No Name',
          credit: `$${(parseFloat(item.credit) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
        });
      });
      workSheet.addRow({
        index: "",
        customer: "Total Credit Accounts",
        credit: `$${(customers?.reduce((sum, c) => sum + (parseFloat(c.credit) || 0), 0) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
      });
      const buffer = await workbook.xlsx.writeBuffer();
      const bold = new Blob([buffer], { type: 'application/octet-stream' });
      saveAs(bold, 'Credit_Accounts.xlsx');
    } else {
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
      saveAs(bold, 'Revenue.xlsx')
    }
  }

  let amount2 = 0;

  const allStandingRow = monthArray?.sort((a, b) => new Date(a.date) - new Date(b.date)).map((row, i) => {
    if (row.type === 'Payment' || row.type === 'Direct Invoice' || row.type === 'POS Invoice') {
      if (row.status !== 'Voided') {
        let val = 0;
        // Business Rule: Advanced Payment (Credit) does not count as Cash In until applied to an invoice
        const isAdvancedPayment = row.type === 'Payment' && (row.numberArray?.length === 0 && (row.credit || 0) > 0);

        if (isAdvancedPayment) {
          val = 0;
        } else if (type === 'Revenue' || type === 'Net Income' || type === 'All' || !type) {
           val = parseFloat(row.amount || 0);
        } else {
           // For Cash In / Gross Cash Flow, we use the payment amount
           val = parseFloat(row.payment || 0);
        }
        
        if (!isFinite(val)) val = 0;
        
        // If type is NOT Cash In/Gross Cash Flow, we already have signed values or need to sign them
        // But for 'Payment' objects in monthArray, row.payment is already signed!
        amount2 += val;
      }
    } else {
      let val = parseFloat(row.amount || 0);
      if (!isFinite(val)) val = 0;
      amount2 -= val;
    }
    if (!isFinite(amount2)) amount2 = 0; // Absolute safety fallback

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
      <tr key={i} style={{ opacity: row.status === 'Voided' ? 0.5 : 1, textDecoration: row.status === 'Voided' ? 'line-through' : 'none' }}>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{dayjs(row.date).format('DD/MM/YYYY')}</td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{typeLabel}</td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>
          {getTransactionDetail(row)}
          {row.status === 'Voided' && <span style={{ color: 'red', fontWeight: 'bold' }}> [VOIDED]</span>}
        </td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{['Direct Invoice', 'POS Invoice', 'Item Purchase', 'Item Purchase Payment', 'Expenses', 'Pay Slip'].includes(row.type) ? `$${(row.amount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : ''}</td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{['Payment', 'Direct Invoice', 'POS Invoice'].includes(row.type) ? `$${displayPaymentValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : ''}</td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{`$${amount2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</td>
      </tr>
    )
  })

  return (
    <div>
      <section style={{ display: 'flex', alignItems: 'center', gap: '200px' }}>
        <FormControl sx={{ width: '200px' }}>
          <InputLabel id="select">select</InputLabel>
          <Select
            id="selectOptions"
            value={selectOptions}
            onChange={(e) => handleChangeSelected(e)}
            name="selectOptions"
            label="select"
          >
            <MenuItem value="Year">Year</MenuItem>
            <MenuItem value="Month">Month</MenuItem>
            <MenuItem value="Custom">Custom</MenuItem>
            <MenuItem value="All">All</MenuItem>
          </Select>
        </FormControl>
        {
          selectOptions === "Month" && (
            <FormControl sx={{ width: '200px' }}>
              <InputLabel id="month">month</InputLabel>
              <Select
                id="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                name="month"
                label="month"
              >
                <MenuItem value="January">January</MenuItem>
                <MenuItem value="February">February</MenuItem>
                <MenuItem value="March">March</MenuItem>
                <MenuItem value="April">April</MenuItem>
                <MenuItem value="May">May</MenuItem>
                <MenuItem value="June">June</MenuItem>
                <MenuItem value="July">July</MenuItem>
                <MenuItem value="August">August</MenuItem>
                <MenuItem value="September">September</MenuItem>
                <MenuItem value="October">October</MenuItem>
                <MenuItem value="November">November</MenuItem>
                <MenuItem value="December">December</MenuItem>
              </Select>
            </FormControl>
          )
        }
        {
          selectOptions === 'Year' && (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker', 'DatePicker']}>
                <DatePicker
                  required
                  name='startDate'
                  value={dayjs(startDate)}
                  onChange={(date) => setStartDate(date)}
                  format='YYYY'
                  label={'"year"'} views={['year']}
                />
              </DemoContainer>
            </LocalizationProvider>
          )
        }
        {
          selectOptions === 'Custom' && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker']}>
                  <DatePicker
                    required
                    name='fromDate'
                    label='From Date'
                    value={dayjs(fromDate)}
                    onChange={(date) => setFromDate(date)}
                    format='DD/MM/YYYY'
                  />
                </DemoContainer>
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker']}>
                  <DatePicker
                    required
                    name='endDate'
                    label='To Date'
                    value={dayjs(endDate)}
                    onChange={(date) => setEndDate(date)}
                    format='DD/MM/YYYY'
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          )
        }
        <section style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <PrintTooltip title="Export to Excel">
            <IconButton onClick={exportToExcel}>
              <Explicit />
            </IconButton>
          </PrintTooltip>
          <PrintTooltip title="Print">
            <IconButton onClick={handlePrint}>
              <LocalPrintshop />
            </IconButton>
          </PrintTooltip>
        </section>
      </section>
      <br />
      <Box hidden>
        <h2 style={{ fontSize: '25px', color: '#30368a', textAlign: 'center' }}>Statement of Accounts{type && type !== 'All' ? ` - ${type}` : ''}</h2>
        <table ref={componentRef} className='invoicedetails'>
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th style={{ borderBottom: '1px solid black' }}>
                <div className='invoiceTest'>
                  <PrintHeader branchId={typeof row !== "undefined" ? row?.branchId : ""} />
                </div>
              </th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <div>
                  <p className='invoicehr'></p>
                  <div className='content' style={{ marginBottom: '20px', position: 'relative' }}>
                    <section style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                      <address style={{ position: 'relative', lineHeight: 1.35, width: '60%' }}>

                      </address>

                      <table className="firstTable" style={{ position: 'relative', fontSize: '70%', left: '83px', marginBottom: '10px', pageBreakInside: 'auto' }}>
                        <thead>
                          <tr>
                            <th colSpan={2} style={{ backgroundColor: 'white', borderBottom: '1px solid black', textAlign: 'left' }}>Statement of Accounts{type && type !== 'All' ? ` - ${type}` : ''}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan={2} style={{ backgroundColor: 'white', borderBottom: '1px solid black', textAlign: 'right' }}>
                              {
                                selectOptions === 'Year' && (<span>
                                  {dayjs(new Date(transactionYears, 0, 1)).format('DD/MM/YYYY')} To {dayjs(new Date(transactionYears, 11, 31)).format('DD/MM/YYYY')}
                                </span>)
                              }
                              {
                                selectOptions === 'Custom' && (<span>
                                  {dayjs(fromDate).format('DD/MM/YYYY')} To {dayjs(endDate).format('DD/MM/YYYY')}
                                </span>)
                              }
                              {
                                selectOptions === 'All' && (<span>
                                  All Transactions
                                </span>)
                              }
                              {
                                selectOptions === 'Month' && (<span>
                                  For {month} {dayjs(startDate).format('YYYY')}
                                </span>)
                              }
                            </td>
                          </tr>
                        </tbody>
                        {type === 'Credit Accounts' && (
                          <tbody>
                            <tr>
                              <td colSpan={2} style={{ backgroundColor: '#e8f7fe', border: 'none', textAlign: 'left' }}>Credit Summary</td>
                            </tr>
                            <tr>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total Active Credit Accounts</span></td>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${(customers?.reduce((sum, c) => sum + (parseFloat(c.credit) || 0), 0) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                            </tr>
                          </tbody>
                        )}
                        {type === 'Revenue' && (
                          <tbody>
                            <tr>
                              <td colSpan={2} style={{ backgroundColor: '#e8f7fe', border: 'none', textAlign: 'left' }}>Revenue Summary</td>
                            </tr>
                            <tr>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >POS Sale</span></td>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalPOS.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                            </tr>
                            <tr>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total Direct Invoices</span></td>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalInvoices.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                            </tr>
                            <tr>
                              <td style={{ backgroundColor: 'white', borderTop: '1px solid black', fontWeight: 'bold', textAlign: 'left' }}><span >Total Gross Revenue</span></td>
                              <td style={{ backgroundColor: 'white', borderTop: '1px solid black', fontWeight: 'bold', textAlign: 'right' }}><span >{`$${(TotalInvoices + TotalPOS).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                            </tr>
                          </tbody>
                        )}
                        {type === 'Expenses' && (
                          <tbody>
                            <tr>
                              <td colSpan={2} style={{ backgroundColor: '#e8f7fe', border: 'none', textAlign: 'left' }}>Expenses Summary</td>
                            </tr>
                            <tr>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total PayRoll</span></td>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalPayRoll.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                            </tr>
                            <tr>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total Item Purchase</span></td>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalItemPurchase.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                            </tr>
                            <tr>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total Daily Expenses</span></td>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalDExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                            </tr>
                            <tr>
                              <td style={{ backgroundColor: 'white', borderTop: '1px solid black', fontWeight: 'bold', textAlign: 'left' }}><span >Total Expenses</span></td>
                              <td style={{ backgroundColor: 'white', borderTop: '1px solid black', fontWeight: 'bold', textAlign: 'right' }}><span >{`$${TotalExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                            </tr>
                          </tbody>
                        )}
                        {type === 'Cash In' && (
                          <tbody>
                            <tr>
                              <td colSpan={2} style={{ backgroundColor: '#e8f7fe', border: 'none', textAlign: 'left' }}>Cash In Summary</td>
                            </tr>
                            <tr>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Invoice Collections</span></td>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalPayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                            </tr>
                            <tr>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >POS Cash Sales</span></td>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalPOS.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                            </tr>
                            <tr>
                              <td style={{ backgroundColor: 'white', borderTop: '1px solid black', fontWeight: 'bold', textAlign: 'left' }}><span >Total Cash In</span></td>
                              <td style={{ backgroundColor: 'white', borderTop: '1px solid black', fontWeight: 'bold', textAlign: 'right' }}><span >{`$${(TotalPayment + TotalPOS).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                            </tr>
                          </tbody>
                        )}
                        {type === 'Cash Out' && (
                          <tbody>
                            <tr>
                              <td colSpan={2} style={{ backgroundColor: '#e8f7fe', border: 'none', textAlign: 'left' }}>Cash Out Summary</td>
                            </tr>
                            <tr>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total PayRoll</span></td>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalPayRoll.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                            </tr>
                            <tr>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Item Purchase Payments</span></td>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalItemPurchase.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                            </tr>
                            <tr>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total Daily Expenses</span></td>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalDExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                            </tr>
                            <tr>
                              <td style={{ backgroundColor: 'white', borderTop: '1px solid black', fontWeight: 'bold', textAlign: 'left' }}><span >Total Cash Out</span></td>
                              <td style={{ backgroundColor: 'white', borderTop: '1px solid black', fontWeight: 'bold', textAlign: 'right' }}><span >{`$${TotalExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                            </tr>
                          </tbody>
                        )}
                        {(!type || type === 'All' || type === 'Net Income' || type === 'Gross Cash Flow') && (
                          <tbody>
                            <tr>
                              <td colSpan={2} style={{ backgroundColor: '#e8f7fe', border: 'none', textAlign: 'left' }}>Transaction Summary</td>
                            </tr>
                            <tr>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >POS Sale</span></td>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalPOS.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                            </tr>
                            <tr>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total Direct Invoices</span></td>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalInvoices.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                            </tr>
                            <tr>
                              <td style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'left' }}><span >Total Gross Revenue</span></td>
                              <td style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'right' }}><span >{`$${(TotalInvoices + TotalPOS).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                            </tr>
                            <tr>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total PayRoll</span></td>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalPayRoll.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                            </tr>
                            <tr>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total Item Purchase</span></td>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalItemPurchase.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                            </tr>
                            <tr>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total Daily Expenses</span></td>
                              <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalDExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                            </tr>
                            <tr>
                              <td style={{ backgroundColor: 'white', borderBottom: '1px solid black', fontWeight: 'bold', textAlign: 'left' }}><span >Total Expenses</span></td>
                              <td style={{ backgroundColor: 'white', borderBottom: '1px solid black', fontWeight: 'bold', textAlign: 'right' }}><span >{`$${TotalExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                            </tr>
                            <tr>
                              <td style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'left' }}>
                                <span style={{ color: ((TotalInvoices + TotalPOS) - TotalExpenses) >= 0 ? 'green' : 'red' }}>
                                  {type === 'Gross Cash Flow' ? 'Gross Cash Flow' : 'Net Income (Accrual)'}
                                </span>
                              </td>
                              <td style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'right' }}>
                                <span style={{ color: ((TotalInvoices + TotalPOS) - TotalExpenses) >= 0 ? 'green' : 'red' }}>
                                  {`$${((TotalInvoices + TotalPOS) - TotalExpenses).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        )}
                      </table>
                    </section>
                    <section style={{}}>
                      {type === 'Credit Accounts' ? (
                        <table className="secondTable" style={{ fontSize: '70%', marginBottom: '5px', border: '1px solid #DDD', maxHeight: '400px', overflow: 'auto', pageBreakInside: 'auto' }}>
                          <thead>
                            <tr>
                              <th style={{ width: '80px', borderBottom: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>#</th>
                              <th style={{ width: '600px', borderBottom: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Customer Name</th>
                              <th style={{ width: '200px', borderBottom: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Credit Balance</th>
                            </tr>
                          </thead>
                          <tbody>
                            {customers?.filter(c => parseFloat(c.credit || 0) > 0).map((row, i) => (
                              <tr key={row._id}>
                                <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{i + 1}</td>
                                <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{row.Customer || row.customerName || 'No Name'}</td>
                                <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{`$${(parseFloat(row.credit) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</td>
                              </tr>
                            ))}
                            <tr>
                              <td colSpan={2} style={{ fontWeight: 'bold' }}>Total Credit Accounts</td>
                              <td style={{ fontWeight: 'bold' }}>{`$${(customers?.reduce((sum, c) => sum + (parseFloat(c.credit) || 0), 0) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</td>
                            </tr>
                          </tbody>
                        </table>
                      ) : (
                        <table className="secondTable" style={{ fontSize: '70%', marginBottom: '5px', border: '1px solid #DDD', maxHeight: '400px', overflow: 'auto', pageBreakInside: 'auto' }}>
                          <thead>
                            <tr>
                              <th style={{ width: '100px', borderBottom: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Date</th>
                              <th style={{ width: '150px', borderBottom: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Transaction</th>
                              <th style={{ width: '400px', borderBottom: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Details</th>
                              <th style={{ width: '100px', borderBottom: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Amount</th>
                              <th style={{ width: '100px', borderBottom: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Payments</th>
                              <th style={{ width: '150px', borderBottom: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Balance</th>
                            </tr>
                          </thead>
                          <tbody>
                            {allStandingRow}
                            <tr>
                              <td colSpan={3}></td>
                              <td colSpan={2} style={{ fontWeight: 'bold', textAlign: 'right' }}>
                                {type === 'Net Income' ? 'Net Income (Accrual)' : 
                                 (type === 'Cash Out' ? 'Total Cash Out' : 
                                 (type === 'Cash In' ? 'Total Cash In' : 
                                 (type === 'Gross Cash Flow' ? 'Gross Cash Flow' : 
                                 (type === 'Expenses' ? 'Total Expenses' : 
                                 (type === 'Revenue' ? 'Total Revenue' : 'Net Operating Balance')))))}
                              </td>
                              <td style={{ fontWeight: 'bold' }}>{`$${amount2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</td>
                            </tr>
                          </tbody>
                        </table>
                      )}
                    </section>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                <div style={{ position: 'relative', marginTop: '20px' }}>
                  <p hidden>...</p>
                  <p hidden>...</p>
                  <br />
                  <PrintFooter branchId={typeof row !== "undefined" ? row?.branchId : typeof data !== "undefined" ? data?.branchId : ""} />

                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </Box>
      <Box sx={{ padding: '25px', maxWidth: '1300px', margin: '0 auto' }} component={Paper} elevation={3}>
        <div style={{ padding: '20px' }}>
          <PrintHeader branchId={typeof row !== "undefined" ? row?.branchId : typeof data !== "undefined" ? data?.branchId : ""} />
          <hr /><p className='invoicehr'></p>
          <article>
            <section style={{ display: 'flex', justifyContent: 'space-between', marginTop: '25px' }}>
              <address style={{ position: 'relative', lineHeight: 1.35, width: '40%' }}>
                {(!type || type === 'All') && (
                  <PieChart
                    series={[
                      {
                        paddingAngle: 5,
                        innerRadius: 60,
                        outerRadius: 80,
                        data,
                      },
                    ]}
                    colors={palette}
                    margin={{ right: 5 }}
                    width={200}
                    height={200}
                    legend={{ hidden: true }}
                  />
                )}
              </address>
              <table className="firstTable" style={{ position: 'relative', fontSize: '70%', left: '83px', marginBottom: '10px', pageBreakInside: 'auto' }}>
                <thead>
                  <tr>
                    <th colSpan={2} style={{ backgroundColor: 'white', borderBottom: '1px solid black', textAlign: 'left' }}>Statement of Accounts{type && type !== 'All' ? ` - ${type}` : ''}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={2} style={{ backgroundColor: 'white', borderBottom: '1px solid black', textAlign: 'right' }}>
                      {
                        selectOptions === 'Year' && (<span>
                          {dayjs(new Date(transactionYears, 0, 1)).format('DD/MM/YYYY')} To {dayjs(new Date(transactionYears, 11, 31)).format('DD/MM/YYYY')}
                        </span>)
                      }
                      {
                        selectOptions === 'Custom' && (<span>
                          {dayjs(fromDate).format('DD/MM/YYYY')} To {dayjs(endDate).format('DD/MM/YYYY')}
                        </span>)
                      }
                      {
                        selectOptions === 'All' && (<span>
                          All Transactions
                        </span>)
                      }
                      {
                        selectOptions === 'Month' && (<span>
                          For {month} {dayjs(startDate).format('YYYY')}
                        </span>)
                      }
                    </td>
                  </tr>
                </tbody>
                {type === 'Credit Accounts' && (
                  <tbody>
                    <tr>
                      <td colSpan={2} style={{ backgroundColor: '#e8f7fe', border: 'none', textAlign: 'left' }}>Credit Summary</td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total Active Credit Accounts</span></td>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${(customers?.reduce((sum, c) => sum + (parseFloat(c.credit) || 0), 0) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                    </tr>
                  </tbody>
                )}
                {type === 'Revenue' && (
                  <tbody>
                    <tr>
                      <td colSpan={2} style={{ backgroundColor: '#e8f7fe', border: 'none', textAlign: 'left' }}>Revenue Summary</td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >POS Sale</span></td>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalPOS.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total Direct Invoices</span></td>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalInvoices.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: 'white', borderTop: '1px solid black', fontWeight: 'bold', textAlign: 'left' }}><span >Total Gross Revenue</span></td>
                      <td style={{ backgroundColor: 'white', borderTop: '1px solid black', fontWeight: 'bold', textAlign: 'right' }}><span >{`$${(TotalInvoices + TotalPOS).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                    </tr>
                  </tbody>
                )}
                {type === 'Expenses' && (
                  <tbody>
                    <tr>
                      <td colSpan={2} style={{ backgroundColor: '#e8f7fe', border: 'none', textAlign: 'left' }}>Expenses Summary</td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total PayRoll</span></td>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalPayRoll.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total Item Purchase</span></td>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalItemPurchase.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total Daily Expenses</span></td>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalDExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: 'white', borderTop: '1px solid black', fontWeight: 'bold', textAlign: 'left' }}><span >Total Expenses</span></td>
                      <td style={{ backgroundColor: 'white', borderTop: '1px solid black', fontWeight: 'bold', textAlign: 'right' }}><span >{`$${TotalExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                    </tr>
                  </tbody>
                )}
                {type === 'Cash In' && (
                  <tbody>
                    <tr>
                      <td colSpan={2} style={{ backgroundColor: '#e8f7fe', border: 'none', textAlign: 'left' }}>Cash In Summary</td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Invoice Collections</span></td>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalPayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >POS Cash Sales</span></td>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalPOS.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: 'white', borderTop: '1px solid black', fontWeight: 'bold', textAlign: 'left' }}><span >Total Cash In</span></td>
                      <td style={{ backgroundColor: 'white', borderTop: '1px solid black', fontWeight: 'bold', textAlign: 'right' }}><span >{`$${(TotalPayment + TotalPOS).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                    </tr>
                  </tbody>
                )}
                {type === 'Cash Out' && (
                  <tbody>
                    <tr>
                      <td colSpan={2} style={{ backgroundColor: '#e8f7fe', border: 'none', textAlign: 'left' }}>Cash Out Summary</td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total PayRoll</span></td>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalPayRoll.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Item Purchase Payments</span></td>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalItemPurchase.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total Daily Expenses</span></td>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalDExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: 'white', borderTop: '1px solid black', fontWeight: 'bold', textAlign: 'left' }}><span >Total Cash Out</span></td>
                      <td style={{ backgroundColor: 'white', borderTop: '1px solid black', fontWeight: 'bold', textAlign: 'right' }}><span >{`$${TotalExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                    </tr>
                  </tbody>
                )}
                {(!type || type === 'All' || type === 'Net Income' || type === 'Gross Cash Flow') && (
                  <tbody>
                    <tr>
                      <td colSpan={2} style={{ backgroundColor: '#e8f7fe', border: 'none', textAlign: 'left' }}>Transaction Summary</td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >POS Sale</span></td>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalPOS.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total Direct Invoices</span></td>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalInvoices.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'left' }}><span >Total Gross Revenue</span></td>
                      <td style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'right' }}><span >{`$${(TotalInvoices + TotalPOS).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total PayRoll</span></td>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalPayRoll.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total Item Purchase</span></td>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalItemPurchase.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Total Daily Expenses</span></td>
                      <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${TotalDExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: 'white', borderBottom: '1px solid black', fontWeight: 'bold', textAlign: 'left' }}><span >Total Expenses</span></td>
                      <td style={{ backgroundColor: 'white', borderBottom: '1px solid black', fontWeight: 'bold', textAlign: 'right' }}><span >{`$${TotalExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'left' }}>
                        <span style={{ color: ((TotalInvoices + TotalPOS) - TotalExpenses) >= 0 ? 'green' : 'red' }}>
                          {type === 'Gross Cash Flow' ? 'Gross Cash Flow' : 'Net Income (Accrual)'}
                        </span>
                      </td>
                      <td style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'right' }}>
                        <span style={{ color: ((TotalInvoices + TotalPOS) - TotalExpenses) >= 0 ? 'green' : 'red' }}>
                          {`$${((TotalInvoices + TotalPOS) - TotalExpenses).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
            </section>
            {type === 'Credit Accounts' ? (
              <table className="secondTable" style={{ fontSize: '70%', marginBottom: '5px', border: '1px solid #DDD', maxHeight: '400px', overflow: 'auto', pageBreakInside: 'auto' }}>
                <thead>
                  <tr>
                    <th style={{ width: '80px', borderBottom: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>#</th>
                    <th style={{ width: '600px', borderBottom: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Customer Name</th>
                    <th style={{ width: '200px', borderBottom: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Credit Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {customers?.filter(c => parseFloat(c.credit || 0) > 0).map((row, i) => (
                    <tr key={row._id}>
                      <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{i + 1}</td>
                      <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{row.Customer || row.customerName || 'No Name'}</td>
                      <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{`$${(parseFloat(row.credit) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={2} style={{ fontWeight: 'bold' }}>Total Credit Accounts</td>
                    <td style={{ fontWeight: 'bold' }}>{`$${(customers?.reduce((sum, c) => sum + (parseFloat(c.credit) || 0), 0) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <table className="secondTable" style={{ fontSize: '70%', marginBottom: '5px', border: '1px solid #DDD', maxHeight: '400px', overflow: 'auto', pageBreakInside: 'auto' }}>
                <thead>
                  <tr>
                    <th style={{ width: '100px', borderBottom: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Date</th>
                    <th style={{ width: '150px', borderBottom: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Transaction</th>
                    <th style={{ width: '400px', borderBottom: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Details</th>
                    <th style={{ width: '100px', borderBottom: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Amount</th>
                    <th style={{ width: '100px', borderBottom: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Payments</th>
                    <th style={{ width: '150px', borderBottom: '1px solid #DDD', backgroundColor: '#e8f7fe' }} align="left">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {allStandingRow}
                  <tr>
                    <td colSpan={3}></td>
                    <td colSpan={2} style={{ fontWeight: 'bold', textAlign: 'right' }}>
                      {type === 'Net Income' ? 'Net Income (Accrual)' : 
                       (type === 'Cash Out' ? 'Total Cash Out' : 
                       (type === 'Cash In' ? 'Total Cash In' : 
                       (type === 'Gross Cash Flow' ? 'Gross Cash Flow' : 
                       (type === 'Expenses' ? 'Total Expenses' : 
                       (type === 'Revenue' ? 'Total Revenue' : 'Net Operating Balance')))))}
                    </td>
                    <td style={{ fontWeight: 'bold' }}>{`$${amount2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </article>
          <div className='footerinvoice'>
            <p style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
              <span><Email /></span>
              <span>Contact@GlobalGate.Sarl</span>
            </p>
            <p style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
              <span><Phone /></span>
              <span>+243 827 722 222</span>
            </p>
            <p style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
              <span><WebIcon /></span>
              <span>www.GlobalGate.sarl</span>
            </p>
          </div>
        </div>
      </Box>

    </div >
  )
}

export default RevenueExpensesAll
