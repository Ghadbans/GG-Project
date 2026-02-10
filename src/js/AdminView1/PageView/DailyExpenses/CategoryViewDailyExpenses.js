import React, { useEffect,useState } from 'react';
import SidebarDash from '../../../component/SidebarDash';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import {MenuItem,Grid, IconButton, Table, TableBody, TableCell,TableRow, TableHead,Paper,TableContainer, TextField, FormControl, InputLabel, Select, Typography, Autocomplete,styled, Modal, Backdrop, Fade, Box,OutlinedInput,InputAdornment,Checkbox, Tabs, Tab, Card, CardContent,Divider } from '@mui/material';
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
import { useNavigate,NavLink, Link } from 'react-router-dom';
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
import { Close } from '@mui/icons-material';
import CurrencyExchange from '@mui/icons-material/CurrencyExchange';
import MonetizationOn from '@mui/icons-material/MonetizationOn';
import { DataGrid } from '@mui/x-data-grid';
import CategoryChart from './CategoryChart';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import EditIcon from '@mui/icons-material/Edit';
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
function CategoryViewDailyExpenses() {
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
      const [expenses,setExpenses] = useState([]);
      const [expensesId,setExpensesID] = useState('');
      useEffect(()=>{
        const result =localStorage.getItem('CategoryTabId');
        if (result) {
          setExpensesID(result)
        }
      })
      const [loadingData, setLoadingData] = useState(true);
      useEffect(()=>{
        const fetchCategory = async () => {
       if (navigator.onLine) {
           try {
            const [expenseResponse,categoryResponse] = await Promise.all([
              axios.get('https://gg-project-productionn.up.railway.app/endpoint/expense'),
              axios.get('https://gg-project-productionn.up.railway.app/endpoint/expensesCategory')
            ])
             setExpenses(expenseResponse.data.data.reverse());
             setCategories(categoryResponse.data.data);
             setLoadingData(false)
           } catch (error) {
             console.error('Error fetching data:', error);
             setLoadingData(false)
           }
       } else {
        const offLineDailyExpenses = await db.dailyExpenseSchema.toArray();
        const offLineDailyExpensesCategory = await db.dailyExpensesCategorySchema.toArray();
        setExpenses(offLineDailyExpenses);
        setCategories(offLineDailyExpensesCategory);
        setLoadingData(false)
       }
        }
        fetchCategory()
      },[]);
      const expensesFiltered = expenses.filter((row)=> row.expenseCategory._id === expensesId)
      const newCategory = categories.filter((row)=> row._id === expensesId)
                                    .map((row)=> (
                                      row.expensesCategory    
                                      ))
      const [totalAmount,setTotalAmount] = useState(0)
     useEffect(()=>{
        const totalAmount1 = expensesFiltered?expensesFiltered.reduce((sum,row)=> sum + parseFloat(row.total),0):0
        const result = Math.round(totalAmount1*100)/100
        setTotalAmount(result) 
     })
     const [show3, setShow3] = useState(1);
const handleShow3 = (e) =>{
    setShow3(e);
}

const [value,setValue] = useState(()=>{
  const result =localStorage.getItem('CategoryTab')
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
  setExpensesID(id)
  localStorage.setItem('CategoryTab',newIndex)
  localStorage.setItem('CategoryTabId',newIndexId)
}
const handleChangeIdIndex2 = (index, id) => {
  const newIndex = index;
  const newIndexId = id;
  const result = categories.findIndex((row)=> row._id === id)
  setValue(result);
  setValue2(newIndex);
  setExpensesID(id)
  localStorage.setItem('CategoryTab',result)
  localStorage.setItem('CategoryTabId',newIndexId)
}
const [search2,setSearch2] =useState('');
const handleSearch2 = (e) => {
  const value = e.target.value
  setSearch2(value)
}
const newArray2 = search2 !== ''?categories.filter((Item)=>
Item.expensesCategory && Item.expensesCategory.toLowerCase().includes(search2.toLowerCase())
    ):categories

const [search,setSearch] =useState('')
const newArray = search !== ''?expensesFiltered.filter((row)=>
row.accountName.toLowerCase().includes(search.toLowerCase())||
row.accountNameInfo && row.accountNameInfo.name.toLowerCase().includes(search.toLowerCase()) ||
dayjs(row.expenseDate).format('DD/MM/YYYY').includes(search)||
(row.employeeName && row.employeeName.some((Item)=>
Item.employee.toLowerCase().includes(search.toLowerCase())
))
 ):expensesFiltered
const [newTotal,setNewTotal] = useState(0)
 useEffect(()=> {
 let total = 0 
 newArray.forEach((item)=>{
  if (item.total) {
    total += parseFloat(item.total)
  }
 })
 setNewTotal(total)
 },[newArray])

 const [value3, setValue3] = React.useState('1');
 useEffect(()=>{
  const result =localStorage.getItem('TabCategoryValue')
  if (result) {
    setValue3(result)
  }
 })
 const handleChange3 = (event, newValue) => {
  const changeValue = newValue
   setValue3(changeValue);
   localStorage.setItem('TabCategoryValue',changeValue)
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
              Expenses Category Information
            </Typography>
            <IconButton onClick={() => navigate('/DailyExpenses')}>
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
   <Container maxWidth="none" sx={{ mt: 2}} >
    {
      loadingData?<div>
        <div style={{position:'relative', top:'120px'}}>
          <Loader/>
        </div>
      </div>:(
    <div>
        <Grid container spacing={2}>
            <Grid item xs={3}>
            { show3 ===1  ?   (
            <div className='itemInfoContainer'>
           <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div style={{display:'flex', padding:'5px', alignItems:'center'}}>
               <Checkbox/>
              <Typography variant='h6'>All Category</Typography>
            </div>
       <div style={{padding:'20px'}}>
        <p className='btnCustomer1' onClick={() => handleShow3(2)}>Filter</p>
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
                  {categories?.map((row,index) => (
                  <Tab
                  key={index}
                  label={row.expensesCategory}
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
                           label={row.expensesCategory}
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
            <div style={{width:'100%', background:'white'}}>

              <div >

                <div className='itemInfoContainer2Head'>
                    <div>
                    <Typography variant='h5'>{newCategory?newCategory:'Choose Category'}</Typography>
                    </div>
                </div>
                <br/>
                <Box sx={{ width: '100%'}}>
                  <TabContext   value={value3}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}> 
                    <TabList 
                    onChange={handleChange3}
                    aria-label="lab API tabs example"
                    sx={{
                      '& .MuiTabs-indicator':{
                        backgroundColor:'white',
                        height:'0px'
                      }
                    }}
                    >
                    <Tab 
                label="Overview" 
                value="1"
                sx={{
                  '&.Mui-selected':{
                    color:'white',
                    backgroundColor:'gray',
                    borderRadius:'10px'
                  }, '&:hover': {
                    color:'gray',
                    bgcolor:'white',
                    border:'1px solid gray',
                    borderRadius:'10px'
                  }
                }}
                 />
              <Tab label="E-Table" value="2" 
              sx={{
               '&.Mui-selected':{
                 color:'white',
                 backgroundColor:'gray',
                 borderRadius:'10px'
               }, 
               '&:hover': {
                 color:'gray',
                 bgcolor:'white',
                 border:'1px solid gray',
                 borderRadius:'10px'
               }
             }}
             />
                    </TabList>
                    </Box>
                    <TabPanel value="1" sx={{height:'500px', overflow:'hidden',overflowY:'scroll'}}>
            <div>
                {expensesId?(
                <div>
                    <div style={{ padding:'20px'}}>
                   <Card sx={{backgroundColor:'#30368a',color:'white'}}>
                   <CardContent sx={{display:"flex", justifyContent:'space-around'}}>
                    <h2>{newCategory}</h2>
                    <h2>Total</h2>
                    <h2><span>$</span> {totalAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</h2>
                    </CardContent>
                   </Card>
                   <br/>
                    </div>
                    <Card>
                      <CardContent>
                           <CategoryChart onChangeId={expensesId}/>
                      </CardContent>
                    </Card>
                    </div>
                    ):''}
                    </div>
            </TabPanel>
            <TabPanel value="2" sx={{height:'500px', overflow:'hidden',overflowY:'scroll'}}>
            <div style={{position:'relative',top:'5px'}}>
                        {expensesId?(
                          <Box >
                      <Typography sx={{padding:'20px', fontSize:'20px'}}>Total : <span>$ {newTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></Typography>
              <section style={{position:'relative', float:'right', padding:'10px'}}>
                <TextField
                label='search'
                id='search'
                value={search}
                variant="standard"
                onChange={(e)=>setSearch(e.target.value)}
                />
              </section>
            <Table aria-label="collapsible table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Account</TableCell>
            <TableCell>Account Name</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            newArray.map((row)=>(
              <TableRow key={row._id}>
                <TableCell>
                  D-0{row.expenseNumber}
                </TableCell>
                <TableCell>
                  {dayjs(row.expenseDate).format('DD/MM/YYYY')}
                </TableCell>
                <TableCell>
                  {row.accountName}
                </TableCell>
                <TableCell>
                  {
                    row.accountName === 'Office' && (
                     row.description
                    )
                  }
                  {
                   row.accountName === 'Project' && (
                    row.accountNameInfo.name
                   )
                  }
                  {
                    row.accountName === 'Employee' && (
                      <section>
                        {
                        row.employeeName.map((Item,i)=>(
                          <p key ={i} > {Item.employee} / FC {Item.amount} / $ {Item.total}
                              </p>
                         ))
                      } 
                      </section>
                     
                    )
                  }
                </TableCell>
                <TableCell>
                  {row.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}
                </TableCell>
                <TableCell>
                <EditTooltip title="Edit">
                                      <span> 
                                  <IconButton>
                                  <NavLink to={`/DailyExpenseUpdate/${row._id}`} className='LinkName'>
                                  <EditIcon style={{color:'gray'}}/>
                                  </NavLink>
                                  </IconButton>
                                  </span>
                                </EditTooltip>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
                      </Box>
                      ):''}
                    </div>
            </TabPanel>
                  </TabContext>  
               </Box>
</div>
  </div>
                    
            </div>   
            </Grid>
        </Grid>
     </div>
  )
}
</Container>
  </Box>
  </Box>
    </div>
  )
}

export default CategoryViewDailyExpenses
