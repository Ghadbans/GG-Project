import React, { useEffect, useState, useMemo } from 'react';
import './view.css';
import SideMaintenance from '../component/SideMaintenance';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './PageView/Chartview.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink, useNavigate } from 'react-router-dom';
import { IconButton, styled, Box, TextField, Grid, Tab, Pagination, Container, Modal, Toolbar, CssBaseline, Divider, List, Badge, Typography, Backdrop, Paper } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import axios from 'axios';
import { Add, Logout } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectCurrentUser, setUser } from '../features/auth/authSlice';
import Loader from '../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from '../img/no-data.png';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import MessageAdminView from './MessageAdminView';
import NotificationVIewInfo from './NotificationVIewInfo';
import { Close } from '@mui/icons-material';
import db from '../dexieDb';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import ExcelJS from 'exceljs';

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

function ItemViewAdmin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
        if (navigator.onLine) {
          try {
            const res = await axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-employeeuser/${storesUserId}`);
            const Name = res.data.data.employeeName;
            const Role = res.data.data.role;
            dispatch(setUser({ userName: Name, role: Role, id: res.data.data._id }));
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        } else {
          const resLocalInfo = await db.employeeUserSchema.get({ _id: storesUserId });
          const Name = resLocalInfo.employeeName;
          const Role = resLocalInfo.role;
          dispatch(setUser({ userName: Name, role: Role, id: resLocalInfo._id }));
        }
      } else {
        navigate('/');
      }
    };
    fetchUser();
  }, [dispatch, navigate]);

  const [grantAccess, setGrantAccess] = useState([]);
  useEffect(() => {
    const fetchNumber = async () => {
      try {
        const res = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/grantAccess');
        res.data.data.filter((row) => row.userID === user.data.id)
          .map((row) => setGrantAccess(row.modules));
      } catch (error) {
        const offLineCustomer1 = await db.grantAccessSchema.toArray();
        offLineCustomer1.filter((row) => row.userID === user.data.id)
          .map((row) => setGrantAccess(row.modules));
      }
    };
    fetchNumber();
  }, [user]);

  const ItemInfoC = grantAccess.filter((row) => row.moduleName === "Item" && row.access.createM === true);
  const ItemInfoV = grantAccess.filter((row) => row.moduleName === "Item" && row.access.viewM === true);
  const ItemInfoU = grantAccess.filter((row) => row.moduleName === "Item" && row.access.editM === true);
  const ItemInfoD = grantAccess.filter((row) => row.moduleName === "Item" && row.access.deleteM === true);

  const [item, SetItems] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loadingOpenModal, setLoadingOpenModal] = useState(false);
  const [ErrorOpenModal, setErrorOpenModal] = useState(false);

  const handleOpenOffline = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const handleError = () => {
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const [reason, setReason] = useState("");
  const [newPurchase, setNewPurchase] = useState([]);
  const [lowMargin, setLowMargin] = useState([]);
  const [totalPage, SetTotalPage] = useState(0);
  const [page, setPage] = useState(0); // Initialize page state to 0 (0-based index)
  const limit = 100;
  const [searchTerm, setSearchTerm] = useState(''); // Initialize search term state
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [filterField, setFilterField] = useState(''); // Initialize filter field state
  const [filterValue, setFilterValue] = useState(''); // Initialize filter value state

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const { isHibernating } = useSelector(state => state.user);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [itemToLoad, setItemToLoad] = useState([]);

  // Removed blocking background sync to prevent UI lag.
  // Data load is now handled directly by fetchItems with pagination.
  const fetchItems = async (page, searchTerm, filterField, filterValue) => {
    try {
      const res = await axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/item-Information?page=${page + 1}&limit=${limit}&search=${encodeURIComponent(searchTerm.trim())}&filterField=${encodeURIComponent(filterField.trim())}&filterValue=${encodeURIComponent(filterValue.trim())}`);
      setLoadingData(false);
      SetTotalPage(Math.ceil(res.data.totalItem / limit)); // Ensure totalPage is correctly calculated
      const formatDate = res.data.itemI.map((item) => ({
        ...item,
        id: item._id,
        ItemNumber: item.itemUpc.newCode + '-0' + item.itemUpc.itemNumber,
      }));
      SetItems(formatDate);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle offline case
      const offLineItems = await db.itemSchema.toArray();
      const lowerSearch = searchTerm.toLowerCase().trim();
      const filtered = lowerSearch === '' ? offLineItems : offLineItems.filter((item) =>
        (item.itemName && item.itemName.toLowerCase().includes(lowerSearch)) ||
        (item.itemDescription && item.itemDescription.toLowerCase().includes(lowerSearch)) ||
        (item.itemUpc && (item.itemUpc.newCode.toLowerCase().includes(lowerSearch) || item.itemUpc.itemNumber.toString().includes(lowerSearch))) ||
        (item.itemCategory && item.itemCategory.toLowerCase().includes(lowerSearch)) ||
        (item.itemBrand && item.itemBrand.toLowerCase().includes(lowerSearch)) ||
        (item.itemStore && item.itemStore.toLowerCase().includes(lowerSearch))
      );
      const formatDate = filtered.map((item) => ({
        ...item,
        id: item._id,
        ItemNumber: item.itemUpc.newCode + '-0' + item.itemUpc.itemNumber,
      }));
      SetItems(formatDate);
      setIsOffline(true);
      setLoadingData(false);
    }
  };

  useEffect(() => {
    if (!isHibernating) {
      fetchItems(page, debouncedSearchTerm, filterField, filterValue);
    }
  }, [page, debouncedSearchTerm, filterField, filterValue, isHibernating]);
  //console.log(item)
  const handlePageChange = (event, newPage) => {
    setPage(newPage - 1); // Update page state (convert to 0-based index)
  };


  const handleRefreshSearch = () => {
    fetchItems(page, searchTerm, filterField, filterValue);
  };

  const [loadingData1, setLoadingData1] = useState(true);
  const handleLoadMargin = async (e) => {
    e.preventDefault();
    try {
      const resLow = await axios.get('https://globalgate-backend-production.up.railway.app/endpoint/low-margin-item');
      setLowMargin(resLow.data.data.map((item) => ({
        ...item,
        id: item._id,
        ItemNumber: item.itemUpc.newCode + '-0' + item.itemUpc.itemNumber,
      })));
      setLoadingData1(false);
    } catch (error) {
      console.log('error');
      setLoadingData1(false);
    }
  };




  const [openReasonDelete, setOpenReasonDelete] = useState(false);

  const handleOpenReasonDelete = (e) => {
    e.preventDefault();
    setOpenReasonDelete(true);
  };

  const handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };

  const [open, setOpen] = useState(false);
  const [DeleteId, setDeleteId] = useState(null);
  const [modalOpenLoading, setModalOpenLoading] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleOpen = (id) => {
    setOpen(true);
    setDeleteId(id);
  };

  const handleOpenModal = () => {
    setModalOpenLoading(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
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
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseModal = () => {
    window.location.reload();
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`https://globalgate-backend-production.up.railway.app/endpoint/delete-item/${DeleteId}`);
      if (res) {
        handleOpenModal();
      }
    } catch (error) {
      alert('try again');
    }
  };

  const [ItemDeleted, setItemDeleted] = useState([]);
  useEffect(() => {
    const fetchFunction = async () => {
      const deletePromises = selectedRows.map(async (idToDelete) => {
        return axios.get(`https://globalgate-backend-production.up.railway.app/endpoint/get-item/${idToDelete}`);
      });
      try {
        const res = await Promise.all(deletePromises);
        setItemDeleted(res.map((row) => row.data.data.itemName));
      } catch (error) {
        console.log(error);
      }
    };
    fetchFunction();
  }, [selectedRows]);

  const related = ItemDeleted.map(row => row);
  const info = related.toString();

  const handleCreateNotification = async () => {
    const data = {
      idInfo: '',
      person: user.data.userName + ' Deleted ' + info,
      reason,
      dateNotification: new Date()
    };
    try {
      await axios.post('https://globalgate-backend-production.up.railway.app/endpoint/create-notification', data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteMany = async (e) => {
    e.preventDefault();
    const deletePromises = selectedRows.map(async (idToDelete) => {
      return axios.delete(`https://globalgate-backend-production.up.railway.app/endpoint/delete-item/${idToDelete}`);
    });
    try {
      const res = await Promise.all(deletePromises);
      if (res) {
        handleCreateNotification();
        handleOpenModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [synced, setSynced] = useState('false');


  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/');
  };

  const [searchItem, setSearchItem] = useState("");

  useState(() => {
    const storedValue = localStorage.getItem('QuickFilterItem');
    if (storedValue) {
      setSearchItem(storedValue);
    }
  });

  const [filterModel, setFilterModel] = React.useState({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    quickFilterValues: [],
  });
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({});
  const handelHiddenColumn = (newHidden) => {
    setColumnVisibilityModel(newHidden);
    localStorage.setItem('HiddenColumnsItem', JSON.stringify(newHidden));
  };

  useEffect(() => {
    const storedQuick = JSON.parse(localStorage.getItem('QuickFilterItemViewDisplay'));
    if (storedQuick) {
      const searchTerm = storedQuick.quickFilterValues?.join(' ') || '';
      setSearchTerm(searchTerm);
      setFilterModel(storedQuick);
    }
    const storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsItem'));
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns);
    }
  }, [searchItem]);

  const [open1, setOpen1] = React.useState(true);
  const toggleDrawer = () => {
    setOpen1(!open1);
  };

  const [value3, setValue3] = React.useState('1');

  const handleChange3 = (event, newValue) => {
    const changeValue = newValue;
    setValue3(changeValue);
  };

  const [search2, setSearch2] = useState('');
  const handleSearch2 = (e) => {
    const value = e.target.value;
    setSearch2(value);
  };

  const newArray = useMemo(() => {
    const lowerSearch2 = search2.toLowerCase().trim();
    return search2 !== '' ? lowMargin.filter((Item) =>
      (Item.itemName && Item.itemName.toLowerCase().includes(lowerSearch2)) ||
      (Item.itemDescription && Item.itemDescription.toLowerCase().includes(lowerSearch2)) ||
      (Item.itemUpc && (Item.itemUpc.newCode.toLowerCase().includes(lowerSearch2) || Item.itemUpc.itemNumber.toString().includes(lowerSearch2))) ||
      (Item.itemCategory && Item.itemCategory.toLowerCase().includes(lowerSearch2)) ||
      (Item.itemBrand && Item.itemBrand.toLowerCase().includes(lowerSearch2)) ||
      (Item.itemStore && Item.itemStore.toLowerCase().includes(lowerSearch2))
    ) : lowMargin;
  }, [lowMargin, search2]);

  const columns = [
    { field: 'ItemNumber', headerName: 'Item Number', width: 80 },
    { field: 'itemName', headerName: 'Item Name', width: open1 ? 200 : 350, renderCell: (params) => params.row.itemName.toUpperCase() },
    { field: 'itemCategory', headerName: 'Category', width: 100 },
    { field: 'itemBrand', headerName: 'itemBrand', width: 100 },
    { field: 'itemDescription', headerName: 'Description', width: open1 ? 200 : 300, renderCell: (params) => params.row.itemDescription.toUpperCase() },
    { field: 'itemSellingPrice', headerName: 'Price', width: 100, renderCell: (params) => `$${params.row.itemSellingPrice}` },
    { field: 'itemQuantity', headerName: 'Stock', width: 100, renderCell: (params) => `${params.row.itemQuantity + ' ' + params.row.unit?.toUpperCase()}` },
    {
      field: 'view', headerName: 'View', width: 50, renderCell: (params) => (
        <ViewTooltip title="View">
          <span>
            <IconButton disabled={ItemInfoV.length === 0 && user.data.role !== 'CEO'}>
              <NavLink to={`/ItemInformationVIew/${params.row._id}`} className='LinkName'>
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
            <IconButton disabled={ItemInfoU.length === 0 && user.data.role !== 'CEO'}>
              <NavLink to={`/ItemFormUpdate/${params.row._id}`} className='LinkName'>
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
          <span>
            <IconButton onClick={handleOpenAll} disabled={ItemInfoD.length === 0 && user.data.role !== 'CEO'}>
              <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
            </IconButton>
          </span>
        </DeleteTooltip>
      )
    },
  ];

  const columns2 = [
    { field: 'ItemNumber', headerName: 'Item Number', width: 80 },
    { field: 'typeItem', headerName: 'Type', width: 50 },
    { field: 'itemName', headerName: 'Item Name', width: open1 ? 200 : 350, renderCell: (params) => params.row.itemName.toUpperCase() },
    { field: 'itemCategory', headerName: 'Category', width: 100 },
    { field: 'itemBrand', headerName: 'itemBrand', width: 100 },
    { field: 'itemDescription', headerName: 'Description', width: open1 ? 200 : 300, renderCell: (params) => params.row.itemDescription.toUpperCase() },
    { field: 'itemSellingPrice', headerName: 'Price', width: 100, renderCell: (params) => { parseFloat(params.row.itemSellingPrice)?.toFixed(2) } },
    { field: 'itemQuantity', headerName: 'Stock', width: 100, renderCell: (params) => `${params.row.itemQuantity + ' ' + params.row.unit?.toUpperCase()}` },
    {
      field: 'view', headerName: 'View', width: 50, renderCell: (params) => (
        <ViewTooltip title="View">
          <span>
            <IconButton disabled={ItemInfoV.length === 0 && user.data.role !== 'CEO'}>
              <NavLink to={`/ItemInformationVIew/${params.row._id}`} className='LinkName'>
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
            <IconButton disabled={ItemInfoU.length === 0 && user.data.role !== 'CEO'}>
              <NavLink to={`/ItemFormUpdate/${params.row._id}`} className='LinkName'>
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
          <span>
            <IconButton onClick={handleOpenAll} disabled={ItemInfoD.length === 0 && user.data.role !== 'CEO'}>
              <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
            </IconButton>
          </span>
        </DeleteTooltip>
      )
    },
  ];

  const handleFilterModelChange = (newFilterModel) => {
    const searchTerm = newFilterModel.quickFilterValues?.join(' ') || '';
    setSearchTerm(searchTerm);
    setFilterModel(newFilterModel);
    localStorage.setItem('QuickFilterItemViewDisplay', JSON.stringify(newFilterModel));
  };

  const handleExportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Items');

    worksheet.columns = [
      { header: 'Item Number', key: 'ItemNumber', width: 20 },
      { header: 'Type', key: 'typeItem', width: 20 },
      { header: 'Item Name', key: 'itemName', width: 30 },
      { header: 'Category', key: 'itemCategory', width: 30 },
      { header: 'Brand', key: 'itemBrand', width: 20 },
      { header: 'Description', key: 'itemDescription', width: 30 },
      { header: 'Price', key: 'itemSellingPrice', width: 15 },
      { header: 'Stock', key: 'itemQuantity', width: 15 },
    ];

    itemToLoad.forEach(item => {
      worksheet.addRow(item);
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Items.xlsx';
    link.click();
  };

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
              Item
            </Typography>
            <NotificationVIewInfo />
            <MessageAdminView name={user.data.userName} role={user.data.role} />
            <IconButton color="inherit" onClick={handleLogout}>
              <Logout style={{ color: 'white' }} />
            </IconButton>
            <Typography variant="body2" color="inherit">
              {isOffline ? 'Offline' : 'Online'}
            </Typography>
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
            <SideMaintenance />
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
          <Container maxWidth="none" sx={{ mt: 1 }}>
            {
              loadingData ? <div >
                <div style={{ position: 'relative', top: '120px' }}>
                  <Loader />
                </div>
              </div> : (
                <div>


                  <TabContext value={value3}>
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
                        <Tab label="Item"
                          value="1"
                          sx={{
                            '&.Mui-selected': {
                              color: 'white',
                              backgroundColor: 'gray',
                              borderRadius: '5px'
                            }, '&:hover': {
                              color: 'gray',
                              bgcolor: 'white',
                              border: '1px solid gray',
                              borderRadius: '5px'
                            }
                          }} />
                        {
                          user.data.role === 'CEO' && (
                            <Tab
                              label="Low Margin Item"
                              value="2"
                              onClick={handleLoadMargin}
                              icon={<Badge color="secondary" badgeContent={lowMargin.length} style={{ marginTop: '-20px' }} />}
                              iconPosition='end'
                              sx={{
                                '&.Mui-selected': {
                                  color: 'white',
                                  backgroundColor: 'gray',
                                  borderRadius: '5px'
                                }, '&:hover': {
                                  color: 'gray',
                                  bgcolor: 'white',
                                  border: '1px solid gray',
                                  borderRadius: '5px'
                                }
                              }} />
                          )
                        }
                      </TabList>
                    </Box>
                    <TabPanel value='1'>
                      <Box>
                        <Box sx={{ height: 580, width: '100%', marginTop: '-50px' }}>
                          {item.length > 0 ? (
                            <section style={{ position: 'relative', float: 'left', margin: '10px' }}>
                              {
                                selectedRows.length > 1 && selectedRows.length < item.length && (
                                  <button disabled={user.data.role !== 'CEO'} onClick={handleOpenAll} className='btnCustomer2'>Delete multiple</button>
                                )
                              }
                              {
                                selectedRows.length === item.length ? (
                                  <button onClick={handleOpenAll} disabled={user.data.role !== 'CEO'} className='btnCustomer2'>Delete all</button>
                                ) : ''
                              }
                            </section>
                          )
                            : ''}
                          <div>
                          </div>
                          <section style={{ position: 'relative', float: 'right', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <button onClick={handleExportToExcel} className='btnCustomer'>Export to Excel</button>
                            <ViewTooltip>
                              <span>
                                <IconButton disabled={ItemInfoC.length === 0 && user.data.role !== 'CEO'}>
                                  <NavLink to={'/ItemForm'} className='LinkName'>
                                    <span className='btnCustomerAdding'>
                                      <Add />
                                    </span>
                                  </NavLink>
                                </IconButton>
                              </span>
                            </ViewTooltip>
                            <button onClick={handleRefreshSearch} className='btnCustomer2'>Refresh Search</button>
                          </section>
                          <br />
                          <br />
                          <DataGrid
                            rows={item}
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
                            getRowClassName={(params) => {
                              return newPurchase.includes(params.row._id) ? 'new-Purchase' : ''
                            }}
                            onRowSelectionModelChange={(newSelection) => setSelectedRows(newSelection)}

                            checkboxSelection
                            disableColumnFilter
                            disableDensitySelector
                            rowSelectionModel={selectedRows}
                            filterModel={filterModel}
                            onFilterModelChange={handleFilterModelChange}
                            columnVisibilityModel={columnVisibilityModel}
                            onColumnVisibilityModelChange={handelHiddenColumn}
                            sx={{ width: '100%', backgroundColor: 'white', padding: '10px' }}
                          />

                        </Box>
                        <Pagination count={totalPage} page={page + 1} onChange={handlePageChange} color="primary" />
                      </Box>
                    </TabPanel>
                    <TabPanel value="2">
                      {loadingData1 ? (
                        <div style={{ position: 'relative', top: '120px' }}>
                          <Loader />
                        </div>
                      ) : (
                        <Box sx={{ height: 570, width: '100%' }}>
                          <section style={{ position: 'relative', float: 'right', padding: '10px', marginTop: '-60px' }}>
                            <TextField label="Search" id="search2" value={search2} variant="standard" onChange={handleSearch2} />
                          </section>
                          <DataGrid
                            rows={newArray}
                            columns={columns2}
                            pageSize={10}
                            rowsPerPageOptions={[10]}
                            checkboxSelection
                            disableSelectionOnClick
                            onSelectionModelChange={(newSelection) => {
                              setSelectedRows(newSelection);
                            }}
                            components={{
                              Toolbar: GridToolbar,
                            }}
                            filterModel={filterModel}
                            onFilterModelChange={handleFilterModelChange}
                            columnVisibilityModel={columnVisibilityModel}
                            onColumnVisibilityModelChange={handelHiddenColumn}
                          />
                        </Box>
                      )}
                    </TabPanel>
                  </TabContext>

                </div>
              )
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
              <button className='btnCustomer2' onClick={handleOpenReasonDelete}>
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
              selectedRows.length > 1 && selectedRows.length < item.length && (
                <p><span className="txt2" style={{ color: 'red' }}>Note:</span> All selected rows will be deleted</p>
              )
            }
            {
              selectedRows.length === item.length && (
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
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <div>
            {loading ? (<Loader />
            ) : (
              <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                <p><CheckCircleIcon style={{ color: 'green', height: '40px', width: '40px' }} /></p>
                {
                  synced === 'true' ?
                    <h2> Data Synchronized Successfully</h2> :
                    <h2> Data Successfully Deleted</h2>
                }
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
  );
}

export default ItemViewAdmin;