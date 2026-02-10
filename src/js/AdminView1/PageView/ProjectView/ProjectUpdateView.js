import React, { useEffect,useState } from 'react';
import SidebarDash1 from '../../../component/SidebarDash1';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DeleteIcon from '@mui/icons-material/Delete';
import {MenuItem,Grid, IconButton,Paper,TextField, FormControl, InputLabel, Select, Typography,styled, Box, Autocomplete,Modal, Backdrop, TableContainer, OutlinedInput, InputAdornment,Divider } from '@mui/material'
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
import { Add, ArrowUpwardOutlined, RemoveCircleOutline} from '@mui/icons-material';
import { v4 } from 'uuid';
import {  useNavigate, useParams } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ArrowBack from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Loader from '../../../component/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '@mui/icons-material/Logout';
import Delete from '@mui/icons-material/Delete';
import CustomerFormView2 from '../CustomerVIew/CustomerFormView2';
import Close from '@mui/icons-material/Close';
import dayjs from 'dayjs';
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import db from '../../../dexieDb';

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
function ProjectUpdateView() {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch= useDispatch();
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

    const [customerName,setCustomerName]= useState({});
    const [customer,setCustomer] = useState([]);
    const [projectName, setProjectName] = useState("");
    const [status, setStatus] = useState("");
    const [phase,setPhase]=useState([]);
    const [description,setDescription]=useState("");
    const [startDate,setStartDate] = useState(null);
    const [visitDate,setVisitDate] = useState(null);
    const [projectNumber,setProjectNumber] = useState(0);
    useEffect (() => {
      const fetchData = async () => {
      if (navigator.onLine) {
          try {
         const res = await axios.get(`https://gg-project-production.up.railway.app/endpoint/get-projects/${id}`)
         setCustomerName(res.data.data.customerName);
         setProjectName(res.data.data.projectName);
         setStatus(res.data.data.status);
         setPhase(res.data.data.phase);
         setDescription(res.data.data.description);
         setStartDate(res.data.data.startDate);
         setProjectNumber(res.data.data.projectNumber);
         setVisitDate(res.data.data.visitDate);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
      } else {
        const resLocal = await db.projectSchema.get({_id:id})
        setCustomerName(resLocal.customerName);
         setProjectName(resLocal.projectName);
         setStatus(resLocal.status);
         setPhase(resLocal.phase);
         setDescription(resLocal.description);
         setStartDate(resLocal.startDate);
         setProjectNumber(resLocal.projectNumber);
         setVisitDate(resLocal.visitDate);
      }
      }
      fetchData()
      },[id])
        const [purchase,setPurchase] = useState(null);
        useEffect(()=>{
          const handleFetch = async () => {
           if (navigator.onLine) {
             try {
               const resCustomer = await axios.get('https://gg-project-production.up.railway.app/endpoint/customer')
               setCustomer(resCustomer.data.data.reverse());
               const res= await axios.get('https://gg-project-production.up.railway.app/endpoint/purchase')
               res.data.data.filter((row)=>row.projectName !== undefined && row.projectName._id === id)
               .map((row)=> setPurchase(row._id))
             } catch (error) {
               console.error('Error fetching data:', error);
             }
           } else {
            const offLineCustomer1 = await db.customerSchema.toArray();
            setCustomer(offLineCustomer1.reverse());
            const offLinePurchase = await db.purchaseSchema.toArray();
            offLinePurchase.filter((row)=>row.projectName !== undefined && row.projectName._id === id)
            .map((row)=> setPurchase(row._id))
           }
          }
          handleFetch()
        },[id])
         {/** Customer Start */}
        const [openAutocomplete1, setOpenAutocomplete1] = useState(false);

        const handleOpenOpenAutocomplete1 = (e) => {
          e.stopPropagation()
         setOpenAutocomplete1(true);
        };
        const handleCloseOpenAutocomplete1 = () => {
          setOpenAutocomplete1(false);
        };
        const handleCreateCustomer = (newCustomer)=> {
          setCustomer([ newCustomer,...customer])
        }
        const handleChangeCustomer = ( newValue) => {
          const selectedOptions = customer.find((option)=> option === newValue)
          setCustomerName({
            _id: selectedOptions?._id,
            customerName: selectedOptions?.Customer,
          });
        }
        const handleClearCUstomer = ()=> {
          setCustomerName({
            _id: "",
            customerName: ""
          });
        }
        {/** Customer End */}
      const handleAdd=()=>{
          const abc=[...phase,[]]
          setPhase(abc)
      };
      const handleChange=(onChangeValue,i)=>{
       const inputData=[...phase]
       inputData[i]=onChangeValue.target.value;
       setPhase(inputData)
      };
      const handleDelete=(i)=>{
          const deletePhase=[...phase]
          deletePhase.splice(i,1)
          setPhase(deletePhase)  
      };
  {/** Reason Modal start */}
  
  const [open2,setOpen2] = useState(false);

  const handleOpenUpdateReason = (e) => {
    e.preventDefault()
    setOpen2(true);
  };
  const handleCloseUpdateReason = () => {
    setOpen2(false);
  };
  const [reason,setReason]= useState("");

    const CommentInfo = 
      {
        idInfo: id,
        person: user.data.userName + ' Modified',
        reason
      }
      const dateComment = dayjs(Date.now());
    
  {/** Reason Modal end */}
{/** Loading Start */}
const [openBack, setOpenBack] = useState(false);

          const handleOpenBack = (e) => {
            e.preventDefault()
            setOpenBack(true);
          };
          const handleCloseBack = () => {
            setOpenBack(false);
          };
const [loading,setLoading]= useState(false);
const [loadingOpenModal,setLoadingOpenModal] = useState(false);
const [ErrorOpenModal,setErrorOpenModal] = useState(false);

const handleOpen = () => {

  setOpen2(false);
  setLoadingOpenModal(true);
  setLoading(true);

  setTimeout(()=> {
    setLoading(false);
  }, 500)

}
const handleError = () => {
  
  setOpen2(false);
  setErrorOpenModal(true);
  setLoading(true);
  setTimeout(()=> {
    setLoading(false);
 }, 500)
}
const handleClose = () => {
  navigate(-1);
}
const handleCloseError = () => {
  setErrorOpenModal(false);
}
{/** Loading End 
const handleUpdatePurchase = async () => {
      const data = {
        projectName : {
          _id: id,
          projectName: projectName,
        },
        description,
        statusInfo:status, updateS: false
      }
    if (purchase !== null) {
       if (navigator.onLine) {
         try {
           await axios.put(`https://gg-project-production.up.railway.app/endpoint/update-purchase/${purchase}`,data)
           const resLocal = await db.purchaseSchema.get({_id:purchase})
           await db.purchaseSchema.update(resLocal.purchaseNumber,{...data, updateS: true})
         } catch (error) {
           console.error(error)
         }
       } else {
           const resLocal = await db.purchaseSchema.get({_id:purchase})
           await db.purchaseSchema.update(resLocal.purchaseNumber,...data)
       }
    }
   }*/}
const [hideBack,setHideBack] = useState('');
const handleCreateComment = async () => {
  const data = {
    idInfo:id,
    person:user.data.userName + ' Modify ' + projectName,
    reason,
    dateNotification: new Date()
  };
  try {
     await axios.post('https://gg-project-production.up.railway.app/endpoint/create-notification/',data)
  } catch (error) {
   console.log(error)
  }
} 
const handleSubmit =async (e)=>{
    e.preventDefault();
    const data = {
      customerName,
      projectName,
      projectNumber,
      status,
      phase,
      description,
      startDate,
      visitDate,updateS:false
    }; 
   if (navigator.onLine) {
     try{
       const res = await axios.put(`https://gg-project-production.up.railway.app/endpoint/update-projects/${id}`,data);
       if (res) {
         // Open Loading View
         await db.projectSchema.update(data.projectNumber,{...data, updateS: true})
         handleCreateComment();
         handleOpen()
       }
     }catch(error){
       if (error) {
         handleError();
       }
     }
   } else {
    await db.projectSchema.update(data.projectNumber,data)
    handleOpen();
   }
  }
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
              update project     
                     </Typography>
                     {
        hideBack === 'true'? 
          <IconButton>
          <ArrowBack style={{color:'white'}} />
          </IconButton>:
          <IconButton onClick={handleOpenBack}>
          <ArrowBack style={{color:'white'}} />
          </IconButton>}
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
          <SidebarDash1/>
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
    <form onSubmit={handleOpenUpdateReason}>
    <Grid container style={{alignItems:'center',padding:'15px'}} spacing={2} component={Paper}>
        <Grid item xs={12}>
          {
            customerName.customerName !== ''?(
              <div style={{display:'flex', gap:'10px'}}>
                 <TextField 
                  disabled
                  id='customerName'
                  name='customerName' 
                  label='Customer Name'
                  value={customerName.customerName?customerName.customerName:''}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />  
                <BlackTooltip title="Clear" placement='right'>
                <IconButton onClick={handleClearCUstomer} style={{ position:'relative', float:'right'}}> 
                              <RemoveCircleOutline style={{color:'#202a5a'}}/>
                </IconButton>
                </BlackTooltip>
              </div>
            ):(
              <Autocomplete
              disableClearable
              options={customer}
              getOptionLabel={(option)=> option.Customer}
              onChange={(e, newValue) => {
                handleChangeCustomer(newValue);
            }}
            PaperComponent={({children, ...other})=>(
                        
              <Box {...other} sx={{backgroundColor:'white', left:'0',marginTop:'10px'}}>
                  {children}
                  <div>
                      <button onClick={(e)=>handleOpenOpenAutocomplete1(e)} disabled={user.data.role === 'User'} onMouseDown={(e)=>e.preventDefault()} className='btnCustomer7' style={{width:'100%'}}>
                    ADD NEW CUSTOMER
                  </button>
                  </div>
                </Box>
               )}
            renderInput={(params) => <TextField {...params} label="Customer Name" required />}
         />
            )
          }
     
        </Grid>
        <Grid item xs={6}> 
             <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                     required
                    name='visitDate' 
                    value={dayjs(visitDate)}
                    label='Visit Date' onChange={(date)=>setVisitDate(date)}
                    sx={{ width: '100%', backgroundColor:'white' }}      
                    format='DD/MM/YYYY' 
               />
                  </DemoContainer>
                  </LocalizationProvider>
               </Grid>
        <Grid item xs={6}> 
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                     required
                    name='startDate' 
                    label='Start Date'
                    value={dayjs(startDate)}
                    onChange={(newDate)=>setStartDate(newDate)}
                    sx={{ width: '100%', backgroundColor:'white' }}  
                    format='DD/MM/YYYY'     
               />
                  </DemoContainer>
                  </LocalizationProvider>
               </Grid>
               <Grid item xs={6}>
                <TextField      
                  id='ProjectName'
                  name='ProjectName' 
                  label='Project Name'
                  value={projectName}
                  onChange={(e)=>setProjectName(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}      
                />
               </Grid>
               <Grid item xs={6}> 
               <FormControl sx={{ width: '100%', backgroundColor:'white' }}>
                <InputLabel htmlFor="projectNumber">Project Number</InputLabel>
                <OutlinedInput
                 disabled={user.data.role !== 'CEO'}
                 type='number'
                 id='projectNumber'
                 name='projectNumber' 
                 label='Project Number'
                 value={projectNumber}
                 onChange={(e)=>setProjectNumber(e.target.value)}
                startAdornment={<InputAdornment position="start">P-00</InputAdornment>}
                />
               </FormControl>
               </Grid>
               <Grid item xs={12}>
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
    <h3>Phase</h3>
    <Add className='btnCustomer' onClick={handleAdd}/>
    </div>
    </Grid>
    <Grid item xs={12}>
    {
        phase.map((data,i)=>
            <div key={i} style={{display:'flex', alignItems:'center', padding:'10px'}}> 
             <Grid container style={{alignItems:'center'}} spacing={2}>
       <Grid item xs={4}> 
       <TextField 
       name="phase" id="phase"
       label='Phase'
       value={data} onChange={(e)=>handleChange(e,i)}
       sx={{ width: '100%', backgroundColor:'white' }} 
       />
       </Grid>
       <Grid item xs={2}> 
       <Delete className='btnCustomer' onClick={()=>handleDelete(i)}/>
       </Grid>
       </Grid>
         </div>
        )
    }
    </Grid>
    <Grid item xs={12}> 
               <FormControl sx={{ width: '100%' }}>
                  <InputLabel id="status">Status</InputLabel>
                  <Select
                      required
                     id="status"
                     value={status} 
                     onChange={(e)=>setStatus(e.target.value)}
                     name="status"
                     label="status"
                     defaultValue="Pending"
                  >
                        <MenuItem value="Pending">Pending</MenuItem>
                        <MenuItem value="On-Going">On-Going</MenuItem>
                        <MenuItem value="Stopped">Stopped</MenuItem>
                        <MenuItem value="Completed">Completed</MenuItem>
                  </Select>
                 </FormControl>
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
    <button className='btnCustomer6' style={{width:'100%'}}>Save</button>
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
           <Typography>Do you want to stop updating project ? </Typography>
           <p><span className="txt2" style={{color:'red'}}>Note :</span> <span className="txt2"> If you stop updating without saving, all your changes will be lost</span></p>
          </Grid> 
          <br/>
          <Grid item xs={6}>
          <button type='submit' onClick={() => navigate('/ProjectViewAdmin')} className='btnCustomer' style={{width: '100%'}}>Yes</button>
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
              <button onClick={handleClose} className='btnCustomer'>
                Close
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
          <Modal  
        open={open2}
        onClose={handleCloseUpdateReason}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
 <Box sx={{ ...style, width: 500 }}>
        <BlackTooltip title="Close" placement='left'>
        <IconButton onClick={handleCloseUpdateReason} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </BlackTooltip>  
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Reason Of Updating
          </Typography>
          <form onSubmit={handleSubmit}>
<Grid container style={{alignItems:'center',padding:'15px'}} spacing={2}>
          <Grid item xs={12}>
          <TextField 
          required
                  id='reason'
                  name='reason' 
                  multiline
                  rows={4}
                  value={reason}
                  onChange={(e)=>setReason(e.target.value)}
                  label='Comments'
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
      open={openAutocomplete1}
      onClose={handleCloseOpenAutocomplete1}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style2, width: 800 }}>
      <BlackTooltip title="Close" placement='left'>
        <IconButton onClick={handleCloseOpenAutocomplete1} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </BlackTooltip>
        <br/>
        <div style={{height:'600px', padding:'20px',overflow:'hidden',overflowY:'scroll'}}>
            <CustomerFormView2 onCreateOption={handleCreateCustomer} onClose={handleCloseOpenAutocomplete1}/>  
        </div>
      </Box>
    </Modal>
    </div>
  )
}

export default ProjectUpdateView
