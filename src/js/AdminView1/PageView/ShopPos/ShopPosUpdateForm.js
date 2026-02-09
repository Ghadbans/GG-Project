import React, { useEffect,useState } from 'react';
import SideShop from '../../../component/SideShop';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import {MenuItem,Grid, IconButton,Paper,TextField, FormControl, InputLabel, Select, Typography,styled, Box, Autocomplete,Modal, Backdrop, TableContainer, OutlinedInput, InputAdornment,Divider, FormControlLabel, Checkbox  } from '@mui/material'
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
import { Add, ArrowUpwardOutlined, DragIndicatorRounded, Edit, RemoveCircleOutline} from '@mui/icons-material';
import { v4 } from 'uuid';
import {  useNavigate, useParams } from 'react-router-dom';
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
import CustomerFormView2 from '../CustomerVIew/CustomerFormView2';
import Close from '@mui/icons-material/Close';
import ItemFormView2 from '../ItemView/ItemFormView2';
import ItemUpdateView2 from '../ItemView/ItemUpdateView2';
import numberToWords from 'number-to-words'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
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

function ShopPosUpdateForm() {
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
           const res = await  axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-employeeuser/${storesUserId}`)
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
  
    const apiUrl = 'https://globalgate-backend-production.up.railway.app/endpoint/create-invoice';
    const [invoiceDate,setInvoiceDate] =useState(()=>{
      const date = new Date()
      return date
    });
    const [time,setTime] = useState(()=>{
      const date = new Date()
      return date
    });
    const [inputValue, setInputValue] = React.useState('');
    const [factureNumber,setFactureNumber] = useState(0);
    const [items, SetItems] = useState([]);
      const [subTotal, setSubTotal] = useState(0);
      const [totalFC, setTotal] = useState(0);
      const [totalUSD, setTotalUSD] = useState(0);
      const [creditFC, setCreditFC] = useState(0);
      const [creditUsd, setCreditUsd] = useState(0);
      const [credit, setCredit] = useState(0);
      const [TotalAmountPaid, setTotalAmountPaid] = useState(0);
      const [remaining, setRemaining] = useState(0);
      const [totalInvoice, setTotalInvoice]= useState(0);
      const [balanceDue, setBalanceDue] = useState(0);
      const [ItemInformation,setItemInformation]= useState([]);
      const [customerName,setCustomerName]= useState(null);
      const [note, setNote] = useState("Merci pour votre visite. Les Marchandises vendues ne sont ni reprises ni echangees");
      const dateComment = new Date()
      const [rate,setRate] = useState(0);
      const [tax,setTax] = useState(0);
      const [CheckTvA, setCheckTvA] = useState(false);
  
      useEffect (() => {
        const fetchData = async () => {
      if (navigator.onLine) {
            try {
              const res = await axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-pos/${id}`)
              setCustomerName(res.data.data.customerName);
              setFactureNumber(res.data.data.factureNumber);
              setTotal(res.data.data.totalFC);
              SetItems(res.data.data.items);
              setTotalUSD(res.data.data.totalUSD);
              setCreditFC(res.data.data.creditFC);
              setCreditUsd(res.data.data.creditUsd);
              setCredit(res.data.data.credit);
              setTotalAmountPaid(res.data.data.TotalAmountPaid);
              setRemaining(res.data.data.remaining);
              setTotalInvoice(res.data.data.totalInvoice);
              setRate(res.data.data.rate);
              setTax(res.data.data.tax);
              setInvoiceDate(res.data.data.invoiceDate);
              setTime(res.data.data.time);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
      }else {
        const resLocal = await db.posSchema.get({_id:id})
        setCustomerName(resLocal.customerName);
        setFactureNumber(resLocal.factureNumber);
        setTotal(resLocal.totalFC);
        SetItems(resLocal.items);
        setTotalUSD(resLocal.totalUSD);
        setCreditFC(resLocal.creditFC);
        setCreditUsd(resLocal.creditUsd);
        setCredit(resLocal.credit);
        setTotalAmountPaid(resLocal.TotalAmountPaid);
        setRemaining(resLocal.remaining);
        setTotalInvoice(resLocal.totalInvoice);
        setRate(resLocal.rate);
        setTax(resLocal.tax);
        setInvoiceDate(resLocal.invoiceDate);
        setTime(resLocal.time);
      }
        }
        fetchData()
        },[])

                    useEffect(()=>{
                      const fetchItem = async()=> {
                      if (navigator.onLine) {
                          try {
                            const res = await  axios.get('https://globalgate-backend-production.up.railway.app/endpoint/item')
                            setItemInformation(res.data.data.filter((row)=> row.typeItem === "Goods").map((row)=> ({
                              ...row,
                              ItemNumber:row.itemUpc.newCode+'-0'+row.itemUpc.itemNumber
                            })).reverse()) 
                          } catch (error) {
                            console.error('Error fetching data:', error);
                          }
                      }else{
                        const offLineCustomer1 = await db.itemSchema.toArray();
                        setItemInformation(offLineCustomer1.filter((row)=> row.typeItem === "Goods").reverse()) 
                      }
                      }
                      fetchItem()
                    },[])
      const handleChangeItem = (idRow, newValue) => {
        const selectedOptions = ItemInformation.find((option)=> option === newValue)
        SetItems(items=> items.map((row)=> row.idRow === idRow ? {...row, 
          itemName:{
            _id:selectedOptions?._id,
            itemName:selectedOptions?.itemName,
          },
          itemCost: selectedOptions?.itemCostPrice*rate,
          itemDescription:selectedOptions?.itemDescription,
          itemRate:selectedOptions?.itemSellingPrice*rate,
          stock:selectedOptions?.itemQuantity,
          unit:selectedOptions?.unit,
         }: row))
      }
  const handleChange = (e,i) => {
    const {name, value} = e.target;
    const list = [...items];
    list[i][name] = value;
    if ( list[i]['itemDiscount'] > 5) {
      list[i]['itemDiscount'] = 5
    }
    list[i]['totalAmount'] = Math.round((  list[i]['itemQty']*list[i]['itemRate'])*100)/100;
    list[i]['totalCost'] = Math.round((list[i]['itemQty']*list[i]['itemCost'])*100)/100;
    list[i]['discount'] = list[i]['totalAmount']*list[i]['itemDiscount'];
    list[i]['percentage'] = list[i]['discount']/100;
    list[i]['itemAmount'] = Math.round((list[i]['totalAmount']-list[i]['percentage'])*100)/100;
    list[i]['totalGenerale'] = Math.round((list[i]['itemCost']*list[i]['itemBuy'])*100)/100;
    SetItems(list);
  }
  const handleChangeCEO = (e,i) => {
    const {name, value} = e.target;
    const list = [...items];
    list[i][name] = value;
    list[i]['totalAmount'] = Math.round((  list[i]['itemQty']*list[i]['itemRate'])*100)/100;
    list[i]['totalCost'] = Math.round((list[i]['itemQty']*list[i]['itemCost'])*100)/100;
    list[i]['discount'] = list[i]['totalAmount']*list[i]['itemDiscount'];
    list[i]['percentage'] = list[i]['discount']/100;
    list[i]['itemAmount'] = Math.round((list[i]['totalAmount']-list[i]['percentage'])*100)/100;
    list[i]['totalGenerale'] = Math.round((list[i]['itemCost']*list[i]['itemBuy'])*100)/100;
    SetItems(list);
  }
   //addItem
   const addItem = () => {
    SetItems([...items, {
          typeItem:'',
          idRow:v4(),
          itemName:{
            _id:"",
            itemName:""
          },
          itemDescription: "",
          itemDiscount:0,
          itemQty:0,
          itemRate:0,
          itemAmount:0,
          itemCost:0,
          totalAmount:0,
          discount:0,
          percentage:0,
          itemBuy:0,
          itemWeight: "",
          totalGenerale:0,
          totalCost:0,
          stock: 0,
          itemOut:0,
          newItemOut:0,
        }]);
  }
 
  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
  }
  const newItems = [...items];
  const [removed] = newItems.splice(result.source.index, 1);
  newItems.splice(result.destination.index, 0, removed);
  SetItems(newItems)
  };
  const deleteItem = idRow =>{
    SetItems (items => items.filter((Item)=> Item.idRow !==idRow));
  };
  const filterItemInformation = ItemInformation.filter(option=> !items.find((row)=> option._id === row.itemName._id && option.typeItem === "Goods"))
  {/** Item InFO */}
  
  const handleShowAutocomplete = (idRow) => {
    SetItems(items=> items.map((row)=> row.idRow === idRow ?{...row, 
      itemName:{
        _id:null,
        itemName:null
     }, 
     itemDescription: "",
     itemDiscount:0,
     itemQty:0,
     itemRate:0,
     itemAmount:0,
     itemCost:0,
     totalAmount:0,
     discount:0,
     percentage:0,
     itemBuy:0,
     itemWeight: "",
     totalGenerale:0,
     totalCost:0,
     stock: 0,
     itemOut:0,
     newItemOut:0,
     }: row))
  }
  const handleShowAutocompleteDescription = (idRow) => {
    SetItems(items=> items.map((row)=> row.idRow === idRow ?{...row, 
      itemName:{
        itemName: 'empty'
     }, 
     }: row))
  }
  const [openItemUpdate, setOpenItemUpdate] = useState(false);
  const [idItem,setIdItem] = useState(null)
  
  const handleOpenItemUpdate = async(id) => {
    setOpenItemUpdate(true);
    setIdItem(id);
  };
  const handleCloseItemUpdate = async() => {
    setOpenItemUpdate(false);
    if (idItem) {
      try {
        const res = await axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-item/${idItem}`)
        SetItems(items=> items.map((row)=> row.itemName._id === res.data.data._id ? {...row, 
          itemName:{
            _id:res.data.data._id,
            itemName:res.data.data.itemName
          },
           itemDescription:res.data.data.itemDescription,
            itemCost: res.data.data.itemCostPrice,
            itemRate: res.data.data.itemSellingPrice,
            stock: res.data.data.itemQuantity,
          totalAmount: row.itemQty * res.data.data.itemSellingPrice,
          discount: (row.itemQty * res.data.data.itemSellingPrice) * row.itemDiscount,
          percentage: ((row.itemQty * res.data.data.itemSellingPrice) * row.itemDiscount)/100,
          itemAmount: (row.itemQty * res.data.data.itemSellingPrice) - (((row.itemQty * res.data.data.itemSellingPrice) * row.itemDiscount)/100),
          totalCost: row.itemQty*res.data.data.itemCostPrice,
          totalGenerale: res.data.data.itemCostPrice*row.itemBuy
          }: row)) 
      } catch (error) {
        
      }}
  };
  {/** Item InFO End */}
  const [customer,setCustomer] = useState([]);
  useEffect(()=> {
    const fetchCustomer = async () => {
      if (navigator.onLine) {
        try {
          const res = await   axios.get('https://globalgate-backend-production.up.railway.app/endpoint/customer')
          setCustomer(res.data.data.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }else{
        const offLineCustomer1 = await db.customerSchema.toArray();
        setCustomer(offLineCustomer1.reverse());
      }
    }
    fetchCustomer()
  },[])
  
  const [openAutocomplete1, setOpenAutocomplete1] = useState(false);
  
  const handleOpenOpenAutocomplete1 = (e) => {
    e.stopPropagation()
   setOpenAutocomplete1(true);
  };
  const handleCloseOpenAutocomplete1 = () => {
    setOpenAutocomplete1(false);
  };
  const handleCreateCustomer = (newCustomer)=> {
    setCustomer([newCustomer,...customer])
  }
  const handleChangeCustomer = ( newValue) => {
    const selectedOptions = customer.find((option)=> option === newValue)
    setCustomerName({
      _id: selectedOptions?._id,
      customerName: selectedOptions?.customerFullName || selectedOptions?.companyName,
      billingAddress: selectedOptions?.billingAddress,
      billingCity: selectedOptions?.billingCity
    });
  }
  const handleClearCustomer = () => {
    setCustomerName(null)
  }
  const [openAutocomplete2, setOpenAutocomplete2] = useState(false);
  
  const handleOpenOpenAutocomplete2 = (e) => {
    e.stopPropagation()
   setOpenAutocomplete2(true);
  };
  const handleCloseOpenAutocomplete2 = () => {
    setOpenAutocomplete2(false);
  };
  const handleCreateItem = (newItem)=> {
    setItemInformation([newItem,...ItemInformation])
  }
  useEffect (() => {
 
     if (CheckTvA === true) {
       const result1 = items.reduce((sum, row)=>  sum + row.itemAmount,0)
     setSubTotal(result1)
     // Add 16% TVA to newTotal
     let tva = Math.round((result1 * 0.16) * 100) / 100;
     setTax(tva);
     let TWTVA = result1 + tva
     setTotalInvoice(TWTVA)
     let usdConvert =  totalUSD*rate
     let totalPaid = Number(usdConvert) + Number(totalFC)
     let newBalance = Math.round((TWTVA-totalPaid)*100)/100
     let creditI = Math.abs(newBalance)
     setCredit(creditI)
     let usdConvert1 =  creditUsd*rate
     let totalPaid1 = Number(usdConvert1) + Number(creditFC)
     let rest = Math.round((creditI-totalPaid1)*100)/100
     let totalPaidInfo = totalPaid - totalPaid1
     setTotalAmountPaid(totalPaidInfo)
     setRemaining(rest)
     setBalanceDue(newBalance)
     } else{
     const result1 = items.reduce((sum, row)=>  sum + row.itemAmount,0)
     setSubTotal(result1)
     // Add 16% TVA to newTotal
     let tva = Math.round((result1 * 0) * 100) / 100;
     setTax(tva);
     setTotalInvoice(result1)
     let usdConvert =  totalUSD*rate
     let totalPaid = Number(usdConvert) + Number(totalFC)
     let newBalance = Math.round((result1-totalPaid)*100)/100
     let creditI = Math.abs(newBalance)
     setCredit(creditI)
     let usdConvert1 =  creditUsd*rate
     let totalPaid1 = Number(usdConvert1) + Number(creditFC)
     let rest = Math.round((creditI-totalPaid1)*100)/100
     let totalPaidInfo = totalPaid - totalPaid1
     setTotalAmountPaid(totalPaidInfo)
     setRemaining(rest)
     setBalanceDue(newBalance)
     }
     
   },[CheckTvA,items,items,rate,totalUSD,totalFC,creditUsd,creditFC])

  const [open1, setOpen1] = useState(false);
  
  const handleOpenBack = (e) => {
    e.preventDefault()
    setOpen1(true);
  };
  const handleCloseBack = () => {
    setOpen1(false);
  };
  const [loading,setLoading]= useState(false);
  const [loadingOpenModal,setLoadingOpenModal] = useState(false);
  const [loadingOpenModalUpdate,setLoadingOpenModalUpdate] = useState(false);
  const [ErrorOpenModal,setErrorOpenModal] = useState(false);
  
  const handleOpen = () => {
    setLoadingOpenModal(true);
    setOpen1(false);
    setLoading(true);
    setTimeout(()=> {
      setLoading(false);
    }, 500)
  }
  const handleOpenUpdate = () => {
    setLoadingOpenModalUpdate(true);
    setLoading(true);
    setTimeout(()=> {
      setLoading(false);
    }, 500)
  }
  const handleError = () => {
    setErrorOpenModal(true);
    setOpen1(false);
    setLoading(true);
    setTimeout(()=> {
      setLoading(false);
   }, 500)
  }
  
  const handleClose = () => {
    setLoadingOpenModal(false);
    window.location.reload();
  }
  const handleCloseUpdate = () => {
    setLoadingOpenModalUpdate(false);
  }
  const handleCloseError = () => {
    setErrorOpenModal(false);
  }
  const handleDecision = (navigate) => {
    //Navigate Based on th Decision
    if (navigate === 'previous') {
      window.history.back();
    } else if (navigate === 'stay') {
     handleClose();
    } 
  }
    const handleCreateNotification = async (ReferenceInfo,ReferenceInfoNumber) => {
      const data = {
        idInfo: ReferenceInfo,
        person:user.data.userName + ' Modified ',
        reason:  'F-'+ReferenceInfoNumber + ' For ' + customerName.customerName,
        dateNotification:dateComment
      }
      try {
        await axios.post('https://globalgate-backend-production.up.railway.app/endpoint/create-notification',data)
      } catch (error) {
        console.log(error)
      }
    }
    let status = ''
    if (parseInt(balanceDue) > 0 && balanceDue !== totalInvoice ) {
     status='Partially-Paid'
   }else if (parseFloat(balanceDue)<= 0) {
     status = 'Paid'
   }else{
   status='Draft'
 }
    const itemFilter=items.filter((row)=> row.itemName.itemName !== '' && row.itemName._id)
    const [saving,setSaving] = useState('')
    const handleQty = async () => {
        try {
          await axios.post('https://globalgate-backend-production.up.railway.app/endpoint/CalculateTotal')
        } catch (error) {
          console.log(error)
        }
      }
    const handleSubmit =async (e)=>{
      e.preventDefault();
      setSaving('true');
      const data =  {
        customerName,
        factureNumber,
        invoiceDate,
        time,TotalAmountPaid,remaining,credit,creditUsd,creditFC,
        status,
        items:itemFilter,
        subTotal,
        totalFC,
        totalUSD,tax,
        rate
        ,balanceDue,
        note,
        totalInvoice,updateS:false
      }
   if (navigator.onLine) {
     try{
         const res = await axios.put(`https://globalgate-backend-production.up.railway.app/endpoint/update-pos/${id}`,data);
         if (res) {
            // Open Loading View
            handleQty()
             const ReferenceInfo = res.data.data._id
             const ReferenceInfoNumber = res.data.data.factureNumber
             handleCreateNotification(ReferenceInfo,ReferenceInfoNumber)
           handleOpen();
         }
       }catch(error){
         if (error) {
          setSaving('')
           handleError();
         }
       }
   }else{
    await db.posSchema.update(data.factureNumber, {customerName,factureNumber,invoiceDate,time,TotalAmountPaid,remaining,credit,creditUsd,creditFC,status,items:itemFilter,
        subTotal,totalFC, totalUSD,tax, rate ,balanceDue, note, totalInvoice,updateS:false
      })
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
                Add new invoice     
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
     <Container maxWidth="none" sx={{ mt: 4}} >
    <div >
            <form onSubmit={handleSubmit}>
           <Grid container style={{alignItems:'center',padding:'10px'}} spacing={2} component={Paper}> 
                <Grid item xs={12}> 
                {
                 customerName !== null ?(
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                  <p>{customerName.customerName}</p>
                     <BlackTooltip title="Clear" placement='top'>
        <IconButton onClick={handleClearCustomer} style={{ position:'relative', float:'right'}}> 
                      <RemoveCircleOutline style={{color:'#202a5a'}}/>
        </IconButton>
        </BlackTooltip>
                  </div>
               
                 ):(
                  <Autocomplete
                  disableClearable
                  options={customer}
                  getOptionLabel={(option)=> option.customerFullName? option.customerFullName : option.companyName}
                  onChange={(e, newValue) => {
                  handleChangeCustomer(newValue);
                }}
                renderInput={(params) => <TextField {...params} label="Customer Name" required />}
             />
                 )
                }
                </Grid>
                <Grid item xs={4}> 
                 <FormControl sx={{ width: '100%', backgroundColor:'white' }}>
                  <InputLabel htmlFor="factureNumber">Invoice Number</InputLabel>
                  <OutlinedInput
                  type='number'
                  id='factureNumber'
                  name='factureNumber' 
                  label='Invoice Number'
                  value={factureNumber}
                  onChange={(e)=>setFactureNumber(e.target.value)}
                  startAdornment={<InputAdornment position="start">I-00</InputAdornment>}
                  />
                 </FormControl>
                 </Grid>
                 <Grid item xs={4}> 
                 <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker
                       required
                      name='invoiceDate' 
                      label='Date'
                      value={dayjs(invoiceDate)}
                      onChange={(date)=> setInvoiceDate(date)}
                      sx={{ width: '100%', backgroundColor:'white' }}   
                       format="DD/MM/YYYY"    
                 />
                    </DemoContainer>
                    </LocalizationProvider>
                 </Grid>
                 <Grid item xs={4}> 
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker
                       required
                      name='time' 
                      label='Time'
                      value={dayjs(time)}
                      onChange={(date)=> setTime(date)}
                      sx={{ width: '100%', backgroundColor:'white' }}  
                       format="HH:mm"     
                 />
                    </DemoContainer>
                    </LocalizationProvider>
                 </Grid>
                 <Grid item xs={12}>
                    <div style={{display:'block',position:'fixed',zIndex:1,float:'right',right:'-5px'}}>
                      <section>
                     <BlackTooltip title="Add" placement="top">
              <IconButton onClick={addItem}>
              <Add className='btn1' style={{fontSize:'40px'}}/>  
              </IconButton>
            </BlackTooltip>    
                      </section>
             
            </div>
           {
              user.data.role === 'CEO'?
           (   <div>
                        <DragDropContext onDragEnd={handleDragEnd}>  
                          <table className='tableInfo10'>
                          <thead>
                      <tr>
                          <th style={{textAlign:'left'}}>#</th>
                          <th style={{textAlign:'left'}}>Item</th>
                          <th style={{textAlign:'left'}}>Quantity</th>
                          <th style={{textAlign:'left'}}>Price</th>
                          <th style={{textAlign:'left'}}>Discount %</th>
                          <th style={{textAlign:'left'}}>Amount</th>
                          <th style={{textAlign:'left'}}>Action</th>
                      </tr>
                  </thead>
              <Droppable droppableId="droppable" >  
                  {(provided, snapshot) => (  
                      <tbody  
                      id="droppable"
                          {...provided.droppableProps}  
                          ref={provided.innerRef}  
                      >  
                          {items.map((Item, i) => (  
                              <Draggable key={Item.idRow} draggableId={`droppable${Item.idRow}`} index={i}>  
                                  {(provided, snapshot) => (  
                                     <tr  
                                       ref={provided.innerRef}  
                                       {...provided.draggableProps}  
                                     >
                                      {
                                        Item.newDescription !== undefined ?(
                                          <>
                                           <td {...provided.dragHandleProps} ><DragIndicatorRounded/></td>
                                          <td colSpan={6}><TextField 
                required
                  name='newDescription' id='newDescription' 
                  value={Item.newDescription}
                  onChange={(e) => handleChangeCEO(e,i)}
                  size="small"
                  disabled={user.data.role === 'User'}
                  sx={{ width: '100%', backgroundColor:'white', fontSize:12}}       
        /></td>
           <td >
       <LightTooltip title="Delete" sx={{}}>
               <IconButton onClick={()=> deleteItem(Item.idRow)} >
               <DeleteIcon  style={{cursor:'pointer',color:'red'}}/> 
               </IconButton>
             </LightTooltip>
         </td>
                                          </>
                                        ):(
                                         <>
                                             <td {...provided.dragHandleProps} ><DragIndicatorRounded/></td>
                                   <td >
          {
            Item.itemName.itemName? (
              (  
                <div style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                <div >
                <Typography hidden = { Item.itemName?Item.itemName.itemName === 'empty':''} sx={{fontSize:'23px'}}>{Item.itemName?Item.itemName.itemName.toUpperCase():''}</Typography>
                </div>
                <div>
                <BlackTooltip title="Clear" placement='top'>
          <IconButton onClick={()=>handleShowAutocomplete(Item.idRow)} style={{ position:'relative', float:'right'}}> 
                        <RemoveCircleOutline style={{color:'#202a5a'}}/>
          </IconButton>
          </BlackTooltip>
          {
            Item.itemName._id && (
              <BlackTooltip title="Edit" placement='bottom'>
          <IconButton onClick={()=>handleOpenItemUpdate(Item.itemName._id)} style={{ position:'relative', float:'right'}}> 
                        <Edit style={{color:'#202a5a'}}/>
          </IconButton>
          </BlackTooltip>
            )
          }
                </div>
        </div>)
            ):(
              <div style={{display:'flex', alignItems:'center'}}>
     <Autocomplete
        disableClearable
                           options={filterItemInformation}
                           getOptionLabel={(option) => option.itemUpc.newCode+'-0'+option.itemUpc.itemNumber+' / '+option.itemName+' / '+option.itemBrand}
                           renderOption={(props,option)=> (<Box {...props}>{option.itemUpc.newCode+'-0'+option.itemUpc.itemNumber+' / '+option.itemName+' / '+option.itemBrand}</Box>)}
                             renderInput={(params) =>
                           <TextField {...params} 
                           />}
                           inputValue={inputValue}
                           onInputChange={(event, newInputValue) => {
                             setInputValue(newInputValue);
                           }}
                           filterOptions={(options,{inputValue})=>{
                            return options.filter(
                              (option)=>
                              option.itemName.toLowerCase().includes(inputValue.toLowerCase()) ||
                              option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) ||
                              option.ItemNumber.toLowerCase().includes(inputValue.toLowerCase()) ||
                                  option.itemDescription.toLowerCase().includes(inputValue.toLowerCase()) 
                            )
                           }}
                           onChange={(e,newValue)=>handleChangeItem(Item.idRow, newValue)}
                           size="small"
                           PaperComponent={({children, ...other})=>(
                            
                            <Box {...other} sx={{backgroundColor:'white', left:'0',marginTop:'10px'}}>
                                {children}
                                <div>
                                <button onClick={(e)=>handleOpenOpenAutocomplete2(e)} disabled={user.data.role === 'User'} onMouseDown={(e)=>e.preventDefault()} className='btnCustomer7' style={{width:'100%'}}>
                                  ADD NEW Item
                                </button>
                                </div>
                              </Box>
                             )}
                           sx={{ width: '300px', backgroundColor:'white' }} 
                         />
              </div>
            )
          }
      
            </td>
            <td>
            <TextField 
             disabled={parseFloat(Item.stock) <= 0}
                         name='itemQty' id='itemQty' 
                         onChange={(e) => {
                            if (e.target.value <= Item.stock) {
                                handleChangeCEO(e,i)
                            }
                         }}
                         size="small"
                         
                         value={Item.itemQty}
                         sx={{ width: '100px', backgroundColor:'white' }}       
                     />
             </td>
            <td >
             <TextField 
                         name='itemRate' id='itemRate'
                         value={Item.itemRate}
                         
                         onChange={(e) => handleChangeCEO(e,i)}
                         size="small"
                         sx={{ width: '100px', backgroundColor:'white' }}       
                        /> 
             </td>
             
                <td >
                          <TextField 
                                name='itemDiscount' id='itemDiscount'
                                    value={Item.itemDiscount}
                                    onChange={(e) => handleChangeCEO(e,i)}
                                    size="small"
                                    
                                    placeholder='1 to 5 %'
                                    sx={{ width: '100px', backgroundColor:'white' }}       
                                />
                          </td>
        <td id='amountTotalInvoice'>{Item.itemAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</td>
       <td >
       <LightTooltip title="Delete" sx={{}}>
               <IconButton onClick={()=> deleteItem(Item.idRow)} >
               <DeleteIcon  style={{cursor:'pointer',color:'red'}}/> 
               </IconButton>
             </LightTooltip>
         </td>
                                         </> 
                                        )
                                      }
                                     </tr>  
                                  )}  
                              </Draggable>  
                          ))}  
                          {provided.placeholder}
                      </tbody>  
                  )}  
              </Droppable>  
              </table>
          </DragDropContext>
               </div>)
              :
              (
              <div style={{display:'flex',alignItems:'center', gap:'20px'}}>
                        <DragDropContext onDragEnd={handleDragEnd}>  
                          <table className='tableInfo10'>
                          <thead>
                      <tr>
                          <th style={{textAlign:'left'}}>#</th>
                          <th style={{textAlign:'left'}}>Item</th>
                          <th style={{textAlign:'left'}}>Quantity</th>
                          <th style={{textAlign:'left'}}>Price</th>
                          <th style={{textAlign:'left'}}>Discount %</th>
                          <th style={{textAlign:'left'}}>Amount</th>
                          <th style={{textAlign:'left'}}>Action</th>
                      </tr>
                  </thead>
              <Droppable droppableId="droppable" >  
                  {(provided, snapshot) => (  
                      <tbody  
                      id="droppable"
                          {...provided.droppableProps}  
                          ref={provided.innerRef}  
                      >  
                          {items.map((Item, i) => (  
                              <Draggable key={Item.idRow} draggableId={`droppable${Item.idRow}`} index={i}>  
                                  {(provided, snapshot) => (  
                                     <tr  
                                       ref={provided.innerRef}  
                                       {...provided.draggableProps}  
                                     >
                                      {
                                        Item.newDescription !== undefined ?(
                                          <>
                                           <td {...provided.dragHandleProps} ><DragIndicatorRounded/></td>
                                          <td colSpan={6}><TextField 
                required
                  name='newDescription' id='newDescription' 
                  value={Item.newDescription}
                  onChange={(e) => handleChange(e,i)}
                  size="small"
                  disabled={user.data.role === 'User'}
                  sx={{ width: '100%', backgroundColor:'white', fontSize:12}}       
        /></td>
           <td >
       <LightTooltip title="Delete" sx={{}}>
               <IconButton onClick={()=> deleteItem(Item.idRow)} >
               <DeleteIcon  style={{cursor:'pointer',color:'red'}}/> 
               </IconButton>
             </LightTooltip>
         </td>
                                          </>
                                        ):(
                                         <>
                                             <td {...provided.dragHandleProps} ><DragIndicatorRounded/></td>
                                   <td >
          {
            Item.itemName.itemName? (
              (  
                <div style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                        <Typography hidden = { Item.itemName?Item.itemName.itemName === 'empty':''} sx={{fontSize:'23px'}}>{Item.itemName?Item.itemName.itemName.toUpperCase():''}</Typography>
                <div>
                <BlackTooltip title="Clear" placement='top'>
          <IconButton onClick={()=>handleShowAutocomplete(Item.idRow)} style={{ position:'relative', float:'right'}}> 
                        <RemoveCircleOutline style={{color:'#202a5a'}}/>
          </IconButton>
          </BlackTooltip>
                </div>
        </div>)
            ):(
              <div style={{display:'flex', alignItems:'center'}}>
     <Autocomplete
        disableClearable
                           options={filterItemInformation}
                           getOptionLabel={(option) => option.itemUpc.newCode+'-0'+option.itemUpc.itemNumber+' / '+option.itemName+' / '+option.itemBrand}
                           renderOption={(props,option)=> (<Box {...props}>{option.itemUpc.newCode+'-0'+option.itemUpc.itemNumber+' / '+option.itemName+' / '+option.itemBrand}</Box>)}
                           renderInput={(params) =>
                           <TextField {...params}  
                           />}
                           inputValue={inputValue}
                           onInputChange={(event, newInputValue) => {
                             setInputValue(newInputValue);
                           }}
                           filterOptions={(options,{inputValue})=>{
                            return options.filter(
                              (option)=>
                              option.itemName.toLowerCase().includes(inputValue.toLowerCase()) ||
                              option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) ||
                              option.itemDescription.toLowerCase().includes(inputValue.toLowerCase()) ||
                                  option.ItemNumber.toLowerCase().includes(inputValue.toLowerCase()) 
                            )
                           }}
                           onChange={(e,newValue)=>handleChangeItem(Item.idRow, newValue)}
                           size="small"
                           sx={{ width: '300px', backgroundColor:'white' }} 
                         />
              </div>
            )
          }
      
            </td>
            <td>
             <TextField 
             disabled={parseFloat(Item.stock) <= 0}
                         name='itemQty' id='itemQty' 
                         onChange={(e) => {
                            if (e.target.value <= Item.stock) {
                                handleChange(e,i)
                            }
                         }}
                         size="small"
                         value={Item.itemQty}
                         sx={{ width: '100px', backgroundColor:'white' }}       
                     />
             </td>
        <td id='amountTotalInvoice'>{Item.itemRate.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</td>
           <td >
                          <TextField 
                                name='itemDiscount' id='itemDiscount'
                                    value={Item.itemDiscount}
                                    onChange={(e) => handleChange(e,i)}
                                    size="small"
                                    placeholder='1 to 5 %'
                                    sx={{ width: '100px', backgroundColor:'white' }}       
                                />
                          </td>
        <td id='amountTotalInvoice'>{Item.itemAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</td>
       <td >
       <LightTooltip title="Delete" sx={{}}>
               <IconButton onClick={()=> deleteItem(Item.idRow)} >
               <DeleteIcon  style={{cursor:'pointer',color:'red'}}/> 
               </IconButton>
             </LightTooltip>
         </td>
                                         </> 
                                        )
                                      }
                                     </tr>  
                                  )}  
                              </Draggable>  
                          ))}  
                          {provided.placeholder}
                      </tbody>  
                  )}  
              </Droppable>  
              </table>
          </DragDropContext>
               </div>
               )
              }  
            
                </Grid> 
                <Grid item xs={12}>
                <table className="firstTable" style={{width:'800px'}}>
                  <tbody>
                    <tr >
                      <th style={{textAlign:'center'}} colSpan={2}>Tax Details</th>
                    </tr>
                   {/* <tr style={{borderBottom:'1px solid black'}}>
                      <th>      <TextField 
                      name='adjustment' id='adjustment'
                      size="small"
                      value={adjustment}
                           onChange={(e)=>setAdjustment(e.target.value)}
                          sx={{ width: '250px', backgroundColor:'white' }}       
                          /></th>
                      <td style={{borderBottom:'1px solid black'}}>
                      <FormControl sx={{ width: '100%', backgroundColor:'white' }}>
                  <OutlinedInput
                 
                  id='adjustmentNumber'
                  size="small"
                  name='adjustmentNumber'
                  value={adjustmentNumber}
                  onChange={(e)=>setAdjustmentNumber(e.target.value)}
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  />
                 </FormControl>
                        </td>
                    </tr>*/}
                    <tr style={{borderBottom:'1px solid black', padding:'10px'}}>
                      <th style={{textAlign:'left'}}>Total Amount</th>
                      <td  align="center">
                      <Typography> FC {subTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} ($ {(subTotal/rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')})</Typography>
                        </td>
                    </tr>
                   <tr style={{borderBottom:'1px solid black', padding:'10px'}}>
                       <th style={{textAlign:'left'}}>TVA @ 16 % 
                        <FormControlLabel
                        control={
                          <Checkbox
                         checked={CheckTvA}
                         onChange={(e)=> setCheckTvA(e.target.checked)}
                          />
                        }
                        />
                       </th>
                       <td  align="center">
                       FC {tax.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} ($ {(tax/rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')})
                      </td>
                   </tr>
                   <tr style={{borderBottom:'1px solid black', padding:'10px'}}>
                       <th style={{textAlign:'left'}}>Total General</th>
                       <td  align="center">
                       FC {totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} ($ {(totalInvoice/rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')})
                      </td>
                   </tr>
                   <tr style={{borderBottom:'1px solid black', padding:'10px'}}>
                       <th style={{textAlign:'left'}}>Cash FC</th>
                       <td  style={{display:'flex', alignItems:'right', justifyContent:'space-between', gap:'10px'}}>
                       <TextField 
                         name='amountPaidFC'
                         value={totalFC}
                         onChange={(e) => setTotal(e.target.value)}
                         size="small"
                         sx={{backgroundColor:'white'}}       
                        /> 
                      </td>
                   </tr>
                   <tr style={{borderBottom:'1px solid black', padding:'10px'}}>
                       <th style={{textAlign:'left'}}>Cash USD</th>
                       <td  style={{display:'flex', alignItems:'right', justifyContent:'space-between', gap:'10px'}}>
                           <TextField 
                         name='amountPaidUSD'
                         value={totalUSD}
                         onChange={(e) => setTotalUSD(e.target.value)}
                         size="small"
                         sx={{backgroundColor:'white'}}       
                        /> 
                      </td>
                   </tr>
                   {
                    balanceDue >= 0 ?(
                      <tr style={{borderBottom:'1px solid black', padding:'10px'}}>
                      <th style={{textAlign:'left'}}>Balance Due</th>
                      <td  align="center">
                FC {balanceDue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} ($ {(balanceDue/rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')})
                     </td>
                  </tr>
                    ):(
                      <tr style={{borderBottom:'1px solid black', padding:'10px'}}>
                      <th style={{textAlign:'left'}}>Amount to Return</th>
                      <td  align="center">
                FC {Math.abs(balanceDue).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} ($ {Math.abs(balanceDue/rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')})
                     </td>
                  </tr>
                    )
                   }
                  </tbody>
                  {
                    balanceDue < 0 && (
                      <tbody>
                          <tr style={{borderBottom:'1px solid black', padding:'10px'}}>
                       <th style={{textAlign:'left'}}>Return FC</th>
                       <td  style={{display:'flex', alignItems:'right', justifyContent:'space-between', gap:'10px'}}>
                       <TextField 
                         name='amountPaidFC'
                         value={creditFC}
                         onChange={(e) => setCreditFC(e.target.value)}
                         size="small"
                         sx={{backgroundColor:'white'}}       
                        /> 
                      </td>
                   </tr>
                   <tr style={{borderBottom:'1px solid black', padding:'10px'}}>
                       <th style={{textAlign:'left'}}>Return USD</th>
                       <td  style={{display:'flex', alignItems:'right', justifyContent:'space-between', gap:'10px'}}>
                       <TextField 
                         name='amountPaidFC'
                         value={creditUsd}
                         onChange={(e) => setCreditUsd(e.target.value)}
                         size="small"
                         sx={{backgroundColor:'white'}}       
                        /> 
                      </td>
                   </tr>
                   <tr style={{borderBottom:'1px solid black', padding:'10px'}}>
                      <th style={{textAlign:'left'}}>remaining</th>
                      <td  align="center">
                      FC {remaining.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} ($ {(remaining/rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')})
                        </td>
                    </tr>
                      </tbody>
                    )}
                </table>
                </Grid>
                <Grid item xs={12}>
                  <div style={{display:'flex',gap:'20px',justifyContent:'space-between',alignItems:'center'}}>
                  <TextField 
                    id='note'
                    name='note' 
                    multiline
                    rows={4}
                    value={note}
                    label='Invoice Note'
                    onChange={(e)=>setNote(e.target.value)}
                    sx={{ width: '50%', backgroundColor:'white' }}       
                />
                  </div>
      </Grid>
                <Grid item xs={12}>
                {
          saving !== 'true' ? <button type='submit' className='btnCustomer6' style={{width:'100%'}}>Save</button> : <p className='btnCustomer6' style={{width:'100%', textAlign:'center'}}>Saving...</p>
        }
      </Grid>
           </Grid>
           </form>
         </div>
         </Container>
    </Box>
    </Box>
         <Modal  
          open={open1}
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
             <Typography>Do you want to stop creating Invoice ? </Typography>
             <p><span className="txt2" style={{color:'red'}}>Note :</span> <span className="txt2"> If you stop creating without saving, all your changes will be lost</span></p>  </Grid>
            <br/>
            <Grid item xs={6}>
            <button type='submit' onClick={() => navigate(-1)} className='btnCustomer' style={{width: '100%'}}>Yes</button>
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
                    <button className='btnCustomer' onClick={handleCloseError}>
                      Try Again
                    </button>
                  </div>
                  )}
            </Box>
            </Modal>
            <Modal 
             open={loadingOpenModalUpdate}
             onClose={handleCloseUpdate}
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
                <button onClick={handleCloseUpdate} className='btnCustomer'>
                  Close
                </button>
              </div>
                  </div>
                  )}
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
            <Modal
        open={openAutocomplete2}
        onClose={handleCloseOpenAutocomplete2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style2, width: 800 }}>
        <BlackTooltip title="Close" placement='left'>
          <IconButton onClick={handleCloseOpenAutocomplete2} style={{ position:'relative', float:'right'}}> 
                        <Close style={{color:'#202a5a'}}/>
          </IconButton>
          </BlackTooltip>
          <br/>
          <div style={{height:'600px', padding:'20px',overflow:'hidden',overflowY:'scroll'}}>
              <ItemFormView2 onCreateOption={handleCreateItem} onClose={handleCloseOpenAutocomplete2}/>  
          </div>
        </Box>
      </Modal>
      <Modal
        open={openItemUpdate}
        onClose={handleCloseItemUpdate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style2, width: 800 }}>
        <BlackTooltip title="Close" placement='left'>
          <IconButton onClick={handleCloseItemUpdate} style={{ position:'relative', float:'right'}}> 
                        <Close style={{color:'#202a5a'}}/>
          </IconButton>
          </BlackTooltip>
          <br/>
          <div style={{height:'600px', padding:'20px',overflow:'hidden',overflowY:'scroll'}}>
            <ItemUpdateView2 onClose={handleCloseItemUpdate} id={idItem}/>
          </div>
        </Box>
      </Modal>
      </div>
  )
}

export default ShopPosUpdateForm
