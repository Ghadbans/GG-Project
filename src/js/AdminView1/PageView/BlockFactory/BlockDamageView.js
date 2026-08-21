import React, { useEffect, useState, useMemo } from 'react';
import SidebarDash from '../../../component/SidebarDash';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { cachedGet } from '../../../utils/apiCache';
import {
    Typography, Paper, Grid, TextField, Button, Box,
    CssBaseline, AppBar, Toolbar, Drawer, Divider, List,
    Table, TableBody, TableCell, TableHead, TableRow, TableContainer,
    IconButton, Chip, Alert
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
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import { styled } from '@mui/material/styles';
import { ENDPOINT_URL } from '../../../apiConfig';

import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(isBetween);
dayjs.extend(customParseFormat);

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

function BlockDamageView() {
    const navigate = useNavigate();
    const user = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const [sideBar, setSideBar] = useState(true);

    const handleLogout = () => {
        localStorage.removeItem('user');
        dispatch(logOut());
        navigate('/');
    };

    const [searchDate, setSearchDate] = useState(dayjs().format('YYYY-MM-DD'));

    useEffect(() => {
        const fetchAccess = async () => {
            try {
                const res = await cachedGet(`${ENDPOINT_URL}/grantAccess`);
                const userAccess = res.data?.data?.find(row => row.userID === user.data.id);
                const isGG = user.data.userName === 'GG';
                if (userAccess) {
                    const blockAccess = userAccess.modules.find(m => m.moduleName === 'Block-Factory')?.access;
                    if (!isGG && !blockAccess?.createM) {
                        toast.error("You don't have permission to access Damage Logs.");
                        navigate('/AdminHome');
                    }
                } else if (!isGG) {
                    navigate('/AdminHome');
                }
            } catch (error) {
                console.error('Error fetching access:', error);
            }
        };
        if (user.data.id) fetchAccess();
    }, [user, navigate]);

    // Unified Date range for damage logs - Start empty as requested
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);

    const [editId, setEditId] = useState(null);
    const [selectedProd, setSelectedProd] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    // Online States
    const [globalConfig, setGlobalConfig] = useState(null);
    const [availableProductions, setAvailableProductions] = useState([]);
    const [rawDamages, setRawDamages] = useState([]);
    const [allProductions, setAllProductions] = useState([]);

    // Backwards compatibility fixup
    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                // Fetch Access
                const accRes = await cachedGet(`${ENDPOINT_URL}/grantAccess`);
                const userAccess = accRes.data?.data?.find(row => row.userID === user.data.id);
                if (userAccess) {
                    const blockAccess = userAccess.modules.find(m => m.moduleName === 'Block-Factory')?.access;
                    if (user.data.userName !== 'GG' && !blockAccess?.createM) {
                        toast.error("You don't have permission to access Damage Logs.");
                        navigate('/AdminHome');
                    }
                }

                // Fetch Config
                const configRes = await axios.get(`${ENDPOINT_URL}/block-config`);
                if (configRes.data && configRes.data.data && Array.isArray(configRes.data.data)) {
                    const configArr = configRes.data.data;
                    const config = configArr.find(c => c.blockType === "GLOBAL") || configArr[0];
                    setGlobalConfig(config);
                }

                // Fetch Damages
                const damageRes = await axios.get(`${ENDPOINT_URL}/block-damage`);
                if (damageRes.data.data) setRawDamages(damageRes.data.data);

                // Fetch ALL Productions (for filtering later)
                const prodRes = await axios.get(`${ENDPOINT_URL}/block-production`);
                if (prodRes.data.data) setAllProductions(prodRes.data.data);

            } catch (err) {
                console.error('Error fetching initial data:', err);
            }
        };
        if (user.data.id) fetchInitialData();
    }, [user, navigate]);

    // Filter available productions when searchDate changes
    useEffect(() => {
        setAvailableProductions(allProductions.filter(p => p.date === searchDate));
    }, [searchDate, allProductions]);

    const [damageData, setDamageData] = useState({
        productionId: '',
        productionDate: '',
        machineNo: '',
        blockType: '',
        damagedBlocks: 0
    });

    const toggleDrawer = () => setSideBar(!sideBar);

    const recentDamages = useMemo(() => {
        let filtered = rawDamages.filter(d => {
            if (!fromDate || !toDate) return false;

            const pDateStr = d.productionDate || d.date;
            const formats = ['YYYY-MM-DD', 'DD/MM/YYYY', 'D/M/YYYY', 'YYYY-MM-DDTHH:mm:ss.SSSZ'];
            let pDate = dayjs(pDateStr, formats, true);
            if (!pDate.isValid()) pDate = dayjs(pDateStr);

            if (!pDate.isValid()) return false;

            const fromD = dayjs(fromDate).startOf('day');
            const toD = dayjs(toDate).endOf('day');

            if (!fromD.isValid() || !toD.isValid()) return false;
            if (fromD.isAfter(toD)) return false;

            return (pDate.isSame(fromD, 'day') || pDate.isAfter(fromD)) &&
                (pDate.isSame(toD, 'day') || pDate.isBefore(toD));
        });
        return filtered.sort((a, b) => ((b.productionDate || b.date) > (a.productionDate || a.date) ? 1 : -1));
    }, [rawDamages, fromDate, toDate]);

    const filteredDamages = useMemo(() => {
        if (!searchTerm) return recentDamages;
        const s = searchTerm.toLowerCase();
        return recentDamages.filter(row =>
            (row.blockType || "").toLowerCase().includes(s) ||
            (row.machineNo || "").toString().includes(s)
        );
    }, [recentDamages, searchTerm]);

    const handleSelectProduction = (prod) => {
        setSelectedProd(prod);
        setDamageData({
            ...damageData,
            productionId: prod._id || prod.id,
            productionDate: searchDate,
            machineNo: prod.machineNo,
            blockType: prod.blockType
        });
    };

    const currentRate = globalConfig ? parseFloat(globalConfig.damageRate) : 0;

    const handleSaveDamage = async () => {
        if (isSubmitting) return;
        if (!damageData.productionId || damageData.damagedBlocks <= 0) {
            toast.warning('Please select a production run and enter damage quantity.');
            return;
        }
        setIsSubmitting(true);
        try {
            const record = { ...damageData, date: damageData.productionDate, damageRate: currentRate, synced: true, updateS: true };
            const payload = { ...record };
            delete payload._id;
            delete payload.id;

            if (editId) {
                const targetId = damageData._id || editId;
                await axios.post(`${ENDPOINT_URL}/update-block-damage`, { id: targetId, ...payload });
                toast.success('Damage record updated!');
                setEditId(null);
            } else {
                await axios.post(`${ENDPOINT_URL}/create-block-damage`, payload);
                toast.success('Damage recorded!');
            }
            
            // Refresh state without reload
            const updatedDamageRes = await axios.get(`${ENDPOINT_URL}/block-damage`);
            if (updatedDamageRes.data.data) setRawDamages(updatedDamageRes.data.data);

            setSelectedProd(null);
            setDamageData({ 
                ...damageData, // Keep the date and metadata
                productionId: '', 
                damagedBlocks: 0 
            });
        } catch (error) {
            toast.error('Error saving damage record');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleEdit = (record) => {
        setDamageData(record);
        setEditId(record._id || record.id);
        setSearchDate(record.productionDate || record.date);
        toast.info('Editing damage record.');
    };

    // Damage rate fallback is handled by the earlier currentRate definition

    // Live preview
    const workers = selectedProd
        ? [selectedProd.operatorName, selectedProd.helper1, selectedProd.helper2, selectedProd.helper3].filter(n => n)
        : [];
    const totalDamageCost = damageData.damagedBlocks * currentRate;
    const sharePerWorker = workers.length > 0 ? totalDamageCost / workers.length : 0;

    // Summary totals for log range
    const totalDamagedInRange = recentDamages.reduce((s, d) => s + (d.damagedBlocks || 0), 0);
    const totalPenaltyInRange = recentDamages.reduce((s, d) => s + ((d.damagedBlocks || 0) * (d.damageRate || currentRate)), 0);

    return (
        <Box sx={{ display: 'flex', width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#30368a' }}>
                <Toolbar>
                    <IconButton color="inherit" onClick={toggleDrawer} edge="start" sx={{ mr: 2 }}><MenuIcon /></IconButton>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>Block Damage Recording</Typography>
                    <NotificationVIewInfo />
                    <MessageAdminView name={user.data.userName} role={user.data.role} />
                    <Typography sx={{ marginLeft: '10px', marginRight: '10px' }}>{user.data.userName}</Typography>
                    <IconButton color="inherit" onClick={handleLogout}>
                        <Logout style={{ color: 'white' }} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer variant="persistent" anchor="left" open={sideBar}
                sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' } }}>
                <Toolbar /><Box sx={{ overflow: 'auto' }}><List><SidebarDash /></List></Box>
            </Drawer>

            <MainContent open={sideBar}>
                <Toolbar />
                <Box sx={{ mt: 2, width: '100%', px: 0, m: 0 }}>
                    <Grid container spacing={1}>

                        {/* STEP 1 — Select production run */}
                        <Grid item xs={12}>
                            <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                    <PrecisionManufacturingIcon color="primary" />
                                    <Typography variant="h6">Step 1 — Select the Production Run that had Damage</Typography>
                                </Box>
                                <Alert severity="info" sx={{ mb: 2 }}>
                                    Pick the production date, then click on the machine/run that had broken blocks.
                                    The damage penalty will be split equally among all workers on that machine.
                                </Alert>

                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={3}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                label="Production Date"
                                                value={dayjs(searchDate)}
                                                onChange={(newValue) => setSearchDate(newValue ? newValue.format('YYYY-MM-DD') : "")}
                                                format="DD/MM/YYYY"
                                                slotProps={{ textField: { fullWidth: true } }}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={12} sm={9}>
                                        <Typography variant="subtitle2" sx={{ mb: 1 }}>
                                            Production Runs on {dayjs(searchDate).format('DD/MM/YYYY')} — click to select:
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            {availableProductions.length > 0
                                                ? availableProductions.map(p => {
                                                    const pId = p._id || p.id;
                                                    return (
                                                    <Button
                                                        key={pId}
                                                        variant={damageData.productionId === pId ? 'contained' : 'outlined'}
                                                        onClick={() => handleSelectProduction(p)}
                                                        size="small"
                                                        startIcon={<PrecisionManufacturingIcon />}
                                                    >
                                                        Machine {p.machineNo} — {p.blockType} ({p.operatorName})
                                                    </Button>
                                                    );
                                                })
                                                : <Typography variant="body2" color="textSecondary">No production runs found for this date.</Typography>
                                            }
                                        </Box>
                                    </Grid>
                                </Grid>

                                {selectedProd && (
                                    <Box sx={{ mt: 2, p: 2, bgcolor: '#e8f5e9', borderRadius: 2, border: '1px solid #81c784' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                            <GroupIcon color="success" />
                                            <Typography variant="subtitle2" fontWeight="bold">Workers on Machine {selectedProd.machineNo}:</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            {workers.map((w, i) => (
                                                <Chip
                                                    key={i}
                                                    label={i === 0 ? `👷 ${w} (Operator)` : `🔧 ${w} (Helper ${i})`}
                                                    color={i === 0 ? 'primary' : 'default'}
                                                    size="small"
                                                />
                                            ))}
                                        </Box>
                                    </Box>
                                )}
                            </Paper>
                        </Grid>

                        {/* STEP 2 — Enter damage quantity */}
                        <Grid item xs={12}>
                            <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                    <WarningAmberIcon sx={{ color: '#e65100' }} />
                                    <Typography variant="h6">Step 2 — Enter Damage Quantity</Typography>
                                </Box>

                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={3}>
                                        <TextField fullWidth label="Production Date" value={damageData.productionDate || '—'} disabled />
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <TextField fullWidth label="Block Type" value={damageData.blockType || '—'} disabled />
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <TextField
                                            fullWidth type="number"
                                            label="Quantity Damaged (blocks)"
                                            value={damageData.damagedBlocks}
                                            onChange={(e) => setDamageData({ ...damageData, damagedBlocks: parseInt(e.target.value) || 0 })}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <Box sx={{ p: 2, bgcolor: '#fff3e0', borderRadius: 2, border: '1px solid #ffb74d' }}>
                                            <Typography variant="caption" color="textSecondary">Applied Rate</Typography>
                                            <Typography variant="body1" fontWeight="bold">{(currentRate || 0).toLocaleString()} FC</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>

                                {/* Live preview split */}
                                {selectedProd && damageData.damagedBlocks > 0 && (
                                    <Box sx={{ mt: 3, p: 2, bgcolor: '#fff8e1', borderRadius: 2, border: '1px solid #ffe082' }}>
                                        <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                                            ⚠️ Damage Split Preview — deducted equally from each worker:
                                        </Typography>
                                        <Grid container spacing={1}>
                                            <Grid item xs={4}>
                                                <Typography variant="body2">Blocks damaged: <b>{damageData.damagedBlocks}</b></Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="body2">Rate: <b>{currentRate.toLocaleString()} FC/block</b></Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="body2" color="error" fontWeight="bold">
                                                    Total penalty: {totalDamageCost.toLocaleString()} FC
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Divider sx={{ my: 1 }} />
                                        <Typography variant="caption" color="textSecondary" mb={1} display="block">
                                            {totalDamageCost.toLocaleString()} FC ÷ {workers.length} worker(s) = <b>{sharePerWorker.toLocaleString()} FC each</b>
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                                            {workers.map((w, i) => (
                                                <Paper key={i} sx={{ p: 1.5, minWidth: 160, bgcolor: '#ffecb3', border: '1px solid #ffd54f' }}>
                                                    <Typography variant="caption" display="block">{i === 0 ? '👷 Operator' : `🔧 Helper ${i}`}</Typography>
                                                    <Typography variant="body2" fontWeight="bold">{w}</Typography>
                                                    <Typography variant="body2" color="error">− {sharePerWorker.toLocaleString()} FC</Typography>
                                                </Paper>
                                            ))}
                                        </Box>
                                    </Box>
                                )}

                                <Button
                                    fullWidth variant="contained" size="large"
                                    onClick={handleSaveDamage}
                                    sx={{ mt: 3, bgcolor: editId ? '#e65100' : '#30368a' }}
                                    startIcon={<SaveIcon />}
                                    disabled={!damageData.productionId || isSubmitting}
                                >
                                    {isSubmitting ? 'Saving...' : (editId ? 'Update Damage Record' : 'Save Damage Record')}
                                </Button>
                            </Paper>
                        </Grid>

                        {/* Damage Logs — Date Range */}
                        <Grid item xs={12}>
                            <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2, flexWrap: 'wrap', gap: 2 }}>
                                    <Typography variant="h6">Damage Logs</Typography>
                                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                                        <TextField
                                            size="small"
                                            label="Search Logs"
                                            placeholder="Machine or Block Type..."
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
                                            <Typography variant="caption" fontWeight="bold">Production Date Range:</Typography>
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

                                {/* Summary for range */}
                                {filteredDamages.length > 0 && (
                                    <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
                                        <Paper sx={{ p: 1.5, bgcolor: '#fff3e0', border: '1px solid #ffb74d', borderRadius: 1 }}>
                                            <Typography variant="caption" color="textSecondary">Total Damaged Blocks</Typography>
                                            <Typography variant="h6" color="warning.main" fontWeight="bold">{totalDamagedInRange.toLocaleString()}</Typography>
                                        </Paper>
                                        <Paper sx={{ p: 1.5, bgcolor: '#ffebee', border: '1px solid #ef9a9a', borderRadius: 1 }}>
                                            <Typography variant="caption" color="textSecondary">Total Penalties ({dayjs(fromDate).format('DD/MM/YYYY')} → {dayjs(toDate).format('DD/MM/YYYY')})</Typography>
                                            <Typography variant="h6" color="error.main" fontWeight="bold">{totalPenaltyInRange.toLocaleString()} FC</Typography>
                                        </Paper>
                                    </Box>
                                )}

                                <TableContainer>
                                    <Table size="small">
                                        <TableHead sx={{ bgcolor: '#eee' }}>
                                            <TableRow>
                                                <TableCell>Production Date</TableCell>
                                                <TableCell>Machine</TableCell>
                                                <TableCell>Block Type</TableCell>
                                                <TableCell align="right">Damaged (blocks)</TableCell>
                                                <TableCell align="right">Rate (FC)</TableCell>
                                                <TableCell align="right">Total Penalty (FC)</TableCell>
                                                <TableCell align="right">Actions</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {filteredDamages.length > 0 ? filteredDamages.map(d => {
                                                const rate = d.damageRate || currentRate;
                                                return (
                                                    <TableRow key={d.id}>
                                                        <TableCell>{d.productionDate ? dayjs(d.productionDate).format('DD/MM/YYYY') : dayjs(d.date).format('DD/MM/YYYY')}</TableCell>
                                                        <TableCell>M{d.machineNo}</TableCell>
                                                        <TableCell>{d.blockType}</TableCell>
                                                        <TableCell align="right">
                                                            <Chip label={d.damagedBlocks} color="warning" size="small" />
                                                        </TableCell>
                                                        <TableCell align="right">{(rate || 0).toLocaleString()} FC</TableCell>
                                                        <TableCell align="right" sx={{ color: 'error.main', fontWeight: 'bold' }}>
                                                            {((d.damagedBlocks || 0) * (rate || 0)).toLocaleString()} FC
                                                        </TableCell>
                                                        <TableCell align="right">
                                                            <IconButton size="small" color="primary" onClick={() => handleEdit(d)}>
                                                                <EditIcon fontSize="small" />
                                                            </IconButton>
                                                            <IconButton size="small" color="error" onClick={async () => {
                                                                if (window.confirm('Delete this damage record?')) {
                                                                    const serverId = d._id || d.id;
                                                                    try {
                                                                        setRawDamages(prev => prev.filter(item => (item._id || item.id) !== serverId));
                                                                        await axios.post(`${ENDPOINT_URL}/delete-block-damage`, { id: serverId });
                                                                        toast.success("Damage record deleted.");
                                                                    } catch (err) {
                                                                        console.error("Backend delete failed", err);
                                                                        toast.error("Failed to delete record");
                                                                    }
                                                                }
                                                            }}>
                                                                <DeleteIcon fontSize="small" />
                                                            </IconButton>
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            }) : (
                                                <TableRow>
                                                    <TableCell colSpan={8} align="center" sx={{ py: 3, color: 'text.secondary' }}>
                                                        No damage records found.
                                                    </TableCell>
                                                </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </MainContent>
        </Box>
    );
}

export default BlockDamageView;
