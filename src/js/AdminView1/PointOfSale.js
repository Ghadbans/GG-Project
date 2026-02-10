import React, { useEffect, useMemo, useState } from 'react';
import './view.css';
import SideShop from '../component/SideShop';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './PageView/Chartview.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink, json, useNavigate } from 'react-router-dom';
import { Table, Modal, IconButton, styled, TableBody, TableCell, TableHead, TableRow, Checkbox, TableContainer, Paper, Typography, Box, Autocomplete, TextField, Backdrop, Grid, Card, CardContent, CardMedia, Pagination, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
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
import { Close } from '@mui/icons-material';
import { Add, MailOutline } from '@mui/icons-material';
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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
function PointOfSale() {
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
        setGrantAccess(offLineCustomer1);
      }
    }
    fetchNumber()
  }, [user])
  const customerInfoC = grantAccess.filter((row) => row.moduleName === "Customer" && row.access.createM === true);
  const customerInfoV = grantAccess.filter((row) => row.moduleName === "Customer" && row.access.viewM === true);
  const customerInfoU = grantAccess.filter((row) => row.moduleName === "Customer" && row.access.editM === true);
  const customerInfoD = grantAccess.filter((row) => row.moduleName === "Customer" && row.access.deleteM === true);
  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }
  const [open1, setOpen1] = React.useState(true);
  const toggleDrawer = () => {
    setOpen1(!open1);
  };
  const category = [
    { name: "HA" },
    { name: "ELECTRICITY" },
    { name: "SOLAR SYSTEM" },
    { name: "IT" },
    { name: "PLUMBING" },
    { name: "ELECTRONIC" },
    { name: "FENCE ELECTRIC" },
    { name: "ACCESSORY" },
    { name: "WELDING" },
    { name: "GENERATOR" },
    { name: "TOOLS" },
    { name: "WELDING" },
    { name: "CONSTRUCTION" },
    { name: "OTHERS" },
  ]
  const [item, SetItems] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);
  const [totalPages, setTotalPages] = useState(0);
  const [loadingData, setLoadingData] = useState(true);
  const [rate, setRate] = useState(0);

  const apiUrl = 'https://gg-project-production.up.railway.app/endpoint/item';

  useEffect(() => {
    const fetchRate = async () => {
      try {
        if (navigator.onLine) {
          const resRate = await axios.get('https://gg-project-production.up.railway.app/endpoint/rate');
          resRate.data.data.forEach((row) => setRate(row.rate));
        } else {
          const offLineRate = await db.rateSchema.toArray();
          offLineRate.forEach((row) => setRate(row.rate));
        }
      } catch (error) {
        console.error('Error fetching rate:', error);
      }
    };
    fetchRate();
  }, []);

  const fetchItems = async (page, searchTerm) => {
    setLoadingData(true);
    if (navigator.onLine) {
      try {
        const res = await axios.get(`https://gg-project-production.up.railway.app/endpoint/item-shop?page=${page}&limit=30&search=${encodeURIComponent(searchTerm.trim())}`);
        setTotalPages(res.data.totalPages);
        SetItems(res.data.items); // Server already filters for "Goods" and sorts by newest
        setLoadingData(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadingData(false);
      }
    } else {
      const offLineItems = await db.itemSchema.toArray();
      const lowerSearch = searchTerm.toLowerCase().trim();
      const filteredItems = lowerSearch !== ''
        ? offLineItems.filter((row) =>
          row.typeItem === "Goods" && (
            row.itemName.toLowerCase().includes(lowerSearch) ||
            (row.itemDescription && row.itemDescription.toLowerCase().includes(lowerSearch)) ||
            (row.itemBrand && row.itemBrand.toLowerCase().includes(lowerSearch)) ||
            (row.itemUpc && (row.itemUpc.newCode.toLowerCase().includes(lowerSearch) || row.itemUpc.itemNumber.toString().includes(lowerSearch)))
          )
        )
        : offLineItems.filter((row) => row.typeItem === "Goods");

      SetItems(filteredItems.reverse());
      setLoadingData(false);
    }
  };

  useEffect(() => {
    fetchItems(page, debouncedSearch);
  }, [page, debouncedSearch]);

  const handleRefreshSearch = () => {
    fetchItems(page, debouncedSearch);
  };

  const handlePageChange = (e, newPage) => {
    setPage(newPage);
  }
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1)
  }
  const [categoryValue, setCategoryValue] = useState('');

  const handleCategory = (category) => {
    setCategoryValue(category)
  }

  const [selectedItem, setSelectedItem] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (idInfo) => {
    setSelectedItem(item.filter((row) => row._id === idInfo)[0]);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedItem(null);
  };

  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleOpenCart = () => {
    navigate('/ShopPosForm', { state: { cart } });
  };

  const handleCloseCart = () => {
    setOpenCart(false);
  };

  const handleRemoveFromCart = (itemId) => {
    setCart(cart.filter(item => item._id !== itemId));
  };

  const handleCheckout = () => {
    navigate('/ShopPosForm', { state: { cart } });
    setOpenCart(false);
  };

  return (
    <div>
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
              POS Display
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
            <SideShop />
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
          <Container maxWidth="none" sx={{ mt: 2 }}>
            {
              loadingData ?
                <div style={{ position: 'relative', top: '120px' }}>
                  <Loader />
                </div> :
                <div>
                  <Grid container spacing={2} component={Paper} sx={{ marginTop: '10px' }}>
                    <Grid item xs={12}>
                      <TextField
                        label="Search"
                        variant='outlined'
                        value={search}
                        onChange={handleSearchChange}
                      />
                      <button onClick={handleRefreshSearch} className='btnCustomer2'>Refresh Search</button>
                    </Grid>
                    <Grid item xs={12}>
                      <div style={{ height: '540px', overflow: 'hidden', overflowY: 'scroll', padding: '10px' }}>
                        <Grid container spacing={2}>
                          {item?.map((row) => (
                            <Grid item xs={4} key={row._id}>
                              <Card>
                                <CardMedia
                                  component="img"
                                  image={`data:${row.contentType !== undefined ? row.contentType : ''}; base64,${row.data !== undefined ? row.data : ''}`}
                                  sx={{ height: '200px', cursor: 'pointer' }}
                                  onClick={() => handleOpenModal(row._id)}
                                />
                                <CardContent>
                                  <Typography variant="h6" component="div" style={{ display: 'flex', justifyContent: 'space-between' }}><span><span data-prefix >FC </span>{(row.itemSellingPrice * rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ($ {row.itemSellingPrice?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')})</span> <span>{row.itemUpc.newCode + '-0' + row.itemUpc.itemNumber}</span></Typography>
                                  <Typography variant="h6" component="div" style={{ display: 'flex', justifyContent: 'space-between' }}><span>{row.itemName.toUpperCase()}</span></Typography>
                                  <Typography variant="body2" color="text.secondary">Brand: {row.itemBrand.toUpperCase()} | Dimension: {row.itemDimension} | weight: {row.weight}</Typography>
                                  <Typography variant="body2" color="text.secondary">Description:{row.itemDescription.toUpperCase()}</Typography>
                                  {row.itemQuantity > 0 && (
                                    <Button variant="contained" color="primary" onClick={() => handleAddToCart(row)}>
                                      Add to Cart
                                    </Button>
                                  )}
                                </CardContent>
                              </Card>
                            </Grid>
                          ))
                          } </Grid>

                      </div>
                      <div style={{ width: '100%', justifyContent: 'center', textAlign: 'center', padding: '5px' }}>
                        <Pagination
                          count={totalPages}
                          page={page}
                          onChange={handlePageChange}
                          color='primary'
                        />
                      </div>

                    </Grid>
                  </Grid>
                </div>
            }


          </Container>
        </Box>
      </Box>
      {selectedItem && (
        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle>{selectedItem.itemName.toUpperCase()}</DialogTitle>
          <DialogContent>
            <Box display="flex" justifyContent="center" alignItems="center">
              <CardMedia
                component="img"
                image={`data:${selectedItem.contentType !== undefined ? selectedItem.contentType : ''}; base64,${selectedItem.data !== undefined ? selectedItem.data : ''}`}
                sx={{ height: '100%', width: '80%', marginBottom: '20px' }}
              />
            </Box>
            <Typography variant="h6">
              Price: FC {(selectedItem.itemSellingPrice * rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ($ {selectedItem.itemSellingPrice?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')})
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Brand: {selectedItem.itemBrand.toUpperCase()} | Dimension: {selectedItem.itemDimension} | weight: {selectedItem.weight}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description: {selectedItem.itemDescription.toUpperCase()}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
      <Dialog open={openCart} onClose={handleCloseCart}>
        <DialogTitle>Shopping Cart</DialogTitle>
        <DialogContent>
          {cart.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
              Your cart is empty.
            </Typography>
          ) : (
            cart.map((item) => (
              <Box key={item._id} display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="body2" color="text.secondary">
                  {item.itemName.toUpperCase()} - FC {(item.itemSellingPrice * rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ($ {item.itemSellingPrice?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')})
                </Typography>
                <Button variant="contained" color="secondary" onClick={() => handleRemoveFromCart(item._id)}>
                  Remove
                </Button>
              </Box>
            ))
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCart} color="primary">
            Close
          </Button>
          <Button onClick={handleCheckout} color="primary" disabled={cart.length === 0}>
            Checkout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default PointOfSale
