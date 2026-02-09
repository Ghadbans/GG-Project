import React,{ useEffect,useRef,useState } from 'react'
import './view.css'
import './PageView/Chartview.css';
import SideShop from '../component/SideShop'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink, useNavigate } from 'react-router-dom';
import {Table, IconButton,styled, TableBody,TableCell,TableHead,TableRow,Checkbox, TableContainer, Paper, Typography, Modal, Box, Grid, FormControl, InputLabel, Select, MenuItem,Backdrop, Autocomplete,TextField, Tab, Card,CardContent, CardHeader }  from '@mui/material';
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import axios from 'axios';
import { Add, Close, MailOutline, Person2Outlined, PersonOffRounded, Print, Square} from '@mui/icons-material';
import dayjs from 'dayjs';
import Loader from '../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDispatch, useSelector } from "react-redux"
import { logOut, selectCurrentUser, setUser } from '../features/auth/authSlice';
import Logout from '@mui/icons-material/Logout';
import Image from '../img/no-data.png';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import MessageAdminView from './MessageAdminView';
import { LineChart, LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses, } from '@mui/x-charts/LineChart';
import NotificationVIewInfo from './NotificationVIewInfo';
import db from '../dexieDb';
import { useReactToPrint } from 'react-to-print';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import PosReportInvoice from './PageView/DashboardInfo/PosReportInvoice';
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

