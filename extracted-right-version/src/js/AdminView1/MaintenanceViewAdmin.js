import React, { useEffect, useState } from 'react'
import './view.css'
import './PageView/Chartview.css';
import SidebarDash from '../component/SidebarDash'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink, useNavigate } from 'react-router-dom';
import { Table, IconButton, styled, TableBody, TableCell, TableHead, TableRow, Checkbox, TableContainer, Paper, Typography, Modal, Box, Grid, FormControl, InputLabel, Select, MenuItem, Backdrop, Autocomplete, TextField, Pagination } from '@mui/material';
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
function MaintenanceViewAdmin() {
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

  const MaintenanceInfoC = grantAccess.filter((row) => row.moduleName === "Maintenance" && row.access.createM === true);
  const MaintenanceInfoV = grantAccess.filter((row) => row.moduleName === "Maintenance" && row.access.viewM === true);
  const MaintenanceInfoU = grantAccess.filter((row) => row.moduleName === "Maintenance" && row.access.editM === true);
  const MaintenanceInfoD = grantAccess.filter((row) => row.moduleName === "Maintenance" && row.access.deleteM === true);

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }
  const [maintenance, setMaintenance] = useState([]);
  const [newPurchase, setNewPurchase] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [page, setPage] = useState(0); // Initialize page state to 0 (0-based index)
  const limit = 100;
  const [searchTerm, setSearchTerm] = useState(''); // Initialize search term state
  const [filterField, setFilterField] = useState(''); // Initialize filter field state
  const [filterValue, setFilterValue] = useState(''); // Initialize filter value state
  const [totalPage, SetTotalPage] = useState(0);

  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const fetchItems = async (page, searchTerm) => {
    if (navigator.onLine) {
      try {
        const res = await axios.get(`https://gg-project-production.up.railway.app/endpoint/maintenance-Information?page=${page + 1}&limit=${limit}&search=${encodeURIComponent(searchTerm.trim())}`);
        const formatDate = res.data.itemI.map((item) => ({
          ...item,
          id: item._id,
          serviceNumber: "M-00" + item.serviceNumber,
          dateField: dayjs(item.serviceDate).format('DD/MM/YYYY'),
          visit: dayjs(item.visitDate).format('DD/MM/YYYY'),
        }));
        SetTotalPage(res.data.totalPages || Math.ceil(res.data.totalItem / limit));
        setMaintenance(formatDate);
        setLoadingData(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadingData(false);
      }
    } else {
      const offLineItems = await db.maintenanceViewSchema.toArray();
      const lowerSearch = searchTerm.toLowerCase().trim();
      const filtered = lowerSearch === '' ? offLineItems : offLineItems.filter((item) =>
        (item.customerName && item.customerName.customerName.toLowerCase().includes(lowerSearch)) ||
        (item.serviceNumber && item.serviceNumber.toString().includes(lowerSearch))
      );
      const formatDate = filtered.map((item) => ({
        ...item,
        id: item._id,
        serviceNumber: "M-00" + item.serviceNumber,
        dateField: dayjs(item.serviceDate).format('DD/MM/YYYY'),
        visit: dayjs(item.visitDate).format('DD/MM/YYYY'),
      }));
      setMaintenance(formatDate.reverse());
      setLoadingData(false);
    }
  };

  useEffect(() => {
    fetchItems(page, debouncedSearchTerm);
  }, [page, debouncedSearchTerm]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage - 1); // Update page state (convert to 0-based index)
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
  const [action, setAction] = useState("");
  const [reason, setReason] = useState("");
  const [invoiceN, setInvoiceN] = useState(0)
  {/** Update Invoice Status start */ }
  useEffect(() => {
    if (updateId !== null) {
      axios.get(`https://gg-project-production.up.railway.app/endpoint/get-maintenance/${updateId}`)
        .then(res => {
          // get the response data here
          setStatus(res.data.data.status);
          setAction(res.data.data.action);
          setInvoiceN(res.data.data.serviceNumber);
        })
        .catch(error => {
          // Handle errors
          console.error('Error fetching data:', error);
        });
    }
  }, [updateId]);
  const handleCreateComment = async () => {
    const data = {
      idInfo: updateId,
      person: user.data.userName,
      reason: status + ' M-' + invoiceN,
      dateNotification: new Date()
    };
    try {
      await axios.post('https://gg-project-production.up.railway.app/endpoint/create-notification/', data)
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
      const res = await axios.put(`https://gg-project-production.up.railway.app/endpoint/update-maintenance/${updateId}`, data)
      if (res) {
        handleOpenLoading();
        handleCreateComment();
      }
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  }
  {/** Update Invoice Status End */ }
  const handleOpenUpdate = (id) => {
    setOpen1(true);
    setUpdateId(id);
  };
  const handleCloseUpdate = () => {
    setOpen1(false);
    setUpdateId(null);
  };
  const [selectedRows, setSelectedRows] = useState([]);
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
  const [openReasonDelete, setOpenReasonDelete] = useState(false);

  const handleOpenReasonDelete = (e) => {
    e.preventDefault()
    setOpenReasonDelete(true);
  };
  const handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`https://gg-project-production.up.railway.app/endpoint/delete-maintenance/${DeleteId}`);
      if (res) {
        handleDeleteOpenLoading();
      }
    } catch (error) {
      alert('try again');
    }
  };
  const [MaintenanceDeleted, setMaintenanceDeleted] = useState([])
  useEffect(() => {
    const fetchFunction = async () => {
      const deletePromises = selectedRows.map(async (idToDelete) => {
        return axios.get(`https://gg-project-production.up.railway.app/endpoint/get-maintenance/${idToDelete}`)
      })
      try {
        const res = await Promise.all(deletePromises);
        setMaintenanceDeleted(res.map((row) => 'M-' + row.data.data.serviceNumber))
      } catch (error) {
        console.log(error)
      }
    }
    fetchFunction()
  }, [selectedRows])
  const related = MaintenanceDeleted.map(row => row)
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
      return axios.delete(`https://gg-project-production.up.railway.app/endpoint/delete-maintenance/${idToDelete}`)
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
  {/** search start */ }
  const [searchMaintenance, setSearchMaintenance] = useState("");
  useState(() => {
    const storedValue = localStorage.getItem('QuickFilterMaintenance')
    if (storedValue) {
      setSearchMaintenance(storedValue)
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
    localStorage.setItem('HiddenColumnsMaintenance', JSON.stringify(newHidden))
  }
  const handleFilter = (newModel) => {
    const searchTerm = newModel.quickFilterValues?.join(' ') || '';
    setSearchTerm(searchTerm);
    setFilterModel(newModel)

    localStorage.setItem('QuickFilterMaintenanceTst', JSON.stringify(newModel))
  }
  useEffect(() => {
    const storedQuick = JSON.parse(localStorage.getItem('QuickFilterMaintenanceTst'))
    if (storedQuick) {
      const searchTerm = storedQuick.quickFilterValues?.join(' ') || '';
      setSearchTerm(searchTerm);
      setFilterModel(storedQuick)
    }
    const storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsMaintenance'))
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns)
    }

  }, [searchMaintenance])
  {/** search end */ }
  const [sideBar, setSideBar] = React.useState(true);
  const toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  const columns = [
    { field: 'serviceNumber', headerName: 'Service#', width: 80 },
    { field: 'customer', headerName: 'Customer Name', width: sideBar ? 180 : 220, valueGetter: (params) => params.row.customerName.customerName },
    { field: 'brand', headerName: 'Item Brand', width: sideBar ? 100 : 140, },
    {
      field: 'status', headerName: 'Status', width: 100, renderCell: (params) => (
        <div>
          {
            params.row.status === 'Close' && params.row.Converted === true ? "Converted" :
              <Typography
                color={
                  params.row.status === "Open"
                    ? "blue" :
                    params.row.status === "Pending"
                      ? "#801313" :
                      params.row.status === "Reschedule"
                        ? "Orange" :
                        params.row.status === "Cancel"
                          ? "red" :
                          params.row.status === "Close"
                            ? "green" : "black"
                }
              >
                {params.row.status}
              </Typography>

          }
        </div>
      )
    },
    { field: 'defectDescription', headerName: 'Defect', width: sideBar ? 130 : 150 },
    { field: 'itemDescriptionInfo', headerName: 'I-Description', width: sideBar ? 130 : 150 },
    { field: 'technicianAssign', headerName: 'Technician', width: 130 },
    { field: 'dateField', headerName: 'Service Date', width: 80 },
    { field: 'action', headerName: 'Action', width: 70, renderCell: (params) => { params.row.action !== undefined ? params.row.action : '' } },
    {
      field: 'view', headerName: 'View', width: 40, renderCell: (params) => (
        <ViewTooltip title="View">
          <span>
            <IconButton disabled={MaintenanceInfoV.length === 0 && user.data.role !== 'CEO'}>
              <NavLink to={`/MaintenanceViewInformation/${params.row._id}`} className='LinkName'>
                <VisibilityIcon style={{ color: '#202a5a' }} />
              </NavLink>
            </IconButton>
          </span>
        </ViewTooltip>

      )
    },
    {
      field: 'edit', headerName: 'Edit', width: 40, renderCell: (params) => (
        <EditTooltip title="Edit">
          <span>
            <IconButton onClick={() => handleOpenUpdate(params.row._id)} disabled={params.row.status === 'Converted' && MaintenanceInfoU.length === 0 && user.data.role !== 'CEO'}>
              <EditIcon style={{ color: 'gray' }} />
            </IconButton>
          </span>
        </EditTooltip>

      )
    },
    {
      field: 'Delete', headerName: 'Delete', width: 40, renderCell: (params) => (
        <DeleteTooltip title="Delete">
          <span>                                <IconButton onClick={handleOpenAll} disabled={MaintenanceInfoD.length === 0 && user.data.role !== 'CEO'}>
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
              Maintenance
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
              loadingData ? <div >
                <div style={{ position: 'relative', top: '120px' }}>
                  <Loader />
                </div>
              </div> : (
                <div >
                  {maintenance.length > 0 ? (
                    <section style={{ position: 'relative', float: 'left', margin: '10px' }}>
                      {
                        selectedRows.length > 1 && selectedRows.length < maintenance.length && (
                          <button disabled={user.data.role !== 'CEO'} onClick={handleOpenAll} className='btnCustomer2'>Delete multiple</button>
                        )
                      }

                      {
                        selectedRows.length === maintenance.length ? (
                          <button onClick={handleOpenAll} disabled={user.data.role !== 'CEO'} className='btnCustomer2'>Delete all</button>
                        ) : ''
                      }
                    </section>
                  )
                    : ''}
                  <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                    <ViewTooltip>
                      <span>
                        <IconButton disabled={MaintenanceInfoC.length === 0 && user.data.role !== 'CEO'}>
                          <NavLink to={'/MaintenanceFormView'} className='LinkName'>
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
                      rows={maintenance}
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
                      rowSelectionModel={selectedRows}
                      filterModel={filterModel}
                      onFilterModelChange={(newModel) => handleFilter(newModel)}
                      columnVisibilityModel={columnVisibilityModel}
                      onColumnVisibilityModelChange={handelHiddenColumn}
                      sx={{ width: '100%', backgroundColor: 'white', padding: '10px' }}
                    />
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
              selectedRows.length > 1 && selectedRows.length < maintenance.length && (
                <p><span className="txt2" style={{ color: 'red' }}>Note:</span> All selected rows will be deleted</p>
              )
            }
            {
              selectedRows.length === maintenance.length && (
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
                    defaultValue="Open"
                  >
                    <MenuItem value="Open">Open</MenuItem>
                    <MenuItem value="Reschedule">Reschedule</MenuItem>
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="Cancel">Cancel</MenuItem>
                    <MenuItem disabled={action === undefined || action === 'Carry-In'} value="Close">Close</MenuItem>
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
                {
                  info && (
                    <button type='submit' className='btnCustomer' style={{ width: '100%' }}>Save</button>
                  )
                }
              </Grid>
            </Grid>
          </form>

        </Box>
      </Modal>
    </div>
  )
}

export default MaintenanceViewAdmin
