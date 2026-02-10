import React,{useEffect,useState,useRef, useMemo} from 'react'
import SidebarDash from '../../../component/SidebarDash';
import '../../view.css'
import '../Chartview.css'
import './AdminView.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {TableContainer,Checkbox,MenuItem,Grid, IconButton,Paper, TextField, FormControl, InputLabel, Select, Typography, styled, FormLabel, RadioGroup, FormControlLabel, Radio, Input, OutlinedInput, InputAdornment,Modal, Backdrop, Fade, Box, Autocomplete,Table,TableBody,TableCell,TableRow,TableHead, Button, Menu, Divider, Tab, Card, CardContent } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import IosShareIcon from '@mui/icons-material/IosShare';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import InvoiceInformation from './InvoiceInformation';
import { NavLink,useParams,useNavigate } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WebIcon from '@mui/icons-material/Web';
import Image from '../../../img/images.png'
import Image3 from '../../../img/Paid.png'
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '@mui/icons-material/Logout';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import Loader from '../../../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Close, FileCopy, KeyboardArrowDown, VisibilityOutlined } from '@mui/icons-material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { PieChart,pieArcLabelClasses } from '@mui/x-charts/PieChart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import db from '../../../dexieDb';
import { v4 } from 'uuid';
import ExcelJS from 'exceljs'
import { saveAs } from 'file-saver';
import { Explicit } from '@mui/icons-material';
import Send from '@mui/icons-material/Send';


