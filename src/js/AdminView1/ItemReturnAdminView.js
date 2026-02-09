import React, { useEffect, useRef, useState } from 'react'
import './view.css'
import './PageView/Chartview.css';
import SideMaintenance from '../component/SideMaintenance'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink, useNavigate } from 'react-router-dom';
import { Table, IconButton, styled, TableBody, TableCell, TableHead, TableRow, Checkbox, TableContainer, Paper, Typography, Modal, Box, Grid, FormControl, InputLabel, Select, MenuItem, Backdrop, Autocomplete, TextField, Collapse, Pagination } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
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
import { Add, Close, MailOutline } from '@mui/icons-material';
import dayjs from 'dayjs';
import Loader from '../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDispatch, useSelector } from "react-redux"
import { logOut, selectCurrentUser, setUser } from '../features/auth/authSlice';
import Logout from '@mui/icons-material/Logout';
import Image from '../img/no-data.png';
import Image1 from '../img/images.png'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import MessageAdminView from './MessageAdminView';
import NotificationVIewInfo from './NotificationVIewInfo';
import db from '../dexieDb';
import { useReactToPrint } from 'react-to-print';
import LocalPrintshop from '@mui/icons-material/LocalPrintshop';

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

function ItemReturnAdminView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
        if (navigator.onLine) {
          try {
            const res = await axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-employeeuser/${storesUserId}`)
            const Name = res.data.data.employeeName;
            const Role = res.data.data.role;
            dispatch(setUser({ userName: Name, role: Role, id: res.data.data._id }));
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        } else {
          const resLocalInfo = await db.employeeUserSchema.get({ _id: storesUserId })
          const Name = resLocalInfo.employeeName;
          const Role = resLocalInfo.role;
          dispatch(setUser({ userName: Name, role: Role, id: resLocalInfo._id }));
        }
      } else {
        navigate('/');
      }
    }
    fetchUser()
  }, [dispatch]);

  const [grantAccess, setGrantAccess] = useState([]);
  useEffect(() => {
    const fetchNumber = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/grantAccess');
          res.data.data.filter((row) => row.userID === user.data.id)
            .map((row) => setGrantAccess(row.modules))
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        const offLineCustomer1 = await db.grantAccessSchema.toArray();
        offLineCustomer1.filter((row) => row.userID === user.data.id)
          .map((row) => setGrantAccess(row.modules))
      }
    }
    fetchNumber()
  }, [user])

  const ReturnInfoC = grantAccess.filter((row) => row.moduleName === "Item-Return" && row.access.createM === true);
  const ReturnInfoV = grantAccess.filter((row) => row.moduleName === "Item-Return" && row.access.viewM === true);
  const ReturnInfoU = grantAccess.filter((row) => row.moduleName === "Item-Return" && row.access.editM === true);
  const ReturnInfoD = grantAccess.filter((row) => row.moduleName === "Item-Return" && row.access.deleteM === true);

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }
  const [itemOut, setItemOut] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);
  const [item, SetItems] = useState([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const fetchItems = async (page, searchTerm, filterField, filterValue) => {
    if (navigator.onLine) {
      try {
        const res = await axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/itemReturn-Information?page=${page + 1}&limit=${limit}&search=${encodeURIComponent(searchTerm.trim())}&filterField=${encodeURIComponent(filterField.trim())}&filterValue=${encodeURIComponent(filterValue.trim())}`);
        const formatDate = res.data.itemI.map((item) => ({
          ...item,
          id: item._id,
          dataField: dayjs(item.itemOutDate).format('DD/MM/YYYY'),
          referenceInfo: item.reference !== undefined ? item.reference.referenceName : item.description,
          itemInfo: item.itemsQtyArray.filter((row) => row.newItemOut > 0).map((row) => row.itemName !== undefined ? row.itemName.itemName : ''),
          itemDescriptionInfo: item.itemsQtyArray.filter((row) => row.newItemOut > 0).map((row) => row.itemDescription !== undefined ? row.itemDescription : '')
        }));
        SetTotalPage(res.data.totalPages);
        setItemOut(formatDate);
        setLoadingData(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadingData(false);
      }
    } else {
      const offLineItems = await db.itemReturn.toArray();
      const lowerSearch = searchTerm.toLowerCase().trim();
      const filtered = lowerSearch === '' ? offLineItems : offLineItems.filter((item) =>
        (item.description && item.description.toLowerCase().includes(lowerSearch)) ||
        (item.outNumber && item.outNumber.toString().includes(lowerSearch))
      );
      const formatDate = filtered.map((item) => ({
        ...item,
        id: item._id,
        dataField: dayjs(item.itemOutDate).format('DD/MM/YYYY'),
        referenceInfo: item.reference !== undefined ? item.reference.referenceName : item.description,
        itemInfo: item.itemsQtyArray.filter((row) => row.newItemOut > 0).map((row) => row.itemName !== undefined ? row.itemName.itemName : ''),
        itemDescriptionInfo: item.itemsQtyArray.filter((row) => row.newItemOut > 0).map((row) => row.itemDescription !== undefined ? row.itemDescription : '')
      }));
      setItemOut(formatDate.reverse());
      setLoadingData(false);
    }
  };

  useEffect(() => {
    fetchItems(page, debouncedSearchTerm, filterField, filterValue);
  }, [page, debouncedSearchTerm, filterField, filterValue]);
  {/** search start */ }
  const [filterModel, setFilterModel] = React.useState({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    quickFilterValues: [],
  });
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({});
  const handelHiddenColumn = (newHidden) => {
    setColumnVisibilityModel(newHidden)
    localStorage.setItem('HiddenColumnsItemReturn', JSON.stringify(newHidden))
  }
  const handleFilter = (newModel) => {
    const searchTerm = newModel.quickFilterValues?.join(' ') || '';
    setSearchTerm(searchTerm);
    setFilterModel(newModel)

    localStorage.setItem('QuickFilterItemReturnTst', JSON.stringify(newModel))
  }
  useEffect(() => {
    const storedQuick = JSON.parse(localStorage.getItem('QuickFilterItemReturnTst'))
    if (storedQuick) {
      const searchTerm = storedQuick.quickFilterValues?.join(' ') || '';
      setSearchTerm(searchTerm);
      setFilterModel(storedQuick)
    }
    const storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsItemReturn'))
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns)
    }
  }, [])
  {/** view start */ }
  const [openView, setOpenView] = useState(false);
  const [idView, setIdView] = useState(null);
  const [itemPurchaseView, setItemPurchaseView] = useState(null)
  const [reason, setReason] = useState("");

  const handleOpenView = (id) => {
    setOpenView(true);
    setIdView(id)
  }
  const handleCloseView = () => {
    setOpenView(false);
    setIdView(null);
    setItemPurchaseView(null);
    setSelectedRows([]);
  };
  useEffect(() => {
    const fetchData2 = async () => {
      if (idView !== null) {
        if (navigator.onLine) {
          try {
            const res = await axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-itemReturn/${idView}`)
            setItemPurchaseView(res.data.data)
          } catch (error) {
            console.log(error)
          }
        } else {
          const resLocal = await db.itemReturn.get({ _id: idView })
          setItemPurchaseView(resLocal)
        }
      }
    }
    fetchData2()
  }, [idView])
  {/** view end */ }
  const [open, setOpen] = useState(false);
  const [DeleteId, setDeleteId] = useState(null)

  const handleOpen = (id) => {
    setOpen(true);
    setDeleteId(id)
  };
  const handleClose = () => {
    setOpen(false);
  };
  {/** delete multiple && all modal end */ }
  const [openReasonDelete, setOpenReasonDelete] = useState(false);

  const handleOpenReasonDelete = (e) => {
    e.preventDefault()
    setOpenReasonDelete(true);
  };
  const handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };
  const [loading, setLoading] = useState(false);
  const [loadingOpenModal, setLoadingOpenModal] = useState(false);
  const [modalDeleteOpenLoading, setModalDeleteOpenLoading] = useState(false);
  {/** Loading Update View Start */ }
  const handleOpenLoading = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    handleCloseUpdate();
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  const handleCloseLoading = () => {
    window.location.reload();
  }
  {/** Loading Update View End */ }

  {/** Loading Delete View Start */ }
  const handleDeleteOpenLoading = () => {
    setModalDeleteOpenLoading(true);
    setLoading(true);
    handleClose();

    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  const handleDeleteCloseLoading = () => {
    window.location.reload();
  }
  {/** getting all info start */ }
  const [itemsQtyArray, SetItemsQtyArray] = useState([]);
  const [reference, setReference] = useState({});
  const [relatedNumber, setRelatedNumber] = useState(0)
  useEffect(() => {
    const fetchId = async () => {
      if (DeleteId !== null) {
        try {
          const res = await axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-itemReturn/${DeleteId}`)
          SetItemsQtyArray(res.data.data.itemsQtyArray);
          setReference(res.data.data.reference);
          setRelatedNumber(res.data.data.outNumber);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    }
    fetchId()
  }, [DeleteId])
  //console.log(itemsQtyArray)
  const [projects, setProject] = useState([]);
  const [maintenance, setMaintenance] = useState([]);
  const [invoice, setInvoice] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [purChaseResponse, maintenanceResponse, invoiceResponse] = await Promise.all([
          axios.get('https://globalgate-backend-production.up.railway.app/endpoint/purchase'),
          axios.get('https://globalgate-backend-production.up.railway.app/endpoint/maintenance'),
          axios.get('https://globalgate-backend-production.up.railway.app/endpoint/invoice')
        ])
        setProject(purChaseResponse.data.data);
        setMaintenance(maintenanceResponse.data.data);
        setInvoice(invoiceResponse.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const [filteredInvoice, setFilteredInvoice] = useState([])
  const [invoiceId, setInvoiceId] = useState('')
  const [filteredProject, setFilteredProject] = useState([])
  const [projectId, setProjectId] = useState('')
  const [filteredMaintenance, setFilteredMaintenance] = useState([])
  const [serviceId, setServiceId] = useState('')

  useEffect(() => {
    invoice.filter((row) => row._id === reference._id).map((row) => setFilteredInvoice(row.items))
    invoice.filter((row) => row._id === reference._id).map((row) => setInvoiceId(row._id))
    projects.filter((row) => row.projectName._id === reference._id).map((row) => setFilteredProject(row.items))
    projects.filter((row) => row.projectName._id === reference._id).map((row) => setProjectId(row._id))
    maintenance.filter((row) => row._id === reference._id).map((row) => setFilteredMaintenance(row.items))
    maintenance.filter((row) => row._id === reference._id).map((row) => setServiceId(row._id))
  }, [invoice, projects, maintenance, reference])

  {/** getting all info end */ }
  {/** Update Info start */ }

  const handleUpdatePurchase = () => {
    const result = filteredProject.map((row) => {
      const relatedArray = itemsQtyArray.filter((Item) => parseFloat(Item.newItemOut) !== 0)
        .find((Item) => Item.idRow === row.idRow)
      if (relatedArray) {
        const infoOut = relatedArray.newItemOut > 0 ? parseFloat(relatedArray.newItemOut) : 0
        const itemOut = row.itemOut + infoOut
        return {
          ...row, itemOut
        }
      }
      return row
    })
    const data = {
      items: result
    };
    return axios.put(`https://globalgate-backend-production.up.railway.app/endpoint/update-purchase/${projectId}`, data)
  }
  const handleUpdateInvoice = () => {
    const result = filteredInvoice.map((row) => {
      const relatedArray = itemsQtyArray.filter((Item) => parseFloat(Item.newItemOut) !== 0)
        .find((Item) => Item.idRow === row.idRow)
      if (relatedArray) {
        const infoOut = relatedArray.newItemOut > 0 ? parseFloat(relatedArray.newItemOut) : 0
        const itemOut = row.itemOut + infoOut
        return {
          ...row, itemOut
        }
      }
      return row
    })
    const data = {
      items: result
    };
    return axios.put(`https://globalgate-backend-production.up.railway.app/endpoint/update-invoice/${invoiceId}`, data)
  }
  const handleUpdateMaintenance = () => {
    const result = filteredMaintenance.map((row) => {
      const relatedArray = itemsQtyArray.filter((Item) => parseFloat(Item.newItemOut) !== 0)
        .find((Item) => Item.idRow === row.idRow)
      if (relatedArray) {
        const infoOut = relatedArray.newItemOut > 0 ? parseFloat(relatedArray.newItemOut) : 0
        const itemOut = row.itemOut + infoOut
        return {
          ...row, itemOut
        }
      }
      return row
    })
    const data = {
      items: result
    };
    return axios.put(`https://globalgate-backend-production.up.railway.app/endpoint/update-maintenance/${serviceId}`, data)
  }
  {/** Update Info end */ }
  {/** Delete Start */ }
  const handleCreateNotification = async () => {
    const data = {
      idInfo: '',
      person: user.data.userName + ' Deleted ' + ' R-' + relatedNumber,
      reason,
      dateNotification: new Date()
    }
    try {
      await axios.post('https://globalgate-backend-production.up.railway.app/endpoint/create-notification', data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleQty = async () => {
    try {
      await axios.post('https://globalgate-backend-production.up.railway.app/endpoint/CalculateTotal')
    } catch (error) {
      console.log(error)
    }
  }
  const handleDeleteUpdate = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.delete(`https://globalgate-backend-production.up.railway.app/endpoint/delete-itemReturn/${DeleteId}`);
      if (res) {
        handleCreateNotification();
        handleQty();
        if (filteredProject.length > 0 && filteredInvoice.length === 0 && filteredMaintenance.length === 0) {
          handleUpdatePurchase()
        } else if (filteredProject.length === 0 && filteredInvoice.length > 0 && filteredMaintenance.length === 0) {
          //Update Invoice
          handleUpdateInvoice()
        } else if (filteredProject.length === 0 && filteredInvoice.length === 0 && filteredMaintenance.length > 0) {
          handleUpdateMaintenance()
        } else {
          console.log('no related');
        }
        handleDeleteOpenLoading();
      }
    }
    catch (error) {
      console.log('An error as occur in delete');
    }
  }
  {/** Delete End */ }
  const [open1, setOpen1] = React.useState(true);
  const toggleDrawer = () => {
    setOpen1(!open1);
  };
  const columns = [
    { field: 'outNumber', headerName: '#', width: 90, renderCell: (params) => (<div> <span>R-0</span><span>{params.row.outNumber}</span> </div>) },
    { field: 'dataField', headerName: 'Date', width: 100 },
    { field: 'reason', headerName: 'Reason', width: 150 },
    { field: 'referenceInfo', headerName: 'Description', width: open1 ? 480 : 550 },
    { field: 'itemInfo', headerName: 'Item', width: open1 ? 80 : 130 },
    { field: 'itemDescriptionInfo', headerName: 'I-Description', width: open1 ? 80 : 130 },
    {
      field: 'view', headerName: 'View', width: 50, renderCell: (params) => (
        <ViewTooltip title="View">
          <span>
            <IconButton onClick={() => handleOpenView(params.row._id)} disabled={ReturnInfoV.length === 0 && user.data.role !== 'CEO'}>
              <VisibilityIcon style={{ color: '#202a5a' }} />
            </IconButton>
          </span>
        </ViewTooltip>
      )
    },
    {
      field: 'edit', headerName: 'Edit', width: 50, renderCell: (params) => (
        <EditTooltip title="Edit">
          <span>
            <IconButton disabled={ReturnInfoU.length === 0 && user.data.role !== 'CEO'}>
              <NavLink to={`/ItemReturnViewForm/${params.row._id}`} className='LinkName'>
                <EditIcon style={{ color: 'gray' }} />
              </NavLink>
            </IconButton>
          </span>
        </EditTooltip>

      )
    },
    {
      field: 'Delete', headerName: 'Delete', width: 50, renderCell: (params) => (
        <DeleteTooltip title="Delete">
          <span>                  <IconButton onClick={() => handleOpen(params.row._id)} disabled={ReturnInfoD.length === 0 && user.data.role !== 'CEO'} >
            <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
          </IconButton>
          </span>
        </DeleteTooltip>
      )
    },
  ]
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforeGetContent: () => {
      const PAGE_HEIGHT = 1045;
      const printElement = componentRef.current;
      if (printElement) {
        printElement.classList.add("temp-class-for-height")
        const height = printElement.clientHeight
        const numberOfPage = Math.ceil(height / PAGE_HEIGHT)
        if (numberOfPage > 1) {
          const heightWithSingleHeader = numberOfPage * PAGE_HEIGHT
          let requiredHeight = heightWithSingleHeader
          const headerHeight = printElement.getElementsByTagName("thead")?.[0]?.clientHeight
          const footerHeight = printElement.getElementsByTagName("tfoot")?.[0]?.clientHeight
          requiredHeight -= (numberOfPage - 1) * (headerHeight + footerHeight)
          printElement.style.height = `${requiredHeight}px`;
        }
        printElement.classList.remove("temp-class-for-height")
      }
    },
    onAfterPrint: () => {
      const printElement = componentRef.current;
      if (printElement) {
        printElement.style.height = `auto`
      }
    }
  })
  return (
    <div className='Homeemployee'>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open1} sx={{ backgroundColor: '#30368a' }}>
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
              Item Return
            </Typography>
            <NotificationVIewInfo />
            <MessageAdminView name={user.data.userName} role={user.data.role} />
            <IconButton color="inherit" onClick={handleLogout}>
              <Logout style={{ color: 'white' }} />
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
          <List sx={{ height: '700px' }}>
            <SideMaintenance />
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
            width: '100%',
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="none" sx={{ mt: 1 }} >
            {
              loadingData ? <div>
                <div style={{ position: 'relative', top: '120px' }}>
                  <Loader />
                </div>
              </div> : (
                <div>
                  <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                    <ViewTooltip>
                      <span>
                        <IconButton disabled={ReturnInfoC.length === 0 && user.data.role !== 'CEO'}>
                          <NavLink to={'/ItemReturnUpdateForm'} className='LinkName'>
                            <span className='btnCustomerAdding'>
                              <Add />
                            </span>
                          </NavLink>
                        </IconButton>
                      </span>
                    </ViewTooltip>
                    <button onClick={handleRefreshSearch} className='btnCustomer2'>Refresh Search</button>
                  </section>

                  <Box sx={{ height: 600, width: '100%' }}>
                    <DataGrid
                      rows={itemOut}
                      columns={columns}
                      slots={{ toolbar: GridToolbar }}
                      onRowSelectionModelChange={(newSelection) => setSelectedRows(newSelection)}
                      slotProps={{
                        toolbar: {
                          showQuickFilter: true,
                          printOptions: {
                            disableToolbarButton: true
                          },
                        },
                      }}
                      getRowClassName={(params) => {
                        return newPurchase.includes(params.row._id) ? 'new-Purchase' : ''
                      }}
                      checkboxSelection
                      disableDensitySelector
                      filterModel={filterModel}
                      rowSelectionModel={selectedRows}
                      onFilterModelChange={(newModel) => handleFilter(newModel)}
                      columnVisibilityModel={columnVisibilityModel}
                      onColumnVisibilityModelChange={handelHiddenColumn}
                      sx={{ width: '100%', backgroundColor: 'white', padding: '10px' }}
                    />
                    <Pagination count={totalPage} page={page + 1} onChange={handlePageChange} color="primary" sx={{ position: 'relative', top: '-50px' }} />
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
          <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>
            <Grid item xs={12} style={{ width: '100%', textAlign: 'center' }}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Do you Want to delete?
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <button onClick={handleClose} className='btnCustomer' style={{ width: '100%' }}>Cancel</button>
            </Grid>
            <Grid item xs={6}>
              <button onClick={handleOpenReasonDelete} className='btnCustomer2' style={{ width: '100%' }}>Delete</button>
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
            {loading ? (<Loader />
            )
              : (
                <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                  <p><CheckCircleIcon style={{ color: 'green', height: '40px', width: '40px' }} /></p>
                  <h2> Data successfully deleted</h2>
                  <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
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
        <Box sx={{ ...style, width: 850 }}>
          <ViewTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseView} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </ViewTooltip>
          <ViewTooltip title="Print" placement='left'>
            <IconButton onClick={handlePrint} style={{ position: 'relative', float: 'right' }}>
              <LocalPrintshop style={{ color: '#202a5a' }} />
            </IconButton>
          </ViewTooltip>
          {
            itemPurchaseView !== null ?
              <div>
                <Box hidden>
                  <div ref={componentRef} style={{ width: '100%', padding: '20px', margin: '10px' }}>
                    <table style={{ color: 'black', justifyContent: 'center', left: '40px', right: '40px' }}>
                      <thead>
                        <tr>
                          <td>
                            <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #DDD' }}>
                                <p style={{ padding: '5px' }}>Item Return Number: R-0{itemPurchaseView.outNumber}</p>
                              </section>
                              <img src={Image1} style={{ height: '60px', width: '230px' }} />
                            </section>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Grid container style={{ alignItems: 'center', color: 'black' }} spacing={2}>
                              <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>
                                <Grid item xs={12}>
                                  <Box>
                                    <table className="secondTable" style={{ fontSize: '70%', marginBottom: '5px', border: '1px solid #DDD' }}>
                                      <tbody>
                                        <tr>
                                          <td>Date</td>
                                          <td colSpan={3}>{dayjs(itemPurchaseView.itemOutDate).format('DD/MM/YYYY')}</td>
                                        </tr>
                                        <tr>
                                          <td>Reason</td>
                                          <td colSpan={3}>{itemPurchaseView.reason !== undefined ? itemPurchaseView.reason : ''}</td>
                                        </tr>
                                        <tr>
                                          <td>Reference</td>
                                          <td colSpan={3}>{itemPurchaseView.reference !== undefined ? itemPurchaseView.reference.referenceName : ''}</td>
                                        </tr>
                                        <tr>
                                          <td>Description</td>
                                          <td colSpan={3}>{itemPurchaseView.description !== undefined ? itemPurchaseView.description : ''}</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <TableContainer>
                                      <table className="secondTable" style={{ fontSize: '70%', marginBottom: '5px', border: '1px solid #DDD' }}>
                                        <thead>
                                          <tr>
                                            <th>#</th>
                                            <th>Item</th>
                                            <th>Description</th>
                                            <th>Qty</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {
                                            itemPurchaseView.itemsQtyArray.filter((row) => parseFloat(row.newItemOut) > 0)
                                              .map((row, i) => {
                                                const relatedUnit = item.find((Item1) => Item1._id === row.itemName._id)
                                                return (
                                                  <tr key={row.idRow}>
                                                    {

                                                      row.newDescription !== undefined ?
                                                        <td colSpan={4}>{row.itemName.itemName}</td>
                                                        :
                                                        <>
                                                          <td>{i + 1}</td>
                                                          <td>{row.itemName.itemName} ( {relatedUnit !== undefined ? relatedUnit.itemBrand.toUpperCase() : ''} )</td>
                                                          <td>{row.itemDescription}</td>
                                                          <td>{row.newItemOut} {relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''}</td>
                                                        </>
                                                    }

                                                  </tr>
                                                )
                                              }
                                              )
                                          }
                                        </tbody>
                                      </table>
                                    </TableContainer>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Grid>
                            <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                              <p>Store Manager Signature</p>
                              <p>Customer Signature</p>
                            </section>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </Box>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <span>{itemPurchaseView.Create.person} </span><span> Create R-0{itemPurchaseView.outNumber}</span> on <span>{itemPurchaseView.Create.dateComment}</span>
                </Typography>
                <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>

                  <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>

                    <Grid item xs={12}>
                      <Box sx={{ height: 600, width: '100%' }}>
                        <Table style={{ marginBottom: '5px' }}>
                          <TableBody>
                            <TableRow>
                              <TableCell>Return Date</TableCell>
                              <TableCell colSpan={3}>{dayjs(itemPurchaseView.itemOutDate).format('DD/MM/YYYY')}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Reason</TableCell>
                              <TableCell colSpan={3}>{itemPurchaseView.reason !== undefined ? itemPurchaseView.reason : ''}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Reference</TableCell>
                              <TableCell colSpan={3}>{itemPurchaseView.reference !== undefined ? itemPurchaseView.reference.referenceName : ''}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Description</TableCell>
                              <TableCell colSpan={3}>{itemPurchaseView.description !== undefined ? itemPurchaseView.description : ''}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                        <TableContainer sx={{ maxHeight: 400, marginBottom: '5px' }}>
                          <Table aria-label="collapsible table" stickyHeader>
                            <TableHead>
                              <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Item</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Qty</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {
                                itemPurchaseView.itemsQtyArray.filter((row) => parseFloat(row.newItemOut) > 0)
                                  .map((row, i) => {
                                    const relatedUnit = item.find((Item1) => Item1._id === row.itemName._id)
                                    return (
                                      <TableRow key={row.idRow}>
                                        {
                                          row.newDescription !== undefined ?
                                            <TableCell colSpan={4}>{row.itemName.itemName}</TableCell>
                                            :
                                            <>
                                              <TableCell>{i + 1}</TableCell>
                                              <TableCell>{row.itemName.itemName} ( {relatedUnit !== undefined ? relatedUnit.itemBrand.toUpperCase() : ''} )</TableCell>
                                              <TableCell>{row.itemDescription}</TableCell>
                                              <TableCell>{row.newItemOut} {relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''}</TableCell>
                                            </>
                                        }

                                      </TableRow>
                                    )
                                  })
                              }
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
              : null
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
            <IconButton onClick={handleCloseReasonDelete} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </ViewTooltip>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Why do you want to delete: R-{relatedNumber}?
          </Typography>
          <form onSubmit={handleDeleteUpdate}>
            <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  id='reason'
                  name='reason'
                  multiline
                  rows={4}
                  value={reason}
                  placeholder='Reason'
                  onChange={(e) => setReason(e.target.value)}
                  label='Reason'
                  sx={{ width: '100%', backgroundColor: 'white' }}
                />
              </Grid>
              <br />
              <Grid item xs={12}>
                <button type='submit' className='btnCustomer' style={{ width: '100%' }}>Save</button>
              </Grid>
            </Grid>
          </form>

        </Box>
      </Modal>
    </div>
  )
}

export default ItemReturnAdminView