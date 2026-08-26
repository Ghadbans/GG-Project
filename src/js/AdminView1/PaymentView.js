import React, { useEffect,useState }  from 'react';
import './view.css';
import SidebarDash from '../component/SidebarDash';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './PageView/Chartview.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink, useNavigate } from 'react-router-dom';
import {Table,Modal, IconButton,styled, TableBody,TableCell,TableHead,TableRow,Checkbox, TableContainer, Paper, Typography, Box, Autocomplete,TextField,Backdrop,Grid, Tab }  from '@mui/material';
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import { invalidateCache } from '../utils/apiCache';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import axios from 'axios';
import { cachedGet } from '../utils/apiCache';
import { Add, Close, MailOutline } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux"
import { logOut, selectCurrentUser, setUser } from '../features/auth/authSlice';
import Loader from '../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Logout from '../component/NetworkLogoutIcon';
import dayjs from 'dayjs';
import Image from '../img/no-data.png';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import MessageAdminView from './MessageAdminView';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import NotificationVIewInfo from './NotificationVIewInfo';
import db from '../dexieDb';
import { ENDPOINT_URL } from '../apiConfig';

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
function PaymentView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  useEffect(()=> {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
     if (navigator.onLine) {
       try {
         const res = await  cachedGet(`${ENDPOINT_URL}/get-employeeuser/${storesUserId}`)
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
  const [grantAccess,setGrantAccess] = useState([]);
  useEffect(()=>{
   const fetchNumber = async () => {
     if (navigator.onLine) {
         try {
           const res = await cachedGet(`${ENDPOINT_URL}/grantAccess`);
           res.data?.data?.filter((row)=> row.userID === user.data.id )
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
 const PaymentInfoC = grantAccess.filter((row)=> row.moduleName === "Payment" && row.access.createM === true);
 const PaymentInfoV = grantAccess.filter((row)=> row.moduleName === "Payment" && row.access.viewM === true);
 const PaymentInfoU = grantAccess.filter((row)=> row.moduleName === "Payment" && row.access.editM === true);
 const PaymentInfoD = grantAccess.filter((row)=> row.moduleName === "Payment" && row.access.deleteM === true);
  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }
  const [value3, setValue3] = React.useState('1');
    
    useEffect(()=>{
     const result =localStorage.getItem('SelectPaymentView')
     if (result) {
       setValue3(result)
     }
    }, [])
    const handleChange3 = (event, newValue) => {
     const changeValue = newValue
      setValue3(changeValue);
      localStorage.setItem('SelectPaymentView',changeValue)
    };
      const [payment, setPayment] = useState([])
        const [customer, setCustomer] = useState([]);

      const fetchData = async () => {
        if (navigator.onLine) {
          try {
            const res = await cachedGet(`${ENDPOINT_URL}/payment`)
            const formatDate = res.data.data.map((item)=>({
              ...item,
              id: item._id,
              dateField: dayjs(item.paymentDate).format('DD/MM/YYYY'),
              reference: item.TotalAmount && item.TotalAmount.length > 0
          ? item.TotalAmount.map((row1) => (row1.prefix ? row1.prefix.replace('00', '') : (item.reason === "Project" ? "P-" : "INV-")) + String(row1.Ref).padStart(6, '0'))
          : item.referenceNumber?.map((row1) => (item.reason === "Project" ? "P-" : "INV-") + String(row1).padStart(6, '0'))
            })) 
            setPayment(formatDate.reverse());
            // Use bulkPut instead of 1031 individual puts — major perf fix
            // Filter out items without paymentNumber to prevent Dexie DataError
            const validItems = res.data.data.filter(item => item.paymentNumber).map(item => ({...item, synced:true, updateS:true}));
            await db.paymentSchema.clear();
            await db.paymentSchema.bulkPut(validItems);
              setLoadingData(false);
          } catch (error) {
            console.error('Error fetching data:', error);
            /* setLoadingData(false) disabled here to fix race */
          }
        } else {
          const offLineCustomer1 = await db.paymentSchema.toArray();
     const formatDate = offLineCustomer1.map((item)=>({
      ...item,
      id: item._id,
      dateField: dayjs(item.paymentDate).format('DD/MM/YYYY'),
      reference: item.referenceNumber?.map((row1)=> 'INV-'+ String(row1).padStart(6, '0'))
     })) 
     setPayment(formatDate.reverse())
       setLoadingData(false)
        }
      }
      const [loading,setLoading]= useState(false);
      const [loadingOpenModal,setLoadingOpenModal] = useState(false);
      const [ErrorOpenModal,setErrorOpenModal] = useState(false);
   
      const handleOpenOffline = () => {
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
     const handleCloseModal = () => {
      fetchData();
  };
  const handleCreateNotificationOffline = async (ReferenceInfo,ReferenceInfoNumber,ReferenceInfoName) => {
    const data = {
      idInfo: ReferenceInfo,
      person:user.data.userName + ' Created ',
      reason:  `PAY-${String(ReferenceInfoNumber).padStart(6, '0')} For ${ReferenceInfoName}`,
      dateNotification:new Date()
    }
    try {
      await axios.post(`${ENDPOINT_URL}/create-notification`,data)
    } catch (error) {
      console.log(error)
    }
  }
      const syncOff = async () => {
        if (navigator.onLine) {
          const syncedPayment = await db.paymentSchema.toArray();
          const paymentToSynced = syncedPayment.filter((row)=>row.synced === false)
         for(const paymentInfo of paymentToSynced){
          try {
             const res = await axios.post(`${ENDPOINT_URL}/create-payment`,paymentInfo)
             if (res) {
              const ReferenceInfo = res.data.data._id
              const ReferenceInfoNumber = res.data.data.paymentNumber
              const ReferenceInfoName = res.data.data.customerName.customerName
              handleCreateNotificationOffline(ReferenceInfo,ReferenceInfoNumber,ReferenceInfoName)
              handleOpenOffline();
             }
          } catch (error) {
            console.log(error)
          }
          }
        }
        fetchData()
      }
      useEffect(()=> {
        fetchData()
        window.addEventListener('online', syncOff)
        if (navigator.onLine) {
          syncOff()
        }
        return () => {
          window.removeEventListener('online', syncOff)
        }
      },[])
    const [loadingData, setLoadingData] = useState(true);
    const [invoice,setInvoice] = useState([]);
    const [hidden, setHidden] = useState([]);
    useEffect(()=>{
    const fetchData = async () => {
      try {
            const res = await cachedGet(`${ENDPOINT_URL}/customer`)
                  const CustomerInfo = res.data.data.map((item)=>({
                    ...item,
                    id: item._id,
                  })) 
                  setCustomer(CustomerInfo.filter((row)=> row.credit !== undefined && row.credit > 0))
        // Stop loading spinner immediately after customer loads — don't block on invoice-Overdue
        /* setLoadingData(false) disabled here to fix race */
        // Load overdue invoices in background — if this endpoint is slow/missing it won't freeze the UI
        try {
          const resOverdue = await cachedGet(`${ENDPOINT_URL}/invoice-Overdue`)
          setInvoice(resOverdue.data)
          localStorage.setItem('InvoiceOverdue', JSON.stringify(resOverdue.data))
        } catch (_) {
          const storedCustomer = JSON.parse(localStorage.getItem('InvoiceOverdue')) || []
          if (Array.isArray(storedCustomer)) setInvoice(storedCustomer.reverse());
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        const storedCustomer = JSON.parse(localStorage.getItem('InvoiceOverdue')) || []
        if (Array.isArray(storedCustomer)) {
          setInvoice(storedCustomer.reverse());
        }else{
          setInvoice([])
        }
        /* setLoadingData(false) disabled here to fix race */
      }
    }
    fetchData()
  },[])
  useEffect(()=> {
    const fetchDataHidden = async () => {
     if (navigator.onLine) {
       try {
         const res = await cachedGet(`${ENDPOINT_URL}/hidden`)
          setHidden(res.data.data)
          localStorage.removeItem('Hidden')
          await db.hiddenSchema.clear()
          const validItems = res.data.data.filter(item => item.hiddenNumber).map(item => ({...item, synced:true,updateS:true}));
          await db.hiddenSchema.bulkPut(validItems);
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     } else {
      const offLineCustomer1 = await db.hiddenSchema.toArray();
      setHidden(offLineCustomer1)
     }
    }
    fetchDataHidden()
  },[])
 
  const invoicePaymentRow = invoice.filter((row)=> row.status === "Sent" || row.status === "Partially-Paid")
                                .map((row)=>({
                                   ...row,
                                   id: row._id,
                                   invoiceNumber: `INV-${String(row.invoiceNumber).padStart(6, '0')}`,
                                   dateField: dayjs(row.invoiceDate).format('DD/MM/YYYY'),
                                   dueDateField: dayjs(row.invoiceDueDate).format('DD/MM/YYYY'),
                                  }))
  {/** search start */}
const [searchInvoice, setSearchInvoice] = useState("");
useState(()=>{
  const storedValue = 
  if (storedValue) {
    setSearchInvoice(storedValue)
  }
  
})
const [filterModel, setFilterModel] = React.useState({
  items: [],
  quickFilterExcludeHiddenColumns: true,
  quickFilterValues: [],
});
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({});
  const handelHiddenColumn = (newHidden) => {
    setColumnVisibilityModel(newHidden)
    localStorage.setItem('HiddenColumnsInvoicePayment',JSON.stringify(newHidden))
  }
  const handleFilter = (newModel) => {
    setFilterModel(newModel)
    

  }
   useEffect(()=>{
    const storedQuick = 
    if (storedQuick) {
      setFilterModel(storedQuick)
    }
    const storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsInvoicePayment'))
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns)
    }

   },[searchInvoice])
{/** search end */}                           
  {/** Payment Received start */}
const [searchPayment, setPaymentInfo] = useState("");
useState(()=>{
  const storedValue = 
  if (storedValue) {
    setPaymentInfo(storedValue)
  }
  
})
const [filterModelPayment, setFilterModelPayment] = React.useState({
  items: [],
  quickFilterExcludeHiddenColumns: true,
  quickFilterValues: [],
});
  const [columnVisibilityModelPayment, setColumnVisibilityModelPayment] = useState({});
  const handelHiddenColumnPayment = (newHidden) => {
    setColumnVisibilityModelPayment(newHidden)
    localStorage.setItem('HiddenColumnsPayment',JSON.stringify(newHidden))
  }
  const handleFilterPayment = (newModel) => {
    setFilterModelPayment(newModel)
    

  }
   useEffect(()=>{
    const storedQuick = 
    if (storedQuick) {
      setFilterModelPayment(storedQuick)
    }
    const storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsPayment'))
    if (storedColumns) {
      setColumnVisibilityModelPayment(storedColumns)
    }

   },[])
   const [openReasonDelete, setOpenReasonDelete] = useState(false);

const handleOpenReasonDelete = (e) => {
  e.preventDefault()
  setOpenReasonDelete(true);
};
const handleCloseReasonDelete = () => {
  setOpenReasonDelete(false);
};
const [open, setOpen] = useState(false);
const [DeleteId, setDeleteId]= useState(null)
const [relatedInvoice,setRelatedInvoice] = useState([])
const [relatedCredit,setRelatedCredit] = useState(0);
const [modes,setModes] = useState(0)
const [amount,setAmount] = useState(0)
const [relatedCustomerID,setRelatedCustomerID] = useState('')
const [reason,setReason]= useState("");
const handleOpen = (id) => {
  setOpen(true);
  setDeleteId(id)
};
const handleClose = () => {
  setOpen(false);
  setRelatedInvoice([])
};
const [relatedNumber, setRelatedNumber] = useState(0)
useEffect(()=>{
  const fetchId = async () => {
   if (DeleteId) {
     if (navigator.onLine) {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/get-payment/${DeleteId}`)
        setRelatedInvoice(res.data.data.TotalAmount);
        setRelatedCredit(res.data.data.remaining);
        setModes(res.data.data.modes);
        setAmount(res.data.data.amount);
        setRelatedCustomerID(res.data.data.customerName._id);
        setRelatedNumber(Number(res.data?.data?.paymentNumber || res.data?.paymentNumber || 0));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
     } else {
      const resLocal = await db.paymentSchema.get({_id:DeleteId});
      setRelatedInvoice(resLocal.TotalAmount);
        setRelatedCredit(resLocal.remaining);
        setRelatedCustomerID(resLocal.customerName._id);
        setRelatedNumber(resLocal.paymentNumber);
        setModes(resLocal.modes);
        setAmount(resLocal.amount);
     }
   }
  }
  fetchId()
},[DeleteId])
const [invoiceInfo,setInvoiceInfo] = useState([])
useEffect(()=>{
  const fetchInvoice = async () => {
if (relatedInvoice.length > 0) {
  if (navigator.onLine) {
    const getInvoice = relatedInvoice.map((row)=>{
      return axios.get(`${ENDPOINT_URL}/get-invoice/${row.id}`)
    })
    try {
     const res = await Promise.all(getInvoice);
     setInvoiceInfo(res.map((row)=> row.data.data))
    }catch (error) {
      console.log('An error as occur');
    }
  } else {
    const getInvoice = relatedInvoice.map((row)=>{
      return db.invoiceSchema.get({_id:row.id})
    })
    const res = await Promise.all(getInvoice);
    setInvoiceInfo(res)
  }
}
  }
  fetchInvoice()
},[relatedInvoice])
const [oldCredit,setOldCredit] = useState(null)
useEffect(()=>{
  const fetchCustomer = async () => {
    if (relatedCustomerID) {
     if (navigator.onLine) {
       try {
         const res = await axios.get(`${ENDPOINT_URL}/get-customer/${relatedCustomerID}`)
         setOldCredit(res.data.data.credit !== null || res.data.data.credit !== undefined?res.data.data.credit: 0)
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     } else {
      const resLocal = await db.customerSchema.get({_id:relatedCustomerID})
      setOldCredit(resLocal.credit !== null || resLocal.credit !== undefined?resLocal.credit: 0)
     }
    }
  }
  fetchCustomer()
},[relatedCustomerID])
const totalR = modes === 'Credit-Account' ?parseFloat(oldCredit + amount):parseFloat(oldCredit - relatedCredit)
const updateInvoiceAmount = relatedInvoice ? 
relatedInvoice.map((row)=>
   {
    let status = ''
   const relatedI =  invoiceInfo?.find((row2)=>row2?._id === row.id )
  if (relatedI) {
     const rawTotal = parseFloat(relatedI.total) - parseFloat(row.total);
     const total = Math.round(rawTotal * 100) / 100;
     const balanceDueRaw = parseFloat(relatedI.totalInvoice) - total;
     const balanceDue = Math.round(balanceDueRaw * 100) / 100;
     if (total > 0) {
       status = 'Partially-Paid'
      }else {
        status = 'Sent'
      }
       return {
        id: row.id,
        number:relatedI.invoiceNumber,
        data: {
          total: total <= 0 ? "0" : total, 
          balanceDue,
          status
        }
      }
  }
   }
  )
:null
const handleUpdateInvoice = async () => {
  if (!navigator.onLine) return;
  if (!relatedInvoice || relatedInvoice.length === 0) return;
  try {
    // Fetch ALL remaining payments and each invoice's current state
    const [allPaymentsRes, ...freshInvoiceResponses] = await Promise.all([
      axios.get(`${ENDPOINT_URL}/payment`),
      ...relatedInvoice.map((row) => axios.get(`${ENDPOINT_URL}/get-invoice/${row.id}`))
    ]);

    const allPayments = allPaymentsRes.data?.data || [];

    const updates = relatedInvoice.map((row, idx) => {
      const invoice = freshInvoiceResponses[idx]?.data?.data;
      if (!invoice) return null;

      // Sum all remaining payments still linked to this invoice
      let totalPaid = 0;
      allPayments.forEach((payment) => {
        if (payment.TotalAmount && Array.isArray(payment.TotalAmount)) {
          payment.TotalAmount.forEach((ta) => {
            if (ta.id === row.id) {
              totalPaid += parseFloat(ta.total || 0);
            }
          });
        }
      });

      totalPaid = Math.round(totalPaid * 100) / 100;
      const invoiceTotal = parseFloat(invoice.totalInvoice || 0);
      const balanceDue = Math.round((invoiceTotal - totalPaid) * 100) / 100;
      const status = totalPaid <= 0 ? 'Sent' : (totalPaid >= invoiceTotal ? 'Paid' : 'Partially-Paid');

      return { id: row.id, data: { total: totalPaid, balanceDue, status } };
    }).filter(Boolean);

    await Promise.all(updates.map(({ id, data }) =>
      axios.put(`${ENDPOINT_URL}/update-invoice/${id}`, data)
    ));
    await Promise.all(updates.map(async ({ id, data }) => {
      await db.invoiceSchema.update(id, { ...data, updateS: true });
    }));
    invalidateCache('/invoice');
  } catch (error) {
    console.log('An error occurred during invoice update:', error);
  }
}
const handleUpdateCredit = async () => {
  const data = {
    credit:totalR
  }
if (navigator.onLine) {
    try {
     await axios.put(`${ENDPOINT_URL}/update-customer/${relatedCustomerID}`,data) 
     await db.customerSchema.update(relatedCustomerID,{...data,updateS:true})
    } catch (error) {
      console.error('Error fetching data:', error);
    }
}
} 
{/** delete multiple && all modal end */}
const [modalDeleteOpenLoading,setModalDeleteOpenLoading]= useState(false);
{/** Loading Delete View Start */}
const handleDeleteOpenLoading = () => {
  setModalDeleteOpenLoading(true);
  setLoading(true);
  handleClose();

  setTimeout(()=> {
    setLoading(false);
  }, 500)
}
const handleDeleteCloseLoading = () => {
    setModalDeleteOpenLoading(false);
    fetchData();
}
{/** Loading Delete View End */}
const handleCreateNotification = async () => {
  const data = {
    idInfo: '',
    person:user.data.userName + ' Deleted ' + `PAY-${String(relatedNumber).padStart(6, '0')}`,
    reason,
    dateNotification:new Date()
  }
  try {
    await axios.post(`${ENDPOINT_URL}/create-notification`,data)
  } catch (error) {
    console.log(error)
  }
}
const handleDelete = async (e) => {
  e.preventDefault()
if (navigator.onLine) {
    try {
     const res = await axios.delete(`${ENDPOINT_URL}/delete-payment/${DeleteId}`);
      if (res) {
          await handleUpdateInvoice();
          await handleUpdateCredit();
          await handleCreateNotification();
          invalidateCache('/payment');
          handleCloseReasonDelete();
          handleDeleteOpenLoading();
      }
    } catch (error) {
      console.error(error);
    }
}
  };
{/** search end */}    
const [sideBar, setSideBar] = React.useState(true);
const toggleDrawer = () => {
 setSideBar(!sideBar);
};                       
  const filteredRows = invoicePaymentRow.filter(row=> !hidden.some((row2)=> row2.idRow === row._id))
                          const columns = [
                                    {field: 'invoiceNumber', headerName: 'Invoice#', width:140},
                                    {field: 'customer', headerName: 'Customer Name', width:sideBar?240:350, valueGetter:(params)=> params.row.customerName.customerName.toUpperCase()},
                                    {field: 'status', headerName: 'Status', width:140, renderCell: (params)=> (
                                      <Typography
                                      color={
                                        params.row.status === "Draft"
                                        ? "gray":params.row.status === "Sent"
                                        ? "blue":
                                        params.row.status === "Decline"
                                        ? "red":
                                        params.row.status === "Pending"
                                        ? "#801313":
                                        params.row.status === "Paid"
                                        ? "#339ba5":
                                        params.row.status === "Partially-Paid"
                                        ? "#fb8c00":"black"
                                     }
                                      >
                                  {params.row.status}
                                      </Typography>
                                    )},
                                    {field: 'daysPastDue', headerName: 'Period', width:240,renderCell: (params)=> params.row.overdue === true ?
                                    <Typography
                                    color={params.row.daysPastDue > 0
                                      ? "red":"black"
                                   }
                                    >
                                Overdue: {params.row.daysPastDue} Days Past Due
                                    </Typography>
                                     :'ON TIME' },
                                    {field: 'subTotal', headerName: 'I-Amount', width:120,renderCell: (params)=> `$${params.row.subTotal?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}` },
                                    {field: 'total', headerName: 'A-Paid', width:120,renderCell: (params)=> `$${params.row.total?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}` },
                                    {field: 'balanceDue', headerName: 'B-Due', width:120,renderCell: (params)=> `$${params.row.balanceDue?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}` },
                                  ]
                 const columnsPayment = [
                                    {field: 'paymentNumber', headerName: 'Payment#', width:130, renderCell: (params)=> `PAY-${String(params.row.paymentNumber).padStart(6, '0')}` },
                                    {field: 'customer', headerName: 'Customer Name', width:sideBar?360:460, valueGetter:(params)=> params.row.customerName.customerName !== undefined?params.row.customerName.customerName.toUpperCase():null},
                                    {field: 'description', headerName: 'Description', width:sideBar?200:250},
                                    {field: 'dateField', headerName: 'Date', width:140},
                                      {field: 'modes', headerName: 'Mode', width:120, renderCell: (params)=> params.row.modes ? params.row.modes.toUpperCase() : ''},
                                    {field: 'amount', headerName: 'A-Paid', width:130,renderCell: (params)=> `$${params.row.amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')}` },
                                    {field: 'view', headerName: 'View', width:50, renderCell:(params)=> (
                                      <ViewTooltip title="View">
                                      <span>
                                         <IconButton disabled={PaymentInfoV.length === 0}>
                                         <NavLink to={`/PaymentInformationView/${params.row._id}`} className='LinkName'>
                                         <VisibilityIcon style={{color:'#202a5a'}}/> 
                                         </NavLink>
                                         </IconButton>
                                       </span>
                                  </ViewTooltip>
                                       
                                    ) },
                                    {field: 'edit', headerName: 'Edit', width:50, renderCell:(params)=> (
                                      <EditTooltip title="Edit">
                                      <span> 
                                  <IconButton disabled={PaymentInfoU.length === 0}>
                                  <NavLink to={`/PaymentInformationUpdate/${params.row._id}`} className='LinkName'>
                                  <EditIcon style={{color:'gray'}}/>
                                  </NavLink>
                                  </IconButton>
                                  </span>
                                  </EditTooltip>
                                       
                                    ) },  {field: 'Delete', headerName: 'Delete', width:50, renderCell:(params)=> (
                                      <DeleteTooltip title="Delete">
                                        <span>                  <IconButton onClick={() => handleOpen(params.row._id)} hidden={PaymentInfoD.length === 0}>
                                                                <DeleteIcon  style={{cursor:'pointer',color:'red'}}/> 
                                                                </IconButton>
                                                                </span>
                                      </DeleteTooltip>
                                    ) }
                                  ]
                                  const columnCustomer = [
                                    {field: 'customer', headerName: 'Customer Name', width:open?600:700, valueGetter:(params)=> params.row.Customer},
                                    {field: 'credit', headerName: 'Credit', width:300,renderCell: (params)=> `$${params.row.credit?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}` },
                                     {field: 'view', headerName: 'View', width:40, renderCell:(params)=> (
                                      <ViewTooltip title="View">
                                      <span>
                                         <IconButton disabled={user.data.role === 'User'}>
                                         <NavLink to={`/CustomerInformationView/${params.row._id}`} className='LinkName'>
                                         <VisibilityIcon style={{color:'#202a5a'}}/> 
                                         </NavLink>
                                         </IconButton>
                                       </span>
                                  </ViewTooltip>
                                    ) }
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
              Payment
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
   <Container maxWidth="none" sx={{ mt: 1}} >
    <Box>
    {
      loadingData?<div >
        <div style={{position:'relative', top:'120px'}}>
          <Loader/>
        </div>
      </div>:(
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
                label="Payment" 
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
                label="Payment Received" 
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
             user.data.role === 'CEO' &&(<Tab 
                label="Credit" 
                value="3"
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
        <div style={{marginTop:'-40px'}}>
           <section style={{position:'relative',float:'right',margin:'10px'}}>
      <ViewTooltip>
          <span>
             <IconButton hidden={PaymentInfoC.length === 0}>
             <NavLink to={'/PaymentInformationForm'} className='LinkName'>
             <span className='btnCustomerAdding'>
             <Add /> 
             </span>
             </NavLink>
             </IconButton>
           </span>
      </ViewTooltip>
          </section>
           {invoicePaymentRow.length > 0 ? (
    <Box sx={{ height: 560, width: '100%' }}>
       {
                      user.data.role === 'CEO'?(
                           <DataGrid
                           rows={invoicePaymentRow}
                           columns={columns}
                           slots={{toolbar: GridToolbar}}
                           slotProps={{
                            toolbar: {
                              showQuickFilter: true,
                          quickFilterProps: { debounceMs: 500 },
                              printOptions:{
                               disableToolbarButton: true
                             },
                            },
                          }}
                           checkboxSelection
                           disableDensitySelector
                           filterModel={filterModel}
                           onFilterModelChange={(newModel) => handleFilter(newModel)}
                           columnVisibilityModel = {columnVisibilityModel}
                           onColumnVisibilityModelChange={handelHiddenColumn}
                           sx={{width:'100%',backgroundColor:'white', padding:'10px'}}
                   />
                      ):(
                        <DataGrid
                        rows={filteredRows}
                        columns={columns}
                        slots={{toolbar: GridToolbar}}
                        slotProps={{
                         toolbar: {
                           showQuickFilter: true,
                          quickFilterProps: { debounceMs: 500 },
                           printOptions:{
                            disableToolbarButton: true
                          },
                         },
                       }}
                       checkboxSelection
                       disableDensitySelector
                       filterModel={filterModel}
                       onFilterModelChange={(newModel) => handleFilter(newModel)}
                       columnVisibilityModel = {columnVisibilityModel}
                       onColumnVisibilityModelChange={handelHiddenColumn}
                        sx={{width:'100%',backgroundColor:'white', padding:'10px'}}
                />
                   )
                    }
    </Box> 
   ) : 
   <div>
   <img  src={Image} style={{position:'relative',marginLeft:'19%',padding:'25px', height:'35%',top:'40px', width:'50%', boxShadow:'0 5px 10px rgba(0, 0, 0, 0.3)'}}/>
   </div>
   }
        </div>
        </TabPanel>
        <TabPanel value="2">
        <div >
          {payment.length > 0 ? (
          <Box sx={{ height: 630, width: '100%',marginTop:'-40px' }}>
         <br/>
          <DataGrid
                  rows={payment}
                  columns={columnsPayment}
                  slots={{toolbar: GridToolbar}}
                  slotProps={{
                    toolbar: {
                      showQuickFilter: true,
                          quickFilterProps: { debounceMs: 500 },
                      printOptions:{
                       disableToolbarButton: true
                     },
                    },
                  }}
                  checkboxSelection
                  disableDensitySelector
                  filterModel={filterModelPayment}
                  onFilterModelChange={(newModel) => handleFilterPayment(newModel)}
                  columnVisibilityModel = {columnVisibilityModelPayment}
                  onColumnVisibilityModelChange={handelHiddenColumnPayment}
                  sx={{width:'100%',backgroundColor:'white', padding:'10px'}}
          />
          </Box> 
          ) : <div>
         <img  src={Image} style={{position:'relative',marginLeft:'19%',padding:'25px', height:'35%',top:'40px', width:'50%', boxShadow:'0 5px 10px rgba(0, 0, 0, 0.3)'}}/>
         </div>}
      </div>
        </TabPanel>
        <TabPanel value="3">
        <div >
          {payment.length > 0 ? (
          <Box sx={{ height: 630, width: '100%',marginTop:'-40px' }}>
         <br/>
        <DataGrid
                             rows={customer}
                             columns={columnCustomer}
                             sx={{borderRadius:'5px',backgroundColor:'#fff'}}
                           />
          </Box> 
          ) : <div>
         <img  src={Image} style={{position:'relative',marginLeft:'19%',padding:'25px', height:'35%',top:'40px', width:'50%', boxShadow:'0 5px 10px rgba(0, 0, 0, 0.3)'}}/>
         </div>}
      </div>
        </TabPanel>
      </TabContext>)
      }
    </Box>   
     </Container></Box></Box>
     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          {
            DeleteId ?
            <Grid container style={{alignItems:'center',padding:'15px'}} spacing={2}>
        <Grid item xs={12} style={{width:'100%', textAlign:'center'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Do you Want to delete?
          </Typography>
          </Grid>
          <Grid item xs={6}>
            <button onClick={handleClose} className='btnCustomer' style={{width:'100%'}}>Cancel</button>
          </Grid>
          <Grid item xs={6}>
            <button onClick={handleOpenReasonDelete} className='btnCustomer2' style={{width:'100%'}}>Delete</button>
          </Grid>
        </Grid>:''
          }
        
        </Box>
      </Modal>  
      <Modal
      open={modalDeleteOpenLoading}
      onClose={handleDeleteCloseLoading}
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
                  <h2> Data successfully deleted</h2>
                  <div style={{display:'flex', gap:'60px',justifyContent:'center'}}>
              <button onClick={handleDeleteCloseLoading} className='btnCustomer'>
                Close
              </button>
            </div>
                </div>
                )}
                </div> 
      </Box>
    </Modal> 
    <Modal  
        open={openReasonDelete}
        onClose={handleCloseReasonDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
 <Box sx={{ ...style, width: 500 }}>
        <ViewTooltip title="Close" placement='left'>
        <IconButton onClick={handleCloseReasonDelete} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </ViewTooltip>  
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Why do you want to delete: PAY-{relatedNumber}?
          </Typography>
          <form onSubmit={handleDelete}>
             <Grid container style={{alignItems:'center',padding:'15px'}} spacing={2}>
          <Grid item xs={12}>
          <TextField 
          required
                  id='reason'
                  name='reason' 
                  multiline
                  rows={4}
                  value={reason}
                  placeholder='Reason'
                  onChange={(e)=>setReason(e.target.value)}
                  label='Reason'
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
           onClose={handleCloseModal}
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
                  <button onClick={handleCloseModal} className='btnCustomer'>
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

export default PaymentView
