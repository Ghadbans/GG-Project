import React, { useEffect, useState } from 'react'
import '../Chartview.css'
import SidebarDashE2 from '../../../component/SidebarDashE2'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Table,InputAdornment, IconButton,styled,OutlinedInput, TableBody,TableCell,TableHead,TableRow,Checkbox, TableContainer, Paper, Typography, Modal, Box, Grid, FormControl, InputLabel, Select, MenuItem,Backdrop, Autocomplete,TextField, Input, Tabs, Tab }  from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { Add, Delete, MailOutline } from '@mui/icons-material';
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
import EditIcon from '@mui/icons-material/Edit';
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

function RolePermission() {
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const user = useSelector(selectCurrentUser);

  useEffect(()=> {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
     if (navigator.onLine) {
       try {
         const res = await  axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-employeeuser/${storesUserId}`)
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
  const [grantAccess,setGrantAccess] = useState([]);
  useEffect(()=>{
    const fetchCategory = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/grantAccess')
          setGrantAccess(res.data.data);
          await Promise.all(res.data.data.map( async (item)=>{
            await db.grantAccessSchema.put({...item, synced:true,updateS:true})
           }))
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        const offLineCustomer1 = await db.grantAccessSchema.toArray(); 
        setGrantAccess(offLineCustomer1);
      }
    }
    fetchCategory()
  },[]);
 const [reason,setReason]= useState("");
   const [open, setOpen] = useState(false);
   const [DeleteId, setDeleteId]= useState(null);
  const [loading,setLoading]= useState(false);
  const [modalOpenLoading,setModalOpenLoading]= useState(false);
  const [loadingOpenModal,setLoadingOpenModal] = useState(false);
  const [loadingOpenModalError,setLoadingOpenModalError] = useState(false);
  const [openReasonDelete, setOpenReasonDelete] = useState(false);

  const handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
    setDeleteId(null)
  };
    {/** Loading Update View Start */}
   
   const handleOpen = (id) => {
    setOpenReasonDelete(true);
    setDeleteId(id)
  };
  const handleOpenModal = () => {
    setModalOpenLoading(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const handleCloseModal = () => {
      window.location.reload();
  };
 const [nameDelete,setNameDelete] = useState('')
  useEffect(()=>{
    const fetchData2 = async () => {
      
      if (DeleteId !== null) {
      try {
          const res = await axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-grantAccess/${DeleteId}`)
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
      await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-notification',data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleDelete = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.delete(`https://gg-project-productionn.up.railway.app/endpoint/delete-grantAccess/${DeleteId}`);
      if (res) {
        handleCreateNotification()
        handleOpenModal();
      }
    } catch (error) {
      alert('try again');
    }
  };

  const [grantID,setGrantID]= useState('');
  useEffect(()=>{
    const result =localStorage.getItem('GrantAccessTabId');
    if (result) {
      setGrantID(result)
    }
  })
  const [show3, setShow3] = useState(1);
  const handleShow3 = (e) =>{
      setShow3(e);
  }
  const [value,setValue] = useState(()=>{
    const result =localStorage.getItem('GrantAccessTab')
    return result !== null? parseInt(result): 0;
  });
  const [value2,setValue2] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue)
  }
  const handleChange2 = (e, newValue) => {
    setValue2(newValue)
  }
  const handleChangeIdIndex = (index, id) => {
    const newIndex = index;
    const newIndexId = id;
    setValue(newIndex);
    setGrantID(id)
    localStorage.setItem('GrantAccessTab',newIndex)
    localStorage.setItem('GrantAccessTabId',newIndexId)
  }
  const handleChangeIdIndex2 = (index, id) => {
    const newIndex = index;
    const newIndexId = id;
    const result = categories.findIndex((row)=> row._id === id)
    setValue(result);
    setValue2(newIndex);
    setGrantID(id)
    localStorage.setItem('GrantAccessTab',result)
    localStorage.setItem('GrantAccessTabId',newIndexId)
  }
  const [search2,setSearch2] =useState('');
  const handleSearch2 = (e) => {
    const value = e.target.value
    setSearch2(value)
  }
  const newArray2 = search2 !== ''?grantAccess.filter((Item)=>
  Item.employeeName.toLowerCase().includes(search2.toLowerCase())
      ):grantAccess
  const filterGrant = grantAccess.filter((item)=>item._id === grantID)
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
  <div>
        <Grid container item spacing={2}>
        <Grid item xs={3}>
        { show3 ===1  ?   (
            <div className='itemInfoContainer'>
           <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div style={{display:'flex', padding:'5px', alignItems:'center'}}>
               <Checkbox/>
              <Typography variant='h6'>All User</Typography>
            </div>
       <div>
       <NavLink disabled ={user.data.role !== 'CEO'} to="/GrantAccessFormView" className='ItemsName'> 
           <Add className='btnCustomer' style={{fontSize:'40px'}}/>
       </NavLink>   
       </div>
           </div>
                    <div style={{height:'513px', overflow:'hidden',overflowY:'scroll', width:'100%'}}>
                               <Tabs 
                value={value}
                onChange={handleChange} 
                orientation="vertical"
                sx={{
                  '& .MuiTabs-indicator':{
                    backgroundColor:'white',
                    height:'0px'
                  }
                }}
                >    
                  {grantAccess?.map((row,index) => (
                  <Tab
                  key={index}
                  label={row.employeeName}
                  onClick={()=>handleChangeIdIndex(index,row._id)}
                  sx={{
                    '&.Mui-selected':{
                      color:'white',
                      backgroundColor:'#30368a',
                      borderRadius:'10px'
                    }
                  }}
                  />
                 ))}
                   </Tabs>  
                    </div>                    
                </div>  )
           :''
         }
{ show3 === 2  ?     
( <div className='itemInfoContainer'>
<Grid container style={{alignItems:'center',padding:'10px'}} spacing={3}>
<Grid item xs={10}>
 <TextField
                label='search'
                id='search'
                value={search2}
                variant="standard"
                onChange={handleSearch2}
                />
 </Grid>
 <Grid item xs={2}>
 <ViewTooltip title="Close" placement='bottom'>
   <IconButton onClick={() => handleShow3(1)} style={{ position:'relative', float:'right'}}> 
                 <Close style={{color:'#30368a'}}/>
   </IconButton>
   </ViewTooltip> 
 </Grid>
</Grid>
   
       <div style={{height:'565px', overflow:'hidden',overflowY:'scroll', width:'100%'}}>
       <Tabs 
                value={value2}
                onChange={handleChange2} 
                orientation="vertical"
                sx={{
                  '& .MuiTabs-indicator':{
                    backgroundColor:'#30368a'
                  }
                }}
                >    
                {newArray2?.map((row,index) => (
                  <Tab
                  key={index}      
                           label={row.employeeName}
                   onClick={()=>handleChangeIdIndex2(index,row._id)}
                  sx={{
                    '&.Mui-selected':{
                      color:'#30368a'
                    }
                  }}
                  />
                 ))}
                   </Tabs>
               </div>           
           </div>)
           :''
         }
        </Grid>
        <Grid item xs={9}>
          <div className='itemInfoContainer2'>
            <div className='itemInfoContainer2Head'>
           <Typography variant='h5'>Modules</Typography> 
           {
    filterGrant.map((item)=>(
      <div key={item._id} style={{display:'flex', alignItems:'center'}}>
         <NavLink disabled={user.data.role !== 'CEO'} to={`/GrantAccessUpdateView/${item._id}`} className='ItemsName'> 
           <EditIcon className='btnCustomer1' style={{fontSize:'40px'}}/>
       </NavLink>  
       <DeleteTooltip title="Delete">
      <span>                                <IconButton onClick={()=>handleOpen(item._id)} hidden={user.data.role !== 'CEO'}>
                              <Delete  style={{cursor:'pointer',color:'red'}}/> 
                              </IconButton>
                              </span>
    </DeleteTooltip>
      </div>
    ))}
            </div>
  <TableContainer sx={{maxHeight:'580px'}}>
 <Table aria-label="collapsible table" stickyHeader>
          <TableHead >
    <TableRow>
      <TableCell>ID</TableCell>
      <TableCell align="center">Modules Permissions</TableCell>
      <TableCell align="center">Read</TableCell>
      <TableCell align="center">Create</TableCell>
      <TableCell align="center">View</TableCell>
      <TableCell align="center">Edit</TableCell>
      <TableCell align="center">Delete</TableCell>
      
    </TableRow>
  </TableHead>
  {
    filterGrant.map((item)=>(
        <TableBody key={item._id}>
                        {
                            item.modules.map((row,i)=>(
                                <TableRow key={row.id}>
                                  <TableCell>{row.id}</TableCell>
                                    <TableCell style={{width:'300px'}}>
                                    {row.moduleName}
                                    </TableCell>
                                    <TableCell style={{textAlign:'center'}}>
                                            <Checkbox
                                            checked={row.access.readM}
                                        />
                                    </TableCell>
                                    <TableCell style={{textAlign:'center'}}>
                                            <Checkbox
                                            checked={row.access.createM}
                                        />
                                    </TableCell>
                                    <TableCell style={{textAlign:'center'}}>
                                            <Checkbox
                                            checked={row.access.viewM}
                                        />
                                    </TableCell>
                                    <TableCell style={{textAlign:'center'}}>
                                            <Checkbox
                                            checked={row.access.editM}
                                        />
                                    </TableCell>
                                    <TableCell style={{textAlign:'center'}}>
                                            <Checkbox
                                            checked={row.access.deleteM}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
    ))
  }

          </Table>
  </TableContainer>
         
          </div>
          
        </Grid>
    </Grid>
    </div>
    </Container></Box></Box>
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
          Why do you want to delete Access Of {nameDelete}?
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
    </div>
  )
}

export default RolePermission
