import React, { useEffect, useState } from 'react';
import { Box, CssBaseline, Grid, Toolbar, Container, Divider, List, IconButton, Typography, styled, Fade, Menu, MenuItem, Tab, Tabs } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Logout from '../../../component/NetworkLogoutIcon';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { Close } from '@mui/icons-material';
import { useNavigate, useParams, Outlet, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import axios from 'axios';
import { ENDPOINT_URL } from '../../../apiConfig';
import SideMaintenance from '../../../component/SideMaintenance';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import MessageAdminView from '../../MessageAdminView';
import ItemNameInfo from './ItemNameInfo';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import dayjs from 'dayjs';

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

const ViewTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#202a5a',
        color: 'white',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}));

function ItemViewLayout() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(selectCurrentUser);
    const [sideBar, setSideBar] = useState(true);
    const [item, setItems] = useState([]);
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState(search);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const res = await axios.get(`${ENDPOINT_URL}/item`);
                setItems(res.data.data.reverse());
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchItem();
    }, []);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [search]);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
    };

    const toggleDrawer = () => {
        setSideBar(!sideBar);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        dispatch(logOut());
        navigate('/');
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="absolute" open={sideBar} sx={{ backgroundColor: '#30368a' }}>
                <Toolbar sx={{ pr: '24px' }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '36px',
                            ...(sideBar && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        Item Information
                    </Typography>
                    <IconButton onClick={() => navigate('/ItemViewAdmin')}>
                        <ArrowBack style={{ color: 'white' }} />
                    </IconButton>
                    <NotificationVIewInfo />
                    <MessageAdminView name={user.data.userName} role={user.data.role} />
                    <Typography sx={{ marginLeft: '10px', marginRight: '10px' }}>{user.data.userName}</Typography>
                    <IconButton color="inherit" onClick={handleLogout}>
                        <Logout style={{ color: 'white' }} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer variant={window.innerWidth < 768 ? 'temporary' : 'permanent'} open={sideBar} onMouseEnter={() => setSideBar(true)} onMouseLeave={() => setSideBar(false)}>
                <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }}>
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List sx={{ height: '700px' }}>
                    <SideMaintenance />
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
                    flexGrow: 1,
                    width: '100%',
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                <Container maxWidth="none" sx={{ mt: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <ItemNameInfo
                                onId={id}
                                item={item}
                                search={search}
                                debouncedSearch={debouncedSearch}
                                handleSearch={handleSearch}
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <Outlet />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

export default ItemViewLayout;
