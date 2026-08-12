import React, { useEffect, useState } from 'react';
import './view.css';
import SidebarDash from '../component/SidebarDash';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { IconButton, styled, Typography, Box, Container, TextField, Button, MenuItem, Select, FormControl, InputLabel, Modal, Grid } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import axios from 'axios';
import { ENDPOINT_URL } from '../apiConfig';
import { Add, Close, ArrowBack, Edit, Delete } from '@mui/icons-material';
import { useSelector, useDispatch } from "react-redux"
import { selectCurrentUser } from '../features/auth/authSlice';
import Logout from '../component/NetworkLogoutIcon';
import MessageAdminView from './MessageAdminView';
import NotificationVIewInfo from './NotificationVIewInfo';
import CssBaseline from '@mui/material/CssBaseline';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataGrid } from '@mui/x-data-grid';
import dayjs from 'dayjs';

const drawerWidth = 240;
const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], { easing: theme.transitions.easing.sharp, duration: theme.transitions.duration.leavingScreen }),
  ...(open && { marginLeft: drawerWidth, width: `calc(100% - ${drawerWidth}px)`, transition: theme.transitions.create(['width', 'margin'], { easing: theme.transitions.easing.sharp, duration: theme.transitions.duration.enteringScreen }) }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  '& .MuiDrawer-paper': { position: 'relative', whiteSpace: 'nowrap', width: drawerWidth, transition: theme.transitions.create('width', { easing: theme.transitions.easing.sharp, duration: theme.transitions.duration.enteringScreen }), boxSizing: 'border-box', ...(!open && { overflowX: 'hidden', transition: theme.transitions.create('width', { easing: theme.transitions.easing.sharp, duration: theme.transitions.duration.leavingScreen }), width: theme.spacing(7), [theme.breakpoints.up('sm')]: { width: theme.spacing(9) } }) },
}));

const modalStyle = { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: '8px' };

