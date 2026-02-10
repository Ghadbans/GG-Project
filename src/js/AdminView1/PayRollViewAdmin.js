import React, { useEffect, useState } from 'react'
import './view.css'
import './PageView/Chartview.css';
import SidebarDashE2 from '../component/SidebarDashE2'
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
function PayRollViewAdmin() {
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

  const PRollInfoC = grantAccess.filter((row) => row.moduleName === "Pay-Roll" && row.access.createM === true);
  const PRollInfoV = grantAccess.filter((row) => row.moduleName === "Pay-Roll" && row.access.viewM === true);
  const PRollInfoU = grantAccess.filter((row) => row.moduleName === "Pay-Roll" && row.access.editM === true);
  const PRollInfoD = grantAccess.filter((row) => row.moduleName === "Pay-Roll" && row.access.deleteM === true);

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }
  const [open1, setOpen1] = React.useState(true);
  const toggleDrawer = () => {
    setOpen1(!open1);
  };
  const [loadingData, setLoadingData] = useState(true);
  const [customer, setCustomer] = useState([]);
  const [searchCustomer, setSearchCustomer] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [reason, setReason] = useState("");
  useState(() => {
    const storedValue = localStorage.getItem('QuickFilterPayRoll')
    if (storedValue) {
      setSearchCustomer(storedValue)
    }

  })
  const [page, setPage] = useState(0);
  const limit = 100;
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [totalPage, SetTotalPage] = useState(0);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchCustomer);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchCustomer]);

  const fetchData = async (page, searchTerm) => {
    if (navigator.onLine) {
      try {
        const res = await axios.get(`https://gg-project-production.up.railway.app/endpoint/payRoll-Information?page=${page + 1}&limit=${limit}&search=${encodeURIComponent(searchTerm.trim())}`)
        const formatDate = res.data.itemI.map((item) => ({
          ...item,
          id: item._id,
          payDay: dayjs(item.payDate).format('DD/MM/YYYY'),
          month: dayjs(item.month).format('MMMM'),
        }))
        setCustomer(formatDate);
        SetTotalPage(res.data.totalPages);
        setLoadingData(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadingData(false)
      }
    } else {
      const offLineCustomer1 = await db.payRollSchema.toArray();
      const lowerSearch = searchTerm.toLowerCase().trim();
      const filtered = lowerSearch === '' ? offLineCustomer1 : offLineCustomer1.filter((item) =>
        (item.employeeName && item.employeeName.name.toLowerCase().includes(lowerSearch)) ||
        (item.payNumber && item.payNumber.toString().includes(lowerSearch))
      );
      const formatDate = filtered.map((item) => ({
        ...item,
        id: item._id,
        payDay: dayjs(item.payDate).format('DD/MM/YYYY'),
        month: dayjs(item.month).format('MMMM'),
      }))
      setCustomer(formatDate.reverse())
      setLoadingData(false)
    }
  }

  useEffect(() => {
    fetchData(page, debouncedSearchTerm);
  }, [page, debouncedSearchTerm]);
  const [modalOpenLoading, setModalOpenLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenOffline = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  const handleCreateNotificationOffline = async (ReferenceInfo, ReferenceInfoName, ReferenceInfoNumber) => {
    const data = {
      idInfo: ReferenceInfo,
      person: user.data.userName + ' Created ',
      reason: relatedMonth + ' PaySlip For ' + employeeName.name + ' / PR-' + ReferenceInfoNumber,
      dateNotification: new Date()
    }
    try {
      await axios.post('https://gg-project-production.up.railway.app/endpoint/create-notification', data)
    } catch (error) {
      console.log(error)
    }
  }
  const syncOff = async () => {
    if (navigator.onLine) {
      const syncedPayRoll = await db.payRollSchema.toArray();
      const PayRollToSynced = syncedPayRoll.filter((row) => row.synced === false).map(({ payNumber, payDate, month, daysW, status, daysOpen, Lops, basicSalary, earningSalary, advancedSalary, basicTransport, transportEarning, transportDeduction, foodBasic,
        foodEarning, itemLost, foodDeduction, bounceAllowances, bounceAllowancesEarning, other, otherEarning, loan,
        bonus, totalActualSalary, totalActualEarning, totalActualDeduction, totalNet, totalPaid, rate, totalPaidDollars, words,
        employeeName, amountPayUSD, amountPayFC, CreditFC, CreditUSD }) => ({
          payNumber, payDate, month, daysW, status, daysOpen, Lops, basicSalary, earningSalary, advancedSalary, basicTransport, transportEarning, transportDeduction, foodBasic,
          foodEarning, itemLost, foodDeduction, bounceAllowances, bounceAllowancesEarning, other, otherEarning, loan,
          bonus, totalActualSalary, totalActualEarning, totalActualDeduction, totalNet, totalPaid, rate, totalPaidDollars, words,
          employeeName, amountPayUSD, amountPayFC, CreditFC, CreditUSD
        }))

      for (const PayRollInfo of PayRollToSynced) {
        try {
          const res = await axios.post('https://gg-project-production.up.railway.app/endpoint/create-payRoll', PayRollInfo)
          if (res) {
            const ReferenceInfo = res.data.data._id
            const ReferenceInfoNumber = res.data.data.payNumber
            const ReferenceInfoName = res.data.data.employeeName.name
            handleCreateNotificationOffline(ReferenceInfo, ReferenceInfoName, ReferenceInfoNumber)
            handleOpenOffline();
          }
        } catch (error) {
          console.log(error)
        }
      }
      const PayRollToSyncedUpdate = syncedPayRoll.filter((row) => row.updateS === false)
      for (const PayRollInfoUpdate of PayRollToSyncedUpdate) {
        try {
          await axios.put(`https://gg-project-production.up.railway.app/endpoint/update-payRoll/${PayRollInfoUpdate._id}`, PayRollInfoUpdate)
          await db.payRollSchema.update(PayRollInfoUpdate.payNumber, { synced: true, updateS: true })
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

  const [openReasonDelete, setOpenReasonDelete] = useState(false);

  const handleOpenReasonDelete = (e) => {
    e.preventDefault()
    setOpenReasonDelete(true);
  };
  const handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };
  const [open, setOpen] = useState(false);
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
  const [DeleteId, setDeleteId] = useState(null);


  const handleOpen = (id) => {
    setOpen(true);
    setDeleteId(id)
  };
  const handleOpenModal = () => {
    setModalOpenLoading(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseModal = () => {
    window.location.reload();
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`https://gg-project-production.up.railway.app/endpoint/delete-payRoll/${DeleteId}`);
      if (res) {
        handleOpenModal();
      }
    } catch (error) {
      console.log('try again');
    }
  };
  const [PayRollDeleted, setPayRollDeleted] = useState([])
  useEffect(() => {
    const fetchFunction = async () => {
      const deletePromises = selectedRows.map(async (idToDelete) => {
        return axios.get(`https://gg-project-production.up.railway.app/endpoint/get-payRoll/${idToDelete}`)
      })
      try {
        const res = await Promise.all(deletePromises);
        setPayRollDeleted(res.map((row) => 'PAY-' + row.data.data.payNumber + ' For ' + row.data.data.employeeName.name))
      } catch (error) {
        console.log(error)
      }
    }
    fetchFunction()
  }, [selectedRows])
  const related = PayRollDeleted.map(row => row)
  const info = related.toString()
  const handleCreateNotification = async () => {
    const data = {
      idInfo: '',
      person: user.data.userName + ' Deleted ' + info,
      reason,
      dateNotification: new Date()
    }
    try {
      await axios.post('https://gg-project-production.up.railway.app/endpoint/create-notification', data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleDeleteMany = async (e) => {
    e.preventDefault()
    const deletePromises = selectedRows.map(async (idToDelete) => {
      return axios.delete(`https://gg-project-production.up.railway.app/endpoint/delete-payRoll/${idToDelete}`)
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

  const [open2, setOpen2] = useState(false);
  const [updateId, setUpdateId] = useState(null)
  const [status, setStatus] = useState("");

  const handleOpenUpdate = (id) => {
    setOpen2(true);
    setUpdateId(id);
  };
  const handleCloseUpdate = () => {
    setOpen2(false);
    setUpdateId(null);
  };
  const [loadingOpenModal, setLoadingOpenModal] = useState(false);
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
  useEffect(() => {
    const fetchId = async () => {
      if (updateId !== null) {
        try {
          const res = await axios.get(`https://gg-project-production.up.railway.app/endpoint/get-payRoll/${updateId}`)
          setStatus(res.data.data.status);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      fetchId()
    }
  }, [updateId]);
  const handleSubmitUpdateStatus = async (e) => {
    e.preventDefault();
    const data = {
      status
    };
    try {
      const res = await axios.put(`https://gg-project-production.up.railway.app/endpoint/update-payRoll/${updateId}`, data)
      if (res) {
        handleOpenLoading();
      }
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  }
  const [filterModel, setFilterModel] = React.useState({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    quickFilterValues: [],
  });
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({});

  const handelHiddenColumn = (newHidden) => {
    setColumnVisibilityModel(newHidden)
    localStorage.setItem('HiddenColumnsPayRoll', JSON.stringify(newHidden))
  }
  const handleFilter = (newModel) => {
    setFilterModel(newModel)

    localStorage.setItem('QuickFilterPayRollTst', JSON.stringify(newModel))
  }
  useEffect(() => {
    const storedQuick = JSON.parse(localStorage.getItem('QuickFilterPayRollTst'))
    if (storedQuick) {
      setFilterModel(storedQuick)
    }
    const storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsPayRoll'))
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns)
    }

  }, [searchCustomer])
  const columns = [
    { field: 'payNumber', headerName: '#', width: open1 ? 80 : 100 },
    { field: 'customer', headerName: 'Employee Name', width: open1 ? 200 : 320, valueGetter: (params) => params.row.employeeName.name.toUpperCase() },
    {
      field: 'status', headerName: 'Status', width: 100, renderCell: (params) =>
        <Typography
          color={
            params.row.status === "UnPaid"
              ? "blue" :
              params.row.status === "Paid"
                ? "#4caf50" : "black"
          }
        >
          {params.row.status !== undefined ? params.row.status : 'Undefined'}
        </Typography>
    },
    { field: 'payDay', headerName: 'Pay Date', width: 100 },
    { field: 'month', headerName: 'Month', width: 100 },
    { field: 'daysW', headerName: 'Days Work', width: open1 ? 100 : 100 },
    { field: 'totalPaidDollars', headerName: 'Net Pay ($)', width: open1 ? 150 : 150, renderCell: (params) => `$${params.row.totalPaidDollars?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    { field: 'totalNet', headerName: 'Net Pay (FC)', width: open1 ? 160 : 180, renderCell: (params) => `FC${params.row.totalNet?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    {
      field: 'view', headerName: 'View', width: 50, renderCell: (params) => (
        <ViewTooltip title="View">
          <span>
            <IconButton disabled={PRollInfoV.length === 0 && user.data.role !== 'CEO'}>
              <NavLink to={`/PayRollViewInformation/${params.row._id}`} className='LinkName'>
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
            <IconButton disabled={PRollInfoU.length === 0 && user.data.role !== 'CEO'}>
              <NavLink to={`/PayRollUpdateFormView/${params.row._id}`} className='LinkName'>
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
          <span>                                <IconButton onClick={handleOpenAll} disabled={PRollInfoD.length === 0 && user.data.role !== 'CEO'}>
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
              Pay Roll
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
            <SidebarDashE2 />
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
              loadingData ? <div className='invoice'>
                <div style={{ position: 'relative', top: '120px' }}>
                  <Loader />
                </div>
              </div> : (
                <div>
                  <div>

                    <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                      <ViewTooltip>
                        <span>
                          <IconButton disabled={PRollInfoC.length === 0 && user.data.role !== 'CEO'}>
                            <NavLink to={'/PayRollFormView'} className='LinkName'>
                              <span className='btnCustomerAdding'>
                                <Add />
                              </span>
                            </NavLink>
                          </IconButton>
                        </span>
                      </ViewTooltip>
                    </section>
                    {customer.length > 0 ? (
                      <Box sx={{ height: 600, width: '100%' }}>
                        {customer.length > 0 ? (
                          <section style={{ position: 'relative', float: 'left', margin: '10px' }}>
                            {
                              selectedRows.length > 1 && selectedRows.length < customer.length && (
                                <button disabled={user.data.role !== 'CEO'} onClick={handleOpenAll} className='btnCustomer2'>Delete multiple</button>
                              )
                            }

                            {
                              selectedRows.length === customer.length ? (
                                <button onClick={handleOpenAll} disabled={user.data.role !== 'CEO'} className='btnCustomer2'>Delete all</button>
                              ) : ''
                            }
                          </section>
                        )
                          : ''}
                        <DataGrid
                          rows={customer}
                          columns={columns}
                          checkboxSelection
                          disableDensitySelector
                          onRowSelectionModelChange={(newSelection) => setSelectedRows(newSelection)}
                          slots={{ toolbar: GridToolbar }}
                          slotProps={{
                            toolbar: {
                              showQuickFilter: true,
                              printOptions: {
                                disableToolbarButton: true
                              }
                            },
                          }}
                          filterModel={filterModel}
                          onFilterModelChange={(newModel) => handleFilter(newModel)}
                          columnVisibilityModel={columnVisibilityModel}
                          onColumnVisibilityModelChange={handelHiddenColumn}
                          sx={{ width: '100%', backgroundColor: 'white', padding: '10px' }}
                        />
                      </Box>
                    ) : <div>
                      <img src={Image} style={{ position: 'relative', marginLeft: '19%', padding: '25px', height: '40%', top: '40px', width: '55%', boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)' }} />
                    </div>}
                  </div>
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
              selectedRows.length > 1 && selectedRows.length < customer.length && (
                <p><span className="txt2" style={{ color: 'red' }}>Note:</span> All selected rows will be deleted</p>
              )
            }
            {
              selectedRows.length === customer.length && (
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
                  <h2> Data successfully deleted</h2>
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
      {/** Modal for Updating PayRoll Status End */}
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

export default PayRollViewAdmin
