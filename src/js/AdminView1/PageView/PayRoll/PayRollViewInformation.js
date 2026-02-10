import React, { useEffect,useState,useRef } from 'react';
import SidebarDashE2 from '../../../component/SidebarDashE2';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import {MenuItem,Grid, IconButton, Table, TableBody, TableCell,TableRow, TableHead,Paper,TableContainer, TextField, FormControl, InputLabel, Select, Typography, Autocomplete,styled, Modal, Backdrop, Fade, Box,OutlinedInput,InputAdornment,Checkbox, LinearProgress, Stepper, Step, StepLabel, Button,Tabs,Tab, Menu, Divider, Card, CardContent } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import IosShareIcon from '@mui/icons-material/IosShare';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
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
import { Add, ArrowUpwardOutlined, ExitToApp } from '@mui/icons-material';
import { v4 } from 'uuid';
import { useNavigate,NavLink,useParams,Link } from 'react-router-dom';
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
import CurrencyExchange from '@mui/icons-material/CurrencyExchange';
import MonetizationOn from '@mui/icons-material/MonetizationOn';
import { DataGrid } from '@mui/x-data-grid';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import Image from '../../../img/images.png'
import Close from '@mui/icons-material/Close';
import { alpha } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Pie, PieChart, ResponsiveContainer,Cell, Sector } from 'recharts';
import PrintPayRoll from './PrintPayRoll';
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import db from '../../../dexieDb';

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
const PrintTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'white',
    color: 'black',
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

