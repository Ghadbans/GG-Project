import React, { useEffect, useState, useMemo } from 'react';
import SidebarDash from '../../../component/SidebarDash';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { cachedGet } from '../../../utils/apiCache';
import {
    Container, Typography, Paper, Grid, TextField, Button, Box,
    MenuItem, Table, TableBody, TableCell, TableHead, TableRow,
    CssBaseline, AppBar, Toolbar, Drawer, Divider, List, TableContainer, IconButton, Alert
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import MessageAdminView from '../../MessageAdminView';
import Logout from '../../../component/NetworkLogoutIcon';
import { logOut } from '../../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import { ENDPOINT_URL } from '../../../apiConfig';

import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

// Global helper to parse dates robustly across formats
const parseDate = (d) => {
    if (!d) return dayjs(null);
    if (typeof d === 'string') {
        const formats = [
            'YYYY-MM-DD',
            'DD/MM/YYYY',
            'D/M/YYYY',
            'DD-MM-YYYY',
            'DD/MM/YY',
            'D/M/YY',
            'YYYY-MM-DDTHH:mm:ss.SSSZ'
        ];
        let parsed = dayjs(d, formats, true);
        if (!parsed.isValid()) parsed = dayjs(d); // Fallback to native
        return parsed;
    }
    return dayjs(d);
};

const drawerWidth = 240;

const MainContent = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

function BlockSalesView() {
    const navigate = useNavigate();
    const user = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const [sideBar, setSideBar] = useState(true);

    const handleLogout = () => {
        localStorage.removeItem('user');
        dispatch(logOut());
        navigate('/');
    };

    const [configs, setConfigs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch Access
                const accRes = await cachedGet(`${ENDPOINT_URL}/grantAccess`);
                const userAccess = accRes.data?.data?.find(row => row.userID === user.data.id);
                const isGG = user.data.userName === 'GG';
                if (userAccess) {
                    const blockAccess = userAccess.modules.find(m => m.moduleName === 'Block-Factory')?.access;
                    if (!isGG && !blockAccess?.readM) {
                        toast.error("You don't have permission to access Block Sales.");
                        navigate('/AdminHome');
                    }
                } else if (!isGG) {
                    navigate('/AdminHome');
                }

                // Fetch Configs
                const configRes = await axios.get(`${ENDPOINT_URL}/block-config`);
                if (configRes.data && configRes.data.data && Array.isArray(configRes.data.data)) {
                    const configArr = configRes.data.data;
                    const config = configArr.find(c => c.blockType === "GLOBAL") || configArr[0];
                    setConfigs(config);
                }

                // Fetch Sales
                const salesRes = await axios.get(`${ENDPOINT_URL}/block-sales`);
                if (salesRes.data.data) setRecentSales(salesRes.data.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (user.data.id) fetchData();
    }, [user, navigate]);
    const [salesData, setSalesData] = useState({
        date: dayjs().format('YYYY-MM-DD'),
        clientName: "",
        blockType: "",
        quantitySold: 0,
        pricePerUnit: 0,
        totalAmount: 0
    });
    const [recentSales, setRecentSales] = useState([]);
    // Unified Date range for sales logs - Start empty as requested
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);

    const [editId, setEditId] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredSales = useMemo(() => {
        let baseList = recentSales;

        // Apply Date Filter (Robust native Date comparison to prevent crashes)
        if (fromDate && toDate) {
            const fromD = parseDate(fromDate);
            const toD = parseDate(toDate);
            
            if (fromD.isValid() && toD.isValid()) {
                const fromTime = fromD.startOf('day').toDate().getTime();
                const toTime = toD.endOf('day').toDate().getTime();
                
                if (fromTime <= toTime) {
                    baseList = baseList.filter(row => {
                        const rowDate = parseDate(row.date);
                        if (!rowDate.isValid()) return false;
                        const rowTime = rowDate.toDate().getTime();
                        return rowTime >= fromTime && rowTime <= toTime;
                    });
                } else {
                    baseList = []; // Inverted range
                }
            } else {
                baseList = [];
            }
        } else {
            // If user wants it EMPTY by default when no range is selected:
            baseList = [];
        }

        if (!searchTerm) return baseList;
        const s = searchTerm.toLowerCase();
        return baseList.filter(row =>
            (row.clientName || "").toLowerCase().includes(s) ||
            (row.blockType || "").toLowerCase().includes(s)
        );
    }, [recentSales, searchTerm, fromDate, toDate]);

    const toggleDrawer = () => setSideBar(!sideBar);


    const handleInputChange = (field, value) => {
        const updatedData = { ...salesData, [field]: value };
        if (field === 'quantitySold' || field === 'pricePerUnit') {
            updatedData.totalAmount = parseFloat(updatedData.quantitySold) * parseFloat(updatedData.pricePerUnit);
        }
        setSalesData(updatedData);
    };

    const handleSave = async () => {
        if (isSubmitting) return;
        setIsSubmitting(true);
        try {
            const record = { ...salesData, synced: true, updateS: true };
            const payload = { ...record };
            delete payload._id;
            delete payload.id;

            if (editId) {
                const targetId = salesData._id || editId;
                await axios.post(`${ENDPOINT_URL}/update-block-sales`, { id: targetId, ...payload });
                toast.success("Sales record updated!");
            } else {
                await axios.post(`${ENDPOINT_URL}/create-block-sales`, payload);
                toast.success("Sales record saved!");
            }

            // Silent Refresh
            const salesRes = await axios.get(`${ENDPOINT_URL}/block-sales`);
            if (salesRes.data.data) setRecentSales(salesRes.data.data);

            setSalesData({
                ...salesData, // Keep the date and meta
                clientName: "",
                blockType: "",
                quantitySold: 0,
                pricePerUnit: 0,
                totalAmount: 0
            });
            setEditId(null);
        } catch (error) {
            toast.error("Error saving record");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleEdit = (record) => {
        setSalesData(record);
        setEditId(record._id || record.id);
        toast.info("Editing sales record.");
    };

    const handleDelete = async (r) => {
        if (window.confirm("Are you sure you want to delete this sales record?")) {
            const serverId = r._id || r.id;
            try {
                if (typeof serverId === 'string' && serverId.length > 10) {
                    try {
                        await axios.post(`${ENDPOINT_URL}/delete-block-sales`, { id: serverId });
                    } catch (err) {
                        console.error("Backend delete failed", err);
                    }
                }
                const salesRes = await axios.get(`${ENDPOINT_URL}/block-sales`);
                if (salesRes.data.data) setRecentSales(salesRes.data.data);
                toast.success("Sales record deleted!");
            } catch (error) {
                toast.error("Error deleting record.");
            }
        }
    };

    return (
        <Box sx={{ display: 'flex', width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#30368a' }}>
                <Toolbar>
                    <IconButton color="inherit" onClick={toggleDrawer} edge="start" sx={{ mr: 2 }}><MenuIcon /></IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>Block Sales Tracking</Typography>
                    <NotificationVIewInfo />
                    <MessageAdminView name={user.data.userName} role={user.data.role} />
                    <Typography sx={{ marginLeft: '10px', marginRight: '10px' }}>{user.data.userName}</Typography>
                    <IconButton color="inherit" onClick={handleLogout}>
                        <Logout style={{ color: 'white' }} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                anchor="left"
                open={sideBar}
                sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' } }}
            >
                <Toolbar /><Box sx={{ overflow: 'auto' }}><List><SidebarDash /></List></Box>
            </Drawer>
            <MainContent open={sideBar}>
                <Toolbar />
                <Box sx={{ mt: 2, width: '100%', px: 0, m: 0 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
                                <Typography variant="h6" sx={{ mb: 2 }}>New Sales Record</Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={4}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                label="Date"
                                                value={dayjs(salesData.date)}
                                                onChange={(newValue) => setSalesData({ ...salesData, date: newValue ? newValue.format('YYYY-MM-DD') : "" })}
                                                format="DD/MM/YYYY"
                                                slotProps={{ textField: { fullWidth: true } }}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField fullWidth label="Client Name" value={salesData.clientName} onChange={(e) => handleInputChange('clientName', e.target.value)} />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField fullWidth select label="Block Type" value={salesData.blockType} onChange={(e) => handleInputChange('blockType', e.target.value)}>
                                            {["Block 50", "Block 33", "Block 20", "Block 15", "Block 10", "Block 14", "Block 12"].map(b => (
                                                <MenuItem key={b} value={b}>{b}</MenuItem>
                                            ))}
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField fullWidth type="number" label="Quantity Sold" value={salesData.quantitySold} onChange={(e) => handleInputChange('quantitySold', e.target.value)} />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField fullWidth type="number" label="Price Per Unit ($)" value={salesData.pricePerUnit} onChange={(e) => handleInputChange('pricePerUnit', e.target.value)} />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField fullWidth label="Total Amount ($)" value={salesData.totalAmount} InputProps={{ readOnly: true }} sx={{ backgroundColor: '#f9f9f9' }} />
                                    </Grid>
                                </Grid>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, py: 1.5, backgroundColor: '#30368a' }}
                                    startIcon={<SaveIcon />}
                                    onClick={handleSave}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Saving..." : "Save Sale"}
                                </Button>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, flexWrap: 'wrap', gap: 2 }}>
                                    <Typography variant="h6">Recent Sales</Typography>
                                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                                        <TextField
                                            size="small"
                                            label="Search Sales"
                                            placeholder="By Client or Block Type..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            sx={{ minWidth: 280, bgcolor: '#f1f3f4', borderRadius: 1 }}
                                            InputProps={{
                                                startAdornment: (
                                                    <SearchIcon sx={{ color: 'action.active', mr: 1, fontSize: 20 }} />
                                                ),
                                            }}
                                        />
                                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', p: 1, border: '1px solid #ddd', borderRadius: 1 }}>
                                            <Typography variant="caption" fontWeight="bold">Period:</Typography>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                    label="From"
                                                    value={fromDate ? dayjs(fromDate) : null}
                                                    onChange={(newValue) => setFromDate(newValue && newValue.isValid() ? newValue.format('YYYY-MM-DD') : null)}
                                                    format="DD/MM/YYYY"
                                                    slotProps={{ textField: { size: 'small', sx: { width: 140 } } }}
                                                />
                                                <DatePicker
                                                    label="To"
                                                    value={toDate ? dayjs(toDate) : null}
                                                    onChange={(newValue) => setToDate(newValue && newValue.isValid() ? newValue.format('YYYY-MM-DD') : null)}
                                                    format="DD/MM/YYYY"
                                                    slotProps={{ textField: { size: 'small', sx: { width: 140 } } }}
                                                />
                                            </LocalizationProvider>
                                        </Box>
                                    </Box>
                                </Box>
                                {(!fromDate || !toDate) ? (
                                    <Alert severity="warning" sx={{ mt: 2, bgcolor: '#fffde7', border: '1px solid #fff59d' }}>
                                        <b>No Filter Active:</b> Please select a date range to view sale records.
                                    </Alert>
                                ) : filteredSales.length === 0 ? (
                                    <Alert severity="info" sx={{ mt: 2 }}>
                                        No sales records found for this period.
                                    </Alert>
                                ) : null}
                                {fromDate && toDate && filteredSales.length > 0 && (
                                    <TableContainer>
                                        <Table size="small">
                                            <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                                                <TableRow>
                                                    <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                                                    <TableCell sx={{ fontWeight: 'bold' }}>Client</TableCell>
                                                    <TableCell sx={{ fontWeight: 'bold' }}>Block</TableCell>
                                                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Qty</TableCell>
                                                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Amount</TableCell>
                                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {filteredSales.map((row) => (
                                                    <TableRow key={row.id}>
                                                        <TableCell>{dayjs(row.date).format('DD/MM/YYYY')}</TableCell>
                                                        <TableCell>{row.clientName}</TableCell>
                                                        <TableCell>{row.blockType}</TableCell>
                                                        <TableCell align="right">{row.quantitySold}</TableCell>
                                                        <TableCell align="right">{(row.totalAmount || 0).toLocaleString()} $</TableCell>
                                                        <TableCell align="center">
                                                            <IconButton color="primary" size="small" onClick={() => handleEdit(row)}><EditIcon fontSize="small" /></IconButton>
                                                            <IconButton color="error" size="small" onClick={() => handleDelete(row)}><DeleteIcon fontSize="small" /></IconButton>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                )}
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </MainContent>
        </Box>
    );
}

export default BlockSalesView;
