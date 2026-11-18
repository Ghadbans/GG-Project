import React, { useEffect, useState } from 'react';
import '../../view.css';
import SideMaintenance from '../../../component/SideMaintenance';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {
  IconButton,
  styled,
  Typography,
  Modal,
  Box,
  Grid,
  TextField,
  Button,
  Paper
} from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Add from '@mui/icons-material/Add';
import Close from '@mui/icons-material/Close';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import { ENDPOINT_URL } from '../../../apiConfig';
import { cachedGet } from '../../../utils/apiCache';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '../../../component/NetworkLogoutIcon';
import Loader from '../../../component/Loader';
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import { renderStatusBadge } from '../../../utils/formatUtils';
import { useModuleSearchState } from '../../../hooks/useModuleSearchState';
import { useIsMobile } from '../../../utils/isMobile';
import MobileCardList from '../../../component/MobileCardList';

const DeleteTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'red',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11
  }
}));

const EditTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'gray',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11
  }
}));

const ViewTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#202a5a',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11
  }
}));

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
};

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9)
        }
      })
    }
  })
);

function DeliveryNoteViewAdmin() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  const [sideBar, setSideBar] = useState(true);
  const toggleDrawer = () => setSideBar(!sideBar);

  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId && storesUserId !== 'null') {
        try {
          const res = await axios.get(`${ENDPOINT_URL}/get-employeeuser/${storesUserId}`);
          dispatch(
            setUser({
              userName: res.data.data.employeeName,
              role: res.data.data.role,
              id: res.data.data._id
            })
          );
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      } else {
        navigate('/');
      }
    };
    fetchUser();
  }, [dispatch, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/');
  };

  const [grantAccess, setGrantAccess] = useState([]);
  useEffect(() => {
    const fetchAccess = async () => {
      try {
        const res = await cachedGet(`${ENDPOINT_URL}/grantAccess`);
        const userAccess = res.data?.data?.find((row) => row.userID === user?.data?.id);
        if (userAccess) {
          setGrantAccess(userAccess.modules || []);
        }
      } catch (error) {
        console.error('Error fetching permissions:', error);
      }
    };
    if (user?.data?.id) fetchAccess();
  }, [user]);

  const isGG = user?.data?.userName === 'GG';
  const dnAccess = grantAccess.find((r) => r.moduleName === 'Delivery-Note')?.access || {};
  const ioAccess = grantAccess.find((r) => r.moduleName === 'Item-Out')?.access || {};
  const canCreate = isGG || dnAccess.createM || ioAccess.createM;
  const canView = isGG || dnAccess.viewM || ioAccess.viewM;
  const canEdit = isGG || dnAccess.editM || ioAccess.editM;
  const canDelete = isGG || dnAccess.deleteM || ioAccess.deleteM;

  const {
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    page,
    setPage
  } = useModuleSearchState('deliveryNote');

  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [filterModel, setFilterModel] = useState({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    quickFilterValues: searchTerm ? searchTerm.split(/\s+/).filter(Boolean) : []
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 250);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const [rows, setRows] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [statusCounts, setStatusCounts] = useState({
    all: 0,
    dispatched: 0,
    delivered: 0,
    cancelled: 0
  });
  const limit = isMobile ? 30 : 100;

  const fetchItems = async (targetPage, targetSearch, targetStatus) => {
    try {
      const statusParam =
        targetStatus && targetStatus !== 'ALL'
          ? `&status=${encodeURIComponent(targetStatus)}`
          : '';
      const res = await axios.get(
        `${ENDPOINT_URL}/deliveryNote-Information?page=${targetPage + 1}&limit=${limit}&search=${encodeURIComponent(
          (targetSearch || '').trim()
        )}${statusParam}`
      );
      const formatted = (res.data.itemI || []).map((row) => ({
        ...row,
        id: row._id,
        dateField: row.deliveryDate ? dayjs(row.deliveryDate).format('DD/MM/YYYY') : '',
        customerDisplay:
          row.customerName?.customerName ||
          (typeof row.customerName === 'string' ? row.customerName : '') ||
          '',
        referenceDisplay:
          row.reference?.referenceNumber || row.reference?.referenceName || '',
        itemsCount: (row.itemsQtyArray || []).length
      }));
      setRows(formatted);
      setTotalItemCount(res.data.totalItem || 0);
      if (res.data.statusCounts) {
        setStatusCounts(res.data.statusCounts);
      }
      setLoadingData(false);
    } catch (error) {
      console.error('Error fetching delivery notes:', error);
      setLoadingData(false);
    }
  };

  useEffect(() => {
    fetchItems(page, debouncedSearchTerm, statusFilter);
  }, [page, debouncedSearchTerm, statusFilter]);

  const handleStatusClick = (statusKey) => {
    if (statusFilter.toLowerCase() === statusKey.toLowerCase() && statusKey !== 'ALL') {
      setStatusFilter('ALL');
    } else {
      setStatusFilter(statusKey);
    }
    setPage(0);
  };

  const handleFilter = (newModel) => {
    const term = newModel.quickFilterValues?.join(' ') || '';
    setSearchTerm(term);
    setFilterModel(newModel);
    setPage(0);
  };

  const handleRefreshSearch = () => {
    setSearchTerm('');
    setDebouncedSearchTerm('');
    setFilterModel({
      items: [],
      quickFilterExcludeHiddenColumns: true,
      quickFilterValues: []
    });
    setPage(0);
    fetchItems(0, '', statusFilter);
  };

  // Delete modal
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const handleOpenDelete = (id) => {
    setDeleteId(id);
    setOpenDelete(true);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
    setDeleteId(null);
  };
  const handleConfirmDelete = async (e) => {
    e.preventDefault();
    if (!deleteId) return;
    try {
      await axios.delete(`${ENDPOINT_URL}/delete-deliveryNote/${deleteId}`);
      toast.success('Delivery Note deleted.');
      handleCloseDelete();
      fetchItems(page, debouncedSearchTerm, statusFilter);
    } catch (error) {
      toast.error('Failed to delete Delivery Note.');
    }
  };

  const columns = [
    {
      field: 'deliveryName',
      headerName: 'DN #',
      minWidth: 115,
      flex: 0.8,
      renderCell: (params) => (
        <span style={{ fontWeight: 700, color: '#202a5a' }}>
          {params.row.deliveryName ||
            `DN-${String(params.row.deliveryNumber || 0).padStart(6, '0')}`}
        </span>
      )
    },
    { field: 'dateField', headerName: 'Date', minWidth: 100, flex: 0.7 },
    { field: 'reason', headerName: 'Reason', minWidth: 90, flex: 0.6 },
    { field: 'referenceDisplay', headerName: 'Reference', minWidth: 130, flex: 0.9 },
    { field: 'customerDisplay', headerName: 'Customer', minWidth: 180, flex: 1.3 },
    { field: 'driverName', headerName: 'Driver', minWidth: 120, flex: 0.8 },
    {
      field: 'itemsCount',
      headerName: 'Items',
      minWidth: 70,
      flex: 0.5,
      renderCell: (params) => <span>{params.row.itemsCount} item(s)</span>
    },
    {
      field: 'status',
      headerName: 'Status',
      minWidth: 115,
      flex: 0.8,
      renderCell: (params) => renderStatusBadge(params.row.status || 'Dispatched')
    },
    {
      field: 'view',
      headerName: 'View',
      width: 55,
      renderCell: (params) => (
        <ViewTooltip title="View / Print">
          <span>
            <IconButton disabled={!canView}>
              <NavLink to={`/DeliveryNoteViewInformation/${params.row._id}`} className="LinkName">
                <VisibilityIcon style={{ color: '#202a5a' }} />
              </NavLink>
            </IconButton>
          </span>
        </ViewTooltip>
      )
    },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 55,
      renderCell: (params) => (
        <EditTooltip title="Edit">
          <span>
            <IconButton disabled={!canEdit}>
              <NavLink to={`/DeliveryNoteUpdate/${params.row._id}`} className="LinkName">
                <EditIcon style={{ color: 'gray' }} />
              </NavLink>
            </IconButton>
          </span>
        </EditTooltip>
      )
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 55,
      renderCell: (params) => (
        <DeleteTooltip title="Delete">
          <span>
            <IconButton onClick={() => handleOpenDelete(params.row._id)} disabled={!canDelete}>
              <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
            </IconButton>
          </span>
        </DeleteTooltip>
      )
    }
  ];

  const statusCards = [
    {
      key: 'ALL',
      label: 'All Notes',
      count: statusCounts.all,
      color: '#30368a',
      icon: <AssignmentIcon sx={{ fontSize: 15, color: '#fff' }} />
    },
    {
      key: 'Dispatched',
      label: 'Dispatched',
      count: statusCounts.dispatched,
      color: '#0284c7',
      icon: <LocalShippingIcon sx={{ fontSize: 15, color: '#fff' }} />
    },
    {
      key: 'Delivered',
      label: 'Delivered',
      count: statusCounts.delivered,
      color: '#16a34a',
      icon: <CheckCircleOutlineIcon sx={{ fontSize: 15, color: '#fff' }} />
    },
    {
      key: 'Cancelled',
      label: 'Cancelled',
      count: statusCounts.cancelled,
      color: '#dc2626',
      icon: <CancelIcon sx={{ fontSize: 15, color: '#fff' }} />
    }
  ];

  if (isMobile) {
    return loadingData ? (
      <div style={{ position: 'relative', top: '120px', textAlign: 'center' }}>
        <Loader />
      </div>
    ) : (
      <Box sx={{ width: '100%', py: 1 }}>
        <MobileCardList
          type="deliveryNotes"
          data={rows}
          searchPlaceholder="Search delivery notes, customers, references..."
          searchValue={searchTerm}
          onSearchChange={setSearchTerm}
          page={page}
          totalCount={totalItemCount}
          onPageChange={setPage}
          loading={loadingData}
          statusFilter={statusFilter}
          onStatusFilterChange={handleStatusClick}
          statusCounts={statusCounts}
          onAddNew={canCreate ? () => navigate('/DeliveryNoteForm') : undefined}
        />
      </Box>
    );
  }

  return (
    <div className="Homeemployee">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={sideBar} sx={{ backgroundColor: '#30368a' }}>
          <Toolbar sx={{ pr: '24px' }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleDrawer}
              sx={{ marginRight: '36px', ...(sideBar && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
              Delivery Note
            </Typography>
            <NotificationVIewInfo />
            <MessageAdminView name={user.data.userName} role={user.data.role} />
            <IconButton color="inherit" onClick={handleLogout}>
              <Logout />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={sideBar}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1]
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <SideMaintenance />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: '#f5f5f5',
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto'
          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 2, mb: 2 }}>
            {/* Status Filter Cards */}
            <Grid container spacing={1.5} sx={{ mb: 1.5 }}>
              {statusCards.map((card) => {
                const isSelected = statusFilter.toLowerCase() === card.key.toLowerCase();
                return (
                  <Grid item xs={6} sm={3} key={card.key}>
                    <Paper
                      onClick={() => handleStatusClick(card.key)}
                      sx={{
                        p: '6px 10px',
                        cursor: 'pointer',
                        borderRadius: '8px',
                        border: isSelected ? `2px solid ${card.color}` : '1px solid #e2e8f0',
                        borderBottom: `3px solid ${card.color}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: isSelected ? '#f8fafc' : '#ffffff'
                      }}
                    >
                      <Box>
                        <Typography sx={{ fontSize: '9.5px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                          {card.label}
                        </Typography>
                        <Typography sx={{ fontSize: '16px', fontWeight: 800, color: '#0f172a' }}>
                          {card.count}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: 24,
                          height: 24,
                          borderRadius: '6px',
                          backgroundColor: card.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {card.icon}
                      </Box>
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>

            {/* Action Bar */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mb: 1 }}>
              {canCreate && (
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<Add />}
                  onClick={() => navigate('/DeliveryNoteForm')}
                  sx={{ backgroundColor: '#202a5a', '&:hover': { backgroundColor: '#161d40' } }}
                >
                  New Delivery Note
                </Button>
              )}
              <Button
                variant="contained"
                size="small"
                color="error"
                onClick={handleRefreshSearch}
              >
                Refresh Search
              </Button>
            </Box>

            {/* DataGrid */}
            <Box sx={{ height: 'calc(100vh - 200px)', minHeight: 380, width: '100%', backgroundColor: '#ffffff' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                loading={loadingData}
                paginationMode="server"
                filterMode="server"
                rowCount={totalItemCount}
                paginationModel={{ page, pageSize: limit }}
                onPaginationModelChange={(model) => setPage(model.page)}
                pageSizeOptions={[limit]}
                filterModel={filterModel}
                onFilterModelChange={handleFilter}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                  toolbar: {
                    showQuickFilter: true,
                    quickFilterProps: { debounceMs: 300 }
                  }
                }}
              />
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Delete Confirmation Modal */}
      <Modal open={openDelete} onClose={handleCloseDelete}>
        <Box sx={modalStyle}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">Delete Delivery Note</Typography>
            <IconButton onClick={handleCloseDelete} size="small">
              <Close />
            </IconButton>
          </Box>
          <Typography sx={{ mb: 3 }}>
            Are you sure you want to permanently delete this Delivery Note?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            <Button onClick={handleCloseDelete}>Cancel</Button>
            <Button variant="contained" color="error" onClick={handleConfirmDelete}>
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default DeliveryNoteViewAdmin;
