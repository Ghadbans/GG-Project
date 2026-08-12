import React, { useEffect, useState, useMemo } from 'react';
import SidebarDash from '../../../component/SidebarDash';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ENDPOINT_URL } from '../../../apiConfig';
import { toast } from 'react-toastify';
import {
    Container, Typography, Paper, Grid, Table, TableBody, TableCell,
    TableHead, TableRow, CssBaseline, AppBar, Toolbar, Drawer,
    Divider, List, TableContainer, Box, Card, CardContent, IconButton, TextField, Chip
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
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import dayjs from 'dayjs';

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

function BlockTrackingView() {
    const navigate = useNavigate();
    const user = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const [sideBar, setSideBar] = useState(true);

    const handleLogout = () => {
        localStorage.removeItem('user');
        dispatch(logOut());
        navigate('/');
    };

    const [searchTerm, setSearchTerm] = useState("");
    const [actualCounts, setActualCounts] = useState({});
    const [focusedField, setFocusedField] = useState(null);

    const handleCountChange = (type, value) => {
        setActualCounts(prev => ({ ...prev, [type]: value }));
    };

    const toggleDrawer = () => setSideBar(prev => !prev);

    useEffect(() => {
        const fetchAccess = async () => {
            try {
                const res = await axios.get(`${ENDPOINT_URL}/grantAccess`);
                const userAccess = res.data?.data?.find(row => row.userID === user.data.id);
                const isGG = user.data.userName === 'GG';
                if (userAccess) {
                    const blockAccess = userAccess.modules.find(m => m.moduleName === 'Block-Factory')?.access;
                    if (!isGG && !blockAccess?.readM) {
                        toast.error("You don't have permission to access Inventory.");
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

    const [rawRecentProductions, setRawRecentProductions] = useState([]);
    const [allSales, setAllSales] = useState([]);
    const [allDamages, setAllDamages] = useState([]);
    const [config, setConfig] = useState(null);
    const [posRate, setPosRate] = useState(1);

    const fetchAllData = async () => {
        try {
            const [runs, sales, dmgs, cfg, rates] = await Promise.all([
                axios.get(`${ENDPOINT_URL}/block-production`),
                axios.get(`${ENDPOINT_URL}/block-sales`),
                axios.get(`${ENDPOINT_URL}/block-damage`),
                axios.get(`${ENDPOINT_URL}/block-config`),
                axios.get(`${ENDPOINT_URL}/rateReturn`)
            ]);

            setRawRecentProductions(runs.data.data || []);
            setAllSales(sales.data.data || []);
            setAllDamages(dmgs.data.data || []);
            if (cfg.data.data && cfg.data.data.length > 0) {
                setConfig(cfg.data.data[cfg.data.data.length - 1]);
            }
            if (rates.data.data && rates.data.data.length > 0) {
                setPosRate(rates.data?.data?.[0]?.rateR || 1);
            }
        } catch (err) {
            console.error("Error fetching live data:", err);
            toast.error("Failed to load live data from server.");
        }
    };

    useEffect(() => {
        fetchAllData();
    }, []);

    const [startDate, setStartDate] = useState(dayjs().subtract(30, 'day').format('YYYY-MM-DD'));
    const [endDate, setEndDate] = useState(dayjs().format('YYYY-MM-DD'));

    const memoizedData = useMemo(() => {
        // Monthly Fixed Overheads (Strictly Rent & Taxes)
        const fixedMonthly = config ? (
            parseFloat(config.rentPrice || 0) + parseFloat(config.taxesPrice || 0)
        ) : 0;
        const sharedMonthly = config ? (
            parseFloat(config.fuelPrice || 0) +
            parseFloat(config.transportPrice || 0) +
            parseFloat(config.commissionPrice || 0) +
            parseFloat(config.supervisorSalary || 0) +
            parseFloat(config.staffWages || 0)
        ) : 0;

        const filterByDate = (arr) => arr.filter(item => {
            const itemDate = item.date ? dayjs(item.date).format('YYYY-MM-DD') : '';
            return itemDate >= startDate && itemDate <= endDate;
        });

        // Enrich all productions with USD costs and ensure numeric fields (v2.5.9-STABLE)
        const allProductionsEnriched = rawRecentProductions.map(r => {
            let baseCost = 0;
            let overheadShare = 0;

            const wbFactor = config?.wheelbarrowPerM3 || 15;
            const cM3 = ((r.concasseWheelbarrows || 0) * (r.sacksUsed || 0)) / wbFactor;
            const gM3 = ((r.gravelWheelbarrows || 0) * (r.sacksUsed || 0)) / wbFactor;
            const sM3 = ((r.sandWheelbarrows || 0) * (r.sacksUsed || 0)) / wbFactor;
            const calculatedMatCost = config ? (
                (r.cementUsed || r.sacksUsed || 0) * config.cementPrice +
                cM3 * config.concassePrice +
                gM3 * config.gravelPrice +
                sM3 * config.sandPrice
            ) : 0;

            if (r.totalMatCost !== undefined) {
                // Modern structured runs: trust USD components completely, but guard against zero/corrupt material cost
                const cementThreshold = (r.sacksUsed || 1) * (config?.cementPrice || 0) * 0.9;
                let matCost = parseFloat(r.totalMatCost || 0);
                if (matCost < cementThreshold) {
                    matCost = calculatedMatCost;
                }
                baseCost = matCost + parseFloat(r.laborPotUSD || 0);
                overheadShare = parseFloat(r.overheadSnapshot || r.overheadShareUSD || 0);
            } else if (r.isFinalizedCost) {
                // v2.5.9-STABLE: Trust the captured totalCost and overheadShare
                baseCost = parseFloat(r.totalCost || 0) - parseFloat(r.overheadShareUSD || 0);
                overheadShare = parseFloat(r.overheadShareUSD || 0);
            } else if (r.totalCost && parseFloat(r.totalCost) > 0) {
                // Historical conversion: if > 20000, it's FC, otherwise USD
                const rawCost = parseFloat(r.totalCost);
                baseCost = rawCost > 20000 ? (rawCost / posRate) : rawCost;
            } else {
                // Fallback for very old records without totalCost
                const mixerShare = (r.sacksUsed || 0) * (config?.mixerRatePerSack || 300);
                baseCost = calculatedMatCost + (((r.laborPot || 0) + mixerShare) / posRate);
            }

            let totalBlocks = parseInt(r.totalBlocks || 0);
            if (totalBlocks === 0) {
                totalBlocks = (r.sackDetails || []).reduce((a, b) => a + (parseInt(b) || 0), 0);
            }

            return { ...r, baseCostUSD: baseCost, overheadShareUSD: overheadShare, totalBlocks };
        });

        // Group by date to count unique machines for overhead sharing (all-time to be mathematically accurate)
        const machinesByDate = {};
        allProductionsEnriched.forEach(p => {
            if (!machinesByDate[p.date]) machinesByDate[p.date] = new Set();
            machinesByDate[p.date].add(p.machineNo);
        });

        const dailyOverhead = (fixedMonthly + sharedMonthly) / 26;

        // Pre-calculate machine run counts to avoid O(N^2) filter inside map
        const runsCountMap = {};
        allProductionsEnriched.forEach(r => {
            const key = `${r.date}_${r.machineNo}`;
            runsCountMap[key] = (runsCountMap[key] || 0) + 1;
        });

        const allProductionsWithCost = allProductionsEnriched.map(p => {
            let shareForThisRun = 0;
            if (p.overheadShareUSD && parseFloat(p.overheadShareUSD) > 0) {
                shareForThisRun = parseFloat(p.overheadShareUSD);
            } else if (p.isFinalizedCost) {
                shareForThisRun = parseFloat(p.overheadShareUSD || 0);
            } else {
                const key = `${p.date}_${p.machineNo}`;
                const runsForMachineOnDate = runsCountMap[key] || 1;
                const machinesOnDateCount = machinesByDate[p.date]?.size || 1;
                shareForThisRun = dailyOverhead / (machinesOnDateCount * runsForMachineOnDate);
            }

            return {
                ...p,
                totalCost: (p.baseCostUSD + shareForThisRun).toFixed(2),
                totalOverheadShareUSD: shareForThisRun.toFixed(2)
            };
        });

        const productionsFiltered = filterByDate(allProductionsWithCost).sort((a, b) => new Date(b.date) - new Date(a.date));

        const salesFiltered = filterByDate(allSales);
        const damagesFiltered = filterByDate(allDamages);

        // All-time Stock Calculations (Ensuring all are numeric)
        const producedAllTime = {};
        const soldAllTime = {};
        const damagedAllTime = {};
        allProductionsEnriched.forEach(p => {
            const type = p.blockType || "Unknown";
            producedAllTime[type] = (producedAllTime[type] || 0) + (parseInt(p.totalBlocks) || 0);
        });
        allSales.forEach(s => {
            const type = s.blockType || "Unknown";
            soldAllTime[type] = (soldAllTime[type] || 0) + (parseInt(s.quantitySold) || 0);
        });
        allDamages.forEach(d => {
            const type = d.blockType || "Unknown";
            damagedAllTime[type] = (damagedAllTime[type] || 0) + (parseInt(d.damagedBlocks) || 0);
        });

        const allTypes = Array.from(new Set([...Object.keys(producedAllTime), ...Object.keys(soldAllTime), ...Object.keys(damagedAllTime)]))
            .filter(t => t !== "Unknown");

        // Calculate all-time average cost fallback for each block type
        const allTimeCostMap = {};
        const allTimeProducedMap = {};
        allProductionsWithCost.forEach(p => {
            const type = p.blockType || "Unknown";
            allTimeCostMap[type] = (allTimeCostMap[type] || 0) + parseFloat(p.totalCost || 0);
            allTimeProducedMap[type] = (allTimeProducedMap[type] || 0) + (parseInt(p.totalBlocks) || 0);
        });

        const allTimeAvgCostMap = {};
        allTypes.forEach(type => {
            const produced = allTimeProducedMap[type] || 0;
            const cost = allTimeCostMap[type] || 0;
            allTimeAvgCostMap[type] = produced > 0 ? (cost / produced) : 0;
        });

        // Period-specific aggregates for Inventory Table
        const producedInPeriod = {};
        const soldInPeriod = {};
        const damagedInPeriod = {};
        const costInPeriod = {};

        productionsFiltered.forEach(p => {
            const type = p.blockType || "Unknown";
            producedInPeriod[type] = (producedInPeriod[type] || 0) + (parseInt(p.totalBlocks) || 0);
            costInPeriod[type] = (costInPeriod[type] || 0) + parseFloat(p.totalCost || 0);
        });
        salesFiltered.forEach(s => {
            const type = s.blockType || "Unknown";
            soldInPeriod[type] = (soldInPeriod[type] || 0) + (parseInt(s.quantitySold) || 0);
        });
        damagesFiltered.forEach(d => {
            const type = d.blockType || "Unknown";
            damagedInPeriod[type] = (damagedInPeriod[type] || 0) + (parseInt(d.damagedBlocks) || 0);
        });

        const totalProducedInPeriod = productionsFiltered.reduce((s, p) => s + (p.totalBlocks || 0), 0);
        const totalSoldInPeriod = salesFiltered.reduce((s, sl) => s + (parseInt(sl.quantitySold) || 0), 0);
        const totalDamagedInPeriod = damagesFiltered.reduce((s, d) => s + (parseInt(d.damagedBlocks) || 0), 0);
        const totalSacksInPeriod = productionsFiltered.reduce((s, p) => s + (parseInt(p.sacksUsed) || 0), 0);
        const totalRevenueInPeriod = salesFiltered.reduce((s, sl) => s + (parseFloat(sl.totalAmount) || 0), 0);
        const totalCostInPeriod = productionsFiltered.reduce((s, p) => s + parseFloat(p.totalCost || 0), 0);

        const filteredHistory = searchTerm ? productionsFiltered.filter(p =>
            (p.blockType || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
            (p.machineNo || "").toString().includes(searchTerm)
        ) : productionsFiltered;

        return {
            stats: {
                totalProduced: totalProducedInPeriod,
                totalSold: totalSoldInPeriod,
                totalDamaged: totalDamagedInPeriod,
                efficiency: totalSacksInPeriod > 0 ? (totalProducedInPeriod / totalSacksInPeriod).toFixed(1) : 0,
                totalRevenue: totalRevenueInPeriod,
                totalCost: totalCostInPeriod,
                variableCost: productionsFiltered.reduce((s, p) => s + parseFloat(p.baseCostUSD || 0), 0),
                fixedOverhead: productionsFiltered.reduce((s, p) => s + parseFloat(p.totalOverheadShareUSD || 0), 0),
                netProfitUSD: (totalRevenueInPeriod - totalCostInPeriod).toFixed(2)
            },
            inventory: allTypes.map(type => {
                const producedTotal = producedAllTime[type] || 0;
                const soldTotal = soldAllTime[type] || 0;
                const damagedTotal = damagedAllTime[type] || 0;

                const pProduced = producedInPeriod[type] || 0;
                const pCost = costInPeriod[type] || 0;

                const periodAvgCost = pProduced > 0 ? (pCost / pProduced) : 0;
                const avgCost = periodAvgCost > 0 ? periodAvgCost : (allTimeAvgCostMap[type] || 0);

                return {
                    type,
                    produced: pProduced,
                    sold: soldInPeriod[type] || 0,
                    damaged: damagedInPeriod[type] || 0,
                    stock: producedTotal - soldTotal - damagedTotal,
                    avgCost
                };
            }).sort((a, b) => b.stock - a.stock),
            productionHistory: filteredHistory.map(p => ({
                id: p.id || p._id,
                date: p.date,
                machineNo: p.machineNo,
                blockType: p.blockType,
                totalBlocks: p.totalBlocks,
                totalCost: p.totalCost,
                unitCost: (parseFloat(p.totalCost) / (parseInt(p.totalBlocks) || 1)).toFixed(2)
            }))
        };
    }, [rawRecentProductions, allSales, allDamages, config, startDate, endDate, posRate, searchTerm]);

    const { stats, inventory, productionHistory } = memoizedData;


    return (
        <Box sx={{ display: 'flex', width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#30368a' }}>
                <Toolbar>
                    <IconButton color="inherit" onClick={toggleDrawer} edge="start" sx={{ mr: 2 }}><MenuIcon /></IconButton>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>Block Factory Inventory & Analytics</Typography>
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
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                        <Grid item xs={12} sm={6}>
                            <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Start Date"
                                        value={dayjs(startDate)}
                                        onChange={(newValue) => setStartDate(newValue ? newValue.format('YYYY-MM-DD') : "")}
                                        format="DD/MM/YYYY"
                                        slotProps={{ textField: { size: 'small' } }}
                                    />
                                    <Typography>to</Typography>
                                    <DatePicker
                                        label="End Date"
                                        value={dayjs(endDate)}
                                        onChange={(newValue) => setEndDate(newValue ? newValue.format('YYYY-MM-DD') : "")}
                                        format="DD/MM/YYYY"
                                        slotProps={{ textField: { size: 'small' } }}
                                    />
                                </LocalizationProvider>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={3}>
                            <Card sx={{ bgcolor: '#e3f2fd', boxShadow: 2 }}>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>Total Produced</Typography>
                                    <Typography variant="h4">{stats.totalProduced.toLocaleString()}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Card sx={{ bgcolor: '#fff3e0', boxShadow: 2 }}>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>Total Sold</Typography>
                                    <Typography variant="h4">{stats.totalSold.toLocaleString()}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Card sx={{ bgcolor: '#ffebee', boxShadow: 2 }}>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>Total Damaged</Typography>
                                    <Typography variant="h4">{stats.totalDamaged.toLocaleString()}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Card sx={{ bgcolor: '#e8f5e9', boxShadow: 2 }}>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>Total Revenue</Typography>
                                    <Typography variant="h4" color="success.main">${(stats.totalRevenue || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Card sx={{ bgcolor: '#fff3e0', boxShadow: 2 }}>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>Total Investment & Costing (Period)</Typography>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Typography variant="h5">${(stats.totalCost || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Typography>
                                        </Grid>
                                        <Grid item xs={6} sx={{ textAlign: 'right' }}>
                                            <Typography variant="caption" display="block">Variable: <b>${(stats.variableCost || 0).toLocaleString()}</b></Typography>
                                            <Typography variant="caption" display="block">Fixed: <b>${(stats.fixedOverhead || 0).toLocaleString()}</b></Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Card sx={{ bgcolor: '#e0f2f1', boxShadow: 2, border: '2px solid #004d40' }}>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>Estimated Profit (Period)</Typography>
                                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: ((stats.totalRevenue || 0) - (stats.totalCost || 0)) >= 0 ? 'success.main' : 'error.main' }}>
                                        ${((stats.totalRevenue || 0) - (stats.totalCost || 0)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </Typography>
                                    <Typography variant="caption">Revenue - (Variable + Fixed Costs)</Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
                                <Typography variant="h6" gutterBottom>Inventory by Block Type</Typography>
                                <TableContainer>
                                    <Table>
                                        <TableHead sx={{ bgcolor: '#eee' }}>
                                            <TableRow>
                                                <TableCell>Block Type</TableCell>
                                                <TableCell align="right">Average Cost/Block ($)</TableCell>
                                                <TableCell align="right">Produced</TableCell>
                                                <TableCell align="right">Sold</TableCell>
                                                <TableCell align="right">Damaged</TableCell>
                                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>In Stock</TableCell>
                                                <TableCell align="center" sx={{ fontWeight: 'bold', minWidth: 120 }}>Physical Count</TableCell>
                                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Variance (Rest)</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {inventory.map((row) => (
                                                <TableRow key={row.type}>
                                                    <TableCell>{row.type}</TableCell>
                                                    <TableCell align="right">${(row.avgCost || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
                                                    <TableCell align="right">{(row.produced || 0).toLocaleString()}</TableCell>
                                                    <TableCell align="right">{(row.sold || 0).toLocaleString()}</TableCell>
                                                    <TableCell align="right">{(row.damaged || 0).toLocaleString()}</TableCell>
                                                    <TableCell align="right">
                                                        <Chip
                                                            label={(row.stock || 0).toLocaleString()}
                                                            color={row.stock > 0 ? "success" : "error"}
                                                            variant="outlined"
                                                            size="small"
                                                            sx={{ fontWeight: 'bold', minWidth: 70 }}
                                                        />
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <TextField
                                                            size="small"
                                                            type="number"
                                                            placeholder="Count"
                                                            value={actualCounts[row.type] !== undefined ? actualCounts[row.type] : ''}
                                                            onChange={(e) => handleCountChange(row.type, e.target.value)}
                                                            sx={{ width: '100px', bgcolor: '#fff', borderRadius: 1 }}
                                                        />
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {actualCounts[row.type] !== undefined && actualCounts[row.type] !== '' ? (() => {
                                                            const diff = (parseInt(actualCounts[row.type]) || 0) - row.stock;
                                                            return (
                                                                <Typography
                                                                    variant="body2"
                                                                    fontWeight="bold"
                                                                    color={diff < 0 ? 'error.main' : (diff > 0 ? 'success.main' : 'text.secondary')}
                                                                >
                                                                    {diff > 0 ? '+' : ''}{diff.toLocaleString()}
                                                                </Typography>
                                                            );
                                                        })() : '-'}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Paper sx={{ p: 3, bgcolor: '#f5f5f5', borderRadius: 2 }}>
                                <Typography variant="h6" gutterBottom>Total Investment & Costing</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography>Production Costs (Materials + Overheads + Labor):</Typography>
                                    <Typography fontWeight="bold">${(stats.totalCost || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', color: stats.totalRevenue - stats.totalCost >= 0 ? 'success.main' : 'error.main' }}>
                                    <Typography variant="h6">Estimated Profit:</Typography>
                                    <Typography variant="h6" fontWeight="bold">${((stats.totalRevenue || 0) - (stats.totalCost || 0)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Typography>
                                </Box>
                            </Paper>
                        </Grid>

                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, mt: 3, borderRadius: 2, boxShadow: 3 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, flexWrap: 'wrap', gap: 2 }}>
                                    <Typography variant="h6">Production Cost History</Typography>
                                    <TextField
                                        size="small"
                                        label="Search History"
                                        placeholder="Machine or Block Type..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        sx={{ minWidth: 350, bgcolor: '#f1f3f4', borderRadius: 1 }}
                                        InputProps={{
                                            startAdornment: (
                                                <SearchIcon sx={{ color: 'action.active', mr: 1, fontSize: 20 }} />
                                            ),
                                        }}
                                    />
                                </Box>
                                <TableContainer>
                                    <Table size="small">
                                        <TableHead sx={{ bgcolor: '#eee' }}>
                                            <TableRow>
                                                <TableCell>Date</TableCell>
                                                <TableCell>Block Type</TableCell>
                                                <TableCell align="right">Blocks Produced</TableCell>
                                                <TableCell align="right">Total Cost ($)</TableCell>
                                                <TableCell align="right">Cost per Block ($)</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {productionHistory.map((run, idx) => (
                                                <TableRow key={run._id || run.id || idx}>
                                                    <TableCell>{dayjs(run.date).format('DD/MM/YYYY')}</TableCell>
                                                    <TableCell>{run.blockType}</TableCell>
                                                    <TableCell align="right">{(run.totalBlocks || 0).toLocaleString()}</TableCell>
                                                    <TableCell align="right">${parseFloat(run.totalCost || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
                                                    <TableCell align="right">
                                                        ${(run.totalBlocks > 0 ? (parseFloat(run.totalCost || 0) / run.totalBlocks) : 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
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

export default BlockTrackingView;
