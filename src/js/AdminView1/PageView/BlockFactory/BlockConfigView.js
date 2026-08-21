import React, { useEffect, useState } from 'react';
import SidebarDash from '../../../component/SidebarDash';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { cachedGet } from '../../../utils/apiCache';
import dayjs from 'dayjs';
import {
    Container, Typography, Paper, Grid, TextField, Button, Box, IconButton,
    CssBaseline, AppBar, Toolbar, Drawer, Divider, List, Table, TableBody,
    TableCell, TableHead, TableRow, TableContainer,
    Dialog, DialogTitle, DialogContent, DialogActions, ListItem, ListItemIcon, ListItemText, Alert, CircularProgress
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import MessageAdminView from '../../MessageAdminView';
import Logout from '../../../component/NetworkLogoutIcon';
import { logOut } from '../../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import SaveIcon from '@mui/icons-material/Save';
import { styled } from '@mui/material/styles';
import { ENDPOINT_URL } from '../../../apiConfig';

import { toast } from 'react-toastify';
import ExcelJS from 'exceljs';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DownloadIcon from '@mui/icons-material/Download';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import WarningIcon from '@mui/icons-material/Warning';

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

function BlockConfigView() {
    const navigate = useNavigate();
    const user = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const [sideBar, setSideBar] = useState(true);

    const handleLogout = () => {
        localStorage.removeItem('user');
        dispatch(logOut());
        navigate('/');
    };

    const [globalConfig, setGlobalConfig] = useState({
        id: 1,
        cementPrice: 0,
        concassePrice: 0,
        gravelPrice: 0,
        sandPrice: 0,
        rentPrice: 0,
        taxesPrice: 0,
        fuelPrice: 0,
        transportPrice: 0,
        commissionPrice: 0,
        supervisorSalary: 0,
        staffWages: 0,
        damageRate: 3000,
        mixerRatePerSack: 300,
        laborRates: {
            rate50_33: { perSack: 10000 },
            rate20: {
                t1_sacks: 6, t1_rate: 9000,
                t2_sacks: 7, t2_rate: 16500,
                t3_sacks: 8, t3_rate: 19000,
                t4_sacks: 12, t4_rate: 21500,
                t5_rate: 24500
            },
            rate15: {
                t1_sacks: 5, t1_rate: 9000,
                t2_sacks: 6, t2_rate: 16500,
                t3_sacks: 7, t3_rate: 19000,
                t4_sacks: 10, t4_rate: 21500,
                t5_rate: 24500
            },
            rate14: { t1_sacks: 6, t1_rate: 9000, t2_sacks: 7, t2_rate: 17000, t3_sacks: 8, t3_rate: 19500, t4_sacks: 9, t4_rate: 22000, t5_rate: 24500 },
            rate12: { t1_sacks: 6, t1_rate: 9000, t2_sacks: 7, t2_rate: 17000, t3_sacks: 8, t3_rate: 19500, t4_sacks: 9, t4_rate: 22000, t5_rate: 24500 },
            rate10: { t1_sacks: 6, t1_rate: 9000, t2_sacks: 7, t2_rate: 17000, t3_sacks: 8, t3_rate: 19500, t4_sacks: 9, t4_rate: 22000, t5_rate: 24500 }
        }
    });

    // Smart Check State
    const [openSmartCheck, setOpenSmartCheck] = useState(false);
    const [missingWorkers, setMissingWorkers] = useState([]);
    const [pendingData, setPendingData] = useState([]);
    const [pendingType, setPendingType] = useState('Production');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAccess = async () => {
            try {
                // Fetch Access
                const accRes = await cachedGet(`${ENDPOINT_URL}/grantAccess`);
                const userAccess = accRes.data?.data?.find(row => row.userID === user.data.id);
                const isGG = user.data.userName === 'GG';
                if (userAccess) {
                    const blockAccess = userAccess.modules.find(m => m.moduleName === 'Block-Factory')?.access;
                    if (!isGG && !blockAccess?.editM) {
                        toast.error("You don't have permission to access Configuration.");
                        navigate('/AdminHome');
                    }
                } else if (!isGG) {
                    navigate('/AdminHome');
                }

                // Fetch Config
                const configRes = await axios.get(`${ENDPOINT_URL}/block-config`);
                if (configRes.data?.data && configRes.data.data.length > 0) {
                    const config = configRes.data?.data?.[0];
                    if (!config.laborRates) {
                        config.laborRates = {
                            rate50_33: { perSack: 10000 },
                            rate20: { t1_sacks: 6, t1_rate: 9000, t2_sacks: 7, t2_rate: 16500, t3_sacks: 8, t3_rate: 19000, t4_sacks: 12, t4_rate: 21500, t5_rate: 24500 },
                            rate15: { t1_sacks: 5, t1_rate: 9000, t2_sacks: 6, t2_rate: 16500, t3_sacks: 7, t3_rate: 19000, t4_sacks: 10, t4_rate: 21500, t5_rate: 24500 },
                            rate10_14_12: { t1_sacks: 6, t1_rate: 9000, t2_sacks: 7, t2_rate: 17000, t3_sacks: 8, t3_rate: 19500, t4_sacks: 9, t4_rate: 22000, t5_rate: 24500 }
                        };
                    }
                    if (!config.mixerCapUnder4) config.mixerCapUnder4 = 13500;
                    if (config.mixerRatePerSack === undefined) config.mixerRatePerSack = 300;
                    setGlobalConfig(config);
                }
            } catch (error) {
                console.error('Error fetching initial data:', error);
            } finally {
                setIsLoading(false);
            }
        };
        if (user.data.id) fetchAccess();
    }, [user, navigate]);

    const toggleDrawer = () => setSideBar(!sideBar);



    const handleChange = (field, value) => {
        setGlobalConfig({ ...globalConfig, [field]: value === '' ? '' : Number(value) });
    };

    const handleLaborChange = (group, field, value) => {
        setGlobalConfig({
            ...globalConfig,
            laborRates: {
                ...(globalConfig.laborRates || {}),
                [group]: {
                    ...((globalConfig.laborRates && globalConfig.laborRates[group]) || {}),
                    [field]: value === '' ? '' : Number(value)
                }
            }
        });
    };

    const handleSave = async () => {
        try {
            const payload = { 
                ...globalConfig,
                blockType: "GLOBAL" // Explicitly define for backend validation
            };
            delete payload._id;
            delete payload.id;
            await axios.post(`${ENDPOINT_URL}/create-block-config`, payload);
            toast.success("Pricing configurations saved successfully!");
        } catch (error) {
            toast.error("Failed to save pricing");
        }
    };

    const handleDownloadTemplate = async (type) => {
        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet(type + ' Template');

        let headers = [];
        let filename = `Block_${type}_Template.xlsx`;

        if (type === 'Production') {
            headers = ['Date (DD/MM/YYYY)', 'Machine', 'Operator', 'Block Type', 'Sacks', 'Total Blocks', 'Helper 1', 'Helper 2', 'Helper 3'];
        } else if (type === 'Sales') {
            headers = ['Date (DD/MM/YYYY)', 'Client Name', 'Block Type', 'Quantity', 'Unit Price'];
        } else if (type === 'Damage') {
            headers = ['Log Date (DD/MM/YYYY)', 'Production Date (DD/MM/YYYY)', 'Machine', 'Block Type', 'Quantity Damaged'];
        }

        sheet.addRow(headers);
        sheet.getRow(1).font = { bold: true };

        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const saveAs = require('file-saver');
        saveAs(blob, filename);
        toast.info(`Downloaded ${type} template`);
    };

    const performImport = async (data = pendingData, type = pendingType) => {
        let successCount = 0;
        const endpointMap = {
            'Production': 'create-block-production',
            'Sales': 'create-block-sales',
            'Damage': 'create-block-damage'
        };

        for (const item of data) {
            try {
                await axios.post(`${ENDPOINT_URL}/${endpointMap[type]}`, item);
                successCount++;
            } catch (err) {
                console.error(`Failed to push imported ${type} record`, err);
            }
        }
        toast.success(`Imported ${successCount} ${type} records!`);
        setOpenSmartCheck(false);
        setMissingWorkers([]);
        setPendingData([]);
    };

    const handleExcelImport = async (e, type = 'Production') => {
        const file = e.target.files[0];
        if (!file) return;

        const workbook = new ExcelJS.Workbook();
        try {
            const buffer = await file.arrayBuffer();
            await workbook.xlsx.load(buffer);
            const worksheet = workbook.getWorksheet(1);
            const importedData = [];

            worksheet.eachRow((row, rowNumber) => {
                if (rowNumber > 1) {
                    const cell1 = row.getCell(1).value;
                    const dateVal = dayjs(cell1, ['DD/MM/YYYY', 'YYYY-MM-DD']).isValid() ? dayjs(cell1, ['DD/MM/YYYY', 'YYYY-MM-DD']).format('YYYY-MM-DD') : null;

                    if (type === 'Production') {
                        const machine = row.getCell(2).value;
                        const operator = row.getCell(3).value;
                        const blockType = row.getCell(4).value;
                        const sacks = parseInt(row.getCell(5).value) || 0;
                        const totalBlocks = parseInt(row.getCell(6).value) || 0;
                        const h1 = row.getCell(7).value;
                        const h2 = row.getCell(8).value;
                        const h3 = row.getCell(9).value;

                        if (dateVal && machine && operator && sacks > 0) {
                            const avgPerSack = Math.floor(totalBlocks / sacks);
                            const remainder = totalBlocks % sacks;
                            const sackDetails = Array.from({ length: sacks }).map((_, i) =>
                                avgPerSack + (i < remainder ? 1 : 0)
                            );

                            importedData.push({
                                date: dateVal,
                                machineNo: String(machine),
                                operatorName: String(operator),
                                helper1: h1 ? String(h1) : "",
                                helper2: h2 ? String(h2) : "",
                                helper3: h3 ? String(h3) : "",
                                blockType: String(blockType || "Block 20"),
                                sacksUsed: sacks,
                                sackDetails,
                                totalBlocks,
                                cementUsed: sacks,
                                synced: false,
                                updateS: true
                            });
                        }
                    } else if (type === 'Sales') {
                        const client = row.getCell(2).value;
                        const bType = row.getCell(3).value;
                        const qty = parseFloat(row.getCell(4).value) || 0;
                        const price = parseFloat(row.getCell(5).value) || 0;

                        if (dateVal && client && qty > 0) {
                            importedData.push({
                                date: dateVal,
                                clientName: String(client),
                                blockType: String(bType || "Block 20"),
                                quantitySold: qty,
                                pricePerUnit: price,
                                totalAmount: qty * price,
                                synced: false,
                                updateS: true
                            });
                        }
                    } else if (type === 'Damage') {
                        const cell2 = row.getCell(2).value;
                        const prodDate = dayjs(cell2, ['DD/MM/YYYY', 'YYYY-MM-DD']).isValid() ? dayjs(cell2, ['DD/MM/YYYY', 'YYYY-MM-DD']).format('YYYY-MM-DD') : null;
                        const machine = row.getCell(3).value;
                        const bType = row.getCell(4).value;
                        const qty = parseInt(row.getCell(5).value) || 0;

                        if (dateVal && machine && qty > 0) {
                            importedData.push({
                                date: dateVal,
                                productionDate: prodDate,
                                machineNo: String(machine),
                                blockType: String(bType || "Block 20"),
                                damagedBlocks: qty,
                                damageRate: 0,
                                synced: false,
                                updateS: true
                            });
                        }
                    }
                }
            });

            if (importedData.length === 0) {
                toast.warning("No valid data found in Excel sheet.");
                return;
            }

            // --- SMART CHECK ---
            if (type === 'Production') {
                const uniqueWorkersInFile = new Set();
                importedData.forEach(d => {
                    if (d.operatorName) uniqueWorkersInFile.add(d.operatorName);
                    if (d.helper1) uniqueWorkersInFile.add(d.helper1);
                    if (d.helper2) uniqueWorkersInFile.add(d.helper2);
                    if (d.helper3) uniqueWorkersInFile.add(d.helper3);
                });

                const empRes = await axios.get(`${ENDPOINT_URL}/employee`);
                const registeredEmployees = empRes.data.data;
                const registeredNames = new Set(registeredEmployees.map(e => e.employeeName.trim().toUpperCase()));

                const missing = Array.from(uniqueWorkersInFile).filter(w => !registeredNames.has(w.trim().toUpperCase()));

                if (missing.length > 0) {
                    setMissingWorkers(missing);
                    setPendingData(importedData);
                    setPendingType(type);
                    setOpenSmartCheck(true);
                    return;
                }
            }

            // If no missing or not Production, proceed
            await performImport(importedData, type);
        } catch (error) {
            console.error("Excel import failed", error);
            toast.error("Import failed. Check file format.");
        }
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#30368a' }}>
                <Toolbar>
                    <IconButton color="inherit" onClick={toggleDrawer} edge="start" sx={{ mr: 2 }}><MenuIcon /></IconButton>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>Block Factory Pricing & Overheads</Typography>
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
                            {isLoading ? (
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
                                    <CircularProgress size={60} />
                                </Box>
                            ) : (
                                <>
                                    <Paper sx={{ p: 4, borderRadius: 2, boxShadow: 3 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                                            <Typography variant="h5" color="primary" fontWeight="bold">Market Pricing (Unit Costs in $)</Typography>
                                            <Button variant="contained" startIcon={<SaveIcon />} onClick={handleSave} sx={{ bgcolor: '#30368a' }}>Save Changes</Button>
                                        </Box>
                                        <Divider sx={{ mb: 4 }} />
                                        <Grid container spacing={3} sx={{ mb: 4 }}>
                                            <Grid item xs={12} sm={2.4}>
                                                <TextField fullWidth label="Cement (per sack $)" type="number" value={globalConfig.cementPrice} onChange={(e) => handleChange('cementPrice', e.target.value)} variant="outlined" />
                                            </Grid>
                                            <Grid item xs={12} sm={2.4}>
                                                <TextField fullWidth label="Concasse (per m³ $)" type="number" value={globalConfig.concassePrice} onChange={(e) => handleChange('concassePrice', e.target.value)} variant="outlined" />
                                            </Grid>
                                            <Grid item xs={12} sm={2.4}>
                                                <TextField fullWidth label="Gravel (per m³ $)" type="number" value={globalConfig.gravelPrice} onChange={(e) => handleChange('gravelPrice', e.target.value)} variant="outlined" />
                                            </Grid>
                                            <Grid item xs={12} sm={2.4}>
                                                <TextField fullWidth label="Sand (per m³ $)" type="number" value={globalConfig.sandPrice} onChange={(e) => handleChange('sandPrice', e.target.value)} variant="outlined" />
                                            </Grid>
                                            <Grid item xs={12} sm={2.4}>
                                                <TextField fullWidth label="Wheelbarrows per m³" type="number" value={globalConfig.wheelbarrowPerM3 || 15} onChange={(e) => handleChange('wheelbarrowPerM3', e.target.value)} variant="outlined" />
                                            </Grid>
                                        </Grid>

                                        <Typography variant="h6" sx={{ mb: 2 }}>Daily/Monthly Overheads ($)</Typography>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={2.4}>
                                                <TextField fullWidth label="Rent ($)" type="number" value={globalConfig.rentPrice} onChange={(e) => handleChange('rentPrice', e.target.value)} />
                                            </Grid>
                                            <Grid item xs={12} sm={2.4}>
                                                <TextField fullWidth label="Taxes ($)" type="number" value={globalConfig.taxesPrice} onChange={(e) => handleChange('taxesPrice', e.target.value)} />
                                            </Grid>
                                            <Grid item xs={12} sm={2.4}>
                                                <TextField fullWidth label="Fuel ($)" type="number" value={globalConfig.fuelPrice} onChange={(e) => handleChange('fuelPrice', e.target.value)} />
                                            </Grid>
                                            <Grid item xs={12} sm={2.4}>
                                                <TextField fullWidth label="Transport ($)" type="number" value={globalConfig.transportPrice} onChange={(e) => handleChange('transportPrice', e.target.value)} />
                                            </Grid>
                                            <Grid item xs={12} sm={2.4}>
                                                <TextField fullWidth label="Commission ($)" type="number" value={globalConfig.commissionPrice} onChange={(e) => handleChange('commissionPrice', e.target.value)} />
                                            </Grid>
                                            <Grid item xs={12} sm={3}>
                                                <TextField fullWidth label="Supervisor Salary ($/month)" type="number" value={globalConfig.supervisorSalary || 0} onChange={(e) => handleChange('supervisorSalary', e.target.value)} />
                                            </Grid>
                                            <Grid item xs={12} sm={3}>
                                                <TextField fullWidth label="Staff Wages ($/month)" type="number" value={globalConfig.staffWages || 0} onChange={(e) => handleChange('staffWages', e.target.value)} />
                                            </Grid>
                                        </Grid>

                                        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>Penalties</Typography>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={3}>
                                                <TextField
                                                    fullWidth
                                                    label="Damage Rate (FC per block)"
                                                    type="number"
                                                    value={globalConfig.damageRate || 0}
                                                    onChange={(e) => handleChange('damageRate', e.target.value)}
                                                    helperText="Deducted equally from workers per broken block"
                                                />
                                            </Grid>
                                        </Grid>
                                    </Paper>

                                    <Paper sx={{ p: 4, mt: 3, borderRadius: 2, boxShadow: 3 }}>
                                        <Typography variant="h5" color="primary" fontWeight="bold" sx={{ mb: 3 }}>Labor Payment Rates Configuration (FC)</Typography>
                                        <Divider sx={{ mb: 3 }} />

                                        <Box sx={{ mb: 4, p: 2, bgcolor: '#f8f9fa', borderRadius: 1, border: '1px solid #dee2e6' }}>
                                            <Typography variant="h6" sx={{ color: '#30368a', mb: 2 }}>Mixer Team Configuration</Typography>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} sm={4}>
                                                    <TextField
                                                        fullWidth
                                                        label="Mixer Rate per Sack (FC)"
                                                        type="number"
                                                        variant="outlined"
                                                        value={globalConfig.mixerRatePerSack !== undefined ? globalConfig.mixerRatePerSack : 300}
                                                        onChange={(e) => handleChange('mixerRatePerSack', e.target.value)}
                                                        helperText="Mixer payout per sack processed on a given date"
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Box>

                                        {/* 50 and 33 */}
                                        <Typography variant="h6" sx={{ mb: 2 }}>Block 50 & 33</Typography>
                                        <Grid container spacing={3} sx={{ mb: 4 }}>
                                            <Grid item xs={12} sm={4}>
                                                <TextField fullWidth label="Rate per Sack (FC)" type="number"
                                                    value={globalConfig.laborRates?.rate50_33?.perSack ?? ''}
                                                    onChange={(e) => handleLaborChange('rate50_33', 'perSack', e.target.value)} />
                                            </Grid>
                                        </Grid>

                                        {/* 20 */}
                                        <Typography variant="h6" sx={{ mb: 2 }}>Block 20</Typography>
                                        <Grid container spacing={2} sx={{ mb: 4 }}>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="≤ Sacks (Tier 1)" type="number" value={globalConfig.laborRates?.rate20?.t1_sacks ?? ''} onChange={(e) => handleLaborChange('rate20', 't1_sacks', e.target.value)} /></Grid>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="Rate (Tier 1) (FC)" type="number" value={globalConfig.laborRates?.rate20?.t1_rate ?? ''} onChange={(e) => handleLaborChange('rate20', 't1_rate', e.target.value)} /></Grid>
                                            <Grid item xs={12} sm={7.2}></Grid>

                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="≤ Sacks (Tier 2)" type="number" value={globalConfig.laborRates?.rate20?.t2_sacks ?? ''} onChange={(e) => handleLaborChange('rate20', 't2_sacks', e.target.value)} /></Grid>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="Rate (Tier 2) (FC)" type="number" value={globalConfig.laborRates?.rate20?.t2_rate ?? ''} onChange={(e) => handleLaborChange('rate20', 't2_rate', e.target.value)} /></Grid>
                                            <Grid item xs={12} sm={7.2}></Grid>

                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="= Sacks (Tier 3)" type="number" value={globalConfig.laborRates?.rate20?.t3_sacks ?? ''} onChange={(e) => handleLaborChange('rate20', 't3_sacks', e.target.value)} /></Grid>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="Rate (Tier 3) (FC)" type="number" value={globalConfig.laborRates?.rate20?.t3_rate ?? ''} onChange={(e) => handleLaborChange('rate20', 't3_rate', e.target.value)} /></Grid>
                                            <Grid item xs={12} sm={7.2}></Grid>

                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="≤ Sacks (Tier 4)" type="number" value={globalConfig.laborRates?.rate20?.t4_sacks ?? ''} onChange={(e) => handleLaborChange('rate20', 't4_sacks', e.target.value)} /></Grid>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="Rate (Tier 4) (FC)" type="number" value={globalConfig.laborRates?.rate20?.t4_rate ?? ''} onChange={(e) => handleLaborChange('rate20', 't4_rate', e.target.value)} /></Grid>
                                            <Grid item xs={12} sm={7.2}></Grid>

                                            <Grid item xs={6} sm={2.4}></Grid>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label={`> ${globalConfig.laborRates?.rate20?.t4_sacks || 12} Sacks Rate`} type="number" value={globalConfig.laborRates?.rate20?.t5_rate ?? ''} onChange={(e) => handleLaborChange('rate20', 't5_rate', e.target.value)} /></Grid>
                                            <Grid item xs={12} sm={7.2}></Grid>
                                        </Grid>

                                        {/* 15 */}
                                        <Typography variant="h6" sx={{ mb: 2 }}>Block 15</Typography>
                                        <Grid container spacing={2} sx={{ mb: 4 }}>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="≤ Sacks (Tier 1)" type="number" value={globalConfig.laborRates?.rate15?.t1_sacks ?? ''} onChange={(e) => handleLaborChange('rate15', 't1_sacks', e.target.value)} /></Grid>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="Rate (Tier 1) (FC)" type="number" value={globalConfig.laborRates?.rate15?.t1_rate ?? ''} onChange={(e) => handleLaborChange('rate15', 't1_rate', e.target.value)} /></Grid>
                                            <Grid item xs={12} sm={7.2}></Grid>

                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="= Sacks (Tier 2)" type="number" value={globalConfig.laborRates?.rate15?.t2_sacks ?? ''} onChange={(e) => handleLaborChange('rate15', 't2_sacks', e.target.value)} /></Grid>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="Rate (Tier 2) (FC)" type="number" value={globalConfig.laborRates?.rate15?.t2_rate ?? ''} onChange={(e) => handleLaborChange('rate15', 't2_rate', e.target.value)} /></Grid>
                                            <Grid item xs={12} sm={7.2}></Grid>

                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="= Sacks (Tier 3)" type="number" value={globalConfig.laborRates?.rate15?.t3_sacks ?? ''} onChange={(e) => handleLaborChange('rate15', 't3_sacks', e.target.value)} /></Grid>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="Rate (Tier 3) (FC)" type="number" value={globalConfig.laborRates?.rate15?.t3_rate ?? ''} onChange={(e) => handleLaborChange('rate15', 't3_rate', e.target.value)} /></Grid>
                                            <Grid item xs={12} sm={7.2}></Grid>

                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="≤ Sacks (Tier 4)" type="number" value={globalConfig.laborRates?.rate15?.t4_sacks ?? ''} onChange={(e) => handleLaborChange('rate15', 't4_sacks', e.target.value)} /></Grid>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="Rate (Tier 4) (FC)" type="number" value={globalConfig.laborRates?.rate15?.t4_rate ?? ''} onChange={(e) => handleLaborChange('rate15', 't4_rate', e.target.value)} /></Grid>
                                            <Grid item xs={12} sm={7.2}></Grid>

                                            <Grid item xs={6} sm={2.4}></Grid>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label={`> ${globalConfig.laborRates?.rate15?.t4_sacks || 10} Sacks Rate`} type="number" value={globalConfig.laborRates?.rate15?.t5_rate ?? ''} onChange={(e) => handleLaborChange('rate15', 't5_rate', e.target.value)} /></Grid>
                                            <Grid item xs={12} sm={7.2}></Grid>
                                        </Grid>


                                        {/* Block 14 */}
                                        <Typography variant="h6" sx={{ mb: 2 }}>Block 14</Typography>
                                        <Grid container spacing={2} sx={{ mb: 4 }}>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="≤ Sacks (Tier 1)" type="number" value={globalConfig.laborRates?.rate14?.t1_sacks ?? ''} onChange={(e) => handleLaborChange('rate14', 't1_sacks', e.target.value)} /></Grid>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="Rate (Tier 1) (FC)" type="number" value={globalConfig.laborRates?.rate14?.t1_rate ?? ''} onChange={(e) => handleLaborChange('rate14', 't1_rate', e.target.value)} /></Grid>
                                            <Grid item xs={12} sm={7.2}></Grid>

                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="= Sacks (Tier 2)" type="number" value={globalConfig.laborRates?.rate14?.t2_sacks ?? ''} onChange={(e) => handleLaborChange('rate14', 't2_sacks', e.target.value)} /></Grid>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="Rate (Tier 2) (FC)" type="number" value={globalConfig.laborRates?.rate14?.t2_rate ?? ''} onChange={(e) => handleLaborChange('rate14', 't2_rate', e.target.value)} /></Grid>
                                            <Grid item xs={12} sm={7.2}></Grid>

                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="= Sacks (Tier 3)" type="number" value={globalConfig.laborRates?.rate14?.t3_sacks ?? ''} onChange={(e) => handleLaborChange('rate14', 't3_sacks', e.target.value)} /></Grid>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="Rate (Tier 3) (FC)" type="number" value={globalConfig.laborRates?.rate14?.t3_rate ?? ''} onChange={(e) => handleLaborChange('rate14', 't3_rate', e.target.value)} /></Grid>
                                            <Grid item xs={12} sm={7.2}></Grid>

                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="= Sacks (Tier 4)" type="number" value={globalConfig.laborRates?.rate14?.t4_sacks ?? ''} onChange={(e) => handleLaborChange('rate14', 't4_sacks', e.target.value)} /></Grid>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="Rate (Tier 4) (FC)" type="number" value={globalConfig.laborRates?.rate14?.t4_rate ?? ''} onChange={(e) => handleLaborChange('rate14', 't4_rate', e.target.value)} /></Grid>
                                            <Grid item xs={12} sm={7.2}></Grid>

                                            <Grid item xs={6} sm={2.4}></Grid>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label={`≥ ${globalConfig.laborRates?.rate14?.t4_sacks ? Number(globalConfig.laborRates.rate14.t4_sacks) + 1 : 10} Sacks Rate`} type="number" value={globalConfig.laborRates?.rate14?.t5_rate ?? ''} onChange={(e) => handleLaborChange('rate14', 't5_rate', e.target.value)} /></Grid>
                                            <Grid item xs={12} sm={7.2}></Grid>
                                        </Grid>

                                        {/* Block 12 */}
                                        <Typography variant="h6" sx={{ mb: 2 }}>Block 12</Typography>
                                        <Grid container spacing={2} sx={{ mb: 4 }}>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="≤ Sacks (Tier 1)" type="number" value={globalConfig.laborRates?.rate12?.t1_sacks ?? ''} onChange={(e) => handleLaborChange('rate12', 't1_sacks', e.target.value)} /></Grid>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="Rate (Tier 1) (FC)" type="number" value={globalConfig.laborRates?.rate12?.t1_rate ?? ''} onChange={(e) => handleLaborChange('rate12', 't1_rate', e.target.value)} /></Grid>
                                            <Grid item xs={12} sm={7.2}></Grid>

                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="= Sacks (Tier 2)" type="number" value={globalConfig.laborRates?.rate12?.t2_sacks ?? ''} onChange={(e) => handleLaborChange('rate12', 't2_sacks', e.target.value)} /></Grid>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="Rate (Tier 2) (FC)" type="number" value={globalConfig.laborRates?.rate12?.t2_rate ?? ''} onChange={(e) => handleLaborChange('rate12', 't2_rate', e.target.value)} /></Grid>
                                            <Grid item xs={12} sm={7.2}></Grid>

                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="= Sacks (Tier 3)" type="number" value={globalConfig.laborRates?.rate12?.t3_sacks ?? ''} onChange={(e) => handleLaborChange('rate12', 't3_sacks', e.target.value)} /></Grid>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="Rate (Tier 3) (FC)" type="number" value={globalConfig.laborRates?.rate12?.t3_rate ?? ''} onChange={(e) => handleLaborChange('rate12', 't3_rate', e.target.value)} /></Grid>
                                            <Grid item xs={12} sm={7.2}></Grid>

                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="= Sacks (Tier 4)" type="number" value={globalConfig.laborRates?.rate12?.t4_sacks ?? ''} onChange={(e) => handleLaborChange('rate12', 't4_sacks', e.target.value)} /></Grid>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="Rate (Tier 4) (FC)" type="number" value={globalConfig.laborRates?.rate12?.t4_rate ?? ''} onChange={(e) => handleLaborChange('rate12', 't4_rate', e.target.value)} /></Grid>
                                            <Grid item xs={12} sm={7.2}></Grid>

                                            <Grid item xs={6} sm={2.4}></Grid>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label={`≥ ${globalConfig.laborRates?.rate12?.t4_sacks ? Number(globalConfig.laborRates.rate12.t4_sacks) + 1 : 10} Sacks Rate`} type="number" value={globalConfig.laborRates?.rate12?.t5_rate ?? ''} onChange={(e) => handleLaborChange('rate12', 't5_rate', e.target.value)} /></Grid>
                                            <Grid item xs={12} sm={7.2}></Grid>
                                        </Grid>

                                        {/* Block 10 */}
                                        <Typography variant="h6" sx={{ mb: 2 }}>Block 10</Typography>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="≤ Sacks (Tier 1)" type="number" value={globalConfig.laborRates?.rate10?.t1_sacks ?? ''} onChange={(e) => handleLaborChange('rate10', 't1_sacks', e.target.value)} /></Grid>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="Rate (Tier 1) (FC)" type="number" value={globalConfig.laborRates?.rate10?.t1_rate ?? ''} onChange={(e) => handleLaborChange('rate10', 't1_rate', e.target.value)} /></Grid>
                                            <Grid item xs={12} sm={7.2}></Grid>

                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="= Sacks (Tier 2)" type="number" value={globalConfig.laborRates?.rate10?.t2_sacks ?? ''} onChange={(e) => handleLaborChange('rate10', 't2_sacks', e.target.value)} /></Grid>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="Rate (Tier 2) (FC)" type="number" value={globalConfig.laborRates?.rate10?.t2_rate ?? ''} onChange={(e) => handleLaborChange('rate10', 't2_rate', e.target.value)} /></Grid>
                                            <Grid item xs={12} sm={7.2}></Grid>

                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="= Sacks (Tier 3)" type="number" value={globalConfig.laborRates?.rate10?.t3_sacks ?? ''} onChange={(e) => handleLaborChange('rate10', 't3_sacks', e.target.value)} /></Grid>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="Rate (Tier 3) (FC)" type="number" value={globalConfig.laborRates?.rate10?.t3_rate ?? ''} onChange={(e) => handleLaborChange('rate10', 't3_rate', e.target.value)} /></Grid>
                                            <Grid item xs={12} sm={7.2}></Grid>

                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="= Sacks (Tier 4)" type="number" value={globalConfig.laborRates?.rate10?.t4_sacks ?? ''} onChange={(e) => handleLaborChange('rate10', 't4_sacks', e.target.value)} /></Grid>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label="Rate (Tier 4) (FC)" type="number" value={globalConfig.laborRates?.rate10?.t4_rate ?? ''} onChange={(e) => handleLaborChange('rate10', 't4_rate', e.target.value)} /></Grid>
                                            <Grid item xs={12} sm={7.2}></Grid>

                                            <Grid item xs={6} sm={2.4}></Grid>
                                            <Grid item xs={6} sm={2.4}><TextField fullWidth label={`≥ ${globalConfig.laborRates?.rate10?.t4_sacks ? Number(globalConfig.laborRates.rate10.t4_sacks) + 1 : 10} Sacks Rate`} type="number" value={globalConfig.laborRates?.rate10?.t5_rate ?? ''} onChange={(e) => handleLaborChange('rate10', 't5_rate', e.target.value)} /></Grid>
                                            <Grid item xs={12} sm={7.2}></Grid>
                                        </Grid>
                                    </Paper>

                                    <Paper sx={{ p: 4, mt: 3, borderRadius: 2, boxShadow: 3 }}>
                                        <Typography variant="h5" color="secondary" fontWeight="bold" sx={{ mb: 3 }}>Phase 2: Historical Data Import (Excel)</Typography>
                                        <Divider sx={{ mb: 3 }} />

                                        <Grid container spacing={3}>
                                            {/* Production Import */}
                                            <Grid item xs={12} md={4}>
                                                <Paper variant="outlined" sx={{ p: 2, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                    <Box>
                                                        <Typography variant="h6" color="primary">Production</Typography>
                                                        <Typography variant="caption" display="block" sx={{ mb: 2 }}>
                                                            Date | Machine | Operator | Block Type | Sacks | Total Blocks | Helpers
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                                        <Button size="small" startIcon={<DownloadIcon />} onClick={() => handleDownloadTemplate('Production')}>Template</Button>
                                                        <Button variant="contained" component="label" startIcon={<FileUploadIcon />} color="secondary" fullWidth>
                                                            Import Excel
                                                            <input type="file" hidden accept=".xlsx" onChange={(e) => handleExcelImport(e, 'Production')} />
                                                        </Button>
                                                    </Box>
                                                </Paper>
                                            </Grid>

                                            {/* Sales Import */}
                                            <Grid item xs={12} md={4}>
                                                <Paper variant="outlined" sx={{ p: 2, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                    <Box>
                                                        <Typography variant="h6" color="primary">Sales</Typography>
                                                        <Typography variant="caption" display="block" sx={{ mb: 2 }}>
                                                            Date | Client Name | Block Type | Quantity | Unit Price
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                                        <Button size="small" startIcon={<DownloadIcon />} onClick={() => handleDownloadTemplate('Sales')}>Template</Button>
                                                        <Button variant="contained" component="label" startIcon={<FileUploadIcon />} color="secondary" fullWidth>
                                                            Import Excel
                                                            <input type="file" hidden accept=".xlsx" onChange={(e) => handleExcelImport(e, 'Sales')} />
                                                        </Button>
                                                    </Box>
                                                </Paper>
                                            </Grid>

                                            {/* Damage Import */}
                                            <Grid item xs={12} md={4}>
                                                <Paper variant="outlined" sx={{ p: 2, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                    <Box>
                                                        <Typography variant="h6" color="primary">Damage</Typography>
                                                        <Typography variant="caption" display="block" sx={{ mb: 2 }}>
                                                            Log Date | Prod Date | Machine | Block Type | Quantity
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                                        <Button size="small" startIcon={<DownloadIcon />} onClick={() => handleDownloadTemplate('Damage')}>Template</Button>
                                                        <Button variant="contained" component="label" startIcon={<FileUploadIcon />} color="secondary" fullWidth>
                                                            Import Excel
                                                            <input type="file" hidden accept=".xlsx" onChange={(e) => handleExcelImport(e, 'Damage')} />
                                                        </Button>
                                                    </Box>
                                                </Paper>
                                            </Grid>
                                        </Grid>

                                        <Typography variant="caption" display="block" sx={{ mt: 3, color: '#888' }}>
                                            Note: Records are deduplicated automatically to prevent double entries.
                                        </Typography>
                                    </Paper>
                                </>
                            )}
                        </Grid>
                    </Grid>
                </Box>
            </MainContent>

            {/* --- SMART CHECK DIALOG --- */}
            <Dialog open={openSmartCheck} onClose={() => setOpenSmartCheck(false)} maxWidth="sm" fullWidth>
                <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'warning.main', fontWeight: 'bold' }}>
                    <WarningIcon /> Worker Name Smart Check
                </DialogTitle>
                <DialogContent dividers>
                    <Typography variant="body1" gutterBottom>
                        The following worker names in your Excel file are <b>not registered</b> in your system:
                    </Typography>
                    <List sx={{ bgcolor: '#fffde7', borderRadius: 1, my: 2, border: '1px solid #ffe082' }}>
                        {missingWorkers.map((name, idx) => (
                            <ListItem key={idx}>
                                <ListItemIcon><PersonAddIcon color="warning" /></ListItemIcon>
                                <ListItemText
                                    primary={<Typography fontWeight="bold">{name}</Typography>}
                                    secondary="Not found in Employees list"
                                />
                            </ListItem>
                        ))}
                    </List>
                    <Alert severity="warning" sx={{ mt: 2 }}>
                        <Typography variant="subtitle2" fontWeight="bold">What does this mean?</Typography>
                        If you import now:
                        <ul>
                            <li>Earnings will be calculated for these names in the dashboard.</li>
                            <li>But they <b>cannot</b> be linked to Payroll, Food, or Advances.</li>
                            <li>Typos (e.g., "DANIEL" vs "DANNY") will create duplicate records.</li>
                        </ul>
                    </Alert>
                </DialogContent>
                <DialogActions sx={{ p: 3 }}>
                    <Button onClick={() => setOpenSmartCheck(false)} color="inherit" sx={{ fontWeight: 'bold' }}>
                        Cancel & Fix Excel
                    </Button>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button onClick={() => performImport()} variant="contained" color="warning" sx={{ fontWeight: 'bold' }}>
                        Import Anyway
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default BlockConfigView;
