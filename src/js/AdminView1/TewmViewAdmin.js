import React, { useEffect, useState } from 'react';
import './view.css';
import SidebarDashE2 from '../component/SidebarDashE2';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './PageView/Chartview.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink, useNavigate } from 'react-router-dom';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Table, IconButton, styled, TableBody, TableCell, TableHead, TableRow, Checkbox, TableContainer, Paper, Typography, Modal, Box, Grid, FormControl, InputLabel, Select, MenuItem, Backdrop, Autocomplete, TextField, Tab } from '@mui/material';
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
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import EmployeeTodayAttendance from './PageView/EmployeeView/EmployeeTodayAttendance';
import MessageAdminView from './MessageAdminView';
import NotificationVIewInfo from './NotificationVIewInfo';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import EmployeeAttendanceSheet from './PageView/EmployeeView/EmployeeAttendanceSheet';
import db from '../dexieDb';
import EmployeePlaningView from './PageView/EmployeeView/EmployeePlaningView';

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
function TewmViewAdmin() {
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
        setGrantAccess(offLineCustomer1);
      }
    }
    fetchNumber()
  }, [user])
  const EmployeeInfoC = grantAccess.filter((row) => row.moduleName === "Employee" && row.access.createM === true);
  const EmployeeInfoV = grantAccess.filter((row) => row.moduleName === "Employee" && row.access.viewM === true);
  const EmployeeInfoU = grantAccess.filter((row) => row.moduleName === "Employee" && row.access.editM === true);
  const EmployeeInfoD = grantAccess.filter((row) => row.moduleName === "Employee" && row.access.deleteM === true);

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }

  const [show, setShow] = useState(1);
  const handleShow = (e) => {
    setShow(e);
  }
  const [page, setPage] = useState(0);
  const limit = 100;
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [totalPage, SetTotalPage] = useState(0);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchEmployee);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchEmployee]);

  const fetchData = async (page, searchTerm) => {
    if (navigator.onLine) {
      try {
        const res = await axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/employee-Information?page=${page + 1}&limit=${limit}&search=${encodeURIComponent(searchTerm.trim())}`)
        const formatDate = res.data.itemI.map((item) => ({
          ...item,
          id: item._id,
          dataField: dayjs(item.joinDate).format('DD/MM/YYYY'),
        }))
        setEmployee(formatDate);
        SetTotalPage(res.data.totalPages);
        setLoadingData(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadingData(false)
      }
    } else {
      const offLineCustomer1 = await db.employeeSchema.toArray();
      const lowerSearch = searchTerm.toLowerCase().trim();
      const filtered = lowerSearch === '' ? offLineCustomer1 : offLineCustomer1.filter((item) =>
        (item.employeeName && item.employeeName.toLowerCase().includes(lowerSearch)) ||
        (item.employeeLastName && item.employeeLastName.toLowerCase().includes(lowerSearch))
      );
      const formatDate = filtered.map((item) => ({
        ...item,
        id: item._id,
        dataField: dayjs(item.joinDate).format('DD/MM/YYYY'),
      }))
      setEmployee(formatDate.reverse());
      setLoadingData(false)
    }
  }

  useEffect(() => {
    fetchData(page, debouncedSearchTerm);
  }, [page, debouncedSearchTerm]);

  const [loading, setLoading] = useState(false);
  const [loadingOpenModal, setLoadingOpenModal] = useState(false);
  const [ErrorOpenModal, setErrorOpenModal] = useState(false);

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
  const handleCreateNotificationOffline = async (ReferenceInfo, ReferenceInfoName) => {
    const data = {
      idInfo: ReferenceInfo,
      person: user.data.userName + ' Created ',
      reason: ReferenceInfoName,
      dateNotification: new Date()
    }
    try {
      await axios.post('https://globalgate-backend-production.up.railway.app/endpoint/create-notification', data)
    } catch (error) {
      console.log(error)
    }
  }
  const syncOff = async () => {
    if (navigator.onLine) {
      const syncedEmployee = await db.employeeSchema.toArray();
      const EmployeeToSynced = syncedEmployee.filter((row) => row.synced === false)
      for (const EmployeeInfo of EmployeeToSynced) {
        try {
          const res = await axios.post('https://globalgate-backend-production.up.railway.app/endpoint/create-employee', EmployeeInfo)
          if (res) {
            const ReferenceInfo = res.data.data._id
            const ReferenceInfoName = res.data.data.employeeName
            handleCreateNotificationOffline(ReferenceInfo, ReferenceInfoName)
            handleOpenOffline();
          }
        } catch (error) {
          console.log(error)
        }
      }
      const EmployeeToSyncedUpdate = syncedEmployee.filter((row) => row.updateS === false)
      for (const EmployeeInfoUpdate of EmployeeToSyncedUpdate) {
        try {
          await axios.put(`https://globalgate-backend-production.up.railway.app/endpoint/update-employee/${EmployeeInfoUpdate._id}`, EmployeeInfoUpdate)
          await db.employeeSchema.update(EmployeeInfoUpdate.employeeId, { synced: true, updateS: true })
          handleOpenOffline();
        } catch (error) {
          console.log(error)
        }
      }
    }
    fetchData()
  }
  useEffect(() => {
    // fetchData is now handled by the debouncedSearchTerm useEffect
    window.addEventListener('online', syncOff)
    if (navigator.onLine) {
      syncOff()
    }
    return () => {
      window.removeEventListener('online', syncOff)
    }
  }, [])
  const [open, setOpen] = useState(false);
  const [DeleteId, setDeleteId] = useState(null);
  const [modalOpenLoading, setModalOpenLoading] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [openDeleteMultiple, setOpenDeleteMultiple] = useState(false);
  const [openReasonDelete, setOpenReasonDelete] = useState(false);

  const handleOpenReasonDelete = (e) => {
    e.preventDefault()
    setOpenReasonDelete(true);
  };
  const handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };
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
      const res = await axios.delete(`https://globalgate-backend-production.up.railway.app/endpoint/delete-employee/${DeleteId}`);
      if (res) {
        handleOpenModal();
      }
    } catch (error) {
      alert(error);
    }
  };
  const [EmployeeDeleted, setEmployeeDeleted] = useState([])
  useEffect(() => {
    const fetchFunction = async () => {
      const deletePromises = selectedRows.map(async (idToDelete) => {
        return axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-employee/${idToDelete}`)
      })
      try {
        const res = await Promise.all(deletePromises);
        setEmployeeDeleted(res.map((row) => row.data.data.employeeName))
      } catch (error) {
        console.log(error)
      }
    }
    fetchFunction()
  }, [selectedRows])
  const related = EmployeeDeleted.map(row => row)
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
  const handleDeleteMany = async (e) => {
    e.preventDefault()
    const deletePromises = selectedRows.map(async (idToDelete) => {
      return axios.delete(`https://globalgate-backend-production.up.railway.app/endpoint/delete-employee/${idToDelete}`)
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
  {/** search start */ }
  const [searchEmployee, setSearchEmployee] = useState("");
  useState(() => {
    const storedValue = localStorage.getItem('QuickFilterEmployee')
    if (storedValue) {
      setSearchEmployee(storedValue)
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
    localStorage.setItem('HiddenColumnsEmployee', JSON.stringify(newHidden))
  }

  const handleFilter = (newModel) => {
    setFilterModel(newModel)

    localStorage.setItem('QuickFilterEmployeeTst', JSON.stringify(newModel))
  }
  useEffect(() => {
    const storedQuick = JSON.parse(localStorage.getItem('QuickFilterEmployeeTst'))
    if (storedQuick) {
      setFilterModel(storedQuick)
    }
    const storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsEmployee'))
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns)
    }

  }, [searchEmployee])
  {/** search end */ }
  const [sideBar, setSideBar] = React.useState(true);
  const toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  const [value3, setValue3] = React.useState('1');

  useEffect(() => {
    const result = localStorage.getItem('SelectEmployeeView')
    if (result) {
      setValue3(result)
    }
  })
  const handleChange3 = (event, newValue) => {
    const changeValue = newValue
    setValue3(changeValue);
    localStorage.setItem('SelectEmployeeView', changeValue)
  };
  const columns = [
    { field: 'dataField', headerName: 'Date', width: 100 },
    { field: 'employeeName', headerName: 'EmployeeName', width: 170 },
    { field: 'employeeAddress', headerName: 'Address', width: 220 },
    { field: 'employeeRole', headerName: 'Role', width: 120 },
    { field: 'department', headerName: 'Department', width: 190 },
    {
      field: 'view', headerName: 'View', width: 50, renderCell: (params) => (
        <ViewTooltip title="View">
          <span>
            <IconButton disabled={EmployeeInfoV.length === 0 && user.data.role !== 'CEO'}>
              <NavLink to={`/EmployeeViewAdminAll/${params.row._id}`} className='LinkName'>
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
            <IconButton disabled={EmployeeInfoU.length === 0 && user.data.role !== 'CEO'}>
              <NavLink to={`/EmployeeUpdateView/${params.row._id}`} className='LinkName'>
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
          <span>                                <IconButton onClick={handleOpenAll} disabled={EmployeeInfoD.length === 0 && user.data.role !== 'CEO'}>
            <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
          </IconButton>
          </span>
        </DeleteTooltip>
      )
    },
  ]
  const columns1 = [
    { field: 'dataField', headerName: 'Date', width: 100 },
    { field: 'employeeName', headerName: 'EmployeeName', width: 200 },
    {
      field: 'status', headerName: 'Address', width: 180, renderCell: (params) =>
        <Typography
          color={
            params.row.status === "Resign"
              ? "#801313" :
              params.row.status === "Suspended"
                ? "#fb8c00" :
                params.row.status === "Fired"
                  ? "red" :
                  params.row.status === "Employed"
                    ? "blue" : "black"
          }
        >
          {params.row.status !== undefined ? params.row.status : 'Undefined'}
        </Typography>
    },
    { field: 'employeeRole', headerName: 'Role', width: sideBar ? 100 : 200 },
    { field: 'salary', headerName: 'Salary', width: sideBar ? 200 : 240, renderCell: (params) => <span>FC{parseFloat(Number(params.row.salary) + Number(params.row.basicTransport) + Number(params.row.foodBasic) + Number(params.row.bounceAllowances) + Number(params.row.other)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span> },
    { field: 'department', headerName: 'Department', width: 150 },
    {
      field: 'view', headerName: 'View', width: 50, renderCell: (params) => (
        <ViewTooltip title="View">
          <span>
            <IconButton disabled={user.data.role !== 'CEO'}>
              <NavLink to={`/EmployeeViewAdminAll/${params.row._id}`} className='LinkName'>
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
            <IconButton disabled={user.data.role !== 'CEO'}>
              <NavLink to={`/EmployeeUpdateView/${params.row._id}`} className='LinkName'>
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
          <span>                                <IconButton disabled={user.data.role !== 'CEO'} onClick={handleOpenAll}>
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
              Employee
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
            <Box>
              {loadingData ? <div >
                <div style={{ position: 'relative', top: '120px' }}>
                  <Loader />
                </div>
              </div> : (
                <TabContext value={value3}
                >
                  <Box>
                    <TabList
                      onChange={handleChange3}
                      aria-label="lab API tabs example"
                      sx={{
                        '& .MuiTabs-indicator': {
                          backgroundColor: 'white',
                          height: '0px'
                        }
                      }}
                    >
                      <Tab
                        label="Employee"
                        value="1"
                        sx={{
                          '&.Mui-selected': {
                            color: 'white',
                            backgroundColor: 'gray',
                            borderRadius: '10px'
                          }, '&:hover': {
                            color: 'gray',
                            bgcolor: 'white',
                            border: '1px solid gray',
                            borderRadius: '10px'
                          }
                        }}
                      />
                      <Tab
                        label="Today's Attendance"
                        value="2"
                        sx={{
                          '&.Mui-selected': {
                            color: 'white',
                            backgroundColor: 'gray',
                            borderRadius: '10px'
                          }, '&:hover': {
                            color: 'gray',
                            bgcolor: 'white',
                            border: '1px solid gray',
                            borderRadius: '10px'
                          }
                        }}
                      />
                      <Tab
                        label="Attendance Sheet"
                        value="3"
                        sx={{
                          '&.Mui-selected': {
                            color: 'white',
                            backgroundColor: 'gray',
                            borderRadius: '10px'
                          }, '&:hover': {
                            color: 'gray',
                            bgcolor: 'white',
                            border: '1px solid gray',
                            borderRadius: '10px'
                          }
                        }}
                      />
                      <Tab
                        label="Today's Assignment"
                        value="4"
                        sx={{
                          '&.Mui-selected': {
                            color: 'white',
                            backgroundColor: 'gray',
                            borderRadius: '10px'
                          }, '&:hover': {
                            color: 'gray',
                            bgcolor: 'white',
                            border: '1px solid gray',
                            borderRadius: '10px'
                          }
                        }}
                      />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <Box sx={{ marginTop: '-60px', height: 580, width: '100%' }}>
                      <div style={{ position: 'relative', float: 'right', margin: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        {employee.length > 0 ? (
                          <section>
                            {
                              selectedRows.length > 1 && selectedRows.length < employee.length && (
                                <button disabled={user.data.role !== 'CEO'} onClick={handleOpenAll} className='btnCustomer2'>Delete multiple</button>
                              )
                            }

                            {
                              selectedRows.length === employee.length ? (
                                <button onClick={handleOpenAll} disabled={user.data.role !== 'CEO'} className='btnCustomer2'>Delete all</button>
                              ) : ''
                            }
                          </section>
                        )
                          : ''}
                        <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                          <ViewTooltip>
                            <span>
                              <IconButton disabled={EmployeeInfoC.length === 0 && user.data.role !== 'CEO'}>
                                <NavLink to={'/EmployeeFormView'} className='LinkName'>
                                  <span className='btnCustomerAdding'>
                                    <Add />
                                  </span>
                                </NavLink>
                              </IconButton>
                            </span>
                          </ViewTooltip>
                        </section>
                      </div>
                      {
                        user.data.role === 'CEO' ?
                          <DataGrid
                            rows={employee}
                            columns={columns1}
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
                                  value: searchEmployee,
                                  onChange: (e) => setSearchEmployee(e.target.value)
                                },
                                printOptions: {
                                  disableToolbarButton: true
                                },
                              },
                            }}
                            checkboxSelection
                            disableDensitySelector
                            rowSelectionModel={selectedRows}
                            filterModel={filterModel}
                            onFilterModelChange={(newModel) => handleFilter(newModel)}
                            columnVisibilityModel={columnVisibilityModel}
                            onColumnVisibilityModelChange={handelHiddenColumn}
                            sx={{ width: '100%', backgroundColor: 'white', padding: '10px' }}
                          />
                          : <DataGrid
                            rows={employee}
                            columns={columns}
                            rowCount={totalPage * limit}
                            paginationMode="server"
                            onPaginationModelChange={(model) => setPage(model.page)}
                            paginationModel={{ page, pageSize: limit }}
                            slots={{ toolbar: GridToolbar }}
                            slotProps={{
                              toolbar: {
                                showQuickFilter: true,
                                quickFilterProps: {
                                  value: searchEmployee,
                                  onChange: (e) => setSearchEmployee(e.target.value)
                                },
                                printOptions: {
                                  disableToolbarButton: true
                                },
                              },
                            }}
                            checkboxSelection
                            disableDensitySelector
                            rowSelectionModel={selectedRows}
                            filterModel={filterModel}
                            onFilterModelChange={(newModel) => handleFilter(newModel)}
                            columnVisibilityModel={columnVisibilityModel}
                            onColumnVisibilityModelChange={handelHiddenColumn}
                            sx={{ width: '100%', backgroundColor: 'white', padding: '10px' }}
                          />
                      }
                    </Box>
                  </TabPanel>
                  <TabPanel value="2">
                    <EmployeeTodayAttendance />
                  </TabPanel>
                  <TabPanel value="3">
                    <Box sx={{ marginLeft: '-35px', marginRight: '-35px' }}>
                      <div style={{ position: 'relative', float: 'right', margin: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <NavLink to="/EmployeeAttendanceForm" className='LinkName'>
                          <p className='btnCustomer'>Check-In</p>
                        </NavLink>
                        <NavLink to="/EmployeeAttendanceFormOut" className='LinkName'>
                          <p className='btnCustomer'>Check-Out</p>
                        </NavLink>
                      </div>
                      <EmployeeAttendanceSheet />
                    </Box>

                  </TabPanel>
                  <TabPanel value="4">
                    <Box sx={{ marginLeft: '-35px', marginRight: '-35px' }}>
                      <div style={{ position: 'relative', float: 'right', margin: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <ViewTooltip>
                          <span>
                            <IconButton>
                              <NavLink to={'/EmployeePlaningForm'} className='LinkName'>
                                <span className='btnCustomerAdding'>
                                  <Add />
                                </span>
                              </NavLink>
                            </IconButton>
                          </span>
                        </ViewTooltip>
                      </div>
                      <EmployeePlaningView user={user} />
                    </Box>

                  </TabPanel>
                </TabContext>)}
            </Box>
          </Container>
        </Box>
      </Box>
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
              selectedRows.length > 1 && selectedRows.length < employee.length && (
                <p><span className="txt2" style={{ color: 'red' }}>Note:</span> All selected rows will be deleted</p>
              )
            }
            {
              selectedRows.length === employee.length && (
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

export default TewmViewAdmin