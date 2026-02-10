import React, { useEffect, useState } from 'react'
import '../Chartview.css'
import SideMaintenance from '../../../component/SideMaintenance';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { MenuItem, Grid, IconButton, Paper, TextField, FormControl, InputLabel, Select, Typography, styled, FormLabel, RadioGroup, FormControlLabel, Radio, Input, OutlinedInput, InputAdornment, Modal, Backdrop, Fade, Box, Autocomplete, Button, Menu, Divider, Tab, Card, CardContent, Table, TableBody, TableHead, TableCell, TableRow, TableContainer, Collapse } from '@mui/material'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '@mui/icons-material/Logout';
import { v4 } from 'uuid';
import Loader from '../../../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { KeyboardArrowUp, RemoveCircleOutline, Sync } from '@mui/icons-material';
import dayjs from 'dayjs';
import Close from '@mui/icons-material/Close';
import ArrowBack from '@mui/icons-material/ArrowBack';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import MessageAdminView from '../../MessageAdminView';
import { FileCopy } from '@mui/icons-material';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import db from '../../../dexieDb';
import DeleteIcon from '@mui/icons-material/Delete';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import SupplierName from './SupplierName';

const palette = ['blue', 'red', 'orange'];
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
const size = {
  width: 400,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 15,
}));
function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}
function SupplierViewInformation() {
  let { id } = useParams();
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
            dispatch(setUser({ userName: Name, role: Role }));
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        } else {
          const resLocalInfo = await db.employeeUserSchema.get({ _id: storesUserId })
          const Name = resLocalInfo.employeeName;
          const Role = resLocalInfo.role;
          dispatch(setUser({ userName: Name, role: Role }));
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

  const [loadingData, setLoadingData] = useState(true);
  const [item, SetItems] = useState([]);
  const [StoreName, SetStore] = useState("");
  const apiUrl = 'https://gg-project-productionn.up.railway.app/endpoint/Supplier';
  useEffect(() => {
    const fetchItem = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get(apiUrl)
          SetItems(res.data.data.filter(row => row._id === id))
          res.data.data.filter(row => row._id === id).map((row) => SetStore(row.storeName))
          setLoadingData(false)
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoadingData(false)
        }
      } else {
        const offLineCustomer1 = await db.supplierSchema.toArray();
        SetItems(offLineCustomer1.reverse())
        setLoadingData(false)
      }
    }
    fetchItem()
  }, [id])

  const [itemPurchase, setItemPurchase] = useState([]);
  useEffect(() => {
    const handleFetch = async () => {
      try {
        console.log('🔍 [FILTERED API] Fetching supplier summary for:', id);
        // Use professional filtered endpoint (Zoho CRM approach)
        const resItemPurchase = await axios.get(`https://gg-project-productionn.up.railway.app/endpoint/itemPurchase/supplier/${id}`)

        // Data is already filtered by backend for this specific supplier
        setItemPurchase(resItemPurchase.data.data.reverse())
        console.log('✅ [FILTERED API] Successfully loaded supplier summary');
      } catch (error) {
        console.error('❌ [FILTERED API] Error fetching supplier data:', error);
      }
    }
    handleFetch()
  }, [id])

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const [show, setShow] = useState(1);
  const handleShow = (e) => {
    setShow(e);
    setAnchorEl(null);
  }

  const [reason, setReason] = useState("");
  const [Comments1, setComments] = useState([]);
  const [notification, setNotification] = useState([]);
  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/comment')
        const resp = res.data.data.filter((row) => row.CommentInfo.idInfo === id)
        setComments(resp.reverse())
        const resNotification = await axios.get('https://gg-project-productionn.up.railway.app/endpoint/notification')
        setNotification(resNotification.data.data.filter((row) => row.idInfo === id))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchComment()
  }, [id])

  const CommentInfo =
  {
    idInfo: id,
    person: user.data.userName,
    reason
  }

  {/** Loading Start */ }

  const [loading, setLoading] = useState(false);
  const [loadingOpenModal, setLoadingOpenModal] = useState(false);
  const [ErrorOpenModal, setErrorOpenModal] = useState(false);
  const [loadingOpenModalPicture, setLoadingOpenModalPicture] = useState(false);
  const [loadingOpenModalDelete, setLoadingOpenModalDelete] = useState(false);
  const handleOpen = () => {

    setLoadingOpenModal(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500)

  }
  const handleOpenPicture = () => {
    setLoadingOpenModalPicture(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  const handleOpenDelete = () => {
    setLoadingOpenModalDelete(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  const handleClosePicture = () => {
    window.location.reload();
  }
  const handleError = () => {
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  const handleClose = () => {
    setLoadingOpenModal(false);
  }
  const handleCloseError = () => {
    setErrorOpenModal(false);
  }
  {/** Loading End */ }
  const dateComment = dayjs(Date.now());
  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    const data = {
      CommentInfo,
      dateComment
    };
    try {
      const res = await axios.post('https://gg-project-productionn.up.railway.app/endpoint/create-comment/', data)
      if (res) {
        setReason("");
        handleOpen();
        const newData = res.data.data
        setComments([newData, ...Comments1])
      }
    } catch (error) {
      if (error) {
        handleError();
      }
    }
  }
  const [value3, setValue3] = React.useState('1');
  useEffect(() => {
    const result = localStorage.getItem('TabSupplierView')
    if (result) {
      setValue3(result)
    }
  })
  const handleChange3 = (event, newValue) => {
    const changeValue = newValue
    setValue3(changeValue);
    localStorage.setItem('TabSupplierView', changeValue)
  };


  const [search, setSearch] = useState('');
  const [search4, setSearch4] = useState('');

  useEffect(() => {
    const result = localStorage.getItem('QuickFilterItemPurchaseItemSupplier-Summary')
    if (result) {
      setSearch(result)
    }
  })

  const handleSearch = (e) => {
    const value = e.target.value
    setSearch(value)
    localStorage.setItem('QuickFilterItemPurchaseItemSupplier-Summary', value)
  }
  const newArray = search !== '' ? itemPurchase.filter((row) =>
    row.itemPurchaseNumber.toString().includes(search) ||
    row.description.toLowerCase().includes(search.toLowerCase()) ||
    row.projectName && row.projectName.name.toLowerCase().includes(search.toLowerCase()) ||
    row.manufacturer.toLowerCase().includes(search.toLowerCase()) ||
    row.manufacturerNumber.toLowerCase().includes(search.toLowerCase()) ||
    row.items.some((Item) => Item.itemName.itemName.toLowerCase().includes(search.toLowerCase())) ||
    row.items.some((Item) => Item.itemDescription.toLowerCase().includes(search.toLowerCase())) ||
    dayjs(row.itemPurchaseDate).format('DD/MM/YYYY').includes(search)
  ) : itemPurchase


  const [sideBar, setSideBar] = React.useState(true);
  const toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  const [openView, setOpenView] = useState(false);
  const [idView, setIdView] = useState(null);
  const [itemPurchaseView, setItemPurchaseView] = useState(null)
  const handleOpenView = (id) => {
    setOpenView(true);
    setIdView(id)
  }
  const handleCloseView = () => {
    setOpenView(false);
    setIdView(null);
    setItemPurchaseView(null);
  };
  useEffect(() => {
    const fetchData2 = async () => {
      if (idView !== null) {
        if (navigator.onLine) {
          try {
            const res = await axios.get(`https://gg-project-productionn.up.railway.app/endpoint/get-itemPurchase/${idView}`)
            setItemPurchaseView(res.data.data)
          } catch (error) {
            console.log(error)
          }
        } else {
          const resLocal = await db.itemPurchaseSchema.get({ _id: idView })
          setItemPurchaseView(resLocal)
        }
      }
    }
    fetchData2()
  }, [idView])

  const newArray1 = search !== '' ? itemPurchase.filter((row) =>
    row.itemPurchaseNumber.toString().includes(search) ||
    row.status && row.status.toLowerCase().includes(search.toLowerCase()) ||
    row.description.toLowerCase().includes(search.toLowerCase()) ||
    row.projectName && row.projectName.name.toLowerCase().includes(search.toLowerCase()) ||
    row.manufacturer.toLowerCase().includes(search.toLowerCase()) ||
    row.manufacturerNumber.toLowerCase().includes(search.toLowerCase()) ||
    row.items.some((Item) => Item.itemName.itemName.toLowerCase().includes(search.toLowerCase())) ||
    row.items.some((Item) => Item.itemDescription.toLowerCase().includes(search.toLowerCase())) ||
    dayjs(row.itemPurchaseDate).format('DD/MM/YYYY').includes(search)
  ) : itemPurchase

  //const payFc = newArray1.filter((row1)=>  row1.manufacturerID === id || row1.manufacturer === StoreName).reduce((acc, row) => acc + (row.total || 0), 0)

  const relatedItemPurchases = itemPurchase.length > 0 ? itemPurchase.reduce((acc, row) => {
    row.items.filter((item) => parseFloat(item.itemQty) > 0).forEach((item) => {
      const ItemName = item.itemName.itemName;
      const Id = item.itemName._id;
      const description = item.itemDescription;
      if (!acc[ItemName]) {
        acc[ItemName] = { ItemName, Id, description, total: 0 }
      }
    });
    return acc
  }, {}) : null
  const relatedItemPurchases2 = []
  itemPurchase.filter((Item) => Item.manufacturerID === id || item.find((row2) => row2.storeName === Item.manufacturer)).map((Item) => Item.items.filter((item) => parseFloat(item.itemQty) > 0).map((row) => { relatedItemPurchases2.push({ ...row, date: Item.itemPurchaseDate }) }))

  const newArray2 = search4 !== '' ? relatedItemPurchases2.filter((row) =>
    row.itemName.itemName && row.itemName.itemName.toString().includes(search4) ||
    row.itemDescription.toLowerCase().includes(search4.toLowerCase()) ||
    dayjs(row.date).format('DD/MM/YYYY').includes(search4)
  ) : relatedItemPurchases2

  function Row(props) {
    const { row } = props;
    const { index } = props;
    const [open, setOpen] = React.useState(false);


    return (
      <React.Fragment>
        <tr style={{ '& > *': { borderBottom: 'unset' } }}>
          <td style={{ textAlign: 'left', border: '1px solid #DDD', cursor: 'pointer' }} onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <span>{index + 1}</span>}
          </td>
          <td align="left" style={{ textAlign: 'left', border: '1px solid #DDD' }}>{dayjs(row.itemPurchaseDate).format('DD/MM/YYYY')}</td>
          <td align="left" style={{ textAlign: 'left', border: '1px solid #DDD' }}>{row.itemPurchaseNumber}</td>
          <td align="left" style={{ textAlign: 'left', border: '1px solid #DDD' }}>{row.status}</td>
          <td align="left" style={{ textAlign: 'left', border: '1px solid #DDD' }}>{row.projectName !== undefined ? row.projectName.name : row.description}</td>
          <td align="left" style={{ textAlign: 'left', border: '1px solid #DDD' }}>{row.totalUSD !== undefined ? row.totalUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : row.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
          <td align="left" style={{ textAlign: 'left', border: '1px solid #DDD' }}>            <ViewTooltip title="View">
            <span>
              <IconButton onClick={() => handleOpenView(row._id)}>
                <VisibilityIcon style={{ color: '#202a5a' }} />
              </IconButton>
            </span>
          </ViewTooltip></td>
        </tr>
        <tr>
          <td style={{ textAlign: 'left', border: '1px solid #DDD', paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
            <Collapse in={open} timeout="auto" unmountOnExit>

              <Box sx={{ margin: 1 }}>
                <Typography gutterBottom component="div">
                  ---
                </Typography>
                <table aria-label="collapsible table" >
                  <thead>
                    <tr>
                      <th style={{ border: '1px solid #DDD' }}>#</th>
                      <th style={{ border: '1px solid #DDD' }}>Item</th>
                      <th style={{ border: '1px solid #DDD' }}>Description</th>
                      <th style={{ border: '1px solid #DDD' }}>Qty</th>
                      <th style={{ border: '1px solid #DDD' }}>Price($)</th>
                      <th style={{ border: '1px solid #DDD' }}>Amount Paid(FC)</th>
                      <th style={{ border: '1px solid #DDD' }}>Rate </th>
                      <th style={{ border: '1px solid #DDD' }}>Amount Paid($)</th>
                      <th style={{ border: '1px solid #DDD' }}>Total($)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      row.items.map((row3, i) => {
                        const relatedUnit = item.find((Item1) => Item1._id === row3.itemName._id)
                        return (
                          <tr key={row3.idRow}>
                            <td style={{ border: '1px solid #DDD' }}>{i + 1}</td>
                            <td style={{ border: '1px solid #DDD' }}>{row3.itemName.itemName}</td>
                            <td style={{ border: '1px solid #DDD' }}>{row3.itemDescription}</td>
                            <td style={{ border: '1px solid #DDD' }}>{row3.itemQty} {relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''}</td>
                            <td style={{ border: '1px solid #DDD' }}>{parseFloat(row3.itemRate).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                            <td style={{ border: '1px solid #DDD' }}>FC{row3.totalAmountFC !== undefined ? parseFloat(row3.totalAmountFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</td>
                            <td style={{ border: '1px solid #DDD' }}>{row3.Taux !== undefined ? parseFloat(row3.Taux).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</td>
                            <td style={{ border: '1px solid #DDD' }}>${parseFloat(row3.totalAmount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                            <td style={{ border: '1px solid #DDD' }}>{row3.fcConvertToUsdTotal !== undefined ? parseFloat(row3.fcConvertToUsdTotal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </Box>
            </Collapse>
          </td>
        </tr>
      </React.Fragment>
    );
  }

  const [filterPaid, setFilterPaid] = useState('all');

  const handleFilterChange = (status) => {
    setFilterPaid(status);
  };

  const filteredArray1 = newArray1.filter((row) => {
    if (filterPaid === 'all') return true;
    if (filterPaid === 'paid') return row.status === undefined || row.status?.toLowerCase() === 'paid';
    if (filterPaid === 'unpaid') return row.status?.toLowerCase() === 'unpaid';
    return true;
  });

  const payFc = filteredArray1.filter((row1) => row1.manufacturerID === id || row1.manufacturer === StoreName).reduce((acc, row) => acc + (row.totalUSD !== undefined ? row.totalUSD : row.total || 0), 0)
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
              Supplier Information
            </Typography>
            <IconButton onClick={() => navigate('/SupplierAdminView')}>
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
          <Container maxWidth="none" sx={{ mt: 2 }} >
            {
              loadingData ? <div>
                <div style={{ position: 'relative', top: '120px' }}>
                  <Loader />
                </div>
              </div> : (
                <div>
                  <div>
                    <Grid container spacing={2}>
                      {show === 1 ?
                        <Grid item xs={3}>
                          <SupplierName onId={id} />
                        </Grid> :
                        ""}
                      <Grid item xs={9}>
                        <div className='itemInfoContainer2'>
                          <div style={{ width: '100%', background: 'white' }}>

                            {item?.filter(row => row._id === id)?.map((row) => (
                              <div key={row._id}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                  <div style={{ width: '100%', padding: '10px' }}>
                                    <Typography style={{ fontWeight: 'bold', fontSize: '20px' }}>{row.storeName.toUpperCase()}</Typography>
                                  </div>
                                  <Button
                                    aria-controls={open ? 'demo-customized-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    variant="contained"
                                    disableElevation
                                    onClick={handleClick}
                                    endIcon={<KeyboardArrowDown />}
                                    sx={{
                                      bgcolor: 'gray', '&:hover': {
                                        color: 'gray',
                                        bgcolor: 'white',
                                        border: '1px solid gray',
                                      }
                                    }}
                                  >
                                    Options
                                  </Button>
                                  <Menu
                                    id="demo-customized-menu"
                                    MenuListProps={{
                                      'aria-labelledby': 'demo-customized-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleCloseMenu}
                                    TransitionComponent={Fade}
                                  >
                                    <MenuItem >
                                      <NavLink to={`/SupplierFormUpdate/${row._id}`} className='LinkName' style={{ display: 'flex', gap: '20px', alignItems: 'center', color: 'gray' }}>
                                        <EditIcon />
                                        <Typography>Edit</Typography>
                                      </NavLink>
                                    </MenuItem>
                                    <Divider />
                                    {   /* <MenuItem>
              <NavLink to={`/ItemFormClone/${row._id}`} className='LinkName' style={{display:'flex',gap:'20px', alignItems:'center', color:'gray'}}>
                                    <FileCopy/>
                                    <Typography>Clone</Typography>
         </NavLink>
              </MenuItem>*/}
                                    <Divider />
                                    <MenuItem onClick={() => handleShow(2)}> <span style={{ color: 'gray' }}>Comments</span> </MenuItem>
                                    <MenuItem onClick={() => handleShow(3)}> <span style={{ color: 'gray' }}>History</span></MenuItem>
                                  </Menu>
                                </div>
                                <Box sx={{ width: '100%' }}>
                                  <TabContext
                                    value={value3}
                                  >
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
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
                                          label="Overview"
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
                                          label="In-Summary"
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
                                          label="Item-Summary"
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
                                      </TabList>
                                    </Box>
                                    <TabPanel value="1" sx={{ height: '500px', overflow: 'hidden', overflowY: 'scroll' }}>
                                      <div>

                                        <Card sx={{ marginBottom: '20px' }}>
                                          <CardContent sx={{ width: "100%" }}>
                                            <div style={{ display: 'flex', gap: '15px', padding: '20px', fontSize: '20px', marginBottom: '5px' }}>
                                              <table style={{ marginBottom: '5px' }}>
                                                <tbody>
                                                  <tr>
                                                    <th align='left' style={{ height: '30px' }}><span >Name</span></th>
                                                    <td><span style={{ color: 'gray' }}>{row.supplierName.toUpperCase()}</span></td>
                                                  </tr>
                                                  <tr>
                                                    <th align='left' style={{ height: '30px' }}><span >Store</span></th>
                                                    <td><span style={{ color: 'gray' }}>{row.storeName.toUpperCase()}</span></td>
                                                  </tr>
                                                  <tr>
                                                    <th align='left' style={{ height: '30px' }}><span >Phone 1</span></th>
                                                    <td><span style={{ color: 'gray' }}>{row.customerPhone1.toUpperCase()}</span></td>
                                                  </tr>
                                                  <tr>
                                                    <th align='left' style={{ height: '30px' }}><span >Phone 2</span></th>
                                                    <td style={{ color: 'gray' }}><span>{row.customerPhone2.toUpperCase()}</span></td>
                                                  </tr>
                                                  <tr>
                                                    <th align='left' style={{ height: '30px' }}><span >Address</span></th>
                                                    <td style={{ color: 'gray' }}><span>{row.address.toUpperCase()}</span></td>
                                                  </tr>
                                                  <tr>
                                                    <th align='left' style={{ height: '30px' }}><span >Description</span></th>
                                                    <td style={{ color: 'gray' }}><span>{row.description.toUpperCase()}</span></td>
                                                  </tr>
                                                  <tr>

                                                  </tr>

                                                </tbody>
                                              </table>
                                            </div>
                                          </CardContent>
                                        </Card>

                                      </div>
                                    </TabPanel>
                                    <TabPanel value="2" sx={{ height: '500px', overflow: 'hidden', overflowY: 'scroll' }}>
                                      <Card>
                                        <CardContent>
                                          <section style={{ position: 'relative', float: 'left', padding: '10px', display: 'flex', gap: '10px' }}>
                                            <span colSpan={2}>Total</span>
                                            <span colSpan={2} sx={{ textAlign: 'right' }}>
                                              ${payFc?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                            </span>
                                          </section>
                                          <section style={{ position: 'relative', float: 'right', padding: '10px' }}>
                                            <TextField
                                              label='search'
                                              id='search'
                                              value={search}
                                              variant="standard"
                                              onChange={handleSearch}
                                            />
                                            <Button onClick={() => handleFilterChange('all')}>All</Button>
                                            <Button onClick={() => handleFilterChange('paid')}>Paid</Button>
                                            <Button onClick={() => handleFilterChange('unpaid')}>Unpaid</Button>
                                          </section>
                                          <table className="secondTable" style={{ fontSize: '80%', marginBottom: '5px', border: '1px solid #DDD' }}>
                                            <thead>
                                              <tr>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>#</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Date</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Reference</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Status</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Reason</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Total</th>
                                                <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}> Action</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {
                                                filteredArray1.filter((row1) => row1.manufacturerID === id || row1.manufacturer === row.storeName).map((row1, i) => (

                                                  <Row key={row1._id} row={row1} index={i} />
                                                ))
                                              }
                                            </tbody>
                                          </table>
                                        </CardContent>
                                      </Card>
                                    </TabPanel>
                                    <TabPanel value='3' sx={{ height: '500px', overflow: 'hidden', overflowY: 'scroll' }}>
                                      <Card>
                                        <CardContent>
                                          <section style={{ position: 'relative', float: 'right', padding: '10px' }}>
                                            <TextField
                                              label='search'
                                              id='search4'
                                              value={search4}
                                              variant="standard"
                                              onChange={(e) => setSearch4(e.target.value)}
                                            />
                                          </section>
                                          <table className="secondTable" style={{ fontSize: '80%', marginBottom: '5px', border: '1px solid #DDD' }}>
                                            <thead>
                                              <tr>
                                                <th style={{ border: '1px solid #DDD' }}>#</th>
                                                <th style={{ border: '1px solid #DDD' }}>Item</th>
                                                <th style={{ border: '1px solid #DDD' }}>Date</th>
                                                <th style={{ border: '1px solid #DDD' }}>Qty</th>
                                                <th style={{ border: '1px solid #DDD' }}>Price($)</th>
                                                <th style={{ border: '1px solid #DDD' }}>Amount Paid(FC)</th>
                                                <th style={{ border: '1px solid #DDD' }}>Rate </th>
                                                <th style={{ border: '1px solid #DDD' }}>Amount Paid($)</th>
                                                <th style={{ border: '1px solid #DDD' }}>Total($)</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {
                                                newArray2?.map((row3, i) => {
                                                  const relatedUnit = item.find((Item1) => Item1._id === row3.itemName._id)
                                                  return (
                                                    <tr key={i}>
                                                      <td style={{ border: '1px solid #DDD' }}>{i + 1}</td>
                                                      <td style={{ border: '1px solid #DDD' }}>{row3.itemName.itemName} <br />{row3.itemDescription}</td>
                                                      <td style={{ border: '1px solid #DDD' }}>{dayjs(row3.date).format('DD/MM/YYYY')}</td>
                                                      <td style={{ border: '1px solid #DDD' }}>{row3.itemQty} {relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''}</td>
                                                      <td style={{ border: '1px solid #DDD' }}>{parseFloat(row3.itemRate).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                      <td style={{ border: '1px solid #DDD' }}>FC{row3.totalAmountFC !== undefined ? parseFloat(row3.totalAmountFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</td>
                                                      <td style={{ border: '1px solid #DDD' }}>{row3.Taux !== undefined ? parseFloat(row3.Taux).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</td>
                                                      <td style={{ border: '1px solid #DDD' }}>${parseFloat(row3.totalAmount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                      <td style={{ border: '1px solid #DDD' }}>{row3.fcConvertToUsdTotal !== undefined ? parseFloat(row3.fcConvertToUsdTotal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</td>
                                                    </tr>
                                                  )
                                                })
                                              }
                                            </tbody>
                                          </table>
                                        </CardContent>
                                      </Card>
                                    </TabPanel>
                                  </TabContext>
                                </Box>


                              </div>
                            )
                            )
                            }
                            <div />
                          </div>
                        </div>

                      </Grid>
                      {show === 2 ?
                        <Grid item xs={3}>
                          <div className='itemInfoContainer'>
                            <div style={{ padding: '10px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                <p>COMMENTS</p>
                                <ViewTooltip title="Close" placement='left'>
                                  <IconButton onClick={() => handleShow(1)} style={{ position: 'relative', float: 'right' }}>
                                    <Close style={{ color: '#202a5a' }} />
                                  </IconButton>
                                </ViewTooltip>
                              </div>
                              <form onSubmit={handleSubmitEdit}>
                                <Grid container style={{ alignItems: 'center' }} spacing={1}>
                                  <Grid item xs={12}>
                                    <TextField
                                      required
                                      id='comments'
                                      name='comments'
                                      multiline
                                      rows={4}
                                      value={reason}
                                      onChange={(e) => setReason(e.target.value.toUpperCase())}
                                      label='Comments'
                                      sx={{ width: '100%', backgroundColor: 'white' }}
                                    />
                                  </Grid>
                                  <Grid item xs={12}>
                                    <button type='submit' style={{ width: '100%' }} className='btnCustomer6'>Save</button>
                                  </Grid>
                                </Grid>

                              </form>
                              <hr />
                            </div>
                            <div style={{ height: '355px', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
                              <div style={{ padding: '10px' }}>
                                <table style={{ width: '100%' }}>
                                  <tbody>
                                    {Comments1.map((Item) => (
                                      <tr key={Item._id}>
                                        <td style={{ width: '100%', borderBottom: '1px solid black' }}>
                                          {Item.dateComment ? dayjs(Item.dateComment).format('DD/MM') : ''} {Item.CommentInfo.person + ': ' + Item.CommentInfo.reason}
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </Grid> : ""}
                      {show === 3 ?
                        <Grid item xs={3}>
                          <div className='itemInfoContainer'>
                            <div style={{ padding: '20px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                <p>HISTORY</p>
                                <ViewTooltip title="Close" placement='bottom'>
                                  <IconButton onClick={() => handleShow(1)} style={{ position: 'relative', float: 'right' }}>
                                    <Close style={{ color: '#202a5a' }} />
                                  </IconButton>
                                </ViewTooltip>
                              </div>
                              <br />

                            </div>
                            <div style={{ height: '518px', overflow: 'hidden', overflowY: 'scroll', width: '100%' }}>
                              <div style={{ padding: '10px' }}>
                                {
                                  item.filter((row) => row._id === id).map((row) => (
                                    <p key={row._id}>
                                      {
                                        row.Creates !== undefined ? <span>{row.Creates.person + ' on ' + row.Creates.dateComment}: {row.Creates.item}</span> : ''
                                      }
                                    </p>
                                  ))
                                }
                                {
                                  notification.map((row) => (
                                    <p key={row._id}>
                                      <span>{row.person + ' on ' + dayjs(row.dateNotification).format('DD/MMMM')}: {row.reason}</span>
                                    </p>
                                  ))
                                }
                              </div>
                            </div>
                          </div>
                        </Grid> : ""}
                    </Grid> </div>
                </div>)}
          </Container>
        </Box>
      </Box>
      <Modal
        open={loadingOpenModal}
        onClose={handleClose}
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
                <button onClick={handleClose} className='btnCustomer'>
                  Close
                </button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
      <Modal
        open={ErrorOpenModal}
        onClose={handleCloseError}
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
              <p><CancelIcon style={{ color: 'red', height: '40px', width: '40px' }} /></p>
              <h2> Data Failed to Saved</h2>
              <button className='btnCustomer' onClick={handleCloseError}>
                Try Again
              </button>
            </div>
          )}
        </Box>
      </Modal>

      <Modal
        open={openView}
        onClose={handleCloseView}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 900 }}>
          <ViewTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseView} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </ViewTooltip>
          {
            itemPurchaseView !== null ?
              <div>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <span>{itemPurchaseView.Create.person} </span><span>IP-{itemPurchaseView.itemPurchaseNumber}</span> on <span>{itemPurchaseView.Create.dateComment}</span>
                </Typography>
                <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>

                  <Grid container style={{ alignItems: 'center' }} spacing={2}>

                    <Grid item xs={12}>
                      <Box sx={{ height: 600, width: '100%' }}>
                        <Table style={{ marginBottom: '5px' }}>
                          <TableBody>
                            <TableRow>
                              <TableCell>Expense Date</TableCell>
                              <TableCell colSpan={3}>{dayjs(itemPurchaseView.itemPurchaseDate).format('DD/MM/YYYY')}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Description</TableCell>
                              <TableCell colSpan={3}>{itemPurchaseView.projectName !== undefined ? itemPurchaseView.projectName.name : itemPurchaseView.description}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Reference</TableCell>
                              <TableCell colSpan={3}>{itemPurchaseView.manufacturer + ' / ' + itemPurchaseView.manufacturerNumber}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Note</TableCell>
                              <TableCell colSpan={3}>{itemPurchaseView.note}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                        <TableContainer sx={{ maxHeight: 400, marginBottom: '5px' }}>
                          <Table aria-label="collapsible table" stickyHeader>
                            <TableHead>
                              <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Item</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Qty</TableCell>
                                <TableCell>Price($)</TableCell>
                                <TableCell>Amount Paid(FC)</TableCell>
                                <TableCell>Rate </TableCell>
                                <TableCell>Amount Paid($)</TableCell>
                                <TableCell>Total($)</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {
                                itemPurchaseView.items.map((row, i) => (
                                  <TableRow key={row.idRow}>
                                    <TableCell sx={id === row.itemName._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{i + 1}</TableCell>
                                    <TableCell sx={id === row.itemName._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{row.itemName.itemName}</TableCell>
                                    <TableCell sx={id === row.itemName._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{row.itemDescription}</TableCell>
                                    <TableCell sx={id === row.itemName._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{row.itemQty}</TableCell>
                                    <TableCell sx={id === row.itemName._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{parseFloat(row.itemRate).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</TableCell>
                                    <TableCell sx={id === row.itemName._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>FC{row.totalAmountFC !== undefined ? parseFloat(row.totalAmountFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                                    <TableCell sx={id === row.itemName._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{row.Taux !== undefined ? parseFloat(row.Taux).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                                    <TableCell sx={id === row.itemName._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>${parseFloat(row.totalAmount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</TableCell>
                                    <TableCell sx={id === row.itemName._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{row.fcConvertToUsdTotal !== undefined ? parseFloat(row.fcConvertToUsdTotal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                                  </TableRow>
                                ))
                              }
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <Table>
                          <TableBody>
                            <TableRow>
                              <TableCell colSpan={2}>Total</TableCell>
                              <TableCell colSpan={2} sx={{ textAlign: 'right' }}>FC{itemPurchaseView.totalFC !== undefined ? parseFloat(itemPurchaseView.totalFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                              <TableCell colSpan={2} sx={{ textAlign: 'right' }}>${itemPurchaseView.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</TableCell>
                              <TableCell colSpan={2} sx={{ textAlign: 'right' }}>${itemPurchaseView.totalUSD !== undefined ? parseFloat(itemPurchaseView.totalUSD).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
              : null
          }

        </Box>
      </Modal>
    </div>
  )
}

export default SupplierViewInformation
