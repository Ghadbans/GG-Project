import React, { useEffect, useState } from 'react';
import SidebarDash1 from '../../../component/SidebarDash1';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { MenuItem, Grid, IconButton, Paper, TextField, FormControl, InputLabel, Select, Typography, styled, Box, Autocomplete, TableContainer, OutlinedInput, InputAdornment, Modal, Backdrop, Divider } from '@mui/material'
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
import axios from 'axios'
import { ArrowUpwardOutlined, RemoveCircleOutline } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import ArrowBack from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Loader from '../../../component/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '@mui/icons-material/Logout';
import Close from '@mui/icons-material/Close';
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import db from '../../../dexieDb';
import { v4 } from 'uuid';

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
function PaymentInformationForm() {
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

  const [amount, setAmount] = useState(0)


  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    const fetchCustomer = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/customer')
          setCustomer(res.data.data.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        const offLineCustomer1 = await db.customerSchema.toArray();
        setCustomer(offLineCustomer1.reverse());
      }
    }
    fetchCustomer()
  }, [])
  const [customerName, setCustomerName] = useState({
    _id: null,
    customerName: null,
    billingAddress: null,
    billingCity: null
  });
  const [bankCharge, setBankCharge] = useState(0);
  const [modes, setModes] = useState('');
  const [reason, setReason] = useState('');
  const [paymentDate, setPaymentDate] = useState(() => {
    const date = new Date()
    return date
  });
  const [description, setDescription] = useState('');
  const [paymentNumber, setPaymentNumber] = useState(0);
  const [rate, setRate] = useState(0);

  useEffect(() => {
    const fetchlastNumber = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/get-last-saved-payment')
          setPaymentNumber(parseInt(res.data.paymentNumber) + 1)
          const resRate = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/rate')
          resRate.data.data.map((row) => setRate(row.rate))
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        const offLineCustomer1 = await db.paymentSchema.toArray();
        const latest = offLineCustomer1.reduce((max, row) => row.paymentNumber > max.paymentNumber ? row : max, offLineCustomer1[0])
        setPaymentNumber(parseInt(latest.paymentNumber) + 1)
      }
    }
    fetchlastNumber()
  }, [])
  // get Invoice 
  const [invoice, setInvoice] = useState([]);
  const [project, setProject] = useState([]);
  const [oldInvoice, setOldInvoice] = useState([]);
  const [customerId, setCustomerId] = useState(null)
  const handleChangeCustomer = (newValue) => {
    const selectedOptions = customer.find((option) => option === newValue)
    setCustomerName({
      _id: selectedOptions?._id,
      customerName: selectedOptions?.Customer,
      billingAddress: selectedOptions?.billingAddress,
      billingCity: selectedOptions?.billingCity
    });
    setCustomerId(selectedOptions?._id)
  }
  const handleClear = () => {
    setCustomerName({
      _id: null,
      customerName: null,
      billingAddress: null,
      billingCity: null
    })
    setInvoice([])
    setCustomerId(null)
  }
  useEffect(() => {
    const fetchData = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/invoice')
          const resProject = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/projects')
          const resPurchase = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/purchase')
          const resPayment = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/payment')
          if (customerId !== null) {
            if (reason === "Invoice") {
              const filterData = res.data.data.filter((row) => row.customerName._id === customerId);
              setOldInvoice(filterData)
              setInvoice(
                filterData.filter((row) => row.status === 'Sent' || row.status === 'Partially-Paid')
                  .map((row) => ({
                    id: row._id,
                    customerName: row.customerName,
                    total: 0,
                    amountPaidFC: 0,
                    amountPaidUSD: 0,
                    rateChange: rate,
                    totalConverted: 0,
                    Ref: row.invoiceNumber,
                    balanceDue: row.balanceDue,
                    invoiceAmount: row.totalInvoice,
                    status: row.status,
                    invoiceDate: row.invoiceDate
                  }))
              )
            } else if (reason === "Project") {
              const filterData2 = resProject.data.data.filter((row) => row.customerName._id === customerId && row.status === "On-Going" && resPurchase.data.data.find((Item) => Item.projectName._id === row._id && Item.status !== "Make" && Item.status !== "Invoiced"));
              setProject(filterData2)
              setInvoice(filterData2.map((row) => {
                const relatedPayments = resPayment.data.data.filter((p) => p.TotalAmount && p.TotalAmount.find((t) => t.id === row._id));
                const totalPaid = relatedPayments.reduce((sum, p) => sum + parseFloat(p.TotalAmount.find((t) => t.id === row._id)?.total || 0), 0);
                const budget = row.budget !== undefined ? parseFloat(row.budget) : 0;
                return {
                  id: row._id,
                  customerName: row.customerName,
                  total: 0,
                  amountPaidFC: 0,
                  amountPaidUSD: 0,
                  rateChange: rate,
                  totalConverted: 0,
                  Ref: row.projectNumber,
                  balanceDue: budget - totalPaid,
                  invoiceAmount: budget,
                  status: "",
                  invoiceDate: row.startDate
                }
              }))
            }
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        const offLineCustomer1 = await db.invoiceSchema.toArray();
        if (customerId !== null) {
          const resPaymentLocal = await db.paymentSchema.toArray();
          if (reason === "Invoice") {
            const filterData = offLineCustomer1.filter((row) => row.customerName._id === customerId);
            setOldInvoice(filterData)
            setInvoice(
              filterData.filter((row) => row.status === 'Sent' || row.status === 'Partially-Paid')
                .map((row) => ({
                  id: row._id,
                  customerName: row.customerName,
                  total: 0,
                  amountPaidFC: 0,
                  amountPaidUSD: 0,
                  rateChange: rate,
                  totalConverted: 0,
                  Ref: row.invoiceNumber,
                  balanceDue: row.balanceDue,
                  invoiceAmount: row.totalInvoice,
                  status: row.status,
                  invoiceDate: row.invoiceDate
                }))
            )
          } else if (reason === "Project") {
            const resProjectLocal = await db.projectSchema.toArray();
            const resPurchaseLocal = await db.purchaseSchema.toArray();
            const filterData2 = resProjectLocal.filter((row) => row.customerName._id === customerId && row.status === "On-Going" && resPurchaseLocal.find((Item) => Item.projectName._id === row._id && Item.status !== "Make" && Item.status !== "Invoiced"));
            setProject(filterData2)
            setInvoice(filterData2.map((row) => {
              const relatedPayments = resPaymentLocal.filter((p) => p.TotalAmount && p.TotalAmount.find((t) => t.id === row._id));
              const totalPaid = relatedPayments.reduce((sum, p) => sum + parseFloat(p.TotalAmount.find((t) => t.id === row._id)?.total || 0), 0);
              const budget = row.budget !== undefined ? parseFloat(row.budget) : 0;
              return {
                id: row._id,
                customerName: row.customerName,
                total: 0,
                amountPaidFC: 0,
                amountPaidUSD: 0,
                rateChange: rate,
                totalConverted: 0,
                Ref: row.projectNumber,
                balanceDue: budget - totalPaid,
                invoiceAmount: budget,
                status: "",
                invoiceDate: row.startDate
              }
            }))
          }
        }
      }
    }
    fetchData()
  }, [customerId, reason])

  const handleChangeCEO = (e, idRow) => {
    const { name, value } = e.target;
    const list = [...invoice]
    const i = invoice.findIndex(Item => Item.id === idRow)
    list[i][name] = value;
    list[i]['totalConverted'] = Math.round((list[i]['amountPaidFC'] / list[i]['rateChange']) * 100) / 100;
    list[i]['total'] = Math.round((parseFloat(list[i]['totalConverted']) + parseFloat(list[i]['amountPaidUSD'])) * 100) / 100;
    if (list[i]['total'] > list[i]['balanceDue'] && reason === "Invoice") {
      list[i]['amountPaidFC'] = 0
      list[i]['amountPaidUSD'] = 0
      list[i]['total'] = 0
    }
    setInvoice(list)
  }
  const handlePayment = (e) => {
    e.preventDefault();
    let remaining = amount;
    const totalInvoiceExp = invoice.map((row) => {
      const total = Math.min(remaining, row.balanceDue).toFixed(2);
      remaining -= total
      return { ...row, total }
    })
    setInvoice(totalInvoiceExp)
  }
  const [PaymentReceivedFC, setPaymentReceivedFC] = useState(0)
  const [PaymentReceivedUSD, setPaymentReceivedUSD] = useState(0)
  const balanceDueInfo = invoice.length > 0 ? invoice.reduce((sum, row) => sum + parseFloat(row.balanceDue), 0) : 0
  const PaymentInfo = invoice.length > 0 ? invoice.reduce((sum, row) => sum + parseFloat(row.total), 0) : 0
  useEffect(() => {
    if (modes !== "Credit") {
      const PaymentReceivedFC2 = invoice.length > 0 ? invoice.reduce((sum, row) => sum + parseFloat(row.amountPaidFC), 0) : 0
      setPaymentReceivedFC(PaymentReceivedFC2)
      const PaymentReceivedUSD2 = invoice.length > 0 ? invoice.reduce((sum, row) => sum + parseFloat(row.amountPaidUSD), 0) : 0
      setPaymentReceivedUSD(PaymentReceivedUSD2)
    }
  }, [invoice, modes])

  const handleChangeModes = (e) => {
    setModes(e.target.value)
  }

  const totalConvertedFc = Math.round((PaymentReceivedFC / rate) * 100) / 100;
  const totalUSdInfo = Math.round((parseFloat(totalConvertedFc) + parseFloat(PaymentReceivedUSD)) * 100) / 100;

  const remainingInvoice = balanceDueInfo - PaymentInfo
  const remaining = Math.round((parseFloat(amount) - PaymentInfo) * 100) / 100

  const [oldCredit, setOldCredit] = useState(null)
  useEffect(() => {
    const fetchCustomer = async () => {
      if (customerId) {
        if (navigator.onLine) {
          try {
            const res = await axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-customer/${customerId}`)
            setOldCredit(res.data.data.credit)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        } else {
          const resLocal = await db.customerSchema.get({ _id: customerId })
          setOldCredit(resLocal.credit)
        }
      }
    }
    fetchCustomer()
  }, [customerId])

  const [credit, setCredit] = useState(0)
  useEffect(() => {
    const totalR = isNaN(remaining + oldCredit) ? 0 : parseFloat(Number(remaining) + Number(oldCredit))
    setCredit(totalR)
  }, [oldCredit, remaining])

  const TotalAmount = invoice.length > 0 ? invoice.filter((row) => parseFloat(row.total) !== 0) : null

  const handleUpdateInvoice = async () => {
    if (reason === "Invoice") {
      const invoiceUpdate = invoice.length > 0 ? invoice.map((row) => {
        const correspondingId = oldInvoice.find((row2) => row2._id === row.id)
        const total = correspondingId ? parseFloat(correspondingId.total) + parseFloat(row.total) : row.balanceDue;
        const difference = correspondingId ? correspondingId.totalInvoice - total : row.balanceDue;
        if (parseFloat(difference) === 0) {
          row.status = 'Paid'
        } else if (difference !== row.balanceDue) {
          row.status = 'Partially-Paid'
        } else {
          row.status = 'Sent'
        }
        return {
          id: row.id,
          number: correspondingId.invoiceNumber,
          data: {
            total,
            balanceDue: difference,
            status: row.status
          }
        }
      }) : null

      if (navigator.onLine) {
        const updateRequest = invoiceUpdate !== null ?
          invoiceUpdate.filter((row) => row.data.total !== 0).map(({ id, data }) => {
            return axios.put(`https://globalgate-backend-production.up.railway.app/endpoint/update-invoice/${id}`, data)
          }) : null
        if (updateRequest !== null) {
          try {
            await Promise.all(updateRequest);
            await Promise.all(invoiceUpdate.filter((row) => row.data.total !== 0).map(async ({ number, data }) => {
              await db.invoiceSchema.update(number, { ...data, updateS: true })
            }))
          } catch (error) {
            console.log('An error as occur');
          }
        }
      } else {
        await Promise.all(invoiceUpdate.filter((row) => row.data.total !== 0).map(async ({ number, data }) => {
          await db.invoiceSchema.update(number, { ...data, updateS: false })
        }))
      }
    }
  }
  const handleUpdateCredit = async () => {
    const data = {
      credit
    }
    if (navigator.onLine) {
      try {
        await axios.put(`https://globalgate-backend-production.up.railway.app/endpoint/update-customer/${customerId}`, data)
        await db.customerSchema.update(customerId, { ...data, updateS: true })
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else {
      await db.customerSchema.update(customerId, { ...data, updateS: false })
    }
  }
  const [openBack, setOpenBack] = useState(false);

  const handleOpenBack = (e) => {
    e.preventDefault()
    setOpenBack(true);
  };
  const handleCloseBack = () => {
    setOpenBack(false);
  };
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
    setLoadingOpenModal(false);
    window.location.reload();
  }
  const handleCloseError = () => {
    setErrorOpenModal(false);
  }
  const handleDecision = (navigate) => {
    //Navigate Based on th Decision
    if (navigate === 'previous') {
      window.history.back();
    } else if (navigate === 'stay') {
      handleClose();
    }
  }
  const handleCreateNotification = async (ReferenceInfo, ReferenceInfoNumber) => {
    const data = {
      idInfo: ReferenceInfo,
      person: user.data.userName + ' Created ',
      reason: 'PAY-' + ReferenceInfoNumber + ' For ' + customerName.customerName,
      dateNotification: new Date()
    }
    try {
      await axios.post('https://globalgate-backend-production.up.railway.app/endpoint/create-notification', data)
    } catch (error) {
      console.log(error)
    }
  }
  const [saving, setSaving] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving('true')
    const data = {
      _id: v4(),
      customerName,
      amount,
      bankCharge,
      modes,
      paymentDate,
      TotalAmount,
      paymentNumber,
      description,
      PaymentReceivedFC, reason,
      PaymentReceivedUSD,
      remaining, synced: false
    }
    if (navigator.onLine) {
      try {
        const res = await axios.post('https://globalgate-backend-production.up.railway.app/endpoint/create-payment', data);
        if (res) {
          const ReferenceInfo = res.data.data._id
          const ReferenceInfoNumber = res.data.data.paymentNumber
          handleCreateNotification(ReferenceInfo, ReferenceInfoNumber)
          handleOpen();
          await db.paymentSchema.add({ ...res.data.data, _id: res.data.data._id, synced: true })
          handleUpdateInvoice();
          handleUpdateCredit();
        }
      } catch (error) {
        if (error) {
          setSaving('')
          handleError();
        }
      }
    } else {
      await db.paymentSchema.add(data)
      handleUpdateInvoice();
      handleUpdateCredit();
      handleOpen();
    }
  };
  const [sideBar, setSideBar] = React.useState(true);
  const toggleDrawer = () => {
    setSideBar(!sideBar);
  };
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
              Add new Payment
            </Typography>
            <IconButton onClick={handleOpenBack}>
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
            <SidebarDash1 />
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
          <Container maxWidth="none" sx={{ mt: 4 }} >
            <div >
              <form onSubmit={handleSubmit}>
                <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2} component={Paper}>
                  <Grid item xs={12}>
                    {
                      customerName.customerName !== null ?
                        (
                          <div style={{ display: 'flex', gap: '80px', alignItems: 'center' }}>
                            <TextField
                              multiline
                              label='Customer Name'
                              value={customerName.customerName}
                              sx={{ width: '100%', backgroundColor: 'white' }}
                            />
                            <BlackTooltip title="Clear" placement='left'>
                              <IconButton onClick={handleClear} >
                                <RemoveCircleOutline style={{ color: '#202a5a' }} />
                              </IconButton>
                            </BlackTooltip>
                          </div>
                        )
                        :
                        (
                          <Autocomplete
                            disableClearable
                            options={customer}
                            getOptionLabel={(option) => option.Customer}
                            onChange={(e, newValue) => handleChangeCustomer(newValue)}
                            renderInput={(params) => <TextField {...params} label="Customer Name" required />}
                          />
                        )
                    }
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl sx={{ width: '100%', backgroundColor: 'white' }}>
                      <InputLabel id="reason">Payment Reason</InputLabel>
                      <Select
                        required
                        id="reason"
                        name="reason"
                        value={reason}
                        label="Payment Reason"
                        onChange={(e) => setReason(e.target.value)}
                      >
                        <MenuItem value="Project">Project</MenuItem>
                        <MenuItem value="Invoice">Invoice</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl sx={{ width: '100%', backgroundColor: 'white' }}>
                      <InputLabel id="modes">Payment Modes</InputLabel>
                      <Select
                        required
                        id="modes"
                        name="modes"
                        value={modes}
                        label="Payment Modes"
                        onChange={(e) => handleChangeModes(e)}
                      >
                        <MenuItem value="Cash">Cash</MenuItem>
                        <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
                        <MenuItem value="Credit">Credit</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  {
                    modes === "" || reason === "" ? "" :
                      <div>
                        <br />
                        <Grid container spacing={2}>
                          <Grid item xs={7}>
                            <div style={{ display: 'flex', gap: '10px' }}>
                              <FormControl>
                                <InputLabel htmlFor='amount'>Amount Received</InputLabel>
                                <OutlinedInput
                                  required
                                  id='amount'
                                  onChange={(e) => setAmount(e.target.value)}
                                  startAdornment={<InputAdornment position="start">USD</InputAdornment>}
                                  label="Amount Received"
                                />
                              </FormControl>
                            </div>
                          </Grid>
                          <Grid item xs={5}>
                            <FormControl>
                              <InputLabel htmlFor='bankCharge'>Bank Charge</InputLabel>
                              <OutlinedInput
                                type='number'
                                id='bankCharge'
                                onChange={(e) => setBankCharge(e.target.value)}
                                startAdornment={<InputAdornment position="start">USD</InputAdornment>}
                                label="Bank Charge"
                                placeholder='Bank Charge If Any: Optional'
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DemoContainer components={['DatePicker']}>
                                <DatePicker
                                  required
                                  name='paymentDate'
                                  label='Date'
                                  value={dayjs(paymentDate)}
                                  onChange={(date) => setPaymentDate(date)}
                                  sx={{ m: 1, width: '100%', backgroundColor: 'white' }}
                                  format='DD/MM/YYYY'
                                />
                              </DemoContainer>
                            </LocalizationProvider>
                          </Grid>

                          <Grid item xs={6}>
                            <FormControl sx={{ width: '100%', backgroundColor: 'white' }}>
                              <InputLabel htmlFor="paymentNumber">Payment Number</InputLabel>
                              <OutlinedInput
                                type='number'
                                id='paymentNumber'
                                name='paymentNumber'
                                label='Payment Number'
                                value={paymentNumber}
                                onChange={(e) => setPaymentNumber(e.target.value)}
                                startAdornment={<InputAdornment position="start">PAY-0</InputAdornment>}
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              id='description'
                              name='description'
                              multiline
                              rows={4}
                              value={description}
                              label='Description'
                              onChange={(e) => setDescription(e.target.value)}
                              sx={{ width: '100%', backgroundColor: 'white' }}
                            />
                          </Grid>
                          {
                            modes === 'Credit' ? (
                              <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                                <FormControl>
                                  <InputLabel htmlFor='amountPaidFC'>Amount Paid FC</InputLabel>
                                  <OutlinedInput
                                    sx={{ width: '200px', backgroundColor: 'white' }}
                                    id='PaymentReceivedFC'
                                    name='PaymentReceivedFC'
                                    type='number'
                                    value={PaymentReceivedFC}
                                    onChange={(e) => setPaymentReceivedFC(e.target.value)}
                                    startAdornment={<InputAdornment position="start">FC</InputAdornment>}
                                    label="Amount Paid FC"
                                  />
                                </FormControl>
                                <FormControl>
                                  <InputLabel htmlFor='rate'>Rate</InputLabel>
                                  <OutlinedInput
                                    sx={{ width: '150px', backgroundColor: 'white' }}
                                    id='rate'
                                    name='rate'
                                    value={rate}
                                    onChange={(e) => setRate(e.target.value)}
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    label="Rate"
                                  />
                                </FormControl>
                                <FormControl>
                                  <InputLabel htmlFor='amountPaidFC'>Amount Paid USD</InputLabel>
                                  <OutlinedInput
                                    sx={{ width: '200px', backgroundColor: 'white' }}
                                    id='PaymentReceivedUSD'
                                    name='PaymentReceivedUSD'
                                    type='number'
                                    value={PaymentReceivedUSD}
                                    onChange={(e) => setPaymentReceivedUSD(e.target.value)}
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    label="Amount Paid USD"
                                  />
                                </FormControl>
                                <FormControl>
                                  <InputLabel htmlFor='amountPaidFC'>Total Paid USD</InputLabel>
                                  <OutlinedInput
                                    sx={{ width: '200px', backgroundColor: 'white' }}
                                    id='totalUSdInfo'
                                    name='totalUSdInfo'
                                    type='number'
                                    value={totalUSdInfo}
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    label="Total Paid USD"
                                  />
                                </FormControl>
                              </Grid>
                            ) :
                              (
                                <>
                                  <Grid item xs={12}>
                                    <TableContainer>
                                      <div style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
                                        <table>
                                          <tbody>
                                            {invoice?.map((row, i) => {
                                              return (
                                                <tr key={row.id}>
                                                  <td>
                                                    {
                                                      dayjs(row.invoiceDate).format('DD/MM')
                                                    }
                                                  </td>
                                                  <td>
                                                    {
                                                      reason === "Invoice" ?
                                                        <FormControl sx={{ width: '150px', backgroundColor: 'white' }}>
                                                          <InputLabel htmlFor="invoiceNumber">Invoice Number</InputLabel>
                                                          <OutlinedInput
                                                            disabled
                                                            type='number'
                                                            id='Ref'
                                                            name='Ref'
                                                            label='Invoice Number'
                                                            value={'00' + row.Ref}
                                                            startAdornment={<InputAdornment position="start">INV</InputAdornment>}
                                                          />
                                                        </FormControl>
                                                        :
                                                        <FormControl sx={{ width: '100px', backgroundColor: 'white' }}>
                                                          <InputLabel htmlFor="projectNumber">Project Number</InputLabel>
                                                          <OutlinedInput
                                                            disabled
                                                            type='number'
                                                            id='Ref'
                                                            name='Ref'
                                                            label='Project Number'
                                                            value={'00' + row.Ref}
                                                            startAdornment={<InputAdornment position="start">P</InputAdornment>}
                                                          />
                                                        </FormControl>
                                                    }
                                                  </td>
                                                  <td id='InvoiceAmount'>
                                                    <FormControl>
                                                      <InputLabel htmlFor='subtotal'>Amount</InputLabel>
                                                      <OutlinedInput
                                                        sx={{ width: '250px', backgroundColor: 'white' }}
                                                        type='number'
                                                        id='subtotal'
                                                        value={row.balanceDue}
                                                        startAdornment={<InputAdornment position="start">USD</InputAdornment>}
                                                        label="subtotal"
                                                      />
                                                    </FormControl>
                                                  </td>
                                                  <td>
                                                    <FormControl>
                                                      <InputLabel htmlFor='amountPaidFC'>Amount Paid FC</InputLabel>
                                                      <OutlinedInput
                                                        sx={{ width: '200px', backgroundColor: 'white' }}
                                                        id='amountPaidFC'
                                                        name='amountPaidFC'
                                                        value={row.amountPaidFC}
                                                        onChange={(e) => handleChangeCEO(e, row.id)}
                                                        startAdornment={<InputAdornment position="start">FC</InputAdornment>}
                                                        label="Amount Paid FC"
                                                      />
                                                    </FormControl>
                                                  </td>
                                                  <td>
                                                    <FormControl>
                                                      <InputLabel htmlFor='rateChange'>Rate</InputLabel>
                                                      <OutlinedInput
                                                        sx={{ width: '90px', backgroundColor: 'white' }}
                                                        id='rateChange'
                                                        name='rateChange'
                                                        value={row.rateChange}
                                                        onChange={(e) => handleChangeCEO(e, row.id)}
                                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                                        label="Rate"
                                                      />
                                                    </FormControl>
                                                  </td>
                                                  <td>
                                                    <FormControl>
                                                      <InputLabel htmlFor='amountPaidUSD'>Amount Paid USD</InputLabel>
                                                      <OutlinedInput
                                                        sx={{ width: '200px', backgroundColor: 'white' }}
                                                        id='amountPaidUSD'
                                                        name='amountPaidUSD'
                                                        value={row.amountPaidUSD}
                                                        onChange={(e) => handleChangeCEO(e, row.id)}
                                                        startAdornment={<InputAdornment position="start">USD</InputAdornment>}
                                                        label="Amount Paid USD"
                                                      />
                                                    </FormControl>
                                                  </td>
                                                  <td>
                                                    <FormControl>
                                                      <InputLabel htmlFor='total'>Total Paid</InputLabel>
                                                      <OutlinedInput
                                                        disabled
                                                        sx={{ width: '200px', backgroundColor: 'white' }}
                                                        id='total'
                                                        name='total'
                                                        value={row.total}
                                                        onChange={(e) => handleChangeCEO(e, row.id)}
                                                        startAdornment={<InputAdornment position="start">USD</InputAdornment>}
                                                        label="Total Paid"
                                                      />
                                                    </FormControl>
                                                  </td>

                                                </tr>)
                                            })}
                                          </tbody>
                                        </table>
                                      </div>
                                    </TableContainer>
                                  </Grid>
                                </>
                              )
                          }

                          <div style={{ width: ' 100%' }}>
                            <table style={{ position: 'relative', float: 'right', padding: '40px', width: '50%' }}>
                              <tbody>
                                <tr>
                                  <th style={{ textAlign: 'left' }}><Typography> Invoices Total Amount </Typography></th>
                                  <td style={{ textAlign: 'left' }}><span> $ </span>{balanceDueInfo.toFixed(2)}</td>
                                </tr>
                                <tr>
                                  <th style={{ textAlign: 'left' }}><Typography> Amount Received </Typography></th>
                                  <td style={{ textAlign: 'left' }}><span> $ </span>{amount}</td>
                                </tr>
                                <tr>
                                  <th style={{ textAlign: 'left' }}><Typography> Amount Paid FC </Typography></th>
                                  <td style={{ textAlign: 'left' }}><span> FC </span>{PaymentReceivedFC.toString()}</td>
                                </tr>
                                <tr>
                                  <th style={{ textAlign: 'left' }}><Typography> Amount Paid USD </Typography></th>
                                  <td style={{ textAlign: 'left' }}><span> $ </span>{PaymentReceivedUSD.toString()}</td>
                                </tr>
                                <tr>
                                  <th style={{ textAlign: 'left' }}><Typography> Total Paid USD </Typography></th>
                                  <td style={{ textAlign: 'left' }}><span> $ </span>{modes === 'Credit' ? totalUSdInfo.toFixed(2) : PaymentInfo.toFixed(2)}</td>
                                </tr>
                                <tr>
                                  <th style={{ textAlign: 'left' }}><Typography> Balance Due </Typography></th>
                                  <td style={{ textAlign: 'left' }}><span> $ </span>{remainingInvoice.toFixed(2)}</td>
                                </tr>
                                <tr>
                                  <th style={{ textAlign: 'left' }}><Typography> Credit </Typography></th>
                                  <td style={{ textAlign: 'left' }}><span> $ </span>{remaining}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </Grid>
                      </div>
                  }

                  <Grid item xs={12}>
                    {
                      saving !== 'true' ? <button type='submit' className='btnCustomer6' style={{ width: '100%' }}>Save</button> : <p className='btnCustomer6' style={{ width: '100%', textAlign: 'center' }}>Saving...</p>
                    }
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </Box>
      </Box>
      <Modal
        open={openBack}
        onClose={handleCloseBack}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <BlackTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseBack} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </BlackTooltip>
          <Grid container sx={{ alignItems: 'center', padding: '15px' }} spacing={2}>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Typography>Do you want to stop making payment ? </Typography>
              <p><span className="txt2" style={{ color: 'red' }}>Note :</span> <span className="txt2"> If you stop making payment without saving, all your changes will be lost</span></p>
            </Grid>
            <br />
            <Grid item xs={6}>
              <button type='submit' onClick={() => navigate('/PaymentView')} className='btnCustomer' style={{ width: '100%' }}>Yes</button>
            </Grid>
            <Grid item xs={6}>
              <button type='submit' onClick={handleCloseBack} className='btnCustomer' style={{ width: '100%' }}>No</button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
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
                <button onClick={() => handleDecision('stay')} className='btnCustomer'>
                  Add New
                </button>
                <button onClick={() => handleDecision('previous')} className='btnCustomer'>
                  Go Back
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
    </div>
  )
}

export default PaymentInformationForm
