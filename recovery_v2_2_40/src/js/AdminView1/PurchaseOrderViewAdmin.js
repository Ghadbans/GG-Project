import React,{ useEffect,useState,useRef } from 'react'
import './view.css'
import './PageView/Chartview.css';
import SideMaintenance from '../component/SideMaintenance'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink, useNavigate } from 'react-router-dom';
import {Table, IconButton,styled, TableBody,TableCell,TableHead,TableRow,Checkbox, TableContainer, Paper, Typography, Modal, Box, Grid, FormControl, InputLabel, Select, MenuItem,Backdrop, Autocomplete,TextField, Collapse, Pagination }  from '@mui/material';
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
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import axios from 'axios';
import { Add, Close, LocalPrintshop, MailOutline, Print } from '@mui/icons-material';
import dayjs from 'dayjs';
import Loader from '../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDispatch, useSelector } from "react-redux"
import { logOut, selectCurrentUser, setUser } from '../features/auth/authSlice';
import Logout from '@mui/icons-material/Logout';
import Image from '../img/no-data.png';
import Image2 from '../img/images.png';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Phone from '@mui/icons-material/Phone';
import WebIcon from '@mui/icons-material/Web';
import Email from '@mui/icons-material/Email';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MessageAdminView from './MessageAdminView';
import NotificationVIewInfo from './NotificationVIewInfo';
import db from '../dexieDb';
import ReactToPrint, { useReactToPrint } from 'react-to-print';

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
        overflowX: 'disabled',
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
function PurchaseOrderViewAdmin() {
    const navigate =useNavigate();
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
    
    // console.log(grantAccess)
    
     const InvoiceInfoC = grantAccess.filter((row)=> row.moduleName === "Purchase-Order" && row.access.createM === true);
     const InvoiceInfoV = grantAccess.filter((row)=> row.moduleName === "Purchase-Order" && row.access.viewM === true);
     const InvoiceInfoU = grantAccess.filter((row)=> row.moduleName === "Purchase-Order" && row.access.editM === true);
     const InvoiceInfoD = grantAccess.filter((row)=> row.moduleName === "Purchase-Order" && row.access.deleteM === true);
    
      {/** Get Invoice */}
    const [open1, setOpen1] = React.useState(true);
    const toggleDrawer = () => {
      setOpen1(!open1);
    };

      const [itemOut, setItemOut] = useState([]);
      const [loadingData, setLoadingData] = useState(true);
      const [selectedRows,setSelectedRows] = useState([]);
      const [newPurchase,setNewPurchase]= useState([]);
      const [item, SetItems] = useState([])
          
      const [page, setPage] = useState(0); // Initialize page state to 0 (0-based index)
      const limit = 100;
      const [searchTerm, setSearchTerm] = useState(''); // Initialize search term state
      const [filterField, setFilterField] = useState(''); // Initialize filter field state
      const [filterValue, setFilterValue] = useState(''); // Initialize filter value state
      const [totalPage, SetTotalPage] = useState(0);
    
      const fetchItems = async (page, searchTerm, filterField, filterValue) => {
        try {
          const res = await axios.get(`http://192.168.0.200:8080/endpoint/purchaseOrder-Information?page=${page + 1}&limit=${limit}&search=${encodeURIComponent(searchTerm.trim())}&filterField=${encodeURIComponent(filterField.trim())}&filterValue=${encodeURIComponent(filterValue.trim())}`);
          const formatDate = res.data.itemI.map((item) => ({
            ...item,
            id: item._id,
            dataField: dayjs(item.itemOutDate).format('DD/MM/YYYY'),
            referenceInfo: item.reference !== undefined && item.reference !== null ? item.reference.referenceName:item.description,
            itemInfo: item.itemsQtyArray.map((row)=>row.itemName!== undefined ? row.itemName.itemName :''),
            itemDescriptionInfo: item.itemsQtyArray.map((row)=>row.itemDescription!== undefined ? row.itemDescription :'')
          }));
          SetTotalPage(Math.ceil(res.data.totalItem / limit)); // Ensure totalPage is correctly calculated
          setItemOut(formatDate);
          setLoadingData(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          // Handle offline case
          const offLineItems = await db.purchaseOrder.toArray();
          const formatDate = offLineItems.map((item) => ({
            ...item,
            id: item._id,
            dataField: dayjs(item.itemOutDate).format('DD/MM/YYYY'),
            referenceInfo: item.reference !== undefined && item.reference !== null ? item.reference.referenceName:item.description,
            itemInfo: item.itemsQtyArray.map((row)=>row.itemName!== undefined ? row.itemName.itemName :''),
            itemDescriptionInfo: item.itemsQtyArray.map((row)=>row.itemDescription!== undefined ? row.itemDescription :'')
          }));
          setItemOut(formatDate.reverse());
          setLoadingData(false);
        }
      };

      const fetchAndSaveData = async () => {
        try {
          const res = await axios.get(`http://192.168.0.200:8080/endpoint/purchaseOrder`);
          await db.purchaseOrder.clear();
          await db.purchaseOrder.bulkPut(res.data.data);
          console.log('Data saved to IndexedDB successfully');
        } catch (error) {
          console.error('Error fetching and saving data:', error);
        }
      };
    
      useEffect(() => {
        fetchItems(page, searchTerm, filterField, filterValue);
        fetchAndSaveData();
      }, [page, searchTerm, filterField, filterValue]);
    
      const handlePageChange = (event, newPage) => {
        setPage(newPage - 1); // Update page state (convert to 0-based index)
      };
          {/** search start */}
const [filterModel, setFilterModel] = React.useState({
  items: [],
  quickFilterExcludeHiddenColumns: true,
  quickFilterValues: [],
});
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({});
  const handelHiddenColumn = (newHidden) => {
    setColumnVisibilityModel(newHidden)
    localStorage.setItem('HiddenColumnsPurchaseOrder',JSON.stringify(newHidden))
  }
  const handleFilter = (newModel) => {
    const searchTerm = newModel.quickFilterValues?.join(' ') || '';
    setSearchTerm(searchTerm);
    setFilterModel(newModel)
    
   localStorage.setItem('QuickFilterPurchaseOrderTst',JSON.stringify(newModel))
  }
   useEffect(()=>{
    const storedQuick = JSON.parse(localStorage.getItem('QuickFilterPurchaseOrderTst'))
    if (storedQuick) {
      setFilterModel(storedQuick)
    }
    const storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsPurchaseOrder'))
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns)
    }
   },[])
    {/** view start */}
    const [openView,setOpenView] = useState(false);
    const [idView,setIdView] = useState(null);
    const [itemPurchaseView,setItemPurchaseView] = useState(null)
    const [reason,setReason]= useState("");
    const handleOpenView = (id)=>{
      setOpenView(true);
      setIdView(id)
    }
    const handleCloseView = () => {
      setOpenView(false);
      setIdView(null);
      setItemPurchaseView(null);
      setSelectedRows([]);
    };
    useEffect(()=>{
      const fetchData2 = async () => {
        
        if (idView !== null) {
        if (navigator.onLine) {
          try {
            const res = await axios.get(`http://192.168.0.200:8080/endpoint/get-purchaseOrder/${idView}`)
            setItemPurchaseView(res.data.data)
          } catch (error) {
            console.log(error)
          }
        } else {
          const resLocal = await db.purchaseOrder.get({_id:idView})
          setItemPurchaseView(resLocal)
        }  
      }
      }
      fetchData2()
     },[idView])
       {/** view end */}