function PayRollViewInformation() {
  let {id} = useParams();
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
    const [grantAccess,setGrantAccess] = useState([]);
    useEffect(()=>{
     const fetchNumber = async () => {
       if (navigator.onLine) {
           try {
             const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/grantAccess');
             res.data.data.filter((row)=> row.userID === user.data.id )
                          .map((row)=>setGrantAccess(row.modules))
           } catch (error) {
             console.error('Error fetching data:', error);
           }
       }else{
     const offLineCustomer1 = await db.grantAccessSchema.toArray(); 
     offLineCustomer1.filter((row)=> row.userID === user.data.id )
     .map((row)=>setGrantAccess(row.modules))
   }
     }
     fetchNumber()
   },[user])
   
   const PRollInfoU = grantAccess.filter((row)=> row.moduleName === "Pay-Roll" && row.access.editM === true);

    const [payRoll,setPayRoll] = useState([]);
    const [employee,setEmployee] = useState([]);
    const [loadingData, setLoadingData] = useState(true);
    const [employeeName,setEmployeeName]= useState({});
    useEffect(()=> {
      const fetchPayRoll = async () => {
      if (navigator.onLine) {
          try {
            const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/payRoll')
            setPayRoll(res.data.data.reverse());
            res.data.data.filter((row)=> row._id === id).map((row)=> setEmployeeName(row.employeeName) )
            setLoadingData(false)
          } catch (error) {
            console.error('Error fetching data:', error);
            setLoadingData(false)
          }
      } else {
        const offLinePayRoll = await db.payRollSchema.toArray();
        setPayRoll(offLinePayRoll.reverse());
        offLinePayRoll.filter((row)=> row._id === id).map((row)=> setEmployeeName(row.employeeName) )
        setLoadingData(false)
      }
      }
      fetchPayRoll()
    },[id])
    useEffect(()=> {
      const fetchData = async () => {
      if (navigator.onLine) {
          try {
            const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/employee')
            setEmployee(res.data.data);
          } catch (error) {
            console.error('Error fetching data:', error);
            setLoadingData(false)
          }
      } else {
        const offLineEmployee = await db.employeeSchema.toArray(); 
        setEmployee(offLineEmployee);
      }
      }
      fetchData()
    },[])
    const relatedEmployee = employee.filter((Item)=>Item._id === employeeName.id) 
    const employeePhone = relatedEmployee?relatedEmployee.map((row)=>row.employeePhone):''
    const employeeId = relatedEmployee?relatedEmployee.map((row)=>row.employeeId):''
    const bankName = relatedEmployee?relatedEmployee.map((row)=>row.bankName):''
    const bankAccountNumber = relatedEmployee?relatedEmployee.map((row)=>row.bankAccountNumber):''
    const department = relatedEmployee?relatedEmployee.map((row)=>row.department):''
    const employeeRole = relatedEmployee?relatedEmployee.map((row)=>row.employeeRole):''
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
      setAnchorEl(null);
    };

    const [show, setShow] = useState(1);
    const handleShow = (e) =>{
        setShow(e);
        setAnchorEl(null);
    }
    const componentRef = React.useRef();
    
    const handlePrint = useReactToPrint({
      content:()=> componentRef.current
    })


    const handleOpenPrint = () => {
      handlePrint()
      setAnchorEl(null);
    };
 
    const [reason,setReason]= useState("");
    const [Comments1,setComments]= useState([]);
  
    useEffect(()=> {
      const fetchComment = async () => {
        try {
          const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/comment')
          const resp = res.data.data.filter((row)=> row.CommentInfo.idInfo === id)
                       setComments(resp.reverse())
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      fetchComment()
       },[id])
  
    const CommentInfo = 
      {
        idInfo: id,
        person: user.data.userName ,
        reason
      }
    
      {/** Loading Start */}
  
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
      }
      const handleCloseError = () => {
        setErrorOpenModal(false);
      }
      {/** Loading End */}
     
      const handleSubmitEdit = async (e) => {
        e.preventDefault();
        const data = {
          CommentInfo
        };
        try {
          const res = await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-comment/',data)
          if (res) {
            setReason("");
            handleOpen();
            const newData = res.data.data
            setComments([newData,...Comments1])
          }
        } catch (error) {
          if (error) {
            handleError();
          }
        }
      } 
      const [show2, setShow2] = useState(1);
      const handleShow2 = (e) =>{
          setShow2(e);
      }
      const [showRef,setShowRef] = useState(1)
      const handleShowRef = (e) =>{
        setShowRef(e);
        setAnchorEl(null);
    }
    const [value,setValue] = useState(0);
    const [value2,setValue2] = useState(0);
    useEffect(()=>{
      const selectedIndex = payRoll.findIndex(row=> row._id === id);
      if (selectedIndex !== -1) {
        setValue(selectedIndex)
      }
    },[payRoll,id])
    const handleChange = (e, newValue) => {
      setValue(newValue)
    }
    const handleChange2 = (e, newValue) => {
      setValue2(newValue)
    }
    const [search,setSearch] =useState('');
    const handleSearch = (e) => {
      const value = e.target.value
      setSearch(value)
    }
    const newArray = search !== ''?payRoll.filter((row)=>
    row.employeeName.name.toLowerCase().includes(search.toLowerCase())
     ):payRoll
     const [value3, setValue3] = React.useState('1');
    
     useEffect(()=>{
      const result =localStorage.getItem('TabPayRollView')
      if (result) {
        setValue3(result)
      }
     })
     const handleChange3 = (event, newValue) => {
      const changeValue = newValue
       setValue3(changeValue);
       localStorage.setItem('TabPayRollView',changeValue)
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
              PayRoll Information
            </Typography>
            <IconButton onClick={() => navigate('/PayRollViewAdmin')}>
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
   <Container maxWidth="none" sx={{ mt: 2}} >
    {
      loadingData?<div >
        <div style={{position:'relative', top:'120px'}}>
          <Loader/>
        </div>
      </div>:(
    <div>
        <Grid container spacing={2}>
        {show===1 ?
            <Grid item xs={3}>
                {
                show2 ===1 ?(
            <div className='itemInfoContainer'>
             <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div style={{display:'flex', padding:'5px', alignItems:'center'}}>
               <Checkbox/>
              <Typography variant='h6'>All PayRoll</Typography>
            </div>
       <div style={{padding:'20px'}}>
        <p className='btnCustomer1' onClick={() => handleShow2(2)}>Filter</p>
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
                {payRoll?.map((row,index) => (
                  <Tab
                  key={index}
                  label={ row.employeeName.name + ' | ' + row.payNumber}
                  component={Link}
                  to={`/PayRollViewInformation/${row._id}`}
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
                </div>
                  ):''
                }
                  {
                show2 === 2 ?(
                  <div className='itemInfoContainer'>
                  <Grid container style={{alignItems:'center',padding:'10px'}} spacing={3}>
                   <Grid item xs={10}>
                   <TextField
                                  label='search'
                                  id='search'
                                  value={search}
                                  variant="standard"
                                  onChange={handleSearch}
                                  />
                   </Grid>
                   <Grid item xs={2}>
                   <ViewTooltip title="Close" placement='bottom'>
                     <IconButton onClick={() => handleShow2(1)} style={{ position:'relative', float:'right'}}> 
                                   <Close style={{color:'#30368a'}}/>
                     </IconButton>
                     </ViewTooltip> 
                   </Grid>
                  </Grid>
                         <div style={{height:'558px', overflow:'hidden',overflowY:'scroll', width:'100%'}}>
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
                                  {newArray?.map((row,index) => (
                                    <Tab
                                    key={index}
                                    label={ row.employeeName.name + ' | ' + row.payNumber}
                                    component={Link}
                                    to={`/PayRollViewInformation/${row._id}`}
                                    sx={{
                                      '&.Mui-selected':{
                                        color:'#30368a'
                                      }
                                    }}
                                    />
                                   ))}
                                     </Tabs>
                                 </div>           
                             </div>
                ):''
              }
            </Grid>
            :
            ""}
            <Grid item xs={9}>
            <div className='itemInfoContainer2'>
            <div style={{width:'100%', background:'white'}}>
          {
          payRoll?.filter(row=> row._id === id)?.map((row)=>
          {
            const related = relatedEmployee.find((Item)=>Item._id === row.employeeName.id) 
        return(
       <div key={row._id} style={{padding:'20px'}}>
        <header style={{display:'block'}}>
          <div style={{display:'flex', justifyContent:'space-between',alignItems:'center',marginBottom:'10px'}}>
            <Typography variant='h5'>{row.employeeName.name} | <span>  PR-00{row.payNumber}</span></Typography>
            <div>
            <Typography
      color={
        row.status === "UnPaid"
        ? "blue":
        row.status === "Paid"
        ? "#4caf50":"black"
     }
      >
  {row.status !== undefined ?row.status:'Undefined'}
      </Typography>
            </div>
           <div>
              <Button
             aria-controls={open ? 'demo-customized-menu' : undefined}
             aria-haspopup="true"
             aria-expanded={open ? 'true' : undefined}
             variant="contained"
             disableElevation
             onClick={handleClick}
             endIcon={<KeyboardArrowDownIcon />}
             sx={{ bgcolor:'gray',  '&:hover': {
              color:'gray',
              bgcolor:'white',
              border:'1px solid gray',
            }}}
              >
                Options
              </Button>
              <Menu
                  id="demo-customized-menu"
                  MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                  }}
               anchorEl={anchorEl}
               open={open}
               onClose={handleCloseMenu}
               TransitionComponent={Fade}
              >
                <MenuItem disabled={PRollInfoU.length === 0 && user.data.role !== 'CEO'}> 
                                      <NavLink to={`/PayRollUpdateFormView/${row._id}`} className='LinkName' style={{display:'flex',gap:'20px', alignItems:'center', color:'gray'}}>
                                      <EditIcon/>
                                      <Typography>Edit</Typography>
                                      </NavLink>
                </MenuItem>
                <MenuItem onClick={handleOpenPrint} sx={{display:'flex', gap:'20px', color:'gray', width:'100%'}}>
                <LocalPrintshopIcon/>
                <span>Print</span> 
                </MenuItem>

              </Menu>
            </div>
          </div>
       </header>
       <hr/>
       <Box style={{height:'550px', overflow:'hidden',overflowY:'scroll', width:'100%', background:'white' }}>
            <div ref={componentRef}>
 <table className="secondTable" style={{fontSize:'80%',marginBottom:'0px',border:'1px solid #DDD'}}>
        <thead>
          <tr>
            <th colSpan={5}  style={{padding:'5px',border:'1px solid #DDD',backgroundColor:'#316FF6', color:'white'}}>Global Gate</th>
          </tr>
          <tr>
            <th  style={{padding:'5px',border:'1px solid #DDD', color:'black',backgroundColor:'#e8f7fe'}} colSpan={5}>ٍSalary Slip for the month Of: {dayjs(row.month).format('MMMM-YYYY')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>Employee Name</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}} colSpan={2}>{row.employeeName.name?row.employeeName.name:''}</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>Total Days</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}> {row.daysOpen}  
             </td>
          </tr>
          <tr>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>Employee Details</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}} colSpan={2}>{employeePhone !== undefined?employeePhone:''}</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>LOPs</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>   
            {row.Lops} 
             </td>
          </tr>
          <tr>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>Employee Id</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}} colSpan={2}>{employeeId !== undefined ? employeeId :''}</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>Paid Days</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>   
            {row.daysW} 
              </td>
          </tr>
          <tr>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>Grade</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}} colSpan={2}>{employeeRole !== undefined ?employeeRole :''}</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>Bank Name</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>{bankName !== undefined ? bankName :''}</td>
          </tr>
          <tr>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>Date</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}} colSpan={2}>{dayjs(row.payDate).format('DD-MMMM-YYYY')}</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>A/C No.</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>{bankAccountNumber !== undefined ? bankAccountNumber :''}</td>
          </tr>
          <tr>
            <td style={{width:'400px',border:'1px solid #DDD', color:'black'}} colSpan={2}>Department</td>
            <td style={{width:'400px',border:'1px solid #DDD', color:'black'}} colSpan={3}>{department !== undefined ? department: ''}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th style={{padding:'5px',border:'1px solid #DDD', color:'black',backgroundColor:'#e8f7fe'}}>Earning (FC)</th>
            <th style={{padding:'5px',border:'1px solid #DDD', color:'black',backgroundColor:'#e8f7fe'}}>Actual Salary (FC)</th>
            <th style={{padding:'5px',border:'1px solid #DDD', color:'black',backgroundColor:'#e8f7fe'}}>Earnings (FC)</th>
            <th style={{padding:'5px',border:'1px solid #DDD', color:'black',backgroundColor:'#e8f7fe'}} colSpan={2}>Deductions (FC)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>Basic wage</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>
           <span>{row.basicSalary?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} </span> <span>($<span>{(row.basicSalary/row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span>)</span>
              </td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>
             <span>{row.earningSalary !== undefined?row.earningSalary?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,','):0}</span> <span>($<span>{( row.earningSalary !== undefined?row.earningSalary/row.rate:0)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span>)</span>
            </td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>In advanced allowances </td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>
              <span>{row.advancedSalary?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} </span> <span>($<span>{(row.advancedSalary/row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span>)</span>
              </td>
          </tr>
          <tr>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>Transport allowances</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}> 
            <span>{row.basicTransport?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} </span> <span>($<span>{(row.basicTransport/row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span>)</span>
              </td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>
              <span>{row.transportEarning?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} </span> <span>($<span>{(row.transportEarning/row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span>)</span>
              </td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>Transport</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>
              <span>{row.transportDeduction?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} </span> <span>($<span>{(row.transportDeduction/row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span>)</span>
             </td>
          </tr>
          <tr>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>Food allowances</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}> 
            <span>{row.foodBasic !== undefined?row.foodBasic?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,','):0}</span> <span>($<span>{( row.foodBasic !== undefined?row.foodBasic/row.rate:0)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span>)</span>
            </td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}> 
            <span>{row.foodEarning?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} </span> <span>($<span>{(row.foodEarning/row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span>)</span>
            </td>
              <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>Food</td>
              <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}> 
              <span>{row.foodDeduction?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} </span> <span>($<span>{(row.foodDeduction/row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span>)</span>
            </td>
          </tr>
          <tr>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>Bounce allowances 3%</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}> 
            <span>{row.bounceAllowances?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} </span> <span>($<span>{(row.bounceAllowances/row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span>)</span>
            </td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>
               <span>{row.bounceAllowancesEarning !== undefined?row.bounceAllowancesEarning?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,','):0}</span> <span>($<span>{( row.bounceAllowancesEarning !== undefined?row.bounceAllowancesEarning/row.rate:0)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span>)</span>
               </td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>Loan recovery</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>
    
              <span>{row.loan?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} </span> <span>($<span>{(row.loan/row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span>)</span>
            </td>
          </tr>
          <tr>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>Other</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>
            <span>{row.other !== undefined?row.other?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,','):0}</span> <span>($<span>{( row.other !== undefined?row.other/row.rate:0)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span>)</span>
            </td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>
               <span>{row.otherEarning?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} </span> <span>($<span>{(row.otherEarning/row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span>)</span>
            </td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>Item lost recovery</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}}>
              <span>{row.itemLost?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} </span> <span>($<span>{(row.itemLost/row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span>)</span>
              </td>
          </tr>
          </tbody>
      </table>
      <table className="secondTable" style={{fontSize:'80%',marginBottom:'5px',border:'1px solid #DDD', color:'black'}}>
        <tbody>
          <tr>
            <td  style={{padding:'5px',border:'1px solid #DDD', color:'black',textAlign:'center'}} colSpan={6}>Total (Basic, Earning & Deduction)</td>
          </tr>
          <tr>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}} colSpan={2}><span>Total Basic:</span> <span> FC {row.totalActualSalary?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span> <span>($<span>{(row.totalActualSalary/row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span>)</span></td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}} colSpan={2}><span>Total Earning:</span> <span> FC {row.totalActualEarning?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span> <span>($<span>{(row.totalActualEarning/row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span>)</span></td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}} colSpan={2}><span>Total Deduction:</span> <span> FC {row.totalActualDeduction?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span> <span>($<span>{(row.totalActualDeduction/row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span>)</span></td>
          </tr>
          <tr>
            <td  style={{padding:'5px',border:'1px solid #DDD', color:'black',textAlign:'center'}} colSpan={6}>Total (Paid)</td>
          </tr>
          <tr>
            <td style={{border:'1px solid #DDD'}} colSpan={2}>Net payable</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}} colSpan={4}>FC {row.totalNet?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} <span>($<span>{row.totalPaidDollars?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span>)</span></td>
          </tr>
          <tr>
            <td style={{border:'1px solid #DDD'}} colSpan={2}>Deduction</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}} colSpan={4}>FC {row.totalActualDeduction?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} <span>($<span>{(row.totalActualDeduction/row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span>)</span></td>
          </tr>
          <tr>
            <td style={{border:'1px solid #DDD'}} colSpan={2}>Overtime & Bonus</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}} colSpan={4}>FC {row.bonus?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} <span>($<span>{(row.bonus/row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span>)</span></td>
          </tr>
          <tr>
            <td style={{border:'1px solid #DDD'}} colSpan={2}>Total Generale</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}} colSpan={4}>FC {row.totalPaid?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} <span>($<span>{(row.totalPaid/row.rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span>)</span></td>
          </tr>
          <tr>
            <td  style={{padding:'5px',border:'1px solid #DDD', color:'black',textAlign:'center'}} colSpan={6}>Total (Net)</td>
          </tr>
          <tr>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black', color:'black'}} colSpan={2}>Net payable(FC): FC{row.totalNet?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</td>
            <td  style={{padding:'5px',border:'1px solid #DDD', color:'black',textAlign:'center'}}><span>rate</span>: {row.rate}</td>
               <td  style={{padding:'5px',border:'1px solid #DDD', color:'black', color:'black',textAlign:'center'}} colSpan={2}>Net payable($): ${row.totalPaidDollars?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</td>
          </tr>
          <tr>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black', color:'black'}} colSpan={2}>Amount Paid(FC): FC{row.amountPayFC!==undefined? row.amountPayFC.toString().replace(/\B(?=(\d{3})+(?!\d))/g,','):0}</td>
            <td  style={{padding:'5px',border:'1px solid #DDD', color:'black',textAlign:'center'}}>-</td>
               <td  style={{padding:'5px',border:'1px solid #DDD', color:'black', color:'black',textAlign:'center'}} colSpan={2}>Amount Paid($): ${row.amountPayUSD !== undefined? row.amountPayUSD.toString().replace(/\B(?=(\d{3})+(?!\d))/g,','):0}</td>
          </tr>
          <tr>
               <td style={{width:'200px',border:'1px solid #DDD', color:'black', color:'black'}} colSpan={2}>Credit(FC): FC{row.CreditFC!==undefined? row.CreditFC?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,','):0}</td>
            <td  style={{padding:'5px',border:'1px solid #DDD', color:'black',textAlign:'center'}}>-</td>
               <td  style={{padding:'5px',border:'1px solid #DDD', color:'black', color:'black',textAlign:'center'}} colSpan={2}>Credit($): ${row.CreditUSD !== undefined? row.CreditUSD?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,','):0}</td>
          </tr>
          <tr>
            <td style={{border:'1px solid #DDD'}} colSpan={2}>Net Words</td>
            <td style={{width:'200px',border:'1px solid #DDD', color:'black'}} colSpan={4}>{row.words} Franc Congolais.</td>
          </tr>
        </tbody>
      </table>
            </div>
       </Box>
     </div>
         )})}
  </div>         
            </div>   
            </Grid>
            {show===2 ?
     <Grid item xs={3}>
      <div className='itemInfoContainer'>
        <div style={{padding:'10px'}}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%'}}>
        <p>Comments</p>
         <p className='btnCustomer1' onClick={() => handleShow(1)}>Close</p>
      </div>
           <form onSubmit={handleSubmitEdit}>
            <Grid container style={{alignItems:'center'}} spacing={1}>
              <Grid item xs={12}>
              <TextField 
          required
          id='comments'
          name='comments' 
          multiline
          rows={4}
          value={reason}
          onChange={(e)=>setReason(e.target.value)}
          label='Comments'
          sx={{ width:'100%', backgroundColor:'white' }}      
              />
              </Grid>
              <Grid item xs={12}>
              <button type='submit' style={{width:'100%'}} className='btnCustomer6'>Save</button>
              </Grid>
            </Grid>

        </form> 
        <hr/>
        </div>
        <div style={{height:'333px', overflow:'hidden',overflowY:'scroll', width:'100%'}}>
          <div style={{padding:'10px'}}>
            <table style={{width:'100%'}}>
              <tbody>
                 {Comments1.map((Item)=>(
                    <tr key={Item._id}>
                      <td style={{width:'100%',borderBottom:'1px solid black'}}>
                        {dayjs(Item.dateComment).format('DD/MM')} {Item.CommentInfo.person + ': ' + Item.CommentInfo.reason}
                      </td>
                    </tr>
                 ))}  
              </tbody>
            </table>
          </div>
        </div>
      </div>
           </Grid>:""}
           {show===3 ?
     <Grid item xs={3}>
      <div className='itemInfoContainer'>
        <div style={{padding:'20px'}}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%'}}>
        <p>HISTORY</p>
        <BlackTooltip title="Close" placement='bottom'>
        <IconButton onClick={() => handleShow(1)} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </BlackTooltip>
      </div>
      <br/>

        </div>
        <div style={{height:'518px', overflow:'hidden',overflowY:'scroll', width:'100%'}}>
          <div style={{padding:'10px'}}>
          {
        maintenance.filter((row)=> row._id === id)
        .map((row)=> (
          <p key={row._id}>{row.Create?(
            <span>{row.Create}</span>
          ):''}</p>
        ))
      }
          </div>
        </div>
      </div>
           </Grid>:""}
        </Grid>
     </div>)}
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
    </div>
  )
}

export default PayRollViewInformation
