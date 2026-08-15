import React, { useEffect, useState } from 'react';
import './view.css';
import './PageView/Chartview.css';
import SidebarDash from '../component/SidebarDash';
import { NavLink, useNavigate } from 'react-router-dom';
import { IconButton, styled, Typography, Modal, Box, Backdrop, Container } from '@mui/material';
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
import { Add, Delete, Edit, Visibility } from '@mui/icons-material';
import dayjs from 'dayjs';
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
      width: 60,
      filterable: false,
      renderCell: (params) => params.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
    },
    { field: 'carMake', headerName: 'Make', flex: 1 },
    { field: 'carModel', headerName: 'Model', flex: 1 },
    { field: 'plateNumber', headerName: 'Plate #', flex: 1 },
    { field: 'branchId', headerName: 'Branch', flex: 1, valueFormatter: (params) => params.value || 'HQ' },
    { 
      field: 'status', 
      headerName: 'Status', 
      flex: 1,
      renderCell: (params) => {
         let color = 'black';
         if (params.row.status === 'Running') color = '#4caf50'; // green
         else if (params.row.status === 'Stopped') color = '#ff9800'; // orange
         else if (params.row.status === 'Damaged') color = '#f44336'; // red
         return <span style={{ color, fontWeight: 'bold' }}>{params.row.status}</span>;
      }
    },
    {
      field: 'documents',
      headerName: 'Expiring Soon',
      flex: 1,
      renderCell: (params) => {
        const docs = params.row.documents;
        if (!docs || docs.length === 0) return <span style={{ color: '#f44336', fontWeight: 'bold' }}>No Docs</span>;
        
        const latestDocs = {};
        docs.forEach(doc => {
          const exp = dayjs(doc.expiryDate);
          if (!latestDocs[doc.documentName] || exp.isAfter(latestDocs[doc.documentName].exp)) {
            latestDocs[doc.documentName] = { exp, isPaid: doc.isPaid };
          }
        });

        const now = dayjs();
        let isExpired = false;
        let isExpiringSoon = false;
        
        Object.values(latestDocs).forEach(docInfo => {
           const diff = docInfo.exp.diff(now, 'day');
           if (diff < 0 && !docInfo.isPaid) {
             isExpired = true;
           } else if (diff <= 7 && !docInfo.isPaid) {
             isExpiringSoon = true;
           }
        });

        if (isExpired) {
          return <span style={{ color: '#f44336', fontWeight: 'bold' }}>EXPIRED</span>;
        } else if (isExpiringSoon) {
          return <span style={{ color: '#ff9800', fontWeight: 'bold' }}>OK</span>;
        } else {
          return <span style={{ color: '#4caf50', fontWeight: 'bold' }}>OK</span>;
        }
      }
    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <ViewTooltip title="View / Edit" placement='top'>
              <NavLink to={`/FleetFormUpdate/${params.row._id}`} style={{ textDecoration: "none" }}>
                <div className="viewButton"><Visibility /></div>
              </NavLink>
            </ViewTooltip>
          </div>
        )
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
                  <Box sx={{ height: 600, width: '100%', '& .super-app-theme--Expiring': { backgroundColor: '#ffebee', '&:hover': { backgroundColor: '#ffcdd2' } } }}>
                    <DataGrid
                      getRowClassName={(params) => {
                        if (params.row.status !== 'Running') return '';
                        const docs = params.row.documents;
                        if (!docs || docs.length === 0) return '';
                        
                        const latestDocs = {};
                        docs.forEach(doc => {
                          const exp = dayjs(doc.expiryDate);
                          if (!latestDocs[doc.documentName] || exp.isAfter(latestDocs[doc.documentName])) {
                            latestDocs[doc.documentName] = exp;
                          }
                        });

                        const now = dayjs();
                        let expiring = false;
                        docs.forEach(doc => {
                           const isLatest = dayjs(doc.expiryDate).isSame(latestDocs[doc.documentName]);
                           if (isLatest) {
                             const exp = dayjs(doc.expiryDate);
                             if (exp.diff(now, 'day') <= 7 && !doc.isPaid) {
                               expiring = true;
                             }
                           }
                        });
                        return expiring ? 'row-expiring-soon' : '';
                      }}
                      paginationMode="server"
                          filterMode="server"
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
