import React, { useEffect,useState } from 'react';
import './view.css';
import SidebarDash from '../component/SidebarDash';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './PageView/Chartview.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink, useNavigate } from 'react-router-dom';
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
import {Table, IconButton,styled, TableBody,TableCell,TableHead,TableRow,Checkbox, TableContainer, Paper, Typography, Modal, Box, Grid, FormControl, InputLabel, Select, MenuItem,Backdrop, Autocomplete,TextField }  from '@mui/material';
import axios from 'axios';
import { Add, Close, MailOutline, Person2Outlined, PersonOffRounded } from '@mui/icons-material';
import dayjs from 'dayjs';
import Loader from '../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDispatch, useSelector } from "react-redux"
import { logOut, selectCurrentUser, setUser } from '../features/auth/authSlice';
import Logout from '@mui/icons-material/Logout';
import Image from '../img/no-data.png';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import MessageAdminView from './MessageAdminView';
import NotificationVIewInfo from './NotificationVIewInfo';
import db from '../dexieDb';

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
function EstimateViewAdmin() {
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
     offLineCustomer1.filter((row)=> row.userID === user.data.id )
     .map((row)=>setGrantAccess(row.modules))
   }
     }
     fetchNumber()
   },[user])

   const estimationInfoC = grantAccess.filter((row)=> row.moduleName === "Estimate" && row.access.createM === true);
   const estimationInfoV = grantAccess.filter((row)=> row.moduleName === "Estimate" && row.access.viewM === true);
   const estimationInfoU = grantAccess.filter((row)=> row.moduleName === "Estimate" && row.access.editM === true);
   const estimationInfoD = grantAccess.filter((row)=> row.moduleName === "Estimate" && row.access.deleteM === true);


  const [estimate,setEstimate] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [hiddenRow, setHiddenRow] = useState([]);
  const [hidden, setHidden] = useState([]);
  const [selectedRows,setSelectedRows] = useState([]);
  const [reason,setReason]= useState("");
  const fetchData = async () => {
    if (navigator.onLine) {
      try {
        const res = await axios.get('http://192.168.0.200:8080/endpoint/estimation')
        const formatDate = res.data.data.map((item)=>({
          ...item,
          id: item._id,
          estimateNumber: "EST-00"+item.estimateNumber,
          dataField: dayjs(item.estimateDate).format('DD/MM/YYYY'),
        })) 
        setEstimate(formatDate.reverse());
        await db.estimateSchema.clear();
        await Promise.all(res.data.data.map( async (item)=>{
         await db.estimateSchema.put({...item, synced:true,updateS:true})
        }))
        setLoadingData(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadingData(false)
      }
    }else{
     const offLineCustomer1 = await db.estimateSchema.toArray();
     const formatDate = offLineCustomer1.map((item)=>({
       ...item,
       id: item._id,
       estimateNumber: "EST-00"+item.estimateNumber,
       dataField: dayjs(new Date(item.estimateDate)).format('DD/MM/YYYY'),
     })) 
     setEstimate(formatDate.reverse())
     setLoadingData(false)
    }
   }
   const [loading,setLoading]= useState(false);
   const [ErrorOpenModal,setErrorOpenModal] = useState(false);
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
  const handleCreateNotificationOffline = async (ReferenceInfo,ReferenceInfoNumber,ReferenceInfoCustomer) => {
    const data = {
      idInfo: ReferenceInfo,
      person:user.data.userName + ' Created ',
      reason:  'EST-'+ReferenceInfoNumber + ' For ' + ReferenceInfoCustomer,
      dateNotification: new Date()
    }
    try {
      await axios.post('http://192.168.0.200:8080/endpoint/create-notification',data)
    } catch (error) {
      console.log(error)
    }
  }
const syncOff = async () => {
  if (navigator.onLine) {
    const syncedEstimate = await db.estimateSchema.toArray();
    const estimateToSynced = syncedEstimate.filter((row)=>row.synced === false)
   for(const estimateInfo of estimateToSynced){
    try {
       const res = await axios.post('http://192.168.0.200:8080/endpoint/create-estimation',estimateInfo)
       if (res) {
        const ReferenceInfo = res.data.data._id
        const ReferenceInfoNumber = res.data.data.estimateNumber
        const ReferenceInfoCustomer = res.data.data.customerName.customerName
        handleCreateNotificationOffline(ReferenceInfo,ReferenceInfoNumber,ReferenceInfoCustomer)
        handleOpenOffline();
       }
    } catch (error) {
      console.log(error)
    }
    }
    const estimateToSyncedUpdate = syncedEstimate.filter((row)=>row.updateS === false)
    for(const estimateInfoUpdate of estimateToSyncedUpdate){
      try {
         await axios.put(`http://192.168.0.200:8080/endpoint/update-estimation/${estimateInfoUpdate._id}`,estimateInfoUpdate)
         await db.estimateSchema.update(estimateInfoUpdate._id, { synced:true,updateS:true})
         handleOpenOffline();
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
useEffect(()=> {
  const fetchDataHidden = async () => {
   if (navigator.onLine) {
     try {
       const res = await axios.get('http://192.168.0.200:8080/endpoint/hidden')
        setHiddenRow(res.data.data.map((row)=> row.idRow))
        setHidden(res.data.data)
        await Promise.all(res.data.data.map( async (item)=>{
         await db.hiddenSchema.put({...item, synced:true,updateS:true})
        }))
     } catch (error) {
       console.error('Error fetching data:', error);
     }
   } else {
    const offLineCustomer1 = await db.hiddenSchema.toArray();
    setHiddenRow(offLineCustomer1.map((row)=> row.idRow))
    setHidden(offLineCustomer1)
   }
  }
  fetchDataHidden()
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

const handleOpen = (id) => {
  setOpen(true);
  setDeleteId(id)
};
const handleClose = () => {
  setOpen(false);
};
const [open1, setOpen1] = useState(false);
const [updateId, setUpdateId]= useState(null);
const [status,setStatus] = useState("");

const handleOpenUpdate = (id) => {
  setOpen1(true);
  setUpdateId(id);
};
const handleCloseUpdate = () => {
  setOpen1(false);
  setUpdateId(null);
};
  {/** delete multiple && all modal start */}
  const [openDeleteMultiple, setOpenDeleteMultiple] = useState(false);

  const handleOpenMultiple= () => {
    setOpenDeleteMultiple(true);
  };
      const handleCloseMultiple = () => {
   setOpenDeleteMultiple(false);
  };
  const [openDeleteAll, setOpenDeleteAll] = useState(false);

   const handleOpenAll= () => {
    setOpenDeleteAll(true);
  };
      const handleCloseAll = () => {
   setOpenDeleteAll(false);
   setSelectedRows([])
  };
  {/** delete multiple && all modal end */}

{/** Loading Delete View End */}

    const handleDelete = async () => {
      try {
        const res = await axios.delete(`http://192.168.0.200:8080/endpoint/delete-estimation/${DeleteId}`);
        if (res) {
          handleDeleteOpenLoading();
        }
      } catch (error) {
        alert('An error as Occur');
      }
    };
    const [EstimateDeleted,setEstimateDeleted]= useState([])
        useEffect(()=>{
          const fetchFunction = async () => {
            const deletePromises = selectedRows.map( async (idToDelete)=> {
              return axios.get(`http://192.168.0.200:8080/endpoint/get-estimation/${idToDelete}`)
            })
            try {
             const res = await Promise.all(deletePromises);
             setEstimateDeleted(res.map((row)=>'EST-' + row.data.data.estimateNumber))
            } catch (error) {
              console.log(error)
            }
          }
          fetchFunction()
        },[selectedRows])
        const related = EstimateDeleted.map(row=>row)
        const info = related.toString()
        const handleCreateNotification = async () => {
          const data = {
            idInfo: '',
            person:user.data.userName + ' Deleted ' + info,
            reason,
            dateNotification:new Date()
          }
          try {
            await axios.post('http://192.168.0.200:8080/endpoint/create-notification',data)
          } catch (error) {
            console.log(error)
          }
        }
    const handleDeleteMany = async (e) => {
      e.preventDefault()
      const deletePromises = selectedRows.map( async (idToDelete)=> {
        return axios.delete(`http://192.168.0.200:8080/endpoint/delete-estimation/${idToDelete}`)
      })
      try {
       const res = await Promise.all(deletePromises);
       if (res) {
        handleCreateNotification()
        handleDeleteOpenLoading();
       }
      } catch (error) {
        console.log(error)
      }
    }
    {/** DElete End */}
    const [estimateN,setEstimateN] = useState(0)
    useEffect (() => {
      if (updateId !== null) {
        axios.get(`http://192.168.0.200:8080/endpoint/get-estimation/${updateId}`)
        .then(res => {
          // get the response data here
          setStatus(res.data.data.status);
          setEstimateN(res.data.data.estimateNumber);
        })
        .catch(error => {
          // Handle errors
          console.error('Error fetching data:', error);
        });
      }
      },[updateId]);
      const handleCreateComment = async () => {
        const data = {
          idInfo:updateId,
          person:user.data.userName,
          reason: status + ' EST-'+estimateN,
          dateNotification:new Date()
        };
        try {
          await axios.post('http://192.168.0.200:8080/endpoint/create-notification/',data)
        } catch (error) {
         console.log(error)
        }
      }  
    const handleSubmitUpdateStatus = async (e) => {
      e.preventDefault();
      const data = {
        status
      };
      try {
        const res = await axios.put(`http://192.168.0.200:8080/endpoint/update-estimation/${updateId}`,data)
        if (res) {
          handleCreateComment();
          handleOpenLoading();
        }
      } catch (error) {
        console.error('Error making POST request:', error);
      }
    }
   {/** hide Start */}
const handleHideRow = async (id) => {

  if (user.data.role === 'CEO') {
    try {
      if (hiddenRow.includes(id)) {
        setHiddenRow(hiddenRow.filter((row)=> row !== id));
       const result= hidden.filter((row)=> row.idRow === id)
                              .map((row)=> row._id)
       const hiddenId = result.toString()
     
       await axios.delete(`http://192.168.0.200:8080/endpoint/delete-hidden/${hiddenId}`);
      } else {
        setHiddenRow([...hiddenRow, id]);
         await axios.post('http://192.168.0.200:8080/endpoint/create-hidden',{
          idRow: id , hiddenByCEO: true
         })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

const rowRenderer = (params)=> {
  if (hiddenRow.includes(params.row._id && !user.data.role === 'CEO')) {
    return null
  }
  return <div>{params.row[params.field]}</div>
}
const [filteredRows,setFilteredRows] = useState([])
useEffect(()=>{
   const Est = estimate.filter(row=> !hiddenRow.includes(row._id))
   setFilteredRows(Est)
},[estimate])
   {/** hide End */}
   const [searchEstimate, setSearchEstimate] = useState("");
  useState(()=>{
    const storedValue = localStorage.getItem('QuickFilterEstimate')
    if (storedValue) {
      setSearchEstimate(storedValue)
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
      localStorage.setItem('HiddenColumnsEstimate',JSON.stringify(newHidden))
    }
    const handleFilter = (newModel) => {
      setFilterModel(newModel)
      
     localStorage.setItem('QuickFilterEstimateTst',JSON.stringify(newModel))
    }
     useEffect(()=>{
      const storedQuick = JSON.parse(localStorage.getItem('QuickFilterEstimateTst'))
      if (storedQuick) {
        setFilterModel(storedQuick)
      }
      const storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsEstimate'))
      if (storedColumns) {
        setColumnVisibilityModel(storedColumns)
      }

     },[searchEstimate])
     const [sideBar, setSideBar] = React.useState(true);
     const toggleDrawer = () => {
      setSideBar(!sideBar);
     };
    const columns = [
      {field: 'dataField', headerName: 'Date', width:100},
      {field: 'customer', headerName: 'Customer Name', width:sideBar?200:300, valueGetter:(params)=> params.row.customerName.customerName.toUpperCase()},
      {field: 'estimateNumber', headerName: 'Estimate#', width:sideBar?100:200},
      {field: 'estimateSubject', headerName: 'Subject', width:200},
      {field: 'status', headerName: 'Status', width:110, renderCell: (params)=> (
        <Typography
        color={
          params.row.status === "Draft"
          ? "gray":params.row.status === "Sent"
          ? "blue":
          params.row.status === "Decline"
          ? "red":
          params.row.status === "Approved"
          ? "#339ba5":
          params.row.status === "Invoiced"
          ? "#6a1b9a":"black"
       }
        >
{params.row.status}
        </Typography>
      )},
      {field: 'subTotal', headerName: 'Amount', width:sideBar?90:150,renderCell: (params)=> `$${params.row.totalInvoice?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',')}` },
      {field: 'view', headerName: 'View', width:80, renderCell:(params)=> (
        <ViewTooltip title="View">
        <span>
           <IconButton disabled={estimationInfoV.length === 0 && user.data.role !== 'CEO'}>
           <NavLink to={`/EstimateViewAdminAll/${params.row._id}`} className='LinkName'>
           <VisibilityIcon style={{color:'#202a5a'}}/> 
           </NavLink>
           </IconButton>
         </span>
    </ViewTooltip>    
      ) },
      {field: 'edit', headerName: 'Edit', width:80, renderCell:(params)=> (
                                      <EditTooltip title="Edit">
                                        <span> 
                                    <IconButton onClick={()=> handleOpenUpdate(params.row._id)} disabled={params.row.status !== 'Draft' && estimationInfoU.length === 0 && user.data.role !== 'CEO'}>
                                    <EditIcon style={{color:'gray'}}/>
                                    </IconButton>
                                    </span>
                                  </EditTooltip>
         
      ) },
      {field: 'Delete', headerName: 'Delete', width:80, renderCell:(params)=> (
        <DeleteTooltip title="Delete">
          <span>                                <IconButton onClick={handleOpenAll} disabled={estimationInfoD.length === 0 && user.data.role !== 'CEO'}>
                                  <DeleteIcon  style={{cursor:'pointer',color:'red'}}/> 
                                  </IconButton>
                                  </span>
        </DeleteTooltip>
      ) },{
        field: 'hide',
      headerName:'Action',
      sortable: false,
      width: 80,
      renderCell: (params) => {
        if (user.data.role === 'CEO') {
          return (
            <div>
              {
                hiddenRow.includes(params.row._id) ? 
        (    <ViewTooltip title="UnHide">
        <span>
           <IconButton onClick={()=>handleHideRow(params.row._id)} >
           <PersonOffRounded style={{color:'#202a5a'}}/> 
           </IconButton>
         </span>
    </ViewTooltip>)
                : (
                  <ViewTooltip title="Hide">
                  <span>
                     <IconButton onClick={handleOpenAll} >
                     <Person2Outlined style={{color:'#202a5a'}}/> 
                     </IconButton>
                   </span>
              </ViewTooltip>
                )
      
              }
            </div>
          )
        }
      } 
      }
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
              Estimation
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
{
      loadingData?<div >
        <div style={{position:'relative', top:'120px'}}>
          <Loader/>
        </div>
      </div>:(
      <div >
            <section style={{position:'relative',float:'right',margin:'10px'}}>
      <ViewTooltip>
          <span>
             <IconButton disabled={estimationInfoC.length === 0 && user.data.role !== 'CEO'}>
             <NavLink to={'/EstimateInvoiceForm'} className='LinkName'>
             <span className='btnCustomerAdding'>
             <Add /> 
             </span>
             </NavLink>
             </IconButton>
           </span>
      </ViewTooltip>
          </section>
          
             {estimate.length > 0 ? (
                      <Box sx={{ height: 600, width: '100%' }}>
                                 {estimate.length > 0 ?(
            <section style={{position:'relative',float:'left',margin:'10px'}}>
           {
            selectedRows.length > 1 && selectedRows.length < estimate.length && (
              <button disabled={user.data.role !== 'CEO'} onClick={handleOpenAll} className='btnCustomer2'>Delete multiple</button>
            )
          }
              
          {
           selectedRows.length === estimate.length ? (
              <button onClick={handleOpenAll} disabled={user.data.role !== 'CEO'} className='btnCustomer2'>Delete all</button>
            ):''
          } 
          </section> 
          )
                :''}
                           {
                      user.data.role === 'CEO'?(
                      <DataGrid
                              rows={estimate}
                              columns={columns}
                              slots={{toolbar: GridToolbar}}
                              slotProps={{
                                toolbar: {
                                  showQuickFilter: true,
                                  printOptions:{
                                   disableToolbarButton: true
                                 },
                                },
                              }}
                              rowSelectionModel={selectedRows}
                              onRowSelectionModelChange={(newSelection) => setSelectedRows(newSelection)}
                              rowRenderer = {rowRenderer}
                              checkboxSelection
                              disableDensitySelector
                              filterModel={filterModel}
                              onFilterModelChange={(newModel) => handleFilter(newModel)}
                              columnVisibilityModel = {columnVisibilityModel}
                              onColumnVisibilityModelChange={handelHiddenColumn}
                              sx={{width:'100%',backgroundColor:'white', padding:'10px'}}
                      />):(
                        <DataGrid
                        rows={filteredRows}
                        columns={columns}
                        slots={{toolbar: GridToolbar}}
                        slotProps={{
                          toolbar: {
                            showQuickFilter: true,
                            printOptions:{
                             disableToolbarButton: true
                           },
                          },
                        }}
                        onRowSelectionModelChange={(newSelection) => setSelectedRows(newSelection)}
                        rowRenderer = {rowRenderer}
                        checkboxSelection
                        rowSelectionModel={selectedRows}
                        disableDensitySelector
                        filterModel={filterModel}
                        onFilterModelChange={(newModel) => handleFilter(newModel)}
                        columnVisibilityModel = {columnVisibilityModel}
                        onColumnVisibilityModelChange={handelHiddenColumn}
                        sx={{width:'100%',backgroundColor:'white', padding:'10px'}}
                />
                      )}
                    </Box>
                    ) : <div>
          <img src={Image} style={{position:'relative',marginLeft:'19%',padding:'25px', height:'40%',top:'40px', width:'55%', boxShadow:'0 5px 10px rgba(0, 0, 0, 0.3)'}}/>
          </div>}
       </div>
       )
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
            <button onClick={handleDelete} className='btnCustomer2' style={{width:'100%'}}>Delete</button>
          </Grid>
        </Grid>
        </Box>
      </Modal>
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
          Update Estimate Status
          </Typography>
          <form onSubmit={handleSubmitUpdateStatus}>
        <Grid container style={{alignItems:'center',padding:'15px'}} spacing={2}>
          <Grid item xs={12}>
          <FormControl sx={{ width: '100%' }}>
                  <InputLabel id="status">Status</InputLabel>
                  <Select
                      required
                     id="status"
                     value={status} 
                     onChange={(e)=>setStatus(e.target.value)}
                     name="status"
                     label="status"
                     defaultValue="Draft"
                  >
                       <MenuItem value="Draft">Draft</MenuItem>
                        <MenuItem value="Sent">Sent</MenuItem>
                        <MenuItem value="Decline">Decline</MenuItem>
                        <MenuItem value="Approved">Approved</MenuItem>
                  </Select>
                 </FormControl>
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
      open={openDeleteMultiple}
      onClose={handleCloseMultiple}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style, width: 500 }}>
        <div style={{justifyContent:'center',textAlign:'center'}}>
          <h2>Do you want to Delete ?</h2>
          <p><span className="txt2" style={{color:'red'}}>Note:</span> All selected rows will be deleted</p>
          <div style={{display:'flex', gap:'60px',justifyContent:'center'}}>
              <button className='btnCustomer2' onClick={handleDeleteMany}>
                Delete
              </button>
              <button className='btnCustomer' onClick={handleCloseMultiple}>
                Cancel
              </button>
            </div>
        </div>
      </Box>
    </Modal>
    <Modal
      open={openDeleteAll}
      onClose={handleCloseAll}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style, width: 500 }}>
        <div style={{justifyContent:'center',textAlign:'center'}}>
          <h2>Do you want to Delete ?</h2>
          {
            selectedRows.length === 1 && (
              <p><span className="txt2" style={{color:'red'}}>Note:</span> Selected rows will be deleted</p>
            )
          }
          {
            selectedRows.length > 1 && selectedRows.length < estimate.length && (
              <p><span className="txt2" style={{color:'red'}}>Note:</span> All selected rows will be deleted</p>
            )
          }
          {
            selectedRows.length === estimate.length && (
              <p><span className="txt2" style={{color:'red'}}>Note:</span> All rows will be deleted</p>
            )
          }
          <div style={{display:'flex', gap:'60px',justifyContent:'center'}}>
              <button className='btnCustomer2' onClick={handleOpenReasonDelete}>
                Delete
              </button>
              <button className='btnCustomer' onClick={handleCloseAll}>
                Cancel
              </button>
            </div>
        </div>
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
          Why do you want to delete: {info}?
          </Typography>
          <form onSubmit={handleDeleteMany}>
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

export default EstimateViewAdmin