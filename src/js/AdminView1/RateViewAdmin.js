import React, { useState,useEffect } from 'react';
import './view.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Table,Modal, IconButton,styled, TableBody,TableCell,TableHead,TableRow,Checkbox, TableContainer, Paper, Typography, Box, Autocomplete,TextField,Backdrop,Grid,Card,CardContent }  from '@mui/material';
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
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { logOut, selectCurrentUser, setUser } from '../features/auth/authSlice';
import { NavLink, useNavigate } from 'react-router-dom';
import Logout from '@mui/icons-material/Logout';
import SidebarDash from '../component/SidebarDash';
import SidebarDashE2 from '../component/SidebarDashE2';
import { Add, Close, DragIndicatorRounded, MailOutline  } from '@mui/icons-material';
import Loader from '../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import dayjs from 'dayjs';
import MessageAdminView from './MessageAdminView';
import NotificationVIewInfo from './NotificationVIewInfo';

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

function RateViewAdmin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
           dispatch(setUser({userName: Name, role: Role, id:res.data.data._id}));
         } catch (error) {
           console.error('Error fetching data:', error);
         }
       } else {
        const resLocalInfo = await db.employeeUserSchema.get({_id:storesUserId})
        const Name = resLocalInfo.employeeName;
        const Role = resLocalInfo.role;
        dispatch(setUser({userName: Name, role: Role, id:resLocalInfo._id}));
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
      const [rate, setRate] = useState([]);
      const [rateReturned, setRateReturned] = useState([]);
      const [PayRate, setPayRate] = useState([]);
      const [category,setCategory] = useState([]);
      const [cash,setCash] = useState([]);
      useEffect(()=> {
        const fetchData = async () => {
          try {
            const res = await axios.get('https://gg-project-production.up.railway.app/endpoint/rate')
            setRate(res.data.data);
            const resReturn = await axios.get('https://gg-project-production.up.railway.app/endpoint/rateReturn')
            setRateReturned(resReturn.data.data);
            localStorage.setItem('Rate', JSON.stringify(res.data.data))
            const resRatePayment = await axios.get('https://gg-project-production.up.railway.app/endpoint/paymentRate')
            setPayRate(resRatePayment.data.data);
            localStorage.setItem('PaymentRate', JSON.stringify(resRatePayment.data.data))
            const resCategory = await axios.get('https://gg-project-production.up.railway.app/endpoint/expensesCategory')
            const formatDate = resCategory.data.data.map((item,i)=>({
              ...item,
              id: item._id,
              number: i + 1
            })) 
            localStorage.setItem('Category', JSON.stringify(resCategory.data.data))
            setCategory(formatDate);
            const resCash = await axios.get('https://gg-project-production.up.railway.app/endpoint/cash')
            const formatDate1 = resCash.data.data.map((item)=>({
              ...item,
              id: item._id,
              dataField: dayjs(item.cashDate).format('DD/MM/YYYY')
            })) 
            localStorage.setItem('Cash', JSON.stringify(resCash.data.data))
            setCash(formatDate1.reverse())
          } catch (error) {
            console.error('Error fetching data:', error);
            const storedRate = JSON.parse(localStorage.getItem('Rate')) || []
            const storedPRate = JSON.parse(localStorage.getItem('PaymentRate')) || []
            const storedCategory = JSON.parse(localStorage.getItem('Category')) || []
            const storedCash = JSON.parse(localStorage.getItem('Cash')) || []
            if (storedRate) {
              setRate(storedRate)
            }
            if (storedPRate) {
              setPayRate(storedPRate)
            }
            if (Array.isArray(storedCategory)) {
              const formatDate = storedCategory.map((item,i)=>({
                ...item,
                id: item._id,
                number: i + 1
              })) 
              setCategory(formatDate.reverse());
            }else{
              setCategory([])
            }
            if (Array.isArray(storedCash)) {
              const formatDate = storedCash.map((item)=>({
                ...item,
                id: item._id,
                dataField: dayjs(item.cashDate).format('DD/MM/YYYY')
              })) 
              setCash(formatDate.reverse());
            }else{
              setCash([])
            }
          }
        }
        fetchData()
      },[]);
      const [selectedRows,setSelectedRows] = useState([]);         
const [filterModel, setFilterModel] = React.useState({
  items: [],
  quickFilterExcludeHiddenColumns: true,
  quickFilterValues: [],
});
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({});
  const handelHiddenColumn = (newHidden) => {
    setColumnVisibilityModel(newHidden)
    localStorage.setItem('HiddenColumnsDailyExpensesCategory',JSON.stringify(newHidden))
  }
  const handleFilter = (newModel) => {
    setFilterModel(newModel)
   localStorage.setItem('QuickFilterDailyExpensesCategoryTst',JSON.stringify(newModel))
  }
   useEffect(()=>{
    const storedQuick = JSON.parse(localStorage.getItem('QuickFilterDailyExpensesCategoryTst'))
    if (storedQuick) {
      setFilterModel(storedQuick)
    }
    const storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsDailyExpensesCategory'))
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns)
    }

   },[])  
