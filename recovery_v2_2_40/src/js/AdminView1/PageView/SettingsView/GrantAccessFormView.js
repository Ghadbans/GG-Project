import React, { useEffect, useState } from 'react'
import '../Chartview.css'
import SidebarDashE3 from '../../../component/SidebarDashE3'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {MenuItem,Grid, IconButton,Paper,Box, TextField, FormControl, InputLabel, InputAdornment, Typography, styled,Select, FormLabel, RadioGroup, FormControlLabel, Radio, Autocomplete, OutlinedInput, Modal, Backdrop, Fade, Input,Divider,Checkbox} from '@mui/material'
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
import { v4 } from 'uuid';
import { Add } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';

const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));
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
function GrantAccessFormView() {
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
    const [sideBar, setSideBar] = React.useState(true);
    const toggleDrawer = () => {
     setSideBar(!sideBar);
    };
    const [account,setAccount]= useState([]);
    const [userName,setUserName] = useState('');
    const [userID,setUserId] = useState('');
    const [modules,setModules] = useState([
        {id: 1, moduleName:'Customer', access:{ readM:false,createM:false,viewM:false,editM:false,deleteM:false}},
        {id: 2, moduleName:'Item', access:{ readM:false,createM:false,viewM:false,editM:false,deleteM:false}},
        {id: 3, moduleName:'Item-Out', access:{ readM:false,createM:false,viewM:false,editM:false,deleteM:false}},
        {id: 4, moduleName:'Item-Return', access:{ readM:false,createM:false,viewM:false,editM:false,deleteM:false}},
        {id: 5, moduleName:'Item-Purchase', access:{ readM:false,createM:false,viewM:false,editM:false,deleteM:false}},
        {id: 6, moduleName:'Estimate', access:{ readM:false,createM:false,viewM:false,editM:false,deleteM:false}},
        {id: 7, moduleName:'Invoice', access:{ readM:false,createM:false,viewM:false,editM:false,deleteM:false}},
        {id: 8, moduleName:'Payment', access:{ readM:false,createM:false,viewM:false,editM:false,deleteM:false}},
        {id: 9, moduleName:'Project', access:{ readM:false,createM:false,viewM:false,editM:false,deleteM:false}},
        {id: 10, moduleName:'Purchase', access:{ readM:false,createM:false,viewM:false,editM:false,deleteM:false}},
        {id: 11, moduleName:'Maintenance', access:{ readM:false,createM:false,viewM:false,editM:false,deleteM:false}},
        {id: 12, moduleName:'Expenses', access:{ readM:false,createM:false,viewM:false,editM:false,deleteM:false}},
        {id: 13, moduleName:'Rate', access:{ readM:false,createM:false,viewM:false,editM:false,deleteM:false}},
        {id: 14, moduleName:'Employee', access:{ readM:false,createM:false,viewM:false,editM:false,deleteM:false}},
        {id: 15, moduleName:'Pay-Roll', access:{ readM:false,createM:false,viewM:false,editM:false,deleteM:false}},
        {id: 16, moduleName:'Grant-Access', access:{ readM:false,createM:false,viewM:false,editM:false,deleteM:false}},
        {id: 17, moduleName:'Purchase-Order', access:{ readM:false,createM:false,viewM:false,editM:false,deleteM:false}},
        {id: 18, moduleName:'Point-Of-Sell', access:{ readM:false,createM:false,viewM:false,editM:false,deleteM:false}},
    ])
    useEffect(()=> {
      const fetchData = async () => {
        try {
         const res = await axios.get('http://192.168.0.200:8080/endpoint/employeeuser')
        setAccount(res.data.data.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      fetchData()
    },[])
    const handleChange = ( newValue) => {
        const selectedOptions = account.find((option)=> option === newValue)
        setUserName(selectedOptions?.employeeName);
        setUserId(selectedOptions?._id);
      }
    const handleCheckBox = (i, type) => {
      const updateModule = [... modules]
      updateModule[i].access[type] = !updateModule[i].access[type] 
      setModules(updateModule)
    }
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
  window.location.reload;
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
const handleCreateNotification = async (ReferenceInfo) => {
  const data = {
    idInfo: ReferenceInfo,
    person:user.data.userName + ' Created Access For',
    reason:userName,
    dateNotification:new Date()
  }
  try {
    await axios.post('http://192.168.0.200:8080/endpoint/create-notification',data)
  } catch (error) {
    console.log(error)
  }
}
const [saving,setSaving] = useState('')
    const handleSubmit = async (e) => {
      e.preventDefault();
      setSaving('true')
      const data = {
        employeeName: userName,
        userID,
        modules
      }; 
      try{
        const res = await axios.post('http://192.168.0.200:8080/endpoint/create-grantAccess',data);
        if (res) {
           // Open Loading View
       const ReferenceInfo = res.data.data._id
       handleCreateNotification(ReferenceInfo)
          handleOpen();
         
    }
      }catch(error){
        if (error) {
          setSaving('')
          handleError();
        }
      }
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
              Grant Access     
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
   <Container maxWidth="lg" sx={{ mt: 4}} >
    <form onSubmit={handleSubmit}> 
        <Grid container style={{alignItems:'center',padding:'15px'}} spacing={2} component={Paper}>
            <Grid item xs ={6}>
            <Autocomplete
      disableClearable              
                         options={account}
                         getOptionLabel={(option) => option.employeeName}
                         renderOption={(props,option)=> (<Box {...props}>{option.employeeName}</Box>)}
                         renderInput={(params) => <TextField required {...params} label="User Name" />}
                         onChange={(e,newValue)=> handleChange(newValue? newValue :'')}
                         size="small"
                         sx={{  width: '100%', backgroundColor:'white' }} 
                       />
            </Grid>
            <Grid item xs ={12}>
                <table className='tableInfo10'>
                    <tbody>
                        {
                            modules.map((row,i)=>(
                                <tr key={row.id}>
                                  <td>{row.id}</td>
                                    <td style={{width:'300px'}}>
                                    {row.moduleName}
                                    </td>
                                    <td style={{textAlign:'center'}}>
                                        <FormControlLabel
                                        control={
                                            <Checkbox
                                            checked={row.access.readM}
                                            onChange={()=> handleCheckBox(i, 'readM')}
                                        />
                                        }
                                        label='read'
                                        />
                                        
                                    </td>
                                    <td style={{textAlign:'center'}}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                            checked={row.access.createM}
                                            onChange={()=> handleCheckBox(i, 'createM')}
                                        />
                                        }
                                        label='Create'
                                        />
                                    </td>
                                    <td style={{textAlign:'center'}}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                            checked={row.access.viewM}
                                            onChange={()=> handleCheckBox(i, 'viewM')}
                                        />
                                        }
                                        label='View'
                                        />
                                    </td>
                                    <td style={{textAlign:'center'}}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                            checked={row.access.editM}
                                            onChange={()=> handleCheckBox(i, 'editM')}
                                        />
                                        }
                                        label='Edit'
                                        />
                                    </td>
                                    <td style={{textAlign:'center'}}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                            checked={row.access.deleteM}
                                            onChange={()=> handleCheckBox(i, 'deleteM')}
                                        />
                                        }
                                        label='Delete'
                                        />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                    </Grid>
                    <Grid item xs={12}>
                    {
        saving !== 'true' ? <button type='submit' className='btnCustomer6' style={{width:'100%'}}>Save</button> : <p className='btnCustomer6' style={{width:'100%', textAlign:'center'}}>Saving...</p>
      }
    </Grid>
        </Grid>
    </form>
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
              <button onClick={()=> handleDecision('stay')} className='btnCustomer'>
                Add New
              </button>
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
                  <h2 style={{color:'red'}}>Saving Failed</h2>
                  <p><span className='txt1' style={{color:'red'}}>Note:</span><span className="txt2">Project name can only be created once for purchase</span></p>
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

export default GrantAccessFormView
