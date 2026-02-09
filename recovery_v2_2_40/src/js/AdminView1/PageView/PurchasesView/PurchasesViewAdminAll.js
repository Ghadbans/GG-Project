import React, { useEffect,useState,useRef } from 'react'
import SidebarDash from '../../../component/SidebarDash';
import '../../view.css'
import '../Chartview.css'
import '../InvoiceView/AdminView.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Collapse,MenuItem,Grid, IconButton, Table, TableBody, TableCell,TableRow, TableHead,Paper,TableContainer, TextField, FormControl, InputLabel, Select, Typography, Autocomplete,styled, Modal, Backdrop, Fade, Box,OutlinedInput,InputAdornment,Checkbox, LinearProgress, Stepper, Step, StepLabel, Button, Accordion, AccordionSummary, AccordionDetails, Tabs, Tab, Menu, Divider } from '@mui/material'
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
import { Link, NavLink,useNavigate,useParams } from 'react-router-dom';
import Image from '../../../img/images.png'
import EditIcon from '@mui/icons-material/Edit';
import IosShareIcon from '@mui/icons-material/IosShare';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '@mui/icons-material/Logout';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import Loader from '../../../component/Loader';
import Close from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { EmailOutlined } from '@mui/icons-material';
import Phone from '@mui/icons-material/Phone';
import WebIcon from '@mui/icons-material/Web';
import Email from '@mui/icons-material/Email';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import db from '../../../dexieDb';
import ExcelJS from 'exceljs'
import { saveAs } from 'file-saver';
import { Explicit } from '@mui/icons-material';

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
function PurchasesViewAdminAll() {
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
  offLineCustomer1.filter((row)=> row.userID === user.data.id )
  .map((row)=>setGrantAccess(row.modules))
}
  }
  fetchNumber()
},[user])

const PurchaseInfoU = grantAccess.filter((row)=> row.moduleName === "Purchase" && row.access.editM === true);
  const [purchase,setPurchase]= useState([])
  const [purchase2, setPurchase2] = useState({})
  const [loadingData, setLoadingData] = useState(true);
  const [item, SetItems] = useState([])
  const apiUrl = 'http://192.168.0.200:8080/endpoint/purchase';
  useEffect(()=> {
    const fetchData = async () => {
     if (navigator.onLine) {
       try {
      const res = await axios.get(apiUrl)
      setPurchase(res.data.data.reverse());
      const resItem = await axios.get('http://192.168.0.200:8080/endpoint/item')   
      SetItems(resItem.data.data)
      setLoadingData(false)
       } catch (error) {
         console.error('Error fetching data:', error);
         setLoadingData(false)
       }
     } else {
      const offLineCustomer1 = await db.purchaseSchema.toArray();
      setPurchase(offLineCustomer1.reverse());
      const offLineItem = await db.itemSchema.toArray();
      SetItems(offLineItem)
      setLoadingData(false)
     }
    }
    fetchData()
  },[])