const [open1, setOpen1] = useState(false);
const [updateId, setUpdateId]= useState(null);
const [open3, setOpen3] = useState(false);
const [updateId1, setUpdateId1]= useState(null);
const [open2, setOpen2] = useState(false);
const [updateIdRate, setUpdateIdRate]= useState(null);
const [updateRate,setUpdateRate] = useState("");
const [updateRateReturn,setUpdateRateReturn] = useState("");
const [updatePaymentRate,setUpdatePaymentRate] = useState("");

const handleOpenUpdate = (id) => {
  setOpen1(true);
  setUpdateId(id);
};
const handleCloseUpdate = () => {
  setOpen1(false);
  setUpdateId(null);
};
const handleOpenUpdateReturn = (id) => {
  setOpen3(true);
  setUpdateId1(id);
};
const handleCloseUpdateReturn = () => {
  setOpen3(false);
  setUpdateId1(null);
};
const handleOpenUpdatePayment = (id) => {
    setOpen2(true);
    setUpdateIdRate(id);
};
const handleCloseUpdatePayment = () => {
    setOpen2(false);
  setUpdateIdRate(null);
};
const [loading,setLoading]= useState(false);
const [loadingOpenModal,setLoadingOpenModal] = useState(false);
{/** Loading Update View Start */}
const handleOpenLoading = () => {
  setLoadingOpenModal(true);
  setLoading(true);
  handleCloseUpdate();
  handleCloseUpdatePayment();
  setTimeout(()=> {
    setLoading(false);
  }, 500)
}
const handleCloseLoading = () => {
    window.location.reload();
}
{/** Loading Update View End */}

  /** Start of Getting All Rate */
