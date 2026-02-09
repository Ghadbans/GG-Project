import React, { useEffect, useState, useRef, useMemo } from 'react'
import SidebarDash from '../../../component/SidebarDash';
import '../../view.css'
import '../Chartview.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Collapse, Grid, IconButton, styled, Table, TableHead, TableRow, TableCell, TableBody, FormControl, InputLabel, OutlinedInput, InputAdornment, Modal, Backdrop, Box, TextField, Paper, TableContainer, Card, CardContent, Divider, Tab } from '@mui/material';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import dayjs from 'dayjs';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Loader from '../../../component/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '@mui/icons-material/Logout';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import DailyExpensesMonthlyChartView from './DailyExpensesMonthlyChartView';
import { Add, Close, Diversity1Rounded, DragIndicatorRounded, LocalPrintshop, VisibilityOutlined } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Edit from '@mui/icons-material/Edit';
import { v4 } from 'uuid';
import { error } from 'style';
import Delete from '@mui/icons-material/Delete';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import db from '../../../dexieDb';

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
const PrintTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'white',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));
const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'red',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));
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
function DailyExpenseAdminView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
        if (navigator.onLine) {
          try {
            const res = await axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-employeeuser/${storesUserId}`)
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

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }
  const [expenses, setExpenses] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [cash, setCash] = useState([]);
  const [rate, setRate] = useState(0);
  const [itemPurchaseInfo, setItemPurchase] = useState([]);
  const [purchaseOrder, setPurchaseOrder] = useState([]);
  const [payRoll, setPayRoll] = useState([]);
  const [payment, setPayment] = useState([]);
  const [posInfo, setPos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/itemPurchase')
          setItemPurchase(res.data.data.filter((row) => row.status && row.status === "Paid"));
          const resPO = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/purchaseOrder')
          setPurchaseOrder(resPO.data.data.filter((row) => row.status && row.status === 'Purchase'));
          const expenseResponse = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/expense')
          setExpenses(expenseResponse.data.data);
          const resPayment = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/payment')
          setPayment(resPayment.data.data.filter((row) => row.modes !== 'Credit-Account'))
          const cashResponse = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/cash')
          setCash(cashResponse.data.data);
          const rateResponse = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/rate')
          rateResponse.data.data.map((row) => setRate(row.rate))
          const resPayRoll = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/payRoll')
          setPayRoll(resPayRoll.data.data.filter((row) => row.status !== undefined ? row.status === 'Paid' : null))
          const resPos = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/pos')
          setPos(resPos.data.data.map((row) => ({ ...row, amountTotalFc: row.totalFC - row.creditFC, amountTotalUsd: row.totalUSD - row.creditUsd })))
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        const offLineItemPurChase = await db.itemPurchaseSchema.toArray();
        setItemPurchase(offLineItemPurChase.filter((row) => row.status === undefined || row.status === "Paid"));
        const offLineDailyExpenses = await db.dailyExpenseSchema.toArray();
        setExpenses(offLineDailyExpenses);
        const offLineCash = await db.cashSchema.toArray();
        setCash(offLineCash);
        const offLinePayment = await db.paymentSchema.toArray();
        setPayment(offLinePayment.filter((row) => row.modes !== 'Credit-Account'))
        const offLineRate = await db.rateSchema.toArray();
        offLineRate.map((row) => setRate(row.rate));
        const offLinePayRoll = await db.payRollSchema.toArray();
        setPayRoll(offLinePayRoll.filter((row) => row.status !== undefined ? row.status === 'Paid' : null))
        const offLinePos = await db.posSchema.toArray();
        setPos(offLinePos.map((row) => ({ ...row, amountTotalFc: row.totalFC - row.creditFC, amountTotalUsd: row.totalUSD - row.creditUsd })))
      }
    }
    fetchData()
  }, [])

  const itemPurchase = [];

  itemPurchaseInfo.forEach(row => {
    itemPurchase.push({
      _id: row._id,
      itemPurchaseNumber: 'IP-0' + row.itemPurchaseNumber,
      itemPurchaseDate: row.itemPurchaseDate,
      projectName: row.projectName,
      manufacturer: row.manufacturer,
      manufacturerNumber: row.manufacturerNumber,
      description: row.description,
      totalFC: row.totalFC,
      total: row.total,
      amount: row.totalUSD !== undefined ? row.totalUSD : row.total
    })
  })


  const [startDate, setStartDate] = useState(null);
  const [cashDate, setCashDate] = useState("");
  const [returnFC, setReturnFC] = useState(0);
  const [returnUSD, setReturnUSD] = useState(0);
  const [totalCashInfo, setTotalCashInfo] = useState(0)
  const [amount, setAmount] = useState([]);

  useEffect(() => {
    const storedQuick = JSON.parse(localStorage.getItem('dateInfo'))
    if (storedQuick) {
      setStartDate(new Date(storedQuick))
    }
  }, [])

  const handleChangeDate = (date) => {
    setStartDate(date)
    localStorage.setItem('dateInfo', JSON.stringify(date))
  }
  const endDate = startDate;
  {/** Cash start */ }
  const addItem = () => {
    setAmount([...amount, {
      idRow: v4(),
      amountFC: 0,
      amountUsd: 0,
      rate: 0,
      total: 0,
      note: ''
    }]);
  }
  const deleteItem = idRow => {
    setAmount(amount => amount.filter((Item) => Item.idRow !== idRow));
  };
  const handleChangeAmount = (e, i) => {
    const { name, value } = e.target;
    const list = [...amount];
    list[i][name] = value;
    list[i]['rate'] = rate
    list[i]['total'] = Math.round(((parseInt(list[i]['amountFC']) / list[i]['rate']) + list[i]['amountUsd']) * 100) / 100
    setAmount(list)
  }
  {/** Cash end */ }

  useEffect(() => {
    const headers = [];
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      headers.push(currentDate.toDateString());
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setFilteredData(headers)
  }, [startDate, endDate])

  const [expensesFiltered, setExpensesFiltered] = useState([])
  const [itemPurchaseFiltered, setItemPurchaseFiltered] = useState([])
  const [payRollFiltered, setPayRollFiltered] = useState([])
  const [posFiltered, setPosFiltered] = useState([])
  // Expenses Filter
  useEffect(() => {
    const totalExpenses = expenses.filter((row) => {
      const ExpensesDate = dayjs(row.expenseDate).format('DD/MM/YYYY')
      return ExpensesDate >= dayjs(startDate).format('DD/MM/YYYY') && ExpensesDate <= dayjs(endDate).format('DD/MM/YYYY')
    })
    setExpensesFiltered(totalExpenses)
  }, [startDate, endDate, expenses])
  // Item Purchase Filter
  useEffect(() => {
    const totalExpenses = itemPurchaseInfo.filter((row) => {
      const ExpensesDate = dayjs(row.itemPurchaseDate).format('DD/MM/YYYY')
      return ExpensesDate >= dayjs(startDate).format('DD/MM/YYYY') && ExpensesDate <= dayjs(endDate).format('DD/MM/YYYY')
    })
    setItemPurchaseFiltered(totalExpenses)
  }, [startDate, endDate, itemPurchaseInfo])
  // Pay Roll Filter
  useEffect(() => {
    const totalExpenses = payRoll.filter((row) => {
      const ExpensesDate = dayjs(row.payDate).format('DD/MM/YYYY')
      return ExpensesDate >= dayjs(startDate).format('DD/MM/YYYY') && ExpensesDate <= dayjs(endDate).format('DD/MM/YYYY')
    })
    setPayRollFiltered(totalExpenses)
  }, [startDate, endDate, payRoll])

  // POS Filter
  useEffect(() => {
    const totalExpenses = posInfo.filter((row) => {
      const ExpensesDate = dayjs(row.invoiceDate).format('DD/MM/YYYY')
      return ExpensesDate >= dayjs(startDate).format('DD/MM/YYYY') && ExpensesDate <= dayjs(endDate).format('DD/MM/YYYY')
    })
    setPosFiltered(totalExpenses)
  }, [startDate, endDate, posInfo])


  const [open, setOpen] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [openNextDay, setOpenNextDay] = useState(false);
  const [viewId, setViewId] = useState(null);
  const [viewIdStatus, setViewIdStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingOpenModal, setLoadingOpenModal] = useState(false);
  const [ErrorOpenModal, setErrorOpenModal] = useState(false);

  const handleOpenView = (id) => {
    setOpen(true);
    setViewId(id)
  };
  const handleCloseView = () => {
    setOpen(false);
  };
  const handleOpenViewOption = (id) => {
    setOpenOption(true);
    setViewIdStatus(id)
  };
  const handleCloseViewOption = () => {
    setOpenOption(false);
  };
  const handleOpenViewStatus = (id) => {
    setOpenStatus(true);
    setViewIdStatus(id)
  };
  const handleCloseViewStatus = () => {
    setOpenStatus(false);
  };
  const handleOpenViewNextDay = () => {
    setOpenNextDay(true);
    setOpenOption(false);
  };
  const handleCloseViewNextDay = () => {
    setOpenNextDay(false);
  };
  useEffect(() => {
    const fetchId = async () => {
      if (viewId !== null) {
        if (navigator.onLine) {
          try {
            const res = await axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-cash/${viewId}`)
            setCashDate(res.data.data.cashDate)
            setAmount(res.data.data.amount)
          } catch (error) {
            console.log(error)
          }
        } else {
          const resLocal = await db.cashSchema.get({ _id: idView })
          setCashDate(resLocal.cashDate)
          setAmount(resLocal.amount)
        }
      }
    }
    fetchId()
  }, [viewId])
  const [statusInfo, setStatusInfo] = useState('');
  const [restInfoFC, setRestInfoFc] = useState(0);
  const [restInfoUSD, setRestInfoUSD] = useState(0);
  const [indexId, setIndexId] = useState(0);
  useEffect(() => {
    const fetchId = async () => {
      if (viewIdStatus !== null) {
        if (navigator.onLine) {
          try {
            const res = await axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-cash/${viewIdStatus}`)
            setCashDate(res.data.data.cashDate)
            setStatusInfo(res.data.data.status !== undefined ? res.data.data.status : '')
            setRestInfoFc(res.data.data.returnAmountFC !== undefined ? res.data.data.returnAmountFC : 0)
            setRestInfoUSD(res.data.data.returnAmountUSD !== undefined ? res.data.data.returnAmountUSD : 0)
          } catch (error) {
            console.log(error)
          }
        } else {
          const resLocal = await db.cashSchema.get({ _id: viewIdStatus })
          setIndexId(resLocal.cashNumber)
          setCashDate(resLocal.cashDate)
          setStatusInfo(resLocal.status !== undefined ? resLocal.status : '')
          setRestInfoFc(resLocal.returnAmountFC !== undefined ? resLocal.returnAmountFC : 0)
          setRestInfoUSD(resLocal.returnAmountUSD !== undefined ? resLocal.returnAmountUSD : 0)
        }
      }
    }
    fetchId()
  }, [viewIdStatus])
  useEffect(() => {
    let row = document.querySelectorAll('#amountTotalInvoice')
    let sum = 0
    for (let i = 0; i < row.length; i++) {
      if (row[i].id === 'amountTotalInvoice') {
        sum += isNaN(row[i].innerHTML) ? 0 : parseFloat(row[i].innerHTML);
        const result = Math.round(sum * 100) / 100
        setTotalCashInfo(result);
      }
    }
  })
  //open loading modal when submit is true
  const handleOpen = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  //open loading modal when error
  const handleError = () => {
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  //close loading modal
  const handleClose = () => {
    setLoadingOpenModal(false);
    window.location.reload();
  }
  const handleCloseError = () => {
    setErrorOpenModal(false);
  }
  //Decision When loading finish
  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    const data = {
      cashDate, totalCash: totalCashInfo, amount, updateS: false
    }
    if (navigator.onLine) {
      try {
        const res = await axios.put(`https://globalgate-backend-production.up.railway.app/endpoint/update-cash/${viewId}`, data);
        if (res) {
          await db.cashSchema.update(indexId, { ...data, updateS: true })
          handleOpen();
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    } else {
      await db.cashSchema.update(indexId, data)
      handleOpen();
    }
  }
  const [filterTotal2, setFilterTotal2] = useState([])
  useEffect(() => {
    const totalExpenses = cash.filter((row) => {
      const ExpensesDate = dayjs(row.cashDate).format('DD/MM/YYYY')
      return ExpensesDate >= dayjs(startDate).format('DD/MM/YYYY') && ExpensesDate <= dayjs(endDate).format('DD/MM/YYYY')
    })
    setFilterTotal2(totalExpenses)
  }, [startDate, endDate, cash])

  const [filterTotalPayment, setFilterTotalPayment] = useState([])
  useEffect(() => {
    const totalExpenses = payment.filter((row) => {
      const ExpensesDate = dayjs(row.paymentDate).format('DD/MM/YYYY')
      return ExpensesDate >= dayjs(startDate).format('DD/MM/YYYY') && ExpensesDate <= dayjs(endDate).format('DD/MM/YYYY')
    })
    setFilterTotalPayment(totalExpenses)
  }, [startDate, endDate, payment])

  const totalDay = expensesFiltered.length > 0 ? expensesFiltered.filter(row => parseFloat(row.amount) === 0).reduce((sum, row) => Math.round((sum + parseFloat(row.total)) * 100) / 100, 0) : 0
  const totalDayFC = expensesFiltered.length > 0 ? expensesFiltered.filter(row => parseFloat(row.amount) !== 0).reduce((sum, row) => Math.round((sum + parseFloat(row.amount)) * 100) / 100, 0) : 0

  const totalPaymentFC1 = filterTotalPayment.length > 0 ? filterTotalPayment.reduce((acc, row) => acc + parseFloat(row.PaymentReceivedFC), 0) : 0
  const totalPaymentUSD0 = filterTotalPayment.length > 0 ? filterTotalPayment.filter((row) => (row.modes === 'Cash' && row.remaining > 0) || (row.modes === 'Bank Transfer' && row.remaining > 0)).reduce((acc, row) => acc + parseFloat(row.remaining), 0) : 0
  const totalPaymentUSD15 = filterTotalPayment.length > 0 ? filterTotalPayment.reduce((acc, row) => acc + parseFloat(row.PaymentReceivedUSD), 0) : 0
  const totalPaymentUSD1 = totalPaymentUSD0 + totalPaymentUSD15
  const totalPaymentUSDTotal = filterTotalPayment.length > 0 ? filterTotalPayment.reduce((acc, row) => acc + parseFloat(row.amount), 0) : 0

  const totalPosFC = posFiltered.length > 0 ? posFiltered.reduce((acc, row) => acc + parseFloat(row.amountTotalFc), 0) : 0
  const totalPosUSD = posFiltered.length > 0 ? posFiltered.reduce((acc, row) => acc + parseFloat(row.amountTotalUsd), 0) : 0

  const totalPaymentFC = totalPaymentFC1 + totalPosFC
  const totalPaymentUSD = totalPaymentUSD1 + totalPosUSD



  const totalCashUSD = filterTotal2.length > 0 ? filterTotal2.reduce((acc, row) => {
    return acc + row.amount.filter(item => parseFloat(item.amountFC) === 0).reduce((sum, item) => Math.round((sum + parseFloat(item.total)) * 100) / 100, 0)
  }, 0) : 0
  const totalCashFC = filterTotal2.length > 0 ? filterTotal2.reduce((acc, row) => {
    return acc + row.amount.filter(item => parseFloat(item.amountFC) !== 0).reduce((sum, item) => Math.round((sum + parseFloat(item.amountFC)) * 100) / 100, 0)
  }, 0) : 0
  const totalItemPurchase = itemPurchaseFiltered.length > 0 ? itemPurchaseFiltered.reduce((sum, row) => sum + row.total, 0) : 0
  const totalItemPurchaseFC = itemPurchaseFiltered.length > 0 ? itemPurchaseFiltered.filter((row) => row.totalFC !== undefined).reduce((sum, row) => sum + row.totalFC, 0) : 0
  const totalPayRollDaily = payRollFiltered.length > 0 ? payRollFiltered.reduce((sum, row) => Math.round((sum + parseFloat(row.amountPayUSD)) * 100) / 100, 0) : 0
  const totalPayRollDailyFC = payRollFiltered.length > 0 ? payRollFiltered.reduce((sum, row) => Math.round((sum + parseFloat(row.amountPayFC)) * 100) / 100, 0) : 0
  const totalExpensesFC = Number(totalDayFC) + Number(totalItemPurchaseFC) + Number(totalPayRollDailyFC)

  const totalEnterFc = isNaN(totalPaymentFC) ? 0 : totalPaymentFC

  const RemainingFC = isNaN((Number(totalCashFC) + Number(totalEnterFc)) - totalExpensesFC) ? 0 : parseFloat(((Number(totalCashFC) + Number(totalEnterFc)) - totalExpensesFC))
  const totalExpensesD = Number(totalDay) + Number(totalItemPurchase) + Number(totalPayRollDaily)

  const totalEnter = isNaN(totalPaymentUSD) ? totalPaymentUSDTotal : totalPaymentUSD

  const RemainingUSD = isNaN((Number(totalEnter) + Number(totalCashUSD)) - totalExpensesD) ? 0 : parseFloat(((Number(totalEnter) + Number(totalCashUSD)) - totalExpensesD))
  const returnAmountFC = Number(returnFC) + Number(restInfoFC)
  const returnAmountUSD = Number(returnUSD) + Number(restInfoUSD)
  const restFC = RemainingFC - returnAmountFC
  const restUSD = RemainingUSD - returnAmountUSD

  const [amount1, setAmount1] = useState([]);
  const addItem1 = () => {
    setAmount1([...amount, {
      idRow: v4(),
      amountFC: 0,
      amountUsd: 0,
      rate: 0,
      total: 0,
      note: ''
    }]);
  }
  const deleteItem1 = idRow => {
    setAmount1(amount => amount.filter((Item) => Item.idRow !== idRow));
  };
  const handleChangeAmount1 = (e, i) => {
    const { name, value } = e.target;
    const list = [...amount];
    list[i][name] = value;
    list[i]['rate'] = rate
    list[i]['total'] = Math.round(((parseFloat(list[i]['amountFC']) / list[i]['rate']) + parseFloat(list[i]['amountUsd'])) * 100) / 100
    setAmount1(list)
  }

  const handleSubmitUpdateReturn = async (e) => {
    e.preventDefault();
    let status = ''
    if (restFC === 0 && restUSD === 0) {
      status = 'Close'
    } else {
      status = 'Pending'
    }
    const data = {
      status,
      returnAmountFC,
      returnAmountUSD,
      RemainingAmountUSD: restUSD,
      RemainingAmountFC: restFC,
      totalCashFC,
      totalCashUSD,
      totalPaymentFC: totalEnterFc,
      totalPaymentUSD: totalEnter,
      totalPayRollDailyFC,
      totalExpensesFC: totalDayFC,
      totalExpensesUSD: totalDay,
      totalItemPurchaseUSD: totalItemPurchase,
      totalPayrollUSD: totalPayRollDaily, updateS: false
    }
    if (navigator.onLine) {
      try {
        const res = await axios.put(`https://globalgate-backend-production.up.railway.app/endpoint/update-cash/${viewIdStatus}`, data);
        if (res) {
          await db.cashSchema.update(indexId, { ...data, updateS: true })
          handleOpen();
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    } else {
      await db.cashSchema.update(indexId, data)
      handleOpen();
    }
  }
  const [sideBar, setSideBar] = React.useState(true);
  const toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  const [value3, setValue3] = React.useState('1');

  useEffect(() => {
    const result = localStorage.getItem('TabViewExpensesMonthlyInfo')
    if (result) {
      setValue3(result)
    }
  }, [])
  const handleChange3 = (event, newValue) => {
    const changeValue = newValue
    setValue3(changeValue);
    localStorage.setItem('TabViewExpensesMonthlyInfo', changeValue)
  };
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [search2, setSearch2] = useState("")
  const [debouncedSearch2, setDebouncedSearch2] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch2(search2), 300);
    return () => clearTimeout(handler);
  }, [search2]);

  useEffect(() => {
    const result = localStorage.getItem('QuickFilterDailyExpensesAdminView')
    if (result) {
      setSearch(result)
    }
  }, [])
  const handleSearch = (e) => {
    const value = e.target.value
    setSearch(value)
    localStorage.setItem('QuickFilterDailyExpensesAdminView', value)
  }

  const newArrayCash = useMemo(() => debouncedSearch2 !== '' ? cash.filter((row) =>
    row.amount.some((Item) => Item.note && Item.note.toLowerCase().includes(debouncedSearch2.toLowerCase())) ||
    dayjs(row.cashDate).format('DD/MM/YYYY').includes(debouncedSearch2)
  ) : cash, [cash, debouncedSearch2])

  const newArray = debouncedSearch !== '' ? expensesFiltered.filter((row) =>
    row.expenseNumber.toString().includes(debouncedSearch) ||
    row.accountName.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    row.expenseCategory.expensesCategory.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    row.accountNameInfo.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    row.employeeName.some((Item) => Item.employee.toLowerCase().includes(debouncedSearch.toLowerCase()))
  ) : expensesFiltered

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  })
  const RowCash = (props) => {
    const { row } = props;
    const [open, setOpen] = useState(true);
    return (
      <>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell sx={{ padding: '1px' }}>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell sx={{ padding: '1px' }} component="th" scope="row">
            {dayjs(row.cashDate).format('DD/MM/YYYY')}
          </TableCell>
          <TableCell>
            {row.Create.person}
          </TableCell>
          <TableCell>
            {row.totalCash.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto">
              <Box sx={{ margin: 1 }}>
                <table>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', fontSize: '13px', border: '2px solid black' }}>Amount Fc</th>
                      <th style={{ textAlign: 'left', fontSize: '13px', border: '2px solid black' }}>Rate</th>
                      <th style={{ textAlign: 'left', fontSize: '13px', border: '2px solid black' }}>Amount Usd</th>
                      <th style={{ textAlign: 'left', fontSize: '13px', border: '2px solid black' }}>Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      row.amount?.map((row1, i) => (
                        <tr key={row1.idRow}>
                          <td style={{ textAlign: 'left', fontSize: '13px', border: '2px solid black' }}> FC {row1.amountFC}</td>
                          <td style={{ textAlign: 'left', fontSize: '13px', border: '2px solid black' }}>{row1.rate}</td>
                          <td style={{ textAlign: 'left', fontSize: '13px', border: '2px solid black' }}>$ {row1.total}</td>
                          <td style={{ textAlign: 'left', fontSize: '13px', border: '2px solid black' }}> {row1.note}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    )
  }
  const Row = (props) => {
    const { row } = props;
    const [open, setOpen] = useState(true);

    return (
      <>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell sx={{ padding: '1px' }}>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell sx={{ padding: '1px' }} component="th" scope="row">
            {dayjs(row).format('DD/MM/YYYY')}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto">
              <Box sx={{ margin: 1 }}>

                <div ref={componentRef}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', color: 'gray' }} size="small" aria-label="purchases">
                    <thead>
                      <tr>
                        <th style={{ border: '1px solid gray', textAlign: 'center', backgroundColor: '#0276aa', color: 'white' }} colSpan={7}>Cash</th>
                      </tr>
                      <tr>
                        <th style={{ border: '1px solid gray' }}>#</th>
                        <th style={{ border: '1px solid gray' }} colSpan={4}>Description</th>
                        <th style={{ border: '1px solid gray' }}>Total FC</th>
                        <th style={{ border: '1px solid gray' }}>Total $</th>
                      </tr>
                    </thead>
                    {
                      filterTotal2.map((row2) => (
                        <tbody key={row2._id}>
                          {
                            dayjs(row2.cashDate).format('DD/MM') === dayjs(row).format('DD/MM') ?
                              <>
                                {
                                  row2.amount?.map((Item, i) => (
                                    <tr key={Item.idRow}>
                                      <td style={{ border: '1px solid gray', width: '100px' }}>{i + 1}</td>
                                      <td style={{ border: '1px solid gray', width: '100px' }} colSpan={4}>{Item.note !== undefined ? Item.note : ''}</td>
                                      {
                                        parseFloat(Item.amountFC) !== 0 ?
                                          <>
                                            <td style={{ border: '1px solid gray', width: '100px' }}>FC {Item.amountFC?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                            <td style={{ border: '1px solid gray', width: '100px' }}>$ 0</td>
                                          </>
                                          :
                                          <>
                                            <td style={{ border: '1px solid gray', width: '100px' }}>FC 0</td>
                                            <td style={{ border: '1px solid gray', width: '100px' }}>$ {Item.total?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                          </>
                                      }
                                    </tr>
                                  ))
                                }
                              </>
                              : null
                          }
                        </tbody>))
                    }
                    <tbody>
                      <tr>
                        <td style={{ border: '1px solid gray', width: '100px' }} colSpan={4}> Daily Cash Total</td>
                        <td style={{ border: '1px solid gray', width: '120px' }} colSpan={2}>FC {totalCashFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                        <td style={{ border: '1px solid gray', width: '120px' }}>$ {totalCashUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                      </tr>
                    </tbody>
                    <thead>
                      <tr>
                        <th style={{ border: '1px solid gray', backgroundColor: '#ff5722', color: 'white', textAlign: 'center' }} colSpan={7}>Expenses</th>
                      </tr>
                      <tr>
                        <th style={{ border: '1px solid gray' }}>#</th>
                        <th style={{ border: '1px solid gray' }}>Category</th>
                        <th style={{ border: '1px solid gray' }}>Account</th>
                        <th style={{ border: '1px solid gray' }}>Account Name</th>
                        <th style={{ border: '1px solid gray' }}>Description</th>
                        <th style={{ border: '1px solid gray' }}>Total FC</th>
                        <th style={{ border: '1px solid gray' }}>Total $</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        newArray.map((item) =>
                          <tr key={item._id}>
                            {
                              dayjs(item.expenseDate).format('DD/MM') === dayjs(row).format('DD/MM') ? (
                                <>
                                  <td style={{ border: '1px solid gray', width: '100px' }}>
                                    D-0{item.expenseNumber}
                                  </td>
                                  <td style={{ border: '1px solid gray' }}>
                                    {item.expenseCategory.expensesCategory}
                                  </td>
                                  <td style={{ border: '1px solid gray' }}>
                                    {item.accountName}
                                  </td>
                                  <td style={{ border: '1px solid gray' }}>
                                    {
                                      item.accountName === 'Project' && (
                                        item.accountNameInfo.name
                                      )
                                    }
                                    {
                                      item.accountName === 'Employee' && (
                                        <section>
                                          {
                                            item.employeeName.map((Item) => (
                                              <p key={Item.idRow}>
                                                <span>{Item.employee} </span> <span> $ {Item.total}</span>
                                              </p>
                                            ))
                                          }
                                        </section>

                                      )
                                    }
                                  </td>
                                  <td style={{ border: '1px solid gray' }}>
                                    {item.description}
                                  </td>
                                  <td style={{ border: '1px solid gray' }}>
                                    <span>FC </span>{item.amount !== 0 ? item.amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}
                                  </td>
                                  <td style={{ border: '1px solid gray' }}>
                                    <span>$ </span>{item.amount === 0 ? item.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}
                                  </td>
                                </>
                              )
                                : null
                            }
                          </tr>
                        )
                      }
                      <tr>
                        <td style={{ border: '1px solid gray' }} colSpan={4}>Daily Expenses Total</td>
                        <td style={{ border: '1px solid gray', width: '100px' }} colSpan={2}><span>FC </span><span >{totalDayFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                        <td style={{ border: '1px solid gray', width: '100px' }}><span>$ </span><span >{totalDay.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                      </tr>
                    </tbody>
                    <thead>
                      <tr>
                        <th style={{ border: '1px solid gray', backgroundColor: '#6573c3', color: 'white', textAlign: 'center' }} colSpan={7}>Item Purchase</th>
                      </tr>
                      <tr>
                        <th style={{ border: '1px solid gray' }}>#</th>
                        <th style={{ border: '1px solid gray' }} colSpan={3}>Description</th>
                        <th style={{ border: '1px solid gray' }}>Reference</th>
                        <th style={{ border: '1px solid gray' }}>Total FC</th>
                        <th style={{ border: '1px solid gray' }}>Total $</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        itemPurchaseFiltered.map((item) =>
                          <tr key={item._id}>
                            {
                              dayjs(item.itemPurchaseDate).format('DD/MM') === dayjs(row).format('DD/MM') ? (
                                <>
                                  <td style={{ border: '1px solid gray', width: '100px' }}>
                                    {item.itemPurchaseNumber}
                                  </td>
                                  <td style={{ border: '1px solid gray' }} colSpan={3}>
                                    {item.projectName !== undefined ? item.projectName?.name : item.description}
                                  </td>
                                  <td style={{ border: '1px solid gray' }}>
                                    {item.manufacturer + ' / ' + item.manufacturerNumber}
                                  </td>
                                  <td style={{ border: '1px solid gray' }}>
                                    <span>FC </span> {item.totalFC !== undefined ? parseFloat(item.totalFC).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}
                                  </td>
                                  <td style={{ border: '1px solid gray' }}>
                                    <span>$ </span>{item.total}
                                  </td>
                                </>
                              )
                                : null
                            }
                          </tr>
                        )
                      }
                      <tr>
                        <td style={{ border: '1px solid gray' }} colSpan={4}>Daily Item Purchase Total</td>
                        <td style={{ border: '1px solid gray', width: '100px', textAlign: 'center' }} colSpan={2}><span>FC </span>{totalItemPurchaseFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                        <td style={{ border: '1px solid gray', width: '100px' }}><span>$ </span><span >{totalItemPurchase.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                      </tr>
                    </tbody>
                    <thead>
                      <tr>
                        <th style={{ border: '1px solid gray', backgroundColor: '#ab003c', color: 'white', textAlign: 'center' }} colSpan={7}>PayRoll</th>
                      </tr>
                      <tr>
                        <th style={{ border: '1px solid gray' }}>#</th>
                        <th style={{ border: '1px solid gray' }} colSpan={3}>EmployeeName</th>
                        <th style={{ border: '1px solid gray' }}>Month</th>
                        <th style={{ border: '1px solid gray' }}>Total FC</th>
                        <th style={{ border: '1px solid gray' }}>Total $</th>
                      </tr>
                    </thead>
                    {
                      user.data.role === 'CEO' && (
                        <tbody>
                          {
                            payRollFiltered.map((item) =>
                              <tr key={item._id}>
                                {
                                  dayjs(item.payDate).format('DD/MM') === dayjs(row).format('DD/MM') ? (
                                    <>
                                      <td style={{ border: '1px solid gray', width: '100px' }}>
                                        P-0{item.payNumber}
                                      </td>
                                      <td style={{ border: '1px solid gray' }} colSpan={3}>
                                        {item.employeeName !== undefined ? item.employeeName.name : ''}
                                      </td>
                                      <td style={{ border: '1px solid gray' }}>
                                        {dayjs(item.month).format('MMMM/YYYY')}
                                      </td>
                                      <td style={{ border: '1px solid gray' }}>
                                        <span>FC </span>{item.amountPayFC !== undefined ? item.amountPayFC.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}
                                      </td>
                                      <td style={{ border: '1px solid gray' }}>
                                        <span>$ </span>{item.amountPayUSD !== undefined ? item.amountPayUSD.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}
                                      </td>
                                    </>
                                  )
                                    : null
                                }
                              </tr>
                            )
                          }
                          <tr>
                            <td style={{ border: '1px solid gray' }} colSpan={4}>Daily PayRoll Total</td>
                            <td style={{ border: '1px solid gray', width: '100px', textAlign: 'center' }} colSpan={2}><span>FC </span><span >{totalPayRollDailyFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                            <td style={{ border: '1px solid gray', width: '100px' }}><span>$ </span><span >{totalPayRollDaily.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                          </tr>
                        </tbody>
                      )
                    }

                    <thead>
                      <tr>
                        <th style={{ border: '1px solid gray', backgroundColor: 'black', color: 'white', textAlign: 'center' }} colSpan={7}>POS</th>
                      </tr>
                      <tr>
                        <th style={{ border: '1px solid gray' }}>#</th>
                        <th style={{ border: '1px solid gray' }} colSpan={4}>Customer</th>
                        <th style={{ border: '1px solid gray' }}>Total FC</th>
                        <th style={{ border: '1px solid gray' }}>Total $</th>
                      </tr>
                    </thead>
                    {
                      user.data.role === 'CEO' && (
                        <tbody>
                          {
                            posFiltered.map((item) =>
                              <tr key={item._id}>
                                {
                                  dayjs(item.invoiceDate).format('DD/MM') === dayjs(row).format('DD/MM') ? (
                                    <>
                                      <td style={{ border: '1px solid gray' }}>
                                        S-0{item.factureNumber}
                                      </td>
                                      <td style={{ border: '1px solid gray' }} colSpan={4}>
                                        {item.customerName !== undefined ? item.customerName.customerName : ''}
                                      </td>
                                      <td style={{ border: '1px solid gray' }}>
                                        <span>FC </span>{item.amountTotalFc !== undefined ? item.amountTotalFc.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}
                                      </td>
                                      <td style={{ border: '1px solid gray' }}>
                                        <span>$ </span>{item.amountTotalUsd !== undefined ? item.amountTotalUsd.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : item.amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                      </td>
                                    </>
                                  )
                                    : null
                                }
                              </tr>
                            )
                          }
                          <tr>
                            <td style={{ border: '1px solid gray' }} colSpan={4}>POS Received Total</td>
                            <td style={{ border: '1px solid gray', width: '100px', textAlign: 'center' }} colSpan={2}><span>FC </span><span >{isNaN(totalPosFC) ? 0 : totalPosFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                            <td style={{ border: '1px solid gray', width: '100px' }}><span>$ </span><span >{isNaN(totalPosUSD) ? 0 : totalPosUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                          </tr>
                        </tbody>
                      )
                    }
                    <thead>
                      <tr>
                        <th style={{ border: '1px solid gray', backgroundColor: '#202a5a', color: 'white', textAlign: 'center' }} colSpan={7}>Payment Received</th>
                      </tr>
                      <tr>
                        <th style={{ border: '1px solid gray' }}>#</th>
                        <th style={{ border: '1px solid gray' }}>Customer</th>
                        <th style={{ border: '1px solid gray' }}>Description</th>
                        <th style={{ border: '1px solid gray' }}>Reference</th>
                        <th style={{ border: '1px solid gray' }}>Total FC</th>
                        <th style={{ border: '1px solid gray' }}>Total $</th>
                        <th style={{ border: '1px solid gray' }}>Credit</th>
                      </tr>
                    </thead>
                    {
                      user.data.role === 'CEO' && (
                        <tbody>
                          {
                            filterTotalPayment.map((item) =>
                              <tr key={item._id}>
                                {
                                  dayjs(item.paymentDate).format('DD/MM') === dayjs(row).format('DD/MM') ? (
                                    <>
                                      <td style={{ border: '1px solid gray' }}>
                                        P-0{item.paymentNumber}
                                      </td>
                                      <td style={{ border: '1px solid gray' }}>
                                        {item.customerName !== undefined ? item.customerName.customerName : ''}
                                      </td>
                                      <td style={{ border: '1px solid gray' }}>
                                        {item.modes !== undefined ? item.modes.toUpperCase() : ''}  {' | ' + item.description}
                                      </td>
                                      <td style={{ border: '1px solid gray' }}>
                                        {item.TotalAmount?.map((Item, i) => (
                                          <p key={i}>
                                            <span>INV-00{Item.Ref}:  ${Item.total !== undefined ? Item.total : 0}</span>
                                          </p>
                                        ))}
                                      </td>
                                      <td style={{ border: '1px solid gray' }}>
                                        <span>FC </span>{item.PaymentReceivedFC !== undefined ? item.PaymentReceivedFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}
                                      </td>
                                      <td style={{ border: '1px solid gray' }}>
                                        <span>$ </span>{item.PaymentReceivedUSD !== undefined ? item.PaymentReceivedUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : item.amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                      </td>
                                      <td style={{ border: '1px solid gray' }}>
                                        <span>$ </span>{item.remaining.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                      </td>
                                    </>
                                  )
                                    : null
                                }
                              </tr>
                            )
                          }
                          <tr>
                            <td style={{ border: '1px solid gray' }} colSpan={4}>Daily Payment Received Total</td>
                            <td style={{ border: '1px solid gray', width: '100px', textAlign: 'center' }}><span>FC </span><span >{isNaN(totalPaymentFC1) ? 0 : totalPaymentFC1.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                            <td style={{ border: '1px solid gray', width: '100px' }} colSpan={2}><span>$ </span><span >{isNaN(totalPaymentUSD1) ? totalPaymentUSDTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : totalPaymentUSD1.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                          </tr>
                        </tbody>
                      )
                    }
                  </table>
                  {
                    user.data.role === 'CEO' && (
                      <section style={{ position: 'relative', float: 'right', marginBottom: '5px' }}>
                        <Card sx={{ width: '600px', color: 'gray', marginBottom: '5px' }}>
                          <CardContent sx={{ justifyContent: 'center' }}>
                            <table style={{ marginBottom: '5px' }}>
                              <thead>
                                <tr>
                                  <th colSpan={3} style={{ textAlign: 'center', fontSize: '20px' }}>Summary</th>
                                </tr>
                                <tr>
                                  <th></th>
                                  <th style={{ border: '2px solid black' }}>Total (FC)</th>
                                  <th style={{ border: '2px solid black' }}>Total ($)</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td style={{ textAlign: 'left', fontSize: '20px', border: '2px solid black' }}>Cash</td>
                                  <td style={{ textAlign: 'left', fontSize: '20px', border: '2px solid black' }}><span>FC </span><span>{totalCashFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                  <td style={{ textAlign: 'left', fontSize: '20px', border: '2px solid black' }}><span>$ </span><span>{totalCashUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                </tr>
                                <tr>
                                  <td style={{ textAlign: 'left', fontSize: '20px', border: '2px solid black' }}>Total Expense</td>
                                  <td style={{ textAlign: 'left', fontSize: '20px', border: '2px solid black' }}><span>FC </span>{totalDayFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                  <td style={{ textAlign: 'left', fontSize: '20px', border: '2px solid black' }}><span>$ </span>{totalDay.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                </tr>
                                <tr>
                                  <td style={{ textAlign: 'left', fontSize: '20px', border: '2px solid black' }}>Total Item Purchase</td>
                                  <td style={{ textAlign: 'left', fontSize: '20px', border: '2px solid black' }}><span>FC </span>{totalItemPurchaseFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                  <td style={{ textAlign: 'left', fontSize: '20px', border: '2px solid black' }}><span>$ </span>{totalItemPurchase.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                </tr>
                                <tr>
                                  <td style={{ textAlign: 'left', fontSize: '20px', border: '2px solid black' }}>Total PayRoll</td>
                                  <td style={{ textAlign: 'left', fontSize: '20px', border: '2px solid black' }}><span>FC </span>{totalPayRollDailyFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                  <td style={{ textAlign: 'left', fontSize: '20px', border: '2px solid black' }}><span>$ </span>{totalPayRollDaily.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                </tr>
                                <tr>
                                  <td style={{ textAlign: 'left', fontSize: '20px', border: '2px solid black' }}>Total Payment Received</td>
                                  <td style={{ textAlign: 'left', fontSize: '20px', border: '2px solid black' }}><span>FC </span>{totalEnterFc.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                  <td style={{ textAlign: 'left', fontSize: '20px', border: '2px solid black' }}><span>$ </span>{totalEnter.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                </tr>
                              </tbody>
                              {
                                filterTotal2.map((row) => (
                                  <tbody key={row._id}>
                                    {
                                      row.status !== undefined || row.status === 'Closed' ?
                                        <tr>
                                          <td style={{ textAlign: 'left', fontSize: '20px', border: '2px solid black' }}>Amount Return</td>
                                          <td style={{ textAlign: 'left', fontSize: '20px', border: '2px solid black' }}><span>FC </span>{row.returnAmountFC !== undefined ? row.returnAmountFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</td>
                                          <td style={{ textAlign: 'left', fontSize: '20px', border: '2px solid black' }}><span>$ </span>{row.returnAmountUSD !== undefined ? row.returnAmountUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</td>
                                        </tr>
                                        : null
                                    }
                                  </tbody>
                                ))
                              }
                              {
                                filterTotal2.map((row) => (
                                  <tbody key={row._id}>
                                    {
                                      row.status !== undefined || row.status === 'Closed' ?
                                        <tr>
                                          <td style={{ textAlign: 'left', fontSize: '20px', border: '2px solid black' }}>Remaining</td>
                                          <td style={{ textAlign: 'left', fontSize: '20px', border: '2px solid black' }}><span>FC </span>{row.RemainingAmountFC !== undefined ? row.RemainingAmountFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</td>
                                          <td style={{ textAlign: 'left', fontSize: '20px', border: '2px solid black' }}><span>$ </span>{row.RemainingAmountUSD !== undefined ? row.RemainingAmountUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</td>
                                        </tr>
                                        :
                                        <tr>
                                          <td style={{ textAlign: 'left', fontSize: '20px', border: '2px solid black' }}>Remaining</td>
                                          <td style={{ textAlign: 'left', fontSize: '20px', border: '2px solid black' }}><span>FC </span>{RemainingFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                          <td style={{ textAlign: 'left', fontSize: '20px', border: '2px solid black' }}><span>$ </span>{RemainingUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                        </tr>
                                    }
                                  </tbody>
                                ))
                              }
                              <tbody>
                                {
                                  filterTotal2.map((row) => (
                                    <tr key={row._id}>
                                      <td colSpan={3}>
                                        {
                                          row.status !== undefined ?
                                            <>
                                              {
                                                row.status !== 'Close' ?
                                                  <button onClick={() => handleOpenViewStatus(row._id)} className='btnCustomer' style={{ width: '100%' }}>Edit</button>
                                                  :
                                                  <p style={{ width: '100%', textAlign: 'center' }}>Closed</p>
                                              }
                                            </>
                                            :
                                            <>
                                              <button onClick={() => handleOpenViewStatus(row._id)} className='btnCustomer' style={{ width: '100%' }}>Cash Out</button>
                                            </>
                                        }
                                      </td>
                                    </tr>
                                  ))
                                }
                              </tbody>
                            </table>
                          </CardContent>
                        </Card>
                      </section>
                    )}

                </div>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
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
              Expenses Daily Information
            </Typography>
            <IconButton onClick={() => navigate('/DailyExpenses')}>
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
          <Container maxWidth="none" sx={{ mt: 0 }} >
            <Box sx={{ width: '100%' }}>
              <TabContext
                value={value3}
              >
                <Box sx={{ borderColor: 'divider' }}>
                  <TabList
                    onChange={handleChange3}
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
                          bgcolor: '#f2f2f2',
                          border: '1px solid gray',
                          borderRadius: '10px'
                        }
                      }}
                    />
                    {
                      user.data.role === 'CEO' && (
                        <Tab
                          label="Cash In"
                          value="2"
                          sx={{
                            '&.Mui-selected': {
                              color: 'white',
                              backgroundColor: 'gray',
                              borderRadius: '10px'
                            }, '&:hover': {
                              color: 'gray',
                              bgcolor: '#f2f2f2',
                              border: '1px solid gray',
                              borderRadius: '10px'
                            }
                          }}
                        />
                      )
                    }
                    <Tab
                      label="View Per Day"
                      value="3"
                      sx={{
                        '&.Mui-selected': {
                          color: 'white',
                          backgroundColor: 'gray',
                          borderRadius: '10px'
                        }, '&:hover': {
                          color: 'gray',
                          bgcolor: '#f2f2f2',
                          border: '1px solid gray',
                          borderRadius: '10px'
                        }
                      }}
                    />
                  </TabList>
                </Box>
                <TabPanel value="1" sx={{ backgroundColor: 'white' }}>
                  <div style={{ width: '100%', marginTop: '50px', marginBottom: '50px' }}>
                    <DailyExpensesMonthlyChartView />
                  </div>
                </TabPanel >
                <TabPanel value="2" sx={{ backgroundColor: 'white' }}>
                  <section style={{ position: 'relative', float: 'right', padding: '10px' }}>
                    <TextField
                      label='search'
                      id='search'
                      value={search2}
                      variant="standard"
                      onChange={(e) => setSearch2(e.target.value)}
                    />
                  </section>
                  <div style={{ width: '100%', marginTop: '10px', height: '520px', overflow: 'hidden', overflowY: "scroll" }}>
                    <Table aria-label="collapsible table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ padding: '1px' }}>#</TableCell>
                          <TableCell sx={{ padding: '1px' }}>Date</TableCell>
                          <TableCell sx={{ padding: '1px' }}>Created By</TableCell>
                          <TableCell sx={{ padding: '1px' }}>Total</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {newArrayCash.map((row, i) => (
                          <RowCash key={i} row={row} />
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabPanel>
                <TabPanel value="3" sx={{ backgroundColor: 'white' }}>
                  <div style={{ marginBottom: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0px' }}>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker', 'DatePicker']}>
                        <DatePicker
                          required
                          name='startDate'
                          label='Date'
                          value={dayjs(startDate)}
                          onChange={(date) => handleChangeDate(date)}
                          format='DD/MM/YYYY'
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                    <PrintTooltip title="Print">
                      <IconButton onClick={handlePrint}>
                        <LocalPrintshop />
                      </IconButton>
                    </PrintTooltip>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                    {filteredData.map((row) => (
                      <div key={row}>
                        {
                          filterTotal2.map((row2) => (
                            <div key={row2._id}>
                              {
                                dayjs(row2.cashDate).format('DD/MM') === dayjs(row).format('DD/MM') ?
                                  <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'right' }}>
                                    <Typography><span style={{ color: 'gray', fontSize: '20px' }}>Today's cash </span></Typography>
                                    <EditTooltip title="Edit" placement='right'>
                                      <span style={{ color: 'gray', fontSize: '20px' }}>
                                        <IconButton onClick={() => handleOpenView(row2._id)}  >
                                          <Edit />
                                        </IconButton>
                                      </span>
                                    </EditTooltip>
                                  </div>
                                  : ''
                              }
                            </div>
                          ))
                        }
                      </div>
                    ))}
                    <div>
                    </div>
                  </div>
                  <Box sx={{ height: '540px', width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: '540px' }} >
                      {
                        filteredData.length > 0 ? (
                          <Table aria-label="collapsible table">
                            <TableHead>
                              <TableRow>
                                <TableCell sx={{ padding: '1px' }} />
                                <TableCell sx={{ padding: '1px' }}>Date</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {filteredData.map((row) => (
                                <Row key={row} row={row} />
                              ))}
                            </TableBody>
                          </Table>) : <h2 style={{ textAlign: 'center' }}>Select a Start Date And End Date To View Expenses</h2>
                      }
                    </TableContainer>
                  </Box>
                </TabPanel>
              </TabContext>
            </Box>
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
              <h2> Data Saved successfully</h2>
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
      <Modal
        open={open}
        onClose={handleCloseView}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 1000 }}>
          <ViewTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseView} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </ViewTooltip>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Today's Cash
          </Typography>
          <form onSubmit={handleSubmitUpdate}>
            <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                      name='cashDate'
                      label='Date'
                      value={dayjs(cashDate)}
                      onChange={(date) => setCashDate(date)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                      format='DD/MM/YYYY'
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={11}>
                <TableContainer sx={{ height: 200, width: '100%', padding: '10px', overflowX: 'hidden' }}>
                  <table className='tableInfo10'>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Amount FC</th>
                        <th>Rate</th>
                        <th>Total $</th>
                        <th>Note</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        amount ?
                          amount.map((row, i) => (
                            <tr key={row.idRow}>
                              <td><DragIndicatorRounded /></td>
                              <td>
                                {
                                  row.amountFC !== 0 && row.total !== 0 ?
                                    (
                                      <TextField
                                        required={row.amountFC === 0 && row.total === 0}
                                        name='amountFC' id='amountFC'
                                        onChange={(e) => handleChangeAmount(e, i)}
                                        value={row.amountFC}
                                        size="small"
                                        sx={{ width: '130px', backgroundColor: 'white' }}
                                      />
                                    )
                                    : (
                                      <TextField
                                        required
                                        name='amountFC' id='amountFC'
                                        onChange={(e) => handleChangeAmount(e, i)}
                                        size="small"
                                        sx={{ width: '130px', backgroundColor: 'white' }}
                                      />
                                    )
                                }
                              </td>
                              <td>
                                <TextField
                                  disabled
                                  name='rate' id='rate'
                                  value={row.rate}
                                  onChange={(e) => handleChangeAmount(e, i)}
                                  size="small"
                                  sx={{ width: '100px', backgroundColor: 'white' }}
                                />
                              </td>
                              <td>
                                <TextField
                                  required
                                  name='amountUsd' id='amountUsd'
                                  value={row.amountUsd}
                                  onChange={(e) => handleChangeAmount(e, i)}
                                  size="small"
                                  sx={{ width: '100px', backgroundColor: 'white' }}
                                />
                              </td>
                              <td hidden id='amountTotalInvoice'>{row.total}</td>
                              <td>
                                <TextField
                                  name='note' id='note'
                                  value={row.note !== undefined ? row.note : ''}
                                  onChange={(e) => handleChangeAmount(e, i)}
                                  size="small"
                                  sx={{ width: '300px', backgroundColor: 'white' }}
                                />
                              </td>
                              <td>
                                <LightTooltip title="Delete">
                                  <IconButton onClick={() => deleteItem(row.idRow)} >
                                    <Delete style={{ cursor: 'pointer', color: 'red' }} />
                                  </IconButton>
                                </LightTooltip>
                              </td>
                            </tr>
                          ))
                          : ''
                      }
                      <tr>
                        <td colSpan={3}>Total</td>
                        <td>{totalCashInfo}</td>
                      </tr>
                    </tbody>
                  </table>
                </TableContainer>

              </Grid>
              <Grid item xs={1}>
                <ViewTooltip title="Add" placement="bottom">
                  <IconButton onClick={addItem} >
                    <Add className='btn1' style={{ fontSize: '40px' }} />
                  </IconButton>
                </ViewTooltip>
              </Grid>
              <br />
              <Grid item xs={12}>
                <button type='submit' className='btnCustomer6' style={{ width: '100%' }}>Save</button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
      <Modal
        open={openOption}
        onClose={handleCloseViewOption}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <ViewTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseViewOption} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </ViewTooltip>
          <Grid container sx={{ alignItems: 'center', padding: '15px' }} spacing={2}>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Typography>Do you want to take back the cash or send it to the next day ? </Typography>
              <p><span className="txt2" style={{ color: 'red' }}>Note :</span> <span className="txt2"></span>select cash to take back or select next to make a new cash for the next day</p>
            </Grid>
            <br />
            <Grid item xs={6}>
              <button type='submit' onClick={handleOpenViewStatus} className='btnCustomer' style={{ width: '100%' }}>Cash</button>
            </Grid>
            <Grid item xs={6}>
              <button type='submit' onClick={handleOpenViewNextDay} className='btnCustomer' style={{ width: '100%' }}>Next</button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Modal
        open={openStatus}
        onClose={handleCloseViewStatus}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 1000 }}>
          <ViewTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseViewStatus} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </ViewTooltip>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Close the day
          </Typography>
          {
            statusInfo === 'Pending' ?
              (<form onSubmit={handleSubmitUpdateReturn}>
                <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>
                  <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker
                          name='cashDate'
                          label='Date'
                          value={dayjs(cashDate)}
                          onChange={(date) => setCashDate(date)}
                          sx={{ width: '100%', backgroundColor: 'white' }}
                          format='DD/MM/YYYY'
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12}>
                    <table className='tableInfo10'>
                      <thead>
                        <tr>
                          <th></th>
                          <th>Total (FC)</th>
                          <th>Total ($)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}>Cash</td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}><span>FC </span><span>{totalCashFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}><span>$ </span><span>{totalCashUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}>Total Expense</td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}><span>FC </span>{totalDayFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}><span>$ </span>{totalDay.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}>Total Item Purchase</td>
                          <td style={{ textAlign: 'center', fontSize: '20px' }}>-</td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}><span>$ </span>{totalItemPurchase.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}>Total PayRoll</td>
                          <td style={{ textAlign: 'center', fontSize: '20px' }}>-</td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}><span>$ </span>{totalPayRollDaily.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}>Amount To Return</td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}><span>FC </span>{RemainingFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}><span>$ </span>{RemainingUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}>Amount Received</td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}><span>FC </span>{restInfoFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}><span>$ </span>{restInfoUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}>Return Amount</td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}>
                            <TextField
                              required
                              name='returnFC' id='returnFC'
                              onChange={(e) => setReturnFC(e.target.value)}
                              size="small"
                              sx={{ width: '150px', backgroundColor: 'white' }}
                            />
                          </td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}>

                            <TextField
                              required
                              name='returnUSD' id='returnUSD'
                              onChange={(e) => setReturnUSD(e.target.value)}
                              size="small"
                              sx={{ width: '150px', backgroundColor: 'white' }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}>Different</td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}><span>FC </span>{restFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}><span>$ </span>{restUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                        </tr>
                      </tbody>
                    </table>
                  </Grid>
                  <Grid item xs={12}>
                    <button type='submit' className='btnCustomer6' style={{ width: '100%' }}>Save</button>
                  </Grid>
                </Grid>
              </form>) :
              (<form onSubmit={handleSubmitUpdateReturn}>
                <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>
                  <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker
                          name='cashDate'
                          label='Date'
                          value={dayjs(cashDate)}
                          onChange={(date) => setCashDate(date)}
                          sx={{ width: '100%', backgroundColor: 'white' }}
                          format='DD/MM/YYYY'
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12}>
                    <table className='tableInfo10'>
                      <thead>
                        <tr>
                          <th></th>
                          <th>Total (FC)</th>
                          <th>Total ($)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}>Cash</td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}><span>FC </span><span>{totalCashFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}><span>$ </span><span>{totalCashUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}>Total Expense</td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}><span>FC </span>{totalDayFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}><span>$ </span>{totalDay.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}>Total Item Purchase</td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}><span>FC </span>{totalItemPurchaseFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}><span>$ </span>{totalItemPurchase.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}>Total PayRoll</td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}><span>FC </span>{totalPayRollDailyFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}><span>$ </span>{totalPayRollDaily.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}>Total Payment Received</td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}><span>FC </span>{isNaN(totalPaymentFC) ? 0 : totalPaymentFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}><span>$ </span>{isNaN(totalPaymentUSD) ? totalPaymentUSDTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : totalPaymentUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}>Amount To Return</td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}><span>FC </span>{RemainingFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}><span>$ </span>{RemainingUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}>Return Amount</td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}>
                            <TextField
                              required
                              name='returnFC' id='returnFC'
                              onChange={(e) => setReturnFC(e.target.value)}
                              size="small"
                              sx={{ width: '150px', backgroundColor: 'white' }}
                            />
                          </td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}>

                            <TextField
                              required
                              name='returnUSD' id='returnUSD'
                              onChange={(e) => setReturnUSD(e.target.value)}
                              size="small"
                              sx={{ width: '150px', backgroundColor: 'white' }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}>Different</td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}><span>FC </span>{restFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                          <td style={{ textAlign: 'left', fontSize: '20px' }}><span>$ </span>{restUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                        </tr>
                      </tbody>
                    </table>
                  </Grid>
                  <Grid item xs={12}>
                    <button type='submit' className='btnCustomer6' style={{ width: '100%' }}>Save</button>
                  </Grid>
                </Grid>
              </form>)
          }

        </Box>
      </Modal>
      <Modal
        open={openNextDay}
        onClose={handleCloseViewNextDay}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 1000 }}>
          <ViewTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseViewNextDay} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </ViewTooltip>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Today's Cash
          </Typography>
          <form>
            <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                      name='cashDate'
                      label='Date'
                      value={dayjs(cashDate)}
                      onChange={(date) => setCashDate(date)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                      format='DD/MM/YYYY'
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={11}>
                <TableContainer sx={{ height: 200, width: '100%', padding: '10px', overflowX: 'hidden' }}>
                  <table className='tableInfo10'>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Amount FC</th>
                        <th>Rate</th>
                        <th>Total $</th>
                        <th>Note</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        amount1 ?
                          amount1.map((row, i) => (
                            <tr key={row.idRow}>
                              <td><DragIndicatorRounded /></td>
                              <td>
                                <TextField
                                  required
                                  name='amountFC' id='amountFC'
                                  value={row.amountFC}
                                  onChange={(e) => handleChangeAmount1(e, i)}
                                  size="small"
                                  sx={{ width: '130px', backgroundColor: 'white' }}
                                />
                              </td>
                              <td>
                                <TextField
                                  disabled
                                  name='rate' id='rate'
                                  value={row.rate}
                                  onChange={(e) => handleChangeAmount1(e, i)}
                                  size="small"
                                  sx={{ width: '100px', backgroundColor: 'white' }}
                                />
                              </td>
                              <td>
                                <TextField
                                  required
                                  name='amountUsd' id='amountUsd'
                                  value={row.amountUsd}
                                  onChange={(e) => handleChangeAmount1(e, i)}
                                  size="small"
                                  sx={{ width: '100px', backgroundColor: 'white' }}
                                />
                              </td>
                              <td hidden id='amountTotalInvoice'>{row.total}</td>
                              <td>
                                <TextField
                                  name='note' id='note'
                                  value={row.note}
                                  onChange={(e) => handleChangeAmount1(e, i)}
                                  size="small"
                                  sx={{ width: '300px', backgroundColor: 'white' }}
                                />
                              </td>
                              <td>
                                <LightTooltip title="Delete">
                                  <IconButton onClick={() => deleteItem1(row.idRow)} >
                                    <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
                                  </IconButton>
                                </LightTooltip>
                              </td>
                            </tr>
                          ))
                          : ''
                      }
                      <tr>
                        <td colSpan={3}>
                          Total
                        </td>
                        <td><span>$</span></td>
                      </tr>
                    </tbody>
                  </table>
                </TableContainer>

              </Grid>
              <Grid item xs={1}>
                <ViewTooltip title="Add" placement="bottom">
                  <IconButton onClick={addItem1} >
                    <Add className='btn1' style={{ fontSize: '40px' }} />
                  </IconButton>
                </ViewTooltip>
              </Grid>
              <br />
              <Grid item xs={12}>
                <button className='btnCustomer6' style={{ width: '100%' }}>Save</button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default DailyExpenseAdminView
