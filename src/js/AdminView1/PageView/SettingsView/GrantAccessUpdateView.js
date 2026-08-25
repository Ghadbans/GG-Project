import React, { useEffect, useState } from 'react'
import '../Chartview.css'
import SidebarDashE3 from '../../../component/SidebarDashE3'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { MenuItem, Grid, IconButton, Paper, Box, TextField, FormControl, InputLabel, InputAdornment, Typography, styled, Select, FormLabel, RadioGroup, FormControlLabel, Radio, Autocomplete, OutlinedInput, Modal, Backdrop, Fade, Input, Divider, Checkbox } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';
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
import ArrowBack from '@mui/icons-material/ArrowBack';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Loader from '../../../component/Loader';
import Logout from '../../../component/NetworkLogoutIcon';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import { v4 } from 'uuid';
import { Add } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';

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
function GrantAccessUpdateView() {
  const { id } = useParams()
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
  const [sideBar, setSideBar] = React.useState(true);
  const toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  const [userName, setUserName] = useState('');
  const [modules, setModules] = useState([])
  const [branches, setBranches] = useState([]);
  const [costVisibility, setCostVisibility] = useState(false);
  const [branchOptions, setBranchOptions] = useState([]);

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/companyProfile`);
        if (res.data && res.data.data && res.data.data.length > 0) {
          const profile = res.data.data[0];
          if (profile.branches && profile.branches.length > 0) {
            setBranchOptions(profile.branches.map(b => b.branchName));
          }
        }
      } catch (error) {
        console.error('Error fetching branches:', error);
      }
    };
    fetchBranches();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/get-grantAccess/${id}`)
        setUserName(res.data.data.employeeName);
        setBranches(res.data.data.branches || []);
        setCostVisibility(res.data.data.costVisibility || false);
        let fetchedModules = res.data.data.modules;

        
        if (!fetchedModules.find(m => m.moduleName === 'Purchase-Order')) {
          fetchedModules.push({
            id: 17,
            moduleName: 'Purchase-Order',
            access: { readM: false, createM: false, viewM: false, editM: false, deleteM: false }
          });
        }
        if (!fetchedModules.find(m => m.moduleName === 'Supplier')) {
          fetchedModules.push({
            id: 25,
            moduleName: 'Supplier',
            access: { readM: false, createM: false, viewM: false, editM: false, deleteM: false }
          });
        }
        if (!fetchedModules.find(m => m.moduleName === 'Point-Of-Sell')) {
          fetchedModules.push({
            id: 18,
            moduleName: 'Point-Of-Sell',
            access: { readM: false, createM: false, viewM: false, editM: false, deleteM: false }
          });
        }

        // Ensure Reports module is present even for old records
        if (!fetchedModules.find(m => m.moduleName === 'Reports')) {
          fetchedModules.push({
            id: 19,
            moduleName: 'Reports',
            access: { readM: false, createM: false, viewM: false, editM: false, deleteM: false }
          });
        }
        if (!fetchedModules.find(m => m.moduleName === 'Block-Factory')) {
          fetchedModules.push({
            id: 20,
            moduleName: 'Block-Factory',
            access: { readM: false, createM: false, viewM: false, editM: false, deleteM: false }
          });
        }
        // Ensure Block-Mixer module is present even for old records
        if (!fetchedModules.find(m => m.moduleName === 'Block-Mixer')) {
          fetchedModules.push({
            id: 21,
            moduleName: 'Block-Mixer',
            access: { readM: false, createM: false, viewM: false, editM: false, deleteM: false }
          });
        }
        // Ensure Backup module is present even for old records
        if (!fetchedModules.find(m => m.moduleName === 'Backup')) {
          fetchedModules.push({
            id: 22,
            moduleName: 'Backup',
            access: { readM: false, createM: false, viewM: false, editM: false, deleteM: false }
          });
        }
        // Ensure Layout-Print module is present even for old records
        if (!fetchedModules.find(m => m.moduleName === 'Layout-Print')) {
          fetchedModules.push({
            id: 23,
            moduleName: 'Layout-Print',
            access: { readM: false, createM: false, viewM: false, editM: false, deleteM: false }
          });
        }
        // Ensure Fleet Management module is present even for old records
        if (!fetchedModules.find(m => m.moduleName === 'Fleet Management')) {
          fetchedModules.push({
            id: 24,
            moduleName: 'Fleet Management',
            access: { readM: false, createM: false, viewM: false, editM: false, deleteM: false }
          });
        }

        // Apply sequential IDs so unnumbered older records get an ID for rendering
        fetchedModules = fetchedModules.map((m, index) => ({ ...m, id: index + 1 }));

        setModules(fetchedModules);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData()
  }, [])
  const handleCheckBox = (i, type) => {
    const updateModule = [...modules]
    updateModule[i].access[type] = !updateModule[i].access[type]
    setModules(updateModule)
  }
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
    window.location.reload;
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
  const handleCreateComment = async () => {
    const data = {
      idInfo: id,
      person: user.data.userName + ' Modify',
      reason: 'Access For' + userName,
      dateNotification: new Date()
    };
    try {
      await axios.post(`${ENDPOINT_URL}/create-notification/`, data)

    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.data.userName !== 'GG') {
      alert('Only GG can modify access.');
      return;
    }
    const data = {
      modules,
      branches,
      costVisibility
    };
    try {
      const res = await axios.put(`${ENDPOINT_URL}/update-grantAccess/${id}`, data)
      if (res) {
        // Open Loading View
        handleCreateComment()
        handleOpen();

      }
    } catch (error) {
      if (error) {
        handleError();
      }
    }
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
              Grant Access
            </Typography>
            <IconButton onClick={() => navigate(-1)}>
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
            <SidebarDashE3 />
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
          <Container maxWidth="lg" sx={{ mt: 4 }} >
            <form onSubmit={handleSubmit}>
              <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2} component={Paper}>
                <Grid item xs={6}>
                  <TextField
                    name='userName'
                    label='User Name'
                    value={userName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <table className='tableInfo10'>
                    <tbody>
                      {
                        modules.map((row, i) => {
                          const hiddenModules = ['Admin', 'User', 'Role', 'Item-Category', 'Stock', 'Asset', 'Account'];
                          if (hiddenModules.includes(row.moduleName)) return null;
                          return (
                            <tr key={row.id}>
                              <td>{row.id}</td>
                              <td style={{ width: '300px' }}>
                                {row.moduleName === 'Estimate' ? 'Quotation' : row.moduleName}
                              </td>
                              <td style={{ textAlign: 'center' }}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={row.access.readM}
                                      onChange={() => handleCheckBox(i, 'readM')}
                                    />
                                  }
                                  label='read'
                                />

                              </td>
                              <td style={{ textAlign: 'center' }}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={row.access.createM}
                                      onChange={() => handleCheckBox(i, 'createM')}
                                    />
                                  }
                                  label='Create'
                                />
                              </td>
                              <td style={{ textAlign: 'center' }}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={row.access.viewM}
                                      onChange={() => handleCheckBox(i, 'viewM')}
                                    />
                                  }
                                  label='View'
                                />
                              </td>
                              <td style={{ textAlign: 'center' }}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={row.access.editM}
                                      onChange={() => handleCheckBox(i, 'editM')}
                                    />
                                  }
                                  label='Edit'
                                />
                              </td>
                              <td style={{ textAlign: 'center' }}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={row.access.deleteM}
                                      onChange={() => handleCheckBox(i, 'deleteM')}
                                    />
                                  }
                                  label='Delete'
                                />
                              </td>
                            </tr>
                          );
                        })
                      }
                    </tbody>
                  </table>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ border: '1px solid #ccc', padding: 2, borderRadius: 1, mt: 2 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>Assigned Branches:</Typography>
                    <Autocomplete
                      multiple
                      options={branchOptions}
                      value={branches}
                      onChange={(event, newValue) => {
                        setBranches(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          label="Select Branches"
                        />
                      )}
                      sx={{ mb: 3 }}
                    />
                    
                    <Typography variant="h6" sx={{ mb: 1 }}>Special Permissions:</Typography>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={costVisibility}
                          onChange={(e) => setCostVisibility(e.target.checked)}
                        />
                      }
                      label={`View Costs/Rates: ${costVisibility ? 'Granted' : 'Denied'}`}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <button type='submit' className='btnCustomer6' style={{ width: '100%' }}>Save</button>
                </Grid>
              </Grid>
            </form>
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
              <p><span className='txt1' style={{ color: 'red' }}>Note:</span><span className="txt2">Project name can only be created once for purchase</span></p>
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

export default GrantAccessUpdateView
