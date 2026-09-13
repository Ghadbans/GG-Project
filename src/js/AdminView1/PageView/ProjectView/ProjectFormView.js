import React, { useEffect, useState } from 'react';
import SidebarDash1 from '../../../component/SidebarDash1';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
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
import { Add, ArrowUpwardOutlined } from '@mui/icons-material';
import { ENDPOINT_URL } from '../../../apiConfig';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ArrowBack from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Loader from '../../../component/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '../../../component/NetworkLogoutIcon';
import Delete from '@mui/icons-material/Delete';
import CustomerFormView2 from '../CustomerVIew/CustomerFormView2';
import Close from '@mui/icons-material/Close';
import dayjs from 'dayjs';
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import { toast } from 'react-toastify';
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
function ProjectFormView() {
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
  const [customer, setCustomer] = useState([]);
  const [customerName, setCustomerName] = useState({});
  const [projectName, setProjectName] = useState("");
  const [status, setStatus] = useState("");
  const [phase, setPhase] = useState([]);
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(() => {
    const date = new Date()
    return date
  });
  const [visitDate, setVisitDate] = useState(() => {
    const date = new Date()
    return date
  });
  const [projectNumber, setProjectNumber] = useState(0);



  useEffect(() => {
    const fetchlastNumber = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/get-last-saved-project`)
        const num = res.data && res.data.projectNumber ? (parseInt(res.data?.data?.projectNumber || res.data?.projectNumber || 0)) : 0;
        setProjectNumber(num + 1)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchlastNumber()
  }, [])
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
  const [openAutocomplete1, setOpenAutocomplete1] = useState(false);
  const handleOpenOpenAutocomplete1 = (e) => {
    e.stopPropagation()
    setOpenAutocomplete1(true);
  };
  const handleCloseOpenAutocomplete1 = () => {
    setOpenAutocomplete1(false);
  };
  const handleCreateCustomer = (newCustomer) => {
    setCustomer([newCustomer, ...customer])
  }
  const handleChangeCustomer = (newValue) => {
    const selectedOptions = customer.find((option) => option === newValue)
    setCustomerName({
      _id: selectedOptions?._id,
      customerName: selectedOptions?.Customer,
    });
  }
  const handleAdd = () => {
    const abc = [...phase, []]
    setPhase(abc)
  };
  const handleChange = (onChangeValue, i) => {
    const inputData = [...phase]
    inputData[i] = onChangeValue.target.value;
    setPhase(inputData)
  };
  const handleDelete = (i) => {
    const deletePhase = [...phase]
    deletePhase.splice(i, 1)
    setPhase(deletePhase)
  };
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
    setCustomerName({});
    setProjectName("");
    setStatus("Pending");
    setPhase([]);
    setDescription("");
    // Reset dates if needed, or keep them as is
    setProjectNumber(prev => prev + 1);
    setSaving('');
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
  const handleCreateNotification = async (ReferenceInfo) => {
    const data = {
      idInfo: ReferenceInfo,
      person: user.data.userName + ' Created ',
      reason: `${projectName} For ${customerName.customerName}`,
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
    const custName = customerName?.customerName || (typeof customerName === 'string' ? customerName : '');
    if (!custName || custName.trim() === '' || custName === 'undefined' || custName === 'null') {
      toast.error('Please select a valid Customer Name before saving.');
      setSaving('');
      return;
    }
    setSaving('true')
    const data = {
      _id: v4(),
      customerName,
      projectName,
      status,
      phase,
      description,
      startDate,
      visitDate,
      projectNumber,
      synced: false
    }
    try {
      const res = await axios.post(`${ENDPOINT_URL}/create-projects`, data);
      if (res) {
        // Open Loading View
        const ReferenceInfo = res.data.data._id
        handleCreateNotification(ReferenceInfo)
        handleOpen();
      }
    } catch (error) {
      if (error) {
        setSaving('')
        handleError();
      }
    }
  }
  const [sideBar, setSideBar] = React.useState(true);
  const toggleDrawer = () => {
    setSideBar(!sideBar);
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
                New Project
              </Typography>
              <Typography variant="caption" sx={{ color: '#E0E7FF' }}>
                P-{String(projectNumber || 1).padStart(6, '0')}
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
          {/* Card 1: Project Details */}
          <Card sx={{ borderRadius: 3.5, p: 2.5, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
            <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase', mb: 1.5, display: 'block' }}>
              Project Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Autocomplete
                  size="small"
                  options={customer || []}
                  getOptionLabel={(option) => option?.Customer || option?.customerName || ''}
                  onChange={(e, val) => handleChangeCustomer(val)}
                  renderInput={(params) => (
                    <TextField {...params} label="Select Customer *" size="small" fullWidth required />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  size="small"
                  label="Project Name *"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth size="small">
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={status || 'Pending'}
                    label="Status"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="In Progress">In Progress</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                    <MenuItem value="Cancelled">Cancelled</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Start Date"
                    value={startDate ? dayjs(startDate) : null}
                    onChange={(date) => setStartDate(date)}
                    slotProps={{ textField: { fullWidth: true, size: 'small' } }}
                    format="DD/MM/YYYY"
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Visit Date"
                    value={visitDate ? dayjs(visitDate) : null}
                    onChange={(date) => setVisitDate(date)}
                    slotProps={{ textField: { fullWidth: true, size: 'small' } }}
                    format="DD/MM/YYYY"
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  size="small"
                  label="Description / Scope"
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
            {saving === 'true' ? 'Saving Project...' : 'Save Project'}
          </Button>
        </Box>

        {/* Loading Modal */}
        <Modal open={loadingOpenModal} onClose={handleClose}>
          <Box sx={{ ...style, width: '90%', maxWidth: 400, borderRadius: 4, textAlign: 'center', p: 3 }}>
            {loading ? <Loader /> : (
              <div>
                <CheckCircleIcon sx={{ color: 'green', fontSize: 48, mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 800 }}>Project Saved Successfully</Typography>
                <Button fullWidth variant="contained" onClick={() => navigate('/ProjectViewAdmin')} sx={{ mt: 2, backgroundColor: '#30368a', borderRadius: 2 }}>
                  Go to Projects
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
              Add new Project
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
            <div>
              <form onSubmit={handleSubmit} >
                <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2} component={Paper}>
                  <Grid item xs={12}>
                    <Autocomplete
                      disableClearable
                      options={customer}
                      getOptionLabel={(option) => option.Customer}
                      onChange={(e, newValue) => {
                        handleChangeCustomer(newValue);
                      }}
                      PaperComponent={({ children, ...other }) => (

                        <Box {...other} sx={{ backgroundColor: 'white', left: '0', marginTop: '10px' }}>
                          {children}
                          <div>
                            <button onClick={(e) => handleOpenOpenAutocomplete1(e)} disabled={user.data.role === 'User'} onMouseDown={(e) => e.preventDefault()} className='btnCustomer7' style={{ width: '100%' }}>
                              ADD NEW CUSTOMER
                            </button>
                          </div>
                        </Box>
                      )}
                      renderInput={(params) => <TextField {...params} label="Customer Name" required />}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker
                          required
                          name='visitDate'
                          label='Visit Date'
                          value={dayjs(visitDate)}
                          onChange={(date) => setVisitDate(date)}
                          sx={{ width: '100%', backgroundColor: 'white' }}
                          format='DD/MM/YYYY'
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker
                          required
                          name='startDate'
                          label='Start Date'
                          value={dayjs(startDate)}
                          onChange={(date) => setStartDate(date)}
                          sx={{ width: '100%', backgroundColor: 'white' }}
                          format='DD/MM/YYYY'
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      required
                      id='ProjectName'
                      name='ProjectName'
                      label='Project Name'
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={6}>

                    <FormControl sx={{ width: '100%', backgroundColor: 'white' }}>
                      <InputLabel htmlFor="projectNumber">Project Number</InputLabel>
                      <OutlinedInput
                        type='number'
                        id='projectNumber'
                        name='projectNumber'
                        label='Project Number'
                        value={projectNumber}
                        onChange={(e) => setProjectNumber(e.target.value)}
                        startAdornment={<InputAdornment position="start">P-</InputAdornment>}
                      />
                    </FormControl>

                  </Grid>
                  <Grid item xs={12}>
                    {
                      phase.map((data, i) =>
                        <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
                          <Grid container style={{ alignItems: 'center' }} spacing={2}>
                            <Grid item xs={4}>
                              <TextField
                                name="phase" id="phase"
                                label='Phase'
                                value={data} onChange={(e) => handleChange(e, i)}
                                sx={{ width: '100%', backgroundColor: 'white' }}
                              />
                            </Grid>
                            <Grid item xs={2}>
                              <Delete className='btnCustomer' onClick={() => handleDelete(i)} />
                            </Grid>
                          </Grid>
                        </div>
                      )
                    }
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl sx={{ width: '100%' }}>
                      <InputLabel id="status">Status</InputLabel>
                      <Select
                        required
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        name="status"
                        label="status"
                        defaultValue="Pending"
                      >
                        <MenuItem value="Pending">Pending</MenuItem>
                        <MenuItem value="On-Going">On-Going</MenuItem>
                        <MenuItem value="Stopped">Stopped</MenuItem>
                        <MenuItem value="Completed">Completed</MenuItem>
                      </Select>
                    </FormControl>
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
              <Typography>Do you want to stop creating project ? </Typography>
              <p><span className="txt2" style={{ color: 'red' }}>Note :</span> <span className="txt2"> If you stop creating without saving, all your changes will be lost</span></p>
            </Grid>
            <br />
            <Grid item xs={6}>
              <button type='submit' onClick={() => navigate('/ProjectViewAdmin')} className='btnCustomer' style={{ width: '100%' }}>Yes</button>
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
              <h2 style={{ color: 'red' }}>Saving Failed</h2>
              <button className='btnCustomer' onClick={handleCloseError}>
                Try Again
              </button>
            </div>
          )}
        </Box>
      </Modal>
      <Modal
        open={openAutocomplete1}
        onClose={handleCloseOpenAutocomplete1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style2, width: 800 }}>
          <BlackTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseOpenAutocomplete1} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </BlackTooltip>
          <br />
          <div style={{ height: '600px', padding: '20px', overflow: 'hidden', overflowY: 'scroll' }}>
            <CustomerFormView2 onCreateOption={handleCreateCustomer} onClose={handleCloseOpenAutocomplete1} />
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default ProjectFormView