useEffect(()=>{
  const fetchRateId = async ()=> {
    if (updateId !== null) {
    try {
      const res = await axios.get(`https://gg-project-production.up.railway.app/endpoint/get-rate/${updateId}`)
      setUpdateRate(res.data.data.rate);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    }
  }
  fetchRateId()
},[updateId])
useEffect(()=>{
  const fetchRateId = async ()=> {
    if (updateId1 !== null) {
    try {
      const res = await axios.get(`https://gg-project-production.up.railway.app/endpoint/get-rateReturn/${updateId1}`)
      setUpdateRateReturn(res.data.data.rateR);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    }
  }
  fetchRateId()
},[updateId1])
useEffect (() => {
  const fetchPayId = async ()=> {
    if (updateIdRate !== null) {
    try {
      const res = await axios.get(`https://gg-project-production.up.railway.app/endpoint/get-paymentRate/${updateIdRate}`)
      setUpdatePaymentRate(res.data.data.paymentRate);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    }
  }
  fetchPayId()
  },[updateIdRate]);
  /** End of Getting All Rate */
  /** Start of Updating All Rate */
const handleSubmitUpdateStatus = async (e) => {
  e.preventDefault();
  const data = {
    rate : updateRate
  };
  try {
    const res = await axios.put(`https://gg-project-production.up.railway.app/endpoint/update-rate/${updateId}`,data)
    if (res) {
      handleOpenLoading();
    }
  } catch (error) {
    console.error('Error making POST request:', error);
  }
}
const handleSubmitUpdateStatusReturn = async (e) => {
  e.preventDefault();
  const data = {
    rateR : updateRateReturn
  };
  try {
    const res = await axios.put(`https://gg-project-production.up.railway.app/endpoint/update-rateReturn/${updateId1}`,data)
    if (res) {
      handleOpenLoading();
    }
  } catch (error) {
    console.error('Error making POST request:', error);
  }
}
const handleSubmitUpdateStatusRate = async (e) => {
  e.preventDefault();
  const data = {
    paymentRate : updatePaymentRate
  };
  try {
    const res = await  axios.put(`https://gg-project-production.up.railway.app/endpoint/update-paymentRate/${updateIdRate}`,data)
    if (res) {
      handleOpenLoading();
    }
  } catch (error) {
    console.error('Error making POST request:', error);
  }
}
  /** End of Updating All Rate */
const columns =  [
  {field: 'number', headerName: '#', width:150},
  {field: 'expensesCategory', headerName: 'Category', width:250}
]
const columns1 =  [
  {field: 'cashNumber', headerName: '#', width:80},
  {field: 'dataField', headerName: 'Date', width:100},
  {field: 'status', headerName: 'Daily Status', width:80},
  {field: 'totalExpensesFC', headerName: 'A-ExpensesFC', width:150,renderCell: (params)=> `FC${params.row.totalExpensesFC!==undefined?params.row.totalExpensesFC?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,','):0}` },
  {field: 'totalExpensesUSD', headerName: 'A-Expenses$', width:150,renderCell: (params)=> `$${params.row.totalExpensesUSD!==undefined?params.row.totalExpensesUSD?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,','):0}` },
  {field: 'totalPayrollUSD', headerName: 'A-PayRoll', width:150,renderCell: (params)=> `$${params.row.totalPayrollUSD!==undefined?params.row.totalPayrollUSD?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,','):0}` },
  {field: 'totalItemPurchaseUSD', headerName: 'A-ItemPurchase', width:150,renderCell: (params)=> `$${params.row.totalItemPurchaseUSD!==undefined?params.row.totalItemPurchaseUSD?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,','):0}` },
  {field: 'returnAmountFC', headerName: 'A-ReturnFC', width:150,renderCell: (params)=> `FC${params.row.returnAmountFC!==undefined?params.row.returnAmountFC?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,','):0}` },
  {field: 'returnAmountUSD', headerName: 'A-Return$', width:150,renderCell: (params)=> `$${params.row.returnAmountUSD!==undefined?params.row.returnAmountUSD?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,','):0}` },
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
                Rate
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
        <Grid container style={{textAlign:'center',padding:'10px'}} spacing={1}>
            <Grid item xs={6}>
                <Card sx={{width:'100%', marginBottom:'20px'}}>
                    <CardContent>
            <table style={{width:'100%', fontSize:'20px',marginTop:'16px',marginBottom:'16px'}}>
                <thead>
                    <tr>
                        <th colSpan={3} style={{textAlign:'center'}}>Today's Rate</th>
                    </tr>
                </thead>
                <tbody>
                {rate.map((row)=>
            <tr key={row._id}>
                          <td><span>$</span> 1</td>
                          <td ><span>FC</span> {row.rate}</td>
                          <td><EditTooltip title="Edit">
                                        <span> 
                                    <IconButton onClick={()=>handleOpenUpdate(row._id)}>  <EditIcon style={{color:'gray'}}/>
                                    </IconButton>
                                    </span>
                                  </EditTooltip>
                        </td>
            </tr> 
            )}
                </tbody>
            </table>
                    </CardContent>
                </Card>
                <Card sx={{width:'100%', marginBottom:'20px'}}>
                    <CardContent>
            <table style={{width:'100%', fontSize:'20px',marginTop:'16px',marginBottom:'16px'}}>
                <thead>
                    <tr>
                        <th colSpan={3} style={{textAlign:'center'}}>POS Rate</th>
                    </tr>
                </thead>
                <tbody>
                {rateReturned?.map((row)=>
            <tr key={row._id}>
                          <td><span>$</span> 1</td>
                          <td ><span>FC</span> {row.rateR}</td>
                          <td><EditTooltip title="Edit">
                                        <span> 
                                    <IconButton onClick={()=>handleOpenUpdateReturn(row._id)}>  <EditIcon style={{color:'gray'}}/>
                                    </IconButton>
                                    </span>
                                  </EditTooltip>
                        </td>
            </tr> 
            )}
                </tbody>
            </table>
                    </CardContent>
                </Card>
                <Card sx={{width:'100%'}}>
                    <CardContent>
            <table style={{width:'100%', fontSize:'20px',marginTop:'16px',marginBottom:'16px'}}>
                <thead>
                    <tr>
                        <th colSpan={3} style={{textAlign:'center'}}>Paying Rate</th>
                    </tr>
                </thead>
                <tbody>
                {PayRate.map((row)=>
            <tr key={row._id}>
                          <td><span>$</span> 1</td>
                          <td ><span>FC</span> {row.paymentRate}</td>
                          <td><EditTooltip title="Edit">
                                        <span> 
                                    <IconButton onClick={()=>handleOpenUpdatePayment(row._id)}>  <EditIcon style={{color:'gray'}}/>
                                    </IconButton>
                                    </span>
                                  </EditTooltip>
                        </td>
            </tr> 
            )}
                </tbody>
            </table>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Box component={Paper} sx={{width:'100%',height:'100%',padding:'20px'}}>
                    <Grid container >
                        <Grid item xs={6} sx={{textAlign:'left'}}>
                            <Typography variant='h6'>All Category</Typography>
                        </Grid>
                        <Grid item xs={6} sx={{textAlign:'right'}}>
                        <Add className='btnCustomer' style={{fontSize:'40px'}}/>
                        </Grid>
                        <Grid item xs={12}>
                          <Box sx={{ height: 450, width: '100%'}}>
                          <DataGrid
                  rows={category}
                  columns={columns}
                  onRowSelectionModelChange={(newSelection) => setSelectedRows(newSelection)}
                  hideFooter
                  sx={{width:'100%',backgroundColor:'white', padding:'10px'}}
                />
                          </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box component={Paper} sx={{width:'100%',height:'330px',padding:'20px'}}>
                <DataGrid
                  rows={cash}
                  columns={columns1}
                  hideFooter
                  sx={{width:'100%',backgroundColor:'white', padding:'10px'}}
                />
                </Box>
            </Grid>
        </Grid>
      </Container>
       </Box>
       </Box>
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
          Update Today's Rate
          </Typography>
          <form onSubmit={handleSubmitUpdateStatus}>
        <Grid container style={{alignItems:'center',padding:'15px'}} spacing={2}>
          <Grid item xs={12}>
            <TextField
            value={updateRate}
            name='updateRate'
            onChange={(e)=>setUpdateRate(e.target.value)}
            label='Rate'
            sx={{ width: '100%', backgroundColor:'white' }}    
            />
          </Grid>
          <br/>
          <Grid item xs={12}>
          <button  className='btnCustomer' style={{width: '100%'}}>Update</button>
          </Grid>
        </Grid>
        </form>
        </Box>
      </Modal>
       <Modal  
        open={open2}
        onClose={handleCloseUpdatePayment}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
 <Box sx={{ ...style, width: 500 }}>
        <ViewTooltip title="Close" placement='left'>
        <IconButton onClick={handleCloseUpdatePayment} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </ViewTooltip>  
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Update Paying Rate
          </Typography>
          <form onSubmit={handleSubmitUpdateStatusRate}>
        <Grid container style={{alignItems:'center',padding:'15px'}} spacing={2}>
          <Grid item xs={12}>
            <TextField
            value={updatePaymentRate}
            name='updatePaymentRate'
            onChange={(e)=>setUpdatePaymentRate(e.target.value)}
            label='Rate'
            sx={{ width: '100%', backgroundColor:'white' }}    
            />
          </Grid>
          <br/>
          <Grid item xs={12}>
          <button  className='btnCustomer' style={{width: '100%'}}>Update</button>
          </Grid>
        </Grid>
        </form>
        </Box>
      </Modal>
       <Modal  
        open={open3}
        onClose={handleCloseUpdateReturn}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
 <Box sx={{ ...style, width: 500 }}>
        <ViewTooltip title="Close" placement='left'>
        <IconButton onClick={handleCloseUpdateReturn} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </ViewTooltip>  
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Update POS Rate
          </Typography>
          <form onSubmit={handleSubmitUpdateStatusReturn}>
        <Grid container style={{alignItems:'center',padding:'15px'}} spacing={2}>
          <Grid item xs={12}>
            <TextField
            value={updateRateReturn}
            name='updateRateReturn'
            onChange={(e)=>setUpdateRateReturn(e.target.value)}
            label='Rate'
            sx={{ width: '100%', backgroundColor:'white' }}    
            />
          </Grid>
          <br/>
          <Grid item xs={12}>
          <button  className='btnCustomer' style={{width: '100%'}}>Update</button>
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
                  <h2> Data Saved successfully</h2>
                  <div style={{display:'flex', gap:'60px',justifyContent:'center'}}>
              <button onClick={handleCloseLoading} className='btnCustomer'>
                Close
              </button>
            </div>
                </div>
                )}
          </Box>
          </Modal>
    </div>
  )
}

export default RateViewAdmin
