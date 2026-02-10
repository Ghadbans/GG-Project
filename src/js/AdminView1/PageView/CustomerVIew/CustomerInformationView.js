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
import Logout from '@mui/icons-material/Logout';
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
import db from '../../../dexieDb';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import LocalPrintshop from '@mui/icons-material/LocalPrintshop';
import ExcelJS from 'exceljs'
import { saveAs } from 'file-saver';
import { Cached, Explicit } from '@mui/icons-material';

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
const BlackTooltip = styled(({ className, ...props }) => (
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
function CustomerInformationView() {
  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
        if (navigator.onLine) {
          try {
            const res = await axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-employeeuser/${storesUserId}`)
            const Name = res.data.data.employeeName;
            const Role = res.data.data.role;
            dispatch(setUser({ userName: Name, role: Role }));
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        } else {
          const resLocalInfo = await db.employeeUserSchema.get({ _id: storesUserId })
          const Name = resLocalInfo.employeeName;
          const Role = resLocalInfo.role;
          dispatch(setUser({ userName: Name, role: Role }));
        }
      } else {
        navigate('/');
      }
    }
    fetchUser()
  }, [dispatch]);

  const [grantAccess, setGrantAccess] = useState([]);
  useEffect(() => {
    const fetchNumber = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/grantAccess');
          res.data.data.filter((row) => row.userID === user.data.id)
            .map((row) => setGrantAccess(row.modules))
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        const offLineCustomer1 = await db.grantAccessSchema.toArray();
        offLineCustomer1.filter((row) => row.userID === user.data.id)
          .map((row) => setGrantAccess(row.modules))
      }
    }
    fetchNumber()
  }, [user])
  const customerInfoU = grantAccess.filter((row) => row.moduleName === "Customer" && row.access.editM === true);

  const [customer, setCustomer] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [selectOptions, setSelectOptions] = useState('')
  const apiUrl = 'https://gg-project-productionn.up.railway.app/endpoint/customer';
  useEffect(() => {
    const fetchData = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/customer')
          setCustomer(res.data.data.reverse());
          setLoadingData(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoadingData(false);
        }
      } else {
        const offLineCustomer1 = await db.customerSchema.toArray();
        setCustomer(offLineCustomer1.reverse())
        setLoadingData(false);
      }
    }
    fetchData()
  }, [])
  const [show, setShow] = useState(1);
  const handleShow = (e) => {
    setShow(e);
  }
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  {/** search && Tab */ }
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  useEffect(() => {
    const selectedIndex = customer.findIndex(row => row._id === id);
    if (selectedIndex !== -1) {
      setValue(selectedIndex)
    }
  }, [customer, id])
  const handleChange3 = (e, newValue) => {
    setValue(newValue)
    setSelectOptions('');
  }
  const handleChange2 = (e, newValue) => {
    setValue2(newValue);
    setSelectOptions('');
  }
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    const value = e.target.value
    setSearch(value)
  }
  const newArray = search !== '' ? customer.filter((row) =>
    row.customerType.toLowerCase().includes(search.toLowerCase()) ||
    row.Customer && row.Customer.toLowerCase().includes(search.toLowerCase()) ||
    row.customerEmail && row.customerEmail.toLowerCase().includes(search.toLowerCase()) ||
    row.customerDescription && row.customerDescription.toLowerCase().includes(search.toLowerCase())
  ) : customer
  {/** search && Tab End */ }
  {/* Start Estimate Transaction Information */ }
  const [estimate, setEstimate] = useState([]);
  const [purchase, setPurchase] = useState([]);
  const [invoice, setInvoice] = useState([]);
  const [invoice1, setInvoice1] = useState([]);
  const [maintenance, setMaintenance] = useState([]);
  const [payment, setPayment] = useState([]);
  const [posHistory, setPosHistory] = useState([]);
  const [CustomerInfo, setCustomerInfo] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      if (navigator.onLine) {
        try {
          console.log('🔍 [FILTERED API] Fetching professional customer summary for:', id);

          // Use professional filtered endpoints (Zoho CRM approach)
          // Backend now returns ONLY relevant data for this customer
          const [resCustomer, resEstimate, resInvoice, resPurchase, resMaintenance, resPayment, resPos] = await Promise.all([
            axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-customer/${id}`),
            axios.get(`https://gg-project-productionn.up.railway.app/endpoint/estimation/customer/${id}`),
            axios.get(`https://gg-project-productionn.up.railway.app/endpoint/invoice/customer/${id}`),
            axios.get(`https://gg-project-productionn.up.railway.app/endpoint/purchase/customer/${id}`),
            axios.get(`https://gg-project-productionn.up.railway.app/endpoint/maintenance/customer/${id}`),
            axios.get(`https://gg-project-productionn.up.railway.app/endpoint/payment/customer/${id}`),
            axios.get(`https://gg-project-productionn.up.railway.app/endpoint/pos/customer/${id}`)
          ]);

          setCustomerInfo(resCustomer.data.data.Customer);

          // Data is already filtered by backend - just set it!
          setEstimate(resEstimate.data.data.reverse());
          setInvoice(resInvoice.data.data.reverse());
          setInvoice1(resInvoice.data.data.filter((row) => row.status === 'Sent' || row.status === 'Paid' || row.status === 'Partially-Paid'));
          setPurchase(resPurchase.data.data.reverse());
          setMaintenance(resMaintenance.data.data.reverse());
          setPayment(resPayment.data.data);
          setPosHistory(resPos.data.data.reverse());

          console.log('✅ [FILTERED API] Successfully loaded professional customer summary');
        } catch (error) {
          console.error('❌ [FILTERED API] Error fetching customer data:', error);
        }
      } else {
        const offLineEstimate = await db.estimateSchema.toArray();
        setEstimate(offLineEstimate.filter((row) => row.customerName._id === id).reverse());
        const offLineInvoice = await db.invoiceSchema.toArray();
        setInvoice(offLineInvoice.filter((row) => row.customerName._id === id).reverse());
        const offLinePurchase = await db.purchaseSchema.toArray();
        setPurchase(offLinePurchase.filter((row) => row.customerName._id === id).reverse());
        const offLineMaintenance = await db.maintenanceSchema.toArray();
        setMaintenance(offLineMaintenance.filter((row) => row.customerName._id === id).reverse());
        const offLinePayment = await db.paymentSchema.toArray();
        setPayment(offLinePayment.filter((row) => row.customerName._id === id));
        // Offline POS
        const offLinePos = await db.posSchema.toArray();
        setPosHistory(offLinePos.filter((row) => row.customerName && row.customerName._id === id).reverse());
      }
    }
    fetchData()
  }, [id])

  const [startDate, setStartDate] = useState(() => {
    const storedQuick = JSON.parse(localStorage.getItem('StartDateStatement'))
    return new Date(storedQuick)
  });
  const [fromDate, setFromDate] = useState(() => {
    const storedQuickFrom = JSON.parse(localStorage.getItem('FromDateStatement'))
    return new Date(storedQuickFrom)
  });
  const [endDate, setEndDate] = useState(() => {
    const storedQuickEnd = JSON.parse(localStorage.getItem('EndDateStatement'))
    return new Date(storedQuickEnd)
  });


  const handleChangeDate = (date) => {
    setStartDate(date)
    localStorage.setItem('StartDateStatement', JSON.stringify(date))
  }
  const handleChangeDateFrom = (date) => {
    setFromDate(date)
    localStorage.setItem('FromDateStatement', JSON.stringify(date))
  }
  const handleChangeDateEnd = (date) => {
    setEndDate(date)
    localStorage.setItem('EndDateStatement', JSON.stringify(date))
  }
  {/** Year Statement start */ }
  const statement = [];
  invoice1.forEach(row => {
    statement.push({
      type: 'Invoice',
      date: row.invoiceDate,
      number: row.invoiceNumber,
      defect: row.invoiceDefect + ' / ' + row.invoiceSubject,
      amount: row.totalInvoice,
      balance: row.balanceDue,
      paidAmount: row.total,
      due: row.invoiceDueDate,
      status: row.status
    })
  })
  payment.forEach(row => {
    statement.push({
      type: 'Payment',
      date: row.paymentDate,
      number: row.paymentNumber,
      numberArray: row.TotalAmount,
      defect: row.modes,
      payment: row.amount - row.remaining,
      status: '',
      credit: row.remaining
    })
  })
  let balanceDue = 0;

  const filteredStatement = statement.filter((row) => {
    const transactionYear = dayjs(row.date).format('YYYY')
    return transactionYear === dayjs(startDate).format('YYYY')
  })
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const headers = [];
    const currentDate = new Date(fromDate);
    while (currentDate <= endDate) {
      headers.push(currentDate.toDateString());
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setFilteredData(headers)
  }, [fromDate, endDate])

  const previousYear = new Date(startDate).getFullYear() - 1;
  let prevBalance = 0;

  statement.forEach(row => {
    let credit = 0
    const transaction = new Date(row.date).getFullYear()
    if (transaction <= previousYear) {
      if (row.type === 'Invoice') {
        prevBalance += parseFloat(row.amount)
      } else if (row.type === 'Payment') {
        prevBalance -= parseFloat(row.payment)
        credit = prevBalance
        prevBalance = Math.max(prevBalance, 0)
      }
    }
  })

  const transactionYears = new Date(startDate).getFullYear()
  const lastYearInfo = {
    type: '***Opening Balance***',
    date: new Date(transactionYears, 0, 1),
    number: '',
    numberArray: [],
    defect: '',
    amount: prevBalance,
    status: ''
  }

  const newStatementInfo = [lastYearInfo, ...filteredStatement]


  let credit1 = 0
  payment?.map((row, i) => {
    if (row.modes === 'Credit' || (row.modes === 'Cash' && row.remaining > 0) || (row.modes === 'Bank Transfer' && row.remaining > 0)) {
      credit1 += parseFloat(row.remaining)
    } else if (row.modes === 'Credit-Account') {
      credit1 -= parseFloat(row.amount)
    }
    return credit1 < 0 ? 0 : credit1
  })
  const credit2 = credit1.toFixed(2)
  console.log(credit2)

  const [isCredit, setIsCredit] = useState('')

  const handleUpdateCredit = async (e) => {
    e.preventDefault();
    const data = {
      credit: credit2
    };
    if (navigator.onLine) {
      try {
        const res = await axios.put(`https://gg-project-productionn.up.railway.app/endpoint/update-customer/${id}`, data)
        if (res) {
          setIsCredit('true')
          handleOpen();
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    }
  };


  {/** Year Statement end */ }

  const [newStatement, setNewStatement] = useState([]);
  const [AllStatement, AllNewStatement] = useState([]);
  const [OutStandStatement, setOutStandNewStatement] = useState([]);
  const [customStatement, setCustomNewStatement] = useState([]);

  useEffect(() => {
    if (selectOptions === 'Year') {
      AllNewStatement([])
      setOutStandNewStatement([])
      setCustomNewStatement([])
      setNewStatement(newStatementInfo?.sort((a, b) => new Date(a.date) - new Date(b.date)))
    } else if (selectOptions === 'All') {
      setNewStatement([])
      setOutStandNewStatement([])
      setCustomNewStatement([])
      AllNewStatement(statement?.sort((a, b) => new Date(a.date) - new Date(b.date)))
    } else if (selectOptions === 'All Outstanding') {
      setNewStatement([])
      AllNewStatement([])
      setCustomNewStatement([])
      setOutStandNewStatement(statement.filter((row) => row.status === 'Sent' || row.status === 'Partially-Paid').sort((a, b) => new Date(a.date) - new Date(b.date)))
    } else if (selectOptions === 'Custom') {
      setNewStatement([])
      AllNewStatement([])
      setOutStandNewStatement([])
      setCustomNewStatement(statement.filter((row) => filteredData.find((Item) => dayjs(Item).format('DD/MM/YYYY') === dayjs(row.date).format('DD/MM/YYYY'))).sort((a, b) => new Date(a.date) - new Date(b.date)))
    } else {
      setNewStatement([])
      AllNewStatement([])
      setOutStandNewStatement([])
      setCustomNewStatement([])
    }
  }, [selectOptions, filteredData])
  {/** total year Start */ }
  const [openingBalanceTotal, setOpeningBalanceTotal] = useState(0)
  const [InvoiceTotal, setInvoiceTotal] = useState(0)
  const [PaymentTotal, setPaymentTotal] = useState(0)
  const [totalBalance, setTotalBalance] = useState(0)

  useEffect(() => {
    if (selectOptions === 'Year') {
      const openingBalanceTotal1 = newStatement.length > 0 ? newStatement.filter((row) => row.type === '***Opening Balance***').reduce((sum, row) => sum + parseFloat(row.amount), 0) : 0
      setOpeningBalanceTotal(openingBalanceTotal1)
      const InvoiceTotal1 = newStatement.length > 0 ? newStatement.filter((row) => row.type === 'Invoice').reduce((sum, row) => sum + parseFloat(row.amount), 0) : 0
      setInvoiceTotal(InvoiceTotal1)
      const PaymentTotal1 = newStatement.length > 0 ? newStatement.filter((row) => row.type === 'Payment').reduce((sum, row) => sum + parseFloat(row.payment), 0) : 0
      setPaymentTotal(PaymentTotal1)
      const totalBalance1 = (openingBalanceTotal1 + InvoiceTotal1) - PaymentTotal1
      setTotalBalance(totalBalance1)
    } else if (selectOptions === 'All') {
      setOpeningBalanceTotal(0)
      const InvoiceTotal1 = AllStatement.length > 0 ? AllStatement.filter((row) => row.type === 'Invoice').reduce((sum, row) => sum + parseFloat(row.amount), 0) : 0
      setInvoiceTotal(InvoiceTotal1)
      const PaymentTotal1 = AllStatement.length > 0 ? AllStatement.filter((row) => row.type === 'Payment').reduce((sum, row) => sum + parseFloat(row.payment), 0) : 0
      setPaymentTotal(PaymentTotal1)
      const totalBalance1 = InvoiceTotal1 - PaymentTotal1
      setTotalBalance(totalBalance1)
    } else if (selectOptions === 'All Outstanding') {
      setOpeningBalanceTotal(0)
      const InvoiceTotal1 = OutStandStatement.length > 0 ? OutStandStatement.filter((row) => row.type === 'Invoice').reduce((sum, row) => sum + parseFloat(row.amount), 0) : 0
      const InvoiceTotal2 = OutStandStatement.length > 0 ? OutStandStatement.filter((row) => row.type === 'Invoice').reduce((sum, row) => sum + parseFloat(row.balance), 0) : 0
      const InvoiceTotal3 = OutStandStatement.length > 0 ? OutStandStatement.filter((row) => row.type === 'Invoice').reduce((sum, row) => sum + parseFloat(row.paidAmount), 0) : 0
      setInvoiceTotal(InvoiceTotal1)
      setPaymentTotal(InvoiceTotal3)
      setTotalBalance(InvoiceTotal2)
    } else if (selectOptions === 'Custom') {
      setOpeningBalanceTotal(0)
      const InvoiceTotal1 = customStatement.length > 0 ? customStatement.filter((row) => row.type === 'Invoice').reduce((sum, row) => sum + parseFloat(row.amount), 0) : 0
      setInvoiceTotal(InvoiceTotal1)
      const PaymentTotal1 = customStatement.length > 0 ? customStatement.filter((row) => row.type === 'Payment').reduce((sum, row) => sum + parseFloat(row.payment), 0) : 0
      setPaymentTotal(PaymentTotal1)
      const totalBalance1 = InvoiceTotal1 - PaymentTotal1
      setTotalBalance(totalBalance1)
    }
  }, [selectOptions, newStatement, AllStatement, OutStandStatement, customStatement])

  {/** total year end */ }

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Statement For ' + CustomerInfo,
    onBeforeGetContent: () => {
      const PAGE_HEIGHT = 1045;
      const printElement = componentRef.current;
      if (printElement) {
        printElement.classList.add("temp-class-for-height")
        const height = printElement.clientHeight
        const numberOfPage = Math.ceil(height / PAGE_HEIGHT)
        if (numberOfPage > 1) {
          const heightWithSingleHeader = numberOfPage * PAGE_HEIGHT
          let requiredHeight = heightWithSingleHeader
          const headerHeight = printElement.getElementsByTagName("thead")?.[0]?.clientHeight
          const footerHeight = printElement.getElementsByTagName("tfoot")?.[0]?.clientHeight
          requiredHeight -= (numberOfPage - 1) * (headerHeight + footerHeight)
          printElement.style.height = `${requiredHeight}px`;
        }
        printElement.classList.remove("temp-class-for-height")
      }
    },
    onAfterPrint: () => {
      const printElement = componentRef.current;
      if (printElement) {
        printElement.style.height = `auto`
      }
    }
  })
  const componentRef1 = useRef();

  const handlePrint1 = useReactToPrint({
    content: () => componentRef1.current,
    documentTitle: 'Statement For ' + CustomerInfo,
    onBeforeGetContent: () => {
      const PAGE_HEIGHT = 1045;
      const printElement = componentRef1.current;
      if (printElement) {
        printElement.classList.add("temp-class-for-height")
        const height = printElement.clientHeight
        const numberOfPage = Math.ceil(height / PAGE_HEIGHT)
        if (numberOfPage > 1) {
          const heightWithSingleHeader = numberOfPage * PAGE_HEIGHT
          let requiredHeight = heightWithSingleHeader
          const headerHeight = printElement.getElementsByTagName("thead")?.[0]?.clientHeight
          const footerHeight = printElement.getElementsByTagName("tfoot")?.[0]?.clientHeight
          requiredHeight -= (numberOfPage - 1) * (headerHeight + footerHeight)
          printElement.style.height = `${requiredHeight}px`;
        }
        printElement.classList.remove("temp-class-for-height")
      }
    },
    onAfterPrint: () => {
      const printElement = componentRef1.current;
      if (printElement) {
        printElement.style.height = `auto`
      }
    }
  })

  const handleOpenPrint = () => {
    handlePrint()
    setAnchorEl(null);
  };
  const handleOpenPrint1 = () => {
    handlePrint1()
    setAnchorEl(null);
  };
  const [show1, setShow1] = useState(1);
  const handleShow1 = (e) => {
    setShow1(e);
    setAnchorEl(null);
  }
  const [reason, setReason] = useState("");
  const [Comments1, setComments] = useState([]);
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    const fetchComment = async () => {

      try {
        const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/comment')
        const resp = res.data.data.filter((row) => row.CommentInfo.idInfo === id)
        setComments(resp.reverse())
        const resNotification = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/notification')
        setNotification(resNotification.data.data.filter((row) => row.idInfo === id))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchComment()
  }, [id])

  const CommentInfo =
  {
    idInfo: id,
    person: user.data.userName,
    reason
  }

  {/** Loading Start */ }

  const [loading, setLoading] = useState(false);
  const [loadingOpenModal, setLoadingOpenModal] = useState(false);
  const [ErrorOpenModal, setErrorOpenModal] = useState(false);

  const handleOpen = () => {

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
  const handleClose = () => {
    if (isCredit === 'true') {
      window.location.reload()
    } else {
      setLoadingOpenModal(false);
    }
  }
  const handleCloseError = () => {
    setErrorOpenModal(false);
  }
  {/** Loading End */ }
  const dateComment = dayjs(Date.now());

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    const data = {
      CommentInfo,
      dateComment
    };
    try {
      const res = await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-comment/', data)
      if (res) {
        setReason("");
        handleOpen();
        const newData = res.data.data
        setComments([newData, ...Comments1])
      }
    } catch (error) {
      if (error) {
        handleError();
      }
    }
  }
  const [customer2, SetCustomer2] = useState({})
  const [show2, setShow2] = useState(1);
  const handleShow2 = (e) => {
    setShow2(e);
  }
  const [value3, setValue3] = React.useState('1');

  useEffect(() => {
    const result = localStorage.getItem('TabPanelCustomerView')
    if (result) {
      setValue3(result)
    }
  })
  const handleChange4 = (event, newValue) => {
    const changeValue = newValue
    setValue3(changeValue);
    localStorage.setItem('TabPanelCustomerView', changeValue)
  };
  const [sideBar, setSideBar] = React.useState(true);
  const toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  let amount1 = 0
  const customRow = customStatement?.map((row, i) => {
    let credit = 0
    if (row.type === 'Invoice' || row.type === '***Opening Balance***') {
      amount1 += parseFloat(row.amount)
    } else if (row.type === 'Payment') {
      amount1 -= parseFloat(row.payment)
    }
    return (
      <tr key={i}>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{dayjs(row.date).format('DD/MM/YYYY')}</td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{row.type}</td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>
          <span>{row.type === 'Invoice' && ('Ref ' + row.defect + ' INV-0' + row.number + ' - due on ' + dayjs(row.due).format('DD MMMM YYYY'))}</span>
          <span>{row.type === 'Payment' && row.numberArray.length === 0 && row.credit > 0 && ('PAY-0' + row.number + ' $' + row.credit + ' In Advanced Payment (Credit) ')}</span>
          <span>{row.type === 'Payment' && row.numberArray.length > 0 && ('PAY-0' + row.number + ' $' + row.payment + ' for payment of ' + row.numberArray?.map((row2) => 'INV-0' + row2.Ref) + ' / Mode: ' + row.defect)}</span>
        </td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{row.type === 'Invoice' || row.type === '***Opening Balance***' ? `$${row.amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : ''}</td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{row.type === 'Payment' ? `$${row.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : ''}</td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{`$${amount1.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</td>
      </tr>
    )
  })
  let amount2 = 0
  const allStandingRow = OutStandStatement?.map((row, i) => {
    if (row.type === 'Invoice' || row.type === '***Opening Balance***') {
      amount2 += parseFloat(row.balance)
    } else if (row.type === 'Payment') {
      amount2 -= parseFloat(row.payment)
    }
    return (
      <tr key={i}>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{dayjs(row.date).format('DD/MM/YYYY')}</td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{row.type}</td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>
          <span>{row.type === 'Invoice' && ('Ref ' + row.defect + ' INV-0' + row.number + ' - due on ' + dayjs(row.due).format('DD MMMM YYYY'))}</span>
          <span>{row.type === 'Payment' && row.credit > 0 && ('PAY-0' + row.number + ' $' + row.credit + ' In Advanced Payment (Credit) ')}</span>
          <span>{row.type === 'Payment' && row.numberArray?.length > 0 && ('PAY-0' + row.number + ' $' + row.payment + ' for payment of ' + row.re + row.numberArray?.map((row2) => 'Ref-0' + row2.Ref) + ' / Mode: ' + row.defect)}</span>
        </td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{row.type === 'Invoice' || row.type === '***Opening Balance***' ? `$${row.amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : ''}</td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{`$${row.paidAmount?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{`$${amount2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</td>
      </tr>
    )
  })
  let amount3 = 0
  const allRow = AllStatement?.map((row, i) => {
    if (row.type === 'Invoice' || row.type === '***Opening Balance***') {
      amount3 += parseFloat(row.amount)
    } else if (row.type === 'Payment') {
      amount3 -= parseFloat(row.payment)
    }
    return (
      <tr key={i}>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{dayjs(row.date).format('DD/MM/YYYY')}</td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{row.type}</td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>
          <span>{row.type === 'Invoice' && ('Ref ' + row.defect + ' INV-0' + row.number + ' - due on ' + dayjs(row.due).format('DD MMMM YYYY'))}</span>
          <span>{row.type === 'Payment' && row.credit > 0 && ('PAY-0' + row.number + ' $' + row.credit + ' In Advanced Payment (Credit) ')}</span>
          <span>{row.type === 'Payment' && row.numberArray?.length > 0 && ('PAY-0' + row.number + ' $' + row.payment + ' for payment of ' + row.re + row.numberArray?.map((row2) => 'Ref-0' + row2.Ref) + ' / Mode: ' + row.defect)}</span>
        </td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{row.type === 'Invoice' || row.type === '***Opening Balance***' ? `$${row.amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : ''}</td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{row.type === 'Payment' ? `$${row.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : ''}</td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{`$${amount3.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</td>
      </tr>
    )
  })
  let amount4 = 0
  const yearRow = newStatement?.map((row, i) => {
    let credit = 0
    if (row.type === 'Invoice' || row.type === '***Opening Balance***') {
      amount4 += parseFloat(row.amount)
    } else if (row.type === 'Payment') {
      amount4 -= parseFloat(row.payment)
    }
    return (
      <tr key={i}>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{dayjs(row.date).format('DD/MM/YYYY')}</td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{row.type}</td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>
          <span>{row.type === 'Invoice' && ('Ref ' + row.defect + ' INV-0' + row.number + ' - due on ' + dayjs(row.due).format('DD MMMM YYYY'))}</span>
          <span>{row.type === 'Payment' && row.numberArray.length === 0 && row.credit > 0 && ('PAY-0' + row.number + ' $' + row.credit + ' In Advanced Payment (Credit) ')}</span>
          <span>{row.type === 'Payment' && row.numberArray.length > 0 && ('PAY-0' + row.number + ' $' + row.payment + ' for payment of ' + row.numberArray?.map((row2) => 'INV-0' + row2.Ref) + ' / Mode: ' + row.defect)}</span>
        </td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{row.type === 'Invoice' || row.type === '***Opening Balance***' ? `$${row.amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : ''}</td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{row.type === 'Payment' ? `$${row.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : ''}</td>
        <td style={{ textAlign: 'left', borderBottom: '1px solid #DDD' }}>{`$${amount4.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</td>
      </tr>
    )
  })


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
              Customer View
            </Typography>
            <IconButton onClick={() => navigate('/CustomerViewAdmin')}>
              <ArrowBack style={{ color: 'white' }} />
            </IconButton>
            <NotificationVIewInfo />
            <MessageAdminView name={user.data.userName} role={user.data.role} />
            <Typography sx={{ marginLeft: '10px', marginRight: '10px' }}>{user.data.userName}</Typography>
            <IconButton color="inherit" onClick={handleLogout}>
              <Logout style={{ color: 'white' }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={sideBar}>
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
          <Container maxWidth="none" sx={{ mt: 2 }} >
            {
              loadingData ? <div >
                <div style={{ position: 'relative', top: '120px' }}>
                  <Loader />
                </div>
              </div> : (
                <div>
                  <Grid container spacing={2}>
                    {show1 === 1 ?
                      <Grid item xs={3}>
                        {
                          show2 === 1 ? (
                            <div className='itemInfoContainer'>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', padding: '5px', alignItems: 'center' }}>
                                  <Checkbox />
                                  <Typography variant='h6'>All Customer</Typography>
                                </div>
                                <div style={{ padding: '20px' }}>
                                  <p className='btnCustomer1' onClick={() => handleShow2(2)}>Filter</p>
                                </div>
                              </div>
                              <div style={{ height: '555px', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
                                <Tabs
                                  value={value}
                                  onChange={handleChange3}
                                  orientation="vertical"
                                  sx={{
                                    '& .MuiTabs-indicator': {
                                      backgroundColor: 'white',
                                      height: '0px'
                                    }
                                  }}
                                >
                                  {customer?.map((row, index) => (
                                    <Tab
                                      key={index}
                                      label={row.Customer ? row.Customer : ''}
                                      component={Link}
                                      to={`/CustomerInformationView/${row._id}`}
                                      sx={{
                                        '&.Mui-selected': {
                                          color: 'white',
                                          backgroundColor: '#30368a',
                                          borderRadius: '10px'
                                        }
                                      }}
                                    />
                                  ))}
                                </Tabs>
                              </div>
                            </div>
                          ) : ''
                        }
                        {
                          show2 === 2 ? (
                            <div className='itemInfoContainer'>
                              <Grid container style={{ alignItems: 'center', padding: '10px' }} spacing={3}>
                                <Grid item xs={10}>
                                  <TextField
                                    label='search'
                                    id='search'
                                    value={search}
                                    variant="standard"
                                    onChange={handleSearch}
                                  />
                                </Grid>
                                <Grid item xs={2}>
                                  <ViewTooltip title="Close" placement='bottom'>
                                    <IconButton onClick={() => handleShow2(1)} style={{ position: 'relative', float: 'right' }}>
                                      <Close style={{ color: '#30368a' }} />
                                    </IconButton>
                                  </ViewTooltip>
                                </Grid>
                              </Grid>

                              <div style={{ height: '580px', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
                                <Tabs
                                  value={value2}
                                  onChange={handleChange2}
                                  orientation="vertical"
                                  sx={{
                                    '& .MuiTabs-indicator': {
                                      backgroundColor: '#30368a'
                                    }
                                  }}
                                >
                                  {newArray?.map((row, index) => (
                                    <Tab
                                      key={index}
                                      label={row.Customer ? row.Customer : ''}
                                      component={Link}
                                      to={`/CustomerInformationView/${row._id}`}
                                      sx={{
                                        '&.Mui-selected': {
                                          color: '#30368a'
                                        }
                                      }}
                                    />
                                  ))}
                                </Tabs>
                              </div>
                            </div>
                          ) : ''
                        }

                      </Grid> :
                      ""}
                    <Grid item xs={9}>
                      <div className='itemInfoContainer2'>
                        <div style={{ width: '100%', background: 'white' }}>

                          {customer?.filter(i => i._id === id)?.map((i) => (
                            <div key={i._id}>

                              <div className='itemInfoContainer2Head'>
                                <div>
                                  <Typography sx={{ fontWeight: 'bold' }}>{i.customerFullName ? i.customerFullName.toUpperCase() : i.companyName.toUpperCase()}</Typography>
                                </div>
                                <div>
                                  <Button
                                    aria-controls={open ? 'demo-customized-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    variant="contained"
                                    disableElevation
                                    onClick={handleClick}
                                    endIcon={<KeyboardArrowDownIcon />}
                                    sx={{
                                      bgcolor: 'gray', '&:hover': {
                                        color: 'gray',
                                        bgcolor: 'white',
                                        border: '1px solid gray',
                                      }
                                    }}
                                  >
                                    Options
                                  </Button>
                                  <Menu
                                    id="demo-customized-menu"
                                    MenuListProps={{
                                      'aria-labelledby': 'demo-customized-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleCloseMenu}
                                    TransitionComponent={Fade}
                                  >
                                    <MenuItem disabled={customerInfoU.length === 0 && user.data.role !== 'CEO'}>
                                      <NavLink to={`/CustomerFormUpdate/${i._id}`} className='LinkName' style={{ display: 'flex', gap: '20px', alignItems: 'center', color: 'gray' }}>
                                        <EditIcon />
                                        <Typography>Edit</Typography>
                                      </NavLink>
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={handleOpenPrint} sx={{ display: 'flex', gap: '20px', color: 'gray' }}>
                                      <LocalPrintshop />
                                      <span>Print</span>
                                    </MenuItem>
                                    <MenuItem onClick={handleOpenPrint1} sx={{ display: 'flex', gap: '20px', color: 'gray' }}>
                                      <LocalPrintshop />
                                      <span>Print Payment</span>
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={() => handleShow1(2)}> <span style={{ color: 'gray' }}>Comments</span> </MenuItem>
                                    <MenuItem onClick={() => handleShow1(3)}> <span style={{ color: 'gray' }}>History</span></MenuItem>
                                  </Menu>
                                </div>
                              </div>
                              <Box sx={{ width: '100%' }}>
                                <TabContext
                                  value={value3}
                                >
                                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange4}
                                      aria-label="lab API tabs example"
                                      sx={{
                                        '& .MuiTabs-indicator': {
                                          backgroundColor: 'white',
                                          height: '0px'
                                        }
                                      }}
                                    >
                                      <Tab
                                        label="Overview"
                                        value="1"
                                        sx={{
                                          '&.Mui-selected': {
                                            color: 'white',
                                            backgroundColor: 'gray',
                                            borderRadius: '10px'
                                          }, '&:hover': {
                                            color: 'gray',
                                            bgcolor: 'white',
                                            border: '1px solid gray',
                                            borderRadius: '10px'
                                          }
                                        }}
                                      />
                                      <Tab
                                        label="Transaction"
                                        value="2"
                                        sx={{
                                          '&.Mui-selected': {
                                            color: 'white',
                                            backgroundColor: 'gray',
                                            borderRadius: '10px'
                                          }, '&:hover': {
                                            color: 'gray',
                                            bgcolor: 'white',
                                            border: '1px solid gray',
                                            borderRadius: '10px'
                                          }
                                        }}
                                      />
                                      <Tab
                                        label="Payment"
                                        value="3"
                                        sx={{
                                          '&.Mui-selected': {
                                            color: 'white',
                                            backgroundColor: 'gray',
                                            borderRadius: '10px'
                                          }, '&:hover': {
                                            color: 'gray',
                                            bgcolor: 'white',
                                            border: '1px solid gray',
                                            borderRadius: '10px'
                                          }
                                        }}
                                      />
                                      <Tab
                                        label="Statement"
                                        value="5"
                                        sx={{
                                          '&.Mui-selected': {
                                            color: 'white',
                                            backgroundColor: 'gray',
                                            borderRadius: '10px'
                                          }, '&:hover': {
                                            color: 'gray',
                                            bgcolor: 'white',
                                            border: '1px solid gray',
                                            borderRadius: '10px'
                                          }
                                        }}
                                      />
                                      <Tab label="POS History" value="6" />
                                    </TabList>
                                  </Box>
                                  <TabPanel value="1" sx={{ height: '550px', overflow: 'hidden', overflowY: 'scroll' }}>
                                    <Card>
                                      <CardContent>
                                        <table>
                                          <tbody>
                                            <tr>
                                              <td colSpan={2} style={{ textAlign: 'center' }}>Customer Contact</td>
                                            </tr>
                                            <tr>
                                              <td>Customer</td>
                                              <td>{i.customerFullName}</td>
                                            </tr>
                                            <tr>
                                              <td>Company Name</td>
                                              <td>{i.companyName}</td>
                                            </tr>
                                            <tr>
                                              <td>Email</td>
                                              <td>{i.customerEmail}</td>
                                            </tr>
                                            <tr>
                                              <td>Phone</td>
                                              <td>{i.customerCompanyPhone}</td>
                                            </tr>
                                            <tr>
                                              <td>Phone2</td>
                                              <td>{i.customerPhone}</td>
                                            </tr>
                                            <tr>
                                              <td>Billing Address</td>
                                              <td>{i.billingAddress.toUpperCase()}, <span>{i.billingCity.toUpperCase()}</span></td>
                                            </tr>
                                            <tr>
                                              <td>Shipping Address</td>
                                              <td>{i.shippingAddress.toUpperCase()}, <span>{i.shippingCity.toUpperCase()}</span></td>
                                            </tr>
                                          </tbody>
                                          <tbody>
                                            <tr>
                                              <td colSpan={2} style={{ textAlign: 'center' }}>Currency & Terms</td>
                                            </tr>
                                            <tr>
                                              <td>Currency</td>
                                              <td>{i.currency}</td>
                                            </tr>
                                            <tr>
                                              <td>Terms</td>
                                              <td>{i.paymentTerms}</td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table style={{ marginBottom: '5px' }}>
                                          <tbody>
                                            <tr>
                                              <td style={{ textAlign: 'center' }}>Description</td>
                                            </tr>
                                            <tr>
                                              <td>
                                                <span>
                                                  <pre style={{ fontFamily: 'system-ui', color: 'black', fontSize: '15px' }}>{i.customerDescription.toUpperCase()}</pre>
                                                </span>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </CardContent>
                                    </Card>
                                  </TabPanel>
                                  <TabPanel value="2" sx={{ height: '550px', overflow: 'hidden', overflowY: 'scroll' }}>
                                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ width: '100%' }}>
                                      <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                      >
                                        <Typography>Estimation</Typography>
                                      </AccordionSummary>
                                      <AccordionDetails>
                                        <div>
                                          {/** Estimation Table Start*/}
                                          <TableContainer>
                                            <Table>
                                              <TableHead >
                                                <TableRow>
                                                  <TableCell><Checkbox /></TableCell>
                                                  <TableCell align="center">Date</TableCell>
                                                  <TableCell align="center">Estimate#</TableCell>
                                                  <TableCell align="center">Customer</TableCell>
                                                  <TableCell align="center">Status</TableCell>
                                                  <TableCell align="center">Estimate Amount</TableCell>
                                                  <TableCell align="left">Action</TableCell>
                                                </TableRow>
                                              </TableHead>
                                              <TableBody>
                                                {estimate?.map((row) => (
                                                  <TableRow key={row._id}>
                                                    <TableCell><Checkbox /></TableCell>
                                                    <TableCell align="center">{dayjs(row.estimateDate).format('DD/MM/YYYY')}</TableCell>
                                                    <TableCell align="center">EST-00{row.estimateNumber}</TableCell>
                                                    <TableCell align="center">{row.customerName.customerName.toUpperCase()}</TableCell>
                                                    <TableCell align="center">
                                                      <Typography
                                                        color={
                                                          row.status === "Draft"
                                                            ? "gray" : row.status === "Sent"
                                                              ? "blue" :
                                                              row.status === "Decline"
                                                                ? "red" :
                                                                row.status === "Approved"
                                                                  ? "#339ba5" :
                                                                  row.status === "Invoiced"
                                                                    ? "#6a1b9a" : "black"
                                                        }
                                                      >
                                                        {row.status}
                                                      </Typography></TableCell>
                                                    <TableCell align="center"> <span data-prefix>$</span> {row.subTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} </TableCell>
                                                    <TableCell align="center" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                      <NavLink to={`/EstimateViewAdminAll/${row._id}`} className='LinkName'>
                                                        <ViewTooltip title="View">
                                                          <IconButton>
                                                            <VisibilityIcon style={{ color: '#202a5a' }} />
                                                          </IconButton>
                                                        </ViewTooltip>
                                                      </NavLink>
                                                      <EditTooltip title="Edit">
                                                        <span>
                                                          <IconButton disabled={row.status !== 'Draft' && user.data.role !== 'CEO'}>
                                                            <NavLink to={`/EstimateInvoiceFormUpdate/${row._id}`} className='LinkName'>
                                                              <EditIcon style={{ color: 'gray' }} />
                                                            </NavLink>
                                                          </IconButton>
                                                        </span>
                                                      </EditTooltip>
                                                    </TableCell>
                                                  </TableRow>
                                                ))}
                                              </TableBody>
                                            </Table>
                                          </TableContainer>
                                          {/** Estimation Table End */}
                                        </div>
                                      </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{ width: '100%' }}>
                                      <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                      >
                                        <Typography>Purchase Request</Typography>
                                      </AccordionSummary>
                                      <AccordionDetails>
                                        <div>
                                          {/** Estimation Table Start*/}
                                          <TableContainer>
                                            <Table>
                                              <TableHead >
                                                <TableRow>
                                                  <TableCell><Checkbox /></TableCell>
                                                  <TableCell align="center">Date</TableCell>
                                                  <TableCell align="center">Purchase#</TableCell>
                                                  <TableCell align="center">Customer</TableCell>
                                                  <TableCell align="center">Status</TableCell>
                                                  <TableCell align="center">Purchase Amount</TableCell>
                                                  <TableCell align="left">Action</TableCell>
                                                </TableRow>
                                              </TableHead>
                                              <TableBody>
                                                {purchase?.map((row) => (
                                                  <TableRow key={row._id}>
                                                    <TableCell><Checkbox /></TableCell>
                                                    <TableCell align="center">{dayjs(row.purchaseDate).format('DD/MM/YYYY')}</TableCell>
                                                    <TableCell align="center">PUR-00{row.purchaseNumber}</TableCell>
                                                    <TableCell align="center">{row.customerName.customerName.toUpperCase()}</TableCell>
                                                    <TableCell align="center">
                                                      <Typography
                                                        color={
                                                          row.statusInfo !== undefined && row.statusInfo === "Pending"
                                                            ? "gray" :
                                                            row.statusInfo !== undefined && row.statusInfo === "On-Going"
                                                              ? "blue" :
                                                              row.statusInfo !== undefined && row.statusInfo === "Stopped"
                                                                ? "red" :
                                                                row.statusInfo !== undefined && row.statusInfo === "Pending"
                                                                  ? "Orange" :
                                                                  row.statusInfo !== undefined && row.statusInfo === "Completed"
                                                                    ? "green" : "black"
                                                        }
                                                      >
                                                        {row.statusInfo !== undefined ? row.statusInfo : ''}
                                                      </Typography></TableCell>
                                                    <TableCell align="center"> <span data-prefix>$</span> {row.purchaseAmount1.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} </TableCell>
                                                    <TableCell align="center" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                      <NavLink to={`/PurchasesViewAdminAll/${row._id}`} className='LinkName'>
                                                        <ViewTooltip title="View">
                                                          <IconButton>
                                                            <VisibilityIcon style={{ color: '#202a5a' }} />
                                                          </IconButton>
                                                        </ViewTooltip>
                                                      </NavLink>
                                                      <EditTooltip title="Edit">
                                                        <span>
                                                          <IconButton disabled={row.status !== 'On-Going' && user.data.role !== 'CEO'}>
                                                            <NavLink to={`/PurchaseFormUpdate/${row._id}`} className='LinkName'>
                                                              <EditIcon style={{ color: 'gray' }} />
                                                            </NavLink>
                                                          </IconButton>
                                                        </span>
                                                      </EditTooltip>
                                                    </TableCell>
                                                  </TableRow>
                                                ))}
                                              </TableBody>
                                            </Table>
                                          </TableContainer>
                                          {/** Estimation Table End */}
                                        </div>
                                      </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{ width: '100%' }}>
                                      <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                      >
                                        <Typography>Maintenance</Typography>
                                      </AccordionSummary>
                                      <AccordionDetails>
                                        <div>
                                          {/** Estimation Table Start*/}
                                          <TableContainer>
                                            <Table>
                                              <TableHead >
                                                <TableRow>
                                                  <TableCell><Checkbox /></TableCell>
                                                  <TableCell align="center">Date</TableCell>
                                                  <TableCell align="center">Maintenance#</TableCell>
                                                  <TableCell align="center">Customer</TableCell>
                                                  <TableCell align="center">Status</TableCell>
                                                  <TableCell align="center">Maintenance Amount</TableCell>
                                                  <TableCell align="left">Action</TableCell>
                                                </TableRow>
                                              </TableHead>
                                              <TableBody>
                                                {maintenance?.map((row) => (
                                                  <TableRow key={row._id}>
                                                    <TableCell><Checkbox /></TableCell>
                                                    <TableCell align="center">{dayjs(row.serviceDate).format('DD/MM/YYYY')}</TableCell>
                                                    <TableCell align="center">M-00{row.serviceNumber}</TableCell>
                                                    <TableCell align="center">{row.customerName.customerName.toUpperCase()}</TableCell>
                                                    <TableCell align="center">
                                                      <Typography
                                                        color={
                                                          row.status === "Open"
                                                            ? "blue" :
                                                            row.status === "Pending"
                                                              ? "#801313" :
                                                              row.status === "Reschedule"
                                                                ? "Orange" :
                                                                row.status === "Cancel"
                                                                  ? "red" :
                                                                  row.status === "Close"
                                                                    ? "green" : "black"
                                                        }
                                                      >
                                                        {row.status}
                                                      </Typography></TableCell>
                                                    <TableCell align="center"> <span data-prefix>$</span> {row.totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} </TableCell>
                                                    <TableCell align="center" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                      <NavLink to={`/MaintenanceViewInformation/${row._id}`} className='LinkName'>
                                                        <ViewTooltip title="View">
                                                          <IconButton>
                                                            <VisibilityIcon style={{ color: '#202a5a' }} />
                                                          </IconButton>
                                                        </ViewTooltip>
                                                      </NavLink>
                                                      <EditTooltip title="Edit">
                                                        <span>
                                                          <IconButton disabled={row.status !== 'On-Going' && user.data.role !== 'CEO'}>
                                                            <NavLink to={`/MaintenanceUpdateView/${row._id}`} className='LinkName'>
                                                              <EditIcon style={{ color: 'gray' }} />
                                                            </NavLink>
                                                          </IconButton>
                                                        </span>
                                                      </EditTooltip>
                                                    </TableCell>
                                                  </TableRow>
                                                ))}
                                              </TableBody>
                                            </Table>
                                          </TableContainer>
                                          {/** Estimation Table End */}
                                        </div>
                                      </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{ width: '100%' }}>
                                      <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                      >
                                        <Typography>Invoice</Typography>
                                      </AccordionSummary>
                                      <AccordionDetails>
                                        <div>
                                          {/** Invoice Table Start*/}
                                          <TableContainer>
                                            <Table>
                                              <TableHead >
                                                <TableRow>
                                                  <TableCell><Checkbox /></TableCell>
                                                  <TableCell align="center">Date</TableCell>
                                                  <TableCell align="center">Invoice #</TableCell>
                                                  <TableCell align="center">Customer</TableCell>
                                                  <TableCell align="center">Status</TableCell>
                                                  <TableCell align="center">Invoice Amount</TableCell>
                                                  <TableCell align="left">Action</TableCell>
                                                </TableRow>
                                              </TableHead>
                                              <TableBody>
                                                {invoice?.map((row) => (
                                                  <TableRow key={row._id}>
                                                    <TableCell><Checkbox /></TableCell>
                                                    <TableCell align="center">{dayjs(row.invoiceDate).format('DD/MM/YYYY')}</TableCell>
                                                    <TableCell align="center">INV-00{row.invoiceNumber}</TableCell>
                                                    <TableCell >{row.customerName.customerName.toUpperCase()}</TableCell>
                                                    <TableCell align="center"> <Typography
                                                      color={
                                                        row.status === "Draft"
                                                          ? "gray" : row.status === "Sent"
                                                            ? "blue" :
                                                            row.status === "Decline"
                                                              ? "red" :
                                                              row.status === "Pending"
                                                                ? "#801313" :
                                                                row.status === "Paid"
                                                                  ? "#4caf50" :
                                                                  row.status === "Partially-Paid"
                                                                    ? "#fb8c00" : "black"
                                                      }
                                                    >
                                                      {row.status}
                                                    </Typography>
                                                    </TableCell>
                                                    <TableCell align="center"> <span data-prefix>$</span> {row.subTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} </TableCell>
                                                    <TableCell align="center" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                      <NavLink to={`/InvoiceViewAdminAll/${row._id}`} className='LinkName'>
                                                        <ViewTooltip title="View">
                                                          <IconButton>
                                                            <VisibilityIcon style={{ color: '#202a5a' }} />
                                                          </IconButton>
                                                        </ViewTooltip>
                                                      </NavLink>
                                                      <EditTooltip title="Edit">
                                                        <span>
                                                          <IconButton disabled={row.status !== 'Draft' && user.data.role !== 'CEO'}>
                                                            <NavLink to={`/InvoiceFormUpdate/${row._id}`} className='LinkName'>
                                                              <EditIcon style={{ color: 'gray' }} />
                                                            </NavLink>
                                                          </IconButton>
                                                        </span>
                                                      </EditTooltip>
                                                    </TableCell>
                                                  </TableRow>
                                                ))}
                                              </TableBody>
                                            </Table>
                                          </TableContainer>
                                          {/** Invoice Table End */}
                                        </div>
                                      </AccordionDetails>
                                    </Accordion>
                                  </TabPanel>
                                  <TabPanel value="3" sx={{ height: '550px', overflow: 'hidden', overflowY: 'scroll' }}>
                                    <Box hidden>
                                      <table ref={componentRef1} className='invoicedetails'>
                                        <thead>
                                          <tr>
                                            <th></th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <th style={{ borderBottom: '1px solid black' }}>
                                              <div className='invoiceTest'>
                                                <span>
                                                  <img src={Image} />
                                                </span>
                                                <address style={{ textAlign: 'right', fontSize: '70%', marginTop: '10px' }}>
                                                  <p style={{ fontWeight: 'bold' }}>GLOBAL GATE SARL </p>
                                                  <p style={{ fontWeight: 'normal' }}>RCM CD/KWZ/RCCM/22-B-00317 <br />
                                                    ID NAT 14-H5300N11179P <br />
                                                    AVENUE SALONGO Q/INDUSTRIEL C/MANIKA <br />
                                                    KOLWEZI LUALABA <br />
                                                    DR CONGO </p>
                                                </address>
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
                                                      <p style={{}}>
                                                        <span style={{ fontWeight: 'bold', fontSize: '13px' }}>
                                                          TO
                                                        </span>
                                                        <br />
                                                        <span style={{ fontWeight: 'bold', fontSize: '13px' }}>
                                                          {i.Customer.toUpperCase()}
                                                        </span>
                                                        <br />
                                                        <span style={{ fontSize: '13px' }}>
                                                          {i.billingAddress.toUpperCase()}, {i.billingCity.toUpperCase()}
                                                        </span>
                                                      </p>
                                                    </address>
                                                    <table className="firstTable" style={{ position: 'relative', fontSize: '70%', left: '83px', marginBottom: '10px', pageBreakInside: 'auto' }}>
                                                      <thead>
                                                        <tr>
                                                          <th colSpan={2} style={{ backgroundColor: 'white', borderBottom: '1px solid black', textAlign: 'left' }}>Payment Summary</th>
                                                        </tr>
                                                      </thead>
                                                      <tbody>
                                                        <tr>
                                                          <td colSpan={2} style={{ backgroundColor: 'white', borderBottom: '1px solid black', textAlign: 'right' }}>
                                                            <span>
                                                              All Transaction
                                                            </span>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </section>
                                                  <table className="secondTable" style={{ fontSize: '70%', marginBottom: '5px', border: '1px solid #DDD', maxHeight: '400px', overflow: 'auto', pageBreakInside: 'auto' }}>
                                                    <thead>
                                                      <tr>
                                                        <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>#</th>
                                                        <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Date</th>
                                                        <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Mode</th>
                                                        <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}> Amount Received</th>
                                                        <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}> Amount Paid</th>
                                                        <th style={{ border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Credit</th>
                                                      </tr>
                                                    </thead>
                                                    <tbody>
                                                      {
                                                        payment.map((row) => {

                                                          return (
                                                            <tr key={row._id}>
                                                              <td style={{ textAlign: 'left' }}>PAY-{row.paymentNumber}</td>
                                                              <td style={{ textAlign: 'left', borderLeft: '1px solid #DDD' }}>{dayjs(row.paymentDate).format('DD/MM/YYYY')}</td>
                                                              <td style={{ textAlign: 'left', borderLeft: '1px solid #DDD' }}>{row.modes.toUpperCase()}</td>
                                                              <td style={{ textAlign: 'left', borderLeft: '1px solid #DDD' }}>{row.amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                              <td style={{ textAlign: 'left', borderLeft: '1px solid #DDD' }}>
                                                                {row.TotalAmount?.map((Item, i) => {
                                                                  const relatedInvoice = invoice?.find((row1) => row1._id === Item.id)
                                                                  return (
                                                                    <p key={i}>
                                                                      <span>INV-00{Item.Ref} / {relatedInvoice?.invoiceSubject?.toUpperCase()}:  ${Item.total}</span>
                                                                    </p>
                                                                  )
                                                                })}
                                                              </td>
                                                              <td style={{ textAlign: 'left', width: '100px', borderLeft: '1px solid #DDD' }}>{row.remaining.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                            </tr>
                                                          )
                                                        })
                                                      }
                                                    </tbody>
                                                    <tbody>
                                                      <tr>
                                                        <td colSpan={4}></td>
                                                        <td>Total Credit</td>
                                                        <td>${i.credit !== undefined ? i.credit : 0}</td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
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
                                                <section style={{ position: 'fixed', bottom: 0, left: 0, right: 0, justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                  <p style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                                    <span><EmailIcon /></span>
                                                    <span>contact@globalgate.sarl</span>
                                                  </p>
                                                  <p style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                                    <span><PhoneIcon /></span>
                                                    <span>+243 827 722 222</span>
                                                  </p>
                                                  <p style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                                    <span><WebIcon /></span>
                                                    <span>www.GlobalGate.sarl</span>
                                                  </p>
                                                </section>

                                              </div>
                                            </td>
                                          </tr>
                                        </tfoot>
                                      </table>
                                    </Box>
                                    <Card>
                                      <CardContent>
                                        <Card sx={{ position: 'relative', float: 'right', width: '170px', height: '55px', backgroundColor: '#202a5a', color: 'white', marginBottom: '10px', textAlign: 'center', width: '300px' }}>
                                          <CardContent sx={{ display: 'flex', gap: '40px' }}>
                                            <Cached sx={{ cursor: 'pointer' }} onClick={handleUpdateCredit} />
                                            <Typography>Credit: ${i.credit !== undefined ? i.credit : 0}</Typography>
                                          </CardContent>
                                        </Card>
                                        <table className="secondTable" style={{ fontSize: '80%', marginBottom: '5px', border: '1px solid #DDD' }} >
                                          <thead>
                                            <tr>
                                              <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>#</th>
                                              <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Date</th>
                                              <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Mode</th>
                                              <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}> Amount Received</th>
                                              <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}> Amount Paid</th>
                                              <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Credit</th>
                                              <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}> Action</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            {
                                              payment.map((row) => {

                                                return (
                                                  <tr key={row._id}>
                                                    <td style={{ textAlign: 'left', width: '50px' }}>PAY-{row.paymentNumber}</td>
                                                    <td style={{ textAlign: 'left', width: '30px', borderLeft: '1px solid #DDD' }}>{dayjs(row.paymentDate).format('DD/MM/YYYY')}</td>
                                                    <td style={{ textAlign: 'left', width: '50px', borderLeft: '1px solid #DDD' }}>{row.modes.toUpperCase()}</td>
                                                    <td style={{ textAlign: 'left', width: '100px', borderLeft: '1px solid #DDD' }}>{row.amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                    <td style={{ textAlign: 'left', width: '100px', borderLeft: '1px solid #DDD' }}>
                                                      {row.TotalAmount?.map((Item, i) => {
                                                        const relatedInvoice = invoice?.find((row1) => row1._id === Item.id)
                                                        return (
                                                          <p key={i}>
                                                            <span>INV-00{Item.Ref} / {relatedInvoice?.invoiceSubject?.toUpperCase()}:  ${Item.total}</span>
                                                          </p>
                                                        )
                                                      })}
                                                    </td>
                                                    <td style={{ textAlign: 'left', width: '100px', borderLeft: '1px solid #DDD' }}>{row.remaining.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                    <td style={{ textAlign: 'left', width: '40px', borderLeft: '1px solid #DDD' }}>
                                                      <ViewTooltip title="View">
                                                        <span>
                                                          <IconButton disabled={user.data.role === 'User'}>
                                                            <NavLink to={`/PaymentInformationView/${row._id}`} className='LinkName'>
                                                              <VisibilityIcon style={{ color: '#202a5a' }} />
                                                            </NavLink>
                                                          </IconButton>
                                                        </span>
                                                      </ViewTooltip>
                                                    </td>
                                                  </tr>
                                                )
                                              })
                                            }
                                          </tbody>
                                        </table>
                                      </CardContent>
                                    </Card>
                                  </TabPanel>
                                  <TabPanel value="5" sx={{ height: '550px', overflow: 'hidden', overflowY: 'scroll' }}>
                                    <div style={{ marginBottom: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0px' }}>
                                      <FormControl>
                                        <InputLabel id="select">select</InputLabel>
                                        <Select
                                          id="selectOptions"
                                          value={selectOptions}
                                          onChange={(e) => setSelectOptions(e.target.value)}
                                          name="selectOptions"
                                          label="select"
                                        >
                                          <MenuItem value="Year">Year</MenuItem>
                                          <MenuItem value="Custom">Custom</MenuItem>
                                          <MenuItem value="All Outstanding">All Outstanding</MenuItem>
                                          <MenuItem value="All">All</MenuItem>
                                        </Select>
                                      </FormControl>
                                      {
                                        selectOptions === 'Year' && (
                                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DatePicker', 'DatePicker']}>
                                              <DatePicker
                                                required
                                                name='startDate'
                                                value={dayjs(startDate)}
                                                onChange={(date) => handleChangeDate(date)}
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
                                                  onChange={(date) => handleChangeDateFrom(date)}
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
                                                  onChange={(date) => handleChangeDateEnd(date)}
                                                  format='DD/MM/YYYY'
                                                />
                                              </DemoContainer>
                                            </LocalizationProvider>
                                          </div>
                                        )
                                      }
                                    </div>
                                    <Box hidden>
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
                                                <span>
                                                  <img src={Image} />
                                                </span>
                                                <address style={{ textAlign: 'right', fontSize: '70%', marginTop: '10px' }}>
                                                  <p style={{ fontWeight: 'bold' }}>GLOBAL GATE SARL </p>
                                                  <p style={{ fontWeight: 'normal' }}>RCM CD/KWZ/RCCM/22-B-00317 <br />
                                                    ID NAT 14-H5300N11179P <br />
                                                    AVENUE SALONGO Q/INDUSTRIEL C/MANIKA <br />
                                                    KOLWEZI LUALABA <br />
                                                    DR CONGO </p>
                                                </address>
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
                                                      <p style={{}}>
                                                        <span style={{ fontWeight: 'bold', fontSize: '13px' }}>
                                                          TO
                                                        </span>
                                                        <br />
                                                        <span style={{ fontWeight: 'bold', fontSize: '13px' }}>
                                                          {i.Customer.toUpperCase()}
                                                        </span>
                                                        <br />
                                                        <span style={{ fontSize: '13px' }}>
                                                          {i.billingAddress.toUpperCase()}, {i.billingCity.toUpperCase()}
                                                        </span>
                                                      </p>
                                                    </address>

                                                    <table className="firstTable" style={{ position: 'relative', fontSize: '70%', left: '83px', marginBottom: '10px', pageBreakInside: 'auto' }}>
                                                      <thead>
                                                        <tr>
                                                          <th colSpan={2} style={{ backgroundColor: 'white', borderBottom: '1px solid black', textAlign: 'left' }}>Statement of Accounts</th>
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
                                                                All Transaction
                                                              </span>)
                                                            }
                                                            {
                                                              selectOptions === 'All Outstanding' && (<span>
                                                                All Outstanding Invoice
                                                              </span>)
                                                            }
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                      <tbody>
                                                        <tr>
                                                          <td colSpan={2} style={{ backgroundColor: '#e8f7fe', border: 'none', textAlign: 'left' }}>Account Summary</td>
                                                        </tr>
                                                        <tr>
                                                          <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Opening Balance</span></td>
                                                          <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${openingBalanceTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                                                        </tr>
                                                        <tr>
                                                          <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Invoiced Amount</span></td>
                                                          <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${InvoiceTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                                                        </tr>
                                                        <tr>
                                                          <td style={{ backgroundColor: 'white', borderBottom: '1px solid black', textAlign: 'left' }}><span >Amount Paid</span></td>
                                                          <td style={{ backgroundColor: 'white', borderBottom: '1px solid black', textAlign: 'right' }}><span >{`$${PaymentTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                                                        </tr>
                                                        <tr>
                                                          <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Balance Due</span></td>
                                                          <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${totalBalance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </section>
                                                  <section style={{}}>
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
                                                      {
                                                        selectOptions === 'Year' && (
                                                          <tbody>
                                                            {yearRow}
                                                            <tr>
                                                              <td colSpan={3}></td>
                                                              <td colSpan={2}>Balance Due</td>
                                                              <td>{`$${amount4.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</td>
                                                            </tr>
                                                          </tbody>
                                                        )
                                                      }
                                                      {
                                                        selectOptions === 'All' && (
                                                          <tbody>
                                                            {allRow}
                                                            <tr>
                                                              <td colSpan={3}></td>
                                                              <td colSpan={2}>Balance Due</td>
                                                              <td>{`$${amount3.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</td>
                                                            </tr>
                                                          </tbody>
                                                        )
                                                      }
                                                      {
                                                        selectOptions === 'All Outstanding' && (
                                                          <tbody>
                                                            {allStandingRow}
                                                            <tr>
                                                              <td colSpan={3}></td>
                                                              <td colSpan={2}>Balance Due</td>
                                                              <td>{`$${amount2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</td>
                                                            </tr>
                                                          </tbody>
                                                        )
                                                      }
                                                      {
                                                        selectOptions === 'Custom' && (
                                                          <tbody>
                                                            {customRow}
                                                            <tr>
                                                              <td colSpan={3}></td>
                                                              <td colSpan={2}>Balance Due</td>
                                                              <td>{`$${amount1.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</td>
                                                            </tr>
                                                          </tbody>
                                                        )
                                                      }

                                                    </table>
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
                                                <section style={{ position: 'fixed', bottom: 0, left: 0, right: 0, justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                  <p style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                                    <span><EmailIcon /></span>
                                                    <span>contact@globalgate.sarl</span>
                                                  </p>
                                                  <p style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                                    <span><PhoneIcon /></span>
                                                    <span>+243 827 722 222</span>
                                                  </p>
                                                  <p style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                                    <span><WebIcon /></span>
                                                    <span>www.GlobalGate.sarl</span>
                                                  </p>
                                                </section>

                                              </div>
                                            </td>
                                          </tr>
                                        </tfoot>
                                      </table>
                                    </Box>
                                    <Box sx={{ padding: '20px' }}>
                                      <div style={{ padding: '20px' }}>
                                        <header className='invoiceTest'>
                                          <div>
                                            <img src={Image} style={{ width: '500px', height: '100px' }} />
                                          </div>
                                          <address style={{ textAlign: 'right' }}>
                                            <p style={{ fontWeight: 'bold' }}>GLOBAL GATE SARL </p>
                                            <p>RCM CD/KWZ/RCCM/22-B-00317 </p>
                                            <p> ID NAT 14-H5300N11179P </p>
                                            <p> AVENUE SALONGO Q/INDUSTRIEL C/MANIKA </p>
                                            <p>  KOLWEZI LUALABA </p>
                                            <p>   DR CONGO </p>
                                          </address>
                                        </header>
                                        <hr /><p className='invoicehr'></p>
                                        <article>
                                          <section style={{ display: 'flex', justifyContent: 'space-between', marginTop: '25px' }}>
                                            <address style={{ position: 'relative', lineHeight: 1.35, width: '60%' }}>
                                              <p style={{}}>
                                                <span style={{ fontWeight: 'bold', fontSize: '13px' }}>
                                                  TO
                                                </span>
                                                <br />
                                                <span style={{ fontWeight: 'bold', fontSize: '13px' }}>
                                                  {i.Customer.toUpperCase()}
                                                </span>
                                                <br />
                                                <span style={{ fontSize: '13px' }}>
                                                  {i.billingAddress.toUpperCase()}, {i.billingCity.toUpperCase()}
                                                </span>
                                              </p>
                                            </address>
                                            <table className="firstTable" style={{ position: 'relative', fontSize: '70%', left: '83px', marginBottom: '10px', pageBreakInside: 'auto' }}>
                                              <thead>
                                                <tr>
                                                  <th colSpan={2} style={{ backgroundColor: 'white', borderBottom: '1px solid black', textAlign: 'left' }}>Statement of Accounts</th>
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
                                                        All Transaction
                                                      </span>)
                                                    }
                                                    {
                                                      selectOptions === 'All Outstanding' && (<span>
                                                        All Outstanding Invoice
                                                      </span>)
                                                    }
                                                  </td>
                                                </tr>
                                              </tbody>
                                              <tbody>
                                                <tr>
                                                  <td colSpan={2} style={{ backgroundColor: '#e8f7fe', border: 'none', textAlign: 'left' }}>Account Summary</td>
                                                </tr>
                                                <tr>
                                                  <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Opening Balance</span></td>
                                                  <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${openingBalanceTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                                                </tr>
                                                <tr>
                                                  <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Invoiced Amount</span></td>
                                                  <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${InvoiceTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                                                </tr>
                                                <tr>
                                                  <td style={{ backgroundColor: 'white', borderBottom: '1px solid black', textAlign: 'left' }}><span >Amount Paid</span></td>
                                                  <td style={{ backgroundColor: 'white', borderBottom: '1px solid black', textAlign: 'right' }}><span >{`$${PaymentTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                                                </tr>
                                                <tr>
                                                  <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'left' }}><span >Balance Due</span></td>
                                                  <td style={{ backgroundColor: 'white', border: 'none', textAlign: 'right' }}><span >{`$${totalBalance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </section>
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
                                            {
                                              selectOptions === 'Year' && (
                                                <tbody>
                                                  {yearRow}
                                                  <tr>
                                                    <td colSpan={3}></td>
                                                    <td colSpan={2}>Balance Due</td>
                                                    <td>{`$${amount4.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</td>
                                                  </tr>
                                                </tbody>
                                              )
                                            }
                                            {
                                              selectOptions === 'All' && (
                                                <tbody>
                                                  {allRow}
                                                  <tr>
                                                    <td colSpan={3}></td>
                                                    <td colSpan={2}>Balance Due</td>
                                                    <td>{`$${amount3.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</td>
                                                  </tr>
                                                </tbody>
                                              )
                                            }
                                            {
                                              selectOptions === 'All Outstanding' && (
                                                <tbody>
                                                  {allStandingRow}
                                                  <tr>
                                                    <td colSpan={3}></td>
                                                    <td colSpan={2}>Balance Due</td>
                                                    <td>{`$${amount2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</td>
                                                  </tr>
                                                </tbody>
                                              )
                                            }
                                            {
                                              selectOptions === 'Custom' && (
                                                <tbody>
                                                  {customRow}
                                                  <tr>
                                                    <td colSpan={3}></td>
                                                    <td colSpan={2}>Balance Due</td>
                                                    <td>{`$${amount1.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</td>
                                                  </tr>
                                                </tbody>
                                              )
                                            }

                                          </table>
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
                                  </TabPanel>
                                  <TabPanel value="6">
                                    {/* Grand Total Calculation and Display */}
                                    {
                                      (() => {
                                        const grandTotal = posHistory.reduce((sum, row) => {
                                          const usdAmount = row.rate > 0 ? (row.totalInvoice / row.rate) : 0;
                                          return sum + usdAmount;
                                        }, 0);

                                        return (
                                          <div style={{ padding: '10px', textAlign: 'right', backgroundColor: '#f5f5f5', borderRadius: '5px', marginBottom: '10px' }}>
                                            <Typography variant="h6" style={{ color: '#202a5a', fontWeight: 'bold' }}>
                                              Grand Total: ${grandTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                            </Typography>
                                          </div>
                                        )
                                      })()
                                    }
                                    <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
                                      <Table>
                                        <TableHead>
                                          <TableRow>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Invoice #</TableCell>
                                            <TableCell>Status</TableCell>
                                            <TableCell>Total (USD)</TableCell>
                                          </TableRow>
                                        </TableHead>
                                        <TableBody>
                                          {posHistory.length > 0 ? (
                                            posHistory.map((row) => {
                                              const usdAmount = row.rate > 0 ? (row.totalInvoice / row.rate) : 0;
                                              return (
                                                <TableRow key={row._id}>
                                                  <TableCell>{dayjs(row.invoiceDate).format('DD/MM/YYYY')}</TableCell>
                                                  <TableCell>{row.factureNumber}</TableCell>
                                                  <TableCell>
                                                    <span style={{
                                                      padding: '5px',
                                                      borderRadius: '5px',
                                                      backgroundColor: row.status === 'Paid' ? 'green' : row.status === 'Partially-Paid' ? 'orange' : 'red',
                                                      color: 'white'
                                                    }}>
                                                      {row.status}
                                                    </span>
                                                  </TableCell>
                                                  <TableCell>${usdAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</TableCell>
                                                </TableRow>
                                              )
                                            })
                                          ) : (
                                            <TableRow>
                                              <TableCell colSpan={4} align="center">No POS History Found</TableCell>
                                            </TableRow>
                                          )}
                                        </TableBody>
                                      </Table>
                                    </TableContainer>
                                  </TabPanel>
                                </TabContext>
                              </Box>
                            </div>
                          ))}

                        </div>

                      </div>
                    </Grid>
                    {show1 === 2 ?
                      <Grid item xs={3}>
                        <div className='itemInfoContainer'>
                          <div style={{ padding: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                              <p>COMMENTS</p>
                              <ViewTooltip title="Close" placement='left'>
                                <IconButton onClick={() => handleShow1(1)} style={{ position: 'relative', float: 'right' }}>
                                  <Close style={{ color: '#202a5a' }} />
                                </IconButton>
                              </ViewTooltip>
                            </div>
                            <form onSubmit={handleSubmitEdit}>
                              <Grid container style={{ alignItems: 'center' }} spacing={1}>
                                <Grid item xs={12}>
                                  <TextField
                                    required
                                    id='comments'
                                    name='comments'
                                    multiline
                                    rows={4}
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value.toUpperCase())}
                                    label='Comments'
                                    sx={{ width: '100%', backgroundColor: 'white' }}
                                  />
                                </Grid>
                                <Grid item xs={12}>
                                  <button type='submit' style={{ width: '100%' }} className='btnCustomer6'>Save</button>
                                </Grid>
                              </Grid>

                            </form>
                            <hr />
                          </div>
                          <div style={{ height: '355px', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
                            <div style={{ padding: '10px' }}>
                              <table style={{ width: '100%' }}>
                                <tbody>
                                  {Comments1.map((Item) => (
                                    <tr key={Item._id}>
                                      <td style={{ width: '100%', borderBottom: '1px solid black' }}>
                                        {Item.dateComment ? dayjs(Item.dateComment).format('DD/MM') : ''} {Item.CommentInfo.person + ': ' + Item.CommentInfo.reason}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </Grid> : ""}
                    {show1 === 3 ?
                      <Grid item xs={3}>
                        <div className='itemInfoContainer'>
                          <div style={{ padding: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                              <p>HISTORY</p>
                              <ViewTooltip title="Close" placement='bottom'>
                                <IconButton onClick={() => handleShow1(1)} style={{ position: 'relative', float: 'right' }}>
                                  <Close style={{ color: '#202a5a' }} />
                                </IconButton>
                              </ViewTooltip>
                            </div>
                            <br />

                          </div>
                          <div style={{ height: '518px', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
                            <div style={{ padding: '10px' }}>
                              {
                                notification.map((row) => (
                                  <p key={row._id}>
                                    <span>{row.person + ' on ' + dayjs(row.dateNotification).format('DD/MMMM')}: {row.reason}</span>
                                  </p>
                                ))
                              }
                            </div>
                          </div>
                        </div>
                      </Grid> : ""}
                  </Grid>
                </div>)
            }
          </Container>
        </Box>
      </Box>
      <Modal
        open={loadingOpenModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}
        >
          {loading ? (<Loader />
          ) : (
            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
              <p><CheckCircleIcon style={{ color: 'green', height: '40px', width: '40px' }} /></p>
              {
                isCredit === 'true' ?
                  <h2> Data Updated successfully</h2> :
                  <h2> Data Saved successfully</h2>
              }
              <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
                <button onClick={handleClose} className='btnCustomer'>
                  Close
                </button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
      <Modal
        open={ErrorOpenModal}
        onClose={handleCloseError}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}
        >
          {loading ? (<Loader />
          ) : (
            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
              <p><CancelIcon style={{ color: 'red', height: '40px', width: '40px' }} /></p>
              <h2> Data Failed to Saved</h2>
              <button className='btnCustomer' onClick={handleCloseError}>
                Try Again
              </button>
            </div>
          )}
        </Box>
      </Modal>
    </div >
  )
}

export default CustomerInformationView
