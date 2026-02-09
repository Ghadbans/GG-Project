import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import SidebarDashE3 from '../../../component/SidebarDashE3';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import {MenuItem,Grid, IconButton, Table, TableBody, TableCell, TableHead,Paper,TableContainer, TextField, FormControl, InputLabel, Select, Typography, Autocomplete,styled, Box, FormLabel, RadioGroup, FormControlLabel, Radio, OutlinedInput, InputAdornment,Modal, Backdrop,Divider } from '@mui/material'
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
import { Add, ArrowUpwardOutlined, RemoveCircleOutline } from '@mui/icons-material';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Loader from '../../../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Logout from '@mui/icons-material/Logout';
import Close from '@mui/icons-material/Close';
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
function EmployeeUpdateView() {
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
  const [joinDate,setJoinDate] = useState(null);
  const [employeeName,setEmployeeName]= useState('');
  const [employeeAddress,setEmployeeAddress]= useState('');
  const [employeeEmail,setEmployeeEmail]= useState('');
  const [employeePhone,setEmployeePhone]= useState('');
  const [employeeRole,setEmployeeRole]= useState('');
  const [department,setDepartment]= useState('');
  const [dateOfBirth,setDateOfBirth]= useState('');
  const [Gender,setGender]= useState('');
  const [statusMarital,setStatusMarital]= useState('');
  const [identifier,setIdentifier]= useState('');
  const [identifierNumber,setIdentifierNumber]= useState('');
  const [expireDate,setExpireDate]= useState('');
  const [salary,setSalary]= useState('');
  const [description,setDescription]= useState('');
  const [bankName,setBankName] = useState('');
  const [bankAccountNumber,setBankAccountNumber]=useState('');
  const [other,setOther]= useState(0);
  const [bounceAllowances,setBounceAllowances]= useState(0);
  const [foodBasic,setFoodBasic]= useState(0);
  const [basicTransport,setBasicTransport]= useState(0);
  const [employeeId,setEmployeeId]= useState('');
  const [status,setStatus] = useState('')
 const [reason1,setReason1]= useState("");
 const [reason,setReason]= useState("");
 const [unitInfo,setUnitInfo]=useState([]);
 const [departmentInfo,setDepartmentInfo]= useState('');

 useEffect(()=>{
   const handleFetch = async () => {
  if (navigator.onLine) {
      try {
        const resItemUnit = await axios.get('http://192.168.0.200:8080/endpoint/department')
        setUnitInfo(resItemUnit.data.data);
        await Promise.all(resItemUnit.data.data.map( async (item,i)=>{
          await db.departmentSchema.put({...item, id:i+1,synced: true,updateS:true})
         }))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  }else{
   const offLineItemUnit1 = await db.departmentSchema.toArray();
   setUnitInfo(offLineItemUnit1)
  }
   }
   handleFetch()
 },[])

  useEffect (() => {
    const fetchData = async () => {
     if (navigator.onLine) {
       try {
         const res = await axios.get(`http://192.168.0.200:8080/endpoint/get-employee/${id}`)
         setJoinDate(res.data.data.joinDate);
         setEmployeeName(res.data.data.employeeName);
         setEmployeeId(res.data.data.employeeId);
         setEmployeeAddress(res.data.data.employeeAddress);
         setEmployeeEmail(res.data.data.employeeEmail);
         setEmployeePhone(res.data.data.employeePhone);
         setEmployeeRole(res.data.data.employeeRole);
         setDepartment(res.data.data.department);
         setDateOfBirth(res.data.data.dateOfBirth);
         setGender(res.data.data.Gender);
         setStatusMarital(res.data.data.statusMarital);
         setIdentifier(res.data.data.identifier);
         setIdentifierNumber(res.data.data.identifierNumber);     
         setExpireDate(res.data.data.expireDate);
         setSalary(res.data.data.salary);
         setDescription(res.data.data.description);          
         setBankName(res.data.data.bankName);
         setBankAccountNumber(res.data.data.bankAccountNumber);          
         setOther(res.data.data.other);
         setBounceAllowances(res.data.data.bounceAllowances);          
         setFoodBasic(res.data.data.foodBasic);
         setBasicTransport(res.data.data.basicTransport);          
         setStatus(res.data.data.status); 
         setReason1(res.data.data.reason1); 
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     } else {
      const resLocal = await db.employeeSchema.get({_id:id})
      setJoinDate(resLocal.joinDate);
      setEmployeeName(resLocal.employeeName);
      setEmployeeId(resLocal.employeeId);
      setEmployeeAddress(resLocal.employeeAddress);
      setEmployeeEmail(resLocal.employeeEmail);
      setEmployeePhone(resLocal.employeePhone);
      setEmployeeRole(resLocal.employeeRole);
      setDepartment(resLocal.department);
      setDateOfBirth(resLocal.dateOfBirth);
      setGender(resLocal.Gender);
      setStatusMarital(resLocal.statusMarital);
      setIdentifier(resLocal.identifier);
      setIdentifierNumber(resLocal.identifierNumber);     
      setExpireDate(resLocal.expireDate);
      setSalary(resLocal.salary);
      setDescription(resLocal.description);          
      setBankName(resLocal.bankName);
      setBankAccountNumber(resLocal.bankAccountNumber);          
      setOther(resLocal.other);
      setBounceAllowances(resLocal.bounceAllowances);          
      setFoodBasic(resLocal.foodBasic);
      setBasicTransport(resLocal.basicTransport);          
      setStatus(resLocal.status); 
      setReason1(resLocal.reason1); 

     }
    }
    fetchData()
    },[])

    const handleClearUnits = (e) => {
      e.preventDefault()
      setDepartment('');
     } 

 {/** Reason Modal start */}
  
 const [open2,setOpen2] = useState(false);

 const handleOpenUpdateReason = (e) => {
   e.preventDefault()
   setOpen2(true);
 };
 const handleCloseUpdateReason = () => {
   setOpen2(false);
 };
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
 const [openAutocomplete2, setOpenAutocomplete2] = useState(false);
 const [modalOpenLoading,setModalOpenLoading]= useState(false);
 const handleOpenOpenAutocomplete2 = (e) => {
   e.stopPropagation()
  setOpenAutocomplete2(true);
 };
 const handleCloseOpenAutocomplete2 = () => {
   setOpenAutocomplete2(false);
   setModalOpenLoading(false)
 };

 const handleOpen = () => {

   setLoadingOpenModal(true);
   setLoading(true);
   setOpen2(false);
   setTimeout(()=> {
     setLoading(false);
   }, 500)

 }
 const handleError = () => {
   setErrorOpenModal(true);
   setLoading(true);
   setOpen2(false);
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
 const handleOpenModal = () => {
  setModalOpenLoading(true);
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 500);
};

 const handleSubmitCategory = async(e)=> {
  e.preventDefault();
  const data = {
    department:departmentInfo
  }
  try{
    const res = await axios.post('http://192.168.0.200:8080/endpoint/create-department',data); 
    if (res) {
      handleOpenModal();
      setUnitInfo([...unitInfo, res.data.data ])
    }
  }catch(error){
    if (error) {
      alert('An error as Occur');
    }
  }
}

 const handleCreateComment = async () => {
  const data = {
   idInfo:id,
   person:user.data.userName + ' Modify ' + employeeName,
   reason,
   dateNotification:dateComment
  };
  try {
   await axios.post('http://192.168.0.200:8080/endpoint/create-notification/',data)
  } catch (error) {
   console.log(error)
  }
} 
 {/** Loading End */}
  const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        joinDate,
        employeeName,
        employeeAddress,
        employeeEmail,
        employeePhone,
        employeeRole,
        department,
        dateOfBirth,
        Gender,
        statusMarital,
        identifier,
        identifierNumber,
        expireDate,
        status,
        reason1,
        salary,
        description,bankAccountNumber,bankName,
        employeeId,other,bounceAllowances,foodBasic,basicTransport,updateS:false
      }; 
     if (navigator.onLine) {
       try {
         const res = await axios.put(`http://192.168.0.200:8080/endpoint/update-employee/${id}`,data)
         if (res) {
           handleOpen();
           await db.employeeSchema.update(data.employeeId,{...data, updateS: true})
           handleCreateComment();
        }
       } catch (error) {
         if (error) {
           handleError();
       }
       }
     } else {
      await db.employeeSchema.update(data.employeeId,data)
      handleOpen();
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
              update Employee     
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
   <Container maxWidth="none" sx={{ mt: 4}} >
<div>
          <form onSubmit={handleOpenUpdateReason}>
    <Grid container style={{alignItems:'center',padding:'15px'}} spacing={2} component={Paper}>
      <Grid item xs={12}>
        <Typography variant='h6'>Employee Information</Typography>
      </Grid>
      <Grid item xs={10}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                     required
                    name='joinDate' 
                    label='Join Date'
                    value={dayjs(joinDate)}
                    onChange={(date)=>setJoinDate(date)}
                    sx={{ width: '100%', backgroundColor:'white' }}  
                    format='DD/MM/YYYY'     
               />
                  </DemoContainer>
                  </LocalizationProvider>
      </Grid>
      <Grid item xs={2}>
      <TextField
      required
        id='employeeId'
        label='Employee Id'
        value={employeeId!==undefined?employeeId:''}
        onChange={(e)=>setEmployeeId(e.target.value)}
        sx={{width: '100%', backgroundColor:'white' }}       
        />
      </Grid>
      <Grid item xs={4}>
        <FormControl>
          <FormLabel id='Gender'>Gender</FormLabel>
          <RadioGroup 
          id='Gender'
          row
          value={Gender}
          onChange={(e)=> setGender(e.target.value)}
          >
            <FormControlLabel value='Female' control={<Radio/>} label='Female'/>
            <FormControlLabel value='Male' control={<Radio/>} label='Male'/>
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <TextField
        id='employeeName'
        label='Employee Name'
        value={employeeName}
        onChange={(e)=>setEmployeeName(e.target.value)}
        sx={{width: '100%', backgroundColor:'white' }}       
        />
      </Grid>
      <Grid item xs={4}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                     required
                    name='dateOfBirth' 
                    label='Birth Date'
                    value={dayjs(dateOfBirth)}
                    onChange={(date)=>setDateOfBirth(date)}
                    sx={{ width: '100%', backgroundColor:'white' }} 
                    format='DD/MM/YYYY'      
               />
                  </DemoContainer>
                  </LocalizationProvider>
      </Grid>
      <Grid item xs={4}>
        <TextField
        id='employeeAddress'
        label='Employee Address'
        value={employeeAddress}
        onChange={(e)=>setEmployeeAddress(e.target.value)}
        sx={{width: '100%', backgroundColor:'white' }} 
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
        id='employeeEmail'
        label='Email'
        value={employeeEmail}
        onChange={(e)=>setEmployeeEmail(e.target.value)}
        sx={{width: '100%', backgroundColor:'white' }} 
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
        id='employeePhone'
        label='Phone Number'
        value={employeePhone}
        onChange={(e)=>setEmployeePhone(e.target.value)}
        sx={{width: '100%', backgroundColor:'white' }} 
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
        required
        id='employeeRole'
        label='Grade'
        value={employeeRole}
        onChange={(e)=>setEmployeeRole(e.target.value)}
        sx={{width: '100%', backgroundColor:'white' }} 
        />
      </Grid>
      <Grid item xs={4}>
        {
  department !== ''?
  (
    <div style={{display:'flex', gap: '10px'}}>
      <TextField
      label='Department'
      value={department}
      sx={{ width: '100%', backgroundColor:'white' }}  
      />
        <ViewTooltip title="Clear" placement='bottom'>
                <IconButton onClick={handleClearUnits}> 
                      <RemoveCircleOutline style={{color:'#202a5a'}}/>
            </IconButton>
             </ViewTooltip>
    </div>
  )
  :(
    <div style={{display:'flex', gap:'10px'}}>
    <Autocomplete
          id="department"
          options={unitInfo}
          getOptionLabel={(Option)=> Option.department.toUpperCase()}
          onChange={(e,newValue)=>setDepartment(newValue.department)}
          sx={{ width: '100%', backgroundColor:'white' }}
          PaperComponent={({children, ...other})=>(
                          
            <Box {...other} sx={{backgroundColor:'white', left:'0',marginTop:'10px'}}>
                {children}
                <div>
                    <button onClick={(e)=>handleOpenOpenAutocomplete2(e)} disabled={user.data.role === 'User'} onMouseDown={(e)=>e.preventDefault()} className='btnCustomer7' style={{width:'100%'}}>
                  Add New Department
                </button>
                </div>
              </Box>
             )}
          renderInput={(params) => <TextField {...params} label="Department" required/>}
            />
    </div>
 
  )
} 
      </Grid>
      <Grid item xs={4}>
          <FormControl sx={{width: '100%', backgroundColor:'white' }} >
          <InputLabel htmlFor='status'>Status</InputLabel>
          <Select 
          required
          id='status'
          value={status!== undefined ?status:'undefined'}
          onChange={(e)=>setStatus(e.target.value)}
          label='Status' 
          >
            <MenuItem value="Employed">Employed</MenuItem>
            <MenuItem value="Suspended">Suspended</MenuItem>
            <MenuItem value="Fired">Fired</MenuItem>
            <MenuItem value="Resign">Resign</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {
        status !== undefined && status !== ''  &&(
          <Grid item xs={6}>
    <TextField 
    required = {status === 'Suspended' || status === 'Fired' || status === 'Resign'}
                  id='reason1'
                  name='reason1' 
                  value={reason1 !== undefined?reason1:''}
                  label='Reason'
                  multiline
                  rows={2}
                  onChange={(e)=>setReason1(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
    </Grid>
        )
      }
      <Grid item xs={12}>
        <table className="secondTable" style={{fontSize:'15px',marginBottom:'0px',border:'1px solid #DDD'}}>
          <thead>
            <tr>
              <th colSpan={5} style={{padding:'5px',border:'1px solid #DDD',backgroundColor:'#316FF6', color:'white'}}> Salary Information</th>
            </tr>
            <tr>
              <th style={{width:'200px',border:'1px solid #DDD'}}>Basic wage</th>
              <th style={{width:'200px',border:'1px solid #DDD'}}>Transport allowances</th>
              <th style={{width:'200px',border:'1px solid #DDD'}}>Food allowances</th>
              <th style={{width:'200px',border:'1px solid #DDD'}}>Bounce allowances 3%</th>
              <th style={{width:'200px',border:'1px solid #DDD'}}>Other</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td style={{width:'200px',border:'1px solid #DDD'}}>
               <TextField
               required
               size='small'
               id='salary'
               value={salary !== undefined ? salary :''}
               onChange={(e)=>setSalary(e.target.value)}
                  style={{ width: '200px', backgroundColor:'white' }}       
              /></td>
              <td style={{width:'200px',border:'1px solid #DDD'}}> 
            <TextField
            required
            size='small' 
            id='basicTransport'
            value={basicTransport !== undefined ? basicTransport :''}
            onChange={(e)=> setBasicTransport(e.target.value)}
            style={{ width: '200px', backgroundColor:'white' }}       
              />
              </td>
              <td style={{width:'200px',border:'1px solid #DDD'}}> 
            <TextField
            required
            size='small' 
              id='foodBasic'
              value={foodBasic !== undefined ? foodBasic :''}
              onChange={(e)=> setFoodBasic(e.target.value)}
                  style={{ width: '200px', backgroundColor:'white' }}       
              />
            </td>
            <td style={{width:'200px',border:'1px solid #DDD'}}> 
            <TextField
            required
            size='small' 
            id='bounceAllowances'
            value={bounceAllowances !== undefined ? bounceAllowances :''}
            onChange={(e)=> setBounceAllowances(e.target.value)}
            style={{ width: '200px', backgroundColor:'white' }}       
              /></td>
              <td style={{width:'200px',border:'1px solid #DDD'}}> 
            <TextField
            required
            size='small' 
            id='other'
            value={other !== undefined ?other :''}
            onChange={(e)=> setOther(e.target.value)}
            style={{ width: '200px', backgroundColor:'white' }}       
              /></td>
            </tr>
          </tbody>
        </table>
      </Grid>
      <Grid item xs={6}>
      <TextField
        id='bankName'
        label='Bank Name'
        value={bankName?bankName:''}
        onChange={(e)=>setBankName(e.target.value)}
        sx={{width: '100%', backgroundColor:'white' }} 
        />
      </Grid>
      <Grid item xs={6}>
      <TextField
        id='bankAccountNumber'
        label='Bank Account Number'
        value={bankAccountNumber?bankAccountNumber:''}
        onChange={(e)=>setBankAccountNumber(e.target.value)}
        sx={{width: '100%', backgroundColor:'white' }} 
        />
      </Grid>
      <Grid item xs={4}>
        <FormControl sx={{width: '100%', backgroundColor:'white' }} >
          <InputLabel htmlFor='identifier'>Identifier</InputLabel>
          <Select 
          id='identifier'
          value={identifier}
          onChange={(e)=>setIdentifier(e.target.value)}
          label='Identifier' 
          >
            <MenuItem value="Passport">Passport</MenuItem>
            <MenuItem value="National-ID">National-ID</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <TextField
        id='identifierNumber'
        label='Identifier Number'
        value={identifierNumber}
        onChange={(e)=>setIdentifierNumber(e.target.value)}
        sx={{width: '100%', backgroundColor:'white' }} 
        />
      </Grid>
      <Grid item xs={4}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                     required
                     name='expireDate' 
                     label='Identifier Expire Date'
                     value={dayjs(expireDate)}
                     onChange={(date)=>setExpireDate(date)}
                     sx={{ width: '100%', backgroundColor:'white' }} 
                     format='DD/MM/YYYY'      
               />
                  </DemoContainer>
                  </LocalizationProvider>
      </Grid>
      <Grid item xs={12}>
      <FormControl>
          <FormLabel id='statusMarital'>Status Marital</FormLabel>
          <RadioGroup 
          id='statusMarital'
          row
          value={statusMarital}
          onChange={(e)=> setStatusMarital(e.target.value)}
          >
            <FormControlLabel value='Single' control={<Radio/>} label='Single'/>
            <FormControlLabel value='Married' control={<Radio/>} label='Married'/>
          </RadioGroup>
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
           <Typography>Do you want to stop updating employee ? </Typography>
           <p><span className="txt2" style={{color:'red'}}>Note :</span> <span className="txt2"> If you stop updating without saving, all your changes will be lost</span></p>
          </Grid> 
          <br/>
          <Grid item xs={6}>
          <button type='submit' onClick={() => navigate('/TewmViewAdmin')} className='btnCustomer' style={{width: '100%'}}>Yes</button>
          </Grid>
          <Grid item xs={6}>
          <button type='submit' onClick={handleCloseBack} className='btnCustomer' style={{width: '100%'}}>No</button>
          </Grid>
        </Grid> 
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
       open={openAutocomplete2}
        onClose={handleCloseOpenAutocomplete2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
 <Box sx={{ ...style, width: 500 }}>
        <BlackTooltip title="Close" placement='left'>
        <IconButton onClick={handleCloseOpenAutocomplete2} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </BlackTooltip>  
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create Department
          </Typography>
          <form onSubmit={handleSubmitCategory}>
        <Grid container style={{alignItems:'center',padding:'15px'}} spacing={2}>
          <Grid item xs={12}>
          <TextField 
                  id='department'
                  name='department' 
                  value={departmentInfo}
                  label='Department'
                  onChange={(e)=> setDepartmentInfo(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
          </Grid>
          <br/>
          <Grid item xs={12}>
          <button  className='btnCustomer6' style={{width: '100%'}}>Save</button>
          </Grid>
        </Grid>
        </form>
        </Box>
      </Modal>
      <Modal
      open={modalOpenLoading}
      onClose={handleCloseOpenAutocomplete2}
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
                  <h2> Data successfully Saved</h2>
                  <div style={{display:'flex', gap:'60px',justifyContent:'center'}}>
              <button onClick={handleCloseOpenAutocomplete2} className='btnCustomer'>
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

export default EmployeeUpdateView
