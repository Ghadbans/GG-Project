import React, { useEffect, useState } from 'react';
import './view.css';
import SidebarDash from '../component/SidebarDash'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './PageView/Chartview.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {  NavLink, useNavigate } from 'react-router-dom';
import { Skeleton,  Table, Modal, IconButton, styled, TableBody, TableCell, TableHead, TableRow, Checkbox, TableContainer, Paper, Typography, Box, Autocomplete, TextField, Backdrop, Grid  } from '@mui/material';
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
import { useDispatch, useSelector } from "react-redux"
import { logOut, selectCurrentUser, setUser } from '../features/auth/authSlice';
import Loader from '../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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
function ProjectViewAdmin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
        try {
          const res = await axios.get(`${ENDPOINT_URL}/get-employeeuser/${storesUserId}`)
          const Name = res.data.data.employeeName;
          const Role = res.data.data.role;
          dispatch(setUser({ userName: Name, role: Role, id: res.data.data._id }));
        } catch (error) {
          console.error('Error fetching data:', error);
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
      try {
        const res = await cachedGet(`${ENDPOINT_URL}/grantAccess`);
        res.data?.data?.filter((row) => row.userID === user.data.id)
          .map((row) => setGrantAccess(row.modules))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchNumber()
  }, [user])
  const ProjectInfoC = grantAccess.filter((row) => row.moduleName === "Project" && row.access.createM === true);
  const ProjectInfoV = grantAccess.filter((row) => row.moduleName === "Project" && row.access.viewM === true);
  const ProjectInfoU = grantAccess.filter((row) => row.moduleName === "Project" && row.access.editM === true);
  const ProjectInfoD = grantAccess.filter((row) => row.moduleName === "Project" && row.access.deleteM === true);

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }
  const [project, setProject] = useState([]);
  const [hiddenRow, setHiddenRow] = useState([]);
  const [hidden, setHidden] = useState([]);
  const [page, setPage] = useState(0);
  const limit = 100;
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [filterField, setFilterField] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [totalPage, SetTotalPage] = useState(0);
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [loadingData, setLoadingData] = useState(true);
  const [reason, setReason] = useState("");
    const fetchItems = async (page, searchTerm, filterField, filterValue) => {
    try {
      const res = await axios.get(`${ENDPOINT_URL}/project-Information?page=${page + 1}&limit=${limit}&search=${encodeURIComponent(searchTerm.trim())}&filterField=${encodeURIComponent(filterField.trim())}&filterValue=${encodeURIComponent(filterValue.trim())}`);
      const formatDate = res.data.itemI.map((item) => ({
        ...item,
        id: item._id,
      }));
      setProject(formatDate);
      SetTotalPage(res.data.totalPages);
        setTotalItemCount(res.data.totalItem);
      setLoadingData(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoadingData(false);
    }
  }

  useEffect(() => {
    fetchItems(page, debouncedSearchTerm, filterField, filterValue);
  }, [page, debouncedSearchTerm, filterField, filterValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setPage(0);
    }, 400);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
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
  const handleCreateNotificationOffline = async (ReferenceInfo, ReferenceInfoProject, ReferenceInfoName) => {
    const data = {
      idInfo: ReferenceInfo,
      person: user.data.userName + ' Created ',
      reason: ReferenceInfoProject + 'For' + ReferenceInfoName,
      dateNotification: new Date()
    }
    try {
      await axios.post(`${ENDPOINT_URL}/create-notification`, data)
    } catch (error) {
      console.log(error)
    }
  }
  /* const syncOff = async () => {
  } */
  
  useEffect(() => {
    const fetchDataHidden = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/hidden`)
        setHiddenRow(res.data.data.map((row) => row.idRow))
        setHidden(res.data.data)
        localStorage.removeItem('Hidden')
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchDataHidden()
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

  const [sideBar, setSideBar] = useState(true);
  const toggleDrawer = () => {
    setSideBar(!sideBar);
  };

  const handleHideRow = async (id) => {
    if (user.data.role === 'CEO') {
      try {
        if (hiddenRow.includes(id)) {
          setHiddenRow(hiddenRow.filter((row) => row !== id));
          const result = hidden.filter((row) => row.idRow === id)
            .map((row) => row._id);
          const hiddenId = result.toString();
          await axios.delete(`${ENDPOINT_URL}/delete-hidden/${hiddenId}`);
        } else {
          setHiddenRow([...hiddenRow, id]);
          await axios.post(`${ENDPOINT_URL}/create-hidden`, {
            idRow: id,
            hiddenByCEO: true
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const rowRenderer = (params) => {
    if (hiddenRow.includes(params.row._id)) {
      return null;
    }
    return <div>{params.row[params.field]}</div>;
  };

  const [filteredRows, setFilteredRows] = useState([]);
  useEffect(() => {
    const proj = project.filter(row => !hiddenRow.includes(row._id));
    setFilteredRows(proj);
  }, [project, hiddenRow]);

  const [filterModel, setFilterModel] = useState({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    quickFilterValues: [],
  });
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({});
  const handelHiddenColumn = (newHidden) => {
    setColumnVisibilityModel(newHidden);
    localStorage.setItem('HiddenColumnsProject', JSON.stringify(newHidden));
  };
    const handleFilter = (newModel) => {
    setFilterModel(newModel);
//     localStorage.setItem('QuickFilterProjectTst', JSON.stringify(newModel));
    if (newModel.quickFilterValues && newModel.quickFilterValues.length > 0) {
      setSearchTerm(newModel.quickFilterValues.join(' '));
    } else {
      setSearchTerm('');
    }
    if (newModel.items && newModel.items.length > 0) {
      setFilterField(newModel.items[0].field);
      setFilterValue(newModel.items[0].value || '');
    } else {
      setFilterField('');
      setFilterValue('');
    }
  };
  useEffect(() => {
    const storedQuick = null; // JSON.parse(localStorage.getItem('QuickFilterProjectTst'));
    if (storedQuick) {
      setFilterModel(storedQuick);
    }
    const storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsProject'));
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns);
    }
  }, []);
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
    setOpen(false);
    setOpenDeleteMultiple(false);
    setOpenDeleteAll(false);
    setModalOpenLoading(false);
    setLoading(false);
    setSelectedRows([]);
    fetchItems(page, searchTerm, filterField, filterValue); // Refresh data instead of reload

  };
  const [ProjectDeleted, setProjectDeleted] = useState([])
  useEffect(() => {
    const fetchFunction = async () => {
      const deletePromises = selectedRows.map(async (idToDelete) => {
        return axios.get(`${ENDPOINT_URL}/get-projects/${idToDelete}`)
      })
      try {
        const res = await Promise.all(deletePromises);
        setProjectDeleted(res.map((row) => 'P-' + row.data.data.projectNumber))
      } catch (error) {
        console.log(error)
      }
    }
    fetchFunction()
  }, [selectedRows])
  const related = ProjectDeleted.map(row => row)
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
      console.log(error)
    }
  }
  const handleDeleteMany = async (e) => {
    e.preventDefault()
    const deletePromises = selectedRows.map(async (idToDelete) => {
      return axios.delete(`${ENDPOINT_URL}/delete-projects/${idToDelete}`);
    })
    try {
      const res = await Promise.all(deletePromises);
      if (res) {
        handleCreateNotification()
        handleOpenModal();
      }
    } catch (error) {
      console.log('an error as occur ', error);
    }
  };
  const handleDelete = async () => {
    setLoading(true);
    setModalOpenLoading(true);
    handleClose();
    try {
      const res = await axios.delete(`${ENDPOINT_URL}/delete-projects/${DeleteId}`);
      if (res) {
        handleOpenModal();
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setModalOpenLoading(false);
    }
  }
  const columns = [
    { field: 'projectNumber', headerName: 'Project Number', minWidth: 80, flex: 0.8, valueFormatter: (params) => 'P-' + String(params?.value || '').padStart(6, '0') },
    { field: 'customer', headerName: 'Customer Name', minWidth: 150, flex: 1.5, valueGetter: (params) => params.row.customerName?.customerName || 'No Customer' },
    { field: 'projectName', headerName: 'Project Name', minWidth: 200, flex: 2 },
    { field: 'description', headerName: 'Description', minWidth: 150, flex: 1.5 },
    {
      field: 'status', headerName: 'Status', minWidth: 100, flex: 1, renderCell: (params) => (
        <Typography
          color={
            params.row.status === "Pending"
              ? "gray" : params.row.status === "On-Going"
                ? "blue" :
                params.row.status === "Stopped"
                  ? "red" :
                  params.row.status === "Pending"
                    ? "Orange" :
                    params.row.status === "Completed"
                      ? "green" : "black"
          }
        >
          {params.row.status}
        </Typography>
      )
    },
    {
      field: 'view', headerName: 'View', width: 60, minWidth: 60, renderCell: (params) => (
        <ViewTooltip title="View">
          <span>
            <IconButton disabled={ProjectInfoV.length === 0}>
              <NavLink to={`/ProjectInfo/${params.row._id}`} className='LinkName'>
                <VisibilityIcon style={{ color: '#202a5a' }} />
              </NavLink>
            </IconButton>
          </span>
        </ViewTooltip>
      )
    },
    {
      field: 'edit', headerName: 'Edit', width: 60, minWidth: 60, renderCell: (params) => (
        <EditTooltip title="Edit" >
          <span>
            <IconButton disabled={ProjectInfoU.length === 0}>
              <NavLink to={`/ProjectUpdateView/${params.row._id}`} className='LinkName'>
                <EditIcon style={{ color: 'gray' }} />
              </NavLink>
            </IconButton>
          </span>
        </EditTooltip>
      )
    },
    {
      field: 'Delete', headerName: 'Delete', width: 60, minWidth: 60, renderCell: (params) => (
        <DeleteTooltip title="Delete">
          <span>                           <IconButton onClick={() => handleOpen(params.row._id)} disabled={ProjectInfoD.length === 0}>
            <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
          </IconButton>
          </span>
        </DeleteTooltip>
      )
    }, {
      field: 'hide',
      headerName: 'Action',
      sortable: false,
      width: 60,
      minWidth: 60,
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
              Project
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
              loadingData ? <Skeleton variant="rectangular" width="100%" height={600} sx={{ mt: 2, borderRadius: 2 }} /> : (
                <div>
                  {project.length > 0 ? (
                    <section style={{ position: 'relative', float: 'left', margin: '10px' }}>
                      {
                        selectedRows.length > 1 && selectedRows.length < project.length && (
                          <button disabled={user.data.role !== 'CEO'} onClick={handleOpenAll} className='btnCustomer2'>Delete multiple</button>
                        )
                      }

                      {
                        selectedRows.length === project.length ? (
                          <button onClick={handleOpenAll} disabled={user.data.role !== 'CEO'} className='btnCustomer2'>Delete all</button>
                        ) : ''
                      }
                    </section>
                  )
                    : ''}
                  <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                    <ViewTooltip>
                      <span>
                        <IconButton disabled={ProjectInfoC.length === 0}>
                          <NavLink to={'/ProjectFormView'} className='LinkName'>
                            <span className='btnCustomerAdding'>
                              <Add />
                            </span>
                          </NavLink>
                        </IconButton>
                      </span>
                    </ViewTooltip>
                  </section>
                  <Box sx={{ height: 600, width: '100%' }}>
                      {
                        user.data.role === 'CEO' ? (
                          <DataGrid
                          paginationMode="server"
                          filterMode="server"
                          rowCount={totalItemCount}
                          paginationModel={{ page: page, pageSize: limit }}
                          onPaginationModelChange={(newModel) => handlePageChange(newModel.page)}
                            rows={project}
                            columns={columns}
                            slots={{ toolbar: GridToolbar }}
                            onRowSelectionModelChange={(newSelection) => setSelectedRows(newSelection)}
                            slotProps={{
                              toolbar: {
                                showQuickFilter: true,
                          quickFilterProps: { debounceMs: 500 },
                                printOptions: {
                                  disableToolbarButton: true
                                },
                              },
                            }}
                            rowRenderer={rowRenderer}
                            checkboxSelection
                            disableDensitySelector
                            rowSelectionModel={selectedRows}
                            filterModel={filterModel}
                            onFilterModelChange={(newModel) => handleFilter(newModel)}
                            columnVisibilityModel={columnVisibilityModel}
                            onColumnVisibilityModelChange={handelHiddenColumn}
                            sx={{ width: '100%', backgroundColor: 'white', padding: '10px', '& .MuiDataGrid-footerContainer': { justifyContent: 'flex-start' }, '& .MuiTablePagination-root': { flex: 'none' }, '& .MuiTablePagination-spacer': { display: 'none' } }}
                          />
                        ) : (
                          <DataGrid
                          paginationMode="server"
                          filterMode="server"
                          rowCount={totalItemCount}
                          paginationModel={{ page: page, pageSize: limit }}
                          onPaginationModelChange={(newModel) => handlePageChange(newModel.page)}
                            rows={filteredRows}
                            columns={columns}
                            slots={{ toolbar: GridToolbar }}
                            onRowSelectionModelChange={(newSelection) => setSelectedRows(newSelection)}
                            slotProps={{
                              toolbar: {
                                showQuickFilter: true,
                          quickFilterProps: { debounceMs: 500 },
                                printOptions: {
                                  disableToolbarButton: true
                                },
                              },
                            }}
                            rowRenderer={rowRenderer}
                            checkboxSelection
                            disableDensitySelector
                            rowSelectionModel={selectedRows}
                            filterModel={filterModel}
                            onFilterModelChange={(newModel) => handleFilter(newModel)}
                            columnVisibilityModel={columnVisibilityModel}
                            onColumnVisibilityModelChange={handelHiddenColumn}
                            sx={{ width: '100%', backgroundColor: 'white', padding: '10px', '& .MuiDataGrid-footerContainer': { justifyContent: 'flex-start' }, '& .MuiTablePagination-root': { flex: 'none' }, '& .MuiTablePagination-spacer': { display: 'none' } }}
                          />
                        )
                      }
                    </Box>
                </div>)
            }</Container>
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
              selectedRows.length > 1 && selectedRows.length < project.length && (
                <p><span className="txt2" style={{ color: 'red' }}>Note:</span> All selected rows will be deleted</p>
              )
            }
            {
              selectedRows.length === project.length && (
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

export default ProjectViewAdmin