const [estimate,setEstimate] = useState([]);
const [invoice,setInvoice] = useState([]);
const [customerName,setCustomerName]= useState("");
const [purchaseNumber,setPurchaseNumber] = useState(0);
const [items,setItems] = useState([]);
useEffect(()=> {
  const fetchDataRelated = async () => {
if (navigator.onLine) {
      try {
        const resEstimate = await axios.get('http://192.168.0.200:8080/endpoint/estimation')
        const filteredEstimate = resEstimate.data.data.filter((row)=> row.ReferenceName === id)
        setEstimate(filteredEstimate);
        const resInvoice = await axios.get('http://192.168.0.200:8080/endpoint/invoice')
        const filteredInvoice = resInvoice.data.data.filter((row)=> row.ReferenceName2 === id)
        setInvoice(filteredInvoice);
        const res = await axios.get(`http://192.168.0.200:8080/endpoint/get-purchase/${id}`)
        setCustomerName(res.data.data.customerName.customerName.replace(/\s+/g,'_').replace(/\./g,''));
        setPurchaseNumber(res.data.data.purchaseNumber);
        setItems(res.data.data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      setLoadingData(false)
      }
} else {
  const offLineEstimate = await db.estimateSchema.toArray();
  const filteredEstimate = offLineEstimate.filter((row)=> row.ReferenceName === id)
  setEstimate(filteredEstimate);
  const offLineInvoice = await db.invoiceSchema.toArray();
  const filteredInvoice = offLineInvoice.filter((row)=> row.ReferenceName2 === id)
  setInvoice(filteredInvoice);
  const resLocal = await db.purchaseSchema.get({_id:id})
  setCustomerName(resLocal.customerName.customerName.replace(/\s+/g,'_').replace(/\./g,''));
  setPurchaseNumber(resLocal.purchaseNumber);
  setItems(resLocal.items);
}
  }
  fetchDataRelated()
},[id])
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleCloseMenu = () => {
  setAnchorEl(null);
};

const componentRef = useRef();
const handlePrint = useReactToPrint({
  content:()=> componentRef.current,
  documentTitle:'PUR-00' + purchaseNumber + ' For ' + customerName,
  onBeforeGetContent: () => {
    const PAGE_HEIGHT = 1045;
    const printElement = componentRef.current;
    if (printElement) {
      printElement.classList.add("temp-class-for-height")
      const height = printElement.clientHeight
      const numberOfPage = Math.ceil(height / PAGE_HEIGHT)
      if (numberOfPage > 1) {
        const heightWithSingleHeader = numberOfPage*PAGE_HEIGHT
        let requiredHeight = heightWithSingleHeader
        const headerHeight = printElement.getElementsByTagName("thead")?.[0]?.clientHeight
          const footerHeight = printElement.getElementsByTagName("tfoot")?.[0]?.clientHeight
          requiredHeight -= (numberOfPage - 1) * (headerHeight + footerHeight)  
      printElement.style.height = `${requiredHeight}px`;
      }
      printElement.classList.remove("temp-class-for-height")
  }
},
onAfterPrint: ()=>{
  const printElement = componentRef.current;
  if (printElement) {
    printElement.style.height = `auto`
}
}
})
const handleOpenPrint = () => {
  handlePrint()
  setAnchorEl(null);
};
const [show, setShow] = useState(1);
const handleShow = (e) =>{
    setShow(e);
}
  {/** Comments starts */}
  const [show1, setShow1] = useState(1);
  const handleShow1 = (e) =>{
      setShow1(e);
      setAnchorEl(null);
  }
  const [reason,setReason]= useState("");
  const [Comments1,setComments]= useState([]);
  const [notification,setNotification]= useState([]);
  useEffect(()=> {
    const fetchComment = async () => {
      try {
        const res = await axios.get('http://192.168.0.200:8080/endpoint/comment')
        const resp = res.data.data.filter((row)=> row.CommentInfo.idInfo === id)
                     setComments(resp.reverse())
                     const resNotification = await axios.get('http://192.168.0.200:8080/endpoint/notification')
                     setNotification(resNotification.data.data.filter((row)=> row.idInfo === id))
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
    const dateComment = dayjs(Date.now());
   
    const handleSubmitEdit = async (e) => {
      e.preventDefault();
      const data = {
        CommentInfo,
        dateComment
      };
      try {
        const res = await axios.post('http://192.168.0.200:8080/endpoint/create-comment/',data)
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
        {/** Comments end */}
        const [showRef,setShowRef] = useState(1)
        const handleShowRef = (e) =>{
          setShowRef(e);
          setAnchorEl(null);
      } 
      
      const [value,setValue] = useState(0);
      const [value2,setValue2] = useState(0);
      useEffect(()=>{
        const selectedIndex = purchase.findIndex(row=> row._id === id);
        if (selectedIndex !== -1) {
          setValue(selectedIndex)
        }
      },[purchase,id])
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
      const [search2,setSearch2] =useState('');
      const handleSearch2 = (e) => {
        const value = e.target.value
        setSearch2(value)
      }
      const newArray = search !== ''?purchase.filter((row)=>
      row.purchaseName.toLowerCase().includes(search.toLowerCase())||
      row.description && row.description.toLowerCase().includes(search.toLowerCase())||
      row.customerName.customerName.toLowerCase().includes(search.toLowerCase()) ||
      row.projectName.projectName.toLowerCase().includes(search.toLowerCase())  ||
      row.items && row.items.some((Item)=> Item.itemName && Item.itemName.itemName.toLowerCase().includes(search.toLowerCase())) ||
      row.items && row.items.some((Item)=> Item.itemDescription && Item.itemDescription.toLowerCase().includes(search.toLowerCase()))
       ):purchase
       const [filteredPurchase,setFilteredPurchase] = useState([])
       useEffect(()=>{
        const fecthItemPurchase = async () =>{
          if (navigator.onLine) {
            try {
              const res = await axios.get(`http://192.168.0.200:8080/endpoint/get-purchase/${id}`)
              setFilteredPurchase(res.data.data.items);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          } else {
            const resLocal = await db.purchaseSchema.get({_id:id})
            setFilteredPurchase(resLocal.items);
          }
        }
        fecthItemPurchase()
       },[id])
      const newArray2 = search2 !== ''?filteredPurchase.filter((Item)=>
   Item.itemName && Item.itemName.itemName.toLowerCase().includes(search2.toLowerCase()) ||
   Item.itemDescription && Item.itemDescription.toLowerCase().includes(search2.toLowerCase()) ||
   Item.newDescription && Item.newDescription.toLowerCase().includes(search2.toLowerCase()) 
       ):filteredPurchase

       const [sideBar, setSideBar] = React.useState(true);
       const toggleDrawer = () => {
        setSideBar(!sideBar);
       }
       const data1 = purchase.filter(row=> row._id === id).map((row)=>({
        number: 'PUR-00'+row.purchaseNumber,
        customer:row.customerName.customerName,
        projectName: row.projectName.projectName,
        purchaseDate: dayjs(row.purchaseDate).format('DD/MM/YYYY'),
       }))
       const data5 = items.map((Item,i)=>{
        return({
        no: i+1,
        item:  Item.itemName.itemName,
        itemDescription: Item.itemDescription,
        itemQty:  Item.itemQty,
        itemCost:  '$'+Item.itemCost,
        totalCost:  '$'+Item.totalCost,
        itemBuy:  Item.itemBuy,
        totalGenerale:  '$'+Item.totalGenerale,
        itemOut:  Item.itemOut,
      })})
      const data7 = purchase.filter(row=> row._id === id).map((row)=>({
        no: '',
        no1: 'SubTotal',
        description: '',
        laborQty: '',
        adjustmentNumber: '',
        purchaseAmount1: '$' +row.purchaseAmount1,
        purchaseAmount2: '$'+row.purchaseAmount2,
       }))
  
       const exportToExcel = async () => {
        const workbook = new ExcelJS.Workbook();
        const workSheet = workbook.addWorksheet('Sheet1');
        const columns1 = [
          {header:"#", key:'number',width: 20 },
          {header:"Customer Name", key:'customer',width: 20 },
          {header:"Project Name", key:'projectName',width: 20 },
          {header:"Date", key:'purchaseDate',width: 20},
        ];
        const columns5 = [
          { header:"#", key:'no',width: 20},
          { header:"Item", key:'item',width: 20},
          {header:"Item Description", key:'itemDescription',width: 20},
          {header:"Qty", key:'itemQty',width: 20},
          { header:"Rate", key:'itemCost',width: 20},
          {header:"Total Cost", key:'totalCost',width: 20},
          {header:"Buy", key:'itemBuy',width: 20},
          {header:"Total Buy", key:'totalGenerale',width: 20},
          {header:"Qty Out", key:'itemOut',width: 20},
        ];
  
        workSheet.addRow([]);
        workSheet.addRow(columns1.map(col=> col.header));
        data1.forEach(item=>{
          workSheet.addRow([item.number,item.customer,item.projectName,item.purchaseDate])
        }); 
        workSheet.addRow([]);
        workSheet.addRow(['Item']);
        workSheet.addRow(columns5.map(col=> col.header))
        data5.forEach(item=>{
          workSheet.addRow([item.no,item.item,item.itemDescription,item.itemQty,item.itemCost,item.totalCost,item.itemBuy,item.totalGenerale,item.itemOut])
        }); 
        data7.forEach(item=>{
          workSheet.addRow([item.no,item.no1,item.description,item.laborQty,item.adjustmentNumber,item.purchaseAmount1,item.purchaseAmount2])
        }); 
  
        const buffer = await workbook.xlsx.writeBuffer();
        const bold = new Blob([buffer], {type:'application/octet-stream'});
        saveAs(bold,`${'PUR-00'+purchaseNumber + ' for ' + customerName}.xlsx`)
      }
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
              Purchase Information
            </Typography>
            <IconButton onClick={() => navigate(-1)}>
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
<div >
<Grid container spacing={2} >
{show1===1 ?
    <Grid item xs={3}>
    { show === 1  ?   (
    <div className='itemInfoContainer'>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div style={{display:'flex', padding:'5px', alignItems:'center'}}>
               <Checkbox/>
              <Typography variant='h6'>All Purchase</Typography>
            </div>
       <div style={{padding:'20px'}}>
        <p className='btnCustomer1' onClick={() => handleShow(2)}>Filter</p>
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
                {purchase?.map((row,index) => (
                  <Tab
                  key={index}
                  label={row.customerName.customerName + ' | ' + row.purchaseName}
                  component={Link}
                  to={`/PurchasesViewAdminAll/${row._id}`}
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
            </div>) :''
         }
         
{ show === 2  ?     
( <div className='itemInfoContainer'>
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
   <IconButton onClick={() => handleShow(1)} style={{ position:'relative', float:'right'}}> 
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
                  label={row.customerName.customerName + ' | ' + row.purchaseName}
                  component={Link}
                  to={`/PurchasesViewAdminAll/${row._id}`}
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
    </Grid>:null}
    <Grid item xs={9}>
    <div className='itemInfoContainer2'>
        <div style={{width:'100%', background:'white'}}>
        {purchase?.filter(row=> row._id === id)?.map((row)=>(
       <div key={row._id}>
        <header style={{display:'block', alignItems:'center', justifyContent:'space-between'}}>
      <div style={{width:'100%',display:'flex', justifyContent:'space-between'}}>
        <section>
        <Typography sx={{fontWeight:'bold',fontSize:'20px',width:'100%'}}>PUR-00{row.purchaseNumber} | {row.projectName.projectName}</Typography>
        </section>
        <Typography
    color={
      row.statusInfo!== undefined && row.statusInfo === "Pending"
      ? "gray":
      row.statusInfo!== undefined && row.statusInfo === "On-Going"
      ? "blue":
      row.statusInfo!== undefined && row.statusInfo === "Stopped"
      ? "red":
      row.statusInfo!== undefined && row.statusInfo === "Pending"
      ? "Orange":
      row.statusInfo!== undefined && row.statusInfo === "Completed"
      ? "green":"black"
   }
    >
{row.statusInfo!== undefined? row.statusInfo:''}
    </Typography>
        <section>
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
                <MenuItem disabled={row.statusInfo!== undefined && row.statusInfo === "Completed" && user.data.role !== 'CEO'}> 
                                      <NavLink to={`/PurchaseFormUpdate/${row._id}`} className='LinkName' style={{display:'flex',gap:'20px', alignItems:'center', color:'gray'}}>
                                      <EditIcon/>
                                      <Typography>Edit</Typography>
                                      </NavLink>
                </MenuItem>
                <MenuItem onClick={handleOpenPrint} sx={{display:'flex', gap:'20px', color:'gray'}}>
                <LocalPrintshopIcon/>
                <span>Print</span> 
                </MenuItem>
                <MenuItem onClick={exportToExcel} sx={{display:'flex', gap:'20px', color:'gray'}}>
                <Explicit/>
                <span>Export to Excel</span> 
                </MenuItem>
                <Divider/>
                <MenuItem onClick={() => handleShow1(2)}> <span style={{color:'gray'}}>Comments</span> </MenuItem>
                <MenuItem onClick={() => handleShow1(3)}> <span style={{color:'gray'}}>History</span></MenuItem>
                <MenuItem>
                {
                              row.ReferenceName || row.ReferenceName2?(
                                <span style={{color:'gray'}} onClick={()=>handleShowRef(2)}>Reference</span>
                              ):<span onClick={handleCloseMenu} style={{color:'gray'}}>No Related Reference</span>
                 }
                </MenuItem>
              </Menu>
        </section>
      </div>
      {showRef === 1?(
          <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
          <h4>Reference</h4>
         <p>
               {
              invoice?invoice.map((row)=>(
                <span key={row._id}>{row.invoiceName}</span>
              )):null
            }
         </p>
         <p>
               {
              estimate?estimate.map((row)=>(
                <span key={row._id}> | {row.estimateName}</span>
              )):null
            }
         </p>
        </div> 
      ):(
        <section style={{marginTop:'10px', display:'flex', alignItems:'center'}}>
            {
     showRef === 2 &&(
        <table className="secondTable" style={{fontSize:'80%',marginBottom:'5px'}}>
          <tbody>
            {
              estimate?
              estimate.map((row)=>(
                <tr key={row._id}>
                  <td style={{textAlign:'left', border:'1px solid #DDD'}}> Date {dayjs(row.estimateDate).format('DD/MM/YYYY')}</td>
                  <td style={{textAlign:'left', border:'1px solid #DDD'}}> Estimate # {row.estimateName}</td>
                  <td style={{textAlign:'left', border:'1px solid #DDD'}}> Amount  <span>$</span> {row.totalInvoice}</td>
                  <td style={{textAlign:'center', border:'1px solid #DDD'}}>
                  <ViewTooltip>
                        <span>
                          <IconButton >
                          <NavLink to={`/EstimateViewAdminAll/${row._id}`} className='LinkName'>
                          <span style={{fontSize:'12px'}}>View</span>
                          </NavLink>
                          </IconButton>
                        </span>
                    </ViewTooltip>    
                  </td>
                </tr>
              )):null
            }
          </tbody>
          <tbody>
                            {
                              invoice?
                              invoice.map((row)=>(
                                <tr key={row._id}>
                                  <td style={{textAlign:'left', border:'1px solid #DDD'}}> Date {dayjs(row.invoiceDate).format('DD/MM/YYYY')}</td>
                                  <td style={{textAlign:'left', border:'1px solid #DDD'}}> Invoice # {row.invoiceName}</td>
                                  <td style={{textAlign:'left', border:'1px solid #DDD'}}> Amount  <span>$</span> {row.totalInvoice}</td>
                                  <td style={{textAlign:'left', border:'1px solid #DDD'}}> Paid  <span>$</span> {row.total}</td>
                                  <td style={{textAlign:'left', border:'1px solid #DDD'}}> Balance  <span>$</span> {row.balanceDue}</td>
                                  <td style={{textAlign:'center', border:'1px solid #DDD'}}>
                                  <ViewTooltip>
                                        <span>
                                          <IconButton >
                                          <NavLink to={`/InvoiceViewAdminAll/${row._id}`} className='LinkName'>
                                          <span style={{fontSize:'12px'}}>View</span>
                                          </NavLink>
                                          </IconButton>
                                        </span>
                                    </ViewTooltip>    
                                  </td>
                                </tr>
                              ))
                              :null
                            }
                          </tbody>
        </table>
     )
    } 
       <ViewTooltip title="Close" placement='bottom'>
        <IconButton onClick={() => handleShowRef(1)} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </ViewTooltip> 
    </section>
      )
      }
     
     </header>
     <hr/>
     <div style={{height:'450px', overflow:'hidden',overflowY:'scroll', width:'100%', background:'white' }}>
           <Box hidden >
            <table ref={componentRef} className='invoicedetails'>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
            <tbody>
                <tr>
                <th style={{borderBottom:'1px solid black'}}>
                <div className='invoiceTest'>  
    <span>
<img src={Image} />       
</span> 
<address style={{textAlign:'right', fontSize:'70%',marginTop:'10px'}}>
<p style={{fontWeight:'bold'}}>GLOBAL GATE SARL </p>
<p style={{fontWeight:'normal'}}>RCM CD/KWZ/RCCM/22-B-00317 <br/>
   ID NAT 14-H5300N11179P <br/>
   AVENUE SALONGO Q/INDUSTRIEL C/MANIKA <br/>
   KOLWEZI LUALABA <br/>
   DR CONGO </p>
</address>
                </div>
                </th>
                </tr>
            </tbody>
            <tbody>
                <tr>
                <td>
                  <div>
                  <p className='invoicehr'>Purchase</p>
<div className='content' style={{marginBottom:'20px',position:'relative'}}>
  <section style={{display:'flex',justifyContent:'space-between',marginBottom:'5px'}}>
  <address style={{position:'relative',lineHeight:1.35,width:'60%'}}>
           <span style={{fontWeight:'bold'}}>{row.projectName.projectName.toUpperCase()}</span>
            </address>        
            
            <table className="firstTable" style={{position:'relative',fontSize:'70%',left:'83px'}}>
              <tbody>             
                <tr>
                <th style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Pur #</span></th>
                <td style={{backgroundColor:'white',border:'none'}}><span >PUR-00{row.purchaseNumber}</span></td>
              </tr>
              <tr>
                <th style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Date</span></th>
                <td style={{backgroundColor:'white',border:'none'}}><span >{dayjs(row.purchaseDate).format('DD/MM/YYYY')}</span></td>
              </tr>
              </tbody>
            </table>
      </section>
    <section style={{}}>
    <table className="secondTable" style={{fontSize:'70%',border:'1px solid #DDD'}}>
  <thead>
                    <tr>
                        <th style={{width:'10px', border:'1px solid #DDD',backgroundColor:'#e8f7fe'}}>N</th>
                        <th style={{width:'300px', border:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Item</th>
                        <th style={{border:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Brand</th>
                        <th style={{border:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Qty</th>
                        <th style={{border:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Unit Price</th>
                        <th style={{border:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Total</th>
                        <th style={{border:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Buy</th>
                        <th style={{border:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Total</th>
                        <th style={{border:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">I-Out</th>
                    </tr>
                </thead>
                <tbody>
                {newArray2?.map((Item,i)=> {
                   const relatedUnit = item.find((Item1)=> Item1._id === Item.itemName._id)
                  return(
                <tr key={Item.idRow}>
                    {
           Item.newDescription !== undefined?
           (
            <>
          <td style={{textAlign:'center', border:'1px solid #DDD'}}><span>{filteredPurchase.indexOf(Item)+1}</span></td>
            <td style={{textAlign:'center', border:'1px solid #DDD'}} colSpan={6}>{Item.newDescription}</td>
            </>
           )
           :
           (
            <>
                    <td style={{width:'10px', border:'1px solid #DDD'}} >{filteredPurchase.indexOf(Item)+1}</td>
                        <td style={{width:'300px',textAlign:'left', border:'1px solid #DDD'}} align="left">
                           <span hidden = {Item.itemName?Item.itemName.itemName === 'empty':''}>{Item.itemName.itemName?Item.itemName.itemName.toUpperCase():''}</span>
                           <br/>
                            <span>{Item.itemDescription?Item.itemDescription.toUpperCase():''}</span>
                          </td>
                        <td style={{border:'1px solid #DDD'}} align="left">{relatedUnit !==undefined? relatedUnit.itemBrand.toUpperCase():''}</td>
                        <td style={{border:'1px solid #DDD'}} align="left">{Item.itemQty} {relatedUnit !==undefined? relatedUnit.unit.toUpperCase():''}</td>
                        <td style={{border:'1px solid #DDD'}} align="left">{Item.itemCost}</td>
                        <td style={{border:'1px solid #DDD'}} align="left"><span>$</span><span>{Item.totalCost?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
                        <td style={{border:'1px solid #DDD'}} align="left">{Item.itemBuy}</td>
                        <td style={{border:'1px solid #DDD'}} align="left"><span>$</span><span>{Item.totalGenerale?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
                        <td style={{border:'1px solid #DDD'}} align="left"><span>{Item.itemOut} {relatedUnit !==undefined? relatedUnit.unit.toUpperCase():''}</span></td>
                 </>
           )
            }
                     </tr>
                 )})}
                </tbody>
                <tbody>
                <tr>
                    <td  colSpan={3} style={{border:'1px solid #DDD'}} align="left">SubTotal </td>
                    <td colSpan={2} style={{border:'1px solid #DDD'}} align="left"><span>$</span><span>{parseFloat(row.purchaseAmount1)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
                    <td colSpan={2} style={{border:'1px solid #DDD'}} align="left"><span>$</span><span>{parseFloat(row.purchaseAmount2)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
                    </tr>
                </tbody>
            </table> 
            <address style={{float:'left',fontSize:'70%',textAlign:'left'}}>
<p style={{lineHeight:'14px', fontWeight:'bold'}}>
  Bank: SOFIBANQUE SA <br/>
  Entitled: GLOBAL GATE SARL<br/>
  Bank Account: 00023233330214247020073<br/>
  Code Swift: SFBXCDKIXXX
</p>
<p style={{fontWeight:'bold'}}>Terms & Conditions </p>
<p>     ESTIMATES ARE FOR LABOR AND ADDITIONAL MATERIAL ONLY, MATERIALS SOLD ARE NEITHER TAKEN BACK OR EXCHANGED WE WILL NOT BE RESPONSIBLE FOR LOSS OR DAMAGE CAUSED BY FIRE, THEFT, TESTING, DEFECTED PARE PARTS, OR ANY OTHER CAUSE BEYOND OUR CONTROL.</p>
</address>     
    </section>             
          </div>
                  </div>
                </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                <td>
                <div  style={{position:'relative',marginTop:'20px'}}>
                  <p hidden>...</p>
                  <p hidden>...</p>
                  <br/>
                  <section style={{position:'fixed',bottom:0,left:0,right:0,justifyContent:'center', display:'flex', alignItems:'center', gap:'10px'}}>
<p style={{display:'flex',gap:'8px',alignItems:'center'}}>
          <span><EmailIcon/></span>
          <span>contact@globalgate.sarl</span>
        </p>
        <p style={{display:'flex',gap:'8px',alignItems:'center'}}>
          <span><PhoneIcon/></span>
          <span>+243 827 722 222</span>
        </p>
        <p style={{display:'flex',gap:'8px',alignItems:'center'}}>
          <span><WebIcon/></span>
          <span>www.GlobalGate.sarl</span>
        </p>
                  </section>
        
              </div>
                </td>
                </tr>
            </tfoot>
        </table>
           </Box>
           <Box sx={{padding:'20px'}}>
            <div style={{padding:'20px'}}>
            <header className='invoiceTest'>  
    <div>
<img src={Image} style={{width:'500px',height:'100px'}}/>       
</div> 
<address style={{textAlign:'right'}}>
<p style={{fontWeight:'bold'}}>GLOBAL GATE SARL </p>
<p>RCM CD/KWZ/RCCM/22-B-00317 </p>
<p> ID NAT 14-H5300N11179P </p>
<p> AVENUE SALONGO Q/INDUSTRIEL C/MANIKA </p>
<p>  KOLWEZI LUALABA </p>
<p>   DR CONGO </p>
</address>
</header>
<hr/><p className='invoicehr'>Purchase</p>
<article>
  <section style={{display:'flex',justifyContent:'space-between',marginTop:'25px'}}>
  <address style={{position:'relative',lineHeight:1.35,width:'60%'}}>
           <p style={{}}>
            <span style={{fontWeight:'bold', fontSize:'18px'}}>
              {row.projectName.projectName.toUpperCase()}
            </span>
            <br/>
            <span style={{fontSize:'13px'}}>
              {row.description!== undefined?row.description.toUpperCase():''}
            </span>
            </p> 
            </address>   
            <table className="firstTable" style={{position:'relative',fontSize:'80%',left:'83px'}}>
              <tbody>             
                <tr>
                <th style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Pur #</span></th>
                <td style={{backgroundColor:'white',border:'none'}}><span >PUR-00{row.purchaseNumber}</span></td>
              </tr>
              <tr>
                <th style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Date</span></th>
                <td style={{backgroundColor:'white',border:'none'}}><span >{dayjs(row.purchaseDate).format('DD/MM/YYYY')}</span></td>
              </tr>
              </tbody>
            </table>
  </section>
  <section style={{position:'relative', float:'right', padding:'10px',marginTop:'-60px'}}>
                <TextField
                label='Search'
                id='search2'
                value={search2}
                variant="standard"
                onChange={handleSearch2}
                />
              </section>
  <table className="secondTable" style={{fontSize:'90%'}}>
  <thead>
                    <tr>
                        <th style={{width:'10px', border:'1px solid #DDD',backgroundColor:'#e8f7fe'}}>N</th>
                        <th style={{width:'300px', border:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Item</th>
                        <th style={{border:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Brand</th>
                        <th style={{border:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Qty</th>
                        <th style={{border:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Unit Price</th>
                        <th style={{border:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Total</th>
                        <th style={{border:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Buy</th>
                        <th style={{border:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Total</th>
                        <th style={{border:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">I-Out</th>
                    </tr>
                </thead>
                <tbody>
                {newArray2?.map((Item,i)=> {
                   const relatedUnit = item.find((Item1)=> Item1._id === Item.itemName._id)
                  return(
                <tr key={Item.idRow}>
                    {
           Item.newDescription !== undefined?
           (
            <>
          <td style={{textAlign:'center', border:'1px solid #DDD'}}><span>{filteredPurchase.indexOf(Item)+1}</span></td>
            <td style={{textAlign:'center', border:'1px solid #DDD'}} colSpan={6}>{Item.newDescription}</td>
            </>
           )
           :
           (
            <>
                    <td style={{width:'10px', border:'1px solid #DDD'}} >{filteredPurchase.indexOf(Item)+1}</td>
                        <td style={{width:'300px',textAlign:'left', border:'1px solid #DDD'}} align="left">
                           <span hidden = {Item.itemName?Item.itemName.itemName === 'empty':''}>{Item.itemName.itemName?Item.itemName.itemName.toUpperCase():''}</span>
                           <br/>
                            <span>{Item.itemDescription?Item.itemDescription.toUpperCase():''}</span>
                          </td>
                        <td style={{border:'1px solid #DDD'}} align="left">{relatedUnit !==undefined? relatedUnit.itemBrand.toUpperCase():''}</td>
                        <td style={{border:'1px solid #DDD'}} align="left">{Item.itemQty} {relatedUnit !==undefined? relatedUnit.unit.toUpperCase():''}</td>
                        <td style={{border:'1px solid #DDD'}} align="left">{Item.itemCost}</td>
                        <td style={{border:'1px solid #DDD'}} align="left"><span>$</span><span>{Item.totalCost?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
                        <td style={{border:'1px solid #DDD'}} align="left">{Item.itemBuy}</td>
                        <td style={{border:'1px solid #DDD'}} align="left"><span>$</span><span>{Item.totalGenerale?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
                        <td style={{border:'1px solid #DDD'}} align="left"><span>{Item.itemOut} {relatedUnit !==undefined? relatedUnit.unit.toUpperCase():''}</span></td>
                 </>
           )
            }
                     </tr>
                 )})}
                </tbody>
                <tbody>
                <tr>
                    <td  colSpan={3} style={{border:'1px solid #DDD'}} align="left">SubTotal </td>
                    <td colSpan={2} style={{border:'1px solid #DDD'}} align="left"><span>$</span><span>{parseFloat(row.purchaseAmount1)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
                    <td colSpan={2} style={{border:'1px solid #DDD'}} align="left"><span>$</span><span>{parseFloat(row.purchaseAmount2)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
                    </tr>
                </tbody>
            </table>
</article>
<div className='footerinvoice'>
        <p style={{display:'flex',gap:'5px',alignItems:'center'}}>
          <span><Email/></span>
          <span>Contact@GlobalGate.Sarl</span>
        </p>
        <p style={{display:'flex',gap:'5px',alignItems:'center'}}>
          <span><Phone/></span>
          <span>+243 827 722 222</span>
        </p>
        <p style={{display:'flex',gap:'5px',alignItems:'center'}}>
          <span><WebIcon/></span>
          <span>www.GlobalGate.sarl</span>
        </p>
      </div>
            </div>
           </Box>
           </div>
        </div>
         ))}
        </div>
    </div>
    </Grid>
    {show1===2 ?
     <Grid item xs={3} >
      <div className='itemInfoContainer'>
        <div style={{padding:'10px'}}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%'}}>
        <p>COMMENTS</p>
        <ViewTooltip title="Close" placement='left'>
        <IconButton onClick={() => handleShow1(1)} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </ViewTooltip> 
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
          onChange={(e)=>setReason(e.target.value.toUpperCase())}
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
        <div style={{height:'355px', overflow:'hidden',overflowY:'scroll', width:'100%'}}>
          <div style={{padding:'10px'}}>
            <table style={{width:'100%'}}>
              <tbody>
                 {Comments1.map((Item)=>(
                    <tr key={Item._id}>
                      <td style={{width:'100%',borderBottom:'1px solid black'}}>
                       {Item.dateComment?dayjs(Item.dateComment).format('DD/MM'):''} {Item.CommentInfo.person + ': ' + Item.CommentInfo.reason}
                      </td>
                    </tr>
                 ))}  
              </tbody>
            </table>
          </div>
        </div>
      </div>
           </Grid>:""}
           {show1===3 ?
     <Grid item xs={3}>
      <div className='itemInfoContainer'>
        <div style={{padding:'20px'}}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%'}}>
        <p>HISTORY</p>
         <ViewTooltip title="Close" placement='bottom'>
        <IconButton onClick={() => handleShow1(1)} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </ViewTooltip> 
      </div>
      <br/>

        </div>
        <div style={{height:'518px', overflow:'hidden',overflowY:'scroll', width:'100%'}}>
          <div style={{padding:'10px'}}>
          {
        purchase.filter((row)=> row._id === id)
        .map((row)=> (
          <p key={row._id}>{row.Create?(
            <span>{row.Create.dateComment} {row.Create.person} {row.Create.purchaseNumber}</span>
          ):''}</p>
        ))
      }
       {
        notification.map((row)=> (
          <p key={row._id}>
            <span>{row.person+' on '+ dayjs(row.dateNotification).format('DD/MMMM')}: {row.reason}</span>
          </p>
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

export default PurchasesViewAdminAll
