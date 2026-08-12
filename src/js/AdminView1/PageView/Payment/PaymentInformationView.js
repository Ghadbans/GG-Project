import useLayoutConfig from '../../../hooks/useLayoutConfig';
import PrintHeader from '../../../component/PrintHeader';
import PrintFooter from '../../../component/PrintFooter';
import React, { useEffect, useRef, useState } from 'react'
import '../Chartview.css'
import SidebarDash from '../../../component/SidebarDash';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { TableContainer, Checkbox, MenuItem, Grid, IconButton, Paper, TextField, FormControl, InputLabel, Select, Typography, styled, FormLabel, RadioGroup, FormControlLabel, Radio, Input, OutlinedInput, InputAdornment, Modal, Backdrop, Fade, Box, Autocomplete, Table, TableBody, TableCell, TableRow, TableHead, Button, Menu, Divider } from '@mui/material';
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
import axios from 'axios';
import { ENDPOINT_URL } from '../../../apiConfig';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '../../../component/NetworkLogoutIcon';
import dayjs from 'dayjs';
import PaymentInformation from './PaymentInformation';
import Loader from '../../../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Close from '@mui/icons-material/Close';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { Visibility } from '@mui/icons-material';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import LanguageIcon from '@mui/icons-material/Language';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WebIcon from '@mui/icons-material/Web';
import Image from '../../../img/images.png'
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';

import LocalPrintshop from '@mui/icons-material/LocalPrintshop';
import Edit from '@mui/icons-material/Edit';

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


