import React, { useEffect, useState } from 'react';
import '../../view.css';
import '../Chartview.css';
import SidebarDash1 from '../../../component/SidebarDash1';
import {
  IconButton,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  styled,
  Box,
  Checkbox,
  Button,
  Grid,
  Divider,
  Chip
} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ArrowBack from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from 'axios';
import dayjs from 'dayjs';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ENDPOINT_URL } from '../../../apiConfig';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '../../../component/NetworkLogoutIcon';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import MessageAdminView from '../../MessageAdminView';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9)
        }
      })
    }
  })
);

function DeliveryNoteUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  const [sideBar, setSideBar] = useState(true);
  const toggleDrawer = () => setSideBar(!sideBar);

  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId && storesUserId !== 'null') {
        try {
          const res = await axios.get(`${ENDPOINT_URL}/get-employeeuser/${storesUserId}`);
          dispatch(
            setUser({
              userName: res.data.data.employeeName,
              role: res.data.data.role,
              id: res.data.data._id
            })
          );
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      } else {
        navigate('/');
      }
    };
    fetchUser();
  }, [dispatch, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/');
  };

  const [deliveryName, setDeliveryName] = useState('');
  const [deliveryDate, setDeliveryDate] = useState(dayjs());
  const [status, setStatus] = useState('Dispatched');
  const [reason, setReason] = useState('');
  const [referenceName, setReferenceName] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [driverName, setDriverName] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [description, setDescription] = useState('');
  const [rows, setRows] = useState([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchDN = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/get-deliveryNote/${id}`);
        const dn = res.data?.data;
        if (!dn) return;
        setDeliveryName(
          dn.deliveryName || `DN-${String(dn.deliveryNumber || 0).padStart(6, '0')}`
        );
        setDeliveryDate(dn.deliveryDate ? dayjs(dn.deliveryDate) : dayjs());
        setStatus(dn.status || 'Dispatched');
        setReason(dn.reason || '');
        setReferenceName(dn.reference?.referenceNumber || dn.reference?.referenceName || '');
        setCustomerName(dn.customerName?.customerName || '');
        setDriverName(dn.driverName || '');
        setVehicleNumber(dn.vehicleNumber || '');
        setDeliveryAddress(dn.deliveryAddress || '');
        setDescription(dn.description || '');
        setRows(
          (dn.itemsQtyArray || []).map((it) => ({
            ...it,
            checked: it.checked !== false,
            orderedQty: Number(it.orderedQty ?? 0),
            deliverQty: Number(it.deliverQty ?? it.newItemOut ?? 0)
          }))
        );
      } catch (err) {
        console.error('Error loading delivery note:', err);
      }
    };
    fetchDN();
  }, [id]);

  const handleRowChange = (idRow, field, value) => {
    setRows((prev) =>
      prev.map((r) => {
        if (r.idRow !== idRow) return r;
        if (field === 'deliverQty') {
          const maxAllowed = Math.max(0, Number(r.orderedQty || 0));
          if (value === '') {
            return { ...r, deliverQty: '', checked: false };
          }
          let nextDeliv = Math.max(0, Number(value) || 0);
          if (nextDeliv > maxAllowed) {
            nextDeliv = maxAllowed;
            toast.warning(`Deliver Qty cannot exceed Total Qty (${maxAllowed}).`, {
              toastId: `dn-edit-max-${idRow}`
            });
          }
          return { ...r, deliverQty: nextDeliv, checked: Number(nextDeliv) > 0 };
        }
        return { ...r, [field]: value };
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkedRows = rows.filter((r) => r.checked && Number(r.deliverQty) > 0);
    if (checkedRows.length === 0) {
      toast.error('Please keep at least one checked item with Deliver Qty > 0.');
      return;
    }
    const overRow = checkedRows.find((r) => Number(r.deliverQty) > Math.max(0, Number(r.orderedQty || 0)));
    if (overRow) {
      toast.error('Deliver Qty cannot exceed Total Qty.');
      return;
    }

    try {
      setSaving(true);
      await axios.put(`${ENDPOINT_URL}/update-deliveryNote/${id}`, {
        deliveryDate: deliveryDate ? deliveryDate.toDate() : new Date(),
        status,
        driverName: driverName.trim().toUpperCase(),
        vehicleNumber: vehicleNumber.trim().toUpperCase(),
        deliveryAddress: deliveryAddress.trim().toUpperCase(),
        description: description.trim().toUpperCase(),
        itemsQtyArray: checkedRows.map((r) => ({
          ...r,
          orderedQty: Number(r.orderedQty || 0),
          deliverQty: Number(r.deliverQty || 0),
          checked: true
        }))
      });
      toast.success('Delivery Note updated successfully!');
      navigate(`/DeliveryNoteViewInformation/${id}`);
    } catch (err) {
      console.error('Update failed:', err);
      toast.error('Failed to update Delivery Note.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="Homeemployee">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={sideBar} sx={{ backgroundColor: '#30368a' }}>
          <Toolbar sx={{ pr: '24px' }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleDrawer}
              sx={{ marginRight: '36px', ...(sideBar && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton color="inherit" onClick={() => navigate(-1)} sx={{ mr: 1 }}>
              <ArrowBack />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
              Update Delivery Note ({deliveryName})
            </Typography>
            <NotificationVIewInfo />
            <MessageAdminView name={user.data.userName} role={user.data.role} />
            <IconButton color="inherit" onClick={handleLogout}>
              <Logout />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={sideBar}>
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }}>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <SidebarDash1 />
          </List>
        </Drawer>
        <Box component="main" sx={{ backgroundColor: '#f5f5f5', flexGrow: 1, height: '100vh', overflow: 'auto' }}>
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 3, mb: 4 }}>
            <Paper sx={{ p: 3, borderRadius: 2 }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={3}>
                    <TextField fullWidth size="small" label="Delivery Note #" value={deliveryName} disabled />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Delivery Date"
                        value={deliveryDate}
                        onChange={(val) => setDeliveryDate(val)}
                        format="DD/MM/YYYY"
                        slotProps={{ textField: { fullWidth: true, size: 'small' } }}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <FormControl fullWidth size="small">
                      <InputLabel>Status</InputLabel>
                      <Select value={status} label="Status" onChange={(e) => setStatus(e.target.value)}>
                        <MenuItem value="Dispatched">Dispatched</MenuItem>
                        <MenuItem value="Delivered">Delivered</MenuItem>
                        <MenuItem value="Cancelled">Cancelled</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      fullWidth
                      size="small"
                      label={`${reason} Reference`}
                      value={referenceName}
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField fullWidth size="small" label="Customer" value={customerName} disabled />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Driver Name"
                      value={driverName}
                      onChange={(e) => setDriverName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Vehicle / Plate"
                      value={vehicleNumber}
                      onChange={(e) => setVehicleNumber(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Delivery Address"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Notes / Remarks"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Grid>
                </Grid>

                <Box sx={{ mt: 3, overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#202a5a', color: '#ffffff' }}>
                        <th style={{ padding: '8px', width: '44px', textAlign: 'center' }}>Include</th>
                        <th style={{ padding: '8px', textAlign: 'left' }}>Item & Description</th>
                        <th style={{ padding: '8px', width: '130px', textAlign: 'center' }}>
                          Total Qty
                        </th>
                        <th style={{ padding: '8px', width: '130px', textAlign: 'center' }}>
                          Deliver Qty
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row) => (
                        <tr key={row.idRow} style={{ borderBottom: '1px solid #e2e8f0' }}>
                          <td style={{ textAlign: 'center', padding: '6px' }}>
                            <Checkbox
                              checked={Boolean(row.checked)}
                              onChange={(e) => handleRowChange(row.idRow, 'checked', e.target.checked)}
                            />
                          </td>
                          <td style={{ padding: '8px' }}>
                            <Typography sx={{ fontWeight: 700, fontSize: '14px' }}>
                              {typeof row.itemName === 'string'
                                ? row.itemName
                                : row.itemName?.itemName || row.itemDescription || 'Item'}
                            </Typography>
                            {row.itemDescription && (
                              <Typography sx={{ fontSize: '12px', color: '#475569' }}>
                                {row.itemDescription}
                              </Typography>
                            )}
                          </td>
                          <td style={{ textAlign: 'center', padding: '6px' }}>
                            <Chip
                              label={row.orderedQty}
                              size="small"
                              variant="outlined"
                              sx={{ minWidth: '56px', fontWeight: 700 }}
                            />
                          </td>
                          <td style={{ textAlign: 'center', padding: '6px' }}>
                            <TextField
                              type="number"
                              size="small"
                              value={row.deliverQty}
                              onChange={(e) => handleRowChange(row.idRow, 'deliverQty', e.target.value)}
                              inputProps={{
                                min: 0,
                                max: Math.max(0, Number(row.orderedQty || 0)),
                                step: 'any',
                                style: { textAlign: 'center' }
                              }}
                              sx={{ width: '105px' }}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Box>

                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                  <Button variant="outlined" onClick={() => navigate(-1)}>
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={saving}
                    startIcon={<SaveIcon />}
                    sx={{ backgroundColor: '#202a5a', '&:hover': { backgroundColor: '#161d40' } }}
                  >
                    {saving ? 'Saving...' : 'Save Changes'}
                  </Button>
                </Box>
              </form>
            </Paper>
          </Container>
        </Box>
      </Box>
    </div>
  );
}

export default DeliveryNoteUpdate;
