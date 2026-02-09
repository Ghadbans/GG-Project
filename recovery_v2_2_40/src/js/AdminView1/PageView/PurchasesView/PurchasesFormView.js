import React, { useEffect, useState } from 'react';
import SidebarDash1 from '../../../component/SidebarDash1';
import '../../view.css';
import '../Chartview.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { MenuItem, Grid, IconButton, Table, TableBody, TableCell, TableRow, TableHead, Paper, TableContainer, TextField, FormControl, InputLabel, Select, Typography, Autocomplete, styled, Modal, Backdrop, Fade, Box, OutlinedInput, InputAdornment, Divider } from '@mui/material'
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
import axios from 'axios'
import { Add, ArrowUpwardOutlined, DragIndicatorRounded, Edit, RemoveCircleOutline, ShoppingCartOutlined } from '@mui/icons-material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Drawer as SideDrawer, Card, CardContent, CardMedia, Button, Pagination } from '@mui/material';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import ArrowBack from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Loader from '../../../component/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import Logout from '@mui/icons-material/Logout';
import Close from '@mui/icons-material/Close';
import ItemFormView2 from '../ItemView/ItemFormView2';
import ItemUpdateView2 from '../ItemView/ItemUpdateView2';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import MessageAdminView from '../../MessageAdminView';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import db from '../../../dexieDb';

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

