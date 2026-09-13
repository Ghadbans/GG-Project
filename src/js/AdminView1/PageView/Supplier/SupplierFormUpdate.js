import React, { useEffect, useState } from 'react';
import SideMaintenance2 from '../../../component/SideMaintenance2';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { MenuItem, Grid, IconButton, Paper, TextField, FormControl, InputLabel, Select, Typography, styled, Box, Autocomplete, Modal, Backdrop, TableContainer, OutlinedInput, InputAdornment, Divider } from '@mui/material'
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
import { invalidateCache } from '../../../utils/apiCache';
import { Add, ArrowUpwardOutlined, DragIndicatorRounded, RemoveCircleOutline } from '@mui/icons-material';
import { ENDPOINT_URL } from '../../../apiConfig';
import { v4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';
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
import Logout from '../../../component/NetworkLogoutIcon';
import CustomerFormView2 from '../CustomerVIew/CustomerFormView2';
import Close from '@mui/icons-material/Close';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import { useIsMobile } from '../../../utils/isMobile';
import { Button, Card } from '@mui/material';


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
const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
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

function SupplierFormUpdate() {
  const isMobile = useIsMobile();
  const { id } = useParams();
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
          dispatch(logOut())
        }
      } else {
        navigate('/');
      }
    }
    fetchUser()
  }, [dispatch])

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }
  const [openBack, setOpenBack] = useState(false);

  const handleOpenBack = (e) => {
    e.preventDefault()
    setOpenBack(true);
  };
  const handleCloseBack = () => {
    setOpenBack(false);
  };
  const [sideBar, setSideBar] = React.useState(true);
  const toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  const [supplierName, setSupplierName] = useState("");
  const [storeName, setStoreName] = useState("");
  const [customerPhone1, setCustomerPhone1] = useState("");
  const [customerPhone2, setCustomerPhone2] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [indexId, setIndexID] = useState("");
  const [reason, setReason] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/get-Supplier/${id}`)
        setSupplierName(res.data.data.supplierName);
        setStoreName(res.data.data.storeName);
        setCustomerPhone1(res.data.data.customerPhone1);
        setCustomerPhone2(res.data.data.customerPhone2);
        setAddress(res.data.data.address);
        setDescription(res.data.data.description);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData()
  }, [id])

  const dateComment = new Date()

  const [open1, setOpen1] = useState(false);

  const handleOpenUpdate = (e) => {
    e.preventDefault()
    setOpen1(true);
  };
  const handleCloseUpdate = () => {
    setOpen1(false);
  };
  {/** Loading Start */ }

  const [loading, setLoading] = useState(false);
  const [loadingOpenModal, setLoadingOpenModal] = useState(false);
  const [ErrorOpenModal, setErrorOpenModal] = useState(false);

  const handleOpen = () => {
    setOpen1(false);
    setLoadingOpenModal(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500)

  }
  const handleError = () => {
    setOpen1(false);
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  const handleClose = () => {
    setLoadingOpenModal(false);
    navigate(-1);
  }
  const handleCloseError = () => {
    setErrorOpenModal(false);
  }
  {/** Loading End */ }

  const [hideBack, setHideBack] = useState('');
  const handleCreateComment = async () => {
    const data = {
      idInfo: id,
      person: user.data.userName + ' Modify SUPPLIER ' + storeName,
      reason,
      dateNotification: dateComment
    };
    try {
      await axios.post(`${ENDPOINT_URL}/create-notification/`, data)

    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    const data = {
      supplierName, storeName, customerPhone1, customerPhone2, address, description, updateS: false
    };
    try {
      const res = await axios.put(`${ENDPOINT_URL}/update-Supplier/${id}`, data)
      if (res) {
        invalidateCache('/itemPurchase');
        invalidateCache('/itemPurchase-Information');
        invalidateCache('/Supplier');
        invalidateCache('/purchaseOrder');
        handleCreateComment();
        handleOpen();
      }
    } catch (error) {
      if (error) {
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
                Update Supplier
              </Typography>
              <Typography variant="caption" sx={{ color: '#E0E7FF' }}>
                {storeName || supplierName || 'Supplier'}
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
          {/* Card 1: Supplier Details */}
          <Card sx={{ borderRadius: 3.5, p: 2.5, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
            <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase', mb: 1.5, display: 'block' }}>
              Supplier Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  label="Supplier Name"
                  value={supplierName}
                  onChange={(e) => setSupplierName(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  size="small"
                  label="Store Name *"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="Phone 1"
                  value={customerPhone1}
                  onChange={(e) => setCustomerPhone1(e.target.value)}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="Phone 2"
                  value={customerPhone2}
                  onChange={(e) => setCustomerPhone2(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  label="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  size="small"
                  label="Description / Notes"
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
            {saving === 'true' ? 'Saving Changes...' : 'Save Changes'}
          </Button>
        </Box>

        {/* Loading Modal */}
        <Modal open={loadingOpenModal} onClose={handleClose}>
          <Box sx={{ ...style, width: '90%', maxWidth: 400, borderRadius: 4, textAlign: 'center', p: 3 }}>
            {loading ? <Loader /> : (
              <div>
                <CheckCircleIcon sx={{ color: 'green', fontSize: 48, mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 800 }}>Supplier Updated Successfully</Typography>
                <Button fullWidth variant="contained" onClick={() => navigate('/SupplierAdminView')} sx={{ mt: 2, backgroundColor: '#30368a', borderRadius: 2 }}>
                  Go to Suppliers
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
    <div>
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
              update Supplier
            </Typography>
            {
              hideBack === 'true' ?
                <IconButton>
                  <ArrowBack style={{ color: 'white' }} />
                </IconButton> :
                <IconButton onClick={handleOpenBack}>
                  <ArrowBack style={{ color: 'white' }} />
                </IconButton>}
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
            <SideMaintenance2 />
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
              <form onSubmit={handleOpenUpdate}>
                <Grid container style={{ alignItems: 'center', padding: '20px' }} spacing={2} component={Paper}>
                  <Grid item xs={6}>
                    <TextField
                      name='supplierName'
                      value={supplierName}
                      label='Supplier Name'
                      onChange={(e) => setSupplierName(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      required
                      name='storeName'
                      value={storeName}
                      label='Store Name'
                      onChange={(e) => setStoreName(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      name='address'
                      value={address}
                      label='Address'
                      onChange={(e) => setAddress(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      name='customerPhone1'
                      value={customerPhone1}
                      label='Phone 1'
                      onChange={(e) => setCustomerPhone1(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      name='customerPhone2'
                      value={customerPhone2}
                      label='Phone 2'
                      onChange={(e) => setCustomerPhone2(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id='description'
                      name='description'
                      value={description}
                      label='Description'
                      multiline
                      rows={4}
                      onChange={(e) => setDescription(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <button type='submit' className='btnCustomer6' style={{ width: '100%' }}>Save</button>
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
              <Typography>Do you want to stop updating customer ? </Typography>
              <p><span className="txt2" style={{ color: 'red' }}>Note :</span> <span className="txt2"> If you stop updating without saving, all your changes will be lost</span></p>
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
                <button type='button' onClick={handleClose} className='btnCustomer'>
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
        open={open1}
        onClose={handleCloseUpdate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <ViewTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseUpdate} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </ViewTooltip>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Reason Of Updating
          </Typography>
          <form onSubmit={handleSubmitEdit}>
            <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>
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
              <br />
              <Grid item xs={12}>
                <button type='submit' className='btnCustomer' style={{ width: '100%' }}>Save</button>
              </Grid>
            </Grid>
          </form>

        </Box>
      </Modal>
    </div>
  )
}

export default SupplierFormUpdate
