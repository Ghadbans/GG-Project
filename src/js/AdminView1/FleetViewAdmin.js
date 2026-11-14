import React, { useEffect, useState } from 'react';
import './view.css';
import './PageView/Chartview.css';
import SidebarDash from '../component/SidebarDash';
import { NavLink, useNavigate } from 'react-router-dom';
import { IconButton, styled, Typography, Modal, Box, Backdrop, Container, Avatar } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import axios from 'axios';
import { ENDPOINT_URL } from '../apiConfig';
import { renderStatusBadge } from '../utils/formatUtils';
import { Add, Delete, Edit, Visibility, DirectionsCar as DirectionsCarIcon } from '@mui/icons-material';
import dayjs from 'dayjs';
import { evaluateFleetCompliance, getEffectiveVehicleColor, STANDARD_VEHICLE_COLORS } from '../utils/fleetUtils';
import Loader from '../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDispatch, useSelector } from "react-redux"
import { selectCurrentUser } from '../features/auth/authSlice';
import Logout from '../component/NetworkLogoutIcon';
import Image from '../img/no-data.png';
import CssBaseline from '@mui/material/CssBaseline';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import MessageAdminView from './MessageAdminView';
import NotificationVIewInfo from './NotificationVIewInfo';

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

export default function FleetViewAdmin() {
  const [sideBar, setSideBar] = useState(false);
  const [fleets, setFleets] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [page, setPage] = useState(0);
  const limit = 100;
  const [totalPage, setTotalPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [totalItemCount, setTotalItemCount] = useState(0);
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setSideBar(!sideBar);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const fetchData = async () => {
    setLoadingData(true);
    try {
      const res = await axios.get(`${ENDPOINT_URL}/fleet?page=${page + 1}&limit=${limit}&search=${encodeURIComponent(debouncedSearchTerm)}`);
      setFleets(res.data.itemI);
      setTotalItemCount(res.data.totalItems);
      setTotalPage(res.data.totalPages);
    } catch (error) {
      console.log(error);
    }
    setLoadingData(false);
  };

  useEffect(() => {
    fetchData();
  }, [page, debouncedSearchTerm]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const columns = [
    {
      field: 'counter',
      headerName: '#',
      width: 50,
      filterable: false,
      renderCell: (params) => params.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
    },
    {
      field: 'photo',
      headerName: 'Photo',
      width: 65,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        const img = params.row.vehicleImage;
        return (
          <Avatar
            variant="rounded"
            src={img || undefined}
            sx={{
              width: 38,
              height: 38,
              borderRadius: '6px',
              border: '1px solid #e2e8f0',
              backgroundColor: '#f1f5f9',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
            }}
          >
            {!img && <DirectionsCarIcon sx={{ fontSize: 22, color: '#94a3b8' }} />}
          </Avatar>
        );
      }
    },
    { field: 'carMake', headerName: 'Make', flex: 1 },
    { field: 'carModel', headerName: 'Model', flex: 1 },
    { field: 'plateNumber', headerName: 'Plate #', flex: 1, renderCell: (params) => <strong>{params.value || 'N/A'}</strong> },
    {
      field: 'vehicleColor',
      headerName: 'Vehicle Color',
      flex: 1,
      minWidth: 120,
      valueGetter: (params) => getEffectiveVehicleColor(params.row),
      renderCell: (params) => {
        const colorName = getEffectiveVehicleColor(params.row);
        if (!colorName) return <span style={{ color: '#94a3b8' }}>—</span>;

        const matched = STANDARD_VEHICLE_COLORS.find(c => c.name.toLowerCase() === colorName.toLowerCase());
        const hex = matched ? matched.hex : '#64748b';
        const border = matched?.border || 'transparent';

        return (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <span
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: hex,
                border: `1px solid ${border !== 'transparent' ? border : hex}`,
                display: 'inline-block',
                boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
                flexShrink: 0
              }}
            />
            <span style={{ fontWeight: 500, textTransform: 'capitalize', color: '#1e293b' }}>
              {colorName}
            </span>
          </div>
        );
      }
    },
    { field: 'branchId', headerName: 'Branch', flex: 0.8, valueFormatter: (params) => params.value || 'HQ' },
    { field: 'status', headerName: 'Status', flex: 0.9, renderCell: (params) => renderStatusBadge(params.row.status) },
    {
      field: 'documents',
      headerName: 'Expiring Soon',
      flex: 1.5,
      minWidth: 170,
      renderCell: (params) => {
        const compliance = evaluateFleetCompliance(params.row);
        return (
          <ViewTooltip title={compliance.tooltip} placement="top">
            <NavLink to={`/FleetFormUpdate/${params.row._id}`} style={{ textDecoration: 'none' }}>
              <span
                style={{
                  color: compliance.color,
                  backgroundColor: compliance.bgColor,
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  fontSize: '11px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  border: `1px solid ${compliance.color}40`,
                  cursor: 'pointer',
                  maxWidth: '100%',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {compliance.status}
              </span>
            </NavLink>
          </ViewTooltip>
        );
      }
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 80,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <ViewTooltip title="View / Edit" placement='top'>
              <NavLink to={`/FleetFormUpdate/${params.row._id}`} style={{ textDecoration: "none" }}>
                <div className="viewButton"><Visibility /></div>
              </NavLink>
            </ViewTooltip>
          </div>
        );
      }
    }
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    navigate('/LoginSystem');
  };

  return (
    <div style={{ backgroundColor: '#f9f9f9', height: '100vh', width: '100%', overflowX: 'hidden' }}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={sideBar} style={{ backgroundColor: '#202a5a' }}>
          <Toolbar sx={{ pr: '24px' }}>
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
            <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
              Fleet Management
            </Typography>
            <NotificationVIewInfo />
            <MessageAdminView name={user?.data?.userName} role={user?.data?.role} />
            <IconButton color="inherit" onClick={handleLogout}>
              <Logout style={{ color: 'white' }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={sideBar} onMouseEnter={() => setSideBar(true)} onMouseLeave={() => setSideBar(false)}>
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }}>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List sx={{ height: '700px' }}>
            <SidebarDash />
          </List>
        </Drawer>
        <Box component="main" sx={{ backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900], flexGrow: 1, width: '100%', height: '100vh', overflow: 'auto' }}>
          <Toolbar />
          <Container maxWidth="none" sx={{ mt: 1 }} >
                <div >
                  <section style={{ position: 'relative', float: 'right', margin: '10px' }}>
                    <ViewTooltip>
                      <span>
                        <IconButton>
                          <NavLink to={'/FleetFormView'} className='LinkName'>
                            <span className='btnCustomerAdding'>
                              <Add />
                            </span>
                          </NavLink>
                        </IconButton>
                      </span>
                    </ViewTooltip>
                  </section>
                  <Box sx={{ height: 600, width: '100%', '& .super-app-theme--Expiring': { backgroundColor: '#ffebee', '&:hover': { backgroundColor: '#ffcdd2' } }, '& .row-expiring-soon': { backgroundColor: '#fff3e0', '&:hover': { backgroundColor: '#ffe0b2' } } }}>
                    <DataGrid
                      rowHeight={52}
                      getRowClassName={(params) => {
                        if (params.row.status !== 'Running') return '';
                        const compliance = evaluateFleetCompliance(params.row);
                        if (compliance.severity === 'error') return 'super-app-theme--Expiring';
                        if (compliance.severity === 'warning') return 'row-expiring-soon';
                        return '';
                      }}
                      paginationMode="server"
                      rowCount={totalItemCount}
                      paginationModel={{ page: page, pageSize: limit }}
                      onPaginationModelChange={(newModel) => handlePageChange(newModel.page)}
                      rows={fleets}
                      columns={columns}
                      loading={loadingData}
                      slots={{ toolbar: GridToolbar }}
                      getRowId={(row) => row._id}
                      slotProps={{
                        toolbar: {
                          showQuickFilter: true,
                          quickFilterProps: { debounceMs: 500 },
                          printOptions: { disableToolbarButton: true },
                        },
                      }}
                      onFilterModelChange={(newModel) => {
                        if (newModel.quickFilterValues && newModel.quickFilterValues.length > 0) {
                          setSearchTerm(newModel.quickFilterValues.join(' '));
                        } else {
                          setSearchTerm('');
                        }
                      }}
                      // removed duplicate getRowClassName
                      sx={{ width: '100%', backgroundColor: 'white', padding: '10px' }}
                    />
                  </Box>
                </div>
          </Container>
        </Box>
      </Box>
    </div>
  );
}
