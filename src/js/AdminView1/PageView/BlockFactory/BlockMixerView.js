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
import DeleteIcon from '@mui/icons-material/Delete';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { styled } from '@mui/material/styles';
import { ENDPOINT_URL } from '../../../apiConfig';

import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import axios from 'axios';
import { cachedGet } from '../../../utils/apiCache';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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

function BlockMixerView() {
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
    const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));
    const [workerName, setWorkerName] = useState("");
    const [halfDay, setHalfDay] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Fetch Access
    const fetchMixerWorkers = async () => {
        try {
            const mixerRes = await axios.get(`${ENDPOINT_URL}/block-mixer`);
            if (mixerRes.data.data) {
                setMixerWorkers(mixerRes.data?.data?.filter(mw => mw.date === selectedDate));
            }
        } catch (err) {
            console.error('Error fetching mixer workers:', err);
        }
    };

    // Fetch Initial Data
    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                // Fetch Access
                const accRes = await cachedGet(`${ENDPOINT_URL}/grantAccess`);
                const userAccess = accRes.data?.data?.find(row => row.userID === user.data.id);
                if (userAccess) {
                    const blockAccess = userAccess.modules.find(m => m.moduleName === 'Block-Mixer')?.access;
                    if (user.data.userName !== 'GG' && (!blockAccess || !blockAccess.createM)) {
                        alert('You do not have permission to manage the Mixer Team.');
                        navigate('/SideBlockFactory');
                        return;
                    }
                }

                // Fetch Employees
                const empRes = await axios.get(`${ENDPOINT_URL}/employee`);
                const allEmployees = empRes.data.data;
                const factoryEmployees = allEmployees.filter(e => {
                    const isFactory = e.department && e.department.toUpperCase().includes('FACTORY');
                    const isActive = e.status !== 'Fired' && e.status !== 'Resign';
                    return isFactory && isActive;
                });
                setEmployees(factoryEmployees.length > 0 ? factoryEmployees : allEmployees.filter(e => e.status !== 'Fired' && e.status !== 'Resign'));

                // Fetch Productions (for worker availability check)
                const prodRes = await axios.get(`${ENDPOINT_URL}/block-production`);
                if (prodRes.data.data) setAllRuns(prodRes.data.data);

                // Fetch Mixer Workers
                await fetchMixerWorkers();

            } catch (err) {
                console.error('Error fetching initial data:', err);
            }
        };
        if (user.data.id) fetchInitialData();
    }, [user, navigate, selectedDate]);

    // Online States
    const [mixerWorkers, setMixerWorkers] = useState([]);
    const [allRuns, setAllRuns] = useState([]);



    const productionWorkersOnDate = useMemo(() => {
        const runsOnDate = allRuns.filter(r => dayjs(r.date).isSame(dayjs(selectedDate), 'day'));
        const workers = new Set();
        runsOnDate.forEach(r => {
            if (r.operatorName) workers.add(r.operatorName);
            if (r.helper1) workers.add(r.helper1);
            if (r.helper2) workers.add(r.helper2);
            if (r.helper3) workers.add(r.helper3);
        });
        return workers;
    }, [allRuns, selectedDate]);

    const availableEmployees = useMemo(() => {
        return employees.filter(e =>
            !productionWorkersOnDate.has(e.employeeName) &&
            !mixerWorkers.some(mw => mw.workerName === e.employeeName)
        );
    }, [employees, productionWorkersOnDate, mixerWorkers]);

    const toggleDrawer = () => setSideBar(!sideBar);

    const handleAddWorker = async () => {
        if (!workerName) {
            toast.warning("Please select a worker.");
            return;
        }
        if (mixerWorkers.some(w => w.workerName === workerName)) {
            toast.warning("Worker already added for this day.");
            return;
        }

        setIsSubmitting(true);
        try {
            const record = {
                date: selectedDate,
                workerName,
                halfDay,
                synced: false,
                updateS: true
            };

            // Save directly to server
            await axios.post(`${ENDPOINT_URL}/create-block-mixer`, record);

            // Trigger Refresh
            await fetchMixerWorkers();

            setWorkerName("");
            setHalfDay(false);
            toast.success("Worker added to mixer team.");
        } catch (error) {
            toast.error("Error adding worker.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async (id, serverId) => {
        if (!window.confirm("Remove this worker from mixer team?")) return;
        try {
            if (serverId) {
                await axios.post(`${ENDPOINT_URL}/delete-block-mixer`, { id: serverId });
            }
            const res = await axios.get(`${ENDPOINT_URL}/block-mixer`);
            if (res.data.data) setMixerWorkers(res.data?.data?.filter(mw => mw.date === selectedDate));
            toast.success("Worker removed.");
        } catch (err) {
            toast.error("Error removing worker.");
        }
    };

    return (
        <Box sx={{ display: 'flex', width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#30368a' }}>
                <Toolbar>
                    <IconButton color="inherit" onClick={toggleDrawer} edge="start" sx={{ mr: 2 }}><MenuIcon /></IconButton>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>Mixer Team Management</Typography>
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
                <Box sx={{ mt: 3, px: 4 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={5}>
                            <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
                                <Typography variant="h6" gutterBottom>Add Mixer Personnel</Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            label="Date"
                                            value={dayjs(selectedDate)}
                                            onChange={(newValue) => setSelectedDate(newValue ? newValue.format('YYYY-MM-DD') : "")}
                                            format="DD/MM/YYYY"
                                            slotProps={{ textField: { fullWidth: true } }}
                                        />
                                    </LocalizationProvider>

                                    <Autocomplete
                                        fullWidth
                                        options={availableEmployees}
                                        getOptionLabel={(option) => option.employeeName || ""}
                                        value={availableEmployees.find(e => e.employeeName === workerName) || null}
                                        onChange={(e, newValue) => setWorkerName(newValue ? newValue.employeeName : "")}
                                        renderInput={(params) => <TextField {...params} label="Select Worker" />}
                                    />

                                    <ToggleButtonGroup
                                        value={halfDay ? 'half' : 'full'}
                                        exclusive
                                        onChange={(e, val) => val && setHalfDay(val === 'half')}
                                        fullWidth
                                    >
                                        <ToggleButton value="full" sx={{ color: 'success.main', fontWeight: 'bold' }}>Full Share</ToggleButton>
                                        <ToggleButton value="half" sx={{ color: 'warning.main', fontWeight: 'bold' }}>Half Share (½)</ToggleButton>
                                    </ToggleButtonGroup>

                                    <Button
                                        fullWidth
                                        variant="contained"
                                        size="large"
                                        startIcon={<GroupAddIcon />}
                                        onClick={handleAddWorker}
                                        disabled={isSubmitting}
                                        sx={{ bgcolor: '#30368a', mt: 1 }}
                                    >
                                        {isSubmitting ? "Adding..." : "ADD TO MIXER"}
                                    </Button>
                                </Box>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={7}>
                            <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                    <Typography variant="h6">Mixer Team - {dayjs(selectedDate).format('DD/MM/YYYY')}</Typography>
                                    <Chip label={`${mixerWorkers.length} Workers`} color="primary" variant="outlined" />
                                </Box>

                                {mixerWorkers.length === 0 ? (
                                    <Alert severity="info">No mixer workers recorded for this date.</Alert>
                                ) : (
                                    <TableContainer>
                                        <Table size="small">
                                            <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                                                <TableRow>
                                                    <TableCell sx={{ fontWeight: 'bold' }}>Worker Name</TableCell>
                                                    <TableCell sx={{ fontWeight: 'bold' }}>Share Type</TableCell>
                                                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Action</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {mixerWorkers.map((w) => (
                                                    <TableRow key={w.id}>
                                                        <TableCell>{w.workerName}</TableCell>
                                                        <TableCell>
                                                            <Chip
                                                                label={w.halfDay ? "Half Day" : "Full Day"}
                                                                size="small"
                                                                color={w.halfDay ? "warning" : "success"}
                                                                variant="tonal"
                                                            />
                                                        </TableCell>
                                                        <TableCell align="right">
                                                            <IconButton color="error" size="small" onClick={() => handleDelete(w.id, w._id)}>
                                                                <DeleteIcon fontSize="small" />
                                                            </IconButton>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                )}
                            </Paper>

                            <Box sx={{ mt: 3 }}>
                                <Alert severity="warning" sx={{ border: '1px solid #ffcc80' }}>
                                    <b>How it works:</b> Mixer workers are paid from a pool generated by machines with fewer than 3 workers.
                                    Each 'missing' spot on a machine contributes one full worker share of that production run to this team.
                                </Alert>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </MainContent>
        </Box>
    );
}

export default BlockMixerView;
