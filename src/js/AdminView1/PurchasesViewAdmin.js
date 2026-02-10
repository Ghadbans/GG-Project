import React, { useEffect, useState } from 'react'
import './view.css'
import './PageView/Chartview.css';
import SidebarDash from '../component/SidebarDash'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Table, Modal, IconButton, styled, TableBody, TableCell, TableHead, TableRow, Checkbox, TableContainer, Paper, Typography, Box, Autocomplete, TextField, Backdrop, Grid } from '@mui/material';
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
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Add, Close, MailOutline } from '@mui/icons-material';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from "react-redux"
import { logOut, selectCurrentUser, setUser } from '../features/auth/authSlice';
import Loader from '../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Logout from '@mui/icons-material/Logout';
import Image from '../img/no-data.png';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import MessageAdminView from './MessageAdminView';
import NotificationVIewInfo from './NotificationVIewInfo';
import db from '../dexieDb';
import { io } from 'socket.io-client';

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

function PurchasesViewAdmin() {
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
        offLineCustomer1.filter((row) => row.userID === user.data.id)
          .map((row) => setGrantAccess(row.modules))
      }
    }
    fetchNumber()
  }, [user])

  const PurchaseInfoC = grantAccess.filter((row) => row.moduleName === "Purchase" && row.access.createM === true);
  const PurchaseInfoV = grantAccess.filter((row) => row.moduleName === "Purchase" && row.access.viewM === true);
  const PurchaseInfoU = grantAccess.filter((row) => row.moduleName === "Purchase" && row.access.editM === true);
  const PurchaseInfoD = grantAccess.filter((row) => row.moduleName === "Purchase" && row.access.deleteM === true);

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/');
  }

  const [purchase, setPurchase] = useState([]);
  const [newPurchase, setNewPurchase] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [reason, setReason] = useState("");
  const apiUrl = 'https://gg-project-productionn.up.railway.app/endpoint/purchase';

  const [page, setPage] = useState(0);
  const limit = 100;
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [totalPage, SetTotalPage] = useState(0);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchPurchase);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchPurchase]);

  const fetchData = async (page, searchTerm) => {
    if (navigator.onLine) {
      try {
        const res = await axios.get(`https://gg-project-productionn.up.railway.app/endpoint/purchase-Information?page=${page + 1}&limit=${limit}&search=${encodeURIComponent(searchTerm.trim())}`)
        const formatDate = res.data.itemI.map((item) => ({
          ...item,
          id: item._id,
          dataField: dayjs(item.purchaseDate).format('DD/MM/YYYY'),
        }))
        setPurchase(formatDate);
        SetTotalPage(res.data.totalPages);
        setLoadingData(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadingData(false)
      }
    } else {
      const offLineCustomer1 = await db.purchaseSchema.toArray();
      const lowerSearch = searchTerm.toLowerCase().trim();
      const filtered = lowerSearch === '' ? offLineCustomer1 : offLineCustomer1.filter((item) =>
        (item.projectName && item.projectName.projectName.toLowerCase().includes(lowerSearch)) ||
        (item.purchaseNumber && item.purchaseNumber.toString().includes(lowerSearch))
      );
      const formatDate = filtered.map((item) => ({
        ...item,
        id: item._id,
        dataField: dayjs(new Date(item.purchaseDate)).format('DD/MM/YYYY'),
      }))
      setPurchase(formatDate.reverse())
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
  const handleCreateNotificationOffline = async (ReferenceInfo, ReferenceInfoNumber, ReferenceInfoName) => {
    const data = {
      idInfo: ReferenceInfo,
      person: user.data.userName + ' Created ',
      reason: 'PUR-' + ReferenceInfoNumber + ' For ' + ReferenceInfoName,
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
      const syncedPurchase = await db.purchaseSchema.toArray();
      const PurchaseToSynced = syncedPurchase.filter((row) => row.synced === false)
      for (const PurchaseInfo of PurchaseToSynced) {
        try {
          const res = await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-purchase', PurchaseInfo)
          if (res) {
            const ReferenceInfo = res.data.data._id
            const ReferenceInfoNumber = res.data.data.purchaseNumber
            const ReferenceInfoName = res.data.data.customerName.customerName
            handleCreateNotificationOffline(ReferenceInfo, ReferenceInfoNumber, ReferenceInfoName)
            handleOpenOffline();
          }
        } catch (error) {
          console.log(error)
        }
      }
      const projectsToSyncedUpdate = syncedPurchase.filter((row) => row.updateS === false)
      for (const PurchaseInfoUpdate of projectsToSyncedUpdate) {
        try {
          await axios.put(`https://gg-project-productionn.up.railway.app/endpoint/update-purchase/${PurchaseInfoUpdate._id}`, PurchaseInfoUpdate)
          await db.purchaseSchema.update(PurchaseInfoUpdate.purchaseNumber, { synced: true, updateS: true })
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
    setSelectedRows([])
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
      const res = await axios.delete(`https://gg-project-productionn.up.railway.app/endpoint/delete-purchase/${DeleteId}`);
      if (res) {
        handleOpenModal()
      }
    } catch (error) {
      alert('an error as occur ', error);
    }
  };
  const [PurchaseDeleted, setPurchaseDeleted] = useState([])
  useEffect(() => {
    const fetchFunction = async () => {
      const deletePromises = selectedRows.map(async (idToDelete) => {
        return axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-purchase/${idToDelete}`)
      })
      try {
        const res = await Promise.all(deletePromises);
        setPurchaseDeleted(res.map((row) => 'PUR-' + row.data.data.purchaseNumber))
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
      await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-notification', data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleDeleteMany = async (e) => {
    e.preventDefault()
    const deletePromises = selectedRows.map(async (idToDelete) => {
      return axios.delete(`https://gg-project-productionn.up.railway.app/endpoint/delete-purchase/${idToDelete}`)
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
  const [searchPurchase, setSearchPurchase] = useState("");
  useState(() => {
    const storedValue = localStorage.getItem('QuickFilterPurchase')
    if (storedValue) {
      setSearchPurchase(storedValue)
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
    localStorage.setItem('HiddenColumnsPurchase', JSON.stringify(newHidden))
  }
  const handleFilter = (newModel) => {
    setFilterModel(newModel)

    localStorage.setItem('QuickFilterPurchaseTst', JSON.stringify(newModel))
  }
  useEffect(() => {
    const storedQuick = JSON.parse(localStorage.getItem('QuickFilterPurchaseTst'))
    if (storedQuick) {
      setFilterModel(storedQuick)
    }
    const storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsPurchase'))
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns)
    }

  }, [searchPurchase])
  {/** search end */ }
  const [sideBar, setSideBar] = React.useState(true);
  const toggleDrawer = () => {
    setSideBar(!sideBar);
  };

  const columns = [
    { field: 'purchaseNumber', headerName: 'P-Number', width: 100, renderCell: (params) => (<div><span>PUR-00{params.row.purchaseNumber}</span> </div>) },
    { field: 'projectName', headerName: 'Project Name', width: sideBar ? 280 : 400, valueGetter: (params) => params.row.projectName.projectName },
    { field: 'customerName', headerName: 'Customer Name', width: 150, valueGetter: (params) => params.row.customerName.customerName },
    { field: 'description', headerName: 'Description', width: sideBar ? 150 : 200, valueGetter: (params) => params.row.description !== undefined ? params.row.description : '' },
    {
      field: 'statusInfo', headerName: 'Status', width: 100, renderCell: (params) => (
        <Typography
          color={
            params.row.statusInfo !== undefined && params.row.statusInfo === "Pending"
              ? "gray" :
              params.row.statusInfo !== undefined && params.row.statusInfo === "On-Going"
                ? "blue" :
                params.row.statusInfo !== undefined && params.row.statusInfo === "Stopped"
                  ? "red" :
                  params.row.statusInfo !== undefined && params.row.statusInfo === "Pending"
                    ? "Orange" :
                    params.row.statusInfo !== undefined && params.row.statusInfo === "Completed"
                      ? "green" : "black"
          }
        >
          {params.row.statusInfo !== undefined ? params.row.statusInfo : ''}
        </Typography>
      )
    },
    { field: 'purchaseAmount1', headerName: 'Amount 1', width: 100, renderCell: (params) => `$ ${parseFloat(params.row.purchaseAmount1).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` },
    {
      field: 'view', headerName: 'View', width: 90, renderCell: (params) => (
        <ViewTooltip title="View">
          <span>
            <IconButton disabled={PurchaseInfoV.length === 0 && user.data.role !== 'CEO'}>
              <NavLink to={`/PurchasesViewAdminAll/${params.row._id}`} className='LinkName'>
                <VisibilityIcon style={{ color: '#202a5a' }} />
              </NavLink>
            </IconButton>
          </span>
        </ViewTooltip>

      )
    },
    {
      field: 'edit', headerName: 'Edit', width: 90, renderCell: (params) => (
        <EditTooltip title="Edit">
          <span>
            <IconButton disabled={PurchaseInfoU.length === 0 && user.data.role !== 'CEO'} >
              <NavLink to={`/PurchaseFormUpdate/${params.row._id}`} className='LinkName'>
                <EditIcon style={{ color: 'gray' }} />
              </NavLink>
            </IconButton>
          </span>
        </EditTooltip>
      )
    },
    {
      field: 'Delete', headerName: 'Delete', width: 90, renderCell: (params) => (
        <DeleteTooltip title="Delete">
          <span>                                <IconButton onClick={handleOpenAll} disabled={PurchaseInfoD.length === 0 && user.data.role !== 'CEO'}>
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
              Purchase Request
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
                  <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                    <ViewTooltip>
                      <span>
                        <IconButton disabled={PurchaseInfoC.length === 0 && user.data.role !== 'CEO'}>
                          <NavLink to={'/PurchasesFormView'} className='LinkName'>
                            <span className='btnCustomerAdding'>
                              <Add />
                            </span>
                          </NavLink>
                        </IconButton>
                      </span>
                    </ViewTooltip>
                  </section>
                  {purchase.length > 0 ? (
                    <section style={{ position: 'relative', float: 'left', margin: '10px' }}>
                      {
                        selectedRows.length > 1 && selectedRows.length < purchase.length && (
                          <button disabled={user.data.role !== 'CEO'} onClick={handleOpenAll} className='btnCustomer2'>Delete multiple</button>
                        )
                      }

                      {
                        selectedRows.length === purchase.length ? (
                          <button onClick={handleOpenAll} disabled={user.data.role !== 'CEO'} className='btnCustomer2'>Delete all</button>
                        ) : ''
                      }
                    </section>
                  )
                    : ''}
                  {purchase.length > 0 ? (
                    <Box sx={{ height: 600, width: '100%' }}>
                      <DataGrid
                        rows={purchase}
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
                              value: searchPurchase,
                              onChange: (e) => setSearchPurchase(e.target.value)
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
                        rowSelectionModel={selectedRows}
                        disableDensitySelector
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
              selectedRows.length > 1 && selectedRows.length < purchase.length && (
                <p><span className="txt2" style={{ color: 'red' }}>Note:</span> All selected rows will be deleted</p>
              )
            }
            {
              selectedRows.length === purchase.length && (
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
    </div>
  )
}

export default PurchasesViewAdmin
