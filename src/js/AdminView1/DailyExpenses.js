import React, { useEffect, useState } from 'react';
import './view.css';
import SidebarDash from '../component/SidebarDash';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './PageView/Chartview.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink, useNavigate } from 'react-router-dom';
import { Table, Modal, IconButton, styled, TableBody, TableCell, TableHead, TableRow, Checkbox, TableContainer, Paper, Typography, Box, Autocomplete, TextField, Backdrop, Grid, Pagination } from '@mui/material';
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
import { Add, Close, DragIndicatorRounded, MailOutline } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux"
import { logOut, selectCurrentUser, setUser } from '../features/auth/authSlice';
import Loader from '../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Logout from '@mui/icons-material/Logout';
import dayjs from 'dayjs';
import Image from '../img/no-data.png';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { v4 } from 'uuid';
import CancelIcon from '@mui/icons-material/Cancel';
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
function DailyExpenses() {
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
  const DailyEInfoC = grantAccess.filter((row) => row.moduleName === "Expenses" && row.access.createM === true);
  const DailyEInfoV = grantAccess.filter((row) => row.moduleName === "Expenses" && row.access.viewM === true);
  const DailyEInfoU = grantAccess.filter((row) => row.moduleName === "Expenses" && row.access.editM === true);
  const DailyEInfoD = grantAccess.filter((row) => row.moduleName === "Expenses" && row.access.deleteM === true);

  const [expenses, setExpenses] = useState([])
  const [loadingData, setLoadingData] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingOpenModal, setLoadingOpenModal] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [expensesCategory, setExpensesCategory] = useState("");
  const [cashDate, setCashDate] = useState(() => {
    const date = new Date()
    return date
  });
  const [relatedDate, setRelatedDate] = useState(null)
  const [cashNumber, setCashNumber] = useState(0);
  const [rate, setRate] = useState(0)
  const [totalCash, setTotalCash] = useState(0);
  const [amount, setAmount] = useState([]);
  const [reason, setReason] = useState("");
  const [newPurchase, setNewPurchase] = useState([]);
  const handleOpenOffline = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  const [page, setPage] = useState(0);
  const limit = 100;
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [totalPage, SetTotalPage] = useState(0);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const fetchItems = async (page, searchTerm) => {
    if (navigator.onLine) {
      try {
        const res = await axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/dailyExpense-Information?page=${page + 1}&limit=${limit}&search=${encodeURIComponent(searchTerm.trim())}`);
        const formatDate = res.data.itemI.map((item) => ({
          ...item,
          id: item._id,
          dataField: dayjs(item.expenseDate).format('DD/MM/YYYY'),
          category: item.expenseCategory ? item.expenseCategory.expensesCategory : '',
          name: item.accountNameInfo ? item.accountNameInfo.name : '',
          employee: item.employeeName ? item.employeeName.map((row) => row.employee) : []
        }));
        SetTotalPage(res.data.totalPages || Math.ceil(res.data.totalItem / limit));
        setExpenses(formatDate);
        setLoadingData(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadingData(false);
      }
    } else {
      const offLineItems = await db.dailyExpenseViewSchema.toArray();
      const lowerSearch = searchTerm.toLowerCase().trim();
      const filtered = lowerSearch === '' ? offLineItems : offLineItems.filter((item) =>
        (item.expenseName && item.expenseName.toLowerCase().includes(lowerSearch)) ||
        (item.description && item.description.toLowerCase().includes(lowerSearch))
      );
      const formatDate = filtered.map((item) => ({
        ...item,
        id: item._id,
        dataField: dayjs(item.expenseDate).format('DD/MM/YYYY'),
        category: item.expenseCategory ? item.expenseCategory.expensesCategory : '',
        name: item.accountNameInfo ? item.accountNameInfo.name : '',
        employee: item.employeeName ? item.employeeName.map((row) => row.employee) : []
      }));
      setExpenses(formatDate.reverse());
      setLoadingData(false);
    }
  };

  useEffect(() => {
    fetchItems(page, debouncedSearchTerm);
  }, [page, debouncedSearchTerm]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage - 1); // Update page state (convert to 0-based index)
  };

  useEffect(() => {
    const fetchCash = async () => {
      if (navigator.onLine) {
        try {
          const resCash = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/cash')
          resCash.data.data.filter((row) => dayjs(row.cashDate).format('DD/MM/YYYY') === dayjs(cashDate).format('DD/MM/YYYY'))
            .map((row) => setRelatedDate(row.cashDate))
        } catch (error) {
          console.log(error)
        }
      } else {
        const offLineCash = await db.cashSchema.toArray();
        offLineCash.filter((row) => dayjs(row.cashDate).format('DD/MM/YYYY') === dayjs(cashDate).format('DD/MM/YYYY'))
          .map((row) => setRelatedDate(row.cashDate))
      }
    }
    fetchCash()
  }, [cashDate])
  useEffect(() => {
    const fetchNumber = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/get-last-saved-cash')
          setCashNumber(parseInt(res.data.cashNumber) + 1)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        const offLineCustomer1 = await db.cashSchema.toArray();
        const latest = offLineCustomer1.reduce((max, row) => row.cashNumber > max.cashNumber ? row : max, offLineCustomer1[0])
        setCashNumber(parseInt(latest.cashNumber) + 1)
      }
    }
    fetchNumber()
  }, [cashDate])
  const Create = {
    person: user.data.userName,
    cashNumber: "C-00" + cashNumber,
    dateComment: dayjs(cashDate).format('DD/MM/YYYY')
  }
  {/** Cash start */ }
  const addItem = () => {
    setAmount([...amount, {
      idRow: v4(),
      amountFC: 0,
      amountUsd: 0,
      rate: 0,
      total: 0,
      note: ''
    }]);
  }
  const deleteItem = idRow => {
    setAmount(amount => amount.filter((Item) => Item.idRow !== idRow));
  };
  const handleChangeAmount = (e, i) => {
    const { name, value } = e.target;
    const list = [...amount];
    list[i][name] = value;
    list[i]['rate'] = rate
    list[i]['total'] = Math.round(((parseFloat(list[i]['amountFC']) / list[i]['rate']) + parseFloat(list[i]['amountUsd'])) * 100) / 100
    setAmount(list)
  }
  useEffect(() => {
    let row = document.querySelectorAll('#amountTotalInvoice')
    let sum = 0
    for (let i = 0; i < row.length; i++) {
      if (row[i].id === 'amountTotalInvoice') {
        sum += isNaN(row[i].innerHTML) ? 0 : parseFloat(row[i].innerHTML);
        const result = Math.round(sum * 100) / 100
        setTotalCash(result);
      }
    }
  })
  {/** Cash end */ }
  const handleOpenUpdate = () => {
    setOpen1(true);
  };
  const handleCloseUpdate = () => {
    setOpen1(false);
  };
  const handleOpenCash = () => {
    setOpen2(true);
  };
  const handleCloseCash = () => {
    setOpen2(false);
  };
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
    setSelectedRows([])
  };
  const [openReasonDelete, setOpenReasonDelete] = useState(false);

  const handleOpenReasonDelete = (e) => {
    e.preventDefault()
    setOpenReasonDelete(true);
  };
  const handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };

  const [open, setOpen] = useState(false);
  const [DeleteId, setDeleteId] = useState(null);
  const [modalOpenLoading, setModalOpenLoading] = useState(false);
  const [ErrorOpenModal, setErrorOpenModal] = useState(false);
  const handleOpen = (id) => {
    setOpen(true);
    setDeleteId(id)
  };
  const handleOpenModal = () => {
    setModalOpenLoading(true);
    setLoading(true);
    handleCloseReasonDelete()
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  const handleError = () => {
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  const handleCloseError = () => {
    setErrorOpenModal(false);
  }
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseModal = () => {
    window.location.reload();
  };
  const [saving, setSaving] = useState('')
  const handleSubmitCategory = async (e) => {
    e.preventDefault();
    setSaving('true')
    const data = {
      expensesCategory
    }
    try {
      const res = await axios.post('https://globalgate-backend-production.up.railway.app/endpoint/create-expensesCategory', data);
      if (res) {
        handleOpenModal();
      }
    } catch (error) {
      if (error) {
        setSaving('')
        handleError()
      }
    }
  }
  const handleCreateNotification1 = async (ReferenceInfo, ReferenceInfoNumber) => {
    const data = {
      idInfo: ReferenceInfo,
      person: user.data.userName + ' Created ',
      reason: 'Todays Cash' + ' / Cash-' + ReferenceInfoNumber,
      dateNotification: new Date()
    }
    try {
      await axios.post('https://globalgate-backend-production.up.railway.app/endpoint/create-notification', data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmitCash = async (e) => {
    e.preventDefault();
    setSaving('true')
    const data = {
      cashDate, cashNumber, rate, totalCash, amount, Create, synced: false
    }
    if (navigator.onLine) {
      try {
        const res = await axios.post('https://globalgate-backend-production.up.railway.app/endpoint/create-cash', data);
        if (res) {
          const ReferenceInfo = res.data.data._id
          const ReferenceInfoNumber = res.data.data.cashNumber
          handleCreateNotification1(ReferenceInfo, ReferenceInfoNumber)
          handleOpenModal();
        }
      } catch (error) {
        if (error) {
          setSaving('')
          handleError()
        }
      }
    } else {
      await db.cashSchema.add(data)
      handleOpenModal();
    }
  }
  const [PurchaseDeleted, setPurchaseDeleted] = useState([])
  useEffect(() => {
    const fetchFunction = async () => {
      const deletePromises = selectedRows.map(async (idToDelete) => {
        return axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-expense/${idToDelete}`)
      })
      try {
        const res = await Promise.all(deletePromises);
        setPurchaseDeleted(res.map((row) => 'D-' + row.data.data.expenseNumber))
      } catch (error) {
        console.log(error)
      }
    }
    fetchFunction()
  }, [selectedRows])
  const related = PurchaseDeleted.map(row => row)
  const info = related.toString()
  const handleCreateNotification = async () => {
    const data = {
      idInfo: '',
      person: user.data.userName + ' Deleted ' + info,
      reason,
      dateNotification: new Date()
    }
    try {
      await axios.post('https://globalgate-backend-production.up.railway.app/endpoint/create-notification', data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleDelete = async () => {
    try {
      const res = await axios.delete(`https://globalgate-backend-production.up.railway.app/endpoint/delete-expense/${DeleteId}`);
      if (res) {
        handleOpenModal();
      }
    } catch (error) {
      alert('try again');
    }
  };
  const handleDeleteMany = async (e) => {
    e.preventDefault()
    if (navigator.onLine) {
      const deletePromises = selectedRows.map(async (idToDelete) => {
        return axios.delete(`https://globalgate-backend-production.up.railway.app/endpoint/delete-expense/${idToDelete}`)
      })
      try {
        const res = await Promise.all(deletePromises);
        if (res) {
          handleCreateNotification()
          handleOpenModal();
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
  {/** search start */ }
  const [searchDailyExpenses, setSearchDailyExpenses] = useState("");
  useState(() => {
    const storedValue = localStorage.getItem('QuickFilterDailyExpenses')
    if (storedValue) {
      setSearchDailyExpenses(storedValue)
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
    localStorage.setItem('HiddenColumnsDailyExpenses', JSON.stringify(newHidden))
  }
  const handleFilter = (newModel) => {
    const searchTerm = newModel.quickFilterValues?.join(' ') || '';
    setSearchTerm(searchTerm);
    setFilterModel(newModel)
    localStorage.setItem('QuickFilterDailyExpensesTst', JSON.stringify(newModel))
  }
  useEffect(() => {
    const storedQuick = JSON.parse(localStorage.getItem('QuickFilterDailyExpensesTst'))
    if (storedQuick) {
      const searchTerm = storedQuick.quickFilterValues?.join(' ') || '';
      setSearchTerm(searchTerm);
      setFilterModel(storedQuick)
    }
    const storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsDailyExpenses'))
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns)
    }

  }, [searchDailyExpenses])
  {/** search end */ }
  const [sideBar, setSideBar] = React.useState(true);
  const toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  const [openView, setOpenView] = useState(false);
  const [idView, setIdView] = useState(null);
  const [expensesView, setExpensesView] = useState(null)
  const handleOpenView = (id) => {
    setOpenView(true);
    setIdView(id)
  }
  const handleCloseView = () => {
    setOpenView(false);
    setIdView(null);
    setExpensesView(null);
    setSelectedRows([]);
  };
  useEffect(() => {
    const fetchData2 = async () => {

      if (idView !== null) {
        if (navigator.onLine) {
          try {
            const res = await axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-expense/${idView}`)
            setExpensesView(res.data.data)
          } catch (error) {
            console.log(error)
          }
        } else {
          const resLocal = await db.dailyExpenseSchema.get({ _id: idView })
          setExpensesView(resLocal)
        }
      }
    }
    fetchData2()
  }, [idView])
  const columns = [
    { field: 'expenseNumber', headerName: 'E-Number', width: 90, renderCell: (params) => (<div> <span>D-0</span><span>{params.row.expenseNumber}</span> </div>) },
    { field: 'dataField', headerName: 'Date', width: 80 },
    { field: 'category', headerName: 'Category', width: 60 },
    { field: 'description', headerName: 'Description', width: sideBar ? 120 : 150 },
    { field: 'name', headerName: 'Project Name', width: sideBar ? 230 : 300 },
    { field: 'employee', headerName: 'Employee Name', width: sideBar ? 200 : 250 },
    { field: 'amount', headerName: 'TotalFC', width: 100, renderCell: (params) => `FC${params.row.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'total', headerName: 'Total$', width: 100, renderCell: (params) => `$${params.row.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    {
      field: 'view', headerName: 'View', width: 50, renderCell: (params) => (
        <ViewTooltip title="View">
          <span>
            <IconButton disabled={DailyEInfoV.length === 0 && user.data.role !== 'CEO'} onClick={() => handleOpenView(params.row._id)}>
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
            <IconButton>
              <NavLink to={`/DailyExpenseUpdate/${params.row._id}`} className='LinkName' disabled={DailyEInfoU.length === 0 && user.data.role !== 'CEO'}>
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
          <span>                  <IconButton onClick={handleOpenAll} disabled={DailyEInfoD.length === 0 && user.data.role !== 'CEO'} >
            <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
          </IconButton>
          </span>
        </DeleteTooltip>
      )
    },
  ]
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
              Daily Expenses
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
              loadingData ? <div>
                <div style={{ position: 'relative', top: '150px' }}>
                  <Loader />
                </div>
              </div> : (
                <div>
                  <section style={{ position: 'absolute', right: '10px', display: 'flex', alignItems: 'center', top: '60px' }}>
                    {expenses.length > 0 ? (
                      <section style={{ position: 'relative', float: 'left', margin: '10px' }}>
                        {
                          selectedRows.length > 1 && selectedRows.length < expenses.length && (
                            <button disabled={user.data.role !== 'CEO'} onClick={handleOpenAll} className='btnCustomer2'>Delete multiple</button>
                          )
                        }

                        {
                          selectedRows.length === expenses.length ? (
                            <button onClick={handleOpenAll} disabled={user.data.role !== 'CEO'} className='btnCustomer2'>Delete all</button>
                          ) : ''
                        }
                      </section>
                    )
                      : ''}
                    <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                      <ViewTooltip>
                        <span>
                          <IconButton disabled={DailyEInfoC.length === 0 && user.data.role !== 'CEO'}>
                            <NavLink to={'/DailyExpenseForm'} className='LinkName'>
                              <span className='btnCustomerAdding'>
                                <Add />
                              </span>
                            </NavLink>
                          </IconButton>
                        </span>
                      </ViewTooltip>
                      <button onClick={handleRefreshSearch} className='btnCustomer2'>Refresh Search</button>
                    </section>
                  </section>

                  <div style={{ display: 'flex', gap: '5px' }}>
                    <NavLink to={'/DailyExpenseAdminView'} className='LinkName'>
                      <button className='btnCustomer' disabled={user.data.role !== 'CEO'}>Monthly Expenses</button>
                    </NavLink>
                    <button className='btnCustomer' onClick={handleOpenUpdate} disabled={user.data.role !== 'CEO'}>
                      Add Category
                    </button>
                    <button className='btnCustomer' onClick={handleOpenCash} disabled={user.data.role !== 'CEO'}>
                      Daily Cash
                    </button>
                    <NavLink to={'/CategoryViewDailyExpenses'} className='LinkName'>
                      <button className='btnCustomer'> View by Category</button>
                    </NavLink>
                  </div>
                  <br />

                  <Box sx={{ height: 600, width: '100%' }} >
                    <DataGrid
                      rows={expenses}
                      columns={columns}
                      rowCount={totalPage * limit}
                      paginationMode="server"
                      onPaginationModelChange={(model) => setPage(model.page)}
                      paginationModel={{ page, pageSize: limit }}
                      slots={{ toolbar: GridToolbar }}
                      onRowSelectionModelChange={(newSelection) => setSelectedRows(newSelection)}
                      slotProps={{
                        toolbar: {
                          showQuickFilter: true,
                          quickFilterProps: {
                            value: searchTerm,
                            onChange: (e) => setSearchTerm(e.target.value)
                          },
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
                  </Box>

                </div>)
            }
          </Container></Box></Box>
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
              selectedRows.length > 1 && selectedRows.length < expenses.length && (
                <p><span className="txt2" style={{ color: 'red' }}>Note:</span> All selected rows will be deleted</p>
              )
            }
            {
              selectedRows.length === expenses.length && (
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
        open={modalOpenLoading}
        onClose={handleCloseModal}
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
                  <h2> Data successfully Saved</h2>
                  <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
                    <button onClick={handleCloseModal} className='btnCustomer'>
                      Close
                    </button>
                  </div>
                </div>
              )}
          </div>
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
            <IconButton onClick={handleCloseUpdate} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </ViewTooltip>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Expenses Category
          </Typography>
          <form onSubmit={handleSubmitCategory}>
            <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id='expensesCategory'
                  name='expensesCategory'
                  value={expensesCategory}
                  label='Expenses Category'
                  onChange={(e) => setExpensesCategory(e.target.value)}
                  sx={{ width: '100%', backgroundColor: 'white' }}
                />
              </Grid>
              <br />
              <Grid item xs={12}>
                {
                  saving !== 'true' ? <button type='submit' className='btnCustomer6' style={{ width: '100%' }}>Save</button> : <p className='btnCustomer6' style={{ width: '100%', textAlign: 'center' }}>Saving...</p>
                }
              </Grid>
            </Grid>
          </form>
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
          {
            expensesView !== null ?
              <div>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  EXPENSE D-0{expensesView.expenseNumber} CREATED BY {expensesView.Create !== undefined ? expensesView.Create.person : ''} on {expensesView.Create.dateComment}
                </Typography>
                <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>
                  {
                    expensesView.accountName === 'Employee' ?
                      (
                        <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>

                          <Grid item xs={12}>
                            <Box sx={{ height: 600, width: '100%' }}>
                              <Table style={{ marginBottom: '5px' }}>
                                <TableBody>
                                  <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }} colSpan={4}>{expensesView.reason === 'Project' ? expensesView.accountNameInfo.name : 'EMPLOYEE EXPENSE INFORMATION'}</TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell>Category</TableCell>
                                    <TableCell colSpan={3}>{expensesView.expenseCategory.expensesCategory}</TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell>Expense Date</TableCell>
                                    <TableCell colSpan={3}>{dayjs(expensesView.expenseDate).format('DD/MM/YYYY')}</TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell>Description</TableCell>
                                    <TableCell colSpan={3}>{expensesView.description}</TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                              <TableContainer sx={{ maxHeight: 400 }}>
                                <Table aria-label="collapsible table" stickyHeader>
                                  <TableHead>
                                    <TableRow>
                                      <TableCell>Employee</TableCell>
                                      <TableCell>Amount (FC)</TableCell>
                                      <TableCell>Rate</TableCell>
                                      <TableCell>Amount ($)</TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {
                                      expensesView.employeeName.map((row) => (
                                        <TableRow key={row.idInfo}>
                                          <TableCell>{row.employee}</TableCell>
                                          <TableCell>FC{row.amount}</TableCell>
                                          <TableCell>{row.rate}</TableCell>
                                          <TableCell>${row.total}</TableCell>
                                        </TableRow>
                                      ))
                                    }
                                    <TableRow>
                                      <TableCell>Total</TableCell>
                                      <TableCell>FC{expensesView.amount}</TableCell>
                                      <TableCell>-</TableCell>
                                      <TableCell>${expensesView.total}</TableCell>
                                    </TableRow>
                                  </TableBody>
                                </Table>
                              </TableContainer>
                            </Box>
                          </Grid>
                        </Grid>
                      )
                      :
                      (
                        <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>

                          <Grid item xs={12}>
                            <Box sx={{ height: 600, width: '100%' }}>
                              <Table style={{ marginBottom: '5px' }}>
                                <TableBody>
                                  <TableRow>
                                    <TableCell>Expense Date</TableCell>
                                    <TableCell colSpan={3}>{dayjs(expensesView.expenseDate).format('DD/MM/YYYY')}</TableCell>
                                  </TableRow>
                                </TableBody>
                                {
                                  expensesView.accountName === 'Office' || expensesView.accountName === 'Home' ?
                                    (<TableBody>
                                      <TableRow>
                                        <TableCell>Category</TableCell>
                                        <TableCell colSpan={3}>{expensesView.expenseCategory.expensesCategory}</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell>Account</TableCell>
                                        <TableCell colSpan={3}>{expensesView.accountName}</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell>Description</TableCell>
                                        <TableCell colSpan={3}>{expensesView.description}</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell>Amount</TableCell>
                                        <TableCell>FC{expensesView.amount}</TableCell>
                                        <TableCell>{expensesView.rate}</TableCell>
                                        <TableCell>${expensesView.total}</TableCell>
                                      </TableRow>
                                    </TableBody>)
                                    :
                                    (<TableBody>
                                      <TableRow>
                                        <TableCell>Category</TableCell>
                                        <TableCell colSpan={3}>{expensesView.expenseCategory.expensesCategory}</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell>Account</TableCell>
                                        <TableCell colSpan={3}>{expensesView.accountName}</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell>Description</TableCell>
                                        <TableCell colSpan={3}>{expensesView.description}</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell>Project Name</TableCell>
                                        <TableCell colSpan={3}>{expensesView.accountNameInfo.name}</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell>Amount</TableCell>
                                        <TableCell>FC{expensesView.amount}</TableCell>
                                        <TableCell>{expensesView.rate}</TableCell>
                                        <TableCell>${expensesView.total}</TableCell>
                                      </TableRow>
                                    </TableBody>)
                                }

                              </Table>
                            </Box>
                          </Grid>
                        </Grid>
                      )
                  }
                </Grid>
              </div>
              : null
          }

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
          {loading ? (<Loader />
          ) : (
            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
              <p><CancelIcon style={{ color: 'red', height: '40px', width: '40px' }} /></p>
              <h2 style={{ color: 'red' }}>Saving Failed</h2>
              <p><span className='txt1' style={{ color: 'red' }}>Note:</span><span className="txt2">Today's cash already being given</span></p>
              <button className='btnCustomer' onClick={handleCloseError}>
                Try Again
              </button>
            </div>
          )}
        </Box>
      </Modal>
      <Modal
        open={open2}
        onClose={handleCloseCash}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 1000 }}>
          <ViewTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseCash} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </ViewTooltip>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Today's Cash
          </Typography>
          <form onSubmit={handleSubmitCash}>
            <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                      name='cashDate'
                      label='Date'
                      value={dayjs(cashDate)}
                      onChange={(date) => setCashDate(date)}
                      format='DD/MM/YYYY'
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={11}>
                <TableContainer sx={{ height: 200, width: '100%', padding: '10px', overflowX: 'hidden' }}>
                  <table className='tableInfo10'>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Amount FC</th>
                        <th>Rate</th>
                        <th>Total $</th>
                        <th>Note</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        amount ?
                          amount.map((row, i) => (
                            <tr key={row.idRow}>
                              <td><DragIndicatorRounded /></td>
                              <td>
                                <TextField
                                  required
                                  name='amountFC' id='amountFC'
                                  onChange={(e) => handleChangeAmount(e, i)}
                                  size="small"
                                  sx={{ width: '130px', backgroundColor: 'white' }}
                                />
                              </td>
                              <td>
                                <TextField
                                  disabled
                                  name='rate' id='rate'
                                  value={row.rate}
                                  onChange={(e) => handleChangeAmount(e, i)}
                                  size="small"
                                  sx={{ width: '100px', backgroundColor: 'white' }}
                                />
                              </td>
                              <td>
                                <TextField
                                  required
                                  name='amountUsd' id='amountUsd'
                                  value={row.amountUsd}
                                  onChange={(e) => handleChangeAmount(e, i)}
                                  size="small"
                                  sx={{ width: '100px', backgroundColor: 'white' }}
                                />
                              </td>
                              <td hidden id='amountTotalInvoice'>{row.total}</td>
                              <td>
                                <TextField
                                  name='note' id='note'
                                  value={row.note}
                                  required
                                  onChange={(e) => handleChangeAmount(e, i)}
                                  size="small"
                                  placeholder='Please write ""POS"" for all cash in related to POS '
                                  sx={{ width: '300px', backgroundColor: 'white' }}
                                />
                              </td>
                              <td>
                                <LightTooltip title="Delete">
                                  <IconButton onClick={() => deleteItem(row.idRow)} >
                                    <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
                                  </IconButton>
                                </LightTooltip>
                              </td>
                            </tr>
                          ))
                          : ''
                      }
                      <tr>
                        <td colSpan={3}>
                          Total
                        </td>
                        <td><span>$</span>{totalCash}</td>
                      </tr>
                    </tbody>
                  </table>
                </TableContainer>

              </Grid>
              <Grid item xs={1}>
                <ViewTooltip title="Add" placement="bottom">
                  <IconButton onClick={addItem} >
                    <Add className='btn1' style={{ fontSize: '40px' }} />
                  </IconButton>
                </ViewTooltip>
              </Grid>
              <br />
              {
                dayjs(relatedDate).format('DD/MM/YYYY') === dayjs(cashDate).format('DD/MM/YYYY') ? '' :
                  <Grid item xs={12}>
                    {
                      saving !== 'true' ? <button type='submit' className='btnCustomer6' style={{ width: '100%' }}>Save</button> : <p className='btnCustomer6' style={{ width: '100%', textAlign: 'center' }}>Saving...</p>
                    }
                  </Grid>
              }
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
          {loading ? (<Loader />
          ) : (
            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
              <p><CheckCircleIcon style={{ color: 'green', height: '40px', width: '40px' }} /></p>
              <h2> Data Saved successfully</h2>
              <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
                <button onClick={handleCloseModal} className='btnCustomer'>
                  Close
                </button>
              </div>
            </div>
          )}
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
    </div>
  )
}

export default DailyExpenses