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
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
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
function ItemPurchaseViewAdmin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
        if (navigator.onLine) {
          try {
            const res = await axios.get(`https://gg-project-production.up.railway.app/endpoint/get-employeeuser/${storesUserId}`)
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
          const res = await axios.get('https://gg-project-production.up.railway.app/endpoint/grantAccess');
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

  const PurchaseInfoC = grantAccess.filter((row) => row.moduleName === "Item-Purchase" && row.access.createM === true);
  const PurchaseInfoV = grantAccess.filter((row) => row.moduleName === "Item-Purchase" && row.access.viewM === true);
  const PurchaseInfoU = grantAccess.filter((row) => row.moduleName === "Item-Purchase" && row.access.editM === true);
  const PurchaseInfoD = grantAccess.filter((row) => row.moduleName === "Item-Purchase" && row.access.deleteM === true);




  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }
  const [itemPurchase, setItemPurchase] = useState([]);
  const [newPurchase, setNewPurchase] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [item, SetItems] = useState([])
  const [selectedRows, setSelectedRows] = useState([]);

  const [page, setPage] = useState(0); // Initialize page state to 0 (0-based index)
  const limit = 100;
  const [searchTerm, setSearchTerm] = useState(''); // Initialize search term state
  const [filterField, setFilterField] = useState(''); // Initialize filter field state
  const [filterValue, setFilterValue] = useState(''); // Initialize filter value state
  const [totalPage, SetTotalPage] = useState(0);

  const fetchItems = async (page, searchTerm, filterField, filterValue) => {
    try {
      const res = await axios.get(`https://gg-project-production.up.railway.app/endpoint/itemPurchase-Information?page=${page + 1}&limit=${limit}&search=${encodeURIComponent(searchTerm.trim())}&filterField=${encodeURIComponent(filterField.trim())}&filterValue=${encodeURIComponent(filterValue.trim())}`);
      const formatDate = res.data.itemI.map((item) => ({
        ...item,
        id: item._id,
        dataField: dayjs(item.itemPurchaseDate).format('DD/MM/YYYY'),
        Account: item.projectName !== undefined ? item.projectName.name : item.description,
        referenceInfo: item.manufacturer + ' / ' + item.manufacturerNumber,
        itemInfo: item.items.map((row) => row.itemName !== undefined ? row.itemName.itemName : ''),
        itemDescriptionInfo: item.items.map((row) => row.itemDescription !== undefined ? row.itemDescription : '')
      }));
      SetTotalPage(Math.ceil(res.data.totalItem / limit)); // Ensure totalPage is correctly calculated
      setItemPurchase(formatDate);
      setLoadingData(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle offline case
      const offLineItems = await db.itemPurchaseViewSchema.toArray();
      const formatDate = offLineItems.map((item) => ({
        ...item,
        id: item._id,
        dataField: dayjs(item.itemPurchaseDate).format('DD/MM/YYYY'),
        Account: item.projectName !== undefined ? item.projectName.name : item.description,
        referenceInfo: item.manufacturer + ' / ' + item.manufacturerNumber,
        itemInfo: item.items.map((row) => row.itemName !== undefined ? row.itemName.itemName : ''),
        itemDescriptionInfo: item.items.map((row) => row.itemDescription !== undefined ? row.itemDescription : '')
      }));
      setItemPurchase(formatDate.reverse());
      setLoadingData(false);
    }
  };
  const handleRefreshSearch = () => {
    fetchItems(page, searchTerm, filterField, filterValue);
  };
  useEffect(() => {
    fetchItems(page, searchTerm, filterField, filterValue);
  }, [page, searchTerm, filterField, filterValue]);
  const handlePageChange = (event, newPage) => {
    setPage(newPage - 1); // Update page state (convert to 0-based index)
  };
  {/** search start */ }
  const [filterModel, setFilterModel] = React.useState({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    quickFilterValues: [],
  });
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({});
  const handelHiddenColumn = (newHidden) => {
    setColumnVisibilityModel(newHidden)
    localStorage.setItem('HiddenColumnsItemPurchase', JSON.stringify(newHidden))
  }
  const handleFilter = (newModel) => {
    const searchTerm = newModel.quickFilterValues?.join(' ') || '';
    setSearchTerm(searchTerm);
    setFilterModel(newModel)

    localStorage.setItem('QuickFilterItemPurchaseTst', JSON.stringify(newModel))
  }
  useEffect(() => {
    const storedQuick = JSON.parse(localStorage.getItem('QuickFilterItemPurchaseTst'))
    if (storedQuick) {
      const searchTerm = storedQuick.quickFilterValues?.join(' ') || '';
      setSearchTerm(searchTerm);
      setFilterModel(storedQuick)
    }
    const storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsItemPurchase'))
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns)
    }
  }, [])
  {/** view start */ }
  const [openView, setOpenView] = useState(false);
  const [idView, setIdView] = useState(null);
  const [itemPurchaseView, setItemPurchaseView] = useState(null)
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
  const [openReasonDelete, setOpenReasonDelete] = useState(false);

  const handleOpenReasonDelete = (e) => {
    e.preventDefault()
    setOpenReasonDelete(true);
  };
  const handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };
  useEffect(() => {
    const fetchData2 = async () => {
      if (idView !== null) {
        if (navigator.onLine) {
          try {
            const res = await axios.get(`https://gg-project-production.up.railway.app/endpoint/get-itemPurchase/${idView}`)
            setItemPurchaseView(res.data.data)
          } catch (error) {
            console.log(error)
          }
        } else {
          const resLocal = await db.itemPurchaseSchema.get({ _id: idView })
          setItemPurchaseView(resLocal)
        }
      }
    }
    fetchData2()
  }, [idView])
  {/** view end */ }
  {/** search end */ }
  const [open, setOpen] = useState(false);
  const [DeleteId, setDeleteId] = useState(null)

  const handleOpen = (id) => {
    setOpen(true);
    setDeleteId(id)
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedRows([])
  };
  {/** delete multiple && all modal end */ }
  {/** get Project To Update start */ }
  const [projectName, setProjectName] = useState({});
  const [items, setItems] = useState([]);
  const [reason, setReason] = useState('');
  const [reason1, setReason1] = useState("");
  const [relatedNumber, setRelatedNumber] = useState(0);
  const [purChaseOrderId, setPurchaseOrderId] = useState('');

  useEffect(() => {
    const fetchId = async () => {
      if (DeleteId) {
        try {
          const res = await axios.get(`https://gg-project-production.up.railway.app/endpoint/get-itemPurchase/${DeleteId}`)
          setProjectName(res.data.data.projectName);
          setItems(res.data.data.items);
          setReason(res.data.data.reason)
          setRelatedNumber(res.data.data.itemPurchaseNumber);
          setPurchaseOrderId(res.data.data.POID)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    }
    fetchId()
  }, [DeleteId])
  const [purchase, setPurchase] = useState([]);
  const [maintenance, setMaintenance] = useState([]);
  const [invoice, setInvoice] = useState([]);
  useEffect(() => {
    const fetchData2 = async () => {
      try {
        if (projectName) {
          const res = await axios.get('https://gg-project-production.up.railway.app/endpoint/purchase')
          setPurchase(res.data.data.filter((row) => row.projectName._id === projectName._id));
          const resMaintenance = await axios.get('https://gg-project-production.up.railway.app/endpoint/maintenance')
          setMaintenance(resMaintenance.data.data.filter((row) => row._id === projectName._id));
          const resInvoice = await axios.get('https://gg-project-production.up.railway.app/endpoint/invoice')
          setInvoice(resInvoice.data.data.filter((row) => row._id === projectName._id));
        }
      } catch (error) {
        console.error('Error fetching data Project:');
      }
    }
    fetchData2()
  }, [projectName])

  const updatePurchaseArray = purchase.length > 0 ? purchase.map((row) => {
    const updateItem = row.items.map((Item) => {
      const RelatedItem = items.find((Item2) => Item.itemName._id !== undefined && Item.itemName._id === Item2.itemName._id || Item2.itemDescription === Item.itemDescription)
      if (RelatedItem) {
        const itemBuy = parseFloat(Item.itemBuy) - parseFloat(RelatedItem.itemQty ? RelatedItem.itemQty : 0)
        const totalGenerale = Item.itemCost * (parseFloat(Item.itemBuy) - parseFloat(RelatedItem.itemQty ? RelatedItem.itemQty : 0))
        const itemQty = Item.itemQty
        return {
          ...Item, itemBuy, totalGenerale, itemQty
        }
      } else {
        return Item
      }
    })
    const purchaseAmount2 = updateItem.reduce((sum, row) => sum + row.totalGenerale, 0)
    return {
      id: row._id,
      items: updateItem,
      purchaseAmount2: purchaseAmount2
    }
  }) : null
  const updateMaintenanceArray = maintenance.length > 0 ? maintenance.map((row) => {
    const updateItem = row.items.map((Item) => {
      const RelatedItem = items.find((Item2) => Item.itemName._id !== undefined && Item.itemName._id === Item2.itemName._id || Item2.itemDescription === Item.itemDescription)
      if (RelatedItem) {
        const itemBuy = parseFloat(Item.itemBuy) - parseFloat(RelatedItem.itemQty ? RelatedItem.itemQty : 0)
        const totalGenerale = Item.itemCost * (parseFloat(Item.itemBuy) - parseFloat(RelatedItem.itemQty ? RelatedItem.itemQty : 0))
        const itemQty = Item.itemQty
        return {
          ...Item, itemBuy, totalGenerale, itemQty
        }
      } else {
        return Item
      }
    })
    return {
      id: row._id,
      items: updateItem,
    }
  }) : null
  const updateInvoiceArray = invoice.length > 0 ? invoice.map((row) => {
    const updateItem = row.items.map((Item) => {
      const RelatedItem = items.find((Item2) => Item.itemName._id !== undefined && Item.itemName._id === Item2.itemName._id || Item2.itemDescription === Item.itemDescription)
      if (RelatedItem) {
        const itemBuy = parseFloat(Item.itemBuy) - parseFloat(RelatedItem.itemQty ? RelatedItem.itemQty : 0)
        const totalGenerale = Item.itemCost * (parseFloat(Item.itemBuy) - parseFloat(RelatedItem.itemQty ? RelatedItem.itemQty : 0))
        const itemQty = Item.itemQty
        return {
          ...Item, itemBuy, totalGenerale, itemQty
        }
      } else {
        return Item
      }
    })
    return {
      id: row._id,
      items: updateItem,
    }
  }) : null

  const handleUpdatePurchase = async () => {
    if (updatePurchaseArray !== null && updateInvoiceArray === null && updateMaintenanceArray === null) {
      const updateRequestInvoice = updatePurchaseArray.map((row) => {
        return axios.put(`https://gg-project-production.up.railway.app/endpoint/update-purchase/${row.id}`, {
          items: row.items,
          purchaseAmount2: row.purchaseAmount2
        })
      })
      try {
        await Promise.all(updateRequestInvoice);
      } catch (error) {
        console.log('An error as occur');
      }
    } else if (updatePurchaseArray === null && updateInvoiceArray === null && updateMaintenanceArray !== null) {
      const updateRequestMaintenance = updateMaintenanceArray.map((row) => {
        return axios.put(`https://gg-project-production.up.railway.app/endpoint/update-maintenance/${row.id}`, {
          items: row.items,
        })
      })
      try {
        await Promise.all(updateRequestMaintenance);
      } catch (error) {
        console.log('An error as occur');
      }
    } else if (updatePurchaseArray === null && updateMaintenanceArray === null && updateInvoiceArray !== null) {
      const updateRequestInvoice = updateInvoiceArray.map((row) => {
        return axios.put(`https://gg-project-production.up.railway.app/endpoint/update-invoice/${row.id}`, {
          items: row.items,
        })
      })
      try {
        await Promise.all(updateRequestInvoice);
      } catch (error) {
        console.log('An error as occur');
      }
    }
    else {
      console.log('no related')
    }
  }
  {/** get Project To Update end */ }
  const [loading, setLoading] = useState(false);
  const [modalDeleteOpenLoading, setModalDeleteOpenLoading] = useState(false);

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
  {/** Loading Delete View End */ }

  {/** Delete Start */ }
  const handleCreateNotification = async () => {
    const data = {
      idInfo: '',
      person: user.data.userName + ' Deleted ' + ' IP-' + relatedNumber,
      reason: reason1,
      dateNotification: new Date()
    }
    try {
      await axios.post('https://gg-project-production.up.railway.app/endpoint/create-notification', data)
    } catch (error) {
      console.log(error)
    }
  }
  const onStatusUpdate = async () => {
    if (purChaseOrderId !== undefined) {
      try {
        const data = {
          Converted: false,
          IpRelated: {}
        }
        await axios.put(`https://gg-project-production.up.railway.app/endpoint/update-purchaseOrder/${purChaseOrderId}`, data);
      } catch (error) {
        console.log(error)
      }
    }
  }
  const handleQty = async () => {
    try {
      await axios.post('https://gg-project-production.up.railway.app/endpoint/CalculateTotal')
    } catch (error) {
      console.log(error)
    }
  }
  const handleDeleteUpdate = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.delete(`https://gg-project-production.up.railway.app/endpoint/delete-itemPurchase/${DeleteId}`);
      if (res) {
        onStatusUpdate();
        handleQty();
        handleUpdatePurchase();
        handleCreateNotification();
        handleDeleteOpenLoading();
      }
    }
    catch (error) {
      console.log('An error as occur in delete');
    }
  }
  {/** Delete End */ }
  const [updateS, setUpdateS] = useState(false);

  const onStatusUpdatePaid = async (e, idInfo) => {
    e.preventDefault();
    try {
      const data = {
        status: 'Paid',
        itemPurchaseDate: new Date()
      }
      const res = await axios.put(`https://gg-project-production.up.railway.app/endpoint/update-itemPurchase/${idInfo}`, data);
      if (res) {
        setUpdateS(true);
        handleDeleteOpenLoading();
      }
    } catch (error) {
      console.log(error)
    }
  }
  const onStatusUpdateUnPaid = async (e, idInfo) => {
    e.preventDefault();
    try {
      const data = {
        status: 'UnPaid'
      }
      const res = await axios.put(`https://gg-project-production.up.railway.app/endpoint/update-itemPurchase/${idInfo}`, data);
      if (res) {
        setUpdateS(true);
        handleDeleteOpenLoading();
      }
    } catch (error) {
      console.log(error)
    }
  }
  const [open1, setOpen1] = React.useState(true);
  const toggleDrawer = () => {
    setOpen1(!open1);
  };
  const columns = [
    { field: 'itemPurchaseNumber', headerName: '#', width: 90, renderCell: (params) => (<div> <span>IP-0</span><span>{params.row.itemPurchaseNumber}</span> </div>) },
    { field: 'dataField', headerName: 'Date', width: 70 },
    { field: 'Account', headerName: 'Description', width: open1 ? 200 : 350 },
    { field: 'referenceInfo', headerName: 'Account', width: open1 ? 150 : 300 },
    {
      field: 'status', headerName: 'Status', width: 180, renderCell: (params) => (
        <div>
          {params.row.status ?
            <div>
              {
                params.row.status === "Paid" ?
                  <button onClick={(e) => onStatusUpdateUnPaid(e, params.row._id)} className='btnCustomer'>Click To UnPay</button>
                  :
                  <button onClick={(e) => onStatusUpdatePaid(e, params.row._id)} className='btnCustomer2'>Click To Pay</button>
              }
            </div>
            : ''
          }
        </div>)
    },
    { field: 'itemInfo', headerName: 'Item', width: 10 },
    { field: 'itemDescriptionInfo', headerName: 'I-Description', width: 10 },
    { field: 'totalFC', headerName: 'TotalFC', width: 120, renderCell: (params) => `FC${params.row.totalFC !== undefined ? params.row.totalFC?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}` },
    { field: 'total', headerName: 'Total', width: 80, renderCell: (params) => `$${params.row.total?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    {
      field: 'view', headerName: 'View', width: 50, renderCell: (params) => (
        <ViewTooltip title="View">
          <span>
            <IconButton onClick={() => handleOpenView(params.row._id)} disabled={PurchaseInfoV.length === 0 && user.data.role !== 'CEO'}>
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
            <IconButton disabled={PurchaseInfoU.length === 0 && user.data.role !== 'CEO'}>
              <NavLink to={`/ItemPurchaseUpdateForm/${params.row._id}`} className='LinkName'>
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
          <span>                  <IconButton onClick={() => handleOpen(params.row._id)} disabled={PurchaseInfoD.length === 0 && user.data.role !== 'CEO'} >
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
              Item Purchase
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
                        <IconButton disabled={PurchaseInfoC.length === 0 && user.data.role !== 'CEO'}>
                          <NavLink to={'/ItemPurchaseViewForm'} className='LinkName'>
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
                      rows={itemPurchase}
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
          {
            reason === 'Other' || purchase.length > 0 || maintenance.length > 0 || invoice.length > 0 ? (
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
            ) :
              <Loader />
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
            {loading ? (<Loader />
            )
              : (
                <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                  <p><CheckCircleIcon style={{ color: 'green', height: '40px', width: '40px' }} /></p>
                  {
                    updateS === true ? <h2> Data successfully Updated</h2> : <h2> Data successfully deleted</h2>
                  }
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
        <Box sx={{ ...style, width: 950 }}>
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
                                <p style={{ padding: '5px' }}>Item Purchase Number: IP-0{itemPurchaseView.itemPurchaseNumber}</p>
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
                                          <td colSpan={3}>{dayjs(itemPurchaseView.itemPurchaseDate).format('DD/MM/YYYY')}</td>
                                        </tr>
                                        <tr>
                                          <td>Description</td>
                                          <td colSpan={3}>{itemPurchaseView.projectName !== undefined ? itemPurchaseView.projectName.name : itemPurchaseView.description}</td>
                                        </tr>
                                        <tr>
                                          <td>Reference</td>
                                          <td colSpan={3}>{itemPurchaseView.manufacturer + ' / ' + itemPurchaseView.manufacturerNumber}</td>
                                        </tr>
                                        <tr>
                                          <td>Note</td>
                                          <td colSpan={3}>{itemPurchaseView.note}</td>
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
                                            <th>Price($)</th>
                                            <th>Amount Paid(FC)</th>
                                            <th>Rate</th>
                                            <th>Amount Paid($)</th>
                                            <th>Total($)</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {
                                            itemPurchaseView.items.map((row, i) => {
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
                                                        <td>{row.itemQty} {relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''}</td>
                                                        <td>{parseFloat(row.itemRate).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                        <td>FC{row.totalAmountFC !== undefined ? parseFloat(row.totalAmountFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</td>
                                                        <td>{row.Taux !== undefined ? parseFloat(row.Taux).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</td>
                                                        <td>${parseFloat(row.totalAmount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                        <td>{row.fcConvertToUsdTotal !== undefined ? parseFloat(row.fcConvertToUsdTotal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</td>
                                                      </>
                                                  }

                                                </tr>
                                              )
                                            }
                                            )
                                          }
                                        </tbody>
                                      </table>
                                      <table className="secondTable" style={{ fontSize: '70%', marginBottom: '5px', border: '1px solid #DDD' }}>
                                        <tbody>
                                          <tr>
                                            <td colSpan={2}>Total</td>
                                            <td colSpan={2}>FC{itemPurchaseView.totalFC !== undefined ? parseFloat(itemPurchaseView.totalFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</td>
                                            <td colSpan={2}>${itemPurchaseView.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                            <td colSpan={2}>${itemPurchaseView.totalUSD !== undefined ? parseFloat(itemPurchaseView.totalUSD).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </TableContainer>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Grid>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </Box>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <span>{itemPurchaseView.Create.person} </span><span>IP-{itemPurchaseView.itemPurchaseNumber}</span> on <span>{itemPurchaseView.Create.dateComment}</span>
                </Typography>
                <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>

                  <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>

                    <Grid item xs={12}>
                      <Box sx={{ height: 600, width: '100%' }}>
                        <Table style={{ marginBottom: '5px' }}>
                          <TableBody>
                            <TableRow>
                              <TableCell>Expense Date</TableCell>
                              <TableCell colSpan={3}>{dayjs(itemPurchaseView.itemPurchaseDate).format('DD/MM/YYYY')}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Description</TableCell>
                              <TableCell colSpan={3}>{itemPurchaseView.projectName !== undefined ? itemPurchaseView.projectName.name : itemPurchaseView.description}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Reference</TableCell>
                              <TableCell colSpan={3}>{itemPurchaseView.manufacturer + ' / ' + itemPurchaseView.manufacturerNumber}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Note</TableCell>
                              <TableCell colSpan={3}>{itemPurchaseView.note}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                        <TableContainer sx={{ maxHeight: 380, marginBottom: '5px' }}>
                          <Table aria-label="collapsible table" stickyHeader>
                            <TableHead>
                              <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Item</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Qty</TableCell>
                                <TableCell>Price($)</TableCell>
                                <TableCell>Amount Paid(FC)</TableCell>
                                <TableCell>Rate </TableCell>
                                <TableCell>Amount Paid($)</TableCell>
                                <TableCell>Total($)</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {
                                itemPurchaseView.items.map((row, i) => {
                                  const relatedUnit = item.find((Item1) => Item1._id === row.itemName._id)
                                  return (
                                    <TableRow key={row.idRow}>
                                      <TableCell>{i + 1}</TableCell>
                                      <TableCell>{row.itemName.itemName} ( {relatedUnit !== undefined ? relatedUnit.itemBrand.toUpperCase() : ''} )</TableCell>
                                      <TableCell>{row.itemDescription}</TableCell>
                                      <TableCell>{row.itemQty} {relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''}</TableCell>
                                      <TableCell>{parseFloat(row.itemRate).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</TableCell>
                                      <TableCell>FC{row.totalAmountFC !== undefined ? parseFloat(row.totalAmountFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                                      <TableCell>{row.Taux !== undefined ? parseFloat(row.Taux).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                                      <TableCell>${parseFloat(row.totalAmount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</TableCell>
                                      <TableCell>{row.fcConvertToUsdTotal !== undefined ? parseFloat(row.fcConvertToUsdTotal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                                    </TableRow>
                                  )
                                })
                              }
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <Table>
                          <TableBody>
                            <TableRow>
                              <TableCell colSpan={2}>Total</TableCell>
                              <TableCell colSpan={2} sx={{ textAlign: 'right' }}>FC{itemPurchaseView.totalFC !== undefined ? parseFloat(itemPurchaseView.totalFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                              <TableCell colSpan={2} sx={{ textAlign: 'right' }}>${itemPurchaseView.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</TableCell>
                              <TableCell colSpan={2} sx={{ textAlign: 'right' }}>${itemPurchaseView.totalUSD !== undefined ? parseFloat(itemPurchaseView.totalUSD).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
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
            Why do you want to delete: IP-{relatedNumber}?
          </Typography>
          <form onSubmit={handleDeleteUpdate}>
            <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  id='reason1'
                  name='reason1'
                  multiline
                  rows={4}
                  value={reason1}
                  placeholder='Reason'
                  onChange={(e) => setReason1(e.target.value)}
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

export default ItemPurchaseViewAdmin