function PaymentInformationView() {
  const { config } = useLayoutConfig();
  let { id } = useParams();
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
  const [grantAccess, setGrantAccess] = useState([]);
  useEffect(() => {
    const fetchNumber = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/grantAccess`);
        res.data?.data?.filter((row) => row.userID === user.data.id)
          .map((row) => setGrantAccess(row.modules))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchNumber()
  }, [user])
  const PaymentInfoU = grantAccess.filter((row) => row.moduleName === "Payment" && row.access.editM === true);

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }
  const [payment, setPayment] = useState([])
  const [invoice, setInvoice] = useState([])
  const [paymentArray, setPaymentArray] = useState([])
  const [loadingData, setLoadingData] = useState(true);
  const apiUrl = `${ENDPOINT_URL}/payment`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(apiUrl)
        setPayment(res.data.data);
        const resInvoice = await axios.get(`${ENDPOINT_URL}/invoice?summary=true`)
        setInvoice(resInvoice.data.data);
        const resPaymentArray = await axios.get(`${ENDPOINT_URL}/get-payment/${id}`)
        setPaymentArray(resPaymentArray.data.data.TotalAmount !== undefined ? resPaymentArray.data.data.TotalAmount : null);
        setLoadingData(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadingData(false)
      }
    }
    fetchData()
  }, [id])
  const [reason, setReason] = useState("");
  const [Comments1, setComments] = useState([]);
  const [notification, setNotification] = useState([]);
  const PaymentInfo = paymentArray !== null ? paymentArray.reduce((sum, row) => sum + parseFloat(row.total), 0) : 0
  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/comment`)
        const resp = res.data?.data?.filter((row) => row.CommentInfo.idInfo === id)
        setComments(resp.reverse())
        const resNotification = await axios.get(`${ENDPOINT_URL}/notification`)
        setNotification(resNotification.data?.data?.filter((row) => row.idInfo === id))
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
    setLoadingOpenModal(false);
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
      const res = await axios.post(`${ENDPOINT_URL}/create-comment/`, data)
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
  const [sideBar, setSideBar] = React.useState(true);
  const toggleDrawer = () => {
    setSideBar(!sideBar);
  };
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

  const handleOpenPrint = () => {
    handlePrint()
    setAnchorEl(null);
  };


  const [show1, setShow1] = useState(1);
  const handleShow1 = (e) => {
    setShow1(e);
    setAnchorEl(null);
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
              Payment Information
            </Typography>
            <IconButton onClick={() => navigate('/PaymentView')}>
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
              loadingData ? <div>
                <div style={{ position: 'relative', top: '120px' }}>
                  <Loader />
                </div>
              </div> : (
                <div>
                  <div>
                    <Grid container spacing={2}>
                      {show1 === 1 ?
                        (<Grid item xs={3}>
                          <PaymentInformation onId={id} />
                        </Grid>) : ''}
                      <Grid item xs={9}>
                        <div className='itemInfoContainer2'>

                          <div>
                            {payment?.filter(row => row._id === id)?.map((row) => (
                              <div key={row._id}>
                                <header style={{ display: 'block', alignItems: 'center', justifyContent: 'space-between' }}>
                                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                      <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
                                        {row.customerName.customerName !== undefined ? row.customerName.customerName.toUpperCase() : ''} | PAY-{String(row.paymentNumber).padStart(6, '0')}
                                        <span style={{ marginLeft: '15px', padding: '2px 8px', borderRadius: '4px', backgroundColor: row.transactionType === 'Refund' ? '#ffcdd2' : '#c8e6c9', color: row.transactionType === 'Refund' ? '#c62828' : '#2e7d32', fontSize: '14px', verticalAlign: 'middle' }}>
                                          {row.transactionType || 'Payment'}
                                        </span>
                                        <span style={{ marginLeft: '8px', padding: '2px 8px', borderRadius: '4px', backgroundColor: row.status === 'Cleared' ? '#bbdefb' : '#fff9c4', color: row.status === 'Cleared' ? '#1565c0' : '#fbc02d', fontSize: '14px', verticalAlign: 'middle' }}>
                                          {row.status || 'Cleared'}
                                        </span>
                                      </Typography>
                                    </div>
                                    <div>
                                      <Button
                                        aria-controls={open ? 'demo-customized-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        variant="contained"
                                        disableElevation
                                        onClick={handleClick}
                                        endIcon={<KeyboardArrowDown />}
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
                                        <MenuItem disabled={PaymentInfoU.length === 0 && user.data.role !== 'CEO'}>
                                          <NavLink to={`/PaymentInformationUpdate/${row._id}`} className='LinkName' style={{ display: 'flex', gap: '20px', alignItems: 'center', color: 'gray' }}>
                                            <Edit />
                                            <Typography>Edit</Typography>
                                          </NavLink>
                                        </MenuItem>
                                        <MenuItem onClick={handleOpenPrint} sx={{ display: 'flex', gap: '20px', color: 'gray' }}>
                                          <LocalPrintshop />
                                          <span>Print</span>
                                        </MenuItem>
                                        <Divider />
                                        <MenuItem onClick={() => handleShow1(2)}> <span style={{ color: 'gray' }}>Comments</span> </MenuItem>
                                        <MenuItem onClick={() => handleShow1(3)}> <span style={{ color: 'gray' }}>History</span></MenuItem>
                                      </Menu>
                                    </div>
                                  </div>
                                </header>
                                <hr />
                                <div style={{ height: '560px', overflow: 'hidden', overflowY: 'scroll', width: '100%', background: 'white' }}>
                                  <div hidden>
                                    <table ref={componentRef} className='invoicedetails' style={{ position: 'relative', marginLeft: '40px' }}>
                                      <thead>
                                        <tr>
                                          <th ></th>
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
                                              <p className='invoicehr'>PAYMENT</p>
                                              <div className='content' style={{ marginBottom: '20px', position: 'relative' }}>
                                                <section style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', boxSizing: 'border-box', padding: '0px', marginBottom: '10px' }}>
                                                  <address style={{ marginLeft: config['--client-block-left-offset'] || '0px', position: 'relative', lineHeight: 1.35, width: 'fit-content', minWidth: '200px' }}>
                                                    <p>Payment From<br /><span style={{ fontWeight: 'bold' }}>{row.customerName.customerName.toUpperCase()}</span></p>
                                                  </address>

                                                  <div style={{ marginLeft: 'auto', marginRight: config['--metadata-block-right-offset'] || '0px', width: 'fit-content', display: 'block', marginBottom: '10px' }}>
                                                    <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: '24px', rowGap: '6px', fontSize: '70%', alignContent: 'start', position: 'relative' }}>
                                                      <div style={{ fontWeight: 'bold', textAlign: 'left' }}>PAY #</div>
                                                      <div style={{ textAlign: 'left' }}>PAY-{String(row.paymentNumber).padStart(6, '0')}</div>
                                                      
                                                      <div style={{ fontWeight: 'bold', textAlign: 'left' }}>Date</div>
                                                      <div style={{ textAlign: 'left' }}>{dayjs(row.paymentDate).format('DD/MM/YYYY')}</div>
                                                      
                                                      <div style={{ fontWeight: 'bold', textAlign: 'left' }}>Mode</div>
                                                      <div style={{ textAlign: 'left' }}>{row.modes.toUpperCase()}</div>
                                                      
                                                      <div style={{ fontWeight: 'bold', textAlign: 'left' }}>Reason</div>
                                                      <div style={{ textAlign: 'left' }}>{row.reason || (row.TotalAmount?.[0]?.prefix === 'P-' ? 'Project' : 'Invoice')}</div>
                                                      
                                                      <div style={{ fontWeight: 'bold', textAlign: 'left' }}>Type</div>
                                                      <div style={{ textAlign: 'left', color: row.transactionType === 'Refund' ? 'red' : 'green' }}>{row.transactionType || 'Payment'}</div>
                                                      
                                                      <div style={{ fontWeight: 'bold', textAlign: 'left' }}>Status</div>
                                                      <div style={{ textAlign: 'left' }}>{row.status || 'Cleared'}</div>
                                                    </div>
                                                  </div>
                                                </section>
                                                <section style={{}}>
                                                  {
                                                    row.description !== undefined ?
                                                      <table style={{ position: 'relative', fontSize: '80%', float: 'left', left: '0', width: '50%', marginBottom: '5px' }}>
                                                        <tbody>
                                                          <tr>
                                                            <th style={{ textAlign: 'left', width: '30px' }}>Description</th>
                                                            <td style={{ textAlign: 'left' }}>{row.description}</td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                      : ''
                                                  }
                                                  <table className="secondTable" style={{ fontSize: '70%', marginBottom: '5px', border: '1px solid #DDD' }}>
                                                    <thead>
                                                      <tr>
                                                        <th style={{ textAlign: 'center', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>#</th>
                                                        <th style={{ textAlign: 'center', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Reference</th>
                                                        <th style={{ textAlign: 'center', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Date</th>
                                                        <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Subject</th>
                                                        <th style={{ textAlign: 'center', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>{row.reason === 'Project' || row.TotalAmount?.[0]?.prefix === 'P-' ? 'Project Amount' : 'Invoice Amount'}</th>
                                                        <th style={{ textAlign: 'center', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Amount Paid</th>
                                                      </tr>
                                                    </thead>
                                                    <tbody>
                                                      {row.TotalAmount?.map((Item, i) => {
                                                        const relatedInvoice = invoice?.find((row1) => row1._id === Item.id)
                                                        return (
                                                          <tr key={Item.id} >
                                                            <td style={{ textAlign: 'center', borderLeft: '1px solid #DDD' }}>{i + 1}</td>
                                                            <td style={{ textAlign: 'center', borderLeft: '1px solid #DDD' }}> {Item.prefix || (relatedInvoice?.ReferenceName2 || relatedInvoice?.invoicePurchase === 'Purchased' ? "P-" : (row.reason === "Project" || row.TotalAmount?.[0]?.prefix === 'P-' ? "P-" : "INV-"))}{String(Item.Ref).padStart(6, '0')}</td>
                                                            <td style={{ textAlign: 'center', borderLeft: '1px solid #DDD' }}>{Item.days > 0 ?
                                                              <Typography
                                                                color={Item.days > 0
                                                                  ? "red" : "black"
                                                                }
                                                              >
                                                                Overdue: {Item.days} Days Past Due
                                                              </Typography>
                                                              : <span>{dayjs(Item.invoiceDate).format('DD/MM/YYYY')}</span>}</td>
                                                            <td style={{ padding: '10px', textAlign: 'right', borderLeft: '1px solid #DDD' }}>{relatedInvoice?.invoiceSubject?.toUpperCase()}</td>
                                                            <td style={{ textAlign: 'right', borderLeft: '1px solid #DDD' }}>${Item.invoiceAmount !== undefined ? Item.invoiceAmount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</td>
                                                            <td style={{ textAlign: 'right', borderLeft: '1px solid #DDD' }}>${Item.total?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>

                                                          </tr>
                                                        )
                                                      })}
                                                    </tbody>
                                                  </table>
                                                  <table style={{ position: 'relative', fontSize: '70%', pageBreakInside: 'avoid', marginBottom: '5px' }}>
                                                    <thead>
                                                      <tr>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                      </tr>
                                                    </thead>
                                                    <tbody>
                                                      <tr>
                                                        <td style={{ padding: '10px', textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                                        <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span>Amount Received</span></td>
                                                        <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>$</span><span>{row.amount ? row.amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</span></td>

                                                      </tr>
                                                      {
                                                        row.bankCharge && parseFloat(row.bankCharge) > 0 ?
                                                          (
                                                            <tr>
                                                              <td style={{ padding: '10px', textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                                              <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span>Bank Charge</span></td>
                                                              <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>$</span><span>{parseFloat(row.bankCharge).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                                            </tr>
                                                          )
                                                          : ''
                                                      }
                                                      {
                                                        row.PaymentReceivedFC !== undefined ?
                                                          (
                                                            <tr>
                                                              <td style={{ padding: '10px', textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                                              <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span>Amount Paid FC</span></td>
                                                              <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>FC</span><span>{row.PaymentReceivedFC?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                                            </tr>
                                                          )
                                                          : ''
                                                      }
                                                      {
                                                        row.PaymentReceivedUSD !== undefined ?
                                                          (
                                                            <tr>
                                                              <td style={{ padding: '10px', textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                                              <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span>Amount Paid $</span></td>
                                                              <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>$</span><span>{row.PaymentReceivedUSD?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                                            </tr>
                                                          )
                                                          : ''
                                                      }
                                                      <tr>
                                                        <td style={{ padding: '10px', textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                                        <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span>Total Paid USD</span></td>
                                                        <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>$</span><span>{PaymentInfo ? PaymentInfo?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</span></td>
                                                      </tr>
                                                      <tr>
                                                        <td style={{ padding: '10px', textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                                        <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span>Credit</span></td>
                                                        <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>$</span><span>{row.remaining ? row.remaining?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</span></td>

                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                  <address style={{ float: 'left', fontSize: '70%', textAlign: 'left', width: '700px' }}>
                                                    <p style={{ lineHeight: '14px', fontWeight: 'bold' }}>
                                                      Bank: SOFIBANQUE SA <br />
                                                      Entitled: GLOBAL GATE SARL<br />
                                                      Bank Account: 00023233330214247020073<br />
                                                      Code Swift: SFBXCDKIXXX
                                                    </p>
                                                  </address>
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
                                  </div>
                                  <div className='invoicedetails'>
                                      <PrintHeader branchId={typeof row !== "undefined" ? row?.branchId : ""} />
                                    <hr /><p className='invoicehr'>PAYMENT</p>
                                    <article>
                                      <section style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', boxSizing: 'border-box', padding: '0px', marginBottom: '10px' }}>
                                        <address style={{ marginLeft: config['--client-block-left-offset'] || '0px', lineHeight: 1.35, width: 'fit-content', minWidth: '200px', marginBottom: '5px' }}>
                                          <p >Payment From<br />
                                            <span style={{ fontWeight: 'bold' }}>{row.customerName.customerName !== undefined ? row.customerName.customerName.toUpperCase() : ''}</span>
                                            <br />
                                            {row.customerName.billingAddress !== undefined ? row.customerName.billingAddress.toUpperCase() : ''},{row.customerName.billingCity !== undefined ? row.customerName.billingCity.toUpperCase() : ''}
                                          </p>
                                        </address>

                                        <div style={{ marginLeft: 'auto', marginRight: config['--metadata-block-right-offset'] || '0px', width: 'fit-content', display: 'block', marginBottom: '5px' }}>
                                          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: '24px', rowGap: '6px', fontSize: '80%', alignContent: 'start', position: 'relative' }}>
                                            <div style={{ fontWeight: 'bold', textAlign: 'left' }}>PAY #</div>
                                            <div style={{ textAlign: 'left' }}>PAY-{String(row.paymentNumber).padStart(6, '0')}</div>
                                            
                                            <div style={{ fontWeight: 'bold', textAlign: 'left' }}>Date</div>
                                            <div style={{ textAlign: 'left' }}>{dayjs(row.paymentDate).format('DD/MM/YYYY')}</div>
                                            
                                            <div style={{ fontWeight: 'bold', textAlign: 'left' }}>Mode</div>
                                            <div style={{ textAlign: 'left' }}>{row.modes.toUpperCase()}</div>
                                            
                                            <div style={{ fontWeight: 'bold', textAlign: 'left' }}>Reason</div>
                                            <div style={{ textAlign: 'left' }}>{row.reason || (row.TotalAmount?.[0]?.prefix === 'P-' ? 'Project' : 'Invoice')}</div>
                                            
                                            <div style={{ fontWeight: 'bold', textAlign: 'left' }}>Type</div>
                                            <div style={{ textAlign: 'left', color: row.transactionType === 'Refund' ? 'red' : 'green' }}>{row.transactionType || 'Payment'}</div>
                                            
                                            <div style={{ fontWeight: 'bold', textAlign: 'left' }}>Status</div>
                                            <div style={{ textAlign: 'left' }}>{row.status || 'Cleared'}</div>
                                          </div>
                                        </div>
                                      </section>
                                      <section>
                                        {
                                          row.description !== undefined ?
                                            <table style={{ position: 'relative', fontSize: '80%', float: 'left', left: '0', width: '50%', marginBottom: '5px' }}>
                                              <tbody>
                                                <tr>
                                                  <th style={{ textAlign: 'left', width: '30px' }}>Description</th>
                                                  <td style={{ textAlign: 'left' }}>{row.description}</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            : ''
                                        }
                                        <table className="secondTable" style={{ width: '100%', clear: 'both', fontSize: '80%', marginBottom: '5px', border: '1px solid #DDD', borderCollapse: 'collapse' }}>
                                          <thead>
                                            <tr>
                                              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>action</th>
                                              <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>#</th>
                                              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Date</th>
                                              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Subject</th>
                                              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>{row.reason === 'Project' || row.TotalAmount?.[0]?.prefix === 'P-' ? 'Project Amount' : 'Invoice Amount'}</th>
                                              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Amount Paid</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            {row.TotalAmount?.map((Item, i) => {
                                              const relatedInvoice = invoice?.find((row1) => row1._id === Item.id)
                                              return (
                                                <tr key={Item.id} >
                                                  <td style={{ padding: '10px', textAlign: 'center', borderLeft: '1px solid #DDD' }}>
                                                    <NavLink to={`/InvoiceViewAdminAll/${Item.id}`} className='LinkName'>
                                                      <span>View</span>
                                                    </NavLink>
                                                  </td>
                                                  <td style={{ padding: '10px', textAlign: 'center', borderLeft: '1px solid #DDD' }}> {Item.prefix || (relatedInvoice?.ReferenceName2 || relatedInvoice?.invoicePurchase === 'Purchased' ? "P-" : (row.reason === "Project" || row.TotalAmount?.[0]?.prefix === 'P-' ? "P-" : "INV-"))}{String(Item.Ref).padStart(6, '0')}</td>
                                                  <td style={{ padding: '10px', textAlign: 'center', borderLeft: '1px solid #DDD' }}>{Item.days > 0 ?
                                                    <Typography
                                                      color={Item.days > 0
                                                        ? "red" : "black"
                                                      }
                                                    >
                                                      Overdue: {Item.days} Days Past Due
                                                    </Typography>
                                                    : <span>{dayjs(Item.invoiceDate).format('DD/MM/YYYY')}</span>}</td>
                                                  <td style={{ padding: '10px', textAlign: 'right', borderLeft: '1px solid #DDD' }}>{relatedInvoice?.invoiceSubject?.toUpperCase()}</td>
                                                  <td style={{ padding: '10px', textAlign: 'right', borderLeft: '1px solid #DDD' }}>${Item.invoiceAmount !== undefined ? Item.invoiceAmount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</td>
                                                  <td style={{ padding: '10px', textAlign: 'right', borderLeft: '1px solid #DDD' }}>${Item.total?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>

                                                </tr>
                                              )
                                            })}
                                          </tbody>
                                        </table>
                                        <table style={{ width: '100%', clear: 'both', fontSize: '80%', pageBreakInside: 'avoid' }}>

                                          <tbody>
                                            <tr>
                                              <td style={{ padding: '10px', textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                              <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span>Amount Received</span></td>
                                              <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>$</span><span>{row.amount ? row.amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</span></td>

                                            </tr>
                                            {
                                              row.bankCharge && parseFloat(row.bankCharge) > 0 ?
                                                (
                                                  <tr>
                                                    <td style={{ padding: '10px', textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                                    <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span>Bank Charge</span></td>
                                                    <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>$</span><span>{parseFloat(row.bankCharge).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                                  </tr>
                                                )
                                                : ''
                                            }
                                            {
                                              row.PaymentReceivedFC !== undefined ?
                                                (
                                                  <tr>
                                                    <td style={{ padding: '10px', textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                                    <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span>Amount Paid FC</span></td>
                                                    <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>FC</span><span>{row.PaymentReceivedFC?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                                  </tr>
                                                )
                                                : ''
                                            }
                                            {
                                              row.PaymentReceivedUSD !== undefined ?
                                                (
                                                  <tr>
                                                    <td style={{ padding: '10px', textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                                    <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span>Amount Paid $</span></td>
                                                    <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>$</span><span>{row.PaymentReceivedUSD?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>
                                                  </tr>
                                                )
                                                : ''
                                            }
                                            <tr>
                                              <td style={{ padding: '10px', textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                              <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span>Total Paid USD</span></td>
                                              <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>$</span><span>{PaymentInfo ? PaymentInfo?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</span></td>
                                            </tr>
                                            <tr>
                                              <td style={{ padding: '10px', textAlign: 'left', width: '200px' }} colSpan={3}></td>
                                              <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span>Credit</span></td>
                                              <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #DDD' }} colSpan={2}><span data-prefix>$</span><span>{row.remaining ? row.remaining.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</span></td>

                                            </tr>
                                          </tbody>
                                        </table>
                                        <table style={{ position: 'relative', marginTop: '-40px', fontSize: '80%' }} >
                                          <tbody>
                                            <tr>
                                              <th style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'left' }}>
                                                Bank
                                              </th>
                                              <td style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'left' }}>
                                                SOFIBANQUE SA
                                              </td>
                                            </tr>
                                            <tr>
                                              <th style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'left' }}>
                                                Entitled
                                              </th>
                                              <td style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'left' }}>
                                                GLOBAL GATE SARL
                                              </td>
                                            </tr>
                                            <tr>
                                              <th style={{ backgroundColor: 'white', width: '100px', border: 'none', fontWeight: 'bold', textAlign: 'left' }}>
                                                Bank Account
                                              </th>
                                              <td style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'left' }}>
                                                00023233330214247020073
                                              </td>
                                            </tr>
                                            <tr>
                                              <th style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'left' }}>
                                                Code Swift
                                              </th>
                                              <td style={{ backgroundColor: 'white', border: 'none', fontWeight: 'bold', textAlign: 'left' }}>
                                                SFBXCDKIXXX
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </section>
                                    </article>
                                    <span className='footerinvoice'>
                                      <p style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                        <span><EmailIcon /></span>
                                        <span>contact@globalgate.sarl</span>
                                      </p>
                                      <p style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                        <span><PhoneIcon /></span>
                                        <span>+243 827722222</span>
                                      </p>
                                      <p style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                        <span><WebIcon /></span>
                                        <span>www.GlobalGate.sarl</span>
                                      </p>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )
                            )
                            }
                            <div />
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
                                      onChange={(e) => setReason(e.target.value)}
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
                                  payment.filter((row) => row._id === id)
                                    .map((row) => (
                                      <p key={row._id}>{row.Create ? (
                                        <span>{row.Create.dateComment} {row.Create.person} {'PAY-' + String(row.Create.paymentNumber).padStart(6, '0')}</span>
                                      ) : ''}</p>
                                    ))
                                }
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
                  </div>
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
    </div>
  )
}

export default PaymentInformationView
