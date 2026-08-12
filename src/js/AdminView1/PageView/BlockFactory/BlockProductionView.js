import React, { useEffect, useState, useMemo } from 'react';
import SidebarDash from '../../../component/SidebarDash';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import {
    Container, Typography, Paper, Grid, TextField, Button, Box,
    MenuItem, Table, TableBody, TableCell, TableHead, TableRow,
    CssBaseline, AppBar, Toolbar, Drawer, Divider, List, TableContainer, IconButton,
    Autocomplete, ToggleButton, ToggleButtonGroup, Chip, Alert
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import MessageAdminView from '../../MessageAdminView';
import Logout from '../../../component/NetworkLogoutIcon';
import { logOut } from '../../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';

import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import axios from 'axios';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ENDPOINT_URL } from '../../../apiConfig';

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

function BlockProductionView() {
    const navigate = useNavigate();
    const user = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const [sideBar, setSideBar] = useState(true);

    const handleLogout = () => {
        localStorage.removeItem('user');
        dispatch(logOut());
        navigate('/');
    };

    const [employees, setEmployees] = useState([]);
    const [grantAccess, setGrantAccess] = useState([]);

    useEffect(() => {
        const fetchAccess = async () => {
            try {
                const res = await axios.get(`${ENDPOINT_URL}/grantAccess`);
                const userAccess = res.data?.data?.find(row => row.userID === user.data.id);
                if (userAccess) {
                    setGrantAccess(userAccess.modules);
                    const blockAccess = userAccess.modules.find(m => m.moduleName === 'Block-Factory')?.access;
                    const isGG = user.data.userName === 'GG';
                    if (!isGG && !blockAccess?.createM) {
                        toast.error("You don't have permission to access Production.");
                        navigate('/AdminHome');
                    }
                } else if (user.data.userName !== 'GG') {
                    navigate('/AdminHome');
                }
            } catch (error) {
                console.error('Error fetching access:', error);
            }
        };
        if (user.data.id) fetchAccess();
    }, [user, navigate]);

    const fetchPosRate = async () => {
        try {
            const res = await axios.get(`${ENDPOINT_URL}/rateReturn`);
            return parseFloat(res.data.data[0]?.rateR) || 1;
        } catch (err) {
            console.error('Error fetching rate:', err);
            return 2800; // Fallback
        }
    };
    const [productionData, setProductionData] = useState({
        date: dayjs().format('YYYY-MM-DD'),
        machineNo: "",
        operatorName: "",
        helper1: "",
        helper2: "",
        helper3: "",
        halfDayOperator: false,
        halfDayHelper1: false,
        halfDayHelper2: false,
        halfDayHelper3: false,
        blockType: "",
        sacksUsed: 0,
        sackDetails: [], // Array of block counts per sack
        cementUsed: 0,
        concasseWheelbarrows: 0,
        gravelWheelbarrows: 0,
        sandWheelbarrows: 0,
        laborPot: 0
    });
    // Unified Date range for production logs - Default to Today
    const [fromDate, setFromDate] = useState(dayjs().format('YYYY-MM-DD'));
    const [toDate, setToDate] = useState(dayjs().format('YYYY-MM-DD'));
    const [posRate, setPosRate] = useState(2800);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [configs, setConfigs] = useState(null);
    const [rawRecentProductions, setRawRecentProductions] = useState([]);
    const [dailyProductions, setDailyProductions] = useState([]);
    const [dailyMixerWorkers, setDailyMixerWorkers] = useState([]);

    const toggleDrawer = () => setSideBar(!sideBar);

    // Generic refetcher for system sync
    const fetchMisc = async () => {
        const rate = await fetchPosRate();
        setPosRate(rate);
        try {
            // Fetch Config
            const configRes = await axios.get(`${ENDPOINT_URL}/block-config`);
            if (configRes.data && configRes.data.data && Array.isArray(configRes.data.data)) {
                const configArr = configRes.data.data;
                const config = configArr.find(c => c.blockType === "GLOBAL") || configArr[0];
                setConfigs(config);
            }

            // Fetch Recent Productions for Logs
            const prodRes = await axios.get(`${ENDPOINT_URL}/block-production`);
            if (prodRes.data.data) setRawRecentProductions(prodRes.data.data);

            const res = await axios.get(`${ENDPOINT_URL}/employee`);
            const allEmployees = res.data.data;
            const uniqueNames = new Set();
            const factoryEmployees = allEmployees.filter(e => {
                const isFactory = e.department && e.department.toUpperCase().includes('FACTORY');
                const isActive = e.status !== 'Fired' && e.status !== 'Resign';
                if (isFactory && isActive && !uniqueNames.has(e.employeeName)) {
                    uniqueNames.add(e.employeeName);
                    return true;
                }
                return false;
            });
            setEmployees(factoryEmployees.length > 0 ? factoryEmployees : allEmployees.filter(e => e.status !== 'Fired' && e.status !== 'Resign'));
        } catch (err) {
            console.error('Error fetching misc data:', err);
        }
    };

    useEffect(() => {
        fetchMisc();
    }, []);

    // Update Daily states when date or raw data changes
    useEffect(() => {
        if (rawRecentProductions.length > 0) {
            setDailyProductions(rawRecentProductions.filter(p => p.date === productionData.date));
        }
    }, [productionData.date, rawRecentProductions]);

    // Per-worker share calculator (mirrors WorkerPaymentView logic)
    const calculateWorkerShare = (typeStr, s, e, half) => {
        const rates = configs?.laborRates || {
            rate50_33: { perSack: 10000 },
            rate20: { t1_sacks: 6, t1_rate: 9000, t2_sacks: 7, t2_rate: 16500, t3_sacks: 8, t3_rate: 19000, t4_sacks: 12, t4_rate: 21500, t5_rate: 24500 },
            rate15: { t1_sacks: 5, t1_rate: 9000, t2_sacks: 6, t2_rate: 16500, t3_sacks: 7, t3_rate: 19000, t4_sacks: 10, t4_rate: 21500, t5_rate: 24500 },
            rate14: { t1_sacks: 6, t1_rate: 9000, t2_sacks: 7, t2_rate: 17000, t3_sacks: 8, t3_rate: 19500, t4_sacks: 9, t4_rate: 22000, t5_rate: 24500 },
            rate12: { t1_sacks: 6, t1_rate: 9000, t2_sacks: 7, t2_rate: 17000, t3_sacks: 8, t3_rate: 19500, t4_sacks: 9, t4_rate: 22000, t5_rate: 24500 },
            rate10: { t1_sacks: 6, t1_rate: 9000, t2_sacks: 7, t2_rate: 17000, t3_sacks: 8, t3_rate: 19500, t4_sacks: 9, t4_rate: 22000, t5_rate: 24500 }
        };
        if (!typeStr) return 0;
        if (typeStr.includes('50') || typeStr.includes('33')) {
            const tot = s * rates.rate50_33.perSack;
            return half ? tot / 2 : tot / Math.max(e, 1);
        }
        let rt = null, limitSacks = 0;
        if (typeStr.includes('20')) { rt = rates?.rate20 || {}; }
        else if (typeStr.includes('15')) { rt = rates?.rate15 || {}; }
        else if (typeStr.includes('14')) { rt = rates?.rate14 || rates?.rate10_14_12 || {}; }
        else if (typeStr.includes('12')) { rt = rates?.rate12 || rates?.rate10_14_12 || {}; }
        else if (typeStr.includes('10')) { rt = rates?.rate10 || rates?.rate10_14_12 || {}; }
        else return 0;

        limitSacks = rt.t2_sacks || 0;
        const effectiveSacks = half ? Math.min(s, limitSacks) : s;
        let rate = 0;
        if (effectiveSacks <= (rt.t1_sacks || 0)) rate = (rt.t1_rate || 0) * s;
        else if (effectiveSacks <= (rt.t2_sacks || 0)) rate = rt.t2_rate || 0;
        else if (effectiveSacks === (rt.t3_sacks || 0)) rate = rt.t3_rate || 0;
        else if (effectiveSacks <= (rt.t4_sacks || 0)) rate = rt.t4_rate || 0;
        else rate = rt.t5_rate || 0;
        return half ? rate / 2 : rate;
    };

    const recentProductions = useMemo(() => {
        if (!rawRecentProductions) return [];

        // Apply Date Filter
        let filteredProductions = rawRecentProductions;
        if (fromDate && toDate) {
            const fD = parseDate(fromDate).startOf('day');
            const tD = parseDate(toDate).endOf('day');
            if (fD.isValid() && tD.isValid() && !fD.isAfter(tD)) {
                filteredProductions = rawRecentProductions.filter(r => {
                    const d = parseDate(r.date);
                    return (d.isSame(fD, 'day') || d.isAfter(fD)) && (d.isSame(tD, 'day') || d.isBefore(tD));
                });
            } else {
                filteredProductions = [];
            }
        } else {
            filteredProductions = [];
        }

        const pricing = configs;
        const fixedMonthly = pricing ? (
            (parseFloat(pricing.rentPrice) || 0) +
            (parseFloat(pricing.taxesPrice) || 0)
        ) : 0;
        const sharedMonthly = pricing ? (
            (parseFloat(pricing.fuelPrice) || 0) +
            (parseFloat(pricing.transportPrice) || 0) +
            (parseFloat(pricing.commissionPrice) || 0) +
            (parseFloat(pricing.supervisorSalary) || 0) +
            (parseFloat(pricing.staffWages) || 0)
        ) : 0;
        const dailyOverhead = (fixedMonthly + sharedMonthly) / 26;
        
        return filteredProductions.map(r => {
            const cM3 = ((r.concasseWheelbarrows || 0) * (r.sacksUsed || 0)) / 15;
            const gM3 = ((r.gravelWheelbarrows || 0) * (r.sacksUsed || 0)) / 15;
            const sM3 = ((r.sandWheelbarrows || 0) * (r.sacksUsed || 0)) / 15;
            
            // 1. Labor Calculation (Prioritize saved laborPot for historical accuracy)
            const opShare = r.operatorName ? calculateWorkerShare(r.blockType, r.sacksUsed, 3, !!r.halfDayOperator) : 0;
            const h1Share = r.helper1 ? calculateWorkerShare(r.blockType, r.sacksUsed, 3, !!r.halfDayHelper1) : 0;
            const h2Share = r.helper2 ? calculateWorkerShare(r.blockType, r.sacksUsed, 3, !!r.halfDayHelper2) : 0;
            const h3Share = r.helper3 ? calculateWorkerShare(r.blockType, r.sacksUsed, 3, !!r.halfDayHelper3) : 0;
            const mixerShare = (r.sacksUsed || 0) * (pricing?.mixerRatePerSack || 300);
            
            const crewOnlyFC = opShare + h1Share + h2Share + h3Share;
            const fullCrewAndMixerFC = crewOnlyFC + mixerShare;
            
            let laborFC = 0;
            if (r.laborPot) {
                // Backwards-compatible detection: Check if saved laborPot includes or excludes mixer share
                const oldSchemaDiff = Math.abs(r.laborPot - fullCrewAndMixerFC);
                const newSchemaDiff = Math.abs(r.laborPot - crewOnlyFC);
                if (newSchemaDiff < oldSchemaDiff) {
                    laborFC = r.laborPot + mixerShare; // New schema: crew-only, so add mixer share for total cost
                } else {
                    laborFC = r.laborPot; // Old schema: already includes mixer share
                }
            } else {
                laborFC = fullCrewAndMixerFC;
            }
            
            // 2. Material Cost (Prioritize saved totalMatCost, but self-correct if abnormally low/zero)
            const calculatedMatCost = pricing ? (
                ((r.cementUsed || r.sacksUsed || 0) * (pricing.cementPrice || 0)) +
                (cM3 * (pricing.concassePrice || 0)) +
                (gM3 * (pricing.gravelPrice || 0)) +
                (sM3 * (pricing.sandPrice || 0))
            ) : 0;

            const cementThreshold = (r.sacksUsed || 1) * (pricing?.cementPrice || 0) * 0.9;
            const matCost = (r.totalMatCost && r.totalMatCost > cementThreshold) ? r.totalMatCost : calculatedMatCost;
            
            const baseCost = matCost + (laborFC / posRate);
            
            // 2. Stable Overhead Allocation (Prioritize saved snapshot for history)
            const machinesOnDate = new Set(rawRecentProductions.filter(rec => rec.date === r.date).map(rec => rec.machineNo));
            const totalMachinesOnDate = machinesOnDate.size || 1;
            const overheadShare = r.overheadSnapshot || (dailyOverhead / totalMachinesOnDate);

            // Final Total Cost (Prioritize saved totalCost if available)
            const finalTotalCost = r.totalCost || (baseCost + overheadShare);

            return { ...r, totalCost: parseFloat(finalTotalCost).toFixed(2) };
        });
    }, [rawRecentProductions, fromDate, toDate, configs, posRate]);

    const productionSummary = useMemo(() => {
        let totalSacks = 0;
        const blocksByType = {};

        recentProductions.forEach(r => {
            const sacks = parseInt(r.sacksUsed) || 0;
            const blocks = parseInt(r.totalBlocks) || 0;

            totalSacks += sacks;

            const type = r.blockType || 'Unknown';
            if (!blocksByType[type]) blocksByType[type] = 0;
            blocksByType[type] += blocks;
        });

        return { totalSacks, blocksByType };
    }, [recentProductions]);

    // Helper: compute actual total payout across all workers (respecting half-day)
    // EXCLUDES the virtual Mixer share from the live preview and saved laborPot as requested by the user
    const computeActualPot = (data) => {
        if (!data.blockType) return 0;
        const opShare = data.operatorName ? calculateWorkerShare(data.blockType, data.sacksUsed, 3, !!data.halfDayOperator) : 0;
        const h1Share = data.helper1 ? calculateWorkerShare(data.blockType, data.sacksUsed, 3, !!data.halfDayHelper1) : 0;
        const h2Share = data.helper2 ? calculateWorkerShare(data.blockType, data.sacksUsed, 3, !!data.halfDayHelper2) : 0;
        const h3Share = data.helper3 ? calculateWorkerShare(data.blockType, data.sacksUsed, 3, !!data.halfDayHelper3) : 0;
        return opShare + h1Share + h2Share + h3Share;
    };

    const alreadyAssigned = useMemo(() => {
        const names = new Set();
        dailyProductions.forEach(r => {
            if (r.operatorName) names.add(r.operatorName);
            if (r.helper1) names.add(r.helper1);
            if (r.helper2) names.add(r.helper2);
            if (r.helper3) names.add(r.helper3);
        });
        dailyMixerWorkers.forEach(mw => {
            if (mw.workerName) names.add(mw.workerName);
        });
        return names;
    }, [dailyProductions, dailyMixerWorkers]);

    const getAvailableEmployees = (currentField) => {
        const currentSelections = [
            productionData.operatorName,
            productionData.helper1,
            productionData.helper2,
            productionData.helper3
        ].filter((val, idx) => {
            const fields = ['operatorName', 'helper1', 'helper2', 'helper3'];
            return val && fields[idx] !== currentField;
        });

        return employees.filter(e =>
            !alreadyAssigned.has(e.employeeName) && !currentSelections.includes(e.employeeName)
        );
    };



    const handleSackChange = (val) => {
        const numSacks = parseInt(val) || 0;
        const newDetails = Array.from({ length: numSacks }).map((_, i) =>
            (productionData.sackDetails || [])[i] || 0
        );
        const updated = {
            ...productionData,
            sacksUsed: numSacks,
            sackDetails: newDetails,
            cementUsed: numSacks,
        };
        updated.laborPot = computeActualPot(updated);
        setProductionData(updated);
    };

    const handleSackDetailChange = (index, val) => {
        const newDetails = [...productionData.sackDetails];
        newDetails[index] = parseInt(val) || 0;
        setProductionData({ ...productionData, sackDetails: newDetails });
    };

    const getWeightedUnits = (data) => {
        const pairs = [
            [data.operatorName, data.halfDayOperator],
            [data.helper1, data.halfDayHelper1],
            [data.helper2, data.halfDayHelper2],
            [data.helper3, data.halfDayHelper3]
        ];
        return pairs.filter(([name]) => name).reduce((sum, [, half]) => sum + (half ? 0.5 : 1), 0);
    };

    const handlePersonnelChange = (field, value) => {
        const updated = { ...productionData, [field]: value };
        updated.laborPot = computeActualPot(updated);
        setProductionData(updated);
    };

    // Toggle half/full day — also updates laborPot to the actual payout
    const handleHalfDayToggle = (halfDayField, value) => {
        const updated = { ...productionData, [halfDayField]: value === 'half' };
        updated.laborPot = computeActualPot(updated);
        setProductionData(updated);
    };

    const handleSave = async () => {
        if (isSubmitting) return;

        // Validation - ensure all critical fields are filled
        const totalBlocks = (productionData.sackDetails || []).reduce((a, b) => a + (parseInt(b) || 0), 0);
        const hasMissingBlocks = productionData.sacksUsed > 0 &&
            (productionData.sackDetails.length < productionData.sacksUsed ||
                productionData.sackDetails.some(val => !val || parseInt(val) <= 0));

        if (!productionData.machineNo) {
            toast.warning("Please enter Machine No."); return;
        }
        if (!productionData.blockType) {
            toast.warning("Please select Block Type."); return;
        }
        if (!productionData.operatorName) {
            toast.warning("Please select an Operator."); return;
        }
        if (!productionData.sacksUsed || productionData.sacksUsed <= 0) {
            toast.warning("Please enter Sacks of Cement."); return;
        }
        if (!productionData.concasseWheelbarrows || parseFloat(productionData.concasseWheelbarrows) <= 0) {
            toast.warning("Please enter Wheelbarrow Concasse (per sack)."); return;
        }
        if (totalBlocks <= 0) {
            toast.warning("Please enter at least one block count in Production per Sack section."); return;
        }
        if (hasMissingBlocks) {
            toast.warning("Some sacks are missing block counts. Please fill all sack details."); return;
        }

        setIsSubmitting(true);
        try {
            // 15 wheelbarrow = 1m3
            const wbFactor = configs?.wheelbarrowPerM3 || 15;
            const concasseM3 = (productionData.concasseWheelbarrows * productionData.sacksUsed) / wbFactor;
            const gravelM3 = (productionData.gravelWheelbarrows * productionData.sacksUsed) / wbFactor;
            const sandM3 = (productionData.sandWheelbarrows * productionData.sacksUsed) / wbFactor;

            // Direct Material Cost
            let totalMatCost = 0;
            if (configs) {
                totalMatCost = ((productionData.cementUsed || productionData.sacksUsed || 0) * (configs.cementPrice || 0)) +
                    (concasseM3 * (configs.concassePrice || 0)) +
                    (gravelM3 * (configs.gravelPrice || 0)) +
                    (sandM3 * (configs.sandPrice || 0));
            }

            const posRate = await fetchPosRate();
            const actualLaborPot = computeActualPot(productionData); // crew-only
            const mixerShare = (productionData.sacksUsed || 0) * (configs?.mixerRatePerSack || 300);
            const totalLaborFC = actualLaborPot + mixerShare;
            const laborPotUSD = totalLaborFC / posRate;

            // Overhead Calculation (v2.5.9-STABLE)
            // Distribute total daily overhead across all machine runs for this specific date
            const dailyOverhead = configs ? (
                (parseFloat(configs.rentPrice) || 0) +
                (parseFloat(configs.taxesPrice) || 0) +
                (parseFloat(configs.fuelPrice) || 0) +
                (parseFloat(configs.transportPrice) || 0) +
                (parseFloat(configs.commissionPrice) || 0) +
                (parseFloat(configs.supervisorSalary) || 0) +
                (parseFloat(configs.staffWages) || 0)
            ) / 26 : 0;

            // Stable Overhead Allocation (DIVIDE BY NUMBER OF MACHINES)
            const machinesOnDateSnapshot = new Set(rawRecentProductions.filter(rec => rec.date === productionData.date).map(rec => rec.machineNo));
            const totalMachinesOnDate = Math.max(machinesOnDateSnapshot.size, 1);
            const overheadShare = dailyOverhead / totalMachinesOnDate;

            const serverId = productionData.id || productionData._id;
            const payload = { 
                ...productionData, 
                totalBlocks, 
                concasseM3, 
                gravelM3, 
                sandM3, 
                laborPotUSD, 
                totalMatCost,
                overheadSnapshot: overheadShare,
                totalCost: (totalMatCost + laborPotUSD + overheadShare) // Persist the FULL cost
            };
            
            if (serverId) {
                payload.id = serverId;
                payload._id = serverId;
                await axios.post(`${ENDPOINT_URL}/update-block-production`, payload);
                toast.success("Production run updated successfully!");
            } else {
                await axios.post(`${ENDPOINT_URL}/create-block-production`, payload);
                toast.success("Production run recorded successfully!");
            }

            // INSTANT UI SYNC - No reload
            await fetchMisc();
            
            setProductionData({
                ...productionData, // Keep the date and other contextual fields
                machineNo: "",
                operatorName: "",
                helper1: "",
                helper2: "",
                helper3: "",
                halfDayOperator: false,
                halfDayHelper1: false,
                halfDayHelper2: false,
                halfDayHelper3: false,
                blockType: "",
                sacksUsed: 0,
                sackDetails: [],
                concasseWheelbarrows: 1, 
                gravelWheelbarrows: 0.5,
                sandWheelbarrows: 0.5,
                laborPot: 0,
                id: null,
                _id: null
            });
        } catch (error) {
            toast.error("Error saving production run");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box sx={{ display: 'flex', width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#30368a' }}>
                <Toolbar>
                    <IconButton color="inherit" onClick={toggleDrawer} edge="start" sx={{ mr: 2 }}><MenuIcon /></IconButton>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>Block Production Entry</Typography>
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
                            <Paper sx={{ p: 4, borderRadius: 2, boxShadow: 3 }}>
                                <Typography variant="h6" gutterBottom>Production Run Details - Standardized</Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={4}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                label="Date"
                                                value={dayjs(productionData.date)}
                                                onChange={(newValue) => setProductionData({ ...productionData, date: newValue ? newValue.format('YYYY-MM-DD') : "" })}
                                                format="DD/MM/YYYY"
                                                slotProps={{ textField: { fullWidth: true } }}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField fullWidth label="Machine No." value={productionData.machineNo} onChange={(e) => setProductionData({ ...productionData, machineNo: e.target.value })} />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Autocomplete
                                            fullWidth
                                            options={["Block 50", "Block 33", "Block 20", "Block 15", "Block 10", "Block 14", "Block 12"]}
                                            value={productionData.blockType || null}
                                            onChange={(e, newValue) => handlePersonnelChange('blockType', newValue || "")}
                                            renderInput={(params) => <TextField {...params} label="Block Type" />}
                                            isOptionEqualToValue={(option, value) => option === value}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                            <Autocomplete
                                                fullWidth
                                                options={getAvailableEmployees('operatorName')}
                                                getOptionLabel={(option) => option.employeeName || ""}
                                                value={employees.find(e => e.employeeName === productionData.operatorName) || null}
                                                onChange={(e, newValue) => handlePersonnelChange('operatorName', newValue ? newValue.employeeName : "")}
                                                renderInput={(params) => <TextField {...params} label="Operator" />}
                                            />
                                            {productionData.operatorName && (
                                                <ToggleButtonGroup
                                                    value={productionData.halfDayOperator ? 'half' : 'full'}
                                                    exclusive
                                                    onChange={(e, val) => val && handleHalfDayToggle('halfDayOperator', val)}
                                                    size="small"
                                                >
                                                    <ToggleButton value="full" sx={{ px: 1.5, color: 'success.main' }}>Full</ToggleButton>
                                                    <ToggleButton value="half" sx={{ px: 1.5, color: 'warning.main' }}>½ Day</ToggleButton>
                                                </ToggleButtonGroup>
                                            )}
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                            <Autocomplete
                                                fullWidth
                                                options={getAvailableEmployees('helper1')}
                                                getOptionLabel={(option) => option.employeeName || ""}
                                                value={employees.find(e => e.employeeName === productionData.helper1) || null}
                                                onChange={(e, newValue) => handlePersonnelChange('helper1', newValue ? newValue.employeeName : "")}
                                                renderInput={(params) => <TextField {...params} label="Helper 1" />}
                                            />
                                            {productionData.helper1 && (
                                                <ToggleButtonGroup
                                                    value={productionData.halfDayHelper1 ? 'half' : 'full'}
                                                    exclusive
                                                    onChange={(e, val) => val && handleHalfDayToggle('halfDayHelper1', val)}
                                                    size="small"
                                                >
                                                    <ToggleButton value="full" sx={{ px: 1.5, color: 'success.main' }}>Full</ToggleButton>
                                                    <ToggleButton value="half" sx={{ px: 1.5, color: 'warning.main' }}>½ Day</ToggleButton>
                                                </ToggleButtonGroup>
                                            )}
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                            <Autocomplete
                                                fullWidth
                                                options={getAvailableEmployees('helper2')}
                                                getOptionLabel={(option) => option.employeeName || ""}
                                                value={employees.find(e => e.employeeName === productionData.helper2) || null}
                                                onChange={(e, newValue) => handlePersonnelChange('helper2', newValue ? newValue.employeeName : "")}
                                                renderInput={(params) => <TextField {...params} label="Helper 2" />}
                                            />
                                            {productionData.helper2 && (
                                                <ToggleButtonGroup
                                                    value={productionData.halfDayHelper2 ? 'half' : 'full'}
                                                    exclusive
                                                    onChange={(e, val) => val && handleHalfDayToggle('halfDayHelper2', val)}
                                                    size="small"
                                                >
                                                    <ToggleButton value="full" sx={{ px: 1.5, color: 'success.main' }}>Full</ToggleButton>
                                                    <ToggleButton value="half" sx={{ px: 1.5, color: 'warning.main' }}>½ Day</ToggleButton>
                                                </ToggleButtonGroup>
                                            )}
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                            <Autocomplete
                                                fullWidth
                                                options={getAvailableEmployees('helper3')}
                                                getOptionLabel={(option) => option.employeeName || ""}
                                                value={employees.find(e => e.employeeName === productionData.helper3) || null}
                                                onChange={(e, newValue) => handlePersonnelChange('helper3', newValue ? newValue.employeeName : "")}
                                                renderInput={(params) => <TextField {...params} label="Helper 3" />}
                                            />
                                            {productionData.helper3 && (
                                                <ToggleButtonGroup
                                                    value={productionData.halfDayHelper3 ? 'half' : 'full'}
                                                    exclusive
                                                    onChange={(e, val) => val && handleHalfDayToggle('halfDayHelper3', val)}
                                                    size="small"
                                                >
                                                    <ToggleButton value="full" sx={{ px: 1.5, color: 'success.main' }}>Full</ToggleButton>
                                                    <ToggleButton value="half" sx={{ px: 1.5, color: 'warning.main' }}>½ Day</ToggleButton>
                                                </ToggleButtonGroup>
                                            )}
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12}><Divider sx={{ my: 1 }} /></Grid>

                                    <Grid item xs={12} sm={3}>
                                        <TextField fullWidth type="number" label="Sacks of Cement" value={productionData.sacksUsed} onChange={(e) => handleSackChange(e.target.value)} />
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <TextField fullWidth type="number" label="Wheelbarrow Concasse (per Sack)" value={productionData.concasseWheelbarrows} onChange={(e) => setProductionData({ ...productionData, concasseWheelbarrows: e.target.value })} />
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <TextField fullWidth type="number" label="Wheelbarrow Gravel (per Sack)" value={productionData.gravelWheelbarrows} onChange={(e) => setProductionData({ ...productionData, gravelWheelbarrows: e.target.value })} />
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <TextField fullWidth type="number" label="Wheelbarrow Sand (per Sack)" value={productionData.sandWheelbarrows} onChange={(e) => setProductionData({ ...productionData, sandWheelbarrows: e.target.value })} />
                                    </Grid>

                                    {productionData.sacksUsed > 0 && (
                                        <Grid item xs={12}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                                                <Typography variant="subtitle2">Production per Sack (Blocks)</Typography>
                                                <Chip
                                                    label={`Total Blocks: ${(productionData.sackDetails || []).reduce((sum, val) => sum + (parseInt(val) || 0), 0)}`}
                                                    color="primary"
                                                    size="small"
                                                    sx={{ fontWeight: 'bold' }}
                                                />
                                            </Box>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                                                {(productionData.sackDetails || []).map((val, idx) => (
                                                    <TextField key={idx} label={`Sack ${idx + 1}`} size="small" type="number" value={val} onChange={(e) => handleSackDetailChange(idx, e.target.value)} sx={{ width: 100 }} />
                                                ))}
                                            </Box>
                                        </Grid>
                                    )}

                                    <Grid item xs={12} sm={4}>
                                        <Box sx={{ p: 2, bgcolor: '#f0f0f0', borderRadius: 1 }}>
                                            <Typography variant="caption">Calculated Labor Pot</Typography>
                                            <Typography variant="h6" color="secondary">{Math.round(computeActualPot(productionData) || 0).toLocaleString()} FC</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    size="large"
                                    onClick={handleSave}
                                    sx={{ mt: 3, bgcolor: '#30368a' }}
                                    startIcon={<SaveIcon />}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Saving..." : (productionData.id || productionData._id ? "UPDATE PRODUCTION" : "RECORD PRODUCTION")}
                                </Button>
                            </Paper>
                        </Grid>

                        <Grid item xs={12}>
                            <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                    <Typography variant="h6">Production Logs</Typography>
                                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', p: 1, border: '1px solid #ddd', borderRadius: 1 }}>
                                        <Typography variant="caption" fontWeight="bold">Period Filter:</Typography>
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
                                {(!fromDate || !toDate) ? (
                                    <Alert severity="warning" sx={{ mt: 2, bgcolor: '#fffde7', border: '1px solid #fff59d' }}>
                                        <b>No Filter Active:</b> Please select a date range to view production logs.
                                    </Alert>
                                ) : recentProductions.length === 0 ? (
                                    <Alert severity="info" sx={{ mt: 2 }}>
                                        No production runs found for this period.
                                    </Alert>
                                ) : null}

                                {fromDate && toDate && recentProductions.length > 0 && (
                                    <TableContainer>
                                        <Table size="small">
                                            <TableHead sx={{ bgcolor: '#eee' }}>
                                                <TableRow>
                                                    <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                                                    <TableCell sx={{ fontWeight: 'bold' }}>Machine</TableCell>
                                                    <TableCell sx={{ fontWeight: 'bold' }}>Operator</TableCell>
                                                    <TableCell sx={{ fontWeight: 'bold' }}>Block Type</TableCell>
                                                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Sacks</TableCell>
                                                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Blocks</TableCell>
                                                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Cost/Block ($)</TableCell>
                                                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {recentProductions.map(r => (
                                                    <TableRow key={r.id}>
                                                        <TableCell>{dayjs(r.date).format('DD/MM/YYYY')}</TableCell>
                                                        <TableCell>{r.machineNo}</TableCell>
                                                        <TableCell>{r.operatorName}</TableCell>
                                                        <TableCell>{r.blockType}</TableCell>
                                                        <TableCell align="right">{r.sacksUsed}</TableCell>
                                                        <TableCell align="right">{r.totalBlocks}</TableCell>
                                                        <TableCell align="right">
                                                            ${(r.totalBlocks > 0 ? (parseFloat(r.totalCost) || 0) / r.totalBlocks : 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                        </TableCell>
                                                        <TableCell align="right">
                                                            <IconButton size="small" color="primary" onClick={() => setProductionData(r)}><EditIcon fontSize="small" /></IconButton>
                                                            <IconButton size="small" color="error" onClick={async () => {
                                                                if (window.confirm("Delete this record?")) {
                                                                    const serverId = r._id || r.id;
                                                                    
                                                                    // Optimistically update UI
                                                                    const backup = [...rawRecentProductions];
                                                                    setRawRecentProductions(prev => prev.filter(item => (item._id || item.id) !== serverId));
                                                                    toast.success("Record deleted");

                                                                    try {
                                                                        if (typeof serverId === 'string' && serverId.length > 10) {
                                                                            await axios.post(`${ENDPOINT_URL}/delete-block-production`, { id: serverId });
                                                                        }
                                                                        // Refresh state to ensure perfect sync
                                                                        fetchMisc().catch(() => {});
                                                                    } catch (err) {
                                                                        console.error("Delete failed", err);
                                                                        toast.error("Server update failed");
                                                                        // Rollback on failure
                                                                        setRawRecentProductions(backup);
                                                                    }
                                                                }
                                                            }}><DeleteIcon fontSize="small" /></IconButton>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                )}

                                {fromDate && toDate && recentProductions.length > 0 && (
                                    <Box sx={{ mt: 3, p: 2, bgcolor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 2 }}>
                                        <Typography variant="subtitle2" fontWeight="bold" color="#166534" gutterBottom>
                                            Period Summary
                                        </Typography>
                                        <Grid container spacing={2} alignItems="center">
                                            <Grid item xs={12} sm={4}>
                                                <Typography variant="body2" color="#15803d">
                                                    <b>Total Cement Sacks:</b> {productionSummary.totalSacks}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={8}>
                                                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
                                                    <Typography variant="body2" color="#15803d">
                                                        <b>Blocks Produced:</b>
                                                    </Typography>
                                                    {Object.entries(productionSummary.blocksByType).map(([type, count]) => (
                                                        <Chip key={type} label={`${type}: ${count.toLocaleString()}`} size="small" sx={{ bgcolor: '#dcfce7', color: '#166534', fontWeight: 'bold' }} />
                                                    ))}
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                )}
                            </Paper>
                        </Grid>

                        {/* Transparent Breakdown of Production Logs */}
                        {recentProductions.length > 0 && (
                            <Grid item xs={12}>
                                <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3, bgcolor: '#f9fbe7', border: '1px solid #c5e1a5' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                        <Typography variant="h6">📊 Transparent Breakdown — Who Earned What</Typography>
                                    </Box>
                                    <Grid container spacing={2}>
                                        {recentProductions.map((r) => {
                                            const workersList = [
                                                { name: r.operatorName, half: r.halfDayOperator || false, role: '👷 Operator' },
                                                { name: r.helper1, half: r.halfDayHelper1 || false, role: '🔧 Helper 1' },
                                                { name: r.helper2, half: r.halfDayHelper2 || false, role: '🔧 Helper 2' },
                                                { name: r.helper3, half: r.halfDayHelper3 || false, role: '🔧 Helper 3' }
                                            ].filter(w => w.name);

                                            const workerCount = workersList.length;

                                            const rates = configs?.laborRates || {
                                                rate50_33: { perSack: 10000 },
                                                rate20: { t1_sacks: 6, t1_rate: 9000, t2_sacks: 7, t2_rate: 16500, t3_sacks: 8, t3_rate: 19000, t4_sacks: 12, t4_rate: 21500, t5_rate: 24500 },
                                                rate15: { t1_sacks: 5, t1_rate: 9000, t2_sacks: 6, t2_rate: 16500, t3_sacks: 7, t3_rate: 19000, t4_sacks: 10, t4_rate: 21500, t5_rate: 24500 },
                                                rate14: { t1_sacks: 6, t1_rate: 9000, t2_sacks: 7, t2_rate: 17000, t3_sacks: 8, t3_rate: 19500, t4_sacks: 9, t4_rate: 22000, t5_rate: 24500 },
                                                rate12: { t1_sacks: 6, t1_rate: 9000, t2_sacks: 7, t2_rate: 17000, t3_sacks: 8, t3_rate: 19500, t4_sacks: 9, t4_rate: 22000, t5_rate: 24500 },
                                                rate10: { t1_sacks: 6, t1_rate: 9000, t2_sacks: 7, t2_rate: 17000, t3_sacks: 8, t3_rate: 19500, t4_sacks: 9, t4_rate: 22000, t5_rate: 24500 }
                                            };

                                            const calculateWorkerShare = (typeStr, s, e, half) => {
                                                if (typeStr.includes("50") || typeStr.includes("33")) {
                                                    return half ? (s * (rates?.rate50_33?.perSack || 0)) / 2 : (s * (rates?.rate50_33?.perSack || 0)) / Math.max(e, 1);
                                                }

                                                let rt = null, limitSacks = 0;
                                                if (typeStr.includes("20")) { rt = rates?.rate20 || {}; }
                                                else if (typeStr.includes("15")) { rt = rates?.rate15 || {}; }
                                                else if (typeStr.includes("14")) { rt = rates?.rate14 || rates?.rate10_14_12 || {}; }
                                                else if (typeStr.includes("12")) { rt = rates?.rate12 || rates?.rate10_14_12 || {}; }
                                                else if (typeStr.includes("10")) { rt = rates?.rate10 || rates?.rate10_14_12 || {}; }
                                                else return 0;

                                                limitSacks = rt.t2_sacks || 0;

                                                const effectiveSacks = half ? Math.min(s, limitSacks) : s;

                                                let rate = 0;
                                                if (effectiveSacks <= (rt.t1_sacks || 0)) rate = (rt.t1_rate || 0) * s;
                                                else if (effectiveSacks <= (rt.t2_sacks || 0)) rate = rt.t2_rate || 0;
                                                else if (effectiveSacks === (rt.t3_sacks || 0)) rate = rt.t3_rate || 0;
                                                else if (effectiveSacks <= (rt.t4_sacks || 0)) rate = rt.t4_rate || 0;
                                                else rate = rt.t5_rate || 0;

                                                return half ? rate / 2 : rate;
                                            };

                                            const standardSpots = 3;
                                            const unitShare = calculateWorkerShare(r.blockType, r.sacksUsed || 0, standardSpots, false);

                                            const detailedWorkers = workersList.map(w => {
                                                const share = w.half ? unitShare / 2 : unitShare;
                                                return { ...w, share };
                                            });

                                            const machinePayout = detailedWorkers.reduce((sum, w) => sum + w.share, 0);
                                            const totalLaborPot = machinePayout;

                                            return (
                                                <Grid item xs={12} md={6} key={r.id}>
                                                    <Paper sx={{ p: 2, border: '1px solid #aed581', borderRadius: 2 }}>
                                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                                            <Box>
                                                                <Typography variant="subtitle2" fontWeight="bold">Machine {r.machineNo} — {r.blockType}</Typography>
                                                                <Typography variant="caption" color="textSecondary">{dayjs(r.date).format('DD/MM/YYYY')} · {r.sacksUsed} sacks · {r.totalBlocks} blocks</Typography>
                                                            </Box>
                                                            <Box sx={{ textAlign: 'right' }}>
                                                                <Typography variant="caption" color="textSecondary">Total Labor Pot (incl. Mixer)</Typography>
                                                                <Typography variant="body1" fontWeight="bold" color="success.main">{Math.round(totalLaborPot || 0).toLocaleString()} FC</Typography>
                                                            </Box>
                                                        </Box>
                                                        <Divider sx={{ my: 1 }} />
                                                        <Typography variant="caption" color="textSecondary" display="block" mb={1}>
                                                            Unit Share: <b>{Math.round(unitShare).toLocaleString()} FC</b> (based on {standardSpots} spots per run)
                                                        </Typography>
                                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                                            {detailedWorkers.map((w, wi) => (
                                                                <Box key={wi} sx={{ p: 1, bgcolor: '#e8f5e9', borderRadius: 1, border: '1px solid #a5d6a7', minWidth: 140 }}>
                                                                    <Typography variant="caption" color="textSecondary">{w.role}</Typography>
                                                                    <Typography variant="body2" fontWeight="bold">
                                                                        {w.name} {w.half && <span style={{ color: '#ff9800', fontSize: '0.8em' }}>(½ Day)</span>}
                                                                    </Typography>
                                                                    <Typography variant="body2" color="success.main">+{Math.round(w.share || 0).toLocaleString()} FC</Typography>
                                                                </Box>
                                                            ))}
                                                        </Box>
                                                    </Paper>
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </Paper>
                            </Grid>
                        )}
                    </Grid>
                </Box>
            </MainContent>
        </Box>
    );
}

export default BlockProductionView;