const palette = ['red', 'blue', 'green'];
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
function InvoiceViewAdminAll() {
  let {id} = useParams()
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
  const [grantAccess,setGrantAccess] = useState([]);
  useEffect(()=>{
   const fetchNumber = async () => {
     if (navigator.onLine) {
         try {
           const res = await axios.get('https://gg-project-production.up.railway.app/endpoint/grantAccess');
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

// console.log(grantAccess)
 const InvoiceInfoU = grantAccess.filter((row)=> row.moduleName === "Invoice" && row.access.editM === true);


  const [invoice,setInvoice] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [oldInvoice,setOldInvoice] = useState([]);
  const [referenceName,setReferenceName] = useState('');
const [customerName,setCustomerName] = useState({});
const [customerName1,setCustomerName1] = useState("");
const [customerID,setCustomerID] = useState(null);
const [invoiceInfo,setInvoiceInfo] = useState([]);
const [totalCost,setTotalCost] = useState(0);
const [totalSell,setTotalSell] = useState(0);
const [rate,setRate]= useState(0);
const [invoiceNumber,setInvoiceNumber] =useState("");
const [item, SetItems] = useState([])
const [items, setItems] = useState([])
const [itemOut, setItemOut] = useState([]);
const [itemReturn, setItemReturn] = useState([]);
  const apiUrl = 'https://gg-project-production.up.railway.app/endpoint/invoice';
  useEffect(()=>{
    const fetchRate = async () => {
      if (navigator.onLine) {
        try {
          const resRate = await axios.get('https://gg-project-production.up.railway.app/endpoint/rate')
          resRate.data.data.map((row)=> setRate(row.rate))
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }else{
      }
     }
     fetchRate()
  },[])
  //Invoice
  useEffect(()=> {
  const fetchData = async ()=> {
   if (navigator.onLine) {
       try {
         const res = await axios.get(apiUrl)
         setInvoice(res.data.data);
         setLoadingData(false)
      const resItem = await axios.get('https://gg-project-production.up.railway.app/endpoint/item')   
      SetItems(resItem.data.data)
      const resItemOut = await axios.get('https://gg-project-production.up.railway.app/endpoint/itemOut')
      setItemOut(resItemOut.data.data.filter((row)=> row.reference._id === id ).map((row)=>({...row, outNumber: "O-0" + row.outNumber,type:'Item Out' })))
      const resIReturn = await axios.get('https://gg-project-production.up.railway.app/endpoint/itemReturn')
      setItemReturn(resIReturn.data.data.filter((row)=> row.reference._id === id ).map((row)=>({...row, outNumber: "R-0" + row.outNumber, type:'Item return' })))
      const resCategory = await axios.get('https://gg-project-production.up.railway.app/endpoint/expensesCategory')
         const filterData = res.data.data.filter((row)=>  row._id === id);
         setOldInvoice(filterData);
         setInvoiceInfo(
          filterData.filter((row)=> row.status === 'Sent' || row.status === 'Partially-Paid')
                    .map((row)=> ({
                      id: row._id,
                      customerName: row.customerName,
                      total:0,
                      amountPaidFC:0,
                         amountPaidUSD:0,
                         rateChange:rate,
                         totalConverted:0,
                      Ref: row.invoiceNumber,
                      balanceDue: row.balanceDue,
                      invoiceAmount: row.totalInvoice,
                      status: row.status,
                      invoiceDate:row.invoiceDate
                    }))
        )
       } catch (error) {
         console.error('Error fetching data:', error);
         setLoadingData(false)
       }
   } else {
    const offLineCustomer1 = await db.invoiceSchema.toArray();
    setInvoice(offLineCustomer1)
    const offLineItem = await db.itemSchema.toArray();
    SetItems(offLineItem)
    const filterData = offLineCustomer1.filter((row)=>  row._id === id);
    setOldInvoice(filterData);
    const outItemInfo = await db.itemOutSchema.toArray();
        setItemOut(outItemInfo.filter((row)=> row.reference._id === id ).map((row)=>({...row, outNumber: "O-0" + row.outNumber,type:'Item Out' })))
        const returnInfo = await db.itemReturn.toArray();
        setItemReturn(returnInfo.filter((row)=> row.reference._id === id ).map((row)=>({...row, outNumber: "R-0" + row.outNumber, type:'Item return' })))
    setInvoiceInfo(
      filterData.filter((row)=> row.status === 'Sent' || row.status === 'Partially-Paid')
                .map((row)=> ({
                  id: row._id,
                  customerName: row.customerName,
                  total:0,
                  amountPaidFC:0,
                  amountPaidUSD:0,
                  rateChange:rate,
                  totalConverted:0,
                  Ref: row.invoiceNumber,
                  balanceDue: row.balanceDue,
                  invoiceAmount: row.totalInvoice,
                  status: row.status,
                  invoiceDate:row.invoiceDate
                }))
    )
    setLoadingData(false)
   }
    }
    fetchData()
},[id,rate])
{/** Item out sync start */}

const related = itemOut.length>0 ? itemOut.reduce((acc, row)=>{
  row.itemsQtyArray.filter((item)=>parseFloat(item.newItemOut) > 0 ).forEach((item)=>{
    const ItemName = item.itemName.itemName;
  const Id = item.itemName._id;
  if (!acc[ItemName]) {
    acc[ItemName] = {ItemName,Id, total: 0}
  }
  acc[ItemName].total += parseFloat(item.newItemOut)
  });
   return acc
},{}):null

const relatedReturn = itemReturn.length>0 ? itemReturn.reduce((acc, row)=>{
  row.itemsQtyArray.filter((item)=>parseFloat(item.newItemOut) > 0 ).forEach((item)=>{
    const ItemName1 = item.itemName.itemName;
  const Id1 = item.itemName._id;
  if (!acc[ItemName1]) {
    acc[ItemName1] = {ItemName1,Id1, total1: 0}
  }
  acc[ItemName1].total1 += parseFloat(item.newItemOut)
  });
   return acc
},{}):null

const newAllOutReturn = related!== null? Object.values(related).map(({ItemName,Id,total})=>{
  const related1 = relatedReturn!==null? Object.values(relatedReturn).find(({ItemName1,Id1,total1})=> Id1===Id):null
  return({
    ItemName,
    Id,
    total: related1 ? total -related1.total1 :total
  })
}):null

const relatedPurchase = invoice.filter((row)=> row._id === id).map((row)=>({
  ...row,
  items: row.items.map((Item)=>{
const newAllOutReturnInfo = newAllOutReturn !== null ? newAllOutReturn.find((Item1)=>Item1.Id === Item.itemName._id ):null
 return ({
    ...Item,
    itemOut : newAllOutReturnInfo? newAllOutReturnInfo.total :0 
  })
  })
}))
const [synchro, setSynchro] = useState('false')
const handleSynced = async(e)=> {
  e.preventDefault()
  const updatePurchase = relatedPurchase.map((row)=>{
    return axios.put(`https://gg-project-production.up.railway.app/endpoint/update-invoice/${row._id}`,{
      items:row.items
    })  
   }) 
   try {
    await Promise.all(updatePurchase);
    setSynchro('true')
    handleOpen();
  }catch (error) {
    console.log('An error as occur');
  }
}

{/** Item Out sync end */}
useEffect(()=> {
  const fetchInvoice = async () => {
    if (navigator.onLine) {
      try {
      const res = await axios.get(`https://gg-project-production.up.railway.app/endpoint/get-invoice/${id}`)  
      setReferenceName(res.data.data.invoiceName);
      setCustomerName(res.data.data.customerName);
      setCustomerName1(res.data.data.customerName.customerName.replace(/\s+/g,'_').replace(/\./g,''));
      setCustomerID(res.data.data.customerName._id);
      setItems(res.data.data.items);
      setInvoiceNumber(res.data.data.invoiceNumber);
      const totalInfo = res.data.data.items.map((row)=>
        ({
          total : row.itemOut*row.itemCost
        })
        )
        const totalInfoSell = res.data.data.items.map((row)=>
        ({
          total : row.itemQty*row.itemRate
        })
        )
        const sellInfo = (res.data.data.totalInvoice)
        setTotalSell(sellInfo.toFixed(2));
        const costInfo = totalInfo.reduce((sum,row)=> sum + row.total,0)
        setTotalCost(costInfo.toFixed(2))
      } catch (error) {
      console.error('Error fetching data:', error);
      }
    } else {
      const resLocal = await db.invoiceSchema.get({_id:id})
      setReferenceName(resLocal.invoiceName);
      setCustomerName(resLocal.customerName);
      setCustomerID(resLocal.customerName._id);
      setItems(resLocal.items);
      const totalInfo = resLocal.items.map((row)=>
        ({
          total : row.itemOut*row.itemCost
        })
        )
        const totalInfoSell = resLocal.items.map((row)=>
        ({
          total : row.itemQty*row.itemRate
        })
        )
        const sellInfo = totalInfoSell.reduce((sum,row)=> sum + row.total,0)
        setTotalSell(sellInfo.toFixed(2));
        const costInfo = totalInfo.reduce((sum,row)=> sum + row.total,0)
        setTotalCost(costInfo.toFixed(2))
    }
  }
  fetchInvoice()
},[id])

const showDiscount = useMemo(()=>{
  return items.some(item=> item.itemDiscount > 0)
},[items])

const Gain = isNaN(totalSell - totalCost)?0:parseFloat(totalSell - totalCost).toFixed(2)
const [oldCredit,setOldCredit] = useState(0)
useEffect(()=>{
  const fetchCustomer = async () =>{
    
    if (customerID !== null){
       if (navigator.onLine) {
        try {
          const res = await axios.get(`https://gg-project-production.up.railway.app/endpoint/get-customer/${customerID}`)
          setOldCredit(res.data.data.credit)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    } else {
      const resLocal = await db.customerSchema.get({_id:customerID})
      setOldCredit(resLocal.credit)
    }
  }
  }
  fetchCustomer()
},[customerID])
const [estimate,setEstimate] = useState([]);
const [estimate2,setEstimate2] = useState([]);
const [purchase,setPurchase]= useState([]);
const [service,setService]= useState([]);
const [service2,setService2]= useState([]);
useEffect(()=> {
  const fetchData = async () => {
    if (navigator.onLine) {
      try {
        const [estimateResponse,purchaseResponse,maintenanceResponse] = await Promise.all([
          axios.get('https://gg-project-production.up.railway.app/endpoint/estimation'),
          axios.get('https://gg-project-production.up.railway.app/endpoint/purchase'),   
          axios.get('https://gg-project-production.up.railway.app/endpoint/maintenance')   
        ])
        const filteredEstimate1 = estimateResponse.data.data.filter((row)=> row.ReferenceName === id)
      setEstimate(filteredEstimate1);
      const filteredEstimate = purchaseResponse.data.data.filter((row)=> row.ReferenceName2 === id)
      setPurchase(filteredEstimate.map((row)=>({
        ...row,
        items: row.items.map((Item)=>({
          ...Item,
          totalCostInfo: Item.itemOut * Item.itemCost,
        })),
        infoCost: row.items.reduce((sum,ITem)=> sum + (ITem.itemOut * ITem.itemCost),0 ),
      })));
      const filteredMaintenance = maintenanceResponse.data.data.filter((row)=> row.ReferenceName === referenceName)
      const filteredMaintenance2 = maintenanceResponse.data.data.filter((row)=> row.ReferenceName === id)
      setService2(filteredMaintenance2.map((row)=>({
        ...row,
        items: row.items.map((Item)=>({
          ...Item,
          totalCostInfo: Item.itemOut * Item.itemCost,
        })),
        infoCost: row.items.reduce((sum,ITem)=> sum + (ITem.itemOut * ITem.itemCost),0 ),
      })))
      setService(filteredMaintenance.map((row)=>({
        ...row,
        items: row.items.map((Item)=>({
          ...Item,
          totalCostInfo: Item.itemOut * Item.itemCost,
        })),
        infoCost: row.items.reduce((sum,ITem)=> sum + (ITem.itemOut * ITem.itemCost),0 ),
      })));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else {
      const offLineEstimate = await db.estimateSchema.toArray();
      const filteredEstimate1 = offLineEstimate.filter((row)=> row.ReferenceName === id)
      setEstimate(filteredEstimate1);
      const offLinePurchase = await db.purchaseSchema.toArray();
      const filteredEstimate = offLinePurchase.filter((row)=> row.ReferenceName2 === id)
      setPurchase(filteredEstimate);
      const offLineMaintenance = await db.maintenanceSchema.toArray();
      const filteredMaintenance = offLineMaintenance.filter((row)=> row.ReferenceName === referenceName)
      const filteredMaintenance2 = offLineMaintenance.filter((row)=> row.ReferenceName === id)
      setService2(filteredMaintenance2)
      setService(filteredMaintenance);
    }
  }
  fetchData()
},[id,referenceName])
useEffect(()=> {
const fetchInvoice2 = async () => {
  if (purchase.length > 0) {
if (navigator.onLine) {
      try {
        const res = await axios.get('https://gg-project-production.up.railway.app/endpoint/estimation')
        const filteredInvoice = res.data.data.filter((row)=> purchase?purchase.find((Item)=> row._id === Item.ReferenceName):'')
        setEstimate2(filteredInvoice);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
} else {
  const offLineEstimate = await db.estimateSchema.toArray();
  const filteredInvoice = offLineEstimate.filter((row)=> purchase?purchase.find((Item)=> row._id === Item.ReferenceName):'')
  setEstimate2(filteredInvoice);
}
  }
  }
  fetchInvoice2()
},[purchase])
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
  documentTitle: 'INV-00' + invoiceNumber + ' For ' + customerName1,
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
const [show1, setShow1] = useState(1);
  const handleShow1 = (e) =>{
      setShow1(e);
      setAnchorEl(null);
  }
const [reason,setReason]= useState("");
const [Comments1,setComments]= useState([]);
const [notification,setNotification]= useState([]);
const [relatedPaymentInfo,setRelatedPaymentInfo]= useState([])
const [totalAmountPaidInvoice,setTotalAmountPaidInvoice]=useState([])

useEffect(()=> {
  const fetchComment = async () => {
if (navigator.onLine) {
      try {
        const res = await axios.get('https://gg-project-production.up.railway.app/endpoint/comment')
        const resp = res.data.data.filter((row)=> row.CommentInfo.idInfo === id)
                     setComments(resp.reverse())
        const resPayment = await axios.get('https://gg-project-production.up.railway.app/endpoint/payment')
        const formatDate = resPayment.data.data.map(row => ({
          ...row,
          TotalAmount : row.TotalAmount?.filter((Item)=> Item.id === id)
        })).filter(row => row.TotalAmount?.length > 0)
        setRelatedPaymentInfo(formatDate)
        setTotalAmountPaidInvoice(formatDate.map((row)=>({
          totalAP:row.TotalAmount?.filter((Item)=> Item.id === id).reduce((sum,item)=> sum + parseFloat(item.total),0)
        })))
        const resNotification = await axios.get('https://gg-project-production.up.railway.app/endpoint/notification')
        setNotification(resNotification.data.data.filter((row)=> row.idInfo === id))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
} else {
  const offLinePayment= await db.paymentSchema.toArray();
  const formatDate = offLinePayment.map(row => ({
    ...row,
    TotalAmount : row.TotalAmount?.filter((Item)=> Item.id === id)
  })).filter(row => row.TotalAmount?.length > 0)
  setRelatedPaymentInfo(formatDate)
}
  }
  fetchComment()
   },[id])
   const TotalAPaidInfo = totalAmountPaidInvoice?.reduce((sum,item)=> sum + parseFloat(item.totalAP),0)

   const InvoiceToUpdate = invoice?.filter((row)=> row._id === id).map((row)=>({
    ...row,
    total:TotalAPaidInfo,
    balanceDue: row.totalInvoice - TotalAPaidInfo
   }))

   const handleSubmitUpdateInvoice =async (e)=>{
    e.preventDefault();
   for (const InvoiceToUpdates of InvoiceToUpdate) {
    try{
      const res = await axios.put(`https://gg-project-production.up.railway.app/endpoint/update-invoice/${InvoiceToUpdates._id}`,{
        balanceDue: InvoiceToUpdates.balanceDue,
        total: InvoiceToUpdates.total
      })
      if (res) {
        handleOpen();
      }
    }catch(error){
      handleError();
    }
   }
  }

const CommentInfo = 
  {
    idInfo: id,
    person: user.data.userName ,
    reason
  }
{/** Payment Modal Start */}
const [paymentDate,setPaymentDate] =useState(()=>{
  const date = new Date()
  return date
});
const [paymentNumber,setPaymentNumber] = useState(0);
useEffect(()=>{
  const fetchlastNumber = async () => {
   if (navigator.onLine) {
     try {
       const res = await axios.get('https://gg-project-production.up.railway.app/endpoint/get-last-saved-payment')
       setPaymentNumber(parseInt(res.data.paymentNumber) + 1)
     } catch (error) {
       console.error('Error fetching data:', error);
     }
   }else{
        const offLineCustomer1 = await db.paymentSchema.toArray();
        const latest = offLineCustomer1.reduce((max, row)=> row.paymentNumber > max.paymentNumber? row : max,offLineCustomer1[0] )
        setPaymentNumber(parseInt(latest.paymentNumber) + 1)
   }
  }
  fetchlastNumber()
              },[])
const [description,setDescription] = useState('');
const [referenceNumber,setReferenceNumber] = useState([]);
const dateComment1 = dayjs(Date.now()).format('DD/MM/YYYY')
const Create = {person: user.data.userName+ ' CREATED ',
                dateComment:dateComment1
             } 
             const handleChangeCEO = (idRow, key, value) => {
              const list = [...invoiceInfo]
              const i = invoiceInfo.findIndex(Item=> Item.id === idRow)
              list[i][key] = value;
              list[i]['totalConverted'] = Math.round(( list[i]['amountPaidFC']/list[i]['rateChange'])*100)/100;
              list[i]['total'] = Math.round(( parseFloat(list[i]['totalConverted'])+parseFloat(list[i]['amountPaidUSD']))*100)/100;
              if ( list[i]['total'] > list[i]['balanceDue']) {
                list[i]['amountPaidFC'] = 0
                list[i]['amountPaidUSD'] = 0
                list[i]['total'] = 0
              }
              setInvoiceInfo(list)
              }
              const handlePayment = (e) => {
                e.preventDefault();
                let remaining = oldCredit;
                 const totalInvoiceExp = invoiceInfo.map((row)=> {
                    const amountPaidUSD = Math.min(remaining,row.balanceDue).toFixed(2);
                     remaining -= amountPaidUSD
                     return {...row, amountPaidUSD, total:amountPaidUSD}
                })
                setInvoiceInfo(totalInvoiceExp)
              }
              const TotalAmount = invoiceInfo.length > 0? invoiceInfo.filter((row)=> row.total !==0):null
              const balanceDueInfo = invoiceInfo.length > 0 ?invoiceInfo.reduce((sum,row)=> sum + parseFloat(row.balanceDue),0) :0
              const PaymentInfo = invoiceInfo.length > 0 ?invoiceInfo.reduce((sum,row)=> sum + parseFloat(row.total),0) :0
              const PaymentReceivedFC = invoiceInfo.length > 0 ?invoiceInfo.reduce((sum,row)=> sum + parseFloat(row.amountPaidFC),0) :0
              const PaymentReceivedUSD = invoiceInfo.length > 0 ?invoiceInfo.reduce((sum,row)=> sum + parseFloat(row.amountPaidUSD),0) :0
              const remainingInvoice = balanceDueInfo - PaymentInfo
              const remaining = Math.round((parseFloat(oldCredit) - PaymentInfo)*100)/100
              
const [openPayment,setOpenPayment] = useState(false);

const handleOpenPayment = () => {
  setOpenPayment(true)
}
const handleClosePayment = () => {
  setOpenPayment(false)
  setReferenceNumber(null);
  setInvoiceInfo([])
}
{/** Payment End */}

  {/** Loading Start */}

  const [loading,setLoading]= useState(false);
  const [loadingOpenModal,setLoadingOpenModal] = useState(false);
  const [loadingOpenPayment,setLoadingOpenPayment] = useState(false);
  const [ErrorOpenModal,setErrorOpenModal] = useState(false);

  const handleOpen = () => {

    setLoadingOpenModal(true);
    setLoading(true);

    setTimeout(()=> {
      setLoading(false);
    }, 500)

  }
  const handleOpenPaymentModal = () => {
    setLoadingOpenPayment(true);
    setLoading(true);
    setTimeout(()=> {
      setLoading(false);
    }, 500)
  }
  const handlePaymentClose = () => {
    window.location.reload();
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
  {/** Payment Submit start */}
  const handleUpdateCredit = async () => {
    const data = {
      credit: remaining
    }
    if (navigator.onLine) {
      try {
       await axios.put(`https://gg-project-production.up.railway.app/endpoint/update-customer/${customerID}`,data) 
       await db.customerSchema.update(customerID,{...data,updateS:true})
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else {
      await db.customerSchema.update(customerID,{...data,updateS:false})
    }
  }
  const handleUpdateInvoice = async () => {
    const invoiceUpdate = invoiceInfo.length > 0? invoiceInfo.map((row)=>{
      const correspondingId = oldInvoice.find((row2)=> row2._id === row.id)
      const difference = correspondingId? correspondingId.balanceDue - row.total :row.balanceDue;
      const total = correspondingId? parseFloat(correspondingId.total) + parseFloat(row.total) :row.balanceDue;
      if (difference === 0) {
        row.status = 'Paid'
      } else if (difference !== row.balanceDue) {
       row.status = 'Partially-Paid'
      }else {
        row.status = 'Sent'
      }
      return {
        id: row.id, 
        number:correspondingId.invoiceNumber,
        data: { 
          total , 
          balanceDue: difference, 
          status:row.status
        }
      }
    }):null
    if (navigator.onLine) {
      const updateRequest = invoiceUpdate!== null ? 
      invoiceUpdate.filter((row)=> row.data.total !== 0).map(({id, data})=>{
        return axios.put(`https://gg-project-production.up.railway.app/endpoint/update-invoice/${id}`,data)
       }):null
     if (updateRequest !== null) {
        try {
          await Promise.all(updateRequest);
          await Promise.all(invoiceUpdate.filter((row)=> row.data.total !== 0).map( async({number,data})=>{
           await db.invoiceSchema.update(number,{...data,updateS:true})
         }))
        }catch (error) {
         console.log('An error as occur');
       }
     }
    } else {
     await Promise.all(invoiceUpdate.filter((row)=> row.data.total !== 0).map( async ({number,data})=>{
       await db.invoiceSchema.update(number,{...data,updateS:false})
     }))
    }
  }
  const [update,setUpdate] = useState('')
  const handleSubmitUpdateStatus =  async (e) => {
    e.preventDefault();
    const data = {
      status:'Sent'
    };
    try {
      const res = await  axios.put(`https://gg-project-production.up.railway.app/endpoint/update-invoice/${id}`,data)
      if (res) {
        setUpdate('true')
        handleOpenPaymentModal();
      }
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      id:v4(),
      customerName,
      bankCharge:0,
      amount:PaymentInfo,
      modes: 'Credit-Account',
      paymentDate,
      PaymentReceivedFC,
      PaymentReceivedUSD,
      paymentNumber,
      referenceNumber,
      description,
      TotalAmount,
      remaining:0,synced: false
    }; 
   if (navigator.onLine) {
     try{
       const res = await axios.post('https://gg-project-production.up.railway.app/endpoint/create-payment',data); 
       if (res) {
         await db.paymentSchema.add({...res.data.data,_id:res.data.data._id, synced: true })
         handleUpdateInvoice();
         handleUpdateCredit();
         handleOpenPaymentModal();
       }
     }catch(error){
       if (error) {
         handleError();
       }
     }
   } else {
    await db.paymentSchema.add(data)
    handleUpdateInvoice();
    handleUpdateCredit();
    handleOpenPaymentModal();
   }
  };
  
  {/** Payment Submit end */}
  const dateComment = dayjs(Date.now());
 
  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    const data = {
      CommentInfo,
      dateComment
    };
    try {
      const res = await axios.post('https://gg-project-production.up.railway.app/endpoint/create-comment/',data)
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
  const [showRef,setShowRef] = useState(1)
  const handleShowRef = (e) =>{
    setShowRef(e);
    setAnchorEl(null);
} 
const [value3, setValue3] = React.useState('1');
useEffect(()=>{
 const result =localStorage.getItem('TabInvoiceView')
 if (result) {
   setValue3(result)
 }
},[])
const handleChange3 = (event, newValue) => {
 const changeValue = newValue
  setValue3(changeValue);
  localStorage.setItem('TabInvoiceView',changeValue)
};
{/** Summary start */}

    const data1 = [
      {
        "id":1,
        "label":"Cost",
        "value":totalCost,
      },
      {
        "id":2,
        "label":"Sell",
        "value":totalSell,
      },
      {
        "id":3,
        "label":"Sell",
        "value":Gain,
      }
    ];
    const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
{/** Summary end */}

const [sideBar, setSideBar] = React.useState(true);
const toggleDrawer = () => {
 setSideBar(!sideBar);
};
const data0 = invoice.filter(row=> row._id === id).map((row)=>({
  number: 'INV-00'+row.invoiceNumber,
  invoiceDate: dayjs(row.invoiceDate).format('DD/MM/YYYY'),
  customerName: row.customerName.customerName,
  Address: row.customerName.billingAddress.toUpperCase() + row.customerName.billingCity.toUpperCase(),
  status: row.status,
 }))
 const data2 = invoice.filter(row=> row._id === id).map((row)=>({
  no: '',
  invoiceDate: dayjs(row.invoiceDueDate).format('DD/MM/YYYY'),
  invoiceSubject: row.invoiceSubject,
  invoiceDefect: row.invoiceDefect
 }))
 const data3 = invoice.filter(row=> row._id === id).map((row)=>({
  actionTaken: 'Action '+row.actionTaken,
 }))
 const data4 = invoice.filter(row=> row._id === id).map((row)=>({
  noteInfo: 'Note ' + row.noteInfo,
 }))
 const data5 = items.map((Item,i)=>{
  return({
  no: i+1,
  item:  Item.itemName.itemName,
  itemDescription: Item.itemDescription,
  itemQty:  Item.itemQty,
  itemRate:  '$'+Item.itemRate,
  itemDiscount:  '%'+Item.itemDiscount,
  itemAmount:  '$'+Item.itemAmount
})})
 const data6 = invoice.filter(row=> row._id === id).map((row,i)=>{
  return({
  no: '',
  item:  "",
  itemDescription: "",
  itemQty:  "",
  itemRate:  "",
  itemDiscount:  "Sub Total (Tax Inclusive)",
  itemAmount:  '$'+row.subTotal
})})
 const data7 = invoice.filter(row=> row._id === id).map((row,i)=>{
  return({
  no: '',
  item:  "",
  itemDescription: "",
  itemQty:  "",
  itemRate:  "",
  itemDiscount:  "Shipping",
  itemAmount:  '$'+row.shipping
})})
 const data8 = invoice.filter(row=> row._id === id).map((row,i)=>{
  return({
  no: '',
  item:  "",
  itemDescription: "",
  itemQty:  "",
  itemRate:  "",
  itemDiscount:  row.adjustment,
  itemAmount:  '$'+row.adjustmentNumber
})})
 const data9 = invoice.filter(row=> row._id === id).map((row,i)=>{
  return({
  no: '',
  item:  "",
  itemDescription: "",
  itemQty:  "",
  itemRate:  "",
  itemDiscount:  "Total",
  itemAmount:  '$'+row.totalInvoice
})})
 const data10= invoice.filter(row=> row._id === id).map((row,i)=>{
  return({
  no: '',
  item:  "",
  itemDescription: "",
  itemQty:  "",
  itemRate:  "",
  itemDiscount:  "Amount Paid",
  itemAmount:  '$'+row.total
})})
 const data11= invoice.filter(row=> row._id === id).map((row,i)=>{
  return({
  no: '',
  item:  "",
  itemDescription: "",
  itemQty:  "",
  itemRate:  "",
  itemDiscount:  "Balance Due",
  itemAmount:  '$'+row.balanceDue
})})
 const data12= invoice.filter(row=> row._id === id).map((row,i)=>{
  return({
  no: '',
  item:  "",
  itemDescription: "",
  itemQty:  "",
  itemRate:  "",
  itemDiscount:  "Total In Words",
  itemAmount:  '$'+row.totalW
})})

 const exportToExcel = async () => {
  const workbook = new ExcelJS.Workbook();
  const workSheet = workbook.addWorksheet('Sheet1');
  const columns1 = [
    {header:"#", key:'number',width: 20 },
    {header:"Date", key:'invoiceDate',width: 20 },
    {header:"Customer", key:'customerName',width: 20 },
    {header:"Address", key:'Address',width: 20},
    {header:"Status", key:'status',width: 20},
  ];
  const columns2 = [
    {header:"", key:'no',width: 20},
    {header:"Due Date", key:'invoiceDate',width: 20},
    {header:"Subject", key:'invoiceSubject',width: 20},
    {header:"Defect", key:'invoiceDefect',width: 20},
  ];
  const columns5 = [
    { header:"#", key:'no',width: 20},
    { header:"Item", key:'item',width: 20},
    {header:"Item Description", key:'itemDescription',width: 20},
    {header:"Qty", key:'itemQty',width: 20},
    { header:"Rate", key:'itemRate',width: 20},
    {header:"Discount", key:'itemDiscount',width: 20},
    {header:"Amount", key:'itemAmount',width: 20}
  ];

  workSheet.addRow(columns1.map(col=> col.header));
  data0.forEach(item=>{
    workSheet.addRow([item.number,item.invoiceDate,item.customerName,item.Address,item.status])
  }); 
  workSheet.addRow([]);
  workSheet.addRow(columns2.map(col=> col.header))
  data2.forEach(item=>{
    workSheet.addRow([item.no,item.invoiceDate,item.invoiceSubject,item.invoiceDefect])
  }); 
  workSheet.addRow([]);
  workSheet.mergeCells('A8,E8')
  data3.forEach(item=>{
    workSheet.addRow([item.actionTaken])
  }); 
  workSheet.addRow([]);
  workSheet.mergeCells('A10,E10')
  data4.forEach(item=>{
    workSheet.addRow([item.noteInfo])
  }); 
  workSheet.addRow([]);
  workSheet.addRow(['Item']);
  workSheet.addRow(columns5.map(col=> col.header))
  data5.forEach(item=>{
    workSheet.addRow([item.no,item.item,item.itemDescription,item.itemQty,item.itemRate,item.itemDiscount,item.itemAmount])
  }); 
  data6.forEach(item=>{
    workSheet.addRow([item.no,item.item,item.itemDescription,item.itemQty,item.itemRate,item.itemDiscount,item.itemAmount])
  }); 
  data7.forEach(item=>{
    workSheet.addRow([item.no,item.item,item.itemDescription,item.itemQty,item.itemRate,item.itemDiscount,item.itemAmount])
  }); 
  data8.forEach(item=>{
    workSheet.addRow([item.no,item.item,item.itemDescription,item.itemQty,item.itemRate,item.itemDiscount,item.itemAmount])
  }); 
  data9.forEach(item=>{
    workSheet.addRow([item.no,item.item,item.itemDescription,item.itemQty,item.itemRate,item.itemDiscount,item.itemAmount])
  }); 
  data10.forEach(item=>{
    workSheet.addRow([item.no,item.item,item.itemDescription,item.itemQty,item.itemRate,item.itemDiscount,item.itemAmount])
  }); 
  data11.forEach(item=>{
    workSheet.addRow([item.no,item.item,item.itemDescription,item.itemQty,item.itemRate,item.itemDiscount,item.itemAmount])
  }); 
  data12.forEach(item=>{
    workSheet.addRow([item.no,item.item,item.itemDescription,item.itemQty,item.itemRate,item.itemDiscount,item.itemAmount])
  }); 

  const buffer = await workbook.xlsx.writeBuffer();
  const bold = new Blob([buffer], {type:'application/octet-stream'});
  saveAs(bold,`${'INV-00'+invoiceNumber + ' for ' + customerName1}.xlsx`)
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
              Invoice Information
            </Typography>
            <IconButton onClick={() => navigate('/InvoiceViewAdmin')}>
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
      loadingData?<div >
        <div style={{position:'relative', top:'120px'}}>
          <Loader/>
        </div>
      </div>:(
  <div >
<Grid container spacing={2}>
{show1===1 ?
    (<Grid item xs={3} >
    <InvoiceInformation onId={id} />
    </Grid>):''}
    <Grid item xs={9}>
    <div className='itemInfoContainer2'>
        <div style={{width:'100%', background:'white'}}>
        {invoice?.filter(row=> row._id === id)?.map((row)=>(
       <div key={row._id}>
        <header style={{display:'block', alignItems:'center', justifyContent:'space-between'}}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <div style={{marginBottom:'5px'}}>
                                 <Typography sx={{fontWeight:'bold',fontSize:'20px'}}>{row.customerName.customerName.toUpperCase()} | {row.invoiceName}</Typography>
              </div>
              <div>
               <section>
               <Typography
        color={
          row.status === "Draft"
          ? "gray":row.status === "Sent"
          ? "blue":
          row.status === "Decline"
          ? "red":
          row.status === "Pending"
          ? "#801313":
          row.status === "Paid"
          ? "#4caf50":
          row.status === "Partially-Paid"
          ? "#fb8c00":"black"
       }
        >
    {row.status}
        </Typography> 
              </section> 
        
              </div>
              <div>
              <Button
             aria-controls={open ? 'demo-customized-menu' : undefined}
             aria-haspopup="true"
             aria-expanded={open ? 'true' : undefined}
             variant="contained"
             disableElevation
             onClick={handleClick}
             endIcon={<KeyboardArrowDown />}
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
                <MenuItem > 
                                      <NavLink to={`/InvoiceFormUpdate/${row._id}`} className='LinkName' style={{display:'flex',gap:'20px', alignItems:'center', color:'gray'}}>
                                      <EditIcon/>
                                      <Typography>Edit</Typography>
                                      </NavLink>
                </MenuItem>
                {
                  row.status !== "Paid" && row.status !== "Partially-Paid" && (
                    <MenuItem disabled={user.data.role !== 'CEO'} >{row.status !== "Sent" && "Paid" ?
                    <p onClick={handleSubmitUpdateStatus} style={{display:'flex',gap:'20px', alignItems:'center', color:'gray'}}><Send/><span>Click To Send</span></p>
                    :row.status}</MenuItem>
                  )
                }
                <Divider/>
                <MenuItem>
                <NavLink to={`/InvoiceFormClone/${row._id}`} className='LinkName' style={{display:'flex',gap:'20px', alignItems:'center', color:'gray'}}>
                                      <FileCopy/>
                                      <Typography>Clone</Typography>
           </NavLink>
                </MenuItem>
                <Divider/>
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
                <Divider/>
                <MenuItem>
                {
                    row.invoicePurchase === '' && (
              <NavLink to={`/MakePurchase/${row._id}`} className='LinkName' style={{color:'gray'}}>
              <span>Convert To Purchase</span>
              </NavLink> 
                    )
                  }
                  {
                        row.invoicePurchase === 'Make'  && (
                          <span style={{color:'gray'}} onClick={handleCloseMenu}> Already Converted</span>
                        )
  
                  }
                  {
                        row.invoicePurchase === 'Purchased' && (
                          <span style={{color:'gray'}} onClick={handleCloseMenu}> Already Purchase</span>
                        )
  
                  }
                </MenuItem>
              </Menu>
              </div>
                  </div>
     </header>
     {/* Start Invoice */}
     <Box sx={{ width: '100%', typography: 'body1'}}>
      <TabContext value={value3} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        {
                    showRef === 1?(
                      <div>
                     <div style={{display:'flex', gap:'10px', alignItems:'center', marginBottom:'5px'}}>
       <p>
        <span style={{fontWeight:'bold'}}>Reference </span>
        {
            purchase?purchase.map((row)=>(
              <span key={row._id}> {row.purchaseName}, {row.projectName.projectName}</span>
            )):null
          }
             {
            estimate2?estimate2.map((row)=>(
              <span key={row._id}> | {row.estimateName}</span>
            )):null
          }
             {
            estimate?estimate.map((row)=>(
              <span key={row._id}> | {row.estimateName}</span>
            )):null
          }
             {
            service2?service2.map((row)=>(
              <span key={row._id}>{row.serviceName}</span>
            )):null
          }
             {
            service?service.map((row)=>(
              <span key={row._id}>{row.serviceName}</span>
            )):null
          }
       </p>
       {
        totalAmountPaidInvoice.length > 0 && TotalAPaidInfo !== 0 ?  <Button disabled={user.data.role !== 'CEO'} onClick={handleSubmitUpdateInvoice}> Update</Button>:''
       }
      
      </div> 
      <div style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
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
          <Tab 
                label="Payment-Received" 
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
                 />
                {
             user.data.role === 'CEO' &&(
              <Tab label="Summary" value="3" 
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
             )
                 }
          </TabList>
          <div style={{lineHeight:'5px'}}>
         { 
        row.status === 'Partially-Paid' || row.status === "Sent" ?
        <div>
          {
           parseInt(oldCredit) > 0 ? (
            <p style={{color:'#D62828'}}>Customer has credit, Do you want to use it ? <span style={{ cursor:'pointer',color:'#003049'}} onClick={handleOpenPayment}> Click here</span></p>
           ):''
          }
        </div>
          
          :null
        }
      </div>
      </div>
                      </div>
                    ):(
                      <section style={{marginTop:'10px',display:'flex', justifyContent:'space-between',alignItems:'center'}}>
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
                                <td style={{textAlign:'left', border:'1px solid #DDD'}}> Amount  <span data-prefix>$ </span> {row.totalInvoice}</td>
                                <td style={{textAlign:'center', border:'1px solid #DDD'}}>
                                <BlackTooltip>
                                      <span>
                                        <IconButton >
                                        <NavLink to={`/EstimateViewAdminAll/${row._id}`} className='LinkName'>
                                        <span style={{fontSize:'12px'}}>View</span>
                                        </NavLink>
                                        </IconButton>
                                      </span>
                                  </BlackTooltip>    
                                </td>
                              </tr>
                            ))
                            :null
                          }
                        </tbody>
                        <tbody>
                          {
                            estimate2?
                            estimate2.map((row)=>(
                              <tr key={row._id}>
                                <td style={{textAlign:'left', border:'1px solid #DDD'}}> Date {dayjs(row.estimateDate).format('DD/MM/YYYY')}</td>
                                <td style={{textAlign:'left', border:'1px solid #DDD'}}> Estimate # {row.estimateName}</td>
                                <td style={{textAlign:'left', border:'1px solid #DDD'}}> Amount  <span data-prefix>$ </span> {row.totalInvoice}</td>
                                <td style={{textAlign:'center', border:'1px solid #DDD'}}>
                                <BlackTooltip>
                                      <span>
                                        <IconButton >
                                        <NavLink to={`/EstimateViewAdminAll/${row._id}`} className='LinkName'>
                                        <span style={{fontSize:'12px'}}>View</span>
                                        </NavLink>
                                        </IconButton>
                                      </span>
                                  </BlackTooltip>    
                                </td>
                              </tr>
                            ))
                            :null
                          }
                        </tbody>
                        <tbody>
                          {
                            service?
                            service.map((row)=>(
                              <tr key={row._id}>
                                <td style={{textAlign:'left', border:'1px solid #DDD'}}> Date {dayjs(row.visitDate).format('DD/MM/YYYY')}</td>
                                <td style={{textAlign:'left', border:'1px solid #DDD'}}> Service # {row.serviceName}</td>
                                <td style={{textAlign:'left', border:'1px solid #DDD'}}> Amount  <span data-prefix>$ </span> {row.totalInvoice}</td>
                                <td style={{textAlign:'center', border:'1px solid #DDD'}}>
                                <BlackTooltip>
                                      <span>
                                        <IconButton >
                                        <NavLink to={`/MaintenanceViewInformation/${row._id}`} className='LinkName'>
                                        <span style={{fontSize:'12px'}}>View</span>
                                        </NavLink>
                                        </IconButton>
                                      </span>
                                  </BlackTooltip>    
                                </td>
                              </tr>
                            ))
                            :null
                          }
                          {
                            service2?
                            service2.map((row)=>(
                              <tr key={row._id}>
                                <td style={{textAlign:'left', border:'1px solid #DDD'}}> Date {dayjs(row.visitDate).format('DD/MM/YYYY')}</td>
                                <td style={{textAlign:'left', border:'1px solid #DDD'}}> Service # {row.serviceName}</td>
                                <td style={{textAlign:'left', border:'1px solid #DDD'}}> Amount  <span data-prefix>$ </span> {row.totalInvoice}</td>
                                <td style={{textAlign:'center', border:'1px solid #DDD'}}>
                                <BlackTooltip>
                                      <span>
                                        <IconButton >
                                        <NavLink to={`/MaintenanceViewInformation/${row._id}`} className='LinkName'>
                                        <span style={{fontSize:'12px'}}>View</span>
                                        </NavLink>
                                        </IconButton>
                                      </span>
                                  </BlackTooltip>    
                                </td>
                              </tr>
                            ))
                            :null
                          }
                        </tbody>
                        <tbody>
                          {
                            purchase?
                            purchase.map((row)=>(
                              <tr key={row._id}>
                                <td style={{textAlign:'left', border:'1px solid #DDD'}}> Date {dayjs(row.purchaseDate).format('DD/MM/YYYY')}</td>
                                <td style={{textAlign:'left', border:'1px solid #DDD'}}> Purchase # {row.purchaseName}</td>
                                <td style={{textAlign:'left', border:'1px solid #DDD'}}> Purchase Cost  <span data-prefix>$ </span> {row.infoCost}</td>
                                <td style={{textAlign:'center', border:'1px solid #DDD'}}>
                                <BlackTooltip>
                                      <span>
                                        <IconButton >
                                        <NavLink to={`/PurchasesViewAdminAll/${row._id}`} className='LinkName'>
                                        <span style={{fontSize:'12px'}}>View</span>
                                        </NavLink>
                                        </IconButton>
                                      </span>
                                  </BlackTooltip>    
                                </td>
                              </tr>
                            ))
                            :null
                          }
                        </tbody>
                      </table>
                   )
                  } 
                     <BlackTooltip title="Close" placement='bottom'>
        <IconButton onClick={() => handleShowRef(1)} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </BlackTooltip> 
                  </section>
                    )
                  }
        </Box>
        <TabPanel value="1" sx={{height:'470px', overflow:'hidden',overflowY:'scroll'}}>
        <Box hidden>
     <table ref={componentRef} className='invoicedetails'>
      <thead>
        <tr>
          <th ></th>
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
                  <p className='invoicehr'>INVOICE</p>
<div className='content' style={{marginBottom:'20px',position:'relative'}}>
  <section style={{display:'flex',justifyContent:'space-between',marginBottom:'5px'}}>
     <address style={{position:'relative',lineHeight:1.35,width:'60%'}}>
           <p >
                 <span style={{fontSize:'10px'}}>Bill To</span> <br/>
           <span style={{fontWeight:'bold', fontSize:'15px'}}>{row.customerName.customerName.toUpperCase()}</span>
                <br/>
                <span style={{fontSize:'10px'}}>{row.customerName.billingAddress.toUpperCase()},{row.customerName.billingCity.toUpperCase()}</span>
                </p> 
              
            </address>        
            
            <table className="firstTable" style={{position:'relative',fontSize:'70%',left:'83px',marginBottom:'10px',pageBreakInside:'auto'}}>
              <tbody>             
                <tr>
                <th style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Invoice #</span></th>
                <td style={{backgroundColor:'white',border:'none'}}><span >INV-00{row.invoiceNumber}</span></td>
              </tr>
              <tr>
                <th style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Date</span></th>
                <td style={{backgroundColor:'white',border:'none'}}><span >{dayjs(row.invoiceDate).format('DD/MM/YYYY')}</span></td>
              </tr>
              <tr>
                <th style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Due Date</span></th>
                <td style={{backgroundColor:'white',border:'none'}}><span >{dayjs(row.invoiceDueDate).format('DD/MM/YYYY')}</span></td>
              </tr>
          {row.invoiceSubject!==undefined && row.invoiceSubject===""?<tr></tr>:    <tr>
                <th style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Subject</span></th>
                <td style={{backgroundColor:'white',border:'none',width:'400px'}}><span>{row.invoiceSubject!==undefined?row.invoiceSubject.toUpperCase():''}</span></td>
              </tr>}
             {row.invoiceDefect!==undefined && row.invoiceDefect===""?<tr></tr>: <tr>
                <th style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Defect</span></th>
                <td style={{backgroundColor:'white',border:'none'}}><span>{row.invoiceDefect!==undefined?row.invoiceDefect.toUpperCase():''}</span></td>
              </tr>}
              { 
              row.actionTaken !== undefined ?
                <tr>
                <th style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Action</span></th>
                <td style={{backgroundColor:'white',border:'none'}}><span>{row.actionTaken!==undefined?row.actionTaken.toUpperCase():''}</span></td>
              </tr>:null}
              </tbody>
            </table>
      </section>
    <section style={{}}>
      {
        row.noteInfo !== undefined?
        <table style={{position:'relative',fontSize:'70%',float:'left', left:'0', width:'50%',marginBottom:'5px'}}>
          <tbody>
            <tr>
          <th>Note</th>
          <td>{row.noteInfo!==undefined?row.noteInfo:''}</td>
            </tr>
          </tbody>
        </table>
         :''
      }
       <table className="secondTable" style={{fontSize:'70%',marginBottom:'5px',border:'1px solid #DDD'}}>
              <thead>
                <tr>
                  <th style={{textAlign:'center',border:'1px solid #DDD',backgroundColor:'#e8f7fe'}}>#</th>
                  <th style={{textAlign:'center', border:'1px solid #DDD',backgroundColor:'#e8f7fe'}}>Item</th>
                  <th style={{border:'1px solid #DDD',backgroundColor:'#e8f7fe'}}>Description</th>
                  <th style={{textAlign:'right',border:'1px solid #DDD',backgroundColor:'#e8f7fe'}}>Qty</th>
                  <th style={{textAlign:'right', border:'1px solid #DDD',backgroundColor:'#e8f7fe'}}>Rate</th>
                  {showDiscount && <th style={{textAlign:'right', border:'1px solid #DDD',backgroundColor:'#e8f7fe'}}>Discount</th>}
                  <th style={{textAlign:'right', border:'1px solid #DDD',backgroundColor:'#e8f7fe'}}>Total</th>
                </tr>
              </thead>
              <tbody>
              {row.items?.map((Item,i)=>
          {
            const relatedUnit = item.find((Item1)=> Item1._id === Item.itemName._id)
            return     (
            <tr key={Item.idRow} > 
            {
              Item.itemDescription !== 'Labor Fees' ?(
                <>
   {
           Item.newDescription !== undefined?
           (
            <>
         <td style={{textAlign:'center'}}><span>{i + 1}</span></td>
            <td style={{textAlign:'center',border:'1px solid #DDD'}} colSpan={6}>{Item.newDescription}</td>
            </>
           )
           :
           (
            <>
               <td style={{textAlign:'center',width:'30px'}}><span>{i + 1}</span></td>
                <td style={{width:'200px',borderLeft:'1px solid #DDD'}} ><span hidden = {Item.itemName?Item.itemName.itemName === 'empty':''}>{Item.itemName.itemName.toUpperCase()}</span></td>
                <td style={{textAlign:'left',width:'250px',borderLeft:'1px solid #DDD'}}><span>{Item.itemDescription.toUpperCase()}</span></td>
                <td style={{textAlign:'right',width:'30px',borderLeft:'1px solid #DDD'}}><span>{Item.itemQty} {relatedUnit !==undefined? relatedUnit.unit.toUpperCase():''}</span></td>
                <td style={{textAlign:'right',width:'80px',borderLeft:'1px solid #DDD'}}><span data-prefix>$</span><span>{Item.itemRate}</span></td>
                {showDiscount && <td style={{textAlign:'right',borderLeft:'1px solid #DDD'}}><span data-prefix>%</span><span>{Item.itemDiscount}</span></td>}
                <td style={{textAlign:'right',width:'100px',borderLeft:'1px solid #DDD'}}><span data-prefix>$</span><span>{Item.itemAmount?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
            </>
           )
            }
                </>
              ):<>
                <td style={{textAlign:'center',borderLeft:'1px solid #DDD'}}><span>{i + 1}</span></td>
                <td style={{textAlign:'left',border:'1px solid #DDD'}} colSpan={2}><span>{Item.itemDescription}</span></td>
                <td style={{textAlign:'right',width:'30px',border:'1px solid #DDD'}}><span>{Item.itemQty} {relatedUnit !==undefined? relatedUnit.unit.toUpperCase():''}</span></td>
                <td style={{textAlign:'right',width:'80px',border:'1px solid #DDD'}}><span data-prefix>$</span><span>{Item.itemRate}</span></td>
                {showDiscount && <td style={{textAlign:'right',border:'1px solid #DDD'}}><span data-prefix>%</span><span>{Item.itemDiscount}</span></td>}
                <td style={{textAlign:'right',border:'1px solid #DDD'}}><span data-prefix>$</span><span>{Item.itemAmount?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
              </>
            }
            </tr>
      )}
      )}
              </tbody>
              </table>
              <table style={{position:'relative',fontSize:'70%',pageBreakInside:'avoid',marginBottom:'5px'}}>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
              <tbody>
                <tr>
                  <td style={{textAlign:'left', width:'200px'}} colSpan={3}>{row.note}</td>
                  <td style={{textAlign:'right',borderBottom:'1px solid #DDD'}} colSpan={2}>
               <span>
               Sub Total
               <br/>
             <span style={{color:'gray'}}>(Tax Inclusive)</span>
               </span>
                  </td>
                  <td style={{textAlign:'right',borderBottom:'1px solid #DDD'}} colSpan={2}><span data-prefix>$</span><span>{row.subTotal}</span></td>
                </tr>
                  {
        row.shipping?
        (
          <tr>
                              <td style={{textAlign:'left', width:'200px'}} colSpan={3}></td>
            <td style={{textAlign:'right',borderBottom:'1px solid #DDD'}} colSpan={2}><span>Shipping</span></td>
            <td style={{textAlign:'right',borderBottom:'1px solid #DDD'}} colSpan={2}><span data-prefix>$</span><span>{row.shipping?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
          </tr>
        )
        :''
      }
                  {
        row.adjustmentNumber?
        (
          <tr>
                                          <td style={{textAlign:'left', width:'200px'}} colSpan={3}></td>
            <td style={{textAlign:'right',borderBottom:'1px solid #DDD'}} colSpan={2}><span>{row.adjustment}</span></td>
            <td style={{textAlign:'right',borderBottom:'1px solid #DDD'}} colSpan={2}><span data-prefix>$</span><span>{row.adjustmentNumber?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
          </tr>
        )
        :''
      }
          <tr>
          <td style={{textAlign:'left', width:'200px'}} colSpan={3}></td>
            <td style={{textAlign:'right',borderBottom:'1px solid #DDD'}} colSpan={2}><span>Total</span></td>
            <td style={{textAlign:'right',borderBottom:'1px solid #DDD'}} colSpan={2}><span data-prefix>$</span><span>{row.totalInvoice?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
          </tr>
          {
        row.total?
        (
          <tr>
                                          <td style={{textAlign:'left', width:'200px'}} colSpan={3}></td>
            <td style={{textAlign:'right',borderBottom:'1px solid #DDD'}} colSpan={2}><span>Amount Paid</span></td>
            <td style={{textAlign:'right',borderBottom:'1px solid #DDD'}} colSpan={2}><span data-prefix>$</span><span>{row.total?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
          </tr>
        )
        :''
      }
          <tr>
          <td style={{textAlign:'left', width:'200px'}} colSpan={3}></td>
            <td style={{textAlign:'right',borderBottom:'1px solid #DDD',color:'#093170',fontWeight:'bold'}} colSpan={2}><span>Balance Due</span></td>
            <td style={{textAlign:'right',borderBottom:'1px solid #DDD',color:'#093170',fontWeight:'bold'}} colSpan={2}><span data-prefix>$</span><span>{row.balanceDue?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
          </tr>
          <tr>
          <td style={{textAlign:'left', width:'200px'}} colSpan={3}></td>
            <td style={{textAlign:'center'}} colSpan={2}><span>Total In Words</span></td>
            <td style={{textAlign:'left',width:'150px'}} colSpan={2}><span>{row.totalW}</span></td>
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
<p>{row.terms.toUpperCase()}</p>
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
     <div  className='invoicedetails'>
<header className='invoiceTest'>  
    <span>
<img src={Image} />       
</span> 
<address style={{textAlign:'right'}}>
<p style={{fontWeight:'bold'}}>GLOBAL GATE SARL </p>
<p>RCM CD/KWZ/RCCM/22-B-00317 </p>
<p> ID NAT 14-H5300N11179P </p>
<p> AVENUE SALONGO Q/INDUSTRIEL C/MANIKA </p>
<p>  KOLWEZI LUALABA </p>
<p>   DR CONGO </p>
</address>
</header>
<hr/><p className='invoicehr'>INVOICE</p>
<article>
  <section style={{display:'flex',justifyContent:'space-between',marginBottom:'5px'}}>
     <address style={{position:'relative',lineHeight:1.35,width:'60%',marginBottom:'5px'}}>
           <p >
                 <span style={{fontSize:'10px'}}>Bill To</span> <br/>
           <span style={{fontWeight:'bold', fontSize:'15px'}}>{row.customerName.customerName.toUpperCase()}</span>
                <br/>
                <span style={{fontSize:'10px'}}>{row.customerName.billingAddress.toUpperCase()},{row.customerName.billingCity.toUpperCase()}</span>
                </p> 
              
            </address>        
            
            <table className="firstTable" style={{position:'relative',fontSize:'80%',left:'83px',marginBottom:'5px'}}>
              <tbody>             
                <tr>
                <th style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Invoice #</span></th>
                <td style={{backgroundColor:'white',border:'none'}}><span >INV-00{row.invoiceNumber}</span></td>
              </tr>
              <tr>
                <th style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Date</span></th>
                <td style={{backgroundColor:'white',border:'none'}}><span >{dayjs(row.invoiceDate).format('DD/MM/YYYY')}</span></td>
              </tr>
              <tr>
                <th style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Due Date</span></th>
                <td style={{backgroundColor:'white',border:'none'}}><span >{dayjs(row.invoiceDueDate).format('DD/MM/YYYY')}</span></td>
              </tr>
          {row.invoiceSubject!==undefined && row.invoiceSubject===""?<tr></tr>:    <tr>
                <th style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Subject</span></th>
                <td style={{backgroundColor:'white',border:'none',width:'400px'}}><span>{row.invoiceSubject!==undefined?row.invoiceSubject.toUpperCase():''}</span></td>
              </tr>}
             {row.invoiceDefect!==undefined && row.invoiceDefect===""?<tr></tr>: <tr>
                <th style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Defect</span></th>
                <td style={{backgroundColor:'white',border:'none'}}><span>{row.invoiceDefect!==undefined?row.invoiceDefect.toUpperCase():''}</span></td>
              </tr>}
              { 
              row.actionTaken !== undefined ?
                <tr>
                <th style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Action</span></th>
                <td style={{backgroundColor:'white',border:'none'}}><span>{row.actionTaken!==undefined?row.actionTaken.toUpperCase():''}</span></td>
              </tr>:null}
              </tbody>
            </table>
      </section>
    <section>
      {
        row.noteInfo !== undefined?
        <table style={{position:'relative',fontSize:'80%',float:'left', left:'0', width:'50%',marginBottom:'5px'}}>
          <tbody>
            <tr>
          <th style={{textAlign:'left', width:'30px'}}>Note</th>
          <td style={{textAlign:'left'}}>{row.noteInfo!==undefined?row.noteInfo:''}</td>
            </tr>
          </tbody>
        </table>
         :''
      }
       <table className="secondTable" style={{fontSize:'80%',marginBottom:'5px',border:'1px solid #DDD'}}>
              <thead>
                <tr>
                  <th style={{border:'1px solid #DDD',backgroundColor:'#e8f7fe'}}>#</th>
                  <th style={{textAlign:'center', border:'1px solid #DDD',backgroundColor:'#e8f7fe'}}>Item</th>
                  <th style={{border:'1px solid #DDD',backgroundColor:'#e8f7fe'}}>Description</th>
                  <th style={{textAlign:'right',border:'1px solid #DDD',backgroundColor:'#e8f7fe'}}>Qty</th>
                  <th style={{textAlign:'right', border:'1px solid #DDD',backgroundColor:'#e8f7fe'}}>Rate</th>
                  {showDiscount && <th style={{textAlign:'right', border:'1px solid #DDD',backgroundColor:'#e8f7fe'}}>Discount</th>}
                  <th style={{textAlign:'right', border:'1px solid #DDD',backgroundColor:'#e8f7fe'}}>Total</th>
                </tr>
              </thead>
              <tbody>
              {row.items?.map((Item,i)=>
          {
            const relatedUnit = item.find((Item1)=> Item1._id === Item.itemName._id)
            return     (
            <tr key={Item.idRow} > 
            {
              Item.itemDescription !== 'Labor Fees' ?(
                <>
   {
           Item.newDescription !== undefined?
           (
            <>
         <td style={{textAlign:'center'}}><span>{i + 1}</span></td>
            <td style={{textAlign:'center',border:'1px solid #DDD'}} colSpan={6}>{Item.newDescription}</td>
            </>
           )
           :
           (
            <>
               <td style={{textAlign:'center',width:'30px'}}><span>{i + 1}</span></td>
                <td style={{width:'200px',borderLeft:'1px solid #DDD'}} ><span hidden = {Item.itemName?Item.itemName.itemName === 'empty':''}>{Item.itemName.itemName.toUpperCase()}</span></td>
                <td style={{textAlign:'left',width:'250px',borderLeft:'1px solid #DDD'}}><span>{Item.itemDescription.toUpperCase()}</span></td>
                <td style={{textAlign:'right',width:'30px',borderLeft:'1px solid #DDD'}}><span>{Item.itemQty} {relatedUnit !==undefined? relatedUnit.unit.toUpperCase():''}</span></td>
                <td style={{textAlign:'right',width:'80px',borderLeft:'1px solid #DDD'}}><span data-prefix>$</span><span>{Item.itemRate}</span></td>
                {showDiscount && <td style={{textAlign:'right',borderLeft:'1px solid #DDD'}}><span data-prefix>%</span><span>{Item.itemDiscount}</span></td>}
                <td style={{textAlign:'right',width:'100px',borderLeft:'1px solid #DDD'}}><span data-prefix>$</span><span>{Item.itemAmount?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
            </>
           )
            }
                </>
              ):<>
                <td style={{textAlign:'center',borderLeft:'1px solid #DDD'}}><span>{i + 1}</span></td>
                <td style={{textAlign:'left',border:'1px solid #DDD'}} colSpan={2}><span>{Item.itemDescription}</span></td>
                <td style={{textAlign:'right',width:'30px',border:'1px solid #DDD'}}><span>{Item.itemQty} {relatedUnit !==undefined? relatedUnit.unit.toUpperCase():''}</span></td>
                <td style={{textAlign:'right',width:'80px',border:'1px solid #DDD'}}><span data-prefix>$</span><span>{Item.itemRate}</span></td>
                {showDiscount && <td style={{textAlign:'right',border:'1px solid #DDD'}}><span data-prefix>%</span><span>{Item.itemDiscount}</span></td>}
                <td style={{textAlign:'right',border:'1px solid #DDD'}}><span data-prefix>$</span><span>{Item.itemAmount?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
              </>
            }
            </tr>
      )}
      )}
              </tbody>
              </table>
              <table style={{fontSize:'80%',pageBreakInside:'avoid',pageBreakInside:'avoid'}}>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
              <tbody>
                <tr>
                  <td style={{textAlign:'left', width:'200px'}} colSpan={3}>{row.note}</td>
                  <td style={{textAlign:'right',borderBottom:'1px solid #DDD'}} colSpan={2}>
               <span>
               Sub Total
               <br/>
             <span style={{color:'gray'}}>(Tax Inclusive)</span>
               </span>
                  </td>
                  <td style={{textAlign:'right',borderBottom:'1px solid #DDD'}} colSpan={2}><span data-prefix>$</span><span>{row.subTotal}</span></td>
                </tr>
                  {
        row.shipping?
        (
          <tr>
                              <td style={{textAlign:'left', width:'200px'}} colSpan={3}></td>
            <td style={{textAlign:'right',borderBottom:'1px solid #DDD'}} colSpan={2}><span>Shipping</span></td>
            <td style={{textAlign:'right',borderBottom:'1px solid #DDD'}} colSpan={2}><span data-prefix>$</span><span>{row.shipping?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
          </tr>
        )
        :''
      }
                  {
        row.adjustmentNumber?
        (
          <tr>
                                          <td style={{textAlign:'left', width:'200px'}} colSpan={3}></td>
            <td style={{textAlign:'right',borderBottom:'1px solid #DDD'}} colSpan={2}><span>{row.adjustment}</span></td>
            <td style={{textAlign:'right',borderBottom:'1px solid #DDD'}} colSpan={2}><span data-prefix>$</span><span>{row.adjustmentNumber?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
          </tr>
        )
        :''
      }
          <tr>
          <td style={{textAlign:'left', width:'200px'}} colSpan={3}></td>
            <td style={{textAlign:'right',borderBottom:'1px solid #DDD'}} colSpan={2}><span>Total</span></td>
            <td style={{textAlign:'right',borderBottom:'1px solid #DDD'}} colSpan={2}><span data-prefix>$</span><span>{row.totalInvoice?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
          </tr>
          {
        row.total?
        (
          <tr>
                <td style={{textAlign:'left', width:'200px'}} colSpan={3}></td>
            <td style={{textAlign:'right',borderBottom:'1px solid #DDD'}} colSpan={2}><span>Amount Paid</span></td>
            <td style={{textAlign:'right',borderBottom:'1px solid #DDD'}} colSpan={2}><span data-prefix>$</span><span>{row.total?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
          </tr>
        )
        :''
      }
          <tr>
          <td style={{textAlign:'left', width:'200px'}} colSpan={3}></td>
            <td style={{textAlign:'right',borderBottom:'1px solid #DDD',color:'#093170',fontWeight:'bold'}} colSpan={2}><span>Balance Due</span></td>
            <td style={{textAlign:'right',borderBottom:'1px solid #DDD',color:'#093170',fontWeight:'bold'}} colSpan={2}><span data-prefix>$</span><span>{row.balanceDue?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
          </tr>
          <tr>
          <td style={{textAlign:'left', width:'200px'}} colSpan={3}></td>
            <td style={{textAlign:'center'}} colSpan={2}><span>Total In Words</span></td>
            <td style={{textAlign:'left',width:'150px'}} colSpan={2}><span>{row.totalW}</span></td>
          </tr>
              </tbody>
              </table>
       <table style={{position:'relative', marginTop:'0px',fontSize:'80%'}} >
  <tbody>
    <tr>
      <th style={{backgroundColor:'white',border:'none', fontWeight:'bold',textAlign:'left'}}>
          Bank
      </th>
      <td style={{backgroundColor:'white',border:'none', fontWeight:'bold',textAlign:'left'}}>
          SOFIBANQUE SA
      </td>
    </tr>
    <tr>
      <th style={{backgroundColor:'white',border:'none', fontWeight:'bold',textAlign:'left'}}>
      Entitled
      </th>
      <td style={{backgroundColor:'white',border:'none', fontWeight:'bold',textAlign:'left'}}>
      GLOBAL GATE SARL
      </td>
    </tr>
    <tr>
      <th style={{backgroundColor:'white',width:'100px',border:'none', fontWeight:'bold',textAlign:'left'}}>
      Bank Account
      </th>
      <td style={{backgroundColor:'white',border:'none', fontWeight:'bold',textAlign:'left'}}>
      00023233330214247020073
      </td>
    </tr>
    <tr>
      <th style={{backgroundColor:'white',border:'none', fontWeight:'bold',textAlign:'left'}}>
      Code Swift
      </th>
      <td style={{backgroundColor:'white',border:'none', fontWeight:'bold',textAlign:'left'}}>
      SFBXCDKIXXX
      </td>
    </tr>
    </tbody>
        </table>  
        <table style={{fontSize:'80%'}}>
        <tbody>
        <tr>
      <th style={{backgroundColor:'white',border:'none', fontWeight:'bold',textAlign:'left'}}>
      Terms & Conditions
      </th>
    </tr>
    <tr>
      <td style={{backgroundColor:'white',border:'none',textAlign:'left'}}>
      {
              row.terms.toUpperCase()
            }
      </td>
    </tr>
        </tbody>
        </table>  
    </section>             
          </article>
            <span className='footerinvoice'>
        <p style={{display:'flex',gap:'5px',alignItems:'center'}}>
          <span><EmailIcon/></span>
          <span>contact@globalgate.sarl</span>
        </p>
        <p style={{display:'flex',gap:'5px',alignItems:'center'}}>
          <span><PhoneIcon/></span>
          <span>+243 827 722 222</span>
        </p>
        <p style={{display:'flex',gap:'5px',alignItems:'center'}}>
          <span><WebIcon/></span>
          <span>www.GlobalGate.sarl</span>
        </p>
      </span>
    </div>
        </TabPanel>
        <TabPanel value="2" sx={{height:'500px', overflow:'hidden',overflowY:'scroll'}}>
                <Card>
                  <CardContent>
                    <table className="secondTable" style={{fontSize:'80%',marginBottom:'5px',border:'1px solid #DDD'}}>
                      <thead>
                        <tr>
                        <th style={{padding:'10px',border:'1px solid #DDD',backgroundColor:'#e8f7fe'}}>#</th>
                          <th style={{padding:'10px',border:'1px solid #DDD',backgroundColor:'#e8f7fe'}}>Payment Date</th>
                          <th style={{padding:'10px',border:'1px solid #DDD',backgroundColor:'#e8f7fe'}}>Description</th>
                          <th style={{padding:'10px',border:'1px solid #DDD',backgroundColor:'#e8f7fe'}}>Period</th>
                          <th style={{padding:'10px',border:'1px solid #DDD',backgroundColor:'#e8f7fe'}}> Amount Paid</th>
                          <th style={{padding:'10px',border:'1px solid #DDD',backgroundColor:'#e8f7fe'}}> Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          relatedPaymentInfo.map((row)=>(
                            <tr key={row._id}>
                              <td style={{textAlign:'left',width:'50px'}}>PAY-{row.paymentNumber}</td>
                              <td style={{textAlign:'left',width:'30px',borderLeft:'1px solid #DDD'}}>{dayjs(row.paymentDate).format('DD/MM/YYYY')}</td>
                              <td style={{textAlign:'left',width:'150px',borderLeft:'1px solid #DDD'}}>{row.description}</td>
                              <td style={{textAlign:'left',width:'100px',borderLeft:'1px solid #DDD'}}>
                                 {row.TotalAmount.map((Item,i)=>(
                                  <p key={i}>
                                     {Item.days > 0 ?
                                    <Typography
                                    color={Item.days > 0
                                      ? "red":"black"
                                   }
                                    >
                                Overdue: {Item.days} Days Past Due
                                    </Typography>
                                     :'ON TIME' }
                                  </p>
                                ))} 
                              </td>
                              <td style={{textAlign:'left',width:'40px',borderLeft:'1px solid #DDD'}}>
                                 {row.TotalAmount.map((Item,i)=>(
                                  <p key={i}>
                                    <span>$ {Item.total}</span>
                                  </p>
                                ))} 
                              </td>
                              <td style={{textAlign:'left',width:'40px',borderLeft:'1px solid #DDD'}}>
                              <ViewTooltip title="View">
                                      <span>
                                         <IconButton disabled={user.data.role === 'User'}>
                                         <NavLink to={`/PaymentInformationView/${row._id}`} className='LinkName'>
                                         <VisibilityIcon style={{color:'#202a5a'}}/> 
                                         </NavLink>
                                         </IconButton>
                                       </span>
                                  </ViewTooltip>
                              </td>
                              </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              </TabPanel>
        <TabPanel value="3" sx={{height:'470px', overflow:'hidden',overflowY:'scroll'}}>
        {
          row.ReferenceName2 === undefined ?(
            <div>
          <Card>
            <CardContent>
            <Typography sx={{textAlign:'center',color:'gray'}}>Summary</Typography>
            <div style={{display:'flex', alignItems:'center',justifyContent:'space-between'}}>
            <button onClick={handleSynced} className='btnCustomer'>sync</button>
            <PieChart
             colors={palette}
      series={[
        {
          arcLabel: (item) => `${item.label}($${item.value})`,
          arcLabelMinAngle: 35,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          data: [
            {
              "id":1,
              "label":"Cost",
              "value":totalCost,
            },
            {
              "id":2,
              "label":"Sell",
              "value":totalSell,
            },
            {
              "id":3,
              "label":"Gain",
              "value":Gain,
            }
          ],
        },
      ]}
      width={450}
      height={250}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
      }}
    />
            </div>
            <br/>
                        <table>
                        <thead>
                          <tr>
                        <th style={{textAlign:'left',border:'1px solid black'}}>Item Name</th>
                        <th style={{textAlign:'left',border:'1px solid black'}}>Description</th>
                        <th style={{textAlign:'left',border:'1px solid black'}}>Qty</th>
                        <th style={{textAlign:'left',border:'1px solid black'}}>Sell</th>
                        <th style={{textAlign:'left',border:'1px solid black'}}>Discount</th>
                        <th style={{textAlign:'left',border:'1px solid black'}}>Total</th>  
                        <th style={{textAlign:'left',border:'1px solid black'}}>Out</th>   
                        <th style={{textAlign:'left',border:'1px solid black'}}>Cost Rate</th>   
                        <th style={{textAlign:'left',border:'1px solid black'}}>Total Cost</th>   
                          </tr>
                        </thead>
                        <tbody>
                        {
                  row.items.map((Item,i)=>
                    {
                      const relatedUnit = item.find((Item1)=> Item1._id === Item.itemName._id)
                      return(
                    <tr key={Item.idRow}>
                         {
           Item.newDescription !== undefined?
           (
            <>
            <td style={{textAlign:'center',border:'1px solid black'}} colSpan={5}>{Item.newDescription}</td>
            </>
           )
           :
           (
                     <>
         <td style={{border:'1px solid black'}}> <span hidden = {Item.itemName?Item.itemName.itemName === 'empty':''}>{Item.itemName.itemName.toUpperCase()}</span></td>
                    <td style={{border:'1px solid black', width:'200px'}}>{Item.itemDescription}</td>
                    <td style={{border:'1px solid black'}}>{Item.itemQty} {relatedUnit !==undefined? relatedUnit.unit.toUpperCase():''}</td>
                    <td style={{border:'1px solid black'}}> <span data-prefix>$ </span>{Item.itemRate}</td>
                    <td style={{border:'1px solid black'}} ><span data-prefix>% </span><span>{Item.itemDiscount}</span></td>
                    <td style={{border:'1px solid black'}} ><span data-prefix>$ </span><span id='totalItemService'>{Item.itemAmount?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</span></td>
                    <td style={{border:'1px solid black'}} ><span >{Item.itemOut !== undefined? Item.itemOut : 0} {relatedUnit !==undefined? relatedUnit.unit.toUpperCase():''}</span></td>
                    <td style={{border:'1px solid black'}} ><span data-prefix>$ </span><span >{Item.itemCost !== undefined? Item.itemCost : 0}</span></td>
                    <td style={{border:'1px solid black'}} ><span data-prefix>$ </span><span >{Item.itemOut !== undefined? parseFloat(Item.itemOut * Item.itemCost)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',') : 0}</span></td>
                    </>
                       )
                      }
                  </tr>
                  )}
                )
                }
                  <tr>
                  <td style={{border:'1px solid black',textAlign:'center'}}colSpan={9}> Total Sell: (<span data-prefix>$ </span>{parseFloat(totalSell)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}) - Total Cost: (<span data-prefix>$ </span>{parseFloat(totalCost)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}) = Gain: (<span data-prefix>$ </span>{parseFloat(Gain)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}) </td>
                </tr>
                        </tbody>
                      </table>
                      </CardContent>
                     </Card>
            </div>
          ):null
        }
            {
            service2?service2.map((row1)=>(
              <Card key={row1._id} sx={{marginBottom:'15px'}}>
              <CardContent>
                <Typography sx={{textAlign:'center',color:'gray'}}>Summary Out </Typography>
              <div style={{display:'flex', alignItems:'center',justifyContent:'space-between'}}>
            
            </div>
            <br/>
              <table>
              <thead>
                <tr>
              <th style={{textAlign:'left',border:'1px solid black'}}>Item Name</th>
              <th style={{textAlign:'left',border:'1px solid black'}}>Description</th>
              <th style={{textAlign:'left',border:'1px solid black'}}>Out</th>   
              <th style={{textAlign:'left',border:'1px solid black'}}>Cost Rate</th>   
              <th style={{textAlign:'left',border:'1px solid black'}}>Discount</th>   
              <th style={{textAlign:'left',border:'1px solid black'}}>Total Cost</th>   
                </tr>
              </thead>
              <tbody>
              {
        row1.items.map((Item,i)=>
   {
    const relatedUnit = item.find((Item1)=> Item1._id === Item.itemName._id)
    return       (
          <tr key={Item.idRow}>
               {
 Item.newDescription !== undefined?
 (
  <>
  <td style={{textAlign:'center',border:'1px solid black'}} colSpan={5}>{Item.newDescription}</td>
  </>
 )
 :
 (
           <>
<td style={{border:'1px solid black'}}> <span hidden = {Item.itemName?Item.itemName.itemName === 'empty':''}>{Item.itemName.itemName.toUpperCase()}</span></td>
          <td style={{border:'1px solid black', width:'200px'}}>{Item.itemDescription}</td>
          <td style={{border:'1px solid black'}} ><span >{Item.itemOut !== undefined? Item.itemOut : 0} {relatedUnit !==undefined? relatedUnit.unit.toUpperCase():''}</span></td>
          <td style={{border:'1px solid black'}} ><span data-prefix>$ </span><span >{Item.itemCost !== undefined? Item.itemCost : 0}</span></td>
          <td style={{border:'1px solid black'}} ><span data-prefix>% </span><span>{Item.itemDiscount}</span></td>
          <td style={{border:'1px solid black'}} ><span data-prefix>$ </span><span >{Item.itemOut !== undefined? parseFloat(Item.itemOut * Item.itemCost)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',') : 0}</span></td>
          </>
             )
            }
        </tr>
        )}
      )
      }
       <tr>
        <td style={{border:'1px solid black'}}colSpan={2}>Labor Fees</td>
        <td style={{border:'1px solid black'}} >{row1.laborQty!==undefined?row1.laborQty:0}</td>
        <td style={{border:'1px solid black'}} ><span data-prefix>$ </span>{row1.adjustmentNumber}</td>
        <td style={{border:'1px solid black'}} ><span data-prefix>% </span>{row1.laborDiscount!== undefined?row1.laborDiscount:0}</td>
        <td style={{border:'1px solid black'}} ><span data-prefix>$ </span>{row1.totalLaborFees!== undefined?row1.totalLaborFees:0}</td>
      </tr>
      <tr>
        <td style={{border:'1px solid black'}}colSpan={6}> (Total Invoice): <span data-prefix>$ </span>{row.totalInvoice?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} - (Maintenance Cost + Labor Fees): <span data-prefix>$ </span>{ row1.totalLaborFees!== undefined?parseFloat(row1.totalLaborFees + row1.infoCost)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',') :0} = Gain : <span data-prefix>$ </span>{ row1.totalLaborFees!== undefined?parseFloat( row.totalInvoice - (row1.totalLaborFees + row1.infoCost))?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',') :0} </td>
      </tr>
              </tbody>
            </table>
            </CardContent>
           </Card>
            )):null
          }
             {
            service?service.map((row2)=>(
              <Card key={row2._id} sx={{marginBottom:'15px'}}>
              <CardContent>
                <Typography sx={{textAlign:'center',color:'gray'}}>Summary Out</Typography>
              <div style={{display:'flex', alignItems:'center',justifyContent:'space-between'}}>
            
            </div>
            <br/>
              <table>
              <thead>
                <tr>
              <th style={{textAlign:'left',border:'1px solid black'}}>Item Name</th>
              <th style={{textAlign:'left',border:'1px solid black'}}>Description</th>
              <th style={{textAlign:'left',border:'1px solid black'}}>Out</th>   
              <th style={{textAlign:'left',border:'1px solid black'}}>Cost Rate</th>   
              <th style={{textAlign:'left',border:'1px solid black'}}>Discount</th>   
              <th style={{textAlign:'left',border:'1px solid black'}}>Total Cost</th>   
                </tr>
              </thead>
              <tbody>
              {
        row2.items.map((Item,i)=>
   {
    const relatedUnit = item.find((Item1)=> Item1._id === Item.itemName._id)
    return       (
          <tr key={Item.idRow}>
               {
 Item.newDescription !== undefined?
 (
  <>
  <td style={{textAlign:'center',border:'1px solid black'}} colSpan={5}>{Item.newDescription}</td>
  </>
 )
 :
 (
           <>
<td style={{border:'1px solid black'}}> <span hidden = {Item.itemName?Item.itemName.itemName === 'empty':''}>{Item.itemName.itemName.toUpperCase()}</span></td>
          <td style={{border:'1px solid black', width:'200px'}}>{Item.itemDescription}</td>
          <td style={{border:'1px solid black'}} ><span >{Item.itemOut !== undefined? Item.itemOut : 0} {relatedUnit !==undefined? relatedUnit.unit.toUpperCase():''}</span></td>
          <td style={{border:'1px solid black'}} ><span data-prefix>$ </span><span >{Item.itemCost !== undefined? Item.itemCost : 0}</span></td>
          <td style={{border:'1px solid black'}} ><span data-prefix>% </span><span>{Item.itemDiscount}</span></td>
          <td style={{border:'1px solid black'}} ><span data-prefix>$ </span><span >{Item.itemOut !== undefined? parseFloat(Item.itemOut * Item.itemCost)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',') : 0}</span></td>
          </>
             )
            }
        </tr>
        )}
      )
      }
       <tr>
        <td style={{border:'1px solid black'}}colSpan={2}>Labor Fees</td>
        <td style={{border:'1px solid black'}} >{row2.laborQty!==undefined?row2.laborQty:0}</td>
        <td style={{border:'1px solid black'}} ><span data-prefix>$ </span>{row2.adjustmentNumber}</td>
        <td style={{border:'1px solid black'}} ><span data-prefix>% </span>{row2.laborDiscount!== undefined?row2.laborDiscount:0}</td>
        <td style={{border:'1px solid black'}} ><span data-prefix>$ </span>{row2.totalLaborFees!== undefined?row2.totalLaborFees:0}</td>
      </tr>
      <tr>
        <td style={{border:'1px solid black'}}colSpan={6}> (Total Invoice): <span data-prefix>$ </span>{row.totalInvoice?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} - (Maintenance Cost + Labor Fees): <span data-prefix>$ </span>{ row2.totalLaborFees!== undefined?parseFloat(row2.totalLaborFees + row2.infoCost)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',') :0} = Gain : <span data-prefix>$ </span>{ row2.totalLaborFees!== undefined?parseFloat( row.totalInvoice - (row2.totalLaborFees + row2.infoCost))?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',') :0} </td>
      </tr>
              </tbody>
            </table>
            </CardContent>
           </Card>
            )):null
          }
            {/*
                            purchase?
                            purchase.map((row3)=>(
                              <div key={row3._id}>
                                <table>
                                  <tbody>
                                    <tr>
                                <td style={{textAlign:'left', border:'1px solid #DDD'}}> Purchase # {row3.purchaseName}</td>
                                <td style={{textAlign:'left', border:'1px solid #DDD'}}> (Total Invoice): <span data-prefix>$ </span>{row.totalInvoice?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} - (Purchase Cost): <span data-prefix>$ </span>{row3.infoCost?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} = Gain : <span data-prefix>$ </span>{parseFloat(row.totalInvoice-row3.infoCost)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')} </td>
                                <td style={{textAlign:'center', border:'1px solid #DDD'}}>
                                <BlackTooltip>
                                      <span>
                                        <IconButton >
                                        <NavLink to={`/PurchasesViewAdminAll/${row3._id}`} className='LinkName'>
                                        <span style={{fontSize:'12px'}}>View</span>
                                        </NavLink>
                                        </IconButton>
                                      </span>
                                  </BlackTooltip>    
                                </td>
                                    </tr>
                                  </tbody>

                                  </table>
                                  
                                  <table>
                                  <thead>
                    <tr>
                        <th style={{width:'10px', border:'1px solid #DDD',backgroundColor:'#e8f7fe'}}>N</th>
                        <th style={{width:'300px', border:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Item</th>
                        <th style={{border:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Brand</th>
                        <th style={{border:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">I-Out</th>
                        <th style={{border:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">I-Cost</th>
                        <th style={{border:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Total Cost</th>
                    </tr>
                </thead>
                <tbody>
                {row3.items?.map((Item,i)=> {
                   const relatedUnit = item.find((Item1)=> Item1._id === Item.itemName._id)
                  return(
                <tr key={Item.idRow}>
                    {
           Item.newDescription !== undefined?
           (
            <>
          <td style={{textAlign:'center', border:'1px solid #DDD'}}><span>{i+1}</span></td>
            <td style={{textAlign:'center', border:'1px solid #DDD'}} colSpan={6}>{Item.newDescription}</td>
            </>
           )
           :
           (
            <>
                    <td style={{width:'10px', border:'1px solid #DDD'}} >{i+1}</td>
                        <td style={{width:'300px',textAlign:'left', border:'1px solid #DDD'}} align="left">
                           <span hidden = {Item.itemName?Item.itemName.itemName === 'empty':''}>{Item.itemName.itemName?Item.itemName.itemName.toUpperCase():''}</span>
                           <br/>
                            <span>{Item.itemDescription?Item.itemDescription.toUpperCase():''}</span>
                          </td>
                        <td style={{border:'1px solid #DDD'}} align="left">{relatedUnit !==undefined? relatedUnit.itemBrand.toUpperCase():''}</td>
                        <td style={{border:'1px solid #DDD'}} align="left"><span>{Item.itemOut} {relatedUnit !==undefined? relatedUnit.unit.toUpperCase():''}</span></td>
                        <td style={{border:'1px solid #DDD'}} ><span data-prefix>$ </span><span >{Item.itemCost}</span></td>
                        <td style={{border:'1px solid #DDD'}} ><span data-prefix>$ </span><span >{Item.itemOut !== undefined? parseFloat(Item.itemOut * Item.itemCost)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',') : 0}</span></td>
                 </>
           )
            }
                     </tr>
                 )})}
                 <tr>
                  <td colSpan={4} style={{border:'1px solid #DDD',backgroundColor:'#e8f7fe'}}> Total Cost</td>
                  <td colSpan={2} style={{border:'1px solid #DDD',backgroundColor:'#e8f7fe'}}><span data-prefix>$ </span>{row3.infoCost?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</td>
                 </tr>
                </tbody>
                                </table>
                          
                              </div>
                            ))
                            :null
                          */}
        </TabPanel>
      </TabContext>
     </Box>
     </div>
         ))}
        </div>
    </div>
    </Grid>
    {show1===2 ?
     <Grid item xs={3}>
      <div className='itemInfoContainer'>
        <div style={{padding:'10px'}}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%'}}>
        <p>COMMENTS</p>
        <BlackTooltip title="Close" placement='left'>
        <IconButton onClick={() => handleShow1(1)} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </BlackTooltip>
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
        <BlackTooltip title="Close" placement='bottom'>
        <IconButton onClick={() => handleShow1(1)} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </BlackTooltip>
      </div>
      <br/>

        </div>
        <div style={{height:'518px', overflow:'hidden',overflowY:'scroll', width:'100%'}}>
          <div style={{padding:'10px'}}>
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
                  {synchro ==='true'?<h2> Item Out Sync successfully</h2>:<h2> Data Saved successfully</h2>}
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
           open={loadingOpenPayment}
           onClose={handlePaymentClose}
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
                {
                  update === 'true'?  <h2> Data Updated successfully</h2>:  <h2> Data Saved successfully</h2>
                }
                

                  <div style={{display:'flex', gap:'60px',justifyContent:'center'}}>
              <button onClick={handlePaymentClose} className='btnCustomer'>
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
       open={openPayment}
        onClose={handleClosePayment}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
 <Box sx={{ ...style, width: 1000 }}>
        <BlackTooltip title="Close" placement='left'>
        <IconButton onClick={handleClosePayment} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </BlackTooltip>  
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Payment
          </Typography>
          <form>
            <Box sx={{maxHeight:'700px', overflow:'hidden', overflowY:'scroll'}}>
              <Grid container style={{alignItems:'center',padding:'15px'}} spacing={2}>
          <Grid item xs={9}>
            <TextField
            disabled
            label='Customer name'
            value={customerName.customerName}
            size='small'
            sx={{width: '100%', backgroundColor:'white' }}
            />
          </Grid>
          <Grid item xs={3}>
          <FormControl sx={{ width: '100%', backgroundColor:'white' }}>
                <InputLabel htmlFor="paymentNumber">Payment Number</InputLabel>
                <OutlinedInput
                disabled
                type='number'
                id='paymentNumber'
                name='paymentNumber' 
                label='Payment Number'
                value={'00'+paymentNumber}
                size='small'
                startAdornment={<InputAdornment position="start">PAY</InputAdornment>}
                />
               </FormControl>
          </Grid>
          <Grid item xs={12}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                     required
                    name='paymentDate' 
                    label='Date'
                    value={dayjs(paymentDate)}
                    onChange={(date)=> setPaymentDate(date)}
                    sx={{ m: 1, width: '100%', backgroundColor:'white' }}       
                    format='DD/MM/YYYY'
               />
                  </DemoContainer>
      </LocalizationProvider>
      </Grid>
          <Grid item xs={12}>
            <div style={{display:'flex', gap:'10px'}}>
           <TextField
            disabled
            label='Credit'
            type='number'
            size='small'
            value={oldCredit}
            />
           {/* <button className='btnCustomer' onClick={handlePayment}> Apply </button>*/}
            </div>
        
          </Grid>
          <Grid item xs={12}>
       <TextField 
                  id='description'
                  name='description' 
                  multiline
                  rows={4}
                  value={description}
                  label='Description'
                  onChange={(e)=> setDescription(e.target.value)}
                  sx={{ width: '100%', backgroundColor:'white' }}       
              />
       </Grid>
          <Grid item xs={12}>
          <table>
      <tbody>
        {invoiceInfo?.map((row,i)=>{
          return(
          <tr key={row.id}>
              <td id='InvoiceAmount'>
            <FormControl>
          <InputLabel htmlFor='subtotal'>Amount</InputLabel>
          <OutlinedInput
          sx={{ width: '150px', backgroundColor:'white' }} 
          type='number'
          id='subtotal'
          value={row.balanceDue}
          startAdornment={<InputAdornment position="start">USD</InputAdornment>}
          label="subtotal"     
          />
        </FormControl>
            </td>
            <td>
            <FormControl>
          <InputLabel htmlFor='amountPaidFC'>Amount Paid FC</InputLabel>
          <OutlinedInput
          sx={{ width: '180px', backgroundColor:'white' }} 
          id='amountPaidFC'
          name='amountPaidFC'
          value={row.amountPaidFC}
          onChange={(e)=> handleChangeCEO(row.id, 'amountPaidFC',e.target.value)}
          startAdornment={<InputAdornment position="start">FC</InputAdornment>}
          label="Amount Paid FC"     
          />
        </FormControl>
            </td>
            <td>
            <FormControl>
          <InputLabel htmlFor='rateChange'>Rate</InputLabel>
          <OutlinedInput
          sx={{ width: '100px', backgroundColor:'white' }} 
          id='rateChange'
          name='rateChange'
          value={row.rateChange}
          onChange={(e)=> handleChangeCEO(row.id, 'rateChange',e.target.value)}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Rate"     
          />
        </FormControl>
            </td>
            <td>
            <FormControl>
          <InputLabel htmlFor='amountPaidUSD'>Amount Paid USD</InputLabel>
          <OutlinedInput
          sx={{ width: '180px', backgroundColor:'white' }} 
          id='amountPaidUSD'
          name='amountPaidUSD'
          value={row.amountPaidUSD}
          onChange={(e)=> handleChangeCEO(row.id, 'amountPaidUSD',e.target.value)}
          startAdornment={<InputAdornment position="start">USD</InputAdornment>}
          label="Amount Paid USD"     
          />
        </FormControl>
            </td>
            <td>
                 <FormControl>
          <InputLabel htmlFor='total'>Total Paid</InputLabel>
          <OutlinedInput
          disabled
          sx={{ width: '160px', backgroundColor:'white' }} 
          id='total'
          value={row.total}
          onChange={(e)=> handleChangeCEO(row.id, 'total',e.target.value)}
          startAdornment={<InputAdornment position="start">USD</InputAdornment>}
          label="Amount Paid"     
          />
        </FormControl>
            </td>
          
          </tr>)
})}
      </tbody>
    </table>
    <table style={{position:'relative', float:'right',padding:'40px', width:'50%'}}>
        <tbody>
         <tr>
          <th style={{textAlign:'left'}}><Typography> Invoices Total Amount </Typography></th>
          <td style={{textAlign:'left'}}><span> $ </span>{balanceDueInfo?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</td>
         </tr>
        <tr>
          <th style={{textAlign:'left'}}><Typography> Amount Received </Typography></th>
          <td style={{textAlign:'left'}}><span> $ </span>{oldCredit}</td>
         </tr>
         <tr>
          <th style={{textAlign:'left'}}><Typography> Amount Paid FC </Typography></th>
          <td style={{textAlign:'left'}}><span> FC </span>{PaymentReceivedFC.toFixed(2)}</td>
         </tr>
         <tr>
          <th style={{textAlign:'left'}}><Typography> Amount Paid USD </Typography></th>
          <td style={{textAlign:'left'}}><span> $ </span>{PaymentReceivedUSD.toFixed(2)}</td>
         </tr>
         <tr>
          <th style={{textAlign:'left'}}><Typography> Total Paid </Typography></th>
          <td style={{textAlign:'left'}}><span> $ </span>{PaymentInfo?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</td>
         </tr>
         <tr>
          <th style={{textAlign:'left'}}><Typography> Balance Due </Typography></th>
          <td style={{textAlign:'left'}}><span> $ </span>{remainingInvoice?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}</td>
         </tr>
        <tr>
          <th style={{textAlign:'left'}}><Typography> Credit </Typography></th>
          <td style={{textAlign:'left'}}><span> $ </span>{remaining}</td>
         </tr>
        </tbody>
       </table>
          </Grid>
          <br/>
          <Grid item xs={12}>
            <button  className='btnCustomer' onClick={handleSubmit} style={{width: '100%'}}>Save</button>    
           
          </Grid>
        </Grid>
            </Box>
        
         </form>
        </Box>
      </Modal>
  </div>
  )
}

export default InvoiceViewAdminAll
