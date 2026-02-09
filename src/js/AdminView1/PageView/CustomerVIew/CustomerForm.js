import React, { useEffect, useState } from 'react';
import SidebarDash1 from '../../../component/SidebarDash1';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Checkbox, MenuItem, Grid, IconButton, Paper, TextField, FormControl, InputLabel, Select, Typography, styled, FormLabel, RadioGroup, FormControlLabel, Radio, Modal, Backdrop, Fade, Box, Divider } from '@mui/material'
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
import { useNavigate } from 'react-router-dom';
import ArrowBack from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Loader from '../../../component/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '@mui/icons-material/Logout';
import dayjs from 'dayjs';
import Close from '@mui/icons-material/Close';
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import { v4 as uuidv4, v4 } from 'uuid';
import db from '../../../dexieDb';


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
function CustomerForm() {

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

  const apiUrl = 'https://globalgate-backend-production.up.railway.app/endpoint/create-customer';
  const [customerType, setCustomerType] = useState("");
  const [designation, setDesignation] = useState("");
  const [customerFirstName, setCustomerFirstName] = useState("");
  const [customerLastName, setCustomerLastName] = useState("");
  const customerFullName = customerFirstName !== '' ? designation + '. ' + customerFirstName + (" ") + customerLastName : '';
  const [companyName, setCompanyName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerCompanyPhone, setCustomerCompanyPhone] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [currency, setCurrency] = useState("");
  const [paymentTerms, setPaymentTerms] = useState("");
  const [Customer, setCustomer] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [billingCity, setBillingCity] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [shippingCity, setShippingCity] = useState("");
  const [customerDescription, setCustomerDescription] = useState("");
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const dateComment = new Date()

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

  const handleRadioChange = (e) => {
    setCustomerType(e.target.value);
  }

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
  const handleCreateNotification = async (ReferenceInfo) => {
    const data = {
      idInfo: ReferenceInfo,
      person: user.data.userName + ' Created ',
      reason: Customer,
      dateNotification: dateComment
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
    if (!customerType || !Customer) {
      toast.error("Please select a Customer Type and a Name for Billing before saving.");
      return;
    }
    setSaving('true')
    const data = {
      _id: v4(),
      customerType, designation, customerFirstName, customerLastName,
      customerFullName, companyName, customerEmail, customerCompanyPhone, customerPhone,
      currency, paymentTerms, billingAddress, billingCity,
      shippingAddress, shippingCity, customerDescription, Customer, credit: 0, synced: false
    };
    if (navigator.onLine) {
      try {
        const res = await axios.post(apiUrl, {
          customerType, designation, customerFirstName, customerLastName,
          customerFullName, companyName, customerEmail, customerCompanyPhone, customerPhone,
          currency, paymentTerms, billingAddress, billingCity,
          shippingAddress, shippingCity, customerDescription, Customer, credit: 0, synced: false
        });
        if (res) {
          const ReferenceInfo = res.data.data._id
          handleCreateNotification(ReferenceInfo)
          await db.customerSchema.add({ ...res.data.data, _id: res.data.data._id, synced: true })
          handleOpen();
        }
      } catch (error) {
        if (error) {
          setSaving('')
          handleError();
        }
      }
    } else {
      await db.customerSchema.add(data)
      handleOpen();
    }

  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }
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
              Add new customer
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
            <div>
              <form onSubmit={handleSubmit}>
                <Grid container style={{ alignItems: 'center', padding: '20px' }} spacing={2} component={Paper}>
                  <Grid item xs={12} style={{ display: 'flex' }}>
                    <FormControl>
                      <FormLabel>Type</FormLabel>
                      <RadioGroup
                        row
                        required
                        name="customerType"
                        value={customerType}
                        onChange={handleRadioChange}>
                        <FormControlLabel value='Individual' control={<Radio />} label="Individual" />
                        <FormControlLabel value='Business' control={<Radio />} label="Business" />
                      </RadioGroup>
                    </FormControl>
                    <div>
                      <h2> {customerType} </h2>
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                    <FormControl sx={{ width: '100%' }}>
                      <InputLabel id="designation">Designation</InputLabel>
                      <Select
                        required={customerType === 'Individual'}
                        id="designation"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        name="designation"
                        label="Designation"
                      >
                        <MenuItem value="Mr">Mr</MenuItem>
                        <MenuItem value="Ms">Ms</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      required={customerType === 'Individual'}
                      id='customerFirstName'
                      name='customerFirstName'
                      value={customerFirstName}
                      label='First Name'
                      onChange={(e) => setCustomerFirstName(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      required={customerType === 'Individual'}
                      id='customerLastName'
                      name='customerLastName'
                      value={customerLastName}
                      label='Last Name'
                      onChange={(e) => setCustomerLastName(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      required={customerType === 'Individual'}
                      id='customerFullName'
                      name='customerFullName'
                      value={customerFullName}
                      label='Full Name'
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      required={customerType === 'Business'}
                      id='companyName'
                      name='companyName'
                      value={companyName}
                      label='Company Name'
                      onChange={(e) => setCompanyName(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl sx={{ minWidth: "97%" }}>
                      <InputLabel id="Customer">Select Name for Billing</InputLabel>
                      <Select
                        required
                        id="Customer"
                        value={Customer}
                        onChange={(e) => setCustomer(e.target.value)}
                        name="Customer"
                        label="Select Name for Billing"
                      >
                        <MenuItem value={companyName}>{companyName}</MenuItem>
                        <MenuItem value={designation + '. ' + customerFirstName + ' ' + customerLastName}>{designation + '. ' + customerFirstName + ' ' + customerLastName}</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={4}>
                    <TextField
                      required
                      id='customerEmail'
                      name='customerEmail'
                      value={customerEmail}
                      placeholder='Example: example@gmail.com'
                      label='Email'
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id='customerCompanyPhone'
                      name='customerCompanyPhone'
                      label='Phone Number 1'
                      type='number'
                      value={customerCompanyPhone}
                      onChange={(e) => setCustomerCompanyPhone(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id='customerPhone'
                      name='customerPhone'
                      label='Phone Number 2'
                      value={customerPhone}
                      type='number'
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <FormControl sx={{ minWidth: "97%" }}>
                      <InputLabel id="currency">Currency</InputLabel>
                      <Select
                        id="currency"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        name="currency"
                        label="currency"
                      >
                        <MenuItem value="USD Dollar">USD Dollar</MenuItem>
                        <MenuItem value="FC Congolais">FC Congolais</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={3}>
                    <FormControl sx={{ minWidth: "97%" }}>
                      <InputLabel id="paymentTerms">Payment Terms</InputLabel>
                      <Select
                        id="paymentTerms"
                        value={paymentTerms}
                        onChange={(e) => setPaymentTerms(e.target.value)}
                        name="paymentTerms"
                        label="Payment Terms"
                      >
                        <MenuItem value="Net 3">Net 3</MenuItem>
                        <MenuItem value="Net 10">Net 10</MenuItem>
                        <MenuItem value="Net 15">Net 15</MenuItem>
                        <MenuItem value="Net 20">Net 20</MenuItem>
                        <MenuItem value="Net 25">Net 25</MenuItem>
                        <MenuItem value="Due end of the month">Due end of the month</MenuItem>
                        <MenuItem value="Due on Receipt">Due on Receipt</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      required
                      id='billingAddress'
                      name='billingAddress'
                      value={billingAddress}
                      label='Billing Address'
                      onChange={(e) => setBillingAddress(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      required
                      id='billingCity'
                      name='billingCity'
                      value={billingCity}
                      label='Billing City'
                      onChange={(e) => setBillingCity(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id='shippingAddress'
                      name='shippingAddress'
                      value={shippingAddress}
                      label='Shipping Address'
                      onChange={(e) => setShippingAddress(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id='shippingCity'
                      name='shippingCity'
                      value={shippingCity}
                      label='Shipping City'
                      onChange={(e) => setShippingCity(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id='customerDescription'
                      name='customerDescription'
                      value={customerDescription}
                      label='Description'
                      multiline
                      rows={4}
                      onChange={(e) => setCustomerDescription(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {
                      saving !== 'true' ? (
                        <button
                          type='submit'
                          className='btnCustomer6'
                          style={{ width: '100%' }}
                        >
                          Save
                        </button>
                      ) : (
                        <p className='btnCustomer6' style={{ width: '100%', textAlign: 'center' }}>Saving...</p>
                      )
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
              <Typography>Do you want to stop creating customer ? </Typography>
              <p><span className="txt2" style={{ color: 'red' }}>Note :</span> <span className="txt2"> If you stop creating without saving, all your changes will be lost</span></p>
            </Grid>
            <br />
            <Grid item xs={6}>
              <button type='submit' onClick={() => navigate('/CustomerViewAdmin')} className='btnCustomer' style={{ width: '100%' }}>Yes</button>
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

export default CustomerForm
