import React, { useState,useEffect } from 'react';
import './view.css'
import SidebarDash from '../component/SidebarDash'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Table,Modal, IconButton,styled, TableBody,TableCell,TableHead,TableRow,Checkbox, TableContainer, Paper, Typography, Box, Autocomplete,TextField,Backdrop, Grid, Card, CardContent }  from '@mui/material';
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { logOut, selectCurrentUser, setUser } from '../features/auth/authSlice';
import { NavLink, useNavigate } from 'react-router-dom';
import Logout from '@mui/icons-material/Logout';
import { MailOutline, Person, Person3Outlined } from '@mui/icons-material';
import MessageAdminView from './MessageAdminView';
import NotificationVIewInfo from './NotificationVIewInfo';
import db from '../dexieDb';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';



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

function ReportsViewAdmin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  useEffect(()=> {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
     if (navigator.onLine) {
       try {
         const res = await  axios.get(`https://gg-project-production.up.railway.app/endpoint/get-employeeuser/${storesUserId}`)
         const Name = res.data.data.employeeName;
         const Role = res.data.data.role;
         dispatch(setUser({userName: Name, role: Role}));
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     } else {
      const resLocalInfo = await db.employeeUserSchema.get({_id:storesUserId})
      const Name = resLocalInfo.employeeName;
      const Role = resLocalInfo.role;
      dispatch(setUser({userName: Name, role: Role}));
     }
    }else {
      navigate('/');
    }
    }
    fetchUser()
  },[dispatch]);

  const handleLogout = () => {
      localStorage.removeItem('user');
      dispatch(logOut());
      navigate('/')
    }
    const [sideBar, setSideBar] = React.useState(true);
    const toggleDrawer = () => {
     setSideBar(!sideBar);
    };
    const [open, setOpen] = useState(1);
    const handleClick = (e) => {
      setOpen(e);
    };
    const [open1, setOpen1] = React.useState(true);
    const handleClick1= () => {
      setOpen1(!open1);
    };
    const [open2, setOpen2] = React.useState(true);
    const handleClick2= () => {
      setOpen2(!open2);
    };
  return (
    <div className='Homeemployee'>
    <Box sx={{ display: 'flex' }}>
                   <CssBaseline />
           <AppBar position="absolute" open={sideBar} sx={{backgroundColor:'#30368a'}}>
            <Toolbar
              sx={{
                pr: '24px', // keep right padding when drawer closed
              }}
            >
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
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Reports
              </Typography>
             <NotificationVIewInfo/>
              <MessageAdminView name={user.data.userName} role={user.data.role}/>
              <IconButton color="inherit" onClick={handleLogout}>
              <Logout style={{color:'white'}} /> 
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={sideBar}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List sx={{height:'700px'}}>
           <SidebarDash/>
            </List>
          </Drawer>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              width:'100%',
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar/>
     <Container maxWidth="none" sx={{ mt: 1}} >
      <Grid container>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <div style={{padding:'20px', margin:'50px'}}> 
    <TextField
            label='Search'
            variant="standard"
            sx={{width:'100%'}}
            />
              </div>
              <Grid container>
                <Grid item xs={4}>
                <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Customer Information
        </ListSubheader>
      }
    >
      <ListItemButton onClick={()=>handleClick(1)}>
        <ListItemIcon>
          <Person3Outlined />
        </ListItemIcon>
        <ListItemText primary="Customer" />
        {open === 1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open === 1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="All Customer" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Customer Added Today" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Customer That Have Credits" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
                <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Invoice Info
        </ListSubheader>
      }
    >
      <ListItemButton onClick={()=>handleClick(2)}>
        <ListItemIcon>
          <Person3Outlined />
        </ListItemIcon>
        <ListItemText primary="Invoice" />
        {open === 2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open === 2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="All Invoice" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Invoice Added Today" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Invoice Report" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
                <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Revenue Info
        </ListSubheader>
      }
    >
      <ListItemButton onClick={()=>handleClick(3)}>
        <ListItemIcon>
          <Person3Outlined />
        </ListItemIcon>
        <ListItemText primary="Revenue" />
        {open===3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open===3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="All Income" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Today Income" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Custom Income" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
                </Grid>
                <Grid item xs={4}>
                <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Item Information
        </ListSubheader>
      }
    >
      <ListItemButton onClick={()=>handleClick(4)}>
        <ListItemIcon>
          <Person3Outlined />
        </ListItemIcon>
        <ListItemText primary="Item" />
        {open === 4 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open===4} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="All Item" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Item Added Today" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Item Out of Stock" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
                </Grid>
                <Grid item xs={4}>
                <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Item Information
        </ListSubheader>
      }
    >
      <ListItemButton onClick={()=>handleClick(5)}>
        <ListItemIcon>
          <Person3Outlined />
        </ListItemIcon>
        <ListItemText primary="Employee" />
        {open===5 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open===5} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="All Employee" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Employee Added Today" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Employee report Expenses" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </Container>
       </Box>
       </Box>
    </div>
  )
}

export default ReportsViewAdmin
