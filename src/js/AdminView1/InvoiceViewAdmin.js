import React, { useEffect, useState } from 'react'
import {  toast } from 'react-toastify';
import './view.css'
import './PageView/Chartview.css';
import SidebarDash from '../component/SidebarDash'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink, useNavigate } from 'react-router-dom';
import {  Table, IconButton, styled, TableBody, TableCell, TableHead, TableRow, Checkbox, TableContainer, Paper, Typography, Modal, Box, Grid, FormControl, InputLabel, Select, MenuItem, Backdrop, Autocomplete, TextField, Pagination  } from '@mui/material';
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
import { cachedGet } from '../utils/apiCache';
import { ENDPOINT_URL } from '../apiConfig';
import { Add, Close, MailOutline, Person2Outlined, PersonOffRounded } from '@mui/icons-material';
import dayjs from 'dayjs';
import Loader from '../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDispatch, useSelector } from "react-redux"
import { logOut, selectCurrentUser, setUser } from '../features/auth/authSlice';
import Logout from '../component/NetworkLogoutIcon';
import Image from '../img/no-data.png';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import MessageAdminView from './MessageAdminView';
import NotificationVIewInfo from './NotificationVIewInfo';


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
function InvoiceViewAdmin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId && storesUserId !== 'null') {
        try {
          const res = await axios.get(`${ENDPOINT_URL}/get-employeeuser/${storesUserId}`)
          const Name = res.data.data.employeeName;
          const Role = res.data.data.role;
          dispatch(setUser({ userName: Name, role: Role, id: res.data.data._id }));
        } catch (error) {
          console.error('Error fetching data:', error);
          toast.error('Failed to fetch user data.');
        }
      }
    }
    fetchUser()
  }, [dispatch]);
  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }
  const [grantAccess, setGrantAccess] = useState([]);
  useEffect(() => {
    const fetchNumber = async () => {
      try {
        const res = await cachedGet(`${ENDPOINT_URL}/grantAccess`);
        res.data?.data?.filter((row) => row.userID === user.data.id)
          .map((row) => setGrantAccess(row.modules))
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Failed to fetch permissions.');
      }
    }
    fetchNumber()
  }, [user])

  // console.log(grantAccess)

  const InvoiceInfoC = grantAccess.filter((row) => row.moduleName === "Invoice" && row.access.createM === true);
  const InvoiceInfoV = grantAccess.filter((row) => row.moduleName === "Invoice" && row.access.viewM === true);
  const InvoiceInfoU = grantAccess.filter((row) => row.moduleName === "Invoice" && row.access.editM === true);
  const InvoiceInfoD = grantAccess.filter((row) => row.moduleName === "Invoice" && row.access.deleteM === true);

  {/** Get Invoice */ }
  const [invoice, setInvoice] = useState([]);
  const [hiddenRow, setHiddenRow] = useState([]);
  const [hidden, setHidden] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [reason, setReason] = useState("");
  const [newPurchase, setNewPurchase] = useState([]);

  const [page, setPage] = useState(0); // Initialize page state to 0 (0-based index)
  const limit = 100;
  const [searchTerm, setSearchTerm] = useState(''); // Initialize search term state
  const [filterField, setFilterField] = useState(''); // Initialize filter field state
  const [filterValue, setFilterValue] = useState(''); // Initialize filter value state
  const [totalPage, SetTotalPage] = useState(0);
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // 500ms debounce delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const fetchItems = async (page, searchTerm, filterField, filterValue) => {
    try {
      const res = await axios.get(`${ENDPOINT_URL}/invoice-Information?page=${page + 1}&limit=${limit}&search=${encodeURIComponent(searchTerm.trim())}&filterField=${encodeURIComponent(filterField.trim())}&filterValue=${encodeURIComponent(filterValue.trim())}`);
      const formatDate = res.data.itemI.map((row) => ({
        ...row,
        id: row._id,
        invoiceNumber: row.invoiceNumber,
        dateField: row.invoiceDate !== null ? dayjs(row.invoiceDate).format('DD/MM/YYYY') : '',
        dueDateField: dayjs(row.invoiceDueDate).format('DD/MM/YYYY'),
      }));
      const invoices = formatDate;
      SetTotalPage(res.data.totalPages); // Ensure totalPage is correctly calculated
        setTotalItemCount(res.data.totalItem);
      setInvoice(invoices);
      setLoadingData(false);

      // Auto-repair status mismatch for zero-balance invoices
      const mismatchedInvoices = invoices.filter(inv => 
        (inv.status === 'Partially-Paid' || inv.status === 'Sent' || inv.status === 'Draft' || inv.status === 'Pending') && 
        parseFloat(inv.balanceDue) <= 0 && 
        parseFloat(inv.totalInvoice) > 0
      );

      if (mismatchedInvoices.length > 0) {
        console.log(`Repairing status for ${mismatchedInvoices.length} invoices sequentially...`);
        (async () => {
          for (const inv of mismatchedInvoices) {
            try {
              await axios.put(`${ENDPOINT_URL}/update-invoice/${inv._id}`, { status: 'Paid' });
              // Small delay to prevent rate limiting
              await new Promise(resolve => setTimeout(resolve, 100));
            } catch (err) {
              console.error(`Failed to repair invoice ${inv.invoiceNumber}:`, err);
            }
          }
        })();
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to fetch invoices.');
      setLoadingData(false);
    }
  };
  const FilterInvoiceWith = invoice.filter(row =>
    Array.isArray(row.items) && row.items.every(item => parseFloat(item.itemOut) === parseFloat(item.itemQty))
  );


  useEffect(() => {
    fetchItems(page, debouncedSearchTerm, filterField, filterValue);
  }, [page, debouncedSearchTerm, filterField, filterValue]);

  useEffect(() => {
    // fetchAndSaveData();
  }, []);

  const handlePageChange = (newPage) => {
    setPage(newPage); // Update page state (convert to 0-based index)
  };

  const handleRefreshSearch = () => {
    fetchItems(page, searchTerm, filterField, filterValue);
  };

  const [loading, setLoading] = useState(false);
  const [ErrorOpenModal, setErrorOpenModal] = useState(false);
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
    setLoadingOpenModal(false);
    setLoading(false);
    fetchItems(page, searchTerm, filterField, filterValue);
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
    setModalDeleteOpenLoading(false);
    setLoading(false);
    fetchItems(page, searchTerm, filterField, filterValue);
  }

  const handleOpenOffline = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  const handleError = () => {
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }


  useEffect(() => {
    const fetchDataHidden = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/hidden`)
        setHiddenRow(res.data.data.map((row) => row.idRow))
        setHidden(res.data.data)
        localStorage.removeItem('Hidden')
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Failed to fetch hidden rows.');
      }
    }
    fetchDataHidden()
  }, [])
  const [openReasonDelete, setOpenReasonDelete] = useState(false);

  const handleOpenReasonDelete = (e) => {
    e.preventDefault()
    setOpenReasonDelete(true);
  };
  const handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };
  {/** End Get Invoice */ }
  const [open, setOpen] = useState(false);
  const [DeleteId, setDeleteId] = useState(null)

  const handleOpen = (id) => {
    setOpen(true);
    setDeleteId(id)
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [open1, setOpen1] = useState(false);
  const [updateId, setUpdateId] = useState(null)
  const [status, setStatus] = useState("");

  const handleOpenUpdate = (id) => {
    setOpen1(true);
    setUpdateId(id);
  };
  const handleCloseUpdate = () => {
    setOpen1(false);
    setUpdateId(null);
  };
  {/** delete multiple && all modal start */ }
  const [openDeleteMultiple, setOpenDeleteMultiple] = useState(false);

  const handleOpenMultiple = () => {
    setOpenDeleteMultiple(true);
  };
  const handleCloseMultiple = () => {
    setOpenDeleteMultiple(false);
  };
  const [openDeleteAll, setOpenDeleteAll] = useState(false);

  const handleOpenAll = () => {
    setOpenDeleteAll(true);
  };
  const handleCloseAll = () => {
    setOpenDeleteAll(false);
  };

  {/** Delete Function */ }
  const handleDelete = async () => {
    setLoading(true);
    setModalDeleteOpenLoading(true);
    handleClose();
    try {
      const invToDelete = invoice.find(inv => inv._id === DeleteId);
      if (invToDelete && invToDelete.ReferenceName && invToDelete.Position === 'Maintenance') {
        try {
          await axios.put(`${ENDPOINT_URL}/update-maintenance/${invToDelete.ReferenceName}`, { Converted: false, ReferenceName: null });
        } catch (e) { console.error('Failed to update maintenance order', e); }
      }

      const res = await axios.delete(`${ENDPOINT_URL}/delete-invoice/${DeleteId}`);
      if (res) {
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error('Failed to delete invoice.');
      handleError();
    }
  };
  const [InvoiceDeleted, setInvoiceDeleted] = useState([])
  useEffect(() => {
    const fetchFunction = async () => {
      const deletePromises = selectedRows.map(async (idToDelete) => {
        return axios.get(`${ENDPOINT_URL}/get-invoice/${idToDelete}`)
      })
      try {
        const res = await Promise.all(deletePromises);
        setInvoiceDeleted(res.map((row) => 'INV-' + String(row.data.data.invoiceNumber).padStart(6, '0')))
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
    fetchFunction()
  }, [selectedRows])
  const related = InvoiceDeleted.map(row => row)
  const info = related.toString()
  const handleCreateNotification = async () => {
    const data = {
      idInfo: '',
      person: user.data.userName + ' Deleted ' + info,
      reason,
      dateNotification: new Date()
    }
    try {
      await axios.post(`${ENDPOINT_URL}/create-notification`, data)
    } catch (error) {
      console.error('Notification error:', error);
    }
  }
  const handleDeleteMany = async (e) => {
    e.preventDefault()
    setLoading(true);
    setModalDeleteOpenLoading(true);
    handleCloseMultiple();
    handleCloseAll();
    handleCloseReasonDelete();
    const deletePromises = selectedRows.map(async (idToDelete) => {
      const invToDelete = invoice.find(inv => inv._id === idToDelete);
      if (invToDelete && invToDelete.ReferenceName && invToDelete.Position === 'Maintenance') {
        try {
          await axios.put(`${ENDPOINT_URL}/update-maintenance/${invToDelete.ReferenceName}`, { Converted: false, ReferenceName: null });
        } catch (e) { console.error('Failed to update maintenance order', e); }
      }
      return axios.delete(`${ENDPOINT_URL}/delete-invoice/${idToDelete}`)
    })
    try {
      const res = await Promise.all(deletePromises);
      if (res) {
        handleCreateNotification()
        setLoading(false);
        setSelectedRows([]);
      }
    } catch (error) {
      console.error('Delete Many error:', error);
      setLoading(false);
      toast.error('Failed to delete multiple invoices.');
      handleError();
    }
  }
  {/** End Delete Function */ }
  {/** Update Invoice Status start */ }
  const [invoiceN, setInvoiceN] = useState(0)
  useEffect(() => {
    const fetchId = async () => {
      if (updateId !== null) {
        try {
          const res = await axios.get(`${ENDPOINT_URL}/get-invoice/${updateId}`)
          setStatus(res.data.data.status);
          setInvoiceN(res.data.data.invoiceNumber);
        } catch (error) {
          console.error('Error fetching data:', error);
          toast.error('Failed to fetch invoice detail.');
        }
      }
    }
    fetchId()
  }, [updateId]);
  const handleCreateComment = async () => {
    const data = {
      idInfo: updateId,
      person: user.data.userName,
      reason: status + ' INV-' + String(invoiceN).padStart(6, '0'),
      dateNotification: new Date()
    };
    try {
      await axios.post(`${ENDPOINT_URL}/create-notification/`, data)
    } catch (error) {
      console.error('Notification error:', error);
    }
  }
  const handleSubmitUpdateStatus = async (e) => {
    e.preventDefault();
    const data = {
      status
    };
    try {
      const res = await axios.put(`${ENDPOINT_URL}/update-invoice/${updateId}`, data)
      if (res) {
        handleCreateComment();
        handleOpenLoading();
      }
    } catch (error) {
      console.error('Error making PUT request:', error);
      toast.error('Failed to update invoice status.');
    }
  }
  {/** Update Invoice Status End */ }




  const handleHideRow = async (id) => {

    if (user.data.role === 'CEO') {
      try {
        if (hiddenRow.includes(id)) {
          setHiddenRow(hiddenRow.filter((row) => row !== id));
          const result = hidden.filter((row) => row.idRow === id)
            .map((row) => row._id)
          const hiddenId = result.toString()

          await axios.delete(`${ENDPOINT_URL}/delete-hidden/${hiddenId}`);
        } else {
          setHiddenRow([...hiddenRow, id]);
          await axios.post(`${ENDPOINT_URL}/create-hidden`, {
            idRow: id, hiddenByCEO: true
          })
        }
      } catch (error) {
        console.error('Hide error:', error);
        toast.error('Failed to update row visibility.');
      }
    }
  }

  const rowRenderer = (params) => {
    if (hiddenRow.includes(params.row._id)) {
      return null
    }
    return <div>{params.row[params.field]}</div>
  }
  const [filteredRows, setFilteredRows] = useState([])
  useEffect(() => {
    const Inv = invoice.filter(row => !hiddenRow.includes(row._id))
    setFilteredRows(Inv)
  }, [invoice, hiddenRow])
  {/** search start */ }
  const [searchInvoice, setSearchInvoice] = useState("");
  useEffect(() => {
    const storedValue = 
    if (storedValue) {
      setSearchInvoice(storedValue)
    }
  }, [])
  const [filterModel, setFilterModel] = React.useState({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    quickFilterValues: [],
  });
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({});
  const handelHiddenColumn = (newHidden) => {
    setColumnVisibilityModel(newHidden)
    localStorage.setItem('HiddenColumnsInvoice', JSON.stringify(newHidden))
  }
  const handleFilter = (newModel) => {
    const searchTerm = newModel.quickFilterValues?.join(' ') || '';
    setSearchTerm(searchTerm);
    setFilterModel(newModel)

  }
  useEffect(() => {
    const storedQuick = 
    if (storedQuick) {
      const searchTerm = storedQuick.quickFilterValues?.join(' ') || '';
      setSearchTerm(searchTerm);
      setFilterModel(storedQuick)
    }
    const storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsInvoice'))
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns)
    }

  }, [searchInvoice])
  const [sideBar, setSideBar] = React.useState(true);
  const toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  {/** search end */ }
  const columns = [
    { field: 'invoiceNumber', headerName: 'Invoice#', minWidth: 100, flex: 1, renderCell: (params) => (<div> <span>INV-{String(params.row.invoiceNumber).padStart(6, '0')}</span> </div>) },
    { field: 'customer', headerName: 'Customer Name', minWidth: 200, flex: 2, valueGetter: (params) => params.row.customerName.customerName.toUpperCase() },
    {
      field: 'status', headerName: 'Status', minWidth: 100, flex: 1, renderCell: (params) => {
        const isActuallyPaid = parseFloat(params.row.balanceDue) <= 0 && parseFloat(params.row.totalInvoice) > 0;
        const displayStatus = isActuallyPaid ? "Paid" : params.row.status;
        const displayColor = isActuallyPaid ? "#4caf50" : (
          params.row.status === "Draft" ? "gray" :
          params.row.status === "Sent" ? "blue" :
          params.row.status === "Decline" ? "red" :
          params.row.status === "Pending" ? "#801313" :
          params.row.status === "Paid" ? "#4caf50" :
          params.row.status === "Partially-Paid" ? "#fb8c00" :
          params.row.status === "Free of Charge" ? "#9c27b0" : "black"
        );

        return (
          <Typography color={displayColor}>
            {displayStatus}
          </Typography>
        );
      }
    },
    { field: 'invoiceSubject', headerName: 'Subject', minWidth: 150, flex: 1 },
    { field: 'dateField', headerName: 'Date', minWidth: 100, flex: 1 },
    { field: 'totalInvoice', headerName: 'I-Amount', minWidth: 100, flex: 1, renderCell: (params) => `$${params.row.totalInvoice?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'total', headerName: 'A-Paid', minWidth: 100, flex: 1, renderCell: (params) => `$${params.row.total?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'balanceDue', headerName: 'B-Due', minWidth: 100, flex: 1, renderCell: (params) => `$${params.row.balanceDue?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    {
      field: 'view', headerName: 'View', width: 60, minWidth: 60, renderCell: (params) => (
        <ViewTooltip title="View">
          <span>
            <IconButton disabled={InvoiceInfoV.length === 0}>
              <NavLink to={`/InvoiceViewAdminAll/${params.row._id}`} className='LinkName'>
                <VisibilityIcon style={{ color: '#202a5a' }} />
              </NavLink>
            </IconButton>
          </span>
        </ViewTooltip>
      )
    },
    {
      field: 'edit', headerName: 'Edit', width: 50, renderCell: (params) => (
        <EditTooltip title="Edit">
          <span>
            <IconButton onClick={() => handleOpenUpdate(params.row._id)} disabled={params.row.status !== 'Draft' && InvoiceInfoU.length === 0}>
              <EditIcon style={{ color: 'gray' }} />
            </IconButton>
          </span>
        </EditTooltip>

      )
    },
    {
      field: 'Delete', headerName: 'Delete', width: 50, renderCell: (params) => (
        <DeleteTooltip title="Delete">
          <span>                                <IconButton onClick={() => handleOpen(params.row._id)} disabled={InvoiceInfoD.length === 0}>
            <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
          </IconButton>
          </span>
        </DeleteTooltip>)
    },
    {
      field: 'hide',
      headerName: 'Action',
      sortable: false,
      width: 40,
      renderCell: (params) => {
        if (user.data.role === 'CEO') {
          return (
            <div>
              {
                hiddenRow.includes(params.row._id) ?
                  (<ViewTooltip title="UnHide">
                    <span>
                      <IconButton onClick={() => handleHideRow(params.row._id)} >
                        <PersonOffRounded style={{ color: '#202a5a' }} />
                      </IconButton>
                    </span>
                  </ViewTooltip>)
                  : (
                    <ViewTooltip title="Hide">
                      <span>
                        <IconButton onClick={() => handleHideRow(params.row._id)} >
                          <Person2Outlined style={{ color: '#202a5a' }} />
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

  {/** Search View End */ }

  return (
    <div className='Homeemployee'>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={sideBar} sx={{ backgroundColor: '#30368a' }}>
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
              Invoice
            </Typography>
            <NotificationVIewInfo />
            <MessageAdminView name={user.data.userName} role={user.data.role} />
            <IconButton color="inherit" onClick={handleLogout}>
              <Logout style={{ color: 'white' }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={sideBar} onMouseEnter={() => setSideBar(true)} onMouseLeave={() => setSideBar(false)}>
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
            <SidebarDash />
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
              loadingData ? <div >
                <div style={{ position: 'relative', top: '120px' }}>
                  <Loader />
                </div>
              </div> : (
                <div  >
                  <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                    <ViewTooltip>
                      <span>
                        <IconButton disabled={InvoiceInfoC.length === 0}>
                          <NavLink to={'/InvoiceForm'} className='LinkName'>
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
                    {invoice.length > 0 ? (
                      <section style={{ position: 'relative', float: 'left', margin: '10px' }}>
                        {
                          selectedRows.length > 1 && selectedRows.length < invoice.length && (
                            <button disabled={user.data.role !== 'CEO'} onClick={handleOpenAll} className='btnCustomer2'>Delete multiple</button>
                          )
                        }
                        {
                          selectedRows.length === invoice.length ? (
                            <button onClick={handleOpenAll} disabled={user.data.role !== 'CEO'} className='btnCustomer2'>Delete all</button>
                          ) : ''
                        }
                      </section>
                    )
                      : ''}
                    {
                      user.data.role === 'CEO' ? (
                        <>
                          <DataGrid
                          paginationMode="server"
                          filterMode="server"
                          rowCount={totalItemCount}
                          paginationModel={{ page: page, pageSize: limit }}
                          onPaginationModelChange={(newModel) => handlePageChange(newModel.page)}
                            rows={invoice}
                            columns={columns}
                            slots={{ toolbar: GridToolbar }}
                            slotProps={{
                              toolbar: {
                                showQuickFilter: true,
                          quickFilterProps: { debounceMs: 500 },
                                printOptions: {
                                  disableToolbarButton: true
                                },
                              },
                            }}
                            getRowClassName={(params) =>
                              FilterInvoiceWith.some(filteredRow => filteredRow.id === params.row.id) ? 'new-Purchase' : ''
                            }
                            onRowSelectionModelChange={(newSelection) => setSelectedRows(newSelection)}
                            rowRenderer={rowRenderer}
                            checkboxSelection
                            disableColumnFilter
                            disableDensitySelector
                            rowSelectionModel={selectedRows}
                            filterModel={filterModel}
                            onFilterModelChange={(newModel) => handleFilter(newModel)}
                            columnVisibilityModel={columnVisibilityModel}
                            onColumnVisibilityModelChange={handelHiddenColumn}
                            sx={{
                              width: '100%',
                              backgroundColor: 'white',
                              padding: '10px',
                              '& .new-Purchase': {
                                backgroundColor: '#e3f2fd',
                              },
                            }}
                          />
                          <Pagination 
                            count={totalPage} 
                            page={page + 1} 
                            onChange={(e, value) => setPage(value - 1)} 
                            color="primary" 
                            sx={{ position: 'relative', top: '-52px', zIndex: 1000, display: 'flex', justifyContent: 'center', width: 'fit-content', margin: '0 auto' }} 
                          />
                        </>
                      ) : (
                        <>
                          <DataGrid
                          paginationMode="server"
                          filterMode="server"
                          rowCount={totalItemCount}
                          paginationModel={{ page: page, pageSize: limit }}
                          onPaginationModelChange={(newModel) => handlePageChange(newModel.page)}
                            rows={filteredRows}
                            columns={columns}
                            slots={{ toolbar: GridToolbar }}
                            slotProps={{
                              toolbar: {
                                showQuickFilter: true,
                          quickFilterProps: { debounceMs: 500 },
                                printOptions: {
                                  disableToolbarButton: true
                                },
                              },
                            }}
                            getRowClassName={(params) =>
                              FilterInvoiceWith.some(filteredRow => filteredRow.id === params.row.id) ? 'new-Purchase' : ''
                            }
                            onRowSelectionModelChange={(newSelection) => setSelectedRows(newSelection)}
                            checkboxSelection
                            disableColumnFilter
                            disableDensitySelector
                            rowSelectionModel={selectedRows}
                            filterModel={filterModel}
                            onFilterModelChange={(newModel) => handleFilter(newModel)}
                            columnVisibilityModel={columnVisibilityModel}
                            onColumnVisibilityModelChange={handelHiddenColumn}
                            sx={{
                              width: '100%',
                              backgroundColor: 'white',
                              padding: '10px',
                              '& .new-Purchase': {
                                backgroundColor: '#e3f2fd',
                              },
                            }}
                          />
                          <Pagination 
                            count={totalPage} 
                            page={page + 1} 
                            onChange={(e, value) => setPage(value - 1)} 
                            color="primary" 
                            sx={{ position: 'relative', top: '-52px', zIndex: 1000, display: 'flex', justifyContent: 'center', width: 'fit-content', margin: '0 auto' }} 
                          />
                        </>
                      )
                    }
                  </Box>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={{ ...style, width: 500 }}>
                      <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                        <h2>Do you want to Delete ?</h2>
                        <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
                          <button className='btnCustomer2' onClick={handleDelete}>
                            Delete
                          </button>
                          <button className='btnCustomer' onClick={handleClose}>
                            Cancel
                          </button>
                        </div>
                      </div>
                    </Box>
                  </Modal>

                  <Modal
                    open={modalDeleteOpenLoading}
                    onClose={handleDeleteCloseLoading}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={{ ...style, width: 500 }}>
                      <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                        {loading ? (<Loader />
                        ) : (
                          <div>
                            <p><CheckCircleIcon style={{ color: 'green', height: '40px', width: '40px' }} /></p>
                            <h2> Done Successfully</h2>
                            <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
                              <button onClick={handleDeleteCloseLoading} className='btnCustomer'>
                                Close
                              </button>
                            </div>
                          </div>)}
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
                      <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                        <h2>Do you want to Delete ?</h2>
                        {
                          selectedRows.length === 1 && (
                            <p><span className="txt2" style={{ color: 'red' }}>Note:</span> Selected rows will be deleted</p>
                          )
                        }
                        {
                          selectedRows.length > 1 && selectedRows.length < invoice.length && (
                            <p><span className="txt2" style={{ color: 'red' }}>Note:</span> All selected rows will be deleted</p>
                          )
                        }
                        {
                          selectedRows.length === invoice.length && (
                            <p><span className="txt2" style={{ color: 'red' }}>Note:</span> All rows will be deleted</p>
                          )
                        }
                        <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
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
                        Why do you want to delete: {info}?
                      </Typography>
                      <form onSubmit={handleDeleteMany}>
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

                  <Modal
                    open={open1}
                    onClose={handleCloseUpdate}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        Update Invoice Status
                      </Typography>
                      <br />
                      <form onSubmit={handleSubmitUpdateStatus}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Status</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={status}
                            label="Status"
                            onChange={(e) => setStatus(e.target.value)}
                          >
                            <MenuItem value={'Draft'}>Draft</MenuItem>
                            <MenuItem value={'Sent'}>Sent</MenuItem>
                            <MenuItem value={'Pending'}>Pending</MenuItem>
                            <MenuItem value={'Decline'}>Decline</MenuItem>
                            <MenuItem value={'Free of Charge'}>Free of Charge</MenuItem>
                          </Select>
                        </FormControl>
                        <br /><br />
                        <button type='submit' className='btnCustomer6' style={{ width: '100%' }}>Update</button>
                      </form>

                    </Box>
                  </Modal>
                  <Modal
                    open={loadingOpenModal}
                    onClose={handleCloseLoading}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={{ ...style, width: 500 }}>
                      <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                        {loading ? (<Loader />
                        ) : (
                          <div>
                            <p><CheckCircleIcon style={{ color: 'green', height: '40px', width: '40px' }} /></p>
                            <h2> Done Successfully</h2>
                            <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
                              <button onClick={handleCloseLoading} className='btnCustomer'>
                                Close
                              </button>
                            </div>
                          </div>)}
                      </div>
                    </Box>
                  </Modal>
                  <Modal
                    open={ErrorOpenModal}
                    onClose={() => setErrorOpenModal(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={{ ...style, width: 500 }}>
                      <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                        <h2> Error Occured</h2>
                        <p>Please try again later</p>
                        <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
                          <button onClick={() => setErrorOpenModal(false)} className='btnCustomer'>
                            Close
                          </button>
                        </div>
                      </div>
                    </Box>
                  </Modal>
                </div>)
            }
          </Container></Box></Box>
    </div>
  )
}

export default InvoiceViewAdmin
