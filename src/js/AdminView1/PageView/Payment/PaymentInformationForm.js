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
import { ENDPOINT_URL } from '../../../apiConfig';
import { useNavigate } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { invalidateCache } from '../../../utils/apiCache';
import dayjs from 'dayjs';
import ArrowBack from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Loader from '../../../component/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '../../../component/NetworkLogoutIcon';
import Close from '@mui/icons-material/Close';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import { useIsMobile } from '../../../utils/isMobile';
import { Button, Card } from '@mui/material';

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
  const isMobile = useIsMobile();
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
          dispatch(setUser({ userName: Name, role: Role }));
        } catch (error) {
          console.error('Error fetching data:', error);
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
      try {
        const res = await axios.get(`${ENDPOINT_URL}/customer`)
        setCustomer(res.data.data.reverse());
      } catch (error) {
        console.error('Error fetching data:', error);
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
  const [transactionType, setTransactionType] = useState('Payment');
  const [status, setStatus] = useState('Cleared');
  const [paymentType, setPaymentType] = useState('Payment'); // Detailed type

  useEffect(() => {
    const fetchlastNumber = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/get-last-saved-payment`)
        const num = res.data && res.data.paymentNumber ? (parseInt(res.data?.data?.paymentNumber || res.data?.paymentNumber || 0)) : 0;
        setPaymentNumber(num + 1)
        const resRate = await axios.get(`${ENDPOINT_URL}/rate`)
        resRate.data.data.map((row) => setRate(row.rate))
      } catch (error) {
        console.error('Error fetching data:', error);
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
      try {
        const res = await axios.get(`${ENDPOINT_URL}/invoice?summary=true`)
        const resProject = await axios.get(`${ENDPOINT_URL}/projects`)
        const resPurchase = await axios.get(`${ENDPOINT_URL}/purchase?summary=true`)
        if (customerId !== null) {
          if (reason === "Invoice") {
            const filterData = res.data?.data?.filter((row) => row.customerName._id === customerId);
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
                  prefix: (row.ReferenceName2 || row.invoicePurchase === 'Purchased') ? "P-" : "INV-",
                  balanceDue: row.balanceDue,
                  invoiceAmount: row.totalInvoice,
                  status: row.status,
                  invoiceDate: row.invoiceDate
                }))
            )
          } else if (reason === "Project") {
            const filterData2 = resProject.data?.data?.filter((row) => row.customerName?._id === customerId && row.status === "On-Going");
            setProject(filterData2)
            setInvoice(filterData2.map((row) => ({
              id: row._id,
              customerName: row.customerName,
              total: 0,
              amountPaidFC: 0,
              amountPaidUSD: 0,
              rateChange: rate,
              totalConverted: 0,
              Ref: row.projectNumber,
              prefix: "P-",
              balanceDue: row.budget !== undefined ? row.budget : 0,
              invoiceAmount: row.budget !== undefined ? row.budget : 0,
              status: "",
              invoiceDate: row.startDate
            })))
          } else if (reason === "Customer Credit") {
            setInvoice([{
              id: customerId,
              customerName: customerName,
              total: 0,
              amountPaidFC: 0,
              amountPaidUSD: 0,
              rateChange: rate,
              totalConverted: 0,
              Ref: 'Credit',
              balanceDue: oldCredit || 0,
              invoiceAmount: oldCredit || 0,
              status: "",
              invoiceDate: new Date()
            }])
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
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
    const effectiveMax = modes === 'Credit-Account' ? Math.min(parseFloat(amount || 0), parseFloat(oldCredit || 0)) : parseFloat(amount || 0);
    let remaining = effectiveMax;
    const totalInvoiceExp = invoice.map((row) => {
      const total = Math.min(remaining, row.balanceDue).toFixed(2);
      remaining -= total;
      return { ...row, total };
    });
    setInvoice(totalInvoiceExp);
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
    const selectedMode = e.target.value;
    setModes(selectedMode);
    if (selectedMode === 'Credit-Account') {
      setAmount(oldCredit);
    }
  }

  const totalConvertedFc = Math.round((PaymentReceivedFC / rate) * 100) / 100;
  const totalUSdInfo = Math.round((parseFloat(totalConvertedFc) + parseFloat(PaymentReceivedUSD)) * 100) / 100;

  const remainingInvoice = transactionType === 'Payment' ? balanceDueInfo - PaymentInfo : balanceDueInfo + PaymentInfo
  const remainingValue = (reason === "Project" || reason === "Customer Credit") ? parseFloat(amount) : (parseFloat(amount) - PaymentInfo);
  const remaining = transactionType === 'Payment'
    ? Math.round(remainingValue * 100) / 100
    : -Math.round(remainingValue * 100) / 100

  const [oldCredit, setOldCredit] = useState(0)
  const [excessAction, setExcessAction] = useState('Credit')
  const [returnUSD, setReturnUSD] = useState(0)
  const [returnFC, setReturnFC] = useState(0)

  useEffect(() => {
    const fetchCustomer = async () => {
      if (customerId) {
        try {
          const [resCust, resPay] = await Promise.all([
            axios.get(`${ENDPOINT_URL}/get-customer/${customerId}`),
            axios.get(`${ENDPOINT_URL}/payment?customerId=${customerId}`)
          ]);
          const paymentsList = resPay.data?.data || [];
          let calcCredit = 0;
          paymentsList.forEach(row => {
            if (row.modes === 'Credit' || (row.modes === 'Cash' && row.remaining > 0 && row.excessAction !== 'Return') || (row.modes === 'Bank Transfer' && row.remaining > 0 && row.excessAction !== 'Return')) {
              calcCredit += parseFloat(row.remaining !== undefined && row.remaining !== null ? row.remaining : row.amount || 0);
            } else if (row.modes === 'Credit-Account') {
              calcCredit -= parseFloat(row.amount || 0);
            }
          });
          const validCredit = Math.max(0, calcCredit);
          setOldCredit(validCredit);
        } catch (error) {
          console.error('Error fetching customer credit:', error);
        }
      }
    }
    fetchCustomer()
  }, [customerId])

  const [credit, setCredit] = useState(0)
  useEffect(() => {
    let computedCredit = oldCredit;
    if (modes === 'Credit') {
      computedCredit = parseFloat(oldCredit || 0) + parseFloat(amount || 0);
    } else if (modes === 'Credit-Account') {
      computedCredit = Math.max(0, parseFloat(oldCredit || 0) - PaymentInfo);
    } else if (remaining > 0) {
      if (excessAction === 'Return') {
        const totalReturnUSDVal = (parseFloat(returnUSD) || 0) + ((parseFloat(returnFC) || 0) / (parseFloat(rate) || 1));
        const unreturned = Math.max(0, remaining - totalReturnUSDVal);
        computedCredit = parseFloat(oldCredit || 0) + unreturned;
      } else {
        computedCredit = parseFloat(oldCredit || 0) + parseFloat(remaining || 0);
      }
    }
    setCredit(Math.max(0, computedCredit));
  }, [oldCredit, remaining, modes, amount, PaymentInfo, excessAction, returnUSD, returnFC, rate])

  const TotalAmount = invoice.length > 0 ? invoice.filter((row) => parseFloat(row.total) !== 0) : null

  const handleUpdateInvoice = async () => {
    if (reason === "Invoice") {
      const invoiceUpdate = invoice.length > 0 ? invoice.map((row) => {
        const correspondingId = oldInvoice.find((row2) => row2._id === row.id)
        if (!correspondingId) return null;
        let total = 0;
        if (transactionType === 'Payment') {
          total = parseFloat(correspondingId.total) + parseFloat(row.total);
        } else {
          total = Math.max(0, parseFloat(correspondingId.total) - parseFloat(row.total));
        }
        const difference = Math.round((correspondingId.totalInvoice - total) * 100) / 100;
        if (difference <= 0) {
          row.status = 'Paid'
        } else if (total > 0 && total < correspondingId.totalInvoice) {
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
      }).filter(Boolean) : null

      const updateRequest = invoiceUpdate !== null ?
        invoiceUpdate.filter((row) => row.data.total !== 0).map(({ id, data }) => {
          return axios.put(`${ENDPOINT_URL}/update-invoice/${id}`, data)
        }) : null
      if (updateRequest !== null) {
        try {
          await Promise.all(updateRequest);
        } catch (error) {
          console.log('An error as occur');
        }
      }
    }
  }
  const handleUpdateCredit = async () => {
    const data = {
      credit
    }
    try {
      await axios.put(`${ENDPOINT_URL}/update-customer/${customerId}`, data)
    } catch (error) {
      console.error('Error fetching data:', error);
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
  const handleDecision = (decision) => {
    //Navigate Based on th Decision
    if (decision === 'previous') {
      window.history.back();
    } else if (decision === 'stay') {
      handleClose();
    }
  }
  const handleCreateNotification = async (ReferenceInfo, ReferenceInfoNumber) => {
    const data = {
      idInfo: ReferenceInfo,
      person: user.data.userName + ' Created PAYMENT ',
      reason: `PAY-${String(ReferenceInfoNumber).padStart(6, '0')} For ${customerName.customerName}`,
      dateNotification: new Date()
    }
    try {
      await axios.post(`${ENDPOINT_URL}/create-notification`, data)
    } catch (error) {
      console.log(error)
    }
  }
  const [saving, setSaving] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (modes === 'Credit-Account' && PaymentInfo > oldCredit) {
      alert(`Cannot apply $${PaymentInfo.toFixed(2)}. Customer only has $${oldCredit.toFixed(2)} in available credit.`);
      return;
    }
    setSaving('true')
    // Calculate tax paid based on the proportion of the invoice being paid
    let totalTaxPaid = 0;
    if (reason === "Invoice") {
      invoice.forEach(row => {
        const correspondingId = oldInvoice.find(r => r._id === row.id);
        if (correspondingId && correspondingId.tax && correspondingId.tax > 0 && row.total > 0) {
          // tax paid = (amount paid / total invoice amount) * total invoice tax
          const proportion = row.total / correspondingId.totalInvoice;
          totalTaxPaid += correspondingId.tax * proportion;
        }
      });
    }

    const totalReturnUSDVal = (parseFloat(returnUSD) || 0) + ((parseFloat(returnFC) || 0) / (parseFloat(rate) || 1));
    const effectiveRemaining = excessAction === 'Return' ? Math.max(0, remaining - totalReturnUSDVal) : remaining;

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
      PaymentReceivedFC,
      reason,
      PaymentReceivedUSD,
      remaining: effectiveRemaining,
      excessAction: excessAction || 'Credit',
      returnUSD: excessAction === 'Return' ? Number(returnUSD || 0) : 0,
      returnFC: excessAction === 'Return' ? Number(returnFC || 0) : 0,
      transactionType,
      status,
      tax: Math.round(totalTaxPaid * 100) / 100,
      synced: false
    }
    try {
      const res = await axios.post(`${ENDPOINT_URL}/create-payment`, data);
      if (res) {
        invalidateCache('/payment');
        const ReferenceInfo = res.data.data._id
        const ReferenceInfoNumber = res.data.data.paymentNumber
        handleCreateNotification(ReferenceInfo, ReferenceInfoNumber)
        // handleOpen();
        handleUpdateInvoice();
        handleUpdateCredit();
        handleOpen();
      }
    } catch (error) {
      if (error) {
        setSaving('')
        handleError();
      }
    }
  };
  if (isMobile) {
    return (
      <Box sx={{ width: '100%', minHeight: '100vh', backgroundColor: '#F8FAFC', pb: 12 }}>
        {/* Sticky Mobile Header */}
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            backgroundColor: '#30368a',
            color: '#ffffff',
            px: 2,
            py: 1.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton onClick={() => navigate(-1)} sx={{ color: '#ffffff', p: 0.5 }}>
              <ArrowBack />
            </IconButton>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, lineHeight: 1.2, color: '#ffffff' }}>
                New Payment
              </Typography>
              <Typography variant="caption" sx={{ color: '#E0E7FF' }}>
                PAY-{String(paymentNumber || 1).padStart(6, '0')}
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            size="small"
            onClick={handleSubmit}
            disabled={loading || saving === 'true'}
            sx={{
              backgroundColor: '#10B981',
              color: '#ffffff',
              fontWeight: 700,
              textTransform: 'none',
              borderRadius: 2,
              px: 2,
              '&:hover': { backgroundColor: '#059669' }
            }}
          >
            {saving === 'true' ? 'Saving...' : 'Save'}
          </Button>
        </Box>

        <Box sx={{ p: 2 }}>
          {/* Card 1: Payment Overview */}
          <Card sx={{ borderRadius: 3.5, p: 2.5, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
            <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase', mb: 1.5, display: 'block' }}>
              Payment Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Autocomplete
                  size="small"
                  options={customer || []}
                  getOptionLabel={(option) => option?.customerName || option?.Customer || ''}
                  value={customerName?.customerName ? customerName : null}
                  onChange={(e, val) => setCustomerName(val || {})}
                  renderInput={(params) => (
                    <TextField {...params} label="Select Customer *" size="small" fullWidth />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Payment Date"
                    value={paymentDate ? dayjs(paymentDate) : null}
                    onChange={(date) => setPaymentDate(date)}
                    slotProps={{ textField: { fullWidth: true, size: 'small' } }}
                    format="DD/MM/YYYY"
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={6}>
                <FormControl fullWidth size="small">
                  <InputLabel>Payment Mode</InputLabel>
                  <Select
                    value={modes || 'Cash'}
                    label="Payment Mode"
                    onChange={(e) => setModes(e.target.value)}
                  >
                    <MenuItem value="Cash">Cash</MenuItem>
                    <MenuItem value="Bank-Transfer">Bank Transfer</MenuItem>
                    <MenuItem value="Check">Check</MenuItem>
                    <MenuItem value="Credit-Account">Credit Account</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  required
                  size="small"
                  label="Amount Received ($)"
                  type="number"
                  value={amount || ''}
                  onChange={(e) => {
                    const val = Number(e.target.value) || 0;
                    setAmount(val);
                    setTotalAmount(val);
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  size="small"
                  label="Reference / Notes"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
            </Grid>
          </Card>

          {/* Bottom Save Button */}
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={handleSubmit}
            disabled={loading || saving === 'true'}
            sx={{
              backgroundColor: '#30368a',
              color: '#ffffff',
              fontWeight: 800,
              py: 1.5,
              borderRadius: 3,
              boxShadow: '0 4px 14px rgba(48, 54, 138, 0.3)',
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': { backgroundColor: '#202a5a' }
            }}
          >
            {saving === 'true' ? 'Saving Payment...' : 'Save Payment'}
          </Button>
        </Box>

        {/* Loading Modal */}
        <Modal open={loadingOpenModal} onClose={handleClose}>
          <Box sx={{ ...style, width: '90%', maxWidth: 400, borderRadius: 4, textAlign: 'center', p: 3 }}>
            {loading ? <Loader /> : (
              <div>
                <CheckCircleIcon sx={{ color: 'green', fontSize: 48, mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 800 }}>Payment Recorded Successfully</Typography>
                <Button fullWidth variant="contained" onClick={() => navigate('/PaymentView')} sx={{ mt: 2, backgroundColor: '#30368a', borderRadius: 2 }}>
                  Go to Payments
                </Button>
              </div>
            )}
          </Box>
        </Modal>

        {/* Error Modal */}
        <Modal open={ErrorOpenModal} onClose={handleCloseError}>
          <Box sx={{ ...style, width: '90%', maxWidth: 400, borderRadius: 4, textAlign: 'center', p: 3 }}>
            <CancelIcon sx={{ color: 'red', fontSize: 48, mb: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 800 }}>Error Occurred</Typography>
            <Typography variant="body2" sx={{ color: '#64748B', mt: 1 }}>Please check required fields.</Typography>
            <Button fullWidth variant="outlined" onClick={handleCloseError} sx={{ mt: 2, borderRadius: 2 }}>
              Close
            </Button>
          </Box>
        </Modal>
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
                        onChange={(e) => {
                          setReason(e.target.value);
                          if (e.target.value === "Project" && modes === "Credit") {
                            setModes("");
                          }
                        }}
                      >
                        <MenuItem value="Project">Project</MenuItem>
                        <MenuItem value="Invoice">Invoice</MenuItem>
                        <MenuItem value="Customer Credit">Customer Credit</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={3}>
                    <FormControl sx={{ width: '100%', backgroundColor: 'white' }}>
                      <InputLabel id="transactionType">Transaction Type</InputLabel>
                      <Select
                        required
                        id="transactionType"
                        name="transactionType"
                        value={transactionType}
                        label="Transaction Type"
                        onChange={(e) => setTransactionType(e.target.value)}
                      >
                        <MenuItem value="Payment">Payment</MenuItem>
                        <MenuItem value="Refund">Refund</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={3}>
                    <FormControl sx={{ width: '100%', backgroundColor: 'white' }}>
                      <InputLabel id="status">Status</InputLabel>
                      <Select
                        required
                        id="status"
                        name="status"
                        value={status}
                        label="Status"
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <MenuItem value="Cleared">Cleared</MenuItem>
                        <MenuItem value="Pending">Pending</MenuItem>
                        <MenuItem value="Voided">Voided</MenuItem>
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
                        {reason !== "Project" && <MenuItem value="Credit">Credit (Deposit to Customer Credit)</MenuItem>}
                        {reason !== "Project" && oldCredit > 0 && <MenuItem value="Credit-Account">Use Customer Credit (${oldCredit?.toFixed(2)} Available)</MenuItem>}
                      </Select>
                    </FormControl>
                  </Grid>
                  {customerId && (
                    <Grid item xs={6}>
                      <Typography variant="body2" color="textSecondary">
                        Customer Available Credit: <strong>${oldCredit?.toFixed(2)}</strong>
                      </Typography>
                    </Grid>
                  )}
                  {
                    modes === "" || reason === "" ? "" :
                      <div>
                        <br />
                        <Grid container spacing={2}>
                          <Grid item xs={modes === 'Bank Transfer' ? 7 : 12}>
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
                          {modes === 'Bank Transfer' && (
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
                          )}
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
                                startAdornment={<InputAdornment position="start">PAY-</InputAdornment>}
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
                                                      (row.prefix === "P-" || row.prefix === "P" || (reason === "Project" && !row.prefix)) ?
                                                        <FormControl sx={{ width: '150px', backgroundColor: 'white' }}>
                                                          <InputLabel htmlFor="projectNumber">Project Number</InputLabel>
                                                          <OutlinedInput
                                                            disabled
                                                            type='text'
                                                            id='Ref'
                                                            name='Ref'
                                                            label='Project Number'
                                                            value={String(row.Ref).padStart(6, '0')}
                                                            startAdornment={<InputAdornment position="start">{row.prefix || "P-"}</InputAdornment>}
                                                          />
                                                        </FormControl>
                                                        :
                                                        <FormControl sx={{ width: '150px', backgroundColor: 'white' }}>
                                                          <InputLabel htmlFor="invoiceNumber">Invoice Number</InputLabel>
                                                          <OutlinedInput
                                                            disabled
                                                            type='text'
                                                            id='Ref'
                                                            name='Ref'
                                                            label='Invoice Number'
                                                            value={String(row.Ref).padStart(6, '0')}
                                                            startAdornment={<InputAdornment position="start">{row.prefix || "INV-"}</InputAdornment>}
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

                          {remaining > 0 && modes !== 'Credit-Account' && (
                            <Box sx={{ mt: 2, mb: 2, p: 2, border: '1px solid #30368a', borderRadius: '8px', backgroundColor: '#f0f4ff', width: '100%' }}>
                              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#30368a', mb: 1.5 }}>
                                Rest / Surplus Amount Action (Overpayment: ${remaining.toFixed(2)})
                              </Typography>
                              <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} md={6}>
                                  <FormControl fullWidth size="small">
                                    <InputLabel id="excess-action-label">Surplus Option</InputLabel>
                                    <Select
                                      labelId="excess-action-label"
                                      value={excessAction}
                                      label="Surplus Option"
                                      onChange={(e) => {
                                        const val = e.target.value;
                                        setExcessAction(val);
                                        if (val === 'Return') {
                                          setReturnUSD(remaining);
                                          setReturnFC(0);
                                        } else {
                                          setReturnUSD(0);
                                          setReturnFC(0);
                                        }
                                      }}
                                      sx={{ backgroundColor: 'white' }}
                                    >
                                      <MenuItem value="Credit">Keep in Customer Credit (${remaining.toFixed(2)})</MenuItem>
                                      <MenuItem value="Return">Cash Return to Customer (Change)</MenuItem>
                                    </Select>
                                  </FormControl>
                                </Grid>
                                {excessAction === 'Return' && (
                                  <>
                                    <Grid item xs={12} md={6}>
                                      <Box sx={{ display: 'flex', gap: 1 }}>
                                        <button
                                          type="button"
                                          className="btnCustomer"
                                          style={{ padding: '6px 10px', fontSize: '11px', flex: 1 }}
                                          onClick={() => {
                                            setReturnUSD(remaining);
                                            setReturnFC(0);
                                          }}
                                        >
                                          Return All in USD ($)
                                        </button>
                                        <button
                                          type="button"
                                          className="btnCustomer"
                                          style={{ padding: '6px 10px', fontSize: '11px', flex: 1 }}
                                          onClick={() => {
                                            setReturnFC(Math.round(remaining * (parseFloat(rate) || 1)));
                                            setReturnUSD(0);
                                          }}
                                        >
                                          Return All in FC (Rate: {rate})
                                        </button>
                                      </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                      <TextField
                                        fullWidth
                                        size="small"
                                        label="Return USD ($)"
                                        type="number"
                                        value={returnUSD}
                                        onChange={(e) => setReturnUSD(e.target.value)}
                                        InputProps={{
                                          startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                        }}
                                        sx={{ backgroundColor: 'white' }}
                                      />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                      <TextField
                                        fullWidth
                                        size="small"
                                        label={`Return FC (Today's Rate: ${rate})`}
                                        type="number"
                                        value={returnFC}
                                        onChange={(e) => setReturnFC(e.target.value)}
                                        InputProps={{
                                          startAdornment: <InputAdornment position="start">FC</InputAdornment>,
                                        }}
                                        sx={{ backgroundColor: 'white' }}
                                      />
                                    </Grid>
                                    <Grid item xs={12}>
                                      <Typography variant="body2" sx={{ color: '#2e7d32', fontWeight: 500 }}>
                                        Returned Equivalent: ${((parseFloat(returnUSD) || 0) + ((parseFloat(returnFC) || 0) / (parseFloat(rate) || 1))).toFixed(2)} / Required Rest: ${remaining.toFixed(2)}
                                      </Typography>
                                    </Grid>
                                  </>
                                )}
                              </Grid>
                            </Box>
                          )}

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
                                {excessAction === 'Return' ? (
                                  <>
                                    <tr>
                                      <th style={{ textAlign: 'left' }}><Typography> Cash Return USD </Typography></th>
                                      <td style={{ textAlign: 'left' }}><span> $ </span>{parseFloat(returnUSD || 0).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                      <th style={{ textAlign: 'left' }}><Typography> Cash Return FC </Typography></th>
                                      <td style={{ textAlign: 'left' }}><span> FC </span>{parseFloat(returnFC || 0).toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                      <th style={{ textAlign: 'left' }}><Typography> Credit Added </Typography></th>
                                      <td style={{ textAlign: 'left' }}><span> $ </span>0.00</td>
                                    </tr>
                                  </>
                                ) : (
                                  <tr>
                                    <th style={{ textAlign: 'left' }}><Typography> Credit </Typography></th>
                                    <td style={{ textAlign: 'left' }}><span> $ </span>{remaining}</td>
                                  </tr>
                                )}
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
