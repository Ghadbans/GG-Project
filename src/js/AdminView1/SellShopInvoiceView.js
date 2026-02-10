import React, { useEffect, useRef, useState } from 'react'
import './view.css'
import './PageView/Chartview.css';
import SideShop from '../component/SideShop'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink, useNavigate } from 'react-router-dom';
import { Table, IconButton, styled, TableBody, TableCell, TableHead, TableRow, Checkbox, TableContainer, Paper, Typography, Modal, Box, Grid, FormControl, InputLabel, Select, MenuItem, Backdrop, Autocomplete, TextField } from '@mui/material';
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
import { Add, Close, MailOutline, Person2Outlined, PersonOffRounded, Print } from '@mui/icons-material';
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
import { useReactToPrint } from 'react-to-print';

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
function SellShopInvoiceView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
        if (navigator.onLine) {
          try {
            const res = await axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-employeeuser/${storesUserId}`)
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
  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }
  const [grantAccess, setGrantAccess] = useState([]);
  useEffect(() => {
    const fetchNumber = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/grantAccess');
          res.data.data.filter((row) => row.userID === user.data.id)
            .map((row) => setGrantAccess(row.modules))
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        const offLineCustomer1 = await db.grantAccessSchema.toArray();
        setGrantAccess(offLineCustomer1);
      }
    }
    fetchNumber()
  }, [user])

  const InvoiceInfoC = grantAccess.filter((row) => row.moduleName === "Point-Of-Sell" && row.access.createM === true);
  const InvoiceInfoV = grantAccess.filter((row) => row.moduleName === "Point-Of-Sell" && row.access.viewM === true);
  const InvoiceInfoU = grantAccess.filter((row) => row.moduleName === "Point-Of-Sell" && row.access.editM === true);
  const InvoiceInfoD = grantAccess.filter((row) => row.moduleName === "Point-Of-Sell" && row.access.deleteM === true);

  {/** Get Invoice */ }
  const [invoice, setInvoice] = useState([]);
  const [hiddenRow, setHiddenRow] = useState([]);
  const [hidden, setHidden] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [reason, setReason] = useState("");
  const [page, setPage] = useState(0);
  const limit = 100;
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [totalPage, SetTotalPage] = useState(0);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchInvoice);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchInvoice]);

  const fetchData = async (page, searchTerm) => {
    if (navigator.onLine) {
      try {
        const res = await axios.get(`https://gg-project-productionn.up.railway.app/endpoint/pos-Information?page=${page + 1}&limit=${limit}&search=${encodeURIComponent(searchTerm.trim())}`)
        const formatDate = res.data.itemI.map((item) => ({
          ...item,
          id: item._id,
          dateField: dayjs(item.invoiceDate).format('DD/MM/YYYY'),
          time: dayjs(item.time).format('HH:mm'),
        }))
        setInvoice(formatDate);
        SetTotalPage(res.data.totalPages);
        setLoadingData(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadingData(false)
      }
    } else {
      const offLineCustomer1 = await db.posSchema.toArray();
      const lowerSearch = searchTerm.toLowerCase().trim();
      const filtered = lowerSearch === '' ? offLineCustomer1 : offLineCustomer1.filter((item) =>
        (item.customerName && item.customerName.customerName.toLowerCase().includes(lowerSearch)) ||
        (item.factureNumber && item.factureNumber.toString().includes(lowerSearch))
      );
      const formatDate = filtered.map((item) => ({
        ...item,
        id: item._id,
        dateField: dayjs(item.invoiceDate).format('DD/MM/YYYY'),
        time: dayjs(item.time).format('HH:mm'),
      }))
      setInvoice(formatDate.reverse())
      setLoadingData(false)
    }
  }

  useEffect(() => {
    fetchData(page, debouncedSearchTerm);
  }, [page, debouncedSearchTerm]);

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
  const handleCreateNotificationOffline = async (ReferenceInfo, ReferenceInfoNumber, ReferenceInfoCustomer) => {
    const data = {
      idInfo: ReferenceInfo,
      person: user.data.userName + ' Created ',
      reason: 'S-' + ReferenceInfoNumber + ' For ' + ReferenceInfoCustomer,
      dateNotification: new Date()
    }
    try {
      await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-notification', data)
    } catch (error) {
      console.log(error)
    }
  }
  const syncOff = async () => {
    if (navigator.onLine) {
      const syncedInvoice = await db.posSchema.toArray();
      const invoiceToSynced = syncedInvoice.filter((row) => row.synced === false)
      for (const invoiceInfo of invoiceToSynced) {
        try {
          const res = await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-pos', invoiceInfo)
          if (res) {
            const ReferenceInfo = res.data.data._id
            const ReferenceInfoNumber = res.data.data.factureNumber
            const ReferenceInfoCustomer = res.data.data.customerName.customerName
            handleCreateNotificationOffline(ReferenceInfo, ReferenceInfoNumber, ReferenceInfoCustomer)
            handleOpenOffline();
          }
        } catch (error) {
          console.log(error)
        }
      }
      const invoiceToSyncedUpdate = syncedInvoice.filter((row) => row.updateS === false)
      for (const invoiceInfoUpdate of invoiceToSyncedUpdate) {
        try {
          await axios.put(`https://gg-project-productionn.up.railway.app/endpoint/update-pos/${invoiceInfoUpdate._id}`, invoiceInfoUpdate)
          await db.posSchema.update(invoiceInfoUpdate.factureNumber, { synced: true, updateS: true })
          handleOpenOffline();
        } catch (error) {
          console.log(error)
        }
      }
    }
    fetchData()
  }
  useEffect(() => {
    window.addEventListener('online', syncOff)
    if (navigator.onLine) {
      syncOff()
    }
    return () => {
      window.removeEventListener('online', syncOff)
    }
  }, [])

  useEffect(() => {
    const fetchDataHidden = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/hidden')
          setHiddenRow(res.data.data.map((row) => row.idRow))
          setHidden(res.data.data)
          localStorage.removeItem('Hidden')
          await Promise.all(res.data.data.map(async (item) => {
            await db.hiddenSchema.put({ ...item, synced: true, updateS: true })
          }))
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        const offLineCustomer1 = await db.hiddenSchema.toArray();
        setHiddenRow(offLineCustomer1.map((row) => row.idRow))
        setHidden(offLineCustomer1)
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
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforeGetContent: () => {
      const PAGE_HEIGHT = 560; // Adjusted for POS printer roll paper size
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
    try {
      const res = await axios.delete(`https://gg-project-productionn.up.railway.app/endpoint/delete-pos/${DeleteId}`);
      if (res) {
        handleDeleteOpenLoading();
      }
    } catch (error) {
      console.error(error);
    }
  };
  const [InvoiceDeleted, setInvoiceDeleted] = useState([])
  useEffect(() => {
    const fetchFunction = async () => {
      const deletePromises = selectedRows.map(async (idToDelete) => {
        return axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-pos/${idToDelete}`)
      })
      try {
        const res = await Promise.all(deletePromises);
        setInvoiceDeleted(res.map((row) => 'F-' + row.data.data.factureNumber))
      } catch (error) {
        console.log(error)
      }
    }
    fetchFunction()
  }, [selectedRows])
  const [openView, setOpenView] = useState(false);
  const [idView, setIdView] = useState(null);
  const [posInvoice, setPosInvoice] = useState(null)
  const handleOpenView = (id) => {
    setOpenView(true);
    setIdView(id)
  }
  const handleCloseView = () => {
    setOpenView(false);
    setIdView(null);
    setPosInvoice(null);
    setSelectedRows([]);
  };

  useEffect(() => {
    const fetchData2 = async () => {
      if (idView !== null) {
        if (navigator.onLine) {
          try {
            const res = await axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-pos/${idView}`)
            setPosInvoice(res.data.data)
          } catch (error) {
            console.log(error)
          }
        } else {
          const resLocal = await db.posSchema.get({ _id: idView })
          setPosInvoice(resLocal)
        }
      }
    }
    fetchData2()
  }, [idView])

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
      await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-notification', data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleDeleteMany = async (e) => {
    e.preventDefault()
    const deletePromises = selectedRows.map(async (idToDelete) => {
      return axios.delete(`https://gg-project-productionn.up.railway.app/endpoint/delete-pos/${idToDelete}`)
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
  {/** End Delete Function */ }
  {/** Update Invoice Status start */ }
  const [invoiceN, setInvoiceN] = useState(0)
  useEffect(() => {
    const fetchId = async () => {
      if (updateId !== null) {
        try {
          const res = await axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-pos/${updateId}`)
          setStatus(res.data.data.status);
          setInvoiceN(res.data.data.factureNumber);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    }
    fetchId()
  }, [updateId]);
  const handleCreateComment = async () => {
    const data = {
      idInfo: updateId,
      person: user.data.userName,
      reason: status + ' INV-' + invoiceN,
      dateNotification: new Date()
    };
    try {
      await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-notification/', data)
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
      const res = await axios.put(`https://gg-project-productionn.up.railway.app/endpoint/update-invoice/${updateId}`, data)
      if (res) {
        handleCreateComment();
        handleOpenLoading();
      }
    } catch (error) {
      console.error('Error making POST request:', error);
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

          await axios.delete(`https://gg-project-productionn.up.railway.app/endpoint/delete-hidden/${hiddenId}`);
        } else {
          setHiddenRow([...hiddenRow, id]);
          await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-hidden', {
            idRow: id, hiddenByCEO: true
          })
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  const rowRenderer = (params) => {
    if (hiddenRow.includes(params.row._id && !user.data.role === 'CEO')) {
      return null
    }
    return <div>{params.row[params.field]}</div>
  }
  const [filteredRows, setFilteredRows] = useState([])
  useEffect(() => {
    const Inv = invoice.filter(row => !hiddenRow.includes(row._id))
    setFilteredRows(Inv)
  }, [invoice])
  {/** search start */ }
  const [searchInvoice, setSearchInvoice] = useState("");
  useState(() => {
    const storedValue = localStorage.getItem('QuickFilterInvoice')
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
    localStorage.setItem('HiddenColumnsInvoice', JSON.stringify(newHidden))
  }
  const handleFilter = (newModel) => {
    setFilterModel(newModel)
    localStorage.setItem('QuickFilterInvoiceTst', JSON.stringify(newModel))
  }
  useEffect(() => {
    const storedQuick = JSON.parse(localStorage.getItem('QuickFilterInvoiceTst'))
    if (storedQuick) {
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
    { field: 'factureNumber', headerName: 'Invoice#', width: 100, renderCell: (params) => (<div> <span>S-00</span><span>{params.row.factureNumber}</span> </div>) },
    { field: 'customer', headerName: 'Customer Name', width: sideBar ? 180 : 300, valueGetter: (params) => params.row.customerName.customerName.toUpperCase() },
    {
      field: 'status', headerName: 'Status', width: 100, renderCell: (params) => (
        <Typography
          color={
            params.row.status === "Draft"
              ? "gray" : params.row.status === "Sent"
                ? "blue" :
                params.row.status === "Decline"
                  ? "red" :
                  params.row.status === "Pending"
                    ? "#801313" :
                    params.row.status === "Paid"
                      ? "#4caf50" :
                      params.row.status === "Partially-Paid"
                        ? "#fb8c00" : "black"
          }
        >
          {params.row.status}
        </Typography>
      )
    },
    { field: 'dateField', headerName: 'Date', width: 150 },
    { field: 'totalInvoice', headerName: 'I-Amount', width: sideBar ? 150 : 200, renderCell: (params) => `FC${params.row.totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'TotalAmountPaid', headerName: 'Total Paid', width: sideBar ? 220 : 230, renderCell: (params) => `FC${params.row.TotalAmountPaid?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ($${(params.row.TotalAmountPaid / params.row.rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')})` },
    { field: 'balanceDue', headerName: 'B-Due', width: sideBar ? 100 : 120, renderCell: (params) => `FC${(params.row.balanceDue + (params.row.creditFC + (params.row.creditUsd * params.row.rate))).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    {
      field: 'view', headerName: 'View', width: 50, renderCell: (params) => (
        <ViewTooltip title="View">
          <span>
            <IconButton onClick={() => handleOpenView(params.row._id)} hidden={InvoiceInfoV.length === 0 && user.data.role !== 'CEO'}>
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
            <IconButton disabled={InvoiceInfoU.length === 0 && user.data.role !== 'CEO'}>
              <NavLink to={`/ShopPosUpdateForm/${params.row._id}`} className='LinkName'>
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
          <span>                                <IconButton onClick={handleOpenAll} disabled={InvoiceInfoD.length === 0 && user.data.role !== 'CEO'}>
            <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
          </IconButton>
          </span>
        </DeleteTooltip>
      )
    }
  ]
  return (
    <div>
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
              Invoicing
            </Typography>
            <NotificationVIewInfo />
            <MessageAdminView name={user.data.userName} role={user.data.role} />
            <IconButton color="inherit" onClick={handleLogout}>
              <Logout style={{ color: 'white' }} />
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
          <List sx={{ height: '700px' }}>
            <SideShop />
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
                        <IconButton disabled={InvoiceInfoC.length === 0 && user.data.role !== 'CEO'}>
                          <NavLink to={'/ShopPosForm'} className='LinkName'>
                            <span className='btnCustomerAdding'>
                              <Add />
                            </span>
                          </NavLink>
                        </IconButton>
                      </span>
                    </ViewTooltip>
                  </section>
                  {invoice.length > 0 ? (
                    <Box sx={{ height: 600, width: '100%' }}>
                      {invoice.length > 0 ? (
                        <section style={{ position: 'relative', float: 'left', margin: '10px' }}>
                          {
                            selectedRows.length > 1 && selectedRows.length < invoice.length && (
                              <button hidden={user.data.role !== 'CEO'} onClick={handleOpenAll} className='btnCustomer2'>Delete multiple</button>
                            )
                          }
                          {
                            selectedRows.length === invoice.length ? (
                              <button onClick={handleOpenAll} hidden={user.data.role !== 'CEO'} className='btnCustomer2'>Delete all</button>
                            ) : ''
                          }
                        </section>
                      )
                        : ''}
                      {
                        user.data.role === 'CEO' ? (
                          <DataGrid
                            rows={invoice}
                            columns={columns}
                            slots={{ toolbar: GridToolbar }}
                            slotProps={{
                              toolbar: {
                                showQuickFilter: true,
                                printOptions: {
                                  disableToolbarButton: true
                                },
                              },
                            }}
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
                            sx={{ width: '100%', backgroundColor: 'white', padding: '10px' }}
                          />
                        ) : (
                          <DataGrid
                            rows={filteredRows}
                            columns={columns}
                            slots={{ toolbar: GridToolbar }}
                            slotProps={{
                              toolbar: {
                                showQuickFilter: true,
                                printOptions: {
                                  disableToolbarButton: true
                                },
                              },
                            }}
                            onRowSelectionModelChange={(newSelection) => setSelectedRows(newSelection)}
                            rowRenderer={rowRenderer}
                            checkboxSelection
                            disableDensitySelector
                            rowSelectionModel={selectedRows}
                            filterModel={filterModel}
                            onFilterModelChange={(newModel) => handleFilter(newModel)}
                            columnVisibilityModel={columnVisibilityModel}
                            onColumnVisibilityModelChange={handelHiddenColumn}
                            sx={{ width: '100%', backgroundColor: 'white', padding: '10px' }}
                          />
                        )
                      }
                    </Box>
                  ) : <div>
                    <img src={Image} style={{ position: 'relative', marginLeft: '19%', padding: '25px', height: '40%', top: '40px', width: '55%', boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)' }} />
                  </div>}

                </div>)
            }
          </Container>
        </Box>
      </Box>
      {/** Modal for Deciding to Delete Invoice Start */}
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
              <button onClick={handleDelete} className='btnCustomer2' style={{ width: '100%' }}>Delete</button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      {/** Modal for Deciding to Delete Invoice End */}
      {/** Modal for Updating Invoice Status Start */}
      <Modal
        open={open1}
        onClose={handleCloseUpdate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <ViewTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseUpdate} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </ViewTooltip>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Estimate Status
          </Typography>
          <form onSubmit={handleSubmitUpdateStatus}>
            <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>
              <Grid item xs={12}>
                <FormControl sx={{ width: '100%' }}>
                  <InputLabel id="status">Status</InputLabel>
                  <Select
                    required
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    name="status"
                    label="status"
                    defaultValue="Draft"
                  >
                    <MenuItem value="Draft">Draft</MenuItem>
                    <MenuItem value="Sent">Sent</MenuItem>
                    <MenuItem value="Decline">Decline</MenuItem>
                    <MenuItem value="Void">Void</MenuItem>
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem disabled value="Partially-Paid">Partially-Paid</MenuItem>
                    <MenuItem value="Free of Charge">Free of Charge</MenuItem>
                    <MenuItem disabled value="Paid">Paid</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <br />
              <Grid item xs={12}>
                <button className='btnCustomer' style={{ width: '100%' }}>Update</button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
      {/** Modal for Updating Invoice Status End */}
      {/** Modal for loading Update Status Start */}
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
          {loading ? (<Loader />
          ) : (
            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
              <p><CheckCircleIcon style={{ color: 'green', height: '40px', width: '40px' }} /></p>
              <h2> Data Saved successfully</h2>
              <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
                <button onClick={handleCloseLoading} className='btnCustomer'>
                  Close
                </button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
      {/** Modal for loading Update Status End */}
      {/** Modal for loading Delete Invoice Start */}
      <Modal
        open={openDeleteMultiple}
        onClose={handleCloseMultiple}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <div style={{ justifyContent: 'center', textAlign: 'center' }}>
            <h2>Do you want to Delete ?</h2>
            <p><span className="txt2" style={{ color: 'red' }}>Note:</span> All selected rows will be deleted</p>
            <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
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
        <Box sx={{ ...style, width: 500, maxHeight: 700, overflow: 'hidden', overflowY: 'scroll' }}>
          <ViewTooltip title="Print" placement='left'>
            <IconButton onClick={handlePrint} style={{ position: 'relative', float: 'right' }}>
              <Print style={{ color: '#202a5a' }} />
            </IconButton>
          </ViewTooltip>
          <ViewTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseView} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </ViewTooltip>
          <br />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {
              posInvoice && (
                <table style={{ width: '100%', marginTop: '-10px', fontSize: '12px', color: 'black', marginTop: '0' }} ref={componentRef}>
                  <thead style={{ textAlign: 'center' }}>
                    <tr>
                      <th colSpan={6} style={{ fontWeight: 'bold', textAlign: 'center' }}>GLOBAL GATE SARL</th>
                    </tr>
                    <tr>
                      <th colSpan={6} style={{ fontWeight: 'normal', textAlign: 'center' }}>
                        RCM CD/KWZ/RCCM/22-B-00317 <br />
                        ID NAT 14-H5300N11179P <br />
                        AVENUE SALONGO Q/INDUSTRIEL C/MANIKA <br />
                        KOLWEZI LUALABA <br />
                        DR CONGO <br />
                        <span style={{ fontWeight: 'bold' }}>Invoice</span>
                      </th>
                    </tr>
                    <tr>
                      <th colSpan={1}>Client:</th>
                      <th colSpan={3}>{posInvoice?.customerName?.customerName}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Invoice:</td>
                      <td>{posInvoice?.factureNumber}</td>
                      <td>Time:</td>
                      <td>{dayjs(posInvoice?.time).format('HH:mm')} H</td>
                    </tr>
                    <tr>
                      <td>Date:</td>
                      <td>{dayjs(posInvoice?.invoiceDate).format('DD-MM-YYYY')}</td>
                      <td>User:</td>
                      <td>{posInvoice?.Create}</td>
                    </tr>
                    <tr>
                      <th style={{ borderTop: '1px solid #DDD', borderBottom: '1px solid #DDD' }}>#</th>
                      <th style={{ borderTop: '1px solid #DDD', borderBottom: '1px solid #DDD' }}>Item</th>
                      <th style={{ borderTop: '1px solid #DDD', borderBottom: '1px solid #DDD' }}>Qty</th>
                      <th style={{ borderTop: '1px solid #DDD', borderBottom: '1px solid #DDD' }}>Rate</th>
                      <th style={{ borderTop: '1px solid #DDD', borderBottom: '1px solid #DDD' }}>Total</th>
                    </tr>
                    {posInvoice?.items?.map((row, i) => (
                      <tr key={row.idRow}>
                        <td style={{ borderTop: '1px solid #DDD', borderBottom: '1px solid #DDD' }}>{i + 1}</td>
                        <td style={{ borderTop: '1px solid #DDD', borderBottom: '1px solid #DDD' }}>{row.itemName.itemName.toUpperCase()}</td>
                        <td style={{ borderTop: '1px solid #DDD', borderBottom: '1px solid #DDD' }}>{row.itemQty} {row.unit}</td>
                        <td style={{ borderTop: '1px solid #DDD', borderBottom: '1px solid #DDD' }}>FC{parseFloat(row.itemRate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                        <td style={{ borderTop: '1px solid #DDD', borderBottom: '1px solid #DDD' }}>FC{row.itemAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                      </tr>
                    ))}
                    <tr>
                      <td style={{ borderTop: '1px solid #DDD', borderBottom: '1px solid #DDD' }}></td>
                      <td style={{ borderTop: '1px solid #DDD', borderBottom: '1px solid #DDD' }}>Total</td>
                      <td style={{ borderTop: '1px solid #DDD', borderBottom: '1px solid #DDD', textAlign: 'right' }} colSpan={3}>FC{posInvoice?.totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} (${(posInvoice?.subTotal / posInvoice?.rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')})</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <th colSpan={2} style={{ borderBottom: '1px solid #DDD', textAlign: 'center' }}>Tax Details</th>
                    </tr>
                    <tr>
                      <td colSpan={2} style={{ textAlign: 'right' }}>Gross Amount</td>
                      <th colSpan={3} style={{ textAlign: 'right' }}>FC{posInvoice?.subTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} (${(posInvoice?.subTotal / posInvoice?.rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')})</th>
                    </tr>
                    <tr>
                      <td colSpan={2} style={{ textAlign: 'right' }}>TVA @ 16%</td>
                      <th colSpan={3} style={{ borderBottom: '1px solid #DDD', textAlign: 'right' }}>FC{posInvoice?.tax?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} (${(posInvoice.tax !== undefined ? (posInvoice.tax / posInvoice?.rate) : 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')})</th>
                    </tr>
                    <tr>
                      <td colSpan={2} style={{ textAlign: 'right' }}>Total General</td>
                      <th colSpan={3} style={{ borderBottom: '1px solid #DDD', textAlign: 'right' }}>FC{posInvoice?.totalInvoice?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} (${(posInvoice.totalInvoice !== undefined ? (posInvoice.totalInvoice / posInvoice?.rate) : 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')})</th>
                    </tr>
                    {(posInvoice.totalFC > 0 || posInvoice.totalUSD > 0) && (
                      <tr>
                        <td colSpan={2} style={{ textAlign: 'right' }}>Amount Received</td>
                        <th colSpan={3} style={{ borderBottom: '1px solid #DDD', textAlign: 'right' }}>{(posInvoice.totalFC > 0 ? ('FC ' + posInvoice.totalFC?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : '')} {posInvoice.totalFC > 0 && posInvoice.totalUSD > 0 ? ' & ' : ''} {posInvoice.totalUSD > 0 ? '$ ' + posInvoice.totalUSD?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''}</th>
                      </tr>
                    )}
                    {posInvoice.TotalAmountPaid !== 0 && (
                      <tr>
                        <td colSpan={2} style={{ textAlign: 'right' }}>Amount Paid</td>
                        <th colSpan={3} style={{ borderBottom: '1px solid #DDD', textAlign: 'right' }}>FC{posInvoice?.TotalAmountPaid?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} (${(posInvoice.TotalAmountPaid !== undefined ? (posInvoice.TotalAmountPaid / posInvoice?.rate) : 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')})</th>
                      </tr>
                    )}
                    {(posInvoice.creditUsd > 0 || posInvoice.creditFC > 0) && (
                      <tr>
                        <td colSpan={2} style={{ textAlign: 'right' }}>Amount Return</td>
                        <th colSpan={3} style={{ borderBottom: '1px solid #DDD', textAlign: 'right' }}>{(posInvoice.creditFC > 0 ? ('FC ' + posInvoice.creditFC?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : '')} {posInvoice.creditUsd > 0 && posInvoice.creditFC > 0 ? ' & ' : ''} {posInvoice.creditUsd > 0 ? '$ ' + posInvoice.creditUsd?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''}</th>
                      </tr>
                    )}
                    <tr>
                      <td colSpan={5} style={{ borderTop: '1px solid #DDD', borderBottom: '1px solid #DDD' }}>{posInvoice?.note}</td>
                    </tr>
                  </tbody>
                </table>
              )
            }
          </div>
        </Box>
      </Modal>
      {/** Modal for loading Delete Invoice End */}
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
    </div>
  )
}

export default SellShopInvoiceView