const DownTooltip = styled(({ className, ...props }) => (
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
const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
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

function PurchasesFormView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUser = async () => {
      if (storesUserId) {
        if (navigator.onLine) {
          try {
            const res = await axios.get(`http://192.168.0.200:8080/endpoint/get-employeeuser/${storesUserId}`)
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

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
    navigate('/')
  }

  const apiUrl = 'http://192.168.0.200:8080/endpoint/create-purchase';
  const [items, SetItems] = useState([]);
  const [purchaseAmount1, setPurchaseAmount1] = useState(0);
  const [purchaseAmount2, setPurchaseAmount2] = useState(0);
  const [shopOpen, setShopOpen] = useState(false);
  const [shopItems, setShopItems] = useState([]);
  const [shopSearch, setShopSearch] = useState('');
  const [shopPage, setShopPage] = useState(1);
  const [shopTotalPages, setShopTotalPages] = useState(1);
  const [rate, setRate] = useState(0);
  const [shopLoading, setShopLoading] = useState(false);
  const [projects, setProject] = useState([]);
  const status = 'Draft'
  useEffect(() => {
    const fetchProject = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('http://192.168.0.200:8080/endpoint/projects')
          setProject(res.data.data.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        const offLineCustomer1 = await db.projectSchema.toArray();
        setProject(offLineCustomer1.reverse())
      }
    }
    fetchProject()
  }, [])
  const [customerName, setCustomerName] = useState({});
  const [customerName1, setCustomerName1] = useState('');
  const [purchaseDate, setPurchaseDate] = useState(() => {
    const date = new Date()
    return date
  });
  const [description, setDescription] = useState('');
  const [projectName, setProjectName] = useState({});
  const [inputValue, setInputValue] = React.useState('');
  const [inputValue2, setInputValue2] = React.useState('');
  const [statusInfo, setStatusInfo] = React.useState('');
  const [purchaseNumber, setPurchaseNumber] = useState(0);
  const dateComment = dayjs(new Date).format('DD/MM/YYYY')
  const Create = {
    person: user.data.userName + ' CREATED ',
    purchaseNumber: "PUR-00" + purchaseNumber,
    dateComment
  }
  const purchaseName = "PUR-00" + purchaseNumber
  const [ItemInformation, setItemInformation] = useState([]);
  useEffect(() => {
    const fetchlastNumber = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('http://192.168.0.200:8080/endpoint/get-last-saved-purchase')
          setPurchaseNumber(parseInt(res.data.purchaseNumber) + 1)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        const offLineCustomer1 = await db.purchaseSchema.toArray();
        const latest = offLineCustomer1.reduce((max, row) => row.purchaseNumber > max.purchaseNumber ? row : max, offLineCustomer1[0])
        setPurchaseNumber(parseInt(latest.purchaseNumber) + 1)
      }
    }
    fetchlastNumber()
  }, [])
  useEffect(() => {
    const fetchItem = async () => {
      if (navigator.onLine) {
        try {
          const res = await axios.get('http://192.168.0.200:8080/endpoint/item')
          setItemInformation(res.data.data.reverse())
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        const offLineCustomer1 = await db.itemSchema.toArray();
        setItemInformation(offLineCustomer1.reverse())
      }
    }
    fetchItem()
  }, [])

  // Fetch Shop Items & Rate
  useEffect(() => {
    if (shopOpen) { // Only fetch if side shop is open
      const fetchShop = async () => {
        setShopLoading(true);
        if (navigator.onLine) {
          try {
            const resRate = await axios.get('http://192.168.0.200:8080/endpoint/rate')
            resRate.data.data.forEach((row) => setRate(row.rate))

            const res = await axios.get(`http://192.168.0.200:8080/endpoint/item-shop?page=${shopPage}&limit=20&search=${encodeURIComponent(shopSearch)}`)
            setShopTotalPages(res.data.totalPages)
            setShopItems(res.data.items.filter((row) => row.typeItem === "Goods").reverse())
            setShopLoading(false)
          } catch (error) {
            console.error('Error fetching data:', error);
            setShopLoading(false)
          }
        } else {
          const offLineCustomer1 = await db.itemSchema.toArray();
          setShopItems(offLineCustomer1.filter((row) => row.typeItem === "Goods").reverse())
          setShopLoading(false)
          const offLineRate = await db.rateSchema.toArray();
          offLineRate.forEach((row) => setRate(row.rate))
        }
      }
      fetchShop()
    }
  }, [shopPage, shopSearch, shopOpen])

  const handleShopPageChange = (e, newPage) => {
    setShopPage(newPage);
  }
  const handleShopSearchChange = (e) => {
    setShopSearch(e.target.value);
    setShopPage(1)
  }

  const toggleShop = () => {
    setShopOpen(!shopOpen);
  }

  const handleAddToPurchase = (shopItem) => {
    // Check if item already exists
    const existingItemIndex = items.findIndex(item => item.itemName._id === shopItem._id);

    if (existingItemIndex !== -1) {
      // Item exists, update quantity
      const updatedItems = [...items];
      const currentItem = updatedItems[existingItemIndex];
      const newQty = parseInt(currentItem.itemQty) + 1;

      updatedItems[existingItemIndex] = {
        ...currentItem,
        itemQty: newQty,
        itemAmount: Math.round((newQty * currentItem.itemRate) * 100) / 100,
        totalAmount: Math.round((newQty * currentItem.itemRate) * 100) / 100,
        discount: Math.round((newQty * currentItem.itemRate * currentItem.itemDiscount) * 100) / 100,
        percentage: (Math.round((newQty * currentItem.itemRate * currentItem.itemDiscount) * 100) / 100) / 100,
        totalCost: Math.round((newQty * currentItem.itemCost) * 100) / 100,
        totalGenerale: Math.round((currentItem.itemCost * currentItem.itemBuy) * 100) / 100,
      };
      SetItems(updatedItems);
    } else {
      // Item does not exist, add new
      const newItem = {
        idRow: v4(),
        itemName: {
          _id: shopItem._id,
          itemName: shopItem.itemName,
        },
        itemDescription: shopItem.itemDescription,
        itemDiscount: 0,
        itemQty: 1,
        itemRate: shopItem.itemSellingPrice,
        itemAmount: shopItem.itemSellingPrice,
        itemCost: shopItem.itemCostPrice,
        totalAmount: shopItem.itemSellingPrice,
        discount: 0,
        percentage: 0,
        itemBuy: 0,
        itemWeight: shopItem.itemWeight || "",
        totalGenerale: 0,
        totalCost: shopItem.itemCostPrice,
        stock: shopItem.itemQuantity,
        itemOut: 0,
        newItemOut: 0,
      };
      SetItems([...items, newItem]);
    }
  }
  const [openAutocomplete2, setOpenAutocomplete2] = useState(false);

  const handleOpenOpenAutocomplete2 = (e) => {
    e.stopPropagation()
    setOpenAutocomplete2(true);
  };
  const handleCloseOpenAutocomplete2 = () => {
    setOpenAutocomplete2(false);
  };
  const handleCreateItem = (newItem) => {
    setItemInformation([newItem, ...ItemInformation])
  }
  const handleShowAutocompleteDescription = (idRow) => {
    SetItems(items => items.map((row) => row.idRow === idRow ? {
      ...row,
      itemName: {
        itemName: 'empty'
      },
    } : row))
  }
  const handleChange = (e, i) => {
    const { name, value } = e.target;
    SetItems(prevItems => {
      const list = [...prevItems];
      const item = { ...list[i], [name]: value };
      item.totalAmount = Math.round((item.itemQty * item.itemRate) * 100) / 100;
      item.totalCost = Math.round((item.itemQty * item.itemCost) * 100) / 100;
      item.discount = item.totalAmount * item.itemDiscount;
      item.percentage = item.discount / 100;
      item.itemAmount = Math.round((item.totalAmount - item.percentage) * 100) / 100;
      item.totalGenerale = Math.round((item.itemCost * item.itemBuy) * 100) / 100;
      list[i] = item;
      return list;
    });
  }
  //addItem
  const addItem = () => {
    SetItems(prevItems => [
      ...prevItems,
      {
        idRow: v4(),
        itemName: {
          _id: "",
          itemName: ""
        },
        itemDescription: "",
        itemDiscount: 0,
        itemQty: 0,
        itemRate: 0,
        itemAmount: 0,
        itemCost: 0,
        totalAmount: 0,
        discount: 0,
        percentage: 0,
        itemBuy: 0,
        itemWeight: "",
        totalGenerale: 0,
        totalCost: 0,
        stock: 0,
        itemOut: 0,
        newItemOut: 0,
      }
    ]);
  }
  const addItemWhite = () => {
    SetItems([...items, {
      newDescription: "",
      idRow: v4(),
      itemName: {
        _id: "",
        itemName: ""
      },
      itemDescription: "",
      itemDiscount: 0,
      itemQty: 0,
      itemRate: 0,
      itemAmount: 0,
      itemCost: 0,
      totalAmount: 0,
      discount: 0,
      percentage: 0,
      itemBuy: 0,
      itemWeight: "",
      totalGenerale: 0,
      totalCost: 0,
      stock: 0,
      itemOut: 0,
      newItemOut: 0,
    }]);
  }
  const addItemRow = (i) => {
    const newItem = {
      idRow: v4(),
      itemName: {
        _id: "",
        itemName: ""
      },
      itemDescription: "",
      itemDiscount: 0,
      itemQty: 0,
      itemRate: 0,
      itemCost: 0,
      itemAmount: 0,
      totalAmount: 0,
      discount: 0,
      percentage: 0,
      itemBuy: 0,
      itemWeight: "",
      totalGenerale: 0,
      totalCost: 0,
      stock: 0,
      itemOut: 0,
      newItemOut: 0,
    }
    const update = [...items];
    update.splice(i + 1, 0, newItem);
    SetItems(update)
  }
  const addItemWhiteRow = (i) => {
    const newItem = {
      newDescription: "",
      idRow: v4(),
      itemName: {
        _id: "",
        itemName: ""
      },
      itemDescription: "",
      itemDiscount: 0,
      itemQty: 0,
      itemRate: 0,
      itemAmount: 0,
      itemCost: 0,
      totalAmount: 0,
      discount: 0,
      percentage: 0,
      itemBuy: 0,
      itemWeight: "",
      totalGenerale: 0,
      totalCost: 0,
      stock: 0,
      itemOut: 0,
      newItemOut: 0,
    }
    const update = [...items];
    update.splice(i + 1, 0, newItem);
    SetItems(update)
  }
  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const newItems = [...items];
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
    SetItems(newItems)
  };
  const handleChangeItem = (idRow, newValue) => {
    const selectedOptions = ItemInformation.find((option) => option === newValue)
    SetItems(items => items.map((row) => row.idRow === idRow ? {
      ...row,
      itemName: {
        _id: selectedOptions?._id,
        itemName: selectedOptions?.itemName,
      },
      itemCost: selectedOptions?.itemCostPrice,
      itemDescription: selectedOptions?.itemDescription,
      itemRate: selectedOptions?.itemSellingPrice,
      stock: selectedOptions?.itemQuantity,
    } : row))
  }
  const deleteItem = idRow => {
    SetItems(items => items.filter((Item) => Item.idRow !== idRow));
  };
  const filterItemInformation = ItemInformation.filter(option => !items.find((row) => option._id === row.itemName._id && option.typeItem === "Goods"))
  //Calculate the total
  useEffect(() => {
    const result1 = items.reduce((sum, row) => sum + row.totalCost, 0)
    setPurchaseAmount1(result1.toFixed(2))
    const result2 = items.reduce((sum, row) => sum + row.totalGenerale, 0)
    setPurchaseAmount2(result2.toFixed(2))
  }, [items])

  const handleChangeProject = (newValue) => {
    const selectedOptions = projects.find((option) => option === newValue)
    setProjectName({
      _id: selectedOptions?._id,
      projectName: selectedOptions?.projectName
    });
    setDescription(selectedOptions?.description)
    setStatusInfo(selectedOptions?.status)
    setCustomerName(selectedOptions?.customerName)
    setCustomerName1(selectedOptions?.customerName.customerName)
  }
  {/** Item Info Start */ }
  const handleShowAutocomplete = (idRow) => {
    SetItems(items => items.map((row) => row.idRow === idRow ? {
      ...row,
      itemName: {
        _id: null,
        itemName: null
      },
    } : row))
  }
  const [openItemUpdate, setOpenItemUpdate] = useState(false);
  const [idItem, setIdItem] = useState(null)

  const handleOpenItemUpdate = async (id) => {
    setOpenItemUpdate(true);
    setIdItem(id);
  };
  const handleCloseItemUpdate = async () => {
    setOpenItemUpdate(false);
    if (idItem) {
      try {
        const res = await axios.get(`http://192.168.0.200:8080/endpoint/get-item/${idItem}`)
        SetItems(items => items.map((row) => row.itemName._id === res.data.data._id ? {
          ...row,
          itemName: {
            _id: res.data.data._id,
            itemName: res.data.data.itemName
          },
          itemDescription: res.data.data.itemDescription,
          itemCost: res.data.data.itemCostPrice,
          itemRate: res.data.data.itemSellingPrice,
          stock: res.data.data.itemQuantity,
          totalAmount: row.itemQty * res.data.data.itemSellingPrice,
          discount: (row.itemQty * res.data.data.itemSellingPrice) * row.itemDiscount,
          percentage: ((row.itemQty * res.data.data.itemSellingPrice) * row.itemDiscount) / 100,
          itemAmount: (row.itemQty * res.data.data.itemSellingPrice) - (((row.itemQty * res.data.data.itemSellingPrice) * row.itemDiscount) / 100),
          totalCost: row.itemQty * res.data.data.itemCostPrice,
          totalGenerale: res.data.data.itemCostPrice * row.itemBuy
        } : row))
      } catch (error) {

      }
    }
  };
  {/** Item Info End */ }
  const [openBack, setOpenBack] = useState(false);

  const handleOpenBack = (e) => {
    e.preventDefault()
    setOpenBack(true);
  };
  const handleCloseBack = () => {
    setOpenBack(false);
  };
  const [loading, setLoading] = useState(false);
  const [loadingOpenModal, setLoadingOpenModal] = useState(false);
  const [ErrorOpenModal, setErrorOpenModal] = useState(false);

  const handleOpen = () => {

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

  const handleClose = () => {
    setLoadingOpenModal(false);
    window.location.reload;
  }
  const handleCloseError = () => {
    setErrorOpenModal(false);
  }
  const handleDecision = (navigate) => {
    //Navigate Based on th Decision
    if (navigate === 'previous') {
      window.history.back();
    } else if (navigate === 'stay') {
      handleClose();
    }
  }
  const handleCreateNotification = async (ReferenceInfo, ReferenceInfoNumber) => {
    const data = {
      idInfo: ReferenceInfo,
      person: user.data.userName + ' Created ',
      reason: 'PUR-' + ReferenceInfoNumber + ' For ' + customerName.customerName,
      dateNotification: new Date()
    }
    try {
      await axios.post('http://192.168.0.200:8080/endpoint/create-notification', data)
    } catch (error) {
      console.log(error)
    }
  }
  const [saving, setSaving] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving('true')
    const data = {
      _id: v4(),
      customerName,
      projectName,
      purchaseNumber,
      purchaseDate,
      items, statusInfo,
      description,
      purchaseName,
      purchaseAmount1,
      purchaseAmount2,
      status, synced: false
    };
    if (navigator.onLine) {
      try {
        const res = await axios.post(apiUrl, data);
        if (res) {
          // Open Loading View
          const ReferenceInfo = res.data.data._id
          const ReferenceInfoNumber = res.data.data.purchaseNumber
          handleCreateNotification(ReferenceInfo, ReferenceInfoNumber)
          handleOpen();
        }
      } catch (error) {
        if (error) {
          setSaving('')
          handleError();
        }
      }
    } else {
      await db.purchaseSchema.add(data)
      handleOpen();
    }
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
              Add new Purchase
            </Typography>
            <IconButton onClick={handleOpenBack}>
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
            <SidebarDash1 />
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
          <Container maxWidth="none" sx={{ mt: 4 }} >
            <div >
              <form onSubmit={handleSubmit}>
                <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2} component={Paper}>
                  <Grid item xs={12} >
                    <Autocomplete
                      disableClearable
                      options={projects}
                      getOptionLabel={(option) => option.projectName}
                      renderOption={(props, option) => (<Box {...props}> {option.customerName.customerName} | {option.projectName} | {option.description}</Box>)}
                      onChange={(e, newValue) => { handleChangeProject(newValue) }}
                      inputValue={inputValue2}
                      onInputChange={(event, newInputValue) => {
                        setInputValue2(newInputValue);
                      }}
                      filterOptions={(options, { inputValue }) => {
                        return options.filter(
                          (option) =>
                            option.customerName.customerName.toLowerCase().includes(inputValue.toLowerCase()) ||
                            option.projectName.toLowerCase().includes(inputValue.toLowerCase()) ||
                            option.description.toLowerCase().includes(inputValue.toLowerCase())
                        )
                      }}
                      renderInput={(params) => <TextField {...params} label="Project Name" required />}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker
                          required
                          name='purchaseDate'
                          label='Date'
                          value={dayjs(purchaseDate)}
                          onChange={(date) => setPurchaseDate(date)}
                          sx={{ width: '100%', backgroundColor: 'white' }}
                          format='DD/MM/YYYY'
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl sx={{ width: '100%', backgroundColor: 'white' }}>
                      <InputLabel htmlFor='purchaseNumber'>Purchase Number</InputLabel>
                      <OutlinedInput
                        type='number'
                        name='purchaseNumber'
                        value={purchaseNumber}
                        label='Purchase Number'
                        onChange={(e) => setPurchaseNumber(e.target.value)}
                        startAdornment={<InputAdornment position='start'>PUR-00</InputAdornment>}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      disabled
                      required
                      id='customerName'
                      name='customerName'
                      label='Customer Name'
                      value={customerName1}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      disabled
                      id='description'
                      name='description'
                      label='Description'
                      value={description}
                      sx={{ width: '100%', backgroundColor: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <div style={{ display: 'block', position: 'fixed', zIndex: 1, float: 'right', right: '-5px', top: '400px' }}>
                      <section>
                        <BlackTooltip title="Add" placement="top">
                          <IconButton onClick={addItem} >
                            <Add className='btn1' style={{ fontSize: '40px' }} />
                          </IconButton>
                        </BlackTooltip>
                      </section>
                      <section>
                        <BlackTooltip title="Add" placement="bottom">
                          <IconButton onClick={addItemWhite}>
                            <Add className='btn1' style={{ backgroundColor: 'gray', fontSize: '40px' }} />
                          </IconButton>
                        </BlackTooltip>
                      </section>
                      <section>
                        <BlackTooltip title="ITEM LIST" placement="left">
                          <IconButton onClick={toggleShop}>
                            <SearchIcon className='btn1' style={{ backgroundColor: '#202a5a', fontSize: '40px' }} />
                          </IconButton>
                        </BlackTooltip>
                      </section>
                    </div>
                    <div>
                      <DragDropContext onDragEnd={handleDragEnd}>
                        <table className='tableInfo10' style={{ marginLeft: '-20px' }}>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th align="center">Description</th>
                              <th align="center">Qty</th>
                              <th align="center">Unit Price<span>$</span></th>
                              <th align="center">Total<span>$</span></th>
                              <th align="center">Buy</th>
                              <th align="center">Total<span>$</span></th>
                              <th align="center">Action</th>
                            </tr>
                          </thead>
                          <Droppable droppableId="droppable" >
                            {(provided, snapshot) => (
                              <tbody
                                id="droppable"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                              >
                                {items.map((Item, i) => (
                                  <Draggable key={Item.idRow} draggableId={`droppable${Item.idRow}`} index={i}>
                                    {(provided, snapshot) => (
                                      <tr
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                      >
                                        {
                                          Item.newDescription !== undefined ? (
                                            <>
                                              <td {...provided.dragHandleProps} ><DragIndicatorRounded /></td>
                                              <td colSpan={6}><TextField
                                                required
                                                name='newDescription' id='newDescription'
                                                value={Item.newDescription}
                                                onChange={(e) => handleChange(e, i)}
                                                size="small"
                                                disabled={user.data.role === 'User'}
                                                sx={{ width: '100%', backgroundColor: 'white', fontSize: 12 }}
                                              /></td>
                                              <td >
                                                <LightTooltip title="Delete" sx={{}}>
                                                  <IconButton onClick={() => deleteItem(Item.idRow)} >
                                                    <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
                                                  </IconButton>
                                                </LightTooltip>
                                              </td>
                                            </>
                                          ) : (
                                            <>
                                              <td {...provided.dragHandleProps} ><DragIndicatorRounded /></td>
                                              <td style={{ height: '100px' }}>
                                                {
                                                  Item.itemName.itemName ? (
                                                    (
                                                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <div >
                                                          <Typography hidden={Item.itemName ? Item.itemName.itemName === 'empty' : ''} sx={{ fontSize: '23px' }}>{Item.itemName ? Item.itemName.itemName.toUpperCase() : ''}</Typography>
                                                          <TextField
                                                            name='itemDescription' id='itemDescription'
                                                            value={Item.itemDescription}
                                                            multiline
                                                            rows={3}
                                                            onChange={(e) => handleChange(e, i)}
                                                            size="small"
                                                            sx={{ width: '440px', backgroundColor: 'white', fontSize: 12 }}
                                                          />
                                                        </div>
                                                        <div>
                                                          <BlackTooltip title="Clear" placement='top'>
                                                            <IconButton onClick={() => handleShowAutocomplete(Item.idRow)} style={{ position: 'relative', float: 'right' }}>
                                                              <RemoveCircleOutline style={{ color: '#202a5a' }} />
                                                            </IconButton>
                                                          </BlackTooltip>
                                                          {
                                                            Item.itemName._id && (
                                                              <BlackTooltip title="Edit" placement='bottom'>
                                                                <IconButton onClick={() => handleOpenItemUpdate(Item.itemName._id)} style={{ position: 'relative', float: 'right' }}>
                                                                  <Edit style={{ color: '#202a5a' }} />
                                                                </IconButton>
                                                              </BlackTooltip>
                                                            )
                                                          }

                                                        </div>
                                                      </div>)
                                                  ) : (
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                      <Autocomplete
                                                        disableClearable
                                                        options={filterItemInformation}
                                                        getOptionLabel={(option) => option.itemName + '/' + option.itemBrand}
                                                        renderOption={(props, option) => (<Box {...props} sx={{ backgroundColor: '#f2f2f2' }}>{option.itemName + '/' + option.itemBrand}</Box>)}
                                                        renderInput={(params) =>
                                                          <TextField multiline
                                                            rows={4} {...params} required
                                                          />}
                                                        inputValue={inputValue}
                                                        onInputChange={(event, newInputValue) => {
                                                          setInputValue(newInputValue);
                                                        }}
                                                        filterOptions={(options, { inputValue }) => {
                                                          return options.filter(
                                                            (option) =>
                                                              option.itemName.toLowerCase().includes(inputValue.toLowerCase()) ||
                                                              option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) ||
                                                              option.itemDescription.toLowerCase().includes(inputValue.toLowerCase())
                                                          )
                                                        }}
                                                        onChange={(e, newValue) => handleChangeItem(Item.idRow, newValue)}
                                                        size="small"
                                                        PaperComponent={({ children, ...other }) => (

                                                          <Box {...other} sx={{ backgroundColor: 'white', left: '0', marginTop: '10px' }}>
                                                            {children}
                                                            <div>
                                                              <button onClick={(e) => handleOpenOpenAutocomplete2(e)} disabled={user.data.role === 'User'} onMouseDown={(e) => e.preventDefault()} className='btnCustomer7' style={{ width: '100%' }}>
                                                                ADD NEW Item
                                                              </button>
                                                            </div>
                                                          </Box>
                                                        )}
                                                        sx={{ width: '470px', backgroundColor: 'white' }}
                                                      />
                                                      <BlackTooltip title="Clear" placement='top'>
                                                        <IconButton onClick={() => handleShowAutocompleteDescription(Item.idRow)} style={{ position: 'relative', float: 'right' }}>
                                                          <RemoveCircleOutline style={{ color: '#202a5a' }} />
                                                        </IconButton>
                                                      </BlackTooltip>
                                                    </div>
                                                  )
                                                }

                                              </td>
                                              <td >
                                                <TextField
                                                  name='itemQty' id='itemQty'
                                                  onChange={(e) => handleChange(e, i)}
                                                  size="small"
                                                  value={Item.itemQty}

                                                  sx={{ width: '100px', backgroundColor: 'white' }}
                                                />
                                              </td>
                                              <td >
                                                <TextField
                                                  name='itemCost' id='itemCost'
                                                  disabled={user.data.role !== 'CEO'}
                                                  value={Item.itemCost}

                                                  onChange={(e) => handleChange(e, i)}
                                                  size="small"
                                                  sx={{ width: '100px', backgroundColor: 'white' }}
                                                />
                                              </td>
                                              <td id='totalPurchase' style={{ width: '100px' }}>{Item.totalCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                              <td id='totalBuy'>
                                                <TextField
                                                  name='itemBuy' id='itemBuy'
                                                  onChange={(e) => handleChange(e, i)}
                                                  value={Item.itemBuy}
                                                  size="small"

                                                  sx={{ width: '100px', backgroundColor: 'white' }}
                                                />
                                              </td>
                                              <td id='totalGeneralPurchase' style={{ width: '100px' }}>{Item.totalGenerale.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                              <td align="center" >  <LightTooltip title="Delete" >
                                                <IconButton onClick={() => deleteItem(Item.idRow)} >
                                                  <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
                                                </IconButton>
                                              </LightTooltip>
                                                <span style={{ display: 'flex' }}>
                                                  <BlackTooltip title="New-Row" placement="bottom">
                                                    <IconButton onClick={() => addItemRow(i)}>
                                                      <Add style={{ color: '#202a5a' }} />
                                                    </IconButton>
                                                  </BlackTooltip>
                                                  <BlackTooltip title="Blank-Row" placement="bottom">
                                                    <IconButton onClick={() => addItemWhiteRow(i)}>
                                                      <Add style={{ color: 'gray' }} />
                                                    </IconButton>
                                                  </BlackTooltip>
                                                </span>
                                              </td>
                                            </>
                                          )
                                        }
                                      </tr>
                                    )}
                                  </Draggable>
                                ))}
                                {provided.placeholder}
                              </tbody>
                            )}
                          </Droppable>

                          <tbody>
                            <tr>
                              <td colSpan={4} style={{ textAlign: 'center' }}>Total</td>
                              <td>{purchaseAmount1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                              <td>-</td>
                              <td>{purchaseAmount2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                            </tr>
                          </tbody>
                        </table>
                      </DragDropContext>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    {
                      saving !== 'true' ? <button type='submit' className='btnCustomer6' style={{ width: '100%' }}>Save</button> : <p className='btnCustomer6' style={{ width: '100%', textAlign: 'center' }}>Saving...</p>
                    }
                  </Grid>
                </Grid>

              </form>

            </div>
          </Container>
        </Box>
      </Box>
      <Modal
        open={openBack}
        onClose={handleCloseBack}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <BlackTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseBack} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </BlackTooltip>
          <Grid container sx={{ alignItems: 'center', padding: '15px' }} spacing={2}>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Typography>Do you want to stop creating purchase ? </Typography>
              <p><span className="txt2" style={{ color: 'red' }}>Note :</span> <span className="txt2"> If you stop creating without saving, all your changes will be lost</span></p>
            </Grid>
            <br />
            <Grid item xs={6}>
              <button type='submit' onClick={() => navigate(-1)} className='btnCustomer' style={{ width: '100%' }}>Yes</button>
            </Grid>
            <Grid item xs={6}>
              <button type='submit' onClick={handleCloseBack} className='btnCustomer' style={{ width: '100%' }}>No</button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
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
                <button onClick={() => handleDecision('stay')} className='btnCustomer'>
                  Add New
                </button>
                <button onClick={() => handleDecision('previous')} className='btnCustomer'>
                  Go Back
                </button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
      {/** Side Shop Drawer */}
      <SideDrawer
        anchor="right"
        open={shopOpen}
        onClose={toggleShop}
        PaperProps={{
          sx: { width: '500px', backgroundColor: '#f5f5f5', padding: '20px' },
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" component="div">
            Select Item from Shop
          </Typography>
          <IconButton onClick={toggleShop}>
            <Close />
          </IconButton>
        </Box>

        <Box display="flex" mb={2}>
          <TextField
            fullWidth
            label="Search Shop"
            variant="outlined"
            value={shopSearch}
            onChange={handleShopSearchChange}
            size="small"
          />
        </Box>

        {shopLoading ? (
          <Loader />
        ) : (
          <>
            <Box sx={{ flexGrow: 1, overflowY: 'auto', maxHeight: 'calc(100vh - 180px)' }}>
              <Grid container spacing={2}>
                {shopItems.map((item) => (
                  <Grid item xs={6} key={item._id}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <CardMedia
                        component="img"
                        height="120"
                        image={`data:${item.contentType};base64,${item.data}`}
                        alt={item.itemName}
                        sx={{ objectFit: 'contain', padding: '5px' }}
                      />
                      <CardContent sx={{ flexGrow: 1, padding: '10px' }}>
                        <Typography variant="subtitle2" component="div" noWrap>
                          {item.itemName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          FC {(item.itemSellingPrice * rate)?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </Typography>
                        <Typography variant="body2" color="primary" fontWeight="bold">
                          $ {item.itemSellingPrice?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom>
                          Stock: {item.itemQuantity}
                        </Typography>
                        <Button
                          variant="contained"
                          size="small"
                          fullWidth
                          onClick={() => handleAddToPurchase(item)}
                          sx={{ marginTop: '5px' }}
                        >
                          Add
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box display="flex" justifyContent="center" mt={2}>
              <Pagination
                count={shopTotalPages}
                page={shopPage}
                onChange={handleShopPageChange}
                size="small"
                color="primary"
              />
            </Box>
          </>
        )}
      </SideDrawer>
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
              <h2 style={{ color: 'red' }}>Saving Failed</h2>
              <p><span className='txt1' style={{ color: 'red' }}>Note:</span><span className="txt2">Project name can only be created once for purchase</span></p>
              <button className='btnCustomer' onClick={handleCloseError}>
                Try Again
              </button>
            </div>
          )}
        </Box>
      </Modal>
      <Modal
        open={openAutocomplete2}
        onClose={handleCloseOpenAutocomplete2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style2, width: 800 }}>
          <BlackTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseOpenAutocomplete2} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </BlackTooltip>
          <br />
          <div style={{ height: '600px', padding: '20px', overflow: 'hidden', overflowY: 'scroll' }}>
            <ItemFormView2 onCreateOption={handleCreateItem} onClose={handleCloseOpenAutocomplete2} />
          </div>
        </Box>
      </Modal>
      <Modal
        open={openItemUpdate}
        onClose={handleCloseItemUpdate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style2, width: 800 }}>
          <BlackTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseItemUpdate} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </BlackTooltip>
          <br />
          <div style={{ height: '600px', padding: '20px', overflow: 'hidden', overflowY: 'scroll' }}>
            <ItemUpdateView2 onClose={handleCloseItemUpdate} id={idItem} />
          </div>
        </Box>
      </Modal>
    </div >
  )
}

export default PurchasesFormView
