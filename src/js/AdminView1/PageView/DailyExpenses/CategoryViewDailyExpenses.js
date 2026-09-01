import React, { useEffect, useState } from 'react';
import SidebarDash from '../../../component/SidebarDash';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import {   MenuItem, Grid, IconButton, Table, TableBody, TableCell, TableRow, TableHead, Paper, TableContainer, TextField, FormControl, InputLabel, Select, Typography, Autocomplete, styled, Modal, Backdrop, Fade, Box, OutlinedInput, InputAdornment, Checkbox, Tabs, Tab, Card, CardContent, Divider  } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import axios from 'axios';
import { ENDPOINT_URL } from '../../../apiConfig';
import { Add, ArrowUpwardOutlined, ExitToApp, LocalPrintshop, RestartAlt } from '@mui/icons-material';
import { v4 } from 'uuid';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import ArrowBack from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Loader from '../../../component/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '../../../component/NetworkLogoutIcon';
import { Close } from '@mui/icons-material';
import CurrencyExchange from '@mui/icons-material/CurrencyExchange';
import MonetizationOn from '@mui/icons-material/MonetizationOn';
import { DataGrid } from '@mui/x-data-grid';
import CategoryChart from './CategoryChart';
import CategoryPrintStatement from './CategoryPrintStatement';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import EditIcon from '@mui/icons-material/Edit';
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import { useReactToPrint } from 'react-to-print';
import { Button, Chip } from '@mui/material';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);


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
const BlackTooltip = styled(({ className, ...props }) => (
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
function CategoryViewDailyExpenses() {
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
          dispatch(setUser({ userName: Name, role: Role }));
        } catch (error) {
          console.error('Error fetching data:', error);
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
  const printStatementRef = useRef();
  const handlePrintStatement = useReactToPrint({
    content: () => printStatementRef.current,
    documentTitle: `Category_Expenses_Statement_${newCategory || 'Category'}`,
  });

  const [categories, setCategories] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [expensesId, setExpensesID] = useState('');

  // Date Filters
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedMonthLabel, setSelectedMonthLabel] = useState('');

  useEffect(() => {
    const result = localStorage.getItem('CategoryTabId');
    if (result) {
      setExpensesID(result);
    }
  }, []);

  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const [expenseResponse, categoryResponse] = await Promise.all([
          axios.get(`${ENDPOINT_URL}/expense?summary=true`),
          axios.get(`${ENDPOINT_URL}/expensesCategory`)
        ]);
        setExpenses((expenseResponse.data?.data || []).reverse());
        const cats = categoryResponse.data?.data || [];
        setCategories(cats);

        if (!expensesId && cats.length > 0) {
          const savedId = localStorage.getItem('CategoryTabId') || cats[0]._id;
          setExpensesID(savedId);
        }
        setLoadingData(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadingData(false);
      }
    };
    fetchCategory();
  }, []);

  const currentCategoryObj = categories.find((row) => row._id === expensesId);
  const newCategory = currentCategoryObj ? currentCategoryObj.expensesCategory : '';

  const expensesFiltered = expenses.filter((row) => row.expenseCategory?._id === expensesId);

  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    const totalAmount1 = expensesFiltered ? expensesFiltered.reduce((sum, row) => sum + parseFloat(row.total || 0), 0) : 0;
    const result = Math.round(totalAmount1 * 100) / 100;
    setTotalAmount(result);
  }, [expensesFiltered]);

  const [show3, setShow3] = useState(1);
  const handleShow3 = (e) => {
    setShow3(e);
  };

  const [value, setValue] = useState(() => {
    const result = localStorage.getItem('CategoryTab');
    return result !== null ? parseInt(result) : 0;
  });
  const [value2, setValue2] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const handleChange2 = (e, newValue) => {
    setValue2(newValue);
  };

  const handleChangeIdIndex = (index, id) => {
    setValue(index);
    setExpensesID(id);
    setStartDate(null);
    setEndDate(null);
    setSelectedMonthLabel('');
    localStorage.setItem('CategoryTab', index);
    localStorage.setItem('CategoryTabId', id);
  };

  const handleChangeIdIndex2 = (index, id) => {
    const catIndex = categories.findIndex((row) => row._id === id);
    setValue(catIndex >= 0 ? catIndex : 0);
    setValue2(index);
    setExpensesID(id);
    setStartDate(null);
    setEndDate(null);
    setSelectedMonthLabel('');
    localStorage.setItem('CategoryTab', catIndex >= 0 ? catIndex : 0);
    localStorage.setItem('CategoryTabId', id);
  };

  const [search2, setSearch2] = useState('');
  const handleSearch2 = (e) => {
    const val = e.target.value;
    setSearch2(val);
  };

  const newArray2 = search2 !== '' ? categories.filter((Item) =>
    Item.expensesCategory && Item.expensesCategory.toLowerCase().includes(search2.toLowerCase())
  ) : categories;

  const [search, setSearch] = useState('');

  // Comprehensive Filter: Search + Date Range
  const newArray = expensesFiltered.filter((row) => {
    const searchLower = search.toLowerCase();
    const expNumStr = `D-0${row.expenseNumber || ''} D-${String(row.expenseNumber || '').padStart(6, '0')}`;
    const matchesSearch = !search ? true : (
      (row.accountName && row.accountName.toLowerCase().includes(searchLower)) ||
      (row.accountNameInfo?.name && row.accountNameInfo.name.toLowerCase().includes(searchLower)) ||
      (row.description && row.description.toLowerCase().includes(searchLower)) ||
      expNumStr.toLowerCase().includes(searchLower) ||
      dayjs(row.expenseDate).format('DD/MM/YYYY').includes(search) ||
      (Array.isArray(row.employeeName) && row.employeeName.some((Item) =>
        Item.employee && Item.employee.toLowerCase().includes(searchLower)
      ))
    );

    const rowDate = dayjs(row.expenseDate);
    const matchesStartDate = !startDate ? true : (rowDate.isAfter(dayjs(startDate).startOf('day')) || rowDate.isSame(dayjs(startDate).startOf('day'), 'day'));
    const matchesEndDate = !endDate ? true : (rowDate.isBefore(dayjs(endDate).endOf('day')) || rowDate.isSame(dayjs(endDate).endOf('day'), 'day'));

    return matchesSearch && matchesStartDate && matchesEndDate;
  });

  const [newTotal, setNewTotal] = useState(0);
  useEffect(() => {
    let total = 0;
    newArray.forEach((item) => {
      if (item.total) {
        total += parseFloat(item.total);
      }
    });
    setNewTotal(Math.round(total * 100) / 100);
  }, [newArray]);

  const [value3, setValue3] = React.useState(() => {
    return localStorage.getItem('TabCategoryValue') || '1';
  });

  const handleChange3 = (event, newValue) => {
    setValue3(newValue);
    localStorage.setItem('TabCategoryValue', newValue);
  };

  // Callback when a user clicks a Month card in Overview
  const handleSelectMonth = (year, monthIndex, monthName) => {
    const start = dayjs(`${year}-${String(monthIndex + 1).padStart(2, '0')}-01`).startOf('month');
    const end = dayjs(`${year}-${String(monthIndex + 1).padStart(2, '0')}-01`).endOf('month');
    setStartDate(start);
    setEndDate(end);
    setSelectedMonthLabel(`${monthName} ${year}`);
    setValue3('2'); // Switch to E-Table
    localStorage.setItem('TabCategoryValue', '2');
  };

  const handleClearFilters = () => {
    setStartDate(null);
    setEndDate(null);
    setSelectedMonthLabel('');
    setSearch('');
  };
  const [sideBar, setSideBar] = React.useState(true);
  const toggleDrawer = () => {
    setSideBar(!sideBar);
  };
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
              Expenses Category Information
            </Typography>
            <IconButton onClick={() => navigate('/DailyExpenses')}>
              <ArrowBack style={{ color: 'white' }} />
            </IconButton>
            <NotificationVIewInfo />
            <MessageAdminView name={user.data.userName} role={user.data.role} />
            <Typography sx={{ marginLeft: '10px', marginRight: '10px' }}>{user.data.userName}</Typography>
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
          <Container maxWidth="none" sx={{ mt: 2 }} >
            {
              loadingData ? <div >
                <div style={{ position: 'relative', top: '120px' }}>
                  <Loader />
                </div>
              </div> : (
                <div>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      {show3 === 1 ? (
                        <div className='itemInfoContainer'>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', padding: '5px', alignItems: 'center' }}>
                              <Checkbox />
                              <Typography variant='h6'>All Category</Typography>
                            </div>
                            <div style={{ padding: '20px' }}>
                              <p className='btnCustomer1' onClick={() => handleShow3(2)}>Filter</p>
                            </div>
                          </div>
                          <div style={{ height: 'calc(100vh - 170px)', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
                            <Tabs
                              value={value}
                              onChange={handleChange}
                              orientation="vertical"
                              sx={{
                                '& .MuiTabs-indicator': {
                                  backgroundColor: 'white',
                                  height: '0px'
                                }
                              }}
                            >
                              {categories?.map((row, index) => (
                                <Tab
                                  key={index}
                                  label={row.expensesCategory}
                                  onClick={() => handleChangeIdIndex(index, row._id)}
                                  sx={{
                                    '&.Mui-selected': {
                                      color: 'white',
                                      backgroundColor: '#30368a',
                                      borderRadius: '10px'
                                    }
                                  }}
                                />
                              ))}
                            </Tabs>
                          </div>
                        </div>)
                        : ''
                      }
                      {show3 === 2 ?
                        (<div className='itemInfoContainer'>
                          <Grid container style={{ alignItems: 'center', padding: '10px' }} spacing={3}>
                            <Grid item xs={10}>
                              <TextField
                                label='search'
                                id='search'
                                value={search2}
                                variant="standard"
                                onChange={handleSearch2}
                              />
                            </Grid>
                            <Grid item xs={2}>
                              <ViewTooltip title="Close" placement='bottom'>
                                <IconButton onClick={() => handleShow3(1)} style={{ position: 'relative', float: 'right' }}>
                                  <Close style={{ color: '#30368a' }} />
                                </IconButton>
                              </ViewTooltip>
                            </Grid>
                          </Grid>

                          <div style={{ height: '565px', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
                            <Tabs
                              value={value2}
                              onChange={handleChange2}
                              orientation="vertical"
                              sx={{
                                '& .MuiTabs-indicator': {
                                  backgroundColor: '#30368a'
                                }
                              }}
                            >
                              {newArray2?.map((row, index) => (
                                <Tab
                                  key={index}
                                  label={row.expensesCategory}
                                  onClick={() => handleChangeIdIndex2(index, row._id)}
                                  sx={{
                                    '&.Mui-selected': {
                                      color: '#30368a'
                                    }
                                  }}
                                />
                              ))}
                            </Tabs>
                          </div>
                        </div>)
                        : ''
                      }
                    </Grid>
                    <Grid item xs={9}>
                      <div className='itemInfoContainer2'>
                        <div style={{ width: '100%', background: 'white', borderRadius: '8px' }}>
                          <div>
                            <div className='itemInfoContainer2Head'>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                <Typography variant='h5' sx={{ fontWeight: 'bold', color: '#30368a' }}>
                                  {newCategory ? newCategory : 'Choose Category'}
                                </Typography>
                                {selectedMonthLabel && (
                                  <Chip
                                    label={`Filter: ${selectedMonthLabel}`}
                                    onDelete={handleClearFilters}
                                    color="primary"
                                    size="small"
                                    sx={{ backgroundColor: '#30368a', fontWeight: 'bold' }}
                                  />
                                )}
                              </div>
                            </div>
                            <br />

                            <Box sx={{ width: '100%' }}>
                              <TabContext value={value3}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                  <TabList
                                    onChange={handleChange3}
                                    aria-label="Category tabs"
                                    sx={{
                                      '& .MuiTabs-indicator': {
                                        backgroundColor: 'white',
                                        height: '0px'
                                      }
                                    }}
                                  >
                                    <Tab
                                      label="Overview"
                                      value="1"
                                      sx={{
                                        '&.Mui-selected': {
                                          color: 'white',
                                          backgroundColor: '#30368a',
                                          borderRadius: '10px'
                                        },
                                        '&:hover': {
                                          color: '#30368a',
                                          bgcolor: 'white',
                                          border: '1px solid #30368a',
                                          borderRadius: '10px'
                                        }
                                      }}
                                    />
                                    <Tab
                                      label={`E-Table (${newArray.length})`}
                                      value="2"
                                      sx={{
                                        '&.Mui-selected': {
                                          color: 'white',
                                          backgroundColor: '#30368a',
                                          borderRadius: '10px'
                                        },
                                        '&:hover': {
                                          color: '#30368a',
                                          bgcolor: 'white',
                                          border: '1px solid #30368a',
                                          borderRadius: '10px'
                                        }
                                      }}
                                    />
                                  </TabList>
                                </Box>

                                {/* Tab 1: Overview */}
                                <TabPanel value="1" sx={{ height: 'calc(100vh - 200px)', overflow: 'hidden', overflowY: 'auto' }}>
                                  <div>
                                    {expensesId ? (
                                      <div>
                                        <div style={{ padding: '10px 0' }}>
                                          <Card sx={{ backgroundColor: '#30368a', color: 'white', borderRadius: '12px' }}>
                                            <CardContent sx={{ display: "flex", justifyContent: 'space-around', alignItems: 'center', py: 2 }}>
                                              <div>
                                                <Typography variant="body2" sx={{ opacity: 0.8 }}>CATEGORY</Typography>
                                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{newCategory}</Typography>
                                              </div>
                                              <div>
                                                <Typography variant="body2" sx={{ opacity: 0.8 }}>ALL-TIME TRANSACTIONS</Typography>
                                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{expensesFiltered.length}</Typography>
                                              </div>
                                              <div>
                                                <Typography variant="body2" sx={{ opacity: 0.8 }}>ALL-TIME TOTAL</Typography>
                                                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                                                  <span>$</span> {totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                </Typography>
                                              </div>
                                            </CardContent>
                                          </Card>
                                          <br />
                                        </div>

                                        <Card sx={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                                          <CardContent>
                                            <CategoryChart onChangeId={expensesId} onSelectMonth={handleSelectMonth} />
                                          </CardContent>
                                        </Card>
                                      </div>
                                    ) : ''}
                                  </div>
                                </TabPanel>

                                {/* Tab 2: E-Table */}
                                <TabPanel value="2" sx={{ height: 'calc(100vh - 200px)', overflow: 'hidden', overflowY: 'auto', p: 1 }}>
                                  <div>
                                    {expensesId ? (
                                      <Box>
                                        {/* Filter Bar & Controls */}
                                        <Paper elevation={0} sx={{ p: 2, mb: 2, border: '1px solid #e2e8f0', borderRadius: '10px', backgroundColor: '#f8fafc' }}>
                                          <Grid container spacing={2} alignItems="center">
                                            {/* Date Pickers */}
                                            <Grid item xs={12} sm={3}>
                                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                  label='From Date'
                                                  value={startDate}
                                                  onChange={(date) => {
                                                    setStartDate(date);
                                                    setSelectedMonthLabel('');
                                                  }}
                                                  format='DD/MM/YYYY'
                                                  slotProps={{ textField: { size: 'small', fullWidth: true, sx: { backgroundColor: 'white' } } }}
                                                />
                                              </LocalizationProvider>
                                            </Grid>

                                            <Grid item xs={12} sm={3}>
                                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                  label='To Date'
                                                  value={endDate}
                                                  onChange={(date) => {
                                                    setEndDate(date);
                                                    setSelectedMonthLabel('');
                                                  }}
                                                  format='DD/MM/YYYY'
                                                  slotProps={{ textField: { size: 'small', fullWidth: true, sx: { backgroundColor: 'white' } } }}
                                                />
                                              </LocalizationProvider>
                                            </Grid>

                                            {/* Text Search */}
                                            <Grid item xs={12} sm={3}>
                                              <TextField
                                                label='Search text, description, account...'
                                                size='small'
                                                value={search}
                                                onChange={(e) => setSearch(e.target.value)}
                                                fullWidth
                                                sx={{ backgroundColor: 'white' }}
                                              />
                                            </Grid>

                                            {/* Action Buttons */}
                                            <Grid item xs={12} sm={3} sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                                              {(startDate || endDate || search || selectedMonthLabel) && (
                                                <Button
                                                  variant="outlined"
                                                  color="inherit"
                                                  size="small"
                                                  onClick={handleClearFilters}
                                                  startIcon={<RestartAlt />}
                                                  sx={{ textTransform: 'none', height: 40 }}
                                                >
                                                  Reset
                                                </Button>
                                              )}
                                              <Button
                                                variant="contained"
                                                size="small"
                                                onClick={handlePrintStatement}
                                                startIcon={<LocalPrintshop />}
                                                sx={{
                                                  backgroundColor: '#30368a',
                                                  '&:hover': { backgroundColor: '#202a5a' },
                                                  textTransform: 'none',
                                                  fontWeight: 'bold',
                                                  height: 40,
                                                  px: 2
                                                }}
                                              >
                                                Print Statement
                                              </Button>
                                            </Grid>
                                          </Grid>
                                        </Paper>

                                        {/* Total Summary Banner */}
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5, px: 1 }}>
                                          <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: '#1e293b' }}>
                                            Filtered Total : <span style={{ color: '#30368a' }}>$ {newTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                          </Typography>
                                          <Typography variant="body2" sx={{ color: '#64748b' }}>
                                            Showing {newArray.length} transaction{newArray.length === 1 ? '' : 's'}
                                          </Typography>
                                        </Box>

                                        {/* E-Table */}
                                        <TableContainer component={Paper} sx={{ borderRadius: '10px', border: '1px solid #e2e8f0', boxShadow: 'none' }}>
                                          <Table aria-label="expenses statement table" stickyHeader size="small">
                                            <TableHead>
                                              <TableRow>
                                                <TableCell sx={{ backgroundColor: '#30368a', color: 'white', fontWeight: 'bold' }}>#</TableCell>
                                                <TableCell sx={{ backgroundColor: '#30368a', color: 'white', fontWeight: 'bold' }}>Date</TableCell>
                                                <TableCell sx={{ backgroundColor: '#30368a', color: 'white', fontWeight: 'bold' }}>Account</TableCell>
                                                <TableCell sx={{ backgroundColor: '#30368a', color: 'white', fontWeight: 'bold' }}>Description / Account Name</TableCell>
                                                <TableCell sx={{ backgroundColor: '#30368a', color: 'white', fontWeight: 'bold', textAlign: 'right' }}>Amount (FC)</TableCell>
                                                <TableCell sx={{ backgroundColor: '#30368a', color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Rate</TableCell>
                                                <TableCell sx={{ backgroundColor: '#30368a', color: 'white', fontWeight: 'bold', textAlign: 'right' }}>Total ($)</TableCell>
                                                <TableCell sx={{ backgroundColor: '#30368a', color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Action</TableCell>
                                              </TableRow>
                                            </TableHead>
                                            <TableBody>
                                              {newArray && newArray.length > 0 ? (
                                                newArray.map((row) => (
                                                  <TableRow key={row._id} hover sx={{ '&:nth-of-type(even)': { backgroundColor: '#f8fafc' } }}>
                                                    <TableCell sx={{ fontWeight: 'bold' }}>
                                                      D-{String(row.expenseNumber || 0).padStart(6, '0')}
                                                    </TableCell>
                                                    <TableCell>
                                                      {dayjs(row.expenseDate).format('DD/MM/YYYY')}
                                                    </TableCell>
                                                    <TableCell>
                                                      <Chip
                                                        size="small"
                                                        label={row.accountName || 'N/A'}
                                                        variant="outlined"
                                                        sx={{
                                                          fontSize: '11px',
                                                          borderColor: row.accountName === 'Project' ? '#0284c7' : row.accountName === 'Employee' ? '#16a34a' : '#64748b',
                                                          color: row.accountName === 'Project' ? '#0284c7' : row.accountName === 'Employee' ? '#16a34a' : '#64748b'
                                                        }}
                                                      />
                                                    </TableCell>
                                                    <TableCell>
                                                      {row.accountName === 'Office' && (row.description || '-')}
                                                      {row.accountName === 'Receivables' && (row.description || '-')}
                                                      {row.accountName === 'Home' && (row.description || '-')}
                                                      {row.accountName === 'Project' && (
                                                        <div>
                                                          <Typography variant="body2" sx={{ fontWeight: '500' }}>
                                                            {row.accountNameInfo?.name || '-'}
                                                          </Typography>
                                                          {row.description && (
                                                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                                              {row.description}
                                                            </Typography>
                                                          )}
                                                        </div>
                                                      )}
                                                      {row.accountName === 'Employee' && (
                                                        <div>
                                                          {Array.isArray(row.employeeName) && row.employeeName.map((Item, i) => (
                                                            <Typography key={i} variant="body2" sx={{ fontSize: '12px' }}>
                                                              <strong>{Item.employee}</strong> &bull; FC {(Item.amount || 0).toLocaleString()} &bull; $ {(Item.total || 0).toFixed(2)}
                                                            </Typography>
                                                          ))}
                                                          {row.description && (
                                                            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                                                              {row.description}
                                                            </Typography>
                                                          )}
                                                        </div>
                                                      )}
                                                    </TableCell>
                                                    <TableCell sx={{ textAlign: 'right' }}>
                                                      {row.amount ? `FC ${Number(row.amount).toLocaleString()}` : '-'}
                                                    </TableCell>
                                                    <TableCell sx={{ textAlign: 'center' }}>
                                                      {row.rate || '-'}
                                                    </TableCell>
                                                    <TableCell sx={{ textAlign: 'right', fontWeight: 'bold', color: '#0f172a' }}>
                                                      $ {Number(row.total || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                    </TableCell>
                                                    <TableCell sx={{ textAlign: 'center' }}>
                                                      <EditTooltip title="Edit Expense">
                                                        <span>
                                                          <IconButton size="small">
                                                            <NavLink to={`/DailyExpenseUpdate/${row._id}`} className='LinkName'>
                                                              <EditIcon fontSize="small" style={{ color: 'gray' }} />
                                                            </NavLink>
                                                          </IconButton>
                                                        </span>
                                                      </EditTooltip>
                                                    </TableCell>
                                                  </TableRow>
                                                ))
                                              ) : (
                                                <TableRow>
                                                  <TableCell colSpan={8} align="center" sx={{ py: 3, color: '#64748b' }}>
                                                    No transactions match the selected date range or search criteria.
                                                  </TableCell>
                                                </TableRow>
                                              )}
                                            </TableBody>
                                          </Table>
                                        </TableContainer>

                                        {/* Hidden Printable Statement */}
                                        <div style={{ display: 'none' }}>
                                          <CategoryPrintStatement
                                            ref={printStatementRef}
                                            categoryName={newCategory}
                                            startDate={startDate}
                                            endDate={endDate}
                                            expensesList={newArray}
                                            totalUSD={newTotal}
                                            branchId="HQ"
                                          />
                                        </div>
                                      </Box>
                                    ) : ''}
                                  </div>
                                </TabPanel>
                              </TabContext>
                            </Box>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              )
            }
          </Container>
        </Box>
      </Box>
    </div>
  )
}

export default CategoryViewDailyExpenses