function ReportPos() {
    const navigate = useNavigate();
      const dispatch = useDispatch();
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
      const [grantAccess,setGrantAccess] = useState([]);
      useEffect(()=>{
       const fetchNumber = async () => {
         if (navigator.onLine) {
             try {
               const res = await axios.get('http://192.168.0.200:8080/endpoint/grantAccess');
               res.data.data.filter((row)=> row.userID === user.data.id )
                            .map((row)=>setGrantAccess(row.modules))
             } catch (error) {
               console.error('Error fetching data:', error);
             }
         }else{
       const offLineCustomer1 = await db.grantAccessSchema.toArray(); 
       setGrantAccess(offLineCustomer1);
     }
       }
       fetchNumber()
     },[user])
      const [sideBar, setSideBar] = React.useState(true);
          const toggleDrawer = () => {
           setSideBar(!sideBar);
          };
    const [value3, setValue3] = React.useState('1');
        
        useEffect(()=>{
         const result =localStorage.getItem('SelectPOSReport')
         if (result) {
           setValue3(result)
         }
        })
        const handleChange3 = (event, newValue) => {
         const changeValue = newValue
          setValue3(changeValue);
          localStorage.setItem('SelectPOSReport',changeValue)
        };
        const [loadingData, setLoadingData] = useState(true);
       const [invoice,setInvoice] = useState([]);
           const [cash,setCash] = useState([]);
       const [posFiltered,setPosFiltered] = useState([]);
       const [cashFiltered,setCashFiltered] = useState([]);
        const [startDate,setStartDate]= useState(()=>{
             const date = new Date()
              return date
            });
          const [date,setDate] =  useState(()=>{
            const date1 = new Date()
            return date1
          });
           useEffect(()=>{
    const fetchData = async () => {
      try {
        const res = await axios.get('http://192.168.0.200:8080/endpoint/pos')
        const formatDate = res.data.data.map((item)=>({
                 ...item,
                 id: item._id,
                 dateField: dayjs(item.invoiceDate).format('DD/MM/YYYY'),
                 time: dayjs(item.time).format('HH:mm'), 
                 amountTotalFc:item.totalFC-item.creditFC, 
                 amountTotalUsd:item.totalUSD-item.creditUsd,
                 infoSell: Math.round(((item.TotalAmountPaid - item.tax)/ item.rate)*100)/100,
                 infoSellFC: item.TotalAmountPaid,
                 TaxUSd: Math.round((item.tax/ item.rate)*100)/100,
                infoCostFC: (item.items.reduce((sum,ITem)=> sum + (ITem.itemQty * ITem.itemCost),0 )) ,
                 infoCost: Math.round(((item.items.reduce((sum,ITem)=> sum + (ITem.itemQty * ITem.itemCost),0 )) / item.rate)*100)/100             })) 
               setInvoice(formatDate.reverse());
               const cashResponse = await axios.get('http://192.168.0.200:8080/endpoint/cash') 
                       setCash(cashResponse.data.data); 
        setLoadingData(false)
      } catch (error) {
        console.error('Error fetching data:', error);
       const offLineCustomer1 = await db.posSchema.toArray();
           const formatDate = offLineCustomer1.map((item)=>({
                       ...item,
                 id: item._id,
                 dateField: dayjs(item.invoiceDate).format('DD/MM/YYYY'),
                 time: dayjs(item.time).format('HH:mm'), 
                 amountTotalFc:item.totalFC-item.creditFC, 
                 amountTotalUsd:item.totalUSD-item.creditUsd,
                 infoSell: Math.round(((item.TotalAmountPaid - item.tax)/ item.rate)*100)/100,
                 infoSellFC: item.TotalAmountPaid,
                 TaxUSd: Math.round((item.tax/ item.rate)*100)/100,
                infoCostFC: (item.items.reduce((sum,ITem)=> sum + (ITem.itemQty * ITem.itemCost),0 )) ,
                 infoCost: Math.round(((item.items.reduce((sum,ITem)=> sum + (ITem.itemQty * ITem.itemCost),0 )) / item.rate)*100)/100  
              
           })) 
           setInvoice(formatDate.reverse())
           const offLineCash = await db.cashSchema.toArray();
             setCash(offLineCash); 
        setLoadingData(false)
      }
    }
    fetchData()
  },[])
  //POS
  // Cash Filter
  useEffect(()=>{
    const totalExpenses = cash.filter((row)=>{
      const ExpensesDate = dayjs(row.cashDate).format('DD/MM/YYYY')
      return ExpensesDate === dayjs(startDate).format('DD/MM/YYYY')
     })
     setCashFiltered(totalExpenses)
  },[startDate,cash])
  // POS Filter
  useEffect(()=>{
    const totalExpenses = invoice.filter((row)=>{
      const ExpensesDate = dayjs(row.invoiceDate).format('DD/MM/YYYY')
      return ExpensesDate === dayjs(startDate).format('DD/MM/YYYY')
     })
     setPosFiltered(totalExpenses)
  },[startDate,invoice])

  const totalPosFC = posFiltered.length >0 ? posFiltered.reduce((acc,row)=> acc + parseFloat(row.amountTotalFc),0) :0
  const totalPosUSD = posFiltered.length >0 ? posFiltered.reduce((acc,row)=> acc + parseFloat(row.amountTotalUsd),0) :0

    const totalCashFC = cashFiltered.length>0? cashFiltered.reduce((acc,row)=>{ return acc + row.amount.filter((rows)=> rows.note?.toLowerCase() === "pos").reduce((sum,item)=> sum + parseFloat(item.amountFC),0)},0 ):0
    const totalCashUSD = cashFiltered.length>0? cashFiltered.reduce((acc,row)=>{ return acc + row.amount.filter((rows)=> rows.note?.toLowerCase() === "pos").reduce((sum,item)=> sum + parseFloat(item.amountUsd),0)},0 ):0

  const returnFC = Number(totalCashFC) + Number(totalPosFC)
  const returnUSD = Number(totalCashUSD) + Number(totalPosUSD)

  
  const TotalMonthPayment = invoice? invoice.reduce((acc, item) =>{
     const month = dayjs(item.invoiceDate).format('MMMM');
     const year = dayjs(item.invoiceDate).format('YYYY');
     if (!acc[month]) {
       acc[month] = {year,month, amount: 0}
     }
     acc[month].amount += parseFloat(item.infoSell)
     return acc
   },{}):''
   const newMonthArrayPayment=(Object.entries(TotalMonthPayment).map(([month,total])=>({
     month:total.month,total:parseFloat(total.amount.toFixed(2)),year:total.year
   })))

  const sortArrayByMonthPayment = newMonthArrayPayment.sort((a,b)=> {
      const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
      return months.indexOf(a.month) - months.indexOf(b.month)
    }).filter(row=>{
      const rowDate = dayjs(row.year).format('YYYY');
      return rowDate === dayjs(date).format('YYYY')
    })
  const TotalMonthPayment1 = invoice? invoice.reduce((acc, item) =>{
     const month = dayjs(item.invoiceDate).format('MMMM');
     const year = dayjs(item.invoiceDate).format('YYYY');
     if (!acc[month]) {
       acc[month] = {year,month, amount: 0}
     }
     acc[month].amount += parseFloat(item.infoCost)
     return acc
   },{}):''
   const newMonthArrayPayment1=(Object.entries(TotalMonthPayment1).map(([month,total])=>({
     month:total.month,total:parseFloat(total.amount.toFixed(2)),year:total.year
   })))

  const sortArrayByMonthPayment1 = newMonthArrayPayment1.sort((a,b)=> {
      const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
      return months.indexOf(a.month) - months.indexOf(b.month)
    }).filter(row=>{
      const rowDate = dayjs(row.year).format('YYYY');
      return rowDate === dayjs(date).format('YYYY')
    })

const TotalMonthDailyExpenses = invoice? invoice.reduce((acc, item) =>{
  const month = dayjs(item.invoiceDate).format('MMMM');
  const year = dayjs(item.invoiceDate).format('YYYY');
  if (!acc[month]) {
    acc[month] = {year,month, total: 0}
  }
  acc[month].total += parseFloat(item.TaxUSd)
  return acc
},{}):''

const newMonthArrayDailyExpenses=(Object.entries(TotalMonthDailyExpenses).map(([month,total])=>({
  month:total.month,total:parseFloat(total.total.toFixed(2)),year:total.year
})))

const sortArrayByMonthDailyExpenses = newMonthArrayDailyExpenses.sort((a,b)=> {
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
  return months.indexOf(a.month) - months.indexOf(b.month)
})
 const monthsOfYear = ['January','February','March','April','May','June','July','August','September','October','November','December']

  const normalizeSortArrayByMonthPayment = monthsOfYear.map((moth)=>{
  const related = sortArrayByMonthPayment.find((row)=> row.month === moth)
  return {
    month:moth,
    total: related? related.total : 0
  }
})
const normalizeSortArrayByMonthTotalExpensesAll = monthsOfYear.map((moth)=>{
  const related = sortArrayByMonthDailyExpenses.find((row)=> row.month === moth)
  return {
    month:moth,
    total: related? related.total : 0
  }
})
  const totalRevenue = sortArrayByMonthPayment.reduce((sum,row)=> sum + row.total,0 )
  const totalCost = sortArrayByMonthPayment1.reduce((sum,row)=> sum + row.total,0 )
  const totalDailyExpenses =  sortArrayByMonthDailyExpenses.reduce((sum,row)=> sum + row.total,0 )
  const palette1 = ['blue','red'];
  const [monthAllRevenueExpenses,setMonthAllRevenueExpenses] = useState('');
  const [showInfo,setShowInfo] = useState(1);
  const Month = "Month"
  const All = "Revenue"
  const handleClick = (e,monthI) => {
    setShowInfo(e)
    setMonthAllRevenueExpenses(monthI.axisValue)
  }
  return (
       <div>
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
         POS Report
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
     <SideShop/>
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

        <Box>

              {
                  loadingData?<div >
                    <div style={{position:'relative', top:'120px'}}>
                      <Loader/>
                    </div>
                  </div>:(
                    <div>
                       {
                      showInfo !==2  ? 
                    <TabContext  value={value3}
                           >
                    <Box>
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
                            label="Daily Report" 
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
                      {
                         user.data.role === 'CEO' &&(<Tab 
                            label="Monthly" 
                            value="2"
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
                             />)}
                      </TabList>
                    </Box>
                    <TabPanel value="1">
                        <div>
                            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%'}}>
 <LocalizationProvider dateAdapter={AdapterDayjs}>
                                  <DemoContainer components={['DatePicker', 'DatePicker']}>
                                  <DatePicker
                                               required
                                              name='startDate' 
                                              label='From Date'
                                              value={dayjs(startDate)}
                                              onChange={(date)=> setStartDate(date)} 
                                              format='DD/MM/YYYY' 
                                         />
                                  </DemoContainer>
                              </LocalizationProvider>
                              <div style={{position:'relative', float:'left'}}>
                                  {
                                                    cashFiltered.map((row)=> (
                                                        <Table key={row._id}>
                                                                      <TableHead>
                                              <TableRow>
                                                <TableCell style={{border:'1px solid gray',backgroundColor:'black',color:'white',textAlign:'center'}} colSpan={7}>Cash In</TableCell>
                                              </TableRow>
                                            </TableHead>
                                                            <TableBody>
                                                                {
                                                                  row.amount.filter((rows)=> rows.note?.toLowerCase() === "pos").map((rows)=> (
                                                                    <TableRow key={rows.idRow} style={{display:'flex',alignItems:'center', justifyContent:'space-around'}}>
                   <TableCell> FC {rows.amountFC}</TableCell>
                      <TableCell>{rows.rate}</TableCell>
                      <TableCell>${rows.amountUsd!== undefined?rows.amountUsd : rows.total}</TableCell>
                                                                    </TableRow>
                                                                  )) 
                                                                }
                                                            </TableBody>
                                                        </Table>
                                                    ))
                                                }
                              </div>
                            </div>
                              <br/>
                        <Table>
                               <TableHead>
                                              <TableRow>
                                                <TableCell style={{border:'1px solid gray',backgroundColor:'black',color:'white',textAlign:'center'}} colSpan={7}>POS Daily Sell</TableCell>
                                              </TableRow>
                                              <TableRow>
                                                <TableCell style={{border:'1px solid gray'}}>#</TableCell>
                                                <TableCell style={{border:'1px solid gray'}}>User</TableCell>
                                                <TableCell style={{border:'1px solid gray'}}>Customer</TableCell>
                                                <TableCell style={{border:'1px solid gray'}}>Total FC</TableCell>
                                                <TableCell style={{border:'1px solid gray'}}>Total $</TableCell>
                                              </TableRow>
                                            </TableHead>
                                               <TableBody>
                                            {
                                              posFiltered.map((item)=>
                                              <TableRow key={item._id}>
                                                   <TableCell style={{border:'1px solid gray'}}>
                                                    S-0{item.factureNumber}
                                                  </TableCell>
                                                   <TableCell style={{border:'1px solid gray'}}>
                                                    {item.Create}
                                                  </TableCell>
                                                   <TableCell style={{border:'1px solid gray'}}>
                                                    {item.customerName!== undefined?item.customerName.customerName:''}
                                                  </TableCell>
                                                   <TableCell style={{border:'1px solid gray'}}>
                                                   <span>FC </span>{item.amountTotalFc?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}
                                                  </TableCell>
                                                   <TableCell style={{border:'1px solid gray'}}>
                                                    <span>$ </span>{item.amountTotalUsd?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}
                                                  </TableCell>
                                              </TableRow>
                                              )
                                            }
                                             <TableRow>
             <TableCell style={{border:'1px solid gray'}} colSpan={3}>POS Received Total</TableCell>
             <TableCell style={{border:'1px solid gray', width:'200px',textAlign:'left'}} ><span>FC </span><span >{isNaN(totalPosFC)?0:totalPosFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></TableCell>
             <TableCell style={{border:'1px solid gray', width:'200px'}}><span>$ </span><span >{isNaN(totalPosUSD)?0:totalPosUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></TableCell>
             </TableRow>
                                             <TableRow>
             <TableCell style={{border:'1px solid gray'}} colSpan={3}>POS Cash Out Total</TableCell>
             <TableCell style={{border:'1px solid gray', width:'200px',textAlign:'left'}} ><span>FC </span><span >{isNaN(returnFC)?0:returnFC?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></TableCell>
             <TableCell style={{border:'1px solid gray', width:'200px'}}><span>$ </span><span >{isNaN(returnUSD)?0:returnUSD?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></TableCell>
             </TableRow>
                                         </TableBody>  
                        </Table>
                        </div>
                    </TabPanel>
                    <TabPanel value="2">

                                         <Card style={{width:'400px'}}>
                                                            <CardContent style={{display:'block'}}>
                                                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DatePicker', 'DatePicker']}>
                                            <DatePicker
                                                         required
                                                        name='date' 
                                                        value={dayjs(date)}
                                                        onChange={(date)=> setDate(date)} 
                                                        format='YYYY' 
                                                        label={'"year"'} views={['year']}
                                                   />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                                       <section style={{width:'100%',justifyContent:'center'}}>
                                                        <ul style={{listStyleType:'none'}}>
                                                          <li style={{display:'flex',alignItems:'center',gap:'10px', cursor:'pointer'}}> <span><Square style={{color:'blue'}}/></span> <span style={{color:'blue'}}>Item Sell: $ {totalRevenue?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></li>
                                                          <li style={{display:'flex',alignItems:'center',gap:'10px', cursor:'pointer'}}> <span><Square style={{color:'Orange'}}/></span> <span style={{color:'Orange'}}>Item Cost: $ {totalCost?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></li>
                                                          <li style={{display:'flex',alignItems:'center',gap:'10px', cursor:'pointer'}}> <span><Square style={{color:'green'}}/></span> <span style={{color:'green'}}>Revenue: $ {(totalRevenue-totalCost)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></li>
                                                          <li style={{display:'flex',alignItems:'center',gap:'10px', cursor:'pointer'}}> <span><Square style={{color:'red'}}/></span> <span style={{color:'red'}}>Tax: $ {totalDailyExpenses?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></li>
                                                        </ul>
                                                       </section>
                                                            </CardContent>
                                                          </Card>
                                        <br/>
                     <Card sx={{width:'100%', height:'300px',color:'white', boxShadow:'1px 1px 2rem rgba(0, 0, 0, 0.3)'}}>
                <CardContent >
                <LineChart
      height={300}
      series={[
        { data: normalizeSortArrayByMonthPayment.map((row)=> row.total), label: 'Income', id: 'uvId' },
        { data: normalizeSortArrayByMonthTotalExpensesAll.map((row)=> row.total), label: 'Tax', id: 'pvId' },
      ]}
      xAxis={[{ scaleType: 'point', data: monthsOfYear, stroke:'#fff'}]}
      colors={palette1}
       onAxisClick={(e,monthsOfYear)=>handleClick(2,monthsOfYear)}
    />
                </CardContent>
              </Card>
                    </TabPanel>
                  </TabContext> :
                       <div> 
       <section style={{position:'relative',float:'right',margin:'10px'}}>
      <Close  onClick={()=>handleClick(1,'')} className='btnCustomer' style={{fontSize:'40px'}}/>
      </section>
              <PosReportInvoice
              onMonth={monthAllRevenueExpenses}
              onInvoice = {invoice}
              onMonthOption ={Month}
              OnAllSelection = {All}
              />
            </div>
                    }
                    </div>
                   
                  )
                  }

        </Box>
   
     </Container>
   </Box>
   </Box>
</div>
  )
}

export default ReportPos