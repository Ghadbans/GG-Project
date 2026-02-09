import React, { useEffect, useState } from 'react'
import '../Chartview.css'
import SidebarDashE2 from '../../../component/SidebarDashE2'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Table,InputAdornment, IconButton,styled,OutlinedInput, TableBody,TableCell,TableHead,TableRow,Checkbox, TableContainer, Paper, Typography, Modal, Box, Grid, FormControl, InputLabel, Select, MenuItem,Backdrop, Autocomplete,TextField, Input }  from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { Add, MailOutline } from '@mui/icons-material';
import { NavLink, useNavigate } from 'react-router-dom';
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
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '@mui/icons-material/Logout';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Loader from '../../../component/Loader';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Edit from '@mui/icons-material/Edit';
import Close from '@mui/icons-material/Close';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import db from '../../../dexieDb';

const DeleteTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'red',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const EditTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'gray',
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
function UserAccount() {
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const user = useSelector(selectCurrentUser);

  useEffect(()=> {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
     if (navigator.onLine) {
       try {
         const res = await  axios.get(`http://192.168.0.200:8080/endpoint/get-employeeuser/${storesUserId}`)
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

  const [account,setAccount]= useState([])
  useEffect(()=> {
    const fetchData = async () => {
    if (navigator.onLine) {
        try {
         const res = await axios.get('http://192.168.0.200:8080/endpoint/employeeuser')
         const formatDate = res.data.data.map((item)=>({
          ...item,
          id: item._id,
        })) 
        setAccount(formatDate.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    } else {
      const offLineCustomer1 = await db.employeeUserSchema.toArray();
      const formatDate = offLineCustomer1.map((item)=>({
        ...item,
        id: item._id,
      })) 
      setAccount(formatDate.reverse());
    }
    }
    fetchData()
  },[])
  const [reason,setReason]= useState("");
  const [open, setOpen] = useState(false);
  const [DeleteId, setDeleteId]= useState(null);
  const [loading,setLoading]= useState(false);
  const [modalOpenLoading,setModalOpenLoading]= useState(false);
  const [loadingOpenModal,setLoadingOpenModal] = useState(false);
  const [loadingOpenModalError,setLoadingOpenModalError] = useState(false);
  const [openReasonDelete, setOpenReasonDelete] = useState(false);

const handleOpenReasonDelete = (e) => {
  e.preventDefault()
  setOpenReasonDelete(true);
};
const handleCloseReasonDelete = () => {
  setOpenReasonDelete(false);
};
  {/** Loading Update View Start */}
  const handleOpenLoading = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setOpen1(false);
    setTimeout(()=> {
      setLoading(false);
    }, 500)
  }
  const handleOpenLoadingError = () => {
    setLoadingOpenModalError(true);
    setLoading(true);
    setOpen1(false);
    setTimeout(()=> {
      setLoading(false);
    }, 500)
  }
  const handleCloseLoading = () => {
      window.location.reload();
  }
  const handleCloseLoadingError = () => {
    setLoadingOpenModalError(false);
  }
  {/** Loading Update View End */}
  const handleOpen = (id) => {
    setOpen(true);
    setDeleteId(id)
  };
  const handleOpenModal = () => {
    setModalOpenLoading(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseModal = () => {
      window.location.reload();
  };
  const [nameDelete,setNameDelete] = useState('')
  useEffect(()=>{
    const fetchData2 = async () => {
      
      if (DeleteId !== null) {
      try {
          const res = await axios.get(`http://192.168.0.200:8080/endpoint/get-employeeuser/${DeleteId}`)
          setNameDelete(res.data.data.employeeName)
      } catch (error) {
        console.log(error)
      }  }
    }
    fetchData2()
   },[DeleteId])
   const handleCreateNotification = async () => {
    const data = {
      idInfo: '',
      person:user.data.userName + ' Deleted ' + nameDelete,
      reason,
      dateNotification:new Date()
    }
    try {
      await axios.post('http://192.168.0.200:8080/endpoint/create-notification',data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleDelete = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.delete(`http://192.168.0.200:8080/endpoint/delete-employeeuser/${DeleteId}`);
      if (res) {
        handleCreateNotification()
        handleOpenModal();
      }
    } catch (error) {
      alert('try again');
    }
  };
  {/** Update Start */}
  
  const [employeeName, setUserAccountName] = useState('');
  const [userAccountRole, setUserAccountRole] = useState('');
  const [employeeEmail, setUserAccountMail] = useState('');
 {/** Change Password Open start */}
  const [open1, setOpen1] = useState(false);
  const [updateId, setUpdateId]= useState(null);
 
  const handleOpenUpdate = (id) => {
    setOpen1(true);
    setUpdateId(id);
  };
  const handleCloseUpdate = () => {
    setOpen1(false);
    setUpdateId(null);
  };
   {/** Change Password Open end */}
 {/** Change Password Open start */}
  const [open2, setOpen2] = useState(false);
 
  const handleOpenUpdateName = (id) => {
    setOpen2(true);
    setUpdateId(id);
  };
  const handleCloseUpdateName = () => {
    setOpen2(false);
    setUpdateId(null);
  };
   {/** Change Password Open end */}
useEffect(()=>{
   const fetchRelated = async()=> {
    if (updateId !== null) {
     try {
      const res = await  axios.get(`http://192.168.0.200:8080/endpoint/get-employeeuser/${updateId}`)
      setUserAccountName(res.data.data.employeeName);
       setUserAccountRole(res.data.data.role);
       setUserAccountMail(res.data.data.employeeEmail);
     } catch (error) {
       console.error('Error fetching data:', error);
     }
     }
   }
   fetchRelated()

},[updateId])

const [showPassword, setShowPassword] = useState(false);

const handleClickShowPassword = () => setShowPassword((show) => !show);
const handleMouseDownPassword = (event) => {
    event.preventDefault();
};
const [showPassword1, setShowPassword1] = useState(false);

const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
};
const [oldPassword,setOldPassword] = useState('');
const [newPassword,setNewPassword] = useState('');
const handleResetPassword = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(`/auth/passwordreset/`,
     { employeeEmail,role: userAccountRole ,employeeName,oldPassword,newPassword});
    if (response) {
      handleOpenLoading();
    }
  } catch (error) {
    handleOpenLoadingError();
  }
};
  {/** Update End */}
  const [sideBar, setSideBar] = React.useState(true);
  const toggleDrawer = () => {
   setSideBar(!sideBar);
  };
  const columns = [
    {field: 'employeeName', headerName: 'User Name', width:sideBar?320:450},
    {field: 'employeeEmail', headerName: 'Email', width:sideBar?320:450},
    {field: 'role', headerName: 'Role', width:200},
    {field: 'edit', headerName: 'Edit', width:100, renderCell:(params)=> (
      <EditTooltip title="Edit">
        <span> 
    <IconButton onClick={()=> handleOpenUpdate(params.row._id)} disabled ={user.data.role !== 'CEO'}>
    <NavLink className='LinkName'>
    <Edit style={{color:'gray'}}/> 
    </NavLink>
    </IconButton>
    </span>
  </EditTooltip>
) },
    {field: 'Delete', headerName: 'Delete', width:100, renderCell:(params)=> (
      <DeleteTooltip title="Delete">
        <span>                                <IconButton onClick={() => handleOpen(params.row._id)} disabled={user.data.role === 'User'}>
                                <DeleteIcon  style={{cursor:'pointer',color:'red'}}/> 
                                </IconButton>
        </span>
      </DeleteTooltip>
    ) },
  ]
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
              User
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
          <SidebarDashE2/>
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
  <div >
           <NavLink disabled ={user.data.role !== 'CEO'} to="/UserAccountForm" className='ItemsName' style={{position:'relative',float:'right',margin:'10px'}}> 
           <Add className='btnCustomer' style={{fontSize:'40px'}}/>
              </NavLink> 
    <Box sx={{ height: 520, width: '100%' }}>
      <DataGrid
        rows={account}
        columns={columns}
      slots={{toolbar: GridToolbar}}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
          printOptions:{
           disableToolbarButton: true
         },
        },
      }}
      checkboxSelection
      sx={{width:'100%',backgroundColor:'white', padding:'10px'}}
      />
    </Box>
        </div>
        </Container></Box></Box>
        <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style, width: 500 }}>
        <div style={{justifyContent:'center',textAlign:'center'}}>
          <h2>Do you want to Delete ?</h2>
          <div style={{display:'flex', gap:'60px',justifyContent:'center'}}>
              <button className='btnCustomer2' onClick={handleOpenReasonDelete}>
                Delete
              </button>
              <button className='btnCustomer' onClick={handleClose}>
                Cancel
              </button>
            </div>
        </div>
      </Box>
    </Modal>
    <Modal
      open={modalOpenLoading}
      onClose={handleCloseModal}
      BackdropComponent={Backdrop}
      BackdropProps={{
            timeout: 500,
           }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style, width: 500 }}>
      <div>
              {loading?(<Loader/>
                )
         :( 
              <div style={{justifyContent:'center',textAlign:'center'}}>
                  <p><CheckCircleIcon style={{color:'green',height:'40px', width:'40px'}}/></p>
                  <h2> Data successfully deleted</h2>
                  <div style={{display:'flex', gap:'60px',justifyContent:'center'}}>
              <button onClick={handleCloseModal} className='btnCustomer'>
                Close
              </button>
            </div>
                </div>
                )}
                </div> 
      </Box>
    </Modal>
    <Modal  
       open={open1}
        onClose={handleCloseUpdate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
 <Box sx={{ ...style, width: 500 }}>
        <ViewTooltip title="Close" placement='left'>
        <IconButton onClick={handleCloseUpdate} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/> 
        </IconButton>
        </ViewTooltip>  
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Change Password
          </Typography>
          <form onSubmit={handleResetPassword}>
        <Grid container style={{alignItems:'center',padding:'15px'}} spacing={2}>
          <Grid item xs={6}>
            <TextField
            name='userName'
            label='User Name'
            size="small"
            value={employeeName}
            onChange={(e)=> setUserAccountName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
          <FormControl   
                size="small"
                sx={{  width: '100%', backgroundColor:'white' }} 
                      >
                  <InputLabel id="role">Role</InputLabel>
                  <Select
                      required
                     id="role"
                     value={userAccountRole} 
                     onChange={(e)=>setUserAccountRole(e.target.value)}
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
            <Typography>Old Password</Typography>
          </Grid>
          <Grid item xs={12}>
          <FormControl  
                size="small"
                sx={{  width: '100%', backgroundColor:'white' }}  
                variant="outlined"
                >
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
            onChange={(e)=>setOldPassword(e.target.value)}
          />
        </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Typography>New Password</Typography>
          </Grid>
          <Grid item xs={12}>
          <FormControl  
                size="small"
                sx={{  width: '100%', backgroundColor:'white' }}  
                variant="outlined"
                >
          <Input
            id="outlined-adornment-password"
            type={showPassword1 ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword1}
                  onMouseDown={handleMouseDownPassword1}
                  edge="end"
                >
                  {showPassword1 ?  <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            onChange={(e)=>setNewPassword(e.target.value)}
          />
        </FormControl>
          </Grid>
          <br/>
          <Grid item xs={12}>
          <button type='submit' className='btnCustomer' style={{width: '100%'}}>Update</button>
          </Grid>
        </Grid>
        </form>
        </Box>
      </Modal>
      <Modal 
           open={loadingOpenModal}
           onClose={handleCloseLoading}
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
                  <h2> Password Changed successfully</h2>
                  <div style={{display:'flex', gap:'60px',justifyContent:'center'}}>
              <button onClick={handleCloseLoading} className='btnCustomer'>
                Close
              </button>
            </div>
                </div>
                )}
          </Box>
          </Modal>
      <Modal 
           open={loadingOpenModalError}
           onClose={handleCloseLoadingError}
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
                  <h2> Invalid old password</h2>
                  <div style={{display:'flex', gap:'60px',justifyContent:'center'}}>
              <button onClick={handleCloseLoadingError} className='btnCustomer'>
                Close
              </button>
            </div>
                </div>
                )}
          </Box>
          </Modal>
          <Modal  
        open={openReasonDelete}
        onClose={handleCloseReasonDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
 <Box sx={{ ...style, width: 500 }}>
        <ViewTooltip title="Close" placement='left'>
        <IconButton onClick={handleCloseReasonDelete} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </ViewTooltip>  
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Why do you want to delete: {nameDelete}?
          </Typography>
          <form onSubmit={handleDelete}>
             <Grid container style={{alignItems:'center',padding:'15px'}} spacing={2}>
          <Grid item xs={12}>
          <TextField 
          required
                  id='reason'
                  name='reason' 
                  multiline
                  rows={4}
                  value={reason}
                  placeholder='Reason'
                  onChange={(e)=>setReason(e.target.value)}
                  label='Reason'
                  sx={{ width:'100%', backgroundColor:'white' }}       
              />
          </Grid>
          <br/>
          <Grid item xs={12}>
   <button type='submit' className='btnCustomer' style={{width: '100%'}}>Save</button>
              </Grid>
        </Grid>
          </form>
       
        </Box>
      </Modal>
    </div>
  )
}

export default UserAccount
