import React, { useEffect,useState } from 'react';
import SidebarDash1 from '../../../component/SidebarDash1';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import {MenuItem,Grid, IconButton, Table, TableBody, TableCell,TableRow, TableHead,Paper,TableContainer, TextField, FormControl, InputLabel, Select, Typography, Autocomplete,styled, Modal, Backdrop, Fade, Box,OutlinedInput,InputAdornment,Divider } from '@mui/material'
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
import { Add, ArrowUpwardOutlined, DragIndicatorRounded, RemoveCircleOutline } from '@mui/icons-material';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
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
import Close from '@mui/icons-material/Close';
import ProjectFormView from '../ProjectView/ProjectFormView';
import ProjectFormView2 from '../ProjectView/ProjectFormView2';
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
function DailyExpenseForm() {
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
      const [categories,setCategories] = useState([]);
      const [employee,setEmployee]= useState([]);
      const [project,setProject] = useState([]);
      const [project2,setProject2] = useState([]);
      const [PayRate, setPayRate] = useState(0);
      const [expenseCategory,setExpenseCategory] = useState({});
      const [employeeName,setEmployeeName]= useState([]);
      const [accountName,setAccountName] = useState('');
      const [reason,setReason] = useState('');
      const [inputValueProject, setInputValueProject] = React.useState('');
      const [description,setDescription] = useState('');
      const [accountNameInfo,setAccountNameInfo] = useState({
        _id: "",
        name: ""
      });
      const [expenseDate,setExpenseDate] =  useState(()=>{
        const date = new Date()
        return date
      });
      const [amount,setAmount] = useState(0);
      const [rate,setRate] = useState(0);
      const [total,setTotal] = useState(0);
      const [expenseNumber,setExpenseNumber] = useState(0);
      const [expensesCategory,setExpensesCategory] = useState("");
      const [openAutocomplete1, setOpenAutocomplete1] = useState(false);
      const [openAutocomplete2, setOpenAutocomplete2] = useState(false);
      const [cash,setCash] = useState([]);
      const dateComment = new Date();
      const dateFormate = dayjs(dateComment).format('DD/MM/YYYY')
      const Create = {
        person: user.data.userName + ' Created ',
        dateComment: dateFormate
      }
                   useEffect(()=> {
                    const fetchData = async () => {
                      if (navigator.onLine) {
                        try {
                          const projectResponse = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/projects')
                          const categoryResponse = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/expensesCategory')
                          const employeeResponse = await  axios.get('https://gg-project-productionn.up.railway.app/endpoint/employee')
                          setProject(projectResponse.data.data);
                          setProject2(projectResponse.data.data.filter((row)=> row.status === "On-Going"));
                          setCategories(categoryResponse.data.data);
                          setEmployee(employeeResponse.data.data);
                        } catch (error) {
                          console.log(error)
                        }
                      } else {
                        const offLineProject = await db.projectSchema.toArray();
                        setProject(offLineProject);
                        setProject2(offLineProject.filter((row)=> row.status === "On-Going"));
                        const offLineCategory = await db.dailyExpensesCategorySchema.toArray();
                        setCategories(offLineCategory);
                        const offLineEmployee = await db.employeeSchema.toArray();
                        setEmployee(offLineEmployee);
                      }
                    }
                    fetchData()
                  },[])
     useEffect(()=>{
      const fetchlastNumber = async () => {
       if (navigator.onLine) {
         try {
           const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/get-last-saved-expense')
           setExpenseNumber(parseInt(res.data.expenseNumber) + 1)
         } catch (error) {
           console.error('Error fetching data:', error);
         }
       } else {
        const offLineCustomer1 = await db.dailyExpenseSchema.toArray();
        const latest = offLineCustomer1.reduce((max, row)=> row.expenseNumber > max.expenseNumber? row : max,offLineCustomer1[0] )
        setExpenseNumber(parseInt(latest.expenseNumber) + 1)
       }
      }
      fetchlastNumber()
                  },[])
      const handleOpenOpenAutocomplete1 = (e) => {
        e.stopPropagation()
       setOpenAutocomplete1(true);
      };
      const handleCloseOpenAutocomplete1 = () => {
        setOpenAutocomplete1(false);
      };
      const handleOpenOpenAutocomplete2 = (e) => {
        e.stopPropagation()
       setOpenAutocomplete2(true);
      };
      const handleCloseOpenAutocomplete2 = () => {
        setOpenAutocomplete2(false);
        setModalOpenLoading(false)
      };
     
      useEffect(()=> {
        const fetchData = async () => {
         if (navigator.onLine) {
           try {
             const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/rate')
             res.data.data.map((row)=> setRate(row.rate))
             const cashResponse = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/cash') 
             setCash(cashResponse.data.data.filter((row)=> dayjs(row.cashDate).format('DD/MM/YYYY') === dayjs(expenseDate).format('DD/MM/YYYY'))
                                           .map((row)=> row.status)); 
           } catch (error) {
             console.error('Error fetching data:', error);
           }
         } else {
          const offLineRate = await db.rateSchema.toArray();
          offLineRate.map((row)=> setRate(row.rate))
          const offLineCash = await db.cashSchema.toArray();
          setCash(offLineCash.filter((row)=> dayjs(row.cashDate).format('DD/MM/YYYY') === dayjs(expenseDate).format('DD/MM/YYYY'))
                                           .map((row)=> row.status)); 
         }
        }
        fetchData()
      },[expenseDate]);
      const filterCash = cash.map((row)=> row).toString()
      useEffect(()=> {
              const fetchData = async () => {
              if (navigator.onLine) {
                  try {
                    const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/paymentRate')
                    res.data.data.map((row)=> setPayRate(row.paymentRate));
                  } catch (error) {
                    console.error('Error fetching data:', error);
                  }
              } else {
                const offLinePaymentRate = await db.paymentRateSchema.toArray();
                offLinePaymentRate.map((row)=> setPayRate(row.paymentRate));
              }
              }
              fetchData()
            },[])

      useEffect(()=> {
        const newTotal = isNaN(amount/rate)?0:parseFloat(amount/rate);
        const result = Math.round(newTotal*100)/100
        setTotal(result);
      },[amount,rate]);

      const handleAccountChange = (e)=>{
        setAccountName(e.target.value)
        setAccountNameInfo({
          _id: "",
          name: ""
        });
        setTotal(0);
        setAmount(0)
        setEmployeeName([])
      }
      const handleChangeReason = (e)=>{
        setReason(e.target.value)
        setAccountNameInfo({
          _id: "",
          name: ""
        });
      }
      {/** Employee Start */}
    const filterEmployee = employee.filter((row)=> row.status !== 'Suspended' && row.status !== 'Fired' && row.status !== 'Resign' )
      const addItem = () => {
        setEmployeeName([...employeeName, {
              idInfo:v4(),
              idRow:"",
              employee:"",
              description: "",
              amount:0,
              rate:0,
              total:0,
            }]);
      }
      const handleChangeEmployee = (e,i) => {
        const {name, value} = e.target;
        const list = [...employeeName];
        list[i][name] = value;
        list[i]['rate'] = PayRate
        list[i]['total'] =Math.round((parseInt(list[i]['amount'])/list[i]['rate'])*100)/100 || list[i]['total']
        setEmployeeName(list)
      }
      const handleChange = (idInfo,newValue) => {
        const selectedOptions = employee.find((option)=> option === newValue)
        setEmployeeName( employeeName => employeeName.map((row)=>  row.idInfo === idInfo ?{
          ...row,
          idRow: selectedOptions?._id,
          employee: selectedOptions?.employeeName
        }:row));
      }
      const handleShowAutocomplete = (idInfo) => {
        setEmployeeName(employeeName=> employeeName.map((row)=> row.idInfo === idInfo ?{...row, 
          idRow:'', 
          employee: "",
          description:'',
          amount:0,
          rate:0,
          total:0,
         }: row))
      }
      const deleteItem = idInfo =>{
        setEmployeeName (employeeName => employeeName.filter((Item)=> Item.idInfo !==idInfo));
      };
      useEffect (() => {
        let row = document.querySelectorAll('#amountTotalInvoice')
        let sum = 0
        for (let i = 0; i < row.length; i++) {
          if (row[i].id === 'amountTotalInvoice') {
            sum += isNaN(row[i].innerHTML) ? 0 : parseFloat(row[i].innerHTML);
            const result = Math.round(sum*100)/100
            setTotal(result);
          }
        }
        let row1 = document.querySelectorAll('#amountTotalInvoice1')
        let sum1 = 0
        for (let i = 0; i < row1.length; i++) {
          if (row1[i].id === 'amountTotalInvoice1') {
            sum1 += isNaN(row1[i].innerHTML) ? 0 : parseFloat(row1[i].innerHTML);
            const result = Math.round(sum1*100)/100
            setAmount(result);
          }
        }
        })
        {/** Employee End */}
      const handleChangeProject = (newValue) => {
        const selectedOptions = project.find((option)=> option === newValue)
        setAccountNameInfo({
          _id: selectedOptions?._id,
          name: selectedOptions?.projectName
        });
      }
      const handleClearAccountName = ()=> {
        setAccountNameInfo({
          _id: "",
          name: ""
        });
      }
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
      const [modalOpenLoading,setModalOpenLoading]= useState(false);

      const handleOpenModal = () => {
        setModalOpenLoading(true);
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      };
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
const handleCloseAdd = () => {
  setLoadingOpenModal(false);
}
const handleCloseError = () => {
  setErrorOpenModal(false);
}
const handleDecision = (navigate) => {
  //Navigate Based on th Decision
  if (navigate === 'previous') {
    window.history.back();
  } else if (navigate === 'stay') {
    handleClose()
  } 
}

const handleSubmitCategory = async(e)=> {
  e.preventDefault();
  const data = {
    expensesCategory
  }
  try{
    const res = await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-expensesCategory',data); 
    if (res) {
      handleOpenModal();
      setCategories([...categories, res.data.data ])
    }
  }catch(error){
    if (error) {
      alert('An error as Occur');
    }
  }
}
const handleCreateNotification = async (ReferenceInfo,ReferenceInfoNumber,ReferenceInfoCategory) => {
  const data = {
    idInfo: ReferenceInfo,
    person:user.data.userName + ' Created ',
    reason:  'D-'+ReferenceInfoNumber+' For '+ ReferenceInfoCategory + ' to ' + accountName + ' Account ' + ' Which Has a Description: ' + description,
    dateNotification:dateComment
  }
  try {
    await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-notification',data)
  } catch (error) {
    console.log(error)
  }
}
const [saving,setSaving] = useState('')
const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving('true')
    const data = {
      _id:v4(),
      expenseCategory,accountName,
      description,expenseDate,amount,
      employeeName,
      rate:accountName === 'Employee'? PayRate:rate
      ,total,expenseNumber,accountNameInfo,reason,Create,synced: false
  }
    if (navigator.onLine) {
      try {
          const res = await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-expense',data);
          if (res) {
              handleOpen();
              const ReferenceInfo = res.data.data._id
              const ReferenceInfoNumber = res.data.data.expenseNumber
              const ReferenceInfoCategory = res.data.data.expenseCategory.expensesCategory
             // await db.dailyExpenseSchema.add({...res.data.data,_id:res.data.data._id, synced: true })
              handleCreateNotification(ReferenceInfo,ReferenceInfoNumber,ReferenceInfoCategory)
          }
      } catch (error) {
          if (error) {
            setSaving('')
              handleError();
          }
      }
    } else {
      await db.dailyExpenseSchema.add(data)
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
              Add new Expenses    
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
        <form onSubmit={handleSubmit}>
    <Grid container style={{alignItems:'center',padding:'15px'}} spacing={2} component={Paper}>
        <Grid item xs={12}>
            <Autocomplete
          id="expensesCategory"
          options={categories}
          getOptionLabel={(Option)=> Option.expensesCategory}
          onChange={(e,newValue)=>setExpenseCategory(newValue)}
          sx={{ width: '100%', backgroundColor:'white' }}
          PaperComponent={({children, ...other})=>(
                          
            <Box {...other} sx={{backgroundColor:'white', left:'0',marginTop:'10px'}}>
                {children}
                <div>
                    <button onClick={(e)=>handleOpenOpenAutocomplete2(e)} disabled={user.data.role === 'User'} onMouseDown={(e)=>e.preventDefault()} className='btnCustomer7' style={{width:'100%'}}>
                  ADD NEW CATEGORY
                </button>
                </div>
              </Box>
             )}
          renderInput={(params) => <TextField {...params} label="Category" required/>}
            />
        </Grid>
        <Grid item xs={12}>
        <FormControl sx={{ width: '100%' }}>
                  <InputLabel id="accountName">Account Name</InputLabel>
                  <Select
                      required
                     id="accountName"
                     value={accountName} 
                     onChange={(e)=>handleAccountChange(e)}
                     name="accountName"
                     label="Account Name"
                  >
                        <MenuItem value="Office">Office</MenuItem>
                        <MenuItem value="Project">Project</MenuItem>
                        <MenuItem value="Employee">Employee</MenuItem>
                        <MenuItem value="Home">Home</MenuItem>
                  </Select>
                 </FormControl>
        </Grid>
        <Grid item xs={6}> 
               <FormControl sx={{ width: '100%', backgroundColor:'white' }}>
                <InputLabel htmlFor="expenseNumber">Expense Number</InputLabel>
                <OutlinedInput
                type='number'
                id='expenseNumber'
                name='expenseNumber' 
                label='Expense Number'
                value={expenseNumber}
                onChange={(e)=>setExpenseNumber(e.target.value)}
                startAdornment={<InputAdornment position="start">D-00</InputAdornment>}
                />
               </FormControl>
               </Grid>
        <Grid item xs={6}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                     required
                    name='expenseDate' 
                    label='Date'
                    value={dayjs(expenseDate)}
                    onChange={(date)=> setExpenseDate(date)}
                    sx={{ width: '100%', backgroundColor:'white' }} 
                    format='DD/MM/YYYY'
               />
                  </DemoContainer>
        </LocalizationProvider>
        </Grid>

      {
        accountName === 'Employee'?
        <>
             <Grid item xs={12}>
        <FormControl sx={{ width: '100%' }}>
                  <InputLabel id="reason">Reason</InputLabel>
                  <Select
                      required
                     id="reason"
                     value={reason} 
                     onChange={(e)=>handleChangeReason(e)}
                     name="reason"
                     label="Reason"
                  >
                        <MenuItem value="Office">Office</MenuItem>
                        <MenuItem value="Project">Project</MenuItem>
                        <MenuItem value="None">None</MenuItem>
                  </Select>
                 </FormControl>
        </Grid>
         <Grid item xs={12}>
            <TextField
            required
            name='description'
            id='description'
            label='Expense Description'
            value={description}
            multiline
            maxRows={5}
            onChange={(e)=>setDescription(e.target.value)}
            sx={{ width: '100%', backgroundColor:'white' }} 
            />
        </Grid>
        {
          reason ==="Project"?
          <Grid item xs={12}>
  {
          accountNameInfo.name !== "" ? 
          <div style={{display:'flex', gap:'75px'}}>
             <TextField
          label='Project'
          value={accountNameInfo.name}
          sx={{ width: '100%', backgroundColor:'white' }} 
          />
               <BlackTooltip title="Clear" placement='right'>
                <IconButton onClick={handleClearAccountName} style={{ position:'relative', float:'right'}}> 
                              <RemoveCircleOutline style={{color:'#202a5a'}}/>
                </IconButton>
                </BlackTooltip>
          </div>
          :
          <div>
            {
              user.data.role === 'CEO'?
              (<Autocomplete
              options={project}
              getOptionLabel={(option) => option.projectName.toUpperCase()}
              renderOption={(props,option)=> (<Box {...props}> {option.customerName.customerName} | {option.projectName} | {option.description}</Box>)}
              onChange={(e,newValue)=> handleChangeProject(newValue? newValue :'')}
              inputValue={inputValueProject}
              onInputChange={(event, newInputValue) => {
               setInputValueProject(newInputValue);
              }}
              filterOptions={(options,{inputValue})=>{
                return options.filter(
                  (option)=>
                  option.customerName.customerName.toLowerCase().includes(inputValue.toLowerCase()) ||
                  option.projectName.toLowerCase().includes(inputValue.toLowerCase()) ||
                  option.description.toLowerCase().includes(inputValue.toLowerCase()) 
                )
               }}
               renderInput={(params) => <TextField {...params} label="Project Name"/>}
              sx={{  width: '100%', backgroundColor:'white' }} 
            />)
              : ( <Autocomplete
              options={project2}
              getOptionLabel={(option) => option.projectName.toUpperCase()}
              renderOption={(props,option)=> (<Box {...props}> {option.customerName.customerName} | {option.projectName} | {option.description}</Box>)}
              renderInput={(params) => <TextField {...params} label="Project Name"/>}
              onChange={(e,newValue)=> handleChangeProject(newValue? newValue :'')}
              inputValue={inputValueProject}
              onInputChange={(event, newInputValue) => {
               setInputValueProject(newInputValue);
              }}
              filterOptions={(options,{inputValue})=>{
                return options.filter(
                  (option)=>
                  option.customerName.customerName.toLowerCase().includes(inputValue.toLowerCase()) ||
                  option.projectName.toLowerCase().includes(inputValue.toLowerCase()) ||
                  option.description.toLowerCase().includes(inputValue.toLowerCase()) 
                )
               }}
              sx={{  width: '100%', backgroundColor:'white' }} 
            />)
            }
          </div>
            
        }
          </Grid>:null
        }
        <Grid item xs={12}>
        <div>
          <Grid container>
            <Grid item xs={11}>
            <table className='tableInfo10'>
            <thead>
              <tr>
              <th>#</th>
              <th>Employee Name</th>
              <th>Amount FC</th>
              <th>Rate</th>
              <th>Total</th> 
              <th>Action</th> 
              </tr>
            </thead>
            <tbody>
              {
                employeeName?
                employeeName.map((row,i)=> (

                  <tr key={row.idInfo}>
                    <td><DragIndicatorRounded/></td>
                    <td style={{height:'100px'}} >
        {
          row.employee !== '' ? (
            (  
              <div style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
              <div >
              <Typography sx={{fontSize:'20px',fontWeight:'bold'}}>{row.employee?row.employee:''}</Typography>
              <TextField 
                name='description' id='description' 
                value={row.description}
                multiline
                rows={3}
                placeholder='Description'
                onChange={(e) => handleChangeEmployee(e,i)}
                size="small"
                disabled={user.data.role === 'User'}
                sx={{ width: '440px', backgroundColor:'white', fontSize:12}}       
      />
              </div>
              <div>
              <BlackTooltip title="Clear" placement='top'>
                
        <IconButton onClick={()=>handleShowAutocomplete(row.idInfo)} style={{ position:'relative', float:'right'}}> 
                      <RemoveCircleOutline style={{color:'#202a5a'}}/>
                   
        </IconButton>
        </BlackTooltip>
              </div>
      </div>)
          ):(
            <div style={{display:'flex', alignItems:'center'}}>
                          <Autocomplete
      disableClearable
                         options={filterEmployee}
                         getOptionLabel={(option) => option.employeeName.toUpperCase()}
                         renderOption={(props,option)=> (<Box {...props} sx={{backgroundColor:'#f2f2f2'}}>{option.employeeName.toUpperCase()}</Box>)}
                         renderInput={(params) =>
                         <TextField      multiline
                         rows={4} {...params} required 
                         />}
                         onChange={(e,newValue)=>handleChange(row.idInfo, newValue)}
                         size="small"
                         sx={{ width: '470px', backgroundColor:'white' }} 
                       />
            </div>
          )
        }
          </td>
          <td>
          <TextField 
                       name='amount' id='amount'
                       value={row.amount}
                       onChange={(e) => handleChangeEmployee(e,i)}
                       size="small"
                       sx={{ width: '100px', backgroundColor:'white' }}       
                   />
          </td>
          <td>
          <TextField 
           disabled
                       name='rate' id='rate' 
                       value={row.rate}
                       onChange={(e) => handleChangeEmployee(e,i)}
                       size="small"
                       sx={{ width: '100px', backgroundColor:'white' }}       
                   />
          </td>
          <td>
          <TextField 
          disabled
                       name='total' id='total' 
                       value={row.total}
                       onChange={(e) => handleChangeEmployee(e,i)}
                       size="small"
                       sx={{ width: '100px', backgroundColor:'white' }}       
                   />
          </td>
          <td hidden id='amountTotalInvoice1'>{row.amount}</td>
          <td hidden id='amountTotalInvoice'>{row.total}</td>
          <td>
          <LightTooltip title="Delete" sx={{}}>
        <IconButton onClick={()=> deleteItem(row.idInfo)} >
        <DeleteIcon  style={{cursor:'pointer',color:'red'}}/> 
        </IconButton>
      </LightTooltip>
          </td>
                  </tr>
                ))
                :''
              }
              <tr>
                <td colSpan={2} style={{textAlign:'center'}}>
                  Total
                </td>
                <td>
                <TextField 
                id='amount'
                name='amount' 
                type='number'
                label='Total FC'
                value={amount}
                sx={{ width: '200px', backgroundColor:'white' }}       
                />
                </td>
                <td style={{textAlign:'center'}}>
                  -
                </td>
                <td>
                <TextField 
                id='total'
                name='total' 
                type='number'
                label='Total $'
                value={total}
                sx={{ width: '200px', backgroundColor:'white' }}       
                />
                </td>
              </tr>
            </tbody>
          </table>
            </Grid>
            <Grid item xs={1}>
              <div style={{position:'fixed',zIndex:'1'}}>
      <BlackTooltip title="Add" placement="bottom">
            <IconButton onClick={addItem} >
            <Add className='btn1' style={{fontSize:'40px'}}/>  
            </IconButton>
          </BlackTooltip>
              </div>

            </Grid>
          </Grid>
            
          </div>
          
        </Grid>
        </>
        :(
          <>
          <Grid item xs={12}>
                    {
          accountNameInfo.name !== "" ? 
          <div style={{display:'flex', gap:'75px'}}>
             <TextField
          label='Project'
          value={accountNameInfo.name}
          sx={{ width: '100%', backgroundColor:'white' }} 
          />
               <BlackTooltip title="Clear" placement='right'>
                <IconButton onClick={handleClearAccountName} style={{ position:'relative', float:'right'}}> 
                              <RemoveCircleOutline style={{color:'#202a5a'}}/>
                </IconButton>
                </BlackTooltip>    
          </div>
          :
          <div>
          {
            user.data.role === 'CEO'?
            (<Autocomplete
            options={project}
            disabled ={accountName !== 'Project'}
            getOptionLabel={(option) => option.projectName.toUpperCase()}
            renderOption={(props,option)=> (<Box {...props}> {option.customerName.customerName} | {option.projectName} | {option.description}</Box>)}
            onChange={(e,newValue)=> handleChangeProject(newValue? newValue :'')}
            inputValue={inputValueProject}
            onInputChange={(event, newInputValue) => {
             setInputValueProject(newInputValue);
            }}
            filterOptions={(options,{inputValue})=>{
              return options.filter(
                (option)=>
                option.customerName.customerName.toLowerCase().includes(inputValue.toLowerCase()) ||
                option.projectName.toLowerCase().includes(inputValue.toLowerCase()) ||
                option.description.toLowerCase().includes(inputValue.toLowerCase()) 
              )
             }}
             renderInput={(params) => <TextField {...params} label="Project Name"/>}
            sx={{  width: '100%', backgroundColor:'white' }} 
          />)
            : ( <Autocomplete
            options={project2}
            disabled ={accountName !== 'Project'}
            getOptionLabel={(option) => option.projectName.toUpperCase()}
            renderOption={(props,option)=> (<Box {...props}> {option.customerName.customerName} | {option.projectName} | {option.description}</Box>)}
            renderInput={(params) => <TextField {...params} label="Project Name"/>}
            onChange={(e,newValue)=> handleChangeProject(newValue? newValue :'')}
            inputValue={inputValueProject}
            onInputChange={(event, newInputValue) => {
             setInputValueProject(newInputValue);
            }}
            filterOptions={(options,{inputValue})=>{
              return options.filter(
                (option)=>
                option.customerName.customerName.toLowerCase().includes(inputValue.toLowerCase()) ||
                option.projectName.toLowerCase().includes(inputValue.toLowerCase()) ||
                option.description.toLowerCase().includes(inputValue.toLowerCase()) 
              )
             }}
            sx={{  width: '100%', backgroundColor:'white' }} 
          />)
          }
        </div>
            
        }
          </Grid>
          <Grid item xs={12}>
            <TextField
            required
            name='description'
            id='description'
            label='Expense Description'
            value={description}
            multiline
            maxRows={5}
            onChange={(e)=>setDescription(e.target.value)}
            sx={{ width: '100%', backgroundColor:'white' }} 
            />
        </Grid>
          <Grid item xs={4}>
        <FormControl     sx={{ width: '100%', backgroundColor:'white' }} >
                <InputLabel htmlFor='amount'>Amount</InputLabel>
                <OutlinedInput 
                required
                id='amount'
                name='amount' 
                type='number'
                label='Amount'
                onChange={(e)=>setAmount(e.target.value)}
                startAdornment={<InputAdornment position='start'>Fc</InputAdornment>}
                />
              </FormControl>
        </Grid>
        <Grid item xs={4}>
        <FormControl     sx={{ width: '100%', backgroundColor:'white' }} >
                <InputLabel htmlFor='rate'>Rate</InputLabel>
                <OutlinedInput 
                id='rate'
                name='rate' 
                type='number'
                label='Rate'
                value={rate}
                startAdornment={<InputAdornment position='start'><CurrencyExchange/></InputAdornment>}
                />
              </FormControl>
        </Grid>
        <Grid item xs={4}>
        <FormControl     sx={{ width: '100%', backgroundColor:'white' }} >
                <InputLabel htmlFor='total'>Total</InputLabel>
                <OutlinedInput 
                id='total'
                name='total' 
                type='number'
                label='Total'
                value={total}
                onChange={(e)=>setTotal(e.target.value)}
                startAdornment={<InputAdornment position='start'><MonetizationOn/></InputAdornment>}
                />
              </FormControl>
        </Grid>
          </>
        )
      }
      {
        filterCash === 'Close' ? null:
        <Grid item xs={12}>
             {
        saving !== 'true' ? <button type='submit' className='btnCustomer6' style={{width:'100%'}}>Save</button> : <p className='btnCustomer6' style={{width:'100%', textAlign:'center'}}>Saving...</p>
      }
        </Grid>
      }
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
           <Typography>Do you want to stop creating daily expenses ? </Typography>
           <p><span className="txt2" style={{color:'red'}}>Note :</span> <span className="txt2"> If you stop creating without saving, all your changes will be lost</span></p>
          </Grid> 
          <br/>
          <Grid item xs={6}>
          <button type='submit' onClick={() => navigate('/DailyExpenses')} className='btnCustomer' style={{width: '100%'}}>Yes</button>
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
                  <div style={{display:'flex', gap:'20px',justifyContent:'center'}}>
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
                  <p className="txt2">Please Check the Previous Invoice Number And the New Invoice Number Can Not be The Same</p>
                  <p><span className='txt1' style={{color:'red'}}>Note:</span><span className="txt2">To Add Number Click On the Arrow Up Button</span></p>
                  <button className='btnCustomer' onClick={handleCloseError}>
                    Try Again
                  </button>
                </div>
                )}
          </Box>
          </Modal>
          {/*<Modal
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
            <ProjectFormView2 onCreateOption={handleCreateProject} onClose={handleCloseOpenAutocomplete1}/>  
        </div>
      </Box>
                </Modal>*/}
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
          Create Expenses Category
          </Typography>
          <form onSubmit={handleSubmitCategory}>
        <Grid container style={{alignItems:'center',padding:'15px'}} spacing={2}>
          <Grid item xs={12}>
          <TextField 
                  id='expensesCategory'
                  name='expensesCategory' 
                  value={expensesCategory}
                  label='Expenses Category'
                  onChange={(e)=> setExpensesCategory(e.target.value)}
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
    </div>
  )
}

export default DailyExpenseForm