const [open, setOpen] = useState(false);
const [DeleteId, setDeleteId]= useState(null)
const handleOpen = (id) => {
  setOpen(true);
  setDeleteId(id)
};
const handleClose = () => {
  setOpen(false);
};
const [openReasonDelete, setOpenReasonDelete] = useState(false);

const handleOpenReasonDelete = (e) => {
  e.preventDefault()
  setOpenReasonDelete(true);
};
const handleCloseReasonDelete = () => {
  setOpenReasonDelete(false);
};
{/** delete multiple && all modal end */}
const [loading,setLoading]= useState(false);
const [loadingOpenModal,setLoadingOpenModal] = useState(false);
const [modalDeleteOpenLoading,setModalDeleteOpenLoading]= useState(false);
{/** Loading Update View Start */}
const handleOpenLoading = () => {
  setLoadingOpenModal(true);
  setLoading(true);
  handleCloseUpdate();
  setTimeout(()=> {
    setLoading(false);
  }, 500)
}
const handleCloseLoading = () => {
    window.location.reload();
}
{/** Loading Update View End */}

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
    window.location.reload();
}
{/** getting all info start */}
const [itemsQtyArray, SetItemsQtyArray] = useState([]);
const [reference,setReference] = useState({})
const [relatedNumber, setRelatedNumber] = useState(0)
useEffect(()=>{
  const fetchId = async () => {
    if (DeleteId !== null) {
      try {
        const res = await  axios.get(`http://192.168.0.200:8080/endpoint/get-purchaseOrder/${DeleteId}`)
        SetItemsQtyArray(res.data.data.itemsQtyArray);
        setReference(res.data.data.reference);
        setRelatedNumber(res.data.data.outNumber);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
  fetchId()
},[DeleteId])
{/** Delete Start */}
const handleCreateNotification = async () => {
    const data = {
      idInfo: '',
      person:user.data.userName + ' Deleted ' +' PO-'+ relatedNumber,
      reason,
      dateNotification:new Date()
    }
    try {
      await axios.post('http://192.168.0.200:8080/endpoint/create-notification',data)
    } catch (error) {
      console.log(error)
    }
  }
  const [updateS,setUpdateS] = useState(false);

  const onStatusUpdate = async (e,idInfo) => {
    e.preventDefault();
    try {
      const data = {
        status: 'Purchase'
      }
      const res = await axios.put(`http://192.168.0.200:8080/endpoint/update-purchaseOrder/${idInfo}`,data);
      if (res) {
        setUpdateS(true);
        handleDeleteOpenLoading();
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  const handleDeleteUpdate = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.delete(`http://192.168.0.200:8080/endpoint/delete-purchaseOrder/${DeleteId}`);
      if (res) {
             handleDeleteOpenLoading();
             handleCreateNotification();
             }} 
            catch (error) {
              console.log('An error as occur in delete');
            }
  }
  {/**     {field: 'status', headerName: 'Purchase', width:180, renderCell: (params)=> (<div>{params.row.status === 'Purchase'?<span>{params.row.status}</span>:<button onClick={(e)=>onStatusUpdate(e,params.row._id)} className='btnCustomer'>PURCHASE</button>}  </div>)  }, */}
  
  const columns = [
    {field: 'outNumber', headerName: '#', width:90, renderCell: (params)=> (<div> <span>PO-0</span><span>{params.row.outNumber}</span> </div>) },
    {field: 'dataField', headerName: 'Date', width:100},
    {field: 'reason', headerName: 'Reason', width:140},
    {field: 'referenceInfo', headerName: 'Description', width:open1?340:550 },
    {field: 'itemInfo', headerName: 'Item', width:open1?80:130},
    {field: 'itemDescriptionInfo', headerName: 'I-Description', width:open1?80:130},
    {field: 'Converted', headerName: 'Status', width:130, renderCell: (params)=> (<div> <span>{params.row.Converted === true ? <Typography
    sx={{color:'#4caf50'}}
      >
  Converted
      </Typography>:<Typography
    sx={{color:'#801313'}}
      >
  Open
      </Typography> }</span> </div>) },
    {field: 'view', headerName: 'View', width:50, renderCell:(params)=> (
      <ViewTooltip title="View">
    <span>
       <IconButton disabled={InvoiceInfoV.length === 0 && user.data.role !== 'CEO'}>
       <NavLink to={`/PurchaseOrderInfoView/${params.row._id}`} className='LinkName'>
       <VisibilityIcon style={{color:'#202a5a'}}/> 
       </NavLink>
       </IconButton>
     </span>
</ViewTooltip>
    ) },
    {field: 'edit', headerName: 'Edit', width:50, renderCell:(params)=> (
                                    <EditTooltip title="Edit">
                                      <span> 
                                  <IconButton disabled={InvoiceInfoU.length === 0 && user.data.role !== 'CEO'}>
                                  <NavLink to={`/PurchaseUpdateOrder/${params.row._id}`} className='LinkName'>
                                  <EditIcon style={{color:'gray'}}/>
                                  </NavLink>
                                  </IconButton>
                                  </span>
                                </EditTooltip>
       
    ) },
    {field: 'Delete', headerName: 'Delete', width:50, renderCell:(params)=> (
      <DeleteTooltip title="Delete">
        <span>                  <IconButton onClick={() => handleOpen(params.row._id)} disabled={InvoiceInfoD.length === 0 && user.data.role !== 'CEO'}>
                                <DeleteIcon  style={{cursor:'pointer',color:'red'}}/> 
                                </IconButton>
                                </span>
      </DeleteTooltip>
    ) },
  ]
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content:()=> componentRef.current
  })
  return (
    <div className='Homeemployee'>
     <Box sx={{ display: 'flex' }}>
                 <CssBaseline />
         <AppBar position="absolute" open={open1} sx={{backgroundColor:'#30368a'}}>
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
                ...(open1 && { display: 'none' }),
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
              Purchase Order
            </Typography>
            <NotificationVIewInfo/>
            <MessageAdminView name={user.data.userName} role={user.data.role}/>
            <IconButton color="inherit" onClick={handleLogout}>
            <Logout style={{color:'white'}} /> 
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open1}>
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
          <SideMaintenance/>
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
   {
      loadingData?<div>
        <div style={{position:'relative', top:'120px'}}>
          <Loader/>
        </div>
      </div>:(
         <div>
              <NavLink to="/PurchaseForm" className='ItemsName' disabled={InvoiceInfoC.length === 0 && user.data.role !== 'CEO'} style={{position:'relative',float:'right',margin:'10px'}}>
              <Add className='btnCustomer' style={{fontSize:'40px'}}/>
           </NavLink>
      
           <Box sx={{ height: 600, width: '100%' }}>
         <DataGrid
                  rows={itemOut}
                  columns={columns}
                  slots={{toolbar: GridToolbar}}
                  onRowSelectionModelChange={(newSelection) => setSelectedRows(newSelection)}
                  slotProps={{
                    toolbar: {
                      showQuickFilter: true,
                      printOptions:{
                       disableToolbarButton: true
                     },
                    },
                  }}
                  getRowClassName={(params)=>{
                    return  newPurchase.includes(params.row._id)? 'new-Purchase' :''
                    }}
                  checkboxSelection
                  disableDensitySelector
                  filterModel={filterModel}
                  rowSelectionModel={selectedRows}
                  onFilterModelChange={(newModel) => handleFilter(newModel)}
                  columnVisibilityModel = {columnVisibilityModel}
                  onColumnVisibilityModelChange={handelHiddenColumn}
                  sx={{width:'100%',backgroundColor:'white', padding:'10px'}}
                />
                       <Pagination count={totalPage} page={page + 1} onChange={handlePageChange} color="primary" sx={{position:'relative',top:'-50px'}}/>
               </Box>
     
    </div>)
     }
     </Container>
     </Box>
     </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
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
        </Grid>
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
                  {
                    updateS === true?<h2> Data successfully Updated</h2> :<h2> Data successfully deleted</h2>
                  }
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
       open={openView}
        onClose={handleCloseView}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
 <Box sx={{ ...style, width: 1150 }}>
        <ViewTooltip title="Close" placement='left'>
        <IconButton onClick={handleCloseView} style={{ position:'relative', float:'right'}}> 
                      <Close style={{color:'#202a5a'}}/>
        </IconButton>
        </ViewTooltip>  
        {
          itemPurchaseView !== null? 
          <div>
                   <Box disabled>
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
<img src={Image2} />       
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
                  <p className='invoicehr' style={{fontSize:'14px'}}>Purchase Order</p>
<div className='content' style={{marginBottom:'20px',position:'relative'}}>
  <section style={{display:'flex',justifyContent:'space-between',marginBottom:'5px'}}>
  <address style={{position:'relative',lineHeight:1.35,width:'60%'}}>
           <p style={{}}>
            <span style={{fontWeight:'bold', fontSize:'13px'}}>
              For
            </span>
            <br/>
            <span style={{fontWeight:'bold', fontSize:'13px'}}>
            {itemPurchaseView.reference!== undefined && itemPurchaseView.reference !== null?itemPurchaseView.reference.referenceName:itemPurchaseView.description}
            </span>
            </p> 
            </address>       
            
            <table className="firstTable" style={{position:'relative',fontSize:'70%',left:'83px',marginBottom:'10px',pageBreakInside:'auto'}}>
           
              <tbody>         
                <tr>
                <td style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Order #</span></td>
                <td style={{backgroundColor:'white',border:'none',textAlign:'right'}}><span >PO-0{itemPurchaseView.outNumber}</span></td>
              </tr>
                <tr>
                <td style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Date</span></td>
                <td style={{backgroundColor:'white',border:'none',textAlign:'right'}}><span >{dayjs(itemPurchaseView.itemOutDate).format('DD/MM/YYYY')}</span></td>
              </tr>
                <tr>
                <td style={{backgroundColor:'white',border:'none',textAlign:'left'}}><span >Subject</span></td>
                <td style={{backgroundColor:'white',border:'none',textAlign:'right'}}><span >{itemPurchaseView.reason}</span></td>
              </tr>
              </tbody>
            </table>
      </section>
    <section style={{}}>
    <table className="secondTable" style={{fontSize:'70%',marginBottom:'5px',border:'1px solid #DDD', maxHeight:'400px', overflow:'auto', pageBreakInside:'auto'}}>
  <thead>
                    <tr>
                        <th style={{width:'100px', borderBottom:'1px solid #DDD',backgroundColor:'#e8f7fe'}}>#</th>
                        <th style={{width:'150px', borderBottom:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Item</th>
                        <th style={{width:'400px',borderBottom:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Description</th>
                        <th style={{width:'100px', borderBottom:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Qty Need</th>
                        <th style={{width:'100px', borderBottom:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Qty Buy</th>
                        <th style={{width:'100px', borderBottom:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Rate</th>
                        <th style={{width:'150px', borderBottom:'1px solid #DDD',backgroundColor:'#e8f7fe'}} align="left">Total</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    itemPurchaseView.itemsQtyArray.filter((row)=> parseInt(row.newItemOut) !== 0)
                                           .map((row,i)=>
                       {
                        const relatedUnit = item.find((Item1)=> Item1._id === row.itemName._id)
                        return               (
                 <tr key={row.idRow}>
                  {
                    
                     row.newDescription !== undefined?
                     <>
                       <td style={{textAlign:'center'}}><span>{i + 1}</span></td>
                   <td colSpan={6} style={{textAlign:'center',border:'1px solid #DDD'}} align='center'>{row.newDescription}</td>
                     </>
                  
                     :
                     <>
                  <td style={{textAlign:'center',width:'30px'}}>{i + 1}</td>
                  <td style={{width:'200px',borderLeft:'1px solid #DDD'}}>{row.itemName.itemName !== 'empty'?row.itemName.itemName:''}</td>
                  <td style={{textAlign:'left',width:'250px',borderLeft:'1px solid #DDD'}}>{row.itemDescription}</td>
                  <td style={{textAlign:'right',width:'30px',borderLeft:'1px solid #DDD'}}>{row.itemQty} {relatedUnit !==undefined? relatedUnit.unit.toUpperCase():''}</td>
                  <td style={{textAlign:'right',width:'30px',borderLeft:'1px solid #DDD'}}></td>
                  <td style={{textAlign:'right',width:'80px',borderLeft:'1px solid #DDD'}}></td>
                  <td style={{textAlign:'right',width:'100px',borderLeft:'1px solid #DDD'}}></td>
                     </>
                  }
  
                  </tr> 
                    )}
                  )
                  }
                </tbody>
 
            </table>
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
                  <p disabled>...</p>
                  <p disabled>...</p>
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

 <Typography id="modal-modal-title" variant="h6" component="h2" sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
       <span>{itemPurchaseView.Create.person} Create PO-0{itemPurchaseView.outNumber} on {itemPurchaseView.Create.dateComment}</span> 
       <span>
       <NavLink to={`/ConvertPoToIP/${itemPurchaseView._id}`} className='LinkName'>
      <button className='btnCustomer'> Convert To I-Purchase</button>                   
      </NavLink>
       </span>
       <PrintTooltip title="Print"> 
                                  <IconButton onClick={handlePrint}>
                                  <LocalPrintshop  />
                                  </IconButton>
             </PrintTooltip>
          </Typography>
        <Grid container style={{alignItems:'center',padding:'15px'}} spacing={2}>
         
            <Grid container style={{alignItems:'center',padding:'15px'}} spacing={2}>
            
            <Grid item xs={12}>
            <Box sx={{ height: 600, width: '100%' }}>
            <Table style={{marginBottom:'5px'}}>
                  <TableBody>
                    <TableRow>
                    <TableCell>Purchase Order Date</TableCell>
                    <TableCell colSpan={3}>{dayjs(itemPurchaseView.itemOutDate).format('DD/MM/YYYY')}</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell>Reason</TableCell>
                    <TableCell colSpan={3}>{itemPurchaseView.reason!== undefined?itemPurchaseView.reason:''}</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell>Reference</TableCell>
                    <TableCell colSpan={3}>{itemPurchaseView.reference!== undefined && itemPurchaseView.reference !== null?itemPurchaseView.reference.referenceName:''}</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell colSpan={3}>{itemPurchaseView.description!== undefined?itemPurchaseView.description:''}</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell>Manufacturer Info</TableCell>
                    <TableCell colSpan={3}>{itemPurchaseView!==undefined?itemPurchaseView.manufacturer + ' / ' + itemPurchaseView.manufacturerNumber:''}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
            <TableContainer sx={{maxHeight: 380,marginBottom:'5px'}}>
              <Table aria-label="collapsible table" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Item</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Qty Need</TableCell>
                    <TableCell>Qty Buy</TableCell>
                    <TableCell>Price($)</TableCell>
                    <TableCell>Amount Paid(FC)</TableCell>
                    <TableCell>Rate </TableCell>
                    <TableCell>Amount Paid($)</TableCell>
                    <TableCell>Total($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    itemPurchaseView.itemsQtyArray.filter((row)=> parseInt(row.newItemOut) !== 0)
                                           .map((row,i)=>
                       {
                        const relatedUnit = item.find((Item1)=> Item1._id === row.itemName._id)
                        return               (
                 <TableRow key={row.idRow}>
                  {
                    
                     row.newDescription !== undefined?
                     <TableCell colSpan={9} align='center'>{row.newDescription}</TableCell>
                     :
                     <>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{row.itemName.itemName !== 'empty'?row.itemName.itemName:''}</TableCell>
                  <TableCell>{row.itemDescription}</TableCell>
                  <TableCell>{row.itemQty} {relatedUnit !==undefined? relatedUnit.unit.toUpperCase():''}</TableCell>
                  <TableCell>{row.qtyBuy} {relatedUnit !==undefined? relatedUnit.unit.toUpperCase():''}</TableCell>
                  <TableCell>{parseFloat(row.itemRate).toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')}</TableCell>
                  <TableCell>FC{row.totalAmountFC!==undefined? parseFloat(row.totalAmountFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g,','):0}</TableCell>
                  <TableCell>{row.Taux!==undefined?parseFloat(row.Taux).toString().replace(/\B(?=(\d{3})+(?!\d))/g,','):0}</TableCell>
                  <TableCell>${parseFloat(row.totalAmount).toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')}</TableCell>
                  <TableCell>{row.fcConvertToUsdTotal!==undefined?parseFloat(row.fcConvertToUsdTotal).toString().replace(/\B(?=(\d{3})+(?!\d))/g,','):0}</TableCell>
                     </>
                  }
  
                  </TableRow> 
                    )}
                  )
                  }
                  <TableRow>
                    <TableCell >Total</TableCell>
                    <TableCell colSpan={2} sx={{textAlign:'right'}}>FC{itemPurchaseView.totalFC!== undefined?parseFloat(itemPurchaseView.totalFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g,','):0}</TableCell>
                    <TableCell colSpan={2} sx={{textAlign:'right'}}>${itemPurchaseView.total!==undefined?itemPurchaseView.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,','):0}</TableCell>
                    <TableCell colSpan={2} sx={{textAlign:'right'}}>${itemPurchaseView.totalUSD!== undefined?parseFloat(itemPurchaseView.totalUSD).toString().replace(/\B(?=(\d{3})+(?!\d))/g,','):0}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            </Box>
          </Grid>
          </Grid>
        </Grid>
          </div>
          :null
        }
       
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
          Why do you want to delete: PO-{relatedNumber}?
          </Typography>
          <form onSubmit={handleDeleteUpdate}>
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
    </div>
  )
}
export default PurchaseOrderViewAdmin