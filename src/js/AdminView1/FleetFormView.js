import React, { useState } from 'react';
import './view.css';
import SidebarDash from '../component/SidebarDash';
import { NavLink, useNavigate } from 'react-router-dom';
import { IconButton, styled, Typography, Box, Container, TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import axios from 'axios';
import { ENDPOINT_URL } from '../apiConfig';
import { Add, Close } from '@mui/icons-material';
import { useSelector } from "react-redux"
import { selectCurrentUser } from '../features/auth/authSlice';
import Logout from '../component/NetworkLogoutIcon';
import MessageAdminView from './MessageAdminView';
import NotificationVIewInfo from './NotificationVIewInfo';
import CssBaseline from '@mui/material/CssBaseline';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

export default function FleetFormView() {
  const [sideBar, setSideBar] = useState(false);
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [chassisNumber, setChassisNumber] = useState('');
  const [status, setStatus] = useState('Running');
  const [branchId, setBranchId] = useState('');
  const [branches, setBranches] = useState([]);

  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchBranches = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/companyProfile`);
        if (res.data?.data?.[0]?.branches) {
          setBranches(res.data.data[0].branches);
          if (res.data.data[0].branches.length > 0) {
            setBranchId(localStorage.getItem('selectedBranch') || 'HQ');
          }
        }
      } catch (error) {
        console.error('Error fetching branches:', error);
      }
    };
    fetchBranches();
  }, []);

  const toggleDrawer = () => {
    setSideBar(!sideBar);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    navigate('/LoginSystem');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!carMake || !carModel || !plateNumber) {
      toast.error('Make, Model, and Plate Number are required');
      return;
    }
    try {
      const res = await axios.post(`${ENDPOINT_URL}/fleet`, {
        carMake, carModel, plateNumber, chassisNumber, status, branchId: branchId || 'HQ'
      });
      toast.success('Vehicle added successfully!');
      setTimeout(() => {
        navigate('/FleetViewAdmin');
      }, 1500);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error adding car');
    }
  };

  return (
    <div style={{ backgroundColor: '#f9f9f9', height: '100vh', width: '100%', overflowX: 'hidden' }}>
      <ToastContainer position="top-center" autoClose={3000} />
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={sideBar} style={{ backgroundColor: '#202a5a' }}>
          <Toolbar sx={{ pr: '24px' }}>
            <IconButton edge="start" color="inherit" onClick={toggleDrawer} sx={{ marginRight: '36px', ...(sideBar && { display: 'none' }) }}>
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
              Add New Vehicle
            </Typography>
            <NotificationVIewInfo />
            <MessageAdminView name={user?.data?.userName} role={user?.data?.role} />
            <IconButton color="inherit" onClick={handleLogout}>
              <Logout style={{ color: 'white' }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={sideBar} onMouseEnter={() => setSideBar(true)} onMouseLeave={() => setSideBar(false)}>
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }}>
            <IconButton onClick={toggleDrawer}><ChevronLeftIcon /></IconButton>
          </Toolbar>
          <Divider />
          <List sx={{ height: '700px' }}><SidebarDash /></List>
        </Drawer>
        <Box component="main" sx={{ backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900], flexGrow: 1, height: '100vh', overflow: 'auto' }}>
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Box component="form" onSubmit={handleSubmit} sx={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
               <Typography variant="h5" sx={{ mb: 3 }}>Vehicle Information</Typography>
               <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                  <TextField label="Vehicle Make" variant="outlined" value={carMake} onChange={e => setCarMake(e.target.value)} required sx={{ flex: '1 1 45%' }} />
                  <TextField label="Vehicle Model" variant="outlined" value={carModel} onChange={e => setCarModel(e.target.value)} required sx={{ flex: '1 1 45%' }} />
                  <TextField label="Plate Number" variant="outlined" value={plateNumber} onChange={e => setPlateNumber(e.target.value)} required sx={{ flex: '1 1 45%' }} />
                  <TextField label="Chassis Number" variant="outlined" value={chassisNumber} onChange={e => setChassisNumber(e.target.value)} sx={{ flex: '1 1 45%' }} />
                  <FormControl sx={{ flex: '1 1 45%' }}>
                    <InputLabel>Status</InputLabel>
                    <Select value={status} label="Status" onChange={e => setStatus(e.target.value)}>
                      <MenuItem value="Running">Running</MenuItem>
                      <MenuItem value="Stopped">Stopped</MenuItem>
                      <MenuItem value="Sold">Sold</MenuItem>
                      <MenuItem value="Damaged">Damaged</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ flex: '1 1 45%' }}>
                    <InputLabel>Branch</InputLabel>
                    <Select value={branchId} label="Branch" onChange={e => setBranchId(e.target.value)}>
                      {branches.map(b => (
                        <MenuItem key={b.branchId} value={b.branchId}>{b.branchName} ({b.branchId})</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
               </Box>
               <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                  <Button variant="outlined" color="secondary" onClick={() => navigate('/FleetViewAdmin')}>Cancel</Button>
                  <Button variant="contained" type="submit" style={{ backgroundColor: '#202a5a' }}>Save Vehicle</Button>
               </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </div>
  );
}
