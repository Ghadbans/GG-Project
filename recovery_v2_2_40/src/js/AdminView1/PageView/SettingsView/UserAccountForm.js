import React, { useEffect, useState } from 'react'
import '../Chartview.css'
import SidebarDashE3 from '../../../component/SidebarDashE3'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {MenuItem,Grid, IconButton,Paper,Box, TextField, FormControl, InputLabel, InputAdornment, Typography, styled,Select, FormLabel, RadioGroup, FormControlLabel, Radio, Autocomplete, OutlinedInput, Modal, Backdrop, Fade, Input,Divider} from '@mui/material'
import {  useNavigate } from 'react-router-dom';
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import axios from 'axios';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Loader from '../../../component/Loader';
import Logout from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';

const BlackTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  
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
function UserAccountForm() {
    const navigate = useNavigate();
    const dispatch= useDispatch();
    const user = useSelector(selectCurrentUser);
  
    useEffect(()=> {
      const storesUserId = localStorage.getItem('user');
      const fetchUser = async () => {
        if (storesUserId) {
        try {
          const res = await  axios.get(`http://192.168.0.200:8080/endpoint/get-employeeuser/${storesUserId}`)
          const Name = res.data.data.employeeName;
          const Role = res.data.data.role;
          dispatch(setUser({userName: Name, role: Role}));
        } catch (error) {
          console.error('Error fetching data:', error);
          dispatch(logOut())
        }
      }else {
        navigate('/');
      }
      }
      fetchUser()
    },[dispatch])
  
    const handleLogout = () => {
      localStorage.removeItem('user');
      dispatch(logOut());
      navigate('/')
    }
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

  const [employee,setEmployee]= useState([])
  useEffect(()=> {
    const fetchE = async ()=> {
      try {
        const res = await axios.get('http://192.168.0.200:8080/endpoint/employee')
        setEmployee(res.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchE()
        },[])
        const [employeeName,setEmployeeName]= useState('');
        const [employeeEmail,setEmployeeEmail]= useState('');
        const [password,setPassword]= useState('');
        const [role,setRole]= useState('');
        const [loading,setLoading]= useState(false);
        const [loadingOpenModal,setLoadingOpenModal] = useState(false);
        const [ErrorOpenModal,setErrorOpenModal] = useState(false);
        
        const handleOpen = () => {
          setLoadingOpenModal(true);
          setLoading(true);
          setTimeout(()=> {
            setLoading(false);
          }, 500)
        }
        const handleError = () => {
          setErrorOpenModal(true);
          setLoading(true);
          setTimeout(()=> {
            setLoading(false);
         }, 500)
        }
        const handleClose = () => {
          setLoadingOpenModal(false);
          window.location.reload();
        }
        const handleCloseError = () => {
          setErrorOpenModal(false);
        }
        const handleDecision = (navigate) => {
          //Navigate Based on th Decision
          if (navigate === 'previous') {
            window.history.back();
          } else if (navigate === 'stay') {
            handleClose();
          } 
        }
    
        const handleChange = ( newValue) => {
          const selectedOptions = employee.find((option)=> option === newValue)
          setEmployeeName(selectedOptions?.employeeName);
          setEmployeeEmail(selectedOptions?.employeeEmail);
        }
        const register = async (employeeName, employeeEmail, password,role) => {
          try {
            const response = await axios.post(`/auth/register`, {
              employeeName,
              employeeEmail,
              password,
              role
            });
            return response.data;
          } catch (error) {
            throw error.response.data; // Throw the error response data to handle errors
          }
        };
        const handleCreateNotification = async () => {
          const data = {
            idInfo: '',
            person:user.data.userName + ' Created User',
            reason:employeeName,
            dateNotification: new Date()
          }
          try {
            await axios.post('http://192.168.0.200:8080/endpoint/create-notification',data)
          } catch (error) {
            console.log(error)
          }
        }
        const [saving,setSaving] = useState('')
        const handleRegistration = async (e) => {
          e.preventDefault();
          setSaving('true')
          try {
            const result = await register(employeeName, employeeEmail, password, role);
         
           if (result) {
            handleCreateNotification()
            handleOpen()
           }
          } catch (error) {
            if (error) {
              setSaving('')
              handleError();
            }
          }
        };
        const [sideBar, setSideBar] = React.useState(true);
        const toggleDrawer = () => {
         setSideBar(!sideBar);
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
              Add new User     
                     </Typography>
          <IconButton onClick={() => navigate(-1)}>
          <ArrowBack style={{color:'white'}} />
          </IconButton>
            <NotificationVIewInfo/>
            <MessageAdminView name={user.data.userName} role={user.data.role}/>
            <Typography sx={{marginLeft:'10px',marginRight:'10px'}}>{user.data.userName}</Typography>
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
          <SidebarDashE3/>
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
   <Container maxWidth="lg" sx={{ mt: 8}} >
     <div>
        <form > 
    <Grid container style={{alignItems:'center',padding:'160px'}} spacing={3} component={Paper}> 
    <Grid item xs={10}>
    <Autocomplete
      disableClearable              
                         options={employee}
                         getOptionLabel={(option) => option.employeeName}
                         renderOption={(props,option)=> (<Box {...props}>{option.employeeName}</Box>)}
                         renderInput={(params) => <TextField {...params} label="User Name" />}
                         onChange={(e,newValue)=> handleChange(newValue? newValue :'')}
                         size="small"
                         sx={{  width: '100%', backgroundColor:'white' }} 
                       />
    </Grid>
    <Grid item xs={2}>
    <FormControl   
                size="small"
                sx={{  width: '100%', backgroundColor:'white' }} 
                      >
                  <InputLabel id="role">Role</InputLabel>
                  <Select
                      required
                     id="role"
                     value={role} 
                     onChange={(e)=>setRole(e.target.value)}
                     name="role"
                     label="Role"
                  >
                        <MenuItem value="CEO">CEO</MenuItem>
                        <MenuItem value="Admin">Admin</MenuItem>
                        <MenuItem value="User">User</MenuItem>
                   </Select>
                 </FormControl> 
    </Grid>
    <Grid item xs={12}>
        <TextField 
        value={employeeEmail}
        onChange={(e)=>setEmail(e.target.value)}
        name='employeeEmail'
        label='Email'
        size="small"
        sx={{ width: '100%', backgroundColor:'white' }} 
        />
    </Grid>
    <Grid item xs={12}>
    <FormControl  
                size="small"
                sx={{  width: '100%', backgroundColor:'white' }}  
                variant="outlined"
                >
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <Input
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ?  <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </FormControl>
    </Grid>
    <Grid item xs={12}>
    {
        saving !== 'true' ? <button type='submit' onClick={handleRegistration} className='btnCustomer6' style={{width:'100%'}}>Save</button> : <p className='btnCustomer6' style={{width:'100%', textAlign:'center'}}>Saving...</p>
      }
    </Grid>
     </Grid>
     </form>

     </div>
     </Container>
  </Box>
  </Box>
     <Modal 
           open={loadingOpenModal}
           onClose={handleClose}
           closeAfterTransition
           BackdropComponent={Backdrop}
           BackdropProps={{
            timeout: 500,
           }}
           aria-labelledby="modal-modal-title"
           aria-describedby="modal-modal-description"
        >
          <Box sx={{ ...style, width: 500 }}
          >
              {loading?(<Loader/>
                ):(
              <div style={{justifyContent:'center',textAlign:'center'}}>
                  <p><CheckCircleIcon style={{color:'green',height:'40px', width:'40px'}}/></p>
                  <h2> Data Saved successfully</h2>
                  <div style={{display:'flex', gap:'60px',justifyContent:'center'}}>
              <button onClick={()=> handleDecision('previous')} className='btnCustomer'>
                Go Back
              </button>
            </div>
                </div>
                )}
          </Box>
          </Modal>
        <Modal 
           open={ErrorOpenModal}
           onClose={handleCloseError}
           closeAfterTransition
           BackdropComponent={Backdrop}
           BackdropProps={{
            timeout: 500,
           }}
           aria-labelledby="modal-modal-title"
           aria-describedby="modal-modal-description"
        >
          <Box sx={{ ...style, width: 500 }}
          >
              {loading?(<Loader/>
                ):(
                  <div style={{justifyContent:'center',textAlign:'center'}}>
                  <p><CancelIcon style={{color:'red',height:'40px', width:'40px'}}/></p>
                  <h2> Data Failed to Saved</h2>
                  <button className='btnCustomer' onClick={handleCloseError}>
                    Try Again
                  </button>
                </div>
                )}
          </Box>
          </Modal>
    </div>
  )
}

export default UserAccountForm