export default function FleetFormUpdate() {
  const { id } = useParams();
  const [sideBar, setSideBar] = useState(false);
  const [fleet, setFleet] = useState(null);
  const [status, setStatus] = useState('');
  
  // Grant Access
  const [grantAccess, setGrantAccess] = useState([]);
  
  // Edit Car Modal
  const [carModal, setCarModal] = useState(false);
  const [carData, setCarData] = useState({ carMake: '', carModel: '', plateNumber: '', chassisNumber: '' });


  // Document Modal state
  const [docModal, setDocModal] = useState(false);
  const [isEditDoc, setIsEditDoc] = useState(false);
  const [docData, setDocData] = useState({ _id: '', documentName: '', year: dayjs().format('YYYY'), startDate: '', expiryDate: '', amountPaid: 0, isPaid: false, notes: '' });

  // Oil Change Modal state
  const [oilModal, setOilModal] = useState(false);
  const [isEditOil, setIsEditOil] = useState(false);
  const [oilData, setOilData] = useState({ _id: '', date: '', kilometers: '', notes: '' });

  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFleet();
    fetchAccess();
  }, [id, user]);

  const fetchAccess = async () => {
    try {
      const res = await axios.get(`${ENDPOINT_URL}/grantAccess`);
      if (user?.data?.id) {
         const userAccess = res.data?.data?.filter((row) => row.userID === user.data.id);
         if (userAccess.length > 0) {
            setGrantAccess(userAccess[0].modules);
         }
      }
    } catch (error) {
      console.error('Error fetching access:', error);
    }
  };

  const FleetInfoU = grantAccess.filter((row) => row.moduleName === "Fleet Management" && row.access.editM === true);
  const FleetInfoD = grantAccess.filter((row) => row.moduleName === "Fleet Management" && row.access.deleteM === true);
  const canEdit = user?.data?.role === "Super Admin" || FleetInfoU.length > 0;
  const canDelete = user?.data?.role === "Super Admin" || FleetInfoD.length > 0;

  const fetchFleet = async () => {
    try {
      const res = await axios.get(`${ENDPOINT_URL}/fleet/${id}`);
      setFleet(res.data);
      setStatus(res.data.status);
    } catch (err) {
      toast.error('Failed to load fleet data');
    }
  };

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    try {
      await axios.put(`${ENDPOINT_URL}/fleet/${id}`, { status: newStatus });
      toast.success('Status updated');
      fetchFleet();
    } catch (err) {
      toast.error('Failed to update status');
    }
  };

  const handleUpdateCar = async () => {
    try {
      await axios.put(`${ENDPOINT_URL}/fleet/${id}`, carData);
      toast.success('Car details updated');
      setCarModal(false);
      fetchFleet();
    } catch (err) {
      toast.error('Failed to update car details');
    }
  };

  const handleDeleteCar = async () => {
    if (window.confirm("Are you sure you want to delete this car and all its records?")) {
      try {
        await axios.delete(`${ENDPOINT_URL}/fleet/${id}`);
        toast.success('Car deleted successfully');
        navigate('/FleetViewAdmin');
      } catch (err) {
        toast.error('Failed to delete car');
      }
    }
  };

  const handleAddDocument = async () => {
    try {
      if (isEditDoc) {
        await axios.put(`${ENDPOINT_URL}/fleet/${id}/documents/${docData._id}`, docData);
        toast.success('Document log updated');
      } else {
        await axios.post(`${ENDPOINT_URL}/fleet/${id}/documents`, docData);
        toast.success('Document log added');
      }
      setDocModal(false);
      fetchFleet();
    } catch (err) {
      toast.error('Failed to save document');
    }
  };

  const handleDeleteDocument = async (docId) => {
    if (window.confirm("Are you sure you want to delete this document?")) {
      try {
        await axios.delete(`${ENDPOINT_URL}/fleet/${id}/documents/${docId}`);
        toast.success('Document deleted');
        fetchFleet();
      } catch (err) {
        toast.error('Failed to delete document');
      }
    }
  };

  const handleAddOilChange = async () => {
    try {
      if (isEditOil) {
        await axios.put(`${ENDPOINT_URL}/fleet/${id}/oilChanges/${oilData._id}`, oilData);
        toast.success('Oil change log updated');
      } else {
        await axios.post(`${ENDPOINT_URL}/fleet/${id}/oilChanges`, oilData);
        toast.success('Oil change log added');
      }
      setOilModal(false);
      fetchFleet();
    } catch (err) {
      toast.error('Failed to save oil change');
    }
  };

  const handleDeleteOilChange = async (oilId) => {
    if (window.confirm("Are you sure you want to delete this oil change log?")) {
      try {
        await axios.delete(`${ENDPOINT_URL}/fleet/${id}/oilChanges/${oilId}`);
        toast.success('Oil change deleted');
        fetchFleet();
      } catch (err) {
        toast.error('Failed to delete oil change');
      }
    }
  };

  if (!fleet) return null;

  return (
    <div style={{ backgroundColor: '#f9f9f9', height: '100vh', width: '100%', overflowX: 'hidden' }}>
      <ToastContainer position="top-center" autoClose={3000} />
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={sideBar} style={{ backgroundColor: '#202a5a' }}>
          <Toolbar sx={{ pr: '24px' }}>
            <IconButton edge="start" color="inherit" onClick={() => setSideBar(!sideBar)} sx={{ marginRight: '36px', ...(sideBar && { display: 'none' }) }}><MenuIcon /></IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>Car Details: {fleet.plateNumber}</Typography>
            <NotificationVIewInfo />
            <MessageAdminView name={user?.data?.userName} role={user?.data?.role} />
            <IconButton color="inherit" onClick={() => { localStorage.removeItem('token'); navigate('/LoginSystem'); }}><Logout style={{ color: 'white' }} /></IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={sideBar} onMouseEnter={() => setSideBar(true)} onMouseLeave={() => setSideBar(false)}>
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }}><IconButton onClick={() => setSideBar(!sideBar)}><ChevronLeftIcon /></IconButton></Toolbar>
          <Divider /><List sx={{ height: '700px' }}><SidebarDash /></List>
        </Drawer>

        <Box component="main" sx={{ backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900], flexGrow: 1, height: '100vh', overflow: 'auto' }}>
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            
            {/* General Info */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Button variant="outlined" style={{ borderColor: '#202a5a', color: '#202a5a' }} onClick={() => navigate('/FleetViewAdmin')} startIcon={<ArrowBack />}>Back to List</Button>
            </Box>
            <Box sx={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', mb: 3, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">Overview</Typography>
                <Box>
                  {canEdit && <Button variant="outlined" size="small" startIcon={<Edit />} sx={{ mr: 1 }} onClick={() => { setCarData(fleet); setCarModal(true); }}>Edit Details</Button>}
                  {canDelete && <Button variant="outlined" color="error" size="small" startIcon={<Delete />} onClick={handleDeleteCar}>Delete Car</Button>}
                </Box>
              </Box>
              <Grid container spacing={3} sx={{ mt: 1 }}>
                <Grid item xs={3}><Typography color="textSecondary">Make/Model</Typography><Typography>{fleet.carMake} {fleet.carModel}</Typography></Grid>
                <Grid item xs={3}><Typography color="textSecondary">Plate #</Typography><Typography>{fleet.plateNumber}</Typography></Grid>
                <Grid item xs={3}><Typography color="textSecondary">Chassis #</Typography><Typography>{fleet.chassisNumber || 'N/A'}</Typography></Grid>
                <Grid item xs={3}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Status</InputLabel>
                    <Select value={status} label="Status" onChange={handleStatusChange}>
                      <MenuItem value="Running">Running</MenuItem>
                      <MenuItem value="Stopped">Stopped</MenuItem>
                      <MenuItem value="Sold">Sold</MenuItem>
                      <MenuItem value="Damaged">Damaged</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>

            {/* Document History */}
            <Box sx={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', mb: 3, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">Document History</Typography>
                {canEdit && <Button variant="contained" size="small" style={{ backgroundColor: '#202a5a' }} onClick={() => { setIsEditDoc(false); setDocData({ _id: '', documentName: '', year: dayjs().format('YYYY'), startDate: '', expiryDate: '', amountPaid: 0, isPaid: false, notes: '' }); setDocModal(true); }}><Add /> Add Document</Button>}
              </Box>
              <div style={{ height: 300, width: '100%' }}>
                <DataGrid
                  rows={fleet.documents}
                  getRowId={(row) => row._id}
                  columns={[
                    { field: 'documentName', headerName: 'Document', flex: 1 },
                    { field: 'year', headerName: 'Year', width: 100 },
                    { field: 'startDate', headerName: 'Valid From', flex: 1, valueFormatter: (params) => dayjs(params.value).format('DD/MM/YYYY') },
                    { field: 'expiryDate', headerName: 'Expires', flex: 1, valueFormatter: (params) => dayjs(params.value).format('DD/MM/YYYY') },
                    { field: 'amountPaid', headerName: 'Cost', width: 120 },
                    { field: 'isPaid', headerName: 'Paid?', width: 100, type: 'boolean' },
                    { field: 'actions', headerName: 'Actions', width: 120, renderCell: (params) => (
                        <Box>
                          {canEdit && <IconButton size="small" color="primary" onClick={() => { setIsEditDoc(true); setDocData(params.row); setDocModal(true); }}><Edit fontSize="small"/></IconButton>}
                          {canDelete && <IconButton size="small" color="error" onClick={() => handleDeleteDocument(params.row._id)}><Delete fontSize="small"/></IconButton>}
                        </Box>
                    )}
                  ]}
                  getRowClassName={(params) => {
                    const diff = dayjs(params.row.expiryDate).diff(dayjs(), 'day');
                    if (diff <= 7 && !params.row.isPaid) {
                       return 'row-expiring-soon';
                    }
                    return '';
                  }}
                />
              </div>
            </Box>

            {/* Oil Change History */}
            <Box sx={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">Oil Changes</Typography>
                {canEdit && <Button variant="contained" size="small" style={{ backgroundColor: '#202a5a' }} onClick={() => { setIsEditOil(false); setOilData({ _id: '', date: '', kilometers: '', notes: '' }); setOilModal(true); }}><Add /> Log Oil Change</Button>}
              </Box>
              <div style={{ height: 300, width: '100%' }}>
                <DataGrid
                  rows={fleet.oilChanges}
                  getRowId={(row) => row._id}
                  columns={[
                    { field: 'date', headerName: 'Date', flex: 1, valueFormatter: (params) => dayjs(params.value).format('DD/MM/YYYY') },
                    { field: 'kilometers', headerName: 'Kilometers (KM)', flex: 1 },
                    { field: 'notes', headerName: 'Notes', flex: 2 },
                    { field: 'actions', headerName: 'Actions', width: 120, renderCell: (params) => (
                        <Box>
                          {canEdit && <IconButton size="small" color="primary" onClick={() => { setIsEditOil(true); setOilData(params.row); setOilModal(true); }}><Edit fontSize="small"/></IconButton>}
                          {canDelete && <IconButton size="small" color="error" onClick={() => handleDeleteOilChange(params.row._id)}><Delete fontSize="small"/></IconButton>}
                        </Box>
                    )}
                  ]}
                />
              </div>
            </Box>

          </Container>
        </Box>
      </Box>

      {/* Edit Car Details Modal */}
      <Modal open={carModal} onClose={() => setCarModal(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" mb={2}>Edit Car Details</Typography>
          <TextField fullWidth label="Make" size="small" sx={{ mb: 2 }} value={carData.carMake} onChange={e => setCarData({...carData, carMake: e.target.value})} />
          <TextField fullWidth label="Model" size="small" sx={{ mb: 2 }} value={carData.carModel} onChange={e => setCarData({...carData, carModel: e.target.value})} />
          <TextField fullWidth label="Plate Number" size="small" sx={{ mb: 2 }} value={carData.plateNumber} onChange={e => setCarData({...carData, plateNumber: e.target.value})} />
          <TextField fullWidth label="Chassis Number" size="small" sx={{ mb: 2 }} value={carData.chassisNumber} onChange={e => setCarData({...carData, chassisNumber: e.target.value})} />
          <Button variant="contained" fullWidth style={{ backgroundColor: '#202a5a' }} onClick={handleUpdateCar}>Update Car Details</Button>
        </Box>
      </Modal>

      {/* Add Document Modal */}
      <Modal open={docModal} onClose={() => setDocModal(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" mb={2}>Add Document Payment Log</Typography>
          <TextField fullWidth label="Document Name (e.g. Insurance)" size="small" sx={{ mb: 2 }} value={docData.documentName} onChange={e => setDocData({...docData, documentName: e.target.value})} />
          <TextField fullWidth label="Year" size="small" sx={{ mb: 2 }} value={docData.year} onChange={e => setDocData({...docData, year: e.target.value})} />
          <TextField fullWidth type="date" label="Start Date" size="small" InputLabelProps={{ shrink: true }} sx={{ mb: 2 }} value={docData.startDate} onChange={e => setDocData({...docData, startDate: e.target.value})} />
          <TextField fullWidth type="date" label="Expiry Date" size="small" InputLabelProps={{ shrink: true }} sx={{ mb: 2 }} value={docData.expiryDate} onChange={e => setDocData({...docData, expiryDate: e.target.value})} />
          <TextField fullWidth type="number" label="Amount Paid" size="small" sx={{ mb: 2 }} value={docData.amountPaid} onChange={e => setDocData({...docData, amountPaid: e.target.value})} />
          <FormControl fullWidth size="small" sx={{ mb: 2 }}>
            <InputLabel>Is Paid?</InputLabel>
            <Select value={docData.isPaid} label="Is Paid?" onChange={e => setDocData({...docData, isPaid: e.target.value})}>
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" fullWidth style={{ backgroundColor: '#202a5a' }} onClick={handleAddDocument}>Save Document</Button>
        </Box>
      </Modal>

      {/* Add Oil Change Modal */}
      <Modal open={oilModal} onClose={() => setOilModal(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" mb={2}>Log Oil Change</Typography>
          <TextField fullWidth type="date" label="Date" size="small" InputLabelProps={{ shrink: true }} sx={{ mb: 2 }} value={oilData.date} onChange={e => setOilData({...oilData, date: e.target.value})} />
          <TextField fullWidth type="number" label="Kilometers (KM)" size="small" sx={{ mb: 2 }} value={oilData.kilometers} onChange={e => setOilData({...oilData, kilometers: e.target.value})} />
          <TextField fullWidth label="Notes" size="small" multiline rows={3} sx={{ mb: 2 }} value={oilData.notes} onChange={e => setOilData({...oilData, notes: e.target.value})} />
          <Button variant="contained" fullWidth style={{ backgroundColor: '#202a5a' }} onClick={handleAddOilChange}>Save Log</Button>
        </Box>
      </Modal>

    </div>
  );
}
