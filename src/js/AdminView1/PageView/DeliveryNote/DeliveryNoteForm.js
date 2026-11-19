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
  Autocomplete,
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
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from 'axios';
import dayjs from 'dayjs';
import { v4 } from 'uuid';
import { useLocation, useNavigate } from 'react-router-dom';
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

function isDividerItem(item) {
  return Boolean(
    item?.newDescription &&
      String(item.newDescription).trim() !== '' &&
      (!item.itemName ||
        (typeof item.itemName === 'string'
          ? item.itemName.trim() === ''
          : !item.itemName._id && !item.itemName.itemName))
  );
}

function getItemDisplayTitle(item) {
  const rawName =
    typeof item?.itemName === 'string' ? item.itemName : item?.itemName?.itemName || '';
  if (String(rawName).trim().toLowerCase() === 'empty') {
    return item?.itemDescription || 'Custom Item';
  }
  return rawName || item?.itemDescription || 'Item';
}

function DeliveryNoteForm() {
  const navigate = useNavigate();
  const location = useLocation();
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

  const prefillState = location.state || {};
  const [deliveryDate, setDeliveryDate] = useState(dayjs());
  const [deliveryNumber, setDeliveryNumber] = useState(1);
  const [reason, setReason] = useState(prefillState.reason || '');
  const [invoices, setInvoices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [selectedRef, setSelectedRef] = useState(null);
  const [customerInfo, setCustomerInfo] = useState({
    _id: '',
    customerName: '',
    phone: '',
    address: ''
  });
  const [driverName, setDriverName] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [description, setDescription] = useState('');
  const [rows, setRows] = useState([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchBase = async () => {
      try {
        const [resLast, resInv, resProj, resPur, resCust] = await Promise.all([
          axios.get(`${ENDPOINT_URL}/get-last-saved-deliveryNote`),
          axios.get(`${ENDPOINT_URL}/invoice?summary=true`),
          axios.get(`${ENDPOINT_URL}/projects`),
          axios.get(`${ENDPOINT_URL}/purchase?summary=true`),
          axios.get(`${ENDPOINT_URL}/customer?summary=true`)
        ]);
        const lastNum = Number(resLast.data?.deliveryNumber || 0);
        setDeliveryNumber(lastNum + 1);
        setInvoices((resInv.data?.data || []).slice());
        setProjects((resProj.data?.data || []).slice().reverse());
        setPurchases(resPur.data?.data || []);
        setCustomers(resCust.data?.data || []);
      } catch (err) {
        console.error('Error loading base data for Delivery Note:', err);
      }
    };
    fetchBase();
  }, []);

  const loadReferenceItems = async (refType, refObj) => {
    if (!refObj) {
      setRows([]);
      setCustomerInfo({ _id: '', customerName: '', phone: '', address: '' });
      return;
    }

    const custRaw = refObj.customerName;
    const custId = typeof custRaw === 'object' && custRaw !== null ? custRaw._id || '' : '';
    const custNameStr =
      typeof custRaw === 'string'
        ? custRaw
        : custRaw?.customerName || custRaw?.Customer || custRaw?.companyName || '';
    const custRecord = customers.find(
      (c) => (custId && String(c._id) === String(custId)) || c.Customer === custNameStr
    );
    const addr = custRecord?.billingAddress || custRecord?.shippingAddress || '';
    const phone = custRecord?.customerPhone || custRecord?.customerPhone1 || '';

    setCustomerInfo({
      _id: custId || custRecord?._id || '',
      customerName: custNameStr,
      phone,
      address: addr
    });
    if (addr && !deliveryAddress) {
      setDeliveryAddress(addr);
    }

    let sourceItems = [];
    if (refType === 'Invoice') {
      try {
        const fullInv = await axios.get(`${ENDPOINT_URL}/get-invoice/${refObj._id}`);
        sourceItems = fullInv.data?.data?.items || refObj.items || [];
      } catch (_) {
        sourceItems = refObj.items || [];
      }
    } else if (refType === 'Project') {
      const linkedPurchases = purchases.filter(
        (p) =>
          String(p.projectName?._id || p.projectName || '') === String(refObj._id) ||
          (p.projectName?.projectName && p.projectName.projectName === refObj.projectName)
      );
      if (linkedPurchases.length > 0) {
        sourceItems = linkedPurchases.flatMap((p) => p.items || []);
      } else {
        const linkedInvs = invoices.filter(
          (inv) =>
            String(inv.projectId || inv.Ref?._id || '') === String(refObj._id) ||
            (inv.invoiceSubject && inv.invoiceSubject === refObj.projectName)
        );
        sourceItems = linkedInvs.flatMap((inv) => inv.items || []);
      }
    }

    // Load prior Delivery Notes for this reference to compute Prev. Delivered
    const prevDeliveredMap = {};
    try {
      const resPrev = await axios.get(
        `${ENDPOINT_URL}/deliveryNote?referenceId=${encodeURIComponent(refObj._id)}`
      );
      (resPrev.data?.data || [])
        .filter((dn) => String(dn.status || '').toLowerCase() !== 'cancelled')
        .forEach((dn) => {
          (dn.itemsQtyArray || []).forEach((it) => {
            const key = String(it.idRow || it.itemName?._id || it.itemDescription || '');
            if (!key) return;
            prevDeliveredMap[key] =
              (prevDeliveredMap[key] || 0) + Number(it.deliverQty ?? it.newItemOut ?? 0);
          });
        });
    } catch (_) {}

    const mappedRows = sourceItems
      .filter((it) => !isDividerItem(it))
      .map((it) => {
        const rowId = it.idRow || v4();
        const key = String(it.idRow || it.itemName?._id || it.itemDescription || '');
        const totalQty = Number(it.itemQty || 0);
        const prevDelivered = Number(prevDeliveredMap[key] || 0);
        const remaining = Math.max(0, totalQty - prevDelivered);
        return {
          idRow: rowId,
          itemName: it.itemName || {},
          itemDescription: it.itemDescription || '',
          unit: it.unit || it.itemName?.unit || 'PCS',
          orderedQty: totalQty,
          previouslyDeliveredQty: prevDelivered,
          deliverQty: remaining > 0 ? remaining : totalQty,
          checked: remaining > 0
        };
      });

    setRows(mappedRows);
  };

  // Auto-select if navigated from Invoice or Project OPTIONS menu
  useEffect(() => {
    if (!prefillState.reason || !prefillState.referenceId) return;
    if (prefillState.reason === 'Invoice' && invoices.length > 0 && !selectedRef) {
      const found = invoices.find((i) => String(i._id) === String(prefillState.referenceId));
      if (found) {
        setReason('Invoice');
        setSelectedRef(found);
        loadReferenceItems('Invoice', found);
      }
    } else if (prefillState.reason === 'Project' && projects.length > 0 && !selectedRef) {
      const found = projects.find((p) => String(p._id) === String(prefillState.referenceId));
      if (found) {
        setReason('Project');
        setSelectedRef(found);
        loadReferenceItems('Project', found);
      }
    }
  }, [invoices, projects]);

  const handleReasonChange = (e) => {
    setReason(e.target.value);
    setSelectedRef(null);
    setRows([]);
    setCustomerInfo({ _id: '', customerName: '', phone: '', address: '' });
  };

  const handleSelectReference = (newVal) => {
    setSelectedRef(newVal);
    loadReferenceItems(reason, newVal);
  };

  const allChecked = rows.length > 0 && rows.every((r) => r.checked);
  const handleToggleAll = (checked) => {
    setRows((prev) => prev.map((r) => ({ ...r, checked })));
  };

  const handleRowChange = (idRow, field, value) => {
    setRows((prev) =>
      prev.map((r) => {
        if (r.idRow !== idRow) return r;
        if (field === 'deliverQty') {
          const maxAllowed = Math.max(
            0,
            Number(r.orderedQty || 0) - Number(r.previouslyDeliveredQty || 0)
          );
          if (value === '') {
            return { ...r, deliverQty: '', checked: false };
          }
          let nextDeliv = Math.max(0, Number(value) || 0);
          if (nextDeliv > maxAllowed) {
            nextDeliv = maxAllowed;
            toast.warning(`Deliver Qty cannot exceed remaining Total Qty (${maxAllowed}).`, {
              toastId: `dn-max-${idRow}`
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
    if (!reason || !selectedRef) {
      toast.error('Please select a Reason and Reference (Invoice or Project).');
      return;
    }
    const checkedRows = rows.filter((r) => r.checked && Number(r.deliverQty) > 0);
    if (checkedRows.length === 0) {
      toast.error('Please check at least one item with Deliver Qty > 0.');
      return;
    }
    const overRow = checkedRows.find((r) => {
      const maxAllowed = Math.max(0, Number(r.orderedQty || 0) - Number(r.previouslyDeliveredQty || 0));
      return Number(r.deliverQty) > maxAllowed;
    });
    if (overRow) {
      toast.error('Deliver Qty cannot exceed remaining Total Qty.');
      return;
    }

    const refNumber =
      reason === 'Invoice'
        ? selectedRef.invoiceName ||
          `INV-${String(selectedRef.invoiceNumber || 0).padStart(6, '0')}`
        : `P-${String(selectedRef.projectNumber || 0).padStart(6, '0')}`;
    const refSubject =
      reason === 'Invoice'
        ? selectedRef.invoiceSubject || ''
        : selectedRef.projectName || '';

    const payload = {
      deliveryNumber,
      deliveryDate: deliveryDate ? deliveryDate.toDate() : new Date(),
      reason,
      reference: {
        _id: String(selectedRef._id),
        referenceName: `${refNumber} | ${customerInfo.customerName || refSubject}`,
        referenceNumber: refNumber,
        subject: refSubject
      },
      customerName: customerInfo,
      itemsQtyArray: checkedRows.map((r) => ({
        idRow: r.idRow,
        itemName: r.itemName,
        itemDescription: r.itemDescription,
        unit: r.unit,
        orderedQty: Number(r.orderedQty || 0),
        previouslyDeliveredQty: Number(r.previouslyDeliveredQty || 0),
        deliverQty: Number(r.deliverQty || 0),
        checked: true
      })),
      driverName: driverName.trim().toUpperCase(),
      vehicleNumber: vehicleNumber.trim().toUpperCase(),
      deliveryAddress: deliveryAddress.trim().toUpperCase(),
      description: description.trim().toUpperCase(),
      status: 'Dispatched',
      Create: {
        person: user?.data?.userName || 'System',
        dateComment: dayjs(new Date()).format('DD/MM/YYYY-HH:mm')
      }
    };

    try {
      setSaving(true);
      const res = await axios.post(`${ENDPOINT_URL}/create-deliveryNote`, payload);
      toast.success('Delivery Note created successfully!');
      const createdId = res.data?.data?._id;
      if (createdId) {
        navigate(`/DeliveryNoteViewInformation/${createdId}`);
      } else {
        navigate('/DeliveryNoteViewAdmin');
      }
    } catch (error) {
      console.error('Error creating delivery note:', error);
      toast.error('Failed to create Delivery Note.');
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
              Create Delivery Note (DN-{String(deliveryNumber).padStart(6, '0')})
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
        <Box
          component="main"
          sx={{
            backgroundColor: '#f5f5f5',
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto'
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 3, mb: 4 }}>
            <Paper sx={{ p: 3, borderRadius: 2 }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={3}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Delivery Note #"
                      value={`DN-${String(deliveryNumber).padStart(6, '0')}`}
                      disabled
                    />
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
                    <FormControl fullWidth size="small" required>
                      <InputLabel>Reason</InputLabel>
                      <Select value={reason} label="Reason" onChange={handleReasonChange}>
                        <MenuItem value="Invoice">Invoice</MenuItem>
                        <MenuItem value="Project">Project</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Customer"
                      value={customerInfo.customerName || ''}
                      disabled
                    />
                  </Grid>

                  <Grid item xs={12}>
                    {reason === 'Invoice' && (
                      <Autocomplete
                        options={invoices}
                        value={selectedRef}
                        onChange={(_, val) => handleSelectReference(val)}
                        getOptionLabel={(opt) => {
                          if (!opt) return '';
                          const num =
                            opt.invoiceName ||
                            `INV-${String(opt.invoiceNumber || 0).padStart(6, '0')}`;
                          const cust =
                            opt.customerName?.customerName ||
                            (typeof opt.customerName === 'string' ? opt.customerName : '');
                          return `${num} | ${cust}${opt.invoiceSubject ? ` | ${opt.invoiceSubject}` : ''}`;
                        }}
                        renderInput={(params) => (
                          <TextField {...params} label="Select Invoice" size="small" required />
                        )}
                      />
                    )}
                    {reason === 'Project' && (
                      <Autocomplete
                        options={projects}
                        value={selectedRef}
                        onChange={(_, val) => handleSelectReference(val)}
                        getOptionLabel={(opt) => {
                          if (!opt) return '';
                          const num = `P-${String(opt.projectNumber || 0).padStart(6, '0')}`;
                          const cust =
                            opt.customerName?.customerName ||
                            (typeof opt.customerName === 'string' ? opt.customerName : '');
                          return `${num} | ${opt.projectName || ''}${cust ? ` (${cust})` : ''}`;
                        }}
                        renderInput={(params) => (
                          <TextField {...params} label="Select Project" size="small" required />
                        )}
                      />
                    )}
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
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Delivery Address"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Notes / Remarks"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Grid>
                </Grid>

                {/* Items Selection Table */}
                <Box sx={{ mt: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#202a5a' }}>
                      Select Items to Include in Delivery Note
                    </Typography>
                    <Chip
                      label={`${rows.filter((r) => r.checked).length} of ${rows.length} selected`}
                      color="primary"
                      size="small"
                    />
                  </Box>

                  <Box sx={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#202a5a', color: '#ffffff' }}>
                          <th style={{ padding: '8px', width: '44px', textAlign: 'center' }}>
                            <Checkbox
                              checked={allChecked}
                              onChange={(e) => handleToggleAll(e.target.checked)}
                              sx={{ color: '#fff', '&.Mui-checked': { color: '#fff' } }}
                            />
                          </th>
                          <th style={{ padding: '8px', textAlign: 'left' }}>Item & Description</th>
                          <th style={{ padding: '8px', width: '120px', textAlign: 'center' }}>
                            Total Qty
                          </th>
                          <th style={{ padding: '8px', width: '120px', textAlign: 'center' }}>
                            Prev. Delivered
                          </th>
                          <th style={{ padding: '8px', width: '130px', textAlign: 'center' }}>
                            Deliver Qty
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {rows.length === 0 ? (
                          <tr>
                            <td colSpan={5} style={{ padding: '24px', textAlign: 'center', color: '#64748b' }}>
                              {selectedRef
                                ? 'No items found on this Invoice/Project.'
                                : 'Select Reason and Invoice/Project above to load items.'}
                            </td>
                          </tr>
                        ) : (
                          rows.map((row) => (
                            <tr
                              key={row.idRow}
                              style={{
                                borderBottom: '1px solid #e2e8f0',
                                backgroundColor: row.checked ? '#f0f7ff' : '#ffffff'
                              }}
                            >
                              <td style={{ textAlign: 'center', padding: '6px' }}>
                                <Checkbox
                                  checked={Boolean(row.checked)}
                                  onChange={(e) =>
                                    handleRowChange(row.idRow, 'checked', e.target.checked)
                                  }
                                />
                              </td>
                              <td style={{ padding: '8px' }}>
                                <Typography sx={{ fontWeight: 700, fontSize: '14px' }}>
                                  {getItemDisplayTitle(row)}
                                </Typography>
                                {row.itemDescription && (
                                  <Typography sx={{ fontSize: '12px', color: '#475569' }}>
                                    {row.itemDescription}
                                  </Typography>
                                )}
                              </td>
                              <td style={{ padding: '6px', textAlign: 'center' }}>
                                <Chip
                                  label={row.orderedQty}
                                  size="small"
                                  variant="outlined"
                                  sx={{ minWidth: '56px', fontWeight: 700 }}
                                />
                              </td>
                              <td style={{ padding: '6px', textAlign: 'center' }}>
                                <Chip
                                  label={row.previouslyDeliveredQty}
                                  size="small"
                                  variant="outlined"
                                />
                              </td>
                              <td style={{ padding: '6px', textAlign: 'center' }}>
                                <TextField
                                  type="number"
                                  size="small"
                                  value={row.deliverQty}
                                  onChange={(e) =>
                                    handleRowChange(row.idRow, 'deliverQty', e.target.value)
                                  }
                                  inputProps={{
                                    min: 0,
                                    max: Math.max(
                                      0,
                                      Number(row.orderedQty || 0) - Number(row.previouslyDeliveredQty || 0)
                                    ),
                                    step: 'any',
                                    style: { textAlign: 'center' }
                                  }}
                                  sx={{ width: '105px', backgroundColor: '#fff' }}
                                />
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </Box>
                </Box>

                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                  <Button variant="outlined" onClick={() => navigate('/DeliveryNoteViewAdmin')}>
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={saving}
                    startIcon={<LocalShippingIcon />}
                    sx={{ backgroundColor: '#202a5a', '&:hover': { backgroundColor: '#161d40' } }}
                  >
                    {saving ? 'Saving...' : 'Save & View / Print'}
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

export default DeliveryNoteForm;
