import React, { useEffect,useState } from 'react';
import SideMaintenance2 from '../../../component/SideMaintenance2';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import {MenuItem,Grid, IconButton,Paper,TextField, FormControl, InputLabel, Select, Typography,styled, Box, Autocomplete,Modal, Backdrop, TableContainer, OutlinedInput, InputAdornment,Divider} from '@mui/material'
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
import axios from 'axios'
import { Add, ArrowUpwardOutlined, DragIndicatorRounded, RemoveCircleOutline} from '@mui/icons-material';
import { v4 } from 'uuid';
import {  useNavigate } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import ArrowBack from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Loader from '../../../component/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '@mui/icons-material/Logout';
import CustomerFormView2 from '../CustomerVIew/CustomerFormView2';
import Close from '@mui/icons-material/Close';
import ItemFormView2 from '../ItemView/ItemFormView2';
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
const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
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
function SupplierForm() {
    const navigate = useNavigate();
    const dispatch= useDispatch();
    const user = useSelector(selectCurrentUser);
  
    useEffect(()=> {
      const storesUserId = localStorage.getItem('user');
      const fetchUser = async () => {
        if (storesUserId) {
        try {
          const res = await  axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-employeeuser/${storesUserId}`)
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
    const [openBack, setOpenBack] = useState(false);

    const handleOpenBack = (e) => {
      e.preventDefault()
      setOpenBack(true);
    };
    const handleCloseBack = () => {
      setOpenBack(false);
    };
    const [sideBar, setSideBar] = React.useState(true);
    const toggleDrawer = () => {
     setSideBar(!sideBar);
    };
    const apiUrl = 'https://gg-project-productionn.up.railway.app/endpoint/create-Supplier';
    const [supplierName,setSupplierName]=useState("");
    const [storeName,setStoreName]=useState("");
    const [customerPhone1,setCustomerPhone1]=useState("");
    const [customerPhone2,setCustomerPhone2]=useState("");
    const [address,setAddress]=useState("");
    const [description,setDescription]=useState("");
    const dateComment = new Date()


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
    const handleCreateNotification = async (ReferenceInfo) => {
      const data = {
        idInfo: ReferenceInfo,
        person:user.data.userName + ' Created ',
        reason:storeName,
        dateNotification:dateComment
      }
      try {
        await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-notification',data)
      } catch (error) {
        console.log(error)
      }
    }
    const [saving,setSaving] = useState('')
    const handleSubmit = async(e) => {
      e.preventDefault();
      setSaving('true')
      const data = {
        _id:v4(),
        supplierName,storeName,customerPhone1,customerPhone2,address,description,synced: false    
      }; 
      if (navigator.onLine) {
        try{
       const res = await axios.post(apiUrl,{supplierName,storeName,customerPhone1,customerPhone2,address,description,synced: false    });
       if (res) {
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
      }else{
        await db.supplierSchema.add(data)
        handleOpen();
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
              Create new Supplier    
                     </Typography>
          <IconButton onClick={handleOpenBack}>
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
          <SideMaintenance2/>
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
   <Container maxWidth="none" sx={{ mt: 4}} >
 <div>
    <form onSubmit={handleSubmit}>
        <Grid container style={{alignItems:'center',padding:'20px'}} spacing={2} component={Paper}>
            <Grid item xs={6}>
                <TextField
                 name='supplierName' 
                 value={supplierName}
                 label='Supplier Name'
                 onChange={(e)=>setSupplierName(e.target.value)}
                 sx={{ width: '100%', backgroundColor:'white' }}   
                />
            </Grid>
            <Grid item xs={6}>
            <TextField
            required
                 name='storeName' 
                 value={storeName}
                 label='Store Name'
                 onChange={(e)=>setStoreName(e.target.value)}
                 sx={{ width: '100%', backgroundColor:'white' }}   
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                 name='address' 
                 value={address}
                 label='Address'
                 onChange={(e)=>setAddress(e.target.value)}
                 sx={{ width: '100%', backgroundColor:'white' }}   
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                 name='customerPhone1' 
                 value={customerPhone1}
                 label='Phone 1'
                 onChange={(e)=>setCustomerPhone1(e.target.value)}
                 sx={{ width: '100%', backgroundColor:'white' }}   
                />
            </Grid>
            <Grid item xs={4}>
            <TextField
                 name='customerPhone2' 
                 value={customerPhone2}
                 label='Phone 2'
                 onChange={(e)=>setCustomerPhone2(e.target.value)}
                 sx={{ width: '100%', backgroundColor:'white' }}   
                />
            </Grid>
            <Grid item xs={12}>
    <TextField 
                  id='description'
                  name='description' 
                  value={description}
                  label='Description'
                  multiline
                  rows={4}
                  onChange={(e)=>setDescription(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
    </Grid>
    <Grid item xs={12}>
      {
        saving !== 'true' ? <button type='submit' className='btnCustomer6' style={{width:'100%'}}>Save</button> : <p className='btnCustomer6' style={{width:'100%', textAlign:'center'}}>Saving...</p>
      }
   
    </Grid>
        </Grid>
    </form>
 </div>
 </Container>
  </Box>
  </Box>
  <Modal  
        open={openBack}
        onClose={handleCloseBack}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
 <Box sx={{ ...style, width: 500 }}>
        <BlackTooltip title="Close" placement='left'>
        <IconButton onClick={handleCloseBack} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </BlackTooltip>  
        <Grid container sx={{alignItems:'center',padding:'15px'}} spacing={2}>
          <Grid item xs={12} sx={{textAlign:'center'}}>
           <Typography>Do you want to stop creating customer ? </Typography>
           <p><span className="txt2" style={{color:'red'}}>Note :</span> <span className="txt2"> If you stop creating without saving, all your changes will be lost</span></p>
          </Grid> 
          <br/>
          <Grid item xs={6}>
          <button type='submit' onClick={() => navigate('/SupplierAdminView')} className='btnCustomer' style={{width: '100%'}}>Yes</button>
          </Grid>
          <Grid item xs={6}>
          <button type='submit' onClick={handleCloseBack} className='btnCustomer' style={{width: '100%'}}>No</button>
          </Grid>
        </Grid> 
        </Box>
      </Modal>
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

export default SupplierForm
